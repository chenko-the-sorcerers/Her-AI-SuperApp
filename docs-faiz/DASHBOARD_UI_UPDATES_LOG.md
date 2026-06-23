# Log Pembaruan & Penyesuaian UI Dashboard Peserta (HerAI)

Dokumen ini berisi catatan komprehensif mengenai seluruh perombakan antarmuka (UI), responsivitas (*mobile*), dan fitur-fitur baru yang telah kita kerjakan untuk *Fellow Dashboard*.

Di setiap pembaruan, disertakan referensi **Commit Hash** serta perintah aman jika sewaktu-waktu Anda perlu membatalkan (*rollback*) perubahan tersebut.

---

## 1. Pembuatan Halaman Mentor (Baru)
- **File Terdampak:** `pages/frontend/fellow-dashboard/mentor.html`, `css/frontend/fellow-dashboard/mentor.css`, `js/router.js`, `index.html`
- **Detail Perubahan:** Membangun halaman jejaring mentor dari awal (tanpa referensi gambar). Menambahkan Hero Section untuk *Assigned Mentor*, direktori pakar dengan *Grid Layout* dan *Badge* keahlian, serta *sidebar widget* untuk jadwal bimbingan dan tips *mentoring*. Semua dioptimalkan untuk perangkat seluler.
- **Commit:** `0f489a7 feat(frontend): implement responsive mentor networking page`
- **Cara Rollback:** 
  - Batalkan khusus komit ini: `git revert 0f489a7`

## 2. Perbaikan Keselarasan (Alignment) Ikon Notifikasi di Topbar
- **File Terdampak:** `pages/frontend/fellow-dashboard/help.html`, `pages/frontend/fellow-dashboard/settings.html`
- **Detail Perubahan:** Menambahkan elemen `<div class="topbar-spacer"></div>` tak terlihat ke dalam `.fellow-actions`. Hal ini berfungsi untuk menggantikan kolom *Search Bar* yang dihapus, sehingga tombol notifikasi dan profil pengguna tetap kokoh di sisi paling kanan, mencegah tombol notifikasi tergelincir ke tengah layar.
- **Commit:** `819cc9d fix(frontend): add spacer to topbar to fix notification icon alignment`
- **Cara Rollback:** 
  - Batalkan khusus komit ini: `git revert 819cc9d`

## 3. Perbaikan Topbar Menabrak Konten (Bug Scroll)
- **File Terdampak:** `css/frontend/fellow-dashboard/dashboard.css`
- **Detail Perubahan:** Mencabut sifat `position: sticky; top: 24px;` pada class `.fellow-topbar`. Karena *topbar* bersifat transparan (tanpa *background solid*), pengaturan *sticky* membuat *topbar* terus melayang dan menabrak teks konten di bawahnya ketika layar digulir (khususnya saat melihat *dashboard* versi HP). Diubah menjadi `position: relative;` sehingga dapat tergulir wajar.
- **Commit:** `b5afc08 fix(frontend): remove sticky topbar to prevent content collision on scroll`
- **Cara Rollback:** 
  - Batalkan khusus komit ini: `git revert b5afc08`

## 4. Perbaikan Tata Letak Halaman FAQ & Bantuan
- **File Terdampak:** `pages/frontend/fellow-dashboard/help.html`, `css/frontend/fellow-dashboard/help.css`, `index.html`
- **Detail Perubahan:** Awalnya FAQ diubah menjadi format *Accordion*. Pada komit selanjutnya, dikembalikan 100% sama persis menjadi *Grid Cards* seperti file aslinya (`faq.html`), menampilkan 15 kartu pertanyaan lengkap dengan nomor bayangan besar (01, 02) serta efek melayang saat *hover*.
- **Commit:** 
  - `d90bf5f fix(frontend): revert FAQ accordion to original grid cards layout`
  - `18a6812 feat(frontend): implement responsive help and settings pages`
- **Cara Rollback (Kembali sebelum halaman Help & Settings dibuat):** 
  - `git reset --hard 6ec4b20`

## 5. Implementasi Halaman Leaderboard
- **File Terdampak:** `pages/frontend/fellow-dashboard/leaderboard.html`, `css/frontend/fellow-dashboard/leaderboard.css`, `js/router.js`, `index.html`
- **Detail Perubahan:** Membuat tabel *leaderboard* dengan desain piala murni berbasis elemen dan CSS (bukan gambar), *responsive table overflow*, sistem peringkat dengan lencana medali untuk top 3, dan panel *Pencapaian Terbaru*. Dibuat persis dengan referensi `10leaderboard.png`.
- **Commit:** `6ec4b20 feat(frontend): implement leaderboard page with CSS trophy and responsive grid`
- **Cara Rollback:** 
  - Batalkan khusus komit ini: `git revert 6ec4b20`

## 6. Implementasi Halaman Sertifikat
- **File Terdampak:** `pages/frontend/fellow-dashboard/certificates.html`, `css/frontend/fellow-dashboard/certificates.css`, `js/router.js`, `index.html`
- **Detail Perubahan:** Membuat galeri sertifikat dengan membuat *mockup template* sertifikat *CSS-only* berhias pola polkadot dan garis miring *(stripes)*. Responsif dengan `min-width: 0;` menghindari meluber di layar iPhone 14.
- **Commit:** `f6704e1 feat(frontend): implement certificates page with CSS-only certificate mockups`
- **Cara Rollback:** 
  - Batalkan khusus komit ini: `git revert f6704e1`

## 7. Responsivitas Halaman Komunitas & Event
- **File Terdampak:** File di folder `community`, `events`, `js/router.js`
- **Detail Perubahan:** Membuat halaman *Community* (grup diskusi) dan *Events*. Menyelesaikan bug tulisan tombol tidak ke tengah di *Community* dan mendaftarkan rute acara (*events*) yang tertinggal. Di *Events*, tata letak daftar dan kalender dibuat agar ramah layar sentuh (*touch friendly*) di *mobile*.
- **Commit:** 
  - `7f9600b fix(frontend): center align button text in community group cards`
  - `a9bf69b fix(frontend): update router.js for events page routing`
- **Cara Rollback:** 
  - Batalkan dua komit ini: `git revert 7f9600b` lalu `git revert a9bf69b`

## 8. Penyelesaian Isu Mendasar "CSS Grid Min-Width" (Mencegah Layar Bergoyang)
- **File Terdampak:** `css/frontend/fellow-dashboard/dashboard.css`
- **Detail Perubahan:** Penemuan bug kritis pada *CSS Grid* di *dashboard container*. Tanpa `min-width: 0;`, tabel panjang di dalam kontainer akan memaksa memanjangkan ukuran *parent grid* sehingga menimbulkan *horizontal scroll* nakal dan merusak lebar layar ponsel.
- **Commit:** `efedbd1 fix(frontend): grid min-width bug causing horizontal overflow on mobile iPhone 14`
- **Cara Rollback:** 
  - Batalkan khusus komit ini: `git revert efedbd1`

## 9. Pembuatan Modul, Tugas, Proyek, & Chatroom UI
- **Detail Perubahan:** Mencakup desain komprehensif untuk panel obrolan, tabel status *submission* tugas dan proyek, modifikasi navigasi global di *dashboard*.
- **Commit:** 
  - `1d886e7 fix(frontend): mobile responsiveness for tasks and projects`
  - `1992b0c feat: complete chatroom UI and fix global sidebar layout bug`
  - `982ccca UI: Improve participant dashboard mobile responsiveness and fix topbar overlapping`

---

### Panduan Darurat: Cara "Reset" Keseluruhan ke Titik Awal
Jika pada suatu titik Anda merasa proyek ini sudah berantakan dan ingin kembali ke titik sebelum saya (*AI*) mengerjakan modul-modul ini, Anda bisa melakukan pengecekan `git log`, cari *Hash* dari titik awal, dan lakukan *Hard Reset*.

**Contoh Perintah Reset Total:**
```bash
# Hati-hati, perintah ini akan menghapus semua perubahan terbaru secara permanen
git reset --hard 46bb339
```
