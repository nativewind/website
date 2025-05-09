import { DocsLayout } from '@/components/notebook';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
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
      tree={source.pageTree}
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
            const meta = source.getNodeMeta(node);
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
        // banner: (
        //   <div className="flex flex-col pt-2 gap-2 w-full rounded-xl bg-gradient-to-b from-fd-primary/20 to-cyan-300/50 backdrop-blur p-4">
        //     <h1 className="text-xl font-bold mt-1">NativeWind v5 <i className="opacity-50">beta</i></h1>
        //     <p className="text-sm text-fd-foreground/60">
        //       Check out the new features and improvements in the latest version of NativeWind.
        //     </p>
        //     <Link
        //       href="/docs/overview"
        //       className="relative flex bg-white w-fit mt-1 text-black flex-row items-center gap-2 rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
        //       style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }}
        //     >
        //       <BookOpen />
        //       Read more
        //     </Link>
        //   </div>
        // )
        // NOTE: stays pinned when scrolling the sidebar
        // banner: (
        //   <div className="flex flex-col pt-2">
        //     <Link href="/docs" className="relative flex flex-row items-center gap-2 rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 bg-fd-primary/10 text-fd-primary" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
        //       <BookOpen />
        //       Docs
        //     </Link>
        //     <Link href="/blog" className="relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
        //       <BookText />
        //       Blog
        //     </Link>
        //     <Link href="/community" className="relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
        //       <UserRound />
        //       Community
        //     </Link>
        //     <Link href="/showcase" className="relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
        //       <LayoutTemplate />
        //       Showcase
        //     </Link>
        //     <Link href="/sporsor" className="relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
        //       <Heart />
        //       Sponsor
        //     </Link>
        //     {/* <RootToggle
        //       options={[
            
        //         {
        //           title: 'v4',
        //           url: '/docs',
        //         },
        //         {
        //           title: 'v2',
        //           url: 'https://v2.nativewind.dev/',
        //         },
        //       ]}
        //     /> */}
        //   </div>
        // ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
