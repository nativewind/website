import { docs } from '@/.source';
import { InferMetaType, InferPageType, loader } from 'fumadocs-core/source';

import { icons } from "lucide-react";
import { createElement } from "react";

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  // NOTE: adds icon support to meta.json
  icon(icon) {
    if (!icon) return undefined;
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
    return undefined;
  },
});

import { blog as blogPosts } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});

// export type Page = InferPageType<typeof source>;
// export type Meta = InferMetaType<typeof source>;