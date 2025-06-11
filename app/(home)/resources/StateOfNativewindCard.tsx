import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { ExternalLink, Play } from 'lucide-react';

export default function StateOfNWCard({ title, image, date, time, url }: { title: string, image: StaticImageData; date: string; time: string, url: string }) {
  return (
    <Link
      key={date}
      target="_blank"
      href={url}
      className="flex flex-col p-8 sm:p-4 border-r border-dashed shrink-0 group relative hover:bg-fd-muted/70 transition-colors duration-300">
      <div className="relative mb-3 bg-black rounded-2xl border">
        <div className="absolute top-1/2 left-1/2 -translate-1/2 rounded-full bg-gradient-to-br from-fd-background to-fd-accent p-2 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] duration-300 z-10 overflow-clip">
          {/* shimmer */}
          <div className="w-2 h-full rotate-45 bg-none dark:bg-white/50 absolute -top-7 -left-2 delay-400 group-hover:duration-1000 group-hover:translate-16 blur-sm" />
          <Play className="fill-current translate-x-0.5 size-10 stroke-none text-fd-primary drop-shadow-2xl drop-shadow-fd-primary scale-75 delay-150 duration-300 group-hover:scale-100 ease-[cubic-bezier(0.175,0.885,0.12,1.575)]" />
        </div>
        <Image src={image} width={1280} height={720} alt="State of Nativewind Thumbnail" className="aspect-video h-auto w-76 rounded-2xl group-hover:opacity-50 transition-opacity duration-300 object-cover" />
        <div className="absolute bottom-2 right-2 rounded-full bg-fd-muted px-1.5 py-0.5 text-xs">
          {time}
        </div>
      </div>
      {/* <div className="flex -space-x-2 mb-1">
        <div className="size-8 bg-gray-500 rounded-full border-fd-background border-2" />
        <div className="size-8 bg-gray-500 rounded-full border-fd-background border-2" />
      </div> */}
      <h2 className="text-lg font-semibold flex gap-2 max-w-76 leading-tight underline decoration-transparent group-hover:decoration-fd-primary transition-all duration-300">
        {title}
        <ExternalLink className="mt-1 h-4.5 w-4.5 group-hover:translate-0 -translate-x-2 translate-y-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-300" />
      </h2>
      <p className="text-fd-muted-foreground text-xs">
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    </Link>
    
  )
}