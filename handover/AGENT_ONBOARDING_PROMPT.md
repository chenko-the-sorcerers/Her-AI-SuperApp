# HerAI Fellowship — Agent Onboarding Brief

**Current as of:** 12 Juli 2026
**Canonical copy-paste prompt:** `handover/FIRST_PROMPT.txt`

## Mission

Lanjutkan HerAI Fellowship Vanilla JS SPA tanpa kehilangan source canonical, merusak route/localStorage, atau menurunkan kualitas UI yang sudah dicapai Reasoning dan Konsep AI Modern.

## Read First

1. `AGENTS.md`
2. `GEMINI.md`
3. `handover/README.md`
4. `handover/HANDOVER_UPDATE.md`
5. `handover/UNIVERSAL_COURSE_STANDARD.md`
6. `handover/REGRESSION_AND_ERROR_PLAYBOOK.md`
7. `handover/COURSE_TEMPLATE_GUIDE.md`
8. `handover/REASONING_RULES_AND_PATTERNS.md`
9. `handover/MODULE_STATUS_MAP.md`

Dokumen merge/checkpoint/prompt Reasoning lain adalah historical reference. Jangan mengambil status/cache darinya tanpa verifikasi repo.

## Runtime Snapshot

| Module | Status | Key facts |
|---|---|---|
| Reasoning | COMPLETE canonical | 6 topics, 17 practice, 26 quiz, 4 discussion, cache v35 |
| Konsep AI Modern | COMPLETE v4 | 4 topics, 13 practice, 20 quiz, 4 discussion, beginner enrichment |
| Python untuk AI | Pipeline OK | 8 topics, 8 practice, 10 quiz, 4 discussion; enrichment pending |
| Evaluation | NEXT 1 | scaffold awal; belum four-route universal final |
| Evolution of AI | NEXT 2 | scaffold awal; belum four-route universal final |

## Three Reference Roles

- `ai-reasoning.js`: functional parity, source pipeline, activity behavior.
- `ai-modern.js`: current beginner flow, contextual visual enrichment, request-race guard, activity polish.
- `ai-python.js`: working pipeline plus migration failure lessons.

## Non-Negotiable Rules

- Source chapter canonical tidak diubah untuk memperbaiki UI.
- Tidak ada literal `/pages/.../` pada runtime path.
- Tidak ada `border-radius: 0` visible, dark learning surface, low-contrast body text, atau emoji UI.
- Practice entries punya `fields`; first-visit storage punya fallback.
- Quiz option full-card, clear locked state, review all.
- Discussion reply inline, bukan `window.prompt`.
- Router initializer, controller export, index script, route list, dan cache harus sinkron.
- Shared CSS/controller cache dibump bersama.
- Desktop dan 390px mobile diperiksa dengan screenshot.
- Source integrity before/after transformation dibuktikan.
- Jangan menghapus/commit untracked user files di luar scope.
- Jangan push tanpa izin.

## Next Execution Order

1. Treat AI Modern v4 as frozen regression baseline.
2. Audit and complete Evaluation.
3. Audit and complete Evolution of AI.
4. Enrich Python to parity.
5. Migrate AI Fundamentals.

## Baseline Commands

```bash
git status --short --branch
git log -15 --oneline --decorate
node --check js/frontend/fellow-dashboard/ai-reasoning.js
node --check js/frontend/fellow-dashboard/ai-python.js
node --check js/frontend/fellow-dashboard/ai-modern.js
node --check js/frontend/fellow-dashboard/ai-evaluation.js
node --check js/frontend/fellow-dashboard/ai-evolution.js
node --check js/router.js
node scripts/check-participant-routes.mjs
npx http-server -p 3000 -c-1
```

## Working Method

Gunakan todo berurutan: audit → content map → data contract → pipeline → beginner enrichment → activities → responsive/UI → integrity/route QA → cache → commit → handover. Jangan melompat ke CSS polish sebelum source/data/runtime contract jelas.
