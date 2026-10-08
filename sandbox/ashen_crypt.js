/** Ashen Crypt acceptance: reuse the existing fixed-step bot, driving real player key events. */
import * as play from './combat_play.js';
import { levelLook, applyLevelLook } from '../src/demo/WeatherLook.js';

const PLAN = [
  { do: 'talk', npc: 'sister_vesper', zone: 'entrance' },
  { do: 'open', chest: 'chest_supplies', zone: 'entrance' },
  { do: 'rest', stone: 'waystone_entrance', zone: 'entrance' },
  { do: 'clear', groups: ['nave_sentries', 'nave_bats'], zone: 'nave' },
  { do: 'clear', groups: ['vault_guards', 'vault_elite'], zone: 'vault' },
  { do: 'open', chest: 'chest_vault', zone: 'vault' },
  { do: 'walk', to: [32.5, 58.5], zone: 'nave' },
  { do: 'clear', groups: ['ossuary_archers', 'ossuary_bats'], zone: 'ossuary' },
  { do: 'open', chest: 'chest_ossuary', zone: 'ossuary' },
  { do: 'walk', to: [32.5, 58.5], zone: 'nave' },
  { do: 'clear', groups: ['reliquary_guards', 'reliquary_hexers'], zone: 'reliquary' },
  { do: 'open', chest: 'chest_reliquary', zone: 'reliquary' },
  { do: 'rest', stone: 'waystone_vigil', zone: 'vigil' },
  { do: 'shop', npc: 'keeper_morrow', buy: ['Whetstone', 'Ironbark Tonic', 'Warding Charm', 'Healing Draught'], zone: 'vigil' },
  { do: 'die', group: 'ashen_warden', zone: 'sanctum', planned: true },
  { do: 'respawn', zone: 'vigil', planned: true },
  { do: 'rest', stone: 'waystone_vigil', zone: 'vigil' },
  { do: 'shop', npc: 'keeper_morrow', buy: ['Healing Draught'], zone: 'vigil' },
  { do: 'boss', zone: 'sanctum' },
  { do: 'collect', time: 6, zone: 'sanctum' },
  { do: 'wait', time: 2.5, shot: 'results', zone: 'sanctum' },
  { do: 'done' },
];

/** No teleports, god mode, kills or stat overrides: start at the real spawn with the normal kit. */
export async function start() {
  const result = await play.start({ plan: PLAN, route: 'boss', renderEvery: 4 });
  if (window.__game.game.level.name !== 'Ashen Crypt') throw new Error('Load Ashen Crypt before starting its acceptance run');
  return result;
}

/** Run in bounded chunks; each shot request returns control to the browser harness. */
export const until = play.until;

/** Dungeon-specific assertions, because the existing bot's verify() targets Cinderwatch content. */
export function verify() {
  const r = play.report();
  const g = window.__game;
  const sys = g.game.combat;
  const stats = sys.stats();
  const failures = [...r.failed];
  const want = (ok, message) => { if (!ok) failures.push(message); };
  want(r.done, `plan did not finish: ${r.task}`);
  for (const id of ['chest_supplies', 'chest_vault', 'chest_ossuary', 'chest_reliquary']) want(r.chests.includes(id), `${id} not opened`);
  want(r.player.checkpoint === 'waystone_vigil', 'final waystone not attuned');
  want(r.counts.deaths >= 1 && r.counts.respawns >= 1, 'planned death/respawn did not occur');
  want(r.bossDefeated, 'Warden not defeated');
  want(r.log.some((s) => s.includes('boss phase 2')) && r.log.some((s) => s.includes('boss phase 3')), 'boss phases missing');
  want(!sys._boss.arena.active, 'victory did not open the seal');
  want(r.player.level >= 4 && r.kills >= 21, 'combat/progression incomplete');
  want(r.bought.includes('Whetstone'), 'checkpoint shop not exercised');
  want(/Cleared/.test(window.__play.bot.results ?? ''), 'results card missing');
  want(stats.programs === stats.programsAtLoad, 'shader compiled after load');
  want(g.state().pointLights === 12, 'fixed light pool changed');
  want(sys.pc.upgrades.attack >= 3 && sys.pc.upgrades.maxHp >= 40 && sys.pc.upgrades.maxMp >= 10, 'chest or boss core upgrade missing');
  if (failures.length) throw new Error(`Ashen Crypt acceptance: ${failures.join('; ')}`);
  return { verdict: 'ok', summary: play.summary(), counts: r.counts, chests: r.chests, bought: r.bought,
    checkpoint: r.player.checkpoint, phases: r.boss.phaseTimes, stats, upgrades: sys.pc.upgrades };
}

/** Existing and unknown level presets must leave lighting colours/multipliers untouched. */
export function lookRegression() {
  const lighting = window.__game.game.lighting;
  const neutral = levelLook();
  if (JSON.stringify(neutral) !== JSON.stringify(levelLook({ look: 'unknown-preset' }))) throw new Error('Unknown look changed defaults');
  if (neutral.sunMul !== 1 || neutral.ambientMul !== 1 || neutral.exposureMul !== 1 || neutral.temperature !== 0 || neutral.saturation !== 0) throw new Error('Default look changed');
  const colours = () => [lighting.sun.color, lighting.hemi.color, lighting.hemi.groundColor, lighting.fog.color].map((c) => c.toArray());
  const before = JSON.stringify(colours());
  applyLevelLook(lighting, {});
  applyLevelLook(lighting, { look: 'unknown-preset' });
  if (before !== JSON.stringify(colours())) throw new Error('Absent/unknown look changed colours');
  return { verdict: 'ok', neutral };
}
