import type { ReactNode } from 'react';
import { HomeLayout } from '@/components/home';
import { Wordmark } from '../assets';
import { BookText, Book, Cpu, Heart, Layout as LayoutIcon, LayoutTemplate, Server, UsersRound, BookDown } from 'lucide-react';
import { RootToggle } from '@/components/layout/root-toggle';

import Image from 'next/image';
import LogoAnimated from '../assets/logo-animated.gif';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout
    themeSwitch={{
      mode: 'light-dark-system',
    }}
    githubUrl='https://github.com/nativewind/nativewind'
    nav={{
      transparentMode: 'always',
      title: (
        // TODO: animated wordmark on hover, dropdown on rightclick to save
        // <div className="relative group">
        //   <Image className="absolute top-1/2 -translate-y-1/2 -left-2 h-11 w-11 opacity-0 group-hover:opacity-100 duartion-500" src={LogoAnimated} alt="animated-logo" />
        // </div>
        //  group-hover:[mask-image:linear-gradient(to_right,transparent_2rem,red_2rem)] duartion-500
        <Wordmark className="h-6" />
      ),
    }}
    afterTitle={(
      <RootToggle
        key="root-toggle"
        options={[
          {
            title: 'v4',
            url: '/docs',
          },
          {
            title: 'v2',
            url: 'https://v2.nativewind.dev/',
          },
        ]}
      />
    )}
    links={[
      // NOTE: docs link is separate to only show in home layout and not in docs layout, linkItems are passed to docs/layout.tsx
      {
        // NOTE: for /layouts/notebook option https://fumadocs.vercel.app/docs/ui/layouts/docs#nav-mode
        // on: 'nav',
        type: 'menu',
        text: 'Docs',
        url: '/docs',
        // active: 'nested-url',
        // NOTE: homepage hover items
        items: [
          {
            menu: {
              banner: (
                <div className="-mx-3 -mt-3">
                  <Image
                    src="/og.png"
                    alt="Banner image"
                    width={1200}
                    height={256}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                </div>
              ),
              className: 'md:row-span-2',
            },
            text: 'Overview',
            description: 'Overview',
            url: '/docs/',
          },
          {
            icon: <BookDown />,
            text: 'Getting Started',
            description: 'Installation',
            url: '/docs/getting-started/installation',
          },
          {
            icon: <Cpu />,
            text: 'Core Concepts',
            description: 'Built on TailwindCSS',
            url: '/docs/core-concepts/tailwindcss',
          },
          {
            icon: <Book />,
            text: 'Guides',
            description: 'Troubleshooting',
            url: '/docs/guides/troubleshooting',
          },
          {
            icon: <LayoutIcon />,
            text: 'Customization',
            description: 'Configuration',
            url: '/docs/customization/configuration',
          },
        ],
      },
      {
        text: 'Showcase',
        url: '/#showcase',
        icon: <LayoutTemplate />,
        active: 'url',
      },
      {
        icon: <BookText />,
        text: 'Blog',
        url: '/blog',
        active: 'nested-url',
      },
      // {
      //   text: 'Community',
      //   // TODO: GH Discussions / Discord Link?
      //   url: '/community',
      //   icon: <UsersRound />,
      //   external: true,
      // },
      // {
      //   text: 'Sponsors',
      //   url: '/sponsors',
      //   icon: <Heart />,
      // },
    ]}
  >
    { children }
  </HomeLayout >;
}
