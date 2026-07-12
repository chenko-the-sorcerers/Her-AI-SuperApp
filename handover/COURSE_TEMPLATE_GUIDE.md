# Course Template Guide — Build and Migration Checklist

**Updated:** 12 Juli 2026
**Companion docs:** `UNIVERSAL_COURSE_STANDARD.md` dan `REGRESSION_AND_ERROR_PLAYBOOK.md`.

Dokumen ini adalah urutan eksekusi praktis. Reasoning menjadi referensi function/pipeline, Konsep AI Modern v4 menjadi referensi flow pemula dan visual kontekstual, sedangkan Python menjadi daftar lesson learned migrasi.

## 1. Jangan Mulai dari Copy-Paste

Sebelum mengubah code:

1. Baca `AGENTS.md`, `GEMINI.md`, dan current handover.
2. Jalankan status, log, syntax baseline, dan route checker.
3. Petakan source canonical, jumlah chapter, latihan, kuis, diskusi.
4. Catat route/controller/initializer/localStorage/cache existing.
5. Buat lossless content map per chapter.
6. Tentukan apa yang immutable dan apa yang boleh diinjeksi controller.
7. Baru buat todo implementasi berurutan.

## 2. Struktur Course

Contoh full path nyata untuk Konsep AI Modern:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/
  ai-fundamentals/03-konsep-ai-modern/
    materi.html
    latihan.html
    kuis.html
    diskusi.html
    chapters/
      01-materi.html
      02-materi.html
      03-materi.html
      04-materi.html

js/frontend/fellow-dashboard/ai-modern.js
css/frontend/fellow-dashboard/modules.css
```

Jangan pernah menulis literal `/pages/.../` di data runtime. Contoh `sourcePath` yang benar:

```javascript
sourcePath: "/pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/chapters/01-materi.html"
```

## 3. Phase 1 — Audit Source dan Runtime

Checklist:

- [ ] Semua source file dibaca dan tidak diedit diam-diam.
- [ ] Heading/chapter mapping dicatat.
- [ ] Materi latihan/kuis/diskusi dipetakan, termasuk jumlah unit.
- [ ] Route existing dan initializer router dicatat.
- [ ] Controller existing dibaca utuh.
- [ ] Styles scoped existing dicari di HEAD hasil merge.
- [ ] localStorage keys dicatat.
- [ ] Cache buster aktual di `index.html` dicatat.
- [ ] Screenshot baseline desktop/mobile dibuat jika module sudah aktif.

Untuk Evaluation, periksa file di:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-advanced/05-evaluation/
js/frontend/fellow-dashboard/ai-evaluation.js
```

Untuk Evolution:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-advanced/06-evolution-of-ai/
js/frontend/fellow-dashboard/ai-evolution.js
```

## 4. Phase 2 — Define Data Contract

Minimum `CHAPTERS`:

```javascript
var CHAPTERS = [
    {
        title: "Judul topik",
        shortTitle: "Judul pendek",
        duration: "20 menit",
        icon: "fas fa-chart-line",
        summary: "Outcome utama topik.",
        objectives: [
            "Menjelaskan konsep utama.",
            "Menerapkan konsep pada kasus sederhana."
        ],
        sourcePath: "/pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-advanced/05-evaluation/chapters/chapter-1.html"
    }
];
```

Enrichment final per chapter:

```text
hook
beginner roadmap
analogy (jika membantu)
conceptual visual/lab
worked example
quickCheck
challenge
mistakes
bestPractices
glossary
learningOutcomes
transition
```

Practice schema:

```javascript
var PRACTICES = [
    {
        id: "practice-1",
        title: "Pilih metric untuk kasus nyata",
        focus: "Metric Selection",
        prompt: "Kasus...\n1. Analisis tujuan.\n2. Pilih metric.\n3. Jelaskan trade-off.",
        fields: [["jawaban", "Tulis keputusan dan alasanmu..."]],
        guide: "Jawaban kuat menghubungkan objective, data, metric, dan risiko."
    }
];
```

Null guard wajib:

```javascript
var saved = getSavedPractice() || { answers: {}, revealed: [] };
```

Quiz schema:

```javascript
var QUIZ = [
    [
        "Pertanyaan?",
        ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
        1,
        "Penjelasan kenapa jawaban benar dan trade-off opsi lain."
    ]
];
```

## 5. Phase 3 — Function Parity

Controller baru harus mempunyai kemampuan setara untuk:

```text
renderList, renderFlow
escapeHtml, escapeSelector, safeJsonParse, setStatus
findH2Sections
finalRenderHookSection
finalRenderExampleSection
finalRenderQuickCheckSection
finalRenderChallengeSection
finalRenderMistakesPractices
finalRenderSummarySection
finalRenderPromptSection
renderSourceVisualLab, initSourceVisualLab
enhanceSourceMaterialForCanvas
setupHookInteraction, setupQuickChecks, setupChallengeInteraction
setupVisualNav, setupCopyButtons
filterSourceHeadings, stripSourceNumbering, injectAfterHeading
renderFormattedText, renderPracticeCard
loadSourceHtml, getSourceFile
```

Audit cepat—ganti target dengan controller yang sedang dibuat:

```bash
target=js/frontend/fellow-dashboard/ai-evaluation.js
for func in renderList renderFlow escapeHtml escapeSelector safeJsonParse setStatus findH2Sections renderFormattedText renderPracticeCard loadSourceHtml; do
  rg -q "function ${func}\\b" "$target" || echo "MISSING: $func"
done
```

Nama fungsi boleh course-specific jika arsitekturnya memang berbeda, tetapi kemampuan dan test-nya tidak boleh hilang.

## 6. Phase 4 — Implement Source Pipeline

Urutan:

1. Fetch source dengan response check.
2. Gunakan request token/abort untuk mencegah race.
3. Filter hanya heading module-level yang benar-benar duplikat.
4. Strip numbering pada heading tanpa menyentuh isi body.
5. Inject orientation/nav/hook/lab/example dekat konsep terkait.
6. Append quick check/challenge/mistakes/summary.
7. Set DOM hanya jika request masih terbaru.
8. Enhance table, pre, list, blockquote.
9. Init interaction handlers.
10. Audit source integrity.

Do not clone interactive nodes:

```javascript
// Salah: listener dapat hilang
target.appendChild(node.cloneNode(true));

// Benar: pindahkan node yang sama
target.appendChild(node);
```

## 7. Phase 5 — Build Beginner Flow

Setiap topik harus menjawab secara berurutan:

1. Apa masalahnya?
2. Kenapa peserta perlu peduli?
3. Konsep apa yang dipakai?
4. Bagaimana prosesnya langkah demi langkah?
5. Bagaimana contoh nyata bekerja?
6. Apa keputusan/trade-off yang harus dibuat?
7. Apa kesalahan umum?
8. Bisakah peserta menjelaskan/menerapkannya sendiri?

Untuk Evaluation, visual ideal menjelaskan hubungan objective → dataset → metric → slice/error analysis → human/safety evaluation → decision.
Untuk Evolution, visual ideal menjelaskan era → kemampuan → batasan → pemicu perubahan → paradigma berikutnya.

Semua enrichment harus mengikuti source, bukan mengarang silabus yang bertentangan dengan source canonical.

## 8. Phase 6 — Activity UX

### Practice

- Satu skenario aktif.
- Group navigator per topic.
- Progress overview.
- Save/edit/reset/reveal/prev/next/direct jump.
- Workspace sebelum source/reference panjang.
- State class JS dan CSS identik.

### Quiz

- Map sebelum active question.
- Full card clickable.
- Selected/correct/wrong/locked styles.
- Single-attempt explanation.
- Review seluruh soal.

### Discussion

- Prompt per topic.
- Inline post/reply composer.
- Persistence dan reload.
- Tidak memakai `window.prompt`.

## 9. Phase 7 — Route dan Script Registration

Untuk course baru/finalized activity:

- Tambah route yang belum ada; jangan mengubah route existing.
- Cocokkan nama `window.init...` di controller dan router.
- Tambahkan controller ke `index.html`.
- Pastikan route list/participant route checker mengetahui route baru jika diperlukan.
- Bump controller dan `modules.css` bersama jika keduanya berubah.

Jangan menyebut activity final hanya karena file `latihan.html`, `kuis.html`, atau `diskusi.html` ada. Route, initializer, data, interaksi, dan QA semuanya harus aktif.

## 10. Phase 8 — CSS Contract

- Scope selector per course/component.
- Light learning surfaces only.
- Pink sebagai accent utama.
- Radius mengikuti `AGENTS.md`.
- Custom style untuk seluruh action controls.
- Wrapper text untuk paragraph/list item yang punya icon/pseudo-element.
- `min-width: 0` pada grid/flex children yang dapat mengecil.
- Tables/chips scroll di wrapper internal.
- Jangan membuat grid/flex langsung pada mixed-content paragraph.
- Audit class renderer ↔ selector CSS dan state JS ↔ state CSS.

## 11. Phase 9 — Verification Matrix

### Static

```bash
git diff --check
node --check js/frontend/fellow-dashboard/ai-evaluation.js
node --check js/frontend/fellow-dashboard/ai-evolution.js
node --check js/router.js
node scripts/check-participant-routes.mjs
```

### Browser

Untuk materi/latihan/kuis/diskusi:

- desktop 1024/1440;
- mobile 390;
- wait route-specific container/text;
- console error;
- source fetch failure;
- document overflow;
- internal layout readability;
- keyboard/focus state;
- localStorage empty dan reload;
- rapid chapter switch;
- screenshot before sign-off.

### Source integrity

Sebelum transformasi simpan normalized source text. Setelah render, clone container, hapus hanya node dengan marker injected, lalu bandingkan normalized text. Perbedaan harus dijelaskan dan bukan kehilangan materi.

## 12. Phase 10 — Commit and Handover

- Review `git diff --stat` dan `git diff --check`.
- Stage hanya file scope.
- Jangan ikutkan screenshot/debug/draft user tanpa permintaan.
- Commit message scoped, misalnya `feat(evaluation): build complete learning module`.
- Update `HANDOVER_UPDATE.md`, `MODULE_STATUS_MAP.md`, dan cache baseline.
- Jangan push tanpa izin eksplisit user.

## 13. Final Definition of Done

- [ ] Source utuh dan termuat.
- [ ] Beginner flow lengkap.
- [ ] Visual kontekstual, bukan filler.
- [ ] Semua function/data contracts valid.
- [ ] Empat route aktif.
- [ ] Practice progressive dan persistent.
- [ ] Quiz full-card dan review all.
- [ ] Discussion inline.
- [ ] No stale template labels.
- [ ] No browser-default primary controls.
- [ ] Desktop/mobile screenshots rapi.
- [ ] No overflow/console errors.
- [ ] Route checker lulus.
- [ ] Cache JS/CSS sinkron.
- [ ] localStorage backward-compatible.
- [ ] Commit scoped dan handover updated.
