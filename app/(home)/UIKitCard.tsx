import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface UIKitCardProps {
  url: string;
  title: string;
  preview: string;
  description: string;
}

export default function UIKitCard({
  url,
  title,
  preview,
  description,
}: UIKitCardProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="p-8 lg:p-10 lg:pb-8 flex-1 hover:bg-black/5 dark:hover:bg-cyan-400/5 duration-300 group border-r border-dashed relative">
      <div className="absolute inset-0 -z-10 bg-grid-dots-current group-hover:text-cyan-400/40 h-full w-full text-transparent duration-300" />
      <div className="lg:-m-2 border border-dashed rounded-md backdrop-blur group-hover:rounded-xl duration-600 ease-out p-2 group-hover:border-black dark:group-hover:border-cyan-400">
        <img className="rounded-sm group-hover:rounded-lg duration-600 aspect-video" src={preview} />
      </div>
      <h2 className="text-lg font-semibold mt-8 relative flex gap-2">{title}
        <ExternalLink className="mt-1 h-4.5 w-4.5 group-hover:translate-0 -translate-x-2 translate-y-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-300" />
      </h2>
      <p className="text-sm opacity-50 mt-4 text-pretty line-clamp-4">{description}</p>
    </Link>
  )
}
