"use client"

import { ClipboardCheck } from "lucide-react";
import { useState } from "react"

const colors = [
  { name: 'red', shades: ['bg-red-50', 'bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900', 'bg-red-950'] },
  { name: 'orange', shades: ['bg-orange-50', 'bg-orange-100', 'bg-orange-200', 'bg-orange-300', 'bg-orange-400', 'bg-orange-500', 'bg-orange-600', 'bg-orange-700', 'bg-orange-800', 'bg-orange-900', 'bg-orange-950'] },
  { name: 'amber', shades: ['bg-amber-50', 'bg-amber-100', 'bg-amber-200', 'bg-amber-300', 'bg-amber-400', 'bg-amber-500', 'bg-amber-600', 'bg-amber-700', 'bg-amber-800', 'bg-amber-900', 'bg-amber-950'] },
  { name: 'yellow', shades: ['bg-yellow-50', 'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300', 'bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800', 'bg-yellow-900', 'bg-yellow-950'] },
  { name: 'lime', shades: ['bg-lime-50', 'bg-lime-100', 'bg-lime-200', 'bg-lime-300', 'bg-lime-400', 'bg-lime-500', 'bg-lime-600', 'bg-lime-700', 'bg-lime-800', 'bg-lime-900', 'bg-lime-950'] },
  { name: 'green', shades: ['bg-green-50', 'bg-green-100', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800', 'bg-green-900', 'bg-green-950'] },
  { name: 'emerald', shades: ['bg-emerald-50', 'bg-emerald-100', 'bg-emerald-200', 'bg-emerald-300', 'bg-emerald-400', 'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-700', 'bg-emerald-800', 'bg-emerald-900', 'bg-emerald-950'] },
  { name: 'teal', shades: ['bg-teal-50', 'bg-teal-100', 'bg-teal-200', 'bg-teal-300', 'bg-teal-400', 'bg-teal-500', 'bg-teal-600', 'bg-teal-700', 'bg-teal-800', 'bg-teal-900', 'bg-teal-950'] },
  { name: 'cyan', shades: ['bg-cyan-50', 'bg-cyan-100', 'bg-cyan-200', 'bg-cyan-300', 'bg-cyan-400', 'bg-cyan-500', 'bg-cyan-600', 'bg-cyan-700', 'bg-cyan-800', 'bg-cyan-900', 'bg-cyan-950'] },
  { name: 'sky', shades: ['bg-sky-50', 'bg-sky-100', 'bg-sky-200', 'bg-sky-300', 'bg-sky-400', 'bg-sky-500', 'bg-sky-600', 'bg-sky-700', 'bg-sky-800', 'bg-sky-900', 'bg-sky-950'] },
  { name: 'blue', shades: ['bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900'] },
  { name: 'indigo', shades: ['bg-indigo-50',' bg-indigo-100',' bg-indigo-200',' bg-indigo-300',' bg-indigo-400',' bg-indigo-500',' bg-indigo-600',' bg-indigo-700',' bg-indigo-800',' bg-indigo-900'] },
  { name: "violet", shades: ["bg-violet-50", "bg-violet-100", "bg-violet-200", "bg-violet-300", "bg-violet-400", "bg-violet-500", "bg-violet-600", "bg-violet-700", "bg-violet-800", "bg-violet-900"] },
  { name: "purple", shades: ["bg-purple-50", "bg-purple-100", "bg-purple-200", "bg-purple-300", "bg-purple-400", "bg-purple-500", "bg-purple-600", "bg-purple-700", "bg-purple-800", "bg-purple-900"] },
  { name: "fuchsia", shades: ["bg-fuchsia-50", "bg-fuchsia-100", "bg-fuchsia-200", "bg-fuchsia-300", "bg-fuchsia-400", "bg-fuchsia-500", "bg-fuchsia-600", "bg-fuchsia-700", "bg-fuchsia-800", "bg-fuchsia-900"] },
  { name: "pink", shades: ["bg-pink-50", "bg-pink-100", "bg-pink-200", "bg-pink-300", "bg-pink-400", "bg-pink-500", "bg-pink-600", "bg-pink-700", "bg-pink-800", "bg-pink-900"] },
  { name: "rose", shades: ["bg-rose-50", "bg-rose-100", "bg-rose-200", "bg-rose-300", "bg-rose-400", "bg-rose-500", "bg-rose-600", "bg-rose-700", "bg-rose-800", "bg-rose-900"] },
]

const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']

export default function ColorsVisual() {
  const [copied, setCopied] = useState(false);
  const [copiedShade, setCopiedShade] = useState('');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);


  const handleCopyColor = (color: string) => (e: { stopPropagation: () => void; preventDefault: () => void; }) => {
    e.stopPropagation()
    e.preventDefault()
    navigator.clipboard.writeText(color.replace('bg-', ''))
    setCopiedShade(color)
    setCopied(true)
    if (timeoutId) clearTimeout(timeoutId)
    const newTimeoutId = setTimeout(() => {
      setCopied(false)
    }, 1500)
    setTimeoutId(newTimeoutId)
  }

  return (
    <div id="container"className="w-full h-full sm:overflow-x-scroll overflow-y-clip hide-scrollbar"
      onMouseMove={(e) => {
        if (window.innerWidth < 768) return;
        const { clientX, clientY, currentTarget } = e;
        const { left, top, right, bottom } = currentTarget.getBoundingClientRect();
        const centerX = (left + right) / 2;
        const centerY = (top + bottom) / 2;
        const scrollLeft =
          ((clientX - centerX) / (centerX - left)) * currentTarget.scrollWidth;
        const scrollTop =
          ((clientY - centerY) / (centerY - top)) * currentTarget.scrollHeight;
        currentTarget.scrollTo({
          left: scrollLeft,
          // top: scrollTop,
          behavior: "smooth",
        });
      }}
      onMouseLeave={(e) => {
        e.currentTarget.scrollTo({
          left: 0,
          // top: 0,
          behavior: "smooth",
        });
      }}
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <div className={`absolute flex items-center z-30 bottom-0 left-1/2 -translate-x-1/2 py-1.5 px-3 rounded-full bg-fd-background/80 backdrop-blur border $${copied ? 'opacity-100 -translate-y-4' : 'opacity-0 translate-y-full'} transition-all duration-300 shadow-xl text-nowrap`}>
        <ClipboardCheck className={`w-4 h-4 mr-1 text-fd-foreground ${copied ? 'animate-bounce' : ''}`} />
        Copied 
        <div className="rounded-md text-xs mx-1 py-0.5 px-1.5 font-mono whitespace-nowrap"style={{
          color: `var(${copiedShade.replace('bg-', '--color-')})`,
          backgroundColor: Number(copiedShade.split('-')[2]) > 500 ? `var(${copiedShade.replace('bg-', '--color-').replace(/-\d{2,3}$/, '-200')})` : `var(${copiedShade.replace('bg-', '--color-').replace(/-\d{2,3}$/, '-800')})`,
        }}>
          {copiedShade.replace('bg-', '')}
        </div> <span className="hidden sm:inline">to clipboard</span>
      </div>
      <div className="grid grid-cols-18 grid-rows-11 w-[42rem] h-[28.25rem] mt-12 p-4 opacity-80 md:opacity-100 md:grayscale-100 group-hover:opacity-100 group-hover:grayscale-0 duration-300 transition-all">
        {/* cell 0 0 */}
        <div />
        {/* row 1 */}
        {colors.map((color, index) => (
          <div key={index} className="relative flex items-center translate-x-2.5">
            <div className="absolute inset-0 border-l -skew-x-30"/>
            <div className="-rotate-60 w-full pl-3 opacity-80">{color.name}</div>
          </div>
        ))}
        {/* col1 */}
        {shades.map((shade, index) => (
          <div key={index} className="contents">
            <div className="relative flex items-center text-right">
            <div className="absolute inset-0 border-t"/>
              <div className="w-full py-0.5 pr-2 opacity-80">{shade}</div>
            </div>
            {/* rest of colns and rows */}
            {colors.map((color) => (
              <div className="w-full h-full p-0.5 group/color active:scale-90 duration-75"key={color.name} onClick={handleCopyColor(color.shades[index])}>
                <div className={`w-full h-full ${color.shades[index]} rounded-lg border border-dashed md:opacity-20 group-hover:opacity-50 group-hover/color:opacity-90 group-hover/color:rounded-2xl duration-500 group-hover/color:duration-0 group-active/color:opacity-100 group-active/color:duration-75`} />
              </div>
            ))}
          </div>
        ))}
        </div>
      </div>
  )
}