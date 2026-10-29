---
name: feautures
description: Build with the FEAUTURES showcase — design styles, layout wireframes, Motion/GSAP/Anime.js/Lenis effects, the verified open-source catalogue, and free template libraries. Use when adding a section, an effect, a library entry, or a template-library entry to this repo.
---

# FEAUTURES skill

You are working in the FEAUTURES repo: one public page demonstrating design
ideas, layouts, effects, open-source libraries and free template libraries.
Live: https://feautures-nine.vercel.app/. Repo: https://github.com/habeebc84-create/FEAUTURES

## Before you start

1. Read `AGENTS.md` (rules, file map, commands) and `DESIGN.md` (tokens,
   styles, layout and motion rules). They override any general habit.
2. Read `README.md` for the feature map: which file holds what you need.
3. Check what already exists before adding anything similar — `src/App.tsx`
   (sections), `src/effects.tsx` (Motion effects), `src/demos.tsx` (GSAP /
   Anime.js / Lenis), `src/opensource.tsx` (catalogue data),
   `src/templates.tsx` (template libraries + how-to guide).

## Workflow

1. **Style first.** Pick one style from `DESIGN.md` / the Styles section.
   One distinctive style per change.
2. **Layout second.** Pick one of the 12 wireframes in `LAYOUTS`
   (`src/App.tsx`). Build to that order.
3. **Effects third.** Reuse an existing effect component if one fits. New
   effects go in `src/effects.tsx` (Motion) or `src/demos.tsx` (GSAP /
   Anime.js / Lenis, lazy chunk only). Every effect must be static under
   `prefers-reduced-motion: reduce`.
4. **Libraries fourth.** Adding a library means verifying it on GitHub
   first: repo exists, licence read, stars and last push recorded with the
   check date. Add it to `src/opensource.tsx` with those facts. Install it
   only if the page uses it.
5. **Templates fifth.** Template libraries are catalogue + links only
   (`src/templates.tsx`). Never copy a template's design, code, image or
   branding. Record free status, categories and how-to steps from the
   source page itself, and warn where no licence wording was shown.
6. **Finish.** Update the Sources section, the Honesty note and `README.md`
   in the same change. Run `npm run build` and `npm run test` — both must
   pass.

## Hard limits

- No Motion+ source, access, or naming. Free Motion library only.
- No copied material from any source, shot, brand or template.
- No fake buttons, no unverified claims. A check that did not run is
  reported as not run.
- No new dependencies or colours without a recorded reason.
