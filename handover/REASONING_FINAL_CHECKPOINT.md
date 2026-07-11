# Reasoning Final - Complete Checkpoint

**Tanggal:** 11 Juli 2026
**Branch:** `design`
**Status:** final canonical, materi baru aktif, belum push
**Sumber materi:** `materi/baru/Reasoning-baru.md`
**Commit visual final:** `7668070 feat: finalize reasoning visual course`
**Commit activity UX:** `8007acb fix: clarify reasoning activity flow`

Dokumen ini adalah checkpoint canonical untuk seluruh pekerjaan submodul `04 - Reasoning`. AI/developer berikutnya wajib membaca dokumen ini setelah `AGENTS.md`, `GEMINI.md`, dan `handover/HANDOVER_UPDATE.md` sebelum mengubah Reasoning.

## Hasil Akhir

Reasoning tidak lagi memakai scaffold `course-placeholder.html`. Empat route final aktif dan tetap stabil:

```text
#/participant-ai-reasoning
#/participant-ai-reasoning-practice
#/participant-ai-reasoning-quiz
#/participant-ai-reasoning-discussion
```

Folder runtime canonical:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/
  materi.html
  latihan.html
  kuis.html
  diskusi.html
  chapters/
    01-full.html
    02-full.html
    03-full.html
    04-full.html
    05-full.html
    practice-full.html
    quiz-source-full.html
    discussion-source-full.html
```

Controller dan styling utama:

```text
js/frontend/fellow-dashboard/ai-reasoning.js
css/frontend/fellow-dashboard/modules.css
index.html
```

`course-placeholder.js` tetap dipakai oleh scaffold course lain dan tidak menjadi sumber runtime Reasoning final.

## Integritas Materi

- Sumber `materi/baru/Reasoning-baru.md` berisi 534 baris, sekitar 30.498 kata, 5 chapter, latihan reflektif, proyek akhir, 15 soal kuis, diskusi, dan referensi.
- Isi sumber tidak dikompres, diringkas, atau dikurangi.
- Materi dipecah ke `chapters/*-full.html` untuk kebutuhan runtime dan route activity.
- Visual renderer memindahkan dan membungkus DOM node, tetapi tidak menghapus atau menulis ulang `textContent` sumber.
- Audit browser membandingkan `textContent` HTML sumber dengan DOM setelah transformasi untuk chapter 1-5; seluruh hasil identik.
- Sumber mempunyai blok Bab 5 yang sangat panjang/repetitif dan data gambar inline. Isinya dipertahankan, sedangkan attachment teknis diberi area scroll agar layout tidak rusak.

## Struktur Course

Reasoning final terdiri dari 5 chapter:

1. Kognisi Mesin: dari Pattern Matching ke Reasoning
2. Paradigma Penalaran: Deduktif, Induktif, Abduktif, dan Kausal
3. Reasoning Internal LLM: CoT, ToT, Scratchpad, dan Native Reasoner
4. Reasoning Eksternal: Planning, ReAct, dan Tool Use
5. Evaluasi, Risiko, dan Arsitektur Verifikasi Reasoning

Setiap chapter memiliki learning objective, konsep utama, analogi, contoh AI/LLM, visual flow, prompt/code block pink-light, quick check, mini challenge, common mistakes, ringkasan, dan materi sumber lengkap.

## Visual Learning Canvas

Mode default materi adalah visual canvas, dengan mode `Source` sebagai alternatif. Pergantian mode tidak mengubah isi teks.

Komponen yang tersedia:

- toggle `Visual/Source`;
- navigation chips untuk lompat bagian;
- numbered knowledge cards;
- subsection visual untuk paragraf Markdown gabungan;
- tabel focusable dengan scroll internal;
- light-theme prompt/code block;
- cognitive mode switch untuk Chapter 1;
- reasoning compass untuk Chapter 2;
- inference strategy explorer untuk Chapter 3;
- ReAct control loop untuk Chapter 4;
- verification gate untuk Chapter 5.

Semua learning surface memakai putih atau pink-light. Background hitam/dark navy dilarang untuk UI course.

## Activity Final

Prinsip hierarchy activity: peserta harus langsung melihat tugas dan tempat menjawab. Materi sumber lengkap tetap dimuat setelah workspace di dalam panel referensi `<details>` yang tertutup secara default.

Latihan:

- materi latihan dan proyek akhir sumber tetap utuh;
- 6 skenario terstruktur;
- workspace menampilkan satu skenario pada satu waktu dengan navigator 1-6, status selesai, dan tombol sebelumnya/berikutnya;
- setiap skenario mempunyai tiga textarea berlabel untuk jawaban peserta;
- jawaban dapat disimpan, diedit, direset, dan dipulihkan.

Kuis:

- materi kuis sumber tetap utuh;
- 15 soal interaktif;
- satu soal ditampilkan pada satu waktu dengan navigator 1-15 dan penghitung jumlah terjawab;
- seluruh kartu opsi dapat diklik;
- state `selected`, `correct`, `wrong`, dan `locked` jelas;
- single attempt menjelaskan bahwa attempt sudah dipakai.

Diskusi:

- prompt sumber tetap utuh;
- 6 prompt button;
- post, thread, dan reply tersimpan lokal.

## LocalStorage Contract

Key berikut adalah kontrak runtime dan tidak boleh diganti tanpa migrasi:

```text
heraiAiReasoningCurrentChapter
heraiAiReasoningPractice
heraiAiReasoningQuizDone
heraiAiReasoningQuizScore
heraiAiReasoningQuizAnswers
heraiAiReasoningDiscussion
```

## Bug Yang Ditemukan dan Diperbaiki

1. Concept lab dan milestone sempat memakai background `#171827/#262837`, bertentangan dengan light theme course. Seluruh surface sudah diubah menjadi putih/pink-light.
2. `<p>` sumber diberi `display:grid` langsung. Karena paragraf berisi campuran text node, `<strong>`, dan `<em>`, browser menjadikan isi sebagai grid item terpisah dan teks turun satu huruf/kata per baris.
3. Markdown hard break menggabungkan beberapa bagian ke satu `<p>`, misalnya `Tujuan Chapter`, `Kenapa Chapter Ini Penting`, dan `Penjelasan Konsep Utama`. Renderer sekarang memecah visual berdasarkan direct `<strong>` sambil mempertahankan node dan urutan teks.
4. Navigation chips dan tabel sempat memperlebar dokumen mobile. Keduanya sekarang memakai internal horizontal scroll dan wrapper dengan `min-width: 0`.
5. Badge nomor mengambil terlalu banyak lebar mobile. Pada viewport kecil badge dipindah ke baris sendiri agar isi memakai lebar penuh.
6. Browser sempat menampilkan JS/CSS lama karena cache buster belum dibump bersamaan. `index.html` sekarang membump cache buster `ai-reasoning.js` dan `modules.css`.
7. Smoke test SPA sempat membaca DOM route sebelumnya karena selector terlalu generik. Test berikutnya wajib menunggu container route-specific dan konten unik, bukan hanya `.reasoning-source-material` global.

Guardrail permanen untuk bug tersebut sudah ditambahkan ke `AGENTS.md`.

## Verifikasi Terakhir

Command berikut lulus:

```text
node --check js/router.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
node --check js/frontend/fellow-dashboard/ai-reasoning.js
git diff --check
node scripts/check-participant-routes.mjs
```

Route checker: `113 passed | 0 failed`.

Smoke test browser:

- 5/5 chapter: materi tampil dan lab interaktif aktif;
- 5/5 chapter: source `textContent` identik setelah transformasi;
- 5/5 chapter: nol dark learning surface;
- materi, latihan, kuis, diskusi: nol horizontal overflow pada 390px;
- mobile: `innerWidth = 390`, `scrollWidth = 390`;
- latihan: save/edit/reset lulus;
- kuis: 15 pilihan, submit, score, correct/wrong/locked lulus;
- diskusi: post dan reply lulus;
- refresh persistence untuk chapter, kuis, dan diskusi lulus.

Console browser dapat menampilkan error koneksi service settings lokal `127.0.0.1:8092` jika service tersebut tidak berjalan. Error ini bukan berasal dari runtime Reasoning.

## Aturan Maintenance

- Jangan kembalikan route Reasoning ke `course-placeholder.html`.
- Jangan mengambil data Reasoning final dari `window.HERAI_REASONING_COURSE`.
- Jangan menghapus file `chapters/*-full.html` karena dipakai fetch runtime.
- Jangan mengompres materi sumber saat memperbaiki UI.
- Jangan mengganti localStorage key tanpa migrasi.
- Jangan mengubah course lain, sidebar, topbar, breadcrumb, tab, atau shell layout untuk revisi Reasoning.
- Bump cache buster JS dan CSS jika runtime/style Reasoning berubah.
- Verifikasi dengan screenshot desktop dan mobile, bukan hanya syntax atau `scrollWidth`.
- Jangan push tanpa permintaan eksplisit user.
- Pada latihan/kuis, workspace interaktif harus tampil sebelum panel referensi sumber. Referensi lengkap tetap utuh di panel `<details>` setelah workspace.

## Urutan Baca AI Berikutnya

```text
1. AGENTS.md
2. GEMINI.md
3. handover/HANDOVER_UPDATE.md
4. handover/REASONING_FINAL_CHECKPOINT.md
5. handover/MODULE_STATUS_MAP.md
6. handover/COURSE_HIERARCHY.md
7. handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
8. handover/PROMPT_AI_BARU.md
```
