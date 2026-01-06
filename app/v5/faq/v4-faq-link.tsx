import Link from "fumadocs-core/link";
import { FileQuestionMark } from "lucide-react";

export function V4FAQLink() {
  return (
    <Link href="/docs/faq" className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-fd-muted-foreground hover:text-fd-primary bg-fd-card border border-fd-border hover:border-fd-primary/30 rounded-md hover:bg-fd-primary/10 transition-colors">
      <FileQuestionMark className="size-4" />
      v4
    </Link>
  );
}