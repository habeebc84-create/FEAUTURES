# DESIGN.md — design system for FEAUTURES

The design system for this page, in the Refero/Open Design `DESIGN.md` pattern:
tokens, styles, layouts and motion rules a coding agent can build from without
copying any other brand's system.

## Tokens (the real values used in this repo)

| Token | Value | Use |
|---|---|---|
| Typeface | `'Plus Jakarta Sans', system-ui, sans-serif` | All text. Loaded from Google Fonts in `index.html`. |
| Ink | `#0f172a` (Tailwind `slate-900` / `ink`) | Headings, dark surfaces, buttons. |
| Body text | Tailwind `slate-900` on white, `slate-600` for secondary text | Never body text below `slate-600` on white. |
| Accent | Lime `#bef264` (`lime-300`), `#a3e635` (`lime-400`) | Selection, ticker background, wireframe accents, progress. |
| Deep green | `#022c22` (`forest-950`), `#052e16`, `#14532d` | Footer, selection text, dark sections. |
| Borders | `slate-200` | Cards and sections. |
| Radius | `rounded-2xl` cards, `rounded-full` buttons/chips | Keep consistent; no other radii for cards. |
| Shadow | `shadow-sm` on cards | Restraint: one shadow level only. |
| Spacing | Sections `scroll-mt-24`, content `max-w-6xl`, cards `p-5` | Do not invent new section widths. |

Tailwind config (`tailwind.config.js`) extends exactly these colours and the
`sans` font family. Do not add new palette colours without updating this file
and the config together.

## Style

One distinctive style: **minimal, typography-led, light**. White background,
oversized bold headings, one lime accent, generous spacing. Dark is used only
for the footer and for dark wireframe blocks. No gradients, no glassmorphism,
no neumorphism on this page — those belong to other projects' styles.

## Layout rules

- One page, one column, sections in this order: hero, effects, style carousel,
  layouts, trends, styles, open source, free templates, how to use, sources,
  honesty, footer.
- 12 layout wireframes (see `LAYOUTS` in `src/App.tsx`): typography hero,
  bento grid, split screen, editorial spread, dashboard, pricing tiers,
  minimal portfolio, product centred, video-first hero, pricing + FAQ, docs
  sidebar, article list. A wireframe is boxes and lines only — never real
  product images or copied template screenshots.
- Filters partition the wireframes exactly (Landing / Product / Content /
  Dashboard). Every filter must show at least one item and together they must
  cover all 12.

## Motion rules

- Library: free Motion 14.7 (MIT). Optional: GSAP 3.13 (GreenSock licence),
  Anime.js 4.1 (MIT), Lenis 1.3 (MIT) — only in `src/demos.tsx`.
- Every animation honours `prefers-reduced-motion: reduce` (see `index.css`:
  animations collapse to near-zero duration; Lenis is not initialised at all).
- Ticker: CSS keyframes, pauses on hover/focus-within, static text fallback.
- Carousel: auto-advance 4s, pauses on hover/focus, curtain reveal only when
  motion is allowed.
- Cursor ring: desktop fine-pointer only, native cursor always visible, ring
  is centred via an inner element (never fight `translate` on the same element
  that a spring moves).
- Numbers: count up once into view, settle on the exact value.
- No animation may carry essential information. If motion is off, every fact
  on the page must still be readable.

## Content rules

- Original wording only. Summarise sources; link to them; never reproduce
  their copy, visuals, colours, type pairings or code.
- Figures attributed: Figma survey figures are "Figma-reported". Dribbble
  listing figures are from a stale March 2025 copy — label them stale.
- Catalogue facts (licence, stars, last push) are dated: "checked live on
  GitHub on 29 October 2026". Re-check before republishing them as current.
- Honesty note (`#honesty`) must stay in step with the page: if a claim
  changes, update it in the same change.
