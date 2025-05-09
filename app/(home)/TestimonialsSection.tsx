import SectionTitle from "./SectionTitle";

import BICLogo from "../assets/BIC.png";
import WaveLogo from "../assets/wave.png";
import MyloLogo from "../assets/mylo.png";
import NoonaLogo from "../assets/noona.png";
import HyppeLogo from "../assets/hyppe.png";
import ReemiLogo from "../assets/reemi.png";
import SwipeyLogo from "../assets/swipey.png";
import RambleLogo from "../assets/ramble.png";
import QuiztrLogo from "../assets/quiztr.png";
import AvocadoLogo from "../assets/avocado.png";
import SewaYouLogo from "../assets/sewayou.png";
import KnowhereLogo from "../assets/knowhere.png";
import RovelistLogo from "../assets/rovelist.png";
import DayStackLogo from "../assets/daystack.png";
import FluentlyLogo from "../assets/fluently.png";
import HiveMindLogo from "../assets/hivemind.png";
import MindLumenLogo from "../assets/mindlumen.png";
import BrainnotesLogo from "../assets/brainnotes.png";
import FocusminnyLogo from "../assets/focusminny.png";
import GoTogetherLogo from "../assets/gotogether.png";
import ShutterMateLogo from "../assets/shuttermate.png";
import ShowcaseItem, { ShowcaseItemProps } from "./ShowcaseItem";

export default function ComponentKitsSection() {
  function shuffleArray(array : ShowcaseItemProps[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  return (
    <>
      <SectionTitle id="showcase" title="Who is using Nativewind?" />

      <section className="relative flex flex-col w-full max-w-fd-container mx-auto -mt-[1px] border-t border-dashed">  
        {/* <SectionLink className="z-30" href="#showcase" name="showcase" /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap text-left gap-8 justify-around p-8 [mask:linear-gradient(to_right,transparent,red_1rem,red_calc(100%-1rem),transparent)] max-w-full">
          {/* col 1.1 */}
          <div className="flex sm:hidden flex-col">
            {shuffleArray(items).map((item) => (
              <ShowcaseItem key={item.name} {...item} />
            ))}
          </div>
          {/* col 2.1 */}
          <div className="hidden sm:flex lg:hidden flex-col">
            {shuffleArray(items.slice(0, items.length / 2)).map((item) => (
              <ShowcaseItem key={item.name} {...item} />
            ))}
          </div>
          {/* col 2.2 */}
          <div className="hidden sm:flex lg:hidden flex-col">
            {shuffleArray(items.slice(items.length / 2, items.length)).map((item) => (
              <ShowcaseItem key={item.name} {...item} />
            ))}
          </div>
          {/* col 3.1 */}
          <div className="hidden lg:flex flex-col">
            {shuffleArray(items.slice(0, items.length / 3)).map((item) => (
              <ShowcaseItem key={item.name} {...item} />
            ))}
          </div>
          {/* col 3.2 */}
          <div className="hidden lg:flex flex-col">
            {shuffleArray(items.slice(items.length / 3, 2*items.length / 3)).map((item) => (
              <ShowcaseItem key={item.name} {...item} />
            ))}
          </div>
          {/* col 3.3 */}
          <div className="hidden lg:flex flex-col">
            {shuffleArray(items.slice(2*items.length / 3, items.length)).map((item) => (
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
    appstore: " https://apps.apple.com/us/app/reemi-social-reminders/id6742418635",
  },
  {
    name: "Swipey",
    description: "Swipey is the next-gen financial OS that helps you manage all your business finances in one place.",
    logo: SwipeyLogo,
    website: "https://swipey.co/",
    appstore: "https://apps.apple.com/id/app/swipey-fin-os-for-modern-biz/id1589412706",
  },
  {
    name: "Wave",
    description: "Wave is the AI-powered transcription and summarization app for audio recordings and phone calls.",
    logo: WaveLogo,
    website: "https://wave.co/",
    appstore: "https://apps.apple.com/us/app/wave-ai-note-taker/id6451491556",
    playstore: "https://play.google.com/store/apps/details?id=com.ma.waveapp",
  },
  {
    name: "Knowhere",
    description: "Easily discover what you and your friends want to do, all in your hand, all in one place.",
    logo: KnowhereLogo,
    website: "https://knowheresocial.com/",
    appstore: "https://apps.apple.com/us/app/knowhere/id6467689920",
  },
  {
    name: "Rovelist",
    description: "Sustainable change through habits repeated daily. It's not about perfection, it's about consistency.",
    logo: RovelistLogo,
    website: "https://www.rovelist.app/",
    appstore: "https://apps.apple.com/us/app/habit-tracker-rovelist/id6468539586",
  },
  {
    name: "Avocado",
    description: "Easily log your meals with the Avocado App, set flexible goals, and stay on track with your nutrition like never before.",
    logo: AvocadoLogo,
    appstore: "https://apps.apple.com/us/app/avocado-calorie-goal-tracker/id6739069296",
  },
  {
    name: "DayStack",
    description: "Take control of your daily routines. Track habits and never miss your supplements with smart reminders.",
    logo: DayStackLogo,
    appstore: "https://apps.apple.com/us/app/daystack-pro/id6741811908",
    website: "https://www.daystack.co/",
  },
  {
    name: "Ramble",
    description: "Community app for the modern van traveler.",
    logo: RambleLogo,
    website: "https://ramble.guide/",
    appstore: "https://apps.apple.com/us/app/ramble-van-travel-app/id6468265289",
    playstore: "https://play.google.com/store/apps/details?id=co.noquarter.ramble",
  },
  {
    name: "Quiztr",
    description: "Learn anything for school, work or fun.",
    logo: QuiztrLogo,
    website: "https://quiztr.com/",
    appstore: "https://apps.apple.com/fr/app/quiztr-fiche-de-r%C3%A9vision/id6503441928",
    playstore: "https://play.google.com/store/apps/details?id=com.quiztr.mobile.app",
  },
  {
    name: "Mylo",
    description: "Mylo är appen som gör juridiken enkel. Skapa juridiska avtal på egen hand, signera säkert med BankID och spara allt i ett tryggt moln.",
    logo: MyloLogo,
    website: "https://mylo.law/",
    appstore: "https://apps.apple.com/se/app/mylo-avtal-och-dokument/id6733253272",
    playstore: "https://play.google.com/store/apps/details?id=io.happycart.app",
  },
  {
    name: "Focusminny",
    description: "Turn Your Phone into a Productivity Companion—Not a Distraction!",
    logo: FocusminnyLogo,
    website: "https://www.focusminny.app/",
    appstore: "https://apps.apple.com/us/app/focusminny-stay-focused-ai/id6738607046",
  },
  {
    name: "BIC Group",
    description: "Beincom (BIC Group) is a social platform focused on community building.",
    logo: BICLogo,
    appstore: "https://apps.apple.com/vn/app/bic-group/id6444276276",
  },
  {
    name: "Fluently",
    description: "AI-powered English coach.",
    logo: FluentlyLogo,
    website: "https://getfluently.app/",
    appstore: "https://apps.apple.com/us/app/fluently-ai-english-tutor/id6683289805",
  },
  {
    name: "Shutter Mate",
    description: "ShutterMate is your ultimate photography companion!",
    logo: ShutterMateLogo,
    appstore: "https://apps.apple.com/in/app/shutter-mate/id6738705813",
    playstore: "https://play.google.com/store/apps/details?id=com.shuttermate.app",
  },
  {
    name: "GoTogether",
    description: "Discover events and find people to join you—make solo events a thing of the past.",
    logo: GoTogetherLogo,
    website: "https://gogether.app/",
    appstore: "https://apps.apple.com/in/app/gogether/id6739421081",
    playstore: "https://play.google.com/store/apps/details?id=com.gogether.app",
  },
  {
    name: "MindLumen",
    description: "Your personal AI therapist for mental wellbeing",
    logo: MindLumenLogo,
    website: "https://mindlumen.ai/",
    appstore: "https://apps.apple.com/nl/app/ai-therapist-mindlumen/id6738006220",
    playstore: "",
  },
  {
    name: "HiveMind",
    description: "Turn any topic into your personal social media feed with AI.",
    logo: HiveMindLogo,
    website: "https://gethivemind.app/",
    appstore: "https://apps.apple.com/de/app/hivemind-study-by-scrolling/id6737344456",
  },
];
