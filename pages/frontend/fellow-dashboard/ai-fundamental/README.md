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
  03-machine-learning/
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

## Machine Learning

Machine Learning aktif melalui route AI Lab:

- `#/participant-ai-lab-ml`
- `#/participant-ai-lab-ml-intro`
- `#/participant-ai-lab-ml-supervised`
- `#/participant-ai-lab-ml-regression-classification`
- `#/participant-ai-lab-ml-probabilistic`
- `#/participant-ai-lab-ml-linear-discriminative`
- `#/participant-ai-lab-ml-svm`
- `#/participant-ai-lab-ml-neural-networks`
- `#/participant-ai-lab-ml-unsupervised`
- `#/participant-ai-lab-ml-practice`
- `#/participant-ai-lab-ml-quiz`
- `#/participant-ai-lab-ml-discussion`

Legacy route berikut masih didukung sebagai alias:

- `#/participant-ai-lab-ml-hypothesis` -> chapter 2
- `#/participant-ai-lab-ml-vc-dim` -> chapter 3
- `#/participant-ai-lab-ml-bias-variance` -> chapter 3

Controller:

```text
js/frontend/fellow-dashboard/ai-ml-basic.js
```

State lokal yang dipakai:

- `heraiAiMlCurrentChapter`
- `heraiAiMlPractice`
- `heraiAiMlQuizDone`
- `heraiAiMlQuizScore`
- `heraiAiMlQuizAnswers`
- `heraiAiMlDiscussion`
