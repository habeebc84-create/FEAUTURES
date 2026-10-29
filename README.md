# FEAUTURES

One GitHub link with all of the features: design ideas, layouts, effects, open-source
libraries, free template libraries, and a how-to-use guide — built live as one page.

**Live site:** https://feautures-nine.vercel.app/
**GitHub:** https://github.com/habeebc84-create/FEAUTURES

Not a food website: no food photos, products or prices anywhere.

## Get it and build it

You need Node.js 18+ and npm. No account, no key, no paid service is needed to build it.

```bash
git clone https://github.com/habeebc84-create/FEAUTURES.git
cd FEAUTURES
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173). To make a production
build and preview it:

```bash
npm run build
npm run preview
```

To deploy it yourself, import the repo in Vercel (framework preset: Vite) or serve
the `dist/` folder from `npm run build` with any static host.

## What is inside, and what to take

Take only what you need. Every part works on its own.

| What you need | Where it lives | How to use it |
|---|---|---|
| Motion effects (ticker, cursor ring, typewriter, scramble, split text, carousel with curtain reveal, scroll reveal, animated numbers, scroll progress, layout wireframes) | `src/effects.tsx` + `src/App.tsx` | Copy the component you want into your React + Motion project. Motion is the free MIT library: `npm install motion`, `import { motion } from "motion/react"`. |
| GSAP timeline + ScrollTrigger scrub demo, Anime.js stagger demo, Lenis smooth scroll | `src/demos.tsx`, `src/lenis.ts` | Demos load lazily. Install only the library you use: `npm install gsap`, `npm install animejs`, `npm install lenis`. GSAP is free under the GreenSock standard licence, not MIT. |
| Open-source catalogue (29 repos checked live: licence, stars, last push) | `src/opensource.tsx` | A reference list with GitHub links. Check the licence of anything you install; "No licence detected" means GitHub found no licence file. |
| Free template libraries (Figma Community, Webflow, Jitter) | `src/templates.tsx` | Catalogue and links only. No template design, code, image or branding is copied here. Each Figma file must be checked on its own page — the listing showed no licence wording. |
| How-to-use guide (6 steps + quick starts) | `src/templates.tsx` (`HOW_TO_USE`, `QUICK_STARTS`) | The order to use everything on the page: style, layout, template, motion, your own content, final checks. |
| Design sources (Figma trends, Tilda styles, Refero, UI/UX Pro Max, Dribbble patterns) | `src/App.tsx` | Summaries in original wording. Inspiration only — never copy shots, branding, images or code. |

## The page, section by section

1. **Hero + ticker** — typewriter design facts, scrolling design terms.
2. **Effects** — every Motion+ effect as an original equivalent built with free Motion.
3. **Style carousel** — Minimalism, Swiss, Brutalism, Editorial, Bento, Dark SaaS.
4. **Layouts** — 12 original wireframes: typography hero, bento grid, split screen,
   editorial spread, dashboard, pricing tiers, minimal portfolio, product centred,
   video-first hero, pricing + FAQ, docs sidebar, article list. Filter by Landing,
   Product, Content or Dashboard.
5. **Trends** — Figma's 13 web design trends for 2026 + 4 AI trends.
6. **Styles** — Tilda's 9 core styles, Refero's library structure, UI/UX Pro Max's
   database and workflow, Dribbble's 10 patterns.
7. **Open Source** — live GSAP, Anime.js and Lenis demos + the full catalogue.
8. **Free Templates** — Figma Community (10,000+ templates), Webflow (7,000+),
   Jitter (free motion templates), each with free status, categories and steps.
9. **How to Use** — the 6-step workflow and one-line quick starts.
10. **Sources + Honesty** — every source linked, and what was and was not taken.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production (`dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run test` | Run the test suite (Vitest) |

## Tech stack

React 18 + Vite 5 + TypeScript + Tailwind CSS 3 + Motion 14.7 (free, MIT).
Optional demos: GSAP 3.13, Anime.js 4.1, Lenis 1.3, Lucide icons. All motion is
static under `prefers-reduced-motion`; the ticker and carousel pause on hover/focus
and the cursor ring never replaces the native cursor.

## Honesty and licences

- Motion+ is a paid membership (private GitHub/Discord, 510+ premium examples,
  premium APIs). This project has no Motion+ access and uses no Motion+ source.
  Every effect is an original equivalent built with the free Motion library.
- The design sources are summarised in original wording. No shot, visual, brand
  system, colour value, typeface pairing or code from any source is copied here.
  Figma's survey figures are Figma-reported. The Dribbble tag listing is a stale
  March 2025 copy.
- Catalogue entries show each repo's licence as checked live on GitHub on
  29 October 2026. Licences change — re-check before you reuse anything.
- Template libraries are linked, not copied. Webflow templates are for building
  inside Webflow; Jitter templates are edited in Jitter; Figma files are
  duplicated into your own drafts. Each file's own licence or terms govern reuse.
