# foldkit-sdk · 折

Standalone SDK for **foldkit** — the origami-mathematics ISA that underpins every framework-mode tool in the AI-Native Solutions estate.

MIT · npm-publishable · CDN-loadable · zero dependencies · single ES module.

> **Canonical exemplar.** This repo is the shape template for every `<name>-sdk` companion repo across the estate. If you're forking to build one for another estate module, keep the layout: `src/index.{js,d.ts}` · `dist/index.mjs` · `examples/` · `docs/` · MIT · GitHub Pages · npm scoped-package publish workflow.

## Install

```bash
npm install @ai-native-solutions/foldkit-sdk
```

Or import direct from a CDN:

```html
<script type="module">
  import fk from 'https://cdn.jsdelivr.net/npm/@ai-native-solutions/foldkit-sdk/dist/index.mjs';
  console.log(fk.foldNumber([1,1,1,1,1,1,1])); // 510510 = Ω
</script>
```

Or clone this repo and load `src/index.js` locally — pure ES module, no build step needed.

## Quick start

```js
import fk, {
  SPINE, KAPPA, OMEGA,
  foldNumber, unfoldState,
  depthBand, applyOp,
  classifyKappaBand, probeFromKappa
} from '@ai-native-solutions/foldkit-sdk';

// F(S⃗) = Π p_i^e_i — fundamental theorem of arithmetic
foldNumber([1,1,1,1,1,1,1]);      // 510510  (= Ω, all rings active)
unfoldState(510510);              // [1,1,1,1,1,1,1]

// κ depth bands — Simon operates at κ ≈ 0.618 (♡ heart, orphan zone)
depthBand(0.618);                 // { name: 'heart', glyph: '♡', ring: 3, orphan: true }

// six ops · cosmic assembly language
applyOp('fire',   [0,0,0,1,0,0,0], 3);  // intensify ring 3 → [0,0,0,2,0,0,0]
applyOp('flower', [1,1,1,1,1,1,1]);     // return · unfold to ground

// natural-language → band + probe
probeFromKappa(0.6, 'i feel angry');
// → { band: { name: 'heart', … }, op: { name: 'fire', … }, probe: "what's the strongest version of this?" }
```

## API surface

**Constants**
`SPINE` `SPINE_GLYPHS` `SPINE_NAMES` `SPINE_ISA95` · `PHI` `KAPPA` `OMEGA` · `THETA_DEG` `THETA_STEP` · `BASELINE`

**State vector · F(S⃗)**
`foldNumber(S)` · `unfoldState(F)` · `stateSum(S)` · `stateSignature(S)`

**κ depth bands**
`KAPPA_BANDS` · `depthBand(κ)` · `isOrphanZone(κ)`

**Six operations** (fire · water · void · thunder · echo · flower)
`OPS` · `OP_META` · `applyOp(name, S, ...args)`

**Kawasaki · Maekawa validators**
`kawasakiSum` · `kawasakiFlat` · `kawasakiFlatState` · `maekawaValid` · `SPINE_DECOMP`

**Signal decay**
`signalSurvival(depth, κ)` · `unclogGain(depth, cleared, κ)` · `attenuationProfile(κ)`

**ISA-95 alignment**
`ISA95_LAYERS` · `ringToISA95(ring)`

**Natural-language classifier**
`classifyKappaBand(text)` · `pickOpForBand(bandName)` · `probeFromKappa(κ, text?)`

## Examples

- [`examples/quick-start.mjs`](examples/quick-start.mjs) — 30-line demo
- [`examples/state-vector.mjs`](examples/state-vector.mjs) — F(S⃗) round-trip
- [`examples/depth-classify.mjs`](examples/depth-classify.mjs) — κ band from natural language

Run any example directly with Node ≥ 18:

```bash
node examples/quick-start.mjs
```

## Docs

Live playground at **https://sjgant80-hub.github.io/foldkit-sdk/** — auto-rendered API reference with click-through demos of every function.

## Canonical -sdk shape

This repo is exemplar #1. The template layout every estate `-sdk` repo follows:

```
<name>-sdk/
├── src/index.js              source of truth · ES module
├── src/index.d.ts            TypeScript declarations
├── dist/index.mjs            built version (same as src for pure JS)
├── examples/                 runnable .mjs demos
├── docs/index.html           auto-rendered docs (under 800 lines)
├── README.md                 install · quick-start · API · links
├── package.json              npm scoped @ai-native-solutions/<name>-sdk
├── LICENSE                   MIT
├── .github/workflows/publish.yml   npm publish on tag v*
├── .nojekyll · manifest.webmanifest · sw.js
```

## Publish

Push tag `vN.N.N` → GitHub Action publishes to npm (requires `NPM_TOKEN` secret) and creates a GitHub Release.

```bash
npm version patch
git push --follow-tags
```

## License

MIT · AI-Native Solutions · 2026
