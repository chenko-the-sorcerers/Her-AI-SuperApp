# Audit Fitur Dashboard Peserta

## Ringkasan

Fitur dashboard peserta menambahkan beranda utama untuk peserta HerAI Fellowship setelah login melalui portal `#/profile`. Fokus implementasi saat ini adalah **dashboard utama peserta**, bukan seluruh modul peserta. Desain baseline memakai pola visual `fellow-*` yang mengikuti referensi UI: sidebar kiri, header dengan search/profile, hero utama, journey progress, modul belajar, event, aktivitas komunitas, challenge, leaderboard, specialization track, dan help card.

Fitur tetap mengikuti data flow existing SPA dan memakai backend scoped action agar data peserta tidak diambil lewat `getData` umum.

## Area Terdampak

| Area | File | Dampak |
|---|---|---|
| SPA route | `js/router.js` | Tetap memakai route existing `#/profile` dan initializer `window.initParticipantProfile`. Tidak ada route baru. |
| Page peserta | `pages/frontend/profile.html` | Dashboard utama peserta diganti menjadi layout `fellow-app`. Login view tetap dipertahankan. |
| JS peserta | `js/frontend/profile.js` | Login, session, hydrate dashboard, dan renderer dashboard utama peserta. |
| CSS peserta | `css/frontend/profile.css` | Style dashboard utama memakai namespace `fellow-*` dan body state `participant-dashboard-open`. |
| Asset UI | `assets/persona-her-ai.png`, `assets/logo-her-ai-reference.png` | Asset diambil dari folder `References` untuk mengikuti referensi desain. |
| GAS backend | `gas/Code.gs` | Menambah action `getParticipantDashboard` dengan validasi `nik + password`. Tidak mengubah schema. |
| Local fallback | `server.js` | Menambah fallback `getParticipantDashboard` agar development lokal konsisten dengan GAS. |
| Go backend | `signaling/main.go` | Tidak terdampak. Go tetap hanya relevan untuk static gateway, GAS proxy, dan meeting/signaling. |

## Data Flow Existing

```text
Browser
  -> index.html
  -> js/router.js
  -> pages/frontend/profile.html
  -> js/frontend/profile.js
  -> /__gas
  -> server.js local fallback atau GAS proxy
  -> gas/Code.gs
  -> Google Sheets
```

Alur login dan dashboard:

1. User membuka `#/profile`.
2. Router memuat `pages/frontend/profile.html`.
3. `window.initParticipantProfile()` berjalan dari `js/frontend/profile.js`.
4. Peserta login memakai NIK dan password.
5. Frontend memanggil action `participantLogin`.
6. Setelah login sukses, frontend memanggil `getParticipantDashboard`.
7. Backend memvalidasi ulang `nik + password`.
8. Backend mengembalikan profil peserta tanpa `participant_password` dan data dashboard yang sudah di-scope.
9. Frontend merender dashboard utama `fellow-app`.

Catatan audit penting: dashboard peserta **tidak lagi hydrate dari `getData`**, karena `getData` mengembalikan data semua peserta dan terlalu luas untuk konteks peserta.

## Placement Logic

| Logic | Lokasi | Alasan |
|---|---|---|
| Render dashboard utama, navigasi visual, kartu modul/event/leaderboard dummy | Frontend `profile.js` + `profile.css` | UI state dan presentation logic aman di client. |
| Session sementara peserta | `sessionStorage` | Dipakai untuk UX reload halaman, bukan sumber otorisasi final. |
| Validasi login dashboard | GAS / fallback server | Logic sensitif wajib backend; frontend tidak dipercaya. |
| Filter data peserta berdasarkan NIK/password | GAS `getParticipantDashboard` | Mencegah exposure data peserta lain. |
| Local development data | `server.js` fallback | Menyamakan kontrak API lokal dengan GAS. |
| Meeting/realtime | Go backend | Tidak dipakai untuk dashboard utama saat ini. |
| Worker Python | Tidak dipakai | Belum ada workload batch/AI berat di dashboard utama. |

## Perubahan Database/API

### Database

Tidak ada perubahan schema database.

Sheet existing yang dibaca:

| Sheet | Kebutuhan |
|---|---|
| `peserta_tahap_1` | Profil peserta, stage, status seleksi. |
| `Assets` | Materi/event yang visible untuk peserta. |
| `FinalProjects` | Project terkait peserta jika data tersedia. |
| `Certificates` | Status sertifikat peserta jika data tersedia. |
| `CompetencySessions` | Status tes kompetensi peserta. |
| `ReTestSessions` | Status retest peserta. |

Aturan tetap berlaku: jika nanti perlu menambah sheet/kolom untuk task, points, leaderboard, chatroom, atau mentoring real, schema `SCHEMA` di `gas/Code.gs` wajib diperbarui bersamaan.

### API Baru

Action:

```json
{
  "action": "getParticipantDashboard",
  "nik": "3276010101010001",
  "password": "secret"
}
```

Response sukses:

```json
{
  "status": "success",
  "profile": {},
  "dashboard": {
    "assets": [],
    "projects": [],
    "certificates": [],
    "competencySessions": [],
    "retestSessions": []
  }
}
```

Response error:

```json
{
  "status": "error",
  "message": "Session tidak valid. Silakan login ulang."
}
```

Security notes:

- `participant_password` dihapus dari response.
- NIK tetap menjadi anchor identity peserta.
- Secret tidak disimpan di JS source.
- Password saat ini masih mengikuti pola existing project; hardening hash password dapat dijadikan task terpisah.

## Test Plan

### Static/Syntax Checks

```bash
node --check js/frontend/profile.js
node --check server.js
Get-Content -Path gas/Code.gs | node --check
```

### API Smoke Test

Test login peserta demo:

```json
{
  "action": "participantLogin",
  "nik": "3276010101010001",
  "password": "herai2026"
}
```

Test dashboard scoped:

```json
{
  "action": "getParticipantDashboard",
  "nik": "3276010101010001",
  "password": "herai2026"
}
```

Expected:

- `status: success`
- `profile.nama_lengkap` tersedia
- `dashboard.assets` tersedia
- response tidak mengandung `participant_password`

Negative test:

```json
{
  "action": "getParticipantDashboard",
  "nik": "3276010101010001",
  "password": "wrongpass"
}
```

Expected:

- `status: error`
- message aman ditampilkan ke user

### UI Smoke Test

Route:

```text
http://127.0.0.1:3000/#/profile
```

Checklist:

- Login form tampil sebelum peserta login.
- Login demo `3276010101010001 / herai2026` berhasil.
- Navbar/footer publik hilang setelah dashboard peserta terbuka.
- Dashboard utama memakai layout `fellow-app`.
- Sidebar kiri, hero, journey, modul, event, komunitas, challenge, leaderboard, track, dan help card tampil.
- Asset persona dan logo tampil dari folder `assets`.
- Tidak ada error console fatal.
- Mobile layout tetap tidak overlap.

## Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Dashboard peserta menarik data semua peserta | Kebocoran data peserta lain | Gunakan `getParticipantDashboard`, bukan `getData`. |
| Validasi hanya frontend | User bisa bypass session | Backend memvalidasi ulang `nik + password`. |
| Password peserta masih plain mengikuti existing schema | Risiko keamanan kredensial | Jangan tampilkan password di response; rencanakan hardening hash password sebagai task terpisah. |
| CSS lama profile bercampur dengan dashboard baru | UI jauh dari referensi atau overlap | Dashboard utama memakai namespace `fellow-*` dan body class `participant-dashboard-open`. |
| Navbar/footer publik muncul di dashboard | Dashboard terasa seperti halaman publik | `profile.js` menyembunyikan public chrome setelah login dan mengembalikannya saat logout/auth view. |
| Local fallback beda dari GAS | Bug baru hanya muncul saat deploy | `server.js` memiliki action `getParticipantDashboard` dengan kontrak sama. |
| Data real untuk leaderboard/community belum ada | Konten masih statis | Untuk fase dashboard utama, data visual boleh fallback; fase berikutnya perlu API/sheet khusus points, activity, dan chatroom. |
| Perubahan schema tanpa update GAS | Data tidak sinkron | Tidak ada schema baru saat ini; perubahan masa depan wajib update `SCHEMA`. |

## Rencana Lanjutan Kecil dan Aman

1. Finalisasi dashboard utama visual sampai match referensi.
2. Tambahkan halaman/section detail modul setelah beranda stabil.
3. Buat API real untuk task peserta jika kebutuhan sudah fixed.
4. Buat sheet/API leaderboard points jika sistem poin akan dipakai production.
5. Buat sheet/API activity/community jika aktivitas tidak lagi dummy.
6. Hardening auth peserta: hash password dan token session backend.
7. Tambahkan visual regression checklist untuk desktop dan mobile.

## Status Sign-Off Audit

- Area terdampak sudah dipetakan.
- Data flow existing sudah dipahami.
- Logic sensitif ditempatkan di backend.
- Tidak ada perubahan schema database.
- API baru sudah memiliki fallback lokal.
- Risiko regresi utama sudah dicatat.
- Desain dashboard utama `fellow-*` menjadi baseline yang perlu dipertahankan untuk iterasi berikutnya.
