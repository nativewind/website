import { ArrowUpRight } from "lucide-react";

const adopters = [
  {
    name: "PostHog",
    usage: "Mobile app",
    evidence:
      "https://github.com/PostHog/posthog/blob/master/products/desktop/apps/mobile/package.json",
  },
  {
    name: "Folo",
    usage: "Mobile app",
    evidence:
      "https://github.com/RSSNext/Folo/blob/dev/apps/mobile/package.json",
  },
  {
    name: "Onyx",
    usage: "Mobile app",
    evidence:
      "https://github.com/onyx-dot-app/onyx/blob/main/mobile/package.json",
  },
  {
    name: "Karakeep",
    usage: "Mobile app",
    evidence:
      "https://github.com/karakeep-app/karakeep/blob/main/apps/mobile/package.json",
  },
  {
    name: "Suna",
    usage: "Mobile app",
    evidence:
      "https://github.com/kortix-ai/suna/blob/main/apps/mobile/package.json",
  },
  {
    name: "Linkwarden",
    usage: "Mobile app",
    evidence:
      "https://github.com/linkwarden/linkwarden/blob/main/apps/mobile/package.json",
  },
  {
    name: "Polar",
    usage: "App",
    evidence:
      "https://github.com/polarsource/polar/blob/main/clients/apps/app/package.json",
  },
  {
    name: "React Native Reusables",
    usage: "Component registry",
    evidence:
      "https://github.com/founded-labs/react-native-reusables/blob/main/packages/registry/package.json",
  },
  {
    name: "gluestack-ui",
    usage: "Component library",
    evidence:
      "https://github.com/gluestack/gluestack-ui/blob/main/packages/gluestack-ui/package.json",
  },
  {
    name: "Streamyfin",
    usage: "App",
    evidence:
      "https://github.com/streamyfin/streamyfin/blob/develop/package.json",
  },
] as const;

export default function BuiltWithNativewindSection() {
  return (
    <section
      aria-labelledby="built-with-nativewind"
      className="relative border-y border-dashed text-left"
    >
      <div className="mx-auto w-full max-w-fd-container border-x border-dashed">
        <div className="grid gap-6 px-4 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.65fr)] lg:items-end lg:gap-12">
          <div>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-fd-primary">
              Verified open source adoption
            </p>
            <h2
              id="built-with-nativewind"
              className="text-3xl font-medium tracking-tight text-balance md:text-4xl"
            >
              Built with Nativewind
            </h2>
          </div>
          <p className="max-w-[55ch] text-sm leading-6 text-fd-muted-foreground sm:text-base">
            Ten products and libraries that declare Nativewind in their public
            codebases, verified September 21, 2026.
          </p>
        </div>

        <ol className="grid grid-cols-2 border-l border-t border-dashed lg:grid-cols-5">
          {adopters.map((adopter, index) => (
            <li key={adopter.name} className="flex min-w-0">
              <a
                href={adopter.evidence}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View Nativewind usage evidence for ${adopter.name} on GitHub, opens in a new tab`}
                className="group relative flex min-h-36 w-full flex-col justify-between overflow-hidden border-b border-r border-dashed bg-fd-background p-4 outline-none hover:bg-fd-accent/50 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-primary sm:min-h-40 sm:p-5"
              >
                <div className="flex items-start justify-between gap-3 font-mono text-[11px] text-fd-muted-foreground">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex items-center gap-1 group-hover:text-fd-primary group-focus-visible:text-fd-primary">
                    Evidence
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-medium leading-tight tracking-tight text-pretty sm:text-lg">
                    {adopter.name}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-fd-muted-foreground">
                    {adopter.usage}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ol>

        <p className="px-4 py-3 font-mono text-[10px] leading-4 text-fd-muted-foreground sm:px-8">
          Ordered by public GitHub stars at the time of verification. Stars are
          not a measure of company size, traffic, or endorsement.
        </p>
      </div>
    </section>
  );
}
