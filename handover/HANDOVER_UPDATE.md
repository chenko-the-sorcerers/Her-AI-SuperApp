# HerAI Development Handover — Current Checkpoint

**Tanggal:** 12 Juli 2026
**Branch:** `design`
**Pre-delivery snapshot:** ahead 30 commit dari `origin/design` sebelum commit handover
**Delivery authorization:** user mengizinkan checkpoint ini dipush hanya ke branch `design`
**Scope checkpoint:** Reasoning, Python untuk AI, Konsep AI Modern, dan standar universal untuk course berikutnya.

Angka ahead adalah snapshot sebelum commit dan push dokumentasi ini. AI berikutnya wajib menjalankan `git status --short --branch` lagi. Izin push untuk delivery ini tidak diwariskan ke pekerjaan berikutnya. Jangan menganggap file untracked sebagai sampah; banyak di antaranya milik user atau hasil audit sebelumnya.

## 1. Executive Summary

- Reasoning sudah COMPLETE dan menjadi canonical functional template.
- Konsep AI Modern sudah COMPLETE v4 dan menjadi baseline enrichment pemula/visual terbaru.
- Python untuk AI sudah mempunyai pipeline dan seluruh activity route, tetapi materi masih perlu enrichment sampai parity.
- Evaluation dan Evolution of AI sudah mempunyai scaffold/controller awal, tetapi belum mencapai standar final universal.
- Seluruh aturan lintas-course sekarang dikonsolidasikan di `UNIVERSAL_COURSE_STANDARD.md`.
- Seluruh bug nyata dan guardrail dikonsolidasikan di `REGRESSION_AND_ERROR_PLAYBOOK.md`.
- Prompt pertama AI baru sudah diperbarui di `FIRST_PROMPT.txt`.

## 2. Commit dan Hasil Kerja Terbaru

### Konsep AI Modern

| Commit | Hasil utama |
|---|---|
| `b5b0950 feat(ai-modern): finalize interactive learning module` | Source-as-main pipeline, 4 topik, hook/lab/quick check/challenge, 13 progressive practices, 20 quiz review, 4 discussion prompts dengan inline reply |
| `4602626 fix(ai-modern): refine beginner learning flow` | 4 roadmap pemula, 4 worked examples, 24 glossary terms, contextual visual explainers, request sequence guard |
| `9537ab6 fix(ai-modern): polish practice and quiz controls` | Practice group cards, custom controls, quiz map sebelum soal, objective icon/text stabil, responsive polish |

### Python untuk AI dan merge baseline

| Commit | Hasil utama |
|---|---|
| `d737e58` | Merge remote-tracking `origin/design` ke branch design |
| `a43f76a` | `renderList` dan `renderFlow` ditambahkan; page tidak lagi crash karena helper hilang |
| `1725928` | Copy Reasoning yang tersisa di halaman Python dibersihkan |
| `db19b6b` | Literal `/pages/.../` pada source path chapter 2–8 diganti full path |
| `8bedf8b` | Debug logging loader Python dibersihkan |
| `f5fa38a` | Missing functions/data practice/quiz/discussion diperbaiki; null/data guard ditambahkan |
| `6a0cb99`, `e7b7b57` | Checkpoint handover Python dan aturan kritis sebelumnya |

Tidak ada push yang dilakukan oleh agent pada rangkaian kerja ini.

## 3. Konsep AI Modern — Complete v4

### Runtime

```text
Routes:
#/participant-ai-modern
#/participant-ai-modern-practice
#/participant-ai-modern-quiz
#/participant-ai-modern-discussion

Controller:
js/frontend/fellow-dashboard/ai-modern.js

Pages/source:
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/
  ai-fundamentals/03-konsep-ai-modern/

Cache:
ai-modern.js?v=20260712-ai-modern-final-v4
modules.css?v=20260712-ai-modern-final-v4
```

### Materi

- 4 topik: Foundation Models, Transformer, AI Agents, Sistem AI Masa Kini.
- 4 source chapter `01-materi.html`–`04-materi.html` tetap utuh dan tidak diedit.
- Pipeline menambahkan orientation, learning nav, hook, lab, quick check dengan retry, mini challenge tersimpan, mistakes/best practices, dan outcome summary.
- Beginner enrichment: roadmap 4 langkah per topik, worked example per topik, total 24 glossary terms.
- Visual kontekstual: Q/K/V formula decoder, tool contract, five-layer system blueprint, dan architecture canvas.
- Original technical source tetap tersedia; visual tidak menggantikannya.
- Request sequencing mencegah response chapter lama menimpa topik yang baru dipilih.

### Latihan

- 13 skenario.
- Progressive disclosure: satu skenario aktif.
- Navigator dikelompokkan menjadi Foundation Models, Transformer, AI Agents, Sistem AI.
- State active dan complete konsisten.
- Save/edit/reset, guide reveal, previous/next, direct topic jump.
- Desktop memakai group cards 2×2; mobile satu kolom.

### Kuis

- 20 soal.
- Question map berada sebelum soal.
- Full-card clickable options.
- Single attempt dengan selected/correct/wrong/locked state.
- Review menampilkan seluruh soal beserta jawaban dan penjelasan.

### Diskusi

- 4 prompt kontekstual.
- Post lokal.
- Inline reply composer; tidak memakai `window.prompt`.

### Verifikasi yang sudah dilakukan

- `node --check` controller/router lulus.
- Participant route checker: 113/113 lulus pada checkpoint implementasi.
- Empat route AI Modern dites.
- Desktop 1024px dan mobile 390px diperiksa.
- Tidak ada document horizontal overflow.
- Source integrity lulus untuk semua empat chapter setelah node injected dikeluarkan dari clone audit.

### Status selanjutnya

AI Modern v4 adalah regression baseline. Jangan rebuild atau mengubah source chapter hanya karena Evaluation/Evolution akan memakai pola yang sama. Perubahan berikutnya hanya untuk bug yang dapat direproduksi atau permintaan baru user.

## 4. Reasoning — Canonical Complete

### Runtime

```text
Routes:
#/participant-ai-reasoning
#/participant-ai-reasoning-practice
#/participant-ai-reasoning-quiz
#/participant-ai-reasoning-discussion

Controller:
js/frontend/fellow-dashboard/ai-reasoning.js (2646 lines pada checkpoint)

Source:
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/
  ai-fundamentals/04-reasoning/chapters/{01..06}-full.html

Cache:
ai-reasoning.js?v=20260712-reasoning-final-v35
```

### Hasil final

- 6 topik source-as-main.
- 17 skenario practice grouped by topic.
- 26 soal quiz, full-card, single attempt, review all.
- 4 discussion prompts dengan inline reply.
- Hook, concept lab, quick check, challenge, prompt pattern, mistakes/best practices, summary.
- Source filtering dan numbering cleanup tanpa mengurangi isi edukasi.
- LocalStorage persistence untuk chapter, practice, quiz, discussion, dan challenge.

### Kontrak localStorage

```text
heraiAiReasoningCurrentChapter
heraiAiReasoningPractice
heraiAiReasoningQuizDone
heraiAiReasoningQuizScore
heraiAiReasoningQuizAnswers
heraiAiReasoningDiscussion
heraiAiReasoningChallengeCh1..6
```

Jangan ubah key tanpa migrasi.

## 5. Python untuk AI — Pipeline OK, Enrichment Pending

### Runtime

```text
Routes:
#/participant-ai-python
#/participant-ai-python-practice
#/participant-ai-python-quiz
#/participant-ai-python-discussion

Controller:
js/frontend/fellow-dashboard/ai-python.js (1995 lines pada checkpoint)

Cache:
ai-python.js?v=20260712-python-v8
```

### Yang sudah bekerja

- 8 pedagogical topics dari 15 source chapters.
- 8 practices dengan navigator dan save/edit/reset.
- 10 quiz questions dengan single-attempt state.
- 4 discussion prompts dengan inline reply.
- Full source paths chapter 1–8 valid.
- Missing helper/functions dan first-visit practice crash sudah diperbaiki.
- Copy/label Reasoning yang terbawa sudah dibersihkan.

### Yang belum parity

- Data CHAPTERS perlu hook/lab/quick check/challenge yang spesifik per topik.
- Perlu beginner roadmap, worked examples, glossary, dan visual code/data explainers.
- Practice dan quiz dapat diperdalam setelah audit terhadap source canonical.
- Pyodide playground belum menjadi bagian source flow yang matang.
- Perlu audit ulang desktop/mobile memakai Universal Course Standard.

### Kontrak localStorage

```text
heraiAiPythonCurrentChapter
heraiAiPythonPractice
heraiAiPythonQuizDone
heraiAiPythonQuizScore
heraiAiPythonQuizAnswers
heraiAiPythonDiscussion
heraiAiPythonChallengeChN
```

## 6. Error yang Sudah Terjadi dan Tidak Boleh Terulang

Ringkasan; detail ada di `REGRESSION_AND_ERROR_PLAYBOOK.md`.

### Python migration errors

- Helper/function terlewat saat copy Reasoning.
- Literal `...` dipakai dalam `sourcePath` runtime.
- `PRACTICES.fields` tidak ada.
- `getSavedPractice()` mengembalikan null pada first visit.
- `PRACTICE_TOPICS` dan copy HTML masih memakai label Reasoning.
- Initializer router berbeda dengan export controller.
- Script controller belum terdaftar di `index.html`.

### AI Modern visual/runtime errors

- CSS scoped block hilang setelah merge walau JS/pages masih ada.
- Class renderer tidak sama dengan selector CSS, termasuk mistakes/practices dan outcomes.
- JS state class tidak sama dengan CSS (`active` vs `is-active`).
- Guide/pagination buttons jatuh ke browser default.
- Textarea/lab stage menjadi kolom sempit karena grid/flex pada mixed text nodes.
- Objective markers bertabrakan dengan global source-list pseudo-element.
- Quiz map berada setelah question.
- Fetch chapter race menyebabkan content lama menimpa pilihan terbaru.
- Hanya mengandalkan document `scrollWidth` melewatkan layout yang terbaca buruk.
- Cache controller/styles tidak dibump bersama.

## 7. Universal Checkpoint untuk Semua Course

Sebelum menyebut module complete:

1. Source canonical utuh dan semua source path nyata.
2. Flow pemula jelas dari orientation sampai summary.
3. Visual menjelaskan proses/relasi, bukan dekorasi.
4. Practice progressive dan seluruh action/persistence dites.
5. Quiz map di atas, full-card options, locked explanation, review all.
6. Discussion memakai inline composer.
7. Tidak ada stale copy dari template course.
8. Tidak ada control browser default atau text pecah sempit.
9. Screenshot desktop dan mobile rapi; no document overflow.
10. Source text integrity before/after lulus.
11. Console bersih dan route checker lulus.
12. JS dan CSS cache buster sinkron.
13. LocalStorage key tetap atau punya migrasi.
14. Commit lokal scoped; tidak push tanpa izin.

## 8. Roadmap yang Disepakati

### Phase 0 — Freeze baseline AI Modern

- Gunakan v4 sebagai acceptance baseline.
- Audit regression singkat sebelum/selama membangun module berikutnya.
- Jangan mengubah source atau UI yang sudah lulus tanpa issue konkret.

### Phase 1 — Evaluation

- Audit source dan controller Evaluation yang sudah ada.
- Tentukan mapping chapter/source sebelum membuat enrichment.
- Lengkapi empat route: materi, latihan, kuis, diskusi.
- Terapkan source-as-main, beginner flow, visual evaluasi, practice progressive, quiz review, discussion inline.
- Gunakan use case seperti metric selection, dataset split, error analysis, human evaluation, safety, cost/latency—tetap mengikuti source canonical.
- Luluskan seluruh Definition of Done universal sebelum commit final.

### Phase 2 — Evolution of AI

- Audit tujuh source chapter/scaffold yang ada.
- Bangun timeline yang menjelaskan perubahan paradigma dan sebab-akibat, bukan daftar tahun.
- Hubungkan era, kemampuan, keterbatasan, pemicu transisi, dan dampak ke sistem modern.
- Lengkapi empat route dengan interaction dan QA yang sama.

### Phase 3 — Python parity

- Enrich 8 topic tanpa mengubah source canonical.
- Tambah roadmap, worked examples, glossary, contextual code/data visuals, quick check, challenge.
- Audit practice/quiz depth dan mobile layout.

### Phase 4 — AI Fundamentals/Pengantar AI

- Migrasi memakai template yang sudah stabil dari tiga module sebelumnya.

## 9. Starter Verification

```bash
git status --short --branch
node --check js/frontend/fellow-dashboard/ai-reasoning.js
node --check js/frontend/fellow-dashboard/ai-python.js
node --check js/frontend/fellow-dashboard/ai-modern.js
node --check js/frontend/fellow-dashboard/ai-evaluation.js
node --check js/frontend/fellow-dashboard/ai-evolution.js
node --check js/router.js
node scripts/check-participant-routes.mjs
npx http-server -p 3000 -c-1
```

## 10. Files yang Dijaga

- Source chapter canonical course yang sudah aktif.
- LocalStorage keys existing.
- Existing route names.
- Dashboard shell, sidebar, topbar, breadcrumb, footer.
- File untracked milik user yang tidak terkait scope.

Jika perubahan membutuhkan salah satu area tersebut, jelaskan dampak dan minta izin sesuai `GEMINI.md`.
