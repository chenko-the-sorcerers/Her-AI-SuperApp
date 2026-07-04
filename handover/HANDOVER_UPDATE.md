# HerAI Development Handover & Checkpoint
**Tanggal:** 5 Juli 2026 (Sesi Sore - Final)  
**Branch:** `design`  
**Commit Terakhir:** (akan di-commit)

Dokumen ini ditulis sebagai pedoman *handover* untuk tim developer atau AI Agent berikutnya agar bisa langsung melanjutkan pekerjaan tanpa kehilangan konteks.

---

## Changelog Sesi Ini (5 Juli 2026)

### A. Merge Math for AI dari Nazril

**File BARU dari Nazril (7 file):**
- `js/frontend/fellow-dashboard/ai-math-for-ai.js` — Controller Math for AI (760 lines)
- `pages/frontend/fellow-dashboard/ai-lab/math-for-ai/overview.html`
- `pages/frontend/fellow-dashboard/ai-lab/math-for-ai/lesson.html`
- `pages/frontend/fellow-dashboard/ai-lab/math-for-ai/practice.html`
- `pages/frontend/fellow-dashboard/ai-lab/math-for-ai/quiz.html`
- `pages/frontend/fellow-dashboard/ai-lab/math-for-ai/discussion.html`
- `docs-nazril/` (4 file docs referensi — **tidak di-push ke GitHub**)

**Status:** ⚠️ **Under development** — semua route Math for AI (11 route) diarahkan ke `under-development.html`

### B. ML Module — Tetap Under Development

ML dari Nazril (legacy AI Lab lesson files) digabung, tapi semua route tetap under development:
- `/participant-ai-lab-ml` → `under-development.html`
- `/participant-ai-lab-ml-intro` → `under-development.html`
- `/participant-ai-lab-ml-hypothesis` → `under-development.html`
- `/participant-ai-lab-ml-vc-dim` → `under-development.html`
- `/participant-ai-lab-ml-bias-variance` → `under-development.html`
- `/participant-ai-lab-ml-practice` → `under-development.html`
- `/participant-ai-lab-ml-quiz` → `under-development.html`
- `/participant-ai-lab-ml-discussion` → `under-development.html`

### C. Generative AI — Under Development

`/participant-ai-lab-gen` → `under-development.html`

### D. CV Routes — Restored

Nazril tidak sengaja menghapus 12 route CV dari `routes` object. Sudah dikembalikan:

| Route | File |
|---|---|
| `/participant-ai-lab-cv` | `ai-lab/computer-vision.html` |
| `/participant-ai-lab-cv-cnn-intro` | `lessons/cnn-intro.html` |
| `/participant-ai-lab-cv-cnn-why` | `lessons/cnn-why.html` |
| `/participant-ai-lab-cv-cnn-relu` | `lessons/cnn-relu.html` |
| `/participant-ai-lab-cv-filtering-kernels` | `lessons/filtering-kernels.html` |
| `/participant-ai-lab-cv-cnn-fc` | `lessons/cnn-fc.html` |
| `/participant-ai-lab-cv-cnn-hands` | `lessons/cnn-hands.html` |
| `/participant-ai-lab-cv-cnn-arch` | `lessons/cnn-arch.html` |
| `/participant-ai-lab-cv-morph` | `lessons/morphological-transforms.html` |
| `/participant-ai-lab-cv-opencv` | `lessons/image-processing-opencv.html` |
| `/participant-ai-lab-cv-pixel` | `lessons/pixel-anatomy.html` |
| `/participant-ai-lab-cv-cnn-arch-builder` | `lessons/cnn-arch-builder.html` |

### E. NLP Lessons — Single Page (Tab Latihan/Kuis/Diskusi Dihapus)

5 NLP lesson files dihilangkan tab Latihan, Kuis, Diskusi karena route-nya belum ada:
- `tokenization.html`
- `preprocessing.html`
- `pos-ner.html`
- `bow.html`
- `tfidf.html`

Masing-masing sekarang cuma punya tab **Materi** (single page).

---

## Complete Route Map

### ✅ ACTIVE — Ada Konten

| Halaman | Route | File |
|---|---|---|
| Home | `/` atau `/home` | `frontend/home.html` |
| Projects | `/projects` | `frontend/projects.html` |
| Announcement | `/announcement` (+ stage vars) | `frontend/announcement.html` |
| Wall of Fame | `/wall-of-fame` | `frontend/wall-of-fame.html` |
| Leaderboard | `/leaderboard` | `frontend/leaderboard.html` |
| Graduation | `/graduation` | `frontend/graduation.html` |
| Register | `/register` | `frontend/register.html` |
| Login | `/profile` atau `/participant-login` | `frontend/participant-login.html` |
| Meeting | `/meeting` | `frontend/meeting.html` |
| Messaging | `/messaging` | `fellow-dashboard/chatroom.html` |
| Competency Test | `/competency-test` | `frontend/competency-test.html` |
| Retest | `/retest` | `frontend/retest.html` |
| Twibbon | `/twibbon` | `frontend/twibbon.html` |
| About Us | `/about-us` | `frontend/about-us.html` |
| Curriculum | `/curriculum` | `frontend/curriculum.html` |
| FAQ | `/faq` | `frontend/faq.html` |
| Industry Apps | `/industry-applications` | `frontend/industry-applications.html` |

### ✅ PARTICIPANT DASHBOARD — Ada Konten

| Halaman | Route | File |
|---|---|---|
| Dashboard | `/participant-dashboard` | `fellow-dashboard/dashboard.html` |
| Modules | `/participant-modules` | `fellow-dashboard/modules.html` |
| AI Fundamentals | `/participant-ai-fundamentals` | `fellow-dashboard/ai-fundamentals.html` |
| Modul 1 - Pengantar AI | `/participant-ai-intro` | `01-pengantar-ai/materi.html` |
| Modul 1 - Latihan | `/participant-ai-intro-practice` | `01-pengantar-ai/latihan.html` |
| Modul 1 - Kuis | `/participant-ai-intro-quiz` | `01-pengantar-ai/kuis.html` |
| Modul 1 - Diskusi | `/participant-ai-intro-discussion` | `01-pengantar-ai/diskusi.html` |
| Modul 1 - Sub-topik | `/participant-ai-types` dll | `01-pengantar-ai/lesson.html` (via settings.js) |
| Modul 2 - Python | `/participant-ai-python` | `02-python-untuk-ai/materi.html` |
| Modul 2 - Latihan | `/participant-ai-python-practice` | `02-python-untuk-ai/latihan.html` |
| Modul 2 - Kuis | `/participant-ai-python-quiz` | `02-python-untuk-ai/kuis.html` |
| Modul 2 - Diskusi | `/participant-ai-python-discussion` | `02-python-untuk-ai/diskusi.html` |
| Computer Vision | `/participant-ai-lab-cv` | `ai-lab/computer-vision.html` |
| CV - 12 Sub-lesson | `/participant-ai-lab-cv-*` | `ai-lab/lessons/cnn-*.html` dll |
| NLP | `/participant-ai-lab-nlp` | `ai-lab/nlp.html` |
| NLP - 5 Lessons | `/participant-ai-lab-tokenization` dll | `ai-lab/lessons/*.html` |
| Profile | `/participant-profile` | `fellow-dashboard/profile.html` |
| Mentor | `/participant-mentor` | `fellow-dashboard/mentor.html` |
| Tasks | `/participant-tasks` | `fellow-dashboard/tasks.html` |
| Projects | `/participant-projects` | `fellow-dashboard/projects.html` |
| Events | `/participant-events` | `fellow-dashboard/events.html` |
| Community | `/participant-community` | `fellow-dashboard/community.html` |
| Certificates | `/participant-certificates` | `fellow-dashboard/certificates.html` |
| Leaderboard | `/participant-leaderboard` | `fellow-dashboard/leaderboard.html` |
| Help | `/participant-help` | `fellow-dashboard/help.html` |
| Settings | `/participant-settings` | `fellow-dashboard/settings.html` |

### ⚠️ UNDER DEVELOPMENT (20 route)

Semua route berikut mengarah ke `under-development.html`:

| Route | Keterangan |
|---|---|
| `/participant-under-development` | Fallback global |
| `/participant-ai-modern` | Konsep AI Modern (materi ada, latihan/kuis blm) |
| `/participant-ai-modern-practice` | — |
| `/participant-ai-modern-quiz` | — |
| `/participant-ai-modern-discussion` | — |
| `/participant-ai-lab-gen` | Generative AI |
| `/participant-ai-lab-machine-learning` | ML overview |
| `/participant-ai-lab-ml` | ML module |
| `/participant-ai-lab-ml-practice` | — |
| `/participant-ai-lab-ml-quiz` | — |
| `/participant-ai-lab-ml-discussion` | — |
| `/participant-ai-lab-ml-intro` | ML lesson |
| `/participant-ai-lab-ml-hypothesis` | ML lesson |
| `/participant-ai-lab-ml-vc-dim` | ML lesson |
| `/participant-ai-lab-ml-bias-variance` | ML lesson |
| `/participant-ai-lab-math` | Math for AI |
| `/participant-ai-lab-math-intro` | — |
| `/participant-ai-lab-math-linear-algebra` | — |
| `/participant-ai-lab-math-statistics` | — |
| `/participant-ai-lab-math-probability` | — |
| `/participant-ai-lab-math-calculus` | — |
| `/participant-ai-lab-math-optimization` | — |
| `/participant-ai-lab-math-case-study` | — |
| `/participant-ai-lab-math-practice` | — |
| `/participant-ai-lab-math-quiz` | — |
| `/participant-ai-lab-math-discussion` | — |

### 🔴 DASHBOARD ADMIN (19 route)

Semua route `/dashboard`, `/skoring`, `/ai-prescreening`, `/anti-fraud`, dll → ✅ Active.

---

## File yang Disentuh Sesi Ini

| File | Perubahan |
|---|---|
| `js/router.js` | +11 route Math for AI, +restore 12 CV routes, ML tetap under-dev, hapus init hooks Math |
| `index.html` | +1 script `ai-math-for-ai.js` |
| `pages/frontend/fellow-dashboard/modules.html` | Card Math → `#/participant-under-development` |
| `pages/frontend/fellow-dashboard/ai-fundamentals.html` | Dikembalikan ke versi kita (talak Nazril) |
| `pages/frontend/fellow-dashboard/ai-lab/lessons/tokenization.html` | Hapus tab Latihan/Kuis/Diskusi |
| `pages/frontend/fellow-dashboard/ai-lab/lessons/preprocessing.html` | Hapus tab Latihan/Kuis/Diskusi |
| `pages/frontend/fellow-dashboard/ai-lab/lessons/pos-ner.html` | Hapus tab Latihan/Kuis/Diskusi |
| `pages/frontend/fellow-dashboard/ai-lab/lessons/bow.html` | Hapus tab Latihan/Kuis/Diskusi |
| `pages/frontend/fellow-dashboard/ai-lab/lessons/tfidf.html` | Hapus tab Latihan/Kuis/Diskusi |
| `js/frontend/fellow-dashboard/ai-math-for-ai.js` | **BARU** — dari Nazril |
| `pages/frontend/fellow-dashboard/ai-lab/math-for-ai/*` | **BARU** — 5 file dari Nazril |
| `docs-nazril/` | **BARU** — 4 docs (tidak di-push ke GitHub) |

---

## Aturan Besi untuk Developer/AI Selanjutnya

1. **BACA `GEMINI.md`** sebelum ngapa-ngapain.
2. **Jangan hapus konten mentor** — TAMBAHIN, jangan replace.
3. **Jangan pakai emoji di UI** — FontAwesome icons.
4. **Border-radius TIDAK BOLEH 0** — card 14-20px, button 100px, input 14-20px.
5. **Warna icon di card grid konsisten pink** — jangan warna brand asli.
6. **`docs-faiz/` dan `docs-nazril/` JANGAN di-push ke GitHub** — ada di `.gitignore`.
7. **Semua perubahan WAJIB di-commit** tapi JANGAN di-push tanpa izin.
8. **Test di `http://localhost:3000`** dengan Hard Refresh setelah setiap perubahan.

---

## Git Checkpoint

```bash
# Lihat perubahan sesi ini:
git log --oneline HEAD~5..HEAD
```
