/**
 * Til (i18n) konfiguratsiyasi
 * URL strategiya: hamma tillarda prefix bor (reklama uchun foydali)
 *   /uz/...  /ru/...  /tg/...  /ky/...  /tr/...  /en/...
 */

export const locales = ['uz', 'ru', 'tg', 'ky', 'tr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'uz';

export const localeNames: Record<Locale, string> = {
  uz: "O'zbek",
  ru: 'Русский',
  tg: 'Тоҷикӣ',
  ky: 'Кыргыз',
  tr: 'Türkçe',
  en: 'English'
};

export const localeShort: Record<Locale, string> = {
  uz: 'UZ',
  ru: 'RU',
  tg: 'TG',
  ky: 'KY',
  tr: 'TR',
  en: 'EN'
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
