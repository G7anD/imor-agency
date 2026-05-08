'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {locales, localeShort, type Locale} from '@/i18n/config';
import {ChevronDown} from '@/components/ui/Icons';
import {useState, useRef, useEffect} from 'react';
import {cn} from '@/lib/utils';

interface LangSwitcherProps {
  tone?: 'dark' | 'light';
}

export function LangSwitcher({tone = 'dark'}: LangSwitcherProps) {
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function change(loc: Locale) {
    router.replace(pathname, {locale: loc});
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={cn(
          'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors',
          tone === 'dark'
            ? 'bg-white/5 border border-white/10 hover:border-white/25 text-fg'
            : 'bg-black/5 border border-black/10 hover:border-black/25 text-fg-2'
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{localeShort[current]}</span>
        <ChevronDown size={10} />
      </button>

      {open && (
        <ul
          role="listbox"
          className={cn(
            'absolute right-0 top-[calc(100%+6px)] z-50 min-w-[120px] rounded-xl overflow-hidden',
            tone === 'dark'
              ? 'bg-bg border border-white/10 shadow-lg shadow-black/50'
              : 'bg-bg-2 border border-black/10 shadow-lg shadow-black/10'
          )}
        >
          {locales.map(loc => (
            <li key={loc}>
              <button
                type="button"
                onClick={() => change(loc)}
                className={cn(
                  'w-full text-left px-3 py-2 text-xs uppercase tracking-wider transition-colors',
                  loc === current
                    ? tone === 'dark'
                      ? 'bg-accent/10 text-accent'
                      : 'bg-accent/15 text-accent'
                    : tone === 'dark'
                    ? 'hover:bg-white/5'
                    : 'hover:bg-black/5'
                )}
              >
                {localeShort[loc]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
