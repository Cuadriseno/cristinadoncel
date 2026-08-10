# Project Context — Cristina Doncel Web Rebuild

## What this project is
Full rebuild of cristinadoncel.com off WordPress + Elementor Pro.
Spanish-language portfolio site for a professional calligrapher.

## Developer
Solo developer (project owner), using Visual Studio 2026 + PowerShell.
Deployed on Vercel. Repo on GitHub (private).

## Decided stack
- Next.js 14 App Router + TypeScript (strict)
- Tailwind CSS v3 (brand tokens to be configured from brand guide)
- Radix UI (accessible component primitives)
- Framer Motion (subtle animations)
- Resend (contact form email, free tier)
- hCaptcha (bot protection on contact form)
- Zod (server-side validation)
- Vercel Hobby (hosting + CI/CD via GitHub integration)
- GitHub Actions (lint + typecheck on PR)
- No database at launch
- No CMS — content lives in /src/content/ as TypeScript/JSON files
- No payments, no workshops, no e-commerce

## Key decisions already made
- No BBVA TPV / no payments (workshops removed from scope)
- Contact form built but hidden at launch (bot protection ready for when re-enabled)
- Legal texts already written by client — to be copied from WP into /src/content/legal/
- Domain: cristinadoncel.com bought at dondominio.com — DNS pointed to Vercel at go-live
- Images: /public/images/ + next/image (no Cloudinary for now)
- Analytics: Vercel Analytics (free, built-in)
- Cookie consent banner: custom small component, localStorage, GDPR compliant (Spain/EU)
- Full site in Spanish — no i18n planned

## What the client provides
- Brand guide (colors, fonts, logo) — needed before Phase 0.8 (Tailwind config)
- Portfolio images (high quality)
- All page texts (services, about, etc.)
- Legal texts (from WP export)
- Client logo images

## Current status
- GitHub repo created (private)
- PROJECT_PLAN.md committed to repo root
- Next step: Phase 0 — bootstrap Next.js project

## How to resume with Copilot
Paste this file content as your first message in a new session,
then say "Let's continue from Phase 0, Step 0.2" (or whichever step is next).
Reference PROJECT_PLAN.md for the full execution checklist.

## Domain DNS (at go-live)
- Add cristinadoncel.com in Vercel → Settings → Domains
- Vercel provides an A record (76.76.21.21) or CNAME (cname.vercel-dns.com)
- Add those records in dondominio.com DNS panel
- Vercel auto-provisions free SSL certificate

## Useful links
- Repo: https://github.com/YOUR_USERNAME/cristinadoncel-web
- Vercel project: (add link once connected)
- Resend dashboard: https://resend.com
- hCaptcha dashboard: https://dashboard.hcaptcha.com