# HerAI Handover Index

**Updated:** 12 Juli 2026 (Final, 19:00 WIB)
**Current HEAD:** `579ace8` — sudah push ke `origin/design`
**Branch:** `design` — sinkron dengan remote

## Urutan Baca Wajib untuk AI Baru

1. `AGENTS.md` — aturan desain dan QA yang paling tinggi prioritasnya.
2. `GEMINI.md` — workflow, scope, izin, commit, dan larangan push.
3. `handover/README.md` — peta dokumen ini.
4. `handover/HANDOVER_UPDATE.md` — checkpoint aktual dan hasil kerja lengkap.
5. `handover/UNIVERSAL_COURSE_STANDARD.md` — standar semua materi/course/activity.
6. `handover/REGRESSION_AND_ERROR_PLAYBOOK.md` — error nyata dan guardrail.
7. `handover/COURSE_TEMPLATE_GUIDE.md` — urutan implementasi course baru.
8. `handover/REASONING_RULES_AND_PATTERNS.md` — detail canonical pipeline Reasoning.
9. `handover/MODULE_STATUS_MAP.md` — status dan urutan roadmap.
10. `handover/FIRST_PROMPT.txt` — prompt siap copas untuk session AI baru.

## Current Source of Truth

| Dokumen | Fungsi |
|---|---|
| `HANDOVER_UPDATE.md` | Semua hasil kerja, commit, checkpoint, cache, status module, dan next plan |
| `UNIVERSAL_COURSE_STANDARD.md` | Kontrak universal materi, latihan, kuis, diskusi, UI, data, route, cache, QA |
| `REGRESSION_AND_ERROR_PLAYBOOK.md` | Daftar bug/regresi yang pernah terjadi dan pencegahannya |
| `COURSE_TEMPLATE_GUIDE.md` | Checklist teknis membuat/migrasi course |
| `REASONING_RULES_AND_PATTERNS.md` | Implementasi canonical Reasoning dan pola renderer |
| `MODULE_STATUS_MAP.md` | Matriks status module |
| `AGENT_ONBOARDING_PROMPT.md` | Brief onboarding ringkas namun lengkap |
| `FIRST_PROMPT.txt` | Teks pertama yang ditempel ke AI baru |

## Runtime Baseline

| Module | Baseline | Controller | Cache |
|---|---|---|---|
| Reasoning | 6 topik, 17 latihan, 26 kuis, 4 diskusi; canonical complete | `ai-reasoning.js` (2646 baris) | `20260712-reasoning-final-v35` |
| Konsep AI Modern | 4 topik, 13 latihan, 20 kuis, 4 diskusi; complete v4 | `ai-modern.js` (1181 baris) | `20260712-ai-modern-final-v4` |
| Python untuk AI | 8 topik + beginner enrichment, 12 latihan, 20 kuis, 4 diskusi; COMPLETE parity | `ai-python.js` (1994 baris) | `20260712-python-v9` |
| Shared course CSS | semua module course | `modules.css` (12051 baris) | `20260712-python-v9` |
| Evaluation | Materi + styling polish; 1 route | `ai-evaluation.js` (363 baris) | — |
| Evolution of AI | Materi + styling polish; 1 route | `ai-evolution.js` (370 baris) | — |

## Roadmap Berikutnya

1. ✅ Jadikan Konsep AI Modern v4 sebagai regression baseline.
2. ✅ Selesaikan Python enrichment sampai parity dengan Modern.
3. 🔄 Finalkan Evaluation ke empat route dan Universal Course Standard.
4. 🔄 Finalkan Evolution of AI ke empat route dan standard yang sama.
5. ⏳ Migrasikan AI Fundamentals/Pengantar AI.

## Dokumen Historis

File berikut tetap disimpan sebagai riwayat keputusan atau prompt tugas lama. Status/cache di dalamnya dapat kedaluwarsa dan tidak boleh mengalahkan current source of truth:

- `REASONING_FINAL_CHECKPOINT.md`
- `HANDOVER_COURSE_FILESYSTEM_REFACTOR.md`
- `MERGE_GUIDE_AI_MODERN_TEAM.md`
- `MERGE_GUIDE_REASONING_TEAM.md`
- `PROMPT_REASONING_MATERI_BARU.md`
- `PROMPT_REASONING_NAZRIL_AUDIT_FIX.md`
- `PROMPT_REASONING_NAZRIL_CANONICAL.md`

Dokumen baru dari tim:
- `POLISH_EVALUATION_EVOLUTION_20260712.md` — styling polish log
- `PRODUCTION_ROUTE_FREEZE_20260712.md` — route freeze log

## Aturan Singkat yang Tidak Boleh Dilanggar

- Source chapter canonical jangan diubah untuk styling.
- Jangan ganti localStorage keys tanpa migrasi.
- Jangan ubah route existing atau dashboard shell tanpa scope user.
- Semua `sourcePath` harus full path yang nyata.
- Bump JS dan CSS bersama jika controller/style berubah.
- Screenshot desktop dan mobile; jangan hanya mengandalkan `scrollWidth`.
- Jangan commit file untracked milik user yang tidak terkait.
- Jangan push tanpa izin user.
