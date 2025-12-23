import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";

import { FaqAccordion, FaqItem } from "@/components/faq-accordion";

const items: FaqItem[] = [
  {
    title:
      "Does Nativewind Nativewind",
    content:
      'Yes, Nativewind Nativewinds',
  },
  {
    title:
      "Is Nativewind v5 out yet",
    content:
      "not yet",
  },
];

export default async function Page() {
  return (
    <>
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none overflow-x-clip">
        <div className="absolute top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 -translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/10 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] pointer-events-none" />
        <div className="fixed top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 -translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] pointer-events-none" />
        <div className="absolute top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 h-[64rem] w-[64rem] bg-grid-lines-xl dark:opacity-80 -translate-y-1/2 max-md:hidden [--mask:radial-gradient(circle_at_center_top,red,transparent)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] -skew-20 pointer-events-none" />
      </div>

      <DocsPage>
        <div className="flex items-center justify-between mb-4 md:max-xl:px-12">
          <div className="flex-1">
            <DocsTitle>FAQ</DocsTitle>
            <DocsDescription className="!mb-0">Frequently answered questions</DocsDescription>
          </div>
        </div>
        {/* TODO: redo FAQAccordion to accept children instead of items and make this a normal mdx page */}
        <div className="md:max-xl:px-12">
          <FaqAccordion items={items} />
        </div>
        {/* <FooterSection /> */}
      </DocsPage>
    </>
  );
}
