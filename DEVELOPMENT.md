# Nativewind Documentation Site Development Guide

## Project Overview

The Nativewind documentation site serves both v4 (stable) and v5 (preview) docs side-by-side. Built with Next.js 15 and Fumadocs.

- **V4 docs** at `/docs/` — sourced from `content/docs/`
- **V5 docs** at `/v5/` — sourced from `content/v5/`
- **Blog** at `/blog/` — sourced from `content/blog/`

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Docs engine:** Fumadocs (fumadocs-core, fumadocs-mdx, fumadocs-ui)
- **Styling:** Tailwind CSS 4
- **Package manager:** pnpm (npm and yarn are not used)
- **Deployment:** Vercel

## Commands

```bash
pnpm install             # Install dependencies
pnpm dev                 # Start dev server
pnpm build               # Production build
pnpm start               # Start production server
```

## Content Authoring

### Doc pages

MDX files with YAML frontmatter:

```mdx
---
title: "Page Title"
description: "Optional description"
---

Content here...
```

### Sidebar navigation

Controlled by `meta.json` files in each content directory — not by filesystem auto-discovery:

```json
[
  "index",
  "---Getting Started---",
  "getting-started/installation/index",
  "[BookText] Core Concepts"
]
```

- `"---Section Name---"` — section headers
- `"[IconName]"` — Lucide icon prefix
- `"...tailwind/layout"` — spread operator to include all files in a directory

### Shared MDX components

- `<Tabs>` / `<Tab>` — tabbed content
- `<Callout>` — tips/warnings
- `<Steps>` — step-by-step guides
- Partial imports: `import Install from './_install.mdx'`

## Key Directories

```
app/
├── (home)/              # Landing page, blog, resources, hire-us
├── docs/[[...slug]]/    # V4 doc pages
├── v5/[[...slug]]/      # V5 doc pages
├── llms.mdx/            # LLM-friendly markdown endpoints
├── llms.txt/            # Concatenated LLM text (v4)
├── v5/llms.txt/         # Concatenated LLM text (v5)
└── api/                 # Search, OG image generation

components/
├── notebook.tsx         # Custom Fumadocs DocsLayout wrapper
├── layout/              # Sidebar, version switcher, theme toggle
├── ui/                  # Radix UI wrappers
└── home/                # Homepage components

content/
├── docs/                # V4 documentation (209 files)
├── v5/                  # V5 documentation (200 files)
└── blog/                # Blog posts

lib/
├── source.ts            # Fumadocs loaders (source for v4, source5 for v5)
└── get-llm-text.ts      # Strips frontmatter, formats docs for LLM endpoints
```

## Key Config Files

- **`source.config.ts`** — Fumadocs MDX config; defines `docs` (v4) and `docs5` (v5) collections
- **`next.config.mjs`** — MDX integration, URL rewrites for LLM endpoints, SVG support
- **`vercel.json`** — deployment config, redirects (`/discord`, `/issue`, `/repro`)

## LLM Endpoints

The site has built-in endpoints for serving docs as plain text for LLM consumption:

| Endpoint | Description |
|----------|-------------|
| `/llms.txt` | Concatenated v4 docs as plain text |
| `/v5/llms.txt` | Concatenated v5 docs as plain text |
| `/llms-full.txt` | Full v4 doc dump |
| `/v5/llms-full.txt` | Full v5 doc dump |
| `/llms.mdx/docs/[path]` | Individual v4 doc as markdown |
| `/llms.mdx/v5/[path]` | Individual v5 doc as markdown |

## Common Pitfalls

- **pnpm only** — not npm or yarn
- **Sidebar is meta.json-driven** — adding a new MDX file doesn't automatically add it to navigation; update the relevant `meta.json`
- **`.source/` is generated** — run `fumadocs-mdx` (happens on postinstall) to regenerate after content structure changes
- **V4 and V5 have separate Fumadocs loaders** — `source` for v4, `source5` for v5 in `lib/source.ts`; don't mix them
- **Last modified timestamps come from git** — configured in `source.config.ts`
