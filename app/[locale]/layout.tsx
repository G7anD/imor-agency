import type {Metadata} from 'next';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, setRequestLocale, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Inter, Instrument_Serif, JetBrains_Mono} from 'next/font/google';
import {routing} from '@/i18n/routing';
import {Nav} from '@/components/layout/Nav';
import {Footer} from '@/components/layout/Footer';
import {Analytics} from '@/components/Analytics';
import {PageEffects} from '@/components/PageEffects';
import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans-loaded',
  display: 'swap'
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif-loaded',
  display: 'swap'
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-loaded',
  display: 'swap'
});

export function generateStaticParams() {
  return routing.locales.map(locale => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Meta'});
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://imor.agency';

  return {
    metadataBase: new URL(baseUrl),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(routing.locales.map(l => [l, `/${l}`]))
    },
    openGraph: {
      type: 'website',
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `/${locale}`,
      siteName: 'imor.agency',
      images: ['/og.png']
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/og.png']
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${instrumentSerif.variable} ${jetbrains.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Nav />
          <main>{children}</main>
          <Footer />
          <PageEffects />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
