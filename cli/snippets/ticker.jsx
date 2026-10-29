// Scrolling ticker — from the FEAUTURES repo (MIT, see LICENSE).
// No JavaScript library needed: CSS keyframes + duplicated content.
// Pauses on hover/focus. Static text under prefers-reduced-motion
// (render the plain <p> branch when matchMedia matches).

// CSS:
// @keyframes ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
// .ticker-track { animation: ticker-scroll 30s linear infinite; }
// .ticker-wrap:hover .ticker-track, .ticker-wrap:focus-within .ticker-track { animation-play-state: paused; }

export function Ticker({ items }) {
  const row = items.map((item) => (
    <span key={item} className="flex shrink-0 items-center gap-3 px-4 text-sm font-semibold">
      {item} <span aria-hidden="true">•</span>
    </span>
  ));
  return (
    <div className="ticker-wrap overflow-hidden border-y py-2">
      <span className="sr-only">{items.join(', ')}</span>
      <div aria-hidden="true" className="ticker-track flex w-max">
        {row}{row}
      </div>
    </div>
  );
}
