# HerAI Course Hierarchy

**Tanggal:** 10 Juli 2026
**Branch:** `design`
**Status dokumen:** source of truth hierarki katalog course peserta setelah refactor folder final, standardisasi placeholder scaffold, rombak final Pengantar AI, rombak final Python untuk AI, dan polish UI kuis/code block.

Dokumen ini menjelaskan taxonomy kurikulum HerAI agar tim tidak mencampur istilah category, course, module/chapter, activity, dan specialization track.

---

## Taxonomy Resmi

```text
HerAI Fellowship
  Course Catalog
    Category / Domain
      Course
        Module / Chapter
          Activity: Materi -> Latihan -> Kuis -> Diskusi

  Specialization Tracks
    Track
      Gabungan beberapa course/domain untuk jalur spesialisasi
```

Definisi:

| Istilah | Definisi | Contoh |
|---|---|---|
| Category / Domain | Pengelompokan visual di course catalog | Foundation & Core AI |
| Course | Unit belajar utama yang dipilih peserta | Machine Learning |
| Module / Chapter | Unit materi di dalam course | Supervised Learning |
| Activity | Flow belajar di dalam course/module | Materi, Latihan, Kuis, Diskusi |
| Specialization Track | Jalur spesialisasi yang dapat menggabungkan beberapa course/domain | NLP & LLM Track |

Aturan penting:

- Category bukan course.
- Course berada di dalam category/domain catalog. Contoh: Machine Learning adalah course di bawah `Foundation & Core AI`.
- Course bukan selalu folder fisik; folder fisik hanya detail implementasi.
- Track bukan course tunggal; track adalah jalur spesialisasi lintas course.
- Lokasi folder legacy tidak boleh dijadikan sumber kebenaran hierarchy produk.
- Folder implementation canonical langsung di bawah `pages/frontend/fellow-dashboard/{category-slug}/{course-slug}/`.
- Jangan buat ulang folder `course-catalog/`, `ai-fundamental/`, atau `ai-lab/` sebagai path aktif.
- Setiap perubahan hierarchy harus update dokumen ini, `MODULE_STATUS_MAP.md`, `HANDOVER_UPDATE.md`, dan commit lokal.

Checkpoint detail rename/folder/routing ada di:

```text
handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
```

---

## Checkpoint Implementasi Terbaru

Checkpoint final terbaru:

- Hierarchy produk tidak berubah.
- `01 - Pengantar AI` tetap module aktif di `AI Fundamentals & Advanced`, dengan activity `Materi -> Latihan -> Kuis -> Diskusi`.
- `02 - Python untuk AI` tetap module aktif di `AI Fundamentals & Advanced`, sekarang 13 chapter final.
- `04 - Reasoning` masih scaffold aktif di branch ini dan menjadi area kerja tim lain. Jika tim lain membuat Reasoning final, merge harus menjaga route final Pengantar AI, Python untuk AI, Konsep AI Modern, Math, ML, CV, dan NLP.
- Dokumen merge khusus untuk tim Reasoning: `handover/MERGE_GUIDE_REASONING_TEAM.md`.
- Tidak ada perubahan folder canonical untuk Python atau Pengantar AI.

Commit lokal terbaru:

```text
6eb03f8 feat: expand ai introduction lesson content
```

Checkpoint final sesi Pengantar AI:

- `01 - Pengantar AI` selesai dirombak berdasarkan `materi/baru/pengantar-ai-baru.md`.
- Setelah review user, konten runtime diperluas lagi agar tidak terasa terlalu ringkas.
- Daftar materi Pengantar AI sekarang 5 chapter padat dan semuanya memakai route yang sudah tersedia.
- Update terbaru setelah commit `6eb03f8`: penomoran subbagian runtime sudah dibetulkan agar mengikuti nomor chapter aktif. Chapter 3 memakai `3.x`, Chapter 4 memakai `4.x`, dan Chapter 5 memakai `5.x`.
- Chapter 3-5 juga diperdalam dengan studi kasus dan rubrik tambahan tanpa mengubah hierarchy produk.
- Tidak ada perubahan hierarchy produk:
  - Category tetap `Foundation & Core AI`
  - Course tetap `AI Fundamentals & Advanced`
  - Module tetap `01 - Pengantar AI`
  - Activity tetap `Materi -> Latihan -> Kuis -> Diskusi`
- Tidak ada perubahan `js/router.js`, folder canonical, atau struktur navigation shell.
- Verifikasi terakhir: route checker `Total: 110 | 110 passed | 0 failed`.
- Request Python terbaru sudah dikerjakan: module `02 - Python untuk AI` sekarang memakai 13 chapter final dari materi brainstorming.

Checkpoint lokal terbaru setelah commit tersebut:

- Pengantar AI sudah dirombak final dari materi sumber `materi/baru/pengantar-ai-baru.md`.
- Snapshot terbaru konten Pengantar AI ada di `materi/pengantar-ai.md`.
- Arsip bahan tetap ada di `materi/lama/pengantar-ai.md` dan `materi/baru/pengantar-ai-baru.md`.
- Struktur hierarchy produk tidak berubah:
  - Category: `Foundation & Core AI`
  - Course: `AI Fundamentals & Advanced`
  - Module: `01 - Pengantar AI`
  - Activity: `Materi -> Latihan -> Kuis -> Diskusi`
- Route peserta tidak berubah.
- Folder canonical Pengantar AI tetap:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/
```

Topik runtime Pengantar AI terbaru:

1. AI di Sekitar Kita
2. Definisi Modern AI
3. Software Biasa vs Sistem AI
4. Model Mental Cara Kerja AI
5. Training, Inferensi, dan Human Check
6. Peta Istilah AI, ML, DL, dan ANI
7. Penerapan AI dalam Kehidupan
8. Manfaat dan Keterbatasan AI
9. Bias, Halusinasi, Privasi, dan Black Box
10. Audit Sistem Sosio-Teknis

Aktivitas Pengantar AI terbaru:

- `materi.html`: materi utama runtime Topik 1.
- `settings.js`: daftar chapter dan konten generated lesson untuk Chapter 2-5.
- `latihan.html`: proyek mini audit sistem sosio-teknis.
- `kuis.html`: 10 soal single attempt.
- `diskusi.html`: skenario bias rekrutmen, halusinasi hukum, dan optimasi navigasi.

Ringkasan state kurikulum saat ini:

- AI Fundamentals & Advanced sebagian aktif:
  - Pengantar AI aktif
  - Python untuk AI aktif
  - Konsep AI Modern aktif untuk materi, latihan, kuis, dan diskusi
  - Reasoning, Evaluation, dan Evolution of AI scaffold aktif
- Math for AI aktif final dan tidak lagi masuk manifest scaffold.
- Machine Learning aktif final dengan 8 chapter, latihan, kuis, dan diskusi.
- Computer Vision dan NLP aktif.
- Semua course/track/module yang belum final memakai `course-placeholder.html` dan manifest `COURSE_SCAFFOLDS`.
- Route checker terakhir: `Total: 110 | 110 passed | 0 failed`.
- Folder `materi/` di root repo adalah area handoff konten, bukan bagian hierarchy produk atau route peserta.
- Snapshot Pengantar AI terbaru ada di `materi/pengantar-ai.md`.
- Snapshot Python untuk AI terbaru ada di `materi/python-untuk-ai.md`.
- Pengantar AI sudah memakai materi final baru di runtime tanpa perubahan hierarchy, route, atau folder canonical.
- Python untuk AI sudah memakai materi final baru di runtime tanpa perubahan route atau folder canonical.
- UI lintasan belajar sudah dipoles:
  - kuis Pengantar AI dan Python memakai full-card clickable;
  - code block Python memakai background pink-light, bukan terminal hitam;
  - materi Python punya panel `Belajar Aktif` di setiap chapter.

Aturan scaffold resmi:

- Course/module belum final tidak boleh membuat file canonical `materi.html`, `latihan.html`, `kuis.html`, atau `diskusi.html`.
- Isi dulu manifest `COURSE_SCAFFOLDS` di `js/frontend/fellow-dashboard/course-placeholder.js`.
- File final baru dibuat saat konten benar-benar siap dan route dipindahkan dari scaffold ke folder canonical.
- Setelah menambah/mengubah route, course, module, activity, manifest scaffold, atau folder canonical, wajib update folder `handover/` sebelum commit.
- Query activity dan module scaffold:
  - `#/participant-ai-lab-gen?activity=latihan`
  - `#/participant-ai-lab-gen?module=prompting-workflow&activity=kuis`

Next step untuk tim penerus:

1. Jika tugasnya revisi lanjutan Pengantar AI, baca `materi/pengantar-ai.md` dan edit file canonical Pengantar AI tanpa mengubah route/layout besar.
2. Jika tugasnya revisi lanjutan Python untuk AI, lanjutkan di folder canonical dan jaga struktur 13 chapter final:
   - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/`
   - `js/frontend/fellow-dashboard/ai-python-basic.js`
3. Jika task berikutnya adalah merge Reasoning dari tim lain, baca `handover/MERGE_GUIDE_REASONING_TEAM.md` terlebih dahulu.
4. Jika task berikutnya bukan Python untuk AI, Pengantar AI, atau merge Reasoning, prioritaskan Generative AI sesuai backlog sebelumnya.
5. Jika konten belum final, update manifest scaffold saja.
6. Jika konten sudah final, buat file activity lengkap di folder canonical dan update route.
7. Jangan mengubah route final existing tanpa task spesifik.
8. Setelah selesai, update `HANDOVER_UPDATE.md`, `MODULE_STATUS_MAP.md`, `COURSE_HIERARCHY.md`, `PROMPT_AI_BARU.md`, dan dokumen filesystem bila folder/routing berubah.

---

## Canonical Product Tree

Struktur di bawah ini mengikuti UI `pages/frontend/fellow-dashboard/modules.html` dan menjadi acuan hierarchy produk. Category/domain adalah parent visual di catalog; course adalah card yang dipilih peserta; module/chapter adalah isi di dalam course.

```text
Course Catalog
  Foundation & Core AI
    AI Fundamentals & Advanced
      Pengantar AI
      Python untuk AI
      Konsep AI Modern
      Reasoning
      Evaluation
      Evolution of AI

    Math for AI
      Linear Algebra
      Statistics
      Probability
      Calculus
      Optimization
      Case Study

    Machine Learning
      Pengantar Machine Learning
      Supervised Learning
      Regresi & Klasifikasi Dasar
      Probabilistic Models
      Linear Discriminative Models
      Support Vector Machine
      Neural Networks
      Unsupervised Learning

    Deep Learning
      Neural Network Basics
      Training & Backpropagation
      CNN/RNN Overview
      Transformer Basics
      Regularization

    Reinforcement Learning
      Agent & Environment
      Reward and Policy
      Value Function
      Exploration vs Exploitation
      Case Study

  Generative & Multimodal AI
    Generative AI
      Generative AI Overview
      Prompting Workflow
      Diffusion & GAN Basics
      Output Evaluation
      Creative Workflow

    LLM
      Transformer Recap
      Prompting & Instruction
      RAG Basics
      Fine-tuning Overview
      Deployment Notes

    VLM
      Image-Text Alignment
      Captioning
      Visual Question Answering
      Evaluation
      Use Cases

    Multimodal LLM
      Multimodal Inputs
      Cross-modal Learning
      Fusion Strategies
      Evaluation
      Product Patterns

    Agentic AI
      Agent Loop
      Tool Use
      Planning
      Memory
      Agent Evaluation

  Data & Engineering Domains
    Computer Vision
      Computer Vision Overview
      CNN Introduction
      Why CNN Works
      ReLU and Activation
      Filtering Kernels
      Fully Connected Layer
      CNN Hands-on
      CNN Architecture
      Morphological Transforms
      Image Processing with OpenCV
      Pixel Anatomy
      CNN Architecture Builder

    NLP
      Tokenization
      Preprocessing
      POS & NER
      Bag of Words
      TF-IDF

    Bioinformatics
      Bio Data Basics
      Genomics Overview
      Protein Analysis
      Medical AI Risks
      Case Study

    Data Engineering
      Data Pipeline
      ETL/ELT
      Warehouse & Lakehouse
      Orchestration
      Data Quality

    Data Science
      Exploratory Analysis
      Experimentation
      Visualization
      Modeling
      Insight Storytelling

    Infrastructure
      Compute Basics
      GPU Environment
      Serving Stack
      Observability
      Scaling

    Deployment
      Packaging
      API Serving
      Release Strategy
      Monitoring
      Rollback

    Front-end
      AI Interface Patterns
      Dashboard Basics
      Visualization
      Accessibility
      Frontend Integration

    Back-end
      API Design
      Database & Auth
      Queues
      Integrations
      Service Scaling

  Business & Industry Applications
    Business Insight
      Business Question
      Metric Design
      Insight Pipeline
      Decision Support
      Executive Storytelling

    People & Business Mgt
      AI Adoption
      Team Workflow
      Change Management
      Governance
      Operational Strategy

    AI for Culture
      Cultural Data
      Language Preservation
      Creative Workflow
      Ethics
      Case Study

    AI for Healthcare
      Healthcare Data
      Clinical Decision Support
      Medical Imaging
      Patient Analytics
      Safety & Ethics

    UI/UX Design Thinking
      User Research
      AI Journey Mapping
      Prototyping
      Usability Test
      Design Evaluation

    AI for Manufacturing
      Manufacturing Data
      Predictive Maintenance
      Quality Inspection
      Robotics
      Process Optimization

    AI for Geospatial
      Geospatial Data
      Remote Sensing
      GIS Intelligence
      Spatial Modeling
      Location Analytics
```

Activity default di dalam course/module adalah:

```text
Materi -> Latihan -> Kuis -> Diskusi
```

Catatan implementasi saat ini:

- Course aktif seperti Machine Learning dapat memakai satu activity gabungan per course. Contoh ML: materi berisi 8 chapter, latihan berisi 10 skenario, kuis berisi 24 soal, diskusi berisi 8 prompt.
- Pengantar AI aktif memakai campuran file HTML dan generated content:
  - `01-pengantar-ai/materi.html` untuk materi intro utama.
  - `js/frontend/fellow-dashboard/settings.js` bagian `generatedLessonContent` untuk topik lanjutan.
  - `latihan.html`, `kuis.html`, dan `diskusi.html` untuk activity pendukung.
  - Snapshot copy-paste terbaru ada di `materi/pengantar-ai.md`.
- Course scaffold memakai outline module/chapter awal dari manifest `COURSE_SCAFFOLDS` di `js/frontend/fellow-dashboard/course-placeholder.js`.
- Course scaffold tetap menampilkan tab standar `Materi -> Latihan -> Kuis -> Diskusi`; activity yang belum final memakai query hash pada route scaffold, misalnya `#/participant-ai-lab-gen?activity=latihan`, agar peserta tidak dilempar ke `under-development.html`.
- Detail module scaffold memakai query `module` dan `activity`, misalnya `#/participant-ai-lab-gen?module=prompting-workflow&activity=kuis`.
- Course/module belum final tidak boleh membuat file canonical `materi.html`, `latihan.html`, `kuis.html`, atau `diskusi.html`. Isi manifest scaffold dulu; file final baru dibuat kalau konten benar-benar siap.
- Jika nanti activity dibuat per chapter, hierarchy produk tetap sama; yang berubah hanya kedalaman implementasi activity.

---

## Course Catalog Map

Source UI utama: `pages/frontend/fellow-dashboard/modules.html`.

### Foundation & Core AI

| Course | Label | Route UI | Status | Path aktif / catatan |
|---|---|---|---|---|
| AI Fundamentals & Advanced | Core | `#/participant-ai-fundamentals` | Sebagian aktif + scaffold | `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/overview.html`; Reasoning/Evaluation/Evolution route memakai scaffold |
| Math for AI | Foundation | `#/participant-ai-lab-math` | Aktif | `pages/frontend/fellow-dashboard/foundation-core-ai/math-for-ai/` |
| Machine Learning | Core | `#/participant-ai-lab-ml` | Aktif | `pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/` |
| Deep Learning | Core | `#/participant-ai-lab-deep-learning` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Reinforcement Learning | Advanced | `#/participant-ai-lab-reinforcement-learning` | Scaffold aktif | Route memakai `course-placeholder.html` |

AI Fundamentals & Advanced berisi module berikut:

| Module | Status | Route |
|---|---|---|
| Pengantar AI | Aktif | `#/participant-ai-intro` |
| Python untuk AI | Aktif | `#/participant-ai-python` |
| Konsep AI Modern | Aktif | `#/participant-ai-modern` |
| Reasoning | Scaffold aktif | `#/participant-ai-reasoning` |
| Evaluation | Scaffold aktif | `#/participant-ai-evaluation` |
| Evolution of AI | Scaffold aktif | `#/participant-ai-evolution` |

Machine Learning berisi chapter berikut:

| Chapter | Route canonical | File |
|---|---|---|
| Pengantar Machine Learning | `#/participant-ai-lab-ml-intro` | `chapter-1.html` |
| Supervised Learning | `#/participant-ai-lab-ml-supervised` | `chapter-2.html` |
| Regresi & Klasifikasi Dasar | `#/participant-ai-lab-ml-regression-classification` | `chapter-3.html` |
| Probabilistic Models | `#/participant-ai-lab-ml-probabilistic` | `chapter-4.html` |
| Linear Discriminative Models | `#/participant-ai-lab-ml-linear-discriminative` | `chapter-5.html` |
| Support Vector Machine | `#/participant-ai-lab-ml-svm` | `chapter-6.html` |
| Neural Networks | `#/participant-ai-lab-ml-neural-networks` | `chapter-7.html` |
| Unsupervised Learning | `#/participant-ai-lab-ml-unsupervised` | `chapter-8.html` |

### Generative & Multimodal AI

| Course | Label | Route UI | Status | Path aktif / catatan |
|---|---|---|---|---|
| Generative AI | GenAI | `#/participant-ai-lab-gen` | Scaffold aktif | File overview ada di `pages/frontend/fellow-dashboard/generative-multimodal-ai/generative-ai.html`; route utama memakai `course-placeholder.html` |
| LLM | Language | `#/participant-ai-lab-llm` | Scaffold aktif | Route memakai `course-placeholder.html` |
| VLM | Vision | `#/participant-ai-lab-vlm` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Multimodal LLM | Multimodal | `#/participant-ai-lab-multimodal-llm` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Agentic AI | Agent | `#/participant-ai-lab-agentic-ai` | Scaffold aktif | Route memakai `course-placeholder.html` |

### Data & Engineering Domains

| Course | Label | Route UI | Status | Path aktif / catatan |
|---|---|---|---|---|
| Computer Vision | Vision | `#/participant-ai-lab-cv` | Aktif | Overview `pages/frontend/fellow-dashboard/data-engineering-domains/computer-vision.html`, lessons di `data-engineering-domains/computer-vision/lessons/` |
| NLP | Language | `#/participant-ai-lab-nlp` | Aktif | `pages/frontend/fellow-dashboard/data-engineering-domains/nlp.html` plus NLP lessons |
| Bioinformatics | Science | `#/participant-ai-lab-bioinformatics` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Data Engineering | Data | `#/participant-ai-lab-data-engineering` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Data Science | Data | `#/participant-ai-lab-data-science` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Infrastructure | Infra | `#/participant-ai-lab-infrastructure` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Deployment | Ops | `#/participant-ai-lab-deployment` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Front-end | Product | `#/participant-ai-lab-front-end` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Back-end | Product | `#/participant-ai-lab-back-end` | Scaffold aktif | Route memakai `course-placeholder.html` |

### Business & Industry Applications

| Course | Label | Route UI | Status | Path aktif / catatan |
|---|---|---|---|---|
| Business Insight | Business | `#/participant-ai-lab-business-insight` | Scaffold aktif | Route memakai `course-placeholder.html` |
| People & Business Mgt | Management | `#/participant-ai-lab-people-business-mgt` | Scaffold aktif | Route memakai `course-placeholder.html` |
| AI for Culture | Culture | `#/participant-ai-lab-ai-culture` | Scaffold aktif | Route memakai `course-placeholder.html` |
| AI for Healthcare | Health | `#/participant-ai-lab-healthcare` | Scaffold aktif | Route memakai `course-placeholder.html` |
| UI/UX Design Thinking | Design | `#/participant-ai-lab-ui-ux` | Scaffold aktif | Route memakai `course-placeholder.html` |
| AI for Manufacturing | Industry | `#/participant-ai-lab-manufacturing` | Scaffold aktif | Route memakai `course-placeholder.html` |
| AI for Geospatial | Geospatial | `#/participant-ai-lab-geospatial` | Scaffold aktif | Route memakai `course-placeholder.html` |

---

## Specialization Tracks

Specialization track adalah jalur spesialisasi, bukan course tunggal. Track dapat merujuk ke beberapa course yang sudah ada atau course yang akan dibuat.

| Track | Fokus | Route UI | Status |
|---|---|---|---|
| Computer Vision | Image Processing, Object Detection & Recognition | `#/participant-specialization-computer-vision` | Scaffold aktif; course CV aktif terpisah |
| Speech Recognition | Voice Processing, Audio Analysis, ASR, TTS | `#/participant-specialization-speech-recognition` | Scaffold aktif |
| NLP & LLM | Text Generation, Semantic Understanding, RAG | `#/participant-specialization-nlp-llm` | Scaffold aktif; course NLP aktif terpisah |
| MLOps & Deployment | Cloud Computing, Model Deployment, Scalability | `#/participant-specialization-mlops-deployment` | Scaffold aktif |
| Multimodal LLM | VLM, Cross-modal Learning, World Models | `#/participant-specialization-multimodal-llm` | Scaffold aktif |
| Medical & Biology AI | Genomics, Protein Analysis, Computational Biology | `#/participant-specialization-medical-biology-ai` | Scaffold aktif |

---

## Status Semantics

| Status | Arti |
|---|---|
| Aktif | Route peserta aktif dan konten dapat diakses dari app |
| Sebagian aktif | Sebagian module/activity aktif, sebagian masih under-development |
| Under-development | File/draft bisa ada, tetapi route peserta belum diarahkan ke konten aktif |
| Placeholder | Card UI ada, tetapi belum ada route/konten course aktif |
| Scaffold aktif | Route peserta sudah diarahkan ke `course-placeholder.html` dengan outline awal |
| Sebagian aktif + scaffold | Sebagian module sudah final, module sisanya memakai scaffold manifest |

---

## Implementation Path Notes

Folder canonical untuk course catalog sekarang ada di:

```text
pages/frontend/fellow-dashboard/
```

Machine Learning adalah course aktif di bawah category `Foundation & Core AI` dan file aktifnya berada di:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/
```

Folder lama `course-catalog/`, `ai-fundamental/`, dan `ai-lab/` tidak lagi dipakai sebagai path aktif peserta. Konten aktif sudah ditempatkan langsung di folder category/domain.

Jika nanti course aktif lain dibuat atau dipindahkan di struktur canonical, update minimal:

- `js/router.js`
- controller JS terkait, misalnya `js/frontend/fellow-dashboard/ai-ml-basic.js` (`ML_BASE`)
- `index.html` cache buster jika path/script berubah
- `scripts/check-participant-routes.mjs` bila route checker memakai path statis
- semua link internal HTML bila ada path langsung
- `handover/COURSE_HIERARCHY.md`
- `handover/MODULE_STATUS_MAP.md`
- `handover/HANDOVER_UPDATE.md`
- `handover/PROMPT_AI_BARU.md`
- `handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md` jika rename/folder/routing ikut berubah

Jangan rename folder course besar tanpa commit terpisah dan verifikasi route.
