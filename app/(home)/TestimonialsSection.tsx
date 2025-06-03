"use client"
import SectionTitle from "./SectionTitle";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection({
  children
} : {
  children?: React.ReactNode;
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <SectionTitle id="showcase" title="Who is using Nativewind?" />

      <section className={`relative flex flex-col w-full max-w-fd-container mx-auto -mt-[1px] border-y border-dashed ${
        showMore ? 'overflow-clip' : 'max-h-[50vh] overflow-hidden'
        }`}>
        {children}
        {!showMore && (
          <div className="[mask-image:linear-gradient(to_bottom,transparent,red)] absolute bottom-0 w-full inset-x-0 h-1/2 pointer-events-none backdrop-blur bg-fd-background/0">
            <div className="cursed w-full h-full backdrop-blur-3xl bg-fd-background/80" />
          </div>
        )}
        <div className="sticky z-10 bottom-0 w-full pointer-events-none">
          <button className="group pointer-events-auto mx-auto mb-4 w-30 font-semibold text-fd-background justify-between pl-3 p-1.5 rounded-xl border border-fd-background/30 shadow-lg flex items-center gap-1 bg-fd-primary hover:bg-fd-card active:bg-fd-accent cursor-pointer hover:text-fd-primary hover:scale-110 hover:-translate-y-0.5 hover:shadow-xl dark:hover:shadow-2xl active:duration-75 active:translate-y-0.5 duration-300 dark:hover:shadow-fd-primary hover:border-fd-primary ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:border-dashed text-sm"
            onClick={() => {
              setShowMore(!showMore)
              document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Show {showMore ? 'less' : 'more'}
            <div className="flex flex-col -space-y-1.5">
              <ChevronUp className={`size-4 stroke-3 delay-75 ${showMore ? 'translate-y-2/3 group-hover:translate-y-3/5' : 'group-hover:-translate-y-0.5'} duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]`} />
              <ChevronDown className={`size-4 stroke-3 delay-75 ${showMore ? '-translate-y-2/3 group-hover:-translate-y-3/5' : 'group-hover:translate-y-0.5'} duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]`} />
            </div>
          </button>
        </div>
      </section>
    </>
  );
}
