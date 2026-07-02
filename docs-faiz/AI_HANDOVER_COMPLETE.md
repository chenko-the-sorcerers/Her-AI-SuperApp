# HerAI AI Lab — Complete Handover (2026-07-02)

> **AI baru:** Baca semua, paham dulu, baru eksekusi. Jangan ngarang, jangan asumsi.
> Copy prompt di bawah ke chat untuk mulai kerja.

---

## ══════════════════════════════════════════════
## PROMPT UNTUK AI BARU (COPY INI KE CHAT)
## ══════════════════════════════════════════════

```
Halo! Gw lagi ngerjain project HerAI Fellowship SuperApp.
Lo perlu baca file handover dulu di:
  /home/faiz/her2/2/Her-AI-SuperApp/docs-faiz/AI_HANDOVER_COMPLETE.md

Singkatnya:
- Ini SPA vanilla JS + Node.js + Google Apps Script
- Gw lagi ngerjain AI Lab learning pages (NLP, ML, CV)
- Task SEKARANG: polish halaman http://localhost:3000/#/participant-ai-lab-cv
- Referensi visual: https://chen-silk.vercel.app/pages/ai-lab/computer-vision.html
- Tema wajib: pink HerAI (#f63392), FA icons (tidak ada emoji)
- JANGAN edit gas/Code.gs, render.yaml, signaling/main.go tanpa izin

Mulai dengan:
1. Baca GEMINI.md di root project (aturan besi)
2. Baca file handover ini lengkap
3. Check halaman cv via Playwright (http://localhost:3000/#/participant-ai-lab-cv)
4. Identifikasi masalah, laporkan dulu sebelum eksekusi
```

---

## ══════════════════════════════════════════════
## 1. PROJECT OVERVIEW
## ══════════════════════════════════════════════

**Her-AI-SuperApp** — SPA vanilla HTML/CSS/JS untuk dashboard peserta fellowship HerAI.
Ada 3 course AI Lab yang di-port dari portfolio (`Website-Portofolio-Chen/`) ke dashboard peserta dengan **tema pink HerAI (#f63392)**.

| Layer | Teknologi |
|---|---|
| Frontend | Vanilla JS SPA, hash routing (`#/route`) |
| Dev Server | Node.js `server.js` (localhost:3000) |
| Backend | Google Apps Script (`gas/Code.gs`) |
| Source materi | `Website-Portofolio-Chen/pages/ai-lab/` ← READ-ONLY, JANGAN EDIT |

---

## ══════════════════════════════════════════════
## 2. SEMUA HALAMAN YANG SUDAH ADA
## ══════════════════════════════════════════════

### NLP Course
| Route | File HTML | JS | Status |
|---|---|---|---|
| `#/participant-ai-lab-nlp` | `ai-lab/nlp.html` | `nlp-overview.js` | ✅ Done + scroll-spy |
| `#/participant-ai-lab-tokenization` | `lessons/tokenization.html` | `tokenization.js` | ✅ Done |
| `#/participant-ai-lab-preprocessing` | `lessons/preprocessing.html` | `preprocessing.js` | ✅ Done |
| `#/participant-ai-lab-pos-ner` | `lessons/pos-ner.html` | `pos-ner.js` | ✅ Done |
| `#/participant-ai-lab-bow` | `lessons/bow.html` | `bow.js` | ✅ Done |
| `#/participant-ai-lab-tfidf` | `lessons/tfidf.html` | `tfidf.js` | ✅ Done (ada fix kecil belum commit) |

### Machine Learning Course
| Route | File HTML | JS | Status |
|---|---|---|---|
| `#/participant-ai-lab-ml` | `ai-lab/machine-learning.html` | `ml-overview.js` | ✅ Done + scroll-spy |
| `#/participant-ai-lab-ml-intro` | `lessons/ml-intro.html` | `ml-intro.js` | ✅ Done (CSS brace fix + sticky panel) |
| `#/participant-ai-lab-ml-hypothesis` | `lessons/ml-hypothesis.html` | `ml-hypothesis.js` | ✅ Done |
| `#/participant-ai-lab-ml-vc-dim` | `lessons/ml-vc-dim.html` | `ml-vc-dim.js` | ✅ Done |
| `#/participant-ai-lab-ml-bias-variance` | `lessons/ml-bias-variance.html` | `ml-bias-variance.js` | ✅ Done |

### Computer Vision Course
| Route | File HTML | JS | Status |
|---|---|---|---|
| `#/participant-ai-lab-cv` | `ai-lab/computer-vision.html` | `cv-overview.js` | ✅ Done |
| `#/participant-ai-lab-cv-cnn-intro` | `lessons/cnn-intro.html` | `cnn-intro.js` | ✅ Done |

---

## ══════════════════════════════════════════════
## 3. TASK SEKARANG — CV OVERVIEW PAGE
## ══════════════════════════════════════════════

### URL: `http://localhost:3000/#/participant-ai-lab-cv`
### Referensi: `https://chen-silk.vercel.app/pages/ai-lab/computer-vision.html`

### Status komponen:
- ✅ HTML konten overview sudah lengkap
- ✅ CSS component sudah ditulis di `ai-lab-lesson.css`
- ✅ Layout HTML structure benar (lesson-layout > lesson-main + lesson-right-panel)
- ✅ CSS parsing sudah normal lagi setelah brace issue dibereskan
- ✅ Semua komponen visual berfungsi — grid, flex, card, sticky panel
- ✅ Right panel sticky — position: sticky di modules.css
- ✅ CV overview sudah dirapikan lagi: hero spacing, icon slot kosong, dan kontras code block

Issue brace lama di `ai-lab-lesson.css` sekarang sudah FIXED, jadi tidak dianggap blocker lagi.

### Cara cek balance CSS:
```bash
python3 -c "
css = open('css/frontend/fellow-dashboard/ai-lab-lesson.css').read()
opens = sum(l.count('{') for l in css.split(chr(10)))
closes = sum(l.count('}') for l in css.split(chr(10)))
print(f'Balance: {opens-closes} ({opens open / {closes} close)')
"
```

---

## ══════════════════════════════════════════════
## 4. FILE UNSTAGED (BELUM COMMIT)
## ══════════════════════════════════════════════

```
M css/frontend/fellow-dashboard/ai-lab-lesson.css
M pages/frontend/fellow-dashboard/ai-lab/computer-vision.html
M docs-faiz/AI_HANDOVER_COMPLETE.md
```

**Commit ini dulu:**
```bash
git add css/frontend/fellow-dashboard/ai-lab-lesson.css \
        pages/frontend/fellow-dashboard/ai-lab/computer-vision.html \
        docs-faiz/AI_HANDOVER_COMPLETE.md
git commit -m "fix(cv): polish overview spacing, icons, and code contrast"
```

---

## ══════════════════════════════════════════════
## 5. ARSITEKTUR FILE
## ══════════════════════════════════════════════

```
pages/frontend/fellow-dashboard/
├── ai-lab/
│   ├── nlp.html                      ← NLP Overview
│   ├── machine-learning.html         ← ML Overview (full rewrite, done)
│   ├── computer-vision.html          ← CV Overview
│   └── lessons/
│       ├── tokenization.html         ← NLP 1
│       ├── preprocessing.html        ← NLP 2
│       ├── pos-ner.html              ← NLP 3
│       ├── bow.html                  ← NLP 4
│       ├── tfidf.html                ← NLP 5
│       ├── ml-intro.html             ← ML 1 ✅ Done
│       ├── ml-hypothesis.html        ← ML 2
│       ├── ml-vc-dim.html            ← ML 3
│       ├── ml-bias-variance.html     ← ML 4
│       └── cnn-intro.html            ← CV 1

js/frontend/fellow-dashboard/ai-lab/
├── nlp-overview.js                   ← IntersectionObserver scroll-spy
├── ml-overview.js                    ← IntersectionObserver scroll-spy
├── cv-overview.js
├── tokenization.js, preprocessing.js, pos-ner.js, bow.js, tfidf.js
├── ml-intro.js, ml-hypothesis.js, ml-vc-dim.js, ml-bias-variance.js
└── cnn-intro.js

css/frontend/fellow-dashboard/
├── ai-lab-lesson.css                 ← SEMUA AI Lab CSS (scoped .ai-lab-content)
├── modules.css
└── dashboard.css

js/router.js                          ← Route definitions (3 tempat per route!)
index.html                            ← CSS + JS references
```

---

## ══════════════════════════════════════════════
## 6. POLA YANG WAJIB DIIKUTI
## ══════════════════════════════════════════════

### CSS Scoping:
```css
/* WAJIB scope semua lesson CSS */
.ai-lab-content .class-name { ... }

/* WAJIB scope semua overview CSS */
.ai-overview-content .class-name { ... }

/* JANGAN pernah global */
.class-name { ... }   /* ← SALAH */
```

### Route Registration (3 tempat di router.js):
```js
// 1. routes object (atas file)
"/participant-ai-lab-NEW": "/pages/frontend/fellow-dashboard/ai-lab/lessons/NEW.html",

// 2. participantDashboardPages array
"/participant-ai-lab-NEW",

// 3. handleRouting() init call
if (path === "/participant-ai-lab-NEW" && typeof window.initAiLabNEW === "function") {
    window.initAiLabNEW();
}
```

### HTML Layout Standar (lesson page):
```html
<section class="fellow-dashboard fellow-modules-page lesson-detail-page" data-fellow-page="modules">
  <!-- sidebar kiri (copy dari lesson lain) -->
  <aside class="fellow-sidebar">...</aside>
  <main class="fellow-main">
    <header class="lesson-topbar">
      <nav class="lesson-breadcrumb">...</nav>
      <div class="fellow-actions">...</div>
    </header>
    <div class="lesson-layout">
      <div class="lesson-main">
        <section class="lesson-hero">...</section>
        <section class="lesson-material-panel">
          <div class="lesson-tabs">...</div>
          <article class="lesson-article ai-lab-content" id="NAMA-content">
            <!-- konten sections -->
          </article>
          <footer class="lesson-nav-footer">...</footer>
        </section>
      </div>
      <aside class="lesson-right-panel">
        <!-- progress + daftar section -->
      </aside>
    </div>
  </main>
</section>
```

---

## ══════════════════════════════════════════════
## 7. DESIGN SYSTEM
## ══════════════════════════════════════════════

### Warna HerAI (WAJIB KONSISTEN):
```css
--fellow-pink: #f63392;                    /* Primary accent */
--fellow-line: rgba(244,143,188,.26);       /* Border tipis */
Pink bg lembut: #fff7fb atau #fff0f7        /* Background subtle */
Dark text: #171827
Gray secondary: #6f7282
Gray tertiary: #8e91a0
```

### Card Style HerAI:
```css
border-radius: 16px;
border: 1px solid rgba(244,143,188,.26);   /* tipis, tidak norak */
box-shadow: 0 4px 16px rgba(0,0,0,.03);   /* sangat subtle */
background: #fff;
```

### Font:
- Heading: `Plus Jakarta Sans` (weight 800)
- Body: `Inter` (weight 400-600)
- Mono: `SF Mono, Space Mono` (code, formula)

### Preferensi visual user (berdasarkan feedback langsung):
- ❌ Tidak ada border yang norak/tebal
- ❌ Tidak ada emoji — semua FontAwesome icons
- ✅ Pink menyatu, bukan neon — soft pink untuk bg
- ✅ Card clean, rounded, shadow halus
- ✅ Layout rapi dengan spacing yang konsisten

---

## ══════════════════════════════════════════════
## 8. KOMPONEN CSS ML-INTRO (SUDAH DITULIS)
## ══════════════════════════════════════════════

Di `ai-lab-lesson.css` line 5616+ sudah ada semua ini (tapi mungkin tidak ter-apply karena bug):

| Komponen | Class | Dipakai di |
|---|---|---|
| Section header | `.sec-header`, `.sec-num`, `.sec-title` | Semua section |
| Classic vs ML diagram | `.paradigm-compare`, `.pc-col`, `.pc-box` | sec-definisi |
| Callout box | `.insight-callout`, `.ic-icon`, `.ic-body` | sec-definisi, sec-reinforcement |
| Worked box | `.worked-box`, `.wb-badge`, `.wb-title` | sec-definisi, sec-supervised |
| Motivation grid | `.motivation-grid`, `.motiv-card` | sec-definisi |
| 3 Paradigm cards | `.three-paradigms`, `.para-card.supervised/.unsupervised/.reinforcement` | sec-paradigma |
| Task split | `.task-split`, `.ts-col`, `.ts-formula`, `.math-term` | sec-supervised |
| Pipeline steps | `.pipeline-steps`, `.ps-step`, `.ps-circle` | sec-supervised |
| Unsup tasks | `.unsup-tasks`, `.ut-card`, `.ut-accent`, `.uta` | sec-unsupervised |
| RL Loop diagram | `.rl-loop`, `.rll-center`, `.rll-agent`, `.rll-env` | sec-reinforcement |
| RL concepts table | `.rl-concepts`, `.rlc-row`, `.rlc-term`, `.rlc-def` | sec-reinforcement |
| When-to-use grid | `.when-grid`, `.when-col.use/.avoid`, `.wl-item` | sec-kapan |
| Next lesson CTA | `.next-lesson-cta`, `.nlc-btn` | Akhir sec-kapan |

---

## ══════════════════════════════════════════════
## 9. CHECKLIST SETELAH FIX
## ══════════════════════════════════════════════

Test via Playwright: `http://localhost:3000/#/participant-ai-lab-cv`

- [x] Hero section: gradient bg, judul besar, persona image kanan
- [x] Section header (01-06): nomor + judul + subtitle
- [x] paradigm-compare: 2 kolom Klasik vs ML
- [x] insight-callout: box pink dengan icon
- [x] worked-box: card dengan pink accent header
- [x] motivation-grid: 4 card 2x2
- [x] three-paradigms: 3 card horizontal
- [x] task-split: 2 kolom dengan formula math
- [x] pipeline-steps: 4 langkah vertikal
- [x] unsup-tasks: 3 card vertikal
- [x] rl-loop: diagram agent ↔ environment
-x] rl-concepts: table 4 baris
- [x] when-grid: 2 kolom gunakan vs jangan
- [x] next-lesson-cta: CTA card
- [x] lesson-right-panel: sticky sidebar kanan
- [x] Scroll-spy: sidebar highlight update saat scroll

---

## ══════════════════════════════════════════════
## 10. RULES WAJIB (DARI GEMINI.md)
## ══════════════════════════════════════════════

1. ❌ JANGAN edit `gas/Code.gs` — database produksi
2. ❌ JANGAN edit `render.yaml` — production deploy config
3. ❌ JANGAN edit `signaling/main.go` — WebRTC produksi
4. ❌ JANGAN edit `Website-Portofolio-Chen/` — read-only source
5. ❌ JANGAN taruh secret/API key di JavaScript frontend
6. ✅ Baca file yang akan diubah SEBELUM mengubahnya
7. ✅ Scope seminimal mungkin — jangan refactor sambil lalu
8. ✅ COMMIT setelah setiap chunk selesai (format: `feat: [nama] — [desc]`)
9. ✅ JANGAN push kecuali diminta eksplisit
10. ✅ Kalau ragu, TANYA — jangan asumsi

---

## ══════════════════════════════════════════════
## 11. NEXT TASKS (SETELAH CV OVERVIEW SELESAI)
## ══════════════════════════════════════════════

| Priority | Task |
|---|---|
| 1 ✅ Polish CV overview spacing, icon slots, dan code contrast |
| 2 | ✅ Fix CSS ml-intro tidak ter-apply (3 brace fix + sticky panel) |
| 3 | ✅ Visual polish ml-intro (13 komponen grid/flex/card berfungsi) |
| 4 | ⬜ Inline CSS untuk 15 halaman (tfidf, semua ML & CV lesson) |
| 5 | ⬜ Fix modules.html course catalog (26 cards) |

---

*Last updated: 2026-07-02 WIB* (CV overview polish + docs refresh)
*Branch: design*
*Last commit: 0003836 — feat(ml-catalog): full rewrite machine-learning.html*
