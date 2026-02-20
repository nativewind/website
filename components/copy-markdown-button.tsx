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
      if (typeof ClipboardItem !== 'undefined') {
        // Safari requires the clipboard write to be initiated synchronously within
        // the user gesture handler. Using ClipboardItem with a Promise allows us
        // to call clipboard.write() immediately while fetching the data async.
        const textPromise = fetch(markdownUrl).then(async (res) => {
          if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
          const text = await res.text();
          return new Blob([text], { type: 'text/plain' });
        });
        await navigator.clipboard.write([
          new ClipboardItem({ 'text/plain': textPromise }),
        ]);
      } else {
        // Fallback for browsers that don't support ClipboardItem
        const res = await fetch(markdownUrl);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        const text = await res.text();
        await navigator.clipboard.writeText(text);
      }
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
