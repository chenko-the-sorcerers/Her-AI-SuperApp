# Roadmap & Kurikulum Python untuk AI (HerAI)

Dokumen ini merangkum rencana lengkap dan strategi pedagogi kurikulum "Python untuk AI" yang dirancang khusus untuk _fellows_ perempuan di HerAI. Pendekatan materi akan fokus pada **relatability** (menggunakan analogi dunia perempuan seperti kecantikan, _fashion_, dan _event organizing_) tanpa mengurangi bobot teknis kurikulum standar industri.

---

## 🎯 Modul 1: Fondasi Dasar (Sintaks & Tipe Data)
**Status:** ✅ Selesai (File: `01-memulai-python.html`)

**Tujuan Pembelajaran:** 
Memahami alasan Python menjadi bahasa utama AI, menyiapkan environment development, dan menulis kode pertama.

**Materi Pokok:**
1. Kenapa Python? (Sederhana, Ekosistem AI yang matang)
2. Virtual Environment (venv)
3. Variabel & Tipe Data (String, Integer, Boolean)
4. Aturan Indentasi Python

**Analogi Pedagogi (Relatable):**
- **Python vs C++:** Seperti menggunakan jasa MUA & Vendor (Python) vs menjahit gaun dan memasak katering sendiri dari nol (C++).
- **Virtual Environment:** Seperti _pouch_ terpisah untuk produk _skincare_ dan _haircare_ agar komposisinya tidak tercampur dan tetap higienis.

---

## 🎯 Modul 2: Koleksi & Alur Logika (Struktur Data & Control Flow)
**Status:** ✅ Selesai (File: `02-materi.html`)

**Tujuan Pembelajaran:** 
Mampu menyimpan ribuan data menggunakan Struktur Data dan mengatur jalannya program menggunakan Control Flow.

**Materi Pokok:**
1. Struktur Data: List, Tuple, Dictionary, Set
2. Control Flow: Percabangan (`if`, `elif`, `else`)
3. Control Flow: Perulangan (`for`, `while`)

**Analogi Pedagogi (Relatable):**
- **Struktur Data:** Ibarat rak kosmetik acrylic. _List_ adalah laci bertingkat, _Tuple_ adalah palet warna yang paten, _Dictionary_ adalah laci berlabel khusus.
- **If-Else:** Ibarat kurator _fashion_ pribadi ("JIKA hujan pakai _trench coat_, JIKA TIDAK pakai _blouse_ santai").
- **Looping:** Ibarat melakukan rutinitas _skincare_ 10-step otomatis setiap malam tanpa harus disuruh satu per satu.

---

## 🎯 Modul 3: Modularitas & Efisiensi (Function & Generator)
**Status:** ⏳ Menunggu Eksekusi (Target File: `03-materi.html`)

**Tujuan Pembelajaran:** 
Mampu membungkus kode menjadi blok yang dapat dipakai ulang (reusable) agar terhindar dari kode yang berantakan (spaghetti code).

**Materi Pokok:**
1. Mendefinisikan Fungsi (`def`)
2. Parameter & Argumen
3. Nilai Kembalian (`return`) vs `print`
4. Pengenalan Lambda & Generator (Konsep dasar)

**Analogi Pedagogi (Relatable):**
- **Function:** Ibarat "Resep Rahasia Baking". Kamu tidak perlu memikirkan langkah pembuatan dari awal tiap ada pesanan kue, cukup panggil resepnya.
- **Parameter:** Ibarat _request custom topping_ dari pelanggan (misalnya: `ekstra_keju=True`).
- **Return:** Ibarat kue utuh yang sudah matang dan diserahkan ke pelanggan, bukan sekadar kue yang dimakan dan dihabiskan di dapur (seperti `print`).

---

## 🎯 Modul 4: Arsitektur & I/O (OOP & Error Handling)
**Status:** ⏳ Dalam Antrean (Target File: `04-materi.html`)

**Tujuan Pembelajaran:** 
Memahami konsep Object-Oriented Programming (OOP) tingkat dasar dan cara menangani error secara elegan.

**Materi Pokok:**
1. Konsep Class dan Object
2. Atribut dan Method
3. Try, Except, Finally (Error Handling)
4. Membaca dan Menulis File (`open`)

**Analogi Pedagogi (Relatable):**
- **Class & Object:** `Class` ibarat _blueprint_ atau cetakan desain tas _branded_. `Object` adalah tas fisik nyata yang dipegang dan dipakai.
- **Error Handling (try-except):** Ibarat menyiapkan "Rencana B" (membawa payung) saat mengadakan _event outdoor_. Jika hujan (error), acara tidak bubar (crash), tapi langsung pindah ke tenda (except).

---

## 🎯 Modul 5: Ekosistem Data Science (NumPy & Pandas)
**Status:** ⏳ Dalam Antrean (Target File: `05-materi.html`)

**Tujuan Pembelajaran:** 
Membuka gerbang awal menuju Machine Learning dengan menggunakan library esensial pengolah data.

**Materi Pokok:**
1. Pengenalan NumPy (Komputasi Vektor & Array)
2. Pengenalan Pandas (Dataframe, Baris, dan Kolom)
3. Membaca data CSV (Dataset)

**Analogi Pedagogi (Relatable):**
- **Pandas Dataframe:** Ibarat _upgrade_ dari mencatat keuangan di buku tulis biasa (Python murni) menjadi menggunakan lembar kerja Microsoft Excel super canggih yang bisa menyaring ribuan baris data transaksi belanja dalam sekejap mata.

---

## 🛠 To-Do List Teknis (System & UI)
Selain materi tertulis, pengembangan juga mencakup sistem di balik layar:
- [x] **Inline Playground:** Eksekusi kode Python langsung di browser (Pyodide).
- [x] **UI/UX Consistency:** Memastikan tidak ada penggunaan warna hitam/gelap pada _card_ atau terminal agar sesuai dengan femininitas _brand guideline_ HerAI (Pink Accent & Light Theme).
- [ ] **State Management:** Menyimpan progres materi dan _coding challenge_ di _Local Storage_.
- [ ] **Dynamic Routing:** Menyiapkan navigasi router agar `btn-next` dari Modul 3 bisa langsung membuka Modul 4, dst.
