// foldkit-sdk · depth-classify · κ band from natural-language text
// FallMirror-style probe scoring
// run: node examples/depth-classify.mjs

import { classifyKappaBand, probeFromKappa } from '../src/index.js';

const samples = [
  "i can't stop thinking about it, it's taking over",
  'i notice a tightness in my chest',
  'going through this, letting it move',
  'i feel angry and hurt and lonely',
  "it's called grief, this is the reason i can't work",
  'watching myself panic, who is watching?',
  'nothing left, empty of everything'
];

for (const text of samples) {
  const band = classifyKappaBand(text);
  const probe = probeFromKappa(band ? (band.min + band.max) / 2 : 0.5, text);
  console.log(
    (band?.glyph || '?'),
    (band?.name || 'unknown').padEnd(12),
    '→', probe.op.verb.padEnd(10),
    '·', probe.probe
  );
  console.log('   text:', text);
  console.log();
}
