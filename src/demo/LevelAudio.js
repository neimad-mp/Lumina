/** Opt-in audio profiles. Unknown/absent profiles preserve the original level soundtrack. */
const base = import.meta.env.BASE_URL;
export const ASHEN_MUSIC = Object.freeze({
  'ashen-exploration': { url: `${base}audio/ashen-crypt/exploration.ogg`, fallback: 'emberfall', gain: 0.65 },
  'ashen-battle': { url: `${base}audio/ashen-crypt/battle.ogg`, fallback: 'battle', gain: 0.65 },
  'ashen-boss': { url: `${base}audio/ashen-crypt/boss.ogg`, fallback: 'boss', gain: 0.65,
    sections: { A: { start: 0, end: 54.5 }, B: { start: 54.5, end: 109 } } },
});
const DEFAULT = Object.freeze({ exploration: 'emberfall', battle: 'battle', boss: 'boss', dungeon: false });
const ASHEN = Object.freeze({ exploration: 'ashen-exploration', battle: 'ashen-battle', boss: 'ashen-boss', dungeon: true });

/** @param {Partial<import('../engine/level/types.js').LevelEnvironment>} [env] */
export function levelAudio(env = {}) { return env.audioProfile === 'ashen-crypt' ? ASHEN : DEFAULT; }

/** @param {import('../engine/audio/AudioSystem.js').AudioSystem} audio
 * @param {Partial<import('../engine/level/types.js').LevelEnvironment>} env */
export function configureLevelAudio(audio, env) {
  const profile = levelAudio(env);
  if (profile.dungeon) {
    audio.registerRecordedMusic(ASHEN_MUSIC);
    audio.prepareMusic();
  }
  return profile;
}
