# AI Fundamental Course Structure

Struktur ini dipakai agar materi peserta mudah dikembangkan.

```text
ai-fundamental/
  01-pengantar-ai/
    materi.html
    latihan.html
    kuis.html
    diskusi.html
    lesson.html
  02-python-untuk-ai/
  03-konsep-ai-modern/
  04-reasoning/
  05-evaluation/
  06-evolution-of-ai/
```

`01-pengantar-ai/lesson.html` adalah template bersama untuk daftar materi lanjutan pada Pengantar AI.
Kontennya diisi oleh `js/frontend/fellow-dashboard/settings.js` berdasarkan route:

- `#/participant-ai-history`
- `#/participant-ai-types`
- `#/participant-ai-components`
- `#/participant-ai-applications`
- `#/participant-ai-summary`

Admin content editor tersedia di `#/learning-content`.

Machine Learning sudah dipindah ke hierarchy course catalog:

```text
pages/frontend/fellow-dashboard/course-catalog/foundation-core-ai/machine-learning/
```

Route peserta ML tetap memakai `#/participant-ai-lab-ml` dan alias lama tetap dijaga di `js/router.js`.
