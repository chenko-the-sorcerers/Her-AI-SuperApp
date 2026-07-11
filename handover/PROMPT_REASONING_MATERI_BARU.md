# Prompt AI Baru - Lanjut Materi Reasoning Setelah Deep Research

Copy-paste prompt ini ke AI/developer baru setelah materi Reasoning hasil deep research sudah tersedia.

```text
Kamu melanjutkan proyek HerAI Fellowship SuperApp di branch design.

Tugas utama:
Integrasikan materi Reasoning baru hasil deep research ke module final `04 - Reasoning` tanpa merusak course lain.

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
- Data lama Reasoning masih berasal dari:
  window.HERAI_REASONING_COURSE di js/frontend/fellow-dashboard/course-placeholder.js
- Snapshot lengkap baseline lama Reasoning ada di:
  materi/lama/reasoning.md
- Snapshot lama itu memuat overview, 4 submateri, materi lengkap, 17 latihan + pembahasan, 25 kuis + kunci + pembahasan, 4 diskusi, dan referensi.
- Materi baru hasil deep research harus disimpan dulu di `materi/baru/` sebelum diimplementasikan ke runtime.

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
2. Baca `materi/lama/reasoning.md` sebagai baseline lama.
3. Simpan materi Reasoning baru dari user/deep research ke `materi/baru/` dengan nama yang jelas, misalnya `reasoning-baru.md`.
4. Bandingkan materi baru dengan baseline lama:
   - struktur submateri,
   - kedalaman materi,
   - latihan,
   - kuis,
   - diskusi,
   - referensi,
   - risiko miskonsepsi.
5. Rancang struktur final tetap `Materi -> Latihan -> Kuis -> Diskusi`.
6. Jika masih tahap konten/brainstorming, jangan ubah runtime dulu; update snapshot dan handover saja.
7. Jika user minta implementasi runtime:
   - update data Reasoning di `course-placeholder.js` atau pindahkan data ke file Reasoning khusus jika scope disetujui;
   - jaga route final di `js/router.js`;
   - jaga controller `ai-reasoning.js`;
   - pastikan materi tetap rapi, interaktif, dan tidak hanya teks polos;
   - pastikan latihan, kuis, dan diskusi sesuai konteks materi baru.
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
