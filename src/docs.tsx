// Docs section data: the repo's own documentation, summarised on the page
// in original wording. Full texts live in the GitHub repo (see DOC_LINKS).

export const DOCS_FILES: { path: string; what: string }[] = [
  { path: 'src/App.tsx', what: 'The whole page: sections, nav, counters, Sources, Honesty note. LAYOUTS (12 wireframes) lives here.' },
  { path: 'src/effects.tsx', what: 'Motion effects: ticker, cursor ring, typewriter, scramble, split text, style carousel, layout wireframes, animated numbers, scroll progress, Neu-Glass, Interactive Bento.' },
  { path: 'src/demos.tsx', what: 'Lazily loaded live demos: GSAP timeline + ScrollTrigger scrub, Anime.js stagger, Lenis smooth scroll, Generative UI simulation. Playground sliders live here.' },
  { path: 'src/lenis.ts', what: 'Shared Lenis instance and the anchor-glide helper. Never initialise Lenis when prefers-reduced-motion: reduce is set.' },
  { path: 'src/opensource.tsx', what: 'Open-source catalogue data only (no components). Every entry: name, repo, licence, stars, last push, what it is, how to use it.' },
  { path: 'src/templates.tsx', what: 'Free-template library data + the how-to-use guide data only (no components).' },
  { path: 'src/freeuse.tsx', what: 'Copyable starter snippets, per-effect code, framework guides, CopyButton.' },
  { path: 'src/index.css', what: 'Tailwind v4 CSS-first entry (@import "tailwindcss", @theme tokens), ticker keyframes, reduced-motion rules, .dark overrides.' },
  { path: 'cli/index.mjs + cli/snippets/', what: 'CLI: list / add <effect>. Snippets are the same MIT code as the site.' },
  { path: 'DESIGN.md', what: 'The design system: tokens, styles, layout rules, motion rules.' },
];

export const DOC_LINKS: { label: string; url: string; what: string }[] = [
  { label: 'README.md', url: 'https://github.com/habeebc84-create/FEAUTURES/blob/main/README.md', what: 'Clone/build commands, feature map, section list, stack, honesty and licences.' },
  { label: 'AGENTS.md', url: 'https://github.com/habeebc84-create/FEAUTURES/blob/main/AGENTS.md', what: 'How to work in this repo: read first, build, verify, then push.' },
  { label: 'DESIGN.md', url: 'https://github.com/habeebc84-create/FEAUTURES/blob/main/DESIGN.md', what: 'Tokens, the one style, layout rules, motion rules, content rules.' },
  { label: 'CLAUDE.md', url: 'https://github.com/habeebc84-create/FEAUTURES/blob/main/CLAUDE.md', what: 'Same guidance, written for Claude Code and other coding agents.' },
  { label: 'LICENSE', url: 'https://github.com/habeebc84-create/FEAUTURES/blob/main/LICENSE', what: 'MIT licence, Cheppali Habeeb 2026. Covers this repo’s original code only.' },
];

export const DOC_RULES: string[] = [
  'Original design only. Sources are studied and summarised in original wording; no shot, brand, image or code from any source is copied into this site.',
  'Every animation is static under prefers-reduced-motion. The ticker and carousel pause on hover and focus; the cursor ring never replaces the native cursor.',
  'No fake controls. Every button, filter and demo on the page works; mocks are labelled as wireframes.',
  'Verify before claiming. Builds, tests and live checks run before any deploy is called done; phone width and the browser console have never been verified here, and the Honesty note says so.',
  'Libraries keep their own licences: Motion MIT, GSAP GreenSock standard licence (not MIT), Anime.js MIT, Lenis MIT, Tailwind MIT.',
];
