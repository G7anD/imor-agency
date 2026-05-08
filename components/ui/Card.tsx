import {cn} from '@/lib/utils';
import type {HTMLAttributes} from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: 'dark' | 'light' | 'glass' | 'accent';
  hover?: boolean;
  padded?: boolean;
}

const toneClasses = {
  dark: 'bg-bg text-fg border border-line',
  light: 'bg-bg-2 text-fg-2 border border-line-2',
  glass: 'bg-white/[0.03] text-fg border border-white/10 backdrop-blur',
  accent: 'bg-accent text-fg-2 border border-accent'
};

export function Card({tone = 'glass', hover = false, padded = true, className, children, ...rest}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl',
        toneClasses[tone],
        padded && 'p-6 md:p-8',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:border-accent/50',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
