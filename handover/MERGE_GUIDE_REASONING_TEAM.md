# Merge Guide - Reasoning Team

**Tanggal:** 11 Juli 2026
**Tujuan:** panduan merge lanjutan pekerjaan `Reasoning` dengan branch yang sudah berisi rombak final Pengantar AI, Python untuk AI, merge Reasoning scaffold, audit final, dan finalisasi Reasoning canonical.

Dokumen ini dibuat karena pekerjaan lokal terbaru menyentuh banyak area AI Fundamentals. Reasoning scaffold dari `origin/design` sudah di-merge dan kini sudah difinalkan menjadi folder canonical. Semua lanjutan wajib menjaga perubahan final yang sudah masuk.

---

## Ringkasan Kondisi Repo Ini

Checkpoint lokal terbaru:

- Baseline lokal terbaru:
  - `c93a5fb fix: audit python module polish`
  - `b0c6829 merge: integrate reasoning scaffold updates`
  - `c1870d4 feat: finalize python ai module and merge handover`
- `01 - Pengantar AI` sudah final runtime.
  - 5 chapter padat.
  - Latihan audit sosio-teknis.
  - Kuis 10 soal single attempt.
  - Kuis sudah full-card clickable.
  - Diskusi skenario etika.
- `02 - Python untuk AI` sudah final runtime.
  - 13 chapter.
  - Panel `Belajar Aktif` per chapter.
  - Latihan Pyodide tetap aktif.
  - Mini project preprocessing teks.
  - Kuis 15 soal full-card clickable.
  - Diskusi Python untuk AI.
  - Code block materi memakai background HerAI pink-light, bukan terminal hitam.
- `AGENTS.md` sudah diperbarui dengan aturan UI baru.
- `04 - Reasoning` di repo ini sudah final canonical lewat route `#/participant-ai-reasoning`.
  - 4 submateri: `how-ai-reasons`, `planning-and-decomposition`, `chain-of-thought`, `tool-use`.
  - 17 latihan.
  - 25 soal.
  - 4 diskusi.
  - Folder canonical: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/`.
  - Activity route final: `#/participant-ai-reasoning-practice`, `#/participant-ai-reasoning-quiz`, `#/participant-ai-reasoning-discussion`.
- Route checker awal setelah canonical final:

Route checker terakhir:

```text
Total: 113 | 113 passed | 0 failed
```

Verifikasi audit terakhir juga lulus:

```text
node --check js/router.js
node --check js/frontend/fellow-dashboard/settings.js
node --check js/frontend/fellow-dashboard/ai-python-basic.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
git diff --check
```

---

## File Yang Harus Dijaga Saat Merge

Jangan overwrite perubahan di file berikut kecuali konflik memang terjadi dan sudah dibandingkan manual:

```text
AGENTS.md
js/frontend/fellow-dashboard/ai-python-basic.js
js/frontend/fellow-dashboard/settings.js
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/
materi/python-untuk-ai.md
materi/pengantar-ai.md
handover/
```

Jika konflik di `settings.js`, hati-hati karena file ini memuat banyak logic dashboard dan Pengantar AI. Jangan replace satu file penuh tanpa diff manual.

Jika konflik di `ai-python-basic.js`, pertahankan:

- `totalChapters = 13`
- `window.loadPythonChapter`
- Pyodide runner
- latihan save/reset/run
- quiz Python full-card clickable
- discussion localStorage
- panel `Belajar Aktif`

---

## Area Yang Mungkin Disentuh Tim Reasoning

Tim Reasoning kemungkinan menyentuh salah satu dari:

```text
js/router.js
js/frontend/fellow-dashboard/course-placeholder.js
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/overview.html
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/
handover/
materi/
```

Jika Reasoning masih draft/scaffold:

- Jangan membuat folder final `materi.html`, `latihan.html`, `kuis.html`, `diskusi.html`.
- Update `COURSE_SCAFFOLDS` di `js/frontend/fellow-dashboard/course-placeholder.js`.
- Route tetap `#/participant-ai-reasoning`.

Jika Reasoning sudah final:

- Boleh buat folder canonical, misalnya:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/
```

- Activity wajib lengkap:

```text
materi.html
latihan.html
kuis.html
diskusi.html
```

- Update `js/router.js` hanya untuk route Reasoning dan activity-nya.
- Update overview AI Fundamentals bila card Reasoning berubah dari scaffold ke final.
- Update semua dokumen handover.

---

## Urutan Merge Yang Disarankan

1. Simpan perubahan lokal dulu.

```bash
git status --short
```

2. Pull/merge branch tim Reasoning.

3. Cek konflik.

```bash
git status --short
```

4. Untuk konflik, prioritaskan:
   - pertahankan perubahan final Pengantar AI;
   - pertahankan perubahan final Python untuk AI;
   - masukkan perubahan Reasoning hanya pada area Reasoning;
   - jangan restore route lama atau folder legacy.

5. Setelah konflik selesai, jalankan verifikasi.

```bash
node --check js/router.js
node --check js/frontend/fellow-dashboard/settings.js
node --check js/frontend/fellow-dashboard/ai-python-basic.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
git diff --check
node scripts/check-participant-routes.mjs
```

6. Smoke test minimal di browser:

```text
#/participant-ai-intro-quiz
#/participant-ai-python
#/participant-ai-python-practice
#/participant-ai-python-quiz
#/participant-ai-reasoning
```

7. Update handover setelah merge:

```text
handover/HANDOVER_UPDATE.md
handover/MODULE_STATUS_MAP.md
handover/COURSE_HIERARCHY.md
handover/PROMPT_AI_BARU.md
handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
handover/MERGE_GUIDE_REASONING_TEAM.md
```

---

## Prompt Copy-Paste Untuk AI Di Mesin Tim Reasoning

```text
Kamu membantu merge pekerjaan course Reasoning ke repo HerAI Fellowship SuperApp.

Wajib baca dulu:
1. AGENTS.md
2. GEMINI.md
3. handover/HANDOVER_UPDATE.md
4. handover/MODULE_STATUS_MAP.md
5. handover/COURSE_HIERARCHY.md
6. handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
7. handover/MERGE_GUIDE_REASONING_TEAM.md
8. handover/PROMPT_AI_BARU.md

Konteks:
- Pengantar AI sudah final 5 chapter.
- Kuis Pengantar AI sudah full-card clickable dan single attempt locked state jelas.
- Python untuk AI sudah final 13 chapter.
- Materi Python punya panel Belajar Aktif per chapter.
- Kuis Python sudah full-card clickable.
- Code block materi Python wajib pink-light, bukan terminal hitam.
- AGENTS.md sudah memuat aturan UI baru.
- Reasoning di repo target masih scaffold route `#/participant-ai-reasoning`.

Tugas:
1. Bantu merge perubahan Reasoning tanpa merusak Pengantar AI, Python untuk AI, route existing, layout shell, Pyodide, quiz localStorage, atau handover.
2. Jika konflik muncul, baca kedua sisi diff. Jangan replace file penuh.
3. Pertahankan perubahan final di:
   - AGENTS.md
   - js/frontend/fellow-dashboard/settings.js
   - js/frontend/fellow-dashboard/ai-python-basic.js
   - pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/
   - pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/
4. Jika Reasoning masih draft, update COURSE_SCAFFOLDS saja.
5. Jika Reasoning final, buat folder canonical dan activity lengkap, update router, overview, dan semua handover.

Verifikasi wajib:
- node --check js/router.js
- node --check js/frontend/fellow-dashboard/settings.js
- node --check js/frontend/fellow-dashboard/ai-python-basic.js
- node --check js/frontend/fellow-dashboard/course-placeholder.js
- git diff --check
- node scripts/check-participant-routes.mjs

Laporan akhir wajib berisi:
- file konflik;
- keputusan konflik;
- file Reasoning yang masuk;
- apakah Reasoning masih scaffold atau sudah final;
- hasil semua command verifikasi;
- risiko manual yang masih perlu dicek.
```

---

## Checklist Keputusan Konflik

Gunakan checklist ini kalau ada konflik:

- [ ] Apakah konflik menyentuh route final Pengantar AI atau Python?
- [ ] Apakah konflik menyentuh Pyodide runner?
- [ ] Apakah konflik menghapus full-card quiz UI?
- [ ] Apakah konflik mengembalikan code block Python menjadi dark terminal?
- [ ] Apakah konflik menghapus aturan baru di `AGENTS.md`?
- [ ] Apakah Reasoning final punya activity lengkap?
- [ ] Apakah route checker tetap 0 failed?
- [ ] Apakah handover sudah menjelaskan keputusan merge?

Jika salah satu jawaban berisiko, jangan lanjut commit sebelum diff dibaca manual.
