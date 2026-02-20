import { source5 } from '@/lib/source';
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
import FooterSection from '@/app/(home)/FooterSection';
import { EditButton } from '@/components/edit-button';
import { CopyMarkdownButton } from '@/components/copy-markdown-button';
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
    <>
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none overflow-x-clip">
        <div className="absolute top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 -translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-amber-500/10 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] pointer-events-none" />
        <div className="fixed top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 -translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-amber-500/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] pointer-events-none" />
        <div className="absolute top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 h-[64rem] w-[64rem] bg-grid-lines-xl dark:opacity-80 -translate-y-1/2 max-md:hidden [--mask:radial-gradient(circle_at_center_top,red,transparent)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] -skew-20 pointer-events-none" />
      </div>
      
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
          <div className="flex items-center gap-2">
            <CopyMarkdownButton markdownUrl={`${page.url}.mdx`} />
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
    </>
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
