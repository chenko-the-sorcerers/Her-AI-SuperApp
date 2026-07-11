# Evolution of AI - Snapshot Konten Runtime

Tanggal snapshot: 11 Juli 2026

Route publik: `#/participant-ai-evolution`

Runtime aktif:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-advanced/06-evolution-of-ai/
js/frontend/fellow-dashboard/ai-evolution.js
```

Sumber konten utama: `C:\Users\Rey's PC\Downloads\deep-research-report (1).md`

Snapshot ini hanya arsip/handover. UI peserta memuat materi dari folder canonical di atas.

## Struktur Modul

Evolution of AI aktif sebagai modul final canonical di:

```text
Foundation & Core AI
└── AI Fundamentals & Advanced
    └── AI Advanced
        └── 06 - Evolution of AI
```

Flow activity memakai route stabil yang sama dengan query:

```text
#/participant-ai-evolution
#/participant-ai-evolution?module=<slug>&activity=materi
#/participant-ai-evolution?module=<slug>&activity=latihan
#/participant-ai-evolution?module=<slug>&activity=kuis
#/participant-ai-evolution?module=<slug>&activity=diskusi
```

## Chapter Materi

1. Reading AI Evolution
   - Cara membaca sejarah AI sebagai evolusi paradigma, bukan daftar tanggal.
   - Menjelaskan recurring bottleneck: knowledge, data, compute, evaluation, deployment risk, dan human oversight.

2. Symbolic AI
   - Rule-based system, knowledge base, inference engine, expert system, dan batasan brittleness.
   - Menekankan mengapa symbolic AI tetap relevan untuk audit trail, workflow, constraint, dan compliance.

3. Learning from Data
   - Peralihan dari aturan manual ke supervised, unsupervised, dan self-supervised learning.
   - Membahas fitur, label, generalisasi, leakage, dataset shift, dan evaluasi.

4. Reinforcement Learning
   - Agent, environment, state, action, reward, policy, exploration, dan trade-off.
   - Mengaitkan reinforcement learning dengan safety, reward hacking, simulator, dan human feedback.

5. VAE and GAN
   - Latent space, encoder-decoder, generator-discriminator, reconstruction, sampling, dan mode collapse.
   - Menjelaskan model generatif visual sebelum era diffusion.

6. Diffusion Models
   - Forward noise, denoising, sampling, conditioning, classifier-free guidance, dan prompt-image alignment.
   - Mengaitkan kualitas gambar dengan compute, data, evaluasi visual, dan risiko provenance.

7. Transformer, LLM, and Hybrid AI
   - Attention, pretraining, instruction tuning, RAG, tool use, agents, multimodal model, dan hybrid AI.
   - Menekankan kombinasi probabilistic model, retrieval, symbolic constraints, evaluation, dan human governance.

## Activity

- Materi: 7 chapter HTML di `chapters/chapter-1.html` sampai `chapter-7.html`.
- Latihan: 16 aktivitas studi kasus dengan penyimpanan lokal.
- Kuis: 21 soal pilihan ganda, 3 soal per module, passing score 75%.
- Diskusi: 7 prompt refleksi, satu untuk tiap module.

## Controller dan State

Controller: `js/frontend/fellow-dashboard/ai-evolution.js`

LocalStorage keys:

```text
heraiAiEvolutionCurrentModule
heraiAiEvolutionCompletedModules
heraiAiEvolutionPractice
heraiAiEvolutionQuizDone
heraiAiEvolutionQuizScore
heraiAiEvolutionQuizAnswers
heraiAiEvolutionDiscussion
```

## Referensi Utama

- Dartmouth Workshop proposal, John McCarthy et al., 1955.
- Expert systems and symbolic AI literature.
- Sutton & Barto, Reinforcement Learning: An Introduction.
- Kingma & Welling, Auto-Encoding Variational Bayes.
- Goodfellow et al., Generative Adversarial Nets.
- Ho et al., Denoising Diffusion Probabilistic Models.
- Vaswani et al., Attention Is All You Need.
- Brown et al., Language Models are Few-Shot Learners.
- Lewis et al., Retrieval-Augmented Generation.

## Catatan Implementasi

- Route `#/participant-ai-evolution` tidak lagi memakai `course-placeholder.html`.
- Entry Evolution dicabut dari `COURSE_SCAFFOLDS`; scaffold course lain tidak diubah.
- Styling memakai class scoped `ai-evolution-*` di `modules.css`.
- Tidak ada folder lama `course-catalog`, `ai-fundamental`, atau `ai-lab` yang dibuat ulang sebagai path aktif.
