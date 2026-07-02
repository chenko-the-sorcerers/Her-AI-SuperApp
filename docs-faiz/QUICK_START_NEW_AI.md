# Quick Start — New AI Handover

> **Untuk AI baru**: Tempel file ini + `AI_LAB_INTEGRATION_GUIDE.md` + `AI_LAB_PROGRESS.md` ke context window.
> Lo akan langsung paham apa yang udah dikerjain dan apa yang harus dilanjutin.

---

## Project: Her-AI-SuperApp

Aplikasi **vanilla JS SPA** — dashboard peserta fellowship HerAI. Ada 3 course yang udah di-integrasi dari AI Lab portfolio.

### Status sekarang (2026-06-30)

| Course | Lessons Done | Remaining |
|---|---|---|
| **NLP** | 5 (Tokenization, Preprocessing, POS-NER, BoW, TF-IDF) | Module 3-6 (no lesson pages in AI Lab) |
| **ML** | 4 (Intro, Hypothesis, VC-Dim, Bias-Variance) | Module 2-8 (no lesson pages in AI Lab) |
| **CV** | 1 (CNN Intro) | CNN Why, ReLU, FC, Hands-on, Arch, Filtering Kernels, Morphological, Image Processing, Pixel Anatomy |
| **Overview** | 3 (NLP, ML, CV) | Generative AI, Deep Learning, Math for AI |

**Total: 15 pages (12 lesson + 3 overview)** + 11 JS files + 1 CSS file

### Arsitektur proyek

```
Her-AI-SuperApp/
├── Website-Portofolio-Chen/    ← SOURCE MATERI (JANGAN DI-EDIT)
├── pages/.../ai-lab/           ← Overview pages (nlp, ml, cv)
├── pages/.../ai-lab/lessons/   ← Lesson HTML files
├── js/.../ai-lab/              ← Lesson JS files
├── css/.../ai-lab-lesson.css   ← ALL AI Lab CSS (scoped .ai-lab-content)
├── js/router.js                ← Routes (3 places per route!)
├── index.html                  ← CSS/JS references
└── modules.html                ← Course catalog (26 cards)
```

---

## Perintah Lo (What To Do Next)

### Pilih dari daftar ini (urut prioritas):

**1. Port CNN Why** — lesson CV berikutnya, lightweight (prose only, gak ada canvas)
- Source: `Website-Portofolio-Chen/pages/ai-lab/cnn-why.html`
- Pattern: copy dari ML Intro (paling gampang)

**2. Port CNN ReLU** — activation function, math viz
- Source: `Website-Portofolio-Chen/pages/ai-lab/cnn-relu.html`

**3. Port Filtering Kernels** — interactive kernel editor (47K JS, canvas)
- Source: `Website-Portofolio-Chen/pages/ai-lab/filtering-kernels.html`
- Pattern: copy dari CNN Intro (IIFE → functions)

**4. Fix CNN Intro minor JS error** — base64 single quote issue di `cnn-intro.js`
- Line 6 di `cnn-intro.js`, hapus single quote `'` di dalam string base64 IMG_TUGU

---

## Aturan Besi (NEVER BREAK)

1. **Gak boleh ada emoji** — ganti semua dengan FA icons (`<i class="fas fa-..."></i>`)
2. **Tema pink HerAI** — accent `#f63392`, bg `#fff7fb`, bukan biru/hitam
3. **Jangan edit folder `Website-Portofolio-Chen/`** — itu source asli
4. **Route harus di 3 tempat** di `router.js`: `routes`, `participantDashboardPages`, `handleRouting` init
5. **CSS selalu di-scope** `.ai-lab-content` atau `.ai-lab-overview`
6. **Semua IIFE harus di-convert** ke function + dipanggil dari init
7. **Check variable collisions** sebelum commit (Section 4 di Integration Guide)
8. **Test Playwright** setiap lesson baru

---

## Cara Test Palywright

```bash
cd /home/faiz/her2/2/Her-AI-SuperApp
node --input-type=module <<'ENDSCRIPT'
import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true,
  executablePath: "/home/faiz/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", e => errors.push(e.message));
await page.goto("http://localhost:3000/#/YOUR-ROUTE-HERE", { waitUntil: "networkidle", timeout: 15000 });
await page.waitForTimeout(2500);
const check = await page.evaluate(() => ({
  contentReady: document.getElementById("YOUR-content-id")?.dataset.ready,
  sections: document.querySelectorAll(".lesson-sec[id]").length,
  canvasCount: document.querySelectorAll("canvas").length,
  emojiCount: (document.body.innerText.match(/[\u{1F000}-\u{1FFFF}]/gu) || []).length,
}));
console.log(JSON.stringify(check, null, 2));
console.log("Errors:", errors.length > 0 ? errors : "None");
await browser.close();
ENDSCRIPT
```

---

## Cara Commit

```bash
git add [files] && git commit -m "feat: [lesson name] — [description]"
# JANGAN push kecuali diminta
```

---

## Cara Navigasi

```
http://localhost:3000/#/participant-modules          ← Course catalog
http://localhost:3000/#/participant-ai-lab-nlp       ← NLP overview  
http://localhost:3000/#/participant-ai-lab-ml        ← ML overview
http://localhost:3000/#/participant-ai-lab-cv        ← CV overview
http://localhost:3000/#/participant-ai-lab-tokenization  ← NLP lesson 1
... (sisanya ada di AI_LAB_PROGRESS.md)
```

---

*Last updated: 2026-06-30 — Marchel & Faiz*
