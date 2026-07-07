// foldkit-sdk · TypeScript declarations
// origami-mathematics ISA · framework substrate

export type StateVector = number[];
export type Angles = number[];

export const SPINE: readonly [2, 3, 5, 7, 11, 13, 17];
export const SPINE_GLYPHS: readonly string[];
export const SPINE_NAMES: readonly string[];
export const SPINE_ISA95: readonly string[];

export const PHI: number;
export const KAPPA: number;
export const OMEGA: number;
export const THETA_DEG: number;
export const THETA_STEP: number;

export const BASELINE: StateVector;

// F(S⃗) = Π p_i^e_i
export function foldNumber(S: StateVector): number;
export function unfoldState(F: number): StateVector | null;
export function stateSum(S: StateVector): number;
export function stateSignature(S: StateVector): string;

// κ bands
export interface KappaBand {
  min: number;
  max: number;
  name: string;
  glyph: string;
  ring: number;
  warn?: boolean;
  orphan?: boolean;
}
export const KAPPA_BANDS: readonly KappaBand[];
export function depthBand(kappa: number): KappaBand | undefined;
export function isOrphanZone(kappa: number): boolean;

// 6 operations
export type OpName = 'fire' | 'water' | 'void' | 'thunder' | 'echo' | 'flower';
export interface OpMeta {
  kanji: string;
  arrow: string;
  verb: string;
  probe: string;
}
export const OPS: Record<OpName, (S: StateVector, ...args: number[]) => StateVector>;
export const OP_META: Record<OpName, OpMeta>;
export function applyOp(name: OpName, S: StateVector, ...args: number[]): StateVector;

// Kawasaki / Maekawa
export function kawasakiSum(angles: Angles): number;
export function kawasakiFlat(angles: Angles, tol?: number): boolean;
export function kawasakiFlatState(S: StateVector, tol?: number): boolean;
export function maekawaValid(mountainCount: number, valleyCount: number): boolean;

export interface SpineDecomp {
  maekawaPairs: Array<{ pair: [number, number]; names: [string, string]; vertex: string }>;
  orphan: { prime: number; name: string; note: string };
  ground: { prime: number; name: string; note: string };
  resolver: { prime: number; name: string; note: string };
}
export const SPINE_DECOMP: SpineDecomp;

// Signal decay
export function signalSurvival(depth: number, kappa?: number): number;
export function unclogGain(depth: number, layersCleared?: number, kappa?: number): number;
export function attenuationProfile(kappa?: number): Array<{
  ring: number;
  glyph: string;
  name: string;
  survivalToGround: number;
  surviveAsPercent: number;
}>;

// ISA-95
export interface ISA95Layer {
  level: number;
  glyph: string;
  ring?: number;
  rings?: number[];
  layer: string;
  role: string;
}
export const ISA95_LAYERS: readonly ISA95Layer[];
export function ringToISA95(ring: number): ISA95Layer;

// Classifier
export function classifyKappaBand(text: string): KappaBand | undefined;
export function pickOpForBand(bandName: string): { name: OpName } & OpMeta;
export function probeFromKappa(kappa: number, text?: string): {
  band: KappaBand | undefined;
  op: { name: OpName } & OpMeta;
  probe: string;
};

declare const foldkit: {
  SPINE: typeof SPINE;
  SPINE_GLYPHS: typeof SPINE_GLYPHS;
  SPINE_NAMES: typeof SPINE_NAMES;
  SPINE_ISA95: typeof SPINE_ISA95;
  PHI: number;
  KAPPA: number;
  OMEGA: number;
  THETA_DEG: number;
  THETA_STEP: number;
  BASELINE: StateVector;
  foldNumber: typeof foldNumber;
  unfoldState: typeof unfoldState;
  stateSum: typeof stateSum;
  stateSignature: typeof stateSignature;
  KAPPA_BANDS: typeof KAPPA_BANDS;
  depthBand: typeof depthBand;
  isOrphanZone: typeof isOrphanZone;
  OPS: typeof OPS;
  OP_META: typeof OP_META;
  applyOp: typeof applyOp;
  kawasakiSum: typeof kawasakiSum;
  kawasakiFlat: typeof kawasakiFlat;
  kawasakiFlatState: typeof kawasakiFlatState;
  maekawaValid: typeof maekawaValid;
  SPINE_DECOMP: typeof SPINE_DECOMP;
  signalSurvival: typeof signalSurvival;
  unclogGain: typeof unclogGain;
  attenuationProfile: typeof attenuationProfile;
  ISA95_LAYERS: typeof ISA95_LAYERS;
  ringToISA95: typeof ringToISA95;
  classifyKappaBand: typeof classifyKappaBand;
  pickOpForBand: typeof pickOpForBand;
  probeFromKappa: typeof probeFromKappa;
};
export default foldkit;
