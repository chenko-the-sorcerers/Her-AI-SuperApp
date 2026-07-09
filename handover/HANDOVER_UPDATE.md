# HerAI Development Handover & Checkpoint

**Tanggal:** 9 Juli 2026
**Branch:** `design`
**Status:** sudah commit lokal, belum push
**Commit fitur terakhir:** `5103d4e feat: migrate full chen machine learning content`
**Commit sebelumnya terkait ML:** `4d7d69a feat: activate machine learning module flow`

Dokumen ini menjadi checkpoint terbaru untuk developer atau AI agent berikutnya. Catatan lama 5 Juli 2026 yang menyebut Machine Learning masih under-development sudah tidak berlaku untuk modul ML.

---

## Update Sesi Ini - Machine Learning

Machine Learning di `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/` sudah dimigrasikan menjadi modul aktif 8 chapter berdasarkan referensi Website Portofolio Chen, dengan gaya bahasa Indonesia HerAI.

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
pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/chapters/
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
pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/latihan.html
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
pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/kuis.html
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
pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/diskusi.html
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
| `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/materi.html` | Sidebar/progress 8 chapter |
| `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/latihan.html` | 10 latihan |
| `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/kuis.html` | 24 soal |
| `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/diskusi.html` | 8 prompt |
| `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/chapters/chapter-1.html` sampai `chapter-8.html` | Konten materi lengkap |

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
