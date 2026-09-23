import { cn } from "@/lib/cn";

export default function SectionLink({href, name, border, className}: {href: string, name: string, border?: boolean, className?: string}) {
  return (
    <span className={cn(className, `sticky block w-full max-w-fd-container top-14 mx-auto text-fd-muted-foreground/50 text-xs text-left font-mono ${ border && 'pl-1'}`)}>
      <a href={href} className="group w-fit">
        {/* -rotate-90 block -translate-x-[calc(50%+1rem)] translate-y-[calc(100%+5rem)] */}
        <span className={`opacity-0 group-hover:opacity-100 duration-300 absolute left-0 pr-2 pl-1.5 -translate-x-full ${border && 'border-l border-y -bottom-[1px] border-dashed'}`}>
          #
        </span>
        {name}
      </a>
    </span>
  )
}
