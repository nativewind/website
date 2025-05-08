import { AlertTriangle, CircleX, Info, Lightbulb } from 'lucide-react';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../lib/cn';
import { cva } from 'class-variance-authority';

type CalloutProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'title' | 'type' | 'icon'
> & {
  title?: ReactNode;
  /**
   * @defaultValue info
   */
  type?: 'info' | 'tip' | 'warn' | 'error';

  /**
   * Force an icon
   */
  icon?: ReactNode;
};

const calloutVariants = cva(
  'my-6 flex flex-row gap-2 rounded-lg border border-s-2 bg-fd-card p-3 text-sm text-fd-card-foreground shadow-md',
  {
    variants: {
      type: {
        info: 'border-s-fd-primary',
        warn: 'border-s-orange-500 dark:border-s-orange-400',
        tip: 'border-s-emerald-500 dark:border-s-emerald-300',
        error: 'border-s-pink-500 dark:border-s-pink-400',
      },
    },
  },
);

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, children, title, type = 'info', icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          calloutVariants({
            type: type,
          }),
          className,
        )}
        {...props}
      >
        {icon ??
          {
            info: <Info className="size-5 fill-fd-primary text-fd-card" />,
            tip: <Lightbulb className="size-5 stroke-emerald-500 dark:stroke-emerald-300" />,
            warn: <AlertTriangle className="size-5 fill-orange-500 dark:fill-orange-400 text-fd-card" />,
            error: <CircleX className="size-5 fill-pink-500 dark:fill-pink-400 text-fd-card" />,
          }[type]}
        <div className="min-w-0 flex-1">
          {title ? <p className="not-prose mb-2 font-medium">{title}</p> : null}
          <div className="text-fd-muted-foreground prose-no-margin">
            {children}
          </div>
        </div>
      </div>
    );
  },
);

Callout.displayName = 'Callout';
