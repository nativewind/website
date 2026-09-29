import Link from "fumadocs-core/link";
import type { FaqItem } from "@/components/faq-accordion"

export const items: FaqItem[] = [
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