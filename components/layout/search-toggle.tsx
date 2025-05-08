'use client';
import { type ButtonHTMLAttributes } from 'react';
import { SearchIcon } from 'lucide-react';
import { useSearchContext } from 'fumadocs-ui/provider';
import { useI18n } from 'fumadocs-ui/provider';
import { cn } from '../../lib/cn';
import { type ButtonProps, buttonVariants } from '../ui/button';

export function SearchToggle({
  hideIfDisabled,
  size = 'icon',
  color = 'ghost',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonProps & {
    hideIfDisabled?: boolean;
  }) {
  const { setOpenSearch, enabled } = useSearchContext();
  if (hideIfDisabled && !enabled) return null;

  return (
    <button
      type="button"
      className={cn(
        buttonVariants({
          size,
          color,
        }),
        props.className,
      )}
      data-search=""
      aria-label="Open Search"
      onClick={() => {
        setOpenSearch(true);
      }}
    >
      <SearchIcon />
    </button>
  );
}

export function LargeSearchToggle({
  onHeroSection = false,
  hideIfDisabled,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  onHeroSection?: boolean;
  hideIfDisabled?: boolean;
}) {
  const { enabled, hotKey, setOpenSearch } = useSearchContext();
  const { text } = useI18n();
  if (hideIfDisabled && !enabled) return null;

  return (
    <button
      type="button"
      data-search-full=""
      {...props}
      className={cn(
        `inline-flex items-center gap-2 border ${onHeroSection ? 'border-dashed box-content bg-white/90 dark:bg-black/80 hover:border-fd-accent' : 'bg-fd-secondary/50 hover:bg-fd-accent'} p-1.5 text-sm text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground`,
        props.className,
      )}
      onClick={() => {
        setOpenSearch(true);
      }}
    >
      <SearchIcon className="ms-1 size-4" />
      {text.search} {onHeroSection && "docs"}
      <div className="ms-auto inline-flex gap-0.5">
        {hotKey.map((k, i) => (
          <kbd key={i} className="rounded-md border bg-fd-background px-1.5">
            {k.display}
          </kbd>
        ))}
      </div>
    </button>
  );
}
