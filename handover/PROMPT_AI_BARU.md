# Prompt Onboarding untuk AI Agent / Developer Baru

**Updated:** 12 Juli 2026
**Canonical prompt yang harus dicopy:** `handover/FIRST_PROMPT.txt`

File ini sengaja tidak lagi menyimpan beberapa prompt lama yang saling bertentangan. Satu-satunya prompt pembuka canonical sekarang adalah `FIRST_PROMPT.txt`, agar status module, cache, roadmap, dan aturan tidak drift.

## Cara Pakai

1. Buka `handover/FIRST_PROMPT.txt`.
2. Copy seluruh file sebagai pesan pertama ke AI baru.
3. Tambahkan task spesifik user setelah blok tersebut, misalnya:

```text
Task pertama: audit dan finalkan module Evaluation sesuai todo dan Definition of Done universal. Jangan mengubah Konsep AI Modern v4 kecuali menemukan regression yang dapat direproduksi.
```

4. Minta AI menunjukkan hasil baseline audit dan todo sebelum edit.
5. Minta AI mengupdate todo selama bekerja, bukan hanya membuat plan awal.

## Yang Sudah Dicakup Prompt Canonical

- current module status;
- commit/checkpoint terbaru;
- reading order;
- source-as-main contract;
- beginner learning flow;
- materi/practice/quiz/discussion standards;
- function and data parity;
- route/script/cache/localStorage contracts;
- HerAI UI rules;
- Python and AI Modern regression history;
- desktop/mobile/source-integrity QA;
- roadmap Evaluation → Evolution → Python parity → AI Fundamentals;
- commit and push authorization boundaries.

## Jangan Gunakan Lagi sebagai Prompt Utama

Prompt Reasoning Nazril dan merge guide lama tetap berguna sebagai riwayat task tertentu, tetapi tidak memuat status runtime terbaru. Jangan menempelkan file tersebut sendirian ke agent baru.

## Quick Current Baseline

- Reasoning COMPLETE, cache v35.
- Konsep AI Modern COMPLETE v4.
- Python pipeline OK v8, enrichment pending.
- Evaluation NEXT 1.
- Evolution of AI NEXT 2.
- Branch `design`; status/ahead wajib diverifikasi ulang.
