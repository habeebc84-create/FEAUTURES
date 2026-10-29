export type OpenSourceEntry = {
  name: string;
  repo: string;
  licence: string;
  stars: string;
  pushed: string;
  what: string;
  use: string;
  status: 'live demo' | 'catalogue' | 'workspace tool' | 'stale';
};

export const OPEN_SOURCE: { group: string; note: string; entries: OpenSourceEntry[] }[] = [
  {
    group: 'Animation and motion',
    note: 'Installed and demoed on this page where marked “live demo”. Verified on GitHub 29 October 2026.',
    entries: [
      { name: 'Motion', repo: 'motiondivision/motion', licence: 'MIT', stars: '34,641', pushed: '29 Oct 2026', what: 'Animation library, formerly Framer Motion. Springs, keyframes, stagger, scroll-linked animation, gestures, layout transitions.', use: 'Already powering every effect on this page.', status: 'live demo' },
      { name: 'GSAP', repo: 'greensock/GSAP', licence: 'Free (GreenSock standard licence, not MIT)', stars: '29,888', pushed: '13 Apr 2026', what: 'Timelines, ScrollTrigger, scrub, parallax, complex sequences. The standard for code-based animation.', use: 'Timeline + scroll-scrub demo above.', status: 'live demo' },
      { name: 'Lenis', repo: 'darkroomengineering/lenis', licence: 'MIT', stars: '16,945', pushed: '27 Oct 2026', what: 'Smooth scrolling with lerp control; syncs with GSAP ScrollTrigger.', use: 'Smooth scrolling for this whole page + glide demo above.', status: 'live demo' },
      { name: 'Anime.js', repo: 'juliangarnier/anime', licence: 'MIT', stars: '74,012', pushed: '21 Aug 2026', what: 'Lightweight animation with staggers, timelines and easing for DOM, SVG and CSS properties.', use: 'Stagger demo above.', status: 'live demo' },
      { name: 'Lottie (lottie-web)', repo: 'airbnb/lottie-web', licence: 'MIT', stars: '32,292', pushed: '1 Sep 2025', what: 'Renders After Effects animations exported as JSON. Lightweight vector animation, dotLottie format.', use: 'Catalogue only here — use for lightweight animated illustrations, not for layout.', status: 'catalogue' },
      { name: 'Barba.js', repo: 'barbajs/barba', licence: 'MIT', stars: '13,001', pushed: '2 Dec 2024', what: 'Page transitions for multi-page sites: smooth, fluid transitions between pages.', use: 'Catalogue only — needs a multi-page site; this page is single-page.', status: 'catalogue' },
      { name: 'Three.js', repo: 'mrdoob/three.js', licence: 'MIT', stars: '117,160', pushed: '29 Oct 2026', what: 'WebGL 3D: scenes, models, shaders. Heavy — use only where 3D explains the product.', use: 'Catalogue only — add only for a 3D hero, never for the whole page.', status: 'catalogue' },
      { name: 'React Three Fiber', repo: 'pmndrs/react-three-fiber', licence: 'MIT', stars: '33,319', pushed: '21 Oct 2026', what: 'React renderer for Three.js: declarative 3D scenes inside React components.', use: 'Catalogue only — pair with Three.js when a React site needs 3D.', status: 'catalogue' },
    ],
  },
  {
    group: 'Layout, components and styling',
    note: 'The building blocks. Tailwind and Lucide are already used on this page.',
    entries: [
      { name: 'Tailwind CSS', repo: 'tailwindlabs/tailwindcss', licence: 'MIT', stars: '98,015', pushed: '19 Oct 2026', what: 'Utility-first CSS. This site is built with it.', use: 'In use on every section of this page.', status: 'live demo' },
      { name: 'shadcn/ui', repo: 'shadcn-ui/ui', licence: 'MIT', stars: '126,866', pushed: '29 Oct 2026', what: 'Copy-into-your-project components built on Radix primitives and Tailwind. Not a package to install wholesale.', use: 'Catalogue — copy single components as needed, keep the design yours.', status: 'catalogue' },
      { name: 'Radix Colors', repo: 'radix-ui/colors', licence: 'MIT', stars: '1,725', pushed: '17 Dec 2025', what: 'Accessible colour scales for light and dark UI, ready-made and contrast-checked.', use: 'Catalogue — use its scales when a palette must pass contrast checks.', status: 'catalogue' },
      { name: 'Lucide', repo: 'lucide-icons/lucide', licence: 'No SPDX identifier in repo (licence file in repo)', stars: '25,370', pushed: '29 Oct 2026', what: 'Open-source icon set, consistent stroke icons for UI.', use: 'Icons on this page come from Lucide.', status: 'live demo' },
      { name: 'Heroicons', repo: 'tailwindlabs/heroicons', licence: 'MIT', stars: '23,890', pushed: '12 May 2026', what: 'Hand-crafted SVG icons by the Tailwind team, outline and solid.', use: 'Catalogue — alternative icon set when Lucide does not fit.', status: 'catalogue' },
      { name: 'Feather', repo: 'feathericons/feather', licence: 'MIT', stars: '26,026', pushed: '11 Mar 2025', what: 'Simply beautiful open-source icons, featherweight by design.', use: 'Catalogue — light icon set; check maintenance before adopting.', status: 'catalogue' },
      { name: 'Fontsource', repo: 'fontsource/fontsource', licence: 'MIT', stars: '6,248', pushed: '14 Oct 2026', what: 'Self-hosted fonts via npm: Google Fonts without the CDN round-trip.', use: 'Catalogue — self-host Plus Jakarta Sans style fonts for performance.', status: 'catalogue' },
      { name: 'Google Fonts', repo: '', licence: 'Open fonts (licences vary per family)', stars: '', pushed: '', what: 'Font library used by this site for Plus Jakarta Sans via CDN.', use: 'In use for this page’s typeface.', status: 'live demo' },
      { name: 'Coolors', repo: '', licence: 'Web tool, not a repo', stars: '', pushed: '', what: 'Palette generator: press space to generate, lock colours you like, export hex codes.', use: 'Catalogue — quick palette exploration before committing to tokens.', status: 'catalogue' },
    ],
  },
  {
    group: 'Design systems and workspaces',
    note: 'Whole workspaces and skill systems, not small libraries. Borrow their systems and templates; do not run the full app for a normal site build.',
    entries: [
      { name: 'UI/UX Pro Max skill', repo: 'nextlevelbuilder/ui-ux-pro-max-skill', licence: 'MIT', stars: '142,255', pushed: '26 Oct 2026', what: 'Design-intelligence skill: searchable styles, palettes, font pairings, chart types, UX guidelines. Covered in depth in the UI/UX Pro Max section.', use: 'Design decisions for this site; scan its scripts before running them (third-party audit findings noted).', status: 'catalogue' },
      { name: 'Open Design', repo: 'nexu-io/open-design', licence: 'Apache-2.0', stars: '104,738', pushed: '29 Oct 2026', what: 'Collaborative, local-first AI design agent workspace: 100+ skills, templates, 151 design-system packages centred on DESIGN.md.', use: 'Catalogue — borrow skills/templates/DESIGN.md systems; a whole app, not a library.', status: 'workspace tool' },
      { name: 'Agent-Reach', repo: 'Panniantong/Agent-Reach', licence: 'MIT', stars: '105,885', pushed: '25 Oct 2026', what: 'Research CLI: read and search GitHub, YouTube, Reddit, Bilibili and the web. Read-only, no posting.', use: 'Catalogue — research tool for trends and competitors, not design or code.', status: 'workspace tool' },
    ],
  },
  {
    group: '3D frameworks and starters',
    note: 'Muse (muse.io) is a different product from this assistant. Its GitHub org is small and quiet since 2023 — treat these as reference, not active dependencies.',
    entries: [
      { name: 'spacesvr', repo: 'musehq/spacesvr', licence: 'MIT', stars: '184', pushed: '11 May 2023', what: '3D framework from the Muse team for immersive web experiences.', use: 'Catalogue — reference only; inactive since 2023.', status: 'stale' },
      { name: 'spacesvr-starter', repo: 'musehq/spacesvr-starter', licence: 'No licence detected on GitHub', stars: '21', pushed: '14 Apr 2023', what: 'Starter template for spacesvr 3D sites.', use: 'Catalogue — reference only; no licence detected, check before reuse.', status: 'stale' },
      { name: 'muse-ideas', repo: 'musehq/muse-ideas', licence: 'MIT', stars: '2', pushed: '6 May 2023', what: '3D website ideas repo from the Muse team.', use: 'Catalogue — ideas only.', status: 'stale' },
      { name: 'Next.js Developer Portfolio Starter', repo: 'codebucks27/Next.js-Developer-Portfolio-Starter-Code', licence: 'No licence detected on GitHub', stars: '1,353', pushed: '26 Oct 2026', what: 'Developer portfolio starter with animations, a structure reference for portfolio builds.', use: 'Catalogue — structure ideas only; check licence before copying code.', status: 'catalogue' },
      { name: 'Apple-style GSAP + Three.js clone', repo: 'sanidhyy/apple-clone', licence: 'MIT', stars: '170', pushed: '28 Oct 2026', what: 'Apple-style landing page built with GSAP and Three.js, a study in scroll-driven product storytelling.', use: 'Catalogue — study the scroll storytelling, do not copy Apple branding.', status: 'catalogue' },
      { name: 'GSAP + Three.js animation demos', repo: 'YuraTadevosyan/three-js-and-animations', licence: 'No licence detected on GitHub', stars: '0', pushed: '8 Oct 2026', what: 'Small demo repo combining GSAP timelines with Three.js scenes.', use: 'Catalogue — demo reference only.', status: 'catalogue' },
      { name: 'GSAP parallax example', repo: 'DmitriNaumov/Paralax-effect-with-gsap-scrolltrigger', licence: 'No licence detected on GitHub', stars: '142', pushed: '27 Feb 2023', what: 'Parallax effect with GSAP ScrollTrigger, a minimal working example.', use: 'Catalogue — example only.', status: 'catalogue' },
    ],
  },
  {
    group: 'Lists and collections',
    note: 'Curated lists for discovering more. A list entry is a pointer, not an endorsement of every item in it.',
    entries: [
      { name: 'Awesome Web Animation', repo: 'sergey-pimenov/awesome-web-animation', licence: 'CC0-1.0', stars: '1,597', pushed: '20 Sep 2026', what: 'Curated list of web animation libraries, tools and examples.', use: 'Catalogue — discovery list.', status: 'catalogue' },
      { name: 'Awesome Three.js', repo: 'AxiomeCG/awesome-threejs', licence: 'CC0-1.0', stars: '1,016', pushed: '28 Jul 2026', what: 'Curated Three.js resources, examples and tools.', use: 'Catalogue — discovery list.', status: 'catalogue' },
      { name: 'Awesome Three.js VFX', repo: 'naranyala/awesome-threejs-vfx', licence: 'No licence detected on GitHub', stars: '8', pushed: '28 Jun 2026', what: 'Small curated list of Three.js visual-effects resources.', use: 'Catalogue — discovery list, small and quiet.', status: 'catalogue' },
    ],
  },
];
