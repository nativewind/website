"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCheck, Link } from "lucide-react";
import { useEffect, useState } from "react";

export type FaqItem = {
  icon?: React.ReactNode;
  title: string;
  content: React.ReactNode | string;
};

let hashListenerAttached = false;

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  useEffect(() => {
    if (hashListenerAttached) return;
    hashListenerAttached = true;

    const handleHashChange = () => {
      const id = decodeURIComponent(location.href).split("#")[1];
      console.log("FAQ Accordion hash change detected:", id);

      // trigger opening the accordion item
      const accordionItem = document.getElementById(id);
      const h3 = accordionItem?.querySelector("h3");
      const trigger = h3?.querySelector("button");
      if (trigger && trigger.getAttribute("data-state") !== "open")
        trigger.click();
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Call it initially to handle the current hash

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      hashListenerAttached = false;
    };
  }, []);

  return (
    <Accordion type="multiple">
      {items.map((item, index) => (
        <AccordionItem
          className="group relative"
          key={item.title}
          id={item.title}
          value={`item-${index + 1}`}
        >
          <CopyLinkToHighlight title={item.title} />
          <AccordionTrigger>
            <div className="flex items-center">
              {item.title}
              {item.icon}
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-black/70 dark:text-white/80">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-fd-primary hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function CopyLinkToHighlight({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCopied(true);

    e.preventDefault();
    const base = window.location.origin + window.location.pathname;
    const encoded = encodeURIComponent(title);
    const url = `${base}#${encoded}:~:text=${encoded.replace(/-/g, "%2D")}`;
    navigator.clipboard.writeText(url);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <button
      type="button"
      className={`opacity-0 absolute hidden md:block -left-2 -translate-x-full top-2 group-focus-within:opacity-100 transition-opacity group-hover:opacity-100 border border-dashed hover:border-solid border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 rounded-br-xl rounded-tl-xl bevel p-2 cursor-pointer ${copied && "!border-solid !border-lime-700/50 dark:!border-lime-300/50 duration-300 delay-300 shadow-xl shadow-lime-500/30 pointer-events-none"} hover:bg-neutral-100 dark:hover:bg-neutral-900 active:scale-95 overflow-hidden`}
      aria-label={`Copy Link with highlight to ${title} FAQ`}
      onClick={handleCopyLink}
    >
      <Link
        className={`h-4 w-4 text-neutral-500 dark:text-neutral-400 duration-150 ${!copied ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
      />
      <div
        className={`h-full w-full bg-lime-200/50 dark:bg-lime-900/50 absolute top-0 left-0 rounded-br-xl rounded-tl-xl bevel pointer-events-none duration-300 ${copied ? "scale-75 opacity-100" : "scale-50 opacity-0"} ease-[cubic-bezier(0.175,0.885,0.32,2.275)]`}
      />
      <div
        className={`h-full w-full bg-lime-200/50 dark:bg-lime-900/50 absolute top-0 left-0 rounded-br-xl rounded-tl-xl bevel pointer-events-none duration-500 ${copied ? "scale-125 opacity-100" : "scale-50 opacity-0"} ease-[cubic-bezier(0.175,0.885,0.32,2.275)]`}
      />
      <CheckCheck
        className={`lucide-check-check absolute top-2 h-4 w-4 duration-150 text-lime-700 dark:text-lime-300 ${copied ? "scale-100 opacity-100" : "scale-75 opacity-0"} ease-[cubic-bezier(0.175,0.885,0.32,1.225)]`}
      />
    </button>
  );
}
