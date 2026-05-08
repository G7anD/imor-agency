import {setRequestLocale} from 'next-intl/server';
import {Container} from '@/components/ui/Container';
import {Kicker} from '@/components/ui/Kicker';
import {Button} from '@/components/ui/Button';

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const principles = [
    {title: 'Faqat ko\'chmas mulk', desc: 'Boshqa nichelar bilan vaqtimizni bo\'lmaymiz. 5 yil — bir yo\'nalish.'},
    {title: 'Real raqamlar', desc: 'Hech qanday taxmin yo\'q. Faqat aniq KPI va shaffof hisobotlar.'},
    {title: 'Sotuv tizimi', desc: 'Reklama emas, tizim. Strategiya, kontent, target, CRM.'},
    {title: 'Pod-klyuch', desc: 'Bir nuqtali javobgarlik. Sizning tomondan — tasdiqlash.'}
  ];

  return (
    <>
      <section className="relative bg-bg text-fg pt-32 md:pt-40 pb-16 border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
        <Container className="relative">
          <Kicker>Biz haqimizda</Kicker>
          <h1 className="mt-5 h-display text-balance max-w-[16ch]">
            Imor — ko'chmas mulk uchun <span className="accent-italic">marketing tizimi</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-muted leading-relaxed text-pretty">
            2021 yildan buyon faqat ko'chmas mulk sohasida ishlaymiz.
            15+ developer loyihasini noldan ishga tushirdik —
            sotuv bo'limini qurish, marketing va undiruv tizimlarini joriy etish.
          </p>
        </Container>
      </section>

      <section className="bg-bg-2 text-fg-2 py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 rounded-3xl overflow-hidden border border-black/10">
            <Stat value="5" label="Yil tajriba" />
            <Stat value="15+" label="Loyiha" />
            <Stat value="2000+" label="Sifatli lid" />
          </div>
        </Container>
      </section>

      <section className="bg-bg text-fg py-20 md:py-28 border-t border-line">
        <Container>
          <Kicker>Tamoyillar</Kicker>
          <h2 className="mt-5 h-section text-balance max-w-[16ch]">
            4 ta <span className="accent-italic">qoida</span>, hech qanday istisno.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <div key={i} className="rounded-3xl border border-line bg-white/[0.02] p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <h3 className="h-card">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>Bog'lanish</Button>
            <Button href="/cases" variant="ghost" size="lg">Keyslarni ko'rish</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function Stat({value, label}: {value: string; label: string}) {
  return (
    <div className="bg-bg-2 p-10 md:p-12">
      <p className="text-6xl md:text-7xl font-bold tracking-tight text-accent">{value}</p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted-3 font-semibold">{label}</p>
    </div>
  );
}
