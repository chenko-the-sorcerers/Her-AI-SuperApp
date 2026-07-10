# HerAI Development Handover & Checkpoint

**Tanggal:** 10 Juli 2026
**Branch:** `design`
**Status:** sudah commit lokal, belum push
**Commit fitur terakhir:** `280c087 refactor: standardize curriculum placeholders`
**Commit sebelumnya terkait ML:** `4d7d69a feat: activate machine learning module flow`

Dokumen ini menjadi checkpoint terbaru untuk developer atau AI agent berikutnya. Catatan lama 5 Juli 2026 yang menyebut Machine Learning masih under-development sudah tidak berlaku untuk course ML.

Source of truth hierarki course terbaru:

```text
handover/COURSE_HIERARCHY.md
handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
```

---

## Current Snapshot - 10 Juli 2026

State terbaru setelah checkpoint `280c087`:

- Working tree terakhir bersih setelah commit.
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
2. Sinkronkan file overview Generative AI dengan scaffold atau aktifkan route final.
3. Aktivasi course scaffold berikutnya hanya jika konten final sudah siap; kalau belum, tetap gunakan query activity scaffold.
4. Setelah setiap perubahan routing, jalankan `node scripts/check-participant-routes.mjs`.

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
