# Nativewind Documentation Site Development Guide

## Project Overview

The Nativewind documentation site serves both v4.2.7 (stable) and v5 (release candidate) documentation. Built with Next.js 15 and Fumadocs.

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
pnpm test:llm            # Verify all public Markdown exports and shared helpers
pnpm build               # Production build, including text endpoints
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
├── llms.txt/            # Documentation index (v4)
├── v5/llms.txt/         # Documentation index (v5)
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
└── get-llm-text.ts      # Formats source Markdown for LLM endpoints
```

## Key Config Files

- **`source.config.ts`** — Fumadocs MDX config; defines `docs` (v4) and `docs5` (v5) collections
- **`next.config.mjs`** — MDX integration, URL rewrites for LLM endpoints, SVG support
- **`vercel.json`** — deployment config, redirects (`/discord`, `/issue`, `/repro`)

## LLM Endpoints

The site has built-in endpoints for serving docs as plain text for LLM consumption:

| Endpoint | Description |
|----------|-------------|
| `/llms.txt` | V4 documentation index with Markdown page links |
| `/v5/llms.txt` | V5 documentation index with Markdown page links |
| `/llms-full.txt` | Full v4 doc dump |
| `/v5/llms-full.txt` | Full v5 doc dump |
| `/llms.mdx/docs/[path]` | Individual v4 page as Markdown; also `/docs/[path].mdx` |
| `/llms.mdx/v5/[path]` | Individual v5 page as Markdown; also `/v5/[path].mdx` |

The indices, full exports and copy buttons all use the same documentation source. `lib/llm-markdown.ts` expands imported MDX partials and includes, renders tabs, callouts and tables as Markdown, preserves code fences and resolves page links. Files beginning with `_` are helpers and are not exported as standalone pages.

`lib/doc-tables.ts` supplies install commands and compatibility rows to both the React components and the text exporter. Update those shared helpers when changing command generation or support labels. Installation and migration copy buttons fetch the page Markdown endpoint; do not reintroduce separate guide strings.

The exporter supports the data expressions and components used by this repository. It deliberately fails on unknown components or JavaScript expressions instead of silently dropping guidance. When introducing a component, add its Markdown representation and a regression case to `tests/llm-markdown.test.ts`. Run `pnpm test:llm` and `pnpm build`; check rendered pages and copy buttons if UI components changed. Legacy `.md` files are included in those checks.

Keep v4 and v5 installation advice separate. Use the pinned pair from the RC installation page for v5; do not copy current Tailwind CSS v4 links into the stable Tailwind CSS v3 docs. The application migration skills are maintained in [nativewind/nativewind](https://github.com/nativewind/nativewind/tree/main/skills), alongside release setup and measured compatibility records.

## Common Pitfalls

- **pnpm only** — not npm or yarn
- **Sidebar is meta.json-driven** — adding a new MDX file doesn't automatically add it to navigation; update the relevant `meta.json`
- **`.source/` is generated** — run `fumadocs-mdx` (happens on postinstall) to regenerate after content structure changes
- **V4 and V5 have separate Fumadocs loaders** — `source` for v4, `source5` for v5 in `lib/source.ts`; don't mix them
- **Last modified timestamps come from git** — configured in `source.config.ts`
