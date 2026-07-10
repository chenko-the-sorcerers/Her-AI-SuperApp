# Peta Status Kurikulum HerAI

**Tanggal:** 10 Juli 2026
**Branch:** `design`
**Status dokumen:** update setelah scaffold Reasoning diperkaya, full curriculum placeholder scaffold, aktivasi Math for AI, activity final Konsep AI Modern, migrasi Machine Learning full content, dan refactor filesystem/routing final

Dokumen ini memetakan status course, module/chapter, dan route agar developer berikutnya tahu mana yang aktif, mana yang masih under-development, dan route mana yang perlu dijaga.

Source of truth hierarki katalog course ada di:

```text
handover/COURSE_HIERARCHY.md
handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
```

---

## Checkpoint Terbaru

Commit lokal terbaru:

```text
b33c1b4 feat: enrich ai reasoning scaffold
```

Yang sudah dibuat pada checkpoint terbaru:

- Reasoning tetap memakai `course-placeholder.html`, tetapi kontennya diperkaya melalui `COURSE_SCAFFOLDS`.
- Empat submateri Reasoning aktif pada scaffold: `how-ai-reasons`, `planning-and-decomposition`, `chain-of-thought`, dan `tool-use`.
- Setiap submateri memiliki Materi, Latihan, Kuis, dan Diskusi; overview memuat tujuan belajar, alur terintegrasi, studi kasus, checklist, dan empat referensi arXiv.
- Renderer rich bersifat opsional; scaffold lain yang hanya memakai schema string lama tetap dirender dengan fallback sebelumnya.

- `COURSE_SCAFFOLDS` di `js/frontend/fellow-dashboard/course-placeholder.js` menjadi manifest tunggal untuk semua course/track/module yang belum final.
- Math for AI dihapus dari manifest scaffold karena sudah aktif final di folder canonical.
- Setiap scaffold punya data course: `title`, `category`, `icon`, `status`, `summary`, `modules`.
- Setiap module scaffold punya metadata: `slug`, `title`, `summary`, `materi`, `latihan`, `kuis`, `diskusi`.
- Route scaffold baru AI Fundamentals:
  - `#/participant-ai-reasoning`
  - `#/participant-ai-evaluation`
  - `#/participant-ai-evolution`
- Card overview AI Fundamentals untuk Reasoning, Evaluation, dan Evolution of AI sudah berupa link route.
- Query scaffold resmi:
  - `?activity=materi`
  - `?activity=latihan`
  - `?activity=kuis`
  - `?activity=diskusi`
  - `?module=prompting-workflow&activity=kuis`
- Route checker terakhir:

```text
Total: 110 | 110 passed | 0 failed
```

---

## Ringkasan Hierarki Kurikulum

Ringkasan istilah resmi:

```text
Course Catalog
  Category / Domain
    Course
      Module / Chapter
        Materi -> Latihan -> Kuis -> Diskusi
```

Detail lengkap category, course, module/chapter, activity, dan specialization track ada di `handover/COURSE_HIERARCHY.md`.

Course utama yang terlihat di katalog peserta, dikelompokkan sesuai category/domain UI:

| Category / Domain | Course | Status | Isi utama |
|---|---|---|---|
| Foundation & Core AI | AI Fundamentals & Advanced | Sebagian aktif + scaffold | Pengantar AI, Python untuk AI, Konsep AI Modern aktif; Reasoning scaffold diperkaya; Evaluation dan Evolution of AI scaffold dasar |
| Foundation & Core AI | Math for AI | Aktif | Overview, 7 lesson, latihan, kuis, diskusi |
| Foundation & Core AI | Machine Learning | Aktif | 8 chapter ML, 10 latihan, 24 soal kuis, 8 prompt diskusi |
| Foundation & Core AI | Deep Learning | Scaffold aktif | Neural Network Basics, Training & Backpropagation, CNN/RNN Overview, Transformer Basics, Regularization |
| Foundation & Core AI | Reinforcement Learning | Scaffold aktif | Agent & Environment, Reward and Policy, Value Function, Exploration vs Exploitation, Case Study |
| Generative & Multimodal AI | Generative AI | Scaffold aktif | Generative AI Overview, Prompting Workflow, Diffusion & GAN Basics, Output Evaluation, Creative Workflow |
| Generative & Multimodal AI | LLM | Scaffold aktif | Transformer Recap, Prompting & Instruction, RAG Basics, Fine-tuning Overview, Deployment Notes |
| Generative & Multimodal AI | VLM | Scaffold aktif | Image-Text Alignment, Captioning, Visual Question Answering, Evaluation, Use Cases |
| Generative & Multimodal AI | Multimodal LLM | Scaffold aktif | Multimodal Inputs, Cross-modal Learning, Fusion Strategies, Evaluation, Product Patterns |
| Generative & Multimodal AI | Agentic AI | Scaffold aktif | Agent Loop, Tool Use, Planning, Memory, Agent Evaluation |
| Data & Engineering Domains | Computer Vision | Aktif | Overview + 11 lesson route |
| Data & Engineering Domains | NLP | Aktif | 5 sub-lesson single page |
| Data & Engineering Domains | Bioinformatics | Scaffold aktif | Bio Data Basics, Genomics Overview, Protein Analysis, Medical AI Risks, Case Study |
| Data & Engineering Domains | Data Engineering | Scaffold aktif | Data Pipeline, ETL/ELT, Warehouse & Lakehouse, Orchestration, Data Quality |
| Data & Engineering Domains | Data Science | Scaffold aktif | Exploratory Analysis, Experimentation, Visualization, Modeling, Insight Storytelling |
| Data & Engineering Domains | Infrastructure | Scaffold aktif | Compute Basics, GPU Environment, Serving Stack, Observability, Scaling |
| Data & Engineering Domains | Deployment | Scaffold aktif | Packaging, API Serving, Release Strategy, Monitoring, Rollback |
| Data & Engineering Domains | Front-end | Scaffold aktif | AI Interface Patterns, Dashboard Basics, Visualization, Accessibility, Frontend Integration |
| Data & Engineering Domains | Back-end | Scaffold aktif | API Design, Database & Auth, Queues, Integrations, Service Scaling |
| Business & Industry Applications | Business Insight | Scaffold aktif | Business Question, Metric Design, Insight Pipeline, Decision Support, Executive Storytelling |
| Business & Industry Applications | People & Business Mgt | Scaffold aktif | AI Adoption, Team Workflow, Change Management, Governance, Operational Strategy |
| Business & Industry Applications | AI for Culture | Scaffold aktif | Cultural Data, Language Preservation, Creative Workflow, Ethics, Case Study |
| Business & Industry Applications | AI for Healthcare | Scaffold aktif | Healthcare Data, Clinical Decision Support, Medical Imaging, Patient Analytics, Safety & Ethics |
| Business & Industry Applications | UI/UX Design Thinking | Scaffold aktif | User Research, AI Journey Mapping, Prototyping, Usability Test, Design Evaluation |
| Business & Industry Applications | AI for Manufacturing | Scaffold aktif | Manufacturing Data, Predictive Maintenance, Quality Inspection, Robotics, Process Optimization |
| Business & Industry Applications | AI for Geospatial | Scaffold aktif | Geospatial Data, Remote Sensing, GIS Intelligence, Spatial Modeling, Location Analytics |

Catatan penting:

- Machine Learning adalah course di category `Foundation & Core AI`, sejajar dengan AI Fundamentals & Advanced dan Math for AI.
- Folder aktif ML sudah dipindah ke `pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/`.
- Folder category/domain langsung di bawah `pages/frontend/fellow-dashboard/` mengikuti UI catalog.
- Folder lama `course-catalog/`, `ai-fundamental/`, dan `ai-lab/` bukan path aktif peserta dan jangan dibuat ulang.

---

## Struktur Direktori Kurikulum Saat Ini

```text
pages/frontend/fellow-dashboard/
  foundation-core-ai/
    ai-fundamentals-advanced/
      overview.html
      ai-fundamentals/
        01-pengantar-ai/
        02-python-untuk-ai/
        03-konsep-ai-modern/
      ai-advanced/                (scaffold)
    math-for-ai/                  (aktif)
    machine-learning/             (aktif)
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
    deep-learning/
    reinforcement-learning/

  generative-multimodal-ai/
    generative-ai.html            (overview draft)
    llm/
    vlm/
    multimodal-llm/
    agentic-ai/

  data-engineering-domains/
    computer-vision.html
    computer-vision/lessons/
    nlp.html
    nlp/lessons/
    bioinformatics/
    data-engineering/
    data-science/
    infrastructure/
    deployment/
    front-end/
    back-end/

  business-industry-applications/
    business-insight/
    people-business-mgt/
    ai-for-culture/
    ai-for-healthcare/
    ui-ux-design-thinking/
    ai-for-manufacturing/
    ai-for-geospatial/

  specialization-tracks/
    computer-vision/
    speech-recognition/
    nlp-llm/
    mlops-deployment/
    multimodal-llm/
    medical-biology-ai/
```

---

## Status AI Fundamentals

| Modul | Materi | Latihan | Kuis | Diskusi | Controller JS | Catatan |
|---|---|---|---|---|---|---|
| 01 - Pengantar AI | Aktif | Template/basic | Basic | Basic | `settings.js` | Route sub-topik memakai `lesson.html` |
| 02 - Python untuk AI | Aktif | Aktif, Pyodide | Aktif | Basic | `ai-python-basic.js` | Modul paling interaktif |
| 03a - Konsep AI Modern | Aktif | Aktif | Aktif | Aktif | `ai-modern.js` | Materi, latihan, kuis, dan diskusi sudah memakai file final |
| 04 - Reasoning | Scaffold diperkaya | Scaffold diperkaya | Scaffold diperkaya | Scaffold diperkaya | `course-placeholder.js` | Empat submateri lengkap di manifest; route tetap `#/participant-ai-reasoning`, belum punya file final |
| 05 - Evaluation | Scaffold | Scaffold | Scaffold | Scaffold | `course-placeholder.js` | Route `#/participant-ai-evaluation`, belum punya file final |
| 06 - Evolution of AI | Scaffold | Scaffold | Scaffold | Scaffold | `course-placeholder.js` | Route `#/participant-ai-evolution`, belum punya file final |

---

## Status AI Lab / Course Catalog

| Category / Domain | Course | Route | Status Konten | Catatan |
|---|---|---|---|---|
| Foundation & Core AI | Machine Learning | `#/participant-ai-lab-ml` | Aktif | File aktif di `foundation-core-ai/machine-learning/` |
| Foundation & Core AI | Math for AI | `#/participant-ai-lab-math` | Aktif | File aktif di `foundation-core-ai/math-for-ai/` |
| Foundation & Core AI | Deep Learning | `#/participant-ai-lab-deep-learning` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Foundation & Core AI | Reinforcement Learning | `#/participant-ai-lab-reinforcement-learning` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Generative & Multimodal AI | Generative AI | `#/participant-ai-lab-gen` | Scaffold aktif | File overview ada; route utama memakai `course-placeholder.html` |
| Generative & Multimodal AI | LLM | `#/participant-ai-lab-llm` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Generative & Multimodal AI | VLM | `#/participant-ai-lab-vlm` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Generative & Multimodal AI | Multimodal LLM | `#/participant-ai-lab-multimodal-llm` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Generative & Multimodal AI | Agentic AI | `#/participant-ai-lab-agentic-ai` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Data & Engineering Domains | Computer Vision | `#/participant-ai-lab-cv` | Aktif | Overview + 11 lesson route |
| Data & Engineering Domains | NLP | `#/participant-ai-lab-nlp` | Aktif | 5 sub-lesson single page |
| Data & Engineering Domains | Bioinformatics | `#/participant-ai-lab-bioinformatics` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Data & Engineering Domains | Data Engineering | `#/participant-ai-lab-data-engineering` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Data & Engineering Domains | Data Science | `#/participant-ai-lab-data-science` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Data & Engineering Domains | Infrastructure | `#/participant-ai-lab-infrastructure` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Data & Engineering Domains | Deployment | `#/participant-ai-lab-deployment` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Data & Engineering Domains | Front-end | `#/participant-ai-lab-front-end` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Data & Engineering Domains | Back-end | `#/participant-ai-lab-back-end` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Business & Industry Applications | Business Insight | `#/participant-ai-lab-business-insight` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Business & Industry Applications | People & Business Mgt | `#/participant-ai-lab-people-business-mgt` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Business & Industry Applications | AI for Culture | `#/participant-ai-lab-ai-culture` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Business & Industry Applications | AI for Healthcare | `#/participant-ai-lab-healthcare` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Business & Industry Applications | UI/UX Design Thinking | `#/participant-ai-lab-ui-ux` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Business & Industry Applications | AI for Manufacturing | `#/participant-ai-lab-manufacturing` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Business & Industry Applications | AI for Geospatial | `#/participant-ai-lab-geospatial` | Scaffold aktif | Route memakai `course-placeholder.html` |

---

## Machine Learning Route Map

Machine Learning adalah course di category `Foundation & Core AI`, bukan module internal AI Fundamentals & Advanced. Semua route berikut sudah aktif dan masuk `participantDashboardPages`.

### Materi

| Route | File HTML | Chapter aktif |
|---|---|---|
| `/participant-ai-lab-machine-learning` | `foundation-core-ai/machine-learning/materi.html` | Saved chapter atau 1 |
| `/participant-ai-lab-ml` | `foundation-core-ai/machine-learning/materi.html` | Saved chapter atau 1 |
| `/participant-ai-lab-ml-intro` | `foundation-core-ai/machine-learning/materi.html` | 1 |
| `/participant-ai-lab-ml-hypothesis` | `foundation-core-ai/machine-learning/materi.html` | 2, legacy alias |
| `/participant-ai-lab-ml-vc-dim` | `foundation-core-ai/machine-learning/materi.html` | 3, legacy alias |
| `/participant-ai-lab-ml-bias-variance` | `foundation-core-ai/machine-learning/materi.html` | 3, legacy alias |
| `/participant-ai-lab-ml-supervised` | `foundation-core-ai/machine-learning/materi.html` | 2 |
| `/participant-ai-lab-ml-regression-classification` | `foundation-core-ai/machine-learning/materi.html` | 3 |
| `/participant-ai-lab-ml-probabilistic` | `foundation-core-ai/machine-learning/materi.html` | 4 |
| `/participant-ai-lab-ml-linear-discriminative` | `foundation-core-ai/machine-learning/materi.html` | 5 |
| `/participant-ai-lab-ml-svm` | `foundation-core-ai/machine-learning/materi.html` | 6 |
| `/participant-ai-lab-ml-neural-networks` | `foundation-core-ai/machine-learning/materi.html` | 7 |
| `/participant-ai-lab-ml-unsupervised` | `foundation-core-ai/machine-learning/materi.html` | 8 |

### Flow Pendukung

| Route | File HTML | Init function |
|---|---|---|
| `/participant-ai-lab-ml-practice` | `foundation-core-ai/machine-learning/latihan.html` | `initAiMlBasic()` |
| `/participant-ai-lab-ml-quiz` | `foundation-core-ai/machine-learning/kuis.html` | `initAiMlQuiz()` |
| `/participant-ai-lab-ml-discussion` | `foundation-core-ai/machine-learning/diskusi.html` | `initAiMlDiscussion()` |

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
| `heraiAiModernCurrentChapter` | Konsep AI Modern | Chapter terakhir dibaca |
| `heraiAiModernPractice` | Konsep AI Modern | Jawaban latihan tersimpan |
| `heraiAiModernQuizDone` | Konsep AI Modern | Flag kuis sudah dikerjakan |
| `heraiAiModernQuizScore` | Konsep AI Modern | Skor kuis |
| `heraiAiModernQuizAnswers` | Konsep AI Modern | Jawaban kuis tersimpan untuk lock single attempt |
| `heraiAiModernDiscussion` | Konsep AI Modern | Thread diskusi |
| `heraiAiMathProgress` | Math for AI | Progress lesson selesai |
| `heraiAiMathCurrentLesson` | Math for AI | Lesson terakhir dibuka |
| `heraiAiMathPractice` | Math for AI | Jawaban latihan tersimpan |
| `heraiAiMathQuizDone` | Math for AI | Flag kuis sudah dikerjakan |
| `heraiAiMathQuizScore` | Math for AI | Skor kuis |
| `heraiAiMathDiscussion` | Math for AI | Thread diskusi |
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

---

## Course Scaffold Saat Ini

Route berikut sudah diarahkan ke reusable scaffold:

```text
pages/frontend/fellow-dashboard/course-placeholder.html
```

Konten dinamisnya di:

```text
js/frontend/fellow-dashboard/course-placeholder.js
```

Catatan activity scaffold:

- `course-placeholder.html` memakai tab standar `Materi -> Latihan -> Kuis -> Diskusi`.
- `js/frontend/fellow-dashboard/course-placeholder.js` adalah manifest tunggal untuk semua course/track/module yang belum final.
- Course yang belum final tidak boleh membuat file canonical `materi.html`, `latihan.html`, `kuis.html`, atau `diskusi.html` dulu. Isi `COURSE_SCAFFOLDS` sampai konten benar-benar siap.
- File final baru dibuat hanya saat materi, latihan, kuis, dan diskusi sudah siap dipindahkan dari scaffold ke folder canonical.
- Tab `Materi` memakai route utama course/track, misalnya `#/participant-ai-lab-gen`.
- Tab activity yang belum final tetap berada di halaman scaffold yang sama memakai query hash:
  - `#/participant-ai-lab-gen?activity=latihan`
  - `#/participant-ai-lab-gen?activity=kuis`
  - `#/participant-ai-lab-gen?activity=diskusi`
- Detail module scaffold memakai query `module` dan `activity`, contoh:
  - `#/participant-ai-lab-gen?module=prompting-workflow&activity=kuis`
- Jangan arahkan tab scaffold non-final ke `#/participant-under-development` kecuali memang user meminta fallback global.

| Route | Course/Track |
|---|---|
| `/participant-ai-reasoning` | Reasoning scaffold aktif dengan konten diperkaya |
| `/participant-ai-evaluation` | Evaluation module scaffold |
| `/participant-ai-evolution` | Evolution of AI module scaffold |
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

---

## Developer Notes

- Jika membuat modul baru, update `js/router.js` di tiga area: `routes`, `participantDashboardPages`, dan init hook di `handleRouting()`.
- Jika menambah CSS untuk Machine Learning, gunakan scope `.ai-ml-*` atau class `.ml-*` yang sudah scoped di halaman ML.
- Jangan mengarahkan ulang route ML ke under-development lagi kecuali memang diminta.
- Jangan mengubah route CV/NLP/Python/Math/GenAI saat mengerjakan ML.
- Untuk Konsep AI Modern, route materi, latihan, kuis, dan diskusi sudah aktif di folder canonical `03-konsep-ai-modern/`.
- Jika membuat file activity final untuk scaffold course, ganti query scaffold menjadi route/file final secara eksplisit dan update dokumen ini.
- Jika course/module belum final, jangan membuat file `materi.html`, `latihan.html`, `kuis.html`, atau `diskusi.html`; isi `COURSE_SCAFFOLDS` dulu.
- Setelah mengubah route scaffold, pastikan route masuk `routes`, `participantDashboardPages`, dan init placeholder tetap terpanggil.
- Setelah menambah/mengubah route, status course, manifest scaffold, konten final, atau struktur folder, wajib update folder `handover/` sebelum commit.
- Minimal dokumen yang diupdate:
  - `handover/HANDOVER_UPDATE.md`
  - `handover/MODULE_STATUS_MAP.md`
  - `handover/COURSE_HIERARCHY.md`
  - `handover/PROMPT_AI_BARU.md`
  - `handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md` jika folder/routing filesystem berubah
- Next step prioritas untuk tim penerus:
  1. Lanjutkan Generative AI lewat `COURSE_SCAFFOLDS` bila konten belum final.
  2. Aktifkan route final hanya kalau `materi`, `latihan`, `kuis`, dan `diskusi` sudah siap.
  3. Jaga route final AI Modern, Math for AI, ML, Python, Pengantar AI, CV, dan NLP.
- Jalankan minimal:

```bash
node --check js/router.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
node --check js/frontend/fellow-dashboard/ai-ml-basic.js
git diff --check
node scripts/check-participant-routes.mjs
```
