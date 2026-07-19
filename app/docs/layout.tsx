import { DocsLayout } from "@/components/notebook";
import { source } from "@/lib/source";
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
      tree={source.pageTree}
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
            <div className="flex relative flex-col lg:mb-2 gap-2 w-screen md:w-[var(--fd-sidebar-width)] -mx-4 bg-gradient-to-b from-fd-primary/20 to-cyan-300/50 backdrop-blur p-4 border-b border-dashed border-cyan-300/30">
              <div className="bg-grid-dots-small-light hidden dark:block opacity-50 w-full h-full absolute left-0 top-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_top_left,transparent_50%,red)]" />
              <div className="bg-grid-dots-small-dark dark:hidden opacity-50 w-full h-full absolute left-0 top-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_top_left,transparent_50%,red)]" />

              <h1 className="font-bold text-lg flex gap-2 items-center">
                Nativewind v5
                <div className="opacity-50 font-mono text-sm">pre-release</div>
              </h1>
              <p className="text-sm text-fd-foreground/60">
                Check out the new features and improvements in the preview
                version of Nativewind.
              </p>
              <div className="flex justify-between flex-wrap gap-2">
                <Link
                  href="/v5/"
                  className="relative w-fit flex flex-row items-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 hover:opacity-60 duration-300"
                  style={{ paddingInlineStart: "calc(var(--spacing) * 2)" }}
                >
                  <BookOpen />
                  View v5 docs
                </Link>
              </div>
            </div>
            <Link
              href="/docs"
              className="text-sm mt-2 lg:hidden flex flex-row items-center gap-2 rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 bg-fd-primary/10 text-fd-primary"
              style={{ paddingInlineStart: "calc(var(--spacing) * 2)" }}
            >
              <BookOpen />
              Docs
            </Link>
          </div>
        ),
      }}
    >
      {/* background decoration */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none overflow-x-clip">
        <div className="absolute top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 -translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/10 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] pointer-events-none" />
        <div className="fixed top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 -translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] pointer-events-none" />
        <div className="absolute top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 h-[64rem] w-[64rem] bg-grid-lines-xl dark:opacity-80 -translate-y-1/2 max-md:hidden [--mask:radial-gradient(circle_at_center_top,red,transparent)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] -skew-20 pointer-events-none" />
      </div>
      {children}
    </DocsLayout>
  );
}
