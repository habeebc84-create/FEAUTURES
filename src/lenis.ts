import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function initLenis() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (lenis) return;
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  // Native anchor jumps fight Lenis's scroll control and can land with the
  // target heading under the sticky header. Route same-page anchor clicks
  // through the same offset glide as the Sources button. Modifier clicks
  // and middle clicks are left alone so new-tab behaviour is unchanged.
  document.addEventListener('click', (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const anchor = (e.target as Element).closest?.('a[href^="#"]') as HTMLAnchorElement | null;
    if (!anchor) return;
    const hash = anchor.getAttribute('href');
    if (!hash || hash === '#' || !document.querySelector(hash)) return;
    e.preventDefault();
    smoothScrollTo(hash);
  });
}

function headerOffset() {
  // The sticky header wraps to two lines on narrower screens, so its height
  // is measured at click time instead of assuming a fixed offset. Without
  // this, a glide can land with the target heading clipped under the header.
  const header = document.querySelector('header');
  const height = header ? header.getBoundingClientRect().height : 80;
  return -(height + 12);
}

export function smoothScrollTo(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return;
  const setHash = () => window.history.replaceState(null, '', selector);
  if (lenis) {
    lenis.scrollTo(el as HTMLElement, {
      offset: headerOffset(),
      duration: 1.2,
      onComplete: setHash,
    });
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setHash();
  }
}
