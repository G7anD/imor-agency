import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';
import casesData from '@/content/cases.json';
import servicesData from '@/content/services.json';
import type {CaseItem, ServiceItem} from '@/types/content';

const STATIC_PATHS = ['', '/about', '/services', '/cases', '/pricing', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://imor.agency';
  const lastModified = new Date();

  const cases = (casesData.items as CaseItem[]).map(c => `/cases/${c.slug}`);
  const services = (servicesData.items as ServiceItem[]).map(s => `/services/${s.slug}`);
  const all = [...STATIC_PATHS, ...cases, ...services];

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of routing.locales) {
    for (const path of all) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map(l => [l, `${base}/${l}${path}`])
          )
        }
      });
    }
  }
  return entries;
}
