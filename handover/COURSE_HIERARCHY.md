# HerAI Course Hierarchy

**Tanggal:** 9 Juli 2026
**Branch:** `design`
**Status dokumen:** source of truth hierarki katalog course peserta

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
- Course bukan selalu folder fisik.
- Track bukan course tunggal; track adalah jalur spesialisasi lintas course.
- Lokasi folder legacy tidak boleh dijadikan sumber kebenaran hierarchy produk.
- Setiap perubahan hierarchy harus update dokumen ini, `MODULE_STATUS_MAP.md`, `HANDOVER_UPDATE.md`, dan commit lokal.

---

## Course Catalog Map

Source UI utama: `pages/frontend/fellow-dashboard/modules.html`.

### Foundation & Core AI

| Course | Label | Route UI | Status | Path aktif / catatan |
|---|---|---|---|---|
| AI Fundamentals & Advanced | Core | `#/participant-ai-fundamentals` | Sebagian aktif | `pages/frontend/fellow-dashboard/ai-fundamentals.html` |
| Math for AI | Foundation | `#/participant-ai-lab-math` | Scaffold aktif | File draft ada di `pages/frontend/fellow-dashboard/ai-lab/math-for-ai/`; route utama memakai `course-placeholder.html` |
| Machine Learning | Core | `#/participant-ai-lab-ml` | Aktif | Legacy path: `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/` |
| Deep Learning | Core | `#/participant-ai-lab-deep-learning` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Reinforcement Learning | Advanced | `#/participant-ai-lab-reinforcement-learning` | Scaffold aktif | Route memakai `course-placeholder.html` |

AI Fundamentals & Advanced berisi module berikut:

| Module | Status | Route |
|---|---|---|
| Pengantar AI | Aktif | `#/participant-ai-intro` |
| Python untuk AI | Aktif | `#/participant-ai-python` |
| Konsep AI Modern | Materi ada, activity belum aktif | `#/participant-ai-modern` |
| Reasoning | Belum ada | - |
| Evaluation | Belum ada | - |
| Evolution of AI | Belum ada | - |

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
| Generative AI | GenAI | `#/participant-ai-lab-gen` | Scaffold aktif | File overview ada di `pages/frontend/fellow-dashboard/ai-lab/generative-ai.html`; route utama memakai `course-placeholder.html` |
| LLM | Language | `#/participant-ai-lab-llm` | Scaffold aktif | Route memakai `course-placeholder.html` |
| VLM | Vision | `#/participant-ai-lab-vlm` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Multimodal LLM | Multimodal | `#/participant-ai-lab-multimodal-llm` | Scaffold aktif | Route memakai `course-placeholder.html` |
| Agentic AI | Agent | `#/participant-ai-lab-agentic-ai` | Scaffold aktif | Route memakai `course-placeholder.html` |

### Data & Engineering Domains

| Course | Label | Route UI | Status | Path aktif / catatan |
|---|---|---|---|---|
| Computer Vision | Vision | `#/participant-ai-lab-cv` | Aktif | Overview `pages/frontend/fellow-dashboard/ai-lab/computer-vision.html`, lessons di `ai-lab/lessons/` |
| NLP | Language | `#/participant-ai-lab-nlp` | Aktif | `pages/frontend/fellow-dashboard/ai-lab/nlp.html` plus NLP lessons |
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

---

## Legacy Path Notes

Machine Learning sekarang course mandiri di katalog, tetapi file aktif masih berada di:

```text
pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/
```

Ini legacy implementation path. Jika nanti dipindah ke struktur yang lebih eksplisit, update minimal:

- `js/router.js`
- `js/frontend/fellow-dashboard/ai-ml-basic.js` (`ML_BASE`)
- `index.html` cache buster jika path/script berubah
- `scripts/check-participant-routes.mjs` bila route checker memakai path statis
- semua link internal HTML ML bila ada path langsung
- `handover/COURSE_HIERARCHY.md`
- `handover/MODULE_STATUS_MAP.md`
- `handover/HANDOVER_UPDATE.md`
- `handover/PROMPT_AI_BARU.md`

Jangan rename folder course besar tanpa commit terpisah dan verifikasi route.
