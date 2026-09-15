import { source5 } from '@/lib/source';
import { getLLMText, isPublicDoc } from '@/lib/get-llm-text';

export const revalidate = false;

export async function GET() {
  const pages = source5
    .getPages()
    .filter((page) => isPublicDoc(page.file.path));
  const texts = await Promise.all(pages.map((page) => getLLMText(page, 'v5')));
  return new Response(texts.join('\n\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
