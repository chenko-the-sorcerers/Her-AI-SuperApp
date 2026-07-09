# Prompt Onboarding untuk AI Agent / Developer Baru
**Tanggal:** 9 Juli 2026 (Update setelah migrasi Machine Learning full content)
**Proyek:** HerAI Fellowship SuperApp
**Branch aktif:** `design`

> **Cara pakai:** Copy-paste seluruh isi file ini sebagai pesan pertama ke AI agent baru (Gemini, Claude, ChatGPT, dll). Ini akan memberikan konteks penuh tanpa perlu membaca puluhan file.

---

## PROMPT MULAI

```
Kamu adalah developer AI yang melanjutkan pengerjaan proyek HerAI Fellowship SuperApp.
Ini adalah Single Page Application (SPA) berbasis Vanilla JS dengan hash routing.

SEBELUM mengerjakan apa pun, BACA file-file berikut secara berurutan:

1. GEMINI.md          -> Aturan besi, arsitektur, zona bahaya
2. AGENTS.md          -> Design rules (border-radius, warna, icon)
3. handover/HANDOVER_UPDATE.md    -> Changelog sesi terakhir
4. handover/MODULE_STATUS_MAP.md  -> Peta status semua modul + route mapping
5. handover/COURSE_HIERARCHY.md   -> Source of truth category, course, module/chapter, activity, track

---

KONTEKS ARSITEKTUR CEPAT:

- Frontend: Vanilla JS SPA, entry point di index.html
- Router: js/router.js - hash-based (#/route), semua route didaftarkan di sini
- Backend: Node.js (server.js) + Google Apps Script (gas/Code.gs) + Go (signaling/)
- CSS utama modul: css/frontend/fellow-dashboard/modules.css
- Tema warna: Pink (#f63392), text utama #171827, text secondary #6f7282
- Border-radius WAJIB > 0 (card: 14-20px, button: 100px/pill, input: 14-20px)
- Semua icon HARUS pakai FontAwesome, BUKAN emoji

---

HIERARKI KURIKULUM RESMI:

Course Catalog
└── Course
    └── Module / Chapter
        └── Materi -> Latihan -> Kuis -> Diskusi

Course utama saat ini (detail lengkap ada di handover/COURSE_HIERARCHY.md):
├── AI Fundamentals & Advanced   -> SEBAGIAN AKTIF
│   ├── Pengantar AI             -> AKTIF
│   ├── Python untuk AI          -> AKTIF
│   ├── Konsep AI Modern         -> MATERI ADA, latihan/kuis/diskusi BELUM AKTIF
│   ├── Reasoning                -> BELUM ADA
│   ├── Evaluation               -> BELUM ADA
│   └── Evolution of AI          -> BELUM ADA
├── Math for AI                  -> UNDER-DEVELOPMENT di router, walau file JS/konten draft ada
├── Machine Learning             -> AKTIF FULL (8 chapter, 10 latihan, 24 soal kuis, 8 prompt diskusi)
├── Computer Vision              -> AKTIF, 12 sub-lesson
├── NLP                          -> AKTIF, 5 sub-lesson single page
├── Generative AI                -> UNDER-DEVELOPMENT di router, walau file overview ada
└── Track lain                   -> Placeholder/belum ada route aktif

Catatan penting:
- Machine Learning adalah course mandiri, sejajar dengan AI Fundamentals & Advanced dan Math for AI.
- Folder Machine Learning masih berada di pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/ sebagai legacy path implementasi.
- Jangan menafsirkan lokasi folder ML sebagai hierarki produk.
- Course/track placeholder sudah punya route eksplisit ke under-development agar tim tinggal mengganti mapping route saat konten siap.

---

POLA PEMBUATAN COURSE/MODUL BARU:

Setiap modul punya 4 file + folder chapters:
  pages/frontend/fellow-dashboard/ai-fundamental/XX-nama-modul/
  ├── materi.html      -> Container dinamis, sidebar chapter, tab navigasi
  ├── latihan.html     -> Form/interaktif
  ├── kuis.html        -> Pilihan ganda, single attempt
  ├── diskusi.html     -> Forum basic
  └── chapters/        -> chapter-1.html, chapter-2.html, dst.

Controller JS di: js/frontend/fellow-dashboard/ai-NAMA-basic.js
  -> Export fungsi: initAiNamaMateri(), initAiNamaBasic(), initAiNamaQuiz(), initAiNamaDiscussion()

Langkah wajib saat bikin modul baru:
  1. Buat folder + file HTML di pages/frontend/fellow-dashboard/ai-fundamental/
  2. Buat controller JS
  3. Daftarkan <script> di index.html
  4. Daftarkan route di js/router.js (object routes + array participantDashboardPages)
  5. Tambahkan init hooks di blok if-else di router.js (~line 580+)

---

KONVENSI PENAMAAN:

- Route: /participant-ai-lab-TRACK-SUBTOPIC (contoh: /participant-ai-lab-ml-intro)
- HTML ID: camelCase tanpa spasi (contoh: aiMlQuizForm, BUKAN aiMachine LearningQuizForm)
- localStorage key: heraiAiNamaFitur (contoh: heraiAiMlCurrentChapter)
- CSS class: kebab-case spesifik (contoh: practice-card, BUKAN challenge-card)
- Chapter files: chapter-N.html (contoh: chapter-1.html)

---

UI RULES KETAT:

1. Border-radius: card 14-20px, button 100px (pill), input 14-20px, JANGAN PERNAH 0
2. Warna: pink #f63392 HANYA untuk aksen. Text utama #171827, secondary #6f7282
3. Icon: FontAwesome ONLY, jangan emoji. Warna icon di card grid HARUS konsisten pink
4. Card grid: pakai repeat(3, 1fr) atau repeat(2, 1fr), JANGAN auto-fit yang bikin orphan
5. Konten mentor: JANGAN PERNAH dihapus, hanya ditambah/diperkaya
6. Commit setiap perubahan fitur, JANGAN push tanpa izin

---

CATATAN RISIKO / ANOMALI YANG PERLU DIJAGA:

1. Folder 03-machine-learning/ masih berada di ai-fundamental sebagai legacy path, padahal produk ML adalah course mandiri.
2. Modul 3a (Konsep AI Modern) baru materi; latihan/kuis/diskusi masih diarahkan ke under-development.
3. Math for AI punya file JS/konten draft, tetapi semua route Math masih diarahkan ke under-development.
4. Generative AI punya file overview, tetapi route #/participant-ai-lab-gen masih diarahkan ke under-development.
5. Jangan mengarahkan ulang route ML ke under-development; ML sudah aktif full 8 chapter.
6. Jika mengubah CSS/layout, patuhi AGENTS.md: radius > 0, kontras terbaca, pink sebagai aksen, dan FontAwesome untuk icon.
7. Setiap perubahan hierarki course/module harus ikut update dokumen handover dan dibuat commit lokal.

---

SEKARANG: Baca keempat file di atas, lalu tanya ke user mau ngapain.
Jangan langsung ngerjain tanpa konfirmasi scope dan file yang akan disentuh.
```

---

## CHECKLIST: Apa Saja yang Sudah Didokumentasikan

| Topik | File | Status |
|---|---|---|
| Aturan besi + arsitektur global | `GEMINI.md` | Lengkap |
| Design rules (warna, radius, icon) | `AGENTS.md` | Lengkap |
| Changelog perubahan sesi terakhir | `handover/HANDOVER_UPDATE.md` | Lengkap |
| Peta status semua modul + route | `handover/MODULE_STATUS_MAP.md` | Lengkap |
| Source of truth hierarki course | `handover/COURSE_HIERARCHY.md` | Lengkap |
| Prompt onboarding AI baru | `handover/PROMPT_AI_BARU.md` | File ini |
| Bug log & lessons learned | `GEMINI.md` (bagian bawah) | Lengkap |
| Zona bahaya file | `GEMINI.md` (bagian tengah) | Lengkap |
| Konvensi penamaan | File ini (bagian prompt) | Lengkap |
| Route -> File -> Controller mapping | `handover/MODULE_STATUS_MAP.md` | Tabel lengkap |
| localStorage keys | `handover/MODULE_STATUS_MAP.md` | Tabel lengkap |
| Git rollback commands | `handover/HANDOVER_UPDATE.md` | Tersedia |

---

## TIPS TAMBAHAN

### Kalau AI Agent Error atau Nggak Ngerti Konteks
Tempel tambahan ini setelah prompt di atas:

```
File penting yang harus kamu baca sekarang:
- js/router.js (lihat bagian routes object dan participantDashboardPages array)
- js/frontend/fellow-dashboard/settings.js (lihat introLessonRoutes dan generatedLessonContent)
- js/frontend/fellow-dashboard/ai-ml-basic.js (contoh controller modul)
- js/frontend/fellow-dashboard/ai-python-basic.js (contoh controller paling matang)
```

### Kalau Mau Lanjutkan Modul yang Belum Selesai
```
Prioritas kerja:
1. Modul 3a Konsep AI Modern - buat latihan.html, kuis.html, diskusi.html
2. Bersihkan/putuskan nasib konten draft Math for AI: aktifkan route atau tetap dokumentasikan sebagai under-development
3. Sinkronkan card/link Generative AI dengan status router under-development
4. Tentukan apakah legacy path 03-machine-learning perlu dipindah ke struktur course yang lebih eksplisit
5. Audit kecil CSS sesuai AGENTS.md jika menyentuh layout: hindari radius 0 dan warna text terlalu terang
```

### Kalau Mau Bikin Track Spesialisasi Baru di AI Lab
```
Contoh yang sudah jadi: Computer Vision (#/participant-ai-lab-cv)
File referensi: pages/frontend/fellow-dashboard/ai-lab/computer-vision.html (overview)
Sub-lessons: pages/frontend/fellow-dashboard/ai-lab/lessons/cnn-intro.html, dll.
Route pattern: /participant-ai-lab-TRACK-SUBTOPIC
```
