import ShowcaseItem, { type ShowcaseItemProps } from "./ShowcaseItem";

export default function TestimonialsSectionContents() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap text-left gap-8 justify-around p-8 [mask:linear-gradient(to_right,transparent,red_1rem,red_calc(100%-1rem),transparent)] max-w-full">
      <div className="flex sm:hidden flex-col">
        {items.map((item) => (
          <ShowcaseItem key={item.name} {...item} />
        ))}
      </div>

      <div className="hidden sm:flex lg:hidden flex-col">
        {items.slice(0, 5).map((item) => (
          <ShowcaseItem key={item.name} {...item} />
        ))}
      </div>
      <div className="hidden sm:flex lg:hidden flex-col">
        {items.slice(5).map((item) => (
          <ShowcaseItem key={item.name} {...item} />
        ))}
      </div>

      <div className="hidden lg:flex flex-col">
        {items.slice(0, 4).map((item) => (
          <ShowcaseItem key={item.name} {...item} />
        ))}
      </div>
      <div className="hidden lg:flex flex-col">
        {items.slice(4, 7).map((item) => (
          <ShowcaseItem key={item.name} {...item} />
        ))}
      </div>
      <div className="hidden lg:flex flex-col">
        {items.slice(7).map((item) => (
          <ShowcaseItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

// Brand snapshot: 8fedabcab4bb480b40a0d84002c12e32e03e6e23.
// Ordered by the saved public repository ranking verified on 2026-09-21.
// Each repository below declared Nativewind in its dependency manifest.
const items: ShowcaseItemProps[] = [
  {
    name: "PostHog",
    description:
      "PostHog gives product teams analytics, session replay, feature flags, experiments, and more.",
    logo: "https://github.com/PostHog.png?size=256",
    website: "https://posthog.com/",
  },
  {
    name: "Folo",
    description:
      "Folo is a personalized RSS reader and content hub for following everything in one place.",
    logo: "https://github.com/RSSNext.png?size=256",
    website: "https://folo.is/",
    appstore:
      "https://apps.apple.com/us/app/folo-follow-everything/id6739802604",
  },
  {
    name: "Onyx",
    description:
      "Onyx is an open source AI assistant that connects to a company’s documents, apps, and people.",
    logo: "https://github.com/onyx-dot-app.png?size=256",
    website: "https://www.onyx.app/",
  },
  {
    name: "Karakeep",
    description:
      "Karakeep is an open source app for saving, organizing, and rediscovering links, notes, and images.",
    logo: "https://github.com/karakeep-app.png?size=256",
    website: "https://karakeep.app/",
    appstore: "https://apps.apple.com/us/app/karakeep-app/id6479258022",
    playstore:
      "https://play.google.com/store/apps/details?id=app.hoarder.hoardermobile",
  },
  {
    name: "Kortix",
    description:
      "Kortix is an open source AI management system for agents, shared skills, company memory, and connectors.",
    logo: "https://github.com/kortix-ai.png?size=256",
    website: "https://www.kortix.com/",
  },
  {
    name: "Linkwarden",
    description:
      "Linkwarden is a collaborative bookmark manager that preserves webpages and organizes saved links.",
    logo: "https://github.com/linkwarden.png?size=256",
    website: "https://linkwarden.app/",
  },
  {
    name: "Polar",
    description:
      "Polar provides billing infrastructure for subscriptions, usage, invoicing, and global sales tax.",
    logo: "https://github.com/polarsource.png?size=256",
    website: "https://polar.sh/",
  },
  {
    name: "Founded Labs",
    description:
      "Founded Labs builds React Native Reusables, an open source component registry crafted with Nativewind.",
    logo: "https://github.com/founded-labs.png?size=256",
    website: "https://reactnativereusables.com/",
  },
  {
    name: "gluestack",
    description:
      "gluestack offers customizable components and patterns for React, Next.js, and React Native.",
    logo: "https://github.com/gluestack.png?size=256",
    website: "https://gluestack.io/",
  },
  {
    name: "Streamyfin",
    description:
      "Streamyfin is an open source Jellyfin client for streaming media on iOS, tvOS, and Android.",
    logo: "https://github.com/streamyfin.png?size=256",
    website: "https://streamyfin.app/",
    appstore: "https://apps.apple.com/gb/app/streamyfin/id6593660679",
  },
];
