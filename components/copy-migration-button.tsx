'use client';
import { Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

// Full markdown content for direct copying
const MIGRATION_GUIDE_CONTENT = `# Nativewind v4 to v5 Migration Guide

This guide provides complete instructions for migrating your project from Nativewind v4 (Tailwind CSS v3.4) to Nativewind v5 (Tailwind CSS v4.1). Use this document as a reference for LLM-assisted migration or manual upgrade.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Migration Steps](#quick-migration-steps)
3. [Breaking Changes](#breaking-changes)
4. [Deprecations](#deprecations)
5. [Configuration Changes](#configuration-changes)
6. [Troubleshooting](#troubleshooting)
7. [New Features](#new-features)

---

## Prerequisites

Before upgrading to Nativewind v5, your project **must** meet the following version requirements:

### Required Dependencies

- **Tailwind CSS v4.1+**: Nativewind v5 is built on Tailwind v4.1+. Review the [Tailwind CSS v4 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide) for detailed steps.

- **React Native 0.81+**: React Native 0.81 introduces architectural changes that Nativewind v5 relies on, including improvements to the StyleSheet and layout engines. Earlier versions may work with limited functionality, but only 0.81+ is officially supported.

- **React Native New Architecture**: A number of styles require the new architecture. The old architecture may work with limited functionality, but only the new architecture is officially supported.

- **React Native Reanimated v4+**: Nativewind v5 uses internal features that depend on Reanimated v4+. Ensure your project uses this version to avoid runtime crashes or build issues. Note: Reanimated v4 introduces its own breaking changes — consult the [Reanimated v4 changelog](https://docs.swmansion.com/react-native-reanimated/).

- **React Native CSS**: Nativewind previously used a transient dependency on \`react-native-css-interop\`. This library has been renamed to \`react-native-css\`, has been moved to a peer dependency, and will require separate installation. Nativewind will no longer be tied to a specific version of \`react-native-css\` and the two libraries can be updated individually.

---

## Quick Migration Steps

The simplest way to migrate from Nativewind v4 to v5 is to follow these steps:

### Step 1: Update Dependencies

Install the new versions of required packages:

\`\`\`bash
# Using Expo CLI (recommended)
npx expo install nativewind@preview react-native-css react-native-reanimated react-native-safe-area-context

# Install Tailwind CSS v4 and PostCSS as dev dependencies
npx expo install --dev tailwindcss @tailwindcss/postcss postcss
\`\`\`

### Step 2: Update CSS File

Replace your old CSS directives with the new Tailwind v4 imports in your \`global.css\` (or equivalent):

\`\`\`css
/* OLD - Remove these */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* NEW - Add these */
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";

@import "nativewind/theme";
\`\`\`

### Step 3: Update Babel Config

Remove Nativewind from your \`babel.config.js\`:

\`\`\`javascript
// babel.config.js - OLD
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};

// babel.config.js - NEW
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
\`\`\`

### Step 4: Create PostCSS Config

Create a \`postcss.config.mjs\` file in the root of your project:

\`\`\`javascript
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
\`\`\`

### Step 5: Update Metro Config

Update the \`withNativewind\` function call (no longer requires a second argument):

\`\`\`javascript
// metro.config.js - OLD
module.exports = withNativeWind(config, { input: './global.css' });

// metro.config.js - NEW
const { withNativewind } = require("nativewind/metro");
module.exports = withNativewind(config);
\`\`\`

### Step 6: Clear Cache and Restart

\`\`\`bash
npx expo start --clear
\`\`\`

---

## Breaking Changes

### Tailwind CSS v4 Changes

Nativewind v5 adopts all breaking changes from Tailwind CSS v4. Please review the [Tailwind CSS v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide) carefully. Key changes include:

- Renamed utility classes
- Changed default theme values
- Modified spacing scale
- Updated color palette

### Classname Renames

The following Nativewind classes have been renamed to align with Tailwind v4 standards:

- \`elevation-sm\` → \`elevation-xs\`
- \`elevation\` → \`elevation-sm\`

**Migration:** Search and replace these class names across your codebase.

### Shadow Utilities (\`shadow-*\`)

Previously, \`shadow-*\` classes mapped to React Native's legacy shadow props (\`shadowColor\`, \`shadowOffset\`, \`shadowOpacity\`, \`shadowRadius\`). They now map to the \`boxShadow\` style property.

**Migration Impact:** You may notice visual differences in shadows. Review and adjust shadow classes as needed.

### Line Height

Line height numeric values are now parsed as if they had the \`em\` unit. Previously they were parsed as unit-less values.

**Migration:** Divide old line height values by the font size. For example, if you had \`leading-[24]\` with a \`text-base\` (16px), the new value should be \`leading-[1.5]\` (24/16 = 1.5).

### \`rem\` Values

\`rem\` is no longer exported and cannot be changed at runtime. If you require Tailwind CSS to dynamically change values, update your theme to use CSS variables instead of \`rem\`.

**Migration:** Replace \`rem\` usage with CSS custom properties:

\`\`\`css
@theme {
  --spacing-custom: 1rem;
}
\`\`\`

### Dynamic Mapping Modifier

The dynamic mapping modifier has been renamed from \`{}\` to \`@prop\`:

\`\`\`jsx
/* OLD */
<View className="{}-[inputColor]:color-black" />

/* NEW */
<View className="@prop-[inputColor]:color-black" />
\`\`\`

**Migration:** Search for \`{}-[\` and replace with \`@prop-[\`.

### Animation Engine

Nativewind has switched from using a custom animation engine to Reanimated CSS animations. You may find implementation differences between the two engines.

**Migration Impact:** Test all animations and adjust as needed. Some timing functions or behaviors may differ.

---

## Deprecations

Nativewind v5 preserves its core API. Your usage of:

- \`className\`
- \`styled\`

...will continue to work without modification.

However, several features are **deprecated** and will emit runtime warnings during development. These features will be **removed in a future major release**.

### JSX Transform → Import Rewrites

Nativewind v5 **removes the JSX transform** that previously injected Tailwind support into individual JSX elements. This has been replaced by a new **import rewrite system**.

**What Changed:**

Previously, Nativewind modified your JSX via the \`jsxImportSource\`:

\`\`\`jsx
// Your code
import { View, Text } from 'react-native';

<View className="bg-red-500 p-4">
  <Text className="text-white">Hello</Text>
</View>
\`\`\`

Now, the \`import\` statement is rewritten to:

\`\`\`jsx
import { View, Text } from 'react-native-css/react-native';
\`\`\`

**Migration Impact:** This does not require any code changes, but may affect your app if you are performing your own import rewrites. The move to import rewrites is driven by a broader shift in the React Native ecosystem toward publishing compiled libraries.

### \`cssInterop\` / \`remapProps\` → \`styled()\`

The \`cssInterop\` and \`remapProps\` APIs are deprecated and replaced with a unified \`styled\` API.

**Migration:**

\`\`\`jsx
// OLD - cssInterop
import { cssInterop } from 'nativewind';
cssInterop(View, { className: 'style' });

// NEW - styled (same as cssInterop)
import { styled } from 'nativewind';
styled(View, { className: 'style' });

// OLD - remapProps
import { remapProps } from 'nativewind';
remapProps(View, { className: 'style' });

// NEW - styled with passThrough option
styled(View, { className: 'style' }, { passThrough: true });
\`\`\`

By default, \`styled()\` enables the transform globally for that component. Disable this by setting \`global\` to false:

\`\`\`jsx
const MyComponent = styled(View, { className: 'style' }, { global: false });
\`\`\`

---

## Configuration Changes

### JavaScript Theme Functions Removed

The \`nativewind/theme\` export has been removed. All native functions are now available as CSS functions in your stylesheets.

#### \`platformColor()\`

\`\`\`css
/* OLD - JavaScript */
import { platformColor } from 'nativewind/theme';

/* NEW - CSS */
@theme {
  --color-error: platformColor(systemRed, red);
}
\`\`\`

#### \`hairlineWidth()\`

\`\`\`css
@theme {
  --spacing-hairline: hairlineWidth();
}
\`\`\`

#### \`pixelRatio()\`

\`\`\`css
@theme {
  --spacing-doublePixelRatio: calc(pixelRatio(2) * 2);
}
\`\`\`

#### \`fontScale()\`

\`\`\`css
@theme {
  --spacing-doubleFontScale: calc(fontScale(2) * 2);
}
\`\`\`

#### \`getPixelSizeForLayoutSize()\`

\`\`\`css
@theme {
  --spacing-custom: getPixelSizeForLayoutSize(42);
}
\`\`\`

#### \`roundToNearestPixel()\`

\`\`\`css
@theme {
  --spacing-custom: roundToNearestPixel(calc(10 / 3));
}
\`\`\`

#### \`platformSelect()\`

\`\`\`css
/* OLD - JavaScript */
import { platformSelect } from 'nativewind/theme';

/* NEW - CSS with media queries */
@theme {
  --color-error: var(--my-color, green);
}

@media ios {
  :root {
    --my-color: red;
  }
}

@media android {
  :root {
    --my-color: blue;
  }
}
\`\`\`

#### \`pixelRatioSelect()\` / \`fontScaleSelect()\`

\`\`\`css
/* OLD - JavaScript */
import { pixelRatioSelect, fontScaleSelect } from 'nativewind/theme';

/* NEW - CSS with media queries */
@theme {
  --spacing-custom-pixel: 11;
  --spacing-custom-font: 11;
}

@media (pixelRatio() > 2) {
  :root {
    --spacing-custom-pixel: 3;
  }
}

@media (fontScale() > 2) {
  :root {
    --spacing-custom-font: 3;
  }
}
\`\`\`

---

## Troubleshooting

### Common Issues

#### JSX Transform Errors

**Symptom:** Build errors related to JSX or imports.

**Solution:** Ensure you removed Nativewind from your \`babel.config.js\`. Clear Metro cache:

\`\`\`bash
npx expo start --clear
\`\`\`

#### Incorrect CSS atRules

**Symptom:** Styles not applying or build errors.

**Solution:** Ensure you updated to the new atRules in your CSS file:

\`\`\`css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";

@import "nativewind/theme";
\`\`\`

#### Metro Config Issues

**Symptom:** Build errors or styles not updating.

**Solution:** Verify \`withNativewind\` is called correctly without a second argument:

\`\`\`javascript
module.exports = withNativewind(config);
\`\`\`

#### Missing PostCSS Config

**Symptom:** Build fails or Tailwind not compiling.

**Solution:** Ensure \`postcss.config.mjs\` exists with correct content:

\`\`\`javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
\`\`\`

#### TypeScript Errors

**Symptom:** TypeScript complains about \`className\` prop.

**Solution:** Create \`nativewind-env.d.ts\` in your project root:

\`\`\`typescript
/// <reference types="react-native-css/types" />
\`\`\`

Or run \`npx expo start --clear\` to generate it automatically.

---

## New Features

Nativewind v5 adds support for new React Native styling features introduced in recent versions:

### CSS Features

- **\`position: static\`**: Standard CSS positioning ([Tailwind](https://tailwindcss.com/docs/position), [Yoga](https://www.yogalayout.dev/blog/announcing-yoga-3.0#position-static))

- **\`align-content: space-evenly\`**: Better multiline container support ([Tailwind](https://tailwindcss.com/docs/place-content#space-evenly), [Yoga](https://www.yogalayout.dev/blog/announcing-yoga-3.0#better-support-for-multiline-containers))

- **\`filter()\`**: CSS filters including blur, brightness, contrast, etc. ([Tailwind](https://tailwindcss.com/docs/filter), [React Native](https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture#box-shadow-and-filter-style-props))

- **\`backgroundImage()\`**: Gradient backgrounds (gradients only) ([Tailwind](https://tailwindcss.com/docs/background-image))

- **\`box-sizing\`**: Control how element size is calculated ([Tailwind](https://tailwindcss.com/docs/box-sizing))

- **\`display: contents\`**: Remove element from layout tree while keeping children ([Tailwind](https://tailwindcss.com/docs/display#contents))

---

## Migration Checklist

Use this checklist to ensure a complete migration:

- [ ] Update to React Native 0.81+ with New Architecture enabled
- [ ] Install Nativewind v5 preview and peer dependencies
- [ ] Install Tailwind CSS v4 and PostCSS as dev dependencies
- [ ] Update Reanimated to v4+
- [ ] Create \`postcss.config.mjs\` with \`@tailwindcss/postcss\`
- [ ] Update \`global.css\` with new Tailwind v4 imports
- [ ] Remove Nativewind from \`babel.config.js\`
- [ ] Update \`metro.config.js\` to remove second argument from \`withNativewind\`
- [ ] Clear Metro cache (\`npx expo start --clear\`)
- [ ] Search and replace renamed classes (\`elevation-sm\` → \`elevation-xs\`, etc.)
- [ ] Replace \`{}-[\` with \`@prop-[\` for dynamic modifiers
- [ ] Migrate \`cssInterop\`/\`remapProps\` to \`styled()\`
- [ ] Convert JavaScript theme functions to CSS equivalents
- [ ] Test all animations and shadows
- [ ] Verify TypeScript types are working
- [ ] Test on both iOS and Android
- [ ] Review and apply Tailwind CSS v4 breaking changes

---

## Additional Resources

- [Tailwind CSS v4 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Reanimated v4 Changelog](https://docs.swmansion.com/react-native-reanimated/)
- [React Native New Architecture](https://reactnative.dev/docs/new-architecture-intro)
- [Nativewind v5 Documentation](https://nativewind.dev)

---

**Version:** Nativewind v5 Preview  
**Migrating From:** Nativewind v4 (Tailwind CSS v3.4)  
**Migrating To:** Nativewind v5 (Tailwind CSS v4.1)  
**Last Updated:** 2025
`;

interface CopyMigrationButtonProps {
  className?: string;
}

export function CopyMigrationButton({ className = "" }: CopyMigrationButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(MIGRATION_GUIDE_CONTENT);
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
      {copied ? "Copied!" : "Copy LLM-friendly Migration Guide"}
    </button>
  );
}

