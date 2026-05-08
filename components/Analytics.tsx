'use client';

import Script from 'next/script';

/**
 * Google Analytics 4 + Yandex Metrika (env'dan ID'lar).
 * Faqat production'da ishlaydi.
 */
export function Analytics() {
  if (process.env.NODE_ENV !== 'production') return null;

  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const ym = process.env.NEXT_PUBLIC_YM_ID;

  return (
    <>
      {ga && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga}');`}
          </Script>
        </>
      )}
      {ym && (
        <Script id="ym-init" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(${ym}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });`}
        </Script>
      )}
    </>
  );
}
