import {useTranslations} from 'next-intl';
import {LeadForm} from '@/components/forms/LeadForm';

export function FinalCta() {
  const t = useTranslations('FinalCta');
  const tForm = useTranslations('LeadForm');

  return (
    <section className="fc-root" id="contact">
      <div className="bg-grid" />

      <div className="fc-left">
        <div>
          <div className="kicker">{t('kicker')}</div>
          <h2
            className="fc-h1"
            dangerouslySetInnerHTML={{__html: t.raw('h2')}}
          />
          <p
            className="fc-sub"
            dangerouslySetInnerHTML={{__html: t.raw('sub')}}
          />
        </div>
        <div className="fc-meta" style={{marginTop: '40px'}}>
          <div className="fc-meta-item">
            <b>15+</b>
            {t('meta1')}
          </div>
          <div className="fc-meta-item">
            <b>$0,7</b>
            {t('meta2')}
          </div>
          <div className="fc-meta-item">
            <b>5 {t('yearsShort')}</b>
            {t('meta3')}
          </div>
        </div>
      </div>

      <div className="fc-right">
        <div className="fc-r-label">
          <span className="fc-r-label-dot" />
          {t('rLabel')}
        </div>

        <a href="tel:+998955285858" className="fc-phone-card" style={{textDecoration: 'none'}}>
          <div className="fc-phone-card-arrow">→</div>
          <div className="fc-phone-card-label">// {t('phoneLabel')}</div>
          <div className="fc-phone-card-num accent">+998 95 528 58 58</div>
          <div style={{fontSize: '12px', color: 'var(--muted-3)', marginTop: '6px', fontFamily: 'var(--f-mono)'}}>
            {t('phoneHours')}
          </div>
        </a>

        {/* Lead form card — dark, on mint section */}
        <div
          style={{
            background: 'var(--fg-2)',
            color: 'var(--fg)',
            padding: '24px',
            borderRadius: '20px'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--muted-3)',
              fontWeight: 600,
              marginBottom: '6px'
            }}
          >
            // {tForm('title')}
          </div>
          <p style={{fontSize: '13px', color: 'var(--muted)', margin: '0 0 16px'}}>
            {tForm('subtitle')}
          </p>
          <LeadForm />
        </div>

        <div className="fc-divider" />

        <div className="fc-channel-row">
          <a href="https://t.me/imoragency" target="_blank" rel="noopener" className="fc-channel">
            <div className="fc-channel-label">// telegram</div>
            <div className="fc-channel-val"><span>@imoragency</span><span>↗</span></div>
          </a>
          <a href="https://wa.me/998955285858" target="_blank" rel="noopener" className="fc-channel">
            <div className="fc-channel-label">// whatsapp</div>
            <div className="fc-channel-val"><span>+998 95 528 58 58</span><span>↗</span></div>
          </a>
          <a href="mailto:hello@imor.agency" className="fc-channel">
            <div className="fc-channel-label">// email</div>
            <div className="fc-channel-val"><span>hello@imor.agency</span><span>↗</span></div>
          </a>
          <a href="https://instagram.com/imor.agency" target="_blank" rel="noopener" className="fc-channel">
            <div className="fc-channel-label">// instagram</div>
            <div className="fc-channel-val"><span>@imor.agency</span><span>↗</span></div>
          </a>
        </div>

        <div className="fc-foot-tag"
          dangerouslySetInnerHTML={{__html: t.raw('footTag')}}
        />
      </div>
    </section>
  );
}
