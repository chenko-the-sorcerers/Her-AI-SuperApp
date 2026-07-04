# Developer Handover: Participant Dashboard & Math for AI

## 1. Ringkasan

Dokumen ini dibuat sebagai handover untuk developer berikutnya yang akan melanjutkan pengembangan area **Participant Dashboard** dan course **Math for AI** pada project **HerAI Fellowship SuperApp**.

Pengerjaan sebelumnya berfokus pada:

1. Pembuatan tampilan frontend awal participant dashboard.
2. Pembuatan halaman participant untuk Home, Modul, Task, Project, dan Participant Event.
3. Pemolesan styling agar konten halaman dapat discroll dengan lebih nyaman.
4. Penyelesaian course Math for AI sebagai course mandiri di area Modul / AI Lab Course Catalog.

---

## 2. Area yang Pernah Dikerjakan

### 2.1 Participant Dashboard Frontend

Halaman frontend awal yang dibuat:

- Home / Participant Dashboard
- Modul
- Task
- Project
- Participant Event

Pengerjaan di area ini berfokus pada tampilan awal frontend, layout, struktur halaman, dan kenyamanan navigasi participant.

### 2.2 Styling Scrollable Content

Setelah fitur dasar berjalan, dilakukan perbaikan styling agar konten panjang dapat discroll dengan lebih nyaman.

Fokus perbaikan:

- Konten tidak menabrak sidebar.
- Konten tidak menabrak topbar.
- Halaman dengan isi panjang tetap nyaman dibaca.
- Layout participant dashboard tetap stabil.
- Scroll area dibuat lebih sesuai dengan kebutuhan halaman.

### 2.3 Math for AI

Math for AI diselesaikan sebagai course mandiri untuk peserta fellowship non-IT.

Course ini memiliki:

- Overview
- Materi / Lesson
- Practice
- Quiz
- Discussion
- Progress tracking
- localStorage state

---

## 3. Route yang Berkaitan

### 3.1 Route Participant Dashboard

| Fitur | Route | Status |
|---|---|---|
| Participant Dashboard / Home | `#/participant-dashboard` | Tampilan awal dibuat |
| Participant Modules | `#/participant-modules` | Tampilan awal dibuat dan menjadi pintu masuk course |
| Participant Task | `#/participant-task` atau `#/participant-tasks` | Tampilan awal dibuat, perlu verifikasi nama route final di `js/router.js` |
| Participant Project | `#/participant-project` atau `#/participant-projects` | Tampilan awal dibuat, perlu verifikasi nama route final di `js/router.js` |
| Participant Event | `#/participant-event` atau `#/participant-events` | Tampilan awal dibuat, perlu verifikasi nama route final di `js/router.js` |

> Catatan untuk developer berikutnya: beberapa route participant seperti Task, Project, dan Event perlu dicek langsung di `js/router.js`, karena nama route bisa memakai bentuk singular atau plural tergantung implementasi final.

### 3.2 Route Math for AI

| Fitur | Route | Keterangan |
|---|---|---|
| Math for AI Overview | `#/participant-ai-lab-math` | Halaman utama course |
| Lesson 1 | `#/participant-ai-lab-math-intro` | Kenapa AI Butuh Matematika? |
| Lesson 2 | `#/participant-ai-lab-math-linear-algebra` | Linear Algebra |
| Lesson 3 | `#/participant-ai-lab-math-statistics` | Statistics for AI |
| Lesson 4 | `#/participant-ai-lab-math-probability` | Probability for AI |
| Lesson 5 | `#/participant-ai-lab-math-calculus` | Calculus for AI |
| Lesson 6 | `#/participant-ai-lab-math-optimization` | Optimization for AI |
| Lesson 7 | `#/participant-ai-lab-math-case-study` | Case Study HerAI |
| Practice | `#/participant-ai-lab-math-practice` | Latihan reflektif |
| Quiz | `#/participant-ai-lab-math-quiz` | Kuis pemahaman |
| Discussion | `#/participant-ai-lab-math-discussion` | Diskusi lokal |

---

## 4. File / Area yang Perlu Dicek Developer Selanjutnya

Berikut area file yang kemungkinan berkaitan dengan update participant dashboard dan Math for AI.

### 4.1 Routing

Cek file:

```text
js/router.js
```

Hal yang perlu diperhatikan:

- Route participant dashboard.
- Route participant modules.
- Route Math for AI.
- Route practice, quiz, dan discussion Math for AI.
- Pastikan initializer Math for AI dipanggil sebelum catch-all route umum seperti `participant-ai-lab-*` atau `participant-ai-*`.

### 4.2 Participant Dashboard Pages

Cek folder:

```text
pages/frontend/fellow-dashboard/
```

Hal yang perlu dicek:

- Halaman dashboard participant.
- Halaman modules.
- Halaman task.
- Halaman project.
- Halaman participant event.
- Halaman atau folder course Math for AI.

### 4.3 Participant Dashboard Scripts

Cek folder:

```text
js/frontend/fellow-dashboard/
```

Hal yang perlu dicek:

- Logic sidebar participant.
- Logic module interactions.
- Logic Math for AI.
- localStorage handling.
- Initializer page.
- Practice, quiz, dan discussion behavior.

### 4.4 Styling

Cek file:

```text
css/frontend/fellow-dashboard/modules.css
```

atau file CSS participant lain yang relevan.

Hal yang perlu dijaga:

- Jangan merusak styling global dashboard.
- Jika menambah style baru, scope ke class course/halaman terkait.
- Pastikan konten tetap scrollable.
- Pastikan layout tidak menabrak sidebar/topbar.
- Pastikan tampilan Math for AI tetap konsisten.

### 4.5 SPA Shell

Cek file:

```text
index.html
```

Hal yang perlu diperhatikan:

- Script Math for AI sudah didaftarkan jika memakai file JS terpisah.
- Cache buster diperbarui jika file JS/CSS berubah.
- Jangan menghapus script yang dipakai course lain.

---

## 5. State localStorage Math for AI

Math for AI menggunakan localStorage untuk menyimpan state belajar peserta.

Key yang perlu dicek:

```text
heraiAiMathProgress
heraiAiMathCurrentLesson
heraiAiMathPractice
heraiAiMathQuizDone
heraiAiMathQuizScore
heraiAiMathQuizAnswers
heraiAiMathDiscussion
```

Fungsi masing-masing key:

| Key | Fungsi |
|---|---|
| `heraiAiMathProgress` | Menyimpan lesson yang sudah selesai dan lesson terakhir |
| `heraiAiMathCurrentLesson` | Menyimpan lesson aktif/terakhir |
| `heraiAiMathPractice` | Menyimpan jawaban practice |
| `heraiAiMathQuizDone` | Menyimpan status quiz sudah dikerjakan |
| `heraiAiMathQuizScore` | Menyimpan skor quiz |
| `heraiAiMathQuizAnswers` | Menyimpan jawaban quiz |
| `heraiAiMathDiscussion` | Menyimpan thread discussion |

Contoh struktur progress:

```js
{
  completedLessons: ["intro", "linear-algebra"],
  currentLesson: "statistics",
  lastAccessedAt: "2026-07-04T00:00:00.000Z"
}
```

---

## 6. Flow Math for AI

Flow course:

```text
Overview
→ Materi
→ Practice
→ Quiz
→ Discussion
```

### 6.1 Overview

Halaman overview berisi:

- Hero course.
- Deskripsi course.
- Learning outcomes.
- Daftar lesson.
- Progress panel.
- CTA ke lesson atau next step.

### 6.2 Materi / Lesson

Setiap lesson berisi:

- Judul.
- Tujuan pembelajaran.
- Cerita pembuka.
- Konsep inti.
- Analogi.
- Contoh AI.
- Contoh HerAI.
- Rangkuman.
- Advanced insight.
- Tombol Tandai Selesai.
- Navigasi previous/next.

### 6.3 Practice

Practice berisi latihan reflektif.

Fitur yang harus tetap ada:

- Textarea.
- Simpan jawaban.
- Reset jawaban.
- Jawaban tetap muncul setelah refresh.

### 6.4 Quiz

Quiz berisi soal pilihan ganda.

Fitur yang harus tetap ada:

- Submit quiz.
- Skor otomatis.
- Passing grade.
- Pembahasan.
- Status lulus/belum lulus.
- Quiz tidak perlu dikerjakan ulang setelah submit.

### 6.5 Discussion

Discussion berisi prompt diskusi.

Fitur yang harus tetap ada:

- Tambah post.
- Reply sederhana.
- Simpan ke localStorage.
- Thread tetap muncul setelah refresh.

---

## 7. Materi Math for AI

Daftar lesson:

1. Kenapa AI Butuh Matematika?
2. Linear Algebra: Data sebagai Vektor dan Matriks
3. Statistics for AI: Membaca Pola dari Data
4. Probability: AI Tidak Selalu Pasti
5. Calculus: Cara AI Membaca Arah Perubahan
6. Optimization: Cara AI Mencari Hasil Terbaik
7. Case Study: Math for AI di HerAI SuperApp

Core materi:

- Linear Algebra
- Statistics
- Probability
- Calculus
- Optimization
- Case Study HerAI

Target peserta:

- Fellowship non-IT.
- Pemula yang belum kuat matematika teknis.
- Peserta yang butuh memahami cara kerja AI secara konsep.

---

## 8. Cara Menjalankan dan Test Manual

Jalankan server lokal:

```bash
node server.js
```

Buka:

```text
http://127.0.0.1:3000/
```

### 8.1 Test Participant Dashboard

Cek route berikut:

```text
http://127.0.0.1:3000/#/participant-dashboard
http://127.0.0.1:3000/#/participant-modules
```

Lalu cek route Task, Project, dan Event sesuai route yang terdaftar di `js/router.js`.

### 8.2 Test Math for AI

Cek route:

```text
http://127.0.0.1:3000/#/participant-ai-lab-math
http://127.0.0.1:3000/#/participant-ai-lab-math-intro
http://127.0.0.1:3000/#/participant-ai-lab-math-linear-algebra
http://127.0.0.1:3000/#/participant-ai-lab-math-statistics
http://127.0.0.1:3000/#/participant-ai-lab-math-probability
http://127.0.0.1:3000/#/participant-ai-lab-math-calculus
http://127.0.0.1:3000/#/participant-ai-lab-math-optimization
http://127.0.0.1:3000/#/participant-ai-lab-math-case-study
http://127.0.0.1:3000/#/participant-ai-lab-math-practice
http://127.0.0.1:3000/#/participant-ai-lab-math-quiz
http://127.0.0.1:3000/#/participant-ai-lab-math-discussion
```

Checklist:

- Sidebar tetap aktif di menu Modul.
- Math for AI terbuka dari Course Catalog.
- Overview muncul dengan rapi.
- Semua lesson bisa dibuka.
- Lesson bisa ditandai selesai.
- Progress bertambah.
- Progress tetap tersimpan setelah refresh.
- Practice bisa disimpan dan reset.
- Quiz bisa submit dan menampilkan skor.
- Discussion bisa tambah post/reply.
- Tidak ada error console.

---

## 9. Hal yang Perlu Dijaga

Developer berikutnya perlu menjaga beberapa hal berikut:

1. Jangan mengubah Math for AI menjadi submodul AI Fundamentals.
2. Math for AI harus tetap menjadi course mandiri di AI Lab Course Catalog.
3. Jangan membuat route bentrok dengan course AI Lab lain.
4. Jangan mengubah localStorage key course lain.
5. Jangan menambahkan styling global yang merusak halaman lain.
6. Jika mengubah `index.html`, update cache buster sesuai pola project.
7. Jika menambah route baru, update tiga bagian di `js/router.js`:
   - object `routes`
   - daftar `participantDashboardPages`
   - initializer di `handleRouting()`

---

## 10. Known Limitations

Beberapa hal yang masih menjadi batasan:

- Progress Math for AI masih berbasis localStorage.
- Practice belum tersimpan ke backend.
- Discussion masih lokal dan belum terhubung ke database.
- Quiz result belum terkirim ke admin dashboard.
- Analytics progress peserta belum tersedia untuk Math for AI.
- Jika peserta pindah device/browser, progress localStorage tidak ikut terbawa.

---

## 11. Saran Pengembangan Selanjutnya

Saran untuk developer berikutnya:

1. Integrasikan progress Math for AI ke backend/GAS.
2. Simpan hasil quiz ke database agar admin bisa memantau.
3. Simpan practice dan discussion ke backend.
4. Tambahkan analytics untuk melihat lesson tersulit.
5. Buat badge atau sertifikat setelah peserta menyelesaikan Math for AI.
6. Samakan UI course lain seperti Machine Learning dengan pola Math for AI.
7. Tambahkan admin content management untuk materi course.

---

## 12. Catatan untuk Developer Selanjutnya

Jika ingin membuat course baru, disarankan meniru pola Math for AI karena sudah memiliki flow yang lengkap:

```text
Overview
→ Lesson
→ Practice
→ Quiz
→ Discussion
→ Progress
→ localStorage state
```

Pola ini lebih siap dipakai untuk course lain dibanding halaman artikel biasa, karena sudah mendukung tracking progress, interaksi peserta, dan evaluasi pemahaman.

---

## 13. Quick Summary

```text
Area utama: Participant Dashboard
Fitur utama yang selesai: Math for AI
Jenis pengerjaan: Frontend, styling, learning flow, localStorage state
Route utama: #/participant-modules dan #/participant-ai-lab-math
Status backend: belum menjadi scope utama
Saran berikutnya: integrasi progress/quiz/discussion ke backend
```
