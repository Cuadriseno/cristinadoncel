# Branding Reference — Cristina Doncel

> Extracted directly from the live site's served CSS/HTML
> (`https://www.cristinadoncel.com/`) — Elementor global kit (`.elementor-kit-6`)
> and GeneratePress theme stylesheet. This is the source of truth for Step 0.9
> of [PROJECT_PLAN.md](../PROJECT_PLAN.md) until an official brand guide is
> provided.

---

## 1. Color Palette

### Elementor global kit colors (primary source — used across page content)

| Token | Hex | Role |
|---|---|---|
| Primary | `#786674` | Muted mauve/plum — buttons, links, nav hover |
| Secondary | `#352D33` | Dark plum — button/link hover states |
| Text | `#080708` | Near-black — body text |
| Accent | `#FFFFFF` | White — link hover on dark backgrounds |
| Soft accent (`f59e0c1`) | `#D8C7D5` | Soft lilac/pink — subtle backgrounds, highlights |

### GeneratePress theme colors (site chrome — header/nav/footer)

| Token | Hex | Role |
|---|---|---|
| `--contrast` | `#222222` | Body text (theme-level) |
| `--contrast-2` / `--contrast-3` | `#786674` | Secondary text, hover links (matches Elementor primary) |
| `--base` | `#F0F0F0` | Light neutral background |
| `--base-2` | `#F7F8F9` | Light neutral background |
| `--base-3` | `#FFFFFF` | White background |
| `--accent` | `#D8C7D5` | Soft lilac highlight (matches Elementor soft accent) |
| Top bar background | `#636363` | "Agenda 2026 abierta" announcement bar |
| Button background | `#55555E` | Default WP button fill |
| Button hover background | `#3F4047` | Default WP button hover fill |

### Overall character

Minimal, elegant, muted mauve/plum + near-black on white/off-white. Sophisticated,
feminine, artisanal feel — matches a hand-calligraphy brand. Buttons are pill-shaped
(`border-radius: 200px`), outlined (no fill), filling only on hover.

---

## 2. Typography

| Font | Type | Usage |
|---|---|---|
| **Noto Sans** | Sans-serif (Google Font) | Body text, UI text, form inputs |
| **Ms Madi** | Script / handwritten (Google Font) | Calligraphic accent — logo feel, decorative headline moments |
| **Marcellus** | Serif (Google Font) | Buttons, decorative headings — elegant, small-caps feel |

### Global typography scale (from Elementor kit)

| Element | Font | Size | Weight | Letter-spacing | Text transform |
|---|---|---|---|---|---|
| Primary typography | Marcellus | 20px | 400 | — | — |
| `h1` | (inherits primary) | 36px | 100 | 10px | uppercase |
| `h2` | (inherits primary) | 32px | 200 | 4px | — |
| `h3` | (inherits primary) | 18px | 200 | 4px | — |
| `h4` | Noto Sans | 12px | 400 | 4px | uppercase |
| Text typography | Noto Sans | 13px | 400 | — | — |
| Accent typography | Noto Sans | 14px | 600 | — | — |
| Buttons | Noto Sans | 16px | 600 | 2px | — |

**Design note:** headings favor very light font-weights (100–200) combined with wide
letter-spacing and uppercase — this creates an airy, refined, editorial feel rather than
bold/heavy headings.

---

## 3. Buttons

- Shape: fully rounded / pill (`border-radius: 200px`)
- Default state: transparent fill, 1px solid border in `--e-global-color-primary`
  (`#786674`), text color same as border
- Hover state: border + text color switch to `--e-global-color-secondary` (`#352D33`)
- Font: Noto Sans, 16px, weight 600, letter-spacing 2px

---

## 4. Layout Notes

- Max content width: `1200px`–`1250px` (Elementor container / GeneratePress grid)
- Section padding on homepage hero: `80px` top / `160px` bottom (desktop)
- Dividers: 1px solid `#000` used between content blocks (e.g., "Cómo trabajo" section)
- Responsive breakpoints observed: `1024px`, `768px`, `767px`

---

## 5. Voice & Content Tone (from homepage copy)

- Spanish, warm, artisanal, emotive language ("caligrafía hecha a mano", "trazo
  imperfecto", "experiencias con alma")
- Emphasis on craftsmanship, intention, and emotional connection over pure
  aesthetics
- CTAs are conversational, not corporate: "Descubre mi trabajo", "Cuéntame tu
  propuesta", "Háblame de tu proyecto"

---

## 6. Application to This Rebuild

Implemented in [`src/app/globals.css`](../src/app/globals.css) as CSS custom
properties inside the Tailwind v4 `@theme` block:

```css
--color-brand-primary   → #786674
--color-brand-secondary → #352D33
--color-brand-text      → #080708
--color-brand-accent    → #FFFFFF
--color-brand-soft      → #D8C7D5
--color-brand-base      → #F0F0F0
--color-brand-base-2    → #F7F8F9
--color-brand-base-3    → #FFFFFF
```

Fonts wired up in [`src/app/layout.tsx`](../src/app/layout.tsx) via
`next/font/google`:

- `Noto_Sans` → `--font-noto-sans` → Tailwind `font-sans`
- `Ms_Madi` → `--font-ms-madi` → Tailwind `font-script`
- `Marcellus` → `--font-marcellus` → Tailwind `font-serif`

---

## 7. Open Items / To Confirm With Cristina

- [x] Confirm this extracted palette matches her intended brand — **confirmed,
  palette approved as-is**
- [ ] Confirm logo file / wordmark treatment. The only logo asset visible on the
  live site is a WordPress auto-generated raster crop:
  `cropped-CD_CristinaDoncel-scaled-1.png`. This is likely just how WordPress
  serves a resized version of a larger original — it is **not confirmed to be
  the official/source logo file**. Unknown: whether a vector (SVG/AI/EPS)
  original exists, whether color variants exist (e.g. white version for dark
  backgrounds, monogram-only version for mobile nav/favicon). Needed for
  `/public/images/brand/` in Step 1.1 — request the original source file from
  Cristina rather than reusing the scraped low-res PNG permanently.
- [x] Confirm whether the light heading weights (100–200) render acceptably with
  `Marcellus` at small sizes on mobile — **confirmed, renders acceptably**

---

*Source: live HTML/CSS extraction performed during Step 0.9, see
[PROJECT_PLAN.md](../PROJECT_PLAN.md) Phase 0.9*
