import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import { socialLinks } from '@/app/(home)/FooterSection';
import { ExternalLink } from 'lucide-react';

export default function SocialsSection() {
  return (
    <>
      <SectionTitle id="socials" title="Socials" />
      <div className="relative max-w-fd-container mx-auto w-full border-b border-dashed grid grid-cols-3">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            className={`group py-4 lg:py-12 flex flex-col items-center gap-4 p-6 ${social.name === 'Github' ? 'md:hover:bg-fd-muted/30' : social.name === 'Discord' ? 'md:bg-indigo-400/10 md:hover:bg-indigo-400/40 bg-indigo-400/10' : 'md:bg-blue-400/5 md:hover:bg-blue-400/20 bg-blue-400/5'} transition-colors duration-300`}
          >
            <div className={`relative border border-dashed border-fd-foreground/20 group-hover:border-fd-foreground/80 ${social.name === 'Twitter' ? 'rounded-none' : social.name === 'Discord' ? 'rounded-xl' : 'rounded-full'} p-2 ${social.name === 'Github' ? 'md:group-hover:bg-fd-accent bg-fd-accent md:bg-transparent' : social.name === 'Discord' ? 'md:group-hover:bg-indigo-400/40 bg-indigo-400/40 md:bg-transparent' : 'md:group-hover:bg-blue-400/20 bg-blue-400/20 md:bg-transparent'} transform-3d perspective-distant md:group-hover:-rotate-x-20  -rotate-x-20 md:rotate-x-0 md:group-hover:rotate-y-20 rotate-y-20 md:rotate-y-0 duration-500 shadow-xl`}>
              {/* <div className="absolute bg-fd-accent inset-0 rounded-full transform-3d perspective-distant backface-hidden  group-hover:-rotate-x-180 group-hover:-rotate-z-180 group-hover:-rotate-y-180 duration-1000"/> */}
              <social.icon className="w-10 h-10 z-50 fill-current md:text-fd-foreground/50 md:group-hover:text-fd-foreground text-fd-foreground transform-3d perspective-distant group-hover:-rotate-y-360 md:group-hover:scale-75 scale-75 md:scale-100 translate-z-2 md:translate-z-3 duration-1000" />
            </div>
            <span className="text-lg font-semibold relative">{social.name}
              <ExternalLink className="absolute -right-5 bottom-1.5 h-4 w-4 group-hover:opacity-100 group-hover:translate-0 -translate-x-2 translate-y-2 scale-50 group-hover:scale-100 opacity-0 duration-300" />
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}