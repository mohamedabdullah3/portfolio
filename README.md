# Mohamed Abdullah — Portfolio Website

Modern, high-impact portfolio for **Mohamed Abdullah**, a Performance Media Buyer
based in Cairo serving brands across MENA. The site speaks to two audiences —
prospective clients and prospective employers — without feeling confused, and
leads with hard performance numbers.

## Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS v4 (`@theme` tokens in `globals.css`)
- **Animation:** Framer Motion (scroll reveals, hero stagger, count-ups)
- **Icons:** Lucide React
- **Fonts:** Bricolage Grotesque (display), Inter Tight (body), Instrument Serif (italic accents) — via `next/font/google`
- **Deployment:** Vercel (zero config)

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # serve production build
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx           # Fonts, metadata, Person schema, NoiseOverlay
│   ├── page.tsx             # Homepage (composes all sections)
│   ├── cv/
│   │   ├── page.tsx         # Full CV page with print stylesheet
│   │   └── PrintButton.tsx  # Client-side window.print() trigger
│   └── globals.css          # Tailwind v4 + theme tokens + print styles
├── components/
│   ├── sections/            # Hero, TrustBar, ImpactStrip, About, Services,
│   │                        # CaseStudies, TechStack, Process, Contact, Footer
│   └── ui/                  # Nav, Button, Counter, Marquee, Reveal,
│                            # NoiseOverlay, ScrollProgress
├── data/
│   ├── brands.ts            # MENA brands featured in the trust bar
│   ├── services.ts          # Service cards
│   ├── case-studies.ts      # Lord Milano, Outlet Pharmacy, Hayat/Alandalus
│   └── cv-data.ts           # Single source of truth for the /cv page
└── lib/utils.ts             # cn() class-merge helper
```

## Design tokens

All visual tokens live as Tailwind v4 `@theme` variables in
`src/app/globals.css`:

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0e0e10` | Page background (warm dark) |
| `--color-bg-elevated` | `#16161a` | Card / surface background |
| `--color-fg` | `#f5f1eb` | Primary text (warm off-white) |
| `--color-accent` | `#ff7a45` | Warm orange accent |
| `--color-accent-hover` | `#ff8f5c` | Brighter accent for hover states |
| `--color-cream` | `#f5f1eb` | Highlighted card surfaces |
| `--color-border` | `rgba(255,255,255,0.06)` | Hairline card borders |

Typography rules — large display headings (`clamp(2rem, 5vw, 7rem)`), tight
letter-spacing (`-0.04em`), tabular numbers for metrics, italic Instrument Serif
accent words inside headings.

## Animation principles

- Hero: word-by-word stagger reveal, 600ms ease-out
- Sections: fade-up on scroll-into-view (`whileInView`, `once: true`)
- Numbers: cubic ease-out count-up when scrolled into view
- Cards: hover lift (`-translate-y-1`) + accent border glow
- Brand marquee: CSS-only infinite loop, pauses on hover
- Scroll progress: spring-driven 2px bar at the top of the page
- All animations honour `prefers-reduced-motion`

## SEO & accessibility

- Per-route metadata + OpenGraph in `app/layout.tsx`
- Structured data: `Person` schema injected via JSON-LD
- Semantic HTML, proper heading hierarchy, focus-visible outlines, alt text,
  `aria-label`s on icon-only buttons
- Mobile nav locks body scroll while open, supports keyboard close

## Print / PDF (CV page)

The `/cv` route includes a print stylesheet (A4, 18mm margins, light theme
overrides). Click **Download as PDF** at the top right — it triggers
`window.print()`, which Chrome/Edge can save directly as PDF.

## Analytics (Mixpanel)

Page views and key events (CTA clicks, contact channel clicks, case study views,
form submissions) are tracked through Mixpanel. To enable tracking:

1. Create a project in [Mixpanel](https://mixpanel.com) and copy the project token.
2. Add `NEXT_PUBLIC_MIXPANEL_TOKEN` to your environment — locally in `.env`,
   and in Vercel **Project → Settings → Environment Variables** for both
   Preview and Production.
3. Without the token, `initMixpanel` / `trackEvent` short-circuit, so the site
   continues to run normally with no analytics calls.

## Contact form

`Contact` section logs payloads with `console.log` for now. To wire up:

1. Add `NEXT_PUBLIC_FORMSPREE_ID` (or `RESEND_API_KEY`) to `.env`.
2. Replace the placeholder `onSubmit` in
   `src/components/sections/Contact.tsx` with an actual `fetch` POST.

`.env.example` lists the future env vars.

## Deployment (Vercel)

1. Push the repo to GitHub.
2. Import it at <https://vercel.com/new>.
3. Default settings work — no `vercel.json` required.
4. Add the Calendly / Formspree env vars when ready.

## License

© 2026 Mohamed Abdullah. All rights reserved.
