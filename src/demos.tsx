import { useLayoutEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'motion/react';
import { smoothScrollTo } from './lenis';
import { CopyButton, FREE_SNIPPETS } from './freeuse';

gsap.registerPlugin(ScrollTrigger);

function Slider({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void }) {
  return (
    <label className="block text-sm text-slate-600">
      <span className="flex justify-between"><span>{label}</span><span className="font-semibold text-slate-900">{value}</span></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-slate-900" />
    </label>
  );
}

/*
 * Live demos for open-source animation libraries installed in this
 * project: GSAP 3.13 (free under the GreenSock standard licence),
 * Lenis 1.3 (MIT) and Anime.js 4.1 (MIT). Motion demos live in
 * effects.tsx. Everything here runs in the browser and does nothing
 * when the user prefers reduced motion. The sliders are a small
 * playground: they change the live animation values, no sandbox
 * or external embed is involved.
 */

export function GsapDemo() {
  const reduce = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [played, setPlayed] = useState(false);
  const [duration, setDuration] = useState(0.6);
  const [staggerMs, setStaggerMs] = useState(80);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    if (reduce || !root.current) return;
    const ctx = gsap.context(() => {
      timeline.current = gsap
        .timeline({ paused: true })
        .from('.gsap-tile', { y: 40, opacity: 0, rotate: -4, duration, ease: 'power3.out', stagger: staggerMs / 1000 });
      gsap.fromTo(
        bar.current,
        { scaleX: 0 },
        { scaleX: 1, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top 85%', end: 'bottom 40%', scrub: true } },
      );
    }, root);
    return () => ctx.revert();
  }, [reduce, duration, staggerMs]);

  const play = () => {
    if (reduce) return;
    timeline.current?.play(0);
    setPlayed(true);
  };
  const reset = () => {
    timeline.current?.pause(0);
    setPlayed(false);
  };

  return (
    <div ref={root} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
      <h3 className="font-bold">GSAP + ScrollTrigger, live</h3>
      <p className="mt-1 text-sm text-slate-600">
        Press Play: a timeline staggers six tiles in. The green bar below fills as you scroll this section,
        tied to scroll position with scrub. Move the sliders, press Reset, then Play again to feel the values.
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {['Hero', 'Cards', 'Nav', 'Form', 'Chart', 'Footer'].map((t) => (
          <div key={t} className="gsap-tile rounded-xl bg-slate-900 px-2 py-6 text-center text-sm font-bold text-white">{t}</div>
        ))}
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
        <div ref={bar} className="h-full origin-left bg-lime-400" />
      </div>
      <div className="mt-4 grid gap-3">
        <Slider label="Duration (seconds)" value={duration} min={0.2} max={1.5} step={0.1} onChange={setDuration} />
        <Slider label="Stagger (ms between tiles)" value={staggerMs} min={0} max={300} step={20} onChange={setStaggerMs} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={play} disabled={played} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40">Play timeline</button>
        <button type="button" onClick={reset} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold">Reset</button>
        <CopyButton text={`gsap.timeline({ paused: true })\n  .from(".tile", { y: 40, opacity: 0, rotate: -4, duration: ${duration}, ease: "power3.out", stagger: ${staggerMs / 1000} });`} />
      </div>
      <p className="mt-3 text-xs text-slate-500">GSAP 3.13.0 · Free under the GreenSock standard licence (not MIT) · github.com/greensock/GSAP</p>
    </div>
  );
}

export function AnimeDemo() {
  const reduce = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const [ran, setRan] = useState(false);
  const [duration, setDuration] = useState(700);
  const [staggerMs, setStaggerMs] = useState(60);
  const [scale, setScale] = useState(1.7);
  const [colour, setColour] = useState('bg-emerald-500');

  const run = () => {
    if (reduce || !root.current) return;
    const dots = root.current.querySelectorAll('.anime-dot');
    animate(dots, {
      scale: [1, scale, 1],
      rotate: [0, 90, 0],
      duration,
      delay: stagger(staggerMs),
      ease: 'outExpo',
    });
    setRan(true);
  };

  return (
    <div ref={root} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
      <h3 className="font-bold">Anime.js, live</h3>
      <p className="mt-1 text-sm text-slate-600">Press Stagger: twelve dots scale and turn, one after another. Change the values first and watch the same animation feel different.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className={`anime-dot block h-8 w-8 rounded-full ${colour}`} />
        ))}
      </div>
      <div className="mt-4 grid gap-3">
        <Slider label="Duration (ms)" value={duration} min={200} max={1500} step={100} onChange={setDuration} />
        <Slider label="Stagger (ms between dots)" value={staggerMs} min={0} max={200} step={20} onChange={setStaggerMs} />
        <Slider label="Peak scale" value={scale} min={1.1} max={2.5} step={0.1} onChange={setScale} />
        <label className="block text-sm text-slate-600">
          Dot colour
          <span className="mt-1 flex gap-2">
            {['bg-emerald-500', 'bg-sky-500', 'bg-amber-500', 'bg-rose-500'].map((c) => (
              <button key={c} type="button" onClick={() => setColour(c)} aria-label={`Use ${c}`} aria-pressed={colour === c} className={`h-8 w-8 rounded-full ${c} ${colour === c ? 'ring-2 ring-slate-900 ring-offset-2' : ''}`} />
            ))}
          </span>
        </label>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button type="button" onClick={run} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Stagger the dots</button>
        {ran && <span className="text-sm text-slate-500">Ran with stagger({staggerMs}).</span>}
        <CopyButton text={`animate(dots, {\n  scale: [1, ${scale}, 1],\n  rotate: [0, 90, 0],\n  duration: ${duration},\n  delay: stagger(${staggerMs}),\n  ease: "outExpo",\n});`} />
      </div>
      <p className="mt-3 text-xs text-slate-500">Anime.js 4.1.3 · MIT · github.com/juliangarnier/anime</p>
    </div>
  );
}

export function LenisDemo() {
  const reduce = useReducedMotion();
  return (
    <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
      <h3 className="font-bold">Lenis smooth scroll, live</h3>
      <p className="mt-1 text-sm text-slate-600">
        {reduce
          ? 'Reduced motion is on, so smooth scrolling is off and this button uses a plain jump.'
          : 'This whole page scrolls with Lenis (lerp 0.1). Press the button to glide to the Sources section.'}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => smoothScrollTo('#sources')} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Glide to Sources ↓</button>
        <CopyButton text={FREE_SNIPPETS.find((s) => s.id === 'lenis')?.code ?? ''} />
      </div>
      <p className="mt-3 text-xs text-slate-500">Lenis 1.3.4 · MIT · github.com/darkroomengineering/lenis</p>
    </div>
  );
}

const GEN_VARIANTS = [
  { key: 'calm', label: 'Calm SaaS', headline: 'Quiet software for busy teams', accent: 'bg-sky-100 text-sky-900', layout: 'Single column, lots of space, one action.' },
  { key: 'bold', label: 'Bold launch', headline: 'LAUNCH LOUD. SHIP TODAY.', accent: 'bg-amber-300 text-slate-950', layout: 'Oversized type, hard edges, two actions.' },
  { key: 'playful', label: 'Playful app', headline: 'Make it fun, then make it work', accent: 'bg-rose-100 text-rose-900', layout: 'Rounded cards, dots, one friendly action.' },
];

export function GenerativeUIDemo() {
  const [prompt, setPrompt] = useState('');
  const [variant, setVariant] = useState(GEN_VARIANTS[0]);
  const applyPrompt = () => {
    const p = prompt.toLowerCase();
    if (p.includes('bold') || p.includes('launch') || p.includes('loud')) setVariant(GEN_VARIANTS[1]);
    else if (p.includes('fun') || p.includes('play') || p.includes('friendly')) setVariant(GEN_VARIANTS[2]);
    else setVariant(GEN_VARIANTS[0]);
  };
  return (
    <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
      <h3 className="font-bold">Generative UI, simulated with local rules</h3>
      <p className="mt-1 text-sm text-slate-600">
        No AI model runs here. Type a word like “bold”, “fun” or “calm” and press Apply: a fixed set of
        local rules swaps the headline, accent and layout description. Real generative UI would call a
        model; this shows the pattern — prompt in, interface variant out — without pretending a model
        is involved.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') applyPrompt(); }}
          placeholder="Try: bold launch, or fun app"
          aria-label="Describe the interface you want"
          className="min-w-52 flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm"
        />
        <button type="button" onClick={applyPrompt} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Apply</button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Or pick a variant">
        {GEN_VARIANTS.map((v) => (
          <button key={v.key} type="button" onClick={() => setVariant(v)} aria-pressed={variant.key === v.key} className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${variant.key === v.key ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300'}`}>{v.label}</button>
        ))}
      </div>
      <div className={`mt-4 rounded-2xl p-5 ${variant.accent}`}>
        <p className="text-2xl font-extrabold tracking-tight">{variant.headline}</p>
        <p className="mt-1 text-sm">{variant.layout}</p>
      </div>
    </div>
  );
}

