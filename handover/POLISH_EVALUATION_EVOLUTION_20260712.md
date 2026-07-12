# Reasoning Shell Polish Evaluation and Evolution of AI - 12 Juli 2026

## Scope

- Polish visual dan responsif untuk module Evaluation AI dan Evolution of AI.
- Menyamakan layout runtime dengan module Reasoning: `lesson-layout`, `lesson-hero`, `lesson-material-panel`, `lesson-tabs`, `lesson-right-panel`, progress card, daftar materi, dan catatan.
- Route utama `#/participant-ai-evaluation` dan `#/participant-ai-evolution` langsung membuka materi topik pertama, mengikuti pola Reasoning yang tidak menampilkan overview card terlebih dahulu.
- Tidak mengubah routing publik, source chapter, localStorage key, atau fitur course lain.
- Perubahan style tetap scoped ke `.ai-evaluation-page` dan `.ai-evolution-page`.

## File Diubah

- `css/frontend/fellow-dashboard/modules.css`
  - Menambah styling scoped untuk hero, module card, chapter nav, activity tabs, chapter content, callout, table, timeline, practice, quiz, discussion, pager, dan responsive mobile.
  - Menambah override agar Evaluation/Evolution mengikuti canonical Reasoning lesson shell tanpa frame ganda.
- `index.html`
  - Bump cache buster `modules.css` ke `20260712-advanced-reasoning-shell-v1`.
  - Bump cache buster `ai-evaluation.js` dan `ai-evolution.js` ke `20260712-reasoning-shell-v1`.
- `js/frontend/fellow-dashboard/ai-evaluation.js`
  - Default route membuka topik pertama.
  - Renderer memakai struktur Reasoning lesson shell dan sidebar kanan.
- `js/frontend/fellow-dashboard/ai-evolution.js`
  - Default route membuka topik pertama.
  - Renderer memakai struktur Reasoning lesson shell dan sidebar kanan.
- `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-advanced/05-evaluation/materi.html`
  - Page class ditambah `reasoning-scaffold-page` untuk mewarisi baseline layout Reasoning.
- `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-advanced/06-evolution-of-ai/materi.html`
  - Page class ditambah `reasoning-scaffold-page` untuk mewarisi baseline layout Reasoning.

## File Tidak Diubah

- `js/router.js`
- Folder source chapter Evaluation dan Evolution.
- Course lain seperti AI Modern, Reasoning, Python untuk AI, Math for AI, Machine Learning, CV, dan NLP.

## Verifikasi

- `node --check js/router.js` lulus.
- `node --check js/frontend/fellow-dashboard/ai-evaluation.js` lulus.
- `node --check js/frontend/fellow-dashboard/ai-evolution.js` lulus.
- `git diff --check` lulus.
- `node scripts/check-participant-routes.mjs` lulus: Total 113, 0 failed.

## Catatan Smoke Test

- Static route checker lulus untuk semua route participant, termasuk:
  - `#/participant-ai-evaluation`
  - `#/participant-ai-evolution`
- Browser/HTTP smoke lokal tidak berhasil dijalankan di environment ini karena background static server langsung mati dan Edge headless crash pada GPU sandbox. Tidak ada file screenshot atau profil browser sementara yang dimasukkan ke commit.

## Catatan Merge

- Perubahan utama berada di akhir `modules.css`.
- Jika ada conflict CSS, pertahankan block bertanda `Evaluation AI and Evolution of AI scoped polish` dan override `Align advanced AI modules to the canonical Reasoning lesson shell`.
- Karena `modules.css` dan dua controller berubah, pastikan cache buster di `index.html` ikut versi `20260712-advanced-reasoning-shell-v1` dan `20260712-reasoning-shell-v1`.
