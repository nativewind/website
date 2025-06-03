import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import FooterSection, { socials } from '../FooterSection';
import ComponentKitsSection from '../ComponentKitsSection';
import { ExternalLink, Play } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
      <SectionTitle className="!pt-24" id="community" title="Community" />
      <div className="relative flex mx-auto overflow-x-scroll w-full border-b border-dashed max-w-fd-container [mask-image:linear-gradient(to_right,red,red_calc(100%-8rem),transparent)]">
        <Link
          target="_blank"
          href="https://www.makeitanimated.dev/"
          className="flex flex-col p-8 border-r border-dashed shrink-0 group relative hover:bg-fd-muted/30 transition-colors duration-300">
          {/* <div className="absolute top-24 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-fd-background to-fd-accent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"> */}
          {/* </div> */}
          <img src="https://www.makeitanimated.dev/images/og-large.png" alt="Community Resources Thumbnail" className="aspect-video h-auto w-76 rounded-md mb-4" />
          <h2 className="text-lg font-semibold flex gap-2">
            Make It Animated
            <ExternalLink className="mt-1 h-4.5 w-4.5 group-hover:translate-0 -translate-x-2 translate-y-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-300" />
          </h2>
          <p className="text-fd-muted-foreground text-sm max-w-72">Real-World Mobile App Animations for Inspiration and Practical Usage</p>
        </Link>
      </div>

      <SectionTitle id="state-of-nativewind" title="State of Nativewind" />
      <div className="relative flex mx-auto overflow-x-scroll w-full border-b border-dashed max-w-fd-container [mask-image:linear-gradient(to_right,red,red_calc(100%-8rem),transparent)]">
        {stateOfNativewind.map((item) => (
          <Link
            key={item.date}
            target="_blank"
            href={item.url}
            className="flex flex-col p-8 border-r border-dashed shrink-0 group relative hover:bg-fd-muted/30 transition-colors duration-300">
            <div className="absolute top-24 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-fd-background to-fd-accent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <Play className="fill-current size-6 stroke-none text-fd-primary drop-shadow-2xl drop-shadow-fd-primary" />
            </div>
            <Image src="/og.png" width={1280} height={720} alt="State of Nativewind Thumbnail" className="aspect-video h-auto w-76 rounded-md mb-4 group-hover:opacity-50 transition-opacity duration-300" />
            <h2 className="text-lg font-semibold flex gap-2">
              State of Nativewind
              <ExternalLink className="mt-1 h-4.5 w-4.5 group-hover:translate-0 -translate-x-2 translate-y-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-300" />
            </h2>
            <p className="text-fd-muted-foreground text-sm">
              {new Date(item.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </Link>
        ))}
      </div>

      <ComponentKitsSection />

      <SectionTitle id="socials" title="Socials" />
      <div className="relative max-w-fd-container mx-auto w-full border-b border-dashed grid grid-cols-3">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            className={`group py-12 flex flex-col items-center gap-4 p-6 ${social.name === 'Github' ? 'hover:bg-fd-muted/30' : social.name === 'Discord' ? 'bg-indigo-400/5 hover:bg-indigo-400/40' : 'bg-blue-400/5' } transition-colors duration-300`}
          >
            <div className={`relative border border-dashed border-fd-foreground/20 group-hover:border-fd-foreground/80 rounded-full p-2 ${social.name === 'Github' ? 'group-hover:bg-fd-accent' : social.name === 'Discord' ? 'group-hover:bg-indigo-400/40' : 'group-hover:bg-blue-400/15'} transform-3d perspective-distant group-hover:-rotate-x-20 group-hover:-trotate-z-20 group-hover:rotate-y-20 duration-500`}>
              {/* <div className="absolute bg-fd-accent inset-0 rounded-full transform-3d perspective-distant backface-hidden  group-hover:-rotate-x-180 group-hover:-rotate-z-180 group-hover:-rotate-y-180 duration-1000"/> */}
              <social.icon className="w-10 h-10 z-50 fill-current text-fd-foreground/50 group-hover:text-fd-foreground transform-3d perspective-distant group-hover:-rotate-y-360 group-hover:scale-75 translate-z-2 duration-1000" />
            </div>
            <span className="text-lg font-semibold">{social.name}</span>
          </Link>
        ))}
      </div>
      <FooterSection />
    </main>
  );
}

const stateOfNativewind = [
  {
    date: '2025-05-21',
    url: 'https://www.youtube.com/watch?v=O4MBJ0XlRX8',
  },
  {
    date: '2025-05-14',
    url: 'https://www.youtube.com/watch?v=O4MBJ0XlRX8',
  },
  {
    date: '2025-05-07',
    url: 'https://www.youtube.com/watch?v=O4MBJ0XlRX8',
  },
  {
    date: '2025-04-30',
    url: 'https://www.youtube.com/watch?v=O4MBJ0XlRX8',
  },
  {
    date: '2025-04-16',
    url: 'https://www.youtube.com/watch?v=O4MBJ0XlRX8',
  },
  {
    date: '2025-04-09',
    url: 'https://www.youtube.com/watch?v=O4MBJ0XlRX8',
  },
  {
    date: '2025-04-02',
    url: 'https://www.youtube.com/watch?v=O4MBJ0XlRX8',
  }
]