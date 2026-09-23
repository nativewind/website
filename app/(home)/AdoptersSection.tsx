import { ArrowUpRight, CodeXml } from "lucide-react";

import SectionTitle from "./SectionTitle";

type Adopter = {
  name: string;
  repository: string;
  repositoryUrl: string;
  manifestUrl: string;
  usage: string;
  dependency: string;
  avatarUrl: string;
};

// Source: Nativewind brand research/featured-adopters.json at
// brand commit 8fedabcab4bb480b40a0d84002c12e32e03e6e23.
// These entries were verified against public package manifests on 2026-09-21.
const adopters: Adopter[] = [
  {
    name: "PostHog",
    repository: "PostHog/posthog",
    repositoryUrl: "https://github.com/PostHog/posthog",
    manifestUrl:
      "https://github.com/PostHog/posthog/blob/master/products/desktop/apps/mobile/package.json",
    usage: "Mobile app",
    dependency: "^4.2.1",
    avatarUrl: "https://github.com/PostHog.png?size=160",
  },
  {
    name: "Folo",
    repository: "RSSNext/Folo",
    repositoryUrl: "https://github.com/RSSNext/Folo",
    manifestUrl:
      "https://github.com/RSSNext/Folo/blob/dev/apps/mobile/package.json",
    usage: "Mobile app",
    dependency: "4.2.6",
    avatarUrl: "https://github.com/RSSNext.png?size=160",
  },
  {
    name: "Onyx",
    repository: "onyx-dot-app/onyx",
    repositoryUrl: "https://github.com/onyx-dot-app/onyx",
    manifestUrl:
      "https://github.com/onyx-dot-app/onyx/blob/main/mobile/package.json",
    usage: "Mobile app",
    dependency: "^4.2.6",
    avatarUrl: "https://github.com/onyx-dot-app.png?size=160",
  },
  {
    name: "Karakeep",
    repository: "karakeep-app/karakeep",
    repositoryUrl: "https://github.com/karakeep-app/karakeep",
    manifestUrl:
      "https://github.com/karakeep-app/karakeep/blob/main/apps/mobile/package.json",
    usage: "Mobile app",
    dependency: "^4.2.6",
    avatarUrl: "https://github.com/karakeep-app.png?size=160",
  },
  {
    name: "Suna",
    repository: "kortix-ai/suna",
    repositoryUrl: "https://github.com/kortix-ai/suna",
    manifestUrl:
      "https://github.com/kortix-ai/suna/blob/main/apps/mobile/package.json",
    usage: "Mobile app",
    dependency: "^4.2.1",
    avatarUrl: "https://github.com/kortix-ai.png?size=160",
  },
  {
    name: "Linkwarden",
    repository: "linkwarden/linkwarden",
    repositoryUrl: "https://github.com/linkwarden/linkwarden",
    manifestUrl:
      "https://github.com/linkwarden/linkwarden/blob/main/apps/mobile/package.json",
    usage: "Mobile app",
    dependency: "^4.2.1",
    avatarUrl: "https://github.com/linkwarden.png?size=160",
  },
  {
    name: "Polar",
    repository: "polarsource/polar",
    repositoryUrl: "https://github.com/polarsource/polar",
    manifestUrl:
      "https://github.com/polarsource/polar/blob/main/clients/apps/app/package.json",
    usage: "App",
    dependency: "^4.2.1",
    avatarUrl: "https://github.com/polarsource.png?size=160",
  },
  {
    name: "React Native Reusables",
    repository: "founded-labs/react-native-reusables",
    repositoryUrl: "https://github.com/founded-labs/react-native-reusables",
    manifestUrl:
      "https://github.com/founded-labs/react-native-reusables/blob/main/packages/registry/package.json",
    usage: "Component registry",
    dependency: "^4.2.2",
    avatarUrl: "https://github.com/founded-labs.png?size=160",
  },
  {
    name: "gluestack UI",
    repository: "gluestack/gluestack-ui",
    repositoryUrl: "https://github.com/gluestack/gluestack-ui",
    manifestUrl:
      "https://github.com/gluestack/gluestack-ui/blob/main/packages/gluestack-ui/package.json",
    usage: "Component library",
    dependency: "^4.1.23",
    avatarUrl: "https://github.com/gluestack.png?size=160",
  },
  {
    name: "Streamyfin",
    repository: "streamyfin/streamyfin",
    repositoryUrl: "https://github.com/streamyfin/streamyfin",
    manifestUrl:
      "https://github.com/streamyfin/streamyfin/blob/develop/package.json",
    usage: "App",
    dependency: "^2.0.11",
    avatarUrl: "https://github.com/streamyfin.png?size=160",
  },
];

export default function AdoptersSection() {
  return (
    <>
      <SectionTitle
        id="showcase"
        level={2}
        title="Who is using Nativewind?"
      />

      <section
        aria-labelledby="showcase"
        className="relative mx-auto -mt-px w-full max-w-fd-container border-y border-dashed"
      >
        <div className="grid gap-4 px-4 py-6 text-left sm:grid-cols-[minmax(0,1fr)_minmax(16rem,0.8fr)] sm:items-end sm:px-6 sm:py-8">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-fd-primary">
              Built with Nativewind
            </p>
            <p className="mt-2 max-w-xl text-balance text-lg font-medium leading-snug sm:text-xl">
              Open source apps and libraries using Nativewind in their public
              codebases.
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-fd-muted-foreground sm:justify-self-end">
            Ten projects selected from verified public package manifests.
            Project links and dependency evidence are included below.
          </p>
        </div>

        <ul className="grid grid-cols-2 border-l border-t border-dashed lg:grid-cols-5">
          {adopters.map((adopter, index) => (
            <li
              key={adopter.repository}
              className="group relative flex min-w-0 flex-col border-b border-r border-dashed bg-fd-background"
            >
              <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-fd-muted/20 p-5">
                <div
                  aria-hidden="true"
                  className="bg-grid-dots-current absolute inset-0 text-fd-foreground/[0.07] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"
                />
                <span className="absolute left-3 top-3 font-mono text-[10px] tabular-nums text-fd-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div
                  aria-hidden="true"
                  className="absolute h-24 w-24 rounded-full border border-dashed border-fd-primary/25 bg-fd-primary/[0.04] transition-transform duration-300 motion-safe:group-hover:scale-110 motion-reduce:transition-none"
                />
                <div className="relative flex size-16 items-center justify-center rounded-2xl border border-fd-foreground/10 bg-fd-background p-1.5 shadow-sm sm:size-18">
                  <span
                    aria-hidden="true"
                    className="absolute font-mono text-sm font-semibold text-fd-primary"
                  >
                    {adopter.name.slice(0, 2).toUpperCase()}
                  </span>
                  <img
                    alt=""
                    aria-hidden="true"
                    className="relative size-full rounded-xl bg-fd-background object-cover"
                    decoding="async"
                    height="72"
                    loading="lazy"
                    src={adopter.avatarUrl}
                    width="72"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col border-t border-dashed p-3 sm:p-4">
                <a
                  href={adopter.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link -m-1 inline-flex w-fit max-w-full items-start gap-1 rounded-sm p-1 font-medium leading-tight outline-none hover:text-fd-primary focus-visible:ring-2 focus-visible:ring-fd-primary focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background"
                >
                  <span className="text-pretty">{adopter.name}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-0.5 size-3.5 shrink-0 text-fd-muted-foreground transition-transform duration-200 motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5 motion-reduce:transition-none"
                  />
                  <span className="sr-only"> on GitHub, opens in a new tab</span>
                </a>
                <p className="mt-1 text-xs text-fd-muted-foreground">
                  {adopter.usage}
                </p>
                <a
                  href={adopter.manifestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-sm font-mono text-[10px] text-fd-muted-foreground outline-none hover:text-fd-primary focus-visible:ring-2 focus-visible:ring-fd-primary focus-visible:ring-offset-2 focus-visible:ring-offset-fd-background"
                  aria-label={`${adopter.name} Nativewind dependency ${adopter.dependency}, opens in a new tab`}
                >
                  <CodeXml aria-hidden="true" className="size-3" />
                  nativewind {adopter.dependency}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
