interface LeadInput {
  name: string;
  phone: string;
  project?: string;
  source?: string;
  locale?: string;
}

/**
 * Lead'ni Google Sheet'ga qo'shadi — Apps Script Web App orqali.
 * Sheet ustunlari: Timestamp | Name | Phone | Project | Source | Locale
 *
 * Apps Script `doPost(e)` JSON body kutadi va sheet.appendRow() ishlatadi.
 * URL deploy paytida olinadi: Extensions → Apps Script → Deploy → Web app.
 */
export async function appendLeadToSheet(lead: LeadInput) {
  const url = process.env.GOOGLE_SCRIPT_URL;
  if (!url) {
    throw new Error('GOOGLE_SCRIPT_URL env yetishmaydi');
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: lead.name,
      phone: lead.phone,
      project: lead.project ?? '',
      source: lead.source ?? 'website',
      locale: lead.locale ?? 'uz'
    }),
    redirect: 'follow'
  });

  if (!res.ok) {
    throw new Error(`Apps Script error: ${res.status} ${res.statusText}`);
  }
}

/**
 * Telegram'ga ham xabar yuboradi (optional).
 */
export async function notifyTelegram(lead: LeadInput) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const text = [
    '🆕 *Yangi lead — imor.agency*',
    `👤 ${lead.name}`,
    `📞 ${lead.phone}`,
    lead.project && `📝 ${lead.project}`,
    `🌐 ${lead.locale ?? 'uz'}`
  ]
    .filter(Boolean)
    .join('\n');

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({chat_id: chatId, text, parse_mode: 'Markdown'})
  });
}
