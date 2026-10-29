import type { ReactNode } from 'react';
import { Suspense, lazy } from 'react';
import { Github } from 'lucide-react';
import { OPEN_SOURCE } from './opensource';
import { TEMPLATE_SOURCES, HOW_TO_USE, QUICK_STARTS } from './templates';

const GsapDemo = lazy(() => import('./demos').then((m) => ({ default: m.GsapDemo })));
const AnimeDemo = lazy(() => import('./demos').then((m) => ({ default: m.AnimeDemo })));
const LenisDemo = lazy(() => import('./demos').then((m) => ({ default: m.LenisDemo })));
import {
  AnimateText,
  AnimatedNumber,
  CursorFollower,
  LayoutShowcase,
  Reveal,
  ScrambleText,
  ScrollProgress,
  SplitHeading,
  StyleCarousel,
  TickerStrip,
  Typewriter,
} from './effects';

const NAV = [
  { href: '#effects', label: 'Effects' },
  { href: '#layouts', label: 'Layouts' },
  { href: '#trends', label: 'Trends' },
  { href: '#styles', label: 'Styles' },
  { href: '#opensource', label: 'Open Source' },
  { href: '#templates', label: 'Free Templates' },
  { href: '#howto', label: 'How to Use' },
  { href: '#sources', label: 'Sources' },
  { href: '#honesty', label: 'Honesty' },
];

const LAYOUTS = [
  { id: 'hero', name: 'Typography hero', use: 'Landing', description: 'One oversized headline, one line of proof, one action.', kind: 'hero' as const },
  { id: 'bento', name: 'Bento grid', use: 'Product', description: 'Tiles of different sizes group features without long pages.', kind: 'bento' as const },
  { id: 'split', name: 'Split screen', use: 'Landing', description: 'Visual on one side, message and action on the other.', kind: 'split' as const },
  { id: 'editorial', name: 'Editorial spread', use: 'Content', description: 'Magazine rhythm: big headline, columns, pull quotes.', kind: 'editorial' as const },
  { id: 'dashboard', name: 'Dashboard', use: 'Dashboard', description: 'Status at a glance, colour only for change and action.', kind: 'dashboard' as const },
  { id: 'pricing', name: 'Pricing tiers', use: 'Landing', description: 'Three options, the middle one clearly recommended.', kind: 'pricing' as const },
  { id: 'portfolio', name: 'Minimal portfolio', use: 'Content', description: 'Work first, neutral palette, light motion, even spacing.', kind: 'portfolio' as const },
  { id: 'product', name: 'Product centred', use: 'Product', description: 'The product fills the view, proof sits below it.', kind: 'product' as const },
  { id: 'video', name: 'Video-first hero', use: 'Landing', description: 'A motion clip carries the story; headline and one action sit on top.', kind: 'video' as const },
  { id: 'pricingfaq', name: 'Pricing + FAQ', use: 'Landing', description: 'Tiers answer the price question, questions below answer the rest.', kind: 'pricingfaq' as const },
  { id: 'docs', name: 'Docs with sidebar', use: 'Content', description: 'Navigation on the left, one idea per page, search on top.', kind: 'docs' as const },
  { id: 'blog', name: 'Article list', use: 'Content', description: 'Image, title, summary, date. The list is the navigation.', kind: 'blog' as const },
];

const STYLE_SLIDES = [
  {
    id: 'minimalism',
    label: 'Minimalism: few elements, every one earns its place',
    node: (
      <div className="flex h-full flex-col justify-center bg-white px-8 sm:px-14">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Style 01 — Minimalism</p>
        <p className="mt-3 max-w-xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">Less, on purpose.</p>
        <p className="mt-3 max-w-lg text-slate-600">Monochrome, generous whitespace, colour only where attention must go. Fashion, photography, portfolios.</p>
      </div>
    ),
  },
  {
    id: 'swiss',
    label: 'Swiss style: grid, type, order',
    node: (
      <div className="flex h-full flex-col justify-center bg-slate-100 px-8 sm:px-14">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Style 02 — Swiss</p>
        <p className="mt-3 max-w-xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">Grid first. Type second. Nothing else.</p>
        <p className="mt-3 max-w-lg text-slate-600">Modular grids, Helvetica-style sans type, large headings against small body text. IT and premium brands.</p>
      </div>
    ),
  },
  {
    id: 'brutalism',
    label: 'Brutalism and neobrutalism: loud on purpose',
    node: (
      <div className="flex h-full flex-col justify-center bg-yellow-300 px-8 sm:px-14">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-900">Style 03 — Brutalism</p>
        <p className="mt-3 max-w-xl text-4xl font-extrabold leading-tight text-slate-900 underline decoration-pink-500 decoration-4 sm:text-5xl">BREAK THE GRID.</p>
        <p className="mt-3 max-w-lg font-semibold text-slate-900">Clashing colour, oversized type, hard shadows. Bold startups, edgy brands, portfolios that challenge.</p>
      </div>
    ),
  },
  {
    id: 'editorial',
    label: 'Editorial: print magazine rhythm on the web',
    node: (
      <div className="flex h-full flex-col justify-center bg-stone-100 px-8 sm:px-14">
        <p className="text-xs font-bold uppercase tracking-widest text-stone-500">Style 04 — Editorial</p>
        <p className="mt-3 max-w-xl font-serif text-4xl font-bold leading-tight text-stone-900 sm:text-5xl">The story is the layout.</p>
        <p className="mt-3 max-w-lg text-stone-600">Contrasting headline and body type, layered magazine compositions, visuals that lead. Magazines, blogs, news.</p>
      </div>
    ),
  },
  {
    id: 'bento',
    label: 'Bento: tidy tiles, dense content kept clear',
    node: (
      <div className="flex h-full flex-col justify-center bg-emerald-50 px-8 sm:px-14">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Style 05 — Bento</p>
        <p className="mt-3 max-w-xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">Box it up, neatly.</p>
        <p className="mt-3 max-w-lg text-slate-600">Rounded tiles, efficient space, readable type, small charts or illustrations. Dashboards, services, dense content.</p>
      </div>
    ),
  },
  {
    id: 'dark-saas',
    label: 'Dark SaaS: modular sections, dashboard proof',
    node: (
      <div className="flex h-full flex-col justify-center bg-slate-950 px-8 text-white sm:px-14">
        <p className="text-xs font-bold uppercase tracking-widest text-lime-300">Style 06 — Dark SaaS</p>
        <p className="mt-3 max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl">Proof, not promises.</p>
        <p className="mt-3 max-w-lg text-slate-300">Dark modular sections, precise type, one sharp positioning line, then a dashboard preview. AI and developer tools.</p>
      </div>
    ),
  },
];

const FIGMA_TRENDS = [
  { name: '3D and immersive', text: 'Depth and interaction instead of static images: interactive models, scroll-triggered animation, AR previews. A shoe you can spin, a tour you can walk through. Examples in the guide: Nike and IKEA.', tag: 'Trend 1' },
  { name: 'Experimental navigation', text: 'Layouts that feel like exploration: radial menus, hidden drawers, interactive maps, non-linear journeys. Examples: Locomotive, The Outline, Palmer, Google Arts & Culture.', tag: 'Trend 2' },
  { name: 'Vibrant colour', text: 'Bright, saturated palettes are back, driven by Y2K nostalgia and “dopamine design”: neon gradients, high-contrast pairings, playful hues for lifestyle, beauty and youth brands. Examples: Lush, Headspace, Starface.', tag: 'Trend 3' },
  { name: 'Bold typography', text: 'Type as storytelling: custom fonts, oversized headlines, motion, layered styles, kinetic lettering and variable fonts that respond to interaction. Examples: Glossier, Samsung.', tag: 'Trend 4' },
  { name: 'Dark mode', text: 'Now standard, not a feature: less eye strain, battery savings on OLED, and a toggle most users expect. Prototype light and dark side by side and test contrast. Examples: YouTube, X, Slack.', tag: 'Trend 5' },
  { name: 'Motion design', text: 'Rhythm and storytelling: hover effects to full scroll narratives (“scrollytelling”). Motion guides attention and builds immersion without slowing the site. Match timing to tone: smooth for luxury, snappy for playful.', tag: 'Trend 6' },
  { name: 'Gamified design', text: 'Points, levels, badges, progress bars, leaderboards, challenges and micro-rewards that make learning, shopping and forms feel rewarding and bring people back. Examples: Duolingo, Sephora.', tag: 'Trend 7' },
  { name: 'Neumorphism', text: 'Soft shadows and subtle gradients make elements look almost touchable, blending skeuomorphism with simplicity. Best where clarity meets polish: fintech and productivity apps. Examples: Apple, Flow Ninja, Stripe.', tag: 'Trend 8' },
  { name: 'Retrofuturism', text: 'Vintage visions of the future: neon accents, chrome textures, pixel art, bold gradients from sci-fi, arcade games and early web aesthetics, paired with futuristic fonts. Lifestyle, portfolios, music and entertainment.', tag: 'Trend 9' },
  { name: 'Maximalism', text: 'Rich colour, overlapping visuals, bold fonts, dense compositions. High energy that surprises and engages through layers and bold storytelling. Examples: Spotify, Liquid Death. Overlap with intent, never by accident.', tag: 'Trend 10' },
  { name: 'Collage', text: 'Scrapbook creativity: sticker graphics, torn textures, cutout photos, expressive hand-drawn fonts. Messy on purpose, and memorable for it. Lifestyle brands and personal portfolios. Example: La Palatine.', tag: 'Trend 11' },
  { name: 'Neo-brutalism', text: '“Anti-design”: raw, unpolished visuals that stand out among sleek templates, creating urgency or irreverence. Edgy fashion, experimental agencies, creative portfolios. Examples: Balenciaga, Diesel, Mailchimp.', tag: 'Trend 12' },
  { name: 'Sustainable design', text: 'Leaner code, optimised images, low-impact hosting, plus accessibility as standard: high contrast, screen-reader support, voice navigation, keyboard-only flows, and no dark patterns. The must-have, not the nice-to-have.', tag: 'Trend 13' },
];

const FIGMA_AI = [
  { name: 'AI chatbots and agents', text: 'Proactive, conversational, often agentic: multi-step tasks handled and needs anticipated. Figma reports 51% of its users working on AI products are building agents, up from 21% the year before. Figma-reported, not independently verified.' },
  { name: 'Voice navigation', text: 'Beyond search: control site features, talk to chatbots, browse menus naturally. Hands-free navigation and more accessible browsing. Examples in the guide: Walmart, Domino’s, Nike, ASOS, H&M, Sephora.' },
  { name: 'Smarter forms', text: 'Forms that learn over time: questions, follow-ups and recommendations tailored to each interaction instead of overwhelming every visitor with the same long form.' },
  { name: 'AI in the workflow', text: 'Figma’s State of the Designer 2026 report (906 designers surveyed) found 72% use generative AI in their workflows and 91% of those say it improves output quality, not just speed. Figma-reported figures.' },
];

const TILDA_STYLES = [
  { name: 'Minimalism', tagline: 'When less is more', elements: ['Every element must serve a purpose; strip the rest.', 'Monochrome palette; bold colour only for the one action.', 'Whitespace guides attention and gives room to breathe.'], best: 'Fashion, photography, music stores, architecture, artist portfolios.' },
  { name: 'Brutalism & Neobrutalism', tagline: 'Design that dares', elements: ['Deliberate contrast and chaos: clashing colours, overlap, odd placement.', 'Sharp lines, hard shadows, oversized elements.', 'Neobrutalism keeps the rebellion, tones down the rough edges.'], best: 'Bold startups, edgy brands, portfolios that challenge the norm.' },
  { name: 'Constructivism', tagline: 'Speed and dynamics', elements: ['Sans-serif headlines, clear and purposeful, no decoration.', 'Geometric shapes: squares, triangles, circles, sharp lines.', 'Asymmetry and movement: offset elements, subtle animation, flow.'], best: 'Tech startups and forward-looking brands that want to read fast and agile.' },
  { name: 'Swiss Style', tagline: 'Reliable as Swiss watchmaking', elements: ['Modular grid layouts; every element aligned, every element purposeful.', 'Typography is king: large headings, small body text, sans-serif faces.', 'Start with text on a solid background; add colour images only where they earn it.'], best: 'IT companies and premium product brands: order, sophistication, professionalism.' },
  { name: 'Editorial', tagline: 'Think Vogue and Cosmopolitan', elements: ['Contrasting type: large decorative headlines, small legible body text.', 'Multilayer, magazine-spread compositions.', 'Strong, selective visuals; quotes and key phrases set in large type or colour.'], best: 'Content-heavy platforms: digital magazines, blogs, news.' },
  { name: 'Hand-Drawn', tagline: 'Decor, decor, and more decor', elements: ['Handwritten or calligraphic fonts, sparingly — never in body copy.', 'Rough-cut photos, bright outlines, sketchy shapes, scribbles.', 'Order first, chaos later: lay out on a grid, then shift things for the handmade feel.'], best: 'Illustrator portfolios, family cafés, kids-focused projects: creative and friendly.' },
  { name: 'Retro', tagline: 'Old school, still cool', elements: ['Bold palettes: orange, yellow, turquoise, pink, brown, slightly muted.', 'Grain, noise and scratches for an aged, analog feel.', 'Tactile UI: shadowed buttons that echo radios, TVs and arcade games.'], best: 'Cafés, music projects, vintage shops, bars — any site channelling an era.' },
  { name: 'Flat', tagline: 'Everything is flat. Super flat', elements: ['No depth: basic shapes, no 3D, shadows, gloss or bevels.', 'Solid colours, no gradients; soft pastels and bold contrasts.', 'Bold headlines, clean sans-serif type, clear block hierarchy.'], best: 'Corporate sites, SaaS platforms and news portals where usability comes first.' },
  { name: 'Bento', tagline: 'Box it all up, the neat way', elements: ['Rectangular tiles with softly rounded corners on a grid.', 'Space used efficiently: tidy blocks, no cramped feeling.', 'Simple shapes, muted colours, small illustrations or charts to enrich.'], best: 'Dashboards, e-commerce and web services where content is dense and clarity is key.' },
];

const REFERO_STYLES = [
  { name: 'Apple', theme: 'Hardware gallery, restrained and precise' },
  { name: 'Cursor', theme: 'Warm, workshop-like editorial' },
  { name: 'OpenAI', theme: 'Research notebook, calm and plain' },
  { name: 'Superhuman', theme: 'Golden-hour editorial dashboard' },
  { name: 'Vercel', theme: 'Terminal precision on white' },
  { name: 'Figma', theme: 'White gallery wall, one idea at a time' },
  { name: 'Ramp', theme: 'Editorial finance desk' },
  { name: 'Brex', theme: 'White concrete, one ember accent' },
  { name: 'Intercom', theme: 'Warm cream editorial spread' },
  { name: 'Mercury', theme: 'Alpine banking at blue hour' },
  { name: 'Wise', theme: 'Deep moss with a lime charge' },
  { name: 'teenage engineering', theme: 'Industrial catalogue under studio light' },
];

const DRIBBBLE_PATTERNS = [
  { name: 'Restrained, purposeful motion', text: 'Subtle micro-interactions guide movement. Motion explains the product instead of decorating it. Avoid excess; every animation should support a real use case.' },
  { name: 'Typography-led, high-contrast heroes', text: 'Bold, sharp typography with structured layouts and high contrast guides attention before a word is read. One sharp positioning line, then proof.' },
  { name: 'Product at the centre', text: 'Clean layouts, clear hierarchy, structured sections, concise messaging, product-led visuals. Problem, solution, preview, one line that lands.' },
  { name: 'Dark interfaces for AI and SaaS', text: 'Dark, layered, precise type with dashboard previews for AI, dev and security tools. Warm or soft palettes where trust and calm matter instead.' },
  { name: 'Bento grids everywhere', text: 'Services, features and dashboards grouped in tiles, often animating in on scroll. A recurring, proven way to organise dense content.' },
  { name: '3D only where it explains', text: 'Interactive 3D at the centre when it shows the product, abstract 3D for atmosphere. Never block essential content behind a heavy scene.' },
  { name: 'Dashboard hierarchy', text: 'Fleet status, trips and alerts in one view: strong hierarchy, colour used strategically to separate data and highlight change, bold accents only for critical actions.' },
  { name: 'Guided conversion journeys', text: 'Step by step with minimal friction: type, then ingredients, then reviews. Deliberate spacing and fast scanning, products as visual statements.' },
  { name: 'Minimal portfolios', text: 'Minimal layouts, neutral palette, light motion, consistent spacing, attention on the work itself. The closest Dribbble pattern to a personal portfolio.' },
  { name: 'Brand systems, not single screens', text: 'A restrained palette, bold type and structured layouts applied consistently everywhere, with motion as part of the brand system, not a one-off effect.' },
];

const SOURCES = [
  {
    name: 'Figma — Top Web Design Trends 2026',
    url: 'https://www.figma.com/resource-library/web-design-trends/',
    text: '13 key trends plus 4 AI-assisted trends, each with examples and a “try this” direction. Checked in full 29 October 2026. Figures quoted here are Figma-reported survey results, not independently verified.',
    added: 'All 13 trends and all 4 AI trends are built into the Trends section above, in the guide’s own order.',
  },
  {
    name: 'Refero Styles',
    url: 'https://styles.refero.design/',
    text: 'Beta library, new styles added weekly: 2,000+ AI-readable design systems from leading product websites. Each style gives colours, typography, spacing, components and a DESIGN.md for Cursor, Claude Code, Codex, v0 or Lovable. Checked 29 October 2026; no licence shown on the homepage.',
    added: 'The library’s structure, its DESIGN.md workflow and a dozen named styles are in the Refero section. No brand’s colours, type or components are copied.',
  },
  {
    name: 'Tilda — Popular Web Design Styles',
    url: 'https://tilda.education/en/web-design-styles',
    text: 'A practical guide to 9 core styles with key elements and fit per style, plus the 2025 note that Minimalism and Swiss will keep dominating and Bento is now common. Checked in full 29 October 2026. Promo offers on the page are ignored.',
    added: 'All 9 styles are built into the Styles section, with key elements and best-fit use for each.',
  },
  {
    name: 'UI/UX Pro Max',
    url: 'https://www.uupm.cc/#features',
    text: 'Searchable design-intelligence database. Header counts as checked: 57 styles, 95 palettes, 56 font pairings, 24 chart types, 29 landing patterns, 8 tech stacks. The body text says 50+ pairings and 14 landing structures — both numbers are recorded in the section below.',
    added: 'Its six database areas, eight tech stacks, six-step prompt-to-code workflow and quality checklist are summarised in the UI/UX Pro Max section. Nothing installed, no script run.',
  },
  {
    name: 'Dribbble — Website Templates',
    url: 'https://dribbble.com/tags/website-template',
    text: '4,988 designs in a text copy crawled 30 March 2025 — stale, so only template categories and structure ideas are taken from it, and the live page must be re-checked before relying on any specific shot. Top entries in that copy: hero-header builders, HR, fintech and SaaS templates, and many crypto and finance dashboards.',
    added: 'Ten recurring patterns from the 27 October Dribbble research are in the Dribbble section. Inspiration only: never copy shots, branding, images or code, and check each template’s licence.',
  },
  {
    name: 'Figma Community — website templates',
    url: 'https://www.figma.com/community/website-templates?resource_type=files',
    text: '10,000+ free website templates and themes, 21 pages on the Popular sort. First 15 files all marked Free. The listing page showed no licence wording, so each file must be checked on its own page. Checked with a live browser read 29 October 2026.',
    added: 'The library, its categories and filters, the most-duplicated free files and the duplicate-into-drafts flow are in the Free Templates section. No file is copied.',
  },
  {
    name: 'Webflow templates',
    url: 'https://webflow.com/templates',
    text: '7,000+ free and premium HTML templates. Free templates are customisable and responsive with core features; a free Starter workspace covers building, a paid Site Plan covers a custom domain. Checked in full 29 October 2026; the free-templates listing itself did not load in text form, so no individual template names are claimed.',
    added: 'Template types, categories, free status and the in-Webflow workflow are in the Free Templates section.',
  },
  {
    name: 'Jitter templates',
    url: 'https://jitter.video/templates/',
    text: 'Free motion graphics templates, editable in Jitter and usable for commercial purposes, with the Max plan for more export formats and resolutions. Checked in full 29 October 2026; individual template names were not listed in the text read.',
    added: 'Use cases, editing flow and export notes are in the Free Templates section.',
  },
];

function SectionHeading({ children }: { children: string }) {
  return <AnimateText text={children} className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl" />;
}

function Note({ children }: { children: ReactNode }) {
  return <p className="mt-3 max-w-3xl text-slate-600">{children}</p>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <ScrollProgress />
      <CursorFollower />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:px-3 focus:py-2">Skip to content</a>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="text-xl font-extrabold tracking-tight">
            FEA<span className="text-emerald-600">UTURES</span>
          </a>
          <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Sections">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100">{n.label}</a>
            ))}
          </nav>
          <a href="https://github.com/habeebc84-create/FEAUTURES" target="_blank" rel="noreferrer" className="ml-auto rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white md:ml-0">View code on GitHub</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-widest text-lime-300">
              <ScrambleText text="Design, studied live" />
            </p>
            <SplitHeading
              className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl"
              words={[{ text: 'Design' }, { text: 'ideas,' }, { text: 'layouts' }, { text: 'and' }, { text: 'effects.', accent: true }]}
            />
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              Five design sources, fetched deep and built in: Figma trends, Refero systems, Tilda styles,
              UI/UX Pro Max, and Dribbble templates. Plus every Motion+ effect, rebuilt as a working
              equivalent with the free Motion library. Nothing copied, nothing fake, every control works.
            </p>
            <Typewriter
              className="mt-4 text-lg font-semibold text-lime-200"
              phrases={['13 Figma trends', '9 Tilda styles', '2,000+ Refero systems', '57 UI styles', '12 layout patterns', '11 live effects']}
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#layouts" className="rounded-full bg-lime-400 px-6 py-3 font-bold text-slate-950">See the layouts ↓</a>
              <a href="#trends" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white">Figma trends</a>
            </div>
            <p className="mt-6 text-sm text-slate-400">Scroll progress bar at the very top. Cursor ring follows your mouse on desktop. Both stop under reduced motion.</p>
          </div>
        </section>

        <TickerStrip items={['Typography-led heroes', 'Bento grids', 'Dark SaaS', 'Neo-brutalism', 'Editorial spreads', 'Experimental navigation', 'Vibrant colour', 'Motion design', 'Sustainable design', 'Split screens', 'Dashboard hierarchy', 'Minimal portfolios']} />

        <div className="mx-auto max-w-6xl space-y-20 px-4 py-14 sm:px-6">
          <Reveal id="effects" className="scroll-mt-24">
            <SectionHeading>All the effects, in one place</SectionHeading>
            <Note>
              Each effect is a live demo, built from the free Motion library&apos;s public primitives:
              motion values, springs, the <code>animate</code> function, <code>whileInView</code>, and{' '}
              <code>AnimatePresence</code>. The demos below use design content, not food photos.
            </Note>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'splitText', text: 'The hero heading above fades in word by word.' },
                { title: 'AnimateText', text: 'Every section heading on this page reveals letter by letter.' },
                { title: 'AnimateView', text: 'Each section below reveals once as you scroll to it.' },
                { title: 'Typewriter', text: 'The hero line types, deletes, and types the next design fact.' },
                { title: 'ScrambleText', text: '“Design, studied live” unscrambles on load. Hover it to scramble again.' },
                { title: 'Cursor', text: 'A spring ring follows your pointer and grows over buttons and links.' },
              ].map((c) => (
                <article key={c.title} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="font-bold">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{c.text}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal id="carousel" className="scroll-mt-24">
            <SectionHeading>Carousel and Curtains: six styles</SectionHeading>
            <Note>
              The style changes on its own every 4 seconds, pauses when you hover or focus it, and opens with
              two curtain panels parting from the centre. Use the previous, next, and dot controls. Each slide
              is an original demonstration of the style, not a copy of any site.
            </Note>
            <div className="mt-6">
              <StyleCarousel slides={STYLE_SLIDES} />
            </div>
          </Reveal>

          <Reveal id="layouts" className="scroll-mt-24">
            <SectionHeading>Layout ideas, as wireframes</SectionHeading>
            <Note>
              Eight layout patterns, drawn as wireframes so the structure is what you judge, not a photo.
              Filter by what the page has to do. Patterns are drawn from the Dribbble research and the five sources below.
            </Note>
            <div className="mt-6">
              <LayoutShowcase items={LAYOUTS} />
            </div>
          </Reveal>

          <Reveal id="numbers" className="scroll-mt-24">
            <SectionHeading>AnimateNumber: what is actually in here</SectionHeading>
            <Note>These numbers count up when they scroll into view. They count only real things on this page and in the sources.</Note>
            <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 p-5 text-center">
                <dt className="text-sm font-medium text-slate-500">Figma trends covered</dt>
                <dd className="mt-1 text-4xl font-extrabold"><AnimatedNumber value={13} format={(n) => `${n}`} /></dd>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 text-center">
                <dt className="text-sm font-medium text-slate-500">Tilda styles covered</dt>
                <dd className="mt-1 text-4xl font-extrabold"><AnimatedNumber value={9} format={(n) => `${n}`} /></dd>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 text-center">
                <dt className="text-sm font-medium text-slate-500">Layout patterns</dt>
                <dd className="mt-1 text-4xl font-extrabold"><AnimatedNumber value={LAYOUTS.length} format={(n) => `${n}`} /></dd>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 text-center">
                <dt className="text-sm font-medium text-slate-500">Refero design systems</dt>
                <dd className="mt-1 text-4xl font-extrabold"><AnimatedNumber value={2000} format={(n) => `+${n.toLocaleString('en-IN')}`} /></dd>
              </div>
            </dl>
          </Reveal>

          <Reveal id="trends" className="scroll-mt-24">
            <SectionHeading>Figma: 13 trends for 2026, in full</SectionHeading>
            <Note>
              From Figma&apos;s “Top Web Design Trends for 2026”, read in full 29 October 2026. Summarised in
              original wording, in the guide&apos;s order. Pick one or two fitting trends per project;
              accessibility, performance and reduced motion come before any trend. Brand names are the
              guide&apos;s own examples.
            </Note>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {FIGMA_TRENDS.map((t) => (
                <article key={t.name} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">{t.tag}</p>
                  <h3 className="mt-1 font-bold">{t.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{t.text}</p>
                </article>
              ))}
            </div>
            <h3 className="mt-10 text-xl font-bold">Plus 4 AI-assisted trends</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {FIGMA_AI.map((t) => (
                <article key={t.name} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{t.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Source: <a href="https://www.figma.com/resource-library/web-design-trends/" target="_blank" rel="noreferrer" className="underline">figma.com/resource-library/web-design-trends</a>.
              Survey figures are Figma-reported, not independently verified.
            </p>
          </Reveal>

          <Reveal id="styles" className="scroll-mt-24">
            <SectionHeading>Tilda: 9 core styles, in full</SectionHeading>
            <Note>
              From Tilda Education&apos;s practical guide, read in full 29 October 2026. Pick one distinctive
              style per project. Tilda&apos;s own note: a visitor forms an opinion in 50 milliseconds
              (research it cites), so style is a first-impression decision, not decoration. Its 2025 note:
              Minimalism and Swiss will continue to dominate, and Bento is now common, not experimental.
              Start any update by removing what is unnecessary, adding whitespace, and using clear,
              contrasting typography.
            </Note>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {TILDA_STYLES.map((s) => (
                <article key={s.name} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">{s.tagline}</p>
                  <h3 className="mt-1 font-bold">{s.name}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {s.elements.map((e) => <li key={e}>{e}</li>)}
                  </ul>
                  <p className="mt-3 text-sm"><span className="font-semibold">Best for: </span><span className="text-slate-600">{s.best}</span></p>
                </article>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Source: <a href="https://tilda.education/en/web-design-styles" target="_blank" rel="noreferrer" className="underline">tilda.education/en/web-design-styles</a>.
              The page&apos;s Tilda promo offers are ignored.
            </p>
          </Reveal>

          <Reveal id="refero" className="scroll-mt-24">
            <SectionHeading>Refero: study real systems, copy none of them</SectionHeading>
            <Note>
              Refero Styles is a beta library, new styles added weekly, of 2,000+ AI-readable design systems
              from leading product websites. Open any style for colours, typography, spacing, components,
              and a DESIGN.md you can use in Cursor, Claude Code, Codex, v0 or Lovable. Use it to study
              layout, typography, spacing and component thinking only. Never copy a named brand&apos;s
              colours, typography, components or branding, and check the terms for each style before any
              reuse — no licence was shown on the homepage fetch.
            </Note>
            <div className="mt-6 rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-bold">How to use it, without copying</h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
                <li>Search the library for a product whose problem matches yours.</li>
                <li>Read its structure: how sections are ordered, how hierarchy is built, how spacing breathes.</li>
                <li>Note the thinking behind the typography and component choices, in your own words.</li>
                <li>Write your own DESIGN.md for your own project, with your own values.</li>
                <li>Build original: your colours, your type, your components, your copy.</li>
              </ol>
            </div>
            <h3 className="mt-8 text-xl font-bold">Styles in the library, as listed on the homepage</h3>
            <p className="mt-1 text-sm text-slate-500">Names and one-line themes, paraphrased. Listed to show the range, not to reuse their systems.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {REFERO_STYLES.map((s) => (
                <article key={s.name} className="rounded-2xl border border-slate-200 p-4 shadow-sm">
                  <h3 className="font-bold">{s.name}</h3>
                  <p className="mt-0.5 text-sm text-slate-600">{s.theme}</p>
                </article>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Source: <a href="https://styles.refero.design/" target="_blank" rel="noreferrer" className="underline">styles.refero.design</a>.
              Do not connect or install anything from it automatically.
            </p>
          </Reveal>

          <Reveal id="uupm" className="scroll-mt-24">
            <SectionHeading>UI/UX Pro Max: a decision database, not a template</SectionHeading>
            <Note>
              A searchable design-intelligence database. Use it as a design-decision guide before coding:
              research broadly, select narrowly per project, and do not assume its recommendations fit
              every project. Do not install, clone or run its scripts automatically, and scan any script
              before running it. Licence reported as MIT in search results; verify before reuse.
            </Note>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: '57 design styles', text: 'Glassmorphism, Neumorphism, Minimalism, Brutalism, Aurora UI and 45+ more, with colours, effects and framework compatibility.' },
                { title: '95 colour palettes', text: 'Product-specific systems for SaaS, e-commerce, healthcare, fintech and more: primary, secondary, CTA, background, text and border.' },
                { title: '56 font pairings', text: 'Header count as checked. The body text says 50+ pairings with Google Fonts integration, Tailwind configs and mood-based recommendations.' },
                { title: '24 chart types', text: 'Data visualisation recommendations with library suggestions (Chart.js, Recharts, D3.js) and accessibility notes.' },
                { title: '29 landing patterns', text: 'Header count as checked. The body text describes 14 conversion-optimised structures with CTA placement strategies, such as Hero + Features, Video-First and Pricing.' },
                { title: 'UX guidelines', text: 'Best practices and anti-patterns for animation, accessibility, z-index and loading states, plus a quality checklist: SVG icons, hover feedback, dark-mode contrast, responsive layout.' },
              ].map((c) => (
                <article key={c.title} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="font-bold">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{c.text}</p>
                </article>
              ))}
            </div>
            <h3 className="mt-8 text-xl font-bold">Six steps, prompt to production-ready UI</h3>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Your prompt: product, style, page and CTA in one line.',
                'AI reasoning: the prompt is broken into product, style, typography, colour, landing and UX needs.',
                'Search the design database across all six areas.',
                'A recommendation is assembled: style, type pairing, landing structure, UX rule and colours.',
                'Code is generated from the recommendation.',
                'Quality checklist: icons, hover feedback, dark-mode contrast, responsive layout.',
              ].map((step, i) => (
                <li key={step} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-600"><span className="font-bold text-slate-900">{i + 1}. </span>{step}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-slate-600">
              <span className="font-semibold">8 tech stacks supported: </span>
              React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter and Tailwind, each with its own patterns.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Source: <a href="https://www.uupm.cc/#features" target="_blank" rel="noreferrer" className="underline">uupm.cc/#features</a>.
              Counts are the site&apos;s own header counts as checked 29 October 2026; where the body text differs, both numbers are shown above.
            </p>
          </Reveal>

          <Reveal id="dribbble" className="scroll-mt-24">
            <SectionHeading>Dribbble: patterns to study, never to copy</SectionHeading>
            <Note>
              From the Dribbble research of 27 October 2026 and the website-template tag page. The tag page
              copy available was crawled 30 March 2025 and lists 4,988 designs — stale, so it is used only
              for template categories and structure ideas, and the live page must be re-checked before
              relying on any specific shot. Popularity (views and likes) is not proof a pattern is usable,
              accessible or performant, and many shots are concepts, not shipped flows. Check every
              template&apos;s licence and format before any reuse.
            </Note>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {DRIBBBLE_PATTERNS.map((p) => (
                <article key={p.name} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">
              <span className="font-semibold">Template categories in the stale tag copy: </span>
              hero-header builders, HR management, fintech, finance, SaaS, photographer portfolios, and
              many crypto and finance dashboard templates. Take section order, hierarchy and block
              combinations from such listings only.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Source: <a href="https://dribbble.com/tags/website-template" target="_blank" rel="noreferrer" className="underline">dribbble.com/tags/website-template</a>.
              Full research notes are kept separately in the build record.
            </p>
          </Reveal>

          <Reveal id="opensource" className="scroll-mt-24">
            <SectionHeading>Open source: every layout and effect library, checked live</SectionHeading>
            <Note>
              Every open-source item from the website-build toolkit, checked live on GitHub on 29 October
              2026: the repo exists, its licence and stars are shown, and its last push date is shown.
              Three libraries are installed and demoed live below. The rest are catalogue entries: use
              them only where they fit, verify compatibility, and never install a whole workspace for a
              normal site build. “No licence detected” means GitHub found no licence file — check before reuse.
            </Note>
            <Suspense fallback={<p className="mt-6 text-sm text-slate-500">Loading the live demos…</p>}>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <GsapDemo />
                <AnimeDemo />
                <LenisDemo />
              </div>
            </Suspense>
            {OPEN_SOURCE.map((group) => (
              <div key={group.group} className="mt-10">
                <h3 className="text-xl font-bold">{group.group}</h3>
                <p className="mt-1 text-sm text-slate-500">{group.note}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {group.entries.map((e) => (
                    <article key={e.name} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold">{e.name}</h4>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${e.status === 'live demo' ? 'bg-lime-100 text-emerald-800' : e.status === 'stale' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>{e.status}</span>
                      </div>
                      <p className="mt-1 text-sm text-slate-600">{e.what}</p>
                      <p className="mt-2 text-sm"><span className="font-semibold">Use: </span><span className="text-slate-600">{e.use}</span></p>
                      <p className="mt-2 text-xs text-slate-500">Licence: {e.licence}{e.stars ? ` · ★ ${e.stars}` : ''}{e.pushed ? ` · Last push ${e.pushed}` : ''}</p>
                      {e.repo && (
                        <a href={`https://github.com/${e.repo}`} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 underline decoration-emerald-600 decoration-2 underline-offset-4">
                          <Github size={16} aria-hidden="true" /> github.com/{e.repo}
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
            <p className="mt-6 text-sm text-slate-500">
              Also in the toolkit, as web tools rather than repos: 8B animated GSAP templates (8b.com/templates/animated),
              Muse minisites (landing.muse.io), and GSAP UI component and CDN pages (gsapvault.com). Framer and
              Webflow are paid builders, not open source, and are not listed here. Counts and stars are
              GitHub figures as checked 29 October 2026 and will change.
            </p>
          </Reveal>

          <Reveal id="templates" className="scroll-mt-24">
            <SectionHeading>Free templates, from the three libraries you sent</SectionHeading>
            <Note>
              Checked 29 October 2026. Nothing from these libraries is copied into this site — no template
              design, code, image or branding. What is listed here is what each library offers free, how to
              use it, and a link out. Figma’s listing page showed no licence wording, so each Figma file
              must be checked on its own page before reuse.
            </Note>
            {TEMPLATE_SOURCES.map((s) => (
              <div key={s.name} className="mt-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold">{s.name}</h3>
                  <a href={s.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-900 underline decoration-emerald-600 decoration-2 underline-offset-4">Open the library ↗</a>
                </div>
                <p className="mt-1 text-slate-600">{s.headline}</p>
                <p className="mt-2 text-sm"><span className="font-semibold">Free status: </span><span className="text-slate-600">{s.freeStatus}</span></p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {s.facts.map((f) => (<li key={f}>{f}</li>))}
                </ul>
                <p className="mt-3 text-sm"><span className="font-semibold">Categories: </span><span className="text-slate-600">{s.categories.join(' · ')}</span></p>
                <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-slate-600">
                  {s.howTo.map((h) => (<li key={h}>{h}</li>))}
                </ol>
                <p className="mt-3 rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-900">{s.warning}</p>
              </div>
            ))}
          </Reveal>

          <Reveal id="howto" className="scroll-mt-24">
            <SectionHeading>How to use all of this</SectionHeading>
            <Note>
              Everything on this page, in order. Follow the steps top to bottom and you will have used every
              section: styles, layouts, free templates, open-source effects, and the source libraries.
            </Note>
            <ol className="mt-6 space-y-4">
              {HOW_TO_USE.map((s) => (
                <li key={s.step} className="flex gap-4 rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white">{s.step}</span>
                  <div>
                    <h3 className="font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <h3 className="mt-10 text-xl font-bold">Quick starts, one line each</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {QUICK_STARTS.map((q) => (
                <article key={q.tool} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h4 className="font-bold">{q.tool}</h4>
                  <p className="mt-1 text-sm"><code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">{q.install}</code></p>
                  <p className="mt-2 text-sm text-slate-600">{q.firstUse}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal id="sources" className="scroll-mt-24">
            <SectionHeading>The sources, and what was added</SectionHeading>
            <Note>
              Every source below was fetched and read in depth on 29 October 2026. Open any of them in a new tab.
            </Note>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {SOURCES.map((r) => (
                <article key={r.name} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="font-bold">
                    <a href={r.url} target="_blank" rel="noreferrer" className="underline decoration-emerald-600 decoration-2 underline-offset-4">{r.name} ↗</a>
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{r.text}</p>
                  <p className="mt-3 text-sm"><span className="font-semibold">Added here: </span><span className="text-slate-600">{r.added}</span></p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal id="honesty" className="scroll-mt-24">
            <SectionHeading>Honesty note</SectionHeading>
            <div className="mt-4 max-w-3xl space-y-3 text-slate-700">
              <p>
                Motion+ is a paid membership with a private GitHub, private Discord, 510+ premium examples, and
                premium APIs. This site does not have Motion+ access and uses no Motion+ source. Every effect here
                is an original equivalent built with the free, MIT-licensed Motion library.
              </p>
              <p>
                AnimateActivity is early access in the Motion+ table and is not demonstrated here. The 50
                production-ready sections are templates, not a requirement — this page shows the sections this
                showcase actually needs. The AI Kit, Motion Studio, Performance Doctor, and MCP transition editor
                are developer tools, not site effects, and are not installed here.
              </p>
              <p>
                The five design sources are summarised in original wording. No shot, visual, brand system,
                colour value, typeface pairing or code from any of them is copied into this site. Figma&apos;s
                survey figures are Figma-reported. The Dribbble tag listing is a stale March 2025 copy.
                This is not a food website: there are no food photos, products or prices anywhere on it.
              </p>
              <p>
                The open-source catalogue lists each repository&apos;s licence, stars and last push as checked
                live on GitHub on 29 October 2026. The free-template libraries are linked, not copied: no
                template design, code, image or branding from Figma Community, Webflow or Jitter appears on
                this site, and Figma&apos;s listing showed no licence wording, so each file must be checked on
                its own page before reuse.
              </p>
              <p>
                All motion on this page is static when you prefer reduced motion. The ticker pauses on hover
                and focus, the carousel pauses on hover and focus, the cursor ring never replaces your native
                cursor, and no essential text depends on an animation.
              </p>
            </div>
          </Reveal>
        </div>
      </main>

      <footer className="border-t bg-slate-950 px-4 py-10 text-slate-300 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-2xl font-extrabold tracking-tight text-white">FEA<span className="text-lime-300">UTURES</span></p>
          <p className="mt-2 max-w-2xl text-sm">Design ideas, layouts and effects, studied from five sources and built live with the free Motion library. Motion+ is paid and was not used.</p>
          <p className="mt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} Cheppali Habeeb · Code: <a href="https://github.com/habeebc84-create/FEAUTURES" target="_blank" rel="noreferrer" className="underline">github.com/habeebc84-create/FEAUTURES</a> · Sources linked in the Sources section.
          </p>
        </div>
      </footer>
    </div>
  );
}
