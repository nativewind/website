import { defineDocs } from 'fumadocs-mdx/config';
import { defineCollections } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
});
