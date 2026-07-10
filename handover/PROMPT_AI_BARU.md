# Prompt Onboarding untuk AI Agent / Developer Baru
**Tanggal:** 10 Juli 2026 (Aktivasi Math for AI + activity final Konsep AI Modern)
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
6. handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md -> Checkpoint final folder, rename, dan routing course catalog

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
└── Category / Domain
    └── Course
        └── Module / Chapter
            └── Materi -> Latihan -> Kuis -> Diskusi

Course catalog mengikuti grouping UI di pages/frontend/fellow-dashboard/modules.html:

Foundation & Core AI
├── AI Fundamentals & Advanced   -> SEBAGIAN AKTIF
│   ├── Pengantar AI             -> AKTIF
│   ├── Python untuk AI          -> AKTIF
│   ├── Konsep AI Modern         -> AKTIF
│   ├── Reasoning                -> BELUM ADA
│   ├── Evaluation               -> BELUM ADA
│   └── Evolution of AI          -> BELUM ADA
├── Math for AI                  -> AKTIF
├── Machine Learning             -> AKTIF FULL (8 chapter, 10 latihan, 24 soal kuis, 8 prompt diskusi)
├── Deep Learning                -> SCAFFOLD AKTIF
└── Reinforcement Learning       -> SCAFFOLD AKTIF

Generative & Multimodal AI
├── Generative AI                -> SCAFFOLD AKTIF, file overview ada
├── LLM                          -> SCAFFOLD AKTIF
├── VLM                          -> SCAFFOLD AKTIF
├── Multimodal LLM               -> SCAFFOLD AKTIF
└── Agentic AI                   -> SCAFFOLD AKTIF

Data & Engineering Domains
├── Computer Vision              -> AKTIF, overview + 11 lesson route
├── NLP                          -> AKTIF, 5 sub-lesson single page
├── Bioinformatics               -> SCAFFOLD AKTIF
├── Data Engineering             -> SCAFFOLD AKTIF
├── Data Science                 -> SCAFFOLD AKTIF
├── Infrastructure               -> SCAFFOLD AKTIF
├── Deployment                   -> SCAFFOLD AKTIF
├── Front-end                    -> SCAFFOLD AKTIF
└── Back-end                     -> SCAFFOLD AKTIF

Business & Industry Applications
├── Business Insight             -> SCAFFOLD AKTIF
├── People & Business Mgt        -> SCAFFOLD AKTIF
├── AI for Culture               -> SCAFFOLD AKTIF
├── AI for Healthcare            -> SCAFFOLD AKTIF
├── UI/UX Design Thinking        -> SCAFFOLD AKTIF
├── AI for Manufacturing         -> SCAFFOLD AKTIF
└── AI for Geospatial            -> SCAFFOLD AKTIF

Catatan penting:
- Machine Learning adalah course di category Foundation & Core AI, sejajar dengan AI Fundamentals & Advanced dan Math for AI.
- Folder aktif Machine Learning ada di pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/.
- Folder category/domain canonical ada langsung di pages/frontend/fellow-dashboard/.
- Course/track placeholder sudah punya route eksplisit ke `course-placeholder.html` agar tim tinggal mengisi outline atau mengganti mapping route saat konten final siap.
- Course/track placeholder memakai tab standar `Materi -> Latihan -> Kuis -> Diskusi`; tab activity non-materi memakai query hash seperti `#/participant-ai-lab-gen?activity=latihan`, bukan `#/participant-under-development`.
- Jangan buat folder `course-catalog/`, `ai-fundamental/`, atau `ai-lab/` lagi sebagai path aktif. Itu folder lama/superseded. Category/domain canonical langsung di bawah `pages/frontend/fellow-dashboard/`.

---

POLA PEMBUATAN COURSE/MODUL BARU:

Setiap course baru sebaiknya dibuat di hierarchy canonical:
  pages/frontend/fellow-dashboard/CATEGORY-SLUG/COURSE-SLUG/
  ├── materi.html      -> Container dinamis, sidebar chapter, tab navigasi
  ├── latihan.html     -> Form/interaktif
  ├── kuis.html        -> Pilihan ganda, single attempt
  ├── diskusi.html     -> Forum basic
  └── chapters/        -> chapter-1.html, chapter-2.html, dst.

Controller JS di: js/frontend/fellow-dashboard/ai-NAMA-basic.js
  -> Export fungsi: initAiNamaMateri(), initAiNamaBasic(), initAiNamaQuiz(), initAiNamaDiscussion()

Langkah wajib saat bikin modul baru:
  1. Buat folder + file HTML di pages/frontend/fellow-dashboard/CATEGORY-SLUG/COURSE-SLUG/
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

1. Filesystem course catalog sudah final memakai category/domain langsung di bawah `pages/frontend/fellow-dashboard/`.
2. Folder `course-catalog/` sempat dibuat di checkpoint lama, tetapi sudah superseded. Jangan dipakai lagi.
3. Folder lama `ai-fundamental/` dan `ai-lab/` juga bukan path aktif peserta. Konten aktifnya sudah dipindah ke category/domain canonical.
4. Modul 3a (Konsep AI Modern) sudah aktif untuk materi, latihan, kuis, dan diskusi.
5. Math for AI sudah aktif dari draft Nazril dengan overview, lesson, latihan, kuis, dan diskusi.
6. Generative AI punya file overview; route utama masih scaffold/placeholder sampai konten final diaktifkan.
7. Jangan mengarahkan ulang route ML ke under-development; ML sudah aktif full 8 chapter.
8. Jika mengubah CSS/layout, patuhi AGENTS.md: radius > 0, kontras terbaca, pink sebagai aksen, dan FontAwesome untuk icon.
9. Setiap perubahan hierarki course/module harus ikut update dokumen handover dan dibuat commit lokal.

---

SEKARANG: Baca semua file onboarding di atas, lalu tanya ke user mau ngapain.
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
| Checkpoint rename/folder/routing course catalog | `handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md` | Lengkap |
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
1. Sinkronkan file overview Generative AI dengan scaffold atau aktifkan route final
2. Buat atau aktifkan course baru langsung di folder category/domain canonical `pages/frontend/fellow-dashboard/{category-slug}/{course-slug}/`
3. Audit kecil CSS sesuai AGENTS.md jika menyentuh layout: hindari radius 0 dan warna text terlalu terang
```

### Kalau Mau Bikin Course/Track Baru
```
Contoh yang sudah jadi: Computer Vision (#/participant-ai-lab-cv)
File referensi: pages/frontend/fellow-dashboard/data-engineering-domains/computer-vision.html (overview)
Sub-lessons: pages/frontend/fellow-dashboard/data-engineering-domains/computer-vision/lessons/cnn-intro.html, dll.
Route pattern: /participant-ai-lab-TRACK-SUBTOPIC
Folder target: pages/frontend/fellow-dashboard/{category-slug}/{course-slug}/
```
