# HerAI Development Handover & Checkpoint
**Tanggal:** 4 Juli 2026 (Sesi Malam)  
**Branch:** `design`  
**Commit Terakhir:** `850e178`

Dokumen ini ditulis sebagai pedoman *handover* untuk tim developer atau AI Agent berikutnya agar bisa langsung melanjutkan pekerjaan tanpa kehilangan konteks.

---

## Changelog Sesi Ini (4 Juli 2026, ~14:00 – 23:30 WIB)

### A. Modul 1 — Pengantar AI (`#/participant-ai-intro`)

**Perubahan besar:**

1. **Konsolidasi dari 11 topik → 4 halaman padat.**  
   Sebelumnya Modul 1 punya 11 route terpisah (`/participant-ai-intro`, `/participant-ai-history`, `/participant-ai-types`, `/participant-ai-components`, `/participant-ai-applications`, `/participant-ai-pipeline`, `/participant-ai-ml-dl`, `/participant-ai-pros-cons`, `/participant-ai-ethics`, `/participant-ai-future`, `/participant-ai-summary`). Sekarang diringkas jadi 4:
   
   | # | Route | Judul |
   |---|---|---|
   | 1 | `/participant-ai-intro` | Pengantar & Sejarah AI |
   | 2 | `/participant-ai-types` | Jenis & Komponen AI |
   | 3 | `/participant-ai-applications` | Penerapan & Masa Depan AI |
   | 4 | `/participant-ai-summary` | Ringkasan Modul 1 |

2. **Konten mentor asli TIDAK dihapus, ditambahkan kembali.**  
   Bagian yang sempat hilang:
   - **"Hubungan AI, Machine Learning, dan Deep Learning"** — penjelasan hierarki + rumus `y = f(x) + ε`
   - **Diagram `ai-hierarchy-diagram`** — nested box AI → ML → DL
   - **Referensi WTTC** — dikombinasi dengan referensi Stuart Russell & Peter Norvig
   
3. **Timeline Sejarah AI** ditambahkan ke halaman pertama (section 1.5) — dari 1943 Artificial Neuron sampai 2022 Generative AI.

4. **Card grid "AI di Sekitar Kita" di-fix.**
   - Sebelumnya: `repeat(auto-fit, minmax(200px, 1fr))` → 5 card di baris pertama + 1 orphan
   - Sekarang: `repeat(3, 1fr)` → 3×2 grid rapi
   - Semua ikon diubah jadi warna pink konsisten (sebelumnya warna-warni brand: biru Google, hijau Spotify, dll)

5. **Progress sidebar** di-update dari "1 dari 11" → "1 dari 4" (25%).

6. **Footer nav** difix — tombol "Topik Selanjutnya" sekarang mengarah ke `#/participant-ai-types` (bukan `#/participant-ai-history` yang sudah tidak ada).

7. **Bug JS di `settings.js`** — ada duplikat `};` yang menyebabkan syntax error, sudah dihapus.

**File yang disentuh:**
- `pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/materi.html`
- `pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/latihan.html` (sidebar update)
- `pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/kuis.html` (sidebar update)
- `js/frontend/fellow-dashboard/settings.js` (introLessonRoutes + generatedLessonContent)

---

### B. Modul 3 — Machine Learning (`#/participant-ai-lab-ml`)

**Perubahan besar:**

1. **Dibuat dari nol** — Modul ML sekarang punya struktur lengkap seperti Modul 2 Python:
   - `materi.html` — container dinamis dengan sidebar navigasi 4 chapter
   - `latihan.html` — form studi kasus reflektif (bukan Pyodide coding)
   - `kuis.html` — 5 soal pilihan ganda tentang konsep ML
   - `diskusi.html` — forum diskusi standar

2. **4 Chapter materi** diekstrak dari lesson-lesson lama yang sudah ada di AI Lab:
   - `chapter-1.html` — dari `ml-intro.html` (Introduction to ML)
   - `chapter-2.html` — dari `ml-hypothesis.html` (Hypothesis Space)
   - `chapter-3.html` — dari `ml-vc-dim.html` (VC Dimension)
   - `chapter-4.html` — dari `ml-bias-variance.html` (Bias-Variance Tradeoff)

3. **JavaScript controller** — file baru `ai-ml-basic.js` dibuat dengan porting dari `ai-python-basic.js`:
   - `window.initAiMlMateri()` — load chapter dinamis, navigasi prev/next
   - `window.initAiMlBasic()` — save/load latihan via localStorage
   - `window.initAiMlQuiz()` — skoring kuis single attempt
   - `window.initAiMlDiscussion()` — posting diskusi via localStorage

4. **Route baru** didaftarkan di `js/router.js`:
   ```
   /participant-ai-lab-ml          → materi.html
   /participant-ai-lab-ml-practice → latihan.html
   /participant-ai-lab-ml-quiz     → kuis.html
   /participant-ai-lab-ml-discussion → diskusi.html
   ```

5. **Script di-register** di `index.html`:
   ```html
   <script src="/js/frontend/fellow-dashboard/ai-ml-basic.js?v=20260704-ml"></script>
   ```

6. **ID Broken di-fix** — pada saat rename otomatis, beberapa ID jadi `aiMachine LearningQuizForm` (ada spasi). Sudah difix jadi `aiMlQuizForm`, `aiMlDiscussionForm`, `aiMlDiscussionList`, dll.

**File yang disentuh:**
- `js/frontend/fellow-dashboard/ai-ml-basic.js` (BARU)
- `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/materi.html` (BARU)
- `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/latihan.html` (BARU)
- `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/kuis.html` (BARU)
- `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/diskusi.html` (BARU)
- `pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/chapters/chapter-{1,2,3,4}.html` (BARU)
- `js/router.js` (route mapping + init hooks)
- `index.html` (script include)

---

### C. CV Module — Pixel Anatomy (`#/participant-ai-lab-cv-pixel`)

**Perubahan:**
- Halaman `pixel-anatomy.html` di-split menjadi 3 tab: **Materi**, **Latihan**, **Kuis**
- Tab switching dilakukan via fungsi `switchPixelTab()` yang inline di halaman
- Challenge cards dipindah ke tab Latihan dengan label konteks
- Quiz section dipindah ke tab Kuis
- Footer navigation per-tab (Materi → Latihan, Latihan → Kuis, Kuis → Katalog CV)

**File yang disentuh:**
- `pages/frontend/fellow-dashboard/ai-lab/lessons/pixel-anatomy.html`

---

## Arsitektur yang WAJIB Dipahami

### Sistem Routing Modul 1 (Pengantar AI)
Modul 1 menggunakan **2 template HTML**:
- **`materi.html`** — halaman pertama, konten hardcoded langsung di HTML
- **`lesson.html`** — template generik untuk halaman 2-4, konten di-inject oleh JS

Alur render halaman 2-4:
```
User navigasi ke #/participant-ai-types
  → router.js memetakan ke lesson.html
  → settings.js: initGeneratedLessonPage() dipanggil
  → Membaca generatedLessonContent['/participant-ai-types']
  → Inject HTML ke [data-lesson-content], update sidebar, progress, footer
```

### Sistem Routing ML Module
ML module menggunakan **chapter-based dynamic loading** (sama seperti Modul 2 Python):
```
User navigasi ke #/participant-ai-lab-ml
  → router.js memetakan ke 03-machine-learning/materi.html
  → router.js memanggil window.initAiMlMateri()
  → ai-ml-basic.js: fetch chapter-{N}.html → inject ke #ml-chapter-container
  → Sidebar tracking via localStorage key 'heraiAiMlCurrentChapter'
```

### Pola Penamaan ID Penting
| Module | Form ID | Quiz Result | Quiz Next | Discussion Form | Discussion List |
|---|---|---|---|---|---|
| Python | `mlPracticeForm` | `aiPythonQuizResult` | `aiPythonQuizNext` | `aiPythonDiscussionForm` | `aiPythonDiscussionList` |
| ML | `aiMlPracticeForm` | `aiMlQuizResult` | `aiMlQuizNext` | `aiMlDiscussionForm` | `aiMlDiscussionList` |

> **PERINGATAN:** Jangan pernah pakai spasi di ID HTML. Bug sebelumnya terjadi karena rename otomatis "Python" → "Machine Learning" menghasilkan `aiMachine LearningQuizForm` yang invalid.

---

## Lokasi File Kunci

| File | Fungsi | Risiko |
|---|---|---|
| `js/router.js` | Otak SPA — semua route mapping | 🔴 KRITIS |
| `js/frontend/fellow-dashboard/settings.js` | Konten dinamis Modul 1 (generatedLessonContent) + init page | 🟠 TINGGI |
| `js/frontend/fellow-dashboard/ai-python-basic.js` | Controller Modul 2 Python (Pyodide, chapter loading) | 🟠 TINGGI |
| `js/frontend/fellow-dashboard/ai-ml-basic.js` | Controller ML module (chapter loading, quiz, discussion) | 🟠 TINGGI |
| `js/frontend/fellow-dashboard/ai-modern.js` | Controller Modul 3 Konsep AI Modern | 🟠 TINGGI |
| `index.html` | Entry point — semua `<script>` di-load di sini | 🟠 TINGGI |

---

## Known Issues & TODO

### Bugs yang Masih Ada
1. **`ai-ml-basic.js` punya teks "Ml runtime"** — Sisa dari rename otomatis Python→ML. Ini muncul di status Pyodide loading (yang sebenarnya nggak dipakai di ML karena ML nggak pakai Pyodide). Tidak breaking tapi terlihat aneh jika di-inspect.
2. **`runMlAsync`** — fungsi `pyodideInstance.runMlAsync()` di `ai-ml-basic.js` line 82 — ini typo dari rename. Seharusnya `runPythonAsync`. Tidak breaking karena ML module tidak mengaktifkan Pyodide.
3. **Folder `03-konsep-ai-modern/`** masih ada tapi belum punya latihan, kuis, diskusi. Route-nya belum terdaftar penuh.
4. **Folder `03-machine-learning/`** dan `03-konsep-ai-modern/` sama-sama pakai prefix `03-`. Ini ambigu — perlu diputuskan mau dipisah atau digabung.

### TODO Prioritas Tinggi
- [ ] **Tentukan hierarki modul** — Apakah "Machine Learning" masuk AI Fundamentals (modul 3) atau tetap di AI Lab saja?
- [ ] **Bersihkan `ai-ml-basic.js`** — hapus seluruh blok Pyodide (loadPyodide, runMlAsync) karena ML tidak butuh Python runtime
- [ ] **Latihan ML** — form studi kasus saat ini sangat basic (2 soal reflektif). Perlu ditambah atau diubah ke format interaktif
- [ ] **Kuis ML** — baru 5 soal. Idealnya 10 soal seperti modul lain
- [ ] **Konten chapter ML** — diekstrak mentah dari lesson lama, perlu di-review dan diperkaya dengan gaya "tech bestie"

### TODO Prioritas Sedang
- [ ] Modul 3 Konsep AI Modern — lengkapi `latihan.html`, `kuis.html`, `diskusi.html`
- [ ] Pixel Anatomy tab switching — test responsif di mobile
- [ ] Update progress tracking agar dinamis (sekarang hardcoded di HTML)

---

## Aturan Besi untuk Developer/AI Selanjutnya

1. **BACA `GEMINI.md`** sebelum ngapa-ngapain. Di sana ada design rules, zona bahaya, dan arsitektur lengkap.
2. **Jangan hapus konten mentor** — kalau mau ubah, TAMBAHIN, jangan replace.
3. **Jangan pakai emoji di UI** — semua harus FontAwesome icons (kecuali di dalam bubble chat HerAI Buddy yang boleh pakai emoji teks).
4. **Border-radius TIDAK BOLEH 0** — card `14-20px`, button `100px`, input `14-20px`.
5. **Warna icon di card grid harus konsisten pink** — jangan pakai warna brand asli (biru Google, hijau Spotify).
6. **Semua perubahan WAJIB di-commit** tapi JANGAN di-push tanpa izin.
7. **Test di `http://localhost:3000`** dengan Hard Refresh setelah setiap perubahan.

---

## Git Checkpoint

```bash
# Untuk melihat semua perubahan sesi ini:
git log --oneline da6c5d2..HEAD

# Untuk rollback ke sebelum sesi ini:
git reset --hard da6c5d2

# Untuk rollback hanya Modul 1:
git checkout da6c5d2 -- pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/
git checkout da6c5d2 -- js/frontend/fellow-dashboard/settings.js
```
