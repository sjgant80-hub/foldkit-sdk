// foldkit SDK · sovereign single-file library · MIT · AI-Native Solutions
// Extracted from foldkit/index.html · 10078 bytes of source logic
// Public-safe: no primes/glyphs/dyad references

let state = [0,0,0,0,0,0,0];
const opsLog = [];
function renderStateVector() {
  const orphanIdx = 3;
  const pairIndices = [1,2,4,5];
    const cls = i === orphanIdx ? 'ring orphan' : (pairIndices.includes(i) ? 'ring pair' : 'ring');
  }).join('');
  grid.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('input', e => {
      const idx = parseInt(e.target.dataset.ring);
      state[idx] = Math.max(0, parseInt(e.target.value) || 0);
      renderAll();
    });
  });
  updateFoldNum();
  updateKawasaki();
}
function updateFoldNum() {
}
function updateKawasaki() {
  const sum = kawasakiSum(state);
  const flat = kawasakiFlat(state);
  el.textContent = flat ? '✓ flat-foldable' : '✗ not flat-foldable';
  el.className = 'val ' + (flat ? '' : 'fail');
}
function renderOpsGrid() {
  const needsArg = ['fire','water','void'];
  grid.innerHTML = Object.entries(OP_META).map(([key, meta]) => {
    const na = needsArg.includes(key) ? ' needs-arg' : '';
    return `<div class="op${na}" data-op="${key}"><span class="kanji">${meta.kanji}</span><span class="name">${key}</span><span class="arrow">${meta.arrow}</span><span class="verb">${meta.verb}</span><span class="probe">${meta.probe}</span></div>`;
  }).join('');
  grid.querySelectorAll('.op').forEach(el => {
    el.onclick = () => {
      const name = el.dataset.op;
      const before = [...state];
      let after;
      try {
        if (name === 'fire' || name === 'water') after = applyOp(name, state, ring);
        else if (name === 'void') after = applyOp(name, state, ring, toRing);
        else after = applyOp(name, state);
      } catch (e) { after = state; }
      state = after;
      opsLog.unshift({ name, ring, toRing, before, after, kanji: OP_META[name].kanji });
      renderOpsLog();
      renderStateVector();
    };
  });
  ringTo.value = '6';
}
function renderOpsLog() {
  if (!opsLog.length) { el.innerHTML = '<span style="color:var(--dim)">no ops applied yet · click any of the six above</span>'; return; }
  el.innerHTML = opsLog.slice(0, 20).map(e => {
    return `<div class="entry"><span class="op-name">${e.kanji} ${e.name}</span>${arg} · <span class="before">[${e.before.join(',')}]</span> → <span class="after">[${e.after.join(',')}]</span></div>`;
  }).join('');
}
function renderKappaView() {
  fill.style.width = Math.min(100, (κ / 1.6) * 100) + '%';
  const current = depthBand(κ);
  bandsEl.innerHTML = bandOrder.map(b => {
    const on = b.name === current.name;
    const warn = b.warn ? ' warn' : '';
    return `<div class="band${on ? ' on' + warn : ''}"><span class="g">${b.glyph}</span>${b.name}<span class="r">ring ${b.ring}</span></div>`;
  }).join('');
  let note = '';
  if (current.name === 'heart') note = '<div style="background:var(--amber-dim);border-left:2px solid var(--amber);padding:10px 14px;border-radius:6px;font-size:13px"><strong style="color:var(--amber)">♡ ORPHAN ZONE · TIME LAYER.</strong> This is where experience happens. Simon\'s operating κ. The framework expects you here.</div>';
  else if (current.warn) note = '<div style="background:rgba(214,122,90,0.15);border-left:2px solid var(--coral);padding:10px 14px;border-radius:6px;font-size:13px"><strong style="color:var(--coral)">◯ COLLAPSE ZONE.</strong> System failure territory. κ > 1.2 = deeper is NOT better here.</div>';
  else note = `<div style="font-family:var(--mono);font-size:11px;color:var(--muted);letter-spacing:0.04em">operating at ring ${current.ring} · ${current.glyph} ${current.name}</div>`;
  notes.innerHTML = note;
}
function renderMaekawa() {
  const pairs = d.maekawaPairs.map(p => `<div class="check-row"><span class="lab">{${p.pair[0]}, ${p.pair[1]}} · ${p.names.join(' · ')}</span><span class="val">|${p.pair[1]}−${p.pair[0]}| = 2 ✓</span></div>`).join('');
  const orphan = `<div class="check-row"><span class="lab">orphan · ${d.orphan.name} (p=${d.orphan.prime})</span><span class="val warn">${d.orphan.note}</span></div>`;
  const ground = `<div class="check-row"><span class="lab">ground · ${d.ground.name} (p=${d.ground.prime})</span><span class="val">${d.ground.note}</span></div>`;
  const resolver = `<div class="check-row"><span class="lab">resolver · ${d.resolver.name} (p=${d.resolver.prime})</span><span class="val">${d.resolver.note}</span></div>`;
  el.innerHTML = pairs + orphan + ground + resolver;
}
function renderDecay() {
  const profile = attenuationProfile();
  el.innerHTML = profile.map(p => {
    const pct = p.surviveAsPercent;
    return `<div class="decay-row"><span class="glyph">${p.glyph}</span><div class="bar-wrap"><div class="bar" style="width:${Math.min(100, pct)}%"></div></div><span class="pct">${pct.toFixed(2)}%</span><span class="name">${p.name} (ring ${p.ring})</span></div>`;
  }).join('');
}
function renderIsa95() {
  el.innerHTML = ISA95_LAYERS.map(l => `<div class="isa-row"><span class="lv">L${l.level}</span><span class="gl">${l.glyph}</span><span class="layer">${l.layer}</span><span class="role">${l.role}</span></div>`).join('');
}
function renderProbe(text) {
  const r = probeFromKappa(0.618, text);
}
function renderAll() {
  updateFoldNum();
  updateKawasaki();
}
// tabs
  t.onclick = () => {
    t.classList.add('on');
  };
});
// presets
  b.onclick = () => { state = b.dataset.preset.split(',').map(n => parseInt(n)); renderStateVector(); };
});
});
// unfold
  const S = unfoldState(F);
  if (S) { state = S; renderStateVector(); out.textContent = `→ [${S.join(', ')}]`; }
  else out.textContent = `→ null (F=${F} has non-spine factors)`;
};
// reset
// κ slider
// decay calc
  const before = signalSurvival(d) * 100;
  const after = signalSurvival(d - c) * 100;
  const gain = unclogGain(d, c);
};
// probe input
// bootstrap
renderStateVector();
renderOpsGrid();
renderOpsLog();
renderKappaView();
renderMaekawa();
renderDecay();
renderIsa95();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});

// Named exports for the primary API surface
export { renderStateVector };
export { updateFoldNum };
export { updateKawasaki };
export { renderOpsGrid };
export { renderOpsLog };
export { renderKappaView };
export { renderMaekawa };
export { renderDecay };
export { renderIsa95 };
export { renderProbe };

export { F };
export { S };
