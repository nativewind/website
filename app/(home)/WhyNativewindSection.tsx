import SectionTitle from "./SectionTitle";

import WhyNativewindCard from "./WhyNativeWindCard";

import DarkModeVisual from "./DarkModeVisual";
import ColorsVisual from "./ColorsVisual";
import CSSVariablesVisual from "./CSSVariablesVisual";
import CSSAnimationVisual from "./CSSAnimationVisual";

export default function WhyNativewindSection() {
  return (
    <>
      <SectionTitle id="why-nativewind" title="Why Nativewind?" />

      <section className="relative flex flex-col w-full max-w-fd-container mx-auto -mt-[1px]">      

        <div className="flex-1 flex max-sm:flex-col w-full border-t border-dashed">
          <WhyNativewindCard href="/docs/core-concepts/dark-mode" title="Dark/Light mode" number="00" color="cyan" visual={<DarkModeVisual/>} />
          <div className="border-r border-dashed -mx-[0.5px]"/>
          <WhyNativewindCard href="/docs/customization/colors" title="P3 Colors" number="01" color="pink" visual={
            <ColorsVisual />
          } />
        </div>
        <div className="border-b border-dashed -my-[0.5px]"/>
        <div className="flex-1 flex max-sm:flex-col w-full">
          <WhyNativewindCard href="/docs/guides/themes" title="CSS Variables" number="03" color="orange" visual={
            <CSSVariablesVisual />
          } />
          <div className="border-r border-dashed -mx-[0.5px]"/>
          <WhyNativewindCard href="/docs/tailwind/transitions-animation/animation" title="CSS Animations" number="04" color="purple" visual={
            <CSSAnimationVisual />
          } />
        </div>
      </section>
    </>
  )
}