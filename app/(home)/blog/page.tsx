import Link from 'next/link';
import { blog } from '@/lib/source';
import SectionTitle from '../SectionTitle';
import FooterSection from '../FooterSection';

export default function Blog() {
  const posts = blog.getPages();

  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
      <div className="bg-fd-background/50 pt-56 backdrop-blur relative">
        {/* outlide */}
        <div className="left-1/2 -translate-x-1/2 bottom-0 w-full max-w-fd-container absolute h-full pointer-events-none">
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)]" />
        </div>
        {/* inside */}
        <div className="left-1/2 -translate-x-1/2 bottom-0 w-full max-w-fd-container absolute overflow-clip h-full pointer-events-none">
          <div className="bg-grid-dots rounded-full w-[50rem] h-[50rem] absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(red,transparent_80%)] opacity-50"/>
          <div className="absolute bottom-0 right-0 translate-x-1/2 h-[64rem] w-screen bg-grid-lines-y-lg translate-y-1/2 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] -skew-20" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)]" />
        </div>
        <SectionTitle id="blog" title="Latest Blog Posts" className="sticky top-14 z-10 border-t-0 backdrop-blur-none border-b " />
      </div>
      <div className="relative min-h-[calc(100vh-16rem-6.5625rem)] flex flex-col mx-auto w-full border-t border-dashed">
      
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="group block border-bashed border-b overflow-hidden p-6 bg-fd-background hover:bg-fd-accent duration-300 transition-colors ease-in-out"
          >
            <div className="max-w-fd-container mx-auto w-full flex-col gap-2">
              <p className="text-xs text-fd-muted-foreground/50 font-mono">{new Date(post.data.date).toDateString()}</p>
              <h2 className="text-2xl truncate group-hover:text-fd-primary duration-300">{post.data.title}</h2>
              {post.data.tags && (
                <div className="flex gap-2 -ml-2">
                  {post.data.tags.map((tag: string) => (
                    <span key={tag} className="text-xs text-fd-muted-foreground/50 font-mono bg-fd-accent/40 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="mb-4 line-clamp-3 text-fd-muted-foreground">{post.data.description}</p>
              {post.data.authors && (
                <div className="flex gap-2 mt-2">
                  {post.data.authors.map((author: {
                    name: string,
                    title: string,
                    url: string,
                    image_url: string,
                    socials: string[],
                  }) => (
                    <div key={author.name} className="flex items-center gap-2">
                      <img src={author.image_url} alt={author.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="text-sm font-semibold">{author.name}</p>
                        <p className="text-xs text-fd-muted-foreground">{author.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}

        <div className="mt-auto border-b border-dashed max-w-fd-container mx-auto w-full"/>
      </div>
      <FooterSection />
    </main>
  );
}