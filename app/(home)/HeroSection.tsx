import { LargeSearchToggle } from "@/components/layout/search-toggle";
import VectorField from './VectorField';
import CTA from "./CTA";
import SectionLink from "./SectionLink";
import HeroSectionVisual from "./HeroSectionVisual";

export default function HeroSection() {
  return (
    <section className="flex relative flex-col box-content overflow-clip">
      <div className="flex flex-col gap-8 justify-center box-content h-full flex-1 pb-6 pt-24 sm:pb-24 sm:pt-38">
      {/* <div className="absolute top-1/4 right-1/4 bg-gradient-to-r from-cyan-500/20 to-cyan-400 bg-clip-text text-transparent text-4xl perspective-dramatic scale-3d -rotate-z-30 rotate-x-60 scale-60">nw-text-cyan-500/80</div> */}
      {/* <div className="absolute top-1/4 left-1/4 bg-gradient-to-r from-pink-400 to-pink-500/20 bg-clip-text text-transparent text-4xl perspective-dramatic scale-3d rotate-z-30 -rotate-x-60 scale-60">nw-text-pink-500/80</div> */}
        
      {/* [mask-image:linear-gradient(to_bottom,red,transparent_55%)] */}
      <div className="absolute -z-10 inset-0 w-full h-full overflow-x-clip [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-position:center_top] [mask-composite:exclude] [mask-mode:alpha] [mask-origin:content-box] [mask-clip:content-box] [mask-border-mode:match-source]  [mask-image:linear-gradient(to_bottom,red,transparent_88%)]">
        <div className="-z-10 bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-800 rounded-full w-[50rem] h-[50rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border dark:blur-3xl"/>

        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div> */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-z-30 rotate-x-66 w-[33rem] h-[33rem] rounded-[100%] p-4 animate-react-rotate bg-gradient-to-r from-cyan-200 from-0% to-10% to-transparent">
          <div className="w-full h-full bg-white dark:bg-black rounded-[100%]"></div>
        </div> */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-30 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div> */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-30 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24"><g clipPath="url(#prefix__clip0)"><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg> */}
        <div className="bg-grid-dots rounded-full w-[50rem] h-[50rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(red,transparent_80%)]"></div>
      </div>
      {/* <div className="-z-10 h-24 w-[33rem] bg-cyan-500/50 rounded-[100%] max-w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl "></div> */}

      <VectorField />
        
      <SectionLink border className="z-30 hidden sm:block lg:hidden !relative -translate-y-6 max-lg:px-4" href="#" name="px-4 text-4xl text-balance tracking-tight leading-tight" />
      <SectionLink border className="z-30 hidden lg:block !relative -translate-y-6 max-lg:px-4" href="#" name="text-5xl text-balance tracking-tight leading-tight" />
      <h1 className="text-4xl lg:text-5xl font-medium dark:opacity-90 bg-gradient-to-br from-black/50 to-cyan-800/90 bg-clip-text text-transparent dark:from-white/80 dark:from-50% border-y border-dashed bg-fd-background backdrop-blur tracking-tight leading-tight">
        <div className="max-w-fd-container text-start mx-auto max-lg:px-4 text-balance w-full">
            Style your React Native apps using Tailwind CSS.
        </div>
      </h1>
      <div className="flex justify-center border-y border-dashed relative backdrop-blur dark:opacity-90"> 
          <div className="w-full max-w-fd-container mx-auto relative">
          <p className="text-fd-muted-foreground text-pretty max-w-[65ch] max-lg:px-4 text-start">
            The utility-first workflow you love from Tailwind CSS in your React Native applications. Enjoy consistent styling across platforms with the same intuitive classes.
          </p>
        </div>
      </div>

        <div className="border-y border-dashed box-content backdrop-blur dark:opacity-90">
          <div className="w-full max-w-fd-container mx-auto flex gap-4 max-lg:px-4">
            <LargeSearchToggle
              className="w-full max-w-[200px] sm:max-w-[240px] -my-[1px]"
              onHeroSection
              hideIfDisabled
            />
            <CTA />
          </div>
        </div>
      </div>
      <HeroSectionVisual />
    </section>
  )
}