import SectionLink from "./SectionLink";
import { ExternalLink } from 'lucide-react';

export default function ComponentKitsSection() {
  return (
    <>
      <h1 id="component-kits" className="text-3xl font-bold pb-8 border-t border-dashed backdrop-blur w-full dark:opacity-90 -mt-[1px] pt-9 relative">
        <div className="w-full max-w-fd-container mx-auto max-md:px-4 text-left relative">
          UI Component Kits
        </div>
      </h1>

      <section className="relative flex flex-col w-full max-w-fd-container mx-auto -mt-[1px] border-t border-dashed [mask:linear-gradient(to_bottom,red_calc(100%-5rem),transparent)]">    
        {/* <SectionLink className="z-30" href="#component-kits" name="component kits" /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-dashed text-left">
          <a href="https://nativewindui.com" target="_blank" rel="noopener noreferrer" className="p-10 flex-1 hover:bg-black/5 dark:hover:bg-cyan-400/5 duration-300 group border-r border-dashed relative">
            <div className="absolute inset-0 -z-10 bg-grid-dots-current group-hover:text-cyan-400/40 h-full w-full text-transparent duration-300" />
            <div className="-m-2 border border-dashed rounded-md backdrop-blur group-hover:rounded-xl duration-600 ease-out p-2 group-hover:border-black dark:group-hover:border-cyan-400">
              <img className="rounded-sm group-hover:rounded-lg duration-600" src="https://nativewindui.com/og.png" />
            </div>
            <h2 className="text-lg font-semibold mt-8 relative flex gap-2">NativewindUI
              <ExternalLink className="mt-1 h-4.5 w-4.5 group-hover:translate-0 -translate-x-2 translate-y-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-300" />
            </h2>
            <p className="text-sm opacity-50 mt-4 text-pretty">30+ beautiful components and flows that strive for a native look & feel. The perfect starting point for those who need to ship fast and look good doing it.</p>
          </a>
          <a href="https://rnr-docs.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-10 flex-1 hover:bg-black/5 dark:hover:bg-cyan-400/5 duration-300 group border-r border-dashed relative">
            <div className="absolute inset-0 -z-10 bg-grid-dots-current group-hover:text-cyan-400/40 h-full w-full text-transparent duration-300" />
            <div className="-m-2 border border-dashed rounded-md backdrop-blur group-hover:rounded-xl duration-600 ease-out p-2 group-hover:border-black dark:group-hover:border-cyan-400">
              <img className="rounded-sm group-hover:rounded-lg duration-600" src="https://rnr-docs.vercel.app/og.jpeg" />
            </div>
            <h2 className="text-lg font-semibold mt-8 relative flex gap-2">React Native Reusables
              <ExternalLink className="mt-1 h-4.5 w-4.5 group-hover:translate-0 -translate-x-2 translate-y-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-300" />
            </h2>
            <p className="text-sm opacity-50 mt-4 text-pretty">Build your own component libraries with react-native-reusables. Copy, paste, and tailor the code to suit your specific requirements.</p>
          </a>
          <a href="https://gluestack.io/" target="_blank" rel="noopener noreferrer" className="p-10 flex-1 hover:bg-black/5 dark:hover:bg-cyan-400/5 duration-300 group max-lg:border-r max-lg:border-t border-dashed relative">
            <div className="absolute inset-0 -z-10 bg-grid-dots-current group-hover:text-cyan-400/40 h-full w-full text-transparent duration-300" />
            <div className="-m-2 border border-dashed rounded-md backdrop-blur group-hover:rounded-xl duration-600 ease-out p-2 group-hover:border-black dark:group-hover:border-cyan-400">
              <img className="rounded-sm group-hover:rounded-lg duration-600" src="https://gluestack.io/images/og-image.png" />
            </div>
            <h2 className="text-lg font-semibold mt-8 relative flex gap-2">Gluestack
              <ExternalLink className="mt-1 h-4.5 w-4.5 group-hover:translate-0 -translate-x-2 translate-y-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-300" />
            </h2>
            <p className="text-sm opacity-50 mt-4 text-pretty">Comprehensive React and React Native component library for building modern, high-performance web and mobile apps. Copy-paste UI components library & patterns crafted with Tailwind CSS (NativeWind).</p>
          </a>
        </div>
      </section>
    </>
  )
}