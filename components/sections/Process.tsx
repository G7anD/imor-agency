import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

interface Step {
  title: string;
  desc: string;
  meta: string;
}

export function Process() {
  const t = useTranslations('Process');
  const steps = (t.raw('steps') as Step[]) ?? [];

  // HTMLda 03 — dark, 05 — accent
  function stepClass(i: number) {
    if (i === 2) return 'pr-step dark';
    if (i === 4) return 'pr-step accent';
    return 'pr-step';
  }

  return (
    <section className="section light" id="process">
      <div className="bg-grid light" />
      <div className="inner">
        <div className="pr-head">
          <div>
            <div
              className="kicker"
              dangerouslySetInnerHTML={{__html: t.raw('kickerHtml')}}
            />
            <h2
              className="h2"
              dangerouslySetInnerHTML={{__html: t.raw('h2')}}
            />
          </div>
          <div className="pr-head-right">{t('sub')}</div>
        </div>

        <div className="pr-timeline">
          {steps.map((s, i) => (
            <div key={i} className={stepClass(i)}>
              <div className="pr-step-num">0{i + 1}</div>
              <div className="pr-step-title">{s.title}</div>
              <div className="pr-step-desc">{s.desc}</div>
              <div className="pr-step-meta">// <b>{s.meta}</b></div>
            </div>
          ))}
        </div>

        <div className="pr-output">
          <div>
            <div className="pr-output-label">// {t('outputLabel')}</div>
            <div className="pr-output-text" style={{marginTop: '4px'}}>
              {t('outputTextPart1')} <em>{t('outputTextAccent')}</em>
            </div>
          </div>
          <Link href="/contact" className="btn btn-primary">
            <span>{t('outputCta')}</span><span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
