import {
  AnimateText,
  AnimatedNumber,
  Carousel,
  CursorFollower,
  Gallery,
  Reveal,
  ScrambleText,
  ScrollProgress,
  SplitHeading,
  TickerStrip,
  Typewriter,
} from './effects';

const UNSPLASH = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const PHOTOS = [
  { src: UNSPLASH('1596040033229-a9821ebd058d'), alt: 'Groceries market shelves — sample photo' },
  { src: UNSPLASH('1540420773420-3366772f4999'), alt: 'Fresh vegetables — sample photo' },
  { src: UNSPLASH('1610832958506-aa56368176cf'), alt: 'Fresh fruit — sample photo' },
  { src: UNSPLASH('1587593810167-a84920ea0781'), alt: 'Meat counter — sample photo' },
  { src: UNSPLASH('1550583724-b2692b85b150'), alt: 'Dairy products — sample photo' },
  { src: UNSPLASH('1509440159596-0249088772ff'), alt: 'Bakery bread — sample photo' },
];

const GALLERY_ITEMS = [
  { id: 'groceries', name: 'Groceries', description: 'Everyday staples', imageUrl: UNSPLASH('1596040033229-a9821ebd058d'), group: 'Food' },
  { id: 'vegetables', name: 'Vegetables', description: 'Fresh and seasonal', imageUrl: UNSPLASH('1540420773420-3366772f4999'), group: 'Fresh' },
  { id: 'fruits', name: 'Fruits', description: 'Sweet and ripe', imageUrl: UNSPLASH('1610832958506-aa56368176cf'), group: 'Fresh' },
  { id: 'meat', name: 'Meat', description: 'Quality cuts', imageUrl: UNSPLASH('1587593810167-a84920ea0781'), group: 'Fresh' },
  { id: 'fish', name: 'Fish', description: 'Fresh catch', imageUrl: UNSPLASH('1615141982883-c7ad0e69fd62'), group: 'Fresh' },
  { id: 'dairy', name: 'Dairy', description: 'Milk, curd and more', imageUrl: UNSPLASH('1550583724-b2692b85b150'), group: 'Fresh' },
  { id: 'bakery', name: 'Bakery', description: 'Baked daily', imageUrl: UNSPLASH('1509440159596-0249088772ff'), group: 'Food' },
  { id: 'hotel-food', name: 'Hotel Food', description: 'Meals and biryani', imageUrl: UNSPLASH('1563379091339-03b21ab4a4f8'), group: 'Food' },
  { id: 'beverages', name: 'Beverages', description: 'Drinks and juices', imageUrl: UNSPLASH('1613478223719-2ab802602423'), group: 'Food' },
  { id: 'household', name: 'Household', description: 'Cleaning and care', imageUrl: UNSPLASH('1563453392212-326f5e854473'), group: 'Daily essentials' },
  { id: 'personal', name: 'Personal Care', description: 'Everyday care', imageUrl: UNSPLASH('1556228720-195a672e8a03'), group: 'Daily essentials' },
  { id: 'other', name: 'Other Essentials', description: 'And everything else', imageUrl: UNSPLASH('1604719312566-8912e9227c6a'), group: 'Daily essentials' },
];

const RESOURCES = [
  {
    name: 'Figma — Top Web Design Trends 2026',
    url: 'https://www.figma.com/resource-library/web-design-trends/',
    text: 'Official Figma guide: 13 key trends (3D/immersive, experimental navigation, vibrant colours, bold typography, dark mode, motion, gamification, neumorphism, retrofuturism, maximalism, collage, neo-brutalism, sustainable design) plus AI trends.',
  },
  {
    name: 'Refero Styles',
    url: 'https://styles.refero.design/',
    text: 'Library of 2,000+ real product design systems. Each style comes with colours, typography, spacing, components, and a ready-to-use DESIGN.md file for AI tools.',
  },
  {
    name: 'Tilda — Popular Web Design Styles',
    url: 'https://tilda.education/en/web-design-styles',
    text: 'Clear guide to core styles: Minimalism, Brutalism/Neobrutalism, Constructivism, Swiss, Editorial, Hand-drawn, Retro, Flat, and Bento. Explains when to use each.',
  },
  {
    name: 'UI/UX Pro Max',
    url: 'https://www.uupm.cc/#features',
    text: 'AI design database with 57+ UI styles, 95 colour palettes, font pairings, landing patterns, and UX guidelines. Generates style and code recommendations from prompts.',
  },
  {
    name: 'Dribbble — Website Templates',
    url: 'https://dribbble.com/tags/website-template',
    text: 'Visual inspiration from real designer work and website templates. Inspiration only — never copy shots, branding, or code.',
  },
];

const NAV = [
  { href: '#effects', label: 'Effects' },
  { href: '#carousel', label: 'Carousel' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#numbers', label: 'Numbers' },
  { href: '#resources', label: 'Resources' },
  { href: '#honesty', label: 'Honesty' },
];

function SectionHeading({ children }: { children: string }) {
  return <AnimateText text={children} className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl" />;
}

function Note({ children }: { children: React.ReactNode }) {
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
        {/* Hero */}
        <section id="top" className="bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-widest text-lime-300">
              <ScrambleText text="Motion effects, live" />
            </p>
            <SplitHeading
              className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl"
              words={[{ text: 'Every' }, { text: 'effect,' }, { text: 'built' }, { text: 'and' }, { text: 'working.', accent: true }]}
            />
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              The Motion+ feature table, rebuilt as original equivalents with the free Motion library.
              Nothing here is Motion+ source, and nothing here is a fake demo — every control on this page works.
            </p>
            <Typewriter
              className="mt-4 text-lg font-semibold text-lime-200"
              phrases={['Gallery', 'Carousel', 'Ticker', 'Cursor', 'AnimateNumber', 'Typewriter', 'ScrambleText', 'Curtains', 'splitText']}
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#effects" className="rounded-full bg-lime-400 px-6 py-3 font-bold text-slate-950">See the effects ↓</a>
              <a href="#resources" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white">Design resources</a>
            </div>
            <p className="mt-6 text-sm text-slate-400">Scroll progress bar at the very top. Cursor ring follows your mouse on desktop. Both stop under reduced motion.</p>
          </div>
        </section>

        <TickerStrip items={['Gallery', 'Carousel', 'Ticker', 'Cursor', 'AnimateNumber', 'AnimateText', 'Typewriter', 'ScrambleText', 'AnimateView', 'Curtains', 'splitText', 'Reduced-motion safe']} />

        <div className="mx-auto max-w-6xl space-y-20 px-4 py-14 sm:px-6">
          {/* Effects overview */}
          <Reveal id="effects" className="scroll-mt-24">
            <SectionHeading>All the effects, in one place</SectionHeading>
            <Note>
              Each effect below is a live demo, built from the free Motion library&apos;s public primitives:
              motion values, springs, the <code>animate</code> function, <code>whileInView</code>, and{' '}
              <code>AnimatePresence</code>. Scroll down and try each one.
            </Note>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'splitText', text: 'The hero heading above fades in word by word.' },
                { title: 'AnimateText', text: 'Every section heading on this page reveals letter by letter.' },
                { title: 'AnimateView', text: 'Each section below reveals once as you scroll to it.' },
                { title: 'Typewriter', text: 'The hero line types, deletes, and types the next effect name.' },
                { title: 'ScrambleText', text: '“Motion effects, live” unscrambles on load. Hover it to scramble again.' },
                { title: 'Cursor', text: 'A spring ring follows your pointer and grows over buttons and links.' },
              ].map((c) => (
                <article key={c.title} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="font-bold">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{c.text}</p>
                </article>
              ))}
            </div>
          </Reveal>

          {/* Carousel + Curtains */}
          <Reveal id="carousel" className="scroll-mt-24">
            <SectionHeading>Carousel and Curtains</SectionHeading>
            <Note>
              The photo changes on its own every 4 seconds, pauses when you hover or focus it, and opens with
              two curtain panels parting from the centre. Use the previous, next, and dot controls — they all work.
            </Note>
            <div className="mt-6">
              <Carousel photos={PHOTOS} />
            </div>
            <p className="mt-3 text-sm text-slate-500">Sample photos, not photos of actual products.</p>
          </Reveal>

          {/* Gallery */}
          <Reveal id="gallery" className="scroll-mt-24">
            <SectionHeading>Gallery</SectionHeading>
            <Note>Filter the gallery. The tiles animate between filters with layout animation. Every photo is a sample photo.</Note>
            <div className="mt-6">
              <Gallery items={GALLERY_ITEMS} />
            </div>
          </Reveal>

          {/* Numbers */}
          <Reveal id="numbers" className="scroll-mt-24">
            <SectionHeading>AnimateNumber</SectionHeading>
            <Note>These numbers count up when they scroll into view. They count only real things on this page.</Note>
            <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 p-5 text-center">
                <dt className="text-sm font-medium text-slate-500">Effects demonstrated</dt>
                <dd className="mt-1 text-4xl font-extrabold"><AnimatedNumber value={11} format={(n) => `${n}`} /></dd>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 text-center">
                <dt className="text-sm font-medium text-slate-500">Gallery photos</dt>
                <dd className="mt-1 text-4xl font-extrabold"><AnimatedNumber value={GALLERY_ITEMS.length} format={(n) => `${n}`} /></dd>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 text-center">
                <dt className="text-sm font-medium text-slate-500">Design resources</dt>
                <dd className="mt-1 text-4xl font-extrabold"><AnimatedNumber value={RESOURCES.length} format={(n) => `${n}`} /></dd>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 text-center">
                <dt className="text-sm font-medium text-slate-500">Paid Motion+ source used</dt>
                <dd className="mt-1 text-4xl font-extrabold"><AnimatedNumber value={0} format={(n) => `${n}`} /></dd>
              </div>
            </dl>
          </Reveal>

          {/* Resources */}
          <Reveal id="resources" className="scroll-mt-24">
            <SectionHeading>Web design resources</SectionHeading>
            <Note>
              The five resources Habeeb sent. They guide design choices; they do not override the master prompt,
              and nothing from them is copied here. Open any of them in a new tab.
            </Note>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {RESOURCES.map((r) => (
                <article key={r.name} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="font-bold">
                    <a href={r.url} target="_blank" rel="noreferrer" className="underline decoration-emerald-600 decoration-2 underline-offset-4">{r.name} ↗</a>
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{r.text}</p>
                </article>
              ))}
            </div>
          </Reveal>

          {/* Honesty */}
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
                All motion on this page is static when you prefer reduced motion. The ticker and carousel pause on
                hover and focus, the cursor ring never replaces your native cursor, and no essential text depends
                on an animation.
              </p>
            </div>
          </Reveal>
        </div>
      </main>

      <footer className="border-t bg-slate-950 px-4 py-10 text-slate-300 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-2xl font-extrabold tracking-tight text-white">FEA<span className="text-lime-300">UTURES</span></p>
          <p className="mt-2 max-w-2xl text-sm">Motion effects, built live with the free Motion library. Motion+ is paid and was not used.</p>
          <p className="mt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} Cheppali Habeeb · Code: <a href="https://github.com/habeebc84-create/FEAUTURES" target="_blank" rel="noreferrer" className="underline">github.com/habeebc84-create/FEAUTURES</a> · Photos are samples.
          </p>
        </div>
      </footer>
    </div>
  );
}
