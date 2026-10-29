# Copilot instructions

Read `AGENTS.md` and `DESIGN.md` in the repo root before suggesting or making
changes. They are the authority for this project.

Key points:

- This is a single-page React + Vite + TypeScript + Tailwind showcase of
  design ideas, layouts, effects, open-source libraries and free template
  libraries. It is not a food website.
- Commands: `npm install`, `npm run dev`, `npm run build` (must pass),
  `npm run test`, `npm run preview`.
- Never copy designs, code, images or branding from Figma, Dribbble, Refero,
  UI/UX Pro Max, Tilda, Webflow or Jitter templates. Summarise in original
  wording, link out, and check each item's own licence or terms.
- Motion+ is a paid membership and is off limits. Use the free MIT Motion
  library only. Never describe an effect as Motion+.
- All motion must respect `prefers-reduced-motion: reduce`. The ticker and
  carousel pause on hover/focus. The cursor ring never replaces the native
  cursor.
- Data lives in `src/opensource.tsx` and `src/templates.tsx`; components in
  `src/effects.tsx` and `src/demos.tsx`; page assembly in `src/App.tsx`.
  Heavy demos stay lazily loaded. Follow the tokens in `DESIGN.md` exactly.
- Do not add dependencies, tooling or new colours without a reason recorded
  in the change. Verify licences on GitHub before adding a library.
