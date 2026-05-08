import {setRequestLocale, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Link} from '@/i18n/navigation';
import {Container} from '@/components/ui/Container';
import {Kicker} from '@/components/ui/Kicker';
import {Button} from '@/components/ui/Button';
import {Check, ArrowUpRight} from '@/components/ui/Icons';
import servicesData from '@/content/services.json';
import type {ServiceItem} from '@/types/content';
import {routing} from '@/i18n/routing';

export function generateStaticParams() {
  const slugs = (servicesData.items as ServiceItem[]).map(s => s.slug);
  return routing.locales.flatMap(locale => slugs.map(slug => ({locale, slug})));
}

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {slug} = await params;
  const item = (servicesData.items as ServiceItem[]).find(s => s.slug === slug);
  if (!item) return {};
  return {title: `${item.title} — imor.agency`, description: item.summary};
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);

  const item = (servicesData.items as ServiceItem[]).find(s => s.slug === slug);
  if (!item) notFound();

  const all = servicesData.items as ServiceItem[];
  const idx = all.findIndex(s => s.slug === slug);
  const next = all[(idx + 1) % all.length];

  return (
    <>
      <section className="relative bg-bg text-fg pt-32 md:pt-40 pb-20 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-accent/8 blur-[140px]" aria-hidden />
        <Container className="relative">
          <Link href="/services" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted hover:text-accent transition-colors mb-12">
            ← Xizmatlar
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-sm text-accent mb-4">{item.icon}</p>
              <h1 className="h-display text-balance">{item.title}</h1>
              <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl text-pretty">
                {item.summary}
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-3xl border border-line bg-white/[0.02] p-6 space-y-4">
                <Meta label="Davomiyligi" value={item.duration} />
                <Meta label="Format" value="Pod-klyuch" last />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bg-2 text-fg-2 py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Kicker tone="dark">Nimalar kiradi</Kicker>
              <h2 className="mt-5 h-section text-balance">
                Aniq <span className="accent-italic">deliverable'lar</span>.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-3">
                {item.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 pb-4 border-b border-black/10">
                    <Check size={18} className="mt-1 text-accent shrink-0" />
                    <span className="text-base md:text-lg leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bg text-fg py-20 md:py-28 border-t border-line">
        <Container>
          <div className="rounded-3xl bg-white/[0.02] border border-line p-8 md:p-12">
            <Kicker>Natija</Kicker>
            <p className="mt-5 text-2xl md:text-4xl font-bold tracking-tight text-balance max-w-3xl">
              {item.outcome}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" arrow>Boshlash</Button>
              <Button href="/pricing" variant="ghost" size="lg">Tariflar</Button>
            </div>
          </div>

          <Link
            href={`/services/${next.slug}`}
            className="mt-10 group block rounded-3xl border border-line bg-white/[0.02] p-7 transition-all hover:border-accent/40"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-3 mb-2">Keyingi xizmat</p>
                <span className="text-2xl md:text-3xl font-bold tracking-tight">{next.title}</span>
              </div>
              <ArrowUpRight className="text-muted group-hover:text-accent transition-colors" size={24} />
            </div>
          </Link>
        </Container>
      </section>
    </>
  );
}

function Meta({label, value, last}: {label: string; value: string; last?: boolean}) {
  return (
    <div className={`flex items-center justify-between gap-4 ${last ? '' : 'pb-4 border-b border-line'}`}>
      <span className="text-[10px] uppercase tracking-[0.16em] text-muted-3">{label}</span>
      <span className="text-sm font-semibold text-right">{value}</span>
    </div>
  );
}
