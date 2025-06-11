import SectionLink from "./SectionLink";
import { cn } from "@/lib/cn";

export default function SectionTitle({ id, title, className } : { id: string; title: string, className?: string }) {
  return (
    <h1 id={id} className={cn('text-2xl md:text-4xl font-medium max-lg:px-8 pt-8 pb-4 md:pt-12 border-b border-dashed backdrop-blur w-full dark:opacity-90 text-left', className)}>
      <SectionLink className="z-30 md:hidden" href={`#${id}`} name="text-2xl px-8 pb-4 pt-8 " />
      <SectionLink className="z-30 hidden md:block lg:hidden" href={`#${id}`} name="text-4xl px-4 pb-8 pt-12 " />
      <SectionLink className="z-30 hidden lg:block" href={`#${id}`} name="text-4xl pb-8 pt-12 " />
      <div className="w-full max-w-fd-container mx-auto">
        {title}
      </div>
    </h1>
  )
}