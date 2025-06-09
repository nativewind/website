import Link from 'next/link';

interface Author {
  name: string;
  title: string;
  url: string;
  image_url: string;
  socials: string[];
}

interface BlogPost {
  url: string;
  data: {
    date: string;
    title: string;
    tags?: string[];
    description: string;
    authors?: Author[];
  };
}

export default function BlogPostLink({ post }: { post: BlogPost }) {
  return (
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
  );
}
