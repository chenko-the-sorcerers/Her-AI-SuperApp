# Konsep AI Modern - Snapshot Final Runtime

Tanggal snapshot: 12 Juli 2026

Sumber utama: `D:\Downloads\deep-research-report-konsep-ai-modern.md`

Runtime aktif:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/
js/frontend/fellow-dashboard/ai-modern.js
```

Route publik stabil:

```text
#/participant-ai-modern
#/participant-ai-modern-practice
#/participant-ai-modern-quiz
#/participant-ai-modern-discussion
```

LocalStorage contract dipertahankan:

```text
heraiAiModernCurrentChapter
heraiAiModernPractice
heraiAiModernQuizDone
heraiAiModernQuizScore
heraiAiModernQuizAnswers
heraiAiModernDiscussion
```

## Struktur Materi Final

1. Foundation Models: Fondasi AI Serbaguna
   - Task-specific model, pretrained model, foundation model, dan AI application.
   - Pretraining, adaptation, instruction tuning, fine-tuning, preference optimization, PEFT, prompting, RAG, dan tool augmentation.
   - Scale, data, compute, capability, modality, API-hosted, open-weight, local model, model cards, dan responsible selection.
   - Studi platform: OpenAI, Anthropic, Gemini, Meta Llama, Hugging Face Hub, Ollama.

2. Transformer: Mesin di Balik Model Modern
   - Tokenization, embedding, positional information, Query/Key/Value, multi-head attention, Transformer block.
   - Encoder, decoder, encoder-decoder, autoregressive generation, generation controls, context window, dan keterbatasan Transformer.
   - Studi platform: Hugging Face Transformers dan workflow generation pada platform API-hosted.

3. AI Agents: Dari Model yang Menjawab ke Sistem yang Bertindak
   - Model call, chatbot, workflow, agent, multi-agent.
   - Agent loop, tools/function calling, planning, state, memory, handoff, guardrails, human-in-the-loop, observability.
   - Studi platform: OpenAI Agents SDK, Anthropic tool use/MCP, Google ADK, LangChain/LangGraph.

4. Sistem AI Masa Kini: Model, Data, Tools, Infrastruktur, dan Human Oversight
   - Modern AI system sebagai gabungan model, instructions, context, retrieval, tools, state, guardrails, evaluation, infrastructure, human oversight.
   - End-to-end architecture, context engineering, RAG, model routing, caching, latency, evaluation, observability, security, privacy, deployment patterns, multimodal systems, human oversight, dan failure taxonomy.

## Latihan Final

Terdapat 12 latihan utama + 1 capstone:

1. Identifikasi foundation model, adaptation layer, dan application layer.
2. Audit model card Hugging Face.
3. Decision matrix API-hosted vs open-weight vs local.
4. Eksperimen konseptual tokenisasi Bahasa Indonesia.
5. Alur token -> embedding -> attention -> output.
6. Konfigurasi generation faktual dan kreatif.
7. Dua tool schema assistant fellowship.
8. Agent loop, stopping condition, dan error recovery.
9. Matrix platform agent.
10. RAG untuk pedoman fellowship.
11. Deployment pattern comparison.
12. Production-readiness audit.
13. Capstone HerAI Fellowship Assistant end-to-end.

Mekanisme:

- Render dinamis dari `js/frontend/fellow-dashboard/ai-modern.js`.
- Save/edit/reset.
- Restore dari `heraiAiModernPractice`.
- Checklist dan rubrik per latihan.
- Tidak ada API call eksternal atau secret.

## Kuis Final

- 20 soal multiple choice.
- 5 soal per chapter.
- UX progressive satu soal per view.
- Full-card clickable.
- Answered counter.
- Prev/next dan jump navigation.
- Submit confirmation.
- Single attempt.
- Passing score 75%.
- Pembahasan tampil setelah submit.
- Data versi lama di-reset aman jika jumlah jawaban tidak cocok.

## Diskusi Final

Empat prompt utama:

1. Foundation model sebagai infrastruktur bersama.
2. Transformer dan batas context.
3. Agent autonomy.
4. Sistem AI untuk fellowship.

Mekanisme:

- Prompt card berisi konteks, posisi A/B, pertanyaan pemantik, dan contoh kasus.
- Thread posting, reply, timestamp, empty state.
- Input user disanitasi sebelum tampil di DOM.
- Data tersimpan di `heraiAiModernDiscussion`.

## Referensi Utama

- Bommasani et al. (2021), On the Opportunities and Risks of Foundation Models.
- Vaswani et al. (2017), Attention Is All You Need.
- Brown et al. (2020), Language Models are Few-Shot Learners.
- Hoffmann et al. (2022), Training Compute-Optimal Large Language Models.
- Lewis et al. (2020), Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.
- Yao et al. (2022), ReAct: Synergizing Reasoning and Acting in Language Models.
- Schick et al. (2023), Toolformer.
- Liang et al. (2022), Holistic Evaluation of Language Models.
- NIST AI RMF (2023).
- Dokumentasi platform OpenAI, Anthropic, Google Gemini/ADK, Hugging Face, Meta Llama, LangChain/LangGraph, Microsoft/Azure AI, AWS Bedrock, NVIDIA NIM, dan Ollama.

## Catatan Implementasi

- Tidak ada perubahan route.
- Tidak ada penambahan AI Modern ke `COURSE_SCAFFOLDS`.
- Tidak ada folder legacy `course-catalog`, `ai-fundamental`, atau `ai-lab` yang dibuat.
- Styling baru memakai class scoped `ai-modern-*`.
- Cache buster `index.html` untuk `modules.css` dan `ai-modern.js` diperbarui ke `20260712-ai-modern-rebuild`.
