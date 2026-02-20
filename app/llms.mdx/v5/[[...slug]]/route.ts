import { source5 } from '@/lib/source';
import { notFound } from 'next/navigation';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const revalidate = false;

function stripFrontmatter(content: string): string {
  const match = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return match ? content.slice(match[0].length).trim() : content.trim();
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params;
  const page = source5.getPage(slug);
  if (!page) notFound();

  const filePath = join(process.cwd(), 'content/v5', page.file.path);
  const raw = await readFile(filePath, 'utf-8');
  const body = stripFrontmatter(raw);

  const text = `# ${page.data.title} (${page.url})\n\n${page.data.description ? `${page.data.description}\n\n` : ''}${body}`;

  return new Response(text, {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
}

export function generateStaticParams() {
  return source5.generateParams();
}
