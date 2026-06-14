# Participant Dashboard Module Handoff

Dokumen ini disiapkan agar implementasi modul dashboard peserta bisa dilanjutkan di context baru tanpa mengulang audit besar. Baseline desain yang harus dipertahankan adalah dashboard utama `fellow-*` di route `#/profile`.

## Baseline yang Harus Dipertahankan

| Item | Detail |
|---|---|
| Route | `#/profile` |
| Page | `pages/frontend/profile.html` |
| JS | `js/frontend/profile.js` |
| CSS | `css/frontend/profile.css` |
| Backend GAS | `gas/Code.gs` |
| Local fallback | `server.js` |
| Root dashboard class | `fellow-app` |
| Body state | `participant-dashboard-open` |
| Data action existing | `getParticipantDashboard` |
| Auth participant | `participantLogin`, `setParticipantPassword`, `updateParticipantProfile` |

Current dashboard utama sudah punya shell UI:

- Sidebar: `.fellow-sidebar`, `.fellow-nav`
- Header: `.fellow-header`, `.fellow-search`, `.fellow-user`
- Hero: `.fellow-hero`
- Journey: `.fellow-journey`
- Learning modules: `.fellow-learning`, `#participantModuleList`
- Events: `.fellow-events`, `#participantEventList`
- Community: `.fellow-community`, `#participantCommunityList`
- Challenge: `.fellow-challenge`
- Leaderboard: `.fellow-leaderboard`, `#participantLeaderboardList`
- Tracks: `.fellow-tracks`, `#participantTrackList`
- Help: `.fellow-help`

Notification dots/badges saat ini sengaja dimatikan sampai modul notifikasi dibuat.

## Aturan Implementasi Berikutnya

1. Pertahankan namespace CSS `fellow-*`.
2. Jangan ubah schema database tanpa update `SCHEMA` di `gas/Code.gs`.
3. Jangan pakai `getData` untuk peserta; gunakan action scoped.
4. Semua logic sensitif wajib divalidasi di GAS/backend.
5. Local fallback `server.js` harus disamakan dengan action GAS.
6. Jangan menaruh secret di JS.
7. Modul baru harus punya empty/loading/error state.
8. Gunakan renderer kecil di `profile.js` dulu; pecah file hanya jika modul besar.

## Module Backlog Siap Implementasi

### 1. Chatroom

| Kontrak | Detail |
|---|---|
| Anchor UI | `#participant-chatroom` |
| Sidebar label | Chatroom |
| Data ideal | rooms, messages, unread count |
| Suggested GAS action | `getParticipantChatrooms`, `sendParticipantMessage` |
| Suggested sheet | `ParticipantChatrooms`, `ParticipantMessages` |
| Sensitive logic | validasi NIK/session, rate limit, sanitasi pesan |
| UI target | list room, active thread, composer, empty state |

Prompt lanjutan:

```text
Implementasikan modul Chatroom peserta di dashboard fellow-*.
Gunakan route existing #/profile, jangan ubah schema tanpa update Code.gs.
Buat UI room list dan message thread, action GAS scoped, dan fallback server.js.
```

### 2. Mentor

| Kontrak | Detail |
|---|---|
| Anchor UI | `#participant-mentor` |
| Data ideal | assigned mentor, schedule, meeting link, notes |
| Suggested GAS action | `getParticipantMentor`, `requestMentorSession` |
| Suggested sheet | `MentorAssignments`, `MentorSessions` |
| Sensitive logic | peserta hanya bisa melihat mentor miliknya |
| UI target | mentor card, schedule list, CTA request session |

Prompt lanjutan:

```text
Implementasikan modul Mentor peserta untuk dashboard fellow-*.
Tampilkan mentor assigned, jadwal mentoring, meeting link, dan request session.
Validasi data di GAS berdasarkan NIK peserta.
```

### 3. Modul Belajar

| Kontrak | Detail |
|---|---|
| Existing anchor | `#participant-modules`, `#participantModuleList` |
| Data existing | `Assets` dengan type/category `kurikulum/module/modul/material` |
| Suggested GAS action | extend `getParticipantDashboard` atau `getParticipantModules` |
| Suggested sheet | `Assets`, optional `ParticipantModuleProgress` |
| Sensitive logic | progress peserta divalidasi backend |
| UI target | module cards, progress, current lesson, open material |

Prompt lanjutan:

```text
Implementasikan Modul Belajar real untuk dashboard peserta.
Pakai #participantModuleList, data dari Assets dan progress scoped per NIK.
Tambahkan GAS action/fallback jika progress belum ada.
```

### 4. Tugas

| Kontrak | Detail |
|---|---|
| Anchor UI | `#participant-tasks` |
| Data ideal | task list, deadline, status, submission URL/file |
| Suggested GAS action | `getParticipantTasks`, `submitParticipantTask` |
| Suggested sheet | `ParticipantTasks`, `ParticipantTaskSubmissions` |
| Sensitive logic | deadline/status/submission divalidasi backend |
| UI target | task cards, submit state, locked/completed states |

Prompt lanjutan:

```text
Implementasikan modul Tugas peserta di dashboard fellow-*.
Buat list tugas, deadline, status, dan submit link/file.
Validasi submit di GAS dan buat fallback server.js.
```

### 5. Proyek

| Kontrak | Detail |
|---|---|
| Anchor UI | `#participant-project` |
| Data existing | `FinalProjects` |
| Existing action | `getFinalProjects`, `submitFinalProject` |
| Suggested scoped action | `getParticipantProjects`, `submitParticipantProject` |
| Sensitive logic | peserta hanya bisa submit/update project miliknya/timnya |
| UI target | project status, team, repo/deck/demo links, submit/edit |

Prompt lanjutan:

```text
Implementasikan modul Proyek peserta.
Gunakan FinalProjects tapi buat action scoped agar peserta hanya melihat/mengubah proyek terkait.
Pertahankan UI fellow-*.
```

### 6. Events

| Kontrak | Detail |
|---|---|
| Existing anchor | `#participant-events`, `#participantEventList` |
| Data current | fallback static + Assets type event/webinar/meeting |
| Suggested GAS action | `getParticipantEvents`, `rsvpParticipantEvent` |
| Suggested sheet | `Events`, `EventAttendance` |
| Sensitive logic | RSVP/attendance backend |
| UI target | upcoming event list, join button, RSVP status |

Prompt lanjutan:

```text
Implementasikan Events real untuk dashboard peserta.
Gunakan #participantEventList, data event dari GAS, tombol RSVP/join, dan fallback lokal.
```

### 7. Komunitas

| Kontrak | Detail |
|---|---|
| Existing anchor | `#participant-community`, `#participantCommunityList` |
| Data ideal | activity feed, posts, member highlights |
| Suggested GAS action | `getParticipantCommunityFeed` |
| Suggested sheet | `CommunityActivity` |
| Sensitive logic | sanitasi konten dan akses peserta |
| UI target | feed list, filter room/topic |

Prompt lanjutan:

```text
Implementasikan Community Activity Feed real.
Ganti dummy #participantCommunityList dengan data GAS scoped.
Jangan tampilkan dot notif dulu kecuali modul notifikasi sudah dibuat.
```

### 8. Sertifikat

| Kontrak | Detail |
|---|---|
| Anchor UI | `#participant-certificate` |
| Data existing | `Certificates` |
| Suggested GAS action | `getParticipantCertificates` |
| Sensitive logic | peserta hanya bisa melihat sertifikat miliknya |
| UI target | eligibility, certificate number, download URL |

Prompt lanjutan:

```text
Implementasikan modul Sertifikat peserta.
Ambil data dari Certificates dengan filter NIK/rowId backend.
Tampilkan status eligibility dan link download jika tersedia.
```

### 9. Leaderboard

| Kontrak | Detail |
|---|---|
| Existing anchor | `#participant-leaderboard`, `#participantLeaderboardList` |
| Data current | dummy renderer |
| Suggested GAS action | `getParticipantLeaderboard` |
| Suggested sheet | `ParticipantPoints`, optional derived from tasks/events/modules |
| Sensitive logic | points dihitung backend |
| UI target | rank list, my rank, points breakdown |

Prompt lanjutan:

```text
Implementasikan Leaderboard peserta real.
Buat GAS action untuk rank dan myRank, jangan hitung poin final di frontend.
Pertahankan card #participantLeaderboardList.
```

### 10. FAQ & Bantuan

| Kontrak | Detail |
|---|---|
| Anchor UI | `#participant-help` |
| Data ideal | FAQ entries, support links |
| Suggested GAS action | optional `getParticipantHelpContent` |
| Suggested sheet | `HelpContent` atau static frontend |
| Sensitive logic | tidak sensitif kecuali ticket support |
| UI target | help card, FAQ drawer/modal, support CTA |

Prompt lanjutan:

```text
Implementasikan FAQ & Bantuan untuk dashboard peserta.
Boleh static dulu, tapi siapkan struktur agar bisa migrasi ke GAS HelpContent.
```

### 11. Pengaturan / Profile

| Kontrak | Detail |
|---|---|
| Anchor UI | `#participant-settings` |
| Existing action | `updateParticipantProfile` |
| Sensitive logic | validasi password/session backend |
| UI target | edit profile, password state, logout |

Prompt lanjutan:

```text
Implementasikan Pengaturan/Profile peserta dari dashboard fellow-*.
Gunakan updateParticipantProfile existing, validasi backend, dan jangan tampilkan password.
```

### 12. Notifications

| Kontrak | Detail |
|---|---|
| Status sekarang | Disabled visual badge/dot |
| Suggested GAS action | `getParticipantNotifications`, `markParticipantNotificationRead` |
| Suggested sheet | `ParticipantNotifications` |
| Sensitive logic | peserta hanya melihat notif miliknya |
| UI target | bell dropdown, unread count, read state |

Prompt lanjutan:

```text
Implementasikan Notifications peserta.
Aktifkan kembali badge bell dan unread count hanya setelah data GAS scoped tersedia.
Saat ini dot/badge sengaja disabled.
```

## Current API Baseline

Action:

```json
{
  "action": "getParticipantDashboard",
  "nik": "3276010101010001",
  "password": "herai2026"
}
```

Current response:

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

## Recommended Implementation Pattern

Untuk setiap modul:

1. Tambahkan container/section di `pages/frontend/profile.html` jika belum ada.
2. Tambahkan renderer kecil di `js/frontend/profile.js`.
3. Tambahkan action GAS scoped di `gas/Code.gs`.
4. Tambahkan fallback action di `server.js`.
5. Jangan ubah schema tanpa update `SCHEMA`.
6. Jalankan:

```bash
node --check js/frontend/profile.js
node --check server.js
Get-Content -Path gas/Code.gs | node --check
```

7. Smoke test:

```text
http://127.0.0.1:3000/#/profile
```

## Context Baru Quick Prompt

Gunakan prompt ini untuk lanjut di context baru:

```text
Kita lanjut dari baseline dashboard peserta HerAI di route #/profile.
Pertahankan desain fellow-* dan baca docs/participant-dashboard-module-handoff.md serta docs/participant-dashboard-feature-audit.md.
Implementasikan modul [NAMA_MODUL] dengan action GAS scoped, fallback server.js, dan UI responsive.
Jangan ubah schema tanpa update SCHEMA Code.gs, jangan pakai getData untuk peserta, dan jangan aktifkan notification dot kecuali modul Notifications.
```
