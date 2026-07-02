# AI Lab → HerAI Integration Guide

> **Untuk AI baru**: Baca file ini dulu sebelum menyentuh kode apapun.
> Semua rule, pattern, dan konvensi yang udah dipake ada di sini.

---

## 1. Arsitektur Sistem

### Project ada 2 repositori

| Repo | Folder | Fungsi |
|---|---|---|
| **Her-AI-SuperApp** | `/` (root) | Aplikasi utama — dashboard peserta, semua halaman |
| **Website-Portofolio-Chen** | `Website-Portofolio-Chen/` | **Source materi** AI Lab — di-copy, jangan di-edit |

### Aturan besi
- **JANGAN edit file di `Website-Portofolio-Chen/`** — itu source asli
- **Semua porting di-copy** ke folder HerAI dengan layout HerAI
- **Gak boleh ada emoji AI** (`🤖🧠🚀✨` dll) — ganti FA icons
- **Tema pink HerAI** — semua warna `#f63392`, bukan biru/hijau/ungu
- **No dead links** — semua link di NLP overview harus mengarah ke halaman yang ada

---

## 2. Struktur Folder (HerAI)

```
pages/frontend/fellow-dashboard/
├── ai-lab/
│   ├── nlp.html                      ← NLP Overview page
│   └── lessons/
│       ├── tokenization.html          ← Lesson 1
│       ├── preprocessing.html         ← Lesson 2
│       ├── pos-ner.html              ← Lesson 3
│       ├── bow.html                  ← Lesson 4
│       └── ... (next lessons here)

js/frontend/fellow-dashboard/
├── settings.js                       ← Core dashboard logic
└── ai-lab/
    ├── nlp-overview.js               ← TOC scroll-spy + clickable cards
    ├── tokenization.js               ← Playground JS
    ├── preprocessing.js              ← Pipeline lab JS
    ├── pos-ner.js                    ← POS lab + NER lab + quiz JS
    ├── bow.js                        ← BoW vector demo + cosine lab
    └── ... (next JS files here)

css/frontend/fellow-dashboard/
├── modules.css                       ← Main module/lesson CSS
├── ai-lab-lesson.css                ← ALL AI Lab lesson styles (scoped)
└── dashboard.css                     ← Dashboard layout CSS
```

---

## 3. Cara Porting Lesson Baru

### Step 1: Baca source dari AI Lab
```bash
# Source ada di:
Website-Portofolio-Chen/pages/ai-lab/[nama].html   ← konten
Website-Portofolio-Chen/js/[nama].js                 ← interaktivitas
Website-Portofolio-Chen/css/[nama].css               ← styling
```

### Step 2: Buat file HTML HerAI

Template layout (copy-paste dari lesson yang udah jadi):
```html
<section class="fellow-dashboard fellow-modules-page lesson-detail-page" data-fellow-page="modules">
  {fellow-sidebar}       ← sidebar standar (copy dari tokenization.html)
  <main class="fellow-main">
    <header class="lesson-topbar">
      {lesson-breadcrumb}  ← redirect ke NLP overview
      {fellow-actions}     ← search + notif + user
    </header>
    <div class="lesson-layout">
      <div class="lesson-main-content">
        <section class="lesson-hero">
          {lesson-hero-copy}  ← judul + meta + persona image
        </section>
        <section class="lesson-material-panel">
          <div class="lesson-tabs">...</div>
          <article class="lesson-article ai-lab-content" id="{nama}-content">
            {ISI KONTEN DARI AI LAB DI SINI}
          </article>
          <footer class="lesson-nav-footer">...</footer>
        </section>
      </div>
      <aside class="lesson-right-panel">
        {lesson-progress-card}
        {lesson-list-card}
      </aside>
    </div>
  </main>
</section>
```

### Step 3: Ekstrak konten dari AI Lab

**Cara cepat (dari lesson yang udah jadi):**
```bash
# 1. Copy header template
cat header_template.html > output.html

# 2. Extract body dari AI Lab (antara lesson-body sampai sebelum </main>)
sed -n '[line_awal],[line_akhir]p' Website-Portofolio-Chen/pages/ai-lab/source.html >> output.html

# 3. Remove script tags AI Lab (shared.js, lang.js, page JS)
sed -i '/<script src="\/js\/shared.js"><\/script>/d' output.html
sed -i '/<script src="\/js\/lang.js"><\/script>/d' output.html
sed -i '/<script src="\/js\/[nama].js"><\/script>/d' output.html

# 4. Append footer template
cat footer_template.html >> output.html
```

### Step 4: Ganti emoji dengan FA icons

**Gak boleh ada emoji!** Semua harus FA icons.

```bash
sed -i \
  -e 's/🤖/<i class="fas fa-robot"><\/i>/g' \
  -e 's/🧠/<i class="fas fa-brain"><\/i>/g' \
  -e 's/🚀/<i class="fas fa-rocket"><\/i>/g' \
  -e 's/📊/<i class="fas fa-chart-simple"><\/i>/g' \
  -e 's/📐/<i class="fas fa-ruler-combined"><\/i>/g' \
  -e 's/🔑/<i class="fas fa-key"><\/i>/g' \
  -e 's/⚠️/<i class="fas fa-triangle-exclamation"><\/i>/g' \
  -e 's/💡/<i class="fas fa-lightbulb"><\/i>/g' \
  -e 's/✅/<i class="fas fa-circle-check"><\/i>/g' \
  -e 's/❌/<i class="fas fa-circle-xmark"><\/i>/g' \
  -e 's/🎯/<i class="fas fa-bullseye"><\/i>/g' \
  output.html

# Verifikasi
node -e 'const fs=require("fs");const t=fs.readFileSync("output.html","utf8");console.log("emojis:",[...t.matchAll(/[\u{1F000}-\u{1FFFF}]/gu)].length);'
```

### Step 5: Buat JS file

Copy dari AI Lab source:
```bash
cp Website-Portofolio-Chen/js/[nama].js js/frontend/fellow-dashboard/ai-lab/[nama].js
```

**Hapus boilerplate AI Lab** (scroll progress, sidebar toggle, TOC, scroll reveal, prev/next nav) — HerAI punya sistem sendiri.

**Wrap interactive code dalam init function:**
```js
'use strict';

/* ═══ HerAI [Nama Lesson] — AI Lab port ═══ */

// ...DATA & FUNCTIONS dari AI Lab...

window.initAiLab[Nama] = function() {
  const content = document.getElementById('[nama]-content');
  if (!content || content.dataset.ready) return;
  content.dataset.ready = 'true';

  // Init semua interactive elements di sini
  // Jangan pake IIFE yang running immediately!
};
```

**PENTING**: Semua `(function() { ... })()` (IIFE) harus diubah jadi function declaration + dipanggil dari init. Karena DOM belum ada saat script load.

**Ganti semua `window.` function references** — keep only those called by HTML onclick.

### Step 6: Tambah CSS (jika perlu)

Tambahkan style baru di `css/frontend/fellow-dashboard/ai-lab-lesson.css`, **selalu scoped dengan `.ai-lab-content`**:

```css
.ai-lab-content .nama-class-baru {
  /* ... */
}
```

### Step 7: Register route

**Di `js/router.js`:**
1. Tambah di `routes` object: `"/participant-ai-lab-[nama]": "/pages/.../ai-lab/lessons/[nama].html"`
2. Tambah di `participantDashboardPages` array
3. Tambah init call di `handleRouting()` — sebelum `startsWith("/participant-ai-")` catch-all

**Di `index.html`:**
```html
<script src="/js/frontend/fellow-dashboard/ai-lab/[nama].js?v=20260630-ai-lab"></script>
```

### Step 8: Update NLP overview

**Di `pages/.../ai-lab/nlp.html`:** Ganti link topic dari `#/participant-modules` ke `#/participant-ai-lab-[nama]`.

### Step 9: Test

```bash
npx playwright install chromium  # first time only
node --input-type=module -e '
import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true,
  executablePath: "/home/faiz/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", e => errors.push(e.message));
await page.goto("http://localhost:3000/#/YOUR-ROUTE", { waitUntil: "networkidle", timeout: 15000 });
await page.waitForTimeout(2500);
const check = await page.evaluate(() => ({
  contentReady: document.getElementById("YOUR-content")?.dataset.ready,
  sections: document.querySelectorAll(".lesson-sec[id]").length,
  emojiCount: (document.body.innerText.match(/[\u{1F000}-\u{1FFFF}]/gu) || []).length,
}));
console.log(JSON.stringify(check, null, 2));
console.log("Errors:", errors.length > 0 ? errors : "None");
await browser.close();
'
```

---

## 4. Variable Name Collisions — CRITICAL

Semua JS file loaded di global scope via `<script>` tags di `index.html`. **Setiap `const`/`let`/`var` harus unique** antar semua file.

### Known collisions (already fixed):
| Variable | Files | Fix |
|---|---|---|
| `DOC_COLORS` | bow.js + tfidf.js | Rename to `TFIDF_DOC_COLORS` |
| `DOC_NAMES` | bow.js + tfidf.js | Rename to `TFIDF_DOC_NAMES` |
| `DEFAULT_DOCS` | bow.js + tfidf.js | Rename to `TFIDF_DEFAULT_DOCS` |
| `STOP_WORDS` | bow.js | Renamed internally `ID_STOPWORDS` |

### How to check for new lesson:
```bash
for f in bow.js tfidf.js ml-intro.js ml-hypothesis.js ml-vc-dim.js ml-bias-variance.js; do
  join <(grep -oP '^(const|let|var) \w+' js/.../ai-lab/$f | sed 's/const\|let\|var\s*//' | sort -u) \
       <(grep -oP '^(const|let|var) \w+' js/.../ai-lab/NEW_FILE.js | sed 's/const\|let\|var\s*//' | sort -u)
done
```

---

## 5. Design System

### Warna HerAI
```css
--fellow-pink: #f63392;       /* Primary accent */
--fellow-line: rgba(244,143,188,.26);  /* Border */
--ai-accent: #f63392;         /* AI Lab accent (harus sama) */
--ai-bg: #fff7fb;             /* Light pink bg */
--ai-bg2: #fff0f7;            /* Softer pink */
--ai-card: #ffffff;           /* White cards */
--ai-text: #171827;           /* Dark text */
--ai-text2: #6f7282;          /* Gray text */
--ai-text3: #8e91a0;          /* Light gray */
```

### Font
- Heading: `Plus Jakarta Sans` (800 weight)
- Body: `Inter` (400-600)
- Mono: `SF Mono, Space Mono` (code, math, stats)

---

## 5. Common Bugs & Fixes

| Bug | Penyebab | Fix |
|---|---|---|
| Page blank/404 | Route gak terdaftar | Cek `router.js` routes object |
| Function undefined | IIFE running before DOM ready | Wrap dalam `initAiLab*` function |
| `ReferenceError` | Variable name mismatch | Cek Section 4 — use `join` command |
| `Identifier already declared` | `const`/`let` redeclared in 2 files | Prefix with unique name (`TFIDF_`, `ML_`, `CV_`) |
| `ERR_CONNECTION_REFUSED :8092` | Participant portal gak nyala | **Ignore** — expected di local dev |
| Emoji masih muncul | Belum diganti di JS generated content | Cek `innerHTML` assignments di JS |
| Topic card gak bisa diklik | Link masih ke `#/participant-modules` | Update di overview page (nlp/ml/cv.html) |
| CSS gak applied | Class gak di-scope `.ai-lab-content` | Tambahin prefix `.ai-lab-content ` |
| Base64 image error | Single quote inside base64 in JS file | Escape or strip single quote from data |
| `<script>` tags gak execute | `innerHTML` doesn't run scripts | Pindahin const/vars dari HTML ke JS file |
| IIFE conversion breaks JS | `})();` leftover after rename | Check with `grep -n '})();' file.js` |

---

## 6. Checklist per Lesson Baru

- [ ] HTML file dibuat di `pages/.../ai-lab/lessons/`
- [ ] Sidebar HerAI lengkap (fellow-sidebar + menu)
- [ ] Breadcrumb mengarah ke NLP overview
- [ ] Hero section dengan lesson-hero + meta row
- [ ] Right panel (progress card + lesson list)
- [ ] Tab navigasi (Materi / Katalog NLP / dll)
- [ ] Semua konten di-wrap dalam `.ai-lab-content`
- [ ] JS file dibuat di `js/.../ai-lab/`
- [ ] Boilerplate AI Lab dihapus dari JS
- [ ] Init function diexpose (`window.initAiLab*`)
- [ ] Semua IIFE di-convert ke function declaration
- [ ] CSS baru di-scope `.ai-lab-content`
- [ ] Route ditambah di `router.js` (3 tempat)
- [ ] JS ref ditambah di `index.html`
- [ ] NLP overview link diupdate
- [ ] **ZERO emoji** (cek: `grep -cP '[\x{1F000}-\x{1FFFF}]' file.html`)
- [ ] Playwright test pass (sidebar + konten + interactive + 0 errors)
- [ ] Commit dengan message `feat: [Nama] lesson — [deskripsi singkat]`

---

*Last updated: 2026-06-30 — Marchel & Faiz*
