# CLAUDE.md

This repo's full agent instructions live in `AGENTS.md` and its design system
in `DESIGN.md`. Read both before changing anything.

Quick rules:

- Commands: `npm install`, `npm run dev`, `npm run build` (must pass),
  `npm run test`, `npm run preview`.
- Never copy designs, code, images or branding from any source or template
  library. Summarise in original wording and link out. Check each file's own
  licence before claiming it is free.
- Motion+ is paid and off limits. Use the free MIT Motion library only, and
  never call an effect "Motion+".
- Every animation must respect `prefers-reduced-motion`. No essential text
  may depend on animation.
- Keep heavy demos in the lazily loaded `src/demos.tsx`. Keep data in
  `src/opensource.tsx` / `src/templates.tsx` and components in
  `src/effects.tsx` / `src/demos.tsx`.
- Update the Sources section, the Honesty note and `README.md` in the same
  change when a claim or structure changes.
