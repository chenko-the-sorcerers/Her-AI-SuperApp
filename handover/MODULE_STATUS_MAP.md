# Peta Status Kurikulum HerAI

**Tanggal:** 11 Juli 2026
**Branch:** `design`
**Status dokumen:** update setelah Reasoning final baru dari `materi/baru/Reasoning-baru.md`, Reasoning canonical final, snapshot materi lama Reasoning untuk deep research, full curriculum placeholder scaffold, aktivasi Math for AI, activity final Konsep AI Modern, scaffold activity tabs, migrasi Machine Learning full content, klarifikasi hierarchy course, refactor filesystem/routing final, rombak final Pengantar AI, rombak final Python untuk AI, polish UI kuis/code block, merge Reasoning scaffold, dan audit final.

Dokumen ini memetakan status course, module/chapter, dan route agar developer berikutnya tahu mana yang aktif, mana yang masih under-development, dan route mana yang perlu dijaga.

Detail implementasi, bug, kontrak runtime, dan hasil smoke test Reasoning final ada di `handover/REASONING_FINAL_CHECKPOINT.md`.

Source of truth hierarki katalog course ada di:

```text
handover/COURSE_HIERARCHY.md
handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
```

---

## Checkpoint Terbaru

Checkpoint final terbaru 11 Juli 2026:

- `01 - Pengantar AI` aktif final terbaru. Kuisnya sekarang full-card clickable, single attempt, dan locked state jelas dengan kartu benar/salah setelah submit.
- `02 - Python untuk AI` aktif final terbaru dengan 13 chapter runtime, panel `Belajar Aktif` per chapter, latihan Pyodide plus mini project preprocessing teks, kuis 15 soal full-card clickable, dan diskusi final. Audit terbaru memperbaiki string newline pada mini project latihan nomor 7 agar Run Code Pyodide berhasil.
- UX terbaru Python: CTA mini challenge di panel `Belajar Aktif` sekarang eksplisit menunjuk `Latihan N - Topik` yang relevan, memakai hash query `#/participant-ai-python-practice?focus=play-N`. Kartu latihan canonical memiliki `data-practice-focus="play-N"` dan akan diberi highlight + catatan konteks saat dibuka dari materi.
- `AGENTS.md` sudah memuat aturan baru: course tidak boleh teks polos, kuis harus full-card clickable, code block materi harus pink-light, dan tema HerAI pink harus konsisten.
- `04 - Reasoning` sudah final canonical baru dari `materi/baru/Reasoning-baru.md` di folder `04-reasoning/`: teks sumber markdown dirender utuh ke `chapters/*-full.html` tanpa dikompres, lalu dipresentasikan sebagai visual learning canvas dengan toggle Visual/Source, navigation chips, numbered knowledge cards, tabel responsif, dan 5 lab interaktif khusus chapter. Modul juga memuat quick check interaktif, latihan/proyek akhir sumber + 6 latihan save/edit/reset, kuis sumber + 15 soal full-card clickable single attempt, dan diskusi sumber + thread lokal. Route final: `#/participant-ai-reasoning`, `#/participant-ai-reasoning-practice`, `#/participant-ai-reasoning-quiz`, `#/participant-ai-reasoning-discussion`.
- Checkpoint `8007acb`: halaman latihan sekarang menampilkan satu dari 6 skenario dengan tiga textarea berlabel, navigator, completed state, prev/next, save/edit/reset; halaman kuis menampilkan satu dari 15 soal dengan answered counter dan navigator. Workspace selalu muncul sebelum panel referensi sumber utuh.
- Snapshot lengkap konten lama Reasoning untuk brainstorming ada di `materi/lama/reasoning.md`. Isinya tidak dikompres: overview, seluruh materi, latihan + pembahasan, kuis + kunci + pembahasan, diskusi, dan referensi dari runtime saat ini. File ini bukan route aktif.
- Prompt handoff untuk AI berikutnya setelah materi Reasoning baru selesai dibuat ada di `handover/PROMPT_REASONING_MATERI_BARU.md`.
- Merge Reasoning sudah committed di `b0c6829`; audit/fix terbaru sudah committed di `c93a5fb`.
- Browser smoke test sudah mencakup materi Python, practice Pyodide, kuis Python, kuis Pengantar AI, diskusi Python, dan Reasoning scaffold/activity query. Tidak ada horizontal overflow pada desktop/mobile route yang diuji.
- Verifikasi routing awal setelah Reasoning canonical: `node scripts/check-participant-routes.mjs` dengan `Total: 113 | 113 passed | 0 failed`.

Commit lokal terbaru:

```text
5298a96 fix: link python active labs to focused practice
551654c fix: show intro quiz review states
75125a8 feat: finalize reasoning course routes
c93a5fb fix: audit python module polish
b0c6829 merge: integrate reasoning scaffold updates
c1870d4 feat: finalize python ai module and merge handover
```

Checkpoint final sesi Pengantar AI:

- User meminta materi Pengantar AI tidak dikompres dan ingin semua bagian dibuat lebih rinci.
- Daftar materi runtime Pengantar AI dikonsolidasikan menjadi 5 chapter padat setelah user menilai 10 topik terasa terlalu tipis.
- Semua topik Pengantar AI sekarang aktif melalui route yang sudah ada di `js/router.js`; tidak ada route baru.
- `settings.js` memuat `introLessonRoutes` dan `generatedLessonContent` untuk seluruh topik.
- `materi.html`, `latihan.html`, dan `kuis.html` sudah disesuaikan dengan struktur 5 chapter padat.
- Snapshot terbaru ada di `materi/pengantar-ai.md`.
- Update setelah commit `6eb03f8`: bug penomoran Chapter 3 yang tampil sebagai `2.1` sudah diperbaiki. Chapter aktif sekarang memakai penomoran konsisten: Chapter 3 `3.1-3.12`, Chapter 4 `4.1-4.12`, Chapter 5 `5.1-5.13`.
- Chapter 3-5 diperdalam lagi:
  - Chapter 3: studi kasus chatbot pendidikan, kredit mikro, filter wajah, dan pola kesalahan.
  - Chapter 4: penerapan AI di pendidikan, kesehatan, keamanan siber, bisnis, dan matriks penerapan.
  - Chapter 5: rubrik skor risiko, template jawaban audit, contoh audit, dan kebiasaan kritis untuk modul lanjutan.
- Verifikasi terakhir lulus:
  - `node --check js/router.js`
  - `node --check js/frontend/fellow-dashboard/settings.js`
  - `git diff --check`
  - `node scripts/check-participant-routes.mjs` -> `Total: 110 | 110 passed | 0 failed`
- Python untuk AI sekarang sudah dirombak final menjadi 13 chapter berdasarkan materi brainstorming terbaru.

Ringkasan checkpoint kerja sesi ini:

- Scope utama: rombak final konten `01 - Pengantar AI`.
- Materi sumber final: `materi/baru/pengantar-ai-baru.md`.
- Baseline lama yang dibaca: `materi/lama/pengantar-ai.md`.
- Snapshot terbaru yang dibuat/sinkron: `materi/pengantar-ai.md`.
- Route dan folder canonical tidak berubah.
- `js/router.js` tidak diubah.
- Design system dan layout besar dipertahankan.
- Pengantar AI sekarang berstatus `Aktif final terbaru`.

Update lokal terbaru setelah commit tersebut:

- Folder `materi/` dibuat sebagai area handoff konten non-runtime.
- File `materi/pengantar-ai.md` disinkronkan sebagai snapshot terbaru materi `Pengantar AI`.
- Materi final dari `materi/baru/pengantar-ai-baru.md` sudah masuk ke runtime Pengantar AI.
- Runtime yang berubah: `materi.html`, `settings.js` bagian Pengantar AI, `latihan.html`, `kuis.html`, dan `diskusi.html`.
- Tidak ada perubahan route, folder canonical, sidebar, topbar, breadcrumb, lesson tabs, right panel, atau footer nav.
- Pengantar AI tetap berstatus aktif dan folder canonical tetap di `foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/`.
- Struktur Pengantar AI terbaru terdiri dari 5 chapter padat: AI di Sekitar Kita dan Fondasi Awal; Definisi, Software Biasa, dan Sistem AI; Cara Kerja AI: Data, Model, dan Human Check; Peta Istilah dan Penerapan AI; Risiko, Etika, dan Audit Sosio-Teknis.
- Kuis Pengantar AI sekarang 10 soal single attempt; latihan menjadi proyek mini audit sistem sosio-teknis; diskusi memakai skenario bias rekrutmen, halusinasi hukum, dan optimasi navigasi.
- Verifikasi setelah rombak Pengantar AI: `node --check js/router.js`, `node --check js/frontend/fellow-dashboard/settings.js`, `git diff --check`, dan `node scripts/check-participant-routes.mjs` lulus. Route checker: `Total: 110 | 110 passed | 0 failed`.

Rincian perubahan Pengantar AI:

| Area | Sebelum | Sekarang |
|---|---|---|
| Materi utama | Definisi umum, sejarah, contoh harian, AI/ML/DL | AI sebagai sistem prediktif, software biasa vs AI, contoh harian, kebiasaan berpikir kritis |
| Topik lanjutan | Jenis & komponen AI, penerapan & masa depan, ringkasan | 4 chapter lanjutan detail via `lesson.html`: definisi/software, cara kerja AI, peta istilah/penerapan, risiko/etika/audit |
| Latihan | Refleksi ANI/AGI/hierarki | Audit sistem sosio-teknis harian |
| Kuis | 5 soal | 10 soal single attempt |
| Diskusi | Pertanyaan umum | Skenario bias rekrutmen, halusinasi hukum, dan optimasi navigasi |
| Snapshot | `materi/lama/pengantar-ai.md` sebagai baseline lama | `materi/pengantar-ai.md` sebagai snapshot terbaru |

Yang sudah dibuat pada checkpoint terbaru:

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
| Foundation & Core AI | AI Fundamentals & Advanced | Sebagian aktif + scaffold | Pengantar AI, Python untuk AI, Konsep AI Modern, dan Reasoning aktif; Evaluation dan Evolution of AI scaffold |
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
| 01 - Pengantar AI | Aktif final terbaru | Aktif, audit sosio-teknis | Aktif, 10 soal full-card clickable single attempt dengan state correct/wrong/locked | Aktif, skenario etika | `settings.js` | Route sub-topik tetap memakai `lesson.html`; konten final sinkron dengan `materi/pengantar-ai.md`; jawaban peserta tersimpan di `heraiAiIntroQuizAnswers` untuk restore state locked; route/layout besar tidak berubah |
| 02 - Python untuk AI | Aktif final terbaru, 13 chapter + panel Belajar Aktif | Aktif, Pyodide + mini project preprocessing teks | Aktif, 15 soal full-card clickable single attempt | Aktif, prompt Python untuk AI | `ai-python-basic.js` | Rombak final dari `materi/baru/Pengembangan Materi Pemrograman Python untuk AI- Baru.md`; code block pink-light; route/layout tetap; snapshot di `materi/python-untuk-ai.md` |
| 03a - Konsep AI Modern | Aktif | Aktif | Aktif | Aktif | `ai-modern.js` | Materi, latihan, kuis, dan diskusi sudah memakai file final |
| 04 - Reasoning | Aktif final baru, 5 chapter + visual flow/quick check + panel sumber utuh `Reasoning-baru.md` | Aktif final, 6 skenario step-by-step, masing-masing 3 textarea, navigator + save/edit/reset; referensi utuh setelah workspace | Aktif final, 15 soal one-at-a-time, navigator + answered counter, full-card single attempt; referensi utuh setelah workspace | Aktif final, sumber diskusi utuh + prompt/thread lokal | `ai-reasoning.js` + `04-reasoning/chapters/*-full.html` | Folder canonical `04-reasoning/`; checkpoint terbaru `8007acb`; konten sumber tidak dikompres dan bukan scaffold placeholder |
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
| `/participant-ai-reasoning` | Reasoning materi final canonical |
| `/participant-ai-reasoning-practice` | Reasoning latihan final canonical |
| `/participant-ai-reasoning-quiz` | Reasoning kuis final canonical |
| `/participant-ai-reasoning-discussion` | Reasoning diskusi final canonical |
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
- Jika merevisi materi Pengantar AI, jangan ubah route. Edit target utama:
  - `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/materi.html`
  - `js/frontend/fellow-dashboard/settings.js` bagian `generatedLessonContent`
  - `latihan.html`, `kuis.html`, dan `diskusi.html` hanya jika activity ikut berubah
- Gunakan `materi/pengantar-ai.md` sebagai baseline konten terbaru sebelum memasukkan revisi lanjutan.
- Setelah revisi Pengantar AI, update ulang `materi/pengantar-ai.md` agar snapshot tetap sinkron dengan HTML/JS runtime.
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
  1. Jika user meminta revisi Pengantar AI, kerjakan secara scoped dengan baseline `materi/pengantar-ai.md`.
  2. Jika user meminta revisi Python untuk AI, kerjakan di `02-python-untuk-ai/` dan `js/frontend/fellow-dashboard/ai-python-basic.js` sambil mempertahankan 13 chapter, panel Belajar Aktif, Pyodide, dan quiz full-card.
  3. Jika user atau tim meminta merge Reasoning, baca `handover/MERGE_GUIDE_REASONING_TEAM.md` dulu.
  4. Jika task bukan Python, Pengantar AI, atau merge Reasoning, lanjutkan Generative AI lewat `COURSE_SCAFFOLDS` bila konten belum final.
  5. Aktifkan route final hanya kalau `materi`, `latihan`, `kuis`, dan `diskusi` sudah siap.
  6. Jaga route final AI Modern, Math for AI, ML, Python, Pengantar AI, CV, dan NLP.
- Jalankan minimal:

```bash
node --check js/router.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
node --check js/frontend/fellow-dashboard/ai-ml-basic.js
git diff --check
node scripts/check-participant-routes.mjs
```
