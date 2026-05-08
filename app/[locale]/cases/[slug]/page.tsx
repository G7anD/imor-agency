import {setRequestLocale, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Link} from '@/i18n/navigation';
import casesData from '@/content/cases.json';
import type {CaseItem} from '@/types/content';
import {routing} from '@/i18n/routing';
import {FinalCta} from '@/components/sections/FinalCta';

export function generateStaticParams() {
  const slugs = (casesData.items as CaseItem[]).map(c => c.slug);
  return routing.locales.flatMap(locale => slugs.map(slug => ({locale, slug})));
}

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {slug} = await params;
  const item = (casesData.items as CaseItem[]).find(c => c.slug === slug);
  if (!item) return {};
  return {title: `${item.name} — imor.agency`, description: item.summary};
}

export default async function CaseDetailPage({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Cases');

  const item = (casesData.items as CaseItem[]).find(c => c.slug === slug);
  if (!item) notFound();

  const all = casesData.items as CaseItem[];
  const idx = all.findIndex(c => c.slug === slug);
  const next = all[(idx + 1) % all.length];

  return (
    <>
      {/* HERO */}
      <section className="section" style={{paddingTop: 'clamp(96px, 11vw, 140px)'}}>
        <div className="bg-grid" />
        <div className="inner">
          <Link
            href="/cases"
            style={{
              display: 'inline-block',
              marginBottom: '32px',
              fontFamily: 'var(--f-mono)',
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              textDecoration: 'none'
            }}
          >
            ← {t('backToList')}
          </Link>

          <div className="cs-feat-tag-row">
            <span className="cs-feat-tag">Keys</span>
            <span style={{color: 'var(--muted-3)'}}>· {item.year} · {item.city} · {item.type}</span>
          </div>

          <h1 className="cs-feat-title" style={{maxWidth: '900px'}}>{item.name}</h1>
          <p style={{fontSize: '18px', color: 'var(--muted)', maxWidth: '720px', lineHeight: 1.5, marginTop: '16px', marginBottom: '40px'}}>
            {item.summary}
          </p>

          {/* Meta strip — handoff cs-feat-kpi-grid usuli */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
            className="cs-detail-meta"
          >
            <div style={{background: 'var(--bg)', padding: '20px 24px'}}>
              <div style={{fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted-3)', marginBottom: '6px'}}>
                {t('service')}
              </div>
              <div style={{fontSize: '15px', fontWeight: 600}}>{item.service}</div>
            </div>
            <div style={{background: 'var(--bg)', padding: '20px 24px'}}>
              <div style={{fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted-3)', marginBottom: '6px'}}>
                Davomiyligi
              </div>
              <div style={{fontSize: '15px', fontWeight: 600}}>{item.duration}</div>
            </div>
            <div style={{background: 'var(--bg)', padding: '20px 24px'}}>
              <div style={{fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted-3)', marginBottom: '6px'}}>
                {t('role')}
              </div>
              <div style={{fontSize: '15px', fontWeight: 600}}>{t('roleValue')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* COVER — sharp, full bleed */}
      <section className="section" style={{paddingTop: 0, paddingBottom: 0}}>
        <div className="inner">
          <img
            src={item.cover}
            alt={item.name}
            style={{
              width: '100%',
              aspectRatio: '16/9',
              objectFit: 'cover',
              display: 'block',
              borderTop: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)'
            }}
          />
        </div>
      </section>

      {/* KPI — light section, cs-feat-kpi-grid pattern */}
      <section className="section light">
        <div className="bg-grid light" />
        <div className="inner">
          <div className="kicker">{t('results')}</div>
          <h2 className="h2" style={{maxWidth: '720px'}}>Real <em>raqamlar</em>, taxmin yo'q.</h2>

          <div
            style={{
              marginTop: '48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(0,0,0,0.1)',
              border: '1px solid rgba(0,0,0,0.1)'
            }}
            className="cs-detail-kpi-light"
          >
            {item.kpi.map((k, i) => (
              <div key={i} style={{background: 'var(--bg-2)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <div
                  className={k.accent ? 'accent' : undefined}
                  style={{fontSize: '40px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, color: k.accent ? 'var(--accent)' : 'var(--fg-2)'}}
                  dangerouslySetInnerHTML={{__html: k.value}}
                />
                <div style={{fontFamily: 'var(--f-mono)', fontSize: '10px', color: 'var(--muted-3)', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
                  {k.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VAZIFA + YONDASHUV */}
      <section className="section">
        <div className="bg-grid" />
        <div className="inner">
          <div
            style={{display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)', gap: 'clamp(40px, 6vw, 80px)'}}
            className="cs-detail-grid"
          >
            <div>
              <div className="kicker">Vazifa</div>
              <p style={{fontSize: '17px', lineHeight: 1.6, color: 'var(--fg)'}}>{item.challenge}</p>
            </div>

            <div>
              <div className="kicker">Yondashuv</div>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {item.approach.map((a, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '20px',
                      padding: '16px 0',
                      borderBottom: '1px solid var(--line)',
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{fontFamily: 'var(--f-mono)', fontSize: '12px', color: 'var(--accent)', marginTop: '4px', flexShrink: 0, fontWeight: 600}}>
                      0{i + 1}
                    </span>
                    <span style={{fontSize: '16px', lineHeight: 1.6, color: 'var(--fg)'}}>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* NATIJA — sharp, big quote-style */}
          <div
            style={{
              marginTop: '80px',
              paddingTop: '48px',
              borderTop: '1px solid var(--line)'
            }}
          >
            <div className="kicker">// Natija</div>
            <p
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginTop: '20px',
                maxWidth: '1000px'
              }}
            >
              {item.result}
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY — cs-grid pattern (1px gaps) */}
      <section className="section" style={{paddingTop: 0}}>
        <div className="inner">
          <div className="kicker">Galereya</div>
          <div
            style={{
              marginTop: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
            className="cs-detail-gallery"
          >
            {item.gallery.map((g, i) => (
              <img
                key={i}
                src={g}
                alt={`${item.name} — ${i + 1}`}
                style={{
                  aspectRatio: '4/5',
                  width: '100%',
                  objectFit: 'cover',
                  background: 'var(--bg)',
                  display: 'block'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NEXT CASE — cs-card */}
      <section className="section">
        <div className="bg-grid" />
        <div className="inner">
          <div className="kicker">Keyingi keys</div>
          <Link
            href={`/cases/${next.slug}`}
            className="cs-card"
            style={{display: 'block', textDecoration: 'none', color: 'inherit', marginTop: '24px'}}
          >
            <div className="cs-card-arrow">↗</div>
            <div className="cs-card-head">
              <div className="cs-card-num">/ <b>{next.year}</b> · {next.city}</div>
              <div className="cs-card-pill">{next.type}</div>
            </div>
            <div className="cs-card-title">{next.name}</div>
            <div className="cs-card-loc">{next.service}</div>
            <p style={{color: 'var(--muted)', fontSize: '14px', lineHeight: 1.5, marginTop: '16px'}}>
              {next.summary}
            </p>
          </Link>
        </div>
      </section>

      {/* FINAL CTA — bosh sahifa bilan bir xil */}
      <FinalCta />
    </>
  );
}
