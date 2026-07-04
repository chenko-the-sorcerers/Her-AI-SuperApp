# HerAI Development Handover & Checkpoint
**Tanggal:** 4 Juli 2026

Dokumen ini ditulis sebagai pedoman *handover* untuk tim developer atau AI Agent berikutnya agar bisa langsung melanjutkan pekerjaan tanpa kehilangan konteks.

---

## 🟢 Apa Saja yang Sudah Selesai (Update Terbaru)
Kita baru saja menyelesaikan perombakan besar-besaran untuk **AI Fundamentals - Modul 2 (Pemrograman Python untuk AI)**.
- **Materi**: Dirombak menjadi 6 sub-bab interaktif.
- **Latihan (Praktik)**: Sistem latihan diubah total dari form biasa menjadi **Interactive Challenge Cards**. Kita mengintegrasikan **Pyodide** agar *fellows* bisa mengeksekusi kode Python langsung di dalam browser tanpa harus menginstall apapun.
- **Kuis**: Menambahkan fitur visual di mana jawaban benar akan ditandai dengan kotak hijau dan jawaban salah dengan kotak merah setelah di-submit.
- **Validasi JS**: Menambahkan *empty state validation* di form agar pengguna tidak bisa menyimpan jawaban yang masih kosong.
- **Bug Fixes**: Memperbaiki *bug* tata letak (grid) akibat *clash* dengan CSS global (`challenge-card`) dengan mengubah namanya menjadi `practice-card`, serta mengatasi masalah HTML *unclosed tag* (`</div>`).

## 🟡 Apa Saja yang Belum (Masih Kosong)
Kita sedang dalam tahap persiapan untuk mengerjakan **Modul 3 (Konsep AI Modern)**.
- **Status Saat Ini:** Folder `/03-konsep-ai-modern` sudah dibuat dan *routing* sudah disiapkan. Tombol "Mulai" di halaman AI Fundamentals sudah aktif.
- **Kekurangan:** File-file di dalam folder Modul 3 (seperti `materi.html`, `latihan.html`, `kuis.html`, `diskusi.html`) **MASIH KOSONG / BELUM DIBUAT**.
- Tim berikutnya harus membuat file-file ini berdasarkan draft rancangan (Kurikulum Foundation Models, Transformers, Agents, dan RAG).

---

## 📂 File yang Disentuh (Modified Files)
- `pages/frontend/fellow-dashboard/ai-fundamental/02-python-untuk-ai/materi.html` (Dirombak total)
- `pages/frontend/fellow-dashboard/ai-fundamental/02-python-untuk-ai/latihan.html` (Dirombak total + Integrasi Pyodide)
- `pages/frontend/fellow-dashboard/ai-fundamental/02-python-untuk-ai/kuis.html` (Struktur tetap, diatur untuk integrasi JS baru)
- `js/frontend/fellow-dashboard/ai-python-basic.js` (Logika eksekusi Pyodide, validasi *save*, highlight UI pada Kuis)
- `pages/frontend/fellow-dashboard/ai-fundamentals.html` (Update link href menuju Modul 3)
- `js/router.js` (Menambah path router untuk Modul 3)
- `GEMINI.md` (Menambahkan log pelajaran frontend)
- `.gitignore` (Mengecualikan folder `docs-faiz/` dari *git tracking*)

---

## 🔀 Konfigurasi Routing (Sangat Penting!)
HerAI SPA (*Single Page Application*) menggunakan sistem **Hash Routing**. Semua navigasi diatur secara terpusat di `js/router.js`.
Jika Anda membuat halaman materi baru, Anda **WAJIB**:
1. Menambahkan pemetaan URL ke file HTML di *object* `routes`:
   ```javascript
   "/participant-ai-modern": "/pages/frontend/fellow-dashboard/ai-fundamental/03-konsep-ai-modern/materi.html",
   ```
2. Mendaftarkan nama rute tersebut di dalam *array* `allowedRoutes`.
3. (Opsional) Menambahkan fungsi inisialisasi JavaScript khusus untuk halaman tersebut di *if-else router block* bagian bawah `router.js` jika halaman tersebut butuh JS unik.

---

## 💡 Saran & Aturan Main untuk Developer Selanjutnya
1. **Desain UI/UX (HerAI Pink):** Jaga konsistensi tema. Ingat, *border-radius* TIDAK BOLEH 0. Semua tombol (pills) harus melengkung (`100px`), card `14px-20px`. Warna *secondary text* jangan terlalu tipis.
2. **Jangan Halu Class CSS:** Kalau membuat kelas baru untuk komponen (misal: kotak editor), gunakan penamaan spesifik seperti `.python-ide-container`. Jangan gunakan nama generik seperti `.card` atau `.challenge-card` yang rawan menimpa CSS global lama (`dashboard.css` atau `modules.css`).
3. **Validasi Form:** Di front-end SPA, *browser default required validation* kadang lepas. Selalu buat *fallback* validasi manual di JavaScript yang memblokir *button submit* dan menampilkan pesan *error* UI (merah).
4. **Pyodide CSS:** Jika me-render elemen eksternal atau form berat, pastikan menambahkan `inline style` jika parent-nya menggunakan `display: grid` yang memaksa kolom menjadi gepeng.
5. **Rekomendasi Modul 3:** Bangun **Interactive Prompt Simulator** untuk bagian latihannya, bukan menggunakan text editor Python lagi. Fokus pada pemahaman arsitektur secara visual.
