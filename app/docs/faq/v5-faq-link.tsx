import Link from "fumadocs-core/link";
import { FileQuestionMark } from "lucide-react";

export function V5FAQLink() {
  return (
    <Link href="/v5/faq" className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-fd-muted-foreground hover:text-amber-500 bg-fd-card border border-fd-border hover:border-amber-500/30 rounded-md hover:bg-amber-500/10 transition-colors">
      <FileQuestionMark className="size-4" />
      v5
    </Link>
  );
}