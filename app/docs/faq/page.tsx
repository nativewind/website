import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";

import { FaqAccordion, FaqItem } from "@/components/faq-accordion";
import Link from "fumadocs-core/link";
import { FileQuestionMark } from "lucide-react";

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
      (
        <>
          not yet, check out <Link href="/v5/faq" className="underline text-amber-500 hover:text-amber-600 dark:hover:text-amber-400">the v5 FAQ</Link> for more info.
        </>
      ),
  },
];

export default async function FAQPage() {
  return (
    <>
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none overflow-x-clip">
        <div className="absolute top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 -translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/10 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] pointer-events-none" />
        <div className="fixed top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 -translate-y-1/2 w-[64rem] h-[64rem] rounded-full bg-fd-primary/5 max-md:hidden [--mask:radial-gradient(circle_at_center,red,transparent_69%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] pointer-events-none" />
        <div className="absolute top-0 xl:right-1/2 right-0 translate-x-1/2 -z-10 h-[64rem] w-[64rem] bg-grid-lines-xl dark:opacity-80 -translate-y-1/2 max-md:hidden [--mask:radial-gradient(circle_at_center_top,red,transparent)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)] -skew-20 pointer-events-none" />
      </div>

      <DocsPage>
        <div className="flex justify-between mb-4 md:max-xl:px-12">
          <div className="flex-1">
            <DocsTitle>FAQ</DocsTitle>
            <DocsDescription className="!mb-0 text-balance">Frequently answered questions</DocsDescription>
          </div>
          <div className="flex items-start md:items-center gap-2">
            <Link href="/v5/faq" className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-fd-muted-foreground hover:text-amber-500 bg-fd-card border border-fd-border hover:border-amber-500/30 rounded-md hover:bg-amber-500/10 transition-colors">
              <FileQuestionMark className="size-4" />
              v5
            </Link>
          </div>
        </div>
        <div className="md:max-xl:px-12">
          <FaqAccordion items={items} />
        </div>
      </DocsPage>
    </>
  );
}
