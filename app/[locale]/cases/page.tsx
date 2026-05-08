import {setRequestLocale, getTranslations} from 'next-intl/server';
import {Cases} from '@/components/sections/Cases';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Nav'});
  return {title: `${t('cases')} — imor.agency`};
}

export default async function CasesListPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Cases />
    </>
  );
}
