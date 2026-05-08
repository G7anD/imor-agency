import {setRequestLocale, getTranslations} from 'next-intl/server';
import {Container} from '@/components/ui/Container';
import {Button} from '@/components/ui/Button';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'NotFound'});
  return {title: t('title')};
}

export default async function NotFound() {
  return (
    <Container className="min-h-[80vh] flex flex-col items-center justify-center text-center py-32">
      <p className="font-mono text-accent text-sm mb-4">404</p>
      <h1 className="h-section">Sahifa topilmadi</h1>
      <p className="mt-6 text-muted max-w-md">
        Siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.
      </p>
      <div className="mt-10">
        <Button href="/" arrow>Bosh sahifaga qaytish</Button>
      </div>
    </Container>
  );
}
