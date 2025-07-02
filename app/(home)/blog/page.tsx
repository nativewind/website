import { blog } from '@/lib/source';
import SectionTitle from '../SectionTitle';
import FooterSection from '../FooterSection';
import BlogTitleDecoration from './Decoration';
import BlogPostLink from './BlogPostLink';

// Import the meta configuration to get the post order
import blogMeta from '../../../content/blog/meta.json';

export default function Blog() {
  const posts = blog.getPages();
  
  // Get the post order from meta.json, filtering out non-post entries
  const postOrder = blogMeta.pages
    .filter(page => typeof page === 'string' && !page.startsWith('[') && !page.startsWith('---'))
    .map(page => page as string);
  
  // Sort posts according to meta.json order, then by date for any posts not in meta.json
  const sortedPosts = posts.sort((a, b) => {
    const aSlug = a.slugs[0];
    const bSlug = b.slugs[0];
    
    const aIndex = postOrder.indexOf(aSlug);
    const bIndex = postOrder.indexOf(bSlug);
    
    // If both posts are in meta.json, sort by their order there
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    
    // If only one is in meta.json, prioritize it
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    
    // If neither is in meta.json, sort by date (newest first)
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });

  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
      <div className="bg-fd-background/50 pt-56 backdrop-blur relative">
        <BlogTitleDecoration />
        <SectionTitle id="blog" title="Latest Blog Posts" className="backdrop-blur-none" />
      </div>
      <div className="relative min-h-[calc(100vh-16rem-6.5625rem)] flex flex-col mx-auto w-full border-t border-dashed">
        {sortedPosts.map((post) => (
          <BlogPostLink key={post.url} post={post} />
        ))}
        <div className="mt-auto border-b border-dashed max-w-fd-container mx-auto w-full"/>
      </div>
      <FooterSection />
    </main>
  );
}