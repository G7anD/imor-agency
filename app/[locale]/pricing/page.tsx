import {setRequestLocale, getTranslations} from 'next-intl/server';
import {Pricing} from '@/components/sections/Pricing';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Nav'});
  return {title: `${t('pricing')} — imor.agency`};
}

export default async function PricingPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Pricing />
    </>
  );
}
