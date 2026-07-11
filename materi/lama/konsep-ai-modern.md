# Snapshot Lama - Konsep AI Modern

Tanggal ekstraksi: 12 Juli 2026

Runtime lama:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/
js/frontend/fellow-dashboard/ai-modern.js
```

File ini menyimpan ringkasan konten lama sebelum module `03 - Konsep AI Modern` dirombak berdasarkan `deep-research-report-konsep-ai-modern.md`. Snapshot ini bukan runtime peserta.

## Route Lama yang Dipertahankan

```text
#/participant-ai-modern
#/participant-ai-modern-practice
#/participant-ai-modern-quiz
#/participant-ai-modern-discussion
```

## LocalStorage Lama yang Dipertahankan

```text
heraiAiModernCurrentChapter
heraiAiModernPractice
heraiAiModernQuizDone
heraiAiModernQuizScore
heraiAiModernQuizAnswers
heraiAiModernDiscussion
```

## Materi Lama

Materi lama terdiri dari empat topik:

1. Mesin Paham Konteks (Transformer)
   - Menjelaskan masalah RNN/LSTM membaca urutan panjang.
   - Memperkenalkan Transformer dan self-attention sebagai mekanisme membaca hubungan antar kata.
   - Analogi lama: membaca grup chat panjang dan fokus ke nama serta inti drama.
   - Referensi lama: paper `Attention Is All You Need` secara umum.

2. Lahirnya Raksasa (Foundation Models & LLM)
   - Menjelaskan foundation model dan LLM sebagai hasil training data skala besar.
   - Menjelaskan parameter sebagai analogi sinapsis saraf.
   - Membagi proses menjadi pretraining dan fine-tuning/RLHF.
   - Analogi lama: kain sutra mentah yang kemudian dijahit menjadi gaun.

3. AI Sebagai Pekerja Aktif (AI Agents)
   - Menjelaskan AI agent sebagai sistem yang tidak hanya menjawab, tetapi bisa mengambil tindakan.
   - Memperkenalkan pola ReAct: thought, action, observation, answer.
   - Analogi lama: chatbot resep biasa dibanding agent yang mencari resep dan menyiapkan keranjang belanja.

4. Mengobati AI Halu (RAG)
   - Menjelaskan hallucination sebagai jawaban meyakinkan tetapi tidak faktual.
   - Memperkenalkan Retrieval-Augmented Generation.
   - Pipeline lama: mengambil dokumen lokal relevan, menempelkan ke prompt, lalu meminta model menjawab berdasarkan dokumen.
   - Analogi lama: ujian open-book agar AI tidak mengarang.

## Latihan Lama

Latihan lama berisi 5 skenario:

1. Transformer untuk konteks panjang.
2. Foundation model vs model khusus.
3. Agent loop dengan guardrail.
4. Mengurangi halusinasi dengan RAG.
5. Evaluasi sistem AI modern.

Mekanisme lama:

- Form id: `aiModernPracticeForm`.
- Penyimpanan: `heraiAiModernPractice`.
- Tombol: simpan, edit, hapus.
- Feedback muncul ketika textarea terkait terisi.

## Kuis Lama

Kuis lama berisi 10 soal single attempt dengan topik:

1. Peran attention pada transformer.
2. Alasan foundation model menjadi basis umum.
3. Definisi context window.
4. Tujuan utama RAG.
5. Peran embedding dalam retrieval.
6. Urutan agent loop.
7. Alasan tool use perlu guardrail.
8. Definisi hallucination.
9. Definisi groundedness.
10. Komponen evaluasi production AI.

Mekanisme lama:

- Form id: `aiModernQuizForm`.
- Jawaban benar direpresentasikan dengan value `1`.
- Single attempt memakai `heraiAiModernQuizDone`.
- Score memakai `heraiAiModernQuizScore`.
- Jawaban peserta memakai `heraiAiModernQuizAnswers`.

## Diskusi Lama

Diskusi lama berisi 6 prompt seed:

1. Kapan context window besar cukup, dan kapan sistem tetap perlu RAG?
2. Apa risiko memakai foundation model umum untuk data internal fellowship?
3. Tool apa saja yang aman diberikan ke agent pembelajaran, dan mana yang perlu approval manusia?
4. Bagaimana membuktikan jawaban assistant grounded pada dokumen sumber?
5. Metrik apa yang paling penting untuk assistant peserta?
6. Bagaimana HerAI menjelaskan batas kemampuan AI kepada peserta?

Mekanisme lama:

- Form id: `aiModernDiscussionForm`.
- List id: `aiModernDiscussionList`.
- Penyimpanan: `heraiAiModernDiscussion`.
- Input user dirender dengan escaping melalui controller.

## Catatan Migrasi

- Konten lama tidak dihapus dari sejarah; file ini menjadi arsip.
- Runtime baru tetap memakai folder canonical yang sama.
- Route publik, key localStorage, dan initializer publik dipertahankan.
