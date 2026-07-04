# Prompt Onboarding untuk AI Agent / Developer Baru
**Tanggal:** 5 Juli 2026 (Final)  
**Proyek:** HerAI Fellowship SuperApp  
**Branch aktif:** `design`

> **Cara pakai:** Copy-paste seluruh isi file ini sebagai pesan pertama ke AI agent baru (Gemini, Claude, ChatGPT, dll). Ini akan memberikan konteks penuh tanpa perlu membaca puluhan file.

---

## PROMPT MULAI

```
Kamu adalah developer AI yang melanjutkan pengerjaan proyek HerAI Fellowship SuperApp.
Ini adalah Single Page Application (SPA) berbasis Vanilla JS dengan hash routing.

SEBELUM mengerjakan apa pun, BACA file-file berikut secara berurutan:

1. GEMINI.md          → Aturan besi, arsitektur, zona bahaya
2. AGENTS.md          → Design rules (border-radius, warna, icon)
3. handover/HANDOVER_UPDATE.md    → Changelog sesi terakhir
4. handover/MODULE_STATUS_MAP.md  → Peta status semua modul + route mapping

---

KONTEKS ARSITEKTUR CEPAT:

- Frontend: Vanilla JS SPA, entry point di index.html
- Router: js/router.js — hash-based (#/route), semua route didaftarkan di sini
- Backend: Node.js (server.js) + Google Apps Script (gas/Code.gs) + Go (signaling/)
- CSS utama modul: css/frontend/fellow-dashboard/modules.css
- Tema warna: Pink (#f63392), text utama #171827, text secondary #6f7282
- Border-radius WAJIB > 0 (card: 14-20px, button: 100px/pill, input: 14-20px)
- Semua icon HARUS pakai FontAwesome, BUKAN emoji

---

STRUKTUR KURIKULUM SAAT INI:

AI Fundamentals (6 modul inti):
├── Modul 1: Pengantar AI        → ✅ SELESAI (4 topik padat, route: #/participant-ai-intro)
├── Modul 2: Python untuk AI     → ✅ SELESAI (6 chapter, Pyodide sandbox, route: #/participant-ai-python)
├── Modul 3a: Konsep AI Modern   → ⚠️ MATERI SELESAI, latihan/kuis/diskusi BELUM ADA
├── Modul 3b: Machine Learning   → ✅ BARU DIBUAT (4 chapter, route: #/participant-ai-lab-ml)
├── Modul 4-6                    → ❌ BELUM ADA

AI Lab (tracks spesialisasi lanjutan):
├── ML, CV, NLP                  → ✅ Ada konten
├── Generative AI                → 🟡 Overview only
└── 12 track lainnya             → ❌ Placeholder

---

POLA PEMBUATAN MODUL BARU:

Setiap modul punya 4 file + folder chapters:
  pages/frontend/fellow-dashboard/ai-fundamental/XX-nama-modul/
  ├── materi.html      → Container dinamis, sidebar chapter, tab navigasi
  ├── latihan.html     → Form/interaktif
  ├── kuis.html        → Pilihan ganda, single attempt
  ├── diskusi.html     → Forum basic
  └── chapters/        → chapter-1.html, chapter-2.html, dst.

Controller JS di: js/frontend/fellow-dashboard/ai-NAMA-basic.js
  → Export fungsi: initAiNamaMateri(), initAiNamaBasic(), initAiNamaQuiz(), initAiNamaDiscussion()

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

KNOWN BUGS YANG BELUM DIFIX:

1. ai-ml-basic.js masih ada sisa Pyodide code (loadPyodide, runMlAsync) yang tidak terpakai
2. Folder 03-konsep-ai-modern/ dan 03-machine-learning/ sama-sama pakai prefix "03"
3. Latihan ML masih basic (2 soal), kuis ML baru 5 soal
4. Modul 3a (Konsep AI Modern) belum punya latihan/kuis/diskusi

---

SEKARANG: Baca keempat file di atas, lalu tanya ke user mau ngapain.
Jangan langsung ngerjain tanpa konfirmasi scope dan file yang akan disentuh.
```

---

## CHECKLIST: Apa Saja yang Sudah Didokumentasikan

| Topik | File | Status |
|---|---|---|
| Aturan besi + arsitektur global | `GEMINI.md` | ✅ Lengkap |
| Design rules (warna, radius, icon) | `AGENTS.md` | ✅ Lengkap |
| Changelog perubahan sesi terakhir | `handover/HANDOVER_UPDATE.md` | ✅ Lengkap |
| Peta status semua modul + route | `handover/MODULE_STATUS_MAP.md` | ✅ Lengkap |
| Prompt onboarding AI baru | `handover/PROMPT_AI_BARU.md` | ✅ File ini |
| Bug log & lessons learned | `GEMINI.md` (bagian bawah) | ✅ 9 poin |
| Zona bahaya file | `GEMINI.md` (bagian tengah) | ✅ 4 level risiko |
| Konvensi penamaan | File ini (bagian prompt) | ✅ |
| Route → File → Controller mapping | `handover/MODULE_STATUS_MAP.md` | ✅ Tabel lengkap |
| localStorage keys | `handover/MODULE_STATUS_MAP.md` | ✅ Tabel lengkap |
| Git rollback commands | `handover/HANDOVER_UPDATE.md` | ✅ 3 command |

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
1. Modul 3a Konsep AI Modern — buat latihan.html, kuis.html, diskusi.html
2. Modul ML — perkaya latihan (tambah soal) dan kuis (tambah ke 10 soal)
3. Bersihkan ai-ml-basic.js dari sisa Pyodide code
4. Tentukan apakah folder 03-konsep-ai-modern dan 03-machine-learning perlu di-rename
```

### Kalau Mau Bikin Track Spesialisasi Baru di AI Lab
```
Contoh yang sudah jadi: Computer Vision (#/participant-ai-lab-cv)
File referensi: pages/frontend/fellow-dashboard/ai-lab/computer-vision.html (overview)
Sub-lessons: pages/frontend/fellow-dashboard/ai-lab/lessons/cnn-intro.html, dll.
Route pattern: /participant-ai-lab-TRACK-SUBTOPIC
```
