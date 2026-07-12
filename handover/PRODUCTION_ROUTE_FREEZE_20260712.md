# Production Route Freeze - AI Fundamentals & Advanced

**Tanggal:** 12 Juli 2026  
**Branch:** `design`

## Keputusan

Untuk kebutuhan production sementara, hanya course **AI Fundamentals & Advanced** yang aktif sebagai pengalaman belajar utama.

Route course/module lain di catalog peserta diarahkan ke:

```text
pages/frontend/fellow-dashboard/under-development.html
```

## Route yang Tetap Aktif

- `#/participant-ai-fundamentals`
- `#/participant-ai-intro`
- `#/participant-ai-intro-practice`
- `#/participant-ai-intro-quiz`
- `#/participant-ai-intro-discussion`
- subroute legacy Pengantar AI: `history`, `types`, `components`, `applications`, `pipeline`, `ml-dl`, `pros-cons`, `ethics`, `future`, `summary`
- `#/participant-ai-python*`
- `#/participant-ai-modern*`
- `#/participant-ai-reasoning*`
- `#/participant-ai-evaluation`
- `#/participant-ai-evolution`

## Route yang Diparkir ke Under Development

- Math for AI route family: `#/participant-ai-lab-math*`
- Machine Learning route family: `#/participant-ai-lab-machine-learning`, `#/participant-ai-lab-ml*`
- NLP route family: `#/participant-ai-lab-nlp`, tokenization, preprocessing, POS/NER, BoW, TF-IDF
- Computer Vision route family: `#/participant-ai-lab-cv*`
- Generative/multimodal/domain/business placeholder routes: `#/participant-ai-lab-*` di luar AI Fundamentals & Advanced
- Specialization routes: `#/participant-specialization-*`

## Catatan Teknis

- Konten/file course lama tidak dihapus.
- Perubahan hanya pada mapping route di `js/router.js`.
- Guard tambahan di router mencegah route yang sudah diarahkan ke `under-development.html` menjalankan initializer course lama.
- `index.html` membump cache buster router ke `20260712-production-ai-fundamentals-only`.

## Verifikasi Wajib

- `node --check js/router.js`
- `node scripts/check-participant-routes.mjs`
- `git diff --check`

Jika setelah production freeze course lain ingin diaktifkan lagi, kembalikan target route spesifik di `js/router.js` dan hapus/ubah catatan freeze ini.
