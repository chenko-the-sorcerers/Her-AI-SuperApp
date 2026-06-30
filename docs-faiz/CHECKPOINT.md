# HerAI Fellowship — Ultimate Checkpoint

> **Untuk AI baru**: Baca file ini dulu. Tanpa asumsi. Semua fakta dari source code.
> **Tanggal**: 2026-06-30 | **Total**: 15 halaman (12 lesson + 3 overview) + 10 JS + 1 CSS

---

## 1. Project Overview

**Her-AI-SuperApp** adalah vanilla JS SPA untuk fellowship AI bagi 100 perempuan Indonesia.
Frontend: hash routing (`#/route`), partial page loading via `innerHTML`.
Backend: Google Apps Script (GAS) + Google Sheets (tidak disentuh dalam perubahan ini).

### Apa yang udah dikerjakan:
Mengintegrasikan konten pembelajaran dari **AI Lab (Website-Portofolio-Chen/)** ke HerAI participant dashboard.
- **12 lesson pages** di-port dari AI Lab → HerAI dengan layout dashboard + interactive elements
- **3 overview pages** (NLP, ML, CV) dibangun dengan TOC sidebar + scroll-spy
- **Semua emoji diganti FA icons**
- **Tema diubah dari dark (#000) ke pink HerAI (#f63392 / #fff7fb)**
- **Course cards di modules.html dibuat clickable sepenuhnya**
- **Sidebar dashboard difix** (expand/collapse + logo size)

---

## 2. File Structure — Existing Files

### Lesson HTML (10 files)
```
pages/frontend/fellow-dashboard/ai-lab/lessons/
├── tokenization.html      — NLP Module 1, interactive tokenizer playground
├── preprocessing.html     — NLP Module 1, pipeline lab (5 toggles)
├── pos-ner.html          — NLP Module 1, POS lab + NER lab + quiz (6 questions)
├── bow.html              — NLP Module 2, vector demo + sparse visual (1200 cells)
├── tfidf.html            — NLP Module 2, TF/IDF calculators + search lab
├── ml-intro.html         — ML Module 1, 6 sections prose + motivation cards
├── ml-hypothesis.html    — ML Module 1, canvas inputSpaceCanvas + tab switcher
├── ml-vc-dim.html        — ML Module 1, shatterCanvas + capacity spectrum
├── ml-bias-variance.html — ML Module 1, 9 sections, polyCanvas + decompCanvas (16 canvases)
├── cnn-intro.html        — CV, 6 sections, 23 canvases, convolution visualizer + pipeline demo
```

### Overview HTML (3 files)
```
pages/frontend/fellow-dashboard/ai-lab/
├── nlp.html              — NLP overview, 6 modules, 14 topics, TOC sidebar
├── machine-learning.html — ML overview, 8 modules, 25 topics, TOC sidebar
├── computer-vision.html  — CV overview, 6 modules, 20 topics, TOC sidebar
```

### JS Files (12 files)
```
js/frontend/fellow-dashboard/ai-lab/
├── tokenization.js       — Tokenizer playground logic
├── preprocessing.js      — Pipeline lab (5 interactive demos)
├── pos-ner.js            — POS tagger + NER matcher + quiz system
├── bow.js                — Static demo + sparse visual + cosine lab
├── tfidf.js              — TF/IDF compute + search lab
├── ml-intro.js           — Minimal init (no interactive logic)
├── ml-hypothesis.js      — drawInputSpace() canvas + switchDemo()
├── ml-vc-dim.js          — drawShatterCanvas() + rng()
├── ml-bias-variance.js   — drawDartboards() + drawPolyCanvas() + drawDecompCanvas()
├── cnn-intro.js          — 40 functions, convolution animator, pipeline demo, 23 canvases
├── nlp-overview.js       — TOC scroll-spy + clickable topic cards
├── ml-overview.js        — TOC scroll-spy + clickable topic cards
├── cv-overview.js        — TOC scroll-spy + clickable topic cards (copy dari ml-overview)
```

### Key CSS (1 file)
```
css/frontend/fellow-dashboard/ai-lab-lesson.css  — 1529 lines
  Semua styling AI Lab, di-scope .ai-lab-content atau .ai-lab-overview
```

### Core files (diubah)
```
js/router.js             — 626 lines, hash routing, 15+ AI Lab routes
index.html               — CSS + JS references (10+ AI Lab files)
pages/.../modules.html   — 218 lines, 26 course cards, 3 linked ke overview
js/.../settings.js       — Sidebar logic + module interactions
css/.../dashboard.css    — Logo fix (bigger in collapsed state)
```

---

## 3. Architecture Pattern

### SPA Routing (how pages load)
```
1. User clicks link → hash changes (#/participant-ai-lab-xxx)
2. router.js reads hash → finds route in `routes` object
3. fetch() gets HTML partial from pages/.../ai-lab/lessons/xxx.html
4. appContent.innerHTML = response.text() → DOM ready
5. handleRouting() calls window.initAiLabXxx() → JS initializes interactivity
```

### Route Registration (3 places in router.js)
```
1. routes object:       "/participant-ai-lab-xxx": "/pages/.../ai-lab/lessons/xxx.html"
2. participantDashboardPages array:  add "/participant-ai-lab-xxx"
3. handleRouting() init:            add if-block calling window.initAiLabXxx()
```

### Lesson HTML Template
Every lesson page wraps content in this structure:
```html
<section class="fellow-dashboard fellow-modules-page lesson-detail-page" data-fellow-page="modules">
  <aside class="fellow-sidebar">{STANDARD SIDEBAR HTML}</aside>
  <main class="fellow-main">
    <header class="lesson-topbar">{BREADCRUMB + ACTIONS}</header>
    <div class="lesson-layout">
      <div class="lesson-main-content">
        <section class="lesson-hero">{TITLE + META + PERSONA IMG}</section>
        <section class="lesson-material-panel">
          <div class="lesson-tabs">{TAB NAVIGATION}</div>
          <article class="lesson-article ai-lab-content" id="xxx-content">
            {CONTENT FROM AI LAB — extracted lesson body}
          </article>
          <footer class="lesson-nav-footer">{PREV/NEXT LINKS}</footer>
        </section>
      </div>
      <aside class="lesson-right-panel">
        {PROGRESS CARD + LESSON LIST}
      </aside>
    </div>
  </main>
</section>
```

### Overview HTML Template
```html
<section class="fellow-dashboard fellow-modules-page ai-lab-overview" data-fellow-page="modules">
  <aside class="fellow-sidebar">{STANDARD SIDEBAR}</aside>
  <main class="fellow-main">
    <header class="lesson-topbar">{BREADCRUMB + ACTIONS}</header>
    <div class="ai-overview-progress" id="xxxProgressBar">{...}</div>
    <section class="ai-overview-hero">{HERO + STATS}</section>
    <div class="ai-overview-layout">
      <div class="ai-overview-content" id="xxxContent">
        {MODULE SECTIONS WITH TOPIC CARDS}
      </div>
      <aside class="ai-overview-toc" id="xxxToc">
        {TOC LINKS + PROGRESS}
      </aside>
    </div>
  </main>
</section>
```

### JS Init Pattern
```js
'use strict';
/* ═══ HerAI [Lesson Name] — AI Lab port ═══ */

// ... DATA + FUNCTIONS from AI Lab source ...

window.initAiLabXxx = function() {
  var content = document.getElementById('xxx-content');
  if (!content || content.dataset.ready) return;
  content.dataset.ready = 'true';
  
  // Call all converted IIFEs here
  if (typeof drawSomething === 'function') drawSomething();
};
```

### CSS Pattern
```css
.ai-lab-content .class-name { }  /* For lesson content */
.ai-lab-overview .class-name { }  /* For overview pages */
```
**Never** use global selectors — always scope with `.ai-lab-content` or `.ai-lab-overview`.

---

## 4. Design System

### Colors
```css
--fellow-pink: #f63392       /* Primary accent (ALL AI Lab elements) */
--fellow-line: rgba(244,143,188,.26)  /* Border color */
--ai-accent: #f63392         /* AI Lab accent (must match fellow-pink) */
--ai-bg: #fff7fb             /* Light pink background */
--ai-bg2: #fff0f7            /* Softer pink (worked boxes, cards) */
--ai-card: #ffffff           /* White cards */
--ai-text: #171827           /* Dark text */
--ai-text2: #6f7282          /* Secondary text (gray) */
--ai-text3: #8e91a0          /* Tertiary text (light gray) */
--ai-border: var(--fellow-line)     /* Borders */
--ai-border-s: rgba(246,51,146,.18)  /* Solid borders */
```

### Fonts
- Heading: `Plus Jakarta Sans` (800 weight)
- Body: `Inter` (400-600 weight)
- Mono (code, math, stats): `SF Mono, Space Mono`
- Never use Syne (that's portfolio font)

### Emoji → FA Icon Replacements
**NEVER use emoji.** Always replace with Font Awesome:
| Emoji | FA Class | Context |
|---|---|---|
| 🧠 | `fas fa-brain` | AI/ML concepts |
| 📊 | `fas fa-chart-simple` | Charts/data |
| 📐 | `fas fa-ruler-combined` | Math/measurement |
| 🎯 | `fas fa-bullseye` | Target/goal |
| 💡 | `fas fa-lightbulb` | Insight/idea |
| ⚠️ | `fas fa-triangle-exclamation` | Warning |
| ✅ | `fas fa-circle-check` | Success/good |
| ❌ | `fas fa-circle-xmark` | Error/bad |
| 🔑 | `fas fa-key` | Key concept |
| 🚀 | `fas fa-rocket` | Launch/start |
| 🧪 | `fas fa-flask` | Lab/experiment |
| 🔬 | `fas fa-microscope` | Deep analysis |
| 📝 | `fas fa-pen-to-square` | Writing/notes |
| 🔤 | `fas fa-font` | Text/characters |
| 🏷️ | `fas fa-tag` | Labels/tags |

**Verify with:** `node -e 'const fs=require("fs");const t=fs.readFileSync("file.html","utf8");console.log("emojis:",[...t.matchAll(/[\u{1F000}-\u{1FFFF}]/gu)].length);'`

---

## 5. Variable Name Collisions

**CRITICAL**: All JS files are loaded in global scope via `<script>` tags. `const`/`let`/`var` MUST be unique across ALL files.

### Known collisions (FIXED):
```
bow.js + tfidf.js: DOC_COLORS → TFIDF_DOC_COLORS / DOC_NAMES → TFIDF_DOC_NAMES
bow.js + tfidf.js: DEFAULT_DOCS → TFIDF_DEFAULT_DOCS / STOP_WORDS → ID_STOPWORDS
```

### Check command for new files:
```bash
for f in $(ls js/frontend/fellow-dashboard/ai-lab/*.js); do
  echo "=== $f ==="
  join <(grep -oP '^(const|let|var) \w+' js/frontend/fellow-dashboard/ai-lab/NEW_FILE.js | sed 's/const\|let\|var\s*//' | sort -u) \
       <(grep -oP '^(const|let|var) \w+' $f | sed 's/const\|let\|var\s*//' | sort -u)
done
```

---

## 6. Step-by-Step: Porting New Lesson

### Step 1: Read source
```bash
wc -l Website-Portofolio-Chen/pages/ai-lab/[name].html
wc -l Website-Portofolio-Chen/js/[name].js
grep -n 'sec-\|canvas\|id="\|IIFE'  Website-Portofolio-Chen/pages/ai-lab/[name].html
```

### Step 2: Create HTML (extract body from AI Lab)
- Copy header template from tokenization.html
- Extract body from AI Lab: `sed -n '[start],[end]p' AI_Lab_source.html`
- Append footer (right panel + closing tags)
- Replace AI Lab links → HerAI routes
- Strip ALL emoji (check with node command above)
- Fix sidebar data-fellow-nav (must match existing pattern)

### Step 3: Create JS
- Copy from AI Lab source
- Delete boilerplate (scroll progress, sidebar toggle, TOC, smooth scroll, reveal, prev/next nav)
- Convert ALL IIFEs to named functions: `(function(){...})()` → `function drawXxx(){...}`
- Add init wrapper: `window.initAiLabXxx = function(){...content.ready...}`
- Check variable collisions (Section 5)
- Never call functions that touch DOM outside init()

### Step 4: Add CSS (only if new classes)
- Add to `ai-lab-lesson.css`
- Scope everything: `.ai-lab-content .new-class { }`
- Use CSS variables (--ai-*) for colors

### Step 5: Register route
- `router.js` routes object: +1 entry
- `router.js` participantDashboardPages array: +1 entry
- `router.js` handleRouting(): +1 if-block calling init
- `index.html`: +1 `<script>` tag

### Step 6: Update overview link
- In the course overview page: change topic link from `#/participant-modules` to `#/participant-ai-lab-xxx`

### Step 7: Test
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
  contentReady: document.getElementById("xxx-content")?.dataset.ready,
  sections: document.querySelectorAll(".lesson-sec[id]").length,
  canvasCount: document.querySelectorAll("canvas").length,
  emojiCount: (document.body.innerText.match(/[\u{1F000}-\u{1FFFF}]/gu) || []).length,
  initAiLabXxx: typeof window.initAiLabXxx,
}));
console.log(JSON.stringify(check, null, 2));
console.log("Errors:", errors.length > 0 ? errors : "None");
await browser.close();
ENDSCRIPT
```

### Step 8: Commit
```bash
git add [files] && git commit -m "feat: [Name] lesson — [description]"
# JANGAN push kecuali diminta user
```

---

## 7. Common Pitfalls

1. **IIFE runs before DOM ready** → Convert to function, call from init
2. **`<script>` tags in innerHTML don't execute** → Move vars to JS file
3. **`const` collision with other JS files** → Prefix: `ML_`, `TFIDF_`, `CV_`
4. **Route not found (404)** → Check routes object key matches hash EXACTLY
5. **Route matches wrong condition** → Check order: specific checks before `/participant-ai-` catch-all
6. **CSS not applying** → Ensure selector starts with `.ai-lab-content` or `.ai-lab-overview`
7. **Emoji in generated content** → Check `innerHTML` assignments in JS file too
8. **Base64 data in JS breaks syntax** → Single quotes inside base64 string terminate the string
9. **Overview topic card not navigating** → Link still points to `#/participant-modules`
10. **Page loads but interactive broken** → Check browser console (F12) for errors in that file

---

## 8. Git Commands

```bash
git status                                     # Check what's changed
git log --oneline -10                          # Recent commits
git add [file1] [file2] ...                    # Stage files
git commit -m "feat: description"              # Commit (message format: feat/fix/docs)
git push origin design                         # Push (only when user says so!)
git branch -a                                   # Check branches
```

---

## 9. Quick Reference

### Start server
```bash
cd /home/faiz/her2/2/Her-AI-SuperApp
node server.js          # Runs on localhost:3000
```

### Key URLs
```
http://localhost:3000/#/participant-modules
http://localhost:3000/#/participant-ai-lab-nlp
http://localhost:3000/#/participant-ai-lab-ml
http://localhost:3000/#/participant-ai-lab-cv
http://localhost:3000/#/participant-ai-lab-tokenization
http://localhost:3000/#/participant-ai-lab-preprocessing
http://localhost:3000/#/participant-ai-lab-pos-ner
http://localhost:3000/#/participant-ai-lab-bow
http://localhost:3000/#/participant-ai-lab-tfidf
http://localhost:3000/#/participant-ai-lab-ml-intro
http://localhost:3000/#/participant-ai-lab-ml-hypothesis
http://localhost:3000/#/participant-ai-lab-ml-vc-dim
http://localhost:3000/#/participant-ai-lab-ml-bias-variance
http://localhost:3000/#/participant-ai-lab-cv-cnn-intro
```

### Key Directories
```
/home/faiz/her2/2/Her-AI-SuperApp/
/home/faiz/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome  — Playwright browser
```

---

*Last updated: 2026-06-30*
