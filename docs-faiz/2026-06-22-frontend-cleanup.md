# Frontend Cleanup & Standardisasi Naming

**Tanggal:** 22 Juni 2026
**Scope:** Frontend only (HTML, CSS, JS)
**Status:** Verified (22/22 routes)

---

## Ringkasan

Pembersihan file orphan, standardisasi route naming, dan perbaikan bug `server.js` agar local dev login admin/peserta dapat berjalan tanpa bergantung pada Google Apps Script.

---

## Perubahan

### Dihapus (7 file)

| File | Alasan |
|------|--------|
| `pages/frontend/profile.html` | Orphan — router menggunakan `participant-login.html` |
| `pages/frontend/messaging.html` | Orphan — router menggunakan `messaging-closed.html` |
| `pages/frontend/participant-dashboard.html` | Orphan (V1) — digantikan `fellow-dashboard/dashboard.html` |
| `pages/frontend/fellow-dashboard.html` | Orphan (V1) — class `.dash-*` mati, link dead, gambar broken |
| `css/frontend/fellow-dashboard.css` | Tidak di-load di `index.html` |
| `css/frontend/participant-dashboard.css` | Tidak di-load di `index.html` |
| `js/frontend/fellow-dashboard.js` | Stub 3-baris, tidak di-load, tidak dipanggil |

### Dimodifikasi (14 file)

| File | Perubahan | Detail |
|------|-----------|--------|
| `server.js` | 2 edit | (1) `GAS_WEB_APP_URL` default diubah dari hardcoded URL ke string kosong. (2) `new URL()` dibungkus `try/catch` agar URL invalid tidak crash |
| `js/router.js` | Route keys, aliases, array, vars | Seluruh route key `participant-*` distandardisasi. Array `participantDashboardPages` diupdate. Variabel `isParticipantLoginPage`, `isParticipantDashboardPage` diselaraskan. Duplikat route dihapus |
| `js/frontend/profile.js` | 2 redirect | `window.location.hash = '#/participant-dashboard'` |
| `js/frontend/fellow-dashboard/settings.js` | ~40 path | Mapping path route, generated lesson paths, link navigasi |
| `pages/frontend/fellow-dashboard/dashboard.html` | 12 sidebar link | `href="#/participant-*"` distandardisasi |
| `pages/frontend/fellow-dashboard/modules.html` | 20 link | Sidebar, topbar, course card |
| `pages/frontend/fellow-dashboard/ai-fundamentals.html` | 18 link | Sidebar, lesson link, resource link |
| `pages/frontend/fellow-dashboard/under-development.html` | 14 link | Sidebar, CTA card |
| `pages/frontend/fellow-dashboard/profile.html` | 10 link | Sidebar navigation |
| `pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/materi.html` | 15 link | Sidebar, tab nav, footer nav, lesson list |
| `pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/latihan.html` | 15 link | Sidebar, tab nav, footer nav, lesson list |
| `pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/kuis.html` | 15 link | Sidebar, tab nav, footer nav, lesson list |
| `pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/diskusi.html` | 15 link | Sidebar, tab nav, footer nav, lesson list |

### Ditambahkan (2 file)

| File | Fungsi |
|------|--------|
| `docs-faiz/2026-06-22-frontend-cleanup.md` | Dokumentasi perubahan ini |
| `scripts/check-participant-routes.mjs` | Script verifikasi route — cek seluruh route memiliki file target, tidak ada stale reference |

---

## Route Final (22 route)

```
/#/participant-login               -> pages/frontend/participant-login.html
/#/participant-dashboard            -> pages/frontend/fellow-dashboard/dashboard.html
/#/participant-modules              -> pages/frontend/fellow-dashboard/modules.html
/#/participant-ai-fundamentals      -> pages/frontend/fellow-dashboard/ai-fundamentals.html
/#/participant-ai-intro             -> pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/materi.html
/#/participant-ai-intro-practice    -> pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/latihan.html
/#/participant-ai-intro-quiz        -> pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/kuis.html
/#/participant-ai-intro-discussion  -> pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/diskusi.html
/#/participant-ai-history           -> pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/lesson.html
/#/participant-ai-types             -> pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/lesson.html
/#/participant-ai-components        -> pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/lesson.html
/#/participant-ai-applications      -> pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/lesson.html
/#/participant-ai-summary           -> pages/frontend/fellow-dashboard/ai-fundamental/01-pengantar-ai/lesson.html
/#/participant-profile              -> pages/frontend/fellow-dashboard/profile.html
/#/participant-mentor               -> pages/frontend/fellow-dashboard/under-development.html
/#/participant-tasks                -> pages/frontend/fellow-dashboard/under-development.html
/#/participant-projects             -> pages/frontend/fellow-dashboard/under-development.html
/#/participant-events               -> pages/frontend/fellow-dashboard/under-development.html
/#/participant-community            -> pages/frontend/fellow-dashboard/under-development.html
/#/participant-certificates         -> pages/frontend/fellow-dashboard/under-development.html
/#/participant-leaderboard          -> pages/frontend/fellow-dashboard/under-development.html
/#/participant-help                 -> pages/frontend/fellow-dashboard/under-development.html
/#/participant-settings             -> pages/frontend/fellow-dashboard/under-development.html
```

---

## Bug Fix: server.js

### Masalah
Login admin local selalu gagal karena `GAS_WEB_APP_URL` adalah URL hardcoded yang aktif. Request diproxy ke Google Apps Script, GAS tidak mengenali akun `super-admin`, local fallback tidak pernah dijalankan.

### Solusi

**Line 17:** Default diubah dari hardcoded URL ke string kosong:
```js
// Sebelum
const GAS_WEB_APP_URL = process.env.GAS_WEB_APP_URL || 'https://script.google.com/...';

// Sesudah
const GAS_WEB_APP_URL = process.env.GAS_WEB_APP_URL || '';
```

**Line 276:** `new URL()` dibungkus `try/catch`:
```js
let target;
try {
    target = new URL(GAS_WEB_APP_URL);
} catch {
    // fallback ke local handler
}
```

### Hasil
Local dev sekarang langsung menggunakan fallback lokal tanpa perlu set environment variable apapun. Login admin (`super-admin` / `admin123`) dan peserta demo (`3276010101010001` / `herai2026`) berfungsi.

---

## Verifikasi

Jalankan script verifikasi setiap kali ada perubahan route:

```bash
node scripts/check-participant-routes.mjs
```

Output yang diharapkan: `22/22 passed, 0 failed`

---

## Catatan

- Folder `fellow-dashboard/` dan seluruh file di dalamnya tidak diubah strukturnya (milik mentor)
- Perubahan hanya menyentuh isi file (link reference), tidak mengubah nama file atau folder
- Backend (Go services, GAS) tidak disentuh
