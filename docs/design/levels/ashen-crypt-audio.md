# Ashen Crypt hybrid audio

The user adopted the Lumina Dungeon Audio Working Brief, then on 2026-10-09 requested three new
production recordings, integration and a browser build, without another sample approval round.
The original brief and unedited provider masters remain in the coordination folder's `audio/`.
The accepted musical direction is dark HD-2D, single-player dungeon fantasy with early-2000s RPG
warmth: restrained strings/drones/bells during exploration, more pulse during combat, heavier
strings/percussion for the Warden. Keep instrumental music, clear attack warnings and useful
synthesized effects. Preserve the positively reviewed combat, visuals and dungeon layout.

## Recordings and provenance

Three original two-minute Eleven Music v2.5 recordings cost 5,400 credits total. The 30-second
previews are not used. Prepared local Ogg Vorbis files and a full catalog live in
[public/audio/ashen-crypt/](../../../public/audio/ashen-crypt/catalog.json). The catalog records
generation IDs, exact prompts, source/output SHA-256, trims, loop overlap, gain, duration,
loudness and tempo estimates. No provider credentials or runtime generation are shipped.

| Role | Prompt tempo/key | Prepared duration | Arrangement |
| --- | --- | --- | --- |
| Exploration | 62 BPM, D minor | 110 s | Low bowed strings/drones, distant bells, sparse frame drums |
| Combat | 104 BPM, D minor | 110 s | Related motif/harmony, cello/viola pulse, muted drums/low brass |
| Warden | 126 BPM, D minor | Two 54.5 s loops | First-half section A, later denser section B for phases 2–3 |

Tempo and key are generation targets. Spectral-flux estimates are approximately 61.5 / 103.4 /
126.0 BPM, with pulse/subdivision ambiguity; they are not manually confirmed. No beat-aligned
transitions depend on them. Interior trims and cyclic overlaps avoid silent restarts. Recordings
are matched to about −18 LUFS, with preparation ceiling −3 dBTP (Vorbis compression can shift
peaks slightly). Playback gain is 0.65 before the existing music bus and master controls.

## Integration contract

- Optional `environment.audioProfile: 'ashen-crypt'` is set through the dungeon generator.
  Missing/unknown profiles keep the original defaults; all six earlier level files are unchanged.
- [LevelAudio.js](../../../src/demo/LevelAudio.js) resolves profiles and the small playback
  catalog. URLs use Vite's base path and work when hosted under a repository subdirectory.
- [RecordedMusic.js](../../../src/engine/audio/RecordedMusic.js) fetches each URL once, caches
  decoded buffers after unlock and owns loop sources. Fades share AudioSystem's music bus;
  retired sources stop on the audio clock and disconnect when ended. Loading failures log a
  diagnostic and leave a synthesized fallback. Stop/death/victory/supersession/disposal cancel
  late starts. Existing synthesized APIs and scores remain available.
- Combat keeps the 0.8 s engagement and 4 s calm delays, crossfades and ten-second victory cue.
  Boss phase two selects B. Respawn respects player intent, including M while dead. M on during
  victory resumes exploration after the cue; master mute/volume and visibility suspension apply.
- Dungeon ambience uses quiet filtered stone-room rumble with no outdoor wind, birds or crickets.
  Fire/water remain tied to their scene sources. It adds no imaginary drip events or SFX overhaul.

## Verification and delivery

Run typecheck/build/docs checks, generator `--check`, level round trips, the existing
[procedural audio QA](../../../sandbox/combat_audio.html),
[recorded audio QA](../../../sandbox/recorded_audio.html) with its
[actions](../../../sandbox/recorded_audio.actions.json), and the full
[dungeon playthrough](../../../sandbox/ashen-crypt.play.json). Inspect complete reports, errors,
warnings, requests and eval results. Recorded QA decodes actual packaged files and supplies
explicit buffers to offline renders across loop boundaries and dense combat mixes. It also
checks cancellation, profile selection, player intent and source cleanup.

Create a browser build with `VITE_DEFAULT_LEVEL=ashen-crypt` and `vite build --base=./` so the
shareable export opens the dungeon by default; ordinary builds still default to Emberfall.
Validate the exported files over HTTP at a subdirectory path, including the title gesture,
real file playback, transitions, victory, death/respawn and original-level regression. Retain
source revision, full verification evidence, asset catalog, archive checksum and launch guidance.
GitHub Pages hosting was explicitly requested by the user. Deploy only the verified export.

Human playtesting still judges atmosphere, arrangement, repetition, loop seams, warning clarity
and comfortable loudness on headphones/speakers. Automated checks do not claim that listening
acceptance has happened. Broader SFX/mix auditing remains AUD-01.
