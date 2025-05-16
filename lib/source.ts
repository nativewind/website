import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

// for icons in docs meta.json-defined sidebar
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

// blog
import { blog as blogPosts } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});
