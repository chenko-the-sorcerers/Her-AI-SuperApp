# HerAI Fellowship — Developer Handover & Roadmap

> **Status Terbaru (Updated: Juli 2026)**
> Dokumen ini memuat catatan progres pengembangan, perbaikan bug, dan peta jalan (roadmap) fitur untuk dashboard HerAI SuperApp. Selalu perbarui dokumen ini setelah menyelesaikan fitur mayor.

---

## 🚀 Progres Saat Ini (What's Done)

### 1. Modul 1: Pengantar AI (AI Fundamentals) - SELESAI
- **Materi & Persona**: Topik 1 hingga 6 telah dirombak total menggunakan bahasa "HerAI Buddy" (santai, suportif, "tech bestie"). 
- **Visualisasi**: 
  - Penambahan visual block gradient pink (Box Header Modul).
  - Grid card interaktif untuk jenis-jenis AI (ANI, AGI, ASI) dan Komponen Utama (Data, Algoritma, Komputasi).
  - Badge penghargaan di akhir materi.
- **Tracking & Meta**:
  - Mengubah meta tracking hero section menjadi `Modul 1 dari 6` (awalnya menggunakan penamaan "Topik").
  - Menyesuaikan *progress list* sidebar menjadi "1 dari 6 materi selesai".
  - Mengubah seluruh `h2` Topik menjadi standar pink box design (sama seperti Modul 2).
- **Bug Fix**:
  - Memperbaiki bug syntax error (`content: \`` duplikat) di `js/frontend/fellow-dashboard/settings.js` yang menyebabkan halaman Modul 1 kosong/blank.
  - Memperbaiki isu *double button pagination* dan breadcrumb panah kecil yang tidak konsisten ukurannya.

### 2. Modul 3: Konsep AI Modern - PENDING
- Halaman belum selesai (konten belum ada).
- Telah diatur *safe routing* via `js/router.js` agar halaman `#/participant-ai-modern`, kuis, latihan, dan diskusi diarahkan secara paksa ke halaman `under-development.html` (mencegah blank/error 404).

---

## 🗺️ Roadmap & Next Steps (What's Next)

### 1. Modul 2: Pemrograman Python untuk AI
- **Detailing Materi**: Materi Python yang ada saat ini perlu di-enrich dan didetailkan. Terapkan pola yang sama dengan Modul 1 (gunakan visualisasi interaktif, grid, persona HerAI Buddy).
- **Playground Latihan**: Fokus pada *interactive coding* (Pyodide) jika diperlukan, atau perjelas teori dengan callout box.

### 2. Pengembangan Modul 3: Konsep AI Modern
- Menyusun materi untuk AI Modern (Gen AI, Transformers, dll).
- Melepas *redirect* `under-development.html` di `router.js` apabila konten sudah siap tayang.

### 3. Integrasi Backend (Golang/GAS)
- Autentikasi dan pendaftaran belum sepenuhnya tervalidasi secara *server-side*.
- **Messaging (Go)**: Folder `messaging/` masih kosong, prioritas berikutnya adalah membangun modul chat/room untuk komunitas dan mentor.

---

## 📝 Catatan Penting untuk AI / Developer Selanjutnya
1. **Aturan Commit**: Selalu lakukan `git commit` di lokal (tetapi JANGAN di-`push`) setelah berhasil memperbaiki bug UI/UX atau menyelesaikan satu blok fitur.
2. **Aturan CSS/UI**: HARUS mematuhi panduan `GEMINI.md` dan `AGENTS.md` (border-radius tidak boleh `0`, warna teks jangan terlalu terang, gunakan *pink accent* dengan opacity yang tepat).
3. **Penyebutan Topik vs Modul**: Jangan gunakan istilah "Modul" untuk chapter/bagian kecil dalam materi. Gunakan istilah "Topik" (Contoh: "Topik 1: Sejarah AI"). Istilah "Modul" hanya untuk kategori utama ("Modul 1: Pengantar AI").
