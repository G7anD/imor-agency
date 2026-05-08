# imor.agency — Next.js 16

Ko'chmas mulk uchun pod-klyuch marketing agentligi sayti.
6 til, Google Sheets lid integratsiyasi, self-hosted Docker deploy.

## 🚀 Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (inline `@theme` design tokens)
- **next-intl 4** — `uz` (default), `ru`, `tg`, `ky`, `tr`, `en`
- **Framer Motion** — animatsiyalar
- **react-hook-form** + **zod** — forma validatsiyasi
- **googleapis** — Google Sheets'ga lid yozuvi
- **Docker** (multi-stage, standalone output) — self-hosted

## 📁 Tuzilma

```
next-app/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx           # i18n provider + Nav + Footer
│   │   ├── page.tsx             # bosh sahifa (Hero → Final CTA)
│   │   ├── about/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx         # 5 ta xizmat list
│   │   │   └── [slug]/page.tsx
│   │   ├── cases/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx  # universal case template
│   │   ├── pricing/page.tsx
│   │   ├── contact/page.tsx
│   │   └── not-found.tsx
│   ├── api/lead/route.ts        # POST → Google Sheets
│   ├── sitemap.ts               # multi-locale sitemap
│   ├── robots.ts
│   └── layout.tsx
│
├── components/
│   ├── ui/                      # Button, Card, Kicker, Container, Reveal, Icons, Pill, Section
│   ├── sections/                # Hero, Advantages, Services, Process, Cases, Pricing, FinalCta
│   ├── layout/                  # Nav, Footer, LangSwitcher
│   ├── forms/                   # LeadForm
│   └── Analytics.tsx            # GA4 + YM
│
├── messages/                    # uz.json + 5 ta nusxa (tarjimon to'ldiradi)
├── content/                     # cases.json, services.json, pricing.json
├── i18n/                        # config, routing, request, navigation
├── lib/                         # utils, sheets
├── types/                       # content.ts
├── public/                      # logo, og.png, /cases/*/...
├── middleware.ts                # next-intl locale routing
├── next.config.ts               # output: 'standalone'
├── tailwind.config — yo'q       # v4 inline @theme (globals.css)
├── Dockerfile                   # multi-stage build
└── docker-compose.yml
```

## 🎨 Design tokens

Hammasi `app/globals.css` ichida (Tailwind v4 `@theme` blokida):

| Token              | Qiymat       |
|--------------------|--------------|
| `--color-bg`       | `#050505`    |
| `--color-bg-2`     | `#fafafa`    |
| `--color-fg`       | `#fafafa`    |
| `--color-fg-2`     | `#050505`    |
| `--color-accent`   | `#01CF98`    |
| `--font-sans`      | `Inter`      |
| `--font-serif`     | `Instrument Serif` (italic accent) |

Tailwind utility'lar: `bg-accent`, `text-fg`, `border-line`, `accent-italic` (italic + serif + accent).

## 🌍 i18n

- Routing: `localePrefix: 'always'` — hamma tillarda prefix bor (reklama uchun foydali).
  - `/` → `/uz` (redirect)
  - `/uz/services/strategy`
  - `/ru/cases/manzara`
- Yangi til qo'shish: `i18n/config.ts` ichidagi `locales`'ga qo'shing va `messages/<code>.json` yarating.
- Hozir hamma `*.json` fayllar O'zbek matnining **nusxasi** — tarjimon to'ldiradi.

## 🔌 Google Sheets — lid integratsiyasi

1. **Google Cloud Console** → yangi project
2. **APIs & Services** → Google Sheets API'ni yoqing
3. **Service Accounts** → yangi yarating, JSON key yuklab oling
4. Sheet'da yangi tab yarating (default: `Leads`), birinchi qator:
   ```
   Timestamp | Name | Phone | Project | Source | Locale
   ```
5. Sheet'ni service account email bilan **share qiling** (Editor)
6. `.env` fayliga qiymatlarni qo'ying (`.env.example`'dan ko'chiring)

## 📦 Lokal ishga tushirish

```bash
cp .env.example .env
# .env'ni to'ldiring

npm install
npm run dev      # http://localhost:3000
```

## 🐳 Docker (production)

```bash
# .env fayl tayyor bo'lishi kerak
docker compose build
docker compose up -d

# Logs
docker compose logs -f web
```

Sayt `:3000` portda ishlaydi. **Nginx/Caddy** orqali reverse-proxy + SSL qo'ying.

### Nginx misoli

```nginx
server {
  listen 443 ssl http2;
  server_name imor.agency;
  ssl_certificate     /etc/letsencrypt/live/imor.agency/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/imor.agency/privkey.pem;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
  }
}
```

## 📝 Kontentni tahrirlash

| Nima           | Qayerda                              |
|----------------|--------------------------------------|
| Bosh matnlar   | `messages/uz.json` (va boshqalar)    |
| Keyslar        | `content/cases.json` — slug, KPI, gallery |
| Xizmatlar      | `content/services.json`              |
| Tariflar       | `content/pricing.json`               |
| Loyiha rasmlari| `public/cases/<slug>/...`            |

Yangi keys qo'shish: `content/cases.json` ichiga yozuv qo'shing — sahifa **avtomatik** generatsiya qilinadi (`generateStaticParams`).

## 🔍 SEO

- ✅ `app/sitemap.ts` — barcha sahifalar × 6 til + hreflang
- ✅ `app/robots.ts`
- ✅ Per-locale `<html lang>` + canonical + `alternates.languages`
- ✅ OG meta + Twitter card
- ✅ `og.png` ni `public/`'ga qo'ying (1200×630)

## ⚙️ Environment variables

`.env.example`'da to'liq ro'yxat. Asosiy:

| Key                              | Description                      |
|----------------------------------|----------------------------------|
| `NEXT_PUBLIC_SITE_URL`           | https://imor.agency              |
| `GOOGLE_SHEETS_ID`               | Sheet ID (URL'dan)               |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL`   | Service account email            |
| `GOOGLE_PRIVATE_KEY`             | JSON key'dan `private_key`       |
| `NEXT_PUBLIC_GA_ID`              | Google Analytics 4 (optional)    |
| `NEXT_PUBLIC_YM_ID`              | Yandex Metrika (optional)        |
| `TELEGRAM_BOT_TOKEN`             | Lead bildirishnomasi (optional)  |
| `TELEGRAM_CHAT_ID`               |                                  |

## 🧪 Komandalar

```bash
npm run dev         # dev server
npm run build       # production build
npm run start       # production server
npm run lint        # ESLint
npm run typecheck   # TS check
```

---

© imor.agency · Made in Toshkent
