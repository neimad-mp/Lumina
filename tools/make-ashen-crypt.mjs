#!/usr/bin/env node
/** Deterministic first dark HD-2D dungeon. --check writes nothing; --out chooses a scratch file. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LEVEL_FORMAT, LEVEL_VERSION, DEFAULT_ENVIRONMENT, defaultLegend, levelToChar,
  normalizeLevel, validateLevel, serializeLevel, parseLevel, levelStats } from '../src/engine/level/LevelFormat.js';
import { enemyStartPoints } from '../src/engine/level/ObjectCatalog.js';
import { ENEMY_DEFS, scaledDef } from '../src/demo/combat/defs.js';
import { createGrid, createPlacer, createWalkModel, canonicalObject, normalizedChanges, parseArgs } from './lib/levelgen.mjs';
import { checkLevel, gridFromLevel, placerFromLevel } from './lib/levelcheck.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = parseArgs(process.argv.slice(2));
if (args.out === true || args.out === '') throw new Error('--out needs a path');
const out = path.resolve(root, String(args.out ?? 'public/levels/ashen-crypt.json'));
const g = createGrid({ width: 64, depth: 88, fill: ' ', level: 0 });
const P = createPlacer(g);
const carve = (x0, z0, x1, z1, zone) => g.rect(x0, z0, x1, z1, (x, z) => g.set(x, z, 'k', 2, { zn: zone }));

// South to north: safe entrance, branching nave, reliquary, checkpoint, sealed boss chamber.
carve(24, 73, 40, 85, 'entrance');
carve(30, 65, 34, 74, 'south-hall');
carve(22, 54, 42, 66, 'nave');
carve(4, 46, 17, 61, 'vault');
carve(17, 56, 22, 60, 'west-door');
carve(47, 46, 60, 61, 'ossuary');
carve(42, 56, 47, 60, 'east-door');
carve(30, 42, 34, 54, 'north-hall');
carve(21, 29, 43, 43, 'reliquary');
carve(30, 19, 34, 29, 'gate-hall');
carve(23, 21, 41, 24, 'refuge');
carve(19, 2, 45, 18, 'sanctum');

// Back walls retain height and shadows; south-facing cutaways keep sprites/telegraphs visible.
// Use the floor snapshot so walls cannot grow outward as the loop visits them.
const floor = g.tiles.map((t) => t === 'k');
const isFloor = (x, z) => g.inMap(x, z) && floor[g.I(x, z)];
for (let z = 1; z < g.D - 1; z++) for (let x = 1; x < g.W - 1; x++) {
  if (isFloor(x, z)) continue;
  if (![[-1, 0], [1, 0], [0, -1], [0, 1]].some(([dx, dz]) => isFloor(x + dx, z + dz))) continue;
  g.set(x, z, '#', isFloor(x, z - 1) || isFloor(x, z - 2) ? 3 : isFloor(x, z + 1) ? 6 : 4);
}

const region = (id, name, banner, minX, maxX, minZ, maxZ) => P.add('region', {
  id, name, sub: 'Ashen Crypt', banner, minX, maxX, minZ, maxZ,
});
region('region_sanctum', 'The Ashen Sanctum', 'The Warden waits beyond the seal', 19, 46, 2, 19);
region('region_refuge', 'Last Vigil', 'Rest and prepare · Safe', 23, 42, 19, 29);
region('region_entrance', 'Vigil of the Lost', 'Find the Ashen Warden · Safe', 24, 41, 73, 86);
region('region_vault', 'The Sealed Vault', 'Optional treasure · Lv 2', 4, 22, 46, 62);
region('region_ossuary', 'The Ossuary', 'Optional treasure · Lv 2', 43, 61, 46, 62);
region('region_nave', 'The Broken Nave', 'Crypt sentries · Lv 1', 22, 43, 54, 73);
region('region_reliquary', 'The Hollow Reliquary', 'Hexes in the dark · Lv 3', 21, 44, 29, 54);
region('region_crypt', 'Ashen Crypt', 'Beneath the last light', 0, 64, 0, 88);

P.waystone('waystone_entrance', 'Vigil of the Lost', 36.5, 81.5);
P.waystone('waystone_vigil', 'Last Vigil', 37.5, 22.5);
P.npc('sister_vesper', 'Sister Vesper', 'cleric', 27.5, 79.5, '#bba9c8', [
  'The bells fell silent when the Warden sealed the crypt. Follow the stone passage north. His chamber lies beyond the last waystone.',
  'Strike with J. Dodge with K. U unleashes Whirl Slash; further powers awaken as you gain levels. C drinks a healing draught.',
  'Space opens chests and rests at waystones. Walk near a waystone to attune it. The side chambers hold supplies, but nothing there sleeps peacefully.',
], { behaviour: 'post', wander: 0, facing: 'down' });
P.npc('keeper_morrow', 'Keeper Morrow', 'merchant', 26.5, 22.5, '#ba9a75', [
  'This is the last vigil. The Warden cannot reach us here. Attune the stone before you pass through the seal.',
  'Take what you need. Leave enough strength to return.',
], { behaviour: 'post', wander: 0, action: 'shop', item: 'Healing Draught', script: 'shopkeeper' });
P.chest('chest_supplies', 31.5, 79.5, { gold: 20, potions: 2 });
P.chest('chest_vault', 10.5, 48.5, { gold: 30, potions: 1, upgrade: 'attack' });
P.chest('chest_ossuary', 54.5, 48.5, { gold: 25, potions: 1, upgrade: 'maxHp' });
P.chest('chest_reliquary', 39.5, 31.5, { gold: 20, upgrade: 'maxMp' });

// Separate home discs and room regions limit pulls and keep both waystones safe.
P.enemy('nave_sentries', 'goblin', 3, 1, 31.5, 61.5, 2.2, { name: 'Crypt Sentry', seed: 401 });
P.enemy('nave_bats', 'bat', 2, 1, 37.5, 56.5, 1.5, { name: 'Grave Bat', seed: 402 });
P.enemy('vault_guards', 'goblin', 3, 2, 11.5, 55.5, 2.0, { name: 'Vault Guard', seed: 403 });
P.enemy('vault_elite', 'goblin', 1, 2, 8.5, 49.5, 0, { name: 'Oathbreaker', elite: true, seed: 404 });
P.enemy('ossuary_archers', 'archer', 2, 2, 54.5, 52.5, 2.0, { name: 'Bone Archer', seed: 405 });
P.enemy('ossuary_bats', 'bat', 3, 2, 53.5, 58.5, 1.7, { name: 'Grave Bat', seed: 406 });
P.enemy('reliquary_guards', 'goblin', 4, 3, 31.5, 38.5, 2.5, { name: 'Hollow Sentry', seed: 407 });
P.enemy('reliquary_hexers', 'shaman', 2, 3, 35.5, 36.5, 2.0, { name: 'Crypt Hexer', seed: 408 });
P.enemy('ashen_warden', 'golem', 1, 4, 32.5, 8.5, 0, {
  name: 'Ashen Warden', seed: 409,
  arena: { minX: -13.5, maxX: 13.5, minZ: -6.5, maxZ: 10.5 },
  gate: [-2.5, 10.5, 2.5, 10.5],
});

// Torches face south, attached to the tall back walls. Warm pools mark doors and treasure.
for (const [x, z] of [[26.5, 73.12], [38.5, 73.12], [24.5, 54.12], [40.5, 54.12],
  [6.5, 46.12], [15.5, 46.12], [49.5, 46.12], [58.5, 46.12],
  [23.5, 29.12], [41.5, 29.12], [25.5, 2.12], [39.5, 2.12]]) P.torch(x, z, 0, 1.5);
P.torch(23.12, 22.5, Math.PI / 2, 0.9);
P.torch(41.88, 22.5, -Math.PI / 2, 0.9);
// Existing campfire props double as the boss's four charge obstacles in this prototype.
for (const [x, z] of [[22.5, 5.5], [42.5, 5.5], [22.5, 15.5], [42.5, 15.5]]) P.fire(x, z);
for (const [x, z] of [[26.5, 84.5], [38.5, 84.5], [5.5, 59.5], [59.5, 60.5], [22.5, 41.5], [42.5, 41.5]]) P.rock(x, z, 0.65);
P.crates(39, 76, 2, 0, 0.7);
P.barrel(25.5, 77.5, { height: 0.8 });
P.emit('mist', 32.5, 58.5, [13, 0.25, 7], 16, 0.1);
P.emit('mist', 32.5, 10.5, [15, 0.25, 10], 20, 0.1);
P.emit('dust', 32.5, 37.5, [12, 2.5, 8], 12, 0.8);

const legend = defaultLegend();
legend.k = { top: 'stone_tiles', side: 'stone_wall', walkable: true, fringe: false, overhang: false };
legend['#'] = { top: 'stone_brick', side: 'stone_wall', walkable: false, fringe: false, overhang: false };
const rows = g.rows(levelToChar);
const raw = {
  format: LEVEL_FORMAT, version: LEVEL_VERSION, name: 'Ashen Crypt', subtitle: 'Beneath the Last Light', author: 'Lumina',
  description: 'First single-player dark HD-2D dungeon: a safe vigil, branching crypt chambers, treasure, a final checkpoint and the three-phase Ashen Warden. Generated by tools/make-ashen-crypt.mjs.',
  width: g.W, depth: g.D, waterLevel: 0.4, water: { flow: [0, 0], reflect: 0.12, neutral: 0.45 },
  environment: { ...DEFAULT_ENVIRONMENT, timeOfDay: 22.5, clock: false, weather: 'clear', border: 'none', outerScenery: false,
    godRays: false, dust: true, music: true, camera: { distance: 24, pitch: 42 }, highGround: null, fogScale: 0.7,
    look: 'dark-dungeon', combatText: { bossEpithet: 'Keeper of the Unburied', victorySubtitle: 'The last seal is broken' },
    title: { title: 'ASHEN CRYPT', subtitle: 'Beneath the Last Light', credit: 'A Lumina dark HD-2D dungeon', prompt: 'Press any key' },
    titleCamera: { x: 32.5, z: 58.5, y: 1, driftX: 1.5, driftZ: 1, distance: 25 },
  },
  spawn: { x: 32.5, z: 83.5, facing: 'up' }, legend, ...rows, objects: P.objects.map(canonicalObject),
};
const { level, warnings } = normalizeLevel(raw);
level.objects = level.objects.map(canonicalObject);
const errors = [...warnings, ...validateLevel(level), ...normalizedChanges(raw, level).map((p) => `normalisation changed ${p}`)];
const vg = gridFromLevel(level);
const vp = placerFromLevel(vg, level);
const report = checkLevel(level, { g: vg, P: vp }, { strict: true, routes: [
  ['entrance to nave', [32.5, 83.5], [32.5, 59.5]],
  ['nave to vault', [32.5, 58.5], [10.5, 52.5]],
  ['nave to ossuary', [32.5, 58.5], [54.5, 52.5]],
  ['nave to last vigil', [32.5, 59.5], [32.5, 22.5]],
  ['last vigil through seal', [32.5, 22.5], [32.5, 10.5]],
] });
errors.push(...report.errors, ...report.warnings);
const walk = createWalkModel(vg, vp, level);
for (const o of level.objects) {
  if (o.type === 'enemy') for (const [x, z] of enemyStartPoints(o)) {
    if (!walk.reachableAt(x, z)) errors.push(`${o.id}: enemy start (${x}, ${z}) is unreachable`);
  }
  if (o.type === 'chest') { const f = vp.chestFront(o); if (!walk.reachableAt(f.x, f.z)) errors.push(`${o.id}: chest front is unreachable`); }
  if (o.type === 'waystone' && !walk.reachNear(o.x, o.z, 1.2)) errors.push(`${o.id}: no reachable attune point`);
}
const safes = [level.spawn, ...level.objects.filter((o) => o.type === 'waystone')];
for (const e of level.objects.filter((o) => o.type === 'enemy' && o.kind !== 'golem')) for (const s of safes) {
  if (Math.hypot(e.x - s.x, e.z - s.z) < ENEMY_DEFS[e.kind].aggro + e.radius + 2) errors.push(`${e.id}: spawn/waystone aggro margin is too small`);
}
for (let z = 2; z <= 18; z++) for (let x = 19; x <= 45; x++) {
  if (g.T(x, z) !== 'k' || g.L(x, z) !== 2) errors.push(`arena floor is not flat at ${x},${z}`);
}
const text = serializeLevel(level);
if (serializeLevel(parseLevel(text).level) !== text) errors.push('parse/serialize round trip differs');
if (serializeLevel(normalizeLevel(JSON.parse(text)).level) !== text) errors.push('normalisation round trip differs');
if (!args.quiet) {
  console.log(levelStats(level));
  console.log(report.info.join('\n'));
  const xp = level.objects.filter((o) => o.type === 'enemy' && o.kind !== 'golem').reduce((sum, o) => sum + scaledDef(o.kind, o.level, o.elite).xp * Number(o.count), 0);
  console.log(`Pre-boss XP: ${xp}; enemies: ${level.objects.filter((o) => o.type === 'enemy').reduce((sum, o) => sum + Number(o.count), 0)}`);
}
if (args.ascii) console.log(level.tiles.join('\n'));
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
if (args.check) {
  if (!fs.existsSync(out) || fs.readFileSync(out, 'utf8').replace(/\r\n/g, '\n') !== text) { console.error('Generated level differs; regenerate it.'); process.exit(1); }
  console.log('Ashen Crypt is byte-identical; all checks passed.');
} else { fs.mkdirSync(path.dirname(out), { recursive: true }); fs.writeFileSync(out, text); console.log('Ashen Crypt written; all checks passed.'); }
