import { source5 } from '@/lib/source';

export const revalidate = false;

const BASE_URL = 'https://nativewind.dev';

interface Section {
  title: string;
  pages: { title: string; url: string; description?: string }[];
}

export async function GET() {
  const pages = source5.getPages();

  const sectionMap: Record<string, Section> = {};
  const sectionOrder = [
    { prefix: '', title: 'Overview' },
    { prefix: 'getting-started', title: 'Getting Started' },
    { prefix: 'guides', title: 'Guides' },
    { prefix: 'core-concepts', title: 'Core Concepts' },
    { prefix: 'customization', title: 'Customization' },
    { prefix: 'api', title: 'API' },
    { prefix: 'tailwind', title: 'Tailwind CSS Utilities' },
  ];

  for (const section of sectionOrder) {
    sectionMap[section.prefix] = { title: section.title, pages: [] };
  }

  for (const page of pages) {
    const slugs = page.slugs;
    const firstSegment = slugs[0] ?? '';

    let sectionKey: string;
    if (slugs.length === 0) {
      sectionKey = '';
    } else if (firstSegment in sectionMap) {
      sectionKey = firstSegment;
    } else {
      sectionKey = 'tailwind';
    }

    sectionMap[sectionKey]?.pages.push({
      title: page.data.title,
      url: `${BASE_URL}${page.url}`,
      description: page.data.description,
    });
  }

  const lines: string[] = [
    '# Nativewind v5',
    '',
    '> Nativewind v5 uses Tailwind CSS v4 as a scripting language to create a universal style system for React Native. Built on top of react-native-css, it compiles Tailwind CSS styles into native StyleSheet objects at build time while providing an efficient runtime for conditional styles like hover, focus, media queries, and container queries.',
    '',
  ];

  for (const section of sectionOrder) {
    const data = sectionMap[section.prefix];
    if (!data || data.pages.length === 0) continue;

    lines.push(`## ${data.title}`, '');
    for (const page of data.pages) {
      const desc = page.description ? `: ${page.description}` : '';
      lines.push(`- [${page.title}](${page.url})${desc}`);
    }
    lines.push('');
  }

  lines.push(
    '## Optional',
    '',
    `- [Full documentation](${BASE_URL}/v5/llms-full.txt): Complete Nativewind v5 documentation in a single file for LLM consumption`,
    '',
  );

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
