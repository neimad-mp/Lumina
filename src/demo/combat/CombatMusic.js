import { levelAudio } from '../LevelAudio.js';

/**
 * CombatMusic — resolves the level's exploration, battle and boss roles (COMBAT.md §12.2).
 * Engaged ≥ 0.8 s selects battle (fade 1.2 s); calm for 4 s selects exploration (fade 2.0 s).
 * Boss phase 2 selects section B. Victory fades the boss out under the synthesized fanfare,
 * then restores exploration after its last chord. Death fades out (1.5 s); respawn restores
 * exploration when the player's music setting permits it.
 *
 * Nothing starts while the music is off (M, `environment.music === false`, or not yet unlocked):
 * `musicTrack` still says what combat wants, and `Game.setMusic(true)` starts that track.
 */

/**
 * @import { AudioSystem } from '../../engine/audio/AudioSystem.js'
 * @import { LevelEnvironment } from '../../engine/level/types.js'
 */

const ENGAGE_DELAY = 0.8;
const CALM_DELAY = 4;
const FADE = { battle: 1.2, emberfall: 2.0, boss: 1.5 };
/**
 * The victory stinger's length: 4 bars at its own 108 bpm plus the held last chord — 18 beats,
 * 10 s (AudioSystem `buildStinger('victory')`). The level track starts after it.
 */
export const VICTORY_STINGER = (18 * 60) / 108;

export class CombatMusic {
  /**
   * @param {AudioSystem} audio
   * @param {Partial<LevelEnvironment>} env the level
   *   environment (`music === false`: never start a track)
   */
  constructor(audio, env) {
    this.audio = audio;
    this.enabled = env?.music !== false;
    this.profile = levelAudio(env);
    this.reset();
  }

  /** The resolved track combat wants now. */
  get musicTrack() { return this.track; }

  reset() {
    this.track = this.profile.exploration;
    this._engaged = 0;
    this._calm = CALM_DELAY;
    this._victory = -1;
    /** @type {string|null} the track last asked of the AudioSystem (null: ask again) */
    this._requested = null;
    this._silenced = false;
    this._wasPlaying = false;
    this._deferredOn = false;
    /** @type {'A'|'B'} the boss track's section */
    this._section = 'A';
  }

  /**
   * @param {number} dt real seconds (combat active)
   * @param {boolean} engaged
   * @param {boolean} bossFight the boss fight runs (roar to defeat / reset)
   */
  update(dt, engaged, bossFight) {
    if (this._victory >= 0) {
      this._victory -= dt;
      if (this._victory < 0) {
        this.track = this.profile.exploration;
        if (this._deferredOn && this.enabled) this.audio.startMusic({ track: this.track, fade: 2 });
        this._deferredOn = false;
      }
    } else if (bossFight) {
      this.track = this.profile.boss;
      this._engaged = ENGAGE_DELAY;
      this._calm = 0;
    } else if (engaged) {
      this._engaged += dt;
      this._calm = 0;
      if (this._engaged >= ENGAGE_DELAY - 1e-6) this.track = this.profile.battle;
    } else {
      this._calm += dt;
      this._engaged = 0;
      if (this._calm >= CALM_DELAY - 1e-6) this.track = this.profile.exploration;
    }
    this._apply();
  }

  _apply() {
    const audio = this.audio;
    if (!this.enabled || this._silenced || !audio.musicPlaying) {
      this._requested = null;
      return;
    }
    // (a request is made once per change: a track that does not start — still loading — is not
    // asked for again every frame)
    if (this.track === this._requested) return;
    this._requested = this.track;
    const role = this.track === this.profile.exploration ? 'emberfall' : this.track === this.profile.battle ? 'battle' : 'boss';
    if (audio.musicTrack !== this.track) audio.startMusic({ track: this.track, fade: FADE[role] });
    if (this.track === this.profile.boss) audio.setMusicSection?.(this._section);
  }

  /**
   * Boss phase ≥ 2 plays section B (switches at the next bar).
   * @param {'A'|'B'} name
   */
  setSection(name) {
    this._section = name;
    if (this.track === this.profile.boss && this.audio.musicPlaying) this.audio.setMusicSection?.(name);
  }

  /** Player intent survives a death fade; turning on during victory waits for the cue to finish. */
  get playing() { return this._silenced ? this._wasPlaying : this.audio.musicPlaying || this._deferredOn; }

  setPlaying(on) {
    on = !!on && this.enabled;
    if (this._silenced) {
      this._wasPlaying = on;
      if (!on) this.audio.stopMusic();
      return on;
    }
    if (this._victory >= 0) {
      this._deferredOn = on;
      if (!on) this.audio.stopMusic();
      return on;
    }
    if (on) {
      this.audio.startMusic({ track: this.track });
      if (this.track === this.profile.boss) this.audio.setMusicSection(this._section);
    } else this.audio.stopMusic();
    return on;
  }

  /** The boss fell: the stinger (the boss track fades out under it), then the level track. */
  victory() {
    if (this.enabled && this.audio.musicPlaying) this.audio.playStinger?.('victory', { duck: 0 });
    this._victory = VICTORY_STINGER;
    this._deferredOn = false;
    this._section = 'A';
  }

  /** The player fell: fade the music out (1.5 s). */
  death() {
    this._wasPlaying = this.audio.musicPlaying;
    this._silenced = true;
    if (this._wasPlaying) this.audio.stopMusic({ fade: 1.5 });
  }

  /** Respawned: the level track again (if the music was playing). */
  respawn() {
    this._silenced = false;
    this._victory = -1;
    this._deferredOn = false;
    this.track = this.profile.exploration;
    this._engaged = 0;
    this._calm = CALM_DELAY;
    this._section = 'A';
    this._requested = null;
    if (this._wasPlaying && this.enabled) {
      this.audio.startMusic({ track: this.profile.exploration, fade: 2.0 });
      this._requested = this.profile.exploration;
    }
    this._wasPlaying = false;
  }
}
