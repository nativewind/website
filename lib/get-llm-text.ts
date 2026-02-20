import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { source } from '@/lib/source';
import type { InferPageType } from 'fumadocs-core/source';

function stripFrontmatter(content: string): string {
  const match = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return match ? content.slice(match[0].length).trim() : content.trim();
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const filePath = join(process.cwd(), 'content/docs', page.file.path);
  const raw = await readFile(filePath, 'utf-8');
  const body = stripFrontmatter(raw);

  return `# ${page.data.title} (${page.url})

${page.data.description ? `${page.data.description}\n\n` : ''}${body}`;
}
