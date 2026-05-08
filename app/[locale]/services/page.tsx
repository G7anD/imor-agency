import {setRequestLocale, getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {Container} from '@/components/ui/Container';
import {Kicker} from '@/components/ui/Kicker';
import {ArrowUpRight} from '@/components/ui/Icons';
import servicesData from '@/content/services.json';
import type {ServiceItem} from '@/types/content';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Nav'});
  return {title: `${t('services')} — imor.agency`};
}

export default async function ServicesListPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const items = servicesData.items as ServiceItem[];

  return (
    <>
      <section className="relative bg-bg text-fg pt-32 md:pt-40 pb-16 border-b border-line">
        <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
        <Container className="relative">
          <Kicker>Xizmatlar — 5 yo'nalish</Kicker>
          <h1 className="mt-5 h-display text-balance max-w-[14ch]">
            Performance — <span className="accent-italic">pod-klyuch</span>.
          </h1>
        </Container>
      </section>

      <section className="bg-bg text-fg py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block rounded-3xl border border-line bg-white/[0.02] p-7 transition-all hover:border-accent/40 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-sm text-accent">{s.icon}</span>
                  <ArrowUpRight className="text-muted-3 group-hover:text-accent transition-colors" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight mb-2">{s.title}</h2>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-3 mb-4">{s.tagline}</p>
                <p className="text-sm text-muted leading-relaxed">{s.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
