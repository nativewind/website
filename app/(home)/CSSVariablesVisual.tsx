// import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
export default function CSSVariablesVisual() {
  return (
    <div className="max-h-[calc(100%-2rem)] sm:mt-auto [mask-image:linear-gradient(to_bottom,red,transparent)] w-full h-full p-4">
      <pre className="font-mono text-sm overflow-y-clip text-orange-600/60 dark:text-orange-400/60 md:text-fd-foreground/50 md:dark:text-fd-foreground/50 group-hover:text-orange-600/60 dark:group-hover:text-orange-400/60 duration-600 ease-out md:group-hover:-translate-y-4">
        {/* TODO: highlight */}
        {`
  @theme {
    --font-sans: "Inter", sans-serif;
    --font-mono: "IBM Plex Mono", monospace;

    --text-tiny: 0.625rem;
    --text-tiny--line-height: 1.5rem;
    
    --color-mint-100: oklch(0.97 0.15 145);
    --color-mint-200: oklch(0.92 0.18 145);
    --color-mint-300: oklch(0.85 0.22 145);
    --color-mint-400: oklch(0.78 0.25 145);
    --color-mint-500: oklch(0.7 0.28 145);
    --color-mint-600: oklch(0.63 0.3 145);
    --color-mint-700: oklch(0.56 0.32 145);
    --color-mint-800: oklch(0.48 0.35 145);
    --color-mint-900: oklch(0.4 0.37 145);
    --color-mint-950: oklch(0.3 0.4 145);
    --color-mint-1000: oklch(0.2 0.42 145);
    --color-mint-1100: oklch(0.1 0.45 145);
    --color-mint-1200: oklch(0.05 0.48 145);
    --color-mint-1300: oklch(0.02 0.5 145);
    --color-mint-1400: oklch(0.01 0.52 145);
    --color-mint-1500: oklch(0.005 0.55 145);
    --color-mint-1600: oklch(0.002 0.58 145);
        `}
      </pre>
    </div>
  );
}