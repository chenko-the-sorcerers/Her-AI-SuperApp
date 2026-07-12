# HerAI Handover Index

**Updated:** 12 Juli 2026
**Pre-delivery snapshot:** `design` ahead 30 commit dari `origin/design` sebelum commit handover ini.
**Delivery:** user mengizinkan hasil checkpoint ini dipush hanya ke branch `design`. AI berikutnya tetap wajib mengecek status aktual; izin tersebut tidak otomatis berlaku untuk push baru.

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
| Python untuk AI | 8 topik, 8 latihan, 10 kuis, 4 diskusi; pipeline OK, enrichment belum parity | `ai-python.js` (1995 baris) | `20260712-python-v8` |
| Shared course CSS | semua module course | `modules.css` (10064 baris) | `20260712-ai-modern-final-v4` |

## Roadmap Berikutnya

1. Jadikan Konsep AI Modern v4 sebagai regression baseline; jangan rebuild tanpa bug terverifikasi.
2. Migrasikan/finalkan Evaluation memakai Universal Course Standard.
3. Migrasikan/finalkan Evolution of AI dengan standar yang sama.
4. Kembali enrich Python sampai parity dengan flow pemula terbaru.
5. Migrasikan AI Fundamentals/Pengantar AI.

## Dokumen Historis

File berikut tetap disimpan sebagai riwayat keputusan atau prompt tugas lama. Status/cache di dalamnya dapat kedaluwarsa dan tidak boleh mengalahkan current source of truth:

- `REASONING_FINAL_CHECKPOINT.md`
- `HANDOVER_COURSE_FILESYSTEM_REFACTOR.md`
- `MERGE_GUIDE_AI_MODERN_TEAM.md`
- `MERGE_GUIDE_REASONING_TEAM.md`
- `PROMPT_REASONING_MATERI_BARU.md`
- `PROMPT_REASONING_NAZRIL_AUDIT_FIX.md`
- `PROMPT_REASONING_NAZRIL_CANONICAL.md`

## Aturan Singkat yang Tidak Boleh Dilanggar

- Source chapter canonical jangan diubah untuk styling.
- Jangan ganti localStorage keys tanpa migrasi.
- Jangan ubah route existing atau dashboard shell tanpa scope user.
- Semua `sourcePath` harus full path yang nyata.
- Bump JS dan CSS bersama jika controller/style berubah.
- Screenshot desktop dan mobile; jangan hanya mengandalkan `scrollWidth`.
- Jangan commit file untracked milik user yang tidak terkait.
- Jangan push tanpa izin user.
