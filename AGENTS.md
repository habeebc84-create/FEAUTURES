# AGENTS.md — instructions for coding agents working in this repo

Read this file and `DESIGN.md` before changing anything. This repo is a public
showcase: one page that demonstrates design ideas, layouts, effects, open-source
libraries and free template libraries. It is not a food website and must never
gain food photos, products or prices.

## Commands

```bash
npm install     # install dependencies (Node 18+)
npm run dev     # dev server, usually http://localhost:5173
npm run build   # type-check (tsc) + production build into dist/
npm run preview # preview the production build
npm run test    # Vitest — data integrity tests for src/opensource.tsx and src/templates.tsx
```

`npm run build` must pass before any push. There is no linter configured; keep
code formatted like the surrounding code and do not add new tooling without
asking the maintainer.

## Where things live

| File | What it is |
|---|---|
| `src/App.tsx` | The whole page: sections, nav, counters, Sources, Honesty note. `LAYOUTS` (12 wireframes) lives here. |
| `src/effects.tsx` | Motion effects: ticker, cursor ring, typewriter, scramble, split text, style carousel, layout wireframes, animated numbers, scroll progress. |
| `src/demos.tsx` | Lazily loaded live demos: GSAP timeline + ScrollTrigger scrub, Anime.js stagger, Lenis smooth scroll. |
| `src/lenis.ts` | Shared Lenis instance. Never initialise Lenis when `prefers-reduced-motion: reduce` is set. |
| `src/opensource.tsx` | Open-source catalogue data only (no components). Every entry: name, repo, licence, stars, last push, what it is, how to use it. |
| `src/templates.tsx` | Free-template library data + the how-to-use guide data only (no components). |
| `src/index.css` | Tailwind directives, ticker keyframes, reduced-motion rules. |
| `DESIGN.md` | The design system: tokens, styles, layout rules, motion rules. |

## Rules that must not be broken

1. **Never copy.** No design, shot, visual, brand system, colour value, typeface
   pairing, image or code from Figma, Dribbble, Refero, UI/UX Pro Max, Tilda,
   Webflow templates, Jitter templates or any template library may be copied
   into this repo. Summarise in original wording and link out. Check a file's
   own licence or terms page before claiming it is free to reuse.
2. **Motion+ is paid and off limits.** This project has no Motion+ access and
   uses no Motion+ source. Effects are original equivalents built with the
   free, MIT-licensed Motion library (`npm install motion`,
   `import { motion } from "motion/react"`). Never call an effect "Motion+",
   never install `motion-ai --plus`, never copy premium examples.
3. **Free open source only, verified.** Before adding a library, verify on
   GitHub that the repo exists, read its licence, and record licence, stars and
   last push date as checked. "No licence detected" means GitHub found no
   licence file — say so, do not invent one. GSAP is free under the GreenSock
   standard licence, not MIT. Install only what the page actually uses.
4. **Reduced motion always.** Every animation must be static when the user
   prefers reduced motion. The ticker and carousel pause on hover/focus. The
   cursor ring never replaces the native cursor. No essential text may depend
   on an animation.
5. **Accessibility and performance.** Keyboard navigation must work, contrast
   must pass, phone widths must not overflow or clip. Keep the main bundle
   small: heavy demos stay in the lazily loaded `src/demos.tsx` chunk.
6. **No fake functionality.** Every button must do something real. Label mocks
   and samples honestly. Do not claim a deployment, test or check succeeded
   unless it was verified.
7. **One style per change.** Follow `DESIGN.md`: one distinctive style, one
   layout order, tokens from the design system. Do not restyle the whole page
   to add one section.

## How to add something

1. Put data in `src/opensource.tsx` or `src/templates.tsx`; put components in
   `src/effects.tsx` or `src/demos.tsx`; wire sections in `src/App.tsx`.
2. Add the source to the Sources section with what was checked, when, and what
   was added. Update the Honesty note when a claim changes.
3. Update `README.md` (feature map), `AGENTS.md` and `DESIGN.md` if the
   structure, tokens or rules changed. Keep the agent files in step.
4. Run `npm run build` and `npm run test`. Fix every failure; do not push
   with a failing build.
5. Never push directly with git from this machine — the maintainer pushes via
   the snapshot route and verifies the remote head afterwards.

## Deploy

The live site is https://feautures-nine.vercel.app/ (Vercel, imported from this
repo). Pushing to `main` deploys it. Verify the live bundle hash matches the
local build before claiming the deploy landed.
