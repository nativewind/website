import { getLLMText, isPublicDoc } from '@/lib/get-llm-text';
import { source5 } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params;
  const page = source5.getPage(slug);
  if (!page || !isPublicDoc(page.file.path)) notFound();
  return new Response(await getLLMText(page, 'v5'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}

export function generateStaticParams() {
  return source5
    .getPages()
    .filter((page) => isPublicDoc(page.file.path))
    .map((page) => ({ slug: page.slugs }));
}
