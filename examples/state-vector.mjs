// foldkit-sdk · state-vector · F(S⃗) computation
// fundamental theorem of arithmetic → unique fingerprint per state
// run: node examples/state-vector.mjs

import {
  SPINE, SPINE_GLYPHS, BASELINE,
  foldNumber, unfoldState, stateSum, stateSignature
} from '../src/index.js';

console.log('SPINE (7-prime)      ', SPINE);
console.log('SPINE_GLYPHS         ', SPINE_GLYPHS.join(' '));
console.log('BASELINE             ', BASELINE);
console.log('foldNumber(BASELINE) ', foldNumber(BASELINE), '← Ω = 510510');
console.log();

const states = [
  [0, 0, 0, 1, 0, 0, 0],   // heart only
  [1, 0, 1, 0, 0, 0, 0],   // ground + gate
  [2, 1, 0, 1, 0, 1, 0],   // mixed
  BASELINE
];

for (const S of states) {
  const F = foldNumber(S);
  const back = unfoldState(F);
  console.log(
    'S=', JSON.stringify(S).padEnd(24),
    'F=', String(F).padEnd(10),
    'Σ=', stateSum(S),
    'sig=', stateSignature(S).padEnd(24),
    'round-trip ok?', JSON.stringify(back) === JSON.stringify(S)
  );
}
