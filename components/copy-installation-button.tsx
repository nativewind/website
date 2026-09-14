'use client';
import { Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

// Full markdown content for direct copying
const INSTALLATION_GUIDE_CONTENT = `# Nativewind v5 RC0 installation

Use an Expo 57 app. Tested versions: Expo 57.0.22, React Native 0.86.3, React 19.2.3, Reanimated 4.5.1 and Worklets 0.10.1.

\`\`\`sh
npm install --save-exact nativewind@5.0.0-rc.0 react-native-css@3.1.0-rc.0
npm install --save-dev --save-exact tailwindcss@4.1.12 @tailwindcss/postcss@4.1.12 postcss lightningcss@1.30.1
npx expo install react-native-reanimated react-native-worklets react-native-safe-area-context expo-system-ui
\`\`\`

Use the project's existing package manager. Keep both RC packages pinned together.

Create postcss.config.mjs (Expo 57 does not discover postcss.config.cjs):
\`\`\`js
export default { plugins: { "@tailwindcss/postcss": {} } };
\`\`\`

Create global.css:
\`\`\`css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";
@import "nativewind/theme";
\`\`\`

Wrap the existing Metro configuration, preserving custom settings:
\`\`\`js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");
module.exports = withNativewind(getDefaultConfig(__dirname));
\`\`\`

Import global.css once from App.tsx or app/_layout.tsx. Keep babel-preset-expo. Remove the v4 Nativewind Babel preset and JSX import source settings if present. Set expo.userInterfaceStyle to automatic in app.json for system theme changes.

Pin lightningcss to 1.30.1 in package manager overrides or resolutions, following the installation guide. Ensure the generated nativewind-env.d.ts belongs to the TypeScript project. Restart Metro and rebuild when native dependencies change. Verify colors, layout, input, themes and navigation on each supported platform; a successful bundle alone does not prove rendering.

Full installation guide and package manager examples: https://www.nativewind.dev/v5/getting-started/installation
Existing v4 apps: https://www.nativewind.dev/v5/guides/migrate-from-v4
Previous v5 preview: https://www.nativewind.dev/v5/guides/migrate-from-preview
`;

interface CopyInstallationButtonProps {
  className?: string;
}

export function CopyInstallationButton({ className = "" }: CopyInstallationButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALLATION_GUIDE_CONTENT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-fd-muted-foreground hover:text-fd-foreground bg-fd-card border border-fd-border rounded-md hover:bg-fd-accent transition-colors",
        className
      )}
    >
      <Copy className="h-4 w-4" />
      {copied ? "Copied!" : "Copy installation guide"}
    </button>
  );
}

