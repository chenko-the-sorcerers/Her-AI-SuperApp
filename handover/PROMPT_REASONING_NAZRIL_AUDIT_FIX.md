# Follow-up Execution Prompt — Reasoning Nazril Audit Fix

> **ARCHIVED COMPLETED TASK:** blocker dalam prompt ini sudah menjadi regression history. Jangan menjalankan ulang task secara buta. Gunakan `REGRESSION_AND_ERROR_PLAYBOOK.md` dan verifikasi runtime sekarang.

> **Status 12 Juli 2026:** blocker dalam prompt ini sudah dieksekusi pada final-polish. Gunakan dokumen ini sebagai checklist regression, bukan daftar pekerjaan yang masih terbuka. Source of truth status terbaru ada di `handover/HANDOVER_UPDATE.md` dan `handover/REASONING_FINAL_CHECKPOINT.md`.

Dokumen ini adalah checkpoint lanjutan setelah implementasi awal Reasoning Nazril. AI baru wajib membaca dokumen ini bersama:

```text
handover/PROMPT_REASONING_NAZRIL_CANONICAL.md
```

Jika ada perbedaan antara status historis dan hasil audit runtime terbaru di dokumen ini, gunakan hasil audit terbaru di dokumen ini sebagai baseline pekerjaan fix.

---

# OBJECTIVE

Perbaiki implementasi Reasoning Nazril yang sudah berjalan sampai benar-benar memenuhi standar HerAI pada:

```text
#/participant-ai-reasoning
#/participant-ai-reasoning-practice
#/participant-ai-reasoning-quiz
#/participant-ai-reasoning-discussion
```

Jangan merombak ulang bagian yang sudah benar. Fokus pada blocker hasil audit:

1. hero seluruh route rusak di mobile;
2. Mini Challenge enam chapter tidak menyimpan jawaban;
3. beberapa visual canvas overflow/clipped pada mobile;
4. reply diskusi masih memakai `window.prompt`;
5. radius code block internal belum sesuai aturan literal;
6. lakukan ulang smoke test lengkap setelah fix.

# MANDATORY FIRST STEP

Sebelum edit:

```bash
git status --short --branch
git log -5 --oneline --decorate
git diff --name-status
git ls-files --others --exclude-standard
```

Working tree dapat berisi file dari user atau AI lain.

Dilarang:

```text
git reset --hard
git clean
git checkout --
```

Jangan menghapus, memulihkan, memindahkan, atau commit perubahan unrelated tanpa audit.

Baca seluruh:

```text
AGENTS.md
GEMINI.md
handover/PROMPT_REASONING_NAZRIL_CANONICAL.md
handover/PROMPT_REASONING_NAZRIL_AUDIT_FIX.md
js/frontend/fellow-dashboard/ai-reasoning.js
css/frontend/fellow-dashboard/modules.css
index.html
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/
```

# AUDIT BASELINE

Audit dilakukan terhadap:

```text
http://localhost:3000/#/participant-ai-reasoning
```

Viewport:

```text
Desktop: 1280 × 720
Mobile: 390 × 844
```

## Bagian yang sudah lulus

### Materi

- enam chapter termuat;
- flow sekarang sudah pedagogis:
  `Hook → Konsep → Analogi → Visual → Contoh → Eksplorasi → Quick Check → Contoh AI → Prompt → Challenge → Mistakes/Practices → Ringkasan`;
- Quick Check muncul setelah materi;
- Quick Check memiliki selected, correct, wrong, feedback, dan retry;
- literal `\n` pada Prompt Pattern sudah hilang;
- Visual Learning/Sumber Lengkap toggle bekerja;
- `aria-pressed` toggle bekerja;
- visual navigation dan source navigation berganti dengan benar;
- source lengkap berhasil dimuat;
- tidak ada document-level overflow desktop.

### Practice

- 17 latihan;
- satu latihan aktif per langkah;
- 17-step navigator;
- workspace tampil sebelum source;
- save jawaban berhasil ke `heraiAiReasoningPractice`;
- previous/next tersedia;
- desktop tidak overflow.

### Quiz

- 26 soal;
- satu soal aktif per layar;
- 26-step navigator;
- full-card option clickable;
- selected state bekerja;
- answered counter bekerja;
- workspace tampil sebelum source;
- desktop tidak overflow.

Jangan melakukan submit kuis sembarangan saat smoke test karena single attempt akan mengunci state. Gunakan isolated browser context atau backup/restore localStorage.

### Discussion

- empat prompt tersedia;
- empat seed thread tampil;
- form tampil sebelum source;
- post baru dapat dibuat;
- post tersimpan di `heraiAiReasoningDiscussion`;
- reply button tersedia.

## Verification baseline yang sudah lulus

```text
node --check js/frontend/fellow-dashboard/ai-reasoning.js
node --check js/router.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
git diff --check
node scripts/check-participant-routes.mjs
```

Route checker baseline:

```text
113 passed
0 failed
```

Console browser hanya menunjukkan API settings lokal tidak hidup:

```text
http://127.0.0.1:8092/api/participant-portal/settings
ERR_CONNECTION_REFUSED
```

Jangan salah menganggap error settings lokal tersebut sebagai error Reasoning.

# BLOCKER 1 — MOBILE HERO RUSAK

Masalah terjadi pada seluruh route:

```text
Materi
Latihan
Kuis
Diskusi
```

Pada viewport 390px, hasil runtime menunjukkan:

```text
hero width: sekitar 362px
image/grid column: sekitar 318px
hero copy: 0–107px
```

Akibatnya:

- `Reasoning` pecah menjadi beberapa baris/karakter;
- judul activity pecah buruk;
- deskripsi turun satu atau dua kata per baris;
- hero menjadi ratusan pixel terlalu tinggi;
- materi utama terdorong jauh ke bawah.

Screenshot audit lokal:

```text
reasoning-mobile-ch1-audit.png
```

Penyebab yang teridentifikasi:

- responsive selector menargetkan `.reasoning-scaffold-page .course-scaffold-hero`;
- hero runtime menggunakan `.lesson-hero` tanpa class `.course-scaffold-hero`;
- mobile rule tidak mengubah grid hero aktual menjadi satu kolom;
- image mempertahankan lebar besar.

Target fix:

- scope hanya Reasoning;
- pada mobile, `.reasoning-scaffold-page .lesson-hero` menjadi satu kolom;
- `.lesson-hero-copy` memiliki width/min-width yang sehat;
- image berada setelah copy atau diperkecil/disembunyikan secara proporsional;
- judul tidak pecah per karakter;
- paragraph minimal menggunakan lebar content mobile yang wajar;
- hero tidak mengambil tinggi berlebihan;
- shell route lain tidak berubah.

Acceptance test:

```js
const copy = document.querySelector('.reasoning-scaffold-page .lesson-hero-copy');
const rect = copy.getBoundingClientRect();

rect.width >= 280
document.documentElement.scrollWidth <= innerWidth
```

Tetap wajib inspeksi screenshot. Angka saja tidak cukup.

# BLOCKER 2 — MINI CHALLENGE TIDAK TERSIMPAN

Masalah terjadi pada Mini Challenge seluruh enam chapter.

Runtime saat tombol Simpan diuji menghasilkan:

```text
heraiAiReasoningChallengeCh6 = "undefined"
```

Penyebab:

- `setupChallengeInteraction()` mencari `[data-challenge-key]` dan memperlakukannya sebagai textarea;
- renderer baru menaruh `data-challenge-key` pada `<section>`;
- textarea baru hanya memiliki `data-challenge-textarea`;
- selector dan ownership key tidak sesuai;
- tombol Edit ditampilkan tetapi belum memiliki behavior;
- contoh pembahasan renderer baru tidak memiliki hook attribute yang dicari setup lama.

Lokasi penting kira-kira:

```text
js/frontend/fellow-dashboard/ai-reasoning.js
setupChallengeInteraction()
renderChallengeSection()
```

Target fix:

- section menjadi source storage key;
- textarea dipilih melalui `[data-challenge-textarea]`;
- save menyimpan string textarea aktual;
- refresh memulihkan nilai;
- setelah save, textarea dapat dibuat read-only/locked secara jelas;
- Edit membuka kembali textarea;
- Reset meminta konfirmasi yang proporsional atau memberi state yang jelas;
- Lihat Contoh hanya tersedia setelah peserta mengetik/mencoba;
- contoh dapat dibuka/tutup;
- semua tombol memiliki feedback dan accessible state;
- setiap chapter memakai key unik:

```text
heraiAiReasoningChallengeCh1
heraiAiReasoningChallengeCh2
heraiAiReasoningChallengeCh3
heraiAiReasoningChallengeCh4
heraiAiReasoningChallengeCh5
heraiAiReasoningChallengeCh6
```

Acceptance test per chapter:

1. isi textarea;
2. Simpan;
3. verifikasi localStorage berisi teks aktual, bukan `undefined`;
4. reload route;
5. buka chapter yang sama;
6. verifikasi teks pulih;
7. Edit;
8. ubah jawaban;
9. Simpan ulang;
10. Reset;
11. reload;
12. verifikasi state kosong.

# BLOCKER 3 — MOBILE INTERNAL CLIPPING

Walaupun document tidak overflow, beberapa visual canvas lebih lebar dari container.

Baseline 390px:

```text
Chapter 1 visual canvas: sekitar 562px di container 296px
Chapter 3 visual canvas: sekitar 337px di container 296px
Chapter 4 visual canvas: sekitar 312px di container 296px
```

Ini berarti `document.documentElement.scrollWidth <= innerWidth` dapat lulus walaupun konten internal terpotong.

Target fix:

- inspect elemen penyebab pada Chapter 1, 3, dan 4;
- grid comparison menjadi satu kolom pada mobile;
- flow horizontal menjadi vertical atau internal scroll yang jelas;
- long chip/button text boleh wrap sehat;
- table memakai wrapper `overflow-x: auto`;
- tidak menggunakan clipping untuk menyembunyikan masalah;
- semua visual tetap terbaca.

Acceptance test:

```js
[...document.querySelectorAll('.reasoning-visual-canvas *')]
  .filter(el => {
    const style = getComputedStyle(el);
    return el.scrollWidth > el.clientWidth + 2 && style.overflowX === 'visible';
  })
```

Hasil harus kosong untuk elemen layout biasa. Internal table scroller yang disengaja boleh ada dan harus terdokumentasi.

# BLOCKER 4 — REPLY DISKUSI MASIH WINDOW.PROMPT

Current implementation memakai:

```js
window.prompt("Tulis balasan singkat untuk thread ini:")
```

Ini dapat berfungsi, tetapi tidak memenuhi kualitas UX Coursera/Dicoding dan sulit diakses/ditata.

Target fix:

- klik Balas membuka inline reply composer di thread;
- textarea berlabel jelas;
- tombol `Kirim Balasan` dan `Batal`;
- empty-state validation;
- reply tersimpan ke `heraiAiReasoningDiscussion`;
- reply tampil tanpa reload;
- refresh mempertahankan reply;
- hanya composer thread aktif yang terbuka atau behavior dijelaskan;
- focus dipindahkan ke textarea saat dibuka;
- Batal mengembalikan focus ke tombol Balas;
- tidak memakai emoji;
- tetap gunakan FontAwesome icon.

Acceptance test:

1. buat post baru;
2. buka reply composer;
3. coba submit kosong dan verifikasi validation;
4. isi balasan;
5. kirim;
6. verifikasi tampil;
7. reload;
8. verifikasi masih tampil;
9. hapus state test setelah audit atau gunakan isolated context.

# BLOCKER 5 — BORDER RADIUS CODE BLOCK

Design scan menemukan `border-radius: 0` pada inner `pre` dan `code` Reasoning.

Lokasi kira-kira:

```text
css/frontend/fellow-dashboard/modules.css
.reasoning-code-block pre
.reasoning-code-block code
```

AGENTS.md melarang `border-radius: 0` pada elemen visible.

Target fix:

- pertahankan code block pink-light;
- gunakan radius 12–16px pada surface yang terlihat;
- jangan merusak header code block;
- jangan membuat celah atau double-rounded yang aneh;
- jika inner element transparan dan bukan visual surface, jangan tetap meninggalkan deklarasi literal `border-radius: 0`; gunakan struktur/scoping yang sesuai.

# EXECUTION PLAN

Kerjakan berurutan:

1. Audit Git dan baca mandatory docs.
2. Reproduce mobile hero pada empat route.
3. Fix mobile hero scoped Reasoning.
4. Screenshot ulang empat route mobile.
5. Reproduce Mini Challenge Ch1 dan Ch6.
6. Fix shared Mini Challenge renderer/setup.
7. Test seluruh Ch1–Ch6 save/edit/reset/reload.
8. Audit dan fix internal clipping Ch1, Ch3, Ch4.
9. Screenshot visual area setiap chapter mobile.
10. Ganti reply prompt dengan inline composer.
11. Test post/reply/reload.
12. Fix radius code block.
13. Regression desktop seluruh chapter/activity.
14. Regression mobile seluruh chapter/activity.
15. Jalankan verification commands.
16. Update handover utama bila status final berubah.
17. Commit lokal hanya jika seluruh acceptance test lulus.
18. Jangan push.

# DO NOT REGRESS

Pertahankan yang sudah bekerja:

- enam chapter;
- learning order yang sekarang;
- Visual/Source toggle;
- source lossless;
- Quick Check retry;
- prompt newline asli;
- 17-step practice;
- 26-step quiz;
- full-card quiz options;
- single attempt quiz;
- discussion post persistence;
- route existing;
- dashboard shell.

# REQUIRED VERIFICATION

```bash
node --check js/frontend/fellow-dashboard/ai-reasoning.js
node --check js/router.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
git diff --check
node scripts/check-participant-routes.mjs
```

Design scan scoped:

```bash
rg -n 'border-radius:\s*0|#8e91a0|#7c3aed' \
  js/frontend/fellow-dashboard/ai-reasoning.js \
  css/frontend/fellow-dashboard/modules.css \
  pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning
```

Jelaskan match unrelated/historical; jangan melakukan edit global tanpa scope.

# SCREENSHOT MATRIX

Desktop minimal:

```text
Materi Ch1
Materi Ch3
Materi Ch6
Latihan
Kuis
Diskusi
```

Mobile minimal:

```text
Materi Ch1 hero + learning content
Materi Ch3 visual
Materi Ch4 visual
Materi Ch6 challenge
Latihan hero + workspace
Kuis hero + option card
Diskusi hero + inline reply
```

Jangan hanya menyimpan screenshot. Inspeksi dan laporkan apakah teks/card benar-benar terbaca.

# FINAL REPORT

Laporan akhir wajib mencantumkan:

- baseline commit dan status worktree;
- file yang diubah;
- detail fix mobile hero;
- detail fix Mini Challenge;
- localStorage keys hasil test;
- detail fix clipping;
- detail inline reply;
- hasil desktop screenshots;
- hasil mobile screenshots;
- hasil interaction tests;
- hasil verification commands;
- hasil route checker;
- console errors yang tersisa;
- risiko/manual review;
- commit hash lokal;
- konfirmasi belum push.

# DEFINITION OF DONE

Pekerjaan belum selesai jika salah satu kondisi berikut masih terjadi:

- hero mobile memecah kata;
- hero copy width terlalu sempit;
- challenge menyimpan `undefined`;
- Edit/Reset/Lihat Contoh challenge tidak bekerja;
- visual canvas terpotong;
- reply masih memakai `window.prompt`;
- `border-radius: 0` scoped Reasoning masih ada pada visible surface;
- desktop atau mobile belum direview lewat screenshot;
- verification command belum lulus;
- perubahan belum terdokumentasi;
- commit lokal belum dibuat;
- perubahan sudah dipush tanpa izin.

---

Mulai dengan audit Git, baca kedua prompt Reasoning, reproduksi blocker, lalu lanjutkan implementasi sampai seluruh Definition of Done terpenuhi. Jangan berhenti pada plan.
