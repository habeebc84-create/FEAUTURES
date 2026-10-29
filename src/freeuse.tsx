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

export const FREE_TO_USE_NOTE =
  'Everything in this section is original code from this repo, MIT-licensed (see LICENSE). ' +
  'The libraries it uses keep their own licences: Motion MIT, GSAP GreenSock standard licence, ' +
  'Anime.js MIT, Lenis MIT, Tailwind MIT. Template designs from Figma, Webflow and Jitter are ' +
  'NOT included — use those inside their own tools, under their own terms.';
