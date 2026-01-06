import { source5 } from '@/lib/source';
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
import { CopyInstallationButton } from '@/components/copy-installation-button';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source5.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  
  // Generate the file path for the edit button
  // Use the page's file information if available, otherwise construct from slug
  let filePath: string;
  if (page.file?.path) {
    filePath = `content/v5/${page.file.path}`;
  } else if (params.slug) {
    const slugPath = params.slug.join('/');
    // Default to adding /index.mdx for folder-based docs, but this might need adjustment
    filePath = `content/v5/${slugPath}/index.mdx`;
  } else {
    filePath = 'content/v5/index.mdx';
  }

  // Check if this is the installation page
  const isInstallationPage = params.slug?.join('/') === 'getting-started/installation';

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
    >
      {/* // TODO: install DocsPage FumaDocsv15 and reorder contents */}
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
        <div className="flex items-center gap-2">
          <EditButton filePath={filePath} version="v5" />
          {isInstallationPage && <CopyInstallationButton />}
        </div>
      </div>
      <DocsBody>
        <MDX components={{
          ...defaultMdxComponents as any,
          a: createRelativeLink(source5, page),
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
  return source5.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source5.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
