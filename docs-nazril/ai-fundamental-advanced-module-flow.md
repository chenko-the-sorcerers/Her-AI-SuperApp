# Dokumentasi Alur Fitur Modul AI Fundamentals & Advanced

Dokumen ini merangkum alur fitur modul `AI Fundamentals & Advanced` di dashboard participant berdasarkan implementasi yang sudah dibuat oleh Faiz dan pola yang tercatat di `docs-faiz/MODUL_02_PYTHON_CHECKPOINT.md`.

## Scope

Fitur ini berada di area participant dashboard, khususnya jalur modul belajar:

- Course catalog: `#/participant-modules`
- Course hub AI Fundamentals & Advanced: `#/participant-ai-fundamentals`
- Materi modul AI Fundamental: `pages/frontend/fellow-dashboard/ai-fundamental/`

Folder `Website-Portofolio-Chen/` hanya dipakai sebagai referensi/source materi AI Lab dan tidak boleh diedit untuk flow ini.

## Ringkasan User Flow

1. Peserta membuka `#/participant-modules`.
2. Peserta memilih card `AI Fundamentals & Advanced`.
3. Router memuat `pages/frontend/fellow-dashboard/ai-fundamentals.html`.
4. Halaman hub menampilkan 6 sub modul:
   - Pengantar AI
   - Pemrograman Python untuk AI
   - Konsep AI Modern
   - Reasoning
   - Evaluation
   - Evolution of AI
5. Saat ini sub modul yang aktif adalah:
   - Modul 01: Pengantar AI
   - Modul 02: Pemrograman Python untuk AI
6. Setiap sub modul mengikuti pola belajar:
   - Materi
   - Latihan
   - Kuis
   - Diskusi
7. Kuis menyimpan status ke `localStorage` untuk membuka langkah berikutnya.

## Struktur Halaman

```text
pages/frontend/fellow-dashboard/
  ai-fundamentals.html
    -> Course hub AI Fundamentals & Advanced

  ai-fundamental/
    README.md

    01-pengantar-ai/
      materi.html
      latihan.html
      kuis.html
      diskusi.html
      lesson.html

    02-python-untuk-ai/
      materi.html
      latihan.html
      kuis.html
      diskusi.html
      chapters/
        01-memulai-python.html
        02-materi.html
        03-materi.html
        04-materi.html
        05-materi.html
```

## File Pendukung

| File | Peran |
|---|---|
| `js/router.js` | Mendaftarkan route, halaman participant, dan initializer setiap route. |
| `js/frontend/fellow-dashboard/settings.js` | Initializer dashboard participant, modul interactions, generated lesson modul 01, latihan, kuis, diskusi Pengantar AI. |
| `js/frontend/fellow-dashboard/ai-python-basic.js` | Logic modul 02 Python: Pyodide playground, materi chapter loader, latihan, kuis, diskusi. |
| `css/frontend/fellow-dashboard/modules.css` | Styling modul, lesson, quiz, discussion, dan komponen Pyodide. |
| `index.html` | Memuat CSS modul, `settings.js`, `ai-python-basic.js`, dan script Pyodide CDN. |

## Route Map

### Hub

| Route | File | Keterangan |
|---|---|---|
| `#/participant-modules` | `modules.html` | Course catalog participant. |
| `#/participant-ai-fundamentals` | `ai-fundamentals.html` | Hub course AI Fundamentals & Advanced. |

### Modul 01: Pengantar AI

| Route | File | Initializer |
|---|---|---|
| `#/participant-ai-intro` | `01-pengantar-ai/materi.html` | `initFellowDashboardPage("modules")` |
| `#/participant-ai-intro-practice` | `01-pengantar-ai/latihan.html` | `initFellowDashboardPage("modules")`, lalu `initPracticeNotes()` dari `settings.js` |
| `#/participant-ai-intro-quiz` | `01-pengantar-ai/kuis.html` | `initFellowDashboardPage("modules")`, lalu `initLessonControls()` dari `settings.js` |
| `#/participant-ai-intro-discussion` | `01-pengantar-ai/diskusi.html` | `initFellowDashboardPage("modules")`, lalu `initLessonDiscussion()` dari `settings.js` |
| `#/participant-ai-history` | `01-pengantar-ai/lesson.html` | `initGeneratedLessonPage()` dari `settings.js` |
| `#/participant-ai-types` | `01-pengantar-ai/lesson.html` | `initGeneratedLessonPage()` dari `settings.js` |
| `#/participant-ai-components` | `01-pengantar-ai/lesson.html` | `initGeneratedLessonPage()` dari `settings.js` |
| `#/participant-ai-applications` | `01-pengantar-ai/lesson.html` | `initGeneratedLessonPage()` dari `settings.js` |
| `#/participant-ai-summary` | `01-pengantar-ai/lesson.html` | `initGeneratedLessonPage()` dari `settings.js` |

Catatan: `lesson.html` adalah template bersama. Konten aktualnya diisi dari objek `generatedLessonContent` di `settings.js` berdasarkan route aktif.

### Modul 02: Pemrograman Python untuk AI

| Route | File | Initializer |
|---|---|---|
| `#/participant-ai-python` | `02-python-untuk-ai/materi.html` | `initAiPythonMateri()` |
| `#/participant-ai-python-practice` | `02-python-untuk-ai/latihan.html` | `initAiPythonBasic()` |
| `#/participant-ai-python-quiz` | `02-python-untuk-ai/kuis.html` | `initAiPythonQuiz()` |
| `#/participant-ai-python-discussion` | `02-python-untuk-ai/diskusi.html` | `initAiPythonDiscussion()` |

Materi Python memuat chapter secara dinamis dari folder `chapters/` memakai `fetch()`. Chapter yang sedang dibuka disimpan di `localStorage`.

## Alur Modul 01: Pengantar AI

1. Peserta klik `Pengantar AI` di hub.
2. Route `#/participant-ai-intro` menampilkan materi pertama.
3. Peserta lanjut ke `#/participant-ai-intro-practice`.
4. Jawaban latihan disimpan lokal melalui key `heraiAiIntroPracticeAnswers`.
5. Peserta lanjut ke `#/participant-ai-intro-quiz`.
6. Setelah submit kuis:
   - `heraiAiIntroQuizDone` diset ke `"true"`.
   - `heraiAiIntroQuizScore` menyimpan skor.
   - Elemen dengan `data-locked-after-quiz` ditampilkan.
   - Link `Materi Selanjutnya` dibuka.
7. Peserta dapat membuka materi lanjutan:
   - Sejarah Singkat AI
   - Jenis-Jenis AI
   - Komponen Utama AI
   - Penerapan AI di Berbagai Bidang
   - Ringkasan
8. Peserta dapat membuka diskusi `#/participant-ai-intro-discussion`.

## Alur Modul 02: Pemrograman Python untuk AI

1. Peserta klik `Pemrograman Python untuk AI` di hub.
2. Route `#/participant-ai-python` membuka shell materi Python.
3. `initAiPythonMateri()` membaca `heraiAiPythonCurrentChapter`, lalu memuat chapter dari `chapters/`.
4. Tombol next/prev chapter memperbarui `heraiAiPythonCurrentChapter`.
5. Peserta lanjut ke `#/participant-ai-python-practice`.
6. `initAiPythonBasic()`:
   - Memuat jawaban latihan dari `heraiAiPythonPractice`.
   - Menginisialisasi Pyodide dari CDN.
   - Mengaktifkan tombol `Run Code` setelah runtime siap.
   - Menyediakan reset code dan output terminal.
7. Peserta lanjut ke `#/participant-ai-python-quiz`.
8. Setelah submit kuis:
   - `heraiAiPythonQuizDone` diset ke `"true"`.
   - `heraiAiPythonQuizScore` menyimpan skor.
   - Link diskusi dibuka.
9. Peserta lanjut ke `#/participant-ai-python-discussion`.
10. Diskusi menyimpan thread lokal di `heraiAiPythonDiscussion`.

## State dan localStorage

| Key | Modul | Isi |
|---|---|---|
| `heraiAiIntroPracticeAnswers` | Pengantar AI | Jawaban textarea latihan reflektif. |
| `heraiAiIntroQuizDone` | Pengantar AI | Flag `"true"` setelah kuis dikirim. |
| `heraiAiIntroQuizScore` | Pengantar AI | Skor kuis Pengantar AI. |
| `heraiAiIntroDiscussionThread` | Pengantar AI | Thread diskusi dan reply peserta. |
| `heraiAiPythonCurrentChapter` | Python untuk AI | Nomor chapter materi Python yang sedang dibuka. |
| `heraiAiPythonPractice` | Python untuk AI | Jawaban latihan Python. |
| `heraiAiPythonQuizDone` | Python untuk AI | Flag `"true"` setelah kuis Python dikirim. |
| `heraiAiPythonQuizScore` | Python untuk AI | Skor kuis Python. |
| `heraiAiPythonDiscussion` | Python untuk AI | Thread diskusi Python. |

## Pola Routing yang Wajib Diikuti

Sesuai pola Faiz, setiap route modul baru harus disentuh di 3 area utama `js/router.js`:

1. Tambahkan route ke object `routes`.
2. Tambahkan route ke daftar `participantDashboardPages`.
3. Tambahkan initializer di `handleRouting()`.

Jika route punya short alias, tambahkan juga di `routeAliases`, tetapi ini opsional dan tidak menggantikan 3 langkah utama.

Contoh pola modul:

```js
"/participant-ai-example": "/pages/frontend/fellow-dashboard/ai-fundamental/03-example/materi.html",
"/participant-ai-example-practice": "/pages/frontend/fellow-dashboard/ai-fundamental/03-example/latihan.html",
"/participant-ai-example-quiz": "/pages/frontend/fellow-dashboard/ai-fundamental/03-example/kuis.html",
"/participant-ai-example-discussion": "/pages/frontend/fellow-dashboard/ai-fundamental/03-example/diskusi.html",
```

Initializer harus diposisikan sebelum catch-all `path.startsWith("/participant-ai-lab-")` atau catch-all `path.startsWith("/participant-ai-")`.

## Checklist Menambah Sub Modul Berikutnya

Gunakan checklist ini untuk modul 03 sampai 06.

1. Buat folder baru di `pages/frontend/fellow-dashboard/ai-fundamental/`.
2. Buat minimal 4 file:
   - `materi.html`
   - `latihan.html`
   - `kuis.html`
   - `diskusi.html`
3. Ikuti layout modul yang sudah ada:
   - `fellow-dashboard fellow-modules-page lesson-detail-page`
   - sidebar participant
   - breadcrumb
   - lesson tabs
   - `lesson-layout`
   - `lesson-main-content`
   - `lesson-right-panel`
   - `lesson-nav-footer`
4. Tambahkan route di `js/router.js` pada 3 area wajib.
5. Jika butuh JS khusus, buat file terpisah di `js/frontend/fellow-dashboard/`.
6. Tambahkan script baru di `index.html` dan bump cache buster.
7. Jika menambah CSS, scope di `modules.css` atau class spesifik modul; jangan bocor ke fitur lain.
8. Update card di `ai-fundamentals.html` dari `<button>` menjadi `<a class="lesson-action" href="#/...">`.
9. Pastikan lock/unlock memakai key localStorage yang unik per modul.
10. Test route materi, latihan, kuis, diskusi, dan refresh halaman setelah state tersimpan.

## Aturan Implementasi dari Faiz

- Jangan edit `Website-Portofolio-Chen/`.
- Jangan edit fitur lain di luar participant module flow.
- Route modul harus jelas di `router.js`.
- Gunakan warna dan komponen existing HerAI, terutama `var(--fellow-pink)` dan class di `modules.css`.
- Gunakan FontAwesome icon, bukan emoji.
- Cache buster `index.html` wajib diperbarui jika file JS/CSS berubah.
- Commit per modul atau per scope perubahan kecil.

## Smoke Test Manual

Jalankan server:

```bash
node server.js
```

Buka route berikut:

```text
http://localhost:3000/#/participant-ai-fundamentals
http://localhost:3000/#/participant-ai-intro
http://localhost:3000/#/participant-ai-intro-practice
http://localhost:3000/#/participant-ai-intro-quiz
http://localhost:3000/#/participant-ai-intro-discussion
http://localhost:3000/#/participant-ai-python
http://localhost:3000/#/participant-ai-python-practice
http://localhost:3000/#/participant-ai-python-quiz
http://localhost:3000/#/participant-ai-python-discussion
```

Hal yang harus dicek:

- Sidebar participant tetap aktif di menu Modul.
- Tab Materi/Latihan/Kuis/Diskusi mengarah ke route yang benar.
- Latihan bisa save, edit, dan delete.
- Kuis hanya bisa dikirim sekali dan menyimpan skor.
- Konten terkunci muncul setelah kuis selesai.
- Diskusi bisa tambah post dan reply.
- Python playground menampilkan status runtime dan tombol Run aktif setelah Pyodide siap.
