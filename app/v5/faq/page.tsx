import {
  DocsPage,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import type { Metadata } from "next";

import { items } from "./v5-faq-items";
import { V4FAQLink } from "./v4-faq-link";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "v5 FAQ",
  description: "Frequently answered questions about NativeWind v5",
};

export default async function FAQPage() {
  return (
    <DocsPage>
      <div className="flex justify-between mb-4 md:max-xl:px-12">
        <div className="flex-1">
          <DocsTitle>V5 FAQ</DocsTitle>
          <DocsDescription className="!mb-0 text-balance">Frequently answered questions for v5</DocsDescription>
        </div>
        <div className="flex items-start md:items-center gap-2">
          <V4FAQLink />
        </div>
      </div>
      <div className="md:max-xl:px-12">
        <FaqAccordion items={items} />
      </div>
    </DocsPage>
  );
}
