# Cristina Doncel — Web Rebuild Plan

> **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Vercel · GitHub Actions  
> **Author:** Working document — developer + Copilot pair  
> **Status:** Pre-development — Phase 0 starting

---

## 1. Project Overview

Rebuild of [cristinadoncel.com](https://cristinadoncel.com) — a Spanish-language portfolio and
services website for a professional calligrapher. The goal is to migrate fully off WordPress +
Elementor Pro, reduce hosting costs to near-zero, and produce a faster, cleaner, more
maintainable site.

**What the site needs to do:**
- Present Cristina's services (brands & agencies, weddings & events, branding)
- Show portfolio / project examples
- Present "About me" information
- Email newsletter subscription via MailerLite
- Contact form (hidden at launch, re-enabled later with bot protection)
- Legal pages (legal notice, privacy policy, cookies, T&C, returns policy)
- Rank well on Google (SEO, structured data, fast load times)

**What it does NOT need (removed from scope):**
- Workshop listings or payment processing
- E-commerce or product catalog
- Multi-language support (Spanish only)
- User authentication or accounts
- Database (no data needs to be stored server-side at launch)

---

## 2. Secrets & Security Strategy (Public Repository)

The repository is public. The following rules are enforced throughout the project:

| What | Where it lives | Committed to git? |
|---|---|---|
| Real API keys, secrets | `.env.local` (local) + Vercel env vars (production) | ❌ Never |
| Variable names (no values) | `.env.local.example` | ✅ Yes |
| GitHub Actions secrets | GitHub repository Settings → Secrets | ❌ Never |
| Images, fonts, static assets | `/public` folder | ✅ Yes (safe) |
| Content / text | `/src/content` TypeScript files | ✅ Yes (safe) |

`.env.local` is already excluded by the Node `.gitignore`. No exceptions.

---

## 3. Definitive Technology Decisions

### 3.1 Framework — Next.js 14 (App Router) + TypeScript

| Pros | Cons |
|---|---|
| SSG (static) + serverless API routes in one project | App Router is newer — some patterns differ from older tutorials |
| Built-in image optimization (`next/image`) | Slight overhead vs a plain static site — worth it for flexibility |
| First-class TypeScript support | |
| Native metadata API for SEO | |
| Deploys perfectly on Vercel | |

**Decision: ✅ Next.js App Router + TypeScript strict mode.** *(Note: scaffolded with Next.js 16.3.0 / React 19.2.8 — newer than the originally planned Next.js 14, since `create-next-app@latest` installs current stable. No issues identified; revisit if API differences surface.)*

---

### 3.2 Styling — Tailwind CSS v3

| Pros | Cons |
|---|---|
| Utility-first: fast, consistent layouts | Large class lists in JSX (managed via component abstraction) |
| All design tokens (colors, fonts, spacing) in one config file | Different mental model if used to BEM/SCSS |
| No separate CSS file maintenance | |
| Automatic purge in production (small CSS bundle) | |

**Decision: ✅ Tailwind CSS.** Brand colors and typography configured in `tailwind.config.ts`
once the brand guide is provided.

*Update: scaffolded as **Tailwind v4** (CSS-first config) instead of v3. There is no
`tailwind.config.ts` by default — brand tokens will instead be added as CSS custom properties
inside the `@theme { ... }` block in `src/app/globals.css` when the brand guide arrives (Step 0.9).*

---

### 3.3 Interactive Components — Radix UI (primitives)

| Pros | Cons |
|---|---|
| Fully accessible (ARIA, keyboard navigation) out of the box | Unstyled — Tailwind is applied on top |
| Covers: Navigation Menu, Dialog, Accordion, Tooltip | Small extra dependency |
| TypeScript-native | |

**Decision: ✅ Radix UI** for nav menu, any modals. Plain HTML + Tailwind for static elements.

---

### 3.4 Animations — Framer Motion

| Pros | Cons |
|---|---|
| Declarative, React-friendly | Adds ~30KB (mitigated via lazy loading) |
| Smooth entrance animations and scroll-triggered reveals | Can be overdone — used sparingly |
| Works in App Router with `'use client'` | |

**Decision: ✅ Framer Motion** for hero entrance, card hovers, section reveals. Used selectively.

---

### 3.5 Content — Files in the repository

| Pros | Cons |
|---|---|
| Zero extra services or costs | Site owner cannot self-edit without a developer |
| Fully version-controlled (git history) | Content changes require a commit + deploy |
| Fast builds (no external API calls) | |

Content changes on this site are infrequent. You are the developer.

**Decision: ✅ Content lives in `/src/content/` as TypeScript/JSON files and Markdown for legal
pages.** Structure is designed to migrate to a headless CMS (Sanity) later if Cristina ever
wants to self-edit.

---

### 3.6 Images — `/public` + `next/image`

| Option | Pros | Cons |
|---|---|---|
| `/public` + `next/image` | Zero cost, automatic WebP + lazy loading + responsive sizes | Images live in repo (larger repo, acceptable) |
| Cloudinary | External CDN, advanced transforms | Extra service — not needed now |

**Decision: ✅ `/public/images/` + `next/image`.** Move to Cloudinary only if portfolio grows large.

---

### 3.7 Email Newsletter — MailerLite (keep existing account)

Cristina already uses MailerLite. We keep it.

| Pros | Cons |
|---|---|
| Free up to 1,000 subscribers / 12,000 emails/month | One external service (already in use) |
| Existing subscriber list is already there | |
| Clean REST API with TypeScript support | |
| Handles welcome emails, list management, campaigns | |

**How it works in the new site:**
1. User fills in email in the subscription component → submits
2. Next.js API route `/api/subscribe` receives the email server-side
3. Route validates input (Zod) + verifies hCaptcha token
4. Route calls MailerLite API with the email (API key stays server-side only)
5. MailerLite adds subscriber and sends welcome email
6. Frontend shows success/error message

**Decision: ✅ MailerLite via server-side API route. API key stored in environment variables only.**

---

### 3.8 Contact Form — Resend + hCaptcha + Zod (hidden at launch)

| Pros | Cons |
|---|---|
| Resend free tier: 3,000 emails/month | One extra service (free) |
| Modern TypeScript SDK | Requires domain verification in Resend |
| hCaptcha: free, GDPR-compliant bot protection | |
| Form is built and ready — just feature-flagged off at launch | |

**Decision: ✅ Resend for email delivery, hCaptcha for bot protection, Zod for server-side
validation. Form disabled at launch, enabled when Cristina is ready.**

---

### 3.9 Database — None at launch

No workshops, no payments, contact form only sends email (not stored), newsletter managed by
MailerLite. No database needed.

**Decision: ✅ No database at launch.** If a contact log or future features require one,
Supabase (free Postgres tier) is added without restructuring anything.

---

### 3.10 Hosting — Vercel Hobby (free)

| Pros | Cons |
|---|---|
| Auto-deploys on every push to `main` | Hobby tier ToS: personal/non-commercial projects |
| Preview URLs on every branch | 100GB bandwidth/month (a portfolio will use a fraction) |
| Free SSL + global CDN | |
| Basic analytics included | |

**Decision: ✅ Vercel Hobby for development and launch.** Upgrade to Pro (~$20/month) if
traffic grows or commercial constraints apply.

---

### 3.11 CI/CD — GitHub Actions + Vercel Git Integration

- **Vercel** auto-deploys on every push to `main` (zero config after initial setup)
- **GitHub Actions** runs lint + typecheck on every push/PR (catches errors before deploy)
- Free tier: 2,000 Actions minutes/month — more than enough for one developer

**Decision: ✅ GitHub Actions for quality checks; Vercel Git Integration for deployments.**

---

### 3.12 SEO — Next.js Metadata API + JSON-LD

Built into Next.js 14 — no extra library needed.

- `metadata` export on every page (`title`, `description`, Open Graph, Twitter cards)
- JSON-LD structured data (`Person` + `LocalBusiness` schema) for Google rich results
- Auto-generated `sitemap.ts` and `robots.ts`

**Decision: ✅ Native Next.js Metadata API + custom JSON-LD component.**

---

### 3.13 Analytics — Vercel Analytics (free)

Built into Vercel Hobby. Basic page views, no setup needed.

**Decision: ✅ Vercel Analytics at launch.** Add Plausible or self-hosted Umami later if more
detail is needed.

---

### 3.14 Cookie Consent & GDPR (Spain / EU — legally required)

- Accept / Reject cookie banner
- Consent stored in `localStorage`
- Analytics and non-essential scripts load only after consent

**Decision: ✅ Small custom Next.js client component for cookie banner.**

---

## 4. Repository & Project Structure

```
cristinadoncel/
├── .github/
│   └── workflows/
│       └── ci.yml                    # Lint + typecheck on push/PR
├── public/
│   ├── images/
│   │   ├── brand/                    # Logo, brand assets
│   │   ├── portfolio/                # Portfolio project images
│   │   ├── clients/                  # Client logo images
│   │   └── about/                    # About page images
│   └── fonts/                        # Self-hosted fonts (if any)
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (nav, footer, cookie banner, fonts)
│   │   ├── page.tsx                  # Homepage
│   │   ├── sobre-mi/page.tsx
│   │   ├── marcas-y-agencias/page.tsx
│   │   ├── bodas-y-eventos/page.tsx
│   │   ├── branding/page.tsx
│   │   ├── aviso-legal/page.tsx
│   │   ├── politica-de-privacidad/page.tsx
│   │   ├── politica-de-cookies/page.tsx
│   │   ├── terminos-y-condiciones/page.tsx
│   │   ├── politica-de-devoluciones/page.tsx
│   │   ├── api/
│   │   │   ├── contact/route.ts      # Contact form handler
│   │   │   └── subscribe/route.ts    # MailerLite subscription handler
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                       # Reusable primitives
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   ├── sections/                 # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── ClientLogos.tsx
│   │   │   ├── HowIWork.tsx
│   │   │   └── ContactCTA.tsx
│   │   ├── NewsletterForm.tsx        # MailerLite subscription form
│   │   ├── ContactForm.tsx           # Contact form (feature-flagged off at launch)
│   │   ├── CookieBanner.tsx
│   │   └── JsonLd.tsx                # Structured data component
│   ├── content/                      # All editable content
│   │   ├── services.ts
│   │   ├── portfolio.ts
│   │   ├── clients.ts
│   │   └── legal/
│   │       ├── aviso-legal.md
│   │       ├── privacidad.md
│   │       ├── cookies.md
│   │       ├── terminos.md
│   │       └── devoluciones.md
│   ├── lib/
│   │   ├── resend.ts                 # Email helper (contact form)
│   │   ├── mailerlite.ts             # MailerLite API helper
│   │   └── validations.ts            # Zod schemas (contact + subscribe)
│   └── styles/
│       └── globals.css               # Tailwind base + CSS custom properties
├── .env.local.example                # Variable names, no values — committed to git
├── .eslintrc.json
├── .prettierrc
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 5. Pages & Routes

| Route | Type | Description |
|---|---|---|
| `/` | SSG | Homepage — hero, services, client logos, how I work, newsletter, contact CTA |
| `/sobre-mi` | SSG | About Cristina |
| `/marcas-y-agencias` | SSG | Brands & agencies service page |
| `/bodas-y-eventos` | SSG | Weddings & events service page |
| `/branding` | SSG | Branding service page |
| `/aviso-legal` | SSG | Legal notice |
| `/politica-de-privacidad` | SSG | Privacy policy |
| `/politica-de-cookies` | SSG | Cookie policy |
| `/terminos-y-condiciones` | SSG | Terms & conditions |
| `/politica-de-devoluciones` | SSG | Returns & refunds policy |
| `/api/contact` | Serverless POST | Contact form handler |
| `/api/subscribe` | Serverless POST | MailerLite subscription handler |

---

## 6. Environment Variables

Stored in `.env.local` locally and in Vercel project settings for production.
**Never committed to git.**

```env
# Resend — contact form email delivery
RESEND_API_KEY=

# hCaptcha — bot protection (shared by contact form + newsletter)
HCAPTCHA_SECRET=
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=

# MailerLite — newsletter subscription
MAILERLITE_API_KEY=
MAILERLITE_GROUP_ID=

# Contact destination
CONTACT_EMAIL_TO=hola@cristinadoncel.com
```

---

## 7. Execution Plan

Steps are executed together in order. Steps marked **[DECISION]** need your input before
proceeding. Check boxes are updated as we go.

---

### Phase 0 — Foundations
- [x] **0.1** Create GitHub repository ✅ Done
- [x] **0.2** Initialize Next.js project with TypeScript (`create-next-app`) ✅ Done — installed Next.js 16.3.0 / React 19.2.8 (newer than originally planned Next.js 14; `create-next-app@latest` pulled current stable). No functional blocker identified so far — revisit if App Router/library APIs diverge from plan assumptions.
- [x] **0.3** Install and configure Tailwind CSS ✅ Done — installed automatically as **Tailwind v4** (not v3 as originally planned) via `create-next-app`. Config model changed: no `tailwind.config.ts`; brand tokens will be added as CSS variables inside the `@theme { ... }` block in `src/app/globals.css` (see Step 0.9).
- [x] **0.4** Install dependencies: Radix UI, Framer Motion, Zod, Resend, hCaptcha, MailerLite SDK ✅ Done — installed `@radix-ui/react-navigation-menu`, `@radix-ui/react-dialog`, `@radix-ui/react-accordion`, `@radix-ui/react-tooltip`, `framer-motion`, `zod`, `resend`, `@hcaptcha/react-hcaptcha`, `@mailerlite/mailerlite-nodejs`.
- [x] **0.5** Configure ESLint + Prettier ✅ Done — ESLint flat config (`eslint.config.mjs`) already scaffolded with `eslint-config-next` (core-web-vitals + TypeScript); added `prettier` + `eslint-config-prettier` to disable conflicting stylistic rules. Created `.prettierrc` and `.prettierignore`. Added `npm run format` / `npm run format:check` scripts. `npm run lint` passes clean.
- [x] **0.6** Create `.env.local.example` ✅ Done — created with all planned variable names (Resend, hCaptcha, MailerLite, contact destination). Also fixed `.gitignore` (`.env*` was blanket-ignoring it — added `!.env.local.example` exception) and untracked the `.vs/` folder (Visual Studio local cache/index files were accidentally committed).
- [x] **0.7** Set up GitHub Actions CI workflow (lint + typecheck) ✅ Done — added `.github/workflows/ci.yml` (runs on push/PR to `main`, Node 24, `npm ci`, `npm run lint`, `npm run typecheck`). Added `typecheck` script (`tsc --noEmit`) to `package.json`. Both verified passing locally. Updated from Node 20 → 24 after GitHub Actions deprecation warning.
- [x] **0.8** Connect repo to Vercel, confirm first automatic deploy ✅ Done — repo connected via Vercel's GitHub integration, first deploy successful. Live preview: https://cristinadoncel.vercel.app/
- [x] **0.9** Configure Tailwind with brand colors and fonts ✅ Done — extracted palette and typography directly from live site CSS (Elementor global kit). Brand tokens added as CSS custom properties in `src/app/globals.css` `@theme` block (`--color-brand-primary: #786674`, `--color-brand-secondary: #352D33`, `--color-brand-soft: #D8C7D5`, etc.). Fonts wired up in `layout.tsx` via `next/font/google`: Noto Sans (body), Ms Madi (script accent), Marcellus (serif/buttons). Full reference in `docs/BRANDING.md`.

### Phase 1 — Content & Assets
- [x] **1.1** Add all images to `/public/images/` ✅ Done — working/low-res images placed in `portfolio/`, `clients/`, `brand/`. High-res finals and branding assets (SVG logo etc.) to be swapped in when available. See `docs/BRANDING.md` for open items.
- [x] **1.2** Create `/src/content/` data files ✅ Done — created `clients.ts`, `portfolio.ts`, `services.ts` and `pages/home.ts`, `pages/marcas-y-agencias.ts`, `pages/bodas-y-eventos.ts`, `pages/branding.ts`, `pages/sobre-mi.ts` with full Spanish copy and image mappings. Branding/sobre-mi images are placeholders pending final assets.
- [x] **1.3** Add legal texts to `/src/content/legal/` as Markdown files ✅ Done — created `aviso-legal.md`, `privacidad.md`, `cookies.md`, `terminos.md`, `devoluciones.md` with full content extracted from live site.
- [x] **1.4** Review legal texts for completeness ✅ Done — all 5 files reviewed. Two items flagged for Cristina to resolve before go-live: (1) `privacidad.md` last-updated date is stale (2020) — needs updating to reflect new hosting/analytics; (2) `terminos.md` and `cookies.md` contain e-commerce/WooCommerce sections (shipping, Redsys/Bizum payments) that are not applicable to the new site — Cristina to decide whether to strip or retain before Phase 8.

### Phase 2 — Layout & Shared Components
- [x] **2.1** Build `Navbar` ✅ Done — announcement bar (commented out for launch), logo, Radix UI dropdown for Servicios, mobile hamburger with Framer Motion slide-down menu.
- [x] **2.2** Build `Footer` ✅ Done — logo, newsletter form (Spanish validation, noValidate), legal links, contact email, dynamic copyright year.
- [x] **2.3** Build `CookieBanner` ✅ Done — accept/reject, localStorage, Framer Motion slide-up, SSR-safe (useEffect pattern), `getCookieConsent()` utility exported.
- [x] **2.4** Build `Button` and `Input` UI primitives ✅ Done — `Button` (3 variants: outline/primary/ghost, 3 sizes, forwardRef), `Input` (label, error, hint, forwardRef).
- [x] **2.5** Configure root `layout.tsx` ✅ Done — full OG/Twitter metadata, title template, metadataBase, keywords, robots, font-display swap, `<main>` semantic wrapper.

### Phase 3 — Homepage
- [x] **3.1** Build `Hero` section (headline, subheadline, CTA)
- [x] **3.2** Build `Services` section (3 service cards)
- [x] **3.3** Build `ClientLogos` section
- [x] **3.4** Build `HowIWork` section
- [x] **3.5** Build `NewsletterForm` component
- [x] **3.6** Build `ContactCTA` section
- [x] **3.7** Assemble `page.tsx` (homepage)
- [x] **3.8** Add Framer Motion animations (hero entrance, section scroll reveals)

### Phase 4 — Service & About Pages
- [x] **4.1** Build `/marcas-y-agencias` page ✅ Done — implemented hero, intro, services cards, clients block, and CTA using `src/content/pages/marcas-y-agencias.ts` + shared clients content.
- [x] **4.2** Build `/bodas-y-eventos` page ✅ Done — implemented hero with image, intro, services cards, and CTA using `src/content/pages/bodas-y-eventos.ts`.
- [x] **4.3** Build `/branding` page ✅ Done — implemented full structure (hero, intro, portfolio placeholder, reasons, process, packages, FAQ, CTA) from `src/content/pages/branding.ts`.
- [x] **4.4** Build `/sobre-mi` page ✅ Done — implemented hero placeholder image, biography paragraphs, values section, and CTA from `src/content/pages/sobre-mi.ts`.

### Phase 5 — Legal Pages
- [x] **5.1** Build Markdown renderer component for legal content
- [x] **5.2** Build all 5 legal pages using content files

### Phase 6 — API Routes & Integrations
- [ ] **6.1** Register on Resend, verify domain, obtain API key
- [ ] **6.2** Register on hCaptcha, obtain site key + secret
- [ ] **6.3** Retrieve MailerLite API key and subscriber group ID
- [ ] **6.4** Build `/api/subscribe` route (Zod + hCaptcha + MailerLite API)
- [ ] **6.5** Build `ContactForm` component (hidden/feature-flagged at launch)
- [ ] **6.6** Build `/api/contact` route (Zod + hCaptcha + Resend)
- [ ] **6.7** Test both routes end-to-end in development
- [ ] **6.8** Add all environment variables to Vercel project settings

### Phase 7 — SEO & Performance
- [ ] **7.1** Add `metadata` export to every page (title, description, OG, Twitter)
- [ ] **7.2** Build `JsonLd` component and add Person + LocalBusiness structured data
- [ ] **7.3** Generate `sitemap.ts` and `robots.ts`
- [ ] **7.4** Audit all images (alt text, `next/image`, correct sizing)
- [ ] **7.5** Run Lighthouse — fix any category below 90

### Phase 8 — Go-Live
- [ ] **8.1** Final cross-browser and mobile review
- [ ] **8.2** Add `cristinadoncel.com` custom domain in Vercel settings
- [ ] **8.3** Update DNS records in dondominio.com (A record / CNAME from Vercel)
- [ ] **8.4** Confirm Vercel SSL certificate issued
- [ ] **8.5** Verify all pages, links, forms on production domain
- [ ] **8.6** Submit sitemap to Google Search Console
- [ ] **8.7** Cancel WordPress hosting

---

## 8. What You Need to Provide

| Item | Needed before | Phase |
|---|---|---|
| Brand guide (colors, fonts, logo files) | Design starts | 0.9 |
| Portfolio images (high quality) | Content phase | 1.1 |
| About page images | Content phase | 1.1 |
| Client logo images | Content phase | 1.1 |
| All page texts (services, about, homepage copy) | Content phase | 1.2 |
| Legal texts (export from WP) | Content phase | 1.3 |
| MailerLite API key + group ID | API phase | 6.3 |
| Resend account (you create it) | API phase | 6.1 |
| hCaptcha account (you create it) | API phase | 6.2 |
| Dondominio DNS access | Go-live | 8.3 |

---

## 9. DNS Cutover (dondominio.com → Vercel)

At go-live time (Phase 8):

1. In Vercel: **Project → Settings → Domains** → add `cristinadoncel.com`
2. Vercel provides either:
   - An **A record**: point `@` → `76.76.21.21`
   - A **CNAME**: point `www` → `cname.vercel-dns.com`
3. Log into dondominio.com DNS panel → update the records
4. Wait 5–30 minutes for propagation
5. Vercel auto-provisions a free SSL/TLS certificate

---

## 10. Future Considerations (not blocking launch)

- **Contact form activation:** Infrastructure is built and ready. Flip feature flag + test.
- **Contact log / database:** Add Supabase (free Postgres) if a submission history panel is needed.
- **CMS migration:** Content files are structured for easy migration to Sanity if Cristina ever wants to self-edit.
- **Portfolio gallery:** Add a filterable gallery page as a client component when needed.
- **MailerLite list growth:** Free up to 1,000 subscribers. Upgrade plan if list grows.

---

## 11. Pre-Go-Live Checklist (before Phase 8)

Items that must be resolved before cutting the domain over to the new site.

### Legal texts
- [ ] **`privacidad.md`** — Update the *"Última actualización"* date (currently shows 15 de mayo de 2020). Also review the third-party recipients list: WordPress and Don Dominio hosting are no longer used — replace with Vercel (hosting) and update analytics reference if Google Analytics is replaced by Vercel Analytics.
- [ ] **`terminos.md`** — Contains WooCommerce e-commerce sections (shipping costs, Redsys/Bizum payment methods, order process, product warranties). The new site has no shop. Decide with Cristina: **strip these sections** (recommended for a clean services-only site) or **retain** if the Etsy shop or future product sales make them relevant.
- [ ] **`cookies.md`** — References advertising/social cookies inherited from the WP/WooCommerce setup. Review and remove any cookie types not actually used by the new site (e.g. advertising cookies if no ad network is active).

### Brand assets
- [ ] Replace low-res placeholder images with final high-res versions (see `docs/BRANDING.md` open items).
- [ ] Confirm final SVG/vector logo files are in `/public/images/brand/` before launch.
- [ ] Create `/public/images/brand/og-image.jpg` (1200×630px) — used for Open Graph / social share previews (WhatsApp, LinkedIn, Twitter/X, etc.). Suggested: logo centred on `#D8C7D5` background, or a hero photo with logo overlay.

### Other
- [ ] Update `privacidad.md` hosting/platform reference from WordPress/Don Dominio → Vercel.
- [ ] Verify all `hola@cristinadoncel.com` contact references are correct and the mailbox is active on the new domain.

---

*This document is updated at each phase. Checked boxes reflect completed steps.*
