import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  list: string[];
}

export function Services() {
  const t = useTranslations('Services');
  const items = (t.raw('items') as ServiceItem[]) ?? [];

  return (
    <section className="section" id="services">
      <div className="bg-grid" />
      <div className="inner">
        <div className="sv-head">
          <div>
            <div className="kicker">{t('kicker')}</div>
            <h2
              className="h2"
              dangerouslySetInnerHTML={{__html: t.raw('h2')}}
            />
          </div>
          <div
            className="sv-head-right"
            dangerouslySetInnerHTML={{__html: t.raw('sub')}}
          />
        </div>

        <div className="sv-grid">
          {items.map((s, i) => (
            <div
              key={s.slug}
              className={`sv-card${i === 0 ? ' featured' : ''}`}
            >
              <div className="sv-num">
                <span className="sv-num-circle">0{i + 1}</span>
              </div>
              <div className="sv-title">{s.title}</div>
              <div className="sv-list">
                {s.list.map((li, k) => (
                  <div key={k} className="sv-item">{li}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sv-foot">
          <div dangerouslySetInnerHTML={{__html: `// ${t.raw('footMeta')}`}} />
          <Link href="/pricing" className="sv-foot-cta">
            <span>{t('footCta')}</span><span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
