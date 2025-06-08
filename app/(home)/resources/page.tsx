import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '@/app/(home)/SectionTitle';
import FooterSection, { socialLinks, Socials, TwitterIcon, GithubIcon } from '@/app/(home)/FooterSection';
import ComponentKitsSection from '@/app/(home)//ComponentKitsSection';
import { ExternalLink, Play } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip max-w-screen">
      <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
      {/* left-[calc((100vw-var(--fd-layout-offset)+var(--fd-sidebar-width))/2)] -translate-x-1/2 */}

      <div className="bg-fd-background/50 pt-56 backdrop-blur relative overflow-clip">
        {/* outside */}
        <div className="left-1/2 -translate-x-1/2 bottom-0 w-full max-w-fd-container absolute h-full pointer-events-none">
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[64rem] h-[64rem] rounded-full dark:bg-fd-primary/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)]" />
        </div>
        {/* inside */}
        <div className="left-1/2 -translate-x-1/2 bottom-0 w-full max-w-fd-container absolute overflow-clip h-full pointer-events-none">
          <div className="bg-grid-dots rounded-full w-[69rem] h-[69rem] absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(red,transparent_80%)] opacity-50"/>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/30 dark:bg-fd-primary/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)]" />
          <div className="w-16 h-16 rounded-full border border-fd-foreground/8 absolute right-0 bottom-0 translate-1/2 bg-fd-primary/3" />
          <div className="w-32 h-32 rounded-full border border-fd-foreground/8 absolute right-0 bottom-0 translate-1/2 bg-fd-primary/3" />
          <div className="w-48 h-48 rounded-full border border-fd-foreground/8 absolute right-0 bottom-0 translate-1/2 bg-fd-primary/3" />
          <div className="w-64 h-64 rounded-full border border-fd-foreground/8 absolute right-0 bottom-0 translate-1/2 bg-fd-primary/3" />
          <div className="w-80 h-80 rounded-full border border-fd-foreground/8 absolute right-0 bottom-0 translate-1/2 bg-fd-primary/3" />
          <div className="w-96 h-96 rounded-full border border-fd-foreground/8 absolute right-0 bottom-0 translate-1/2 bg-fd-primary/3" />
          <div className="w-[28rem] h-[28rem] rounded-full border border-fd-foreground/8 absolute right-0 bottom-0 translate-1/2 bg-fd-primary/3" />
          <div className="w-[32rem] h-[32rem] rounded-full border border-fd-foreground/8 absolute right-0 bottom-0 translate-1/2 bg-fd-primary/3" />
          <div className="w-[36rem] h-[36rem] rounded-full border border-fd-foreground/8 absolute right-0 bottom-0 translate-1/2 bg-fd-primary/3" />
        </div>
        <SectionTitle id="community" title="Community Resources" className="backdrop-blur-none" />
      </div>
      <div className="relative flex mx-auto overflow-x-scroll w-full border-b border-dashed max-w-fd-container [mask-image:linear-gradient(to_right,red,red_calc(100%-8rem),transparent)]">
      <div className="flex flex-col border-r border-dashed shrink-0 relative hover:bg-fd-muted/30 transition-colors duration-300">
        <Link
          target="_blank"
          href="https://www.makeitanimated.dev/"
          className="flex flex-col p-8 group">
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
        <div className="flex flex-col border-r border-dashed shrink-0 relative">
          <div className="absolute top-0 left-0 right-0 p-8 flex gap-4 justify-between items-center">
            <Link href="https://github.com/mrzachnugent" target="_blank" className="flex items-center gap-2 group">
              <img src="https://avatars.githubusercontent.com/u/63797719?v=4" className="w-8 h-8 rounded-full mr-2" />
              <div className="flex flex-col">
                <div className="text-sm font-semibold underline group-hover:underline-offset-2 truncate decoration-transparent group-hover:decoration-fd-primary">Zach Nugent</div>
                <div className="text-xs text-fd-muted-foreground truncate">@mrzachnugent</div>
              </div>
            </Link>
            <Socials socials={[
              {
                name: "Github",
                href: "https://github.com/mrzachnugent",
                icon: GithubIcon,
              },
              {
                name: "Twitter",
                href: "https://x.com/mrzachnugent",
                icon: TwitterIcon,
              },
            ]} />
          </div>
          <Link
            target="_blank"
            href="https://rnprimitives.com/"
            className="flex flex-col p-6 pt-16 m-2 rounded-lg group hover:bg-white hover:shadow-lg dark:hover:bg-fd-muted duration-300 border">
            {/* <div className="absolute top-24 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-fd-background to-fd-accent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"> */}
            {/* </div> */}
            <img src="https://rn-primitives.vercel.app/rn-primitives-og.png" alt="rn-primitives Thumbnail" className="aspect-video h-auto w-76 rounded-md my-4" />
            <h2 className="text-lg font-semibold flex gap-2">
              rn-primitives
              <ExternalLink className="mt-1 h-4.5 w-4.5 group-hover:translate-0 -translate-x-2 translate-y-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-300" />
            </h2>
            <p className="text-fd-muted-foreground text-sm max-w-64">Unstyled universal components with a focus on accessibility. They offer a unified API across iOS, Android, and web platforms.</p>
          </Link>
        </div>
        <div className="flex flex-col border-r border-dashed shrink-0 relative hover:bg-fd-muted/30 transition-colors duration-300">
          <Link
            target="_blank"
            className="flex flex-col p-8 group"
            href="https://github.com/thomino/expo-playground">
            {/* <div className="absolute top-24 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-fd-background to-fd-accent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"> */}
            {/* </div> */}
            <img src="https://github.com/thomino/expo-playground/blob/main/assets/img/readme/readme.jpg?raw=true" alt="expo-playground Thumbnail" className="aspect-video h-auto w-76 rounded-md mb-4" />
            <h2 className="text-lg font-semibold flex gap-2">
              expo-playground
              <ExternalLink className="mt-1 h-4.5 w-4.5 group-hover:translate-0 -translate-x-2 translate-y-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-300" />
            </h2>
            <p className="text-fd-muted-foreground text-sm max-w-72">My expo playground. Will be adding screens and components as i play</p>
          </Link>
        </div>
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
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            className={`group py-4 lg:py-12 flex flex-col items-center gap-4 p-6 ${social.name === 'Github' ? 'md:hover:bg-fd-muted/30' : social.name === 'Discord' ? 'md:bg-indigo-400/10 md:hover:bg-indigo-400/40 bg-indigo-400/10' : 'md:bg-blue-400/5 md:hover:bg-blue-400/20 bg-blue-400/5' } transition-colors duration-300`}
          >
            <div className={`relative border border-dashed border-fd-foreground/20 group-hover:border-fd-foreground/80 rounded-full p-2 ${social.name === 'Github' ? 'md:group-hover:bg-fd-accent bg-fd-accent md:bg-transparent' : social.name === 'Discord' ? 'md:group-hover:bg-indigo-400/40 bg-indigo-400/40 md:bg-transparent' : 'md:group-hover:bg-blue-400/20 bg-blue-400/20 md:bg-transparent'} transform-3d perspective-distant md:group-hover:-rotate-x-20  -rotate-x-20 md:rotate-x-0 md:group-hover:rotate-y-20 rotate-y-20 md:rotate-y-0 duration-500 shadow-xl`}>
              {/* <div className="absolute bg-fd-accent inset-0 rounded-full transform-3d perspective-distant backface-hidden  group-hover:-rotate-x-180 group-hover:-rotate-z-180 group-hover:-rotate-y-180 duration-1000"/> */}
              <social.icon className="w-10 h-10 z-50 fill-current md:text-fd-foreground/50 md:group-hover:text-fd-foreground text-fd-foreground transform-3d perspective-distant group-hover:-rotate-y-360 md:group-hover:scale-75 scale-75 md:scale-100 translate-z-2 md:translate-z-3 duration-1000" />
            </div>
            <span className="text-lg font-semibold relative">{social.name}
              <ExternalLink className="absolute -right-5 bottom-1.5 h-4 w-4 group-hover:opacity-100 group-hover:translate-0 -translate-x-2 translate-y-2 scale-50 group-hover:scale-100 opacity-0 duration-300"/>
            </span>
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