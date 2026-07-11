# HerAI Development Handover & Checkpoint

**Tanggal:** 11 Juli 2026
**Branch:** `design`
**Status:** Reasoning canonical final selesai, snapshot materi lama Reasoning untuk deep research sudah dibuat, audit menyeluruh sebelumnya selesai, belum push
**Commit UX Python terbaru:** `5298a96 fix: link python active labs to focused practice`
**Commit quiz review:** `551654c fix: show intro quiz review states`
**Commit Reasoning canonical:** `75125a8 feat: finalize reasoning course routes`
**Commit audit terbaru:** `c93a5fb fix: audit python module polish`
**Commit merge Reasoning lokal:** `b0c6829 merge: integrate reasoning scaffold updates`
**Commit fitur terakhir sebelum merge:** `c1870d4 feat: finalize python ai module and merge handover`
**Commit sebelumnya terkait ML:** `4d7d69a feat: activate machine learning module flow`

Dokumen ini menjadi checkpoint terbaru untuk developer atau AI agent berikutnya. Catatan lama 5 Juli 2026 yang menyebut Machine Learning masih under-development sudah tidak berlaku untuk course ML.

Source of truth hierarki course terbaru:

```text
handover/COURSE_HIERARCHY.md
handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
```

---

## Checkpoint Final Terbaru - Reasoning Canonical

Status terbaru 11 Juli 2026 setelah rombak Reasoning:

- Update brainstorming Reasoning 11 Juli 2026: seluruh konten Reasoning runtime saat ini diekstrak menjadi snapshot lengkap di `materi/lama/reasoning.md`. File ini memuat overview, 4 submateri, materi lengkap, 17 latihan + pembahasan, 25 soal kuis + kunci + pembahasan, 4 diskusi, dan referensi. Tujuannya untuk bahan deep research/brainstorming materi Reasoning baru, bukan sebagai route runtime peserta.
- Prompt khusus untuk AI berikutnya yang akan menerima materi Reasoning baru dibuat di `handover/PROMPT_REASONING_MATERI_BARU.md`. Gunakan prompt ini setelah materi baru dari AI/browser selesai dibuat.
- Update Python UX 11 Juli 2026: panel `Belajar Aktif` di materi Python tetap dipakai, tetapi CTA mini challenge tidak lagi generik `Buka Playground`. Setiap chapter sekarang diarahkan ke latihan terkait dengan route `#/participant-ai-python-practice?focus=play-N`, halaman latihan menyorot kartu target via `data-practice-focus="play-N"`, dan menampilkan catatan konteks agar peserta tahu latihan tersebut berasal dari materi yang baru dibaca.
- `04 - Reasoning` tidak lagi hanya scaffold route `course-placeholder.html`; sekarang aktif sebagai folder canonical:
  `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/`.
- Route final Reasoning:
  - `#/participant-ai-reasoning` -> `materi.html`
  - `#/participant-ai-reasoning-practice` -> `latihan.html`
  - `#/participant-ai-reasoning-quiz` -> `kuis.html`
  - `#/participant-ai-reasoning-discussion` -> `diskusi.html`
- Konten Reasoning tetap memakai 4 submateri hasil scaffold lengkap: how AI reasons, planning and decomposition, chain-of-thought, dan tool use.
- Activity Reasoning sudah mengikuti pola Pengantar AI/Python: tab final, materi chapter internal, 17 latihan reveal, kuis 25 soal full-card clickable single attempt, dan diskusi localStorage.
- Controller baru: `js/frontend/fellow-dashboard/ai-reasoning.js`.
- `course-placeholder.js` masih mengekspos `window.HERAI_REASONING_COURSE` sebagai sumber data konten Reasoning agar materi scaffold lengkap tidak diduplikasi manual.
- Jika materi Reasoning baru sudah diterima dari deep research, simpan dulu sebagai snapshot baru di `materi/baru/`, baca `materi/lama/reasoning.md` sebagai baseline lama, lalu implementasikan ke canonical `04-reasoning/` dan `ai-reasoning.js` tanpa merusak route final.
- Evaluation dan Evolution of AI tetap scaffold melalui `course-placeholder.html`.
- Kuis Pengantar AI diselaraskan dengan Python/AI Modern/Reasoning: setelah submit atau saat locked dari localStorage, kartu hijau menandai jawaban benar dan kartu merah menandai pilihan peserta yang salah. Jawaban peserta disimpan di `heraiAiIntroQuizAnswers` tanpa mengubah key lama `heraiAiIntroQuizDone` dan `heraiAiIntroQuizScore`.
- Verifikasi awal routing setelah perubahan: `node scripts/check-participant-routes.mjs` -> `Total: 113 | 113 passed | 0 failed`.

Commit lokal penting sebelum snapshot Reasoning lama:

```text
5298a96 fix: link python active labs to focused practice
551654c fix: show intro quiz review states
75125a8 feat: finalize reasoning course routes
9b32ac0 docs: update final audit handover checkpoint
c93a5fb fix: audit python module polish
```

## Checkpoint Sebelumnya - Audit Setelah Merge

Status terbaru 11 Juli 2026 setelah audit menyeluruh:

- Branch lokal `design` sudah berisi merge Reasoning dari `origin/design` dan patch audit. Status terakhir sebelum push: lokal `design` ahead dari `origin/design`.
- Commit terbaru yang harus dianggap baseline lokal:
  - `c93a5fb fix: audit python module polish`
  - `b0c6829 merge: integrate reasoning scaffold updates`
  - `c1870d4 feat: finalize python ai module and merge handover`
- Konflik merge sebelumnya hanya terjadi di dokumen handover dan sudah diselesaikan. Scan conflict marker `<<<<<<<|>>>>>>>` sudah bersih.
- Audit menemukan dan memperbaiki:
  - contoh kode mini project Python latihan nomor 7 yang sebelumnya pecah karena newline literal di dalam string Python;
  - warna breadcrumb separator `#8e91a0` menjadi `#6f7282` sesuai AGENTS;
  - `border-radius: 0 0 14px 14px` pada `.py-output` menjadi `border-radius: 14px`;
  - status handover lama yang belum mencerminkan merge Reasoning selesai.
- Browser smoke test sudah dilakukan pada:
  - `#/participant-ai-python`;
  - `#/participant-ai-python-practice`;
  - `#/participant-ai-python-quiz`;
  - `#/participant-ai-intro-quiz`;
  - `#/participant-ai-python-discussion`;
  - `#/participant-ai-reasoning`;
  - query Reasoning `module=...&activity=materi|latihan|kuis|diskusi`.
- Pyodide berhasil load, Run Code latihan pertama berhasil, Run Code mini project preprocessing teks berhasil, output terminal muncul, dan save latihan masuk `heraiAiPythonPractice`.
- Kuis Pengantar AI dan Python submit berhasil, skor tersimpan, dan single attempt locked state aktif.
- Diskusi Python berhasil posting dan tersimpan di `heraiAiPythonDiscussion`.
- Reasoning scaffold lengkap berhasil render: 4 submateri, 17 latihan, 25 soal kuis, 4 diskusi; reveal latihan dan check quiz berjalan.
- Mobile overflow smoke test pada route utama Python, Pengantar AI quiz, dan Reasoning tidak menemukan horizontal overflow.
- Console browser hanya menampilkan `ERR_CONNECTION_REFUSED` ke `127.0.0.1:8092/api/participant-portal/settings` karena API settings lokal tidak berjalan saat smoke test; tidak ditemukan error runtime modul Python/quiz/Reasoning.

Verifikasi audit terakhir:

```text
node --check js/router.js -> passed
node --check js/frontend/fellow-dashboard/settings.js -> passed
node --check js/frontend/fellow-dashboard/ai-python-basic.js -> passed
node --check js/frontend/fellow-dashboard/course-placeholder.js -> passed
git diff --check -> passed
node scripts/check-participant-routes.mjs -> Total: 110 | 110 passed | 0 failed
rg -n '<<<<<<<|>>>>>>>' . -> no matches
scan scoped design rule -> no matches for border-radius: 0, #8e91a0, #7c3aed, forbidden UI emoji
```

## Checkpoint Sebelumnya - Python, Quiz UI, Design Rules, dan Merge Reasoning

Status 10 Juli 2026 setelah follow-up user:

- Modul `02 - Python untuk AI` sudah final runtime dengan 13 chapter dari `materi/baru/Pengembangan Materi Pemrograman Python untuk AI- Baru.md`.
- Materi Python tidak lagi hanya teks panjang: setiap chapter mendapat panel `Belajar Aktif` melalui `js/frontend/fellow-dashboard/ai-python-basic.js`, berisi quick check, feedback langsung, mini challenge, dan tombol `Buka Playground`.
- Code block materi Python sudah mengikuti tema HerAI pink-light. Background terminal hitam/dark block tidak dipakai sebagai default.
- Kuis Python sudah diperbaiki menjadi full-card clickable, bukan radio kecil. State `selected`, `correct`, `wrong`, dan `locked` terlihat jelas.
- Kuis Pengantar AI juga sudah diperbaiki menjadi full-card clickable. State `selected`, `correct`, `wrong`, dan `locked` jelas.
- `AGENTS.md` diperbarui agar aturan ini tidak terulang:
  - materi course tidak boleh teks polos saja;
  - kuis wajib full-card clickable;
  - single attempt harus menjelaskan state terkunci;
  - code block materi wajib pink-light, bukan terminal hitam;
  - tema HerAI pink harus konsisten di materi, latihan, kuis, diskusi, callout, quick check, selected state, active border, icon, dan code block.
- Route `js/router.js` tidak diubah selama pekerjaan Python/Pengantar AI.
- Pekerjaan Reasoning dari `origin/design` sudah di-merge ke branch lokal:
  - route tetap `#/participant-ai-reasoning`;
  - target tetap `pages/frontend/fellow-dashboard/course-placeholder.html`;
  - konten lengkap berada di `COURSE_SCAFFOLDS`;
  - status masih scaffold lengkap, belum canonical final.
- Dokumen merge tetap disimpan sebagai referensi:
  - `handover/MERGE_GUIDE_REASONING_TEAM.md`

File penting yang berubah pada checkpoint terbaru:

```text
AGENTS.md
handover/HANDOVER_UPDATE.md
handover/MODULE_STATUS_MAP.md
handover/COURSE_HIERARCHY.md
handover/PROMPT_AI_BARU.md
handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
handover/MERGE_GUIDE_REASONING_TEAM.md
js/frontend/fellow-dashboard/ai-python-basic.js
js/frontend/fellow-dashboard/settings.js
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/kuis.html
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/
materi/python-untuk-ai.md
```

Verifikasi terakhir yang sudah lulus setelah patch quiz/UI:

```text
node --check js/router.js -> passed
node --check js/frontend/fellow-dashboard/settings.js -> passed
node --check js/frontend/fellow-dashboard/ai-python-basic.js -> passed
node --check js/frontend/fellow-dashboard/course-placeholder.js -> passed
git diff --check -> passed
node scripts/check-participant-routes.mjs -> Total: 110 | 110 passed | 0 failed
```

Catatan merge penting:

- File sumber baru `materi/baru/Pengembangan Materi Pemrograman Python untuk AI- Baru.md` sudah masuk commit lokal Python.
- Saat merge Reasoning, perubahan runtime Python dan Pengantar AI harus tetap dipertahankan.

---

## Update Merge - Reasoning dari origin/design

Remote `origin/design` membawa commit Reasoning:

```text
e90725e fix: prevent reasoning scaffold content overflow
00da94f docs: update expanded reasoning handover
e11e0a3 feat: expand ai reasoning learning module
6fde98b docs: update reasoning scaffold handover
b33c1b4 feat: enrich ai reasoning scaffold
```

Keputusan merge:

- Perubahan Reasoning diterima pada:
  - `js/frontend/fellow-dashboard/course-placeholder.js`
  - `pages/frontend/fellow-dashboard/course-placeholder.html`
  - `css/frontend/fellow-dashboard/modules.css`
  - `index.html`
- Konflik hanya terjadi di dokumen handover.
- Resolusi konflik handover: memakai checkpoint Python/Pengantar AI terbaru sebagai basis, lalu menambahkan status Reasoning hasil kerja tim.
- Reasoning sekarang berstatus `lengkap di scaffold`, bukan final/canonical:
  - 4 submateri: `how-ai-reasons`, `planning-and-decomposition`, `chain-of-thought`, `tool-use`;
  - 17 latihan;
  - 25 soal kuis;
  - 4 diskusi;
  - route tetap `#/participant-ai-reasoning`;
  - belum membuat folder canonical `04-reasoning/`.

---

## Checkpoint Rombak Final - Pemrograman Python untuk AI

Status terbaru 10 Juli 2026: modul `02 - Python untuk AI` sudah dirombak berdasarkan sumber final `materi/baru/Pengembangan Materi Pemrograman Python untuk AI- Baru.md` tanpa mengubah route peserta, shell layout, tab activity, atau sistem interaktif Pyodide.

Perubahan struktur utama:

- Struktur materi runtime berubah dari 5 chapter lama menjadi 13 chapter final yang lebih runtut:
  1. Apa Itu Python dan Perannya dalam AI
  2. Instalasi, Environment, dan Cara Menjalankan Python
  3. Variabel dan Tipe Data Dasar
  4. Struktur Data Koleksi
  5. Alur Logika dan Percabangan
  6. Perulangan
  7. Fungsi dan Parameter
  8. Lambda Expression dan Generator Basics
  9. Object-Oriented Programming Dasar
  10. Exception Handling
  11. Operasi File I/O
  12. NumPy dan Operasi Matriks
  13. Pandas dan Tabular Data
- Sidebar `materi.html`, `totalChapters`, mapping `loadChapter()`, progress, dan prev/next behavior sudah disesuaikan ke 13 chapter.
- Chapter baru ditambahkan di folder canonical `02-python-untuk-ai/chapters/` sampai `13-materi.html`.
- Latihan tetap memakai Pyodide runner existing dan ditambah mini project preprocessing dataset teks.
- Kuis diperluas menjadi 15 soal single attempt.
- Diskusi diperbarui agar menguji pemahaman Python sebagai bahasa orkestrasi AI, environment, data quality, dan batas Python vs backend native.
- Snapshot materi baru dibuat di `materi/python-untuk-ai.md`.
- Route `js/router.js` tidak diubah.

Area yang wajib tetap dijaga:

- Jangan ganti ID/class runtime Python: `python-chapter-container`, `python-sidebar-list`, `btn-prev-chapter`, `btn-next-chapter`, `btn-finish-materi`, `aiPythonQuizForm`, `pythonPracticeStatus`, `py-editor`, `py-run`, `py-output`, `py-reset`.
- Jangan ganti localStorage keys: `heraiAiPythonCurrentChapter`, `heraiAiPythonPractice`, `heraiAiPythonQuizDone`, `heraiAiPythonQuizScore`, `heraiAiPythonDiscussion`.
- Jangan mematikan fungsi `initAiPythonMateri()`, `window.loadPythonChapter()`, `initAiPythonBasic()`, `initAiPythonQuiz()`, atau `initAiPythonDiscussion()`.

---

## Checkpoint Final Sesi - Pengantar AI 5 Chapter Padat dan Next Python untuk AI

Status terbaru setelah review user: Pengantar AI sempat diperluas menjadi 10 topik, lalu dikonsolidasikan lagi menjadi 5 chapter padat karena user lebih memilih chapter sedikit dengan isi panjang. Perubahan ini memakai route Pengantar AI yang sudah ada di `js/router.js`, sehingga tidak ada route baru dan tidak ada perubahan struktur navigasi besar.

Update terbaru setelah commit `6eb03f8`:

- User menemukan bug penomoran di runtime: Chapter 3 masih menampilkan subbagian `2.1`.
- Penomoran chapter aktif sudah dibetulkan:
  - Chapter 3: `3.1` sampai `3.12`
  - Chapter 4: `4.1` sampai `4.12`
  - Chapter 5: `5.1` sampai `5.13`
- Chapter 3 diperdalam dengan studi kasus chatbot pendidikan, kredit mikro, filter wajah, dan pola kesalahan umum.
- Chapter 4 diperdalam dengan penerapan AI di pendidikan, kesehatan, keamanan siber, bisnis, dan matriks membaca penerapan.
- Chapter 5 diperdalam dengan rubrik skor risiko, template jawaban audit, contoh jawaban audit, dan kebiasaan kritis untuk modul lanjutan.
- Snapshot `materi/pengantar-ai.md` sudah diperbarui agar mencatat struktur 5 chapter padat dan rentang penomoran terbaru.
- Handover diperbarui ulang untuk mencatat checkpoint ini sebelum lanjut ke `Pemrograman Python untuk AI`.

Yang sudah dikerjakan pada sesi Pengantar AI:

1. Membaca guardrail dan source of truth:
   - `AGENTS.md`
   - `GEMINI.md`
   - seluruh dokumen utama di `handover/`
   - `materi/lama/pengantar-ai.md`
   - `materi/baru/pengantar-ai-baru.md`
2. Membuat snapshot sinkron terbaru:
   - `materi/pengantar-ai.md`
3. Mengintegrasikan materi final ke runtime peserta:
   - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/materi.html`
   - `js/frontend/fellow-dashboard/settings.js`
   - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/latihan.html`
   - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/kuis.html`
   - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/diskusi.html`
4. Mengonsolidasikan struktur runtime Pengantar AI menjadi 5 chapter padat:
   - `#/participant-ai-intro`
   - `#/participant-ai-history`
   - `#/participant-ai-types`
   - `#/participant-ai-ml-dl`
   - `#/participant-ai-summary`
5. Mempertahankan area yang dilarang berubah:
   - `js/router.js` tidak diubah.
   - Sidebar utama, topbar, breadcrumb, lesson tabs, right panel shell, dan footer nav shell tetap dipertahankan.
   - Right panel hanya berubah pada daftar materi/progres agar sesuai 5 chapter.
6. Mengganti aktivitas Pengantar AI:
   - Latihan: proyek mini `Audit Sistem Sosio-Teknis Harian`.
   - Kuis: 10 soal single attempt.
   - Diskusi: bias rekrutmen, halusinasi hukum, dan dilema optimasi navigasi.

Checkpoint verifikasi terakhir:

```text
node --check js/router.js -> passed
node --check js/frontend/fellow-dashboard/settings.js -> passed
git diff --check -> passed
node scripts/check-participant-routes.mjs -> Total: 110 | 110 passed | 0 failed
```

Status git:

- Perubahan lokal belum commit.
- `materi/` sudah tracked sejak commit `6eb03f8`, tetapi tetap hanya area handoff/snapshot non-runtime.
- Jangan push tanpa izin user.

Python untuk AI sudah dirombak final pada sesi berikutnya. File utama modul Python:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/materi.html
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/latihan.html
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/kuis.html
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/diskusi.html
js/frontend/fellow-dashboard/ai-python-basic.js
```

Sebelum mengubah Python untuk AI, wajib baca dulu file runtime di atas dan cek apakah ada snapshot materi Python yang sudah tersedia di `materi/`. Jangan mengubah route Python atau controller Pyodide kecuali memang diperlukan oleh konten final.

---

## Executive Summary Checkpoint - 10 Juli 2026

Checkpoint kerja sesi ini:

1. Membaca guardrail proyek:
   - `AGENTS.md`
   - `GEMINI.md`
   - `handover/HANDOVER_UPDATE.md`
   - `handover/MODULE_STATUS_MAP.md`
   - `handover/COURSE_HIERARCHY.md`
   - `handover/PROMPT_AI_BARU.md`
   - `handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md`
   - baseline lama `materi/lama/pengantar-ai.md`
   - materi final `materi/baru/pengantar-ai-baru.md`
2. Menemukan bahwa instruksi menyebut `materi/pengantar-ai.md`, tetapi working tree saat awal sesi berisi:
   - `materi/lama/pengantar-ai.md`
   - `materi/baru/pengantar-ai-baru.md`
3. Membuat dan menyinkronkan snapshot terbaru:
   - `materi/pengantar-ai.md`
4. Mengintegrasikan materi final Pengantar AI ke runtime peserta tanpa mengubah route atau layout besar.
5. Menjaga area yang tidak boleh disentuh:
   - `js/router.js` tidak diubah.
   - Sidebar tidak diubah.
   - Topbar tidak diubah.
   - Breadcrumb tidak diubah.
   - Lesson tabs tidak diubah.
   - Right panel tidak diubah kecuali teks daftar materi/progres yang relevan.
   - Footer nav tidak diubah strukturnya.
6. Mengupdate semua dokumen handover agar status Pengantar AI tidak lagi tercatat sebagai “rencana rombak”, tetapi sebagai konten final terbaru.

File runtime yang diubah:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/materi.html
js/frontend/fellow-dashboard/settings.js
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/latihan.html
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/kuis.html
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/diskusi.html
```

File dokumentasi/snapshot yang diubah:

```text
materi/pengantar-ai.md
handover/HANDOVER_UPDATE.md
handover/MODULE_STATUS_MAP.md
handover/COURSE_HIERARCHY.md
handover/PROMPT_AI_BARU.md
handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
```

File arsip materi yang dipertahankan:

```text
materi/lama/pengantar-ai.md
materi/baru/pengantar-ai-baru.md
```

Status git saat checkpoint ini:

- Perubahan lokal belum commit.
- `materi/` sudah tracked sejak commit `6eb03f8`.
- Jangan push tanpa izin user.
- Jika commit dibuat, pilih file dengan sengaja karena `materi/` memuat snapshot terbaru sekaligus arsip lama/baru.

---

## Update 10 Juli 2026 - Rombak Final Materi Pengantar AI

Update terbaru sesi ini belum dicommit.

Yang sudah dilakukan:

- Materi final dari `materi/baru/pengantar-ai-baru.md` sudah diintegrasikan ke runtime Pengantar AI.
- Route, sidebar, topbar, breadcrumb, lesson tabs, right panel, dan footer nav tidak diubah.
- `js/router.js` tidak diubah.
- Konten runtime yang berubah:
  - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/materi.html`
  - `js/frontend/fellow-dashboard/settings.js` bagian `introLessonRoutes` dan `generatedLessonContent`
  - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/latihan.html`
  - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/kuis.html`
  - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/diskusi.html`
- Snapshot terbaru disinkronkan ke `materi/pengantar-ai.md`.
- `materi/lama/pengantar-ai.md` dan `materi/baru/pengantar-ai-baru.md` dibiarkan sebagai arsip bahan lama/baru.

Struktur Pengantar AI terbaru:

1. AI di Sekitar Kita dan Fondasi Awal
2. Definisi, Software Biasa, dan Sistem AI
3. Cara Kerja AI: Data, Model, dan Human Check
4. Peta Istilah dan Penerapan AI
5. Risiko, Etika, dan Audit Sosio-Teknis

Aktivitas terbaru:

- Latihan menjadi proyek mini `Audit Sistem Sosio-Teknis Harian`.
- Kuis menjadi 10 soal single attempt dan controller `settings.js` sudah menghitung 10 grup jawaban.
- Diskusi diarahkan ke skenario bias rekrutmen, halusinasi hukum, dan dilema optimasi navigasi.

Catatan implementasi:

- Materi final diringkas dari gaya laporan panjang menjadi copy runtime pembelajaran agar tidak terlalu padat di UI.
- Fokus pedagogis dipindah ke model mental, literasi sosio-teknis, ANI praktis, bias, halusinasi, privasi, black box, dan pemeriksaan manusia.
- Detail teknis seperti metrik evaluasi, pipeline coding, matematika, dan arsitektur model tetap dipindahkan ke modul lanjutan.

Follow-up setelah review user:

- User mengecek materi runtime dan menilai isi masih terlalu sedikit dibanding materi final brainstorming.
- Konten Pengantar AI kemudian diperluas lagi di:
  - `materi.html` untuk Chapter 1.
  - `settings.js` untuk Chapter 2-5.
  - `materi/pengantar-ai.md` sebagai snapshot terbaru.
- Penambahan mencakup objektif pembelajaran, perbandingan software biasa vs AI, analogi buku resep/pekerja magang, detail training/inferensi, checklist audit, studi kasus penerapan, dan studi kasus risiko.
- Follow-up kedua: sidebar/daftar materi Pengantar AI dikonsolidasikan menjadi 5 chapter padat memakai route yang sudah tersedia di `js/router.js`, tanpa menambah route baru.
- Route yang sekarang aktif di daftar materi: `/participant-ai-intro`, `/participant-ai-history`, `/participant-ai-types`, `/participant-ai-ml-dl`, dan `/participant-ai-summary`.
- Route kecil lama tetap ada di router agar link lama tidak rusak, tetapi tidak tampil di daftar materi utama.
- Route/layout tetap tidak berubah.

Verifikasi sesi ini:

```text
node --check js/router.js -> passed
node --check js/frontend/fellow-dashboard/settings.js -> passed
git diff --check -> passed
node scripts/check-participant-routes.mjs -> Total: 110 | 110 passed | 0 failed
```

---

## Update 10 Juli 2026 - Snapshot Awal Materi Pengantar AI (Historis)

Catatan: bagian ini adalah checkpoint sebelum rombak final. Status terbaru ada di bagian `Rombak Final Materi Pengantar AI` di atas.

Update terbaru sesi ini belum dicommit.

Yang sudah dilakukan:

- Membuat folder baru `materi/` di root repo sebagai area handoff konten non-runtime.
- Membuat file `materi/pengantar-ai.md`.
- File tersebut saat itu adalah versi Markdown bersih dari materi `Pengantar AI`, sebelum rombak final.
- Snapshot mencakup:
  - konteks course `AI Fundamentals & Advanced`
  - daftar submodul aktif dan scaffold
  - Topik lama 1: Apa itu Artificial Intelligence?
  - Topik lama 2: Jenis & Komponen AI
  - Topik lama 3: Penerapan & Masa Depan AI
  - Topik lama 4: Ringkasan Modul 1
  - latihan reflektif
  - kuis dan opsi jawaban benar/salah
  - prompt diskusi
  - prompt siap pakai untuk AI lain
- Tidak ada route, CSS, layout runtime, controller JS, atau file peserta yang diubah pada checkpoint ini.

File baru:

```text
materi/pengantar-ai.md
```

Sumber yang dirangkum ke file tersebut:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/materi.html
js/frontend/fellow-dashboard/settings.js
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/latihan.html
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/kuis.html
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/diskusi.html
```

Status penting:

- `materi/` bukan folder runtime aplikasi.
- `materi/` tidak boleh dianggap sebagai folder canonical course.
- Folder canonical Pengantar AI tetap:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/
```

Verifikasi sesi ini:

```text
node --check js/router.js -> passed
node --check js/frontend/fellow-dashboard/settings.js -> passed
git diff --check -> passed
node scripts/check-participant-routes.mjs -> Total: 110 | 110 passed | 0 failed
```

### Rencana Next Step Saat Itu: Rombak Materi Pengantar AI

Rencana ini sudah selesai pada checkpoint rombak final di atas. Gunakan `materi/pengantar-ai.md` sebagai snapshot terbaru bila ada revisi lanjutan.

Arsip tugas historis yang sudah dieksekusi:

1. Baca baseline:
   - `materi/pengantar-ai.md`
   - `handover/HANDOVER_UPDATE.md`
   - `handover/MODULE_STATUS_MAP.md`
   - `handover/COURSE_HIERARCHY.md`
   - `handover/PROMPT_AI_BARU.md`
   - `AGENTS.md`
2. Jangan langsung replace seluruh file HTML.
3. Bandingkan materi baru dengan baseline agar tidak duplikat dengan:
   - Python untuk AI
   - Konsep AI Modern
   - Math for AI
   - Machine Learning
   - NLP
   - Computer Vision
4. Tentukan target perubahan:
   - `materi.html` untuk konten Topik 1 / intro utama.
   - `settings.js` bagian `generatedLessonContent` untuk topik lanjutan Pengantar AI.
   - `latihan.html` jika latihan reflektif berubah.
   - `kuis.html` jika soal kuis berubah.
   - `diskusi.html` jika prompt diskusi berubah.
5. Pertahankan layout existing:
   - jangan ubah sidebar, topbar, breadcrumb, tabs, right panel, dan footer nav kecuali memang diminta.
   - edit hanya isi di dalam `lesson-article` atau string `generatedLessonContent`.
   - jangan mengubah route di `js/router.js` bila hanya update materi.
6. Patuhi design rules:
   - tidak boleh ada `border-radius: 0`.
   - gunakan text utama `#171827` dan secondary minimal `#6f7282`.
   - pink `#f63392` untuk aksen.
   - jangan tambah emoji baru di UI; gunakan FontAwesome icon.
7. Setelah update materi, verifikasi:

```bash
node --check js/frontend/fellow-dashboard/settings.js
node --check js/router.js
git diff --check
node scripts/check-participant-routes.mjs
```

8. Smoke test manual minimal:
   - `#/participant-ai-intro`
   - `#/participant-ai-types`
   - `#/participant-ai-applications`
   - `#/participant-ai-summary`
   - `#/participant-ai-intro-practice`
   - `#/participant-ai-intro-quiz`
   - `#/participant-ai-intro-discussion`
9. Setelah selesai, update lagi:
   - `materi/pengantar-ai.md` sebagai snapshot terbaru.
   - `handover/HANDOVER_UPDATE.md`
   - `handover/MODULE_STATUS_MAP.md`
   - `handover/PROMPT_AI_BARU.md`
   - `handover/COURSE_HIERARCHY.md` hanya jika struktur topik/module berubah.

Catatan risiko:

- Konten Pengantar AI tersebar di dua tempat: HTML `materi.html` dan object `generatedLessonContent` di `settings.js`.
- Route yang tampil di `introLessonRoutes` Pengantar AI sekarang hanya 5 chapter utama: `/participant-ai-intro`, `/participant-ai-history`, `/participant-ai-types`, `/participant-ai-ml-dl`, dan `/participant-ai-summary`. Route kecil lama tetap terdaftar di router agar link lama tidak rusak, tetapi tidak tampil di daftar materi utama.
- `settings.js` juga memuat logic dashboard participant lain; edit harus scoped ke `introLessonRoutes`, `generatedLessonContent`, atau initializer Pengantar AI yang relevan.

---

## Current Snapshot - 10 Juli 2026

State terbaru setelah checkpoint `6eb03f8`:

- Working tree terakhir bersih setelah commit `6eb03f8`, lalu ada perubahan lokal baru untuk konsolidasi 5 chapter padat, perbaikan penomoran Chapter 3-5, `materi/pengantar-ai.md`, dan update dokumen handover.
- Route checker terakhir: `Total: 110 | 110 passed | 0 failed`.
- Course aktif final yang harus dijaga:
  - AI Modern: `#/participant-ai-modern`, `#/participant-ai-modern-practice`, `#/participant-ai-modern-quiz`, `#/participant-ai-modern-discussion`
  - Math for AI: `#/participant-ai-lab-math` plus lesson/practice/quiz/discussion
  - Machine Learning: `#/participant-ai-lab-ml` plus 8 chapter, latihan, kuis, diskusi
  - Python untuk AI: `#/participant-ai-python` plus practice/quiz/discussion
  - Pengantar AI: `#/participant-ai-intro` plus practice/quiz/discussion
  - CV/NLP route aktif tetap aman
- Course/module belum final memakai reusable scaffold:
  - File HTML: `pages/frontend/fellow-dashboard/course-placeholder.html`
  - Manifest: `js/frontend/fellow-dashboard/course-placeholder.js`
  - Source of truth data: `COURSE_SCAFFOLDS`
- Route scaffold AI Fundamentals yang baru aktif:
  - `#/participant-ai-reasoning`
  - `#/participant-ai-evaluation`
  - `#/participant-ai-evolution`
- Query scaffold standar:
  - `#/participant-ai-lab-gen`
  - `#/participant-ai-lab-gen?activity=latihan`
  - `#/participant-ai-lab-gen?module=prompting-workflow&activity=kuis`
- Fallback sudah dicek:
  - `activity` invalid fallback ke `materi`
  - `module` invalid fallback ke overview route utama

Checkpoint commit lokal terbaru:

```text
280c087 refactor: standardize curriculum placeholders
93e4275 feat: activate math for ai course
c9a2786 feat: activate ai modern activities
7f823b7 docs: add latest course checkpoint to gemini
086d511 docs: update handover activity tabs checkpoint
e750127 fix: link ai modern card to materi
a93e917 fix: activate ai modern materi route
ebe0256 fix: keep scaffold activity tabs on course page
```

Verifikasi terakhir yang sudah lulus:

```text
node --check js/router.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
git diff --check
node scripts/check-participant-routes.mjs
```

Smoke test browser terakhir:

- `#/participant-ai-lab-gen` render overview Generative AI scaffold.
- `#/participant-ai-lab-gen?activity=latihan` render tab Latihan.
- `#/participant-ai-lab-gen?module=prompting-workflow&activity=kuis` render detail module Prompting Workflow + tab Kuis.
- `#/participant-ai-reasoning`, `#/participant-ai-evaluation`, dan `#/participant-ai-evolution` render scaffold, bukan 404.
- Regression route final `#/participant-ai-modern`, `#/participant-ai-lab-math`, `#/participant-ai-lab-ml`, dan `#/participant-ai-python` tetap render.

---

## Next Execution Plan untuk Tim Penerus

Tujuan utama berikutnya adalah melanjutkan kurikulum tanpa merusak route final yang sudah aktif. Kerjakan bertahap, commit lokal setiap checkpoint, dan jangan push tanpa izin.

### 1. Baseline sebelum menyentuh kode

Jalankan dulu:

```bash
git status --short
node --check js/router.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
node scripts/check-participant-routes.mjs
git diff --check
```

Kalau `git status` tidak bersih, baca diff dulu. Jangan revert perubahan orang lain tanpa instruksi eksplisit.

### 2. Prioritas kerja yang paling aman

Urutan prioritas yang direkomendasikan:

1. Sinkronkan Generative AI.
   - Saat ini `#/participant-ai-lab-gen` memakai scaffold.
   - Ada file overview draft di `pages/frontend/fellow-dashboard/generative-multimodal-ai/generative-ai.html`.
   - Pilihan aman: tetap pakai scaffold dan perbaiki manifest `COURSE_SCAFFOLDS`.
   - Pilihan final: aktifkan route final hanya kalau materi, latihan, kuis, dan diskusi sudah siap.

2. Perkaya scaffold course/module yang belum final.
   - Update hanya `COURSE_SCAFFOLDS` di `js/frontend/fellow-dashboard/course-placeholder.js`.
   - Jangan membuat file `materi.html`, `latihan.html`, `kuis.html`, atau `diskusi.html` untuk konten yang belum final.
   - Pastikan tiap module punya `slug`, `title`, `summary`, `materi`, `latihan`, `kuis`, dan `diskusi`.

3. Kalau ada course yang benar-benar siap final, baru pindahkan dari scaffold ke folder canonical.
   - Folder target: `pages/frontend/fellow-dashboard/{category-slug}/{course-slug}/`.
   - File minimal: `materi.html`, `latihan.html`, `kuis.html`, `diskusi.html`.
   - Controller JS harus punya init function jelas.
   - Update `js/router.js`, `participantDashboardPages`, init hook, dan `index.html` cache buster bila perlu.

4. Jaga route final existing.
   - Jangan ubah target route AI Modern, Math for AI, Machine Learning, Python untuk AI, Pengantar AI, CV, dan NLP kecuali memang task-nya spesifik untuk route tersebut.
   - Jangan arahkan route final balik ke `under-development.html`.

### 3. Checklist saat menambah atau mengubah route

- Tambahkan route di object `routes` pada `js/router.js`.
- Tambahkan route ke array `participantDashboardPages`.
- Pastikan init function terpanggil di `handleRouting()`.
- Kalau route scaffold, target file harus `pages/frontend/fellow-dashboard/course-placeholder.html`.
- Kalau route final, target file harus berada di folder canonical category/domain.
- Jalankan `node scripts/check-participant-routes.mjs` sampai `0 failed`.

### 4. Checklist UI dan design

- Ikuti `AGENTS.md`.
- Semua visible element harus punya `border-radius > 0`.
- Button harus pill shape.
- Text utama `#171827`, secondary minimal `#6f7282`.
- Pink `#f63392` hanya untuk aksen.
- Jangan pakai emoji di UI; gunakan FontAwesome.
- Jangan ubah layout besar tanpa smoke test desktop dan mobile.

### 5. Wajib update folder handover setelah perubahan

Setiap agent/developer yang menambah route, mengubah status course, mengaktifkan file final, mengubah manifest scaffold, atau mengganti struktur folder wajib update folder `handover/` sebelum commit.

Minimal update:

- `handover/HANDOVER_UPDATE.md`: tulis apa yang dilakukan, file penting, hasil test, commit checkpoint.
- `handover/MODULE_STATUS_MAP.md`: update status course/module/route.
- `handover/COURSE_HIERARCHY.md`: update hierarchy bila category/course/module/activity berubah.
- `handover/PROMPT_AI_BARU.md`: update prompt onboarding kalau konteks kerja berubah.
- `handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md`: update hanya kalau folder canonical, rename, atau routing filesystem berubah.

Format checkpoint yang harus ditulis:

```text
Commit lokal:
<hash> <message>

Yang dilakukan:
- ...

File penting:
- ...

Verifikasi:
- node --check ...
- node scripts/check-participant-routes.mjs -> Total: ... | 0 failed
- git diff --check

Catatan risiko:
- ...

Next step:
- ...
```

### 6. Prompt siap pakai untuk AI penerus

Copy-paste prompt ini ke AI agent yang akan melanjutkan:

```text
Kamu melanjutkan proyek HerAI Fellowship SuperApp di branch design.

Wajib baca dulu:
1. GEMINI.md
2. AGENTS.md
3. handover/HANDOVER_UPDATE.md
4. handover/MODULE_STATUS_MAP.md
5. handover/COURSE_HIERARCHY.md
6. handover/PROMPT_AI_BARU.md
7. handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md

Konteks terbaru:
- Commit checkpoint lokal terbaru: c93a5fb fix: audit python module polish.
- Commit merge Reasoning: b0c6829 merge: integrate reasoning scaffold updates.
- Commit final Python/Pengantar AI sebelum merge: c1870d4 feat: finalize python ai module and merge handover.
- Pengantar AI dikonsolidasikan menjadi 5 chapter padat, penomoran Chapter 3-5 diperbaiki, `materi/pengantar-ai.md` menjadi snapshot terbaru, dan dokumen handover sudah diperbarui.
- Python untuk AI sudah final 13 chapter, panel Belajar Aktif, Pyodide practice, quiz 15 soal, dan diskusi final.
- Reasoning sudah masuk sebagai scaffold lengkap: 4 submateri, 17 latihan, 25 soal, 4 diskusi.
- Audit final memperbaiki mini project Python latihan nomor 7 dan polish CSS sesuai AGENTS.
- Route checker terakhir setelah audit final: Total 110, 0 failed.
- Course final yang harus dijaga: AI Modern, Math for AI, Machine Learning, Python untuk AI, Pengantar AI, CV, NLP.
- Route scaffold AI Fundamentals aktif: #/participant-ai-reasoning, #/participant-ai-evaluation, #/participant-ai-evolution.
- Course/module belum final harus diisi lewat COURSE_SCAFFOLDS di js/frontend/fellow-dashboard/course-placeholder.js.
- Jangan buat file materi.html, latihan.html, kuis.html, diskusi.html untuk course/module yang belum final.
- Jangan buat ulang folder course-catalog, ai-fundamental, atau ai-lab sebagai path aktif.
- Pengantar AI sudah dirombak final tanpa perubahan route/layout besar. Snapshot terbaru ada di `materi/pengantar-ai.md`.

Sebelum edit, jalankan:
git status --short
node --check js/router.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
node scripts/check-participant-routes.mjs
git diff --check

Tugas utama berikutnya:
1. Jika user meminta revisi lanjutan Pengantar AI, baca materi/pengantar-ai.md lalu update konten runtime Pengantar AI secara scoped.
2. Target Pengantar AI tetap: materi.html, settings.js bagian generatedLessonContent, dan activity file hanya jika latihan/kuis/diskusi ikut berubah.
3. Jangan ubah route atau layout besar Pengantar AI kecuali user eksplisit minta.
4. Kalau task berikutnya adalah Python untuk AI, baca dulu folder `02-python-untuk-ai/` dan `js/frontend/fellow-dashboard/ai-python-basic.js`, lalu jaga interaktif Pyodide dan route existing.
5. Kalau task bukan Python untuk AI atau revisi Pengantar AI, lanjutkan Generative AI atau scaffold lain dengan aman lewat COURSE_SCAFFOLDS.
6. Kalau konten sudah final, baru pindahkan route dari course-placeholder.html ke folder canonical.
7. Setelah perubahan, wajib update folder handover:
   - HANDOVER_UPDATE.md
   - MODULE_STATUS_MAP.md
   - COURSE_HIERARCHY.md
   - PROMPT_AI_BARU.md
   - HANDOVER_COURSE_FILESYSTEM_REFACTOR.md kalau routing/folder berubah
8. Jalankan verifikasi ulang.
9. Commit lokal. Jangan push tanpa izin.

Mulai dengan membaca file handover, lalu buat rencana singkat berdasarkan task yang diberikan user.
```

---

## Update 10 Juli 2026 - Full Curriculum Placeholder Scaffold

Update lanjutan sesi ini:

- Commit lokal: `280c087 refactor: standardize curriculum placeholders`.
- `js/frontend/fellow-dashboard/course-placeholder.js` sekarang menjadi manifest tunggal `COURSE_SCAFFOLDS` untuk course/track/module yang belum final.
- Math for AI sudah dihapus dari manifest scaffold karena route final Math aktif di `foundation-core-ai/math-for-ai/`.
- Setiap module scaffold punya metadata minimal: `slug`, `title`, `summary`, `materi`, `latihan`, `kuis`, dan `diskusi`.
- Scaffold mendukung route overview dan detail module via query:
  - `#/participant-ai-lab-gen?activity=latihan`
  - `#/participant-ai-lab-gen?module=prompting-workflow&activity=kuis`
- Query `activity` invalid fallback ke `materi`; query `module` invalid fallback ke overview route utama.
- Route scaffold baru AI Fundamentals:
  - `#/participant-ai-reasoning`
  - `#/participant-ai-evaluation`
  - `#/participant-ai-evolution`
- Card AI Fundamentals untuk Reasoning, Evaluation, dan Evolution of AI sekarang berupa link route, bukan button non-route.
- `index.html` cache buster diperbarui:
  - `course-placeholder.js?v=20260710-full-scaffold-manifest`
  - `router.js?v=20260710-ai-fundamentals-scaffold`

Aturan tim konten:

- Course/module belum final tidak boleh membuat file canonical `materi.html`, `latihan.html`, `kuis.html`, atau `diskusi.html`.
- Isi dulu manifest `COURSE_SCAFFOLDS` di `course-placeholder.js`.
- File final baru dibuat kalau konten activity sudah benar-benar siap dan route akan dipindahkan dari `course-placeholder.html`.

Verifikasi checkpoint ini:

```text
node --check js/router.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
git diff --check
node scripts/check-participant-routes.mjs
```

Hasil route checker:

```text
Total: 110 | 110 passed | 0 failed
```

---

## Update 10 Juli 2026 - Activity Tabs Scaffold dan Aktivasi Materi Konsep AI Modern

Update lanjutan sesi ini:

- Math for AI sudah diaktifkan dari draft Nazril menjadi route final di folder canonical:
  - `#/participant-ai-lab-math` -> `foundation-core-ai/math-for-ai/overview.html`
  - `#/participant-ai-lab-math-intro` sampai `#/participant-ai-lab-math-case-study` -> `foundation-core-ai/math-for-ai/lesson.html`
  - `#/participant-ai-lab-math-practice` -> `foundation-core-ai/math-for-ai/practice.html`
  - `#/participant-ai-lab-math-quiz` -> `foundation-core-ai/math-for-ai/quiz.html`
  - `#/participant-ai-lab-math-discussion` -> `foundation-core-ai/math-for-ai/discussion.html`
- `js/router.js` sekarang memanggil init Math for AI:
  - `initAiLabMathOverview()`
  - `initAiLabMathLesson()`
  - `initAiLabMathPractice()`
  - `initAiLabMathQuiz()`
  - `initAiLabMathDiscussion()`
- Aksen hijau di kartu lesson Math dirapikan menjadi pink agar sesuai AGENTS.md.

- Activity final Konsep AI Modern sudah dibuat di folder canonical:
  - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/latihan.html`
  - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/kuis.html`
  - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/diskusi.html`
- `js/frontend/fellow-dashboard/ai-modern.js` sekarang punya init activity:
  - `initAiModernBasic()`
  - `initAiModernQuiz()`
  - `initAiModernDiscussion()`
- Route berikut sudah aktif ke file final, bukan `under-development.html`:
  - `#/participant-ai-modern-practice`
  - `#/participant-ai-modern-quiz`
  - `#/participant-ai-modern-discussion`
- LocalStorage baru:
  - `heraiAiModernPractice`
  - `heraiAiModernQuizDone`
  - `heraiAiModernQuizScore`
  - `heraiAiModernQuizAnswers`
  - `heraiAiModernDiscussion`

Checkpoint lokal pada sesi activity tabs tersebut, sudah commit dan belum push:

```text
a56f051 refactor: standardize scaffold activity tabs
ebe0256 fix: keep scaffold activity tabs on course page
a93e917 fix: activate ai modern materi route
e750127 fix: link ai modern card to materi
```

Yang sudah dilakukan:

- Menjadikan pola tab course mengikuti standar halaman Python:
  `Materi -> Latihan -> Kuis -> Diskusi`.
- `pages/frontend/fellow-dashboard/course-placeholder.html` sekarang menampilkan empat tab activity standar, termasuk `Diskusi`.
- `js/frontend/fellow-dashboard/course-placeholder.js` sekarang mendukung state activity scaffold via query hash:
  - `#/participant-ai-lab-gen`
  - `#/participant-ai-lab-gen?activity=latihan`
  - `#/participant-ai-lab-gen?activity=kuis`
  - `#/participant-ai-lab-gen?activity=diskusi`
- Tab scaffold tidak lagi melempar peserta ke `#/participant-under-development`; peserta tetap berada di halaman course scaffold yang sama sambil melihat placeholder activity yang sesuai.
- `index.html` cache buster `course-placeholder.js` saat itu diperbarui ke `20260710-scaffold-tabs-query`.
- Catatan terbaru: cache buster ini sudah superseded oleh `20260710-full-scaffold-manifest` pada checkpoint `280c087`.
- Route materi `#/participant-ai-modern` di `js/router.js` sudah diaktifkan ke file canonical:
  `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/materi.html`.
- Link card `Konsep AI Modern` di `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/overview.html` sudah diperbaiki dari `#/participant-under-development` menjadi `#/participant-ai-modern`.
- Emoji sparkle di heading overview AI Fundamentals dihapus agar patuh AGENTS.md.
- `handover/MODULE_STATUS_MAP.md` sudah diperbarui: Konsep AI Modern aktif untuk materi, latihan, kuis, dan diskusi.

Status penting setelah update:

- `#/participant-ai-modern` aktif dan menampilkan materi 4 topik via `ai-modern.js`.
- `#/participant-ai-modern-practice`, `#/participant-ai-modern-quiz`, dan `#/participant-ai-modern-discussion` sudah diarahkan ke file activity final.
- `#/participant-under-development` tetap ada sebagai fallback global; jangan dipakai sebagai target card yang sebenarnya sudah punya route materi aktif.
- Scaffold course/track memakai `course-placeholder.html`; tab activity scaffold memakai query `?activity=...` agar layout konsisten tanpa menambah route baru.

Verifikasi sesi ini:

```text
node --check js/frontend/fellow-dashboard/course-placeholder.js
node --check js/frontend/fellow-dashboard/ai-modern.js
node --check js/router.js
node scripts/check-participant-routes.mjs
git diff --check
```

Hasil route checker saat checkpoint ini:

```text
Total: 107 | 107 passed | 0 failed
```

Live check yang dilakukan:

- `http://localhost:3000/#/participant-ai-lab-gen?activity=latihan` tetap render course scaffold, bukan under-development.
- `http://localhost:3000/#/participant-ai-modern` render halaman `Konsep AI Modern`.
- `http://localhost:3000/#/participant-ai-fundamentals` card `Konsep AI Modern` sekarang memiliki href `#/participant-ai-modern`.

Catatan console saat live check:

- Ada error lokal `127.0.0.1:8092/api/participant-portal/settings` connection refused dan sesekali `__gas` 502. Ini terkait service lokal/backend proxy, bukan perubahan route/tab.

Next step yang disarankan:

1. Jadikan pola Python/AI Modern sebagai standar markup course aktif berikutnya, tapi lakukan bertahap per course agar layout tidak rusak.
2. Untuk merge pekerjaan Reasoning dari tim lain, baca `handover/MERGE_GUIDE_REASONING_TEAM.md` dulu.
3. Untuk revisi Python/Pengantar AI, kerjakan scoped di folder canonical masing-masing dan jaga route/layout/interaktif.
4. Sinkronkan file overview Generative AI dengan scaffold atau aktifkan route final hanya jika user mengalihkan task ke Generative AI.
5. Aktivasi course scaffold berikutnya hanya jika konten final sudah siap; kalau belum, tetap gunakan query activity scaffold.
6. Setelah setiap perubahan routing, jalankan `node scripts/check-participant-routes.mjs`.

---

## Update 10 Juli 2026 - Finalisasi Folder, Rename, dan Routing Course Catalog

Checkpoint final:

```text
3f238a7 refactor: move fellowship courses into dashboard hierarchy
```

Yang sudah dilakukan:

- Struktur course catalog dirapikan agar category/domain langsung berada di bawah `pages/frontend/fellow-dashboard/`.
- Folder percobaan `pages/frontend/fellow-dashboard/course-catalog/` sudah tidak dipakai dan jangan dibuat ulang.
- Folder lama `pages/frontend/fellow-dashboard/ai-fundamental/` dan `pages/frontend/fellow-dashboard/ai-lab/` sudah dibersihkan dari path aktif peserta.
- Konten AI Fundamentals, Python untuk AI, Konsep AI Modern, Math draft, Machine Learning, Generative overview, Computer Vision, dan NLP sudah dipindah ke category/domain canonical.
- `js/router.js` sudah diarahkan ke path baru tanpa mengubah hash route publik peserta.
- Controller yang fetch file HTML internal sudah ikut diarahkan:
  - `js/frontend/fellow-dashboard/ai-ml-basic.js`
  - `js/frontend/fellow-dashboard/ai-python-basic.js`
  - `js/frontend/fellow-dashboard/ai-modern.js`
- `index.html` cache buster router sudah diperbarui ke `router.js?v=20260710-dashboard-course-hierarchy`.
- `pages/frontend/fellow-dashboard/README.md` sudah ditambahkan sebagai peta cepat filesystem course.

Catatan supaya tidak salah baca sejarah:

- Commit `fb8be7d refactor: align course catalog filesystem hierarchy` sempat membuat folder `course-catalog/`.
- Commit itu sudah dikoreksi/superseded oleh `3f238a7`.
- Source of truth detail rename dan routing ada di `handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md`.

Verifikasi terakhir pada checkpoint filesystem ini:

```text
node --check js/router.js
node --check js/frontend/fellow-dashboard/ai-ml-basic.js
node --check js/frontend/fellow-dashboard/ai-python-basic.js
node --check js/frontend/fellow-dashboard/ai-modern.js
node scripts/check-participant-routes.mjs
git diff --check
```

Hasil route checker saat checkpoint filesystem ini:

```text
Total: 107 | 107 passed | 0 failed
```

---

## Update Susulan - Implementasi Folder Category/Domain

Hierarchy produk sekarang diterapkan langsung di filesystem `fellow-dashboard/`:

```text
pages/frontend/fellow-dashboard/
  foundation-core-ai/
  generative-multimodal-ai/
  data-engineering-domains/
  business-industry-applications/
  specialization-tracks/
```

Perubahan utama:

- Semua course dari UI catalog sekarang punya folder scaffold langsung di bawah `{category}/{course}/`.
- Machine Learning aktif dipindahkan ke `pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/`.
- AI Fundamentals, Math draft, CV/NLP lessons, dan Generative overview dipindahkan dari folder lama ke category/domain masing-masing.
- Hash route peserta tetap sama, termasuk `#/participant-ai-lab-ml` dan alias legacy ML.
- `js/router.js` dan `js/frontend/fellow-dashboard/ai-ml-basic.js` sudah diarahkan ke path canonical baru.
- Folder lama `ai-fundamental/`, `ai-lab/` sudah dibersihkan dari path aktif peserta.

---

## Update Susulan - Canonical Course Catalog Tree

Dokumentasi hierarchy diperjelas agar mengikuti UI `pages/frontend/fellow-dashboard/modules.html`:

```text
Course Catalog
  Category / Domain
    Course
      Module / Chapter
        Materi -> Latihan -> Kuis -> Diskusi
```

Perubahan penting:

- `handover/COURSE_HIERARCHY.md` sekarang punya `Canonical Product Tree` lengkap untuk semua category/domain, semua course, dan outline module/chapter awal di dalamnya.
- `handover/MODULE_STATUS_MAP.md` sekarang menampilkan course dengan kolom `Category / Domain`, bukan daftar course datar.
- `handover/PROMPT_AI_BARU.md` sekarang memberi onboarding hierarchy sesuai UI: `Foundation & Core AI`, `Generative & Multimodal AI`, `Data & Engineering Domains`, dan `Business & Industry Applications`.
- Machine Learning ditegaskan sebagai course di bawah category `Foundation & Core AI`, sejajar dengan AI Fundamentals & Advanced dan Math for AI.

---

## Klarifikasi Hierarki Course

Hierarki produk yang dipakai ke depan:

```text
Course Catalog
  Category / Domain
    Course
      Module / Chapter
        Materi -> Latihan -> Kuis -> Diskusi
```

Machine Learning diperlakukan sebagai course di bawah category `Foundation & Core AI`, sejajar dengan AI Fundamentals & Advanced dan Math for AI. Folder ML aktif sekarang berada di:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/
```

Jangan menganggap Machine Learning sebagai Modul 3b di dalam AI Fundamentals & Advanced.

---

## Update Sesi Ini - Machine Learning

Machine Learning sekarang berada di `pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/` dan sudah menjadi course aktif 8 chapter berdasarkan referensi Website Portofolio Chen, dengan gaya bahasa Indonesia HerAI.

Flow tetap dipertahankan:

```text
Materi -> Latihan -> Kuis -> Diskusi
```

Tidak ada dependency baru, tidak memakai Pyodide, dan tidak mengubah flow fitur lain.

---

## Perubahan Utama

### 1. Materi ML menjadi 8 chapter

Lokasi:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/chapters/
```

Daftar chapter aktif:

| Chapter | File | Topik |
|---|---|---|
| 1 | `chapter-1.html` | Pengantar Machine Learning |
| 2 | `chapter-2.html` | Supervised Learning |
| 3 | `chapter-3.html` | Regresi & Klasifikasi Dasar |
| 4 | `chapter-4.html` | Probabilistic Models |
| 5 | `chapter-5.html` | Linear Discriminative Models |
| 6 | `chapter-6.html` | Support Vector Machine |
| 7 | `chapter-7.html` | Neural Networks |
| 8 | `chapter-8.html` | Unsupervised Learning |

Setiap chapter berisi:

- Chapter header
- Learning objectives
- Why it matters
- Penjelasan konsep
- Analogi
- Contoh nyata
- Formula dengan penjelasan manusiawi
- Mini checkpoint
- Common mistakes
- Summary
- CTA ke chapter berikutnya atau latihan

### 2. Routing ML lama tetap hidup, route baru ditambahkan

File:

```text
js/router.js
js/frontend/fellow-dashboard/ai-ml-basic.js
```

Route lama yang tetap didukung:

| Route lama | Mapping aktif |
|---|---|
| `/participant-ai-lab-ml` | Materi ML, fallback ke saved chapter atau chapter 1 |
| `/participant-ai-lab-ml-intro` | Chapter 1 |
| `/participant-ai-lab-ml-hypothesis` | Chapter 2 |
| `/participant-ai-lab-ml-vc-dim` | Chapter 3 |
| `/participant-ai-lab-ml-bias-variance` | Chapter 3 |
| `/participant-ai-lab-ml-practice` | Latihan |
| `/participant-ai-lab-ml-quiz` | Kuis |
| `/participant-ai-lab-ml-discussion` | Diskusi |

Route baru yang ditambahkan:

| Route baru | Chapter |
|---|---|
| `/participant-ai-lab-ml-supervised` | 2 |
| `/participant-ai-lab-ml-regression-classification` | 3 |
| `/participant-ai-lab-ml-probabilistic` | 4 |
| `/participant-ai-lab-ml-linear-discriminative` | 5 |
| `/participant-ai-lab-ml-svm` | 6 |
| `/participant-ai-lab-ml-neural-networks` | 7 |
| `/participant-ai-lab-ml-unsupervised` | 8 |

Catatan penting:

- `ai-ml-basic.js` sekarang punya `CHAPTERS` berisi 8 item.
- Legacy route `hypothesis`, `vc-dim`, dan `bias-variance` dipertahankan sebagai alias.
- `heraiAiMlCurrentChapter` tetap dipakai untuk membuka chapter terakhir yang dibaca.

### 3. Latihan ML diperluas menjadi 10 skenario

File:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/latihan.html
```

Skenario latihan:

1. Rule-based vs Machine Learning
2. Fitur, label, dan target
3. Supervised, unsupervised, atau reinforcement
4. Algoritma regresi
5. Algoritma klasifikasi
6. Probabilistic model dan Naive Bayes
7. Confusion matrix
8. Metrik untuk imbalanced data
9. SVM margin dan kernel
10. Clustering dan dimensionality reduction

Jawaban tetap disimpan di:

```text
heraiAiMlPractice
```

### 4. Kuis ML diperluas menjadi 24 soal

File:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/kuis.html
```

Detail:

- 24 multiple-choice questions
- 3 soal per chapter
- 4 opsi per soal
- Single attempt
- Pembahasan dibuka setelah submit
- Jika browser punya hasil kuis lama 12 soal, state lama akan di-reset agar tidak salah menghitung skor 24 soal.

LocalStorage:

```text
heraiAiMlQuizDone
heraiAiMlQuizScore
heraiAiMlQuizAnswers
```

### 5. Diskusi ML diperluas menjadi 8 prompt

File:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/diskusi.html
```

Detail:

- 8 prompt diskusi, satu per chapter
- Thread dan balasan tetap tersimpan lokal
- Seed lama akan dimigrasikan agar prompt baru ikut muncul tanpa menghapus posting user

LocalStorage:

```text
heraiAiMlDiscussion
```

### 6. Styling ML ditambah secara scoped

File:

```text
css/frontend/fellow-dashboard/modules.css
```

Tambahan style baru memakai prefix:

```text
ai-ml-*
```

Tujuan style:

- Learning objectives
- Formula cards
- Mini checkpoint
- Common mistakes
- Summary CTA
- Neural network diagram

Style tetap memakai palet utama ML/Fellow Dashboard. Tidak ada global override baru untuk fitur lain.

### 7. Cache buster diupdate

File:

```text
index.html
```

Cache buster yang diubah:

```text
modules.css?v=20260709-ml-full
ai-ml-basic.js?v=20260709-ml-full
router.js?v=20260709-ml-full
```

---

## File yang Disentuh

| File | Perubahan |
|---|---|
| `js/router.js` | Tambah route ML baru, pertahankan route lama, update init hook khusus ML |
| `js/frontend/fellow-dashboard/ai-ml-basic.js` | Chapter map 8 item, legacy alias, reset kuis lama, prompt diskusi 8 item |
| `index.html` | Cache buster ML |
| `css/frontend/fellow-dashboard/modules.css` | Style scoped `ai-ml-*` |
| `pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/materi.html` | Sidebar/progress 8 chapter |
| `pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/latihan.html` | 10 latihan |
| `pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/kuis.html` | 24 soal |
| `pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/diskusi.html` | 8 prompt |
| `pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/chapters/chapter-1.html` sampai `chapter-8.html` | Konten materi lengkap |

---

## Fitur yang Tidak Disentuh

Tidak ada perubahan fitur pada:

- Computer Vision
- NLP
- Python untuk AI
- Math for AI
- Generative AI
- Dashboard participant selain route ML yang diperlukan
- Admin dashboard

Catatan: `js/router.js` memang disentuh, tetapi hanya untuk mapping route ML dan participant dashboard route list ML.

---

## Update Susulan - Semantic Refactor Hierarki

Perubahan susulan dilakukan untuk mengurangi ambiguitas setelah ML aktif sebagai course di category `Foundation & Core AI`:

- Dokumentasi handover menegaskan bahwa AI Fundamentals & Advanced, Math for AI, dan Machine Learning adalah course sejajar.
- `handover/COURSE_HIERARCHY.md` ditambahkan sebagai source of truth category, course, module/chapter, activity, dan specialization track.
- Machine Learning tetap memakai route `#/participant-ai-lab-ml`.
- Status lama saat itu: folder ML belum dipindah dan path `ai-fundamental/03-machine-learning/` diperlakukan sebagai legacy implementation path. Status terbaru: ML sudah pindah ke `foundation-core-ai/machine-learning/`.
- Copy UI ML diperbarui agar breadcrumb dan label halaman tidak lagi menyiratkan ML sebagai bagian dari AI Fundamentals.
- Setiap perubahan hierarki harus ikut di-commit dan dokumen handover wajib diupdate.

### Scaffold halaman katalog course

Course dan specialization track yang belum aktif sekarang punya route eksplisit ke halaman scaffold reusable, sehingga card katalog tidak lagi loop ke `#/participant-modules` dan tidak lagi jatuh ke halaman under-development generik.

Contoh:

- `#/participant-ai-lab-deep-learning`
- `#/participant-ai-lab-llm`
- `#/participant-ai-lab-data-engineering`
- `#/participant-ai-lab-business-insight`
- `#/participant-specialization-nlp-llm`

File scaffold:

```text
pages/frontend/fellow-dashboard/course-placeholder.html
js/frontend/fellow-dashboard/course-placeholder.js
```

Tujuannya agar tim berikutnya sudah punya halaman awal berisi title, category, status, dan outline module/chapter. Saat course siap, tim bisa mengisi data scaffold atau mengganti mapping route ke file course final.

Cache buster `router.js` ikut dibump ke:

```text
modules.css?v=20260709-course-scaffold
course-placeholder.js?v=20260709-course-scaffold
router.js?v=20260709-course-page-scaffold
```

---

## Verifikasi yang Sudah Dilakukan

Command yang sudah dijalankan dan lolos:

```bash
node --check js/frontend/fellow-dashboard/ai-ml-basic.js
node --check js/router.js
git diff --check
node scripts/check-participant-routes.mjs
```

Hasil route checker:

```text
Total: 80 | 80 passed | 0 failed
```

Server lokal juga dicek di:

```text
http://127.0.0.1:3000/
```

HTTP 200 sudah dicek untuk:

- `materi.html`
- `latihan.html`
- `kuis.html`
- `diskusi.html`
- `chapter-1.html` sampai `chapter-8.html`

Catatan verifikasi visual:

- Browser internal Codex gagal tersambung dari environment ini.
- Playwright lokal tidak tersedia.
- Tidak ada dependency baru yang ditambahkan.

---

## Aturan untuk Developer/AI Selanjutnya

1. Baca `GEMINI.md` dan dokumen handover sebelum mengubah fitur.
2. Jangan ubah fitur lain saat melanjutkan Machine Learning.
3. Jika menambah route participant, daftarkan di 3 tempat: `routes`, `participantDashboardPages`, dan init hook di `handleRouting()`.
4. Untuk style baru ML, gunakan scope `.ai-ml-*` atau class existing ML yang sudah scoped.
5. Jangan pakai emoji di UI; gunakan FontAwesome icons.
6. Jangan tambah dependency tanpa alasan kuat dan izin.
7. Commit boleh dibuat lokal, tetapi jangan push tanpa izin user.

---

## Git Checkpoint

```bash
git log --oneline -3
```

Commit fitur relevan sebelum commit dokumentasi ini:

```text
5103d4e feat: migrate full chen machine learning content
4d7d69a feat: activate machine learning module flow
b4b1135 feat: merge Math for AI + ML from Nazril, restore CV routes, NLP single page, all under-dev
```

---

## Arsip Checkpoint 5 Juli 2026

Bagian ini adalah riwayat historis sebelum ML diaktifkan dan dimigrasikan ke konten 8 chapter. Jangan pakai bagian ini sebagai status terkini. Status terkini ada di bagian atas dokumen ini dan di `MODULE_STATUS_MAP.md`.

### Merge Math for AI dari Nazril

Pada checkpoint 5 Juli 2026, Math for AI dari Nazril sudah masuk ke repo sebagai file referensi/implementasi awal, tetapi seluruh route Math masih diarahkan ke `under-development.html`.

File yang tercatat masuk dari Nazril:

- `js/frontend/fellow-dashboard/ai-math-for-ai.js`
- `pages/frontend/fellow-dashboard/foundation-core-ai/math-for-ai/overview.html`
- `pages/frontend/fellow-dashboard/foundation-core-ai/math-for-ai/lesson.html`
- `pages/frontend/fellow-dashboard/foundation-core-ai/math-for-ai/practice.html`
- `pages/frontend/fellow-dashboard/foundation-core-ai/math-for-ai/quiz.html`
- `pages/frontend/fellow-dashboard/foundation-core-ai/math-for-ai/discussion.html`
- `docs-nazril/` sebagai referensi lokal yang tidak untuk dipush

Route Math pada checkpoint itu:

- `/participant-ai-lab-math`
- `/participant-ai-lab-math-intro`
- `/participant-ai-lab-math-linear-algebra`
- `/participant-ai-lab-math-statistics`
- `/participant-ai-lab-math-probability`
- `/participant-ai-lab-math-calculus`
- `/participant-ai-lab-math-optimization`
- `/participant-ai-lab-math-case-study`
- `/participant-ai-lab-math-practice`
- `/participant-ai-lab-math-quiz`
- `/participant-ai-lab-math-discussion`

Status historis: under-development. Status ini masih benar untuk Math saat dokumen 9 Juli dibuat, kecuali ada commit baru setelahnya yang mengaktifkan Math.

### Machine Learning sebelum aktivasi

Pada checkpoint 5 Juli 2026, Machine Learning masih diarahkan ke `under-development.html`. File ML sudah ada sebagai draft awal, tetapi belum aktif sebagai flow peserta.

Route ML yang saat itu masih under-development:

- `/participant-ai-lab-machine-learning`
- `/participant-ai-lab-ml`
- `/participant-ai-lab-ml-intro`
- `/participant-ai-lab-ml-hypothesis`
- `/participant-ai-lab-ml-vc-dim`
- `/participant-ai-lab-ml-bias-variance`
- `/participant-ai-lab-ml-practice`
- `/participant-ai-lab-ml-quiz`
- `/participant-ai-lab-ml-discussion`

Status historis ini sudah superseded oleh:

- `4d7d69a feat: activate machine learning module flow`
- `5103d4e feat: migrate full chen machine learning content`

Status terkini: ML aktif dengan 8 chapter, 10 latihan, 24 soal kuis, dan 8 prompt diskusi.

### Generative AI

Pada checkpoint 5 Juli 2026, Generative AI masih under-development:

- `/participant-ai-lab-gen` -> `under-development.html`

Status ini masih perlu dicek pada commit terbaru sebelum melanjutkan GenAI.

### Computer Vision route restore

Pada checkpoint 5 Juli 2026, 12 route Computer Vision yang sempat terhapus sudah direstore di `js/router.js`.

Route yang direstore saat itu sekarang sudah ikut dipindah ke path final `data-engineering-domains/` pada checkpoint 10 Juli 2026:

| Route | File |
|---|---|
| `/participant-ai-lab-cv` | `data-engineering-domains/computer-vision.html` |
| `/participant-ai-lab-cv-cnn-intro` | `data-engineering-domains/computer-vision/lessons/cnn-intro.html` |
| `/participant-ai-lab-cv-cnn-why` | `data-engineering-domains/computer-vision/lessons/cnn-why.html` |
| `/participant-ai-lab-cv-cnn-relu` | `data-engineering-domains/computer-vision/lessons/cnn-relu.html` |
| `/participant-ai-lab-cv-filtering-kernels` | `data-engineering-domains/computer-vision/lessons/filtering-kernels.html` |
| `/participant-ai-lab-cv-cnn-fc` | `data-engineering-domains/computer-vision/lessons/cnn-fc.html` |
| `/participant-ai-lab-cv-cnn-hands` | `data-engineering-domains/computer-vision/lessons/cnn-hands.html` |
| `/participant-ai-lab-cv-cnn-arch` | `data-engineering-domains/computer-vision/lessons/cnn-arch.html` |
| `/participant-ai-lab-cv-morph` | `data-engineering-domains/computer-vision/lessons/morphological-transforms.html` |
| `/participant-ai-lab-cv-opencv` | `data-engineering-domains/computer-vision/lessons/image-processing-opencv.html` |
| `/participant-ai-lab-cv-pixel` | `data-engineering-domains/computer-vision/lessons/pixel-anatomy.html` |
| `/participant-ai-lab-cv-cnn-arch-builder` | `data-engineering-domains/computer-vision/lessons/cnn-arch-builder.html` |

### NLP single-page cleanup

Pada checkpoint 5 Juli 2026, 5 NLP lesson file dibuat single-page materi saja karena route latihan, kuis, dan diskusi belum tersedia untuk sub-lesson tersebut.

File yang dicatat:

- `pages/frontend/fellow-dashboard/data-engineering-domains/nlp/lessons/tokenization.html`
- `pages/frontend/fellow-dashboard/data-engineering-domains/nlp/lessons/preprocessing.html`
- `pages/frontend/fellow-dashboard/data-engineering-domains/nlp/lessons/pos-ner.html`
- `pages/frontend/fellow-dashboard/data-engineering-domains/nlp/lessons/bow.html`
- `pages/frontend/fellow-dashboard/data-engineering-domains/nlp/lessons/tfidf.html`

### File yang disentuh pada checkpoint 5 Juli

Daftar historis dari checkpoint lama:

| File | Perubahan historis |
|---|---|
| `js/router.js` | Tambah route Math, restore route CV, arahkan ML/Math ke under-development pada saat itu |
| `index.html` | Tambah script `ai-math-for-ai.js` |
| `pages/frontend/fellow-dashboard/modules.html` | Card Math diarahkan ke under-development |
| `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/overview.html` | Dikembalikan ke versi tim sebelum merge |
| `pages/frontend/fellow-dashboard/data-engineering-domains/nlp/lessons/tokenization.html` | Hapus tab Latihan/Kuis/Diskusi |
| `pages/frontend/fellow-dashboard/data-engineering-domains/nlp/lessons/preprocessing.html` | Hapus tab Latihan/Kuis/Diskusi |
| `pages/frontend/fellow-dashboard/data-engineering-domains/nlp/lessons/pos-ner.html` | Hapus tab Latihan/Kuis/Diskusi |
| `pages/frontend/fellow-dashboard/data-engineering-domains/nlp/lessons/bow.html` | Hapus tab Latihan/Kuis/Diskusi |
| `pages/frontend/fellow-dashboard/data-engineering-domains/nlp/lessons/tfidf.html` | Hapus tab Latihan/Kuis/Diskusi |
| `js/frontend/fellow-dashboard/ai-math-for-ai.js` | File baru dari Nazril |
| `pages/frontend/fellow-dashboard/foundation-core-ai/math-for-ai/*` | File baru dari Nazril |
| `docs-nazril/` | Referensi lokal, tidak untuk dipush |

### Catatan historis penting

- `docs-faiz/` dan `docs-nazril/` diperlakukan sebagai referensi lokal.
- Jangan menghapus konten mentor; tambahkan jika perlu.
- Jangan memakai emoji di UI; gunakan FontAwesome icons.
- Semua perubahan sebaiknya dicommit lokal dulu dan tidak dipush tanpa izin.
