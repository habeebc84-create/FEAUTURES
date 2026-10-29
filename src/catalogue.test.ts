import { describe, expect, it } from 'vitest';
import { OPEN_SOURCE } from './opensource';
import { TEMPLATE_SOURCES, HOW_TO_USE, QUICK_STARTS } from './templates';
import { LAYOUTS } from './App';

describe('open-source catalogue', () => {
  it('has groups with complete entries', () => {
    expect(OPEN_SOURCE.length).toBeGreaterThanOrEqual(5);
    const entries = OPEN_SOURCE.flatMap((g) => g.entries);
    expect(entries.length).toBeGreaterThanOrEqual(29);
    for (const e of entries) {
      expect(e.name.length).toBeGreaterThan(0);
      expect(e.licence.length).toBeGreaterThan(0);
      expect(e.what.length).toBeGreaterThan(0);
      expect(e.use.length).toBeGreaterThan(0);
      expect(['live demo', 'catalogue', 'workspace tool', 'stale']).toContain(e.status);
      if (e.repo) expect(e.repo).toMatch(/^[\w.-]+\/[\w.-]+$/);
    }
  });

  it('has no duplicate repos', () => {
    const repos = OPEN_SOURCE.flatMap((g) => g.entries).map((e) => e.repo).filter(Boolean);
    expect(new Set(repos).size).toBe(repos.length);
  });
});

describe('template libraries', () => {
  it('lists three sources with usable how-to steps', () => {
    expect(TEMPLATE_SOURCES).toHaveLength(3);
    for (const s of TEMPLATE_SOURCES) {
      expect(s.url.startsWith('https://')).toBe(true);
      expect(s.facts.length).toBeGreaterThan(0);
      expect(s.howTo.length).toBeGreaterThan(0);
      expect(s.warning.length).toBeGreaterThan(0);
      expect(s.categories.length).toBeGreaterThan(0);
    }
  });

  it('has a six-step guide in order plus quick starts', () => {
    expect(HOW_TO_USE.map((s) => s.step)).toEqual(['1', '2', '3', '4', '5', '6']);
    expect(QUICK_STARTS).toHaveLength(9);
    for (const q of QUICK_STARTS) {
      expect(q.tool.length).toBeGreaterThan(0);
      expect(q.install.length).toBeGreaterThan(0);
      expect(q.firstUse.length).toBeGreaterThan(0);
    }
  });
});

describe('effect codes and framework guides', () => {
  it('covers every demo card with copyable code', async () => {
    const { EFFECT_CODES, FRAMEWORK_GUIDES } = await import('./freeuse');
    expect(EFFECT_CODES.length).toBeGreaterThanOrEqual(8);
    for (const e of EFFECT_CODES) {
      expect(e.code.length).toBeGreaterThan(40);
    }
    expect(FRAMEWORK_GUIDES).toHaveLength(4);
    expect(FRAMEWORK_GUIDES.map((g) => g.framework)).toContain('Next.js (App Router)');
    expect(FRAMEWORK_GUIDES.map((g) => g.framework)).toContain('Plain HTML + JavaScript');
  });

  it('ships CLI snippets on disk', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const dir = path.join(process.cwd(), 'cli', 'snippets');
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jsx')).sort();
    expect(files).toEqual(['bento-grid.jsx', 'cursor-ring.jsx', 'scroll-reveal.jsx', 'ticker.jsx']);
    for (const f of files) {
      expect(fs.readFileSync(path.join(dir, f), 'utf8').length).toBeGreaterThan(200);
    }
  });
});

describe('free-to-use snippets', () => {
  it('has copyable original snippets', async () => {
    const { FREE_SNIPPETS } = await import('./freeuse');
    expect(FREE_SNIPPETS.length).toBeGreaterThanOrEqual(8);
    const ids = FREE_SNIPPETS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const s of FREE_SNIPPETS) {
      expect(s.title.length).toBeGreaterThan(0);
      expect(s.code.length).toBeGreaterThan(20);
    }
    const byId = Object.fromEntries(FREE_SNIPPETS.map((s) => [s.id, s.code]));
    expect(byId['ticker']).toContain('ticker-scroll');
    expect(byId['gsap-timeline']).toContain('stagger');
    expect(byId['lenis']).toContain('prefers-reduced-motion');
    expect(byId['tokens']).toContain('--accent');
  });
});

describe('layout wireframes', () => {
  it('has 12 unique layouts in valid kinds', () => {
    expect(LAYOUTS).toHaveLength(12);
    const ids = LAYOUTS.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
    const kinds = new Set(['hero', 'bento', 'split', 'editorial', 'dashboard', 'pricing', 'portfolio', 'product', 'video', 'pricingfaq', 'docs', 'blog']);
    for (const l of LAYOUTS) {
      expect(kinds.has(l.kind)).toBe(true);
      expect(l.name.length).toBeGreaterThan(0);
      expect(l.description.length).toBeGreaterThan(0);
    }
  });
});
