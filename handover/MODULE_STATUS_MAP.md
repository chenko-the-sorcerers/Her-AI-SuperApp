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
  Category / Domain
    Course
      Module / Chapter
        Materi -> Latihan -> Kuis -> Diskusi
```

Detail lengkap category, course, module/chapter, activity, dan specialization track ada di `handover/COURSE_HIERARCHY.md`.

Course utama yang terlihat di katalog peserta, dikelompokkan sesuai category/domain UI:

| Category / Domain | Course | Status | Isi utama |
|---|---|---|---|
| Foundation & Core AI | AI Fundamentals & Advanced | Sebagian aktif | Pengantar AI, Python untuk AI, Konsep AI Modern, Reasoning, Evaluation, Evolution of AI |
| Foundation & Core AI | Math for AI | Scaffold aktif | Linear Algebra, Statistics, Probability, Calculus, Optimization, Case Study |
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
- Folder aktif ML sudah dipindah ke `pages/frontend/fellow-dashboard/course-catalog/foundation-core-ai/machine-learning/`.
- Folder `course-catalog/` sudah dibuat mengikuti category/domain UI untuk semua course agar hierarchy produk terlihat di codebase.
- Folder `ai-fundamental/` sekarang hanya menyimpan module internal AI Fundamentals & Advanced yang sudah ada.

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

pages/frontend/fellow-dashboard/course-catalog/
  foundation-core-ai/
    ai-fundamentals-advanced/     (scaffold folder; active overview masih ai-fundamentals.html)
    math-for-ai/                  (scaffold folder; draft lama masih di ai-lab/math-for-ai/)
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
    generative-ai/
    llm/
    vlm/
    multimodal-llm/
    agentic-ai/

  data-engineering-domains/
    computer-vision/
    nlp/
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

## Status AI Lab / Course Catalog

| Category / Domain | Course | Route | Status Konten | Catatan |
|---|---|---|---|---|
| Foundation & Core AI | Machine Learning | `#/participant-ai-lab-ml` | Aktif | File aktif di `course-catalog/foundation-core-ai/machine-learning/` |
| Foundation & Core AI | Math for AI | `#/participant-ai-lab-math` | Scaffold aktif | File draft ada dari Nazril; route utama memakai `course-placeholder.html` |
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
| `/participant-ai-lab-machine-learning` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | Saved chapter atau 1 |
| `/participant-ai-lab-ml` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | Saved chapter atau 1 |
| `/participant-ai-lab-ml-intro` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | 1 |
| `/participant-ai-lab-ml-hypothesis` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | 2, legacy alias |
| `/participant-ai-lab-ml-vc-dim` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | 3, legacy alias |
| `/participant-ai-lab-ml-bias-variance` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | 3, legacy alias |
| `/participant-ai-lab-ml-supervised` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | 2 |
| `/participant-ai-lab-ml-regression-classification` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | 3 |
| `/participant-ai-lab-ml-probabilistic` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | 4 |
| `/participant-ai-lab-ml-linear-discriminative` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | 5 |
| `/participant-ai-lab-ml-svm` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | 6 |
| `/participant-ai-lab-ml-neural-networks` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | 7 |
| `/participant-ai-lab-ml-unsupervised` | `course-catalog/foundation-core-ai/machine-learning/materi.html` | 8 |

### Flow Pendukung

| Route | File HTML | Init function |
|---|---|---|
| `/participant-ai-lab-ml-practice` | `course-catalog/foundation-core-ai/machine-learning/latihan.html` | `initAiMlBasic()` |
| `/participant-ai-lab-ml-quiz` | `course-catalog/foundation-core-ai/machine-learning/kuis.html` | `initAiMlQuiz()` |
| `/participant-ai-lab-ml-discussion` | `course-catalog/foundation-core-ai/machine-learning/diskusi.html` | `initAiMlDiscussion()` |

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

## Course Scaffold Saat Ini

Route berikut sudah diarahkan ke reusable scaffold:

```text
pages/frontend/fellow-dashboard/course-placeholder.html
```

Konten dinamisnya di:

```text
js/frontend/fellow-dashboard/course-placeholder.js
```

| Route | Course/Track |
|---|---|
| `/participant-ai-lab-math` | Math for AI |
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
- Jalankan minimal:

```bash
node --check js/router.js
node --check js/frontend/fellow-dashboard/ai-ml-basic.js
git diff --check
node scripts/check-participant-routes.mjs
```
