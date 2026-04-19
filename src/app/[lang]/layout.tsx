import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScrolling from "@/components/providers/SmoothScrolling";
import { GoogleAnalytics } from '@next/third-parties/google';
import { getDictionary } from "@/dictionaries";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  const metadataMap: Record<string, Metadata> = {
    uz: {
      title: "IMOR - Performance Marketing & Branding",
      description: "Imor Agency - Marketing tizimini quramiz. O'zbekistondagi yetakchi marketing agentligi. 10+ muvaffaqiyatli loyihalar.",
    },
    ru: {
      title: "IMOR - Перфоманс-маркетинг и Брендинг",
      description: "Imor Agency - Строим систему маркетинга. Ведущее маркетинговое агентство в Узбекистане. 10+ успешных проектов.",
    },
    en: {
      title: "IMOR - Performance Marketing & Branding",
      description: "Imor Agency - We build your marketing system. Leading marketing agency in Uzbekistan. 10+ successful projects.",
    },
    tj: {
      title: "IMOR - Performance Маркетинг ва Брендинг",
      description: "Imor Agency - Мо системаи маркетингро месозем. Агентии пешрави маркетинг дар Ӯзбекистон. 10+ лоиҳаҳои муваффақ.",
    }
  };

  return metadataMap[lang] || metadataMap.uz;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  // Type guard default
  const safeLang = (['uz', 'ru', 'en', 'tj'].includes(lang) ? lang : 'uz') as 'uz' | 'ru' | 'en' | 'tj';
  const dict = getDictionary(safeLang);

  return (
    <html lang={safeLang}>
      <head>
        {/* Dynamic SEO Meta Tags included via generateMetadata */}
      </head>
      <body className={`${outfit.variable} antialiased cursor-none *:cursor-none selection:bg-primary/30 selection:text-white`}>
        <SmoothScrolling>
          <CustomCursor />
          <Navbar dict={dict.nav} lang={safeLang} />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer lang={safeLang} />
        </SmoothScrolling>
      </body>
      <GoogleAnalytics gaId="G-LEBL1PN0LQ" />
    </html>
  );
}
