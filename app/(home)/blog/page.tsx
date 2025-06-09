import { blog } from '@/lib/source';
import SectionTitle from '../SectionTitle';
import FooterSection from '../FooterSection';
import BlogTitleDecoration from './Decoration';
import BlogPostLink from './BlogPostLink';

export default function Blog() {
  const posts = blog.getPages();

  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
      <div className="bg-fd-background/50 pt-56 backdrop-blur relative">
        <BlogTitleDecoration />
        <SectionTitle id="blog" title="Latest Blog Posts" className="backdrop-blur-none" />
      </div>
      <div className="relative min-h-[calc(100vh-16rem-6.5625rem)] flex flex-col mx-auto w-full border-t border-dashed">
        {posts.map((post) => (
          <BlogPostLink key={post.url} post={post} />
        ))}
        <div className="mt-auto border-b border-dashed max-w-fd-container mx-auto w-full"/>
      </div>
      <FooterSection />
    </main>
  );
}