import { DocsLayout } from '@/components/notebook';
import { source5 } from '@/lib/source';
import { Wordmark } from '../assets';
import { RootToggle } from '@/components/layout/root-toggle';
import { BookOpen, BookText, Briefcase } from 'lucide-react';
import type { ReactNode } from 'react';
import Link from 'next/link';


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      themeSwitch={{
        mode: 'light-dark',
      }}
      tree={source5.pageTree}
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
                title: 'v5',
                url: '/v5',
              },
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
      sidebar={{
        collapsible: true,
        // NOTE: stays pinned when scrolling the sidebar
        banner: (
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex flex-col pt-2 gap-2 w-full rounded-xl bg-gradient-to-b from-amber-500/10 to-amber-500/50 backdrop-blur p-4 border border-amber-500/50">
              <h1 className="text-xl font-bold mt-1">v5 <i className="opacity-50 font-serif">pre-release</i></h1>
              <p className="text-sm text-fd-foreground/60">
                This is a pre-release version of Nativewind. It is not intended for production use.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/blog/v5-migration-guide"
                  className="relative text-xs flex bg-fd-accent/50  w-fit mt-1 flex-row items-center gap-2 rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/70 text-fd-accent-foreground/80 hover:transition-none duration-300"
                  style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }}
                >
                  <BookText />
                  Migration Guide
                </Link>
                <Link
                  href="/docs/"
                  className="relative text-xs flex bg-white w-fit mt-1 text-black flex-row items-center gap-2 rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none duration-300"
                  style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }}
                >
                  <BookOpen />
                  v4
                </Link>
              </div>
            </div>
            <Link href="/v5" className="text-sm lg:hidden flex flex-row items-center gap-2 rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 bg-fd-primary/10 text-fd-primary" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
              <BookOpen />
              Docs
            </Link>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
