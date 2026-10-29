// Bento grid — from the FEAUTURES repo (MIT, see LICENSE).
// No JavaScript needed: Tailwind grid only. Swap the blocks for
// your own content. One big tile, supporting tiles, one action tile.
export function BentoGrid() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2 rounded-2xl bg-slate-900 p-5 text-white">
        <h2 className="font-bold">Main feature</h2>
        <p className="mt-1 text-sm text-slate-300">One idea, explained well.</p>
      </div>
      <div className="rounded-2xl border border-slate-200 p-5">
        <h3 className="font-bold">Second</h3>
      </div>
      <div className="rounded-2xl border border-slate-200 p-5">
        <h3 className="font-bold">Third</h3>
      </div>
      <div className="col-span-2 rounded-2xl bg-lime-300 p-5">
        <h3 className="font-bold">Call to action</h3>
      </div>
    </div>
  );
}
