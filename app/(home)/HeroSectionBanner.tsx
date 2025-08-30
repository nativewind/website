import { BookOpen, BookText } from "lucide-react";
import Link from "next/link";

export default function HeroSectionBanner() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 font-bold top-12 lg:top-10 z-35 text-sm max-w-fd-container mx-auto w-full backdrop-blur bg-white/69 dark:bg-black/50">
      {/* [mask-image:linear-gradient(to_right,transparent,red_1rem,red_calc(100%-1rem),transparent)] */}
      <div className="pb-4 pt-6 md:pb-2 md:pt-4 px-4 w-full flex flex-wrap gap-2 lg:justify-center items-center border-b dark:border-fd-primary/30 border-fd-primary border-dashed">
        <BannerLights />
        Pre-release v5 of Nativewind is now available!
        <div className="flex flex-wrap gap-2 items-center">
          <Link
            href="/v5/"
            className="relative w-fit flex flex-row items-center gap-2 bg-black dark:bg-amber-950 text-white dark:text-amber-500 rounded-md px-1.5 py-1 text-start [overflow-wrap:anywhere] [&_svg]:size-4 [&_svg]:shrink-0 hover:underline duration-300"
            style={{ paddingInlineStart: "calc(var(--spacing) * 2)" }}
          >
            <BookOpen />
            v5 docs
          </Link>
        </div>
      </div>
    </div>
  );
}

function BannerLights() {
  return (
    <>
      <div className="absolute top-0 py-1 left-0 w-full -z-10 backdrop-blur h-full bg-cyan-300 dark:bg-fd-primary [mask-image:radial-gradient(ellipse_100%_200%_at_top,red,transparent)] opacity-30" />
      <div className="absolute top-0 py-1 left-0 w-full -z-10 h-full max-lg:hidden bg-emerald-300/50 [mask-image:radial-gradient(ellipse_30%_50%_at_15%_0%,red,transparent_70%)]" />
      <div className="absolute top-0 py-1 left-0 w-full -z-10 h-full max-lg:hidden bg-cyan-300/50 [mask-image:radial-gradient(ellipse_30%_50%_at_33%_0%,red,transparent_70%)]" />
      <div className="absolute top-0 py-1 left-0 w-full -z-10 h-full max-lg:hidden bg-cyan-500 dark:bg-fd-primary [mask-image:radial-gradient(ellipse_30%_50%_at_top,red,transparent_70%)]" />
      <div className="absolute top-0 py-1 left-0 w-full -z-10 h-full max-lg:hidden bg-cyan-500 dark:bg-fd-primary [mask-image:radial-gradient(ellipse_30%_50%_at_66%_0%,red,transparent_70%)]" />
      <div className="absolute top-0 py-1 left-0 w-full -z-10 h-full max-lg:hidden bg-indigo-300/50 [mask-image:radial-gradient(ellipse_30%_50%_at_75%_0%,red,transparent_70%)]" />
      <div className="absolute top-0 py-1 left-0 w-full -z-10 h-full lg:hidden bg-cyan-300/50 [mask-image:radial-gradient(ellipse_60%_25%_at_0%_0%,red,transparent_70%)]" />
      <div className="absolute top-0 py-1 left-0 w-full -z-10 h-full lg:hidden bg-fd-primary [mask-image:radial-gradient(ellipse_60%_25%_at_top,red,transparent_70%)]" />
      <div className="absolute top-0 py-1 left-0 w-full -z-10 h-full lg:hidden bg-indigo-300/50 [mask-image:radial-gradient(ellipse_60%_25%_at_100%_0%,red,transparent_70%)]" />
    </>
  );
}
