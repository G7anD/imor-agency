'use client';

import {useTranslations, useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {locales, localeShort, type Locale} from '@/i18n/config';

export function Footer() {
  const tNav = useTranslations('Nav');
  const tFooter = useTranslations('Footer');
  const tServices = useTranslations('Services');
  const services = (tServices.raw('items') as Array<{slug: string; title: string}>) ?? [];

  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const year = new Date().getFullYear();

  function changeLocale(loc: Locale) {
    if (loc !== current) router.replace(pathname, {locale: loc});
  }

  return (
    <footer className="ft-root">
      <div className="ft-inner">
        <div className="ft-top">
          <div>
            <div className="ft-brand">
              <span
                className="logo-img"
                role="img"
                aria-label="imor agency"
                style={{height: '40px'}}
              />
            </div>
            <p className="ft-tagline">{tFooter('tagline')}</p>
            <div className="ft-socials">
              <a className="ft-social" href="https://t.me/imoragency" target="_blank" rel="noopener" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                </svg>
              </a>
              <a className="ft-social" href="https://instagram.com/imor.agency" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a className="ft-social" href="#" target="_blank" rel="noopener" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                  <path d="M21.6 7.2c-.2-1-1-1.7-2-2C17.6 4.8 12 4.8 12 4.8s-5.6 0-7.6.4c-1 .3-1.8 1-2 2C2 9.2 2 12 2 12s0 2.8.4 4.8c.2 1 1 1.7 2 2 2 .4 7.6.4 7.6.4s5.6 0 7.6-.4c1-.3 1.8-1 2-2 .4-2 .4-4.8.4-4.8s0-2.8-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
              <a className="ft-social" href="#" target="_blank" rel="noopener" aria-label="Behance">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
                  <path d="M7.4 6.5H2v11h5.9c2.4 0 4.5-1 4.5-3.4 0-1.5-.7-2.6-2.2-2.9 1.1-.5 1.7-1.4 1.7-2.6 0-1.4-.8-2.1-4.5-2.1zM5 8.7h2.6c1 0 1.7.4 1.7 1.4 0 1.1-.7 1.5-1.7 1.5H5V8.7zm0 6.6V13h2.7c1.2 0 2 .5 2 1.6 0 1.2-.9 1.7-2 1.7H5zm17.5-2.8c0-2.6-1.5-4.6-4.3-4.6s-4.6 2-4.6 4.6c0 2.7 1.7 4.6 4.6 4.6 2.2 0 3.7-1 4.2-3h-2.4c-.2.6-.7 1-1.6 1-1.4 0-2.1-.8-2.2-2.1h6.3c0-.2 0-.4 0-.5zm-6.2-1.2c.1-1.2 1-2 2.1-2 1.2 0 1.9.8 2 2h-4.1zM20.7 7h-4.4V8h4.4V7z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="ft-col-title">// {tFooter('company') /* Sayt-ish */}</div>
            <div className="ft-col-list">
              <a className="ft-col-link" href="#advantages">{tNav('about')}</a>
              <a className="ft-col-link" href="#services">{tNav('services')}</a>
              <a className="ft-col-link" href="#cases">{tNav('cases')}</a>
              <a className="ft-col-link" href="#pricing">{tNav('pricing')}</a>
            </div>
          </div>

          <div>
            <div className="ft-col-title">// {tFooter('services')}</div>
            <div className="ft-col-list">
              {services.map(s => (
                <a key={s.slug} className="ft-col-link" href="#services">
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="ft-col-title">// {tFooter('contact')}</div>
            <div className="ft-col-list">
              <a className="ft-col-link contact" href="tel:+998955285858">+998 95 528 58 58</a>
              <a className="ft-col-link" href="mailto:hello@imor.agency">hello@imor.agency</a>
              <a className="ft-col-link" href="https://t.me/imoragency" target="_blank" rel="noopener">
                <b>↗</b> Telegram — @imoragency
              </a>
              <a className="ft-col-link" href="https://instagram.com/imor.agency" target="_blank" rel="noopener">
                <b>↗</b> Instagram — @imor.agency
              </a>
            </div>
          </div>
        </div>

        <div className="ft-bot">
          <div>© 2021–<b>{year}</b> imor agency</div>
          <div className="ft-bot-langs">
            {locales.map(loc => (
              <a
                key={loc}
                onClick={() => changeLocale(loc)}
                className={loc === current ? 'active' : ''}
              >
                {localeShort[loc]}
              </a>
            ))}
          </div>
          <div>// {tFooter('madeIn')}</div>
        </div>
      </div>
    </footer>
  );
}
