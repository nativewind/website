import { CopyMarkdownButton } from './copy-markdown-button';

export function CopyMigrationButton({ className }: { className?: string }) {
  return (
    <CopyMarkdownButton
      markdownUrl="/v5/guides/migrate-from-v4.mdx"
      label="Copy LLM-friendly Migration Guide"
      className={className}
    />
  );
}
