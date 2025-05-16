import Link from 'next/link';
import { blog } from '@/lib/source';

export default function Home() {
  const posts = blog.getPages();

  return (
    <main className="flex flex-1 flex-col pt-14 max-w-fd-container mx-auto px-4 w-full">
      <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
      <h1 className="text-4xl mb-8 mt-2">Latest Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="blockshadow-md border-bashed border overflow-hidden p-6"
          >
            <h2 className="text-2xl mb-2 truncate">{post.data.title}</h2>
            <p className="mb-4 line-clamp-3">{post.data.description}</p>
            <p className="mb-4">{post.data.author}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}