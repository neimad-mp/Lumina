import { AudioSystem } from '../src/engine/audio/AudioSystem.js';
import { CombatMusic, VICTORY_STINGER } from '../src/demo/combat/CombatMusic.js';
import { ASHEN_MUSIC, levelAudio, configureLevelAudio } from '../src/demo/LevelAudio.js';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const expect = (value, message) => { if (!value) throw new Error(message); };

/** Render an actual decoded recording across its loop boundary, plus a dense combat mix. */
async function render(id, buffer, section = 'A', dense = false) {
  const def = ASHEN_MUSIC[id];
  const bounds = def.sections?.[section];
  const duration = bounds ? bounds.end - bounds.start : buffer.duration;
  const seconds = duration + 0.3;
  const ctx = new OfflineAudioContext(2, Math.ceil(seconds * 22050), 22050);
  const audio = new AudioSystem({ context: ctx });
  audio.registerRecordedMusic({ [id]: def });
  audio.recordings.supply(def.url, buffer);
  await audio.unlock();
  audio.startMusic({ track: id, fade: 0.05 });
  if (section === 'B') audio.setMusicSection('B');
  if (dense) for (let t = 0.5; t < 10; t += 0.25) {
    audio.playSfx('hit', { delay: t, volume: 0.9 });
    audio.playSfx('windup', { delay: t + 0.07, volume: 0.7 });
    audio.playSfx('swingHeavy', { delay: t + 0.12, volume: 0.8 });
  }
  audio.prescheduleOffline(seconds);
  const output = await ctx.startRendering();
  let peak = 0; let square = 0; let finite = true; let seamJump = 0;
  const edge = Math.round(duration * output.sampleRate);
  for (let ch = 0; ch < output.numberOfChannels; ch++) {
    const x = output.getChannelData(ch);
    for (let i = 0; i < x.length; i++) {
      finite &&= Number.isFinite(x[i]); peak = Math.max(peak, Math.abs(x[i])); square += x[i] ** 2;
      if (i > 0 && Math.abs(i - edge) < 220) seamJump = Math.max(seamJump, Math.abs(x[i]-x[i-1]));
    }
  }
  const rms = Math.sqrt(square / (output.length * output.numberOfChannels));
  audio.dispose();
  expect(finite && peak < 0.95 && rms > 0.001, `${id}/${section}: invalid/clipping/silent mix`);
  expect(seamJump < 0.15, `${id}/${section}: large loop-boundary discontinuity`);
  return { id, section, dense, duration, peak, rms, seamJump, finite };
}

/** Delayed decode must never override a stop, another track, victory or disposal. */
async function cancellation(buffer) {
  const outcomes = [];
  for (const action of ['stop', 'supersede', 'victory', 'dispose']) {
    const audio = new AudioSystem();
    await audio.unlock();
    audio.registerRecordedMusic({ pending: { url: 'supplied-test-buffer', fallback: 'battle' } });
    let release;
    audio.recordings.load = () => new Promise((resolve) => { release = resolve; });
    audio.startMusic({ track: 'pending', fade: 0.05 });
    expect(audio.recordedMusicState.fallback, `${action}: no synthesized loading fallback`);
    if (action === 'stop') audio.stopMusic({ fade: 0.05 });
    if (action === 'supersede') audio.startMusic({ track: 'emberfall', fade: 0.05 });
    if (action === 'victory') audio.playStinger('victory', { duck: 0 });
    if (action === 'dispose') audio.dispose();
    audio.recordings.buffers.set('supplied-test-buffer', buffer);
    release(buffer);
    await wait(100);
    expect(!audio.recordedMusicState.playing && audio.recordedMusicState.activeVoices === 0, `${action}: late recording start`);
    outcomes.push({ action, verdict: 'ok' });
    audio.dispose();
  }
  return outcomes;
}

async function run() {
  const out = document.getElementById('result');
  out.textContent = 'Checking actual packaged audio…';
  const audio = new AudioSystem();
  configureLevelAudio(audio, { audioProfile: 'ashen-crypt' });
  await audio.prepareMusic();
  expect(audio.ctx === null, 'preloading created an AudioContext before a gesture');
  await audio.unlock();
  await audio.prepareMusic();
  expect(audio.recordedMusicState.loaded.length === 3 && !Object.keys(audio.recordedMusicState.errors).length, 'recordings failed to load/decode');
  const music = new CombatMusic(audio, { audioProfile: 'ashen-crypt' });
  audio.startMusic({ track: music.musicTrack, fade: 0.05 });
  expect(audio.recordedMusicState.playing === 'ashen-exploration', 'initial exploration is not recorded');
  music.update(0.8, true, false);
  expect(audio.recordedMusicState.playing === 'ashen-battle', 'engagement did not select recorded combat');
  music.update(4, false, false);
  expect(audio.recordedMusicState.playing === 'ashen-exploration', 'calm did not restore recorded exploration');
  music.update(0.1, true, true); music.setSection('B');
  expect(audio.musicSection === 'B' && audio.recordedMusicState.playing === 'ashen-boss', 'boss escalation missing');
  music.victory();
  expect(!audio.recordedMusicState.playing, 'boss continues under victory');
  music.update(VICTORY_STINGER + 0.1, false, false);
  expect(audio.recordedMusicState.playing === 'ashen-exploration', 'victory handoff incorrect');
  music.death(); expect(!audio.musicPlaying, 'death did not stop music');
  music.respawn(); expect(audio.musicTrack === 'ashen-exploration', 'respawn track incorrect');
  music.death(); music.setPlaying(false); music.respawn();
  expect(!audio.musicPlaying, 'respawn ignored music switched off during death');
  music.setPlaying(true); music.update(0.1,true,true); music.setSection('B'); music.victory();
  music.setPlaying(false); music.setPlaying(true);
  expect(!audio.recordedMusicState.playing, 'toggle on restarted a track before victory cue finished');
  music.update(VICTORY_STINGER+0.1,false,false);
  expect(audio.recordedMusicState.playing === 'ashen-exploration', 'deferred victory toggle did not resume');
  audio.stopMusic({ fade: 0.05 }); music.update(2, true, true);
  expect(!audio.musicPlaying, 'combat restarted music after toggle off');
  audio.startMusic({ track: music.musicTrack, fade: 0.05 }); music.setSection('A');
  audio.muted = true; expect(audio.muted, 'master mute failed'); audio.muted = false;
  for (let i = 0; i < 12; i++) {
    audio.startMusic({ track: i % 2 ? 'ashen-battle' : 'ashen-exploration', fade: 0.05 });
    await wait(90);
  }
  await wait(2100);
  expect(audio.recordedMusicState.activeVoices === 1, 'retired recorded sources accumulated');
  const live = audio.recordedMusicState;
  const buffers = new Map(audio.recordings.buffers);
  const renders = [];
  for (const id of Object.keys(ASHEN_MUSIC)) {
    renders.push(await render(id, buffers.get(ASHEN_MUSIC[id].url), 'A', id === 'ashen-battle'));
  }
  renders.push(await render('ashen-boss', buffers.get(ASHEN_MUSIC['ashen-boss'].url), 'B', true));
  const cancelled = await cancellation(buffers.get(ASHEN_MUSIC['ashen-battle'].url));
  const broken = new AudioSystem(); await broken.unlock();
  broken.registerRecordedMusic({ invalid: { url:'invalid-test-bytes', fallback:'battle' } });
  broken.recordings.files.set('invalid-test-bytes',Promise.resolve(new ArrayBuffer(8)));
  const diagnostics=[]; const originalWarn=console.warn;
  console.warn=(...args)=>diagnostics.push(args.map(String).join(' '));
  try {
    broken.startMusic({track:'invalid',fade:0.05}); await broken.recordings.load('invalid');
    expect(broken.recordedMusicState.fallback && Object.keys(broken.recordedMusicState.errors).length===1 && diagnostics.length===1,'failed decode fallback/diagnostic missing');
  } finally { console.warn=originalWarn; broken.dispose(); }
  expect(levelAudio().exploration === 'emberfall' && levelAudio({ audioProfile:'unknown' }).boss === 'boss', 'default/unknown profile changed');
  const disabled = new CombatMusic(audio, { audioProfile:'ashen-crypt', music:false });
  audio.stopMusic({ fade:0.05 }); disabled.update(1,true,true); disabled.respawn();
  expect(!audio.musicPlaying, 'disabled level music started');
  audio.dispose(); expect(audio.recordedMusicState.activeVoices === 0, 'dispose leaked sources');
  const result = { verdict:'ok', live, renders, cancelled, expectedFailureDiagnostics:diagnostics,
    profiles:'default/unknown/disabled passed', listening:'human mix review pending playtest' };
  out.textContent = JSON.stringify(result,null,2);
  return result;
}

Object.assign(window, { __recordedAudio: { run } });
document.getElementById('run').onclick = () => run().catch((err) => { document.getElementById('result').textContent = String(err); throw err; });
