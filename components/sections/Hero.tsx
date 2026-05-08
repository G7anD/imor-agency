'use client';

import {Fragment} from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export function Hero() {
  const t = useTranslations('Hero');
  const tNav = useTranslations('Nav');

  // Hero h1 — uzun matnni so'zlarga bo'lib chiqamiz (HTMLdagi animatsiya uchun)
  const h1Words = [
    t('h1Part1Word1'),
    t('h1Part1Word2'),
    t('h1Part1Word3'),
    t('h1Accent'),
    t('h1Part2Word1'),
    t('h1Part2Word2')
  ];

  // Marquee uchun
  const bandItems = [
    t('band1'), t('band2'), t('band3'), t('band4'),
    t('band5'), t('band6'), t('band7'), t('band8')
  ];

  return (
    <section className="hero" id="top">
      <div className="bg-grid" />

      {/* Ribbon */}
      <div className="ribbon">
        <span><span className="ribbon-dot" />{t('ribbon1')}</span>
        <span>{t('ribbon2')}</span>
        <span>{t('ribbon3')}</span>
      </div>

      <div className="hero-main">
        <div className="hero-left">
          <div>
            <div className="hero-issue">
              <span><b>imor.agency</b> / 2026</span>
              <span className="hero-issue-rule" />
              <span>{t('issueMeta')}</span>
            </div>
            <h1 className="hero-h1">
              {h1Words.map((word, i) => (
                <Fragment key={i}>
                  <span
                    className={i === 3 ? 'accent' : undefined}
                    style={{animationDelay: `${0.05 + i * 0.1}s`}}
                  >
                    {word}
                  </span>
                  {i < h1Words.length - 1 ? ' ' : ''}
                </Fragment>
              ))}
            </h1>
          </div>

          <div className="hero-meta-row">
            <p
              className="hero-sub"
              dangerouslySetInnerHTML={{__html: t.raw('sub')}}
            />
            <div className="hero-cta-stack">
              <Link href="/contact" className="hero-cta-main">
                <span>{tNav('consultation')}</span>
                <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 9h10M10 4l5 5-5 5" />
                </svg>
              </Link>
              <span className="hero-cta-sub">
                <span>↓</span><span>{t('ctaSub')}</span>
              </span>
            </div>
          </div>

          <div className="hero-corner">
            <span>{t('scrollHint')}</span>
            <span className="hero-corner-line" />
            <span>{t('scrollText')}</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-stat-hero">
            <div className="hero-stat-kicker">{t('statKicker')}</div>
            <div className="hero-stat-big">
              53,7<sup>%</sup>
            </div>
            <p
              className="hero-stat-cap"
              dangerouslySetInnerHTML={{__html: t.raw('statCap')}}
            />
          </div>
          <div className="hero-mini-row">
            <div className="hero-mini">
              <div className="hero-mini-num">$0,7<span>/lid</span></div>
              <div className="hero-mini-lab">
                {t('miniLab1Top')}<br />{t('miniLab1Bot')}
              </div>
            </div>
            <div className="hero-mini">
              <div className="hero-mini-num">15<span>+</span></div>
              <div className="hero-mini-lab">
                {t('miniLab2Top')}<br />{t('miniLab2Bot')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee band */}
      <div className="band">
        <div className="band-track">
          {[...bandItems, ...bandItems].map((item, i) => (
            <span key={i} className="band-item">
              <span className="band-star">✦</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
