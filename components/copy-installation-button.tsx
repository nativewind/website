import { CopyMarkdownButton } from './copy-markdown-button';

export function CopyInstallationButton({ className }: { className?: string }) {
  return (
    <CopyMarkdownButton
      markdownUrl="/v5/getting-started/installation.mdx"
      label="Copy installation guide"
      className={className}
    />
  );
}
