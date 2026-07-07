// foldkit-sdk · quick-start · 30-line demo
// run: node examples/quick-start.mjs

import fk, {
  SPINE, KAPPA, OMEGA,
  foldNumber, depthBand, applyOp, probeFromKappa
} from '../src/index.js';

console.log('SPINE         ', SPINE);
console.log('PHI · KAPPA   ', fk.PHI, KAPPA);
console.log('OMEGA         ', OMEGA, '= primorial(17)');

// F(S⃗) round-trip
const S = [1, 1, 1, 1, 1, 1, 1];
console.log('foldNumber(S) ', foldNumber(S), '(= Ω)');

// κ depth band
console.log('depthBand(κ)  ', depthBand(KAPPA));

// six ops
const fired = applyOp('fire', [0, 0, 0, 1, 0, 0, 0], 3);
console.log('fire on heart ', fired);

// natural-language probe
const probe = probeFromKappa(0.6, 'i feel angry and stuck');
console.log('probe         ', probe.op.verb, '→', probe.probe);
