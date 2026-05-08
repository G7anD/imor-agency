import {useTranslations} from 'next-intl';
import pricingData from '@/content/pricing.json';
import type {PricingTier} from '@/types/content';

export function Pricing() {
  const t = useTranslations('Pricing');
  const tiers = (pricingData.tiers as PricingTier[]) ?? [];

  // featured paket — popular = true
  // Pricing card list uchun har paketning eng muhim 6 ta featuresi
  return (
    <section className="section light" id="pricing">
      <div className="bg-grid light" />
      <div className="inner">
        <div className="pr-head">
          <div>
            <div className="kicker">{t('kicker')}</div>
            <h2
              className="h2"
              dangerouslySetInnerHTML={{__html: t.raw('h2')}}
            />
          </div>
          <div className="pr-head-right">{t('sub')}</div>
        </div>

        <div className="pc-grid">
          {tiers.map((tier, i) => (
            <div
              key={tier.slug}
              className={`pc-card${tier.popular ? ' featured' : ''}`}
            >
              {tier.popular && (
                <div className="pc-card-pill">{t('popular')}</div>
              )}
              <div className="pc-card-tier">{tier.name}</div>
              <div className="pc-card-tagline">// {tier.tagline}</div>

              <div className="pc-card-list">
                {tier.features.slice(0, 6).map((f, j) => (
                  <div key={j} className="pc-card-item">
                    <div className="pc-card-item-num">{j + 1}</div>
                    <div>
                      <b>{f.label}</b>
                      {f.value && f.value !== '—' && (
                        <> — {f.value}</>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pc-card-divider" />
              <div className="pc-card-price">
                {tier.currency}{tier.price.toLocaleString('en-US')}
                <span> / {t('perMonth')}</span>
              </div>
              <a
                href="#contact"
                className="pc-card-cta"
                data-tier={tier.name}
                data-price={`${tier.currency}${tier.price.toLocaleString('en-US')}/oy`}
              >
                <span>{t('cta')}</span><span>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="pc-plan-head">
          <div className="pc-plan-title"
            dangerouslySetInnerHTML={{__html: t.raw('tableTitle')}}
          />
          <div className="pc-plan-note">// {pricingData.note}</div>
        </div>

        <div className="pc-table-wrap">
          <table className="pc-table">
            <thead>
              <tr>
                <th>{t('feature')}</th>
                {tiers.map(tier => (
                  <th
                    key={tier.slug}
                    className={tier.popular ? 'featured' : ''}
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tiers[0].features.map((_, rowIdx) => (
                <tr key={rowIdx}>
                  <td className="label">{tiers[0].features[rowIdx].label}</td>
                  {tiers.map(tier => (
                    <td
                      key={tier.slug}
                      className={`value${tier.popular ? ' featured' : ''}`}
                    >
                      {tier.features[rowIdx]?.value || '—'}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="label">{t('priceRow')}</td>
                {tiers.map(tier => (
                  <td
                    key={tier.slug}
                    className={`value${tier.popular ? ' featured' : ''}`}
                  >
                    {tier.currency}{tier.price.toLocaleString('en-US')}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
