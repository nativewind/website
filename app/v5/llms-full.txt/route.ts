import { source5 } from '@/lib/source';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const revalidate = false;

function stripFrontmatter(content: string): string {
  const match = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return match ? content.slice(match[0].length).trim() : content.trim();
}

export async function GET() {
  const pages = source5.getPages();

  const texts = await Promise.all(
    pages.map(async (page) => {
      const filePath = join(process.cwd(), 'content/v5', page.file.path);
      const raw = await readFile(filePath, 'utf-8');
      const body = stripFrontmatter(raw);

      return `# ${page.data.title} (${page.url})\n\n${page.data.description ? `${page.data.description}\n\n` : ''}${body}`;
    }),
  );

  return new Response(texts.join('\n\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
