import { isPublicDoc } from './llm-markdown';

type Page = {
  file: { path: string };
  slugs: string[];
  url: string;
  data: { title: string; description?: string };
};

export function getLLMIndex(pages: Page[], version: 'docs' | 'v5') {
  const publicPages = pages.filter((page) => isPublicDoc(page.file.path));
  const overview = publicPages.find((page) => page.slugs.length === 0);
  const sections = [
    ['', 'Overview'],
    ['getting-started', 'Getting Started'],
    ['guides', 'Guides'],
    ['core-concepts', 'Core Concepts'],
    ['customization', 'Customization'],
    ['api', 'API'],
    ['tailwind', 'Tailwind CSS Utilities'],
  ];
  const knownSections = new Set(sections.map(([prefix]) => prefix));
  const otherSections = [
    ...new Set(publicPages.map((page) => page.slugs[0] ?? '')),
  ].filter((prefix) => !knownSections.has(prefix));
  for (const prefix of otherSections) sections.push([prefix, prefix]);
  const lines = [
    `# Nativewind ${version === 'docs' ? 'v4' : 'v5 RC'}`,
    '',
    overview?.data.description ?? '',
    '',
    'Use the installation and migration pages for current package versions, setup and verification requirements. Page links below return Markdown generated from the same source as the website.',
    '',
  ];
  for (const [prefix, title] of sections) {
    const entries = publicPages.filter(
      (page) => (page.slugs[0] ?? '') === prefix,
    );
    if (!entries.length) continue;
    lines.push(`## ${title}`, '');
    for (const page of entries)
      lines.push(
        `- [${page.data.title}](https://www.nativewind.dev${page.url}.mdx)${page.data.description ? `: ${page.data.description}` : ''}`,
      );
    lines.push('');
  }
  lines.push(
    '## Optional',
    '',
    `- [Full documentation](https://www.nativewind.dev${version === 'v5' ? '/v5' : ''}/llms-full.txt): All public pages in one file`,
    '',
  );
  return lines.join('\n');
}
