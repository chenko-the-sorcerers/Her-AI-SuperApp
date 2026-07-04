# Peta Status Kurikulum HerAI (AI Fundamentals + AI Lab)
**Tanggal:** 4 Juli 2026 (Update Malam)  
**Branch:** `design`

Dokumen ini berfungsi sebagai peta jalan (*roadmap*) bagi tim *developer* atau AI Agent untuk mengetahui dengan pasti mana saja halaman/modul yang sudah selesai dibangun, mana yang masih berbentuk *template* kaku, dan mana yang benar-benar belum dibuat.

---

## Struktur Direktori Frontend

```text
pages/frontend/fellow-dashboard/ai-fundamental/
├── 01-pengantar-ai/
│   ├── materi.html               (✅ SELESAI — Topik 1: Definisi, Karakteristik, Studi Kasus, AI-ML-DL, Sejarah)
│   ├── lesson.html               (✅ SELESAI — Template generik untuk Topik 2-4, di-render oleh settings.js)
│   ├── latihan.html              (🟡 Template standar — belum interaktif)
│   ├── kuis.html                 (🟡 Template standar — soal sudah ada, UI sudah berfungsi)
│   └── diskusi.html              (🟡 Template standar — forum basic)
│
├── 02-python-untuk-ai/
│   ├── chapters/                 (✅ SELESAI — 6 Sub-Modul dinamis)
│   │   ├── 00-old-draft-analogies.html (arsip, tidak dipakai)
│   │   ├── 01-memulai-python.html
│   │   ├── 02-materi.html ... 05-materi.html
│   ├── materi.html               (✅ SELESAI — Container dinamis + sidebar chapter)
│   ├── latihan.html              (✅ SELESAI — Pyodide interactive sandbox)
│   ├── kuis.html                 (✅ SELESAI — Validasi & highlight jawaban)
│   └── diskusi.html              (🟡 Template standar)
│
├── 03-konsep-ai-modern/
│   ├── chapters/                 (✅ SELESAI — 4 Sub-Modul: Foundation Models, Transformers, Agents, RAG)
│   │   ├── 01-materi.html ... 04-materi.html
│   ├── materi.html               (✅ SELESAI — Container dinamis)
│   ├── latihan.html              (❌ TIDAK ADA — File belum dibuat)
│   ├── kuis.html                 (❌ TIDAK ADA — File belum dibuat)
│   └── diskusi.html              (❌ TIDAK ADA — File belum dibuat)
│
├── 03-machine-learning/          (⚠️ BARU — Prefix "03" duplikat dengan konsep-ai-modern)
│   ├── chapters/                 (✅ SELESAI — 4 Chapter: Intro, Hypothesis, VC-Dim, Bias-Variance)
│   │   ├── chapter-1.html ... chapter-4.html
│   ├── materi.html               (✅ SELESAI — Container dinamis + sidebar)
│   ├── latihan.html              (🟡 BASIC — 2 soal studi kasus reflektif)
│   ├── kuis.html                 (🟡 BASIC — 5 soal pilihan ganda)
│   └── diskusi.html              (✅ SELESAI — Forum standar, ID sudah benar)
│
├── 04-reasoning/                 (❌ TIDAK ADA — Direktori belum dibuat)
├── 05-evaluation/                (❌ TIDAK ADA — Direktori belum dibuat)
└── 06-evolution-of-ai/           (❌ TIDAK ADA — Direktori belum dibuat)
```

---

## Tabel Status: AI Fundamentals (6 Modul Inti)

| Modul | Materi | Latihan | Kuis | Diskusi | Controller JS | Catatan |
|---|---|---|---|---|---|---|
| **01 — Pengantar AI** | ✅ 4 topik padat | 🟡 Template lama | 🟡 Sudah jalan | 🟡 Template lama | `settings.js` | Konten mentor + tech bestie sudah digabung |
| **02 — Python untuk AI** | ✅ 6 chapter dinamis | ✅ Pyodide sandbox | ✅ Skoring + highlight | 🟡 Template | `ai-python-basic.js` | Paling matang |
| **03a — Konsep AI Modern** | ✅ 4 chapter dinamis | ❌ Belum ada | ❌ Belum ada | ❌ Belum ada | `ai-modern.js` | Latihan/kuis/diskusi belum dibuat |
| **03b — Machine Learning** | ✅ 4 chapter dinamis | 🟡 2 soal basic | 🟡 5 soal basic | ✅ Forum standar | `ai-ml-basic.js` | Route: `#/participant-ai-lab-ml` |
| **04 — Reasoning** | ❌ | ❌ | ❌ | ❌ | — | Belum ada folder/route |
| **05 — Evaluation** | ❌ | ❌ | ❌ | ❌ | — | Belum ada folder/route |
| **06 — Evolution of AI** | ❌ | ❌ | ❌ | ❌ | — | Belum ada folder/route |

---

## Tabel Status: AI Lab / Spesialisasi (Advanced Tracks)

| Track | Route | Status Konten | Sub-lesson yang Ada |
|---|---|---|---|
| **Machine Learning** | `#/participant-ai-lab-ml` | ✅ **Baru dirombak** | Intro, Hypothesis, VC-Dim, Bias-Variance (4 chapter) |
| **Computer Vision** | `#/participant-ai-lab-cv` | ✅ Selesai | CNN Intro, Filtering, Color Space, Edge, Segmentation, Feature, Transfer, AR, OpenCV, Pixel Anatomy |
| **NLP** | `#/participant-ai-lab-nlp` | ✅ Selesai | Tokenization, Preprocessing, POS/NER, BOW, TF-IDF |
| **Generative AI** | `#/participant-ai-lab-gen` | 🟡 Overview only | Belum ada sub-lesson |
| Math for AI | — | ❌ Placeholder | Belum ada route |
| Deep Learning | — | ❌ Placeholder | Belum ada route |
| Reinforcement Learning | — | ❌ Placeholder | Belum ada route |
| LLM | — | ❌ Placeholder | Belum ada route |
| VLM | — | ❌ Placeholder | Belum ada route |
| Multimodal LLM | — | ❌ Placeholder | Belum ada route |
| Agentic AI | — | ❌ Placeholder | Belum ada route |
| Bioinformatics | — | ❌ Placeholder | Belum ada route |
| Data Eng. & Data Sci. | — | ❌ Placeholder | Belum ada route |
| Ops & Infra | — | ❌ Placeholder | Belum ada route |
| Product (Front/Back) | — | ❌ Placeholder | Belum ada route |
| Bisnis, Health, Design | — | ❌ Placeholder | Belum ada route |

---

## Mapping Route → File → Controller

### Modul 1: Pengantar AI
| Route | File HTML | Init Function |
|---|---|---|
| `/participant-ai-intro` | `01-pengantar-ai/materi.html` | — (static) |
| `/participant-ai-types` | `01-pengantar-ai/lesson.html` | `initGeneratedLessonPage()` |
| `/participant-ai-applications` | `01-pengantar-ai/lesson.html` | `initGeneratedLessonPage()` |
| `/participant-ai-summary` | `01-pengantar-ai/lesson.html` | `initGeneratedLessonPage()` |
| `/participant-ai-intro-practice` | `01-pengantar-ai/latihan.html` | — |
| `/participant-ai-intro-quiz` | `01-pengantar-ai/kuis.html` | — |
| `/participant-ai-intro-discussion` | `01-pengantar-ai/diskusi.html` | — |

### Modul 3b: Machine Learning
| Route | File HTML | Init Function |
|---|---|---|
| `/participant-ai-lab-ml` | `03-machine-learning/materi.html` | `initAiMlMateri()` |
| `/participant-ai-lab-ml-practice` | `03-machine-learning/latihan.html` | `initAiMlBasic()` |
| `/participant-ai-lab-ml-quiz` | `03-machine-learning/kuis.html` | `initAiMlQuiz()` |
| `/participant-ai-lab-ml-discussion` | `03-machine-learning/diskusi.html` | `initAiMlDiscussion()` |

### Alias Routes (mengarah ke materi.html ML)
| Route | Asal |
|---|---|
| `/participant-ai-lab-ml-intro` | Legacy lesson route |
| `/participant-ai-lab-ml-hypothesis` | Legacy lesson route |
| `/participant-ai-lab-ml-vc-dim` | Legacy lesson route |
| `/participant-ai-lab-ml-bias-variance` | Legacy lesson route |

---

## localStorage Keys yang Dipakai

| Key | Modul | Fungsi |
|---|---|---|
| `heraiAiPythonPractice` | Python | Jawaban latihan tersimpan |
| `heraiAiPythonQuizDone` | Python | Flag kuis sudah dikerjakan |
| `heraiAiPythonQuizScore` | Python | Skor kuis |
| `heraiAiPythonDiscussion` | Python | Thread diskusi |
| `heraiAiMlPractice` | ML | Jawaban latihan tersimpan |
| `heraiAiMlQuizDone` | ML | Flag kuis sudah dikerjakan |
| `heraiAiMlQuizScore` | ML | Skor kuis |
| `heraiAiMlDiscussion` | ML | Thread diskusi |
| `heraiAiMlCurrentChapter` | ML | Chapter terakhir dibaca |

---

**Catatan untuk Developer Selanjutnya:**  
Gunakan dokumen ini untuk menentukan fokus pekerjaan. Prioritas tertinggi adalah **melengkapi latihan, kuis, dan diskusi untuk Modul 3a (Konsep AI Modern)** karena materinya sudah lengkap tapi belum ada file pendukung. Untuk modul ML, review dan perkaya konten chapter yang masih berupa copy mentah dari lesson lama. Pastikan setiap membuat modul baru, daftarkan rutenya di `js/router.js` DAN tambahkan init hook-nya.
