import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  // docs: {
  //   async: true,
  // },
  dir: 'content/docs',
});

import { defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
// import { z } from 'zod';

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  // async: true,
  // schema: frontmatterSchema.extend({
  //   author: z.string(),
  //   date: z.string().date().or(z.date()).optional(),
  // }),
});

export default defineConfig({
  mdxOptions: {
    // MDX options like remark and rehype plugins
  },
});