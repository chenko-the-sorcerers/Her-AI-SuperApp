# Course Template Guide — Applying Reasoning Patterns to Other Courses

## Tujuan

Dokumen ini menjelaskan bagaimana mengaplikasikan arsitektur, pipeline, CSS pattern, dan interactive components yang sudah dibangun di Reasoning module ke course lain (Python, AI Fundamentals, Machine Learning, Computer Vision, dll).

---

## 1. Arsitektur yang Harus Ditiru

### 1.1 File Structure

Setiap course membutuhkan:

```
pages/.../NN-course-name/
  materi.html           → halaman materi (topik/chapter)
  latihan.html           → halaman latihan (practice)
  kuis.html              → halaman kuis
  diskusi.html           → halaman diskusi
  chapters/
    01-full.html         → source chapter 1
    02-full.html         → source chapter 2
    ...
    practice-full.html   → source latihan
    quiz-source-full.html → source kuis
    discussion-source-full.html → source diskusi
```

### 1.2 Controller File

```
js/frontend/fellow-dashboard/ai-{course-name}.js
```

Controller harus punya:

| Fungsi | Purpose |
|---|---|
| `CHAPTERS` array | 6-8 topic dengan title, hook, concepts, flow, example, quickCheck, challenge, dll |
| `PRACTICES` array | Latihan soal dengan id, title, prompt, fields, guide |
| `QUIZ` array | Soal kuis dengan question, options, answer index, explanation |
| `SOURCE_VISUALS` object | Lab config per chapter (3-tab interactive) |
| `loadReasoningChapter()` | Pipeline: fetch → filter → inject → render |
| `initAiReasoningMateri()` | Init materi page |
| `initAiReasoningPractice()` | Init practice page |
| `initAiReasoningQuiz()` | Init quiz page |
| `initAiReasoningDiscussion()` | Init discussion page |

### 1.3 CSS

```
css/frontend/fellow-dashboard/modules.css
```

Semua component styles ditambahkan di sini (file yang sama untuk semua course).

---

## 2. Step-by-Step: Membuat Course Baru

### Step 1: Siapkan Source Material

```
materi/{author}/submateri-{course-name}.md
```

Ini adalah SOURCE CANONICAL — jangan diubah setelah dibuat.

### Step 2: Generate Chapter HTML

Bagi source markdown menjadi file HTML per chapter:
```
chapters/01-full.html
chapters/02-full.html
...
```

Setiap file HTML harus:
- Self-contained (bisa di-fetch sendiri)
- Menggunakan heading `<h1>` / `<h2>` / `<h3>` yang konsisten
- Punya `<hr />` sebagai pemisah module-level dan chapter-level content

### Step 3: Buat CHAPTERS Data

Lihat `ai-reasoning.js` sebagai referensi. Setiap chapter butuh:

```javascript
{
    "title": "Judul Chapter",
    "shortTitle": "Judul Pendek",
    "duration": "20 menit",
    "icon": "fas fa-brain",
    "summary": "Deskripsi singkat...",
    "objectives": ["Objective 1", "Objective 2"],
    "analogy": "Analogi...",
    "hook": {
        "question": "Pertanyaan A/B",
        "answerA": { "label": "Jawaban A", "text": "...", "icon": "fas fa-bolt" },
        "answerB": { "label": "Jawaban B", "text": "...", "icon": "fas fa-list-check" },
        "message": "Pesan setelah pilih..."
    },
    "opening": ["Paragraf 1", "Paragraf 2"],
    "recallVsReasoningTable": { /* optional */ },
    "concepts": [
        { "title": "Konsep 1", "content": ["..."], "diagram": ["step1", "step2"] }
    ],
    "flow": [["Step 1", "Desc"], ["Step 2", "Desc"]],
    "example": {
        "title": "Judul Contoh",
        "case": "Kasus...",
        "steps": [{"label": "Langkah 1", "text": "..."}],
        "conclusion": "Kesimpulan...",
        "commonErrors": ["Error 1", "Error 2"]
    },
    "lab": {
        "eyebrow": "Lab Name",
        "title": "Lab Title",
        "description": "Deskripsi...",
        "options": [
            ["Tab 1", "fas fa-icon", "Subtitle", "Content", "Example"],
            ["Tab 2", ...],
            ["Tab 3", ...]
        ]
    },
    "quickCheck": {
        "question": "Pertanyaan...",
        "options": ["A", "B", "C"],
        "answer": 0,
        "explanationCorrect": "...",
        "explanationWrong": "..."
    },
    "llmExample": "Contoh AI...",
    "prompt": ["Prompt line 1", "Prompt line 2"],
    "challenge": {
        "instruction": "Instruksi...",
        "placeholder": "Placeholder...",
        "example": "Contoh..."
    },
    "mistakes": ["Mistake 1", "Mistake 2"],
    "bestPractices": ["Practice 1", "Practice 2"],
    "learningOutcomes": ["Outcome 1", "Outcome 2"],
    "transition": "Transisi ke next chapter...",
    "sourcePath": "/pages/.../chapters/01-full.html"
}
```

### Step 4: Buat SOURCE_VISUALS

```javascript
var SOURCE_VISUALS = {
    "01-full.html": {
        eyebrow: "Lab Name",
        title: "Lab Title",
        description: "...",
        options: [
            ["Tab 1", "fas fa-icon", "Subtitle", "Content text", "Example text"],
            ["Tab 2", ...],
            ["Tab 3", ...]
        ]
    },
    // ... per chapter
};
```

### Step 5: Buat PRACTICES

```javascript
const PRACTICES = [
    {
        "id": "practice-1",
        "title": "Practice 1 — Title",
        "focus": "Topic Label",
        "prompt": "Kasus: \n> ...\n1. Item 1\n2. Item 2",
        "fields": [["jawaban", "Tulis jawabanmu..."]],
        "guide": "Pembahasan..."
    },
    // ...
];
```

Dan `PRACTICE_TOPICS` untuk grouping:
```javascript
var PRACTICE_TOPICS = [
    { start: 0, end: 3, label: "Topic 1" },
    { start: 4, end: 7, label: "Topic 2" },
    // ...
];
```

### Step 6: Buat QUIZ

```javascript
const QUIZ = [
    ["Question?", ["A", "B", "C", "D"], 2, "Explanation"],
    // ...
];
```

### Step 7: Buat DISCUSSION PROMPTS

```javascript
const DISCUSSION_PROMPTS = [
    {
        "id": "discuss-1",
        "title": "Topik Diskusi 1",
        "prompt": "Pertanyaan...",
        "guide": "Panduan..."
    },
    // ...
];
```

### Step 8: Buat HTML Pages

Copy from `04-reasoning/materi.html`, `latihan.html`, `kuis.html`, `diskusi.html` dan sesuaikan:
- Breadcrumb links
- Hero title & description
- Form IDs (`aiCourseNamePracticeForm`, dll)
- Script reference di `index.html`

### Step 9: Register Route

Di `js/router.js`, tambah route:
```javascript
"/participant-ai-{course}":           "/pages/.../materi.html"
"/participant-ai-{course}-practice":  "/pages/.../latihan.html"
"/participant-ai-{course}-quiz":      "/pages/.../kuis.html"
"/participant-ai-{course}-discussion": "/pages/.../diskusi.html"
```

### Step 10: Add Script to index.html

```html
<script src="/js/frontend/fellow-dashboard/ai-{course-name}.js?v={cache-buster}"></script>
```

---

## 3. CSS Patterns to Reuse

Semua class berikut SUDAH ada di `modules.css` dan bisa langsung dipakai:

### Component Classes

| Class | Untuk |
|---|---|
| `.reasoning-hook-section` | Interactive hook A/B |
| `.reasoning-hook-card` | Hook option card |
| `.reasoning-concept-lab` | Interactive 3-tab lab |
| `.reasoning-quick-check` | Quick check quiz |
| `.reasoning-challenge-workspace` | Mini challenge textarea |
| `.reasoning-example-section` | Structured example display |
| `.reasoning-visual-board` | Flow diagram |
| `.reasoning-scaffold-example` | LLM/AI example |
| `.reasoning-prompt-section` | Prompt pattern code block |
| `.reasoning-mistakes-practices` | Mistakes & best practices grid |
| `.reasoning-summary-section` | Learning outcomes checklist |
| `.reasoning-source-jumps` | Nav chips |
| `.reasoning-practice-card` | Practice card |
| `.reasoning-end-of-chapter` | End-of-chapter wrapper |

### Styling Classes (Source Content)

| Class | Untuk |
|---|---|
| `.is-source-view h2` | Source heading with pink left border |
| `.is-source-view p` | Source paragraph |
| `.is-source-view blockquote` | Source blockquote |
| `.is-source-view ul li` | Source list items (card style) |
| `.is-source-view ol li` | Source numbered items (card style) |
| `.reasoning-code-block` | Code/pre wrapper |
| `.reasoning-scaffold-table-wrap` | Table scroll wrapper |

---

## 4. JavaScript Patterns to Reuse

### Pipeline Functions (in `loadReasoningChapter`)

```javascript
fetch(sourcePath)
    .then(r => r.text())
    .then(html => {
        html = filterSourceHeadings(html);    // remove module-level
        html = stripSourceNumbering(html);    // remove "1.1 " prefixes
        
        // Inject components into HTML string
        html = injectOrientationAndNav(...);
        html = injectHook(...);
        html = injectLab(...);
        html += renderEndOfChapter(...);
        
        container.innerHTML = html;
        
        // Setup interactions
        enhanceSourceMaterialForCanvas(container);
        initSourceVisualLab(container, visualConfig);
        setupHookInteraction(container);
        setupQuickChecks(container);
        setupChallengeInteraction(container);
        setupVisualNav(container);
        setupCopyButtons(container);
    });
```

### Render Functions

| Function | Output |
|---|---|
| `finalRenderHookSection(hook)` | Hook section HTML |
| `finalRenderExampleSection(example)` | Example card HTML |
| `finalRenderQuickCheckSection(qc)` | Quick check HTML |
| `finalRenderChallengeSection(challenge, num)` | Challenge textarea HTML |
| `finalRenderMistakesPractices(mistakes, practices)` | 2-col mistakes/practices HTML |
| `finalRenderSummarySection(outcomes, transition, num, total)` | Ringkasan HTML |
| `finalRenderPromptSection(lines)` | Code block prompt HTML |
| `renderFormattedText(text)` | Parse plain text → HTML with blockquote/list |
| `renderFlow(flow)` | Flow diagram HTML |
| `renderSourceVisualLab(config)` | 3-tab lab HTML |
| `renderOrientationAndNav(module, num, total)` | Orientation + nav chips HTML |
| `renderEndOfChapter(module, num, total, visualConfig)` | Full end-of-chapter HTML |

---

## 5. Important Gotchas

### 5.1 Heading Structure

Source HTML files harus punya struktur heading yang jelas:

```
Module level (will be filtered):
  <h1>Module Title</h1>
  <h2>Deskripsi Modul</h2>     ← filtered
  <h2>Tujuan Pembelajaran</h2> ← filtered
  <h2>Peta Pembelajaran</h2>   ← filtered
  <hr />

Chapter level:
  <h1>Submateri 1 — Title</h1>  ← number stripped
  <h2>1.1 Subtopic</h2>         ← number stripped
  ...
```

### 5.2 appendChild vs cloneNode

**SELALU** pake `appendChild()` (move node) instead of `cloneNode()` (copy).
cloneNode menghilangkan event listeners.

### 5.3 Cache Buster

**SELALU** bump kedua file (JS + CSS) barengan. Jangan cuma satu.

### 5.4 Topik vs Submateri

Source menggunakan penomoran **Submateri** (1.1, 1.2, 2.1, dst).
Pedagogical chapters menggunakan penomoran **Topik** (1-6).
Keduanya TIDAK selalu align. Gunakan `stripSourceNumbering()` untuk menghapus nomor source dari heading.

### 5.5 Nav Chips

Nav chip `data-jump` harus cocok dengan `data-section` di DOM.
Untuk source H2s, tambahkan `data-section="konsep"` di `enhanceSourceMaterialForCanvas()`.

### 5.6 localStorage Keys

Format: `herai{ModuleName}{Feature}{Property}`
JANGAN ganti tanpa migrasi.

---

## 6. Migration Checklist

Ketika menerapkan pattern ini ke course EXISTING:

- [ ] Source material sudah dipecah per chapter
- [ ] CHAPTERS array sudah lengkap (title, hook, concepts, flow, etc.)
- [ ] PRACTICES array sudah dengan topic grouping
- [ ] QUIZ array sudah dengan 4 opsi per soal
- [ ] DISCUSSION_PROMPTS sudah dengan 4 prompt
- [ ] SOURCE_VISUALS sudah dengan lab config
- [ ] Materi HTML page sudah dengan tabs, sidebar, pagination
- [ ] Latihan HTML page sudah dengan navigator, counter, save/edit/reset
- [ ] Kuis HTML page sudah dengan navigator, counter, single attempt
- [ ] Diskusi HTML page sudah dengan inline reply composer
- [ ] Route sudah terdaftar di router.js
- [ ] Script sudah ditambahkan di index.html
- [ ] Cache buster sudah dibump
- [ ] LocalStorage keys unik (tidak bentrok dengan module lain)
- [ ] Nav chip data-jump cocok dengan data-section di DOM
- [ ] Heading numbering sudah di-strip
- [ ] Module-level headings sudah di-filter
- [ ] Tidak ada `border-radius: 0`
- [ ] Tidak ada dark background untuk learning surface
- [ ] Mobile tidak overflow (scrollWidth <= innerWidth pada 390px)

---

## 7. Python Migration Lessons Learned

### Critical Bugs Found & Fixed

| Bug | Root Cause | Fix |
|---|---|---|
| `renderList` undefined crash | Copied from Reasoning but function was missing in JS | Add `renderList` and `renderFlow` functions |
| sourcePaths broken for Ch2-8 | Template had `/pages/.../` with literal `...` | Replace with full path |
| router function mismatch | `initAiPythonBasic` vs `initAiPythonPractice` | Fixed in router.js |
| Reasoning text in Python pages | Copied HTML template without replacing text | sed replace all |
| index.html missing ai-python.js | Forgot to add script reference | Added to index.html |

### Python-Specific Architecture Notes

1. **15 source chapters → 8 pedagogical topics** — Chapters were merged into topic files (`cat file1 file2 > topic.html`)
2. **Pyodide** — Live Python execution code exists in `ai-python.js` but playground HTML isn't injected into source yet
3. **CHAPTERS data is minimal** — Only title/summary/objectives/sourcePath. Missing: hook, concepts, flow, example, quickCheck, challenge
4. **Cache buster v3** for Python JS in index.html

### When Creating a New Module

1. Start by generating chapter HTML from source Markdown using `marked`
2. Merge related chapters into topic files if needed
3. Copy the Reasoning controller as a base
4. Replace ALL Reasoning references (function names, paths, STORAGE keys)
5. Set up CHAPTERS with AT LEAST: title, shortTitle, duration, icon, summary, objectives, sourcePath
6. **Verify sourcePath is a FULL PATH** — no template placeholders
7. Test Topic 1 loads, then test Topic 2
8. **Test ALL 4 routes** (materi, latihan, kuis, diskusi) — jangan cuma materi
9. Enrich CHAPTERS with interactive data (hook, concepts, lab, quickCheck, challenge) one topic at a time

---

## 8. 🚨 Missing Functions Checklist (CRITICAL)

Setiap kali copy `ai-reasoning.js` ke controller baru, PASTIKAN semua fungsi berikut ada.
Ini adalah daftar fungsi yang PERNAH hilang dan menyebabkan crash:

| Function | Used By | Crash If Missing |
|---|---|---|
| `renderList` | renderOrientationAndNav | Page crash on load |
| `renderFlow` | renderEndOfChapter | Page crash on load |
| `escapeHtml` | ALL render functions | Silent HTML corruption |
| `escapeSelector` | query selectors | Query errors |
| `safeJsonParse` | localStorage read | TypeError on first visit |
| `setStatus` | initAiXxxPractice | Practice page crash |
| `findH2Sections` | loadXxxChapter (pipeline) | Page crash on load |
| `renderFormattedText` | renderPracticeCard | Practice card crash |
| `renderPracticeCard` | initAiXxxPractice | Practice page crash |
| `loadSourceHtml` | init functions | Source load failure |
| Semua `finalRender*` | renderEndOfChapter | End-of-chapter crash |
| Semua `setup*` | loadXxxChapter | Interactive broken |
| `filterSourceHeadings` | pipeline | Content corruption |
| `stripSourceNumbering` | pipeline | Wrong heading numbers |
| `injectAfterHeading` | pipeline | Components missing |

**Cara cek**: 
```bash
for func in renderList renderFlow escapeHtml escapeSelector safeJsonParse setStatus findH2Sections renderFormattedText renderPracticeCard loadSourceHtml finalRenderHookSection finalRenderExampleSection finalRenderQuickCheckSection finalRenderChallengeSection finalRenderMistakesPractices finalRenderSummarySection finalRenderPromptSection renderSourceVisualLab initSourceVisualLab enhanceSourceMaterialForCanvas setupHookInteraction setupQuickChecks setupChallengeInteraction setupVisualNav setupCopyButtons filterSourceHeadings stripSourceNumbering injectAfterHeading getSourceFile; do
  c=$(grep -c "function $func" js/frontend/fellow-dashboard/ai-NEW.js)
  [ "$c" -eq 0 ] && echo "❌ MISSING: $func" || echo "✅ $func"
done
```

## 9. Data Structure Gotchas

| Issue | Fix |
|---|---|
| PRACTICES missing `fields` | Every entry needs `"fields": [["jawaban", "Tulis..."]]` |
| QUIZ array wrong format | Must be `[question, [options], correctIndex, explanation]` |
| `getSavedPractice()` null | Use `|| { answers: {}, revealed: [] }` guard |
| PRACTICE_TOPICS stale labels | Update with new course topic names |
| CHAPTERS missing fields | Initial can be minimal: title, shortTitle, duration, icon, summary, objectives, sourcePath |
| sourcePath with `...` | Full absolute path: `/pages/frontend/.../chapters/01-topic.html` |

## 10. Test Script

Setelah build controller baru, test:
```javascript
// 1. Syntax
node --check js/frontend/fellow-dashboard/ai-NEW.js

// 2. Function existence
grep -c "function SETUP_FUNCTION" js/frontend/fellow-dashboard/ai-NEW.js

// 3. Browser test (Playwright)
await page.goto('http://localhost:3000/#/participant-ai-NEW');
// Check: dashboard loads, no error in console, content renders

// 4. Test navigation
await page.click('.lesson-tabs a[href*="practice"]');
// Check: practice page loads with cards

// 5. Test quiz
await page.click('.lesson-tabs a[href*="quiz"]');
// Check: quiz page loads with questions
```
