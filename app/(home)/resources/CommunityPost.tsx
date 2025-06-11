import { Socials, GithubIcon, TwitterIcon } from '@/app/(home)/FooterSection';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface CommunityPostProps {
  url: string;
  image: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
    username: string;
    github: string;
    twitter: string;
  }
}


export default function CommunityPost({
  title,
  description,
  author,
  image,
  url,
}: CommunityPostProps) {  
  return (
  <div className="flex flex-col border-r border-dashed shrink-0 relative group/card">
    <div className="flex m-2 rounded-2xl hover:shadow-xl flex-col-reverse hover:bg-white dark:hover:bg-fd-muted duration-300">
      <Link
        target="_blank"
        href={url}
        className="flex flex-col m-2 mt-0 rounded-lg relative group group-hover/card:bg-fd-background duration-300 border group-hover/card:border-fd-border border-transparent">
        {/* <div className="absolute top-24 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-fd-background to-fd-accent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"> */}
        {/* tail */}
        {/* <div className="absolute bottom-0 left-0 w-4 h-5 rounded-r-2xl bg-fd-background border-b-2 -translate-x-1/2 translate-y-[1px]"/>
        <div className="absolute bottom-0 left-0 w-2 h-8 rounded-br-2xl bg-white border-r -translate-x-full translate-y-[1px]"/> */}
        {/* </div> */}
        <img src={image} alt={`${title} Thumbnail`} className="aspect-video object-cover rounded-t-lg h-auto w-76 mb-4" />
        <h2 className="text-lg font-semibold flex gap-2 group-hover/card:translate-x-4 duration-300">
          {title}
          <ExternalLink className="mt-1 h-4.5 w-4.5 group-hover/card:translate-0 -translate-x-2 translate-y-2 opacity-0 scale-75 group-hover/card:opacity-100 group-hover/card:scale-100 duration-300" />
        </h2>
        <p className="text-fd-muted-foreground text-sm max-w-68 mb-4 line-clamp-2 group-hover/card:translate-x-4 duration-300 group-hover/card:delay-50">
          {description}
        </p>
      </Link>
      <div className="p-3 flex gap-8 justify-between items-center">
        <Link href={author.github} target="_blank" className="flex items-center gap-2 group">
          <img src={author.avatar} className="w-8 h-8 rounded-full mr-2" />
          <div className="flex flex-col">
            <div className="text-sm font-semibold underline group-hover:underline-offset-2 truncate decoration-transparent group-hover:decoration-fd-primary">{author.name}</div>
            <div className="text-xs text-fd-muted-foreground truncate">@{author.username}</div>
          </div>
        </Link>
        <Socials socials={[
          { name: 'GitHub', href: author.github, icon: GithubIcon  },
          { name: 'Twitter', href: author.twitter, icon: TwitterIcon }
        ]} />
        </div>
      </div>
    </div>
  )
}