# HerAI Universal Course Standard

**Status:** current source of truth
**Updated:** 12 Juli 2026
**Applies to:** seluruh course HerAI—materi, latihan, kuis, diskusi, controller, source renderer, dan responsive UI.

Dokumen ini menyatukan pola terbaik yang sudah terbukti di Reasoning, Konsep AI Modern, dan Python untuk AI. Jika contoh lama di handover lain bertentangan dengan dokumen ini, ikuti `AGENTS.md`, lalu dokumen ini, lalu runtime yang aktif.

## 1. Prinsip Utama

1. Source material adalah isi utama, bukan lampiran atau dump Markdown.
2. Source chapter canonical tidak diedit untuk memperbaiki UI. Controller mengambil source, menjaga isi, lalu menambahkan lapisan belajar interaktif.
3. Alur harus ramah pemula: konteks dulu, konsep bertahap, contoh konkret, praktik, pengecekan, baru rangkuman.
4. Tidak boleh ada kehilangan, pemendekan, pengubahan urutan, atau parafrase diam-diam pada source canonical.
5. Visual harus menjelaskan hubungan atau proses. Jangan menambah kartu dekoratif yang tidak membantu pemahaman.
6. Materi, latihan, kuis, dan diskusi adalah satu pengalaman belajar yang konsisten, bukan empat halaman terpisah tanpa hubungan.
7. Reasoning adalah referensi fungsi/pipeline terlengkap. Konsep AI Modern adalah referensi enrichment pemula dan visual kontekstual terbaru. Python adalah referensi penting untuk daftar kegagalan migrasi yang wajib dicegah.

## 2. Hierarki Sumber Kebenaran

Urutan keputusan ketika ada konflik:

1. Instruksi user terbaru.
2. `AGENTS.md`.
3. `GEMINI.md`.
4. `handover/UNIVERSAL_COURSE_STANDARD.md`.
5. `handover/HANDOVER_UPDATE.md` dan `handover/MODULE_STATUS_MAP.md`.
6. Controller dan route runtime yang aktif.
7. Dokumen checkpoint atau merge guide historis.

Jangan menyalin status, cache, jumlah soal, atau path dari dokumen historis tanpa mengecek repo aktual.

## 3. Kontrak Arsitektur Course

Setiap course final idealnya mempunyai:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/.../NN-course-name/
├── materi.html
├── latihan.html
├── kuis.html
├── diskusi.html
└── chapters/
    ├── source chapter files
    ├── practice source, jika tersedia
    ├── quiz source, jika tersedia
    └── discussion source, jika tersedia

js/frontend/fellow-dashboard/ai-course-name.js
css/frontend/fellow-dashboard/modules.css
```

Kontrak integrasinya:

- Route hash mengarah ke halaman canonical.
- `index.html` memuat controller.
- Nama initializer di controller persis sama dengan nama yang diperiksa router.
- Semua `sourcePath` adalah absolute path lengkap yang benar-benar ada.
- Styles course baru di-scope dengan prefix course atau komponen yang aman.
- Source chapter canonical tidak diubah kecuali user secara eksplisit mengubah sumber materi.

## 4. Pipeline Source-As-Main-Content

Urutan aman:

```text
pilih chapter
→ naikkan request token / batalkan request sebelumnya
→ fetch sourcePath
→ validasi response
→ parse/filter heading module-level yang memang duplikat
→ rapikan numbering heading tanpa menghapus isi
→ inject orientation + navigation
→ inject hook/lab/worked example pada posisi kontekstual
→ append quick check/challenge/mistakes/summary
→ commit ke DOM hanya jika request masih terbaru
→ enhance table/code/list/blockquote
→ pasang seluruh interaction handler
→ verifikasi integritas source
```

Aturan penting:

- Gunakan request sequence token atau `AbortController`; response chapter lama tidak boleh menimpa chapter yang baru dipilih.
- Lakukan transformasi string sebelum `innerHTML`; lakukan enhancement dan event binding sesudah DOM terpasang.
- Memindahkan node interaktif memakai `appendChild(node)`, bukan `cloneNode(true)`, agar listener tidak hilang.
- Node enrichment wajib dapat dibedakan, misalnya `data-modern-injected`, agar audit integritas bisa mengabaikan hanya node tambahan tersebut.
- Jangan memasang `display: grid` atau `display: flex` langsung pada paragraf yang mencampur text node dengan `<strong>`/`<em>`. Bungkus bagian teks dulu.

## 5. Kontrak Data Minimum

Setiap entry `CHAPTERS` minimal memiliki:

```javascript
{
    title: "Judul topik",
    shortTitle: "Judul pendek",
    duration: "20 menit",
    icon: "fas fa-brain",
    summary: "Apa yang akan dipahami peserta.",
    objectives: ["Tujuan terukur 1", "Tujuan terukur 2"],
    sourcePath: "/pages/frontend/fellow-dashboard/foundation-core-ai/.../chapters/01-materi.html"
}
```

Untuk course final yang ramah pemula, setiap chapter juga perlu konteks yang setara dengan:

- hook atau masalah pembuka;
- roadmap/langkah berpikir;
- analogi yang tidak menyesatkan;
- worked example end-to-end;
- lab/visual interaktif yang relevan;
- quick check dengan feedback benar dan salah;
- mini challenge tersimpan;
- common mistakes dan best practices;
- glossary istilah baru;
- learning outcomes dan transisi ke topik berikutnya.

Setiap entry `PRACTICES` wajib punya `fields`:

```javascript
{
    id: "practice-1",
    title: "Judul skenario",
    focus: "Nama topik course",
    prompt: "Kasus dan instruksi",
    fields: [["jawaban", "Tulis jawabanmu di sini..."]],
    guide: "Panduan evaluasi diri"
}
```

`getSavedPractice()` wajib memiliki null guard:

```javascript
const saved = getSavedPractice() || { answers: {}, revealed: [] };
```

`PRACTICE_TOPICS` wajib memakai label dan rentang milik course baru, bukan sisa Reasoning.

## 6. Alur Materi untuk Pemula

Urutan rekomendasi per topik:

1. Orientation: apa yang dipelajari, kenapa relevan, estimasi waktu.
2. Hook: pilihan/kasus sederhana yang mengaktifkan intuisi awal.
3. Beginner roadmap: 3–5 langkah yang menjelaskan perjalanan topik.
4. Source concept: materi canonical, heading jelas, paragraf terbaca.
5. Visual/concept lab: hubungan, proses, atau keputusan yang sulit dijelaskan lewat paragraf.
6. Worked example: konteks → input → langkah → output → trade-off.
7. Deep dive source: detail, tabel, code, rumus, atau arsitektur.
8. Quick check: satu konsep utama, feedback spesifik, retry tersedia.
9. Mini challenge: peserta menghasilkan jawaban, dapat save/edit/reset dan contoh.
10. Mistakes vs best practices: dua sisi yang jelas, bukan daftar generik.
11. Glossary: istilah baru dalam bahasa sederhana dan konteks penggunaannya.
12. Summary: outcome terukur dan transisi ke topik berikutnya.

Jangan menumpuk semua enrichment di akhir. Sisipkan dekat konsep yang dijelaskan.

## 7. Visual dan Code Explainer

Code/formula/arsitektur tidak boleh hanya berupa blok teks besar. Setiap visual perlu menjawab:

- Apa komponen utamanya?
- Bagaimana alurnya?
- Kenapa langkah itu ada?
- Apa input dan outputnya?
- Apa kegagalan atau trade-off yang harus diperhatikan?

Pola yang sudah terbukti di Konsep AI Modern:

- formula Q/K/V dijelaskan per simbol dan hubungan;
- tool contract memisahkan input, aturan, validasi, dan output;
- system blueprint memvisualisasikan layer dan tanggung jawab;
- architecture canvas membantu pemula menghubungkan kebutuhan dengan komponen.

Source asli tetap tersedia dan urutannya tetap dijaga. Visual adalah enrichment, bukan pengganti source.

## 8. Standar Latihan

- Aksi utama dan tempat menjawab muncul sebelum referensi sumber panjang.
- Untuk banyak skenario, tampilkan satu skenario per langkah.
- Navigator mengelompokkan skenario per topik dan menampilkan progress.
- Desktop: group cards tertata; mobile: satu kolom, tanpa text wrapping sempit.
- State class harus sama antara JS dan CSS, misalnya `is-active` dan `is-complete`.
- Textarea punya width penuh, min-height memadai, label jelas, radius 14–20px.
- Tombol save/edit/reset/reveal/pagination seluruhnya memakai custom CSS; tidak boleh jatuh ke browser default.
- Save, refresh persistence, edit, reset, reveal guide, previous, next, dan direct jump harus dites.
- Referensi sumber utuh boleh ada di `<details>` sesudah workspace dengan label yang jelas.

## 9. Standar Kuis

- Peta soal/progress tampil sebelum soal aktif.
- Satu soal per langkah sebelum submit final.
- Seluruh option card dapat diklik, bukan hanya radio kecil.
- State `selected`, `correct`, `wrong`, dan `locked` harus terlihat jelas.
- Single attempt yang sudah dipakai harus dijelaskan di UI.
- Setelah submit/locked, review menampilkan semua soal, jawaban peserta, jawaban benar, dan penjelasan.
- Navigator/counter/previous-next disembunyikan atau diubah dengan masuk akal saat review.
- Cache/localStorage lama tidak boleh membuat UI terlihat rusak.

## 10. Standar Diskusi

- Prompt terkait langsung dengan tujuan tiap topik.
- Composer post dan reply ada inline.
- Jangan memakai `window.prompt`.
- Post/reply lokal memakai key unik per course.
- Empty, filled, reply-open, saved, edited, dan reset state harus terlihat dan dites.

## 11. LocalStorage sebagai Kontrak Publik

Gunakan namespace unik:

```text
heraiAi{Course}CurrentChapter
heraiAi{Course}Practice
heraiAi{Course}QuizDone
heraiAi{Course}QuizScore
heraiAi{Course}QuizAnswers
heraiAi{Course}Discussion
heraiAi{Course}ChallengeChN
```

Aturan:

- Jangan mengubah key tanpa migrasi backward-compatible.
- Baca JSON melalui `safeJsonParse`.
- Selalu punya fallback untuk first visit dan data lama yang parsial.
- Test setelah refresh dan dengan storage kosong.
- Jangan menghapus storage user sebagai solusi default debugging.

## 12. Kontrak UI HerAI

Ikuti `AGENTS.md` tanpa pengecualian:

- learning surface light: putih, `#fff7fb`, `#fff0f7`, atau `#fffcfd`;
- text utama `#171827`, secondary minimal `#6f7282`;
- pink `#f63392` sebagai aksen utama;
- card/container radius 14–20px;
- button/pill radius 100px;
- input radius 14–20px;
- code block radius 12–16px;
- icon circle 50%;
- tidak ada `border-radius: 0` pada elemen visible;
- tidak ada emoji di UI—gunakan FontAwesome;
- warna non-pink hanya untuk state semantik benar/salah/error.

Global selector harus hati-hati. Selector seperti `.is-source-view ul li::before` dapat bertabrakan dengan objective/checklist khusus. Beri wrapper class pada text dan gunakan selector scoped yang cukup spesifik.

## 13. Responsive dan Accessibility

Target minimum:

- desktop: 1024px dan/atau 1440px;
- mobile: 390px;
- `document.documentElement.scrollWidth <= innerWidth`;
- tabel/chip panjang scroll di wrapper internal;
- tidak ada kata pecah satu per baris karena kolom terlalu sempit;
- focus state keyboard terbaca;
- `aria-selected`, `aria-expanded`, disabled, dan status feedback sesuai state;
- button mempunyai label yang bermakna;
- body text memenuhi kontras minimum 4.5:1.

Jangan hanya memeriksa `scrollWidth`. Screenshot dan inspeksi computed width komponen penting tetap wajib.

## 14. Route, Script, dan Cache

- Route existing tidak diubah kecuali user meminta atau course baru perlu route tambahan.
- Initializer router dan export controller harus identik.
- `index.html` harus memuat controller baru.
- Setiap perubahan controller atau shared course stylesheet membump cache buster JS dan CSS bersama-sama.
- Format yang disarankan: `YYYYMMDD-course-purpose-vN`.
- Setelah merge, cek CSS block masih ada di HEAD; keberadaan di commit lama tidak menjamin hasil merge memuatnya.

## 15. Function Parity Checklist

Saat membuat controller dari Reasoning, audit minimal fungsi berikut. Nama boleh course-specific, kemampuannya tidak boleh hilang:

```text
renderList
renderFlow
escapeHtml
escapeSelector
safeJsonParse
setStatus
findH2Sections
finalRenderHookSection
finalRenderExampleSection
finalRenderQuickCheckSection
finalRenderChallengeSection
finalRenderMistakesPractices
finalRenderSummarySection
finalRenderPromptSection
renderSourceVisualLab
initSourceVisualLab
enhanceSourceMaterialForCanvas
setupHookInteraction
setupQuickChecks
setupChallengeInteraction
setupVisualNav
setupCopyButtons
filterSourceHeadings
stripSourceNumbering
injectAfterHeading
renderFormattedText
renderPracticeCard
loadSourceHtml
getSourceFile
```

Jangan mengandalkan copy/paste visual. Buat audit fungsi eksplisit dan smoke test semua empat route.

## 16. Definition of Done Universal

Course belum final sebelum seluruh checkpoint berikut lulus:

- source paths valid dan source chapter termuat;
- source integrity before/after transformation lulus;
- materi punya flow pemula yang utuh dan enrichment kontekstual;
- latihan progressive dan seluruh action bekerja;
- kuis full-card, single attempt jelas, review lengkap;
- diskusi dan inline reply bekerja;
- no stale copy/label dari course template;
- no default browser controls pada komponen utama;
- no console error;
- no horizontal document overflow;
- screenshot desktop dan mobile terbaca rapi;
- seluruh participant routes lulus checker;
- cache JS dan CSS konsisten;
- localStorage backward-compatible;
- perubahan terdokumentasi dan commit lokal dibuat;
- tidak push tanpa izin user.
