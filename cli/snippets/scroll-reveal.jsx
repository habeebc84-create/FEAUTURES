// Scroll reveal — from the FEAUTURES repo (MIT, see LICENSE).
// Install: npm install motion
// Usage: wrap any section in <Reveal>…</Reveal>. Reveals once, when
// the section scrolls into view. Static under prefers-reduced-motion.
import { motion, useReducedMotion } from 'motion/react';

export function Reveal({ children, id, className = '' }) {
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
