import { source5 } from '@/lib/source';
import { getLLMIndex } from '@/lib/llm-index';

export const revalidate = false;

export async function GET() {
  return new Response(getLLMIndex(source5.getPages(), 'v5'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
