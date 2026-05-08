import {useTranslations} from 'next-intl';

export function Advantages() {
  const t = useTranslations('Advantages');
  const items = (t.raw('items') as Array<{title: string; desc: string}>) ?? [];

  return (
    <section className="section" id="advantages">
      <div className="bg-grid" />
      <div className="inner">
        <div style={{maxWidth: '920px', marginBottom: '56px'}}>
          <div className="kicker">{t('kicker')}</div>
          <h2
            className="h2"
            dangerouslySetInnerHTML={{__html: t.raw('h2')}}
          />
          <p
            style={{fontSize: '17px', color: 'var(--muted)', maxWidth: '720px'}}
            dangerouslySetInnerHTML={{__html: t.raw('sub')}}
          />
        </div>
        <div className="ad-grid">
          {items.map((it, i) => (
            <div key={i} className="ad-item">
              <div className="ad-item-num">0{i + 1}</div>
              <div>
                <div className="ad-item-title">{it.title}</div>
                <div className="ad-item-desc">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
