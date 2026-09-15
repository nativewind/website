import { join } from 'node:path';
import { source, source5 } from '@/lib/source';
import type { InferPageType } from 'fumadocs-core/source';
import { exportMarkdown, isPublicDoc } from './llm-markdown';

export { isPublicDoc } from './llm-markdown';

export async function getLLMText(
  page: InferPageType<typeof source>,
  version: 'docs' | 'v5' = 'docs',
) {
  const pages = (version === 'docs' ? source : source5).getPages();
  const body = await exportMarkdown({
    root: join(process.cwd(), 'content', version),
    file: page.file.path,
    url: page.url,
    version,
    pageUrls: new Map(
      pages
        .filter((p) => isPublicDoc(p.file.path))
        .map((p) => [p.file.path, p.url]),
    ),
  });
  return `# ${page.data.title} (https://www.nativewind.dev${page.url})\n\n${page.data.description ? `${page.data.description}\n\n` : ''}${body || 'This documentation page has no guidance yet. Refer to the installation guide and documented APIs rather than inferring support.'}`;
}
