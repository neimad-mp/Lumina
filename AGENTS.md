# Lumina: current project instructions

## Authoritative workflow (adopted 2026-10-08)

- `C:\neimad-mp\.lumina_src\lumina-main` is the stable working copy, on branch `main`.
- `C:\neimad-mp\.lumina_src\lumina-test` is the development working copy, on branch `test`.
- Both use `https://github.com/neimad-mp/Lumina.git` as `origin` and share the imported history.
- Make all code, level, asset, and documentation changes in `lumina-test` first. Keep `lumina-main`
  at the last verified stable revision. Never experiment, repair in place, or switch its branch.
- Promote only completed changes after the relevant verification passes. Check that main is
  clean, advance it with a fast-forward, and verify the resulting stable working copy. If a check
  fails, keep main at its previous stable revision and record the failure in test.
- Preserve the supplied project and historical development records. Build on the existing
  engine, editor, combat, and verification tools rather than replacing them without an agreed reason.
- These instructions supersede inherited references to a local-only `master` branch and Claude
  as the current assistant. Preserve historical reports and attribution as historical evidence.

## Adopted game direction

Continue Lumina as a darker Diablo-inspired ARPG / dungeon crawler, drawing on the user's
MU Online (2003) inspirations: iconic wings, visually glowing equipment tiers, item refining
from +0 to +15, upgrade jewels as valuable currency items, and fast dark-fantasy combat.

These are direction and feature goals, not claims about the current implementation. The user
wants visual examples before choosing between the existing HD-2D presentation and 3D characters.
Do not assume a rendering rewrite, networking model, class system, refining failure rules,
or production asset pipeline. Resolve those choices with the user before implementing them.

## Read first

Read `docs/ai/AGENT_ONBOARDING.md`, `CLAUDE.md`, the relevant parts of
`docs/ai/KNOWN_ISSUES.md`, and `docs/architecture/OVERVIEW.md`. Then read the applicable
contracts (`ARCHITECTURE.md`, `docs/contracts/LEVEL_EDITOR.md`, `docs/contracts/COMBAT.md`)
and module source. The existing code wins when historical documentation disagrees.

## Verification and invariants

- Preserve additive contracts, deterministic procedural generation, stable level serialization,
  the fixed light pool, shader warm-up, and combat being opt-in per level.
- Change generated levels through their generators; never overwrite unrelated user levels.
- Keep `npm run typecheck`, `npm run build`, and `npm run docs:check` passing.
- Use `npm run check` for the relevant game, editor, and sandbox pages, and inspect both
  `report.json` and screenshots. Exit status alone is insufficient: inspect page errors, console
  errors, warnings, failed requests, and errors or failed assertions inside eval results.
- For level changes, run `npm run level:check -- <level>` and byte-stable serialization checks.
  Compare before/after scene measurements where rendering changes. Distinguish existing
  composition warnings from errors and from newly introduced problems.
- Do not commit `node_modules`, `dist`, `.check`, logs, scratch levels, or credentials.
- Commit completed verified work with clear messages; do not amend imported history.
- Record remaining limitations honestly. Passing checks does not prove every possible behavior
  is error free; human combat-balance and audio review remain relevant.
