import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Telefon raqamni format (UZ): +998 99 123 45 67 */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 12);
  if (digits.startsWith('998')) {
    const m = digits.match(/^(998)(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    if (m) {
      return [
        '+' + m[1],
        m[2] && ' ' + m[2],
        m[3] && ' ' + m[3],
        m[4] && ' ' + m[4],
        m[5] && ' ' + m[5]
      ]
        .filter(Boolean)
        .join('');
    }
  }
  return value;
}

/** Slug uchun string */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
