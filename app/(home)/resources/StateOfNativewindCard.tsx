import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Play } from 'lucide-react';

export default function StateOfNWCard({ date, url }: { date: string; url: string }) {
  return (
    <Link
      key={date}
      target="_blank"
      href={url}
      className="flex flex-col p-8 border-r border-dashed shrink-0 group relative hover:bg-fd-muted/30 transition-colors duration-300">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-fd-background to-fd-accent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <Play className="fill-current size-6 stroke-none text-fd-primary drop-shadow-2xl drop-shadow-fd-primary" />
      </div>
      <Image src="/og.png" width={1280} height={720} alt="State of Nativewind Thumbnail" className="aspect-video h-auto w-76 rounded-md mb-4 group-hover:opacity-50 transition-opacity duration-300" />
      <h2 className="text-lg font-semibold flex gap-2">
        State of Nativewind
        <ExternalLink className="mt-1 h-4.5 w-4.5 group-hover:translate-0 -translate-x-2 translate-y-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-300" />
      </h2>
      <p className="text-fd-muted-foreground text-sm">
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    </Link>
    
  )
}