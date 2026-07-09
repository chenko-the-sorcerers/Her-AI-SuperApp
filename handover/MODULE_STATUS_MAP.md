# Peta Status Kurikulum HerAI

**Tanggal:** 9 Juli 2026
**Branch:** `design`
**Status dokumen:** update setelah migrasi Machine Learning full content dan klarifikasi hierarki course

Dokumen ini memetakan status course, module/chapter, dan route agar developer berikutnya tahu mana yang aktif, mana yang masih under-development, dan route mana yang perlu dijaga.

Source of truth hierarki katalog course ada di:

```text
handover/COURSE_HIERARCHY.md
```

---

## Ringkasan Hierarki Kurikulum

Ringkasan istilah resmi:

```text
Course Catalog
  Course
    Module / Chapter
      Materi -> Latihan -> Kuis -> Diskusi
```

Detail lengkap category, course, module/chapter, activity, dan specialization track ada di `handover/COURSE_HIERARCHY.md`.

Course utama yang terlihat di katalog peserta:

| Course | Status | Isi utama |
|---|---|---|
| AI Fundamentals & Advanced | Sebagian aktif | Pengantar AI, Python untuk AI, Konsep AI Modern, Reasoning, Evaluation, Evolution of AI |
| Math for AI | Under-development | Linear Algebra, Statistics, Probability, Calculus, Optimization, Case Study |
| Machine Learning | Aktif | 8 chapter ML, 10 latihan, 24 soal kuis, 8 prompt diskusi |
| Computer Vision | Aktif | 12 sub-lesson |
| NLP | Aktif | 5 sub-lesson single page |

Catatan penting:

- Machine Learning adalah course mandiri di katalog, sejajar dengan AI Fundamentals & Advanced dan Math for AI.
- Folder ML saat ini masih berada di `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/` karena alasan legacy implementasi. Jangan menafsirkan lokasi folder ini sebagai hierarki produk.
- Refactor folder ML ke lokasi course yang lebih tepat boleh direncanakan nanti, tetapi jangan dilakukan tanpa update route, controller `ML_BASE`, cache buster, route checker, dan dokumen handover.

---

## Struktur Direktori Kurikulum Saat Ini

```text
pages/frontend/fellow-dashboard/ai-fundamental/
  01-pengantar-ai/
    materi.html
    lesson.html
    latihan.html
    kuis.html
    diskusi.html

  02-python-untuk-ai/
    chapters/
    materi.html
    latihan.html
    kuis.html
    diskusi.html

  03-konsep-ai-modern/
    chapters/
    materi.html

  04-reasoning/              (belum ada)
  05-evaluation/             (belum ada)
  06-evolution-of-ai/        (belum ada)

  03-machine-learning/        (legacy path; produk = Course Machine Learning)
    chapters/
      chapter-1.html
      chapter-2.html
      chapter-3.html
      chapter-4.html
      chapter-5.html
      chapter-6.html
      chapter-7.html
      chapter-8.html
    materi.html
    latihan.html
    kuis.html
    diskusi.html

pages/frontend/fellow-dashboard/ai-lab/
  math-for-ai/                (draft, route masih under-development)
  lessons/                    (CV/NLP/legacy ML lesson files)
```

---

## Status AI Fundamentals

| Modul | Materi | Latihan | Kuis | Diskusi | Controller JS | Catatan |
|---|---|---|---|---|---|---|
| 01 - Pengantar AI | Aktif | Template/basic | Basic | Basic | `settings.js` | Route sub-topik memakai `lesson.html` |
| 02 - Python untuk AI | Aktif | Aktif, Pyodide | Aktif | Basic | `ai-python-basic.js` | Modul paling interaktif |
| 03a - Konsep AI Modern | Materi ada | Belum aktif | Belum aktif | Belum aktif | `ai-modern.js` | Route masih under-development |
| 04 - Reasoning | Belum ada | Belum ada | Belum ada | Belum ada | - | Belum ada folder/route |
| 05 - Evaluation | Belum ada | Belum ada | Belum ada | Belum ada | - | Belum ada folder/route |
| 06 - Evolution of AI | Belum ada | Belum ada | Belum ada | Belum ada | - | Belum ada folder/route |

---

## Status AI Lab / Advanced Tracks

| Track | Route | Status Konten | Catatan |
|---|---|---|---|
| Machine Learning | `#/participant-ai-lab-ml` | Aktif | Course mandiri; file masih di legacy path `ai-fundamental/03-machine-learning/` |
| Computer Vision | `#/participant-ai-lab-cv` | Aktif | 12 sub-lesson |
| NLP | `#/participant-ai-lab-nlp` | Aktif | 5 sub-lesson single page |
| Math for AI | `#/participant-ai-lab-math` | Under-development | File ada dari Nazril, route diarahkan ke under-development |
| Generative AI | `#/participant-ai-lab-gen` | Under-development | Route diarahkan ke under-development |
| Deep Learning | `#/participant-ai-lab-deep-learning` | Placeholder route | Route diarahkan ke under-development |
| Reinforcement Learning | `#/participant-ai-lab-reinforcement-learning` | Placeholder route | Route diarahkan ke under-development |
| LLM | `#/participant-ai-lab-llm` | Placeholder route | Route diarahkan ke under-development |
| VLM | `#/participant-ai-lab-vlm` | Placeholder route | Route diarahkan ke under-development |
| Multimodal LLM | `#/participant-ai-lab-multimodal-llm` | Placeholder route | Route diarahkan ke under-development |
| Agentic AI | `#/participant-ai-lab-agentic-ai` | Placeholder route | Route diarahkan ke under-development |
| Bioinformatics | `#/participant-ai-lab-bioinformatics` | Placeholder route | Route diarahkan ke under-development |
| Data Engineering | `#/participant-ai-lab-data-engineering` | Placeholder route | Route diarahkan ke under-development |
| Data Science | `#/participant-ai-lab-data-science` | Placeholder route | Route diarahkan ke under-development |
| Ops & Infra | `#/participant-ai-lab-infrastructure`, `#/participant-ai-lab-deployment` | Placeholder route | Route diarahkan ke under-development |
| Product | `#/participant-ai-lab-front-end`, `#/participant-ai-lab-back-end` | Placeholder route | Route diarahkan ke under-development |
| Business & Industry | `#/participant-ai-lab-business-insight` dan route industry lain | Placeholder route | Route diarahkan ke under-development |

---

## Machine Learning Route Map

Machine Learning adalah course mandiri. Semua route berikut sudah aktif dan masuk `participantDashboardPages`.

### Materi

| Route | File HTML | Chapter aktif |
|---|---|---|
| `/participant-ai-lab-machine-learning` | `03-machine-learning/materi.html` | Saved chapter atau 1 |
| `/participant-ai-lab-ml` | `03-machine-learning/materi.html` | Saved chapter atau 1 |
| `/participant-ai-lab-ml-intro` | `03-machine-learning/materi.html` | 1 |
| `/participant-ai-lab-ml-hypothesis` | `03-machine-learning/materi.html` | 2, legacy alias |
| `/participant-ai-lab-ml-vc-dim` | `03-machine-learning/materi.html` | 3, legacy alias |
| `/participant-ai-lab-ml-bias-variance` | `03-machine-learning/materi.html` | 3, legacy alias |
| `/participant-ai-lab-ml-supervised` | `03-machine-learning/materi.html` | 2 |
| `/participant-ai-lab-ml-regression-classification` | `03-machine-learning/materi.html` | 3 |
| `/participant-ai-lab-ml-probabilistic` | `03-machine-learning/materi.html` | 4 |
| `/participant-ai-lab-ml-linear-discriminative` | `03-machine-learning/materi.html` | 5 |
| `/participant-ai-lab-ml-svm` | `03-machine-learning/materi.html` | 6 |
| `/participant-ai-lab-ml-neural-networks` | `03-machine-learning/materi.html` | 7 |
| `/participant-ai-lab-ml-unsupervised` | `03-machine-learning/materi.html` | 8 |

### Flow Pendukung

| Route | File HTML | Init function |
|---|---|---|
| `/participant-ai-lab-ml-practice` | `03-machine-learning/latihan.html` | `initAiMlBasic()` |
| `/participant-ai-lab-ml-quiz` | `03-machine-learning/kuis.html` | `initAiMlQuiz()` |
| `/participant-ai-lab-ml-discussion` | `03-machine-learning/diskusi.html` | `initAiMlDiscussion()` |

---

## Machine Learning Chapter Map

| Chapter | Route canonical | File |
|---|---|---|
| 1 - Pengantar Machine Learning | `/participant-ai-lab-ml-intro` | `chapter-1.html` |
| 2 - Supervised Learning | `/participant-ai-lab-ml-supervised` | `chapter-2.html` |
| 3 - Regresi & Klasifikasi Dasar | `/participant-ai-lab-ml-regression-classification` | `chapter-3.html` |
| 4 - Probabilistic Models | `/participant-ai-lab-ml-probabilistic` | `chapter-4.html` |
| 5 - Linear Discriminative Models | `/participant-ai-lab-ml-linear-discriminative` | `chapter-5.html` |
| 6 - Support Vector Machine | `/participant-ai-lab-ml-svm` | `chapter-6.html` |
| 7 - Neural Networks | `/participant-ai-lab-ml-neural-networks` | `chapter-7.html` |
| 8 - Unsupervised Learning | `/participant-ai-lab-ml-unsupervised` | `chapter-8.html` |

---

## localStorage Keys

| Key | Modul | Fungsi |
|---|---|---|
| `heraiAiPythonPractice` | Python | Jawaban latihan tersimpan |
| `heraiAiPythonQuizDone` | Python | Flag kuis sudah dikerjakan |
| `heraiAiPythonQuizScore` | Python | Skor kuis |
| `heraiAiPythonDiscussion` | Python | Thread diskusi |
| `heraiAiMlCurrentChapter` | ML | Chapter terakhir dibaca |
| `heraiAiMlPractice` | ML | Jawaban latihan tersimpan |
| `heraiAiMlQuizDone` | ML | Flag kuis sudah dikerjakan |
| `heraiAiMlQuizScore` | ML | Skor kuis |
| `heraiAiMlQuizAnswers` | ML | Jawaban kuis tersimpan untuk lock single attempt |
| `heraiAiMlDiscussion` | ML | Thread diskusi |

---

## Under Development Saat Ini

Route yang masih diarahkan ke `under-development.html`:

| Route | Keterangan |
|---|---|
| `/participant-under-development` | Fallback global |
| `/participant-ai-modern` | Konsep AI Modern |
| `/participant-ai-modern-practice` | Konsep AI Modern practice |
| `/participant-ai-modern-quiz` | Konsep AI Modern quiz |
| `/participant-ai-modern-discussion` | Konsep AI Modern discussion |
| `/participant-ai-lab-gen` | Generative AI |
| `/participant-ai-lab-deep-learning` | Deep Learning |
| `/participant-ai-lab-reinforcement-learning` | Reinforcement Learning |
| `/participant-ai-lab-llm` | LLM |
| `/participant-ai-lab-vlm` | VLM |
| `/participant-ai-lab-multimodal-llm` | Multimodal LLM |
| `/participant-ai-lab-agentic-ai` | Agentic AI |
| `/participant-ai-lab-bioinformatics` | Bioinformatics |
| `/participant-ai-lab-data-engineering` | Data Engineering |
| `/participant-ai-lab-data-science` | Data Science |
| `/participant-ai-lab-infrastructure` | Infrastructure |
| `/participant-ai-lab-deployment` | Deployment |
| `/participant-ai-lab-front-end` | Front-end |
| `/participant-ai-lab-back-end` | Back-end |
| `/participant-ai-lab-business-insight` | Business Insight |
| `/participant-ai-lab-people-business-mgt` | People & Business Management |
| `/participant-ai-lab-ai-culture` | AI for Culture |
| `/participant-ai-lab-healthcare` | AI for Healthcare |
| `/participant-ai-lab-ui-ux` | UI/UX Design Thinking |
| `/participant-ai-lab-manufacturing` | AI for Manufacturing |
| `/participant-ai-lab-geospatial` | AI for Geospatial |
| `/participant-specialization-computer-vision` | Computer Vision specialization track |
| `/participant-specialization-speech-recognition` | Speech Recognition specialization track |
| `/participant-specialization-nlp-llm` | NLP & LLM specialization track |
| `/participant-specialization-mlops-deployment` | MLOps & Deployment specialization track |
| `/participant-specialization-multimodal-llm` | Multimodal LLM specialization track |
| `/participant-specialization-medical-biology-ai` | Medical & Biology AI specialization track |
| `/participant-ai-lab-math` | Math for AI |
| `/participant-ai-lab-math-intro` | Math for AI |
| `/participant-ai-lab-math-linear-algebra` | Math for AI |
| `/participant-ai-lab-math-statistics` | Math for AI |
| `/participant-ai-lab-math-probability` | Math for AI |
| `/participant-ai-lab-math-calculus` | Math for AI |
| `/participant-ai-lab-math-optimization` | Math for AI |
| `/participant-ai-lab-math-case-study` | Math for AI |
| `/participant-ai-lab-math-practice` | Math for AI |
| `/participant-ai-lab-math-quiz` | Math for AI |
| `/participant-ai-lab-math-discussion` | Math for AI |

---

## Developer Notes

- Jika membuat modul baru, update `js/router.js` di tiga area: `routes`, `participantDashboardPages`, dan init hook di `handleRouting()`.
- Jika menambah CSS untuk Machine Learning, gunakan scope `.ai-ml-*` atau class `.ml-*` yang sudah scoped di halaman ML.
- Jangan mengarahkan ulang route ML ke under-development lagi kecuali memang diminta.
- Jangan mengubah route CV/NLP/Python/Math/GenAI saat mengerjakan ML.
- Jalankan minimal:

```bash
node --check js/router.js
node --check js/frontend/fellow-dashboard/ai-ml-basic.js
git diff --check
node scripts/check-participant-routes.mjs
```
