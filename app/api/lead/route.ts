import {NextResponse} from 'next/server';
import {z} from 'zod';
import {appendLeadToSheet, notifyTelegram} from '@/lib/sheets';

export const runtime = 'nodejs';

const schema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(7).max(40),
  project: z.string().max(2000).optional(),
  source: z.string().max(80).optional(),
  locale: z.string().max(8).optional()
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = schema.parse(json);

    await appendLeadToSheet(data);
    // Telegram bot'ga ham yuborish (optional)
    notifyTelegram(data).catch(() => {});

    return NextResponse.json({ok: true});
  } catch (err) {
    console.error('[/api/lead]', err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ok: false, errors: err.flatten()}, {status: 400});
    }
    return NextResponse.json({ok: false}, {status: 500});
  }
}
