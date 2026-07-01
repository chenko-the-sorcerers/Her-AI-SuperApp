# HerAI Fellowship — Handover Checkpoint

> **Untuk AI baru**: Tempel SELURUH file ini ke context window.  
> **Source of truth** — semua yang udah dikerjain, yang perlu dilanjutin, rule, pattern, dan referensi.

---

## ══════════════════════════════════
## 1. PROJECT OVERVIEW
## ══════════════════════════════════

**Her-AI-SuperApp** — vanilla HTML/CSS/JS SPA dashboard peserta fellowship HerAI.

| Layer | Teknologi |
|---|---|
| Frontend | Vanilla JS SPA, hash routing (`#/route`) |
| Server | Node.js `server.js` (dev server, port 3000) |
| Source materi | `Website-Portofolio-Chen/` (**JANGAN DI-EDIT**) |
| Live reference | `https://chen-silk.vercel.app/pages/ai-lab/` |

### Pola kerja
Copy konten dari AI Lab source → bungkus layout HerAI → inline CSS → Playwright test → commit per lesson.

Catatan sesi terakhir: fokus sempat pindah ke polish `#/participant-ai-lab-cv`, dan issue brace lama di `ai-lab-lesson.css` sudah FIXED.

---

## ══════════════════════════════════
## 2. APA YANG SUDAH DIKERJAKAN (Sesi Ini)
## ══════════════════════════════════

### 2.1 CV Course — 10 lessons ported
| # | Lesson | Route | Status |
|---|---|---|---|
| 1 | CNN Why | `#/participant-ai-lab-cv-cnn-why` | ✅ |
| 2 | CNN ReLU | `#/participant-ai-lab-cv-cnn-relu` | ✅ |
| 3 | Filtering Kernels | `#/participant-ai-lab-cv-filtering-kernels` | ✅ |
| 4 | CNN FC Layer | `#/participant-ai-lab-cv-cnn-fc` | ✅ |
| 5 | CNN Hands-on | `#/participant-ai-lab-cv-cnn-hands` | ✅ |
| 6 | CNN Architecture | `#/participant-ai-lab-cv-cnn-arch` | ✅ |
| 7 | Arch Builder | `#/participant-ai-lab-cv-cnn-arch-builder` | ✅ |
| 8 | Morphological | `#/participant-ai-lab-cv-morph` | ✅ |
| 9 | Image Processing | `#/participant-ai-lab-cv-opencv` | ✅ |
| 10 | Pixel Anatomy | `#/participant-ai-lab-cv-pixel` | ✅ |

### 2.2 CNN Intro fix
- Fix base64 stray quotes (`''`) in IMG_TUGU/IMG_SUROBOYO
- Add missing `IMAGES`, `currentConvImg`, `customImgSrc` variables
- Replace emoji with FA icons in LANDMARKS data

### 2.3 CV Overview polish
- Fill missing icon slots on `#/participant-ai-lab-cv`
- Improve hero spacing and card rhythm
- Increase contrast on code blocks so teks tetap kebaca

### 2.4 Generative AI overview
- Ported overview page (`#/participant-ai-lab-gen`) with animated noise canvas

### 2.5 NLP Pages — Full Rebuild dengan Inline CSS
| Page | Status | Notes |
|---|---|---|
| **tokenization** | ✅ Full rebuild | Tambah comparison table (IndoBERT/BERT/XLM-R/GPT-4), strategy cards pros/cons, morpho morphology demo, slang token viz, entitas lokal, code block syntax highlighting, lab interactive CSS |
| **preprocessing** | ✅ Full rebuild | Pipeline visual, regex pipeline, interactive boxes, stopword categories, stemming Nazief-Adriani, normalization 3-col grid, next-lesson-cta |
| **pos-ner** | ✅ Full rebuild | POS tagger, NER highlighter, Viterbi table, confusion matrix, quiz, ner-span pills, next-lesson-cta |
| **bow** | ✅ Full rebuild | 3-col demo grid, doc-term matrix, sparse viz, cosine sim cards, cmpare-2 pros/cons, lab explorer CSS |

### 2.6 Quiz Variable Collision Fix (CRITICAL)
`window.answerQuiz` didefinisikan di 4 file berbeda. Karena semua JS loaded di global scope dan di-overwrite oleh file yang load terakhir (image-processing-opencv.js), quiz di halaman lain rusak.

**Fix**: Rename semua `window.answerQuiz` menjadi unik:
- `pos-ner.js` → `answerQuiz` (keep original)
- `filtering-kernels.js` → `FK_answerQuiz`
- `morphological-transforms.js` → `MORPH_answerQuiz`
- `image-processing-opencv.js` → `OPENCV_answerQuiz`

Juga rename variable collisions: `quizAnswered`, `quizData`, `quizScore` → prefix per file.

### 2.7 Pyodide Auto-Init Guard
Wrap `initPyodide()` auto-call di filtering-kernels.js, morphological, opencv, pixel dengan:
```js
if (typeof loadPyodide !== "undefined") { initPyodide(); }
```

---

## ══════════════════════════════════
## 3. ARSITEKTUR & FILE STRUCTURE
## ══════════════════════════════════

```
Her-AI-SuperApp/
├── Website-Portofolio-Chen/          ← SOURCE MATERI (JANGAN DI-EDIT)
│   └── pages/ai-lab/                  ← Semua HTML lesson asli
│   └── js/                             ← Semua JS lesson asli
│   └── css/                            ← Semua CSS lesson asli
│
├── index.html                         ← Entry point — semua CSS/JS ref
├── js/
│   ├── router.js                       ← Route (3 TEMPAT per route!)
│   └── frontend/fellow-dashboard/
│       └── ai-lab/                     ← Semua JS lesson
│
├── css/frontend/fellow-dashboard/
│   ├── ai-lab-lesson.css              ← External CSS (brace issue FIXED)
│   └── modules.css / dashboard.css
│
├── pages/frontend/fellow-dashboard/
│   ├── modules.html                    ← Course catalog (26 cards)
│   └── ai-lab/
│       ├── nlp.html                    ← NLP Overview
│       ├── machine-learning.html       ← ML Overview
│       ├── computer-vision.html        ← CV Overview
│       ├── generative-ai.html          ← Gen AI Overview
│       └── lessons/                    ← Semua lesson HTML
│
├── assets/branding/                    ← Logo, persona images
├── docs-faiz/                          ← Dokumentasi
│   ├── HANDOVER_CHECKPOINT.md          ← FILE INI
│   ├── FULL_CHECKPOINT.md
│   ├── QUICK_START_NEW_AI.md
│   ├── AI_LAB_INTEGRATION_GUIDE.md
│   └── AI_LAB_PROGRESS.md
```

### Route Registration Pattern (3 TEMPAT di router.js)
```js
// 1. routes object (~line 50-77)
"/participant-ai-lab-cv-cnn-why": "/pages/.../lessons/cnn-why.html",

// 2. participantDashboardPages array (~line 285-330)
"/participant-ai-lab-cv-cnn-why",

// 3. handleRouting() init call (~line 465-490)
if (path === "/participant-ai-lab-cv-cnn-why" && typeof window.initAiLabCnnWhy === "function") {
    window.initAiLabCnnWhy();
}
```

**PENTING**: Init call HARUS ditaruh SEBELUM catch-all `startsWith("/participant-ai-")` di line ~490!

---

## ══════════════════════════════════
## 4. DESIGN SYSTEM
## ══════════════════════════════════

### Warna HerAI (Pink Theme)
```css
--ai-accent:   #f63392;          /* Primary pink */
--fellow-line: rgba(244,143,188,.26); /* Pink border */
--ai-bg:       #fff7fb;          /* Light pink bg */
--ai-bg2:      #fff0f7;          /* Softer pink */
--ai-card:     #ffffff;          /* White cards */
--ai-text:     #171827;          /* Dark text */
--ai-text2:    #6f7282;          /* Gray secondary */
--ai-text3:    #8e91a0;          /* Light gray */
--ai-mono:     'SF Mono','Space Mono',monospace;
--ai-r:        12px;
--ai-r-sm:     8px;
--ai-border:   var(--fellow-line);
--ai-border-s: rgba(246,51,146,.18);
```

### Font
- Heading: `Plus Jakarta Sans` (700-800 weight)
- Body: `Inter` (400-600)
- Mono/code: `var(--ai-mono)` — SF Mono / Space Mono

### AI Lab → HerAI CSS Variable Mapping
| AI Lab | HerAI |
|---|---|
| `--text` | `--ai-text` |
| `--text-2` | `--ai-text2` |
| `--text-3` | `--ai-text3` |
| `--font-mono` | `--ai-mono` |
| `--font-disp` | `'Plus Jakarta Sans', sans-serif` |
| `--border` | `--ai-border-s` |
| `--border-s` | `--ai-border-s` |
| `--accent` | `--ai-accent` |
| `--bg` | `--ai-bg` |
| `--bg-card` | `--ai-card` |
| `--r-sm` | `--ai-r-sm` |
| `--r` | `--ai-r` |

---

## ══════════════════════════════════
## 5. PORTING PATTERN (10 Steps)
## ══════════════════════════════════

```
STEP 1: Baca source dari Website-Portofolio-Chen/
        - Baca HTML + JS + CSS
        - Cari lesson-body boundaries
        - Cek IIFE count, emoji count, section IDs

STEP 2: Extract body content
        sed -n 'LINE_START,LINE_ENDp' source.html > body.html

STEP 3: Replace ALL emojis → FA icons
        python3 script with emoji_map dictionary
        Verifikasi: python3 -c "import re;t=open('file').read();print(len(list(re.finditer(r'[\U0001F000-\U0001FFFF]',t))))"

STEP 4: Fix internal links
        /pages/ai-lab/xxx.html → #/participant-ai-lab-xxx
        /ai-lab/xxx.html → #/participant-ai-lab-xxx

STEP 5: Build HerAI HTML wrapper
        - HerAI sidebar (copy dari template)
        - Breadcrumb ke overview page (NLP/ML/CV)
        - Hero section dengan title + meta row
        - Tabs: Materi / Katalog
        - Article: <article class="lesson-article ai-lab-content" id="XXX-content">
        - Footer: lesson-nav-footer (prev/next)
        - Right panel: progress card + section list

STEP 6: Add INLINE <style> (CRITICAL — lihat Section 6)
        - Semua CSS HARUS inline di dalam <style> tag di dalam HTML
        - Ganti var(--text-3) → var(--ai-text3), dll
        - Scope: .ai-lab-content .class-name { ... }
        - Include: interactive box, table, code block, nlc, responsive

STEP 7: Create JS file
        - Copy dari AI Lab source JS
        - HAPUS boilerplate: scroll progress, sidebar toggle, TOC, scroll reveal, prev/next nav, smooth scroll
        - Convert IIFE → named functions
        - Wrap dalam window.initAiLab[Nama] function
        - Preserve window.* functions yang dipanggil via onclick
        - Variable collision check (Section 7)

STEP 8: Register route (3 TEMPAT di router.js)
        - routes object
        - participantDashboardPages array
        - handleRouting() init call

STEP 9: Register JS ref di index.html
        <script src="/js/.../lesson.js?v=YYYYMMDD-NNN"></script>
        Gunakan cache buster baru

STEP 10: Playwright test
        - contentReady, sections, canvas, emoji, errors
```

---

## ══════════════════════════════════
## 6. CRITICAL: INLINE CSS REQUIREMENT
## ══════════════════════════════════

**KENAPA HARUS INLINE `<style>`?**

✅ **FIXED 2026-07-01** — 3 unclosed braces ditutup. CSS external sekarang ter-apply normal (1979 rules).

**SOLUSI**: Setiap lesson HTML HARUS punya inline `<style>` block di dalam file:
```html
<section class="fellow-dashboard ..." data-fellow-page="modules">
<style>
.ai-lab-content .kelas-baru { ... }
.ai-lab-content .kelas-lain { ... }
/* ... semua CSS yang dibutuhkan lesson ini ... */
</style>
<button class="fellow-menu-toggle" ...>
```

**4 halaman yang sudah punya inline CSS**: tokenization, preprocessing, pos-ner, bow
**15 halaman yang BELUM**: semua CV lessons + ML lessons + tfidf

---

## ══════════════════════════════════
## 7. VARIABLE COLLISION RULES
## ══════════════════════════════════

Semua JS file loaded di global scope. `const`/`let`/`var` di top level HARUS UNIQUE.

### Collision Check Command
```bash
for f in bow.js tfidf.js ml-intro.js ml-hypothesis.js ml-vc-dim.js ml-bias-variance.js cnn-intro.js cnn-why.js cnn-relu.js filtering-kernels.js cnn-fc.js cnn-hands.js cnn-arch.js morphological-transforms.js image-processing-opencv.js pixel-anatomy.js; do
  collisions=$(join -o 1.1 <(grep -oP '^(const|let|var|function) \w+' js/.../ai-lab/$f | sed 's/const\|let\|var\|function\s*//' | sort -u) <(grep -oP '^(const|let|var|function) \w+' js/.../ai-lab/NEW.js | sed 's/const\|let\|var\|function\s*//' | sort -u) 2>/dev/null)
  if [ -n "$collisions" ]; then echo "COLLISION with $f: $collisions"; fi
done
```

### Naming Convention untuk Collision
| Variable | Prefix Pattern |
|---|---|
| quizAnswered, quizData, quizScore | `PN_` (pos-ner), `FK_` (filtering-kernels), `MORPH_` (morphological), `OPENCV_` (opencv) |
| checkFinalScore | `MORPH_checkFinalScore`, `OPENCV_checkFinalScore` |
| pyodideInstance | `MORPH_pyodideInstance`, `OPENCV_pyodideInstance`, `PIXEL_pyodideInstance` |
| LAYER_COLORS, LAYER_DEFAULTS, layerIdCounter, mkLayer, PRESETS | `AB_` prefix (arch-builder) |
| DOC_COLORS, DOC_NAMES, DEFAULT_DOCS | `TFIDF_` prefix (tfidf) |

### Quiz Function Convention (CRITICAL!)
- `pos-ner.js`: `window.answerQuiz` (the original, keep this name)
- `filtering-kernels.js`: `window.FK_answerQuiz` + onclick: `FK_answerQuiz()`
- `morphological-transforms.js`: `window.MORPH_answerQuiz` + onclick: `MORPH_answerQuiz()`
- `image-processing-opencv.js`: `window.OPENCV_answerQuiz` + onclick: `OPENCV_answerQuiz()`

---

## ══════════════════════════════════
## 8. CURRENT STATUS PER PAGE
## ══════════════════════════════════

### NLP Course
| # | Page | Inline CSS | Playwright | Emoji | Notes |
|---|---|---|---|---|---|
| — | nlp (overview) | N/A | ✅ | 0 | TOC scroll-spy |
| 1 | tokenization | ✅ | ✅ | 0 | Full rebuild done |
| 2 | preprocessing | ✅ | ✅ | 0 | Full rebuild done |
| 3 | pos-ner | ✅ | ✅ | 0 | Full rebuild + quiz fix |
| 4 | bow | ✅ | ✅ | 0 | Full rebuild done |
| 5 | tfidf | ❌ | ✅ | 0 | **Perlu inline CSS** |

### ML Course
| # | Page | Inline CSS | Playwright | Emoji | Notes |
|---|---|---|---|---|---|
| — | ml (overview) | N/A | ✅ | 0 | TOC scroll-spy |
| 1 | ml-intro | ❌ (via external) | ✅ | 0 | ✅ CSS fix (3 braces + sticky) |
| 2 | ml-hypothesis | ❌ | ✅ | 0 | **Perlu inline CSS** |
| 3 | ml-vc-dim | ❌ | ⚠️ | 0 | **Perlu inline CSS** + ready flag |
| 4 | ml-bias-variance | ❌ | ⚠️ | 0 | **Perlu inline CSS** + ready flag |

### CV Course
| # | Page | Inline CSS | Playwright | Emoji | Notes |
|---|---|---|---|---|---|
| — | cv (overview) | N/A | ✅ | 0 | TOC scroll-spy, kern route fixed |
| 1 | cnn-intro | ❌ | ✅ | 0 | **Perlu inline CSS** |
| 2 | cnn-why | ❌ | ✅ | 0 | **Perlu inline CSS** |
| 3 | cnn-relu | ❌ | ✅ | 0 | **Perlu inline CSS** |
| 4 | filtering-kernels | ❌ | ✅ | 0 | **Perlu inline CSS** |
| 5 | cnn-fc | ❌ | ✅ | 0 | **Perlu inline CSS** |
| 6 | cnn-hands | ❌ | ✅ | 0 | **Perlu inline CSS** |
| 7 | cnn-arch | ❌ | ✅ | 0 | **Perlu inline CSS** |
| 8 | cnn-arch-builder | ❌ | ✅ | 0 | **Perlu inline CSS** |
| 9 | morphological | ❌ | ✅ | 0 | **Perlu inline CSS** |
| 10 | image-processing | ❌ | ✅ | 0 | **Perlu inline CSS** |
| 11 | pixel-anatomy | ❌ | ✅ | 0 | **Perlu inline CSS** |

### Other
| Page | Inline CSS | Playwright | Emoji | Notes |
|---|---|---|---|---|
| generative-ai (overview) | ❌ | ✅ | 0 | **Perlu inline CSS** |

---

## ══════════════════════════════════
## 9. KNOWN ISSUES
## ══════════════════════════════════

| Issue | Files | Status |
|---|---|---|
| `ai-lab-lesson.css` parse error | External CSS | CSS rules di line ~996+ tidak di-apply browser |
| Pyodide `loadPyodide is not defined` | FK, morph, opencv, pixel | Ada guard `typeof loadPyodide !== "undefined"` |
| `Cannot set properties of null (textContent)` | Semua halaman | Non-critical, dari settings.js/portal |
| ml-vc-dim + ml-bias-variance ready flag | 2 ML pages | `dataset.ready` tidak di-set tapi konten berfungsi |
| cv overview kern route mismatch | computer-vision.html | Sudah fix (`cv-kernels` → `cv-filtering-kernels`) |
| CNN Intro IMAGES variable | cnn-intro.js | Sudah fix (tambah IMAGES, currentConvImg, customImgSrc) |

---

## ══════════════════════════════════
## 10. NEXT TASKS (Prioritas)
## ══════════════════════════════════

### Priority 1: Inline CSS untuk 15 halaman
Yang paling kelihatan impact-nya:
1. **tfidf** — NLP, sering diakses
2. **cnn-intro** — CV, 23 canvas element
3. **ml-intro, ml-hypothesis, ml-vc-dim, ml-bias-variance** — ML course
4. **cnn-why, cnn-relu, cnn-fc, cnn-hands** — CV core lessons
5. **cnn-arch, cnn-arch-builder** — CV advanced
6. **filtering-kernels** — 12 canvas, perlu proper styling
7. **morphological, image-processing, pixel-anatomy** — CV heavy canvas

### Priority 2: Fix modules.html (Course Catalog)
Update 26 course cards — beberapa masih link ke placeholder `#/participant-modules`

### Priority 3: Pre-existing content gaps
- `pos-ner.html` section 07 (Lab + Quiz): interactive elements styling
- `preprocessing.html` section 08 (Pipeline Lab): toggle switches functionality

---

## ══════════════════════════════════
## 11. QUICK COMMANDS
## ══════════════════════════════════

### Start Server
```bash
cd /home/faiz/her2/2/Her-AI-SuperApp
setsid node server.js </dev/null >/tmp/server.log 2>&1 &
sleep 4 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/
```

### Playwright Test
```bash
cat > /tmp/test.cjs << 'ENDSCRIPT'
const { chromium } = require('/home/faiz/percobaan/SIKD/node_modules/playwright');
(async () => {
  const browser = await chromium.launch({ headless: true,
    executablePath: "/home/faiz/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome" });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = []; page.on("pageerror", e => errors.push(e.message));
  await page.goto("http://localhost:3000/#/YOUR-ROUTE", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(2500);
  const check = await page.evaluate(() => ({
    contentReady: document.getElementById("YOUR-content-id")?.dataset.ready,
    sections: document.querySelectorAll(".lesson-sec[id]").length,
    emojiCount: (document.body.innerText.match(/[\u{1F000}-\u{1FFFF}]/gu) || []).length,
  }));
  console.log(JSON.stringify(check, null, 2));
  console.log("Errors:", errors.filter(e=>!e.includes("textContent")&&!e.includes("loadPyodide")&&!e.includes("CONNECTION")).length > 0 ? errors : "None");
  await browser.close();
})();
ENDSCRIPT
cd /home/faiz/her2/2/Her-AI-SuperApp && timeout 30 node /tmp/test.cjs
```

### Check Emoji
```bash
python3 -c "import re;t=open('file.html').read();print(len(list(re.finditer(r'[\U0001F000-\U0001FFFF]',t))))"
```

### Check Variable Collisions
```bash
for f in bow.js tfidf.js ml-intro.js ml-hypothesis.js ml-vc-dim.js ml-bias-variance.js cnn-intro.js cnn-why.js cnn-relu.js filtering-kernels.js cnn-fc.js cnn-hands.js cnn-arch.js morphological-transforms.js image-processing-opencv.js pixel-anatomy.js; do
  collisions=$(join -o 1.1 <(grep -oP '^(const|let|var|function) \w+' js/frontend/fellow-dashboard/ai-lab/$f | sed 's/const\|let\|var\|function\s*//' | sort -u) <(grep -oP '^(const|let|var|function) \w+' js/frontend/fellow-dashboard/ai-lab/NEW.js | sed 's/const\|let\|var\|function\s*//' | sort -u) 2>/dev/null)
  if [ -n "$collisions" ]; then echo "COLLISION with $f: $collisions"; fi
done
```

### Git
```bash
git add [files] && git commit -m "feat: [nama] lesson — [deskripsi]"
# JANGAN git push kecuali diminta
```

---

## ══════════════════════════════════
## 12. NAVIGATION — ALL ROUTES
## ══════════════════════════════════

```
http://localhost:3000/#/participant-modules          ← Course catalog

# NLP
http://localhost:3000/#/participant-ai-lab-nlp       ← Overview
http://localhost:3000/#/participant-ai-lab-tokenization
http://localhost:3000/#/participant-ai-lab-preprocessing
http://localhost:3000/#/participant-ai-lab-pos-ner
http://localhost:3000/#/participant-ai-lab-bow
http://localhost:3000/#/participant-ai-lab-tfidf

# ML
http://localhost:3000/#/participant-ai-lab-ml        ← Overview
http://localhost:3000/#/participant-ai-lab-ml-intro
http://localhost:3000/#/participant-ai-lab-ml-hypothesis
http://localhost:3000/#/participant-ai-lab-ml-vc-dim
http://localhost:3000/#/participant-ai-lab-ml-bias-variance

# CV
http://localhost:3000/#/participant-ai-lab-cv        ← Overview
http://localhost:3000/#/participant-ai-lab-cv-cnn-intro
http://localhost:3000/#/participant-ai-lab-cv-cnn-why
http://localhost:3000/#/participant-ai-lab-cv-cnn-relu
http://localhost:3000/#/participant-ai-lab-cv-filtering-kernels
http://localhost:3000/#/participant-ai-lab-cv-cnn-fc
http://localhost:3000/#/participant-ai-lab-cv-cnn-hands
http://localhost:3000/#/participant-ai-lab-cv-cnn-arch
http://localhost:3000/#/participant-ai-lab-cv-cnn-arch-builder
http://localhost:3000/#/participant-ai-lab-cv-morph
http://localhost:3000/#/participant-ai-lab-cv-opencv
http://localhost:3000/#/participant-ai-lab-cv-pixel

# Gen AI
http://localhost:3000/#/participant-ai-lab-gen        ← Overview
```

---

## ══════════════════════════════════
## 13. REFERENCE LINKS
## ══════════════════════════════════

### Live Site (untuk cek tampilan asli)
| Page | URL |
|---|---|
| Tokenization | https://chen-silk.vercel.app/pages/ai-lab/tokenization.html |
| Preprocessing | https://chen-silk.vercel.app/pages/ai-lab/preprocessing.html |
| POS & NER | https://chen-silk.vercel.app/pages/ai-lab/pos-ner.html |
| Bag-of-Words | https://chen-silk.vercel.app/pages/ai-lab/bow.html |
| TF-IDF | https://chen-silk.vercel.app/pages/ai-lab/tfidf.html |
| ML Intro | https://chen-silk.vercel.app/pages/ai-lab/ml-intro.html |
| CNN Intro | https://chen-silk.vercel.app/pages/ai-lab/cnn-intro.html |
| CNN Why | https://chen-silk.vercel.app/pages/ai-lab/cnn-why.html |
| Filtering Kernels | https://chen-silk.vercel.app/pages/ai-lab/filtering-kernels.html |

### Local Source Code
```
Website-Portofolio-Chen/pages/ai-lab/[nama].html   ← Konten
Website-Portofolio-Chen/js/[nama].js                 ← Interaktivitas
Website-Portofolio-Chen/css/[nama].css               ← Styling
```

### HerAI Target
```
pages/frontend/fellow-dashboard/ai-lab/lessons/[nama].html  ← HTML
js/frontend/fellow-dashboard/ai-lab/[nama].js               ← JS
```

---

## ══════════════════════════════════
## 14. RULES SUMMARY (NEVER BREAK)
## ══════════════════════════════════

1. **JANGAN EDIT `Website-Portofolio-Chen/`** — source asli, baca + copy saja
2. **ZERO EMOJI** — semua harus FA icons. Cek HTML DAN JS
3. **PINK THEME** — accent `#f63392`, bukan biru/hijau/ungu
4. **CSS HARUS INLINE** — `<style>` tag di HTML, pakai HerAI variables
5. **3 PLACES PER ROUTE** — `routes` + `participantDashboardPages` + `handleRouting`
6. **IIFE → FUNCTION** — convert ke named function + panggil dari init
7. **VARIABLE COLLISION** — cek sebelum commit, prefix per file
8. **QUIZ FUNCTION UNIQUE** — `answerQuiz` harus di-prefix per file
9. **CACHE BUSTER** — selalu bump `?v=` di `index.html` setiap edit JS
10. **PLAYWRIGHT TEST** — setiap lesson baru
11. **COMMIT PER LESSON** — format: `feat: [nama] lesson — [deskripsi]`
12. **DON'T PUSH** — commit aman, push hanya kalau diminta
13. **Route init SEBELUM catch-all** — di atas `startsWith("/participant-ai-")`

---

*Last updated: 2026-07-02 WIB (CV overview polish + docs refresh)*  
*Session: CV course complete (10 lessons) + NLP rebuild (4 pages) + quiz collision fix*
*Total commits this session: 45+*
*Branch: `design`*
*Remote: `origin` → `chenko-the-sorcerers/Her-AI-SuperApp`*
