import {defineRouting} from 'next-intl/routing';
import {locales, defaultLocale} from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Hamma tillarda prefix (UZ ham /uz)
  localePrefix: 'always'
});
