# HerAI NLP Course — Progress Tracker

## Completed ✅

### Module 1: Text Fundamentals
| # | Lesson | Route | Source | Status |
|---|---|---|---|---|
| 1 | Tokenization | `#/participant-ai-lab-tokenization` | AI Lab `tokenization.html` | ✅ Done |
| 2 | Preprocessing | `#/participant-ai-lab-preprocessing` | AI Lab `preprocessing.html` | ✅ Done |
| 3 | POS Tagging & NER | `#/participant-ai-lab-pos-ner` | AI Lab `pos-ner.html` | ✅ Done |

### Module 2: Text Representations
| # | Lesson | Route | Source | Status |
|---|---|---|---|---|
| 4 | Bag-of-Words | `#/participant-ai-lab-bow` | AI Lab `bow.html` | ✅ Done |

### Overview Pages
| # | Page | Route | Source | Status |
|---|---|---|---|---|
| — | NLP Overview | `#/participant-ai-lab-nlp` | AI Lab `nlp.html` | ✅ Done |

### Dashboard Fixes
| # | Fix | Status |
|---|---|---|
| — | Sidebar expand/collapse + logo size | ✅ Done |
| — | Course cards clickable (entire card) | ✅ Done |
| — | All AI Lab CSS ported to HerAI pink theme | ✅ Done |
| — | All emoji replaced with FA icons | ✅ Done |

---

## Not Yet Started ❌

### Module 2: Text Representations (1 remaining)
| # | Lesson | Source | Status |
|---|---|---|---|
| 5 | TF-IDF | AI Lab `tfidf.html` | ❌ |

### Module 3-6 (all AI Lab NLP lessons remaining)
| Module | Lessons | Source (AI Lab) |
|---|---|---|
| 3 — Classical NLP | Naive Bayes, Logistic Regression, SVM | `nlp.html` overview topics |
| 4 — Deep Learning | Word Embeddings, Feed-Forward, CNN for Text | `nlp.html` overview topics |
| 5 — Sequential | RNN, LSTM, GRU, Encoder-Decoder | `nlp.html` overview topics |
| 6 — Transformers | Self-Attention, BERT, GPT, RAG | `nlp.html` overview topics |

### Courses NOT yet ported
| Course | Source (AI Lab) | Interactive? |
|---|---|---|
| Machine Learning | `machine-learning.html` (610L) | No (overview only) |
| Computer Vision | `computer-vision.html` (543L) | No (overview only) |
| Deep Learning | No standalone overview | — |
| Generative AI | `generative-ai.html` (474L) | Canvas hero |
| CNN Series (6 lessons) | `cnn-intro.html` + 5 more | **Canvas heavy** |
| Filtering Kernels | `filtering-kernels.html` | **Canvas (47K JS)** |
| Morphological Transforms | `morphological-transforms.html` | **Canvas (52K JS)** |
| Image Processing | `image-processing-opencv.html` | **Canvas (38K JS)** |
| BoW, TF-IDF (remaining) | `bow.html`, `tfidf.html` | Interactive |
| ML Theory (3 lessons) | hypothesis, bias-variance, vc-dim | Interactive |

---

## Key Files (for new AI)

| File | Role |
|---|---|
| `AI_LAB_INTEGRATION_GUIDE.md` | **READ FIRST** — Complete guide for porting |
| `pages/frontend/fellow-dashboard/ai-lab/` | All NLP lesson pages |
| `pages/frontend/fellow-dashboard/ai-lab/nlp.html` | NLP overview page |
| `pages/frontend/fellow-dashboard/ai-lab/lessons/` | Individual lesson HTML files |
| `js/frontend/fellow-dashboard/ai-lab/` | All lesson JS files |
| `css/frontend/fellow-dashboard/ai-lab-lesson.css` | All AI Lab lesson CSS |
| `js/router.js` | Route definitions |
| `index.html` | CSS/JS references |
| `pages/frontend/fellow-dashboard/modules.html` | Course catalog |

---

*Last updated: 2026-06-30*
