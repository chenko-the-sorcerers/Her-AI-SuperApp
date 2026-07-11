# Prompt Eksekusi Final — Reasoning Nazril Canonical

Salin seluruh isi prompt ini ke AI agent baru. Jangan menghapus bagian guardrail, audit, verifikasi, atau laporan akhir.

---

# ROLE

Kamu melanjutkan pengembangan HerAI Fellowship SuperApp di branch `design` sebagai:

- Senior Frontend Engineer;
- Learning Experience Designer;
- Curriculum Architect;
- QA Engineer;
- Technical Writer.

Kamu harus mengubah modul Reasoning menjadi learning experience canonical berbasis materi Nazril. Ini bukan pekerjaan memindahkan Markdown ke card. Hasil akhirnya harus terasa seperti course profesional ala Coursera/Dicoding: narasi tetap nyaman dibaca, visual membantu memahami hubungan, interaksi memberi praktik langsung, dan flow pemula terasa jelas.

# OBJECTIVE

Jadikan file berikut sebagai **source of truth materi Reasoning**:

```text
materi/nazril/submateri-reasoning-ai.md
```

Aktifkan materi tersebut pada runtime canonical existing:

```text
#/participant-ai-reasoning
#/participant-ai-reasoning-practice
#/participant-ai-reasoning-quiz
#/participant-ai-reasoning-discussion
```

Target folder canonical:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/
  ai-fundamentals-advanced/ai-fundamentals/04-reasoning/
```

Controller canonical:

```text
js/frontend/fellow-dashboard/ai-reasoning.js
```

Jangan mengganti hash route publik. Jangan membuat path legacy baru.

# CRITICAL CURRENT-WORKTREE WARNING

Workspace mungkin memiliki perubahan tracked dan untracked dari pekerjaan lain. Sebelum melakukan apa pun, jalankan:

```bash
git status --short --branch
git log -1 --oneline --decorate
git diff --name-status
git ls-files --others --exclude-standard
```

Aturan Git:

- jangan menjalankan `git reset --hard`;
- jangan menjalankan `git clean`;
- jangan menjalankan `git checkout --`;
- jangan menghapus atau menimpa perubahan yang bukan buatanmu;
- jangan menganggap file untracked aman untuk dibuang;
- jangan stash, restore, commit, atau memindahkan perubahan milik orang lain tanpa audit;
- jika file target sudah berubah, baca diff dan integrasikan secara hati-hati;
- jangan push;
- commit lokal hanya setelah implementasi dan verifikasi lengkap.

Pada checkpoint saat prompt ini dibuat, commit terakhir yang terlihat adalah:

```text
04e253d docs: sync reasoning activity checkpoints
```

Status dapat berubah. Verifikasi ulang, jangan mengandalkan hash ini secara buta.

# WAJIB BACA SEBELUM EDIT

Baca seluruh file berikut, bukan hanya heading atau ringkasannya:

1. `AGENTS.md`
2. `GEMINI.md`
3. `handover/HANDOVER_UPDATE.md`
4. `handover/REASONING_FINAL_CHECKPOINT.md`
5. `handover/MODULE_STATUS_MAP.md`
6. `handover/COURSE_HIERARCHY.md`
7. `handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md`
8. `handover/PROMPT_AI_BARU.md`
9. `handover/MERGE_GUIDE_REASONING_TEAM.md`
10. `handover/PROMPT_REASONING_MATERI_BARU.md` jika masih relevan
11. `materi/nazril/submateri-reasoning-ai.md`
12. `js/frontend/fellow-dashboard/ai-reasoning.js`
13. seluruh file di folder canonical `04-reasoning/`
14. `css/frontend/fellow-dashboard/modules.css`
15. `js/router.js`
16. `index.html`
17. `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/overview.html`

Pelajari pola module final tanpa mengubahnya:

- Pengantar AI;
- Python untuk AI;
- Konsep AI Modern;
- Reasoning runtime saat ini;
- pola progressive disclosure pada latihan dan kuis final.

# SOURCE BASELINE

Source Nazril memiliki baseline kurang lebih:

```text
2.755 baris
9.492 kata
4 submateri utama
17 latihan
26 soal kuis (audit ulang jumlah aktual)
4 diskusi
1 studi kasus integrasi/evaluasi akhir
glosarium
referensi
catatan implementasi
```

Angka tersebut harus dihitung ulang dari file aktual. Jangan memakai angka prompt sebagai pengganti audit.

# HARD CONTENT-INTEGRITY RULES

- Jangan mengurangi satu pun isi source.
- Jangan mengganti materi panjang dengan rangkuman.
- Jangan menghapus heading, paragraf, list, tabel, contoh, latihan, pembahasan, kuis, kunci, diskusi, refleksi, studi kasus, glosarium, referensi, atau catatan implementasi.
- Visualisasi adalah lapisan presentasi tambahan, bukan pengganti materi.
- Kalimat boleh dibungkus dalam struktur HTML visual, tetapi urutan dan isi teks source harus tetap dapat diaudit.
- Jika materi dibagi antar-chapter, setiap source block harus memiliki satu destination yang jelas.
- Jangan menduplikasi source text tanpa kebutuhan karena audit text dapat menjadi rancu.
- Source lengkap boleh tersedia dalam mode `Sumber Lengkap`, tetapi default experience harus berupa `Visual Learning` yang nyaman.
- Pergantian Visual/Source tidak boleh fetch atau menghapus sebagian konten secara destruktif.
- Jika transformasi DOM dilakukan, simpan snapshot `textContent` sebelum transformasi dan bandingkan setelah transformasi.
- Normalisasi whitespace boleh dilakukan untuk audit, penghilangan kata atau perubahan urutan tidak boleh.

# TARGET LEARNING FLOW

Gunakan enam chapter agar flow pemula natural:

1. **Dari Menjawab ke Menalar**
   - tujuan;
   - fakta;
   - asumsi;
   - informasi relevan;
   - hubungan;
   - kesimpulan.

2. **Reasoning yang Dapat Diperiksa**
   - langkah penyelesaian;
   - kesalahan umum;
   - validasi;
   - jawaban meyakinkan vs jawaban valid.

3. **Planning & Problem Decomposition**
   - goal;
   - initial state;
   - constraints;
   - actions;
   - dependencies;
   - success criteria;
   - hierarchical, static, dan dynamic planning;
   - replanning.

4. **Structured Reasoning & Chain-of-Thought**
   - langkah perantara;
   - zero-shot/few-shot structured instruction;
   - kapan langkah berguna;
   - kapan tidak perlu dipaksakan;
   - faithfulness;
   - prompt patterns;
   - verification.

5. **Tool Use yang Bertanggung Jawab**
   - kebutuhan tool;
   - pemilihan;
   - parameter;
   - observation;
   - permission;
   - error;
   - validasi output;
   - batas otorisasi.

6. **Integrated Reasoning Mission**
   - Reason → Plan → Act → Observe → Update → Answer;
   - studi kasus anggaran/spreadsheet;
   - verification gate;
   - evaluasi akhir;
   - glosarium dan referensi.

Jika mapping source menunjukkan pembagian sedikit berbeda lebih aman untuk integritas, dokumentasikan alasan sebelum implementasi. Jangan mengubah urutan konsep secara sembarangan.

# REQUIRED CHAPTER RHYTHM

Setiap chapter harus memiliki ritme:

```text
Hook
→ Learning objective
→ Narasi konsep
→ Analogi
→ Visualisasi
→ Contoh sehari-hari
→ Contoh AI
→ Interaksi
→ Quick check
→ Mini challenge
→ Common mistakes
→ Best practices
→ Ringkasan
→ Transisi
```

Target komposisi pengalaman:

- sekitar 40% narasi;
- sekitar 25% visual/comparison;
- sekitar 25% interaksi;
- sekitar 10% refleksi/checkpoint.

Ini adalah panduan ritme, bukan formula untuk memotong source.

# REQUIRED VISUAL AND INTERACTIVE COMPONENTS

## Chapter 1 — Reasoning Anatomy

- direct answer vs auditable answer comparison;
- facts/assumptions/unknowns sorter;
- reasoning anatomy flow;
- confidence vs evidence comparison;
- error spotting.

## Chapter 2 — Verification Lab

- sequence builder;
- missing-information detector;
- calculation checkpoint;
- valid vs merely convincing scenario switcher;
- verification checklist.

## Chapter 3 — Planning Studio

- goal decomposition tree;
- dependency map;
- step ordering;
- static vs dynamic planning comparison;
- replanning simulator berdasarkan perubahan proyektor.

## Chapter 4 — Structured Reasoning Lab

- direct vs structured response;
- prompt transformer;
- “perlu langkah atau tidak?” scenario switcher;
- excessive reasoning editor;
- faithfulness callout.

## Chapter 5 — Tool Decision Lab

- perlu tool atau tidak decision tree;
- tool matching;
- parameter builder;
- observation inspector;
- permission/risk matrix;
- tool failure simulator.

## Chapter 6 — Integrated Mission

- guided stepper:
  `Brief → Reason → Plan → Tool → Observe → Update → Answer → Verify`;
- state setiap tahap disimpan;
- final verification gate;
- summary canvas yang dapat direview.

Interaksi harus berguna untuk memahami konsep. Jangan menambahkan tombol dekoratif tanpa learning outcome.

# VISUAL MODE AND SOURCE MODE

Setiap chapter menyediakan:

```text
Visual Learning | Sumber Lengkap
```

Aturan:

- `Visual Learning` adalah default;
- `Sumber Lengkap` memuat source asli chapter tersebut;
- mode hanya mengubah presentasi;
- semua source text tetap berada di DOM atau dimuat losslessly dari file chapter;
- fokus keyboard dan `aria-pressed` harus benar;
- state mode boleh diingat untuk session, tetapi jangan mengganggu chapter navigation;
- tabel panjang harus berada dalam internal scroll wrapper.

# ACTIVITY UX

## Practice

- pertahankan seluruh 17 latihan dan pembahasan source;
- tampilkan satu skenario pada satu waktu;
- sediakan overview progress dan navigator langsung;
- tempat menjawab harus muncul sebelum referensi source panjang;
- textarea berlabel jelas;
- save, edit, reset, previous, next, dan restore harus berjalan;
- pindah langkah tidak boleh menghapus jawaban;
- pembahasan baru terbuka setelah peserta mencoba atau menekan tombol reveal;
- source latihan lengkap berada setelah workspace dalam `<details>`.

## Quiz

- audit dan pertahankan seluruh soal source;
- tampilkan satu soal pada satu waktu;
- seluruh option card dapat diklik;
- sediakan navigator dan answered counter;
- state `selected`, `correct`, `wrong`, dan `locked` terlihat jelas;
- single attempt;
- attempt yang sudah dipakai harus dijelaskan, bukan terlihat seperti bug;
- jawaban dan score bertahan setelah refresh;
- pembahasan tampil setelah submit;
- source kuis lengkap berada setelah workspace dalam `<details>`.

## Discussion

- pertahankan seluruh prompt, pertanyaan pemandu, refleksi pribadi, dan instruksi tanggapan;
- setiap prompt memiliki context singkat dan reflection frame;
- participant dapat membuat post;
- thread dan reply tampil;
- state tersimpan di localStorage;
- source diskusi lengkap berada setelah workspace.

# LOCALSTORAGE

Pertahankan key existing kecuali audit membuktikan migrasi diperlukan:

```text
heraiAiReasoningCurrentChapter
heraiAiReasoningPractice
heraiAiReasoningQuizDone
heraiAiReasoningQuizScore
heraiAiReasoningQuizAnswers
heraiAiReasoningDiscussion
```

Jika menambah state integrated mission atau visual lab, gunakan prefix:

```text
heraiAiReasoning...
```

Dokumentasikan semua key baru. Jangan merusak state existing tanpa migration yang jelas.

# HERAI UI RULES

Patuhi `AGENTS.md` terbaru.

- Course learning surface wajib light theme.
- Background: putih, `#fff7fb`, `#fff0f7`, atau `#fffcfd`.
- Text utama: `#171827`.
- Text secondary minimal: `#6f7282`.
- Pink `#f63392` adalah accent utama.
- Cards/container radius 14–20px.
- Buttons/pills radius 100px.
- Input/textarea radius 14–20px.
- Code block radius 12–16px.
- Icon menggunakan FontAwesome.
- Tidak boleh ada emoji di UI.
- Tidak boleh memakai purple/blue/green sebagai accent utama.
- Warna selain pink hanya untuk semantic success/warning/error.
- Tidak boleh ada black/dark-navy learning surface.
- Jangan memakai `border-radius: 0` pada elemen visible.
- Jangan menerapkan grid/flex langsung pada paragraf campuran text node dan inline element.
- Jangan membuat card/grid terlalu sempit sampai teks turun satu kata/huruf per baris.
- Table dan chip panjang harus scroll di wrapper, bukan memperlebar document.
- Hormati `prefers-reduced-motion`.
- Keyboard focus harus terlihat.

# SHELL AND REGRESSION GUARDRAILS

Jangan mengubah:

- participant dashboard shell;
- sidebar utama;
- topbar;
- breadcrumb structure;
- lesson tabs pattern;
- right panel shell;
- footer/navigation shell;
- route module lain;
- controller module lain;
- reusable scaffold course lain.

Jangan mengaktifkan path legacy:

```text
course-catalog
ai-fundamental
ai-lab
```

Jangan mengubah `course-placeholder.js` kecuali ada bukti runtime Reasoning masih bergantung padanya dan perubahan benar-benar diperlukan.

# FILE STRATEGY

Target minimum:

```text
04-reasoning/
  materi.html
  latihan.html
  kuis.html
  diskusi.html
  chapters/
    01-full.html
    02-full.html
    03-full.html
    04-full.html
    05-full.html
    06-full.html
    practice-full.html
    quiz-source-full.html
    discussion-source-full.html
```

Controller:

```text
js/frontend/fellow-dashboard/ai-reasoning.js
```

Style baru harus scoped dengan prefix khusus Reasoning. Reuse `modules.css` hanya jika itu pola existing. Jangan membuat global selector berisiko.

Jika stylesheet/controller aktif berubah, bump cache buster keduanya di `index.html`.

# LOSSLESS MAPPING BEFORE IMPLEMENTATION

Buat mapping tertulis sebelum edit runtime:

| Source range/heading | Destination file | Visual component | Interaction | Activity |
|---|---|---|---|---|

Mapping wajib mencakup:

- seluruh heading;
- seluruh paragraf;
- seluruh list;
- seluruh tabel;
- seluruh contoh;
- seluruh latihan dan pembahasan;
- seluruh kuis, opsi, jawaban, dan pembahasan;
- seluruh diskusi/refleksi;
- studi kasus akhir;
- checklist;
- glosarium;
- referensi;
- catatan implementasi.

Hitung dan laporkan:

- baris;
- kata;
- headings;
- paragraphs jika memungkinkan;
- lists;
- tables;
- code blocks;
- latihan;
- kuis;
- diskusi;
- referensi.

# EXECUTION PHASES

Kerjakan berurutan:

1. Audit Git dan baca seluruh mandatory docs.
2. Audit source Nazril dan runtime Reasoning existing.
3. Buat mapping lossless.
4. Tentukan ownership file dan risiko overlap dengan perubahan existing.
5. Implementasikan Chapter 1–2.
6. Verifikasi text integrity dan visual Chapter 1–2.
7. Implementasikan Chapter 3–4.
8. Verifikasi text integrity dan visual Chapter 3–4.
9. Implementasikan Chapter 5–6.
10. Verifikasi text integrity dan visual Chapter 5–6.
11. Implementasikan/refine practice.
12. Implementasikan/refine quiz.
13. Implementasikan/refine discussion.
14. Audit accessibility, overflow, localStorage, dan refresh state.
15. Regression test route lain.
16. Update handover.
17. Jalankan verification commands.
18. Commit lokal.
19. Jangan push.

Jangan berhenti pada plan jika source tersedia dan tidak ada blocker nyata.

# VERIFICATION COMMANDS

Minimal jalankan:

```bash
node --check js/router.js
node --check js/frontend/fellow-dashboard/course-placeholder.js
node --check js/frontend/fellow-dashboard/ai-reasoning.js
git diff --check
node scripts/check-participant-routes.mjs
```

Tambahkan:

```bash
rg -n '<<<<<<<|=======|>>>>>>>' .
rg -n 'border-radius:\s*0|#8e91a0|#7c3aed' \
  css/frontend/fellow-dashboard/modules.css \
  js/frontend/fellow-dashboard/ai-reasoning.js \
  pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning
```

Interpretasikan hasil secara manual; match historis/unrelated bukan otomatis regression.

# SMOKE TEST — DESKTOP AND MOBILE

Gunakan browser automation jika tersedia. Tunggu selector route-specific dan teks unik, jangan selector generik dari route sebelumnya.

## Materi

- route membuka Reasoning canonical;
- chapter list enam item;
- saved chapter dipulihkan;
- previous/next berjalan;
- progress akurat;
- Visual/Source toggle berjalan;
- seluruh visual lab berjalan;
- quick check dan mini challenge berjalan;
- refresh mempertahankan state relevan;
- source lengkap tersedia;
- tidak ada console error module;
- tidak ada horizontal overflow.

## Practice

- workspace tampil sebelum source reference;
- satu latihan per layar;
- navigator dan progress akurat;
- textarea dapat diisi;
- save/edit/reset/restore berjalan;
- pindah langkah mempertahankan jawaban;
- pembahasan reveal berjalan.

## Quiz

- satu soal per layar;
- full-card options clickable;
- answered counter akurat;
- navigator berjalan;
- submit menghitung score;
- correct/wrong/selected terlihat;
- refresh menampilkan locked state yang jelas;
- jawaban tersimpan.

## Discussion

- prompt dapat dipilih;
- post dapat dibuat;
- reply dapat dibuat;
- refresh mempertahankan thread.

## Layout

Desktop dan mobile:

```js
document.documentElement.scrollWidth <= innerWidth
```

Jangan hanya mengandalkan angka tersebut. Ambil dan inspeksi screenshot; pastikan card, diagram, tabel, label, dan text benar-benar terbaca.

# REGRESSION ROUTES

Pastikan minimal route berikut tidak rusak:

```text
#/participant-ai-intro
#/participant-ai-python
#/participant-ai-modern
#/participant-ai-reasoning
#/participant-ai-reasoning-practice
#/participant-ai-reasoning-quiz
#/participant-ai-reasoning-discussion
#/participant-ai-lab-math
#/participant-ai-lab-machine-learning
#/participant-ai-lab-cv
#/participant-ai-lab-nlp
```

# HANDOVER UPDATES

Setelah implementation final, update:

```text
handover/HANDOVER_UPDATE.md
handover/REASONING_FINAL_CHECKPOINT.md
handover/MODULE_STATUS_MAP.md
handover/COURSE_HIERARCHY.md
handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
handover/PROMPT_AI_BARU.md
```

Catat bahwa source canonical Reasoning sekarang adalah materi Nazril dan jelaskan status source/runtime lama.

# STOP CONDITIONS

Berhenti dan minta arahan hanya jika:

- source Nazril tidak tersedia;
- perubahan target bertabrakan dengan perubahan user yang tidak dapat diintegrasikan aman;
- route/runtime ternyata sedang dikerjakan proses lain dan overwrite berisiko;
- perubahan membutuhkan penghapusan data atau perluasan scope material;
- browser/test dependency tidak tersedia setelah alternatif aman dicoba.

Jangan berhenti hanya karena pekerjaan besar atau memerlukan banyak file.

# FINAL REPORT FORMAT

Laporan akhir wajib mencantumkan:

1. source material;
2. commit baseline;
3. file dibuat/diubah;
4. route aktif;
5. jumlah chapter;
6. jumlah latihan, kuis, diskusi;
7. mapping source ke chapter;
8. visual/interaksi per chapter;
9. localStorage keys;
10. hasil audit lossless dengan angka;
11. hasil verification commands;
12. hasil smoke test desktop;
13. hasil smoke test mobile;
14. hasil regression routes;
15. risiko/manual review;
16. commit hash lokal;
17. konfirmasi belum push.

# DEFINITION OF DONE

Pekerjaan belum selesai hanya karena halaman terlihat bagus. Selesai berarti:

- source Nazril masuk utuh;
- flow enam chapter natural untuk pemula;
- narasi, visual, dan interaksi seimbang;
- setiap interaksi punya learning purpose;
- practice/quiz/discussion production-ready;
- source integrity terbukti;
- accessibility dan mobile layout diperiksa;
- regression routes aman;
- handover sinkron;
- verification lulus;
- commit lokal dibuat;
- tidak ada push.

---

Mulai dengan melaporkan hasil `git status`, commit baseline, file target yang sudah berubah, dan risiko overlap. Setelah itu lanjut audit serta implementasi tanpa menunggu persetujuan tambahan selama perubahan tetap dalam scope ini.
