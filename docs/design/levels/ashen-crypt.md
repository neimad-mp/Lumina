# Ashen Crypt — Beneath the Last Light

The first milestone in Lumina's adopted dark HD-2D, single-player direction (2026-10-08).
Pixel-art characters inhabit torchlit 3D stone rooms. This playable slice builds on the existing
combat, procedural art and editor.

Play `index.html?level=ashen-crypt`; select **Ashen Crypt** on the title screen, or open
`editor.html?open=ashen-crypt` to inspect it. Generate with
`node tools/make-ashen-crypt.mjs`; verify determinism with `--check`.

## Content contract

- A 64 × 88 crypt, traversed south to north, with cutaway walls, charcoal ambient light,
  warm torch pools and low mist. Every room and interaction is reachable from the spawn.
- A safe entrance with Sister Vesper's objective and controls, a supplies chest and a waystone.
- The Broken Nave introduces three sentries and two bats. Side chambers offer an elite and
  an attack upgrade in the west vault, archers and an HP upgrade in the east ossuary.
- The Hollow Reliquary combines four sentries with two hexers and an MP-upgrade chest.
- Last Vigil supplies a safe checkpoint and Keeper Morrow's existing combat shop.
- The Ashen Warden seals the final chamber and uses the existing golem's three phases,
  charge obstacles, summons, telegraphs, rewards and results screen. Victory breaks the seal.
- Twenty ordinary enemies plus one boss. Clearing the ordinary enemies grants 321 XP,
  enough to reach level 4; skipping the side rooms trades preparation for speed.
- Two waystones, four chests, two stationary NPCs, fourteen wall torches and four fires.
  The engine retains its fixed twelve-slot light pool; descriptors may outnumber active lights.
- Death returns the player to the attuned checkpoint with the existing encounter-reset rules.

`environment.look: 'dark-dungeon'` opts into the shared game/editor lighting preset.
`environment.combatText` provides the Warden's epithet and victory subtitle. Missing/unknown
look names and absent text fields preserve existing level behaviour. No default environment
fields or existing level files change.

## Acceptance

The generator must pass structural validation, strict shared composition checks, actual enemy
start/chest/waystone reachability, safe spawn/checkpoint margins, a flat arena and byte-identical
serialization. Browser checks must cover navigation through both side doors and the boss gate,
chest rewards, automatic attunement, checkpoint death/reset, combat, all boss phases and victory.
Inspect game/editor screenshots, twelve-light allocation and shader counts before promotion.
Existing peaceful levels and the Cinderwatch combat fixture must still pass.

Run the fixed-step acceptance through the existing real-key play-through bot:

```sh
node tools/check.mjs --page=index.html --query="level=ashen-crypt&autostart=1&fixedstep=1" --script=sandbox/ashen-crypt.play.json --out=ashen-play --wait=500 --fps=0
```

Inspect `report.json`, including errors inside eval results; harness exit status alone is
insufficient. The dungeon's assertions live in [ashen_crypt.js](../../../sandbox/ashen_crypt.js).

Verified on 2026-10-08: structural and strict composition checks passed with zero errors or
warnings; all 28,116 standable nodes were reachable. Two full fixed-step expert runs reproduced
22,216 frames, 370.267 seconds of game time and digest `f636949e`. Both opened all four chests,
used the shop, recovered at Last Vigil, defeated all boss phases, collected the core and showed
the results card. Shader programs stayed at 42 and the light pool at 12. The run includes one
deliberate death and one lost boss attempt; its successful boss attempt lasted 63.5 seconds.
These are automated acceptance results, not a human difficulty assessment.

Both type-check programs, production build, documentation links, game/editor previews and the
existing combat fixture passed. All six earlier level files stayed byte-identical, with their
original object counts, shader counts, light budgets and combat settings. Their inherited
composition warning counts remain 39 / 10 / 1 / 15 / 17 / 1 for Emberfall / Starfall / Gildhaven /
Brightwater / Willowmere / Cinderwatch respectively; all have zero level-check errors.

This is the first playable dungeon prototype. Its enemies, hero, fires, music and boss reuse the
current procedural assets. The earlier visual concept sheet is a direction reference. Human
combat-balance, audio and art review remain necessary. Equipment slots, wings, item glow tiers,
`+0` to `+15` refining, jewel currency, persistent progression and multiplayer are later decisions.
