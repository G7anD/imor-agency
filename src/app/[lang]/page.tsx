import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import CasesSection from "@/components/sections/Cases";
import ContactSection from "@/components/sections/Contact";
import { getDictionary } from "@/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safeLang = (['uz', 'ru', 'en', 'tj'].includes(lang) ? lang : 'uz') as 'uz' | 'ru' | 'en' | 'tj';
  const dict = getDictionary(safeLang);

  return (
    <>
      <HeroSection dict={dict.hero} lang={safeLang} />
      <AboutSection lang={safeLang} />
      <ServicesSection lang={safeLang} />
      <CasesSection lang={safeLang} />
      <ContactSection lang={safeLang} />
    </>
  );
}
