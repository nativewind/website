import Link from "next/link";

export default function CTA() {
  return (
    <Link href="/docs" className="group relative box-content pl-4 pr-2 py-2 -my-[1px] text-fd-background">
      <div>Get Started</div>
      <div className="-z-10 absolute top-0 left-0 h-[80%] w-full bg-fd-foreground/80 group-hover:translate-1 duration-300 border-t border-dashed"/>
      <div className="-z-10 absolute top-0.5 left-0.5 h-[80%] w-full bg-fd-foreground/80 group-hover:translate-0.5 duration-300"/>
      <div className="-z-10 absolute top-1.5 left-1.5 h-[80%] w-full bg-fd-foreground/80 group-hover:-translate-0.5 duration-300"/>
      <div className="-z-10 absolute top-2 left-2 h-[80%] w-full bg-fd-foreground/80 group-hover:-translate-1 duration-300 border-b border-dashed"/>

      <div className="-z-10 group-hover:border-fd-background border-transparent border-y border-dashed absolute top-1 left-1 h-[80%] w-full bg-fd-foreground/80 group-hover:scale-y-120 group-hover:bg-fd-primary duration-300"/>
    </Link>
  )
}