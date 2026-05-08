import {cn} from '@/lib/utils';
import type {ReactNode} from 'react';

interface PillProps {
  children: ReactNode;
  className?: string;
  tone?: 'dark' | 'light' | 'accent';
}

export function Pill({children, className, tone = 'dark'}: PillProps) {
  const tones = {
    dark: 'bg-white/5 border border-white/12 text-fg',
    light: 'bg-black/5 border border-black/10 text-fg-2',
    accent: 'bg-accent/15 border border-accent/30 text-accent'
  };
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em]',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

interface LiveDotProps {
  className?: string;
}
export function LiveDot({className}: LiveDotProps) {
  return (
    <span
      aria-hidden
      className={cn('inline-block w-2 h-2 rounded-full bg-accent animate-pulse-dot', className)}
    />
  );
}
