import {cn} from '@/lib/utils';
import type {ReactNode} from 'react';

interface KickerProps {
  children: ReactNode;
  /** Belgi (• yoki §) ko'rinishini boshqaradi */
  marker?: '•' | '§' | 'none';
  className?: string;
  tone?: 'light' | 'dark';
}

/**
 * Bo'lim ustida turadigan kichik label.
 * Misol:  "•  Afzalliklarimiz — 4 nuqta"
 */
export function Kicker({children, marker = '•', className, tone = 'light'}: KickerProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold',
        tone === 'light' ? 'text-fg' : 'text-fg-2',
        className
      )}
    >
      {marker !== 'none' && (
        <span className={cn('text-accent', marker === '•' && 'text-base leading-none')}>
          {marker}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
