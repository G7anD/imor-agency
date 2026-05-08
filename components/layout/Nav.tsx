'use client';

import {useTranslations, useLocale} from 'next-intl';
import {Link, usePathname, useRouter} from '@/i18n/navigation';
import {locales, localeShort, type Locale} from '@/i18n/config';
import {useState, useEffect} from 'react';

const navItems = [
  {key: 'about',    href: '#advantages'},
  {key: 'services', href: '#services'},
  {key: 'cases',    href: '#cases'},
  {key: 'pricing',  href: '#pricing'},
  {key: 'contact',  href: '#contact'}
] as const;

export function Nav() {
  const t = useTranslations('Nav');
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  // Sahifa o'zgarganda drawer'ni yopish
  useEffect(() => setOpen(false), [pathname]);

  // Drawer ochilganda body scrollni bloklash
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function changeLocale(loc: Locale) {
    if (loc !== current) router.replace(pathname, {locale: loc});
  }

  return (
    <>
      {/* =================== NAV =================== */}
      <header className="nav">
        <Link href="/" className="logo" aria-label="imor agency">
          <span className="logo-img" role="img" aria-label="imor agency" />
        </Link>

        <nav className="nav-links">
          {navItems.map(item => (
            <a key={item.key} href={item.href}>
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <div className="lang">
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
          <a href="tel:+998955285858" className="nav-cta">+998 95 528 58 58</a>
          <button
            className="nav-burger"
            onClick={() => setOpen(true)}
            aria-label={t('menu')}
          >
            <span></span>
          </button>
        </div>
      </header>

      {/* =================== MOBILE DRAWER =================== */}
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <Link href="/" className="logo" aria-label="imor agency" onClick={() => setOpen(false)}>
            <span className="logo-img" role="img" aria-label="imor agency" />
          </Link>
          <button
            className="drawer-close"
            onClick={() => setOpen(false)}
            aria-label={t('close')}
          >
            ×
          </button>
        </div>

        <nav className="drawer-links">
          {navItems.map(item => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="drawer-foot">
          <a href="tel:+998955285858">
            <b style={{color: 'var(--accent)'}}>+998 95 528 58 58</b>
          </a>
          <a href="mailto:hello@imor.agency">hello@imor.agency</a>
          <a href="https://t.me/imoragency" target="_blank" rel="noopener">
            Telegram — @imoragency
          </a>
        </div>
      </aside>
    </>
  );
}
