'use client';

import { Copy, Check } from 'lucide-react';
import { useState, useCallback } from 'react';

interface CopyMarkdownButtonProps {
  markdownUrl: string;
  className?: string;
}

export function CopyMarkdownButton({ markdownUrl, className = '' }: CopyMarkdownButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      const res = await fetch(markdownUrl);
      if (!res.ok) throw new Error('Failed to fetch');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy markdown');
    }
  }, [markdownUrl]);

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-fd-muted-foreground hover:text-fd-foreground bg-fd-card border border-fd-border rounded-md hover:bg-fd-accent transition-colors ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy MD
        </>
      )}
    </button>
  );
}
