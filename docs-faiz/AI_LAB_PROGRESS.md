# HerAI NLP + ML + CV Course — Progress Tracker

> **Last updated: 2026-06-30**
> **Total: 12 lesson pages + 3 overview pages = 15 pages**

## Completed ✅

### NLP Course
| # | Lesson | Route | Source | Status |
|---|---|---|---|---|
| 1 | Tokenization | `#/participant-ai-lab-tokenization` | AI Lab `tokenization.html` | ✅ + interactive playground |
| 2 | Preprocessing | `#/participant-ai-lab-preprocessing` | AI Lab `preprocessing.html` | ✅ + pipeline lab |
| 3 | POS Tagging & NER | `#/participant-ai-lab-pos-ner` | AI Lab `pos-ner.html` | ✅ + quiz |
| 4 | Bag-of-Words | `#/participant-ai-lab-bow` | AI Lab `bow.html` | ✅ + vector demo |
| 5 | TF-IDF | `#/participant-ai-lab-tfidf` | AI Lab `tfidf.html` | ✅ + search lab |

### ML Course
| # | Lesson | Route | Source | Status |
|---|---|---|---|---|
| 1 | ML Intro | `#/participant-ai-lab-ml-intro` | AI Lab `ml-intro.html` | ✅ |
| 2 | Hypothesis & Model | `#/participant-ai-lab-ml-hypothesis` | AI Lab `ml-hypothesis.html` | ✅ + canvas |
| 3 | VC Dimension | `#/participant-ai-lab-ml-vc-dim` | AI Lab `ml-vc-dim.html` | ✅ + shatter canvas |
| 4 | Bias-Variance | `#/participant-ai-lab-ml-bias-variance` | AI Lab `ml-bias-variance.html` | ✅ + 16 canvases |

### CV Course
| # | Lesson | Route | Source | Status |
|---|---|---|---|---|
| 1 | CNN Intro | `#/participant-ai-lab-cv-cnn-intro` | AI Lab `cnn-intro.html` | ✅ + 23 canvases + live demo |

### Overview Pages
| # | Page | Route | Source | Status |
|---|---|---|---|---|
| — | NLP Overview | `#/participant-ai-lab-nlp` | AI Lab `nlp.html` | ✅ |
| — | ML Overview | `#/participant-ai-lab-ml` | AI Lab `machine-learning.html` | ✅ |
| — | CV Overview | `#/participant-ai-lab-cv` | AI Lab `computer-vision.html` | ✅ |

### Dashboard Fixes
| # | Fix | Status |
|---|---|---|
| — | Sidebar expand/collapse + logo size | ✅ |
| — | Course cards clickable (entire card) | ✅ |
| — | Topic cards clickable (NLP/ML/CV overview) | ✅ |
| — | All AI Lab CSS ported to HerAI pink theme | ✅ |
| — | All emoji replaced with FA icons | ✅ |

---

## Not Yet Started ❌

### CV Lessons (from CV Overview)
| Lesson | Source | Interactive? |
|---|---|---|
| CNN Why | `cnn-why.html` | Lightweight (prose) |
| CNN ReLU | `cnn-relu.html` | Math viz |
| CNN FC Layers | `cnn-fc.html` | Softmax demo |
| CNN Hands-on | `cnn-hands.html` | Interactive playground |
| CNN Architecture | `cnn-arch.html` | Architecture viz |
| Filtering Kernels | `filtering-kernels.html` | **Canvas (47K JS)** |
| Morphological Transforms | `morphological-transforms.html` | **Canvas (52K JS)** |
| Image Processing | `image-processing-opencv.html` | **Canvas (38K JS)** |
| Pixel Anatomy | `pixel-anatomy.html` | Image zoom analyzer |

### Other Courses (overview pages exist but no lessons)
| Course | Source | Status |
|---|---|---|
| Generative AI | `generative-ai.html` | No lessons ported |
| Deep Learning | No AI Lab overview | Need to create |
| Math for AI | No AI Lab overview | Need to create |

---

## Key Files

| File | Role |
|---|---|
| `AI_LAB_INTEGRATION_GUIDE.md` | **READ FIRST** — Step-by-step porting guide |
| `QUICK_START_NEW_AI.md` | **1-page quick start** for new AI |
| `pages/frontend/fellow-dashboard/ai-lab/` | All overview pages |
| `pages/frontend/fellow-dashboard/ai-lab/lessons/` | All lesson HTML files |
| `js/frontend/fellow-dashboard/ai-lab/` | All lesson JS files |
| `css/frontend/fellow-dashboard/ai-lab-lesson.css` | All AI Lab lesson CSS |
| `js/router.js` | Route definitions (3 places per route) |
| `index.html` | CSS/JS references |
| `pages/frontend/fellow-dashboard/modules.html` | Course catalog (26 cards) |
