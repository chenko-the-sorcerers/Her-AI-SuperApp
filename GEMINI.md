# HerAI Fellowship — Always-On Context untuk Gemini

> File ini otomatis dibaca Gemini setiap kali membuka repo. Jangan dihapus.
> Mengandung aturan besi, konteks arsitektur, dan zona bahaya.

---

## ⚠️ ATURAN BESI (IMMUTABLE — JANGAN PERNAH DILANGGAR)

### 1. Ini PRODUCTION-LEVEL TEAM PROJECT — bukan prototype atau project solo
Setiap perubahan bisa berdampak pada:
- **30-50+ user meeting real-time** (WebRTC / LiveKit)
- **Ratusan data peserta seleksi** (Google Sheets via GAS)
- **Dashboard admin live untuk panitia**
- **Deploy production di Render** (`render.yaml`)

### 2. JANGAN PERNAH mengubah kode sebelum melakukan ini:
- ✅ Baca file yang akan diubah
- ✅ Jelaskan dampak perubahan ke user
- ✅ Konfirmasi scope (file apa aja yang disentuh)
- ✅ Dapat persetujuan eksplisit dari user

### 3. Scope seminimal mungkin
- Fokus hanya pada file yang relevan dengan task
- Jangan refactor sambil lalu
- Jangan hapus function/route yang masih dipakai
- Backward compatible — jangan break existing flow

### 4. Security absolut
- **JANGAN taruh secret/API key/password di JavaScript frontend**
- **JANGAN commit `.env` atau credential ke git**
- Semua logic sensitif harus divalidasi backend (Go/GAS), bukan cuma di JS
- Auth/RBAC harus di-enforce di backend, bukan cuma UI hiding

### 5. Kalau ragu, BERTANYA
- JANGAN menebak
- JANGAN berasumsi
- Lebih baik lambat dan benar daripada cepat dan merusak

---

## ARSITEKTUR — 12 Poin Kunci

1. **Frontend:** Vanilla JS SPA — `index.html` + `js/router.js` (hash routing `#/route`)
2. **Halaman:** ~16 publik (`pages/frontend/`) + ~16 dashboard admin (`pages/dashboard/`)
3. **Backend 1 — Node:** `server.js` (dev server, proxy GAS via `/__gas`, fallback data)
4. **Backend 2 — GAS:** `gas/Code.gs` (Google Apps Script + Google Sheets — database utama, 13 sheet, 22 action)
5. **Backend 3 — Go Signaling:** `signaling/main.go` (WebRTC signaling, LiveKit token, meeting)
6. **Backend 4 — Go Messaging:** `messaging/` — **BELUM DIBANGUN** (chat, WebSocket, friends, rooms)
7. **API Pattern:** Semua API pakai `POST JSON` → `{action: "namaAction", ...payload}` → response `{status, data}`
8. **Auth:** Admin di GAS (`dashboard_admin` sheet), peserta by NIK, messaging by Go
9. **Meeting:** WebRTC P2P + LiveKit SFU (optional, aktif kalau 3 env LiveKit diset)
10. **Deploy:** Render — `render.yaml` blueprint untuk `herai-signaling` dan `herai-messaging`
11. **9 Environment Variables** — 7 di render.yaml, 2 dev-only (`PORT`, `HOST`)
12. **Arsitektur target:** PostgreSQL + Redis + S3 — GAS jadi reporting/export aja

---

## ZONA BAHAYA — File yang JANGAN disentuh tanpa izin eksplisit

### 🔴 KRITIS (bisa bikin app down total)
| File | Kenapa |
|---|---|
| `gas/Code.gs` | Database schema + semua logic backend. Salah edit = data corrupt. |
| `render.yaml` | Production deploy config. Salah edit = service down. |
| `signaling/main.go` | WebRTC signaling + LiveKit. Salah edit = meeting rusak. |

### 🟠 TINGGI (berdampak luas)
| File | Kenapa |
|---|---|
| `js/router.js` | Otak SPA. Salah route = halaman blank/404. |
| `server.js` | Dev server + GAS proxy. |
| `js/frontend/meeting.js` | WebRTC client — realtime, kompleks. |
| `js/dashboard/skoring.js` | Logic seleksi peserta. |
| `js/dashboard/ai-prescreening.js` | AI screening workflow. |

### 🟡 SEDANG (hati-hati)
| File | Kenapa |
|---|---|
| `js/dashboard/*.js` (lainnya) | Logic dashboard admin. |
| `js/frontend/*.js` (lainnya) | Logic halaman publik. |
| `index.html` | Entry point SPA. |

### 🟢 RENDAH (aman untuk pemula)
| File | Kenapa |
|---|---|
| `css/*.css` | Styling, layout. |
| `components/*.html` | Shared components. |
| `pages/**/*.html` | Tampilan (jangan ubah ID/class selector). |
| `docs-faiz/*.md` | Dokumentasi — read-only. |

---

## STATUS MODUL — Apa yang sudah ada vs belum

### ✅ SUDAH PRODUCTION-ACTIVE
- Pendaftaran peserta + database
- Login admin + dashboard
- AI Pre-Screening + skoring
- Stage control acara
- Pengumuman (tahap 1, final)
- Audit trail admin
- Anti-duplicate + anti-fraud foundation
- Global settings
- Meeting (WebRTC P2P + LiveKit optional)

### ⚠️ FOUNDATION (ada tapi belum hardening)
- Competency test + Re-Test (perlu server-side timer & scoring)
- RBAC (baru UI hiding, belum enforce backend)
- Data visualization (perlu validasi sumber & filter)
- Projects, Bootcamp, Certificate (foundation)

### ❌ BELUM ADA
- **Go messaging backend** (`messaging/` directory kosong)
- Password hashing (masih plain text di beberapa modul)
- PostgreSQL migration
- Object storage untuk attachment
- E2EE production-ready
- Observability (logs, metrics, alerting)
- CI/CD + automated tests

---

## DEFINITION OF DONE — Setiap fitur baru harus memenuhi:

1. UI responsive desktop/mobile
2. Logic sensitif TIDAK hanya di JS (ada validasi backend)
3. Backend memvalidasi payload
4. Error state jelas untuk user
5. Loading state tidak mengunci UI
6. Ada audit trail untuk perubahan data penting
7. Data tersimpan dan bisa dibaca ulang
8. Route aman terhadap refresh
9. Tidak ada secret di frontend
10. Minimal ada smoke test manual yang terdokumentasi

---

## SEBELUM MENGERJAKAN TASK

### Checklist Wajib:
- [ ] Baca dokumentasi yang relevan dari `docs/` atau `docs-faiz/`
- [ ] Tentukan scope (file apa aja yang disentuh)
- [ ] Tentukan level risiko (RENDAH / SEDANG / TINGGI / KRITIS)
- [ ] Jelaskan dampak perubahan ke user
- [ ] Konfirmasi: "Lanjut atau tidak?"

### JANGAN:
- ❌ Mengubah `gas/Code.gs` tanpa koordinasi
- ❌ Mengubah `render.yaml` tanpa koordinasi
- ❌ Menaruh secret di JS
- ❌ Menghapus function/route yang masih dipakai
- ❌ Commit tanpa review

---

## DOKUMEN PENTING

| Dokumen | Lokasi | Fungsi |
|---|---|---|
| Maintenance Docs | `docs/HerAI_Maintenance_Documentation.md` | Dokumentasi pemeliharaan lengkap |
| Scoring Guide | `docs/admin-selection-scoring-guide.md` | Panduan scoring admin |
| Handover & Roadmap | `docs-faiz/DEVELOPER_HANDOVER_AND_ROADMAP.md` | Status + roadmap dari mentor |
| Prompt Templates | `docs-faiz/HerAI_Developer_Prompt_Templates.md` | 15 template prompt berbagai task |
| Getting Started | `docs-faiz/GETTING_STARTED.md` | Panduan beginner |
| Safe Tasks | `docs-faiz/SAFE_TASKS.md` | Klasifikasi task aman vs berbahaya |
| Onboarding Output | `docs-faiz/ONBOARDING_OUTPUT.md` | Ringkasan arsitektur |
| Full Audit Prompt | `docs-faiz/AI_AGENT_PROMPT.md` | Prompt audit lengkap untuk AI baru |
| GAS Backend | `gas/Code.gs` | Database schema + semua action |
| SPA Router | `js/router.js` | Hash routing + semua route |
| Dev Server | `server.js` | Node proxy + fallback |
| Signaling | `signaling/main.go` | Go WebRTC signaling |
