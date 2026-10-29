import { useState } from 'react';

/*
 * Free-to-use starter code: original snippets written for this site,
 * released under this repo's MIT licence (see LICENSE). Copy any of them
 * into your own project. Nothing here is copied from a template library:
 * the libraries themselves (Motion, GSAP, Anime.js, Lenis, Tailwind) keep
 * their own licences — see the Open Source section.
 */

export type FreeSnippet = {
  id: string;
  title: string;
  use: string;
  language: string;
  code: string;
};

export const FREE_SNIPPETS: FreeSnippet[] = [
  {
    id: 'ticker',
    title: 'Scrolling ticker (CSS only)',
    use: 'The ticker strip at the top of this page. Duplicated content, one keyframe, pauses on hover/focus, static text when reduced motion is on.',
    language: 'CSS + JSX',
    code: `/* CSS */
@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.ticker-track {
  animation: ticker-scroll 30s linear infinite;
}
.ticker-wrap:hover .ticker-track,
.ticker-wrap:focus-within .ticker-track {
  animation-play-state: paused;
}

/* JSX — render the row twice for a seamless loop */
<div className="ticker-wrap overflow-hidden">
  <span className="sr-only">{items.join(', ')}</span>
  <div aria-hidden="true" className="ticker-track flex w-max">
    {row}{row}
  </div>
</div>`,
  },
  {
    id: 'motion-reveal',
    title: 'Scroll reveal with free Motion',
    use: 'Sections fade and rise once as they enter view. Free MIT Motion library only — no Motion+.',
    language: 'React + Motion',
    code: `import { motion } from "motion/react";

<motion.section
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {/* your content */}
</motion.section>`,
  },
  {
    id: 'gsap-timeline',
    title: 'GSAP timeline with stagger',
    use: 'The timeline demo in the Open Source section. Plays on a button, resets cleanly. GSAP is free under the GreenSock standard licence.',
    language: 'React + GSAP',
    code: `import gsap from "gsap";

const timeline = gsap.timeline({ paused: true })
  .from(".tile", {
    y: 40, opacity: 0, rotate: -4,
    duration: 0.6, ease: "power3.out", stagger: 0.08,
  });

timeline.play(0);   // play from the start
timeline.pause(0);  // reset`,
  },
  {
    id: 'anime-stagger',
    title: 'Anime.js stagger',
    use: 'The dot stagger demo in the Open Source section. Anime.js 4, MIT.',
    language: 'JavaScript + Anime.js',
    code: `import { animate, stagger } from "animejs";

animate(document.querySelectorAll(".dot"), {
  scale: [1, 1.7, 1],
  rotate: [0, 90, 0],
  duration: 700,
  delay: stagger(60),
  ease: "outExpo",
});`,
  },
  {
    id: 'lenis',
    title: 'Lenis smooth scroll',
    use: 'The smooth scrolling on this page. Skipped entirely when the user prefers reduced motion. Lenis 1.3, MIT.',
    language: 'TypeScript + Lenis',
    code: `import Lenis from "lenis";

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  // Jump to a section: lenis.scrollTo("#sources", { offset: -80 });
}`,
  },
  {
    id: 'tokens',
    title: 'Design tokens (CSS)',
    use: 'This page’s real tokens from DESIGN.md. Paste into your stylesheet and change the values in one place.',
    language: 'CSS',
    code: `:root {
  --font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
  --ink: #0f172a;
  --text-secondary: #475569;
  --accent: #bef264;
  --accent-strong: #a3e635;
  --deep-green: #022c22;
  --border: #e2e8f0;
  --radius-card: 1rem;
  --radius-pill: 9999px;
}

body { font-family: var(--font-sans); color: var(--ink); }
::selection { background: var(--accent); color: var(--deep-green); }`,
  },
  {
    id: 'bento',
    title: 'Bento grid layout (Tailwind)',
    use: 'The bento wireframe from the Layouts section, as real markup. Swap the blocks for your own content.',
    language: 'HTML + Tailwind',
    code: `<div class="grid grid-cols-3 gap-3">
  <div class="col-span-2 rounded-2xl bg-slate-900 p-5 text-white">
    <h2>Main feature</h2>
    <p>One idea, explained well.</p>
  </div>
  <div class="rounded-2xl border border-slate-200 p-5">
    <h3>Second</h3>
  </div>
  <div class="rounded-2xl border border-slate-200 p-5">
    <h3>Third</h3>
  </div>
  <div class="col-span-2 rounded-2xl bg-lime-300 p-5">
    <h3>Call to action</h3>
  </div>
</div>`,
  },
  {
    id: 'reduced-motion',
    title: 'Reduced-motion safety net (CSS)',
    use: 'The safety net from this site’s stylesheet. Every animation collapses when the user prefers reduced motion.',
    language: 'CSS',
    code: `@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`,
  },
];

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="rounded-full bg-slate-900 px-4 py-1.5 text-sm font-semibold text-white"
    >
      {copied ? 'Copied ✓' : 'Copy'}
    </button>
  );
}

export type EffectCode = { id: string; title: string; code: string };

export const EFFECT_CODES: EffectCode[] = [
  {
    id: 'splitText',
    title: 'splitText',
    code: `import { motion, useReducedMotion } from "motion/react";

function SplitHeading({ words }) {
  const reduce = useReducedMotion();
  return (
    <h1>
      <span className="sr-only">{words.join(" ")}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 * i }}
          >
            {w}&nbsp;
          </motion.span>
        ))}
      </span>
    </h1>
  );
}`,
  },
  {
    id: 'AnimateText',
    title: 'AnimateText',
    code: `import { motion, useReducedMotion } from "motion/react";

// One heading, revealed letter by letter. Under reduced motion it
// renders as plain text — the heading is never hidden behind motion.
function AnimateText({ text }) {
  const reduce = useReducedMotion();
  if (reduce) return <h2>{text}</h2>;
  return (
    <h2 aria-label={text}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.02 }}
        >
          {c === " " ? "\\u00A0" : c}
        </motion.span>
      ))}
    </h2>
  );
}`,
  },
  {
    id: 'AnimateView',
    title: 'AnimateView',
    code: `import { motion, useReducedMotion } from "motion/react";

// Reveal once, when the section scrolls into view.
function Reveal({ children }) {
  const reduce = useReducedMotion();
  if (reduce) return <section>{children}</section>;
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}`,
  },
  {
    id: 'Typewriter',
    title: 'Typewriter',
    code: `// Type one phrase, delete it, type the next. Plain text is
// always in the DOM for screen readers; the animation only
// changes which slice is shown.
const [index, setIndex] = useState(0);
const [shown, setShown] = useState("");
useEffect(() => {
  const phrase = phrases[index % phrases.length];
  if (shown.length < phrase.length) {
    const id = setTimeout(() => setShown(phrase.slice(0, shown.length + 1)), 55);
    return () => clearTimeout(id);
  }
  const id = setTimeout(() => {
    setShown("");
    setIndex((i) => i + 1);
  }, 1600);
  return () => clearTimeout(id);
}, [shown, index]);`,
  },
  {
    id: 'ScrambleText',
    title: 'ScrambleText',
    code: `// Settle one character at a time from random glyphs into the
// final text. Re-runs on hover. Static under reduced motion.
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&";
useEffect(() => {
  const start = Date.now();
  const id = setInterval(() => {
    const progress = Math.min(1, (Date.now() - start) / 700);
    const settled = Math.floor(progress * text.length);
    setDisplay(
      text.split("").map((c, i) =>
        i < settled || c === " " ? c : CHARS[Math.floor(Math.random() * CHARS.length)]
      ).join("")
    );
    if (progress >= 1) clearInterval(id);
  }, 30);
  return () => clearInterval(id);
}, [run, text]);`,
  },
  {
    id: 'Cursor',
    title: 'Cursor',
    code: `import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

// Spring ring that trails the pointer. Desktop fine-pointer
// only, native cursor kept, nothing rendered under reduced motion.
// The ring is centred by an INNER element — never put the spring
// position and a -50% translate on the same element.
const x = useMotionValue(-100);
const y = useMotionValue(-100);
const springX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.6 });
const springY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.6 });
useEffect(() => {
  const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
  window.addEventListener("pointermove", move);
  return () => window.removeEventListener("pointermove", move);
}, [x, y]);

<motion.div className="pointer-events-none fixed left-0 top-0 z-[90]"
  style={{ x: springX, y: springY }} aria-hidden="true">
  <motion.div className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime-500"
    animate={{ width: hovering ? 44 : 28, height: hovering ? 44 : 28 }} />
</motion.div>`,
  },
  {
    id: 'carousel',
    title: 'Carousel + Curtains',
    code: `import { AnimatePresence, motion } from "motion/react";

// Auto-advance, pause on hover/focus, curtain panels parting
// from the centre on every slide change.
const [index, setIndex] = useState(0);
useEffect(() => {
  if (reduce || paused) return;
  const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
  return () => clearInterval(id);
}, [reduce, paused]);

<AnimatePresence mode="wait">
  <motion.div key={slide.id}
    initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
    {slide.node}
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex">
      <motion.span className="flex-1 bg-slate-950" style={{ originX: 0 }}
        initial={{ scaleX: 1 }} animate={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} />
      <motion.span className="flex-1 bg-slate-950" style={{ originX: 1 }}
        initial={{ scaleX: 1 }} animate={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} />
    </span>
  </motion.div>
</AnimatePresence>`,
  },
  {
    id: 'neu-glass',
    title: 'Neu-Glass (mixed blur)',
    code: `/* Layered depth: one blurred panel, one sharper panel, one
   solid panel — depth from blur steps, not from shadows. */
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-950 p-6">
  <div className="rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur-md">
    <p className="text-white">Blur 12px · 10% white</p>
  </div>
  <div className="mt-3 rounded-2xl border border-white/20 bg-white/25 p-5 backdrop-blur-sm">
    <p className="text-white">Blur 4px · 25% white</p>
  </div>
  <div className="mt-3 rounded-2xl bg-white p-5">
    <p className="text-slate-900">Solid · no blur</p>
  </div>
</div>`,
  },
];

export type FrameworkGuide = { framework: string; install: string; steps: string[] };

export const FRAMEWORK_GUIDES: FrameworkGuide[] = [
  {
    framework: 'React + Vite (this site)',
    install: 'npm install motion',
    steps: [
      'Copy a component from the Free to Use section into src/.',
      'Import it: import { CursorFollower } from "./effects".',
      'Render it once, near the top of your app. No provider or setup file is needed.',
      'Keep the reduced-motion checks: every component here returns static content when the user prefers reduced motion.',
    ],
  },
  {
    framework: 'Next.js (App Router)',
    install: 'npm install motion',
    steps: [
      'Motion, GSAP, Anime.js and Lenis are client-only: put "use client" at the top of any file that imports them.',
      'Keep them out of Server Components. A server-rendered page can import a small client component that owns the animation.',
      'Lenis must be created in a useEffect (it touches window). Never create it during server rendering.',
      'Reduced motion: the same useReducedMotion checks work unchanged in a client component.',
    ],
  },
  {
    framework: 'Vue',
    install: 'npm install motion-v',
    steps: [
      'Vue uses motion-v, the Vue build of Motion: import { motion } from "motion-v".',
      'The same props apply: initial, animate, whileInView, AnimatePresence.',
      'For GSAP and Anime.js, install gsap / animejs and run them in onMounted, cleaning up in onUnmounted.',
      'Lenis: create it in onMounted and destroy it in onUnmounted.',
    ],
  },
  {
    framework: 'Plain HTML + JavaScript',
    install: 'No install — use the CDN builds',
    steps: [
      'Motion (vanilla): import { animate } from "motion" — animate(".card", { opacity: [0, 1], y: [16, 0] }).',
      'GSAP + ScrollTrigger: load both CDN scripts, then gsap.registerPlugin(ScrollTrigger).',
      'Anime.js: animate(targets, { scale: [1, 1.5], delay: stagger(60) }).',
      'Lenis: new Lenis({ lerp: 0.1 }) with a requestAnimationFrame loop. Skip it when matchMedia("(prefers-reduced-motion: reduce)").matches.',
      'Ticker and Neu-Glass need no JavaScript at all — copy the CSS from the Free to Use section.',
    ],
  },
];

export const FREE_TO_USE_NOTE =
  'Everything in this section is original code from this repo, MIT-licensed (see LICENSE). ' +
  'The libraries it uses keep their own licences: Motion MIT, GSAP GreenSock standard licence, ' +
  'Anime.js MIT, Lenis MIT, Tailwind MIT. Template designs from Figma, Webflow and Jitter are ' +
  'NOT included — use those inside their own tools, under their own terms.';
