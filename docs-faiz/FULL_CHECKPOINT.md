# HerAI Fellowship — Full Project Checkpoint

> **Untuk AI baru**: File ini adalah **single source of truth**.  
> Tempel seluruh file ini ke context window. Lo akan langsung paham project dari A-Z.
> **Jangan buat asumsi. Jangan mengarang. Baca dulu, pahami, baru eksekusi.**

---

## ═══════════════════════════════════════════
## 1. PROJECT OVERVIEW
## ═══════════════════════════════════════════

### Apa ini?
**Her-AI-SuperApp** — Single Page Application (SPA) vanilla HTML/CSS/JS untuk dashboard peserta fellowship HerAI. Ada 3 course yang di-port dari AI Lab portfolio (`Website-Portofolio-Chen/`) ke dalam dashboard peserta dengan **tema pink HerAI (#f63392)**.

### Stack
| Layer | Teknologi |
|---|---|
| Frontend | Vanilla JS SPA, hash routing (`#/route`) |
| Server | Node.js `server.js` (dev server + GAS proxy) |
| Backend | Google Apps Script (`gas/Code.gs`) |
| Source materi | `Website-Portofolio-Chen/` (portfolio site, JANGAN DI-EDIT) |

### Sumber materi
Semua konten course diambil dari **AI Lab portfolio** di folder `Website-Portofolio-Chen/pages/ai-lab/`. File di folder ini **DIBACA saja**, **JANGAN DIEDIT**. Polanya: copy konten dari AI Lab → bungkus dengan layout HerAI → tambahin interaktivitas.

---

## ═══════════════════════════════════════════
## 2. APA YANG SUDAH DIKERJAKAN
## ═══════════════════════════════════════════

### Dashboard Fixes
| Fix | File | Deskripsi |
|---|---|---|
| Sidebar expand/collapse | `js/.../settings.js`, `css/.../dashboard.css` | Logo bisa diklik untuk expand/collapse sidebar. Default expanded. Cache buster di `index.html` |
| Course cards clickable | `js/.../settings.js` (initModuleInteractions) | Klik di mana aja di card → navigasi ke lesson |
| Topic cards clickable | `js/.../ailab-overview.js` | Klik di mana aja di topic card di overview → navigasi ke lesson |

### NLP Course (5 lessons + overview)
| # | Lesson | Route | Source (AI Lab) | JS File | Interaktif |
|---|---|---|---|---|---|
| 1 | Tokenization | `#/participant-ai-lab-tokenization` | `tokenization.html` | `tokenization.js` | Live tokenizer playground (word/BPE/char) |
| 2 | Preprocessing | `#/participant-ai-lab-preprocessing` | `preprocessing.html` | `preprocessing.js` | Pipeline lab 5 toggle + inline demos |
| 3 | POS Tagging & NER | `#/participant-ai-lab-pos-ner` | `pos-ner.html` | `pos-ner.js` | POS lab + NER lab + 6 soal quiz |
| 4 | Bag-of-Words | `#/participant-ai-lab-bow` | `bow.html` | `bow.js` | Static vector demo + sparse visual |
| 5 | TF-IDF | `#/participant-ai-lab-tfidf` | `tfidf.html` | `tfidf.js` | IDF scale demo + TF-IDF word demo |

### ML Course (4 lessons + overview)
| # | Lesson | Route | Source (AI Lab) | JS File | Interaktif |
|---|---|---|---|---|---|
| 1 | ML Intro | `#/participant-ai-lab-ml-intro` | `ml-intro.html` | `ml-intro.js` | Motivation cards + paradigm cards |
| 2 | Hypothesis & Model | `#/participant-ai-lab-ml-hypothesis` | `ml-hypothesis.html` | `ml-hypothesis.js` | Canvas: input space viz + tab switcher |
| 3 | VC Dimension | `#/participant-ai-lab-ml-vc-dim` | `ml-vc-dim.html` | `ml-vc-dim.js` | Canvas: shatter demo |
| 4 | Bias-Variance | `#/participant-ai-lab-ml-bias-variance` | `ml-bias-variance.html` | `ml-bias-variance.js` | 3 canvas: dartboard + poly + decomp + 16 canvases |

### CV Course (1 lesson + overview)
| # | Lesson | Route | Source (AI Lab) | JS File | Interaktif |
|---|---|---|---|---|---|
| 1 | CNN Intro | `#/participant-ai-lab-cv-cnn-intro` | `cnn-intro.html` | `cnn-intro.js` | **23 canvas**: convolution animator, feature maps, pipeline demo, image upload |

### Overview Pages
| Course | Route | JS File |
|---|---|---|
| NLP | `#/participant-ai-lab-nlp` | `nlp-overview.js` |
| Machine Learning | `#/participant-ai-lab-ml` | `ml-overview.js` |
| Computer Vision | `#/participant-ai-lab-cv` | `cv-overview.js` |

### Module Catalog
`modules.html` → 26 course cards. Yang udah aktif: NLP, ML, CV. Sisanya link ke `#/participant-modules` (placeholder).

### Documentation
| File | Fungsi |
|---|---|
| `docs-faiz/AI_LAB_INTEGRATION_GUIDE.md` | Step-by-step guide porting lesson baru |
| `docs-faiz/AI_LAB_PROGRESS.md` | Tracker apa yang udah/belum |
| `docs-faiz/QUICK_START_NEW_AI.md` | Ringkasan 1 halaman |
| **`docs-faiz/FULL_CHECKPOINT.md`** | **File ini — paling lengkap** |

---

## ═══════════════════════════════════════════
## 3. ARSITEKTUR & FILE STRUCTURE
## ═══════════════════════════════════════════

### Struktur folder AI Lab (HerAI)
```
pages/frontend/fellow-dashboard/
├── ai-lab/
│   ├── nlp.html                      ← NLP Overview (TOC sidebar + topic cards)
│   ├── machine-learning.html         ← ML Overview
│   ├── computer-vision.html          ← CV Overview
│   └── lessons/
│       ├── tokenization.html         ← NLP 1
│       ├── preprocessing.html        ← NLP 2
│       ├── pos-ner.html             ← NLP 3
│       ├── bow.html                 ← NLP 4
│       ├── tfidf.html               ← NLP 5
│       ├── ml-intro.html            ← ML 1
│       ├── ml-hypothesis.html       ← ML 2
│       ├── ml-vc-dim.html           ← ML 3
│       ├── ml-bias-variance.html    ← ML 4
│       └── cnn-intro.html           ← CV 1

js/frontend/fellow-dashboard/
├── settings.js                       ← Core dashboard logic (sidebar, user menu, etc.)
└── ai-lab/
    ├── nlp-overview.js               ← NLP TOC scroll-spy + clickable cards
    ├── ml-overview.js               ← ML TOC scroll-spy
    ├── cv-overview.js               ← CV TOC scroll-spy
    ├── tokenization.js              ← NLP 1 playground
    ├── preprocessing.js             ← NLP 2 pipeline lab
    ├── pos-ner.js                   ← NLP 3 POS/NER lab + quiz
    ├── bow.js                       ← NLP 4 vector demo
    ├── tfidf.js                     ← NLP 5 IDF/TF-IDF demos
    ├── ml-intro.js                  ← ML 1 (minimal init)
    ├── ml-hypothesis.js             ← ML 2 canvas
    ├── ml-vc-dim.js                 ← ML 3 canvas
    ├── ml-bias-variance.js          ← ML 4 3 canvases
    └── cnn-intro.js                 ← CV 1 23 canvases (151KB!)

css/frontend/fellow-dashboard/
├── modules.css                       ← Main module/lesson CSS
├── ai-lab-lesson.css                ← **ALL AI Lab lesson CSS** (scoped .ai-lab-content)
└── dashboard.css                     ← Dashboard layout CSS

js/router.js                          ← Route definitions (3 places per route!)
index.html                            ← CSS + JS references
pages/frontend/fellow-dashboard/modules.html  ← Course catalog (26 cards)
```

### Route registration pattern (3 places di router.js)
```js
// 1. routes object (line ~13-77)
"/participant-ai-lab-NEW": "/pages/frontend/fellow-dashboard/ai-lab/lessons/NEW.html",

// 2. participantDashboardPages array (line ~247-295)
"/participant-ai-lab-NEW",

// 3. handleRouting init call (line ~433+)
if (path === "/participant-ai-lab-NEW" && typeof window.initAiLabNEW === "function") {
    window.initAiLabNEW();
}
```

### JS reference pattern (index.html)
```html
<script src="/js/frontend/fellow-dashboard/ai-lab/NEW.js?v=20260630-ai-lab"></script>
```

---

## ═══════════════════════════════════════════
## 4. DESIGN SYSTEM
## ═══════════════════════════════════════════

### Warna (Tema HerAI Pink)
```css
--fellow-pink: #f63392;      /* Primary accent - PASTIKAN ini dipake di mana-mana */
--fellow-line: rgba(244,143,188,.26); /* Border */
--ai-accent: #f63392;        /* SAMA dengan fellow-pink */
--ai-bg: #fff7fb;            /* Light pink background */
--ai-bg2: #fff0f7;           /* Softer pink */
--ai-card: #ffffff;          /* White cards */
--ai-text: #171827;          /* Dark text */
--ai-text2: #6f7282;         /* Gray secondary */
--ai-text3: #8e91a0;         /* Light gray tertiary */
```

### Font
- Heading: `Plus Jakarta Sans` (800 weight)
- Body: `Inter` (400-600 weight)
- Mono: `SF Mono, Space Mono` (code, math, stats)

### CSS Scoping Rule
**SEMUA CSS untuk lesson HARUS di-scope dengan `.ai-lab-content`**

```css
/* ✅ BENAR */
.ai-lab-content .new-class { ... }

/* ✅ BENAR untuk overview pages */
.ai-lab-overview .new-class { ... }

/* ❌ SALAH — jangan pernah global */
.new-class { ... }
```

---

## ═══════════════════════════════════════════
## 5. PORTING PATTERN (Step-by-Step)
## ═══════════════════════════════════════════

### Step 1: Baca source AI Lab
```bash
wc -l Website-Portofolio-Chen/pages/ai-lab/NAMA.html   # cek size
grep -n 'sec-\|canvas\|lesson-sec' ...html               # cek section
grep -n 'function\|})();\|window\.' .../js/NAMA.js       # cek IIFE + functions
```

### Step 2: Buat HTML HerAI
```html
<section class="fellow-dashboard fellow-modules-page lesson-detail-page" data-fellow-page="modules">
  <aside class="fellow-sidebar">
    <!-- COPY dari tokenization.html — sidebar standar -->
  </aside>
  <main class="fellow-main">
    <header class="lesson-topbar">
      <nav class="lesson-breadcrumb">
        <!-- Link balik ke overview page (nlp/ml/cv) -->
      </nav>
      <div class="fellow-actions"><!-- search + notif + user --></div>
    </header>
    <div class="lesson-layout">
      <div class="lesson-main-content">
        <section class="lesson-hero">
          <!-- Judul + meta row + persona image -->
        </section>
        <section class="lesson-material-panel">
          <div class="lesson-tabs"><!-- tab navigasi --></div>
          <article class="lesson-article ai-lab-content" id="NAMA-content">
            <!-- ⚠️ ISI KONTEN DARI AI LAB DI SINI ⚠️ -->
          </article>
          <footer class="lesson-nav-footer"><!-- prev/next --></footer>
        </section>
      </div>
      <aside class="lesson-right-panel">
        <!-- progress card + section list -->
      </aside>
    </div>
  </main>
</section>
```

### Step 3: Extract konten + replace AI Lab links
```bash
# Extract body dari AI Lab source
sed -n '[LINE_START],[LINE_END]p' Website-Portofolio-Chen/pages/ai-lab/SOURCE.html >> NEW.html

# Remove AI Lab script tags (shared.js, lang.js, NAMA.js)
sed -i '/shared.js\|lang.js\|NAMA.js/d' NEW.html

# Fix internal links ke HerAI routes
sed -i 's|href="/pages/ai-lab/OLD.html"|href="#/participant-ai-lab-NEW"|g' NEW.html
```

### Step 4: Ganti SEMUA emoji dengan FA icons
```bash
sed -i \
  -e 's/🧠/<i class="fas fa-brain"><\/i>/g' \
  -e 's/📊/<i class="fas fa-chart-simple"><\/i>/g' \
  ... NEW.html

# Verifikasi 0 emoji
node -e 'const fs=require("fs");const t=fs.readFileSync("NEW.html","utf8");console.log("emojis:",[...t.matchAll(/[\u{1F000}-\u{1FFFF}]/gu)].length);'
```

### Step 5: Buat JS file
```javascript
'use strict';

/* ═══ HerAI [Nama Lesson] — AI Lab port ═══ */

/* ── Data & Functions dari AI Lab source ───── */
// Copy semua data + functions dari js/NAMA.js
// TAPI: hapus boilerplate (scroll progress, sidebar toggle, TOC, prev/next nav)

/* ── Init ──────────────────────────────────── */
window.initAiLab[NamaCamelCase] = function() {
  var content = document.getElementById('NAMA-content');
  if (!content || content.dataset.ready) return;
  content.dataset.ready = 'true';
  
  // Panggil semua canvas drawing functions di sini
  if (typeof drawCanvas1 === 'function') drawCanvas1();
  if (typeof drawCanvas2 === 'function') drawCanvas2();
};
```

### Step 6: Convert IIFE → Function Declaration
```javascript
// ❌ SEBELUM (IIFE - runs immediately, DOM not ready)
(function () {
  const canvas = document.getElementById('myCanvas');
  if (!canvas) return;
  // ...drawing code...
})();

// ✅ SESUDAH (Function - called from init, DOM ready)
function drawMyCanvas() {
  const canvas = document.getElementById('myCanvas');
  if (!canvas) return;
  // ...drawing code...
}
```

### Step 7: Register route (3 places)
```js
// router.js
// 1. routes object
"/participant-ai-lab-NEW": "/pages/.../lessons/NEW.html",

// 2. participantDashboardPages array
"/participant-ai-lab-NEW",

// 3. handleRouting() init call
if (path === "/participant-ai-lab-NEW" && typeof window.initAiLabNEW === "function") {
    window.initAiLabNEW();
}
```

### Step 8: Add JS ref di index.html
```html
<script src="/js/.../NEW.js?v=20260630-ai-lab"></script>
```

### Step 9: Update Overview page link
```html
<!-- Di nlp.html / machine-learning.html / computer-vision.html -->
<a href="#/participant-ai-lab-NEW">Nama Lesson</a>
<!-- GANTI dari href="#/participant-modules" -->
```

### Step 10: Test Playwright
```bash
node --input-type=module <<'ENDSCRIPT'
import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true,
  executablePath: "/home/faiz/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", e => errors.push(e.message));
await page.goto("http://localhost:3000/#/YOUR-ROUTE", { waitUntil: "networkidle", timeout: 15000 });
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

## ═══════════════════════════════════════════
## 6. COMMON BUGS & FIXES
## ═══════════════════════════════════════════

| Bug | Penyebab | Fix |
|---|---|---|
| Page blank/404 | Route gak terdaftar di router.js | Cek 3 tempat registrasi route |
| `function is not defined` | IIFE running before DOM ready | Convert IIFE → function + call from init |
| `Identifier already declared` | `const`/`let` redeclared di 2 JS file | Prefix dengan unique name |
| `initAiLab* is undefined` | JS file punya error atau gak ke-load | Cek syntax + cek index.html ref |
| `Cannot set innerHTML of null` | IIFE runs on page load, element doesn't exist yet | Convert IIFE → function, call from init AFTER DOM injected |
| `<script>` gak execute | `innerHTML` doesn't run script tags | Pindahin const/vars dari HTML ke JS file |
| Route match wrong handler | `startsWith("/participant-ai-")` catches too early | Taruh `/participant-ai-lab-*` check SEBELUM `/participant-ai-*` |
| `ERR_CONNECTION_REFUSED :8092` | Participant portal service gak nyala | **Ignore** — expected di local dev, ada fallback |
| Emoji masih ada | Belum diganti di JS generated content atau HTML | Cek keduanya |
| CSS gak applied | Class gak di-scope | Semua harus `.ai-lab-content .class-name` |

---

## ═══════════════════════════════════════════
## 7. RULES (NEVER EVER BREAK)
## ═══════════════════════════════════════════

1. **NO EMOJI** — Semua emoji harus diganti FA icons. Cek dengan: `grep -cP '[\x{1F000}-\x{1FFFF}]' file.html`
2. **PINK THEME** — Accent `#f63392`, bukan biru/hijau/ungu. Semua warna harus konsisten.
3. **DON'T EDIT PORTFOLIO** — `Website-Portofolio-Chen/` adalah SOURCE. Copy saja, jangan edit.
4. **3 PLACES PER ROUTE** — `routes` object + `participantDashboardPages` array + `handleRouting` init
5. **CSS SCOPED** — Semua CSS di `.ai-lab-content` atau `.ai-lab-overview`
6. **IIFE → FUNCTION** — Semua `(function(){...})()` harus jadi function declaration + dipanggil dari init
7. **VARIABLE COLLISIONS** — Cek sebelum commit. Semua AI Lab JS file loaded di global scope.
8. **TEST PLAYWRIGHT** — Setiap lesson baru harus di-test.
9. **COMMIT PER LESSON** — Satu lesson = satu commit. Message format: `feat: [Nama] lesson — [deskripsi]`
10. **DON'T PUSH UNLESS TOLD** — Commit aman, push hanya kalau diminta.
11. **ZERO DEAD LINKS** — Semua link di overview pages harus mengarah ke halaman yang ada.
12. **CONTENT ID** — Setiap lesson page harus punya `<article id="NAMA-content">` untuk init guard.

---

## ═══════════════════════════════════════════
## 8. NEXT TASKS (urut prioritas)
## ═══════════════════════════════════════════

### Priority 1: Fix CNN Intro base64 error
- File: `js/.../ai-lab/cnn-intro.js`
- Issue: Single quote `'` di dalam string base64 `IMG_TUGU` (line 6)
- Fix: Hapus karakter `'` dari base64 data

### Priority 2: Port CV lessons
| # | Lesson | Source | Effort |
|---|---|---|---|
| 1 | CNN Why | `cnn-why.html` | 🟢 Mudah (prose only) |
| 2 | CNN ReLU | `cnn-relu.html` | 🟢 Mudah |
| 3 | Filtering Kernels | `filtering-kernels.html` | 🔴 Berat (47K JS canvas) |
| 4 | CNN FC | `cnn-fc.html` | 🟡 Sedang |
| 5 | CNN Hands-on | `cnn-hands.html` | 🟡 Sedang |

### Priority 3: Port course overview pages
| Course | Source | Status |
|---|---|---|
| Generative AI | `generative-ai.html` | Belum ada overview |
| Deep Learning | No source | Perlu dibuat dari nol |

### Priority 4: Fill remaining modules
- NLP Modules 3-6 (Classical → Transformers) — tidak ada lesson pages di AI Lab
- ML Modules 2-8 (Supervised → Unsupervised) — tidak ada lesson pages di AI Lab

---

## ═══════════════════════════════════════════
## 9. QUICK COMMANDS
## ═══════════════════════════════════════════

### Check emoji
```bash
node -e 'const fs=require("fs");const t=fs.readFileSync("file.html","utf8");console.log("emojis:",[...t.matchAll(/[\u{1F000}-\u{1FFFF}]/gu)].length);'
```

### Check variable collisions
```bash
for f in bow.js tfidf.js ml-intro.js ml-hypothesis.js ml-vc-dim.js ml-bias-variance.js cnn-intro.js; do
  echo "=== vs $f ==="
  join -o 1.1 <(grep -oP '^(const|let|var) \w+' js/.../ai-lab/$f | sed 's/const\|let\|var\s*//' | sort -u) <(grep -oP '^(const|let|var) \w+' js/.../ai-lab/NEW.js | sed 's/const\|let\|var\s*//' | sort -u)
done
```

### Check IIFE leftovers
```bash
grep -n '})();' js/frontend/fellow-dashboard/ai-lab/FILE.js
```

### Test server
```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/path/to/file
```

### Commit
```bash
git add [files] && git commit -m "feat: [name] — [desc]"
# JANGAN git push kecuali diminta
```

### Navigasi utama
```
http://localhost:3000/#/participant-modules          ← Course catalog
http://localhost:3000/#/participant-ai-lab-nlp       ← NLP overview
http://localhost:3000/#/participant-ai-lab-ml        ← ML overview
http://localhost:3000/#/participant-ai-lab-cv        ← CV overview
http://localhost:3000/#/participant-ai-lab-tokenization   ← NLP 1
http://localhost:3000/#/participant-ai-lab-preprocessing  ← NLP 2
http://localhost:3000/#/participant-ai-lab-pos-ner        ← NLP 3
http://localhost:3000/#/participant-ai-lab-bow            ← NLP 4
http://localhost:3000/#/participant-ai-lab-tfidf          ← NLP 5
http://localhost:3000/#/participant-ai-lab-ml-intro       ← ML 1
http://localhost:3000/#/participant-ai-lab-ml-hypothesis   ← ML 2
http://localhost:3000/#/participant-ai-lab-ml-vc-dim       ← ML 3
http://localhost:3000/#/participant-ai-lab-ml-bias-variance ← ML 4
http://localhost:3000/#/participant-ai-lab-cv-cnn-intro    ← CV 1
```

---

*Last updated: 2026-06-30*  
*Total: 12 lesson pages + 3 overview pages + 12 JS files + 1 CSS file = 28 files*  
*Total commits: 16 (design branch)*
