# Checkpoint Refactor Filesystem Course Catalog

**Tanggal:** 10 Juli 2026  
**Branch:** `design`  
**Status:** sudah commit lokal, belum push  
**Checkpoint aktif:** `3f238a7 refactor: move fellowship courses into dashboard hierarchy`

Dokumen ini adalah catatan khusus refactor folder course catalog. Tujuannya agar AI agent, developer, dan mentor berikutnya tidak bingung antara hierarchy produk, folder lama, dan route peserta yang tetap stabil.

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

---

## Controller dan Cache Buster yang Diubah

| File | Perubahan |
|---|---|
| `js/router.js` | Mapping route diarahkan ke folder category/domain final |
| `js/frontend/fellow-dashboard/ai-ml-basic.js` | `ML_BASE` menjadi `/pages/frontend/fellow-dashboard/foundation-core-ai/machine-learning` |
| `js/frontend/fellow-dashboard/ai-python-basic.js` | Fetch chapter Python diarahkan ke folder `foundation-core-ai/ai-fundamentals-advanced/...` |
| `js/frontend/fellow-dashboard/ai-modern.js` | Fetch chapter Konsep AI Modern diarahkan ke folder `foundation-core-ai/ai-fundamentals-advanced/...` |
| `index.html` | Cache buster router menjadi `router.js?v=20260710-dashboard-course-hierarchy` |

---

## Checkpoint Verifikasi

Verifikasi terakhir setelah refactor:

```text
node --check js/router.js
node --check js/frontend/fellow-dashboard/ai-ml-basic.js
node --check js/frontend/fellow-dashboard/ai-python-basic.js
node --check js/frontend/fellow-dashboard/ai-modern.js
node scripts/check-participant-routes.mjs
git diff --check
```

Hasil route checker:

```text
Total: 107 | 107 passed | 0 failed
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
5. Jalankan `node scripts/check-participant-routes.mjs` setelah perubahan routing.
6. Commit lokal setiap checkpoint fitur/refactor, tapi jangan push tanpa izin user.
