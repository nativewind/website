import {
  DocsPage,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import type { Metadata } from "next";

import { items } from "./faq-items";
import { V5FAQLink } from "./v5-faq-link";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently answered questions about NativeWind",
};

export default async function FAQPage() {
  return (
    <DocsPage>
      <div className="flex justify-between mb-4 md:max-xl:px-12">
        <div className="flex-1">
          <DocsTitle>FAQ</DocsTitle>
          <DocsDescription className="!mb-0 text-balance">Frequently answered questions</DocsDescription>
        </div>
        <div className="flex items-start md:items-center gap-2">
          <V5FAQLink />
        </div>
      </div>
      <div className="md:max-xl:px-12">
        <FaqAccordion items={items} />
      </div>
    </DocsPage>
  );
}
