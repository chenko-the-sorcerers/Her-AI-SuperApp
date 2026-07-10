# Materi Naratif Lengkap Pemrograman Python untuk AI

## Deskripsi Submodul

Submodul **Pemrograman Python untuk AI** pada course **AI Fundamentals & Advanced** diposisikan sebagai jembatan dari pemahaman konseptual menuju keterampilan teknis dasar yang dibutuhkan sebelum peserta masuk ke topik yang lebih lanjut seperti Konsep AI Modern, Math for AI, Machine Learning, NLP, dan Computer Vision. Snapshot lama menempatkan submodul ini sebagai **modul dasar berdurasi 50 menit** dengan alur belajar **materi, latihan, kuis, dan diskusi**, serta cakupan utama: memulai Python, struktur data dan logika, modularitas dan efisiensi, OOP dan File I/O, serta library data science. fileciteturn0file0

Versi naratif lengkap ini mempertahankan seluruh isi inti dari snapshot lama, lalu menjabarkannya ulang dengan bahasa yang lebih panjang, rinci, dan ramah pemula. Fokusnya tetap sama: membangun fondasi coding yang relevan untuk AI, bukan langsung melompat ke deep learning, LLM, NLP teknis, atau computer vision teknis. Dengan kata lain, peserta belum sedang belajar “membangun model AI besar”, tetapi sedang membangun **cara berpikir komputasional** yang nanti menjadi bekal saat mempelajari AI modern. Posisi ini juga selaras dengan urutan course, karena sebelum submodul ini peserta telah mengenal **Pengantar AI**, dan setelahnya mereka akan belajar konsep yang lebih teknis. fileciteturn0file0turn0file1

Secara pedagogis, Python dipilih karena sintaksnya relatif mudah dibaca, ekosistem library-nya besar, dan penggunaannya sangat kuat dalam otomasi, pengolahan data, eksperimen machine learning, serta prototyping solusi AI. Snapshot lama juga menekankan bahwa Python tidak harus dipahami sebagai bahasa yang “menggantikan semua bahasa lain”, melainkan sebagai alat yang kuat untuk konteks yang tepat. Itulah mengapa pada materi ini peserta akan belajar Python sebagai bahasa kerja sehari-hari untuk berpikir logis, mengolah data, dan membangun fondasi AI secara bertahap. fileciteturn0file0

## Learning Objectives, Prasyarat, dan Peta Besar Materi

Setelah menyelesaikan submodul ini, peserta diharapkan mampu menjelaskan mengapa Python menjadi salah satu bahasa utama dalam AI, menulis program Python sederhana, memahami variabel dan tipe data dasar, menggunakan struktur data seperti list, tuple, dictionary, dan set, mengatur alur program memakai percabangan dan perulangan, membuat function yang rapi dan reusable, mengenal lambda serta generator, memahami OOP dasar, menangani error sederhana, membaca dan menulis file, serta mengenal library foundational seperti NumPy dan Pandas. Semua tujuan ini langsung merefleksikan struktur snapshot lama yang memang dirancang sebagai fondasi Python untuk AI. fileciteturn0file0

Prasyarat peserta juga tetap mengikuti snapshot lama: peserta tidak harus sudah bisa coding, tetapi minimal mampu mengoperasikan komputer, membuka file, memakai keyboard, dan mengikuti instruksi dasar di Windows, macOS, atau Linux. Secara mental, prasyarat terpenting justru adalah kesiapan untuk mencoba, salah, memperbaiki, lalu mencoba lagi. Ini penting karena banyak pemula merasa gagal hanya karena program pertama mereka error, padahal error adalah bagian normal dari belajar programming. Snapshot lama secara implisit sudah mengarah ke hal ini lewat pembahasan komentar, indentasi, common mistakes, dan error handling. fileciteturn0file0

Peta besar materi submodul ini dapat dipahami sebagai perjalanan bertahap. Pertama, peserta mengenal Python sebagai alat dan menyiapkan environment kerja. Kedua, peserta belajar “bahan baku” program: data, struktur data, dan logika. Ketiga, peserta belajar membuat kode yang lebih rapi dengan function dan modularitas. Keempat, peserta mulai melihat bagaimana program bisa dimodelkan sebagai objek dan terhubung dengan dunia luar melalui file. Kelima, peserta masuk ke gerbang data science melalui NumPy dan Pandas. Urutan ini penting karena peserta tidak langsung dibebani library besar tanpa lebih dulu memahami dasar sintaks dan alur berpikir Python. fileciteturn0file0

Outline topik yang akan dibahas adalah sebagai berikut. Pertama, **Memulai Python**: apa itu Python, instalasi dan environment, program pertama, sintaks dasar, variabel, dan tipe data. Kedua, **Koleksi dan Alur Logika**: list, tuple, dictionary, set, indexing, if-else, for, dan while. Ketiga, **Modularitas dan Efisiensi**: function, parameter, return, lambda, dan generator. Keempat, **Arsitektur dan I/O**: OOP dasar, error handling, dan File I/O. Kelima, **Ekosistem Data Science**: NumPy, Pandas, dan pembacaan dataset CSV. Outline ini persis mengikuti snapshot lama, hanya dijabarkan lebih panjang dan lebih aplikatif untuk pemula. fileciteturn0file0

## Materi Lengkap per Topik dan Chapter

Materi di bawah ini menjabarkan ulang seluruh struktur chapter dari snapshot lama menjadi versi naratif yang lebih detail, tanpa menghilangkan bagian inti yang sudah ada. fileciteturn0file0

**Topik Memulai Python**

**Chapter Apa itu Python**

**Tujuan chapter.** Peserta memahami apa itu Python, mengapa Python populer untuk AI, dan bagaimana menempatkan Python secara realistis sebagai alat kerja, bukan sebagai “bahasa sakti” untuk semua hal. fileciteturn0file0

**Konsep utama.** Snapshot lama menjelaskan bahwa Python dibuat oleh Guido van Rossum, dikenal karena filosofi keterbacaan, dan kuat untuk AI karena sintaksnya sederhana tetapi library di baliknya sering ditulis dengan C atau C++ untuk performa. Ini berarti Python sering berperan sebagai “remote control” yang mudah digunakan manusia, sementara kerja komputasi berat bisa ditangani library yang lebih dekat ke mesin. fileciteturn0file0

**Analogi sederhana.** Bayangkan kamu memimpin sebuah acara besar. Jika semua harus kamu kerjakan sendiri, dari dekorasi sampai memasak, pekerjaan akan sangat berat. Itu mirip ketika seseorang harus bekerja di level yang sangat rendah. Python lebih seperti koordinator acara yang bisa memanggil vendor ahli untuk urusan tertentu. Kamu tetap mengendalikan alurnya, tetapi tidak harus membangun semuanya dari nol. Analoginya sejalan dengan snapshot lama yang membandingkan Python dengan seorang director atau event organizer. fileciteturn0file0

**Penjelasan teori rinci.**  
Python penting untuk AI bukan karena Python adalah bahasa tercepat, tetapi karena Python adalah bahasa yang sangat efektif untuk menulis ide dengan cepat dan jelas. Dalam dunia AI, eksperimen sangat penting. Peneliti dan praktisi sering perlu mencoba banyak pendekatan, mengganti parameter, membersihkan data, dan menjalankan pipeline yang berubah-ubah. Bahasa yang terlalu rumit akan memperlambat proses berpikir. Python justru memudahkan iterasi.

Selain itu, Python punya komunitas besar. Saat seseorang belajar AI, ia tidak belajar sendirian. Ia masuk ke ekosistem yang sudah diisi tutorial, package, forum, dokumentasi, dan contoh project dari banyak orang. Ini sangat membantu pemula. Ketika nanti peserta belajar NumPy, Pandas, atau library AI lain, mereka akan melihat bahwa Python memberi pintu masuk yang relatif bersahabat.

Namun, penting juga untuk jujur. Python bukan solusi untuk semua kebutuhan. Snapshot lama sudah memberi best practice bahwa Python tidak perlu dipaksakan untuk game 3D berat atau sistem operasi. Pelajaran pentingnya bukan sekadar “pilih Python”, melainkan “pilih alat yang cocok untuk masalah yang ingin diselesaikan”.

**Contoh kode.**

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

**Penjelasan kode baris demi baris.**  
Pada contoh Java, kita perlu menulis deklarasi class, method utama, dan perintah output. Ini bukan salah; hanya lebih formal. Pada contoh Python, satu baris `print("Halo AI!")` sudah cukup untuk menampilkan teks ke layar. Dari sini, pemula bisa langsung melihat salah satu alasan Python terasa ramah: hambatan untuk mulai menulis program sangat rendah.

**Common mistakes.**  
Pertama, mengira Python bagus untuk AI berarti Python harus dipakai untuk semua masalah. Kedua, menyimpulkan Python “lemah” hanya karena sintaksnya sederhana. Ketiga, fokus ke hafalan definisi tetapi tidak memahami kapan Python cocok digunakan.

**Best practices.**  
Gunakan Python untuk belajar logika, pengolahan data, eksperimen, dan fondasi AI. Biasakan menulis kode yang mudah dibaca, karena keterbacaan sangat penting di Python. Jangan mengejar kode rumit terlalu cepat; pemula lebih baik mengejar kejelasan dulu.

**Hubungan konsep ini dengan AI.**  
Hampir semua jalur kerja AI modern bersentuhan dengan Python: membersihkan data, mencoba model, mengevaluasi hasil, dan membuat prototipe. Bahkan ketika model besar dijalankan dengan komponen yang sangat optimal, Python sering tetap menjadi bahasa yang mengorkestrasi prosesnya. fileciteturn0file0

**Latihan kecil.**  
Tuliskan dengan kata-katamu sendiri: mengapa Python dianggap cocok untuk AI? Lalu bandingkan dengan satu bahasa lain yang kamu kenal, walaupun hanya dari mendengar namanya.

**Ringkasan chapter.**  
Python populer untuk AI karena mudah dibaca, cepat dipakai untuk eksperimen, dan punya ekosistem library yang sangat besar. Fokus utama Python adalah membantu manusia bergerak cepat dari ide ke implementasi. fileciteturn0file0

**Chapter Instalasi dan Environment**

**Tujuan chapter.** Peserta memahami bahwa coding bukan hanya menulis sintaks, tetapi juga menyiapkan ruang kerja yang rapi: Python terpasang, editor tersedia, terminal dipahami, dan proyek terisolasi dengan virtual environment. fileciteturn0file0

**Konsep utama.** Snapshot lama mewajibkan Python 3.10+, Visual Studio Code, ekstensi Python, penggunaan terminal, dan virtual environment. Konsep paling penting di sini adalah isolasi proyek. Jika semua library dipasang sembarangan secara global, cepat atau lambat akan muncul bentrok versi. fileciteturn0file0

**Analogi sederhana.** Virtual environment seperti pouch terpisah untuk setiap kategori barang. Kamu mungkin punya pouch makeup, pouch skincare, dan pouch kabel charger. Semua tidak dicampur jadi satu karena nanti berantakan. Begitu juga dengan project Python: satu proyek perlu library tertentu, proyek lain mungkin perlu versi lain.

**Penjelasan teori rinci.**  
Banyak pemula berpikir bahwa setelah Python terinstal, semua beres. Padahal, salah satu kebiasaan paling sehat sejak awal adalah membuat lingkungan kerja yang terstruktur. Ketika kamu menulis proyek AI kecil hari ini dan proyek berbeda bulan depan, kebutuhan library-nya mungkin tidak sama. Jika semuanya diinstal secara global, konflik akan mudah terjadi.

Terminal juga penting. Walaupun terasa “teknis”, terminal sebenarnya hanyalah cara berbicara langsung ke sistem. Dari terminal, kita bisa membuat virtual environment, mengaktifkannya, menginstal package, dan menjalankan file Python. Belajar terminal di tahap awal membantu peserta tidak terlalu bergantung pada klik-klik antarmuka.

**Contoh kode.**

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

**Penjelasan kode baris demi baris.**  
Baris pertama, `python -m venv myenv`, memerintahkan Python membuat lingkungan virtual bernama `myenv`.  
Baris kedua adalah cara aktivasi di Windows.  
Baris ketiga adalah cara aktivasi di macOS atau Linux.  
Baris keempat, `pip install numpy pandas`, menginstal package hanya di lingkungan yang sedang aktif, bukan ke seluruh sistem.

**Common mistakes.**  
Pertama, lupa mengaktifkan virtual environment sebelum menginstal package. Kedua, bingung karena command aktivasi berbeda antara Windows dan macOS/Linux. Ketiga, menginstal semua library secara global lalu sulit melacak package mana dipakai proyek mana.

**Best practices.**  
Selalu buat satu virtual environment per proyek. Simpan nama folder proyek dengan jelas. Biasakan mengecek apakah environment sedang aktif sebelum instal package.

**Hubungan konsep ini dengan AI.**  
Proyek AI sangat sering memakai banyak dependency. Bahkan dua proyek yang sama-sama “tentang AI” bisa membutuhkan versi library yang berbeda. Disiplin environment dari awal akan menyelamatkan banyak waktu ketika peserta nanti masuk ke proyek machine learning yang lebih kompleks. fileciteturn0file0

**Latihan kecil.**  
Tuliskan perbedaan “install Python”, “install library”, dan “aktifkan virtual environment” dengan kalimat sederhana. Jika kamu belum pernah melakukannya, uraikan dulu apa fungsi masing-masing.

**Ringkasan chapter.**  
Environment yang rapi membuat belajar Python lebih stabil, lebih reproduktif, dan lebih profesional. Virtual environment adalah kebiasaan kecil yang punya dampak besar. fileciteturn0file0

**Chapter Program Pertama dan Sintaks Dasar**

**Tujuan chapter.** Peserta mampu menulis file Python pertama, memakai `print()`, menulis komentar, dan memahami peran indentasi. fileciteturn0file0

**Konsep utama.** Dalam snapshot lama, `print()` diperkenalkan sebagai built-in function untuk menampilkan output, komentar sebagai catatan untuk manusia, dan indentasi sebagai penentu blok kode di Python. Ini penting karena di Python, spasi bukan sekadar estetika; spasi adalah bagian dari struktur. fileciteturn0file0

**Analogi sederhana.** `print()` seperti pengeras suara. Komentar seperti sticky note yang ditempelkan programmer untuk dirinya sendiri atau tim. Indentasi seperti susunan ruangan dalam rumah: ada ruangan utama dan ada bagian di dalam ruangan itu. Jika letaknya salah, susunan rumah jadi kacau.

**Contoh kode.**

```python
# Ini adalah komentar satu baris. Mesin tidak akan membacanya.
print("Hello, Data Sorcerers!")

if True:
    # Indentasi: kode ini adalah bagian dari blok if.
    print("Saya siap menjadi AI Engineer!")
```

**Penjelasan kode baris demi baris.**  
Baris pertama adalah komentar; Python mengabaikannya saat menjalankan program.  
Baris kedua menampilkan teks ke layar.  
Baris ketiga membuat kondisi `if True:` yang selalu bernilai benar, jadi blok di bawahnya akan dijalankan.  
Baris keempat adalah komentar di dalam blok `if`.  
Baris kelima berada menjorok ke dalam, menandakan bahwa ia termasuk isi dari blok `if`.

**Penjelasan teori rinci.**  
Bagi pemula, program pertama bukan soal kerumitan. Program pertama adalah latihan membangun kepercayaan diri: “Saya menulis perintah, komputer menjalankannya.” Momen ini penting karena setelah itu peserta mulai menyadari bahwa komputer tidak “menebak maksud”, tetapi membaca instruksi dengan sangat literal.

Komentar juga layak dibiasakan dari awal. Banyak pemula menganggap komentar tidak penting karena “saya masih ingat maksud kode saya”. Masalahnya, dua minggu kemudian manusia sering lupa pikirannya sendiri. Komentar yang singkat dan relevan membantu mengingat tujuan bagian kode tertentu.

Indentasi adalah salah satu ciri Python yang sering mengejutkan pemula. Di beberapa bahasa lain, blok kode dibatasi kurung kurawal. Di Python, blok ditandai dengan indentasi. Ini membuat kode tampak rapi, tetapi juga menuntut disiplin. Sekali indentasi kacau, program bisa error atau logikanya meleset.

**Common mistakes.**  
Lupa tanda kutip saat mencetak string. Mencampur tab dan spasi. Menulis kode di dalam blok `if` tetapi tidak memberi indentasi yang konsisten.

**Best practices.**  
Gunakan empat spasi untuk indentasi. Tulis komentar hanya saat membantu memahami tujuan kode. Uji program kecil sedikit demi sedikit agar mudah tahu bagian mana yang salah.

**Hubungan konsep ini dengan AI.**  
Saat nanti peserta menulis script pembersihan data, eksperimen model, atau evaluasi hasil, mereka tetap akan sangat bergantung pada `print()` untuk debugging sederhana, komentar untuk dokumentasi, dan indentasi untuk membangun alur logika program. fileciteturn0file0

**Latihan kecil.**  
Buat file `sapaan.py` yang mencetak nama, cita-cita, dan alasan tertarik belajar AI. Tambahkan minimal dua komentar.

**Ringkasan chapter.**  
Tiga kebiasaan awal yang sangat penting adalah: tahu cara menampilkan output, tahu cara memberi catatan pada kode, dan tahu cara menyusun blok kode dengan indentasi yang benar. fileciteturn0file0

**Chapter Variabel dan Tipe Data Dasar**

**Tujuan chapter.** Peserta memahami konsep variabel dan empat tipe data dasar: string, integer, float, dan boolean. fileciteturn0file0

**Konsep utama.** Snapshot lama memposisikan variabel sebagai “kotak penyimpanan berlabel” dan tipe data sebagai “jenis barang” di dalam kotak itu. Ini analogi yang sangat baik untuk pemula karena membantu memisahkan nama variabel dari isi variabel. fileciteturn0file0

**Analogi sederhana.** Bayangkan kamu punya beberapa kotak di meja. Satu kotak berlabel `nama`, satu kotak `umur`, satu kotak `akurasi`, dan satu kotak `lulus`. Label memberi tahu kita cara memanggil isinya; isi memberi tahu jenis data yang sedang dibawa.

**Contoh kode.**

```python
nama = "Aisyah"
umur = 23
akurasi = 95.5
lulus = True

print(nama)
print(type(nama))
print(type(umur))
print(type(akurasi))
print(type(lulus))
```

**Penjelasan kode baris demi baris.**  
`nama = "Aisyah"` menyimpan teks ke variabel `nama`.  
`umur = 23` menyimpan bilangan bulat.  
`akurasi = 95.5` menyimpan bilangan desimal.  
`lulus = True` menyimpan nilai logika benar.  
`print(nama)` menampilkan isi variabel.  
Empat baris `type(...)` dipakai untuk memeriksa tipe data masing-masing variabel.

**Penjelasan teori rinci.**  
String dipakai untuk teks, seperti nama pengguna, label kategori, prompt, atau isi jawaban. Integer dipakai untuk angka bulat, misalnya jumlah data, jumlah epoch, atau indeks dalam list. Float dipakai untuk angka yang memiliki pecahan, misalnya probabilitas, confidence score, learning rate, atau rata-rata. Boolean dipakai untuk representasi ya atau tidak, benar atau salah, aktif atau tidak aktif.

Memahami tipe data penting karena komputer memperlakukan setiap tipe dengan cara berbeda. Misalnya, `"5" + "5"` akan menghasilkan `"55"` karena dua string digabungkan, sedangkan `5 + 5` menghasilkan `10` karena dua angka dijumlahkan. Dari sini peserta belajar bahwa bentuk data memengaruhi perilaku program.

**Common mistakes.**  
Mengira `"25"` sama dengan `25`. Menggunakan nama variabel yang membingungkan seperti `a`, `b`, `c` tanpa konteks. Mengira boolean ditulis sebagai `true` atau `false` huruf kecil, padahal di Python yang benar adalah `True` dan `False`.

**Best practices.**  
Gunakan nama variabel yang deskriptif. Saat ragu, cek tipe data dengan `type()`. Bedakan jelas data numerik dan data teks sejak awal.

**Hubungan konsep ini dengan AI.**  
Dalam AI, semua pipeline berisi data dengan tipe berbeda. Teks, angka, status, label, dan nilai probabilitas sering diproses bersamaan. Jika peserta belum paham tipe data dasar, mereka akan mudah bingung saat mengolah dataset nanti. fileciteturn0file0

**Latihan kecil.**  
Buat empat variabel baru tentang profil belajar kamu: nama, jumlah jam belajar per minggu, target skor, dan status sudah mulai belajar atau belum.

**Ringkasan chapter.**  
Variabel adalah tempat menyimpan data. Tipe data memberi tahu komputer bagaimana data itu harus diperlakukan. Ini adalah fondasi dari semua program Python berikutnya. fileciteturn0file0

**Topik Koleksi dan Alur Logika**

**Chapter Menyimpan Banyak Data dengan Struktur Data**

**Tujuan chapter.** Peserta mampu membedakan list, tuple, dictionary, dan set, serta tahu kapan menggunakan masing-masing struktur data. fileciteturn0file0

**Konsep utama.** Snapshot lama menjelaskan list sebagai koleksi berurutan yang bisa diubah, tuple sebagai koleksi berurutan yang tidak bisa diubah, dictionary sebagai pasangan key-value, dan set sebagai kumpulan nilai unik. Ini adalah fondasi penting karena data AI hampir selalu datang dalam jumlah banyak. fileciteturn0file0

**Analogi sederhana.** List seperti laci berisi barang berurutan. Tuple seperti paket yang isinya sudah dikunci. Dictionary seperti lemari arsip dengan label pada setiap slot. Set seperti daftar tamu yang otomatis menghapus nama duplikat.

**Contoh kode.**

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

# Set
skill = {"python", "python", "data", "ai"}
print("Skill unik:", skill)
```

**Penjelasan kode baris demi baris.**  
`peserta = [...]` membuat list nama.  
`append("Deni")` menambahkan elemen ke akhir list.  
`peserta[0]` mengambil elemen pertama karena Python memakai zero-based indexing.  
`koordinat = (3.14, 2.71)` membuat tuple.  
`profil = {"nama": ..., "skor": ...}` membuat dictionary dengan key dan value.  
`profil["skor"]` mengambil value dari key `skor`.  
`skill = {...}` membuat set; duplikasi `python` otomatis dihapus.

**Penjelasan teori rinci.**  
List sangat umum dipakai ketika urutan penting dan data bisa berubah. Contohnya daftar nilai peserta atau daftar file yang akan diproses. Tuple cocok saat data harus stabil, misalnya pasangan koordinat atau konfigurasi yang tidak ingin diubah sembarangan. Dictionary sangat kuat untuk data yang lebih mudah dicari lewat label, misalnya `{"nama": "Aisyah", "umur": 23}`. Set berguna ketika kita ingin memastikan tidak ada nilai duplikat, misalnya daftar kata unik dalam sebuah teks.

Pemahaman struktur data tidak boleh berhenti di definisi. Pemula perlu bertanya: “Kalau saya punya masalah nyata, struktur mana yang paling cocok?” Misalnya, daftar nilai ujian cocok sebagai list. Profil satu peserta lebih cocok sebagai dictionary. Sekumpulan label unik lebih cocok sebagai set. Jika dua nilai selalu bergerak berpasangan dan tidak ingin diubah, tuple bisa lebih tepat.

**Common mistakes.**  
Salah memilih struktur data karena hanya mengingat definisi, bukan kebutuhan. Bingung antara `[]`, `()`, `{}`. Lupa bahwa list dimulai dari indeks `0`, bukan `1`.

**Best practices.**  
Pilih struktur data berdasarkan kebutuhan akses datanya. Gunakan dictionary saat label lebih penting daripada nomor urut. Ingat bahwa set tidak menjaga urutan dan menghapus duplikasi.

**Hubungan konsep ini dengan AI.**  
Dataset sederhana sering dibaca dulu sebagai list atau dictionary. Vocabulary unik di NLP sering berkaitan dengan konsep set. Statistik per pengguna, metadata file, dan hasil evaluasi sering sangat cocok disimpan dalam dictionary. fileciteturn0file0

**Latihan kecil.**  
Buat satu list berisi tiga topik AI yang ingin kamu pelajari, satu dictionary profil belajar kamu, dan satu set berisi skill unik yang ingin dikuasai.

**Ringkasan chapter.**  
Struktur data membantu program menyimpan informasi dalam bentuk yang tepat. Semakin cepat peserta tahu kapan memakai list, tuple, dictionary, dan set, semakin kuat fondasi kodingnya. fileciteturn0file0

**Chapter Pengendali Alur dengan If-Else dan Loop**

**Tujuan chapter.** Peserta memahami cara membuat program mengambil keputusan dan mengulang proses secara otomatis. fileciteturn0file0

**Konsep utama.** Snapshot lama mengenalkan `if-else` sebagai logika percabangan dan `for`/`while` sebagai perulangan. Keduanya adalah inti dari “alur berpikir” program. fileciteturn0file0

**Analogi sederhana.** If-else seperti kamu memilih pakaian berdasarkan cuaca. Jika hujan, ambil payung. Jika tidak, tidak perlu. Loop seperti kamu memeriksa satu per satu daftar belanja sampai semua item selesai dicek.

**Contoh kode.**

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

**Penjelasan kode baris demi baris.**  
Baris pertama membuat list nilai.  
`for skor in daftar_skor:` berarti program akan mengambil satu nilai demi satu nilai dari list.  
`if skor >= 80:` memeriksa apakah nilai memenuhi syarat tertinggi.  
`elif skor >= 60:` dipakai jika kondisi pertama tidak terpenuhi tetapi nilai masih berada pada rentang berikutnya.  
`else:` dipakai jika semua kondisi sebelumnya tidak terpenuhi.

**Penjelasan teori rinci.**  
Percabangan dipakai ketika program harus memilih tindakan berdasarkan kondisi. Kondisi selalu menghasilkan nilai boolean: benar atau salah. Di sinilah pemahaman boolean dari chapter sebelumnya menjadi berguna. Tanpa boolean, kita tidak bisa membangun keputusan logis.

Loop dipakai ketika pekerjaan yang sama harus diterapkan ke banyak data. Dalam AI dan data science, hal ini terjadi terus-menerus: memeriksa banyak nilai, membersihkan banyak baris data, atau menjalankan operasi untuk banyak file. Kalau tanpa loop, programmer harus menulis perintah berulang secara manual, yang tidak efisien dan rawan salah.

Perlu juga memahami perbedaan `for` dan `while`. `for` cocok ketika kita sudah tahu apa yang akan diiterasi, seperti list atau range. `while` cocok ketika perulangan berlangsung selama suatu kondisi masih benar. Untuk pemula, `for` biasanya lebih aman karena lebih mudah dilacak.

**Common mistakes.**  
Salah menempatkan indentasi di dalam `if` atau `for`. Menulis kondisi yang tidak logis, misalnya rentang bercampur. Membuat `while` tanpa kondisi berhenti yang jelas.

**Best practices.**  
Mulailah dari logika manusiawi dulu: “Apa yang ingin diputuskan program?” Gunakan `for` lebih dulu sebelum `while` jika masih pemula. Tes dengan data kecil agar hasil mudah diperiksa.

**Hubungan konsep ini dengan AI.**  
Banyak proses AI sebenarnya adalah kombinasi pengolahan kumpulan data dan pengambilan keputusan. Bahkan sebelum masuk ke machine learning, peserta harus nyaman dengan konsep memeriksa kondisi dan mengulang operasi pada banyak record. fileciteturn0file0

**Latihan kecil.**  
Cetak angka ganjil dari 1 sampai 20 menggunakan `for` dan `if`.

**Ringkasan chapter.**  
If-else membuat program bisa memilih. Loop membuat program bisa bekerja dalam skala lebih besar. Bersama-sama, keduanya membentuk alur logika dasar dalam Python. fileciteturn0file0

**Topik Modularitas dan Efisiensi**

**Chapter Fungsi dan Parameter**

**Tujuan chapter.** Peserta mampu membuat function, memakai parameter, dan membedakan `print` dengan `return`. fileciteturn0file0

**Konsep utama.** Function adalah blok kode yang diberi nama dan bisa dipakai berulang. Snapshot lama menegaskan bahwa `return` berbeda dari `print`: `print` hanya menampilkan, sedangkan `return` mengembalikan nilai agar bisa dipakai lagi oleh program. fileciteturn0file0

**Analogi sederhana.** Function seperti resep masakan yang bisa dipakai berkali-kali. Parameter adalah bahan yang bisa diganti-ganti. `print` seperti koki yang cuma menunjukkan hasil masak ke pelanggan. `return` seperti koki yang menyerahkan hasil masak ke dapur lain untuk diproses lagi.

**Contoh kode.**

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

**Penjelasan kode baris demi baris.**  
`def hitung_harga_salon(...):` membuat function bernama `hitung_harga_salon`.  
`layanan`, `harga`, dan `member` adalah parameter.  
`member=False` artinya nilai bawaan `member` adalah `False` jika tidak diisi.  
Blok `if` memeriksa apakah pelanggan adalah member.  
Jika ya, dihitung diskon 20 persen.  
Jika tidak, harga akhir sama dengan harga awal.  
`return harga_akhir` mengembalikan hasil perhitungan keluar dari function.  
Dua baris berikutnya memanggil function dengan data berbeda.  
Dua baris `print` menampilkan hasil yang sudah disimpan ke variabel.

**Penjelasan teori rinci.**  
Function penting karena menjaga kode tetap rapi. Tanpa function, programmer mudah mengulang logika yang sama berkali-kali. Itu berbahaya karena jika suatu hari ada perubahan aturan, semua duplikasi harus diperbaiki satu per satu. Dengan function, perubahan cukup dilakukan di satu tempat.

Parameter membuat function fleksibel. Kita tidak perlu menulis function baru untuk setiap variasi kasus. Cukup buat function umum, lalu kirim data yang berbeda-beda saat memanggilnya. Inilah salah satu inti berpikir komputasional: jangan ulang pekerjaan yang sama jika bisa dibungkus menjadi pola yang reusable.

Perbedaan `print` dan `return` sering menjadi batu sandungan pemula. Jika fungsi hanya mencetak hasil, nilai itu tidak otomatis bisa dipakai untuk operasi lanjutan. Jika fungsi mengembalikan nilai dengan `return`, barulah nilai itu bisa disimpan, dihitung lagi, atau dipakai di bagian lain program.

**Common mistakes.**  
Mencetak hasil di dalam function padahal ingin memakainya lagi. Menulis nama function yang tidak jelas. Lupa memberikan `return` ketika function harus menghasilkan nilai.

**Best practices.**  
Gunakan nama function yang menjelaskan aksi, misalnya `hitung_diskon` atau `kategori_skor`. Buat function melakukan satu tugas utama. Pisahkan logika perhitungan dari logika tampilan output jika memungkinkan.

**Hubungan konsep ini dengan AI.**  
Dalam workflow AI, function sangat penting untuk preprocessing data, evaluasi sederhana, pengubahan format, atau pelaporan hasil. Peserta yang terbiasa menulis function akan lebih mudah membangun pipeline yang rapi nantinya. fileciteturn0file0

**Latihan kecil.**  
Buat function `sapa_pelanggan(nama)` yang mengembalikan string sapaan.

**Ringkasan chapter.**  
Function membuat kode lebih terstruktur, mudah dipakai ulang, dan lebih mudah dirawat. Parameter memberi fleksibilitas. `Return` memberi nilai balik yang bisa dipakai lagi oleh program. fileciteturn0file0

**Chapter Lambda dan Generator**

**Tujuan chapter.** Peserta mengenal function singkat satu baris dan konsep menghasilkan data sedikit demi sedikit. fileciteturn0file0

**Konsep utama.** Snapshot lama mengenalkan lambda sebagai function instan dan generator sebagai pendekatan lazy evaluation yang hemat memori. Untuk pemula, yang terpenting bukan menghafal istilah, tetapi memahami kapan dua konsep ini membantu. fileciteturn0file0

**Analogi sederhana.** Lambda seperti kios sementara untuk kebutuhan cepat dan sederhana. Generator seperti petugas antrean yang memanggil nomor satu per satu, bukan mencetak semua nomor sekaligus dan menumpuknya.

**Contoh kode.**

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

**Penjelasan kode baris demi baris.**  
`diskon_50 = lambda harga: harga * 0.5` membuat function anonim sederhana yang menerima `harga` dan mengembalikan setengahnya.  
`diskon_50(200000)` memanggil function tersebut.  
`def pembuat_nomor_antrean():` membuat generator function.  
Setiap `yield` berarti generator akan “mengeluarkan” satu nilai lalu berhenti sejenak.  
`mesin_antrean = pembuat_nomor_antrean()` membuat objek generator.  
`next(mesin_antrean)` meminta nilai berikutnya dari generator.

**Penjelasan teori rinci.**  
Lambda berguna saat fungsi yang dibutuhkan sangat sederhana dan hanya dipakai singkat. Namun, lambda jangan dipakai berlebihan. Jika logika sudah mulai panjang, function biasa dengan `def` biasanya lebih mudah dibaca.

Generator penting untuk mengenalkan pola pikir efisiensi. Ketika data sangat banyak, tidak selalu bijak membuat semua hasil sekaligus di memori. Generator mengajarkan bahwa data bisa diproduksi saat dibutuhkan. Meskipun contoh snapshot masih sederhana, idenya sangat relevan untuk dunia data dan AI yang sering berhadapan dengan data berukuran besar.

**Common mistakes.**  
Memaksa lambda untuk logika yang terlalu rumit. Mengira generator otomatis berjalan tanpa dipanggil. Bingung membedakan `return` dan `yield`.

**Best practices.**  
Gunakan lambda hanya untuk ekspresi singkat. Gunakan generator saat ingin memproses aliran data bertahap. Prioritaskan keterbacaan; jika kode terasa membingungkan, kembali ke function biasa.

**Hubungan konsep ini dengan AI.**  
Di AI dan data science, efisiensi memori sangat penting. Walaupun nanti peserta mungkin memakai library yang lebih canggih, konsep dasar bahwa data bisa diproses bertahap sangat berharga. Lambda juga sering muncul pada operasi singkat seperti transformasi data sederhana. fileciteturn0file0

**Latihan kecil.**  
Buat lambda untuk mengubah skor menjadi dua kali lipat. Lalu buat generator yang mengeluarkan tiga nama file dataset secara berurutan.

**Ringkasan chapter.**  
Lambda membantu saat kita butuh function singkat. Generator membantu saat kita ingin menghasilkan data sedikit demi sedikit, bukan sekaligus. Keduanya menambah wawasan peserta tentang gaya menulis Python yang lebih fleksibel. fileciteturn0file0

**Topik Arsitektur dan I/O**

**Chapter OOP Dasar**

**Tujuan chapter.** Peserta memahami class, object, attribute, method, `__init__`, dan `self` pada tingkat dasar. fileciteturn0file0

**Konsep utama.** Snapshot lama memperkenalkan OOP sebagai cara membungkus data dan function menjadi satu entitas. Ini sangat berguna ketika sistem tumbuh lebih besar dan kita ingin model data yang lebih terstruktur. fileciteturn0file0

**Analogi sederhana.** Class adalah blueprint tas tangan. Object adalah tas nyata yang dibuat dari blueprint itu. Attribute adalah ciri-ciri tas, seperti warna dan pemilik. Method adalah aksi yang bisa dilakukan tas, misalnya menambahkan isi.

**Contoh kode.**

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

**Penjelasan kode baris demi baris.**  
`class TasKosmetik:` mendefinisikan cetakan object baru.  
`__init__` adalah method khusus yang berjalan saat object dibuat.  
`self.warna = warna` menyimpan nilai parameter ke attribute object.  
`self.isi = []` membuat list isi tas yang awalnya kosong.  
`masukkan_barang` adalah method untuk menambah barang ke dalam tas.  
`append(barang)` memasukkan barang ke list `isi`.  
Dua baris pembuatan object menghasilkan dua tas dengan data berbeda.  
Dua pemanggilan method menambahkan barang ke tiap object.  
Baris terakhir menampilkan isi tas Aisyah.

**Penjelasan teori rinci.**  
OOP berguna saat kita tidak hanya punya satu data sederhana, tetapi kumpulan data yang saling terkait dengan perilakunya. Misalnya, peserta, dataset, model, atau file log. Dengan OOP, kita bisa menyangga data dan fungsi yang relevan dalam satu wadah yang sama.

Namun, untuk pemula, penting untuk tidak menganggap OOP sebagai satu-satunya cara menulis program. Banyak script sederhana cukup memakai function. OOP menjadi sangat berguna saat sistem mulai membesar, saat ada banyak entitas sejenis, atau saat kita ingin struktur yang lebih mudah dirawat.

**Common mistakes.**  
Lupa menulis `self` pada parameter method. Bingung antara class dan object. Terlalu cepat memakai OOP untuk program yang sebenarnya sangat sederhana.

**Best practices.**  
Gunakan OOP ketika ada entitas yang jelas dan punya data serta perilaku. Pilih nama class yang berupa kata benda, misalnya `Dataset` atau `Peserta`. Simpan method yang benar-benar relevan dengan object itu.

**Hubungan konsep ini dengan AI.**  
Banyak library AI dan data science memakai pola object-oriented. Model, dataset, tokenizer, dan trainer sering direpresentasikan sebagai object. Jadi, memahami OOP dasar membantu peserta lebih siap membaca kode dunia nyata nanti. fileciteturn0file0

**Latihan kecil.**  
Buat class `PesertaHerAI` dengan attribute `nama` dan `minat`, lalu method `perkenalan()` yang mencetak profil singkat.

**Ringkasan chapter.**  
OOP membantu kita memodelkan dunia nyata ke dalam kode melalui class dan object. Ini membuat program lebih terstruktur ketika mulai berkembang. fileciteturn0file0

**Chapter Error Handling**

**Tujuan chapter.** Peserta memahami bahwa error bisa diantisipasi, bukan sekadar ditakuti. fileciteturn0file0

**Konsep utama.** Snapshot lama memperkenalkan `try`, `except`, dan `finally` sebagai cara menyiapkan rencana cadangan ketika error terjadi. Ini adalah keterampilan praktis yang sangat penting. fileciteturn0file0

**Analogi sederhana.** Error handling seperti menyiapkan payung, jas hujan, dan tenda cadangan sebelum acara luar ruangan. Jika hujan turun, acara tidak harus bubar.

**Contoh kode.**

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

**Penjelasan kode baris demi baris.**  
`try:` menandai blok kode yang berpotensi error.  
`angka = 100` dan `pembagi = 0` menyiapkan operasi.  
`hasil = angka / pembagi` memicu error karena pembagian nol tidak diperbolehkan.  
Jika error itu terjadi, Python masuk ke blok `except ZeroDivisionError:`.  
Di situ, program mencetak pesan yang lebih ramah.  
`finally:` selalu dijalankan, baik error terjadi maupun tidak.

**Penjelasan teori rinci.**  
Pemula sering menganggap error sebagai tanda kegagalan total. Padahal, error justru memberi informasi penting. Error handling mengajarkan dua hal sekaligus: menerima bahwa program bisa gagal, dan merancang agar kegagalan itu dikelola dengan baik.

Di dunia nyata, program berinteraksi dengan file yang mungkin hilang, input pengguna yang mungkin salah, atau data yang mungkin kosong. Jika semua kasus buruk diabaikan, program akan rapuh. Dengan error handling, kita membuat program yang lebih tahan banting dan lebih manusiawi.

**Common mistakes.**  
Menulis `except:` terlalu umum tanpa tahu error apa yang ingin ditangkap. Menggunakan error handling untuk menutupi bug logika yang seharusnya diperbaiki. Tidak memberi pesan error yang membantu pengguna.

**Best practices.**  
Tangkap error yang spesifik jika memungkinkan. Tulis pesan yang jelas. Gunakan error handling sebagai perlindungan, bukan sebagai pengganti debugging.

**Hubungan konsep ini dengan AI.**  
Dalam proyek AI, error bisa muncul dari file dataset yang hilang, format data salah, library belum terpasang, atau nilai kosong. Kebiasaan menangani error sejak awal membuat pipeline data lebih andal. fileciteturn0file0

**Latihan kecil.**  
Buat program yang meminta dua angka, lalu tangani kasus ketika angka kedua adalah nol.

**Ringkasan chapter.**  
Error handling bukan hanya fitur tambahan. Ia adalah bagian dari cara membuat program yang lebih aman, stabil, dan siap menghadapi kenyataan. fileciteturn0file0

**Chapter File I/O**

**Tujuan chapter.** Peserta memahami cara menulis ke file dan membaca isi file. fileciteturn0file0

**Konsep utama.** Snapshot lama memakai contoh buku tamu digital. Konsep intinya adalah program tidak selalu hidup hanya di memori sesaat; program juga perlu menyimpan data ke file dan membacanya kembali. fileciteturn0file0

**Analogi sederhana.** Membaca file seperti membuka buku catatan yang sudah ada. Menulis file seperti mengisi buku tamu baru.

**Contoh kode.**

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

**Penjelasan kode baris demi baris.**  
`open("buku_tamu.txt", "w")` membuka file dalam mode tulis. Jika file belum ada, file akan dibuat.  
Dua baris `write(...)` menuliskan nama ke file.  
`close()` menutup file agar perubahan tersimpan dengan benar.  
Lalu file dibuka lagi dengan mode baca `"r"`.  
`read()` mengambil seluruh isi file sebagai string.  
Isi file kemudian dicetak ke layar.  
Terakhir, file ditutup kembali.

**Penjelasan teori rinci.**  
File I/O membuat program terasa lebih nyata karena hasilnya tidak hilang setelah program selesai. Dalam data science dan AI, membaca file adalah aktivitas yang sangat umum: membuka dataset, membaca konfigurasi, atau menyimpan log eksperimen.

Snapshot lama juga memberi pro tip penting: gunakan `with open(...) as file:` agar file tertutup otomatis. Ini kebiasaan yang baik karena lebih aman. Walaupun contoh dasar memakai `open()` dan `close()` eksplisit untuk tujuan belajar, peserta sebaiknya segera dibiasakan mengenal versi yang lebih rapi.

**Common mistakes.**  
Lupa menutup file. Salah memakai mode file, misalnya ingin membaca tetapi menulis. Tidak menyadari bahwa mode `"w"` bisa menimpa isi file lama.

**Best practices.**  
Gunakan `with open(...)` jika sudah siap. Pilih mode file dengan sadar. Simpan file dengan nama yang jelas dan mudah dikenali.

**Hubungan konsep ini dengan AI.**  
Sebelum mengenal database atau pipeline modern, peserta harus dulu nyaman membaca dan menyimpan data sederhana melalui file. Banyak titik awal project AI tetap dimulai dari file teks atau CSV. fileciteturn0file0

**Latihan kecil.**  
Tulis tiga tujuan belajar AI kamu ke file `target_belajar.txt`, lalu baca lagi file itu dan tampilkan ke layar.

**Ringkasan chapter.**  
File I/O menghubungkan program dengan data di luar program itu sendiri. Ini adalah pintu menuju pekerjaan data yang lebih nyata. fileciteturn0file0

**Topik Ekosistem Data Science**

**Chapter NumPy**

**Tujuan chapter.** Peserta mengenal NumPy sebagai alat untuk komputasi numerik yang efisien. fileciteturn0file0

**Konsep utama.** Snapshot lama menjelaskan NumPy sebagai “kalkulator massal” yang memungkinkan operasi pada banyak angka sekaligus melalui array dan vectorization. fileciteturn0file0

**Analogi sederhana.** Jika list biasa seperti kasir yang memindai barang satu per satu, NumPy seperti mesin pemindai yang bisa memproses satu keranjang sekaligus.

**Contoh kode.**

```python
import numpy as np

harga_list = [10000, 20000, 30000, 40000]
harga_np = np.array([10000, 20000, 30000, 40000])

harga_diskon = harga_np * 0.5

print("Harga awal  :", harga_np)
print("Harga diskon:", harga_diskon)
```

**Penjelasan kode baris demi baris.**  
`import numpy as np` mengimpor library NumPy dengan alias `np`, yang merupakan kebiasaan umum.  
`harga_list` adalah list Python biasa.  
`np.array([...])` mengubah data menjadi array NumPy.  
`harga_np * 0.5` mengalikan semua elemen array sekaligus.  
Dua `print` menampilkan hasil sebelum dan sesudah diskon.

**Penjelasan teori rinci.**  
Mengapa NumPy penting? Karena ketika data berupa angka dalam jumlah besar, kita ingin operasi yang cepat, ringkas, dan konsisten. NumPy menyediakan array multidimensi dan operasi matematis yang dirancang untuk kebutuhan seperti itu.

Perbedaan list biasa dan array NumPy tidak hanya soal sintaks, tetapi juga soal niat penggunaan. List cocok untuk koleksi umum. NumPy cocok ketika kita serius bekerja dengan data numerik. Dari sinilah nanti peserta lebih siap memahami data matrix, tensor sederhana, atau operasi statistik dasar.

**Common mistakes.**  
Mengira array NumPy sama persis dengan list biasa. Bingung karena operasi pada array berlaku ke semua elemen. Lupa mengimpor NumPy sebelum memakainya.

**Best practices.**  
Gunakan alias `np`. Gunakan NumPy untuk data numerik, bukan semua jenis data campuran. Selalu cek bentuk data jika hasil terasa aneh.

**Hubungan konsep ini dengan AI.**  
AI bekerja sangat dekat dengan representasi numerik. Gambar, teks yang dienkode, dan fitur data pada akhirnya sering menjadi angka. NumPy membantu peserta mulai akrab dengan dunia komputasi numerik itu. fileciteturn0file0

**Latihan kecil.**  
Buat array berisi lima nilai, lalu hitung versi yang dinaikkan 10 persen.

**Ringkasan chapter.**  
NumPy adalah gerbang awal komputasi numerik yang efisien di Python. Ia sangat penting sebagai fondasi sebelum peserta masuk ke teknik AI yang lebih lanjut. fileciteturn0file0

**Chapter Pandas**

**Tujuan chapter.** Peserta memahami DataFrame sebagai struktur data tabular yang sangat penting dalam data science. fileciteturn0file0

**Konsep utama.** Snapshot lama menggambarkan Pandas sebagai “Excel super canggih” yang cocok untuk data campuran seperti nama, umur, status, dan kategori. fileciteturn0file0

**Analogi sederhana.** Jika NumPy fokus pada angka murni, Pandas seperti spreadsheet pintar yang bisa dipilih, difilter, dibersihkan, dan dianalisis lewat kode.

**Contoh kode.**

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

**Penjelasan kode baris demi baris.**  
`import pandas as pd` mengimpor Pandas dengan alias `pd`.  
`data_mentah` adalah dictionary berisi kolom-kolom data.  
`pd.DataFrame(data_mentah)` mengubah dictionary menjadi tabel DataFrame.  
`print(df)` menampilkan seluruh tabel.  
`df["VIP"] == True` membuat filter boolean untuk kolom `VIP`.  
`df[df["VIP"] == True]` mengambil hanya baris yang `VIP`-nya bernilai benar.

**Penjelasan teori rinci.**  
Pandas sangat penting karena data dunia nyata jarang datang sebagai angka murni yang rapi. Banyak dataset berisi campuran nama, tanggal, status, kategori, dan nilai angka. DataFrame memberi struktur baris dan kolom yang sangat intuitif.

Bagi pemula, hal paling penting adalah membayangkan DataFrame sebagai tabel yang bisa diprogram. Artinya, apa yang biasa dilakukan manual di spreadsheet kini bisa dilakukan secara sistematis dan dapat diulang. Ini sangat berharga dalam AI karena pembersihan dan pemahaman data sering memakan waktu besar.

**Common mistakes.**  
Mengira kolom dan baris selalu otomatis bersih. Bingung saat memfilter data karena lupa tanda perbandingan. Tidak membedakan DataFrame dan dictionary biasa.

**Best practices.**  
Gunakan nama kolom yang jelas. Tampilkan sebagian data dulu untuk memahami bentuk dataset. Biasakan memeriksa hasil filter agar tahu apakah logikanya sesuai.

**Hubungan konsep ini dengan AI.**  
Sebelum model AI belajar, data hampir selalu perlu diperiksa, dibersihkan, atau diubah. Pandas adalah alat kerja utama untuk tahap itu. Peserta yang nyaman dengan DataFrame akan lebih siap saat memasuki machine learning. fileciteturn0file0

**Latihan kecil.**  
Buat DataFrame berisi nama peserta, jam belajar, dan status lulus. Tampilkan hanya peserta yang lulus.

**Ringkasan chapter.**  
Pandas membantu Python menangani data tabular dengan cara yang praktis dan kuat. Ini adalah salah satu library paling penting di jalur belajar AI. fileciteturn0file0

**Chapter Membaca Dataset CSV**

**Tujuan chapter.** Peserta memahami bahwa data nyata sering datang dari file, terutama CSV, dan Pandas bisa membacanya dengan mudah. fileciteturn0file0

**Konsep utama.** Snapshot lama menekankan bahwa di dunia AI nyata, data jarang diketik manual. CSV adalah format umum untuk dataset tabular, dan `pd.read_csv()` adalah salah satu gerbang utama untuk memasukinya. fileciteturn0file0

**Analogi sederhana.** Jika DataFrame adalah meja kerja, maka file CSV adalah kardus data yang baru datang dari luar. `read_csv()` adalah cara membuka kardus itu dan menata isinya ke atas meja.

**Contoh kode.**

```python
import pandas as pd

dataset_penjualan = pd.read_csv("penjualan_sepatu_2020_2025.csv")
print(dataset_penjualan.head())
```

**Penjelasan kode baris demi baris.**  
Baris pertama mengimpor Pandas.  
Baris kedua membaca file CSV bernama `penjualan_sepatu_2020_2025.csv` menjadi DataFrame.  
Baris ketiga menampilkan lima baris pertama dengan `.head()` agar kita bisa melihat struktur awal dataset tanpa mencetak semuanya.

**Penjelasan teori rinci.**  
CSV adalah format sederhana tetapi sangat umum. Nilai-nilai disusun dalam bentuk teks dengan pemisah koma dan dibaca sebagai tabel. Karena sederhana, format ini mudah dipertukarkan antar-aplikasi.

Untuk pemula, membiasakan diri dengan `.head()` adalah kebiasaan yang sangat baik. Saat dataset besar, kita tidak perlu menampilkan seluruh isi tabel. Cukup lihat bagian atasnya untuk memahami nama kolom, isi awal, dan apakah file berhasil dimuat dengan benar.

**Common mistakes.**  
Salah nama file atau salah lokasi file. Mengira file pasti bersih hanya karena bisa dibaca. Langsung menganalisis data tanpa melihat isi awalnya.

**Best practices.**  
Cek nama kolom segera setelah membaca dataset. Gunakan `.head()` untuk inspeksi awal. Simpan file dataset dengan nama yang konsisten.

**Hubungan konsep ini dengan AI.**  
Banyak proyek AI dimulai dari `read_csv()`. Sebelum model ada, selalu ada tahap membuka data, memeriksa data, dan memahami data. Inilah langkah awal itu. fileciteturn0file0

**Latihan kecil.**  
Bayangkan kamu memiliki CSV berisi nilai peserta. Tuliskan langkah pertama yang akan kamu lakukan setelah membaca file tersebut dengan Pandas.

**Ringkasan chapter.**  
Membaca CSV adalah keterampilan dasar yang membuka jalan ke analisis data nyata. Ini adalah penghubung antara file luar dan proses analisis di Python. fileciteturn0file0

## Latihan Lengkap

Snapshot lama menyediakan enam latihan interaktif: tipe data dan variabel, list dan dictionary, control flow, functions, libraries AI, serta OOP dan error handling. Di bawah ini, setiap latihan dijabarkan menjadi versi yang lebih lengkap, termasuk tujuan, instruksi, contoh jawaban ideal, dan rubrik sederhana. fileciteturn0file0

**Latihan tipe data dan variabel**

**Tujuan latihan.** Membantu peserta membedakan tipe data dasar dan menghubungkannya dengan konteks AI. fileciteturn0file0

**Soal reflektif.** Tulis empat variabel berbeda dengan tipe `str`, `int`, `float`, dan `bool`. Jelaskan kegunaan masing-masing tipe data dalam konteks data AI. fileciteturn0file0

**Instruksi coding.** Definisikan empat variabel dengan nilai yang bermakna, lalu gunakan `type()` untuk memeriksa klasifikasinya.

**Expected output.** Program menampilkan isi dan tipe data masing-masing variabel, misalnya `<class 'str'>`, `<class 'int'>`, `<class 'float'>`, dan `<class 'bool'>`. fileciteturn0file0

**Contoh jawaban ideal.**

```python
nama_model = "HerAI Assistant"
jumlah_data = 100
akurasi_awal = 87.5
siap_dipakai = True

print(nama_model, type(nama_model))
print(jumlah_data, type(jumlah_data))
print(akurasi_awal, type(akurasi_awal))
print(siap_dipakai, type(siap_dipakai))
```

**Penjelasan jawaban.**  
`nama_model` memakai string karena berisi teks. `jumlah_data` memakai integer karena menghitung jumlah. `akurasi_awal` memakai float karena ada angka desimal. `siap_dipakai` memakai boolean karena hanya punya dua kemungkinan: ya atau tidak.

**Rubrik jawaban bagus.**  
Jawaban bagus menampilkan empat tipe data yang benar, nama variabel yang jelas, dan penjelasan yang mengaitkan tiap tipe dengan kebutuhan AI atau data.

**Latihan list dan dictionary**

**Tujuan latihan.** Membantu peserta memahami kapan memakai list dan kapan memakai dictionary. fileciteturn0file0

**Soal reflektif.** Buat contoh list dan dictionary. Kapan kamu memilih list dibanding dict saat memproses data AI? fileciteturn0file0

**Instruksi coding.** Buat list berisi angka, lalu hitung nilai tertinggi dan rata-ratanya. Buat dictionary berisi profil sederhana, lalu akses salah satu key di dalamnya.

**Expected output.** Program menampilkan nilai tertinggi, rata-rata, dan informasi profil seperti skill Python. Snapshot lama memberi contoh target seperti nilai tertinggi 92 dan rata-rata 78.8. fileciteturn0file0

**Contoh jawaban ideal.**

```python
nilai = [70, 85, 92, 68, 79]
profil = {"nama": "Aisyah", "skill": "Python", "minat": "AI"}

print("Nilai tertinggi:", max(nilai))
print("Rata-rata:", sum(nilai) / len(nilai))
print("Skill utama:", profil["skill"])
```

**Penjelasan jawaban.**  
List `nilai` cocok karena data berupa urutan angka yang bisa dihitung bersama. Dictionary `profil` cocok karena kita ingin mencari informasi berdasarkan label seperti `nama` dan `skill`.

**Rubrik jawaban bagus.**  
Jawaban bagus menggunakan list dan dictionary secara tepat, menunjukkan operasi sederhana pada keduanya, dan mampu menjelaskan alasan pemilihan struktur data.

**Latihan control flow**

**Tujuan latihan.** Membantu peserta menerjemahkan aturan sederhana ke dalam logika program. fileciteturn0file0

**Soal reflektif.** Gunakan loop untuk mencetak status “Lulus” atau “Remedial”. Jelaskan logikanya. fileciteturn0file0

**Instruksi coding.** Gunakan `for` dan `if-else` untuk memeriksa daftar nilai ujian.

**Expected output.** Nilai `>= 75` mencetak “Lulus”, sedangkan yang di bawah itu mencetak “Remedial”. fileciteturn0file0

**Contoh jawaban ideal.**

```python
nilai_ujian = [80, 72, 90, 60, 76]

for nilai in nilai_ujian:
    if nilai >= 75:
        print(nilai, "- Lulus")
    else:
        print(nilai, "- Remedial")
```

**Penjelasan jawaban.**  
Loop memeriksa setiap nilai. Percabangan memutuskan status berdasarkan ambang batas 75. Ini contoh klasik bagaimana aturan manusia bisa diterjemahkan menjadi logika komputer.

**Rubrik jawaban bagus.**  
Jawaban bagus memakai loop dengan benar, kondisi logisnya konsisten, dan output mudah dibaca.

**Latihan functions**

**Tujuan latihan.** Membantu peserta memahami manfaat function sebagai alat merapikan logika. fileciteturn0file0

**Soal reflektif.** Tulis function `kategori_skor` yang mengembalikan kategori berdasarkan skor. Kenapa function penting? fileciteturn0file0

**Instruksi coding.** Buat function yang menerima angka lalu mengembalikan string kategori.

**Expected output.** Menghasilkan kategori seperti “Tinggi”, “Sedang”, atau “Rendah”. fileciteturn0file0

**Contoh jawaban ideal.**

```python
def kategori_skor(skor):
    if skor >= 85:
        return "Tinggi"
    elif skor >= 70:
        return "Sedang"
    else:
        return "Rendah"

print(kategori_skor(90))
print(kategori_skor(75))
print(kategori_skor(50))
```

**Penjelasan jawaban.**  
Function menerima `skor`, memeriksa rentangnya, lalu mengembalikan kategori. Function penting karena aturan penilaian ini bisa dipakai berulang tanpa menulis ulang logika yang sama.

**Rubrik jawaban bagus.**  
Jawaban bagus menggunakan `return`, punya logika kategori yang konsisten, dan bisa dipanggil ulang untuk beberapa nilai.

**Latihan libraries AI**

**Tujuan latihan.** Membantu peserta mengenal penggunaan dasar NumPy dan Pandas dalam workflow AI. fileciteturn0file0

**Soal reflektif.** Jelaskan kegunaan NumPy dan Pandas dalam workflow AI. Tulis contoh kode sederhana. fileciteturn0file0

**Instruksi coding.** Gunakan NumPy untuk memproses array angka dan menghitung statistik dasar.

**Expected output.** Program menampilkan metrik matematika seperti mean sekitar 78.8 dan standar deviasi. Snapshot lama menyebut mean 78.8 dan standar deviasi 10.02 sebagai contoh target output. fileciteturn0file0

**Contoh jawaban ideal.**

```python
import numpy as np

nilai = np.array([70, 85, 92, 68, 79])
print("Mean:", np.mean(nilai))
print("Std:", round(np.std(nilai), 2))
```

**Penjelasan jawaban.**  
NumPy memudahkan perhitungan banyak angka sekaligus. Dalam AI, ini penting karena fitur dan data numerik sering perlu diringkas secara statistik sebelum dipakai lebih lanjut.

**Rubrik jawaban bagus.**  
Jawaban bagus berhasil mengimpor NumPy, membuat array, memanggil fungsi statistik, dan menjelaskan mengapa statistik dasar bermanfaat.

**Latihan OOP dan error handling**

**Tujuan latihan.** Membantu peserta menggabungkan dua konsep yang terlihat berbeda: struktur object dan perlindungan terhadap error. fileciteturn0file0

**Soal reflektif.** Buat class `Dataset` sederhana yang memiliki error handling jika data kosong. fileciteturn0file0

**Instruksi coding.** Rancang class sederhana yang menyimpan data dan punya method untuk menampilkan ringkasan. Jika data kosong, tampilkan peringatan.

**Expected output.** Data yang ada ditampilkan normal, sedangkan list kosong ditangkap sebagai peringatan. fileciteturn0file0

**Contoh jawaban ideal.**

```python
class Dataset:
    def __init__(self, data):
        self.data = data

    def tampilkan_ringkasan(self):
        try:
            if len(self.data) == 0:
                raise ValueError("Dataset kosong")
            print("Jumlah data:", len(self.data))
            print("Data pertama:", self.data[0])
        except ValueError as e:
            print("Peringatan:", e)

dataset1 = Dataset([10, 20, 30])
dataset2 = Dataset([])

dataset1.tampilkan_ringkasan()
dataset2.tampilkan_ringkasan()
```

**Penjelasan jawaban.**  
Class `Dataset` menyimpan data dalam attribute. Method `tampilkan_ringkasan()` memeriksa panjang data. Jika kosong, method memicu `ValueError` lalu menanganinya dengan `except`.

**Rubrik jawaban bagus.**  
Jawaban bagus punya class yang valid, method yang jelas, logika pengecekan data kosong, dan penanganan error yang memberikan pesan yang mudah dipahami.

## Kuis Lengkap

Snapshot lama menyediakan kuis berisi sepuluh soal pilihan ganda. Di bawah ini, seluruh soal ditulis ulang lengkap dengan opsi, jawaban benar, alasan jawaban benar, dan alasan mengapa opsi lain kurang tepat. fileciteturn0file0

**Soal tentang tipe data float**  
Apa tipe data dari nilai `3.14` di Python?

A. `int`  
B. `float`  
C. `str`

**Jawaban benar:** B. `float`  
**Alasan benar:** `3.14` memiliki bagian desimal, sehingga Python menganggapnya sebagai bilangan pecahan atau `float`.  
**Mengapa A salah:** `int` hanya untuk bilangan bulat tanpa desimal.  
**Mengapa C salah:** `str` adalah teks; `3.14` baru menjadi string jika ditulis dalam tanda kutip, misalnya `"3.14"`. fileciteturn0file0

**Soal tentang list kosong**  
Bagaimana cara membuat list kosong?

A. `[]`  
B. `{}`  
C. `()`

**Jawaban benar:** A. `[]`  
**Alasan benar:** Tanda kurung siku dipakai untuk membuat list, termasuk list kosong.  
**Mengapa B salah:** `{}` biasanya merepresentasikan dictionary kosong.  
**Mengapa C salah:** `()` dipakai untuk tuple kosong. fileciteturn0file0

**Soal tentang operasi string**  
Apa hasil dari ekspresi `"ai" * 3` di Python?

A. `"ai3"`  
B. Error  
C. `"aiaiai"`

**Jawaban benar:** C. `"aiaiai"`  
**Alasan benar:** Operator `*` pada string di Python mengulang isi string sesuai jumlah yang diberikan.  
**Mengapa A salah:** Python tidak otomatis menempelkan angka sebagai teks di belakang string.  
**Mengapa B salah:** Operasi ini valid dalam Python, jadi tidak menghasilkan error. fileciteturn0file0

**Soal tentang function**  
Keyword apa yang digunakan untuk membuat function?

A. `function`  
B. `def`  
C. `func`

**Jawaban benar:** B. `def`  
**Alasan benar:** Python menggunakan kata kunci `def` untuk mendefinisikan function.  
**Mengapa A salah:** `function` terdengar masuk akal, tetapi bukan sintaks Python.  
**Mengapa C salah:** `func` juga bukan keyword resmi Python. fileciteturn0file0

**Soal tentang dictionary**  
Dictionary di Python menyimpan data dalam bentuk apa?

A. Pasangan key-value  
B. Urutan indeks numerik  
C. Kumpulan nilai unik saja

**Jawaban benar:** A. Pasangan key-value  
**Alasan benar:** Dictionary menyimpan data dengan label `key` yang mengarah ke `value`.  
**Mengapa B salah:** Deskripsi itu lebih cocok untuk list dan struktur berurutan lainnya.  
**Mengapa C salah:** Kumpulan nilai unik adalah karakteristik set, bukan dictionary. fileciteturn0file0

**Soal tentang fungsi len**  
Apa output dari `len([1,2,3])`?

A. `2`  
B. `[1,2,3]`  
C. `3`

**Jawaban benar:** C. `3`  
**Alasan benar:** `len()` menghitung jumlah elemen dalam list, dan list tersebut punya tiga elemen.  
**Mengapa A salah:** Itu bukan jumlah elemen yang sebenarnya.  
**Mengapa B salah:** `len()` tidak mengembalikan list, tetapi jumlah elemennya. fileciteturn0file0

**Soal tentang range**  
`range(5)` menghasilkan deret angka apa?

A. `0, 1, 2, 3, 4`  
B. `1, 2, 3, 4, 5`  
C. `0, 1, 2, 3, 4, 5`

**Jawaban benar:** A. `0, 1, 2, 3, 4`  
**Alasan benar:** `range(5)` dimulai dari 0 dan berhenti sebelum 5.  
**Mengapa B salah:** Itu mulai dari 1, bukan dari 0.  
**Mengapa C salah:** Itu memasukkan angka 5, padahal `range(5)` berhenti sebelum 5. fileciteturn0file0

**Soal tentang immutable**  
Manakah tipe data yang bersifat immutable?

A. `list`  
B. `dict`  
C. `tuple`

**Jawaban benar:** C. `tuple`  
**Alasan benar:** Tuple tidak bisa diubah elemennya setelah dibuat.  
**Mengapa A salah:** List bersifat mutable; elemen bisa ditambah, dihapus, atau diubah.  
**Mengapa B salah:** Dictionary juga mutable. fileciteturn0file0

**Soal tentang import NumPy**  
Bagaimana syntax yang benar untuk mengimpor library NumPy?

A. `include numpy`  
B. `using numpy`  
C. `import numpy`

**Jawaban benar:** C. `import numpy`  
**Alasan benar:** Python memakai keyword `import` untuk memuat library.  
**Mengapa A salah:** `include` bukan sintaks Python untuk import library.  
**Mengapa B salah:** `using` juga bukan sintaks Python standar untuk import. fileciteturn0file0

**Soal tentang peran Pandas**  
Apa kegunaan utama Pandas dalam data science?

A. Manipulasi dan analisis data tabular  
B. Membuat model machine learning  
C. Menampilkan grafik 3D

**Jawaban benar:** A. Manipulasi dan analisis data tabular  
**Alasan benar:** Pandas dirancang untuk bekerja dengan data berbentuk tabel seperti spreadsheet.  
**Mengapa B salah:** Model machine learning biasanya dibuat dengan library lain; Pandas lebih fokus ke pengolahan data.  
**Mengapa C salah:** Visualisasi 3D bukan fungsi utama Pandas. fileciteturn0file0

## Diskusi dan Mini Project

Snapshot lama menyediakan ruang diskusi dengan pertanyaan utama: bagaimana cara efektif belajar Python untuk pemula yang belum pernah coding sama sekali. Berikut versi yang diperluas agar diskusi lebih bernilai dan lebih mudah diarahkan oleh mentor. fileciteturn0file0

**Prompt diskusi utama.**  
Gimana cara efektif belajar Python untuk pemula yang belum pernah coding sama sekali?

**Pertanyaan lanjutan.**  
Apa bagian yang paling membingungkan saat pertama kali belajar Python: sintaks, error, atau logika?  
Menurutmu, apakah belajar coding lebih mudah dimulai dari contoh sehari-hari atau dari teori formal? Jelaskan.  
Dari semua topik di modul ini, mana yang menurutmu paling penting untuk persiapan AI: variabel, loop, function, atau Pandas? Mengapa?  
Bagaimana cara membedakan “saya belum paham konsep” dengan “saya hanya kurang latihan”?  
Apa strategi yang akan kamu lakukan jika programmu error terus tetapi kamu belum tahu letak masalahnya?

**Contoh jawaban diskusi yang bagus.**  
Menurut saya, cara paling efektif belajar Python untuk pemula adalah fokus pada kebiasaan kecil yang konsisten, bukan langsung mencoba materi yang terlalu berat. Saya akan mulai dari program sangat sederhana, misalnya `print()`, variabel, dan `if-else`, lalu mencoba mengubah contoh sedikit demi sedikit supaya saya benar-benar paham. Kalau ada error, saya tidak langsung panik, tetapi membaca pesan error dan membandingkan kode saya dengan contoh yang sudah benar. Untuk persiapan AI, saya merasa function dan struktur data paling penting karena hampir semua proses data memakai keduanya. Pandas juga penting, tetapi akan lebih mudah dipahami jika dasarnya sudah kuat. Jawaban seperti ini bagus karena tidak hanya memberi opini, tetapi juga menunjukkan strategi belajar, alasan, dan refleksi pribadi.

Bagian mini project belum ditulis eksplisit di snapshot lama untuk submodul Python, jadi di bawah ini ditambahkan satu mini project yang sepenuhnya masih sejalan dengan isi materi: variabel, list, dictionary, loop, function, error handling, dan pengolahan data sederhana. Penambahan ini tetap konsisten dengan tujuan snapshot lama sebagai fondasi Python untuk AI. fileciteturn0file0

**Mini project akhir: Analisis Nilai Belajar HerAI**

**Deskripsi project.**  
Buat program Python sederhana yang membantu menganalisis nilai belajar peserta. Program menerima data beberapa peserta, menghitung rata-rata, menentukan kategori skor, menampilkan siapa yang lulus, dan menyimpan ringkasan hasil ke file teks. Jika nanti peserta ingin menambah versi Pandas, itu menjadi bonus, bukan kewajiban.

**Tujuan project.**  
Project ini menggabungkan hampir semua fondasi yang sudah dipelajari: variabel, list atau dictionary, loop, if-else, function, file I/O, dan error handling. Peserta jadi melihat bahwa konsep-konsep kecil ternyata bisa bekerja bersama dalam satu program utuh.

**Langkah pengerjaan.**  
Mulailah dengan membuat daftar peserta dan nilai.  
Buat function `kategori_skor()` untuk mengembalikan “Tinggi”, “Sedang”, atau “Rendah”.  
Gunakan loop untuk menampilkan status tiap peserta.  
Hitung rata-rata seluruh nilai.  
Simpan laporan singkat ke file `laporan_nilai.txt`.  
Tambahkan penanganan error sederhana jika data kosong.

**Starter code.**

```python
data_peserta = [
    {"nama": "Aisyah", "nilai": 88},
    {"nama": "Budi", "nilai": 72},
    {"nama": "Citra", "nilai": 95},
    {"nama": "Diana", "nilai": 60}
]

def kategori_skor(skor):
    if skor >= 85:
        return "Tinggi"
    elif skor >= 70:
        return "Sedang"
    else:
        return "Rendah"

try:
    if len(data_peserta) == 0:
        raise ValueError("Data peserta kosong")

    total = 0

    for peserta in data_peserta:
        nama = peserta["nama"]
        nilai = peserta["nilai"]
        kategori = kategori_skor(nilai)

        if nilai >= 75:
            status = "Lulus"
        else:
            status = "Perlu Belajar Lagi"

        print(nama, "-", nilai, "-", kategori, "-", status)
        total += nilai

    rata_rata = total / len(data_peserta)
    print("Rata-rata kelas:", rata_rata)

    with open("laporan_nilai.txt", "w") as file:
        file.write("Laporan Nilai HerAI\n")
        file.write(f"Rata-rata kelas: {rata_rata}\n")

except ValueError as e:
    print("Error:", e)
```

**Expected output.**  
Setiap peserta ditampilkan bersama nilai, kategori, dan statusnya. Di akhir, program menampilkan rata-rata kelas. File `laporan_nilai.txt` juga harus berisi ringkasan dasar. Contoh output di terminal:

```python
Aisyah - 88 - Tinggi - Lulus
Budi - 72 - Sedang - Perlu Belajar Lagi
Citra - 95 - Tinggi - Lulus
Diana - 60 - Rendah - Perlu Belajar Lagi
Rata-rata kelas: 78.75
```

**Kriteria penilaian.**  
Program berjalan tanpa error untuk data normal.  
Peserta menggunakan minimal satu function.  
Peserta menggunakan loop dan if-else dengan benar.  
Program mampu membaca struktur data dengan tepat.  
Ada penyimpanan hasil ke file.  
Pesan output jelas dan mudah dipahami.  
Bonus nilai dapat diberikan jika peserta menulis kode rapi, memberi komentar singkat, atau membuat versi Pandas.

## Catatan untuk Developer

Bagian ini disusun agar materi mudah dipetakan ke aplikasi pembelajaran tanpa mengubah esensi konten snapshot lama. Snapshot lama sendiri sudah memisahkan struktur menjadi **materi, latihan, kuis, dan diskusi**, sehingga pemetaan ini tinggal dipertegas. fileciteturn0file0

**Bagian yang cocok menjadi materi inti.**  
Seluruh bagian pada seksi “Materi Lengkap per Topik dan Chapter” cocok dipakai sebagai halaman materi utama dan chapter dinamis. Setiap chapter sudah punya tujuan, konsep inti, analogi, teori, contoh kode, penjelasan baris demi baris, common mistakes, best practices, hubungan dengan AI, latihan kecil, dan ringkasan. Ini cocok dijadikan tampilan membaca bertahap per chapter.

**Bagian yang cocok menjadi latihan.**  
Seluruh bagian pada seksi “Latihan Lengkap” cocok dipisahkan ke halaman latihan. Desain interaktifnya ideal jika setiap latihan memiliki empat blok: soal reflektif, area kode, target output, dan contoh jawaban ideal atau feedback mentor. Rubrik jawaban bagus bisa dipakai sebagai panduan feedback otomatis atau manual.

**Bagian yang cocok menjadi kuis.**  
Seluruh bagian pada seksi “Kuis Lengkap” dapat langsung dipetakan ke halaman kuis pilihan ganda. Tiap soal sudah memiliki stem, opsi, jawaban benar, alasan benar, dan penjelasan kenapa opsi lain tidak tepat. Jika aplikasi hanya menampilkan skor akhir, alasan dapat disimpan sebagai data internal untuk mode review mentor atau versi pembelajaran berikutnya.

**Bagian yang cocok menjadi diskusi.**  
Bagian “Diskusi dan Mini Project” pada subbagian prompt diskusi, pertanyaan lanjutan, dan contoh jawaban diskusi bagus cocok dimasukkan ke halaman diskusi. Prompt utama bisa menjadi placeholder awal. Pertanyaan lanjutan bisa menjadi starter thread atau suggestion chip.

**Bagian yang cocok menjadi mini project.**  
Subbagian “Mini project akhir: Analisis Nilai Belajar HerAI” cocok diposisikan di akhir submodul, sesudah latihan inti atau sebagai tugas penutup sebelum peserta lanjut ke Konsep AI Modern. Starter code dapat ditampilkan opsional. Kriteria penilaian cocok dipakai oleh mentor, rubric checker, atau self-assessment participant.

**Catatan implementasi konten.**  
Jika developer ingin memecah materi menjadi chapter yang lebih nyaman dibaca, pemecahan paling alami mengikuti snapshot lama: Memulai Python, Struktur Data dan Logika, Modularitas dan Efisiensi, OOP dan File I/O, serta Library Data Science. Namun karena versi ini lebih naratif, setiap chapter sebaiknya tetap mempertahankan pola tetap: pembuka, konsep, contoh, penjelasan kode, kesalahan umum, praktik baik, dan latihan kecil. Dengan pola yang konsisten, peserta pemula akan merasa lebih aman karena tahu apa yang akan mereka temui di setiap chapter. fileciteturn0file0

**Catatan editorial.**  
Bahasa sebaiknya tetap dipertahankan ramah, tidak terlalu akademik, dan tidak terlalu padat istilah teknis tanpa penjelasan. Analogi sehari-hari yang sudah dipakai di snapshot lama merupakan kekuatan materi ini dan sebaiknya tetap dipertahankan sebagai ciri khas, lalu dirapikan agar konsisten. Jika perlu meringkas di UI, ringkaslah pada level tampilan, bukan dengan membuang isi inti. Secara substansi, seluruh bagian di atas sudah disusun agar lengkap dan siap dibaca peserta pemula. fileciteturn0file0