import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  AnimatePresence,
  animate,
  motion,
  useAnimationControls,
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
      className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full border-2 border-lime-500"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: hovering ? 44 : 28, height: hovering ? 44 : 28, opacity: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    />
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
  const controls = useAnimationControls();
  const [paused, setPaused] = useState(false);
  const row = items.map((item) => (
    <span key={item} className="flex shrink-0 items-center gap-3 px-4 text-sm font-semibold text-slate-900">
      {item} <span aria-hidden="true" className="text-emerald-600">•</span>
    </span>
  ));
  useEffect(() => {
    if (reduce || paused) { controls.stop(); return; }
    controls.start({ x: ['0%', '-50%'], transition: { repeat: Infinity, ease: 'linear', duration: Math.max(12, items.length * 2.5) } });
  }, [reduce, paused, controls, items.length]);
  if (reduce) {
    return <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 px-4 py-2 text-center text-sm font-semibold text-slate-900">{items.join(' · ')}</p>;
  }
  return (
    <div
      className="overflow-hidden border-y border-slate-200 bg-lime-100/70 py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <span className="sr-only">{items.join(', ')}</span>
      <motion.div aria-hidden="true" className="flex w-max" animate={controls}>
        {row}{row}
      </motion.div>
    </div>
  );
}

export type CarouselPhoto = { src: string; alt: string };

export function Carousel({ photos, intervalMs = 4000 }: { photos: CarouselPhoto[]; intervalMs?: number }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = photos.length;
  useEffect(() => {
    if (reduce || paused || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [reduce, paused, count, intervalMs]);
  const photo = photos[index];
  const go = (next: number) => setIndex(((next % count) + count) % count);
  return (
    <div
      className="relative overflow-hidden rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative h-72 w-full sm:h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover" />
            {!reduce && (
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex">
                <motion.span className="flex-1 bg-slate-950" style={{ originX: 0 }} initial={{ scaleX: 1 }} animate={{ scaleX: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} />
                <motion.span className="flex-1 bg-slate-950" style={{ originX: 1 }} initial={{ scaleX: 1 }} animate={{ scaleX: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} />
              </span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="sr-only" aria-live="polite">{photo.alt}</p>
      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
        <button type="button" onClick={() => go(index - 1)} aria-label="Previous photo" className="rounded-full bg-black/50 px-2.5 py-1 text-sm font-bold text-white">‹</button>
        {photos.map((p, i) => (
          <button key={p.alt} type="button" onClick={() => go(i)} aria-label={`Show photo ${i + 1}: ${p.alt}`} aria-current={i === index} className={`h-2 rounded-full ${i === index ? 'w-5 bg-white' : 'w-2 bg-white/60'}`} />
        ))}
        <button type="button" onClick={() => go(index + 1)} aria-label="Next photo" className="rounded-full bg-black/50 px-2.5 py-1 text-sm font-bold text-white">›</button>
      </div>
    </div>
  );
}

export function AnimatedNumber({ value, format, suffix = '' }: { value: number; format: (n: number) => string; suffix?: string }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        if (reduce) { setDisplay(value); return; }
        const controls = animate(0, value, { duration: 1.2, ease: 'easeOut', onUpdate: (v) => setDisplay(v) });
        return () => controls.stop();
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, reduce]);
  return <span ref={ref}>{format(Math.round(display))}{suffix}</span>;
}

export type GalleryItem = { id: string; name: string; description: string; imageUrl: string; group: string };

export function Gallery({ items }: { items: GalleryItem[] }) {
  const reduce = useReducedMotion();
  const [group, setGroup] = useState('All');
  const groups = ['All', ...Array.from(new Set(items.map((i) => i.group)))];
  const shown = group === 'All' ? items : items.filter((i) => i.group === group);
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
        {groups.map((g) => (
          <button key={g} type="button" onClick={() => setGroup(g)} aria-pressed={group === g} className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${group === g ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300'}`}>{g}</button>
        ))}
      </div>
      <motion.div layout className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
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
              <img src={item.imageUrl} alt={`${item.name} — sample photo`} loading="lazy" className="h-32 w-full object-cover sm:h-40" />
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
