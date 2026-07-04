# Peta Status Kurikulum HerAI (AI Fundamentals)
**Tanggal:** 4 Juli 2026

Dokumen ini berfungsi sebagai peta jalan (*roadmap*) bagi tim *developer* atau AI Agent untuk mengetahui dengan pasti mana saja halaman/modul yang sudah selesai dibangun, mana yang masih berbentuk *template* kaku, dan mana yang benar-benar belum dibuat.

---

### 🌳 Struktur Direktori Frontend
Struktur folder di dalam `pages/frontend/fellow-dashboard/ai-fundamental/`:

```text
ai-fundamental/
├── 01-pengantar-ai/
│   ├── materi.html               (🟡 Template statis lama)
│   ├── latihan.html              (🟡 Template statis lama)
│   ├── kuis.html                 (🟡 Template statis lama)
│   └── diskusi.html              (🟡 Template statis lama)
│
├── 02-python-untuk-ai/
│   ├── chapters/                 (✅ SELESAI - 6 Sub-Modul)
│   ├── materi.html               (✅ SELESAI - Container Dinamis)
│   ├── latihan.html              (✅ SELESAI - Integrasi Pyodide Interaktif)
│   ├── kuis.html                 (✅ SELESAI - Validasi & Highlight Jawaban)
│   └── diskusi.html              (🟡 Template diskusi standar)
│
├── 03-konsep-ai-modern/
│   ├── chapters/                 (✅ SELESAI - 4 Sub-Modul)
│   ├── materi.html               (✅ SELESAI - Container Dinamis)
│   ├── latihan.html              (❌ KOSONG - File belum dibuat)
│   ├── kuis.html                 (❌ KOSONG - File belum dibuat)
│   └── diskusi.html              (❌ KOSONG - File belum dibuat)
│
├── 04-reasoning/                 (❌ KOSONG - Direktori belum dibuat)
├── 05-evaluation/                (❌ KOSONG - Direktori belum dibuat)
└── 06-evolution-of-ai/           (❌ KOSONG - Direktori belum dibuat)
```

---

### 📊 Tabel Status File Halaman

| Modul | Halaman | Status Konten | Tindakan Selanjutnya (Action Items) |
|---|---|---|---|
| **Modul 1: Pengantar AI** | Materi & Kuis | 🟡 *Template Lama* | Rombak menjadi sistem *chapters* dinamis seperti Modul 2 & 3. Sesuaikan konten dengan kurikulum asli. |
| | Latihan | 🟡 *Template Lama* | Rancang format interaktif dasar (jangan form biasa). |
| **Modul 2: Python AI** | Materi | 🟢 **Selesai (100%)** | Sudah mantap (dipecah 6 bab via `ai-python-basic.js`). |
| | Latihan | 🟢 **Selesai (100%)** | Pyodide Sandbox sudah bekerja sempurna. |
| | Kuis | 🟢 **Selesai (100%)** | Logika skoring & highlight warna UI (hijau/merah) mantap. |
| **Modul 3: Konsep Modern** | Materi | 🟢 **Selesai (100%)** | Sudah mantap (dipecah 4 bab via `ai-modern.js`). |
| | Latihan | 🔴 **Belum Dibuat** | **PRIORITAS:** Bangun *UI Agent Simulator* interaktif. (Belum ada file & route sudah terdaftar). |
| | Kuis | 🔴 **Belum Dibuat** | Buat soal pilihan ganda tentang arsitektur AI modern. |
| | Diskusi | 🔴 **Belum Dibuat** | *Copy* dari *template* Modul 2 (Opsional jika ingin cepat). |
| **Modul 4: Reasoning** | Seluruh File | 🔴 **Belum Dibuat** | Belum ada struktur direktori maupun rute di `js/router.js`. |
| **Modul 5: Evaluation** | Seluruh File | 🔴 **Belum Dibuat** | Belum ada struktur direktori maupun rute di `js/router.js`. |
| **Modul 6: Evolution** | Seluruh File | 🔴 **Belum Dibuat** | Belum ada struktur direktori maupun rute di `js/router.js`. |

---

### 🚀 Tabel Status Jalur Spesialisasi (AI Lab / Advanced)

| Track/Modul (modules.html) | Rute (router.js) | Status Konten | Keterangan / Action Item Selanjutnya |
|---|---|---|---|
| **Machine Learning** | `#/participant-ai-lab-ml` | 🟢 **Selesai (Ada)** | Sub-bab: *Intro, Hypothesis, VC-Dim, Bias-Variance*. (Perlu direview kelengkapannya). |
| **Computer Vision (CV)** | `#/participant-ai-lab-cv` | 🟢 **Selesai (Ada)** | Sub-bab: *CNN, Filtering, Pixel Anatomy, OpenCV, Builder*. |
| **NLP** | `#/participant-ai-lab-nlp` | 🟢 **Selesai (Ada)** | Sub-bab: *Tokenization, Preprocessing, POS/NER, BOW, TF-IDF*. |
| **Generative AI** | `#/participant-ai-lab-gen` | 🟢 **Selesai (Ada)** | Belum ada sub-bab spesifik di *router*. |
| **Math for AI** | ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |
| **Deep Learning** | ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |
| **Reinforcement Learning**| ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |
| **LLM (Language Model)** | ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |
| **VLM (Vision-Lang)** | ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |
| **Multimodal LLM** | ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |
| **Agentic AI** | ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |
| **Bioinformatics** | ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |
| **Data Eng. & Data Sci.** | ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |
| **Ops & Infra** | ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |
| **Product (Front/Back)** | ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |
| **Bisnis, Health, Design**| ❌ (Placeholder) | 🔴 **Belum Dibuat** | Tombol di `modules.html` masih mengarah ke `#participant-modules`. |

---
**Catatan untuk Developer Selanjutnya:**  
Gunakan dokumen ini untuk menentukan fokus pekerjaan. Jangan melompat mengerjakan Modul 4 (Reasoning) jika file `latihan.html` pada Modul 3 belum beroperasi dengan normal. Untuk *track* spesialisasi yang masih *placeholder*, pembuatan direktori baru disarankan diletakkan di bawah `/pages/frontend/fellow-dashboard/ai-lab/` untuk menjaga konsistensi. Pastikan setiap membuat modul baru, daftarkan rutenya di `js/router.js`.
