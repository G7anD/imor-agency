import {setRequestLocale, getTranslations} from 'next-intl/server';
import {FinalCta} from '@/components/sections/FinalCta';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Nav'});
  return {title: `${t('contact')} — imor.agency`};
}

export default async function ContactPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return <FinalCta />;
}
