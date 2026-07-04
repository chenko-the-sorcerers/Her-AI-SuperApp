# Roadmap & Kurikulum Python untuk AI (HerAI)

Dokumen ini merangkum rencana lengkap dan strategi pedagogi kurikulum "Python untuk AI" yang dirancang khusus untuk _fellows_ perempuan di HerAI. 

---

## 🎯 Modul 1: Fondasi Dasar (Sintaks & Tipe Data)
**Status:** ✅ Selesai (File: `01-memulai-python.html`)

**Tujuan Pembelajaran:** 
Memahami alasan Python menjadi bahasa utama AI, menyiapkan environment, dan menulis kode pertama.

**Daftar Chapter (SUDAH LENGKAP):**
- **Chapter 1: Apa itu Python?** (Sejarah, Filosofi, Use case di industri AI)
- **Chapter 2: Instalasi & Environment** (Virtual environment, pip)
- **Chapter 3: Program Pertama & Sintaks Dasar** (`print`, komentar `#`, indentasi)
- **Chapter 4: Variabel & Tipe Data Dasar** (String, Integer, Float, Boolean, beserta interactive playground)

---

## 🎯 Modul 2: Koleksi & Alur Logika (Struktur Data & Control Flow)
**Status:** ✅ Selesai (File: `02-materi.html`)

**Tujuan Pembelajaran:** 
Mampu menyimpan ribuan data menggunakan Struktur Data dan mengatur jalannya program menggunakan Control Flow.

**Daftar Chapter (SUDAH LENGKAP):**
- **Chapter 1: Menyimpan Jutaan Data (Struktur Data)**
  - Pembahasan detail List, Tuple, Dictionary, dan Set
  - Analogi: Rak Kosmetik Acrylic
  - Interactive Playground: `struktur_data.py`
- **Chapter 2: Pengendali Alur (Logika AI)**
  - Pembahasan Percabangan (if, elif, else) dan Perulangan (for, while)
  - Analogi: Kurator Fashion Pribadi & Skincare Routine 10-step
  - Interactive Playground: `seleksi.py`

---

## 🎯 Modul 3: Modularitas & Efisiensi (Function & Generator)
**Status:** ✅ Selesai (File: `03-materi.html`)

**Tujuan Pembelajaran:** 
Mampu membungkus kode menjadi blok yang dapat dipakai ulang (reusable) agar terhindar dari kode yang berantakan (spaghetti code).

**Daftar Chapter (SUDAH LENGKAP):**
- **Chapter 1: Resep Dapur AI (Fungsi & Parameter)**
  - Mendefinisikan Fungsi (`def`), Parameter & Argumen, Nilai Kembalian (`return`) vs `print`
  - Analogi: Resep standar toko kue & custom topping pelanggan
  - Interactive Playground: `fungsi_resep.py`
- **Chapter 2: Jurus Instan AI (Lambda & Generator)**
  - Fungsi sebaris (`lambda`), Lazy Evaluation / Generator (`yield`)
  - Analogi: Pop-up store kosmetik (Lambda) & Mencuci piring 1.000 tamu pernikahan satu-satu tanpa bikin dapur ambruk (Generator)
  - Interactive Playground: `lambda_gen.py`

*(Catatan: Modul 3 memang didesain cukup 2 Chapter karena ke-4 materi utamanya sudah dipadatkan dan dirangkai secara berurutan dalam chapter tersebut)*

---

## 🎯 Modul 4: Arsitektur & I/O (OOP, Error Handling, File I/O)
**Status:** ✅ Selesai (File: `04-materi.html`)

**Tujuan Pembelajaran:** 
Memahami konsep Object-Oriented Programming (OOP) tingkat dasar, menangani error, dan menghubungkan program dengan file lokal.

**Daftar Chapter (SUDAH LENGKAP):**
- **Chapter 1: Pemrograman Berorientasi Objek (OOP)**
  - Konsep Class dan Object, Atribut dan Method, Fungsi `__init__`
  - Analogi: Blueprint desain tas branded vs Tas fisik asli
  - Interactive Playground: `class_object.py`
- **Chapter 2: Persiapan Rencana B (Error Handling)**
  - Konsep Try, Except, Finally
  - Analogi: Menyiapkan tenda cadangan saat Pesta Kebun Outdoor hujan
  - Interactive Playground: `try_except.py`
- **Chapter 3: Buku Tamu Digital (File I/O)**
  - Membaca data (`open(.., "r")`) dan Menulis file (`open(.., "w")`)
  - Analogi: Menjaga meja tamu dan menuliskan daftar kado masuk ke dalam buku
  - Interactive Playground: `buku_tamu.py`

---

## 🎯 Modul 5: Ekosistem Data Science (NumPy & Pandas)
**Status:** ⏳ Dalam Antrean (Target File: `05-materi.html`)

**Tujuan Pembelajaran:** 
Membuka gerbang awal menuju Machine Learning dengan menggunakan library esensial pengolah data.

**Rencana Chapter:**
- Pengenalan NumPy (Komputasi Vektor & Array)
- Pengenalan Pandas (Dataframe, Baris, dan Kolom)
- Membaca data CSV (Dataset)

---

## 🛠 To-Do List Teknis (System & UI)
- [x] **Inline Playground:** Eksekusi kode Python langsung di browser (Pyodide).
- [x] **UI/UX Consistency:** Tidak ada hitam, 100% mengikuti Light Theme / Pink Accent HerAI.
- [x] **State Management Routing:** Menyimpan progres halaman saat refresh (Sudah pakai `localStorage`).
- [x] **Dynamic Routing:** Menyiapkan navigasi router antar modul (Sudah beres Modul 1-4).
