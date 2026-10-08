/**
 * Prepared recordings share AudioSystem's context and music bus. No provider calls at runtime.
 * Fetches can start during loading, but decoding waits for the player's audio gesture.
 */
/** @import { AudioSystem } from './AudioSystem.js' */
/** @typedef {{ start: number, end: number }} RecordingSection */
/** @typedef {{ url: string, fallback: string, gain?: number, sections?: Record<string, RecordingSection> }} Recording */

export class RecordedMusic {
  /** @param {AudioSystem} audio */
  constructor(audio) {
    this.audio = audio;
    /** @type {Map<string, Recording>} */
    this.catalog = new Map();
    /** @type {Map<string, Promise<ArrayBuffer|null>>} */
    this.files = new Map();
    /** @type {Map<string, Promise<AudioBuffer|null>>} */
    this.decoding = new Map();
    /** @type {Map<string, AudioBuffer>} */
    this.buffers = new Map();
    /** @type {Map<string, string>} */
    this.errors = new Map();
    this.voices = new Set();
    this.abort = new AbortController();
    this.disposed = false;
  }

  /** @param {Record<string, Recording>} catalog */
  register(catalog) {
    for (const [id, recording] of Object.entries(catalog)) this.catalog.set(id, recording);
  }

  /** Fetch once per URL, without creating an AudioContext or delaying the loading screen. */
  async prepare() {
    await Promise.all([...this.catalog.values()].map((d) => this.buffers.has(d.url) ? null : this.file(d.url)));
    if (this.audio.ctx && !this.disposed) await Promise.all([...this.catalog.keys()].map((id) => this.load(id)));
  }

  /** @param {string} url */
  file(url) {
    if (!this.files.has(url)) {
      const pending = fetch(url, { signal: this.abort.signal }).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.arrayBuffer();
      }).catch((err) => {
        if (!this.disposed) this.fail(url, err);
        return null;
      });
      this.files.set(url, pending);
    }
    return this.files.get(url);
  }

  /** @param {string} id */
  async load(id) {
    const def = this.catalog.get(id);
    const ctx = this.audio.ctx;
    if (!def || !ctx || this.disposed) return null;
    if (!this.decoding.has(def.url)) {
      const pending = this.file(def.url).then(async (bytes) => {
        if (!bytes || this.disposed) return null;
        const buffer = await ctx.decodeAudioData(bytes.slice(0));
        if (this.disposed || ctx !== this.audio.ctx) return null;
        this.buffers.set(def.url, buffer);
        return buffer;
      }).catch((err) => {
        if (!this.disposed) this.fail(def.url, err);
        return null;
      });
      this.decoding.set(def.url, pending);
    }
    return this.decoding.get(def.url);
  }

  /** Offline QA supplies decoded buffers explicitly; there are no hidden test fetches. */
  supply(url, buffer) {
    this.buffers.set(url, buffer);
    this.decoding.set(url, Promise.resolve(buffer));
  }

  fail(url, err) {
    this.errors.set(url, String(err?.message ?? err));
    this.audio._warnMusic(`recording ${url}: ${err?.message ?? err}; using synthesized fallback`);
  }

  /** Create one owned loop voice. Its envelope ends in the shared music bus (already reverberated). */
  start(id, now, fade, section = 'A') {
    const def = this.catalog.get(id);
    const buffer = this.buffers.get(def.url);
    if (!buffer) return null;
    const ctx = this.audio.ctx;
    const bounds = def.sections?.[section] ?? { start: 0, end: buffer.duration };
    const start = Math.max(0, Math.min(bounds.start, buffer.duration - 0.05));
    const end = Math.max(start + 0.05, Math.min(bounds.end, buffer.duration));
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    source.loopStart = start;
    source.loopEnd = end;
    const trim = ctx.createGain();
    trim.gain.value = def.gain ?? 0.4;
    const out = ctx.createGain();
    out.gain.setValueAtTime(0, now);
    out.gain.linearRampToValueAtTime(1, now + Math.max(0.05, fade));
    source.connect(trim).connect(out).connect(this.audio._buses.music);
    const voice = { track: id, recorded: true, source, out, nodes: [source, trim, out],
      sectionName: def.sections ? section : null, sections: def.sections, stopping: false };
    this.voices.add(voice);
    source.onended = () => {
      for (const node of voice.nodes) node.disconnect();
      this.voices.delete(voice);
    };
    source.start(now, start);
    return voice;
  }

  /** Schedule stops on the audio clock so hidden tabs cannot cut a fade short. */
  stop(voice, fade) {
    if (voice.stopping) return;
    voice.stopping = true;
    const now = this.audio.ctx.currentTime;
    const end = now + Math.max(0.05, fade);
    const gain = voice.out.gain;
    gain.cancelAndHoldAtTime(now);
    gain.linearRampToValueAtTime(0, end);
    voice.source.stop(end + 0.01);
  }

  state() {
    return { loaded: [...this.buffers.keys()], errors: Object.fromEntries(this.errors),
      activeVoices: this.voices.size,
      playing: this.audio._music?.recorded ? this.audio._music.track : null,
      fallback: !!this.audio._music?.recordedFallback };
  }

  dispose() {
    this.disposed = true;
    this.abort.abort();
    for (const voice of this.voices) {
      try { voice.source.stop(); } catch { /* already ended */ }
      for (const node of voice.nodes) node.disconnect();
    }
    this.voices.clear();
    this.files.clear();
    this.decoding.clear();
    this.buffers.clear();
  }
}
