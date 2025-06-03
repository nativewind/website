import { LargeSearchToggle } from "@/components/layout/search-toggle";
import VectorField from './VectorField';
import CTA from "./CTA";
import SectionLink from "./SectionLink";
import HeroSectionVisual from "./HeroSectionVisual";

export default function HeroSection() {
  return (
    <section className="flex relative flex-col box-content overflow-clip">
      <div className="flex flex-col gap-8 justify-center box-content h-full flex-1 pb-6 pt-24 sm:pb-24 sm:pt-38">
        
      <div className="absolute -z-10 inset-0 w-full h-full overflow-x-clip [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-position:center_top] [mask-composite:exclude] [mask-mode:alpha] [mask-origin:content-box] [mask-clip:content-box] [mask-border-mode:match-source]  [mask-image:linear-gradient(to_bottom,red,transparent_88%)]">
        {/* <div className="-z-10 bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-800 rounded-full w-[50rem] h-[50rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border dark:blur-3xl"/> */}
        <div className="bg-grid-dots rounded-full w-[50rem] h-[50rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(red,transparent_80%)]"></div>
      </div>

      <VectorField />
        
      <SectionLink border className="z-30 hidden sm:block lg:hidden !relative -translate-y-6 max-lg:px-4" href="#" name="px-4 text-4xl text-balance tracking-tight leading-tight" />
      <SectionLink border className="z-30 hidden lg:block !relative -translate-y-6 max-lg:px-4" href="#" name="text-5xl text-balance tracking-tight leading-tight" />
        <h1 className="text-4xl lg:text-5xl text-balance tracking-tight leading-tight font-medium dark:opacity-90 border-y border-dashed backdrop-blur-xs">
          <div className="max-w-fd-container text-start mx-auto max-lg:px-4 w-full bg-gradient-to-br from-black/50 to-cyan-800/90 bg-clip-text text-transparent dark:from-white/80 dark:from-50%">
            <div className="contents xl:block xl:max-w-1/2">
              Style your React Native apps using Tailwind CSS.
            </div>
          </div>
        </h1>
        <div className="flex justify-center border-y border-dashed relative backdrop-blur-xs dark:opacity-90"> 
            <div className="w-full max-w-fd-container mx-auto relative">
            <p className="text-fd-muted-foreground text-pretty max-w-[65ch] max-lg:px-4 text-start">
              The utility-first workflow you love from Tailwind CSS in your React Native applications. Enjoy consistent styling across platforms with the same intuitive classes.
            </p>
          </div>
        </div>

        <div className="border-y border-dashed box-content backdrop-blur-xs dark:opacity-90">
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