import { ArrowRight } from "lucide-react";

interface WhyNativewindCardProps {
  title: string;
  number: string;
  visual?: React.ReactNode;
  href?: string;
  color?: string;
}

const gradientVariants = {
  pink: 'to-pink-400 ',
  cyan: 'to-cyan-400 ',
  orange: 'to-orange-400 ',
  purple: 'to-indigo-400 ',
}

const colorVariants = {
  pink: 'bg-pink-500',
  cyan: 'bg-cyan-500',
  orange: 'bg-orange-500',
  purple: 'bg-indigo-500',
}

const textVariants = {
  pink: 'group-hover:text-pink-500 dark:group-hover:text-pink-400 max-md:text-pink-500 dark:max-md:text-pink-400',
  cyan: 'group-hover:text-cyan-500 dark:group-hover:text-cyan-400 max-md:text-cyan-500 dark:max-md:text-cyan-400',
  orange: 'group-hover:text-orange-500 dark:group-hover:text-orange-400 max-md:text-orange-500 dark:max-md:text-orange-400',
  purple: 'group-hover:text-indigo-500 dark:group-hover:text-indigo-400 max-md:text-indigo-500 dark:max-md:text-indigo-400',
}

const borderVariants = {
  pink: 'group-hover:border-pink-500/40 dark:group-hover:border-pink-400/40 max-md:border-pink-500/40 dark:max-md:border-pink-400/40',
  cyan: 'group-hover:border-cyan-500/40 dark:group-hover:border-cyan-400/40 max-md:border-cyan-500/40 dark:max-md:border-cyan-400/40',
  orange: 'group-hover:border-orange-500/40 dark:group-hover:border-orange-400/40 max-md:border-orange-500/40 dark:max-md:border-orange-400/40',
  purple: 'group-hover:border-indigo-500/40 dark:group-hover:border-indigo-400/40 max-md:border-indigo-500/40 dark:max-md:border-indigo-400/40',
}

export default function WhyNativewindCard({
  title,
  number,
  visual,
  href = '/docs',
  color,
} : WhyNativewindCardProps) {
  return (
    <a href={href} className="flex-1 min-w-[50%] relative group overflow-x-clip" draggable="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="absolute -top-0.75 -right-0.75 z-20 duration-300 group-hover:-translate-x-8.5 group-hover:translate-y-8.5 group-hover:scale-200"><path d="M21 8V5a2 2 0 0 0-2-2h-3" /></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-0.75 -left-0.75 duration-300 group-hover:-translate-y-8.5 group-hover:translate-x-8.5 group-hover:scale-200 z-20"><path d="M3 16v3a2 2 0 0 0 2 2h3" /></svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-0.75 -right-0.75 z-10"><path d="M16 21h3a2 2 0 0 0 2-2v-3" /></svg> */}
      {/* duration-300 group-hover:-translate-8 group-hover:scale-200 */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-0.75 -left-0.75 z-10"><path d="M8 3H5a2 2 0 0 0-2 2v3" /></svg> */}
      {/* duration-300 group-hover:translate-8 group-hover:scale-200 */}
      
      <div className="bg-grid-lines absolute inset-0 ease-out duration-300 group-hover:opacity-50 opacity-0" />
      <div className={`bg-gradient-to-b from-transparent via-transparent ${gradientVariants[color as keyof typeof gradientVariants]} absolute inset-0 opacity-5 group-hover:opacity-20 duration-300`} />
      <div className="w-full h-full z-10 p-6 relative flex flex-col items-start">

        <div className={`text-2xl -mt-4 font-mono text-right ${textVariants[color as keyof typeof textVariants]} translate-y-1/2 px-4 w-full duration-300 lg:text-4xl z-10`}>
          {title}
        </div>
        <div className={`text-2xl -mt-4 font-mono text-right ${textVariants[color as keyof typeof textVariants]} translate-y-1/2 px-4 w-full duration-300 lg:text-4xl absolute top-6 right-6 font-bold`}>
          {title}
        </div>
        <div className={`relative w-full max-h-[28rem] grid place-items-center aspect-square rounded-2xl border bg-fd-background/50 backdrop-blur text-left text-fd-foreground/50 ${borderVariants[color as keyof typeof borderVariants]} duration-300 overflow-clip min-h-[calc(100%-5rem)]`}>
          <div className="group-hover:grayscale border h-3 w-3 bg-red-500/10 rounded-full absolute left-2 top-2 border-red-500/10" />
          <div className="group-hover:grayscale border h-3 w-3 bg-yellow-500/10 rounded-full absolute left-7 top-2 border-yellow-500/10" />
          <div className="group-hover:grayscale border h-3 w-3 bg-green-500/10 rounded-full absolute left-12 top-2 border-green-500/10" />

          {visual}
        </div>

        <div className="flex justify-between items-end w-full">
          <div
            className="relative flex items-center gap-2 opacity-90 duration-300 cut-corners py-2 pl-6 pr-4 rounded-tr-md rounded-bl-md bg-black text-black dark:text-white sm:text-white sm:dark:text-black group-hover:text-black dark:group-hover:text-white dark:bg-white font-bold group-hover:opacity-100 mt-4"
            >
            <div className={`absolute -z-10 inset-0 ${colorVariants[color as keyof typeof colorVariants]} sm:translate-y-full sm:-translate-x-full group-hover:translate-0 duration-300 rounded-md`} />
            Read the Docs
            <ArrowRight className="w-5 h-5 duration-300 group-hover:translate-x-0.5 -translate-x-0.5" />
          </div>
          <div className={`text-2xl lg:text-4xl font-mono ${textVariants[color as keyof typeof textVariants]} duration-300`}>
           [{ number }]
          </div>
        </div>
      </div>
    </a> 
  )
}
