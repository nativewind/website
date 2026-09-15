import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { readdir, mkdtemp, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { exportMarkdown, isPublicDoc } from '../lib/llm-markdown';
import { installCommands } from '../lib/doc-tables';
import { getLLMIndex } from '../lib/llm-index';

const render = (version: 'docs' | 'v5', file: string) =>
  exportMarkdown({
    root: join(process.cwd(), 'content', version),
    file,
    version,
    url: `/${version}/${file.replace(/(?:\/index)?\.mdx$/, '')}`,
  });

test('all public pages export without unhandled MDX', async () => {
  for (const version of ['docs', 'v5'] as const) {
    const files = (
      await readdir(`content/${version}`, { recursive: true })
    ).filter((file) => /\.mdx?$/.test(file) && isPublicDoc(file));
    for (const file of files) {
      try {
        assert.equal(typeof (await render(version, file)), 'string');
      } catch (error) {
        throw new Error(`${version}/${file}: ${String(error)}`, {
          cause: error,
        });
      }
    }
  }
});

test('installation exports expand partials and every package manager', async () => {
  for (const version of ['docs', 'v5'] as const) {
    const markdown = await render(
      version,
      'getting-started/installation/index.mdx',
    );
    for (const { command } of installCommands({
      version,
      expo: false,
      exact: version === 'v5',
      deps:
        version === 'v5'
          ? ['nativewind@5.0.0-rc.0', 'react-native-css@3.1.0-rc.0']
          : [
              'nativewind@4.2.7',
              'react-native-reanimated',
              'react-native-safe-area-context',
            ],
    }))
      assert.ok(markdown.includes(command), command);
    assert.doesNotMatch(
      markdown,
      /<include>|<Install|props\.deps|import Install/,
    );
    if (version === 'v5') {
      assert.match(markdown, /tailwindcss\/theme.css/);
      assert.match(markdown, /react-native-worklets/);
      assert.match(markdown, /nativewind-env.d.ts/);
      assert.match(markdown, /## Try it out!\n\nCreate a simple component/);
      assert.match(markdown, /```tsx title="App.tsx"\nimport/);
    }
  }
});

test('native compatibility limitations and v4 Tailwind links survive export', async () => {
  assert.match(
    await render('v5', 'tailwind/layout/overflow.mdx'),
    /\| `overflow-clip`\s+\| Not supported on native/,
  );
  assert.match(
    await render('docs', 'tailwind/layout/isolation.mdx'),
    /https:\/\/v3.tailwindcss.com\/docs\/isolation/,
  );
  assert.match(
    await render('v5', 'guides/migrate-from-v4.mdx'),
    /npx skills add/,
  );
});

test('source changes propagate, links resolve and fenced imports remain intact', async () => {
  const root = await mkdtemp(join(tmpdir(), 'nw-llm-'));
  try {
    await writeFile(
      join(root, 'index.mdx'),
      '<!-- page comment -->\n\nimport Partial from "./_partial.mdx";\n\n<Partial />\n\n```tsx\nimport { styled } from "nativewind";\n```',
    );
    await writeFile(
      join(root, '_partial.mdx'),
      '[Guide](./guide.mdx#setup)\n\nInitial instructions',
    );
    const options = {
      root,
      file: 'index.mdx',
      url: '/v5',
      version: 'v5' as const,
      pageUrls: new Map([['guide.mdx', '/v5/guide']]),
    };
    const first = await exportMarkdown(options);
    assert.match(first, /https:\/\/www.nativewind.dev\/v5\/guide#setup/);
    assert.match(first, /import \{ styled \} from "nativewind";/);
    assert.doesNotMatch(first, /import Partial/);
    await writeFile(join(root, '_partial.mdx'), 'Updated instructions');
    assert.match(await exportMarkdown(options), /Updated instructions/);
    await writeFile(
      join(root, '_partial.mdx'),
      '<include>./index.mdx</include>',
    );
    await assert.rejects(exportMarkdown(options), /Circular/);
    await writeFile(
      join(root, '_partial.mdx'),
      '<include>../escape.mdx</include>',
    );
    await assert.rejects(exportMarkdown(options), /outside content root/);
    await writeFile(join(root, '_partial.mdx'), '{process.exit()}');
    await assert.rejects(exportMarkdown(options), /Unsupported MDX expression/);
    await writeFile(join(root, '_partial.mdx'), '<Unknown />');
    await assert.rejects(exportMarkdown(options), /Unhandled MDX component/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('the index includes new sections, uses source descriptions and hides helpers', () => {
  const pages = [
    {
      file: { path: 'index.mdx' },
      slugs: [],
      url: '/v5',
      data: { title: 'Overview', description: 'Current release context' },
    },
    {
      file: { path: 'new-section/page.mdx' },
      slugs: ['new-section', 'page'],
      url: '/v5/new-section/page',
      data: { title: 'New guide' },
    },
    {
      file: { path: 'guides/_helper.mdx' },
      slugs: ['guides', '_helper'],
      url: '/v5/guides/_helper',
      data: { title: 'Private partial' },
    },
  ];
  const index = getLLMIndex(pages, 'v5');
  assert.match(index, /Current release context/);
  assert.match(index, /https:\/\/www.nativewind.dev\/v5.mdx/);
  assert.match(
    index,
    /https:\/\/www.nativewind.dev\/v5\/new-section\/page.mdx/,
  );
  assert.doesNotMatch(index, /Private partial|_helper/);
});
