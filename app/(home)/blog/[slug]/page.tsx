import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { notFound } from 'next/navigation';
import { blog } from '@/lib/source';

import { source } from '@/lib/source';
import { ComponentProps, FC } from 'react';
import { Callout } from '@/components/callout';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { ArrowLeft } from 'lucide-react';
import FooterSection from '../../FooterSection';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const MDX = page.data.body;

  return (
    <>
      <div className="w-full mx-auto rounded-xl border pt-16 max-w-fd-container box-content flex flex-col items-start relative">

        <div className="left-1/2 -translate-x-1/2 bottom-0 w-full max-w-fd-container absolute overflow-clip h-full pointer-events-none">
          <div className="bg-grid-dots rounded-full w-[50rem] h-[50rem] absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(red,transparent_80%)] opacity-50"/>
          <div className="absolute bottom-0 right-0 translate-x-1/2 h-[64rem] w-screen bg-grid-lines-y-lg translate-y-1/2 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] -skew-20" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)]" />
        </div>

        <div className="flex flex-col gap-2 px-4">
          <p className="text-xs text-fd-muted-foreground/50 font-mono">{new Date(page.data.date).toDateString()}</p>
          <h2 className="text-2xl truncate group-hover:text-fd-primary duration-300">{page.data.title}</h2>
          {page.data.tags && (
            <div className="flex gap-2 -ml-2">
              {page.data.tags.map((tag: string) => (
                <span key={tag} className="text-xs text-fd-muted-foreground/50 font-mono bg-fd-accent/40 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className="mb-4 line-clamp-3 text-fd-muted-foreground">{page.data.description}</p>
          {page.data.authors && (
            <div className="flex gap-6 mt-2">
              {page.data.authors.map((author: {
                name: string,
                title: string,
                url: string,
                image_url: string,
                socials: {
                  x: string,
                  github: string,
                },
              }) => (
                <Link href={`https://github.com/${author.socials.github}`} target="_blank" key={author.name} className="flex items-center gap-2 group/author">
                  <img src={author.image_url} alt={author.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold group-hover/author:decoration-fd-primary decoration-transparent underline-offset-2 underline">{author.name}</p>
                    <p className="text-xs text-fd-muted-foreground">{author.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-4 w-full items-end p-4">
          <Link href="/blog"
            className="relative group flex items-center gap-2 opacity-90 duration-300 cut-corners py-2 px-4 rounded-tr-md rounded-bl-md bg-black text-black sm:text-white dark:hover:text-black dark:bg-white/5 font-bold hover:opacity-100"
          >
            <div className="absolute -z-10 inset-0 bg-fd-primary sm:translate-y-full sm:-translate-x-full group-hover:translate-0 duration-300 rounded-md" />
            <ArrowLeft className="group-hover:rotate-180 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] w-5 h-5 duration-300 group-hover:translate-x-0.5 -translate-x-0.5" />
            Back
            <ArrowLeft className="w-5 h-5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] duration-300 group-hover:-translate-x-0.5 translate-x-0.5" />
          </Link>
          <InlineTOC className="flex-1 w-full prose [&>button]:!py-1.5" items={page.data.toc} />
        </div>
      </div>
      {/* <DocsPage toc={page.data.toc} full={page.data.full}
        tableOfContent={{
          style: 'clerk',
          single: false,
        }}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX components={{
            ...defaultMdxComponents as any,
            a: createRelativeLink(source, page),
            blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>,
            Tab, Tabs,
            Callout,
          }} />
        </DocsBody>
      </DocsPage> */}
      <article className="w-full mx-auto flex flex-col max-md:px-4 max-lg:px-8 py-8 max-w-fd-container">
        <div className="prose min-w-0">
          <MDX components={defaultMdxComponents} />
        </div>
      </article>

      <div className="relative">
        <div className="absolute max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-full pointer-events-none" />
        <FooterSection />
      </div>
    </>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}