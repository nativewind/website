import { DocsLayout } from '@/components/notebook';
import { source } from '@/lib/source';
import { Wordmark } from '../assets';
import { RootToggle } from '@/components/layout/root-toggle';
import { BookOpen, Briefcase } from 'lucide-react';
import type { ReactNode } from 'react';
import Link from 'next/link';


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      themeSwitch={{
        mode: 'light-dark',
      }}
      tree={source.pageTree}
      links={[
        {
          icon: <Briefcase />,
          text: 'Hire Us',
          url: '/hire-us',
          active: 'url',
        },
      ]}
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
      sidebar={{
        collapsible: true,
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
            <Link href="/docs" className="text-sm flex flex-row items-center gap-2 rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 bg-fd-primary/10 text-fd-primary" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
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
