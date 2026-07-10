# Materi Pemrograman Python untuk AI - HerAI

Dokumen ini adalah snapshot bersih materi lama `Pemrograman Python untuk AI` dari course `AI Fundamentals & Advanced`.
Tujuannya untuk copy-paste ke AI lain saat brainstorming penambahan, revisi, atau perombakan materi.

## Sumber Materi

- Shell materi: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/materi.html`
- Chapter 1: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/chapters/01-memulai-python.html`
- Chapter 2: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/chapters/02-materi.html`
- Chapter 3: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/chapters/03-materi.html`
- Chapter 4: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/chapters/04-materi.html`
- Chapter 5: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/chapters/05-materi.html`
- Latihan: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/latihan.html`
- Kuis: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/kuis.html`
- Diskusi: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/diskusi.html`
- Controller/interaktif: `js/frontend/fellow-dashboard/ai-python-basic.js`
- Draft lama tidak aktif: `chapters/00-old-draft-analogies.html`

## Konteks Course

Course: AI Fundamentals & Advanced

Submodul aktif saat ini:

1. Pengantar AI
2. Pemrograman Python untuk AI
3. Konsep AI Modern
4. Reasoning (scaffold)
5. Evaluation (scaffold)
6. Evolution of AI (scaffold)

Flow belajar submodul Python:

1. Materi
2. Latihan
3. Kuis
4. Diskusi

## Route dan File Runtime

Route utama:

- `#/participant-ai-python` -> materi Python.
- `#/participant-ai-python-practice` -> latihan interaktif.
- `#/participant-ai-python-quiz` -> kuis.
- `#/participant-ai-python-discussion` -> diskusi.

File runtime:

- Materi shell: `02-python-untuk-ai/materi.html`
- Chapter dinamis: `02-python-untuk-ai/chapters/*.html`
- Latihan: `02-python-untuk-ai/latihan.html`
- Kuis: `02-python-untuk-ai/kuis.html`
- Diskusi: `02-python-untuk-ai/diskusi.html`
- JS controller: `js/frontend/fellow-dashboard/ai-python-basic.js`

## Cara Kerja Interaktif

Submodul Python memakai controller `ai-python-basic.js`.

Fungsi penting:

- `initAiPythonMateri()` memuat chapter materi secara dinamis ke `#python-chapter-container`.
- `window.loadPythonChapter(chapterNum)` membuka chapter tertentu dari sidebar.
- `initAiPythonBasic()` menginisialisasi latihan dan playground Python.
- `initAiPythonQuiz()` mengatur submit kuis dan penyimpanan skor.
- `initAiPythonDiscussion()` mengatur thread diskusi lokal.

Runtime Python:

- Playground memakai Pyodide dari CDN `https://cdn.jsdelivr.net/pyodide/v0.24.1/full/`.
- Kode dijalankan di browser lewat `pyodideInstance.runPythonAsync(code)`.
- `loadPackagesFromImports(code)` dipakai agar import seperti NumPy/Pandas bisa dimuat.

localStorage keys:

- `heraiAiPythonCurrentChapter`: chapter materi terakhir yang dibuka.
- `heraiAiPythonPractice`: jawaban latihan reflektif.
- `heraiAiPythonQuizDone`: flag kuis sudah dikerjakan.
- `heraiAiPythonQuizScore`: skor kuis.
- `heraiAiPythonDiscussion`: thread diskusi Python.

## Pemrograman Python untuk AI

Deskripsi halaman:

Dasar pemrograman Python yang wajib dikuasai sebelum membangun solusi Artificial Intelligence.

Durasi: 50 menit

Posisi: Modul 2 dari 6

Level: Dasar

Daftar materi:

1. Memulai Python
2. Struktur Data & Logika
3. Modularitas & Efisiensi
4. OOP & File I/O
5. Library Data Science

## Topik 1: Memulai dengan Python

Goal:

Memahami fundamental Python, menyiapkan environment development tingkat industri, dan menulis kode pertama.

### Chapter 1: Apa itu Python?

Learning Objective:

Peserta mampu menjelaskan alasan Python menjadi bahasa utama AI, mengetahui sejarah, filosofi, serta membandingkannya dengan bahasa pemrograman lain secara objektif.

Prerequisite:

Mampu menghidupkan komputer dan mengoperasikan sistem operasi Windows, Mac, atau Linux.

Introduction:

Sebelum menyelam ke dalam syntax, peserta perlu memahami alat yang digunakan. Menjadi AI Engineer bukan hanya soal mengetik kode, tetapi tentang memecahkan masalah. Python diposisikan sebagai alat utama yang paling sering digunakan untuk membangun algoritma AI modern.

Theory:

- Python dibuat oleh Guido van Rossum pada tahun 1991.
- Filosofinya terangkum dalam Zen of Python, seperti "Readability counts" dan "Simple is better than complex".
- Python cocok untuk AI karena sintaksnya mudah dibaca manusia, tetapi tetap didukung library berperforma tinggi yang banyak ditulis dengan C/C++ di balik layar.

Visual explanation:

Manusia atau peneliti menulis kode Python sederhana. Python menghubungkan instruksi tersebut ke engine C++ yang cepat, lalu ke hardware seperti GPU/TPU.

Analogy:

Python dibandingkan dengan event organizer. Menggunakan C++ ibarat mengurus semua detail pernikahan dari menjahit gaun sampai memasak katering. Menggunakan Python ibarat memiliki vendor dan asisten siap pakai melalui library, sehingga programmer bisa fokus sebagai director yang menyatukan logika AI.

Code example:

```java
// Dalam Bahasa Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Halo AI!");
    }
}
```

```python
# Dalam Bahasa Python
print("Halo AI!")
```

Best practice:

Gunakan Python untuk data, AI, backend, dan automasi. Jangan memaksakan Python untuk game 3D berat atau sistem operasi karena bukan itu kekuatan utamanya.

Common mistake:

Pemula sering mengira Python tidak layak untuk AI karena dianggap lambat. Faktanya, komputasi berat di AI biasanya dijalankan oleh library berbasis C/C++ atau GPU, sedangkan Python berfungsi sebagai remote control yang mengatur proses.

Interactive exercise:

Pilih satu aplikasi favorit di smartphone, lalu cari apakah aplikasi tersebut menggunakan Python. Contoh aplikasi besar yang memakai Python dalam beberapa bagian sistemnya: Instagram, Spotify, dan Netflix.

Summary:

Python mendominasi AI karena mudah dibaca dan memiliki ekosistem library besar seperti NumPy dan PyTorch.

### Chapter 2: Instalasi & Environment

Learning Objective:

Peserta mampu menginstal Python, mengkonfigurasi Visual Studio Code, memahami penggunaan Terminal, dan mengisolasi proyek AI menggunakan Virtual Environment.

Catatan materi:

Peserta diwajibkan menginstal Python 3.10+ dan Visual Studio Code beserta ekstensi resmi Microsoft Python. Panduan instalasi interaktif dengan ilustrasi lengkap tersedia di Modul Orientasi Platform.

Analogy: Virtual Environment

Virtual Environment dibandingkan dengan pouch atau organizer terpisah untuk skincare/haircare. Setiap proyek punya kebutuhan library berbeda. Dengan venv, library antar proyek tidak saling bentrok.

Code example:

```bash
# Membuat virtual environment bernama myenv
python -m venv myenv

# Mengaktifkan venv di Windows
myenv\Scripts\activate

# Mengaktifkan venv di Mac/Linux
source myenv/bin/activate

# Menginstall library
pip install numpy pandas
```

Best practice:

Jangan menginstal library seperti TensorFlow atau Django secara global tanpa venv. Selalu buat Virtual Environment setiap memulai folder proyek AI baru.

### Chapter 3: Program Pertama & Sintaks Dasar

Learning Objective:

Peserta mampu menjalankan skrip `.py` pertama, menggunakan fungsi `print()`, menulis dokumentasi lewat komentar, dan memahami hukum indentasi di Python.

Introduction:

Program pertama yang ditulis pemrogram biasanya adalah `Hello, World!`. Di materi ini peserta mulai menulis kode pertama.

Theory:

- `print()` adalah built-in function untuk menampilkan teks atau angka ke terminal.
- Komentar dengan `#` diabaikan mesin dan ditulis untuk manusia.
- Indentasi di Python menentukan blok kode.

Code example:

```python
# Ini adalah komentar satu baris. Mesin tidak akan membacanya.
print("Hello, Data Sorcerers!")

if True:
    # Indentasi: kode ini adalah bagian dari blok if.
    print("Saya siap menjadi AI Engineer!")
```

Common mistakes:

- Lupa tanda kutip: `print(Halo AI)` salah, `print("Halo AI")` benar.
- Indentasi berantakan: mencampur spasi dan tab bisa memicu `IndentationError`.

Challenge:

Buat file `sapaan.py`. Cetak nama, cita-cita, dan beri komentar di setiap baris kode.

Summary:

Peserta belajar bahwa `print()` adalah pengeras suara komputer, komentar adalah catatan untuk developer, dan indentasi adalah fondasi struktur kode Python.

### Chapter 4: Variabel & Tipe Data Dasar

Learning Objective:

Peserta mampu mendeklarasikan variabel dan membedakan 4 tipe data dasar: String, Integer, Float, dan Boolean.

Analogy:

Variabel adalah kotak penyimpanan yang diberi label. Tipe data adalah jenis barang di dalam kotak.

Tipe data:

- String: teks, misalnya `"Aisyah"`.
- Integer: angka bulat, misalnya `10`.
- Float: angka desimal, misalnya `55.5`.
- Boolean: nilai benar/salah, yaitu `True` atau `False`.

Relevansi AI:

- String dipakai untuk teks, prompt, label, dan data NLP.
- Integer dipakai untuk jumlah data, index, epoch, dan count.
- Float dipakai untuk confidence score, learning rate, loss, dan bobot model.
- Boolean dipakai untuk status, filter, dan kondisi logika.

## Topik 2: Koleksi & Alur Logika

Goal:

Mampu menyimpan ribuan data menggunakan struktur data dan mengatur jalannya program menggunakan control flow.

### Chapter 1: Menyimpan Jutaan Data

Learning Objective:

Peserta mampu menjelaskan perbedaan List, Tuple, Dictionary, dan Set, serta kapan menggunakannya dalam pemrosesan data AI.

Analogy:

Struktur data dibandingkan dengan rak kosmetik acrylic untuk mengatur 1.000 lipstik. List seperti laci berurutan, Tuple seperti palette yang terkunci, Dictionary seperti slot dengan label, dan Set seperti daftar unik tanpa duplikasi.

Theory:

- List: koleksi berurutan dan mutable. Bisa ditambah, diubah, atau dihapus.
- Tuple: mirip List tetapi immutable. Aman dari perubahan tidak sengaja dan lebih cepat.
- Dictionary: pasangan key-value. Dipakai saat data dicari berdasarkan label, bukan nomor urut.
- Set: koleksi unik tanpa data kembar. Berguna untuk mencari vocabulary unik di NLP.

Code example:

```python
# List
peserta = ["Aisyah", "Budi", "Citra"]
peserta.append("Deni")
print("List Peserta:", peserta)
print("Peserta pertama:", peserta[0])

# Tuple
koordinat = (3.14, 2.71)
print("Titik koordinat:", koordinat)

# Dictionary
profil = {"nama": "Aisyah", "skor": 95}
print("Skor Aisyah:", profil["skor"])
```

Common mistake:

Zero-based indexing. Komputer menghitung dari 0, sehingga data pertama berada di index 0.

### Chapter 2: Pengendali Alur (Logika AI)

Learning Objective:

Peserta memahami percabangan logika `if-else` dan perulangan `for/while` untuk memproses banyak data secara otomatis.

Analogy:

If-Else seperti kurator fashion: jika hujan, pakai trench coat; jika tidak, pakai blouse santai. Looping seperti skincare routine yang diulang sampai semua step selesai.

Code example:

```python
daftar_skor = [65, 90, 85, 40, 75]

for skor in daftar_skor:
    if skor >= 80:
        print("Skor", skor, "=> LOLOS Seleksi")
    elif skor >= 60:
        print("Skor", skor, "=> Masuk Daftar Cadangan")
    else:
        print("Skor", skor, "=> TIDAK Lolos")
```

Challenge:

Buat program kecil yang mencetak deret bilangan ganjil dari angka 1 sampai 20 menggunakan `for` loop dan `if`.

## Topik 3: Modularitas & Efisiensi

Goal:

Mampu membungkus kode menjadi blok reusable agar terhindar dari spaghetti code.

### Chapter 1: Resep Dapur AI (Fungsi & Parameter)

Learning Objective:

Peserta mampu mendefinisikan function, menggunakan parameter, serta memahami perbedaan antara `print` dan `return`.

Analogy:

Function seperti resep standar di toko kue. Resep dibuat sekali, lalu bisa dipanggil berkali-kali. Parameter seperti custom topping yang membuat resep dasar bisa menghasilkan variasi berbeda.

Theory:

- Function didefinisikan dengan `def`.
- Function bisa menerima parameter.
- Function bisa mengembalikan output dengan `return`.
- Nama function sebaiknya lowercase dengan underscore, misalnya `hitung_diskon`.

Return vs Print:

- `print` hanya menampilkan nilai ke layar.
- `return` mengembalikan nilai agar bisa disimpan ke variabel dan dipakai untuk proses berikutnya.

Code example:

```python
def hitung_harga_salon(layanan, harga, member=False):
    if member == True:
        harga_akhir = harga - (harga * 0.2)
    else:
        harga_akhir = harga

    return harga_akhir

harga_aisyah = hitung_harga_salon("Creambath", 100000, member=True)
harga_bella = hitung_harga_salon("Hair Spa", 200000, member=False)

print("Tagihan Aisyah: Rp", harga_aisyah)
print("Tagihan Bella: Rp", harga_bella)
```

Common mistake:

Mengganti `return` dengan `print` di dalam function. Jika function hanya mencetak ke layar, nilainya tidak bisa dipakai untuk operasi berikutnya.

### Chapter 2: Jurus Instan AI (Lambda & Generator)

Learning Objective:

Mengenal function instan satu baris atau `lambda`, serta cara menangani banyak data tanpa membuat memori penuh melalui konsep Generator.

Analogy:

- Lambda seperti pop-up store: cepat, praktis, tidak perlu bangunan permanen.
- Generator seperti mencuci 1.000 piring satu per satu, bukan mengangkat semua piring sekaligus. Ini menggambarkan lazy evaluation.

Code example:

```python
# Lambda
diskon_50 = lambda harga: harga * 0.5
print("Harga setelah diskon:", diskon_50(200000))

# Generator
def pembuat_nomor_antrean():
    yield "Antrean A-1"
    yield "Antrean A-2"
    yield "Antrean A-3"

mesin_antrean = pembuat_nomor_antrean()

print("Panggilan ke-1:", next(mesin_antrean))
print("Panggilan ke-2:", next(mesin_antrean))
```

Challenge:

Buat function `sapa_pelanggan(nama)` yang mengembalikan string: `Halo [nama], selamat datang di HerAI!`.

## Topik 4: Arsitektur & I/O

Goal:

Memahami OOP tingkat dasar untuk membangun sistem besar dan mengantisipasi masalah lewat Error Handling.

### Chapter 1: Pemrograman Berorientasi Objek (OOP)

Learning Objective:

Peserta memahami cara membungkus data dan function ke dalam satu entitas menggunakan Object-Oriented Programming.

Analogy:

- Class adalah blueprint atau sketsa desain tas tangan.
- Object adalah tas nyata yang diproduksi dari blueprint tersebut.

Theory:

- Class: cetakan atau template, misalnya `class Tas:`.
- Object: hasil cetakan, misalnya `tas_aku = Tas()`.
- Attribute: variabel yang menempel di object, misalnya `warna = "Pink"`.
- Method: function yang menempel di object, misalnya `def buka_resleting(self):`.
- `__init__`: method khusus yang otomatis dipanggil saat object dibuat.
- `self`: cara object merujuk pada dirinya sendiri.

Code example:

```python
class TasKosmetik:
    def __init__(self, warna, pemilik):
        self.warna = warna
        self.pemilik = pemilik
        self.isi = []

    def masukkan_barang(self, barang):
        self.isi.append(barang)
        print("+" + barang, "dimasukkan ke tas", self.warna)

tas_aisyah = TasKosmetik("Pink Pastel", "Aisyah")
tas_budi = TasKosmetik("Hitam Matte", "Budi")

tas_aisyah.masukkan_barang("Lipstik")
tas_budi.masukkan_barang("Parfum")

print("Isi tas Aisyah:", tas_aisyah.isi)
```

### Chapter 2: Persiapan Rencana B (Error Handling)

Learning Objective:

Peserta mampu memprediksi masalah di program dan membuat rencana cadangan agar program tidak berhenti tiba-tiba.

Analogy:

Error handling seperti menyiapkan tenda cadangan untuk pesta outdoor. Jika hujan turun, acara tidak bubar karena ada Plan B.

Konsep:

- `try`: mencoba menjalankan kode yang mungkin error.
- `except`: menjalankan rencana cadangan saat error terjadi.
- `finally`: bagian yang selalu berjalan, baik error maupun tidak.

Code example:

```python
try:
    print("Mencoba membagi diskon...")
    angka = 100
    pembagi = 0
    hasil = angka / pembagi
    print("Berhasil! Hasil:", hasil)

except ZeroDivisionError:
    print("Oops! Terjadi masalah: Kamu tidak bisa membagi dengan angka Nol.")

finally:
    print("Selesai menghitung.")
```

### Chapter 3: Buku Tamu Digital (File I/O)

Learning Objective:

Peserta mampu membaca data dari file teks dan menyimpan hasil pemrosesan kembali ke file menggunakan `open()`.

Analogy:

File I/O seperti meja penerima tamu. Membaca file seperti membaca daftar undangan, menulis file seperti menulis nama tamu di buku tanda terima.

Code example:

```python
# Menulis ke file
file_tulis = open("buku_tamu.txt", "w")
file_tulis.write("Tamu 1: Aisyah Putri\n")
file_tulis.write("Tamu 2: Budi Santoso\n")
file_tulis.close()
print("Berhasil menulis 2 nama ke buku_tamu.txt")

# Membaca file
print("\n--- Membuka Buku Tamu ---")
file_baca = open("buku_tamu.txt", "r")
isi_buku = file_baca.read()
print(isi_buku)
file_baca.close()
```

Pro tip:

Data Scientist biasanya memakai `with open(...) as file:` agar file tertutup otomatis saat proses selesai.

Summary:

Melalui OOP, peserta belajar membungkus data seperti blueprint produk. Melalui Error Handling, peserta belajar membuat rencana cadangan. Melalui File I/O, peserta belajar menghubungkan program dengan dunia luar.

## Topik 5: Ekosistem Data Science

Goal:

Membuka gerbang menuju AI dengan menggunakan library esensial pengolah angka dan tabel.

### Chapter 1: Kalkulator Massal (NumPy)

Learning Objective:

Peserta memahami bagaimana NumPy melakukan perhitungan matematika kompleks pada banyak data sekaligus tanpa loop manual.

Analogy:

List Python biasa seperti kasir yang scan barang satu per satu. NumPy seperti scanner keranjang pintar yang bisa menghitung banyak barang secara serentak melalui vectorization.

Code example:

```python
import numpy as np

harga_list = [10000, 20000, 30000, 40000]
harga_np = np.array([10000, 20000, 30000, 40000])

harga_diskon = harga_np * 0.5

print("Harga awal  :", harga_np)
print("Harga diskon:", harga_diskon)
```

Catatan interaktif:

NumPy membutuhkan waktu beberapa detik untuk diunduh pertama kali di Pyodide.

### Chapter 2: Excel Super Canggih (Pandas)

Learning Objective:

Peserta memahami DataFrame di Pandas dan bagaimana Pandas digunakan untuk menganalisis data baris-kolom seperti Microsoft Excel.

Analogy:

NumPy kuat untuk angka murni, sedangkan Pandas cocok untuk data campuran seperti nama, umur, uang, status, dan kategori. DataFrame seperti spreadsheet super canggih yang bisa difilter, dikelompokkan, dan dibersihkan lewat kode.

Code example:

```python
import pandas as pd

data_mentah = {
    "Nama": ["Aisyah", "Budi", "Citra", "Diana"],
    "Umur": [25, 30, 22, 28],
    "VIP": [True, False, False, True]
}

df = pd.DataFrame(data_mentah)

print("Tabel Keseluruhan:")
print(df)

print("\n--- Cari Member VIP Saja ---")
vip_saja = df[df["VIP"] == True]
print(vip_saja)
```

### Chapter 3: Membaca Dataset CSV

Theory:

Di dunia AI nyata, data jarang diketik manual. Data Scientist biasanya memakai file CSV yang berisi banyak baris data. Pandas membaca file CSV dengan `pd.read_csv("nama_file.csv")`.

Pseudocode:

```python
import pandas as pd

dataset_penjualan = pd.read_csv("penjualan_sepatu_2020_2025.csv")
print(dataset_penjualan.head())
```

Penutup materi:

Peserta telah mempelajari fondasi Python untuk AI: variabel, logika loop, function, class, error handling, file I/O, NumPy, dan Pandas.

## Latihan Pemrograman Python

Judul:

Latihan Pemrograman Python

Deskripsi:

Jawab soal reflektif, lalu praktikkan langsung dengan menjalankan kode Python asli di browser.

Durasi: 30 menit

Jenis: Interaktif

Instruksi umum:

Di halaman latihan, peserta menjawab soal reflektif dan menjalankan kode Python di playground Pyodide. Jawaban tersimpan di browser dengan localStorage key `heraiAiPythonPractice`.

### Latihan 1: Tipe Data & Variabel

Soal reflektif:

Tulis 4 variabel berbeda dengan tipe data `str`, `int`, `float`, dan `bool`. Jelaskan kegunaan masing-masing tipe data dalam konteks data AI.

Instruksi kode:

Definisikan variabel dengan berbagai tipe data dan gunakan `type()` untuk memeriksa klasifikasinya.

Expected output:

Mencetak tipe masing-masing variabel, misalnya `<class 'str'> | HerAI`.

### Latihan 2: List & Dictionary

Soal reflektif:

Buat contoh list dan dictionary. Kapan kamu memilih list vs dict saat memproses data AI?

Instruksi kode:

Buat List berisi angka dan Dictionary berisi profil, lalu jalankan manipulasi sederhana seperti `max()` dan akses key.

Expected output:

Menampilkan nilai tertinggi 92, rata-rata 78.8, dan detail profil seperti skill Python.

### Latihan 3: Control Flow

Soal reflektif:

Gunakan loop untuk mencetak status "Lulus" atau "Remedial". Jelaskan logic-nya.

Instruksi kode:

Gunakan `for` dan `if-else` untuk menentukan kelulusan dari list nilai ujian.

Expected output:

Angka >= 75 mencetak "Lulus", di bawah itu mencetak "Remedial" secara berurutan.

### Latihan 4: Functions

Soal reflektif:

Tulis function `kategori_skor` yang mengembalikan kategori berdasarkan skor. Kenapa function penting?

Instruksi kode:

Buat custom function `kategori_skor(skor)` yang mengembalikan string kategori berdasarkan angka skor.

Expected output:

Menghasilkan "Tinggi", "Sedang", atau "Rendah" sesuai skor.

### Latihan 5: Libraries AI

Soal reflektif:

Jelaskan kegunaan NumPy dan Pandas dalam workflow AI. Tulis contoh kode sederhana.

Instruksi kode:

Gunakan `numpy` sebagai `np` untuk memproses array angka dan menghitung statistik.

Expected output:

Muncul metrik matematika seperti mean 78.8 dan standar deviasi 10.02.

### Latihan 6: OOP & Error Handling

Soal reflektif:

Buat class `Dataset` sederhana yang memiliki error handling jika data kosong.

Instruksi kode:

Rancang class OOP `Dataset` yang memiliki mekanisme `try-except` error handling.

Expected output:

Data yang ada dicetak normal, sedangkan list kosong tertangkap menjadi peringatan error.

## Kuis Pemrograman Python

Durasi: 10 menit

Jumlah soal: 10

Tipe: single attempt

Instruksi:

Pilih satu jawaban untuk setiap soal. Setelah submit, sistem hanya menampilkan nilai akhir.

### Soal 1

Apa tipe data dari nilai `3.14` di Python?

- Benar: `float`
- Salah: `int`
- Salah: `str`

### Soal 2

Bagaimana cara membuat list kosong?

- Benar: `[]`
- Salah: `{}`
- Salah: `()`

### Soal 3

Apa hasil dari ekspresi `"ai" * 3` di Python?

- Benar: `"aiaiai"`
- Salah: `"ai3"`
- Salah: Error

### Soal 4

Keyword apa yang digunakan untuk membuat function?

- Benar: `def`
- Salah: `function`
- Salah: `func`

### Soal 5

Dictionary di Python menyimpan data dalam bentuk apa?

- Benar: pasangan key-value.
- Salah: urutan indeks numerik.
- Salah: kumpulan nilai unik saja.

### Soal 6

Apa output dari `len([1,2,3])`?

- Benar: `3`
- Salah: `[1,2,3]`
- Salah: `2`

### Soal 7

`range(5)` menghasilkan deret angka apa?

- Benar: `0, 1, 2, 3, 4`
- Salah: `1, 2, 3, 4, 5`
- Salah: `0, 1, 2, 3, 4, 5`

### Soal 8

Manakah tipe data yang bersifat immutable?

- Benar: `tuple`
- Salah: `list`
- Salah: `dict`

### Soal 9

Bagaimana syntax yang benar untuk mengimpor library NumPy?

- Benar: `import numpy`
- Salah: `include numpy`
- Salah: `using numpy`

### Soal 10

Apa kegunaan utama Pandas dalam data science?

- Benar: manipulasi dan analisis data tabular.
- Salah: membuat model machine learning.
- Salah: menampilkan grafik 3D.

## Diskusi Pemrograman Python

Judul:

Diskusi Pemrograman Python

Tujuan:

Gunakan ruang diskusi untuk bertanya, menjawab, dan mengaitkan materi Python dengan pengalaman belajar coding.

Instruksi:

Posting pertanyaan atau insight. Reply akan tampil sebagai thread di bawah posting utama.

Placeholder diskusi:

Gimana cara efektif belajar Python untuk pemula yang belum pernah coding sama sekali?

Catatan diskusi:

Diskusi terbuka untuk peserta lain. Gunakan bahasa yang jelas, sopan, dan fokus pada materi.

## Draft Lama Tidak Aktif

Ada file `chapters/00-old-draft-analogies.html`.

Status:

- Draft ini bukan chapter aktif yang dimuat oleh `initAiPythonMateri()`.
- Isi draft lama membahas beberapa konsep yang overlap dengan chapter aktif: kenapa Python, variabel, struktur data, control flow, functions, list comprehension, generator, OOP, error handling, File I/O, NumPy, Pandas, dan Matplotlib.
- Jika melakukan rombak materi, draft ini bisa dibaca sebagai inspirasi gaya analogi, tetapi jangan dijadikan source of truth utama.

## Prompt Siap Pakai untuk AI Browser

Copy prompt ini kalau ingin meminta AI browser membantu brainstorming atau merombak materi Python untuk AI:

```text
Kamu adalah curriculum designer dan mentor Python untuk program HerAI Fellowship.

Aku akan kasih snapshot materi lama "Pemrograman Python untuk AI". Tugas kamu adalah membantu brainstorming dan menyusun versi materi yang lebih kuat untuk pemula.

Konteks:
- Course: AI Fundamentals & Advanced
- Submodul: Pemrograman Python untuk AI
- Sebelum submodul ini peserta belajar Pengantar AI.
- Setelah submodul ini peserta akan belajar Konsep AI Modern, Math for AI, Machine Learning, NLP, dan Computer Vision.
- Jadi materi Python harus fokus pada fondasi coding yang relevan untuk AI, bukan terlalu dalam masuk ke framework ML, deep learning, LLM, NLP teknis, atau CV teknis.

Tugas kamu:
1. Review materi lama yang aku tempel.
2. Identifikasi bagian yang kurang, terlalu dangkal, terlalu berat, kurang runtut, duplikatif, atau perlu diganti.
3. Buat struktur materi Python untuk AI yang lebih bagus.
4. Buat materi final lengkap dalam Bahasa Indonesia yang friendly, jelas, praktis, dan cocok untuk pemula.
5. Sertakan:
   - learning objectives
   - outline topik
   - materi lengkap per topik
   - contoh kode Python yang aman untuk pemula
   - analogi sederhana
   - latihan reflektif
   - latihan coding interaktif
   - mini project
   - 10-15 soal kuis pilihan ganda + jawaban benar + alasan singkat
   - prompt diskusi
6. Hindari emoji.
7. Jangan membuat HTML/CSS/JS.
8. Jangan membahas implementasi website.
9. Output harus rapi dan siap diberikan ke developer untuk dimasukkan ke aplikasi.

Berikut snapshot materi lama:
[PASTE ISI materi/lama/python-untuk-ai.md DI SINI]
```

## Prompt Siap Pakai untuk Codex/Implementer

Copy prompt ini saat materi final dari AI browser sudah siap dan ingin dimasukkan ke repo:

```text
Kita akan rombak materi Pemrograman Python untuk AI berdasarkan materi final dari brainstorming.

Wajib baca dulu:
- AGENTS.md
- GEMINI.md
- handover/HANDOVER_UPDATE.md
- handover/MODULE_STATUS_MAP.md
- handover/COURSE_HIERARCHY.md
- handover/PROMPT_AI_BARU.md
- handover/HANDOVER_COURSE_FILESYSTEM_REFACTOR.md
- materi/lama/python-untuk-ai.md

Tugas:
Masukkan materi final di bawah ini ke submodul Pemrograman Python untuk AI tanpa merusak layout, route, interaktif Pyodide, chapter loader, quiz, latihan, diskusi, atau design system.

Aturan:
- Jangan ubah route di js/router.js kecuali benar-benar perlu.
- Jangan ubah sidebar, topbar, breadcrumb, lesson tabs, right panel, atau footer nav.
- Jangan merusak initAiPythonMateri(), window.loadPythonChapter(), initAiPythonBasic(), initAiPythonQuiz(), atau initAiPythonDiscussion().
- Jangan merusak localStorage keys:
  - heraiAiPythonCurrentChapter
  - heraiAiPythonPractice
  - heraiAiPythonQuizDone
  - heraiAiPythonQuizScore
  - heraiAiPythonDiscussion
- Konten runtime Python ada di:
  - pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/materi.html
  - pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/02-python-untuk-ai/chapters/*.html
  - latihan.html jika latihan berubah
  - kuis.html jika kuis berubah
  - diskusi.html jika diskusi berubah
  - js/frontend/fellow-dashboard/ai-python-basic.js hanya jika behavior interaktif perlu berubah
- Update juga materi/lama/python-untuk-ai.md atau buat snapshot baru sesuai instruksi user.
- Update handover setelah selesai.
- Jalankan verifikasi:
  - node --check js/router.js
  - node --check js/frontend/fellow-dashboard/ai-python-basic.js
  - git diff --check
  - node scripts/check-participant-routes.mjs

Materi final:
[PASTE MATERI FINAL DARI AI BROWSER DI SINI]
```
