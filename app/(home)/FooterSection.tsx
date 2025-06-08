import { Wordmark } from "../assets";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function FooterSection() {
  return (
    <>
      <footer id="footer" className="relative w-full mx-auto text-fd-muted-foreground overflow-hidden">

        <div className="absolute w-full h-full inset-0 backdrop-blur"/>
        <div className="-z-10 h-24 w-[33rem] bg-cyan-500/50 rounded-[100%] max-w-screen absolute bottom-0 right-1/2 translate-1/2 blur-3xl" />

        <div className="bg-fd-background/50 backdrop-blur-lg w-full max-w-fd-container mx-auto pt-10">
          <div className="grid grid-cols-2 sm:flex justify-between px-8 lg:px-0">
            <div className="flex-row sm:flex-col gap-4 flex items-start col-span-2 w-full sm:w-auto max-sm:justify-between pb-10">
              <Wordmark className="text-fd-foreground h-7" />
              <Socials />
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <b className="text-fd-foreground font-semibold mt-2">Learn</b>
              <Link className="hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300" href="/docs">Documentation</Link>
              <Link className="hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300" href="/#showcase">Showcase</Link>
              <Link className="hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300" href="/resources">Resources</Link>
              <Link className="hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300" href="/blog">Blog</Link>
              {/* <a>Playground</a> */}
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <b className="text-fd-foreground font-semibold mt-2">Component Kits</b>
              <a href="https://rnr-docs.vercel.app/" target="_blank" rel="noopener noreferrer" className="group -mr-5 flex gap-1 hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300">React Native Reusables <ExternalLink className="h-4 w-4 group-hover:opacity-100 group-hover:translate-0 -translate-x-2 translate-y-2 scale-50 group-hover:scale-100 opacity-0 duration-300"/></a>
              <a href="https://nativewindui.com" target="_blank" rel="noopener noreferrer" className="group flex gap-1 hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300">NativewindUI <ExternalLink className="h-4 w-4 group-hover:opacity-100 group-hover:translate-0 -translate-x-2 translate-y-2 scale-50 group-hover:scale-100 opacity-0 duration-300"/></a>
              <a href="https://gluestack.io/" target="_blank" rel="noopener noreferrer" className="group flex gap-1 hover:decoration-fd-primary hover:underline-offset-2 hover:text-fd-foreground decoration-transparent underline duration-300">Gluestack <ExternalLink className="h-4 w-4 group-hover:opacity-100 group-hover:translate-0 -translate-x-2 translate-y-2 scale-50 group-hover:scale-100 opacity-0 duration-300"/></a>
            </div>
          </div>

          <div className="flex items-center w-full justify-between py-4 border-t border-fd-foreground/10 mix-blend-plus-darker dark:mix-blend-plus-lighter mt-10 max-lg:px-8">
            <div className="text-xs">
              <div className="inline-block -scale-x-100 mr-1">©</div>
              Copyright {new Date().getFullYear()}
            </div>
            <ThemeToggle mode="light-dark-system" />
          </div>

        </div>
      </footer>
    </>
  )
}

export const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/nativewind/nativewind",
    icon: GithubIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/nativewindcss",
    icon: TwitterIcon,
  },
  {
    name: "Discord",
    href: "https://discord.gg/tzmpVCP3gG",
    icon: DiscordIcon,
  }
]

export function Socials({ socials = socialLinks, className }: { socials?: typeof socialLinks, className?: string }) {
  if (!socials || socials.length === 0) return null;
  return (
    <div className={`flex gap-3 ${className || ''}`}>
      {socials.map((social) => (
        <a href={social.href} key={social.name} target="_blank" className="h-8 w-8 relative group grid place-items-center hover:text-fd-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="absolute -top-[0.5px] -right-0.25 z-10 duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M21 8V5a2 2 0 0 0-2-2h-3" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-[0.5px] -left-0.25 duration-300 group-hover:translate-y-0.5 group-hover:-translate-x-0.5 z-10 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M3 16v3a2 2 0 0 0 2 2h3" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-[0.5px] -right-0.25 z-10 duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M16 21h3a2 2 0 0 0 2-2v-3" /></svg>
          {/* duration-300 group-hover:-translate-8 group-hover:scale-200 */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-[0.5px] -left-0.25 z-10 duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M8 3H5a2 2 0 0 0-2 2v3" /></svg>
          {/* duration-300 group-hover:translate-8 group-hover:scale-200 */}
          <div className="bg-grid-lines absolute inset-0 ease-out duration-300 group-hover:opacity-50 opacity-0 ![background-position:-15px_-15px]" />
          <social.icon className="w-4 h-4 fill-current transform-3d perspective-distant backface-hidden group-hover:rotate-x-180 group-hover:rotate-z-180 group-hover:-rotate-y-180 duration-1000" />
        </a>
      ))}
    </div>
  )
}

export function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
  )
}

export function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
  )
}

export function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
  )
}