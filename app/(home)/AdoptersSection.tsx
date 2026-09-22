import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Folo from "../assets/adopters/folo.svg";
import GluestackDark from "../assets/adopters/gluestack-dark.svg";
import GluestackLight from "../assets/adopters/gluestack-light.svg";
import KarakeepDark from "../assets/adopters/karakeep-dark.svg";
import KarakeepLight from "../assets/adopters/karakeep-light.svg";
import Linkwarden from "../assets/adopters/linkwarden.png";
import OnyxDark from "../assets/adopters/onyx-dark.png";
import OnyxLight from "../assets/adopters/onyx-light.png";
import PolarDark from "../assets/adopters/polar-dark.svg";
import PolarLight from "../assets/adopters/polar-light.svg";
import PostHog from "../assets/adopters/posthog.svg";
import ReusablesDark from "../assets/adopters/react-native-reusables-dark.svg";
import ReusablesLight from "../assets/adopters/react-native-reusables-light.svg";
import Streamyfin from "../assets/adopters/streamyfin.png";
import adopters from "./adopters.json";

// Use the source colors and supplied theme variants. Do not recolor project marks.
// See app/assets/adopters/provenance.json for their sources and transformations.
const marks: Record<string, ReactNode> = {
  posthog: (
    <span className="flex h-8 w-12 items-center justify-center rounded-md bg-white px-1.5">
      <PostHog className="h-auto w-full" />
    </span>
  ),
  folo: <Folo className="size-8" />,
  onyx: (
    <>
      <Image src={OnyxLight} alt="" className="size-12 dark:hidden" sizes="48px" />
      <Image src={OnyxDark} alt="" className="hidden size-12 dark:block" sizes="48px" />
    </>
  ),
  karakeep: (
    <>
      <KarakeepLight className="size-8 dark:hidden" />
      <KarakeepDark className="hidden size-8 dark:block" />
    </>
  ),
  linkwarden: <Image src={Linkwarden} alt="" className="size-8" sizes="32px" />,
  polar: (
    <>
      <PolarLight className="size-8 dark:hidden" />
      <PolarDark className="hidden size-8 dark:block" />
    </>
  ),
  "react-native-reusables": (
    <>
      <ReusablesLight className="size-8 dark:hidden" />
      <ReusablesDark className="hidden size-8 dark:block" />
    </>
  ),
  gluestack: (
    <>
      <GluestackLight className="size-9 dark:hidden" />
      <GluestackDark className="hidden size-9 dark:block" />
    </>
  ),
  streamyfin: <Image src={Streamyfin} alt="" className="size-9 rounded-lg" sizes="36px" />,
};

export default function AdoptersSection() {
  return (
    <section aria-labelledby="built-with-nativewind" className="relative border-t border-dashed">
      <div className="mx-auto w-full max-w-fd-container">
        <div className="flex flex-col gap-5 px-4 pb-7 pt-10 text-left sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-0">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-800 dark:text-cyan-300">
              The Nativewind ecosystem
            </p>
            <h2 id="built-with-nativewind" className="scroll-mt-24 text-2xl font-medium tracking-tight sm:text-3xl">
              Built with Nativewind
            </h2>
            <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-fd-muted-foreground">
              Powering open source apps and the tools developers build with.
            </p>
          </div>
          <a
            href="#showcase"
            className="flex w-fit items-center gap-1.5 rounded-sm text-sm text-fd-muted-foreground underline-offset-4 hover:text-fd-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600 dark:focus-visible:outline-cyan-300"
          >
            Explore the showcase
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <ul className="grid grid-cols-2 border-t border-dashed text-left lg:grid-cols-5">
          {adopters.map((adopter) => (
            <li
              key={adopter.id}
              className="min-w-0 border-b border-r border-dashed even:border-r-0 lg:even:border-r lg:[&:nth-child(5n)]:border-r-0"
            >
              <a
                href={adopter.url}
                className="group flex min-h-28 h-full flex-col sm:flex-row items-center justify-center gap-3 px-4 py-5 transition-colors hover:bg-cyan-50/60 focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan-600 dark:hover:bg-cyan-950/20 dark:focus-visible:outline-cyan-300 motion-reduce:transition-none"
              >
                {marks[adopter.id] && (
                  <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center">
                    {marks[adopter.id]}
                  </span>
                )}
                <span className="min-w-0 max-w-28 text-center sm:text-left text-sm font-medium leading-snug tracking-tight underline-offset-4 group-hover:underline">
                  {adopter.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
