# Evaluation AI - Snapshot Materi

Snapshot ini merangkum materi runtime Evaluation AI. Runtime aktif berada di:

```text
pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-advanced/05-evaluation/
```

Route publik:

```text
#/participant-ai-evaluation
```

Controller:

```text
js/frontend/fellow-dashboard/ai-evaluation.js
```

Sumber konten utama:

```text
C:\Users\Rey's PC\Downloads\deep-research-report.md
```

## Struktur Materi

1. Mengapa AI Perlu Dievaluasi?
   - Perbedaan software testing dan evaluasi AI.
   - Akurasi sebagai metrik yang tidak cukup.
   - Output evaluation, model evaluation, system evaluation, TEVV, release gate, dan monitoring.

2. Mengevaluasi Output AI
   - Relevansi, factuality, completeness, coherence, instruction following, usefulness, safety.
   - Human evaluation, automatic metrics, LLM-as-a-judge, pairwise comparison, rubric evaluation.
   - BLEU, ROUGE, BERTScore, pass@k, faithfulness, answer relevancy.

3. Benchmark dan Dataset Evaluasi
   - Benchmark, evaluation dataset, test set, leaderboard, representativeness, contamination, benchmark saturation.
   - MMLU, BIG-bench, HELM, MT-Bench, HumanEval, TruthfulQA, HaluEval, BBQ, StereoSet, CrowS-Pairs.
   - Konteks Indonesia: IndoLEM, IndoMMLU, IndoBias.

4. Reliability dan Robustness
   - Reliability, validity, consistency, robustness, calibration, uncertainty, hallucination, distribution shift.
   - Stress test untuk typo, pertanyaan ambigu, dokumen panjang, prompt injection, dan unknown answer.
   - Expected Calibration Error, Brier score, SelfCheckGPT, TruthfulQA, HaluEval, Robustness Gym secara konseptual.

5. Bias dan Fairness
   - Bias statistik, data, sosial, institusional, harmful bias, fairness, equality, equity.
   - Outcome rate, true positive rate, false positive rate, equalized odds, disparate impact.
   - Audit bias untuk screening beasiswa, kandidat, moderasi, dan layanan bahasa Indonesia.

6. Kualitas Sistem AI dan Evaluation Plan
   - Perbedaan kualitas model dan kualitas sistem.
   - AI lifecycle, human oversight, risk register, incident response, change management, rollback, monitoring.
   - NIST AI RMF, NIST TEVV, ISO/IEC 25059, ISO/IEC 42001.
   - Template AI Evaluation Plan.

## Activity Runtime

- Materi: 6 chapter HTML canonical.
- Latihan: 15 aktivitas studi kasus tersimpan di localStorage.
- Kuis: 24 soal pilihan ganda, 4 soal per chapter, passing score 75%.
- Diskusi: 6 prompt refleksi ringan mengikuti shell activity yang sudah ada di sistem.

## localStorage

```text
heraiAiEvaluationCurrentModule
heraiAiEvaluationCompletedModules
heraiAiEvaluationPractice
heraiAiEvaluationQuizDone
heraiAiEvaluationQuizScore
heraiAiEvaluationQuizAnswers
heraiAiEvaluationDiscussion
```

## Referensi Inti

- NIST. AI Risk Management Framework 1.0. 2023.
- NIST. AI Test, Evaluation, Validation and Verification.
- Liang et al. Holistic Evaluation of Language Models. 2022.
- Papineni et al. BLEU. 2002.
- Lin. ROUGE. 2004.
- Zhang et al. BERTScore. 2019.
- Chen et al. HumanEval. 2021.
- Zheng et al. MT-Bench. 2023.
- Min et al. FActScore. 2023.
- Manakul et al. SelfCheckGPT. 2023.
- Koto et al. IndoMMLU. 2023.
- Hanif et al. IndoBias. 2024.
- ISO/IEC 25059:2023.
- ISO/IEC 42001:2023.
- Kominfo. Surat Edaran Nomor 9 Tahun 2023 tentang Etika Kecerdasan Artifisial.
