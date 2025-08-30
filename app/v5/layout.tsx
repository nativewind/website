import { DocsLayout } from "@/components/notebook";
import { source5 } from "@/lib/source";
import { Wordmark } from "../assets";
import { RootToggle } from "@/components/layout/root-toggle";
import { BookOpen, BookText, Briefcase } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      themeSwitch={{
        mode: "light-dark",
      }}
      tree={source5.pageTree}
      githubUrl="https://github.com/nativewind/nativewind"
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
                title: "v5",
                url: "/v5",
              },
              {
                title: "v4",
                url: "/docs",
              },
              {
                title: "v2",
                url: "https://v2.nativewind.dev/",
              },
            ]}
          />
        ),
        mode: "top",
      }}
      sidebar={{
        collapsible: true,
        // NOTE: stays pinned when scrolling the sidebar
        banner: (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:mb-2 gap-2 w-screen md:w-[var(--fd-sidebar-width)] -mx-4 bg-gradient-to-b from-amber-800/10 dark:from-amber-500/10 to-amber-500/50 backdrop-blur p-4 border-b border-dashed border-amber-500/50">
              <div className="bg-grid-dots-small-light hidden dark:block opacity-50 w-full h-full absolute left-0 top-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_top_left,transparent_50%,red)]" />
              <div className="bg-grid-dots-small-dark dark:hidden opacity-50 w-full h-full absolute left-0 top-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_top_left,transparent_50%,red)]" />

              <h1 className="text-lg flex items-center gap-2 font-bold">
                Nativewind v5
                <div className="opacity-50 font-mono text-sm">pre-release</div>
              </h1>
              <p className="text-sm text-fd-foreground/60">
                This is a pre-release version of Nativewind. It is not intended
                for production use.
              </p>
              <div className="flex justify-between flex-wrap gap-2">
                <Link
                  href="/docs/"
                  className="relative w-fit flex flex-row items-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 hover:opacity-60 duration-300"
                  style={{ paddingInlineStart: "calc(var(--spacing) * 2)" }}
                >
                  <BookOpen />
                  v4
                </Link>
              </div>
            </div>
            <Link
              href="/v5"
              className="text-sm mt-2 lg:hidden flex flex-row items-center gap-2 rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 bg-amber-500/10 text-amber-600 dark:text-amber-500"
              style={{ paddingInlineStart: "calc(var(--spacing) * 2)" }}
            >
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
