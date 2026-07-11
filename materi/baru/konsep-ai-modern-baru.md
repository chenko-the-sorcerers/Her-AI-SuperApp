# Konsep AI Modern - Materi Baru

Sumber utama: `D:\Downloads\deep-research-report-konsep-ai-modern.md`

Status: sumber handoff non-runtime untuk rebuild module `03 - Konsep AI Modern`.

## Struktur Final

Module tetap berada di:

```text
Foundation & Core AI
└── AI Fundamentals & Advanced
    └── 03 - Konsep AI Modern
        └── Materi -> Latihan -> Kuis -> Diskusi
```

Route publik tetap:

```text
#/participant-ai-modern
#/participant-ai-modern-practice
#/participant-ai-modern-quiz
#/participant-ai-modern-discussion
```

## Chapter 1 - Foundation Models: Fondasi AI Serbaguna

Pertanyaan utama: ketika sebuah model tampak bisa menulis, merangkum, menerjemahkan, membuat kode, dan menjawab pertanyaan, apa sebenarnya yang menjadi fondasinya?

Materi inti:

- Task-specific model dilatih untuk satu tugas.
- Pretrained model belajar representasi umum dari data luas.
- Foundation model adalah model dasar yang dapat diadaptasi ke banyak tugas.
- AI application bukan hanya model, tetapi gabungan model, prompt, data, tools, workflow, interface, evaluasi, dan human oversight.
- Pretraining memakai pola self-supervised learning seperti next-token prediction atau masked modeling.
- Adaptation dapat berupa instruction tuning, supervised fine-tuning, preference optimization, PEFT/LoRA, prompting, RAG, dan tool augmentation.
- Scale, data, compute, architecture, post-training, inference-time compute, dan evaluasi sama-sama memengaruhi capability; model terbesar tidak otomatis paling tepat.
- Modalitas model mencakup language, vision, speech/audio, vision-language, multimodal, embedding, image generation, dan video generation.
- API-hosted, open-weight hosted, dan local/on-device model punya trade-off setup, kontrol, privasi, biaya, latency, customization, maintenance, dan vendor dependency.
- Open-weight tidak otomatis berarti seluruh training data dan proses pengembangan terbuka.
- Model card perlu dibaca untuk intended use, out-of-scope use, language coverage, benchmark, limitations, license, hardware requirement, context window, dan safety notes.
- Studi platform: OpenAI, Anthropic, Gemini, Meta Llama, Hugging Face Hub, dan Ollama sebagai contoh workflow, bukan endorsement.

Kutipan singkat:

> "We call these models foundation models." - Bommasani et al. (2021)

Makna: model fondasi adalah basis yang dapat dipakai ulang, tetapi risiko dan batasannya juga ikut diwariskan ke aplikasi turunan.

Quick check:

Universitas memakai model bahasa melalui API, menambahkan dokumen akademik lewat retrieval, lalu membangun dashboard mahasiswa. Foundation model adalah model bahasa yang dipanggil; AI system adalah kombinasi API, retrieval, dokumen, dashboard, policy, monitoring, dan manusia yang mengoperasikannya.

Mini challenge:

Buat model selection matrix untuk chatbot layanan fellowship dengan kriteria Bahasa Indonesia, privasi data, biaya, latency, tool calling, deployment lokal, dan kemudahan evaluasi.

## Chapter 2 - Transformer: Mesin di Balik Model Modern

Pertanyaan utama: bagaimana model modern membaca konteks panjang dan menghasilkan token satu per satu?

Materi inti:

- Urutan kata membawa makna; pendekatan sekuensial lama sulit menjaga konteks jauh dan membatasi paralelisme.
- Token bukan selalu kata. Token dapat berupa subword, bagian kata, tanda baca, atau potongan teks lain. Tokenisasi Bahasa Indonesia berbeda antar model.
- Token memengaruhi context window, biaya, truncation, dan kualitas input.
- Embedding mengubah token ID menjadi vector representation. Token embedding berbeda dari embedding model untuk retrieval.
- Attention membutuhkan positional information agar model memahami urutan. Positional encoding, learned position embedding, dan rotary position embedding menjawab kebutuhan itu secara berbeda.
- Query, Key, dan Value dapat dianalogikan seperti peserta mencari informasi di perpustakaan: Query bertanya apa yang dicari, Key memberi label informasi yang tersedia, Value membawa isi informasi.
- Formula ringan: `Attention(Q, K, V) = softmax(QK^T / sqrt(d)) V`.
- Multi-head attention memungkinkan beberapa pola relasi dipelajari sekaligus, tetapi tidak semua head harus punya fungsi linguistik yang mudah diberi nama.
- Transformer block berisi self-attention, residual connection, normalization, feed-forward network, dan layer yang berulang.
- Encoder cocok untuk understanding dan embedding, decoder cocok untuk autoregressive generation, encoder-decoder cocok untuk sequence-to-sequence.
- Autoregressive generation memprediksi token berikutnya, menambahkannya ke konteks, lalu mengulang sampai stop condition.
- Temperature, top-p, repetition, stop sequence, dan structured output mengontrol karakter generasi.
- Context window bukan long-term memory. Retrieval, summarization, session memory, dan database tetap punya peran.
- Keterbatasan Transformer: attention cost, hallucination, lost-in-the-middle, data staleness, prompt sensitivity, dan tidak otomatis punya tool/database terkini.
- Studi platform: Hugging Face Transformers untuk tokenizer, pipeline, generate, pretrained models, inference, dan training.

Kutipan singkat:

> "dispensing with recurrence and convolutions entirely" - Vaswani et al. (2017)

Makna: Transformer menggeser pemrosesan urutan dari membaca langkah demi langkah menjadi attention yang lebih paralel.

Quick check:

Pada kalimat "Mentor mengirim jadwal kepada peserta karena mereka meminta revisi", token "mereka" seharusnya memberi perhatian lebih besar pada konteks "peserta" dan "meminta revisi", bukan hanya kata yang paling dekat secara posisi.

Mini challenge:

Bandingkan konfigurasi generation: temperature rendah/top-p rendah untuk jawaban faktual dan ringkasan kebijakan; temperature lebih tinggi/top-p lebih luas untuk caption kreatif; gunakan kontrol ketat untuk output yang harus terstruktur.

## Chapter 3 - AI Agents: Dari Model yang Menjawab ke Sistem yang Bertindak

Pertanyaan utama: kapan aplikasi AI perlu menjadi agent, dan kapan workflow deterministik lebih aman?

Materi inti:

- Model call: satu input, satu output.
- Chatbot: model call dengan conversation state.
- Workflow: langkah ditentukan developer.
- Agent: model memilih tindakan atau tool dalam loop.
- Multi-agent: beberapa agent dengan pembagian peran.
- Tidak semua aplikasi AI memerlukan agent.
- Agent loop: goal, observe context, decide next action, call tool/respond, receive result, update state, check completion, repeat or stop.
- Stopping condition mencegah loop tidak selesai.
- Tool/function calling perlu tool name, description, JSON schema, required parameters, execution, result, error handling, schema validation, idempotency, dan authorization.
- Planning dapat berupa fixed workflow, model-generated plan, dynamic replanning, deterministic routing, atau planner-executor pattern.
- Workflow deterministik lebih aman untuk proses yang wajib patuh, auditabel, dan minim improvisasi.
- State dan memory mencakup conversation context, short-term state, long-term memory, user profile, database eksternal, vector retrieval, dan artifact/file state.
- Tool result grounding penting karena agent bisa salah memilih tool, mengisi parameter salah, membaca result secara salah, mengabaikan error, atau mencampur result lama dan baru.
- Handoff dan multi-agent mencakup manager agent, specialist agent, agent-as-tool, sequential collaboration, parallel collaboration, serta risiko koordinasi dan biaya.
- Guardrails mencakup input/output validation, tool permission, approval sebelum tindakan berisiko, spending limit, scope restriction, audit log, rollback, dan escalation.
- Observability agent mencakup tracing, tool-call logs, latency, token usage, task success, tool success rate, recovery rate, human intervention rate, dan cost per successful task.
- Studi platform: OpenAI Agents SDK, Anthropic tool use dan MCP, Google ADK, LangChain/LangGraph.

Kutipan singkat:

> "reasoning and acting" - Yao et al. (2022)

Makna: agent yang baik tidak hanya memikirkan jawaban, tetapi menghubungkan reasoning dengan aksi terkontrol.

Quick check:

Untuk sistem yang membaca formulir, memvalidasi kelengkapan, meminta approval staf, lalu mengirim pemberitahuan: validasi format dan approval sebaiknya workflow deterministik; model/agent layak membantu ekstraksi informasi, menyusun draft pesan, dan menjelaskan item yang kurang.

Mini challenge:

Rancang agent layanan fellowship dengan satu goal, dua tools, tool schema, stopping condition, guardrail, approval manusia, dua failure modes, dan logging yang dibutuhkan.

## Chapter 4 - Sistem AI Masa Kini: Model, Data, Tools, Infrastruktur, dan Human Oversight

Pertanyaan utama: mengapa kualitas aplikasi AI tidak bisa dinilai dari modelnya saja?

Materi inti:

- Modern AI System = Model + Instructions + Context + Retrieval + Tools + State + Guardrails + Evaluation + Infrastructure + Human Oversight.
- End-to-end architecture mencakup user interface, API/backend, authentication/policy, prompt/context builder, model gateway, retrieval/tools, output validation, human approval, response, logs/traces/evaluation.
- Context engineering mengatur system instruction, user input, retrieved documents, tool results, conversation history, memory, examples, context prioritization, token budget, dan prompt injection boundaries.
- RAG mencakup documents, chunking, embeddings, vector index, retrieval, context assembly, generation, citation/source display.
- RAG berguna ketika pengetahuan berubah, perlu sumber, atau data internal tidak masuk training model; database query biasa lebih tepat untuk data terstruktur yang deterministik.
- Retrieval quality, chunking, metadata, reranking, grounding, citation, stale index, access control, dan prompt injection dari dokumen perlu dirancang.
- Model routing memilih fast vs capable model, text vs vision, hosted vs local, fallback, cost-aware routing, dan risk-aware routing.
- Caching dan latency mencakup response cache, embedding cache, prompt cache, semantic cache, streaming, batching, parallel tool calls, serta trade-off kualitas.
- Evaluation dan observability mencakup offline eval, pre-deployment test, production monitoring, trace, feedback pengguna, incident review, drift, regression, cost monitoring, dan safety event.
- Security dan privacy mencakup secret management, larangan API key di frontend, least privilege, tool permission, tenant isolation, PII redaction, retention, logging sensitivity, prompt injection, data exfiltration, dependency risk, dan human approval.
- Deployment patterns: managed API, managed cloud AI platform, self-hosted inference, local development.
- Multimodal systems membutuhkan preprocessing, modality-specific validation, storage, latency, dan accessibility.
- Human oversight dapat berupa human-in-the-loop, human-on-the-loop, atau human-out-of-the-loop.
- Failure taxonomy harus melihat layer input, prompt, retrieval, model, tool, agent, validation, infrastructure, governance, dan human process.

Kutipan singkat:

> "manage risks and promote trustworthy AI" - NIST (2023)

Makna: sistem AI modern harus dirancang sebagai sistem risiko, bukan hanya eksperimen model.

Quick check:

Arsitektur yang menyimpan API key di frontend, memakai satu model untuk semua tugas, retrieval tanpa access control, tool delete tanpa approval, tidak ada logging, dan tidak ada evaluation set memiliki risiko di semua layer: security, cost, privacy, reliability, dan governance.

Mini challenge:

Buat architecture decision record singkat: use case, model approach, hosted/open/local, retrieval, tools, human approval, privacy, evaluation, observability, cost controls, dan failure fallback.

## Latihan Final

Latihan final terdiri dari 12 latihan utama dan 1 capstone:

1. Mengidentifikasi foundation model, adaptation layer, dan application layer.
2. Membaca dan mengaudit model card di Hugging Face.
3. Membuat decision matrix API-hosted vs open-weight vs local.
4. Eksperimen konseptual tokenisasi Bahasa Indonesia.
5. Menelusuri alur token -> embedding -> attention -> output.
6. Membandingkan konfigurasi generation untuk tugas faktual dan kreatif.
7. Merancang dua tool schema untuk assistant fellowship.
8. Menyusun agent loop beserta stopping condition dan error recovery.
9. Membandingkan OpenAI Agents SDK, Anthropic tool use, Google ADK, dan LangChain berdasarkan kebutuhan sistem.
10. Merancang RAG untuk pedoman fellowship.
11. Membandingkan managed API, managed cloud, self-hosted, dan local deployment.
12. Melakukan production-readiness audit pada arsitektur yang sengaja memiliki kelemahan.
13. Capstone: mendesain arsitektur HerAI Fellowship Assistant end-to-end.

## Kuis Final

Kuis final terdiri dari 20 soal multiple choice:

- 5 soal Foundation Models.
- 5 soal Transformer.
- 5 soal AI Agents.
- 5 soal Sistem AI Masa Kini.

Passing score: 75%.

## Diskusi Final

Empat prompt diskusi:

1. Foundation model sebagai infrastruktur bersama.
2. Transformer dan batas context.
3. Agent autonomy.
4. Sistem AI untuk fellowship.

## Referensi

- Bommasani et al. (2021), On the Opportunities and Risks of Foundation Models.
- Vaswani et al. (2017), Attention Is All You Need.
- Brown et al. (2020), Language Models are Few-Shot Learners.
- Hoffmann et al. (2022), Training Compute-Optimal Large Language Models.
- Lewis et al. (2020), Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.
- Yao et al. (2022), ReAct: Synergizing Reasoning and Acting in Language Models.
- Schick et al. (2023), Toolformer: Language Models Can Teach Themselves to Use Tools.
- Liang et al. (2022), Holistic Evaluation of Language Models.
- NIST (2023), AI Risk Management Framework.
- OpenAI platform and Agents SDK documentation.
- Anthropic tool use and Model Context Protocol documentation.
- Google Gemini developer documentation and Agent Development Kit.
- Hugging Face Transformers, Hub model cards, PEFT, and inference documentation.
- Meta Llama model card and repository documentation.
- LangChain/LangGraph agent documentation.
- Microsoft/Azure AI platform documentation.
- AWS Bedrock documentation.
- NVIDIA NIM documentation.
- Ollama documentation.
