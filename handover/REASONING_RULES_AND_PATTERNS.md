# Reasoning Module — Rules & Patterns

> **Current-use note (12 Juli 2026):** dokumen ini menjelaskan implementasi canonical Reasoning. Untuk aturan lintas-course terbaru, baca `UNIVERSAL_COURSE_STANDARD.md`; untuk bug nyata Python/AI Modern, baca `REGRESSION_AND_ERROR_PLAYBOOK.md`. Jika ada konflik, dua dokumen current tersebut dan runtime HEAD menang.

Dokumen ini berisi SEMUA aturan desain, CSS, JS pipeline, dan pattern yang diterapkan di module Reasoning.
Dokumen ini WAJIB dibaca sebelum mengubah module Reasoning ATAU menerapkan pattern ke module lain.

---

## 1. Arsitektur Pipeline (Source-As-Main-Content)

### Flow Diagram

```
User clicks topic
       ↓
loadReasoningChapter(N)
       ↓
Fetch chapter HTML (e.g. 01-full.html)
       ↓
filterSourceHeadings()  → remove module-level content
       ↓
stripSourceNumbering()  → remove "1.1 ", "2.1 " prefixes
       ↓
Inject components:
  → orientation + nav BEFORE first heading
  → hook AFTER first H2 section
  → lab AFTER second H2 section
  → end-of-chapter AT THE END
       ↓
container.innerHTML = html
       ↓
enhanceSourceMaterialForCanvas() → add data-section to H2s, wrap tables/pre/blockquote
       ↓
initSourceVisualLab() → setup lab tab interactions
       ↓
setupHookInteraction() → hook click handlers
setupQuickChecks() → quiz interaction
setupChallengeInteraction() → textarea save/edit/reset
setupVisualNav() → nav chip scroll targets
setupCopyButtons() → copy button for code blocks
```

### Key Rule: appendChild NOT cloneNode

```javascript
// ❌ WRONG — event listeners die
detailsContent.appendChild(node.cloneNode(true));
node.remove();

// ✅ CORRECT — event listeners preserved
detailsContent.appendChild(node);  // moves the node
```

### Key Rule: Function Order in .then()

```javascript
.then(function(html) {
    // 1. Filter + strip numbers (string manipulation)
    html = filterSourceHeadings(html);
    html = stripSourceNumbering(html);

    // 2-6. Inject components (string manipulation)
    // 2. orientation + nav BEFORE first heading
    // 3. findH2Sections() helper
    // 4. hook after first H2 section
    // 5. lab after second H2 section
    // 6. end-of-chapter at end

    // 7. Set HTML
    container.innerHTML = html;

    // 8-14. Setup interactions (DOM manipulation)
    enhanceSourceMaterialForCanvas(container, module);
    initSourceVisualLab(container, visualConfig);
    setupHookInteraction(container);
    setupQuickChecks(container);
    setupChallengeInteraction(container);
    setupVisualNav(container);
    setupCopyButtons(container);
});
```

---

## 2. CSS Pattern

### Theme Colors (from AGENTS.md)

```css
--fellow-pink: #f63392;
--fellow-line: rgba(244,143,188,.26);
--fellow-text: #171827;
--fellow-muted: #6f7282;
--fellow-line-active: rgba(246,51,146,.3);
```

### Background Colors

| Use | Value |
|---|---|
| White cards | `#ffffff` |
| Pink-light surfaces | `#fff7fb` / `#fff0f7` |
| Subtle pink highlight | `rgba(246,51,146,.04)` |
| Pink border | `rgba(244,143,188,.2)` |

❌ NEVER use dark backgrounds (`#171827`, `#262837`) for learning surfaces
❌ NEVER use `border-radius: 0`

### Source Content Headings

```css
.is-source-view h2 {
    border-left: 4px solid #f63392;
    color: #171827;
    padding-left: 14px;
}
```

### List Items (Source Content)

```css
.reasoning-scaffold-rich ul li,
.is-source-view ul li {
    background: rgba(246,51,146,.04);
    border: 1px solid rgba(244,143,188,.16);
    border-radius: 12px;
    padding: 10px 14px 10px 34px;
}
```

### Blockquote

```css
.is-source-view blockquote {
    background: rgba(246,51,146,.05);
    border-left: 4px solid rgba(246,51,146,.3);
    border-radius: 14px;
}
```

### Mistakes & Practices Cards

```css
/* Mistakes: subtle pink bg + left border */
.reasoning-mp-col.reasoning-mp-mistakes li {
    background: rgba(246,51,146,.04);
    border-left: 3px solid rgba(246,51,146,.25);
}
/* Practices: stronger pink bg + left border */
.reasoning-mp-col.reasoning-mp-practices li {
    background: rgba(246,51,146,.06);
    border-left: 3px solid #f63392;
}
```

### Pink Icon Circle Pattern

```css
/* Icon in pink circle — used across all components */
.component-head > i {
    align-items: center;
    background: rgba(246,51,146,.12);
    border-radius: 50%;
    color: #f63392;
    display: inline-flex;
    flex: 0 0 36px;
    height: 36px;
    justify-content: center;
    width: 36px;
}
```

### Practice Navigator Topic Groups

```css
/* Mobile: vertical stack */
.reasoning-task-navigator { flex-direction: column; }
.reasoning-nav-group { border-bottom: 1px solid rgba(244,143,188,.12); }

/* Desktop: horizontal row */
@media (min-width: 768px) {
    .reasoning-task-navigator { flex-direction: row; }
    .reasoning-nav-group { border-bottom: 0; }
}
```

---

## 3. JS Pattern: Interactive Components

### Component Registration Pattern

Setiap interaktif component punya:
1. **Render function** — generates HTML string
2. **Init function** — sets up event listeners (called after innerHTML)
3. **CSS class** — for styling

### Lab Tab Interaction

```javascript
function initSourceVisualLab(container, config) {
    container.querySelectorAll("[data-concept-index]").forEach(button => {
        button.addEventListener("click", function() {
            // Update aria-selected
            // Update stage content
            // Update counter
        });
    });
}
```

### Quick Check

```javascript
// Click option → Submit → Correct/Wrong → Retry
function setupQuickChecks(container) {
    container.querySelectorAll(".reasoning-quick-check").forEach(card => {
        // data-check-answer = correct index
        // data-check-option = option index
        // data-check-submit = submit button
        // data-check-retry = retry button
        // .reasoning-check-feedback = feedback text
    });
}
```

### Mini Challenge

```javascript
// Textarea + Save (localStorage) + Edit + Reset + Example reveal
function setupChallengeInteraction(container) {
    container.querySelectorAll("[data-challenge-textarea]").forEach(textarea => {
        // key = heraiAiReasoningChallengeCh{N}
        // save → localStorage
        // edit → un-hide textarea
        // reset → clear localStorage
    });
}
```

### Nav Chips

```javascript
// Button with data-jump → scrolls to [data-section] element
function setupVisualNav(container) {
    container.querySelectorAll("[data-jump]").forEach(button => {
        button.addEventListener("click", function() {
            var target = container.querySelector('[data-section="' + button.dataset.jump + '"]');
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}
```

---

## 4. Practice Card Pattern

### Data Structure

```javascript
{
    "id": "latihan-1",
    "title": "Latihan 1 — Fakta atau Asumsi?",
    "focus": "Latihan 1",          // NOT displayed anymore (number only)
    "prompt": "Kasus: \n> ...\n1. Item 1\n2. Item 2",
    "fields": [["jawaban", "Tuliskan analisis..."]],
    "guide": "Pembahasan..."
}
```

### Rendering

- `renderFormattedText()` parses prompt text into HTML
- Grouped by topic in navigator via `PRACTICE_TOPICS` array
- Counter shows "Skenario N dari 17 | Topic Name"
- Reveal button shows guide

---

## 5. Quiz Pattern

### Data Structure

```javascript
const QUIZ = [
    ["Question text?",              // question
     ["Option A", "Option B", ...],  // options (4)
     1,                              // correct answer index
     "Explanation text"              // explanation
    ],
    ...
];
```

### Review Mode

After single-attempt submit:
```javascript
// In lockQuiz():
form.querySelectorAll("[data-quiz-index]").forEach(article => {
    article.hidden = false;  // show ALL questions
});
// Hide navigator, counter, prev/next
```

---

## 6. LocalStorage Pattern (Contract)

```text
heraiAiReasoning{Feature}{Property}
```

Rules:
- ❌ JANGAN ganti key tanpa migrasi
- ✅ Gunakan `safeJsonParse()` untuk read
- ✅ Gunakan `JSON.stringify()` untuk write
- ✅ Test persistence with page refresh

---

## 7. Nav Chip Design

### Labels & Mapping

| Label | data-jump | Section Found |
|---|---|---|
| Pembuka | `hook` | `.reasoning-hook-section` |
| Konsep | `konsep` | source `<h2>` elements + lab |
| Contoh & Latihan | `contoh` | `.reasoning-example-section`, `.reasoning-visual-board` |
| Uji Pemahaman | `check` | `.reasoning-quick-check` |
| Ringkasan | `ringkasan` | `.reasoning-mistakes-practices`, `.reasoning-summary-section` |

### Source H2 data-section

```javascript
// Added in enhanceSourceMaterialForCanvas():
h2.setAttribute("data-section", "konsep");
// (skipped for headings inside .end-of-chapter and .orientation)
```

---

## 8. Source Content Filtering

### What Gets Removed

| Heading | Reason |
|---|---|
| `H1: "Reasoning AI: Cara AI..."` | Module-level (appears before Submateri 1) |
| `H2: "Deskripsi Modul"` | Module-level |
| `H2: "Tujuan Pembelajaran"` | Module-level (redundant with pedagogical objectives) |
| `H2: "Peta Pembelajaran"` | Module-level |
| `H2: "Ringkasan Submateri"` | Redundant with pedagogical Ringkasan |

### What Gets Number Stripped

- `"1.1 Pembuka..."` → `"Pembuka..."`
- `"Submateri 1 — ..."` → `"..."`
- `"Integrasi — ..."` → `"..."`

### What Stays

- ALL educational content (paragraphs, tables, lists, blockquotes, code blocks)
- References, Glosarium
- ALL interactive components (hook, lab, quick check, challenge, etc.)

---

## 9. Cache Buster Policy

- **WAJIB bump** setiap kali `ai-reasoning.js` atau `modules.css` berubah
- Format: `v=YYYYMMDD-reasoning-final-v{N}`
- Bump di `index.html` untuk file:
  - `css/frontend/fellow-dashboard/modules.css`
  - `js/frontend/fellow-dashboard/ai-reasoning.js`
- Jangan bump SATU aja — bump KEDUANYA

---

## 10. Performance & Responsive

- Desktop: 1440px viewport
- Mobile: 390px viewport (minimum)
- No horizontal overflow (`scrollWidth <= innerWidth`)
- Tables: wrapped in scroll container
- Nav chips: horizontal scroll on mobile
- Lab tabs: horizontal scroll on mobile
- Practice navigator: vertical stack on mobile, horizontal on desktop

---

## 11. Commit Convention

```text
feat(reasoning): new feature description
fix(reasoning): bug fix description
refactor(reasoning): restructuring without behavior change
style(reasoning): CSS/visual changes only
```

- JANGAN commit file dari module lain dalam commit Reasoning
- JANGAN push tanpa izin

---

## 12. Cross-Course Lessons Added After AI Modern v4

- Gunakan request sequence guard atau `AbortController` ketika chapter di-fetch; response lama tidak boleh menimpa pilihan terbaru.
- Audit pasangan class renderer dan selector CSS. Elemen dapat ada di DOM tetapi tampil default jika nama class berbeda.
- Audit pasangan state JS/CSS: gunakan kontrak seperti `is-active`, `is-complete`, `is-selected`, `is-locked` secara konsisten.
- Quiz question map diletakkan sebelum soal aktif.
- Objective/checklist text dibungkus dalam element khusus agar pseudo-element global source list tidak bertabrakan.
- Jangan memakai grid/flex langsung pada mixed text-node paragraph.
- `scrollWidth <= innerWidth` belum cukup; screenshot dan computed width komponen tetap wajib.
- Untuk source integrity, tandai node enrichment dan keluarkan hanya node tersebut dari clone audit.
- Konsep AI Modern v4 menjadi referensi beginner roadmap, worked examples, glossary, dan contextual visual explainer; Reasoning tetap referensi function parity.
