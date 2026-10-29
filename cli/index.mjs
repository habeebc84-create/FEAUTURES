#!/usr/bin/env node
// FEAUTURES CLI — add one effect from this repo into your project.
// Local use (this repo is not published to npm, so `npx features` does not
// work yet — see README "CLI" for the publish step):
//   node cli/index.mjs list
//   node cli/index.mjs add ticker
//   node cli/index.mjs add cursor-ring ./src/components
// Snippets are original code from this repo, MIT-licensed (see LICENSE).
// The libraries they use keep their own licences (Motion MIT, GSAP
// GreenSock standard licence, Anime.js MIT, Lenis MIT).

import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)));
const snippetsDir = join(root, 'snippets');

function list() {
  const files = readdirSync(snippetsDir).filter((f) => f.endsWith('.jsx')).sort();
  console.log('FEAUTURES effects — add one with: node cli/index.mjs add <name> [dir]\n');
  for (const f of files) {
    const name = f.replace(/\.jsx$/, '');
    const first = readFileSync(join(snippetsDir, f), 'utf8').split('\n').slice(0, 4).join('\n');
    console.log(`  ${name}\n${first.split('\n').map((l) => `    ${l}`).join('\n')}\n`);
  }
}

function add(name, dir) {
  const src = join(snippetsDir, `${name}.jsx`);
  if (!existsSync(src)) {
    console.error(`Unknown effect "${name}". Run: node cli/index.mjs list`);
    process.exitCode = 1;
    return;
  }
  const outDir = resolve(dir || './features');
  mkdirSync(outDir, { recursive: true });
  const dest = join(outDir, `${name}.jsx`);
  if (existsSync(dest)) {
    console.error(`Refusing to overwrite existing file: ${dest}`);
    process.exitCode = 1;
    return;
  }
  copyFileSync(src, dest);
  console.log(`Added ${dest}`);
  console.log('Next: install what the header comment says, import the component, and keep the reduced-motion checks.');
}

const [cmd, arg, dir] = process.argv.slice(2);
if (cmd === 'list' || !cmd) list();
else if (cmd === 'add' && arg) add(arg, dir);
else {
  console.log('Usage: node cli/index.mjs list | node cli/index.mjs add <name> [dir]');
  process.exitCode = 1;
}
