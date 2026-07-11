# Merge Guide Team - AI Modern, Evaluation, dan Evolution

Tanggal: 12 Juli 2026
Branch kerja: `design`

Dokumen ini dibuat supaya team lebih gampang merge patch terbaru tanpa kebingungan scope. Fokus perubahan terakhir ada di curriculum participant dashboard, terutama `03 - Konsep AI Modern`, plus checkpoint sebelumnya untuk Evaluation dan Evolution.

## Commit Terbaru yang Perlu Dibawa

```text
a68d73d docs: record modern ai concepts checkpoint
9064246 feat: rebuild modern ai concepts learning module
badd8f9 docs: record canonical evolution checkpoint
c2b1a22 feat: activate canonical evolution of ai module
033ea29 docs: update rebased evaluation checkpoint hash
cd944a6 docs: record canonical ai evaluation checkpoint
```

Jika team hanya butuh perubahan terbaru AI Modern, minimal bawa:

```text
9064246 feat: rebuild modern ai concepts learning module
a68d73d docs: record modern ai concepts checkpoint
```

## Scope Perubahan Terakhir

### AI Modern

Route yang tetap stabil:

```text
#/participant-ai-modern
#/participant-ai-modern-practice
#/participant-ai-modern-quiz
#/participant-ai-modern-discussion
```

File penting:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/
js/frontend/fellow-dashboard/ai-modern.js
css/frontend/fellow-dashboard/modules.css
index.html
materi/lama/konsep-ai-modern.md
materi/baru/konsep-ai-modern-baru.md
materi/konsep-ai-modern.md
handover/HANDOVER_UPDATE.md
handover/MODULE_STATUS_MAP.md
handover/COURSE_HIERARCHY.md
handover/PROMPT_AI_BARU.md
```

Isi final:

- 4 chapter: Foundation Models, Transformer, AI Agents, Sistem AI Masa Kini.
- 12 latihan utama + 1 capstone.
- 20 soal kuis, full-card progressive, single attempt, passing score 75%.
- 4 prompt diskusi dengan thread/reply lokal.
- LocalStorage lama tetap dipakai:
  - `heraiAiModernCurrentChapter`
  - `heraiAiModernPractice`
  - `heraiAiModernQuizDone`
  - `heraiAiModernQuizScore`
  - `heraiAiModernQuizAnswers`
  - `heraiAiModernDiscussion`

### Evolution of AI

Route final:

```text
#/participant-ai-evolution
```

File penting:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-advanced/06-evolution-of-ai/
js/frontend/fellow-dashboard/ai-evolution.js
materi/evolution-of-ai.md
```

Isi final:

- 7 chapter.
- 16 latihan.
- 21 soal kuis.
- 7 prompt diskusi.

### Evaluation AI

Route final:

```text
#/participant-ai-evaluation
```

File penting:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-advanced/05-evaluation/
js/frontend/fellow-dashboard/ai-evaluation.js
materi/evaluation-ai.md
```

## Area yang Sengaja Tidak Diubah

- `js/router.js` tidak diubah pada rebuild AI Modern terakhir.
- AI Modern tidak dipindahkan ke `course-placeholder.html`.
- AI Modern tidak ditambahkan ke `COURSE_SCAFFOLDS`.
- Tidak ada folder legacy `course-catalog/`, `ai-fundamental/`, atau `ai-lab/` yang dibuat ulang.
- Tidak menyentuh backend, GAS, Render config, meeting, scoring, atau fitur dashboard lain.

## Command Sebelum Merge

Jalankan dari root repo:

```bash
git status --short --branch
git fetch origin
git log --oneline --decorate -8
node --check js/router.js
node --check js/frontend/fellow-dashboard/ai-modern.js
node --check js/frontend/fellow-dashboard/ai-evolution.js
node --check js/frontend/fellow-dashboard/ai-evaluation.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
node scripts/check-participant-routes.mjs
git diff --check
```

Route checker terakhir yang valid:

```text
Total: 113 | 113 passed | 0 failed
```

## Cara Merge Aman

Jika team sedang di branch lain:

```bash
git fetch origin
git checkout design
git pull --ff-only origin design
```

Jika branch team mau mengambil patch dari `design`:

```bash
git fetch origin
git checkout <branch-team>
git merge origin/design
```

Jika ada conflict, prioritaskan:

1. Jangan overwrite perubahan fitur lain tanpa baca diff.
2. Untuk `index.html`, pertahankan script registration:
   - `ai-modern.js?v=20260712-ai-modern-rebuild`
   - `ai-evolution.js?v=20260711-ai-evolution-final`
   - `ai-evaluation.js?v=20260711-ai-evaluation-final`
3. Untuk `modules.css`, pertahankan block scoped:
   - `ai-modern-*`
   - `ai-evolution-*`
   - style Evaluation yang sudah ada.
4. Untuk `course-placeholder.js`, pastikan Evaluation dan Evolution tidak kembali menjadi entry aktif `COURSE_SCAFFOLDS`.
5. Untuk `js/router.js`, pastikan route final berikut tetap ke folder canonical:
   - `/participant-ai-modern`
   - `/participant-ai-evaluation`
   - `/participant-ai-evolution`

## Smoke Test Setelah Merge

Buka route:

```text
#/participant-ai-modern
#/participant-ai-modern-practice
#/participant-ai-modern-quiz
#/participant-ai-modern-discussion
#/participant-ai-evaluation
#/participant-ai-evolution
#/participant-ai-reasoning
#/participant-ai-python
#/participant-ai-lab-ml
#/participant-ai-lab-math
```

Cek khusus AI Modern:

- Materi bisa pindah chapter 1 sampai 4.
- Latihan bisa save, edit, reset, dan restore.
- Kuis bisa pilih jawaban, next/prev, submit, lock, dan menampilkan pembahasan.
- Diskusi bisa post, reply, reload, dan input HTML tampil aman sebagai teks.
- Mobile tidak horizontal overflow.

## Catatan Risiko

- Browser interaction smoke untuk rebuild AI Modern belum sempat diverifikasi penuh dari tooling session sebelumnya. HTTP smoke empat route AI Modern sudah `200`, syntax check dan route checker sudah lulus.
- Jika localStorage user lama punya jawaban kuis 10 soal, controller baru akan reset state kuis secara aman karena kuis sekarang 20 soal.
- Push/pull bisa gagal jika credential GitHub masih memakai akun tanpa akses. Gunakan PAT akun yang punya permission repo organisasi.

## Referensi Handover

Baca juga:

```text
handover/HANDOVER_UPDATE.md
handover/MODULE_STATUS_MAP.md
handover/COURSE_HIERARCHY.md
handover/PROMPT_AI_BARU.md
handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
```
