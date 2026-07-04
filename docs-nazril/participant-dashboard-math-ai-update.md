# Participant Dashboard & Math for AI Feature Update Report

## 1. Ringkasan Kontribusi

Dokumentasi ini mencatat update yang dikerjakan pada area **Participant Dashboard** di project **HerAI Fellowship SuperApp**.

Scope utama pengerjaan berfokus pada:

1. Pembuatan tampilan frontend awal untuk beberapa halaman participant.
2. Pemolesan styling agar konten halaman lebih nyaman digunakan dan dapat discroll.
3. Penyelesaian fitur course **Math for AI** sebagai course mandiri di area Modul / AI Lab Course Catalog.

Update ini berada pada sisi **frontend participant dashboard** dan tidak mencakup perubahan besar pada backend, admin dashboard, authentication, meeting system, messaging, atau course lain selain Math for AI.

---

## 2. Scope Pengerjaan

### 2.1 Area yang Dikerjakan

Area yang dikerjakan berada pada dashboard participant, khususnya halaman berikut:

- Participant Home / Dashboard
- Participant Modules
- Participant Task
- Participant Project
- Participant Event
- Math for AI Course

### 2.2 Area yang Tidak Termasuk Scope Utama

Bagian berikut tidak termasuk scope utama pengerjaan:

- Backend utama
- Google Apps Script logic
- Admin dashboard
- Authentication system
- Meeting system
- Messaging system
- AI screening system
- Course AI Lab lain selain Math for AI

Catatan: jika ada eksperimen atau prompt untuk course Machine Learning, bagian tersebut tidak diklaim sebagai fitur final kecuali sudah benar-benar selesai, stabil, dan masuk ke hasil implementasi final.

---

## 3. Update Tahap Pertama: Pembuatan Frontend Participant Dashboard

### 3.1 Tujuan

Tahap pertama berfokus pada pembuatan tampilan awal participant dashboard agar peserta memiliki halaman utama untuk mengakses fitur-fitur fellowship.

Dashboard participant dibuat sebagai area utama bagi peserta untuk melihat informasi, modul pembelajaran, tugas, project, dan event.

### 3.2 Halaman yang Dibuat

#### 1. Halaman Home / Participant Dashboard

Halaman Home dibuat sebagai halaman utama peserta setelah masuk ke dashboard.

Fungsi halaman:

- Menampilkan ringkasan informasi peserta.
- Menjadi landing page utama participant.
- Memberikan akses cepat ke fitur-fitur fellowship.
- Menampilkan struktur awal dashboard participant.

#### 2. Halaman Modul

Halaman Modul dibuat sebagai tempat peserta melihat daftar materi atau course pembelajaran.

Fungsi halaman:

- Menampilkan katalog modul.
- Menyediakan akses ke course pembelajaran.
- Menjadi pintu masuk ke materi AI Lab dan course foundation.

#### 3. Halaman Task

Halaman Task dibuat untuk menampilkan area tugas peserta.

Fungsi halaman:

- Menampilkan daftar tugas peserta.
- Menjadi tempat awal untuk melihat assignment atau aktivitas yang harus dikerjakan.
- Menyediakan tampilan frontend awal untuk task management participant.

#### 4. Halaman Project

Halaman Project dibuat untuk menampilkan area project peserta.

Fungsi halaman:

- Menampilkan informasi project.
- Menjadi halaman awal untuk kebutuhan project participant.
- Mendukung flow fellowship yang membutuhkan pengerjaan project.

#### 5. Halaman Participant Event

Halaman Participant Event dibuat untuk menampilkan event atau agenda yang berkaitan dengan peserta.

Fungsi halaman:

- Menampilkan daftar event participant.
- Menyediakan tampilan awal untuk agenda atau kegiatan fellowship.
- Membantu peserta melihat informasi event dari dashboard.

---

## 4. Update Tahap Kedua: Styling dan Scrollable Content

### 4.1 Latar Belakang

Setelah beberapa fitur participant dashboard berjalan, dilakukan pemolesan tampilan agar halaman lebih nyaman digunakan.

Masalah utama yang diperbaiki adalah tampilan konten yang belum sepenuhnya nyaman saat halaman memiliki isi panjang. Beberapa area membutuhkan pengaturan scroll agar konten tidak menabrak layout utama, sidebar, atau topbar.

### 4.2 Perbaikan yang Dilakukan

Update styling dilakukan untuk membuat konten menjadi lebih rapi dan scrollable.

Perbaikan meliputi:

- Menyesuaikan area konten agar bisa discroll.
- Memastikan layout participant dashboard tetap stabil.
- Mengurangi risiko konten melebar atau menabrak elemen lain.
- Memperbaiki kenyamanan membaca pada halaman dengan konten panjang.
- Menjaga sidebar dan struktur dashboard tetap konsisten.

### 4.3 Tujuan Perbaikan

Tujuan dari update ini adalah meningkatkan user experience peserta saat membuka halaman dashboard.

Dengan konten yang scrollable, peserta dapat membaca materi, daftar modul, tugas, project, dan event tanpa tampilan menjadi berantakan.

---

## 5. Update Tahap Ketiga: Penyelesaian Fitur Math for AI

### 5.1 Latar Belakang

Course **Math for AI** awalnya berada di katalog Modul sebagai course yang perlu diaktifkan dan dikembangkan. Course ini dibuat untuk membantu peserta fellowship memahami matematika dasar yang digunakan dalam AI.

Fitur ini disesuaikan untuk peserta **non-IT**, sehingga materi tidak hanya berisi teori matematika, tetapi dijelaskan dengan analogi, contoh sederhana, dan studi kasus penerapan di HerAI.

### 5.2 Tujuan Fitur Math for AI

Tujuan utama Math for AI adalah membantu peserta memahami bahwa AI bekerja dengan data numerik, proses prediksi, perhitungan kesalahan, probabilitas, statistik, dan optimasi.

Alur pemahaman yang digunakan:

```text
Data dunia nyata
→ diubah menjadi angka
→ diproses oleh model
→ menghasilkan prediksi
→ dihitung kesalahannya
→ diperbaiki melalui optimasi
→ menghasilkan keputusan yang lebih baik
```

### 5.3 Struktur Materi Math for AI

Course Math for AI terdiri dari beberapa bagian utama:

1. Kenapa AI Butuh Matematika?
2. Linear Algebra untuk AI
3. Statistics untuk AI
4. Probability untuk AI
5. Calculus untuk AI
6. Optimization untuk AI
7. Case Study Math for AI di HerAI

### 5.4 Core Materi yang Dicakup

#### Linear Algebra

Materi ini menjelaskan bagaimana AI merepresentasikan data dalam bentuk angka.

Konsep utama:

- Vektor
- Matriks
- Dot product
- Jarak antar data
- Representasi data user dan materi

#### Statistics

Materi ini menjelaskan cara membaca pola data sebelum digunakan oleh AI.

Konsep utama:

- Mean
- Median
- Standar deviasi
- Korelasi
- Outlier
- Distribusi data

#### Probability

Materi ini menjelaskan bagaimana AI bekerja dengan ketidakpastian.

Konsep utama:

- Probabilitas dasar
- Conditional probability
- Bayes
- Confidence score
- Entropy dan cross entropy secara konsep

#### Calculus

Materi ini menjelaskan bagaimana AI membaca arah perubahan.

Konsep utama:

- Fungsi
- Loss function
- Turunan
- Gradient
- Chain rule
- Backpropagation secara konsep

#### Optimization

Materi ini menjelaskan bagaimana AI mencari hasil terbaik.

Konsep utama:

- Minimisasi error
- Gradient descent
- Learning rate
- Optimizer
- Regularisasi
- Overfitting dan underfitting

### 5.5 Flow Fitur Math for AI

Flow fitur Math for AI dibuat mengikuti pola course learning di participant dashboard.

Flow utama:

```text
Overview
→ Materi
→ Practice
→ Quiz
→ Discussion
```

#### Overview

Halaman overview menampilkan pengantar course, tujuan belajar, daftar lesson, dan progress peserta.

#### Materi

Bagian materi berisi lesson yang dapat dibuka peserta satu per satu.

Setiap lesson memiliki:

- Judul materi
- Tujuan pembelajaran
- Penjelasan konsep
- Analogi sederhana
- Contoh penerapan AI
- Contoh penerapan di HerAI
- Rangkuman
- Advanced insight

#### Practice

Bagian practice berisi latihan reflektif agar peserta dapat menjelaskan ulang konsep dengan bahasa sendiri.

Contoh latihan:

- Mengubah profil peserta menjadi vektor.
- Membaca pola data peserta.
- Menjelaskan confidence score.
- Menjelaskan gradient descent dengan analogi.
- Menghubungkan Math for AI ke fitur HerAI.

#### Quiz

Bagian quiz digunakan untuk menguji pemahaman peserta.

Fitur quiz:

- Soal pilihan ganda.
- Skor dihitung otomatis.
- Passing grade.
- Status lulus atau belum lulus.
- Pembahasan jawaban.
- State quiz tersimpan.

#### Discussion

Bagian discussion digunakan sebagai ruang diskusi lokal peserta.

Fitur discussion:

- Prompt diskusi.
- Post diskusi.
- Reply sederhana.
- Data tersimpan secara lokal.

### 5.6 State dan Progress

Fitur Math for AI menggunakan penyimpanan lokal untuk menjaga progress peserta.

State yang disimpan:

- Lesson yang sudah selesai.
- Lesson terakhir yang dibuka.
- Jawaban practice.
- Status quiz.
- Skor quiz.
- Jawaban quiz.
- Thread discussion.

Tujuan penyimpanan state:

- Progress tidak hilang setelah refresh.
- Peserta dapat melanjutkan materi terakhir.
- Quiz tidak perlu dikerjakan ulang setelah submit.
- Practice dan discussion tetap tersimpan.

---

## 6. Route yang Diupdate / Digunakan

> Catatan: route di bawah perlu tetap diverifikasi terhadap `js/router.js` karena nama route dapat berbeda jika ada penyesuaian setelah update. Route Math for AI adalah route utama yang diselesaikan pada update ini.

### 6.1 Route Participant Dashboard

| Halaman | Route |
|---|---|
| Participant Dashboard / Home | `#/participant-dashboard` |
| Participant Modules | `#/participant-modules` |
| Participant Task | `#/participant-task` atau `#/participant-tasks` |
| Participant Project | `#/participant-project` atau `#/participant-projects` |
| Participant Event | `#/participant-event` atau `#/participant-events` |

### 6.2 Route Math for AI

| Halaman | Route |
|---|---|
| Math for AI Overview | `#/participant-ai-lab-math` |
| Lesson 1: Kenapa AI Butuh Matematika? | `#/participant-ai-lab-math-intro` |
| Lesson 2: Linear Algebra | `#/participant-ai-lab-math-linear-algebra` |
| Lesson 3: Statistics for AI | `#/participant-ai-lab-math-statistics` |
| Lesson 4: Probability for AI | `#/participant-ai-lab-math-probability` |
| Lesson 5: Calculus for AI | `#/participant-ai-lab-math-calculus` |
| Lesson 6: Optimization for AI | `#/participant-ai-lab-math-optimization` |
| Lesson 7: Case Study HerAI | `#/participant-ai-lab-math-case-study` |
| Math for AI Practice | `#/participant-ai-lab-math-practice` |
| Math for AI Quiz | `#/participant-ai-lab-math-quiz` |
| Math for AI Discussion | `#/participant-ai-lab-math-discussion` |

---

## 7. Hasil Akhir Update

Setelah update dilakukan, participant dashboard memiliki tampilan awal untuk beberapa fitur utama dan course Math for AI sudah dapat digunakan sebagai materi pembelajaran.

Hasil akhir yang dicapai:

- Participant dashboard memiliki halaman Home, Modul, Task, Project, dan Event.
- Halaman participant sudah memiliki struktur frontend awal.
- Konten halaman dibuat lebih nyaman dengan perbaikan scrollable layout.
- Course Math for AI selesai dibuat.
- Math for AI memiliki overview, materi, practice, quiz, discussion, dan progress.
- Materi Math for AI disesuaikan untuk peserta fellowship non-IT.

---

## 8. Catatan Teknis

### 8.1 Pendekatan Frontend

Pengerjaan dilakukan pada sisi frontend dengan menyesuaikan struktur halaman participant dashboard yang sudah ada.

Fokus utama:

- Tampilan halaman.
- Layout dashboard.
- Styling komponen.
- Navigasi participant.
- Course learning flow.
- Local state menggunakan localStorage.

### 8.2 Pendekatan Konten

Konten Math for AI dibuat dengan pendekatan:

- Beginner friendly.
- Ramah untuk peserta non-IT.
- Menggunakan analogi sederhana.
- Tetap menjaga core materi AI.
- Dihubungkan dengan studi kasus HerAI.

### 8.3 Pendekatan UI

UI Math for AI dibuat agar terasa seperti course learning, bukan sekadar halaman artikel.

Komponen UI yang digunakan:

- Hero section.
- Tab navigation.
- Lesson cards.
- Progress panel.
- Right panel.
- Practice cards.
- Quiz cards.
- Discussion cards.

---

## 9. Batasan dan Saran Lanjutan

### 9.1 Batasan

Beberapa hal yang masih bisa dikembangkan lebih lanjut:

- Progress masih dapat disimpan ke backend agar tidak hanya bergantung pada localStorage.
- Practice dan discussion dapat diintegrasikan ke database.
- Quiz result dapat dikirim ke dashboard admin.
- Course lain dapat dibuat mengikuti pola Math for AI.
- Styling course lain dapat disamakan agar konsisten.

### 9.2 Saran Lanjutan

Saran pengembangan berikutnya:

- Integrasi progress participant ke backend/GAS.
- Menambahkan analytics untuk melihat progress peserta.
- Membuat admin dapat mengelola konten modul.
- Menyamakan UI course Machine Learning dengan Math for AI.
- Menambahkan sertifikat atau badge setelah course selesai.

---

## 10. Ringkasan Changelog

### Participant Dashboard

- Membuat tampilan awal halaman Home.
- Membuat tampilan awal halaman Modul.
- Membuat tampilan awal halaman Task.
- Membuat tampilan awal halaman Project.
- Membuat tampilan awal halaman Participant Event.

### Styling

- Memoles layout participant dashboard.
- Menyesuaikan konten agar scrollable.
- Memperbaiki kenyamanan tampilan pada halaman dengan konten panjang.

### Math for AI

- Mengaktifkan course Math for AI.
- Membuat overview course.
- Membuat lesson Math for AI.
- Membuat practice.
- Membuat quiz.
- Membuat discussion.
- Menambahkan progress learning.
- Menyimpan state dengan localStorage.
- Menyesuaikan materi untuk fellowship non-IT.

---

## 11. Versi Singkat untuk Commit / Pull Request

```text
Implemented initial participant dashboard frontend pages including Home, Modules, Task, Project, and Participant Event. Improved dashboard layout styling to support scrollable content and better user experience. Completed Math for AI course as a standalone learning module with overview, lessons, practice, quiz, discussion, progress tracking, and localStorage-based state management. The Math for AI content was designed for non-IT fellowship participants while preserving core AI math topics such as linear algebra, statistics, probability, calculus, and optimization.
```
