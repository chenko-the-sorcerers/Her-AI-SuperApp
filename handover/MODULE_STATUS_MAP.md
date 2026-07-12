# Module Status Map — HerAI Fellowship

**Updated:** 12 Juli 2026
**Pre-delivery branch checkpoint:** `design`, ahead 30 sebelum commit handover; delivery ini diizinkan push hanya ke `design`.

## Foundation & Core AI

| Module | Route family | Materi | Latihan | Kuis | Diskusi | Status |
|---|---|---|---|---|---|---|
| Reasoning | `participant-ai-reasoning*` | 6 topik final | 17 progressive | 26 + review all | 4 + inline reply | COMPLETE, canonical functional template |
| Konsep AI Modern | `participant-ai-modern*` | 4 topik + beginner enrichment | 13 progressive | 20 + review all | 4 + inline reply | COMPLETE v4, visual/beginner baseline |
| Python untuk AI | `participant-ai-python*` | 8 topik load | 8 progressive | 10 single attempt | 4 + inline reply | Pipeline OK; enrichment pending |
| AI Fundamentals/Pengantar AI | `participant-ai-intro*` | Belum migrasi universal | Belum final | Belum final | Belum final | Backlog |
| Evaluation | `participant-ai-evaluation` saat ini | Scaffold/source awal | Belum universal | Belum universal | Belum universal | NEXT 1 |
| Evolution of AI | `participant-ai-evolution` saat ini | Scaffold/source awal | Belum universal | Belum universal | Belum universal | NEXT 2 |

Catatan: Evaluation dan Evolution memiliki file halaman activity di filesystem, tetapi router aktif saat checkpoint baru mendaftarkan route materi. Jangan menyebut activity final sebelum route, initializer, data, interaction, dan QA selesai.

## AI Labs

| Lab | Route | Status |
|---|---|---|
| Machine Learning | `participant-ai-lab-ml` | Scaffold/backlog |
| Math for AI | `participant-ai-lab-math` | Scaffold/backlog |
| Computer Vision | `participant-ai-lab-cv` | Scaffold/backlog |
| NLP | `participant-ai-lab-nlp` | Scaffold/backlog |

## Priority

1. Pertahankan Konsep AI Modern v4 sebagai regression baseline.
2. Finalkan Evaluation ke empat route dan Universal Course Standard.
3. Finalkan Evolution of AI ke empat route dan standard yang sama.
4. Enrich Python sampai parity.
5. Migrasikan AI Fundamentals/Pengantar AI.

## Definition of Status

- **COMPLETE:** source integrity, materi, latihan, kuis, diskusi, persistence, desktop/mobile, console, routes, dan cache sudah lulus.
- **Pipeline OK:** runtime/activity dasar bekerja, tetapi depth/enrichment/QA belum parity.
- **Scaffold:** file atau route awal ada, tetapi belum memenuhi kontrak course final.
- **Backlog:** belum menjadi target implementasi aktif.

## Dokumen Eksekusi

- Standard: `handover/UNIVERSAL_COURSE_STANDARD.md`
- Errors/guardrails: `handover/REGRESSION_AND_ERROR_PLAYBOOK.md`
- Build checklist: `handover/COURSE_TEMPLATE_GUIDE.md`
- Prompt AI baru: `handover/FIRST_PROMPT.txt`
