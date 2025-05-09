import SectionTitle from "./SectionTitle";

import WaveLogo from "../assets/wave.png";
import NoonaLogo from "../assets/noona.png";
import HyppeLogo from "../assets/hyppe.png";
import ReemiLogo from "../assets/reemi.png";
import SwipeyLogo from "../assets/swipey.png";
import SewaYouLogo from "../assets/sewayou.png";
import BrainnotesLogo from "../assets/brainnotes.png";
import ShowcaseItem, { ShowcaseItemProps } from "./ShowcaseItem";

export default function ComponentKitsSection() {
  return (
    <>
      <SectionTitle id="showcase" title="Who is using Nativewind?" />

      <section className="relative flex flex-col w-full max-w-fd-container mx-auto -mt-[1px] border-t border-dashed">  
        {/* <SectionLink className="z-30" href="#showcase" name="showcase" /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap text-left gap-8 justify-around p-8 [mask:linear-gradient(to_right,transparent,red_1rem,red_calc(100%-1rem),transparent)] max-w-full">
          {/* col 1 */}
          <div className="flex flex-col gap-8">
            {items.slice(0, items.length / 3).map((item) => (
              <ShowcaseItem key={item.name} {...item} />
            ))}
          </div>
          {/* col 2 */}
          <div className="flex flex-col gap-8">
            {items.slice(items.length / 3, 2*items.length / 3).map((item) => (
              <ShowcaseItem key={item.name} {...item} />
            ))}
          </div>
          {/* col 3 */}
          <div className="flex flex-col gap-8">
            {items.slice(2*items.length / 3, items.length).map((item) => (
              <ShowcaseItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const items : ShowcaseItemProps[] = [
  {
    name: "Noona",
    description: "Noona is a marketplace for services and experiences.",
    logo: NoonaLogo,
    website: "https://noona.app/hq",
    appstore: "https://apps.apple.com/us/app/noona-book-anything/id1448498295",
  },
  {
    name: "Hyppe",
    description: "Hyppe es más que una aplicación de fitness, es una comunidad vibrante de personas apasionadas dedicadas a alcanzar sus metas de salud y bienestar.",
    logo: HyppeLogo,
    appstore: "https://apps.apple.com/us/app/hyppe/id6473208513",
  },
  {
    name: "SewaYou",
    description: "SewaYou is a location-based social app that helps you easily find and connect with new friends both online and in person, anywhere in the world.",
    logo: SewaYouLogo,
    appstore: "https://apps.apple.com/us/app/sewayou-make-new-friends/id1455473510",
    playstore: "https://play.google.com/store/apps/details?id=com.sewayou",
  },
  {
    name: "Brainnotes",
    description: "Summarize anything, videos & PDFs and audios all in one app.",
    logo: BrainnotesLogo,
    website: "https://brainnotes.app/",
    appstore: "https://apps.apple.com/us/app/brainnotes-summarizer/id6744852497",
  },
  {
    name: "Reemi",
    description: "Get notifications to check in with your favorite people.",
    logo: ReemiLogo,
    appstore: "https://apps.apple.com/id/app/swipey-fin-os-for-modern-biz/id1589412706",
  },
  {
    name: "Swipey",
    description: "Powerful expense management solution with corporate cards, account payables, and accounting integration for all your payments in all-in-one Finance operating system.",
    logo: SwipeyLogo,
    website: "https://swipey.co/",
    appstore: "https://apps.apple.com/id/app/swipey-fin-os-for-modern-biz/id1589412706",
  },
  {
    name: "Wave",
    description: "Wave is the AI-powered transcription and summarization app for audio recordings and phone calls.",
    logo: WaveLogo,
    website: "https://wave.co/",
    appstore: "https://apps.apple.com/us/app/wave-ai-note-taker/id6451491556"
  }
];
