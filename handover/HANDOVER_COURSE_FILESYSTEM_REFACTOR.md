# Checkpoint Refactor Filesystem Course Catalog

**Tanggal:** 10 Juli 2026  
**Branch:** `design`  
**Status:** ada perubahan lokal belum commit, belum push
**Checkpoint aktif:** `3f238a7 refactor: move fellowship courses into dashboard hierarchy`
**Checkpoint routing/UI terbaru:** `280c087 refactor: standardize curriculum placeholders`

Dokumen ini adalah catatan khusus refactor folder course catalog. Tujuannya agar AI agent, developer, dan mentor berikutnya tidak bingung antara hierarchy produk, folder lama, dan route peserta yang tetap stabil.

---

## Update Terbaru Setelah Refactor Filesystem

Update lokal terbaru setelah checkpoint `6eb03f8`:

- Folder root `materi/` dibuat sebagai area handoff konten non-runtime.
- File `materi/pengantar-ai.md` berisi snapshot terbaru materi Pengantar AI setelah rombak final.
- Materi final Pengantar AI sudah masuk ke runtime canonical `foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/`.
- Setelah review user, Pengantar AI dikonsolidasikan menjadi 5 chapter padat tanpa membuat route atau folder baru.
- Update lanjutan setelah commit `6eb03f8`: bug penomoran runtime diperbaiki dan Chapter 3-5 diperdalam lagi. Perubahan tetap hanya menyentuh konten dan handover, tidak mengubah route atau folder.
- Perubahan ini tidak mengubah folder canonical course catalog, route peserta, target file router, atau manifest scaffold.
- `materi/` tidak boleh dipakai sebagai folder route/course aktif.
- Next request user adalah lanjut ke `02 - Python untuk AI`; folder canonical yang harus dipakai adalah `foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/`.

Checkpoint detail sesi rombak Pengantar AI:

```text
Sumber final: materi/baru/pengantar-ai-baru.md
Baseline lama: materi/lama/pengantar-ai.md
Snapshot terbaru: materi/pengantar-ai.md
Folder runtime: pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/
Controller/topik: js/frontend/fellow-dashboard/settings.js
Router: tidak berubah
Route checker: Total 110 | 110 passed | 0 failed
```

Update follow-up:

- Daftar materi Pengantar AI sekarang 5 chapter padat.
- Konsolidasi memakai route Pengantar AI yang sebelumnya sudah terdaftar di `js/router.js`.
- Tidak ada folder baru dan tidak ada route baru.
- Penomoran chapter aktif sekarang konsisten: Chapter 3 `3.1-3.12`, Chapter 4 `4.1-4.12`, Chapter 5 `5.1-5.13`.
- Route kecil lama seperti `/participant-ai-components`, `/participant-ai-pipeline`, `/participant-ai-applications`, `/participant-ai-pros-cons`, `/participant-ai-ethics`, dan `/participant-ai-future` masih terdaftar di router tetapi tidak tampil di daftar 5 chapter terbaru.
- Verifikasi terakhir setelah update handover dan runtime Pengantar AI: `node --check js/router.js`, `node --check js/frontend/fellow-dashboard/settings.js`, `git diff --check`, dan `node scripts/check-participant-routes.mjs` lulus.

File runtime Pengantar AI yang berubah:

```text
01-pengantar-ai/materi.html
01-pengantar-ai/latihan.html
01-pengantar-ai/kuis.html
01-pengantar-ai/diskusi.html
js/frontend/fellow-dashboard/settings.js
```

Keputusan filesystem:

- Tidak membuat folder course baru.
- Tidak memindahkan Pengantar AI.
- Tidak menghidupkan folder legacy `ai-fundamental/`.
- Tidak membuat ulang folder `course-catalog/`.
- Tidak mengubah mapping route di `js/router.js`.
- `materi/` tetap hanya artefak handoff/snapshot, bukan canonical runtime.
- Untuk lanjut Python untuk AI, jangan membuat folder baru; pakai folder canonical existing `02-python-untuk-ai/`.
- Jangan memindahkan atau rename `js/frontend/fellow-dashboard/ai-python-basic.js` karena file ini memuat controller/interaktif Python.

Checkpoint `280c087 refactor: standardize curriculum placeholders` menambahkan standardisasi scaffold tanpa mengubah keputusan folder canonical.

Yang berubah setelah refactor filesystem:

- `js/frontend/fellow-dashboard/course-placeholder.js` menjadi manifest tunggal `COURSE_SCAFFOLDS` untuk course/track/module belum final.
- Math for AI tidak lagi masuk scaffold manifest karena sudah aktif final di `foundation-core-ai/math-for-ai/`.
- Route scaffold AI Fundamentals ditambahkan:
  - `#/participant-ai-reasoning`
  - `#/participant-ai-evaluation`
  - `#/participant-ai-evolution`
- Card AI Fundamentals untuk Reasoning, Evaluation, dan Evolution of AI sekarang link route, bukan button kosong.
- Query scaffold mendukung overview dan detail module:
  - `#/participant-ai-lab-gen?activity=latihan`
  - `#/participant-ai-lab-gen?module=prompting-workflow&activity=kuis`
- Route checker terbaru:

```text
Total: 110 | 110 passed | 0 failed
```

Aturan penting:

- Course/module belum final jangan dibuatkan file `materi.html`, `latihan.html`, `kuis.html`, atau `diskusi.html`.
- Isi manifest scaffold dulu; file final baru dibuat kalau konten siap dan route akan dipindahkan ke folder canonical.
- Keputusan folder canonical tetap sama: category/domain langsung di bawah `pages/frontend/fellow-dashboard/`.
- Kalau tim penerus mengubah folder, rename file, memindahkan route dari scaffold ke final, atau menambah route final, wajib update folder `handover/` sebelum commit.

---

## Ringkasan Keputusan Final

Folder course catalog **tidak** berada di `pages/frontend/fellow-dashboard/course-catalog/`.

Folder category/domain canonical berada langsung di:

```text
pages/frontend/fellow-dashboard/
```

Struktur final yang dipakai:

```text
pages/frontend/fellow-dashboard/
  foundation-core-ai/
  generative-multimodal-ai/
  data-engineering-domains/
  business-industry-applications/
  specialization-tracks/
```

Folder lama berikut **bukan path aktif peserta** dan jangan dibuat ulang untuk course baru:

```text
pages/frontend/fellow-dashboard/course-catalog/
pages/frontend/fellow-dashboard/ai-fundamental/
pages/frontend/fellow-dashboard/ai-lab/
```

Folder root berikut juga **bukan path aktif peserta**:

```text
materi/
```

`materi/` hanya untuk snapshot, copywriting, prompt handoff, dan bahan brainstorming. Jika konten sudah final, implementasikan ke folder canonical runtime yang sesuai.

Catatan sejarah:

- Commit `fb8be7d refactor: align course catalog filesystem hierarchy` sempat membuat folder `course-catalog/`.
- Keputusan itu sudah dikoreksi oleh commit `3f238a7 refactor: move fellowship courses into dashboard hierarchy`.
- Status final: category/domain langsung di bawah `fellow-dashboard/`, sesuai permintaan user dan struktur UI.

---

## Hierarki Produk Resmi

```text
Course Catalog
  Category / Domain
    Course
      Module / Chapter
        Materi -> Latihan -> Kuis -> Diskusi
```

Contoh:

```text
Foundation & Core AI
  Machine Learning
    Pengantar Machine Learning
    Supervised Learning
    Regresi & Klasifikasi Dasar
    Probabilistic Models
    Linear Discriminative Models
    Support Vector Machine
    Neural Networks
    Unsupervised Learning
```

Machine Learning adalah course di dalam `Foundation & Core AI`, bukan module di dalam AI Fundamentals.

---

## Struktur Direktori Final

```text
pages/frontend/fellow-dashboard/
  foundation-core-ai/
    ai-fundamentals-advanced/
      overview.html
      ai-fundamentals/
        01-pengantar-ai/
        02-python-untuk-ai/
        03-konsep-ai-modern/
      ai-advanced/
    math-for-ai/
      overview.html
      lesson.html
      practice.html
      quiz.html
      discussion.html
    machine-learning/
      materi.html
      latihan.html
      kuis.html
      diskusi.html
      chapters/
        chapter-1.html
        chapter-2.html
        chapter-3.html
        chapter-4.html
        chapter-5.html
        chapter-6.html
        chapter-7.html
        chapter-8.html
      legacy-overview.html
      legacy-lessons/
    deep-learning/
    reinforcement-learning/

  generative-multimodal-ai/
    generative-ai.html
    llm/
    vlm/
    multimodal-llm/
    agentic-ai/

  data-engineering-domains/
    computer-vision.html
    computer-vision/
      lessons/
    nlp.html
    nlp/
      lessons/
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

`pages/frontend/fellow-dashboard/README.md` juga berisi ringkasan struktur ini untuk navigasi cepat.

Artefak handoff non-runtime:

```text
materi/
  pengantar-ai.md
```

Catatan: file di atas tidak diload oleh aplikasi. Untuk rombak Pengantar AI, sumber runtime tetap:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/
js/frontend/fellow-dashboard/settings.js
```

---

## Perubahan File dan Rename Penting

| Dari | Ke |
|---|---|
| `pages/frontend/fellow-dashboard/ai-fundamental/ai-fundamentals.html` | `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/overview.html` |
| `pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/` | `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/` |
| `pages/frontend/fellow-dashboard/ai-fundamental/02-python-untuk-ai/` | `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/` |
| `pages/frontend/fellow-dashboard/ai-fundamental/03-konsep-ai-modern/` | `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/` |
| `pages/frontend/fellow-dashboard/ai-lab/machine-learning.html` | `pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/legacy-overview.html` |
| `pages/frontend/fellow-dashboard/ai-lab/lessons/ml-*.html` | `pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning/legacy-lessons/` |
| `pages/frontend/fellow-dashboard/ai-lab/math-for-ai/` | `pages/frontend/fellow-dashboard/foundation-core-ai/math-for-ai/` |
| `pages/frontend/fellow-dashboard/ai-lab/generative-ai.html` | `pages/frontend/fellow-dashboard/generative-multimodal-ai/generative-ai.html` |
| `pages/frontend/fellow-dashboard/ai-lab/computer-vision.html` | `pages/frontend/fellow-dashboard/data-engineering-domains/computer-vision.html` |
| `pages/frontend/fellow-dashboard/ai-lab/lessons/cnn-*.html` dan CV lessons lain | `pages/frontend/fellow-dashboard/data-engineering-domains/computer-vision/lessons/` |
| `pages/frontend/fellow-dashboard/ai-lab/nlp.html` | `pages/frontend/fellow-dashboard/data-engineering-domains/nlp.html` |
| `pages/frontend/fellow-dashboard/ai-lab/lessons/tokenization.html` dan NLP lessons lain | `pages/frontend/fellow-dashboard/data-engineering-domains/nlp/lessons/` |

---

## Routing Setelah Refactor

Hash route peserta tetap dijaga stabil. Yang berubah adalah file target internal di `js/router.js`.

| Route | Target file final |
|---|---|
| `/participant-ai-fundamentals` | `foundation-core-ai/ai-fundamentals-advanced/overview.html` |
| `/participant-ai-intro` dan subroute Pengantar AI | `foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/...` |
| `/participant-ai-python` dan subroute Python | `foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/...` |
| `/participant-ai-modern` | `foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/...` |
| `/participant-ai-reasoning` | `pages/frontend/fellow-dashboard/course-placeholder.html` |
| `/participant-ai-evaluation` | `pages/frontend/fellow-dashboard/course-placeholder.html` |
| `/participant-ai-evolution` | `pages/frontend/fellow-dashboard/course-placeholder.html` |
| `/participant-ai-lab-machine-learning` | `foundation-core-ai/machine-learning/materi.html` |
| `/participant-ai-lab-ml` dan semua route chapter ML | `foundation-core-ai/machine-learning/materi.html` |
| `/participant-ai-lab-ml-practice` | `foundation-core-ai/machine-learning/latihan.html` |
| `/participant-ai-lab-ml-quiz` | `foundation-core-ai/machine-learning/kuis.html` |
| `/participant-ai-lab-ml-discussion` | `foundation-core-ai/machine-learning/diskusi.html` |
| `/participant-ai-lab-cv` | `data-engineering-domains/computer-vision.html` |
| `/participant-ai-lab-cv-*` | `data-engineering-domains/computer-vision/lessons/*.html` |
| `/participant-ai-lab-nlp` | `data-engineering-domains/nlp.html` |
| `/participant-ai-lab-nlp-*` | `data-engineering-domains/nlp/lessons/*.html` |
| Placeholder course lain | `pages/frontend/fellow-dashboard/course-placeholder.html` |

Route placeholder tetap sengaja ada agar card catalog tidak 404 walaupun konten final belum aktif.

Update setelah checkpoint routing/UI terbaru:

- `#/participant-ai-modern` sekarang aktif ke materi Konsep AI Modern di folder canonical.
- Card `Konsep AI Modern` di `foundation-core-ai/ai-fundamentals-advanced/overview.html` sudah mengarah ke `#/participant-ai-modern`, bukan `#/participant-under-development`.
- `#/participant-ai-reasoning`, `#/participant-ai-evaluation`, dan `#/participant-ai-evolution` sekarang aktif ke reusable scaffold.
- Card `Reasoning`, `Evaluation`, dan `Evolution of AI` di overview AI Fundamentals sudah berupa link route scaffold.
- `course-placeholder.html` sudah memakai tab standar `Materi -> Latihan -> Kuis -> Diskusi`.
- `COURSE_SCAFFOLDS` sekarang menyimpan metadata lengkap per module: `slug`, `title`, `summary`, `materi`, `latihan`, `kuis`, `diskusi`.
- Tab activity scaffold non-final memakai query hash pada route yang sama, misalnya:
  - `#/participant-ai-lab-gen?activity=latihan`
  - `#/participant-ai-lab-gen?activity=kuis`
  - `#/participant-ai-lab-gen?activity=diskusi`
- Detail module scaffold memakai query:
  - `#/participant-ai-lab-gen?module=prompting-workflow&activity=kuis`
- Query hash ini tidak menambah route baru di `js/router.js`; router sudah membuang query sebelum lookup route.
- Snapshot `materi/pengantar-ai.md` tidak menambah route baru dan tidak perlu didaftarkan di `js/router.js`.

---

## Controller dan Cache Buster yang Diubah

| File | Perubahan |
|---|---|
| `js/router.js` | Mapping route diarahkan ke folder category/domain final |
| `js/frontend/fellow-dashboard/ai-ml-basic.js` | `ML_BASE` menjadi `/pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning` |
| `js/frontend/fellow-dashboard/ai-python-basic.js` | Fetch chapter Python diarahkan ke folder `foundation-core-ai/ai-fundamentals-advanced/...` |
| `js/frontend/fellow-dashboard/ai-modern.js` | Fetch chapter Konsep AI Modern diarahkan ke folder `foundation-core-ai/ai-fundamentals-advanced/...` |
| `index.html` | Cache buster router menjadi `router.js?v=20260710-ai-fundamentals-scaffold`; cache buster `course-placeholder.js` menjadi `20260710-full-scaffold-manifest` |

---

## Checkpoint Verifikasi

Verifikasi terakhir setelah refactor:

```text
node --check js/router.js
node --check js/frontend/fellow-dashboard/ai-ml-basic.js
node --check js/frontend/fellow-dashboard/ai-python-basic.js
node --check js/frontend/fellow-dashboard/ai-modern.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
node scripts/check-participant-routes.mjs
git diff --check
```

Hasil route checker:

```text
Total: 110 | 110 passed | 0 failed
```

---

## Aturan Untuk AI/Developer Berikutnya

1. Jangan buat ulang folder `course-catalog/`, `ai-fundamental/`, atau `ai-lab/` sebagai path aktif.
2. Course baru harus masuk ke `pages/frontend/fellow-dashboard/{category-slug}/{course-slug}/`.
3. Hash route publik peserta jangan diubah tanpa alasan kuat; update target file internal saja.
4. Kalau memindahkan file course, update sekaligus:
   - `js/router.js`
   - controller JS yang melakukan `fetch()`
   - script cache buster di `index.html` kalau router berubah
   - `handover/COURSE_HIERARCHY.md`
   - `handover/MODULE_STATUS_MAP.md`
   - `handover/HANDOVER_UPDATE.md`
   - `handover/PROMPT_AI_BARU.md`
5. Jika hanya memperkaya scaffold tanpa file final, cukup update `COURSE_SCAFFOLDS`, route bila perlu, dan semua dokumen handover terkait status.
6. Next step aman: jika user meminta revisi lanjutan Pengantar AI, update konten Pengantar AI di folder canonical tanpa mengubah route/layout besar.
7. Untuk request terbaru, lanjutkan `Python untuk AI` di folder canonical existing `02-python-untuk-ai/` dan jangan mengubah struktur filesystem.
8. Jika task bukan Python untuk AI atau Pengantar AI, lanjutkan Generative AI melalui scaffold dulu.
9. Aktifkan route final hanya jika konten activity sudah lengkap.
10. Jalankan `node scripts/check-participant-routes.mjs` setelah perubahan routing.
11. Commit lokal setiap checkpoint fitur/refactor, tapi jangan push tanpa izin user.
