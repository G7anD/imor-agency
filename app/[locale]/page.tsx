import {setRequestLocale} from 'next-intl/server';
import {Hero} from '@/components/sections/Hero';
import {Advantages} from '@/components/sections/Advantages';
import {Services} from '@/components/sections/Services';
import {Process} from '@/components/sections/Process';
import {Cases} from '@/components/sections/Cases';
import {Pricing} from '@/components/sections/Pricing';
import {FinalCta} from '@/components/sections/FinalCta';

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Advantages />
      <Services />
      <Process />
      <Cases />
      <Pricing />
      <FinalCta />
    </>
  );
}
