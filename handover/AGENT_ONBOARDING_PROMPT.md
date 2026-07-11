# 🚀 HerAI Fellowship — Agent Onboarding Prompt

> Copas pesan ini sebagai initial prompt ke AI agent baru.
> Agent akan mendapat FULL context: project state, arsitektur, rules, dan instruksi.

---

## 1. Project Overview

**Project:** HerAI Fellowship SuperApp — Platform belajar AI untuk 100 perempuan Indonesia.
**Stack:** Vanilla JS SPA (hash-router), CSS (no framework), HTML pages.
**Branch:** `design` — **BELUM PUSH** (ahead 8+ commits dari `origin/design`).
**Server:** `http-server` di `localhost:3000`, jalankan dengan `npx http-server -p 3000 -c-1`.
**Routes:** 113 route terdaftar, verifikasi dengan `node scripts/check-participant-routes.mjs`.

### Directory Structure

```
/
├── index.html                    ← entry point, script/css loader, cache buster
├── handover/                     ← dokumentasi (baca semua sebelum kerja)
├── materi/
│   ├── nazril/                   ← source material canonical
│   └── baru/                     ← material drafts
├── pages/frontend/fellow-dashboard/
│   └── foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/
│       ├── 01-pengantar-ai/      ← module lain (belum dikerjakan)
│       ├── 02-python-untuk-ai/   ← module lain (belum dikerjakan)
│       ├── 03-konsep-ai-modern/  ← module lain (belum dikerjakan)
│       └── 04-reasoning/         ← ⭐ CANONICAL COMPLETE — jadi template
│           ├── materi.html
│           ├── latihan.html
│           ├── kuis.html
│           ├── diskusi.html
│           └── chapters/         ← source chapter HTML (jangan diubah)
├── js/
│   ├── router.js                 ← SPA router (jangan diubah)
│   └── frontend/fellow-dashboard/
│       └── ai-reasoning.js       ← controller Reasoning (~2632 lines)
├── css/frontend/fellow-dashboard/
│   └── modules.css               ← semua component styles
└── assets/                       ← gambar, branding
```

---

## 2. Reasoning Module — Status FINAL

### Yang SUDAH selesai:

| Area | Detail |
|---|---|
| **6 Topics** | 1. Dari Menjawab ke Menalar, 2. Reasoning Dapat Diperiksa, 3. Planning, 4. Chain-of-Thought, 5. Tool Use, 6. Integrated Mission |
| **Layout** | Source-as-main-content — source Nazril jadi konten UTAMA (bukan disembunyiin di details) |
| **Interactive** | Hook (A/B), Lab (3 tabs), Quick Check (retry), Mini Challenge (save/edit/reset), Prompt Pattern (copy) |
| **Nav chips** | Pembuka → Hook \| Konsep → Source H2s \| Contoh & Latihan → Example \| Uji Pemahaman → Quick Check \| Ringkasan → Summary |
| **Source styling** | H2 pink left border, list items pink cards, blockquote pink left border, pre code block |
| **Practice** | 17 skenario, topic-groups navigator (4 grup), "Skenario 1 dari 17 \| Topic Name", formatted prompt (blockquote/list/paragraph) |
| **Quiz** | 26 soal, single attempt, review mode (show all after submit) |
| **Fase badges** | Dihapus (noise) |
| **Collapsible source** | Dihapus (lo minta semuanya kebuka) |

### Files:

| File | Path |
|---|---|
| Controller | `js/frontend/fellow-dashboard/ai-reasoning.js` |
| CSS | `css/frontend/fellow-dashboard/modules.css` |
| Materi | `pages/.../04-reasoning/materi.html` |
| Latihan | `pages/.../04-reasoning/latihan.html` |
| Kuis | `pages/.../04-reasoning/kuis.html` |
| Diskusi | `pages/.../04-reasoning/diskusi.html` |
| Source ch1-6 | `pages/.../04-reasoning/chapters/01-full.html` — `06-full.html` |
| Source canonical | `materi/nazril/submateri-reasoning-ai.md` (2755 baris) |

### Cache Buster: `index.html`

Line 47: `modules.css?v=20260712-reasoning-final-v35`
Line 80: `ai-reasoning.js?v=20260712-reasoning-final-v35`

WAJIB bump BERSAMAAN kalo JS/CSS berubah.

---

## 3. Pipeline Architecture (Ini WAJIB DIIKUTI)

```
fetch chapter HTML
  → filterSourceHeadings()     — buang module-level content
  → stripSourceNumbering()     — hapus "1.1 ", "2.1 " prefixes
  → inject orientation+nav     — SEBELUM heading pertama
  → inject hook                — SETELAH H2 section pertama
  → inject lab                 — SETELAH H2 section kedua
  → append end-of-chapter      — flow, example, quiz, challenge, etc
  → container.innerHTML = html
  → enhanceSourceMaterialForCanvas() — data-section, table/pre wrap
  → initSourceVisualLab()      — lab tab interaction
  → setupHookInteraction()     — hook click
  → setupQuickChecks()         — quiz interaction
  → setupChallengeInteraction()— textarea save/edit/reset
  → setupVisualNav()           — nav chip scroll
  → setupCopyButtons()         — copy button
```

### CRITICAL RULES:

1. **GUNAKAN `appendChild()` bukan `cloneNode()`** — cloneNode menghilangkan event listeners.
2. **Nav chip `data-jump` harus cocok dengan `data-section` di DOM** — tambah `data-section="konsep"` ke source H2s di `enhanceSourceMaterialForCanvas()`.
3. **Jangan pernah pake `border-radius: 0`** untuk visible elements.
4. **Jangan pernah pake dark backgrounds** (`#171827`, `#262837`) untuk learning surfaces.
5. **Jangan ubah localStorage keys** tanpa migrasi.
6. **Jangan ubah route, dashboard shell, sidebar, topbar, breadcrumb.**
7. **Bump cache buster v{next}** setiap ubah JS/CSS.

---

## 4. Design Rules (from AGENTS.md)

### Warna

```css
--fellow-pink: #f63392;
--fellow-line: rgba(244,143,188,.26);
--fellow-text: #171827;
--fellow-muted: #6f7282;
--fellow-line-active: rgba(246,51,146,.3);
```

- Pink `#f63392` hanya untuk aksen (icon, border active, badge)
- Text body: `#51596d` (bukan `#8e91a0` — terlalu terang)
- Pink circle icon: `rgba(246,51,146,.12)` background
- Background aksen: minimal `rgba(246,51,146,.12)`
- Semua icon pink konsisten — jangan hijau/biru/ungu

### Border Radius (WAJIB)

| Elemen | Radius |
|---|---|
| Cards, containers | `14px` – `20px` |
| Buttons, pills | `100px` |
| Inputs, search bars | `14px` – `20px` |
| Code blocks | `12px` – `16px` |
| Avatars, icons | `50%` |

### Mobile First

- Desktop: 1440px viewport
- Mobile minimum: 390px viewport
- WAJIB cek: `document.documentElement.scrollWidth <= window.innerWidth`
- Tabel panjang: scroll wrapper, jangan memperlebar dokumen

---

## 5. Source Material yang SUDAH TERSEDIA

### Prioritaskan untuk dikerjakan berikutnya:

1. **Python untuk AI** — source canonical:
   - `materi/nazril/Python-untuk-AI-redesign-final.md`
   - Belum dipecah jadi chapter HTML
   - Controller JS belum dibuat
   - Route: `#/participant-ai-python`

2. **AI Fundamentals (Pengantar AI)** — sudah ada:
   - `01-pengantar-ai/` folder dengan materi.html, latihan.html, kuis.html, diskusi.html
   - Tapi masih pake system lama (course-placeholder)
   - Butuh migrasi ke pipeline Reasoning

### Cara Apply Pattern ke Course Baru:

```
1. Source .md → pecah jadi chapter HTML
2. Buat controller JS (copy ai-reasoning.js, sesuaikan CHAPTERS/PRACTICES/QUIZ)
3. Buat HTML pages (copy template + adjust)
4. Tambah route di router.js
5. Tambah script di index.html
6. Test: node --check + route checker + browser
```

---

## 6. LocalStorage Contract

```text
heraiAiReasoningCurrentChapter
heraiAiReasoningPractice
heraiAiReasoningQuizDone
heraiAiReasoningQuizScore
heraiAiReasoningQuizAnswers
heraiAiReasoningDiscussion
heraiAiReasoningChallengeCh1 .. Ch6
```

Untuk module baru, ganti `Reasoning` → `{ModuleName}`.

---

## 7. Commit Rule

```
feat(reasoning): ...
fix(reasoning): ...
refactor(reasoning): ...
style(reasoning): ...
```

- JANGAN commit file module lain dalam 1 commit Reasoning
- JANGAN push tanpa izin

---

## ✅ Starter Commands

```bash
npx http-server -p 3000 -c-1                    # start dev server
node --check js/frontend/fellow-dashboard/ai-reasoning.js  # syntax check
node --check js/router.js                                      # router check
node scripts/check-participant-routes.mjs           # route check (113/113)
```

---

## 📋 Todo Saat Mulai

1. Baca semua file di `handover/`
2. `git status` — lihat perubahan terakhir
3. `git log --oneline -10` — lihat commit history
4. Buka `http://localhost:3000` — test di browser
5. Buka console browser — pastikan ga ada error
6. Tanyakan ke user: "Mau lanjut ke module mana?"
