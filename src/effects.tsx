import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react';

/*
 * Original effect components built with the free, MIT-licensed `motion`
 * library (v14). They are equivalents of the Motion+ ideas in the
 * motion.dev/plus table — Gallery, Carousel, Ticker, Cursor,
 * AnimateNumber, AnimateText, Typewriter, ScrambleText, AnimateView,
 * Curtains and splitText — written here from the public Motion docs
 * (motion values, springs, animate, whileInView, AnimatePresence).
 * Motion+ itself is a paid membership; no Motion+ source, private
 * GitHub, or paid API is used here. Every effect is static when the
 * user prefers reduced motion.
 */

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  if (reduce) return null;
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[80] h-1 origin-left bg-lime-400" style={{ scaleX }} />;
}

export function CursorFollower() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.6 });
  useEffect(() => {
    if (reduce || typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => setHovering(!!(e.target as Element).closest?.('a, button, input, select, [role="button"]'));
    window.addEventListener('pointermove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('mouseover', over); };
  }, [reduce, x, y]);
  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90]"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime-500"
        animate={{ width: hovering ? 44 : 28, height: hovering ? 44 : 28, opacity: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />
    </motion.div>
  );
}

export function Reveal({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <section id={id} className={className}>{children}</section>;
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

export function SplitHeading({ words, className = '' }: { words: { text: string; accent?: boolean }[]; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <h1 className={className}>
        {words.map((w, i) => (
          <span key={i} className={w.accent ? 'text-lime-300' : undefined}>{w.text} </span>
        ))}
      </h1>
    );
  }
  return (
    <h1 className={className}>
      <span className="sr-only">{words.map((w) => w.text).join(' ')}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <motion.span
            key={i}
            className={`inline-block ${w.accent ? 'text-lime-300' : ''}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 * i, ease: 'easeOut' }}
          >
            {w.text}&nbsp;
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

export function AnimateText({ text, className = '' }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <h2 className={className}>{text}</h2>;
  return (
    <h2 className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split('').map((c, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.025 * i, ease: 'easeOut' }}
          >
            {c === ' ' ? '\u00A0' : c}
          </motion.span>
        ))}
      </span>
    </h2>
  );
}

export function Typewriter({ phrases, className = '' }: { phrases: string[]; className?: string }) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(phrases[0]);
  useEffect(() => {
    if (reduce) { setText(phrases[0]); return; }
    let phrase = 0;
    let char = phrases[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const current = phrases[phrase];
      if (deleting) {
        char -= 1;
        setText(current.slice(0, Math.max(0, char)));
        if (char <= 0) { deleting = false; phrase = (phrase + 1) % phrases.length; timer = setTimeout(tick, 350); return; }
        timer = setTimeout(tick, 35);
      } else {
        char += 1;
        setText(phrases[phrase].slice(0, char));
        if (char >= phrases[phrase].length) { deleting = true; timer = setTimeout(tick, 1600); return; }
        timer = setTimeout(tick, 70);
      }
    };
    timer = setTimeout(tick, 1600);
    return () => clearTimeout(timer);
  }, [phrases, reduce]);
  return (
    <p className={className}>
      <span className="sr-only">{phrases.join(', ')}</span>
      <span aria-hidden="true">{text}<span className="animate-pulse">|</span></span>
    </p>
  );
}

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&';

export function ScrambleText({ text, accentFrom = -1, className = '' }: { text: string; accentFrom?: number; className?: string }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(text);
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (reduce || run === 0) { setDisplay(text); return; }
    const start = Date.now();
    const id = setInterval(() => {
      const progress = Math.min(1, (Date.now() - start) / 700);
      const settled = Math.floor(progress * text.length);
      setDisplay(text.split('').map((c, i) => (i < settled || c === ' ' ? c : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)])).join(''));
      if (progress >= 1) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [run, text, reduce]);
  useEffect(() => { setRun(1); }, []);
  return (
    <span className={className} onMouseEnter={() => setRun((r) => r + 1)}>
      {display.split('').map((c, i) => (
        <span key={i} className={accentFrom >= 0 && i >= accentFrom ? 'text-lime-300' : undefined}>{c === ' ' ? '\u00A0' : c}</span>
      ))}
    </span>
  );
}

export function TickerStrip({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const row = items.map((item) => (
    <span key={item} className="flex shrink-0 items-center gap-3 px-4 text-sm font-semibold text-slate-950">
      {item} <span aria-hidden="true" className="text-emerald-600">•</span>
    </span>
  ));
  if (reduce) {
    return <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 px-4 py-2 text-center text-sm font-semibold text-slate-950">{items.join(' · ')}</p>;
  }
  return (
    <div className="ticker-wrap overflow-hidden border-y border-slate-200 bg-lime-100/70 py-2">
      <span className="sr-only">{items.join(', ')}</span>
      <div
        aria-hidden="true"
        className="ticker-track flex w-max"
        style={{ animationDuration: `${Math.max(12, items.length * 2.5)}s` }}
      >
        {row}{row}
      </div>
    </div>
  );
}

export type StyleSlide = { id: string; label: string; node: ReactNode };

export function StyleCarousel({ slides, intervalMs = 4000 }: { slides: StyleSlide[]; intervalMs?: number }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  useEffect(() => {
    if (reduce || paused || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [reduce, paused, count, intervalMs]);
  const slide = slides[index];
  const go = (next: number) => setIndex(((next % count) + count) % count);
  return (
    <div
      className="relative overflow-hidden rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative min-h-72 w-full sm:min-h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {slide.node}
            {!reduce && (
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex">
                <motion.span className="flex-1 bg-slate-950" style={{ originX: 0 }} initial={{ scaleX: 1 }} animate={{ scaleX: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} />
                <motion.span className="flex-1 bg-slate-950" style={{ originX: 1 }} initial={{ scaleX: 1 }} animate={{ scaleX: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} />
              </span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="sr-only" aria-live="polite">{slide.label}</p>
      <div className="absolute inset-x-0 bottom-3 flex justify-center">
        <div className="flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1.5 backdrop-blur">
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous style" className="rounded-full bg-white/15 px-3.5 py-1.5 text-base font-bold text-white ring-1 ring-white/30">‹</button>
          {slides.map((sl, i) => (
            <button key={sl.id} type="button" onClick={() => go(i)} aria-label={`Show style ${i + 1}: ${sl.label}`} aria-current={i === index} className={`h-2.5 rounded-full ${i === index ? 'w-6 bg-white' : 'w-2.5 bg-white/60'}`} />
          ))}
          <button type="button" onClick={() => go(index + 1)} aria-label="Next style" className="rounded-full bg-white/15 px-3.5 py-1.5 text-base font-bold text-white ring-1 ring-white/30">›</button>
        </div>
      </div>
    </div>
  );
}

export type LayoutItem = { id: string; name: string; use: string; description: string; kind: 'hero' | 'bento' | 'split' | 'editorial' | 'dashboard' | 'pricing' | 'portfolio' | 'product' | 'video' | 'pricingfaq' | 'docs' | 'blog' };

function Wireframe({ kind }: { kind: LayoutItem['kind'] }) {
  const bar = 'rounded bg-slate-200';
  const dark = 'rounded bg-slate-800';
  const accent = 'rounded bg-lime-300';
  const line = 'h-2 rounded bg-slate-200';
  switch (kind) {
    case 'hero':
      return <div className="space-y-2 p-3"><div className={`${dark} h-5 w-3/4`} /><div className={`${line} w-1/2`} /><div className={`${line} w-2/3`} /><div className={`${accent} h-6 w-24`} /></div>;
    case 'bento':
      return <div className="grid grid-cols-3 gap-2 p-3"><div className={`${dark} col-span-2 h-12`} /><div className={`${bar} h-12`} /><div className={`${bar} h-12`} /><div className={`${accent} col-span-2 h-12`} /></div>;
    case 'split':
      return <div className="flex gap-2 p-3"><div className={`${dark} h-16 flex-1`} /><div className="flex-1 space-y-2"><div className={line} /><div className={line} /><div className={`${accent} h-6 w-20`} /></div></div>;
    case 'editorial':
      return <div className="space-y-2 p-3"><div className={`${dark} h-6 w-2/3`} /><div className="flex gap-2"><div className="flex-1 space-y-1.5"><div className={line} /><div className={line} /><div className={line} /></div><div className="flex-1 space-y-1.5"><div className={line} /><div className={line} /><div className={line} /></div></div></div>;
    case 'dashboard':
      return <div className="flex gap-2 p-3"><div className={`${dark} w-8 rounded`} /><div className="flex-1 space-y-2"><div className="flex items-end gap-1.5"><div className={`${accent} h-6 w-4`} /><div className={`${accent} h-10 w-4`} /><div className={`${accent} h-8 w-4`} /><div className={`${accent} h-12 w-4`} /></div><div className={line} /></div></div>;
    case 'pricing':
      return <div className="flex items-end gap-2 p-3"><div className={`${bar} h-12 flex-1`} /><div className={`${dark} h-16 flex-1`} /><div className={`${bar} h-12 flex-1`} /></div>;
    case 'portfolio':
      return <div className="grid grid-cols-3 gap-2 p-3"><div className={`${dark} h-12`} /><div className={`${bar} h-12`} /><div className={`${bar} h-12`} /><div className={`${line} col-span-3`} /></div>;
    case 'product':
      return <div className="space-y-2 p-3"><div className={`${dark} h-12`} /><div className="flex gap-2"><div className={`${bar} h-6 flex-1`} /><div className={`${bar} h-6 flex-1`} /><div className={`${bar} h-6 flex-1`} /></div></div>;
    case 'video':
      return <div className="space-y-2 p-3"><div className={`${dark} flex h-14 items-center justify-center`}><span className={`${accent} flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-black text-slate-900`}>▶</span></div><div className={`${line} w-2/3`} /><div className={`${line} w-1/3`} /></div>;
    case 'pricingfaq':
      return <div className="space-y-2 p-3"><div className="flex gap-2"><div className={`${bar} h-8 flex-1`} /><div className={`${dark} h-8 flex-1`} /></div><div className={line} /><div className={line} /><div className={`${line} w-2/3`} /></div>;
    case 'docs':
      return <div className="flex gap-2 p-3"><div className="w-10 space-y-1.5"><div className={line} /><div className={line} /><div className={`${accent} h-2 w-6`} /><div className={line} /></div><div className="flex-1 space-y-2"><div className={`${dark} h-4 w-1/2`} /><div className={line} /><div className={line} /><div className={`${line} w-2/3`} /></div></div>;
    case 'blog':
      return <div className="space-y-2 p-3">{[0, 1, 2].map((i) => (<div key={i} className="flex items-center gap-2"><div className={`${i === 0 ? dark : bar} h-6 w-10 shrink-0`} /><div className="flex-1 space-y-1"><div className={line} /><div className={`${line} w-2/3`} /></div></div>))}</div>;
  }
}

export function LayoutShowcase({ items }: { items: LayoutItem[] }) {
  const reduce = useReducedMotion();
  const [use, setUse] = useState('All');
  const uses = ['All', ...Array.from(new Set(items.map((i) => i.use)))];
  const shown = use === 'All' ? items : items.filter((i) => i.use === use);
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter layouts by use">
        {uses.map((u) => (
          <button key={u} type="button" onClick={() => setUse(u)} aria-pressed={use === u} className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${use === u ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300'}`}>{u}</button>
        ))}
      </div>
      <motion.div layout className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {shown.map((item) => (
            <motion.figure
              key={item.id}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div aria-hidden="true" className="border-b border-slate-100 bg-slate-50"><Wireframe kind={item.kind} /></div>
              <figcaption className="p-3">
                <span className="block font-bold">{item.name}</span>
                <span className="mt-0.5 block text-sm text-slate-500">{item.description}</span>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export function AnimatedNumber({ value, format, suffix = '' }: { value: number; format: (n: number) => string; suffix?: string }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        if (reduce) { setDisplay(value); return; }
        controlsRef.current = animate(0, value, { duration: 1.2, ease: 'easeOut', onUpdate: (v) => setDisplay(v) });
      },
      { threshold: 0.4 },

    );
    observer.observe(el);
    return () => { observer.disconnect(); controlsRef.current?.stop(); };
  }, [value, reduce]);
  return <span ref={ref}>{format(Math.round(display))}{suffix}</span>;
}

export function NeuGlassDemo() {
  return (
    <div>
      <h3 className="text-xl font-bold">Neu-Glass: depth from mixed blur</h3>
      <p className="mt-1 text-sm text-slate-600">
        Three panels over one gradient: heavy blur, light blur, solid. The depth comes from blur
        steps, not from shadows. The code is in the Free to Use section.
      </p>
      <div className="relative mt-4 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-950 p-6">
        <div className="rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur-md">
          <p className="font-semibold text-white">Blur 12px · 10% white</p>
          <p className="text-sm text-white/80">Farthest back. Readable only for large text.</p>
        </div>
        <div className="mt-3 rounded-2xl border border-white/20 bg-white/25 p-5 backdrop-blur-sm">
          <p className="font-semibold text-white">Blur 4px · 25% white</p>
          <p className="text-sm text-white/80">Middle layer. Keep text short and bold here.</p>
        </div>
        <div className="mt-3 rounded-2xl bg-white p-5">
          <p className="font-semibold text-slate-900">Solid · no blur</p>
          <p className="text-sm text-slate-600">Actions and small text go on the solid panel, never on blur.</p>
        </div>
      </div>
    </div>
  );
}

const BENTO_TILES = [
  { id: 'main', title: 'Main feature', body: 'One idea, explained well. Click another tile to move the focus.', span: 2 },
  { id: 'stats', title: 'Stats', body: '13 trends · 9 styles · 12 layouts', span: 1 },
  { id: 'motion', title: 'Motion', body: 'Springs, stagger, scrub.', span: 1 },
  { id: 'cta', title: 'Start building', body: 'Pick a style, a layout, one effect.', span: 2 },
];

export function InteractiveBento() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState('main');
  return (
    <div>
      <h3 className="mt-10 text-xl font-bold">Interactive Bento: click a tile, the grid morphs</h3>
      <p className="mt-1 text-sm text-slate-600">
        The active tile grows to two columns with a spring layout animation. Under reduced motion
        the tiles simply swap size with no animation.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {BENTO_TILES.map((t) => {
          const isActive = active === t.id;
          return (
            <motion.button
              key={t.id}
              type="button"
              layout={!reduce}
              onClick={() => setActive(t.id)}
              aria-pressed={isActive}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`rounded-2xl border p-5 text-left shadow-sm ${isActive ? 'col-span-2 border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white'}`}
            >
              <span className="block font-bold">{t.title}</span>
              <span className={`mt-1 block text-sm ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>{t.body}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
