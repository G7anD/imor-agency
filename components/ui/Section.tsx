import type {ReactNode} from 'react';
import {cn} from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: 'dark' | 'light';
  /** vertical padding kichikroq versiya */
  size?: 'md' | 'lg' | 'xl';
}

export function Section({id, className, children, tone = 'dark', size = 'lg'}: SectionProps) {
  const sizeMap = {
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-32',
    xl: 'py-28 md:py-40'
  };
  return (
    <section
      id={id}
      className={cn(
        'relative',
        tone === 'light' ? 'bg-bg-2 text-fg-2' : 'bg-bg text-fg',
        sizeMap[size],
        className
      )}
    >
      {children}
    </section>
  );
}
