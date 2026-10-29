import { useLayoutEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'motion/react';
import { smoothScrollTo } from './lenis';

gsap.registerPlugin(ScrollTrigger);

/*
 * Live demos for open-source animation libraries installed in this
 * project: GSAP 3.13 (free under the GreenSock standard licence),
 * Lenis 1.3 (MIT) and Anime.js 4.1 (MIT). Motion demos live in
 * effects.tsx. Everything here runs in the browser and does nothing
 * when the user prefers reduced motion.
 */

export function GsapDemo() {
  const reduce = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [played, setPlayed] = useState(false);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    if (reduce || !root.current) return;
    const ctx = gsap.context(() => {
      timeline.current = gsap
        .timeline({ paused: true })
        .from('.gsap-tile', { y: 40, opacity: 0, rotate: -4, duration: 0.6, ease: 'power3.out', stagger: 0.08 });
      gsap.fromTo(
        bar.current,
        { scaleX: 0 },
        { scaleX: 1, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top 85%', end: 'bottom 40%', scrub: true } },
      );
    }, root);
    return () => ctx.revert();
  }, [reduce]);

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
        tied to scroll position with scrub.
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {['Hero', 'Cards', 'Nav', 'Form', 'Chart', 'Footer'].map((t) => (
          <div key={t} className="gsap-tile rounded-xl bg-slate-900 px-2 py-6 text-center text-sm font-bold text-white">{t}</div>
        ))}
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
        <div ref={bar} className="h-full origin-left bg-lime-400" />
      </div>
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={play} disabled={played} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40">Play timeline</button>
        <button type="button" onClick={reset} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold">Reset</button>
      </div>
      <p className="mt-3 text-xs text-slate-500">GSAP 3.13.0 · Free under the GreenSock standard licence (not MIT) · github.com/greensock/GSAP</p>
    </div>
  );
}

export function AnimeDemo() {
  const reduce = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const [ran, setRan] = useState(false);

  const run = () => {
    if (reduce || !root.current) return;
    const dots = root.current.querySelectorAll('.anime-dot');
    animate(dots, {
      scale: [1, 1.7, 1],
      rotate: [0, 90, 0],
      duration: 700,
      delay: stagger(60),
      ease: 'outExpo',
    });
    setRan(true);
  };

  return (
    <div ref={root} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
      <h3 className="font-bold">Anime.js, live</h3>
      <p className="mt-1 text-sm text-slate-600">Press Stagger: twelve dots scale and turn, one after another, with a 60ms stagger.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className="anime-dot block h-8 w-8 rounded-full bg-emerald-500" />
        ))}
      </div>
      <div className="mt-4">
        <button type="button" onClick={run} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Stagger the dots</button>
        {ran && <span className="ml-3 text-sm text-slate-500">Ran with stagger(60).</span>}
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
      <div className="mt-4">
        <button type="button" onClick={() => smoothScrollTo('#sources')} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Glide to Sources ↓</button>
      </div>
      <p className="mt-3 text-xs text-slate-500">Lenis 1.3.4 · MIT · github.com/darkroomengineering/lenis</p>
    </div>
  );
}

