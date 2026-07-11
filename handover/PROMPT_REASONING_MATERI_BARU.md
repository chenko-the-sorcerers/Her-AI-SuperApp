# Prompt AI Baru - Maintenance dan Revisi Reasoning Final

Materi hasil deep research sudah diterapkan. Copy-paste prompt ini hanya untuk maintenance/revisi lanjutan; jangan membangun ulang module atau mengembalikannya ke scaffold.

> **STATUS FINAL:** Baca `handover/REASONING_FINAL_CHECKPOINT.md` sebagai source of truth. Instruksi historis yang menganggap data masih berasal dari `window.HERAI_REASONING_COURSE` sudah tidak berlaku.

> **CHECKPOINT AKTIF:** `8007acb fix: clarify reasoning activity flow`. Jaga latihan 6-step dengan tiga textarea per skenario, kuis 15-step dengan answered counter, dan source reference setelah workspace.

```text
Kamu melanjutkan proyek HerAI Fellowship SuperApp di branch design.

Tugas utama:
Rawat atau revisi module final `04 - Reasoning` tanpa mengurangi materi sumber dan tanpa merusak course lain.

Wajib baca dulu:
1. GEMINI.md
2. AGENTS.md
3. handover/HANDOVER_UPDATE.md
4. handover/MODULE_STATUS_MAP.md
5. handover/COURSE_HIERARCHY.md
6. handover/PROMPT_AI_BARU.md
7. handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
8. handover/MERGE_GUIDE_REASONING_TEAM.md
9. materi/lama/reasoning.md
10. materi/baru/Reasoning-baru.md
11. handover/REASONING_FINAL_CHECKPOINT.md

Konteks terbaru:
- Branch aktif: design.
- Jangan push tanpa izin user.
- Reasoning sudah final canonical di:
  pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/
- Route final Reasoning:
  - #/participant-ai-reasoning
  - #/participant-ai-reasoning-practice
  - #/participant-ai-reasoning-quiz
  - #/participant-ai-reasoning-discussion
- Controller Reasoning:
  js/frontend/fellow-dashboard/ai-reasoning.js
- Runtime Reasoning final berasal dari `ai-reasoning.js` dan `04-reasoning/chapters/*-full.html`, bukan `window.HERAI_REASONING_COURSE`.
- Snapshot lengkap baseline lama Reasoning ada di:
  materi/lama/reasoning.md
- Snapshot lama itu memuat overview, 4 submateri, materi lengkap, 17 latihan + pembahasan, 25 kuis + kunci + pembahasan, 4 diskusi, dan referensi.
- Materi final sudah tersimpan di `materi/baru/Reasoning-baru.md` dan sudah diimplementasikan tanpa kompresi.

Aturan desain wajib:
- Ikuti AGENTS.md.
- Tidak boleh ada `border-radius: 0` pada elemen visible.
- Button harus pill (`border-radius: 100px`).
- Text utama `#171827`.
- Text secondary minimal `#6f7282`.
- Pink `#f63392` hanya aksen.
- Code block materi wajib pink-light, bukan terminal hitam default.
- Kuis harus full-card clickable.
- State kuis `selected`, `correct`, `wrong`, dan `locked` harus jelas.
- Jangan pakai emoji baru di UI; gunakan FontAwesome.

Course yang wajib dijaga:
- Pengantar AI final: 5 chapter, kuis full-card clickable, single attempt, diskusi localStorage.
- Python untuk AI final: 13 chapter, panel Belajar Aktif, Pyodide, latihan fokus `?focus=play-N`, kuis 15 soal, diskusi localStorage.
- Reasoning final existing: route, layout, localStorage keys, quiz single attempt, latihan reveal, diskusi.
- Latihan dan kuis memakai progressive disclosure one-at-a-time; jangan menampilkan semua skenario/soal sekaligus atau menaruh source dump sebelum tempat menjawab.
- Jangan merusak AI Modern, Math for AI, Machine Learning, CV, NLP, routing shell, sidebar, topbar, breadcrumb, tabs, right panel, dan footer nav.

LocalStorage keys Reasoning yang harus dijaga:
- heraiAiReasoningCurrentChapter
- heraiAiReasoningPractice
- heraiAiReasoningQuizDone
- heraiAiReasoningQuizScore
- heraiAiReasoningQuizAnswers
- heraiAiReasoningDiscussion

Strategi kerja:
1. Jalankan baseline verification:
   git status --short --branch
   node --check js/router.js
   node --check js/frontend/fellow-dashboard/settings.js
   node --check js/frontend/fellow-dashboard/ai-python-basic.js
   node --check js/frontend/fellow-dashboard/ai-reasoning.js
   node --check js/frontend/fellow-dashboard/course-placeholder.js
   node scripts/check-participant-routes.mjs
   git diff --check
2. Baca `materi/baru/Reasoning-baru.md` dan `handover/REASONING_FINAL_CHECKPOINT.md` sebagai source of truth aktif; gunakan `materi/lama/reasoning.md` hanya sebagai arsip.
3. Pertahankan struktur final `Materi -> Latihan -> Kuis -> Diskusi`, 5 chapter, source fragments, route, dan localStorage contract.
4. Saat revisi visual, pertahankan seluruh `textContent` sumber dan bandingkan sebelum/sesudah transformasi DOM.
5. Jangan update data Reasoning final di `course-placeholder.js`; controller aktif adalah `ai-reasoning.js`.
6. Bump cache buster JS dan CSS bersama-sama jika keduanya berubah.
7. Ikuti seluruh guardrail bug di `AGENTS.md`, khususnya larangan dark learning surface dan grid/flex langsung pada paragraf campuran.
8. Smoke test browser minimal:
   - #/participant-ai-reasoning
   - #/participant-ai-reasoning-practice
   - #/participant-ai-reasoning-quiz
   - #/participant-ai-reasoning-discussion
   - desktop dan mobile overflow.
9. Update semua handover terkait:
   - handover/HANDOVER_UPDATE.md
   - handover/MODULE_STATUS_MAP.md
   - handover/COURSE_HIERARCHY.md
   - handover/PROMPT_AI_BARU.md
   - handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
   - handover/MERGE_GUIDE_REASONING_TEAM.md bila menyangkut Reasoning/merge
10. Jalankan ulang semua verification command.
11. Commit lokal.
12. Jangan push tanpa izin user.

Output akhir wajib:
- ringkasan file yang berubah,
- apakah materi baru baru disimpan sebagai snapshot atau sudah masuk runtime,
- hasil verification command,
- hasil smoke test,
- commit hash lokal,
- risiko/manual follow-up yang masih tersisa.
```
