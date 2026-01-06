import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from 'fumadocs-ui/page';

import { notFound } from 'next/navigation';
import type { ComponentProps, FC } from 'react';
import defaultMdxComponents from 'fumadocs-ui/mdx';

import { Callout } from '@/components/callout';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { createRelativeLink } from 'fumadocs-ui/mdx';
// import FooterSection from '@/app/(home)/FooterSection';
import { EditButton } from '@/components/edit-button';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  
  // Generate the file path for the edit button
  // Use the page's file information if available, otherwise construct from slug
  let filePath: string;
  if (page.file?.path) {
    filePath = `content/docs/${page.file.path}`;
  } else if (params.slug) {
    const slugPath = params.slug.join('/');
    // Default to adding /index.mdx for folder-based docs, but this might need adjustment
    filePath = `content/docs/${slugPath}/index.mdx`;
  } else {
    filePath = 'content/docs/index.mdx';
  }

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
    >
      {/* TODO: install DocsPage FumaDocsv15 and reorder contents */}
      {/* lastUpdate={page.data.lastModified && new Date(page.data.lastModified)} */}
      {page.data.lastModified && (
        <p className="text-sm text-fd-muted-foreground -mb-4">
          Last updated on {Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(page.data.lastModified))}
        </p>
      )}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
        </div>
        <EditButton filePath={filePath} version="v4" />
      </div>
      <DocsBody>
        <MDX components={{
          ...defaultMdxComponents as any,
          a: createRelativeLink(source, page),
          blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>,
          Tab, Tabs,
          Callout,
        }} />
      </DocsBody>
      {/* <FooterSection /> */}
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
