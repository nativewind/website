import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from 'fumadocs-ui/page';

import { notFound } from 'next/navigation';
import { ComponentProps, FC } from 'react';
import defaultMdxComponents from 'fumadocs-ui/mdx';

import { Callout } from '@/components/callout';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { createRelativeLink } from 'fumadocs-ui/mdx';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      {page.data.lastModified && (
        <p className="text-sm text-muted-foreground mb-4 italic">
          Last updated on {formatFullDateWithOrdinal(page.data.lastModified)}
        </p>
      )}
      <DocsBody>
        <MDX components={{
          ...defaultMdxComponents as any,
          a: createRelativeLink(source, page),
          blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>,
          Tab, Tabs,
          Callout,
         }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

function formatFullDateWithOrdinal(dateInput: string | number | Date) {
  const date = new Date(dateInput);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const ordinal = (n: number) => {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  return `${month} ${day}${ordinal(day)}, ${year}`;
}
