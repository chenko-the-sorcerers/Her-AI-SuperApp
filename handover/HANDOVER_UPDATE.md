# HerAI Development Handover & Checkpoint

**Tanggal:** 12 Juli 2026
**Branch:** `design`
**Status:** Reasoning dan Konsep AI Modern COMPLETE — source-as-main-content pipeline, progressive practice, quiz review mode, inline discussion
**Cache buster final:** `20260712-reasoning-final-v35`
**Belum push:** ahead 27+ commits dari `origin/design`

---

## Konsep AI Modern — Final Parity Checkpoint

**Cache buster:** `20260712-ai-modern-final-v3`

- 4 topik source-as-main: Foundation Models, Transformer, AI Agents, Sistem AI Masa Kini.
- Source chapter `01-materi.html` sampai `04-materi.html` tetap utuh dan tidak diubah.
- Pipeline menambahkan learning nav, hook A/B, concept lab, quick check + retry, mini challenge tersimpan, decision flow, mistakes/best practices, dan outcome summary.
- Beginner enrichment: 4 roadmap steps per topik, 4 worked examples, dan 24 glossary entries dengan progressive disclosure.
- Code explainer kontekstual: Q/K/V formula decoder, tool contract, five-layer system blueprint, dan architecture canvas; source text tetap tersedia di panel detail.
- Latihan memakai progressive disclosure: 13 skenario, topic-grouped navigator, satu skenario per langkah, save/edit/reset.
- Kuis: 20 soal full-card clickable, single attempt, locked state jelas, dan review seluruh soal.
- Diskusi: 4 prompt, post lokal, dan inline reply composer tanpa `window.prompt`.
- Smoke test desktop 1440px dan mobile 390px: tidak ada document overflow; semua 4 route aktif.

---

## 🎯 Final State — Reasoning Module

### Route Final (TIDAK BERUBAH)

```
#/participant-ai-reasoning           → materi.html
#/participant-ai-reasoning-practice  → latihan.html
#/participant-ai-reasoning-quiz      → kuis.html
#/participant-ai-reasoning-discussion → diskusi.html
```

### File Canonical

```
Controller:    js/frontend/fellow-dashboard/ai-reasoning.js     (~2630 lines)
CSS:           css/frontend/fellow-dashboard/modules.css        (+300+ lines reasoning)
HTML pages:    pages/.../04-reasoning/{materi,latihan,kuis,diskusi}.html
Chapter src:   pages/.../04-reasoning/chapters/{01..06}-full.html
Source canon:  materi/nazril/submateri-reasoning-ai.md          (2755 lines, UNCHANGED)
Cache buster:  index.html → v=20260712-reasoning-final-v35
```

### Architecture: Source-As-Main-Content Pipeline

Setiap TOPIK (1-6) mengikuti pipeline yang SAMA:

```
[fetch source HTML → filter module headings → strip numbering]
  → inject ORIENTATION + NAV before first heading
  → inject HOOK after first H2 section
  → inject LAB after second H2 section
  → append END-OF-CHAPTER components
  → set innerHTML → enhance visuals → init interactions
```

**TIDAK ADA LAGI:**
- ❌ Visual/Source toggle (dihapus)
- ❌ Pedagogical content terpisah dari source (digabung)
- ❌ Collapsible "Baca Materi Lengkap" (dihapus)
- ❌ Stage groups / fase badges (dihapus)
- ❌ cloneNode (pake appendChild biar event listeners gak ilang)

### 6 Topic Mapping

| Topic | Title | Source File | Submateri Asli |
|---|---|---|---|
| 1 | Dari Menjawab ke Menalar | 01-full.html | 1.1–1.3 |
| 2 | Reasoning Dapat Diperiksa | 02-full.html | 1.4–1.10 |
| 3 | Planning | 03-full.html | 2.1–2.12 |
| 4 | Chain-of-Thought | 04-full.html | 3.1–3.13 |
| 5 | Tool Use | 05-full.html | 4.1–4.17 |
| 6 | Integrated Mission | 06-full.html | 5.1–5.3 + Glosarium + Referensi |

### Layout per Topic (Sekarang)

```
FASE 1: Baca Inti (semua konten kebuka)
  [Orientation card — judul, durasi, objectives, analogi]
  [Nav chips — Pembuka | Konsep | Contoh & Latihan | Uji Pemahaman | Ringkasan]
  [Hook — interaktif A/B]
  [Source content — H1/H2 headings, paragraphs, tables, lists, diagrams]
  [Lab — interactive 3-tab exploration]

FASE 2: Refleksi (end-of-chapter)
  [Flow diagram] → [Example] → [Quick Check] → [LLM Example] →
  [Prompt Pattern] → [Mini Challenge] → [Common Mistakes + Best Practices] →
  [Ringkasan — learning outcomes checklist]
```

### Nav Chips Mapping

| Tombol | data-jump | Target |
|---|---|---|
| Pembuka | `hook` | Hook section (interactive) |
| Konsep | `konsep` | Source H2 headings + Lab |
| Contoh & Latihan | `contoh` | Example, Flow, LLM sections |
| Uji Pemahaman | `check` | Quick Check |
| Ringkasan | `ringkasan` | Mistakes + Ringkasan |

### LocalStorage Keys (KONTRAK)

```
heraiAiReasoningCurrentChapter       — last chapter read
heraiAiReasoningPractice              — practice answers
heraiAiReasoningQuizDone              — quiz completed flag
heraiAiReasoningQuizScore             — quiz score
heraiAiReasoningQuizAnswers           — quiz answers per question
heraiAiReasoningDiscussion            — discussion posts & replies
heraiAiReasoningChallengeCh1..6       — mini challenge answers per chapter
```

### Practice Page

- **17 skenario** (latihan-1 sampai latihan-17)
- **Topic-grouped navigator:** 4 grup (Reasoning Dasar, Planning, Chain-of-Thought, Tool Use)
- **Counter:** "Skenario 1 dari 17 | Reasoning Dasar"
- **Card format:** Nomor pink circle → Title | Formatted prompt (blockquote, list, paragraph) | Textarea | Pembahasan reveal
- **Navigasi:** Chip group buttons + Prev/Next buttons + Save/Edit/Reset
- **Progress:** Chip berubah warna jadi "complete" kalo textarea terisi

### Quiz Page

- **26 soal** single attempt
- **Counter:** "Soal 1 dari 26 | 0 terjawab"
- **Format:** Kartu opsi full-clickable, selected → hijau/merah setelah submit
- **Review mode:** Setelah submit, SEMUA soal ditampilkan + skor

### Discussion Page

- **4 prompt** diskusi
- Inline reply composer (bukan `window.prompt`)
- Save/edit/reset reply

---

## 🔧 Design Rules & Patterns

### CSS Theme Tokens

```css
--fellow-pink: #f63392;
--fellow-line: rgba(244,143,188,.26);
--fellow-text: #171827;
--fellow-muted: #6f7282;
--fellow-line-active: rgba(246,51,146,.3);
```

### Border Radius (WAJIB)

| Elemen | Radius |
|---|---|
| Cards, containers | `14px` – `20px` |
| Buttons, pills | `100px` |
| Inputs | `14px` – `20px` |
| Code blocks | `12px` – `16px` |
| Avatars, icons | `50%` |

❌ `border-radius: 0` dilarang untuk visible elements

### Source Content Styling

| Element | Style |
|---|---|
| H2 headings | Pink left border `4px solid #f63392` + `padding-left: 14px` |
| Paragraph | `color: #51596d`, `line-height: 1.75` |
| `<ul>` items | Pink background 4% + border + `::before` pink diamond |
| `<ol>` items | Pink background 4% + `::before` circle with number |
| `<blockquote>` | Pink left border `4px` + bg 5% |
| `<pre>` | Wrapped in `.reasoning-code-block` |
| `<table>` | Wrapped in `.reasoning-scaffold-table-wrap` |

### Interactive Components

| Component | Class | Behavior |
|---|---|---|
| Hook | `.reasoning-hook-section` | Click A/B → selected state → message reveal |
| Concept Lab | `.reasoning-concept-lab` | 3 tabs → click changes stage content |
| Quick Check | `.reasoning-quick-check` | Select option → Submit → Correct/Wrong + feedback → Retry |
| Mini Challenge | `.reasoning-challenge-workspace` | Textarea + Save/Edit/Reset + Example reveal |
| Prompt Pattern | `.reasoning-prompt-section` | Code block + Copy button |
| Flow Diagram | `.reasoning-visual-board` | Visual step flow |
| Example | `.reasoning-example-section` | Case → Steps → Conclusion → Common Errors |
| Mistakes/Practices | `.reasoning-mistakes-practices` | 2-col grid: pink left-border list items |

### Practice Card Formatting

`renderFormattedText()` parses plain text into:
- `<p>` for regular paragraphs
- `<blockquote>` for lines starting with `>`
- `<ol>` for numbered items (1. 2. 3. ...)
- `<ul>` for bullet items (- or •)

Each list item gets pink card styling.

### Quiz Lock/Review

After single-attempt submit:
- All questions revealed (`hidden = false` on all articles)
- Navigator, counter, prev/next hidden
- Correct/wrong labels shown
- Inputs disabled
- Score displayed

---

## 📁 File History (Changes Made)

| File | Lines | What Changed |
|---|---|---|
| `ai-reasoning.js` | +378 | Pipeline rewrite: filter + inject + phase layout; removed old renderChapter/Content/Stage; nav chip fix; practice text formatter; topic-grouped navigator; quiz review mode |
| `modules.css` | +233 | Phase badges, source collapse, list cards, pink accents, practice formatting, quiz transitions, navigator groups |
| `materi.html` | +13 | Hero description (Chapter 1 specific), sidebar (6 titles) |
| `latihan.html` | +2 | Hero description fixed, "17 skenario", "Baca kasus, tulis jawaban" |
| `kuis.html` | +2 | Hero description fixed, "26 soal" |
| `index.html` | v15→v35 | Cache buster bumps (20x) |

### Cache Buster History

```
v15 → v16 (stage groups CSS)
v17 → v18 (source-as-main pipeline)
v19 (heading number stripping)
v20 (duplicate nav removal)
v21 (injection order fix)
v22 (list card styling)
v23 (ringkasan submateri filter)
v24-v26 (phase layout iteration)
v27 (cloneNode → appendChild fix)
v28-v29 (phase badges add/remove)
v30 (nav chip fix)
v31-v32 (practice formatting)
v33-v34 (topic groups, review mode)
v35 (navigator responsive)
```

---

## 🚫 Files That Should NOT Change

- `chapters/01-full.html` through `06-full.html` (source canonical)
- `chapters/practice-full.html` (practice source)
- `chapters/quiz-source-full.html` (quiz source)
- `chapters/discussion-source-full.html` (discussion source)
- `materi/nazril/submateri-reasoning-ai.md` (source canonical, 2755 lines)
- `js/router.js` (routes unchanged)
- Dashboard shell (sidebar, topbar, breadcrumb, footer)

---

## ✅ Verification Commands

```bash
node --check js/frontend/fellow-dashboard/ai-reasoning.js
node --check js/router.js
node scripts/check-participant-routes.mjs     # 113/113 passed
```

---

## 📋 Instructions for Next Agent

1. **Baca WAJIB:** `AGENTS.md`, `GEMINI.md`, `handover/HANDOVER_UPDATE.md`, `handover/REASONING_RULES_AND_PATTERNS.md`, `handover/COURSE_TEMPLATE_GUIDE.md`
2. **Jangan ubah:** source chapter HTML, localStorage keys, route, dashboard shell
3. **Bump cache buster** di `index.html` jika JS/CSS berubah
4. **Jangan push** tanpa izin user
5. **Aturan desain** ada di `REASONING_RULES_AND_PATTERNS.md`
6. **Template untuk course lain** ada di `COURSE_TEMPLATE_GUIDE.md`

---

## 🐍 Python Module — Status

### Architecture
Sama dengan Reasoning: source-as-main-content pipeline.

### File Summary

| File | Path | Lines |
|---|---|---|
| Controller | `js/frontend/fellow-dashboard/ai-python.js` | ~1988 |
| CSS (shared) | `css/frontend/fellow-dashboard/modules.css` | ~7600 |
| Materi | `pages/.../02-python-untuk-ai/materi.html` | Reasonning template ✅ |
| Latihan | `pages/.../02-python-untuk-ai/latihan.html` | Reasonning template ✅ |
| Kuis | `pages/.../02-python-untuk-ai/kuis.html` | Reasonning template ✅ |
| Diskusi | `pages/.../02-python-untuk-ai/diskusi.html` | Reasonning template ✅ |
| Source | `materi/nazril/Python-untuk-AI-redesign-final.md` | 1882 lines |
| Chapter files | `pages/.../02-python-untuk-ai/chapters/01-full.html` - `15-full.html` | 15 files |
| Topic files | `pages/.../02-python-untuk-ai/chapters/01-topic.html` - `08-topic.html` | 8 merged |

### 8 Pedagogical Topics

| Topic | Source Chapters |
|---|---|
| 1. Python & AI Mindset | Ch1 (Kenapa Python) + Ch2 (Environment) + Ch3 (Computational Thinking) |
| 2. Data Dasar | Ch4 (Sintaks Dasar) + Ch5 (Collection) |
| 3. Control Flow | Ch6 (Control Flow) |
| 4. Function & Modularitas | Ch7 (Function) + Ch8 (Lambda/Generator) |
| 5. OOP untuk AI | Ch9 (OOP) |
| 6. Error & File Handling | Ch10 (Error Handling) + Ch11 (File I/O) |
| 7. NumPy | Ch12 (Ekosistem) + Ch13 (NumPy) |
| 8. Pandas & Workflow | Ch14 (Pandas) + Ch15 (Mini Workflow) |

### Current Status

| Page | Status |
|---|---|
| Materi | ✅ 8 topics load, CHAPTERS has basic data |
| Latihan | ✅ 8 practices, navigator, save/edit/reset |
| Kuis | ✅ 10 questions, single attempt |
| Diskusi | ✅ 4 prompts, inline reply |

### Cache Buster
`index.html`: `ai-python.js?v=20260712-python-v8`

### NOT YET DONE (Needs Enrichment)
- CHAPTERS interactive data (hook, lab, quick check, challenge per topic)
- PRACTICES array (currently 8 Python exercises — may need expansion)
- QUIZ array (10 questions — may need more)
- Pyodide playground injection into source content

### 🚨 CRITICAL BUGS FIXED (Python — ALL apply to future courses!)

| Bug | Symptom | Fix | Applies to |
|---|---|---|---|
| `renderList` / `renderFlow` missing | Page crash on load | These 2 functions must be copied from Reasoning | ALL new courses |
| sourcePaths with literal `...` | Ch2-8 show 404 | Always verify sourcePath is FULL path | ALL new courses |
| `escapeHtml` missing | Silent crash, broken HTML | Copy from Reasoning | ALL new courses |
| `escapeSelector` missing | Query selector errors | Copy from Reasoning | ALL new courses |
| `safeJsonParse` missing | TypeErrors in localStorage read | Copy from Reasoning | ALL new courses |
| `setStatus` missing | Practice page crashes | Copy from Reasoning | ALL new courses |
| `item.fields` undefined in PRACTICES | `renderPracticeCard` crash | Every practice entry MUST have `"fields": [...]` | ALL new courses |
| `getSavedPractice()` null return | Crash on first visit (no localStorage) | Add `|| { answers: {}, revealed: [] }` | ALL new courses |
| router function name mismatch | Page doesn't initialize | Verify router `typeof window.initXxxYyy` matches controller | ALL new courses |
| Reasoning text in new course pages | Confusing UI | Replace ALL "Reasoning" refs in HTML | ALL new courses |
| Missing script in index.html | Controller never loads | Add `<script src="ai-xxx.js">` to index.html | ALL new courses |

### 📋 Function Checklist for New Courses

When copying ai-reasoning.js to ai-{new-course}.js, verify ALL these functions exist:
```
✅ renderList, renderFlow
✅ escapeHtml, escapeSelector, safeJsonParse, setStatus
✅ findH2Sections
✅ finalRenderHookSection, finalRenderExampleSection, finalRenderQuickCheckSection
✅ finalRenderChallengeSection, finalRenderMistakesPractices, finalRenderSummarySection
✅ renderSourceVisualLab, initSourceVisualLab, enhanceSourceMaterialForCanvas
✅ setupHookInteraction, setupQuickChecks, setupChallengeInteraction
✅ setupVisualNav, setupCopyButtons
✅ stripSourceNumbering, filterSourceHeadings, injectAfterHeading
✅ renderFormattedText, renderPracticeCard
✅ loadSourceHtml, getSourceFile
```
