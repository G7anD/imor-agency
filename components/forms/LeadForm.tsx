'use client';

import {useTranslations} from 'next-intl';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/Button';
import {Check} from '@/components/ui/Icons';
import {cn} from '@/lib/utils';

const schema = z.object({
  name: z.string().min(2, 'Ism kamida 2 belgi'),
  phone: z.string().min(7, 'Telefon raqam noto\'g\'ri'),
  project: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

interface LeadFormProps {
  className?: string;
}

export function LeadForm({className}: LeadFormProps) {
  const t = useTranslations('LeadForm');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: {errors}
  } = useForm<FormValues>({resolver: zodResolver(schema)});

  // Pricing card "Tanlash" tugmasidan tarif nomini qabul qilish
  useEffect(() => {
    const stored = sessionStorage.getItem('imor:lead-tier');
    if (stored) {
      setValue('project', stored);
      sessionStorage.removeItem('imor:lead-tier');
    }
    function onTierSelected(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setValue('project', detail);
    }
    window.addEventListener('imor:tier-selected', onTierSelected);
    return () => window.removeEventListener('imor:tier-selected', onTierSelected);
  }, [setValue]);

  async function onSubmit(values: FormValues) {
    setStatus('submitting');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('rounded-3xl border border-accent/40 bg-accent/5 p-8 text-center', className)}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-fg-2 mb-4">
          <Check size={20} />
        </div>
        <h3 className="text-2xl font-bold tracking-tight">{t('success')}</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('space-y-4', className)} noValidate>
      <Field
        label={t('name')}
        error={errors.name?.message}
        {...register('name')}
        autoComplete="name"
      />
      <Field
        label={t('phone')}
        error={errors.phone?.message}
        type="tel"
        placeholder="+998 95 528 58 58"
        {...register('phone')}
        autoComplete="tel"
      />
      <Field
        label={t('project')}
        error={errors.project?.message}
        as="textarea"
        rows={3}
        {...register('project')}
      />

      <div className="pt-2 flex flex-col gap-3">
        <Button
          type="submit"
          size="lg"
          arrow
          disabled={status === 'submitting'}
          className="w-full"
        >
          {status === 'submitting' ? t('submitting') : t('submit')}
        </Button>
        {status === 'error' && (
          <p className="text-xs text-red-400 text-center">{t('error')}</p>
        )}
      </div>
    </form>
  );
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  as?: 'input' | 'textarea';
  rows?: number;
}

const Field = (() => {
  const Cmp = (
    {label, error, as = 'input', rows, className, ...rest}: FieldProps,
    ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputCls = cn(
      'w-full bg-white/[0.03] border border-line rounded-xl px-4 py-3 text-base text-fg placeholder:text-muted-3',
      'focus:outline-none focus:border-accent focus:bg-white/[0.05] transition-colors',
      error && 'border-red-500/50',
      className
    );
    return (
      <label className="block">
        <span className="text-xs uppercase tracking-[0.14em] text-muted-3 font-semibold mb-1.5 block">
          {label}
        </span>
        {as === 'textarea' ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={rows}
            {...(rest as unknown as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            className={inputCls}
          />
        ) : (
          <input ref={ref as React.Ref<HTMLInputElement>} {...rest} className={inputCls} />
        )}
        {error && <span className="text-xs text-red-400 mt-1 block">{error}</span>}
      </label>
    );
  };
  return require('react').forwardRef(Cmp);
})();
