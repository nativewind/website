import { DocsLayout } from '@/components/notebook';
import type { ReactNode } from 'react';
import { blog } from '@/lib/source';
import { Wordmark } from '../assets';
import { RootToggle } from '@/components/layout/root-toggle';
import Link from 'next/link';
import { BookOpen, BookText, Heart, LayoutTemplate, UserRound } from 'lucide-react';


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      themeSwitch={{
        mode: 'light-dark',
      }}
      tree={blog.pageTree}
      // links: [],
      githubUrl='https://github.com/nativewind/nativewind'
      // NOTE: for /layouts/notebook option https://fumadocs.vercel.app/docs/ui/layouts/docs#notebook
      nav={{
        // transparentMode: 'top',
        title: (
          <Wordmark className="h-6 group-hover:text-fd-primary duration-300" />
        ),
        afterTitle: (
          <RootToggle
            options={[
          
              {
                title: 'v4',
                url: '/docs',
              },
              {
                title: 'v2',
                url: 'https://v2.nativewind.dev/',
              },
            ]}
          />
        ),
        mode: 'top',
      }}
      // TODO: remove, probably won't be used...
      // tabMode: 'navbar',
      sidebar={{
        collapsible: true,
        // NOTE: for 2+ root:true metas https://fumadocs.vercel.app/docs/ui/layouts/docs#sidebar-tabs
        // TODO: remove, probably won't be used
        tabs: {
          transform(option, node) {
            const meta = blog.getNodeMeta(node);
            if (!meta) return option;

            const color = `var(--${meta.file.dirname}-color, var(--color-fd-foreground))`;

            return {
              ...option,
              icon: (
                <div
                  className="rounded-md p-1 shadow-lg ring-2 [&_svg]:size-5"
                  style={
                    {
                      color,
                      border: `1px solid color-mix(in oklab, ${color} 50%, transparent)`,
                      '--tw-ring-color': `color-mix(in oklab, ${color} 20%, transparent)`,
                    } as object
                  }
                >
                  {node.icon}
                </div>
              ),
            };
          },
        },
        // NOTE: stays pinned when scrolling the sidebar
        banner: (
          <div className="flex flex-col gap-4 pt-2 lg:hidden">
            {/* <div className="flex flex-col pt-2 gap-2 w-full rounded-xl bg-gradient-to-b from-fd-primary/20 to-cyan-300/50 backdrop-blur p-4">
              <h1 className="text-xl font-bold mt-1">Nativewind v5 <i className="opacity-50">beta</i></h1>
              <p className="text-sm text-fd-foreground/60">
                Check out the new features and improvements in the latest version of Nativewind.
              </p>
              <Link
                href="/docs/overview"
                className="relative flex bg-white w-fit mt-1 text-black flex-row items-center gap-2 rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
                style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }}
              >
                <BookOpen />
                Read more
              </Link>
            </div> */}
            <Link href="/blog" className="text-sm flex flex-row items-center gap-2 rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 bg-fd-primary/10 text-fd-primary" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
              <BookOpen />
              Blog
            </Link>
          </div>
        ),
      }}
    >
      <div className="absolute top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 -translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/10 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] pointer-events-none" />
      <div className="fixed top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 -translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] pointer-events-none" />
      <div className="absolute top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 h-[64rem] w-[64rem] bg-grid-lines-xl dark:opacity-80 -translate-y-1/2 max-md:hidden [--mask:radial-gradient(circle_at_center_top,red,transparent)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] -skew-20 pointer-events-none"/>
      {children}
    </DocsLayout>
  );
}
