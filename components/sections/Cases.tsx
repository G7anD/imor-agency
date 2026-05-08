import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import casesData from '@/content/cases.json';
import type {CaseItem} from '@/types/content';

export function Cases() {
  const t = useTranslations('Cases');
  const allItems = (casesData.items as CaseItem[]) ?? [];
  const featured = allItems[0];
  const rest = allItems.slice(1, 5); // 4 cards

  return (
    <section className="section" id="cases">
      <div className="bg-grid" />
      <div className="inner">
        <div className="cs-head">
          <div>
            <div className="kicker">{t('kicker')}</div>
            <h2
              className="h2"
              dangerouslySetInnerHTML={{__html: t.raw('h2')}}
            />
          </div>
          <div className="cs-head-stat">
            <div>
              <div className="cs-head-stat-num">15<span>+</span></div>
              <div className="cs-head-stat-lab">{t('stat1Label')}</div>
            </div>
            <div>
              <div className="cs-head-stat-num">5<span> {t('stat2Suffix')}</span></div>
              <div className="cs-head-stat-lab">{t('stat2Label')}</div>
            </div>
          </div>
        </div>

        {/* Featured */}
        {featured && (
          <Link
            href={`/cases/${featured.slug}`}
            className="cs-featured"
            style={{display: 'grid', textDecoration: 'none', color: 'inherit'}}
          >
            <div className="cs-feat-left">
              <div className="cs-feat-tag-row">
                <span className="cs-feat-tag">Keys 01</span>
                <span style={{color: 'var(--muted-3)'}}>· {featured.city} · {featured.service}</span>
              </div>
              <h3 className="cs-feat-title">{featured.name}</h3>
              <p className="cs-feat-sub">{featured.summary}</p>
              <div className="cs-feat-kpi-grid">
                {featured.kpi.map((k, j) => (
                  <div key={j} className="cs-feat-kpi">
                    <div
                      className={`num${k.accent ? ' accent' : ''}`}
                      dangerouslySetInnerHTML={{__html: k.value}}
                    />
                    <div className="lab">{k.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cs-feat-right">
              <div className="cs-feat-result-label">// {t('results')}</div>
              <div className="cs-feat-big">
                53,7<sup>%</sup>
              </div>
              <div>
                <p className="cs-feat-result-cap">
                  <b>{featured.duration}</b> · 14 {t('salesLabel')} · $1,0 CPL · 556 lid
                </p>
                <div className="cs-feat-arrow" style={{marginTop: '24px'}}>→</div>
              </div>
            </div>
          </Link>
        )}

        {/* Other 4 cases */}
        <div className="cs-grid">
          {rest.map((c, i) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="cs-card"
              style={{textDecoration: 'none', color: 'inherit'}}
            >
              <div className="cs-card-arrow">↗</div>
              <div className="cs-card-head">
                <div className="cs-card-num">
                  / <b>Keys 0{i + 2}</b> · {c.city}
                </div>
                <div className="cs-card-pill">{c.type}</div>
              </div>
              <div className="cs-card-title">{c.name}</div>
              <div className="cs-card-loc">{c.year} · {c.duration}</div>
              <div className="cs-card-kpi-grid">
                {c.kpi.map((k, j) => (
                  <div key={j} className="cs-card-kpi">
                    <div
                      className={`num${k.accent ? ' accent' : ''}`}
                      dangerouslySetInnerHTML={{__html: k.value}}
                    />
                    <div className="lab">{k.label}</div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
