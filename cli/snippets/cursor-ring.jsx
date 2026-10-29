// Cursor ring — from the FEAUTURES repo (MIT, see LICENSE).
// Install: npm install motion
// Usage: <CursorRing /> once, near the top of your app.
// Desktop fine-pointer only, native cursor kept, nothing renders
// under prefers-reduced-motion.
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

export function CursorRing() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.6 });

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e) => setHovering(!!e.target.closest?.('a, button, input, select, [role="button"]'));
    window.addEventListener('pointermove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;
  return (
    <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[90]" style={{ x: springX, y: springY }}>
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-lime-500"
        animate={{ width: hovering ? 44 : 28, height: hovering ? 44 : 28, opacity: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />
    </motion.div>
  );
}
