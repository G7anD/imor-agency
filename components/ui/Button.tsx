import {cn} from '@/lib/utils';
import Link from 'next/link';
import type {AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode} from 'react';

type Variant = 'primary' | 'ghost' | 'outline' | 'light';
type Size = 'md' | 'lg';

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-all duration-200 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-fg-2 hover:bg-accent-2 hover:-translate-y-px shadow-[0_8px_28px_-12px_rgba(1,207,152,0.5)]',
  ghost:
    'bg-white/5 text-fg border border-line hover:bg-white/10 hover:border-white/20',
  outline:
    'bg-transparent text-fg border border-fg/30 hover:border-accent hover:text-accent',
  light:
    'bg-fg-2 text-fg hover:bg-fg-2/85 hover:-translate-y-px'
};

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[15px]'
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Suffix arrow */
  arrow?: boolean;
}

type AsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {href?: undefined};
type AsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {href: string};

export function Button(props: AsButton | AsLink) {
  const {variant = 'primary', size = 'md', className, children, arrow, ...rest} = props as CommonProps & {
    href?: string;
  } & Record<string, unknown>;

  const cls = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
  const content = (
    <>
      {children}
      {arrow && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );

  if ('href' in props && props.href) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(props.href);
    if (isExternal) {
      return (
        <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} href={props.href}>
          {content}
        </a>
      );
    }
    return (
      <Link className={cls} href={props.href} {...(rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
