/**
 * SVG arrow & utility icons.
 * Strict 1.6 stroke for hairline aesthetic.
 */
import type {SVGProps} from 'react';

const baseProps: SVGProps<SVGSVGElement> = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

export function ArrowRight({className, size = 16}: {className?: string; size?: number}) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" {...baseProps} aria-hidden>
      <path d="M3 8h10m0 0l-4-4m4 4l-4 4" />
    </svg>
  );
}

export function ArrowUpRight({className, size = 16}: {className?: string; size?: number}) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" {...baseProps} aria-hidden>
      <path d="M5 11l6-6m0 0H6m5 0v5" />
    </svg>
  );
}

export function ArrowDown({className, size = 16}: {className?: string; size?: number}) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" {...baseProps} aria-hidden>
      <path d="M8 3v10m0 0l-4-4m4 4l4-4" />
    </svg>
  );
}

export function ChevronDown({className, size = 12}: {className?: string; size?: number}) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 12 12" {...baseProps} aria-hidden>
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  );
}

export function Check({className, size = 16}: {className?: string; size?: number}) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" {...baseProps} aria-hidden>
      <path d="M3 8.5l3 3 7-7" />
    </svg>
  );
}

export function Plus({className, size = 16}: {className?: string; size?: number}) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" {...baseProps} aria-hidden>
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

export function Close({className, size = 16}: {className?: string; size?: number}) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" {...baseProps} aria-hidden>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export function Menu({className, size = 18}: {className?: string; size?: number}) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 18 18" {...baseProps} aria-hidden>
      <path d="M3 5h12M3 9h12M3 13h12" />
    </svg>
  );
}
