# **\\Kurikulum Komprehensif Pemrograman Python untuk Artificial Intelligence: Panduan Naratif dan Praktis HerAI Fellowship**

## **Deskripsi Submodul**

Submodul pemrograman ini dirancang khusus untuk menjembatani kesenjangan antara pemahaman konseptual kecerdasan buatan dan implementasi teknis nyata bagi peserta program HerAI Fellowship.1 Transisi dari teori dasar ke penulisan baris kode sering kali menjadi batu sandungan utama bagi pemula, terutama bagi mereka yang belum pernah memiliki latar belakang ilmu komputer. Oleh karena itu, modul ini mengambil pendekatan berbasis naratif-pedagogis yang menyusun setiap konsep secara bertahap, menghindari lompatan logika yang terlalu jauh, dan meletakkan dasar pemikiran komputasional yang kuat sebelum peserta diperkenalkan pada pustaka data science yang lebih kompleks.
Python dipilih sebagai bahasa pengantar tunggal dalam kurikulum ini bukan hanya karena popularitasnya, melainkan karena karakteristik arsitekturalnya yang sangat mendukung pembelajaran pemula sekaligus kebutuhan industri kecerdasan buatan modern.1 Berdasarkan dokumentasi resmi Python, bahasa ini menawarkan sintaksis yang bersih, elegan, dan minim gangguan visual, sehingga pembelajar dapat fokus pada logika pemecahan masalah tanpa harus terbebani oleh sintaksis yang rumit seperti alokasi memori manual atau deklarasi tipe data yang kaku.1 Python mendukung paradigma pemrograman berorientasi objek, fungsional, dan imperatif secara fleksibel, menjadikannya sarana yang ideal untuk mengekspresikan algoritma kecerdasan buatan secara intuitif.
Lebih jauh lagi, Python bertindak sebagai bahasa kontrol yang sangat efisien dalam ekosistem kecerdasan buatan.1 Proses komputasi intensif dalam kecerdasan buatan, seperti perkalian matriks dimensi tinggi pada jaringan saraf tiruan, sebagian besar diimplementasikan menggunakan bahasa tingkat rendah yang cepat seperti C atau C++.1 Python menyediakan lapisan abstraksi tingkat tinggi di atas komputasi tingkat rendah tersebut, memungkinkan para praktisi kecerdasan buatan untuk mengendalikan proses kalkulasi matematis yang berat dengan kode yang mudah ditulis dan dibaca.1 Dengan demikian, Python menggabungkan kemudahan pengembangan aplikasi dengan kecepatan eksekusi mesin komputasi modern.1
Fokus utama dari kurikulum ini adalah membangun kesiapan peserta dalam mengolah data.1 Sebelum melangkah ke topik-topik tingkat lanjut seperti pembelajaran mesin, pemrosesan bahasa alami, atau visi komputer, seorang praktisi kecerdasan buatan harus menguasai bagaimana data disimpan, diakses, dimanipulasi, dan disalurkan melalui alur program. Oleh karena itu, modul ini secara sengaja membatasi diri dari pembahasan model-model kecerdasan buatan yang terlalu rumit, dan memusatkan energi pengajaran pada struktur data dasar, logika percabangan, perulangan, fungsi, penanganan kesalahan, interaksi berkas, serta dasar-dasar manipulasi matriks dan tabel menggunakan NumPy dan Pandas.1

## **Learning Objectives Lengkap**

Setelah menyelesaikan submodul pemrograman ini, peserta HerAI Fellowship diharapkan mampu mencapai kompetensi berikut:

* Menjelaskan signifikansi peran Python sebagai bahasa kontrol utama dalam ekosistem kecerdasan buatan dan analisis data.1
* Mengonfigurasi lingkungan pengembangan lokal yang mandiri menggunakan Visual Studio Code, terminal, dan lingkungan virtual untuk mengisolasi dependensi proyek.1
* Mengidentifikasi dan menerapkan tipe data dasar secara tepat sesuai dengan karakteristik data yang dihadapi.
* Menggunakan struktur data koleksi untuk menyimpan, mengindeks, dan memanipulasi kumpulan data dalam memori program.
* Merancang alur kontrol keputusan menggunakan logika percabangan untuk menangani berbagai kondisi operasional.1
* Mengotomatisasi tugas-tugas berulang dengan menerapkan perulangan pada berbagai struktur data.1
* Menyusun fungsi yang modular, dapat digunakan kembali, dan bersih dengan parameterisasi serta nilai kembalian yang jelas.1
* Menerapkan ekspresi Lambda dan generator sederhana untuk pemrosesan aliran data yang efisien dan hemat memori.1
* Menjelaskan konsep dasar Pemrograman Berorientasi Objek seperti kelas, objek, konstruktor, dan pewarisan sifat.1
* Mengimplementasikan mekanisme penanganan kesalahan menggunakan blok try-except untuk membangun aplikasi yang tangguh.
* Melakukan operasi baca-tulis berkas pada format teks dan CSV secara aman menggunakan manajer konteks.1
* Membuat, memanipulasi, dan melakukan operasi matematika dasar pada array multi-dimensi menggunakan pustaka NumPy.
* Membaca dataset eksternal, melakukan inspeksi awal, dan memfilter data tabular sederhana menggunakan DataFrame Pandas.1

## **Prasyarat Peserta**

Submodul ini dirancang tanpa mengasumsikan adanya latar belakang atau pengalaman menulis kode sebelumnya dari peserta. Siapa pun yang memiliki kemampuan dasar untuk mengoperasikan komputer, seperti membuka aplikasi, mengetik menggunakan papan ketik, mengelola direktori berkas, dan mengakses internet, memenuhi syarat untuk memulai materi ini.1 Kurikulum ini disusun secara inklusif untuk menyambut pemula mutlak.
Meskipun demikian, terdapat prasyarat kognitif yang sangat penting, yaitu kesiapan mental untuk melatih cara berpikir komputasional.1 Pemrograman menuntut presisi tingkat tinggi karena komputer mengeksekusi instruksi secara harfiah dan tidak memiliki kemampuan untuk menebak maksud terselubung dari penulis kode.1 Peserta harus siap untuk menghadapi kesalahan sintaksis, memahami pesan eror sebagai petunjuk perbaikan, serta memiliki ketekunan untuk melakukan eksperimen berulang kali.1
Dari sisi perangkat lunak, peserta diwajibkan untuk mempersiapkan komputer atau laptop dengan sistem operasi modern (Windows, macOS, atau Linux) yang telah terpasang Python versi 3.10 atau yang lebih baru, editor teks Visual Studio Code beserta ekstensi Python resmi, serta akses ke terminal atau command prompt bawaan sistem operasi.1

| Komponen Lingkungan | Spesifikasi Rekomendasi | Peran dalam Pembelajaran |
| :---- | :---- | :---- |
| **Sistem Operasi** | Windows 10/11, macOS Big Sur+, atau Ubuntu 20.04+ | Menyediakan platform eksekusi utama. |
| **Interpreter Python** | Versi 3.10 atau lebih tinggi (64-bit) | Menerjemahkan dan mengeksekusi instruksi kode Python.1 |
| **Editor Kode** | Visual Studio Code (VS Code) terbaru | Menulis, mengedit, dan mengelola berkas kode.1 |
| **Ekstensi VS Code** | Paket Ekstensi Python (oleh Microsoft) | Menyediakan fitur penyorotan sintaksis, autolengkap, dan debugging.1 |
| **Lingkungan Virtual** | Modul bawaan venv | Mengisolasi pustaka proyek agar tidak merusak sistem global. |

## **Peta Besar Materi**

Kurikulum "Pemrograman Python untuk AI" dibagi menjadi lima fase pembelajaran yang berurutan 1:

\+-----------------------------------------------------------------------------------------------------------------+
|                                          PETA BESAR MATERI PYTHON UNTUK AI                                      |
\+-----------------------------------------------------------------------------------------------------------------+
| Fase 1: Memulai Python                     | Mengerti peran Python di ekosistem AI, instalasi workspace lokal,  |
|                                            | penggunaan terminal, serta isolasi dependensi dengan venv.  |
\+------------------------------------+----------------------------------------------------------------------------+
| Fase 2: Bahan Baku Program                 | Menguasai variabel, tipe data dasar, struktur data koleksi (List,  |
|                                            | Tuple, Dictionary, Set), kontrol percabangan, dan perulangan.|
\+------------------------------------+----------------------------------------------------------------------------+
| Fase 3: Kode yang Reusable                 | Memisahkan logika program ke dalam fungsi modular, memahami parameter  |
|                                            | opsional, f-string, ekspresi Lambda, dan Generator.    |
\+------------------------------------+----------------------------------------------------------------------------+
| Fase 4: Program Terstruktur & Robust       | Memahami arsitektur Pemrograman Berorientasi Objek (OOP) dasar,     |
|                                            | penanganan Exception Handling, serta operasi File I/O. |
\+------------------------------------+----------------------------------------------------------------------------+
| Fase 5: Pintu Gerbang Data Science         | Mempelajari dasar NumPy untuk aljabar matriks serta Pandas untuk   |
|                                            | manipulasi tabel dataset berformat CSV secara efisien. |
\+-----------------------------------------------------------------------------------------------------------------+

## **Penjelasan Lengkap Setiap Topik dan Chapter**

### **Topik 1: Memulai Python**

#### **Chapter: Apa Itu Python**

##### **Tujuan Chapter**

Peserta memahami kedudukan Python dalam ekosistem kecerdasan buatan, alasan di balik popularitasnya, cara kerja eksekusi kodenya, serta batasan-batasan penggunaan bahasa ini.1

##### **Konsep Utama**

Python adalah bahasa pemrograman tingkat tinggi yang bersifat *interpreted* (diterjemahkan baris demi baris saat dijalankan) dan bertipe dinamis. Python menonjol karena keterbacaan kodenya yang luar biasa dan dukungan komunitas yang masif di bidang sains data dan kecerdasan buatan.1

##### **Analogi**

Bayangkan Python sebagai seorang **Sutradara Film**.1 Sang sutradara tidak membawa kamera berat, tidak mengatur lampu secara langsung, dan tidak menjahit kostum aktor. Namun, ia memberikan instruksi yang jelas kepada para ahli di bidangnya agar bekerja secara sinergis.1 Dalam kecerdasan buatan, Python mengarahkan modul komputasi berkinerja tinggi (yang ditulis dalam C/C++) untuk mengeksekusi kalkulasi matematika tanpa mengharuskan kita menulis kode tingkat rendah yang rumit.1

##### **Penjelasan Teori Rinci**

Python diciptakan oleh Guido van Rossum pada akhir dekade 1980-an dengan filosofi desain yang menekankan keterbacaan kode.1 Salah satu semboyan terkenal dalam komunitas Python adalah "keterbacaan itu penting" (*readability counts*). Hal ini membuat Python sangat berbeda dari bahasa pemrograman seperti C++ atau Java yang membutuhkan banyak kode standar hanya untuk menampilkan satu baris teks ke layar.1
Sebagai bahasa yang diinterpretasikan, kode Python tidak dikompilasi secara langsung menjadi bahasa mesin biner sebelum dijalankan. Sebaliknya, interpreter Python membaca kode sumber, menerjemahkannya menjadi representasi perantara yang disebut *bytecode*, dan kemudian mengeksekusinya menggunakan mesin virtual Python. Proses ini memberikan fleksibilitas luar biasa, seperti kemampuan untuk menguji kode secara interaktif baris demi baris, yang sangat krusial dalam fase eksplorasi data di proyek kecerdasan buatan.
Sistem pengetikan dinamis pada Python membebaskan pengembang dari deklarasi tipe data secara eksplisit. Tipe data ditentukan secara otomatis pada saat runtime berdasarkan nilai yang dimasukkan ke dalam variabel tersebut. Hal ini mempercepat proses pembuatan prototipe algoritma kecerdasan buatan, meskipun menuntut pemahaman mendalam agar tidak terjadi kesalahan tipe data di tengah jalan.1
Meskipun Python lambat jika mengeksekusi perulangan komputasi numerik murni secara internal, ekosistem kecerdasan buatan menyiasati hal ini dengan menggunakan modul berbasis bahasa C/C++ di balik layar.1 Pustaka populer seperti NumPy dan PyTorch ditulis menggunakan bahasa C++ yang sangat teroptimasi untuk dijalankan pada prosesor dan kartu grafis.1 Python bertindak sebagai jembatan kendali tingkat tinggi, memberikan kecepatan eksekusi setara C++ namun dengan kemudahan menulis kode ala Python.1
Ketergantungan industri kecerdasan buatan pada Python juga didukung oleh komunitas global yang sangat aktif.8 Setiap kali terdapat terobosan baru di bidang kecerdasan buatan, para peneliti hampir selalu merilis kodenya dalam bentuk pustaka Python.8 Hal ini menjadikan Python sebagai standar de facto yang harus dikuasai oleh setiap calon praktisi data science dan kecerdasan buatan.
Namun, Python bukanlah solusi untuk segala hal.1 Bahasa ini tidak direkomendasikan untuk pengembangan sistem operasi tingkat rendah, driver perangkat keras, atau game 3D real-time berkinerja tinggi yang membutuhkan manajemen memori manual yang sangat ketat.1 Untuk ranah kecerdasan buatan, keterbatasan ini tidak menjadi masalah karena Python memang diposisikan sebagai bahasa kontrol, bukan bahasa mesin komputasi murni.1

Alur Eksekusi Kode Python:
\+-------------------+     Menerjemahkan     \+-------------------+     Menjalankan     \+-------------------------+
|  File Kode Sumber | \--------------------\> |     Bytecode      | \------------------\> | Python Virtual Machine  |
|    (.py file)     |                       |    (.pyc file)    |                     |          (PVM)          |
\+-------------------+                       \+-------------------+                     \+-------------------------+

##### **Contoh Kode Utama**

Python
print("Halo AI\!")

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: print("Halo AI\!") Baris ini memanggil fungsi bawaan print() yang bertugas mengirimkan data ke layar terminal.1 Argumen yang diberikan adalah string "Halo AI\!" yang diapit oleh tanda kutip ganda. Interpreter Python mengevaluasi fungsi ini dan mencetak teks tersebut ke media keluaran standar.1

##### **3 Contoh Tambahan**

1. Menampilkan teks multi-baris menggunakan satu fungsi print 4:
   Python
   print("Selamat datang di HerAI Fellowship.\\nMari belajar Python bersama.")

   *Penjelasan baris demi baris*:
   * **Baris 1**: print(...) memanggil fungsi pencetakan.4 String di dalamnya mengandung karakter khusus \\n yang bertindak sebagai instruksi untuk membuat baris baru.9 Hasil cetakan di terminal akan terbagi menjadi dua baris.9
2. Menampilkan hasil perhitungan matematika dasar secara langsung :
   Python
   print(10 \+ 5\)

   *Penjelasan baris demi baris*:
   * **Baris 1**: print(10 \+ 5\) mengevaluasi operasi penjumlahan aritmatika terlebih dahulu. Angka 10 ditambah 5 menghasilkan objek integer 15, yang kemudian langsung dicetak ke layar.
3. Menggabungkan beberapa teks menggunakan koma di dalam fungsi print 4:
   Python
   print("Sains Data", "Kecerdasan Buatan", "Pemrograman")

   *Penjelasan baris demi baris*:
   * **Baris 1**: print(...) menerima tiga argumen string terpisah yang dipisahkan oleh tanda koma.4 Secara default, fungsi print akan menggabungkan argumen-argumen tersebut dan menyisipkan karakter spasi sebagai pemisah di antara mereka saat ditampilkan di layar.4

##### **3 Common Mistakes**

1. **Kesalahan Penulisan Huruf**: Menuliskan fungsi print dengan huruf kapital di awal, seperti Print("Halo") atau PRINT("Halo"). Python sangat sensitif terhadap perbedaan huruf besar dan kecil, sehingga interpreter akan memicu kesalahan NameError karena fungsi tersebut dianggap tidak terdefinisi.
2. **Tanda Kutip Tidak Berpasangan**: Menulis teks dengan tanda kutip pembuka yang tidak memiliki penutup, misalnya print("Halo AI\!). Hal ini akan menyebabkan SyntaxError karena interpreter kehilangan batas akhir dari teks tersebut.
3. **Lupa Menuliskan Tanda Kurung**: Pada Python versi 3, print adalah sebuah fungsi, sehingga wajib menggunakan tanda kurung. Menulis print "Halo AI" (gaya Python versi 2\) akan menghasilkan SyntaxError.

##### **3 Best Practices**

1. Gunakan tanda kutip ganda secara konsisten untuk data teks biasa, dan tanda kutip tunggal untuk karakter tunggal atau jika di dalam teks tersebut terdapat tanda kutip ganda.
2. Pastikan tidak menambahkan spasi di awal baris kode secara sembarangan, karena Python menggunakan indentasi untuk menentukan struktur blok kode.
3. Tuliskan kode yang bersih dan hindari penulisan instruksi yang terlalu panjang dalam satu baris agar kode mudah dipahami oleh rekan kolaborator.

##### **Hubungan Konsep Ini dengan AI/Data Science**

Semua kerangka kerja kecerdasan buatan modern, seperti PyTorch, TensorFlow, dan Scikit-Learn, dikendalikan menggunakan fungsi-fungsi Python.1 Memahami bagaimana Python mengeksekusi fungsi sederhana seperti print() adalah langkah pertama untuk memahami bagaimana kita nantinya akan memanggil fungsi untuk melatih model klasifikasi gambar atau memproses teks alami.1

##### **Latihan Kecil dengan Contoh Jawaban**

Tuliskan satu baris kode Python yang menampilkan kutipan motivasi favorit tentang belajar, pastikan kutipan tersebut berada di dalam tanda kutip ganda, dan nama penulis kutipan berada di dalam tanda kurung pada baris yang sama.
*Contoh Jawaban*:

Python
print('"Belajar tanpa berpikir itu tidak berguna, berpikir tanpa belajar itu berbahaya" \- (Konfusius)')

##### **Ringkasan Chapter**

Python adalah bahasa tingkat tinggi yang interpretatif, dinamis, dan sangat diandalkan dalam dunia kecerdasan buatan sebagai bahasa kontrol. Menulis kode Python diawali dengan memahami instruksi dasar seperti fungsi print() yang sensitif terhadap penulisan huruf dan struktur indentasi.1

#### **Chapter: Instalasi dan Environment**

##### **Tujuan Chapter**

Peserta mampu melakukan instalasi Python, mengonfigurasi VS Code, serta membuat dan mengaktifkan lingkungan virtual untuk mengelola dependensi proyek tanpa konflik.1

##### **Konsep Utama**

Lingkungan virtual adalah direktori terisolasi yang memiliki interpreter Python dan pustaka mandiri, sehingga instalasi paket pada satu proyek tidak memengaruhi proyek lainnya.

##### **Analogi**

Bayangkan sistem komputer sebagai sebuah **Rumah Besar**.1 Jika menyimpan semua kosmetik, peralatan menjahit, dan kabel charger dalam satu kotak besar yang sama di ruang tamu, barang-barang tersebut akan saling melilit dan berantakan.1 Membuat lingkungan virtual sama seperti menyiapkan **Kotak Penyimpanan Khusus** yang terpisah untuk setiap kategori barang.1 Proyek kecerdasan buatan untuk memproses teks memiliki kotaknya sendiri, sementara proyek untuk mengenali gambar memiliki kotak lainnya, sehingga kedua proyek tidak saling mengacaukan dependensi satu sama lain.1

##### **Penjelasan Teori Rinci**

Ketika melakukan instalasi Python untuk pertama kali di komputer, kita mendapatkan instalasi Python global. Pustaka-pustaka tambahan yang dipasang menggunakan pengelola paket Python (pip) secara default akan disimpan di dalam direktori global tersebut.1 Hal ini dapat memicu masalah serius ketika mengerjakan lebih dari satu proyek.1
Misalnya, Proyek A membutuhkan pustaka Pandas versi lama (misalnya versi 1.2) untuk menjalankan kode warisan, sedangkan Proyek B membutuhkan Pandas versi terbaru (versi 2.0) untuk memanfaatkan fitur performa terbaru. Jika menggunakan lingkungan global, menginstal Pandas versi baru untuk Proyek B akan menimpa Pandas versi lama milik Proyek A, sehingga kode pada Proyek A akan mengalami eror atau tidak bisa dijalankan.1
Untuk menyelesaikan dilema ini, Python menyediakan solusi bawaan bernama venv (Virtual Environment).1 Ketika mengeksekusi perintah pembuatan lingkungan virtual, Python akan membuat direktori baru yang berisi salinan mandiri dari file eksekusi Python dan struktur direktori pustaka.1 Saat lingkungan virtual ini diaktifkan, terminal akan mengubah variabel lingkungan PATH sehingga merujuk ke interpreter lokal di dalam direktori tersebut, bukan interpreter global sistem.1
Integrasi antara editor teks dan lingkungan virtual juga sangat penting. Visual Studio Code harus dikonfigurasi agar mendeteksi interpreter Python yang berada di dalam lingkungan virtual aktif.1 Dengan begitu, fitur analisis kode dan pelengkapan otomatis dapat bekerja secara akurat sesuai dengan pustaka yang terpasang di lingkungan terisolasi tersebut.1
Pengelolaan dependensi ini merupakan pilar utama dari prinsip reproduksibilitas dalam sains data dan kecerdasan buatan. Tanpa lingkungan virtual, sangat sulit bagi pengembang lain untuk menduplikasi eksperimen kecerdasan buatan Anda karena mereka tidak tahu persis versi pustaka apa saja yang digunakan di komputer Anda.1

Struktur Isolasi Lingkungan:
\+-----------------------------------------------------------------+
| Sistem Operasi (Global Environment: Python 3.10)                |
|                                                                 |
|  \+-------------------------+       \+-------------------------+  |
|  | Virtual Env: Proyek A   |       | Virtual Env: Proyek B   |  |
|  |  \- Python 3.10          |       |  \- Python 3.10          |  |
|  |  \- Pandas v1.2          |       |  \- Pandas v2.0          |  |
|  \+-------------------------+       \+-------------------------+  |
\+-----------------------------------------------------------------+

##### **Contoh Kode Utama**

Bash
python \-m venv env\_ai

##### **Penjelasan Kode Baris demi Baris**

* **Langkah 1**: python \-m venv env\_ai Perintah terminal ini memanggil interpreter Python dengan opsi \-m untuk menjalankan modul bawaan bernama venv.1 Argumen terakhir, env\_ai, adalah nama direktori baru yang akan dibuat.1 Direktori ini akan berisi salinan eksekutif Python, skrip aktivasi terminal, dan folder kosong untuk menampung pustaka pihak ketiga secara terisolasi.1

##### **3 Contoh Tambahan**

1. Mengaktifkan lingkungan virtual di Windows (melalui Command Prompt):
   DOS
   env\_ai\\Scripts\\activate

   *Penjelasan baris demi baris*:
   * **Baris 1**: env\_ai\\Scripts\\activate menjalankan skrip aktivasi Windows.1 Eksekusi ini akan memodifikasi variabel lingkungan PATH di terminal aktif sehingga menunjuk ke direktori biner di dalam env\_ai.1
2. Mengaktifkan lingkungan virtual di macOS atau Linux (melalui Terminal):
   Bash
   source env\_ai/bin/activate

   *Penjelasan baris demi baris*:
   * **Baris 1**: source env\_ai/bin/activate menggunakan perintah source pada shell Unix untuk menjalankan skrip aktivasi dalam sesi shell yang sama.1 Perubahan path interpreter akan langsung diterapkan pada terminal aktif.1
3. Menghasilkan daftar dependensi proyek ke dalam file eksternal 8:
   Bash
   pip freeze \> requirements.txt

   *Penjelasan baris demi baris*:
   * **Baris 1**: pip freeze menampilkan daftar pustaka beserta versinya yang terpasang di lingkungan virtual aktif.8 Simbol \> mengalihkan keluaran tersebut untuk ditulis langsung ke dalam berkas teks bernama requirements.txt.8

##### **3 Common Mistakes**

1. **Lupa Mengaktifkan Lingkungan Virtual**: Menuliskan perintah instalasi pustaka sebelum mengaktifkan lingkungan virtual. Akibatnya, pustaka tersebut akan terpasang di lingkungan global sistem.
2. **Memasukkan Folder Lingkungan ke Repositori Git**: Mengunggah seluruh folder lingkungan virtual (yang berukuran besar dan berisi file biner sistem) ke Git/GitHub. Seharusnya, folder ini diabaikan menggunakan file .gitignore.
3. **Memindahkan Folder Proyek**: Memindahkan direktori proyek yang berisi lingkungan virtual ke lokasi baru di komputer. Karena beberapa path di dalam skrip aktivasi bersifat absolut, hal ini sering kali merusak lingkungan virtual tersebut, sehingga lebih baik membuat ulang lingkungan virtual baru di lokasi yang baru.

##### **3 Best Practices**

1. Selalu buat satu lingkungan virtual unik untuk setiap proyek kecerdasan buatan baru yang dikerjakan.1
2. Gunakan nama folder yang standar untuk lingkungan virtual, seperti .venv atau env, dan pastikan nama tersebut tercantum di dalam berkas .gitignore.
3. Catat semua pustaka yang dipasang ke dalam sebuah berkas teks menggunakan perintah pip freeze \> requirements.txt agar orang lain dapat merekonstruksi lingkungan kerja Anda dengan mudah.8

##### **Hubungan Konsep Ini dengan AI/Data Science**

Model kecerdasan buatan modern sangat bergantung pada kecocokan versi pustaka.1 Misalnya, kode jaringan saraf tiruan yang ditulis menggunakan PyTorch versi 1.x bisa saja mengalami kerusakan fungsi jika dijalankan pada PyTorch versi 2.x.1 Menguasai teknik isolasi lingkungan sejak awal adalah kunci untuk menghindari frustrasi akibat kegagalan eksekusi model kecerdasan buatan yang diunduh dari internet.1

##### **Latihan Kecil dengan Contoh Jawaban**

Tuliskan urutan perintah terminal untuk membuat lingkungan virtual bernama herai\_dev, mengaktifkannya di macOS/Linux, dan memeriksa daftar pustaka yang terpasang.1 *Contoh Jawaban*:

Bash
python \-m venv herai\_dev
source herai\_dev/bin/activate
pip list

##### **Ringkasan Chapter**

Mengelola workspace pemrograman yang bersih melibatkan pembuatan lingkungan virtual terisolasi menggunakan venv.1 Praktik ini mencegah bentrokan antar-pustaka dan memastikan eksperimen kecerdasan buatan Anda dapat direproduksi secara konsisten di komputer mana pun.

### **Topik 2: Bahan Baku Program**

#### **Chapter: Variabel dan Tipe Data Dasar**

##### **Tujuan Chapter**

Peserta mampu mendefinisikan variabel, memahami mekanisme penyimpanan data di memori, serta membedakan dan memanipulasi tipe data dasar (String, Integer, Float, Boolean).

##### **Konsep Utama**

Variabel adalah nama referensi di memori komputer yang menunjuk ke suatu objek data. Python memiliki empat tipe data dasar utama: String untuk teks, Integer untuk angka bulat, Float untuk angka desimal, dan Boolean untuk nilai logika benar/salah.

##### **Analogi**

Bayangkan variabel sebagai **Label Nama** yang ditempelkan pada **Kotak Penyimpanan** di gudang. Kotak itu sendiri adalah ruang memori fisik di komputer, sedangkan isi di dalam kotak adalah datanya. Tipe data menentukan karakteristik isi kotak tersebut: apakah berisi surat kertas biasa (String), sejumlah koin utuh (Integer), air dengan volume desimal presisi (Float), atau saklar lampu yang hanya memiliki kondisi menyala atau mati (Boolean).

##### **Penjelasan Teori Rinci**

Dalam Python, ketika menulis x \= 10, kita tidak sedang membuat wadah kaku yang hanya boleh diisi oleh angka. Secara teknis, Python menggunakan model referensi objek.7 interpreter akan membuat objek bertipe int dengan nilai 10 di dalam memori, lalu menempelkan label nama x ke objek tersebut.7 Jika kemudian menulis x \= "Halo", label x hanya dipindahkan untuk menunjuk ke objek String baru berisi "Halo". Objek lama 10 yang kehilangan referensinya akan dibersihkan secara otomatis oleh sistem pengumpul sampah Python.7
Mari kita telaah karakteristik dari masing-masing tipe data dasar ini:
**String (str)**: Digunakan untuk merepresentasikan teks.11 String dalam Python bersifat *immutable*, artinya setelah objek string dibuat di memori, isinya tidak dapat diubah secara langsung. Segala operasi manipulasi string, seperti mengubah huruf menjadi kapital atau memotong teks, sebenarnya membuat objek string baru di memori.2
**Integer (int)**: Merepresentasikan bilangan bulat positif, negatif, atau nol tanpa komponen desimal.11 Keunggulan unik Python adalah presisi integer yang dinamis, yang berarti ukuran angka bulat yang bisa disimpan hanya dibatasi oleh kapasitas memori komputer, berbeda dengan bahasa lain yang membatasi integer pada ukuran 32-bit atau 64-bit.11
**Float (float)**: Digunakan untuk menyimpan bilangan real yang memiliki angka di belakang koma desimal.11 Representasi internal float dalam Python menggunakan format standar IEEE 754 double-precision (64-bit). Karena keterbatasan representasi biner untuk bilangan desimal, operasi aritmatika float kadang menghasilkan sedikit ketidakakuratan kecil (misalnya 0.1 \+ 0.2 menghasilkan 0.30000000000000004), suatu fenomena penting yang harus dipahami oleh praktisi kecerdasan buatan saat melakukan perhitungan numerik tingkat tinggi.11
**Boolean (bool)**: Hanya memiliki dua nilai konstan: True (Benar) dan False (Salah).11 Tipe data ini merupakan turunan langsung dari kelas Integer, di mana secara internal True bernilai 1 dan False bernilai 0\. Boolean sangat vital dalam menyusun logika percabangan program.11

Mekanisme Referensi Objek di Memori:
Sebelum:  \[ x \]  \----------\>  ( Objek Integer: 10 )
Sesudah:  \[ x \]  \--+          ( Objek Integer: 10 ) \--\> Tidak ada referensi (Akan dihapus)
                   |
                   \+--------\>  ( Objek String: "Halo" )

##### **Contoh Kode Utama**

Python
nama\_model \= "Sentiment\_Analyzer\_v1"
jumlah\_epoch \= 150
tingkat\_akurasi \= 0.945
apakah\_aktif \= True

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: nama\_model \= "Sentiment\_Analyzer\_v1"
  Mendefinisikan variabel bernama nama\_model dan mengarahkannya ke objek String baru berisi teks "Sentiment\_Analyzer\_v1".
* **Baris 2**: jumlah\_epoch \= 150
  Mendefinisikan variabel bernama jumlah\_epoch dan mengarahkannya ke objek Integer bernilai 150\.
* **Baris 3**: tingkat\_akurasi \= 0.945
  Mendefinisikan variabel bernama tingkat\_akurasi dan mengarahkannya ke objek Float bernilai 0.945.
* **Baris 4**: apakah\_aktif \= True
  Mendefinisikan variabel bernama apakah\_aktif dan mengarahkannya ke objek Boolean bernilai True.

##### **3 Contoh Tambahan**

1. Konversi tipe data secara eksplisit 4:
   Python
   input\_pengguna \= "85"
   skor\_numerik \= int(input\_pengguna)
   print(skor\_numerik \+ 10\)

   *Penjelasan baris demi baris*:
   * **Baris 1**: input\_pengguna \= "85" membuat variabel bertipe String.
   * **Baris 2**: skor\_numerik \= int(input\_pengguna) mengonversi String "85" menjadi objek Integer 85 menggunakan fungsi int().4
   * **Baris 3**: print(skor\_numerik \+ 10\) melakukan penjumlahan matematika (85 \+ 10 \= 95\) dan mencetak hasilnya.4
2. Penggabungan string menggunakan metode f-string :
   Python
   nama \= "HerAI"
   versi \= 4.0
   pesan \= f"Selamat belajar di kelas {nama} versi {versi}\!"
   print(pesan)

   *Penjelasan baris demi baris*:
   * **Baris 1**: nama \= "HerAI" mendefinisikan string.
   * **Baris 2**: versi \= 4.0 mendefinisikan float.
   * **Baris 3**: pesan \= f"Selamat..." membuat string berformat (f-string) di mana variabel di dalam {} dievaluasi dan disisipkan langsung ke dalam string.
   * **Baris 4**: print(pesan) mencetak string gabungan tersebut.4
3. Operasi aritmatika campuran yang otomatis menghasilkan tipe data float 11:
   Python
   bilangan\_bulat \= 10
   pembagi \= 4
   hasil\_bagi \= bilangan\_bulat / pembagi
   print(hasil\_bagi)

   *Penjelasan baris demi baris*:
   * **Baris 1**: bilangan\_bulat \= 10 membuat variabel integer.
   * **Baris 2**: pembagi \= 4 membuat variabel integer pembagi.
   * **Baris 3**: hasil\_bagi \= bilangan\_bulat / pembagi melakukan pembagian menggunakan operator /. Di Python, operator ini selalu menghasilkan Float.11
   * **Baris 4**: print(hasil\_bagi) mencetak nilai 2.5.4

##### **3 Common Mistakes**

1. **Penamaan Variabel yang Ilegal**: Memulai nama variabel dengan angka atau menggunakan karakter khusus yang dilarang, seperti 1\_model \= "AI" atau skor-total \= 100\. Nama variabel hanya boleh diawali dengan huruf atau garis bawah (\_).
2. **Mencampur String dan Integer secara Langsung**: Melakukan operasi penggabungan teks dengan angka tanpa konversi, misalnya print("Akurasi: " \+ 0.95). Ini akan memicu TypeError. Konversi angka ke string terlebih dahulu menggunakan fungsi str() atau gunakan f-string.
3. **Kesalahan Penulisan Boolean**: Menulis nilai boolean dengan huruf kecil semua, seperti true atau false. Python hanya mengenali True and False dengan huruf kapital di awal.

##### **3 Best Practices**

1. Gunakan gaya penulisan *snake\_case* (huruf kecil semua dipisahkan garis bawah) untuk menamai variabel, contoh: dataset\_path, learning\_rate.7
2. Pilihlah nama variabel yang deskriptif dan mencerminkan isinya, hindari nama satu huruf seperti x, y, atau z kecuali untuk indeks perulangan matematika sederhana.7
3. Hindari penggunaan nama fungsi bawaan Python (seperti print, input, type, int) sebagai nama variabel karena akan menimpa fungsi asli tersebut.

##### **Hubungan Konsep Ini dengan AI/Data Science**

Dalam algoritma kecerdasan buatan, representasi data adalah segalanya.1 Teks dari pengguna untuk model bahasa alami direpresentasikan sebagai String. Hyperparameter seperti jumlah iterasi pelatihan direpresentasikan sebagai Integer. Nilai peluang prediksi direpresentasikan sebagai Float. Status kelayakan model direpresentasikan sebagai Boolean. Kesalahan tipe data dapat merusak seluruh alur pelatihan model kecerdasan buatan.1

##### **Latihan Kecil dengan Contoh Jawaban**

Buatlah tiga variabel: tingkat\_loss (float), jumlah\_sampel (integer), dan nama\_arsitektur (string). Tampilkan ketiganya dalam satu baris kalimat menggunakan f-string.
*Contoh Jawaban*:

Python
tingkat\_loss \= 0.15
jumlah\_sampel \= 5000
nama\_arsitektur \= "ResNet"
print(f"Model {nama\_arsitektur} dilatih dengan {jumlah\_sampel} sampel memiliki loss {tingkat\_loss}.")

##### **Ringkasan Chapter**

Variabel berfungsi sebagai label referensi untuk objek data di dalam memori komputer.7 Penguasaan atas empat tipe data dasar (String, Integer, Float, dan Boolean) serta cara melakukan konversi antar-tipe data tersebut sangat penting untuk mengelola informasi secara akurat.

#### **Chapter: Struktur Data Koleksi**

##### **Tujuan Chapter**

Peserta menguasai karakteristik unik dari empat tipe struktur data koleksi utama (List, Tuple, Dictionary, Set) serta mampu memanipulasi elemen di dalamnya untuk kebutuhan pengelolaan data terstruktur.

##### **Konsep Utama**

Python menyediakan kontainer bawaan dengan sifat akses, keunikan, dan mutabilitas yang bervariat: List (berurutan, bisa diubah), Tuple (berurutan, tidak bisa diubah), Dictionary (berpasangan kunci-nilai), dan Set (tidak berurutan, elemen unik).

##### **Analogi**

Bayangkan mengelola sebuah **Restoran** :

* **List** adalah **Antrean Pelanggan** di kasir. Posisinya berurutan, orang baru bisa masuk di akhir antrean, dan posisi mereka bisa digeser.
* **Tuple** adalah **Daftar Bahan Menu Utama** yang dicetak permanen di papan atas kasir. Daftar ini tidak boleh diubah di tengah jam operasional.
* **Dictionary** adalah **Gantungan Kunci Loker Penitipan Barang**. Setiap gantungan memiliki nomor kunci unik (Key) yang berpasangan dengan tas milik pengunjung tertentu (Value).
* **Set** adalah **Kotak Undian Kartu Nama**. Kartu nama dimasukkan tanpa urutan tertentu, dan jika ada orang yang memasukkan kartu nama duplikat, panitia hanya akan menyisakan satu kartu nama yang unik.

##### **Penjelasan Teori Rinci**

Memahami struktur data koleksi sangat penting karena dalam skenario dunia nyata, kita hampir tidak pernah bekerja dengan data tunggal. Kita mengolah kumpulan dokumen teks, daftar nilai piksel gambar, atau rangkaian parameter model kecerdasan buatan.
**List (list)**: Direpresentasikan dengan kurung siku \`\`. Elemen di dalam List disimpan secara berurutan dan diakses menggunakan indeks berbasis nol. List bersifat *mutable*, sehingga kita bisa menambah, menghapus, atau mengubah elemen secara dinamis selama program berjalan. Di balik layar, List diimplementasikan sebagai array dinamis dari referensi objek, yang sangat efisien untuk penambahan elemen di akhir list.
**Tuple (tuple)**: Ditulis menggunakan kurung biasa (). Sangat mirip dengan List dalam hal pengindeksan berurutan, namun Tuple bersifat *immutable*. Begitu Tuple dibuat, Anda tidak dapat mengubah elemennya, menambah, atau menghapusnya. Karakteristik ini membuat Tuple lebih aman dari perubahan tidak sengaja dalam kode dan secara konsumsi memori sedikit lebih efisien dibandingkan List.
**Dictionary (dict)**: Menggunakan kurung kurawal {} dengan format pasangan kunci: nilai. Dictionary tidak diakses berdasarkan nomor urut (indeks), melainkan berdasarkan kuncinya. Kunci dalam Dictionary harus bertipe data yang tidak dapat diubah (seperti String, Integer, atau Tuple) dan harus bersifat unik. Di balik layar, Dictionary menggunakan struktur data Tabel Hash, sehingga pencarian nilai berdasarkan kuncinya berjalan sangat cepat dengan kompleksitas waktu rata-rata ![][image1].
**Set (set)**: Ditulis menggunakan kurung kurawal {} namun hanya berisi nilai tunggal yang dipisahkan koma. Karakteristik utama Set adalah tidak menyimpan elemen duplikat secara otomatis dan tidak mempertahankan urutan elemen. Set sangat berguna untuk melakukan operasi himpunan matematika seperti gabungan, irisan, dan selisih.

| Tipe Koleksi | Sintaksis | Urutan Terjamin | Elemen Unik Saja | Mutabilitas | Mekanisme Akses |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **List** | \[a, b, c\] | Ya | Tidak | Mutable | Menggunakan Indeks (0, 1, 2\) |
| **Tuple** | (a, b, c) | Ya | Tidak | Immutable | Menggunakan Indeks (0, 1, 2\) |
| **Dictionary** | {"k": v} | Ya (Python 3.7+) | Kunci Unik | Mutable | Menggunakan Kunci (Key) |
| **Set** | {a, b, c} | Tidak | Ya | Mutable | Iterasi / Operasi Himpunan |

##### **Contoh Kode Utama**

Python
list\_model \=
tuple\_dimensi \= (224, 224, 3\)
dict\_param \= {"learning\_rate": 0.01, "batch\_size": 32}
set\_token \= {"nlp", "computer\_vision", "nlp"}

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: list\_model \=
  Membuat objek List berisi tiga string nama model kecerdasan buatan.
* **Baris 2**: tuple\_dimensi \= (224, 224, 3\)
  Membuat objek Tuple berisi tiga bilangan bulat yang merepresentasikan dimensi citra.
* **Baris 3**: dict\_param \= {"learning\_rate": 0.01, "batch\_size": 32}
  Membuat Dictionary dengan dua pasang kunci-nilai untuk mengonfigurasi model.
* **Baris 4**: set\_token \= {"nlp", "computer\_vision", "nlp"}
  Membuat Set berisi beberapa string. Secara otomatis, elemen duplikat "nlp" akan dilebur menjadi satu elemen unik saja.

##### **3 Contoh Tambahan**

1. Slicing List untuk mengambil subset data :
   Python
   angka \=
   potongan \= angka\[1:4\]
   print(potongan)

   *Penjelasan baris demi baris*:
   * **Baris 1**: angka \= \[...\] mendefinisikan list berisi deret angka.
   * **Baris 2**: potongan \= angka\[1:4\] mengambil elemen dari indeks ke-1 hingga sebelum indeks ke-4 (yaitu indeks 1, 2, dan 3).
   * **Baris 3**: print(potongan) mencetak \`\`.4
2. Menggabungkan dua Set menggunakan operasi himpunan Union :
   Python
   set\_a \= {1, 2, 3}
   set\_b \= {3, 4, 5}
   gabungan \= set\_a.union(set\_b)
   print(gabungan)

   *Penjelasan baris demi baris*:
   * **Baris 1**: set\_a \= {1, 2, 3} mendefinisikan set pertama.
   * **Baris 2**: set\_b \= {3, 4, 5} mendefinisikan set kedua.
   * **Baris 3**: gabungan \= set\_a.union(set\_b) menggabungkan kedua set secara matematis.
   * **Baris 4**: print(gabungan) mencetak {1, 2, 3, 4, 5}.4
3. Mengakses Dictionary menggunakan metode .get() yang aman :
   Python
   config \= {"epochs": 100}
   lr \= config.get("learning\_rate", 0.001)
   print(lr)

   *Penjelasan baris demi baris*:
   * **Baris 1**: config \= {"epochs": 100} mendefinisikan Dictionary.
   * **Baris 2**: lr \= config.get("learning\_rate", 0.001) mencari kunci "learning\_rate". Karena tidak ditemukan, ia mengembalikan nilai default 0.001 alih-alih memicu eror.
   * **Baris 3**: print(lr) mencetak nilai tersebut.4

##### **3 Common Mistakes**

1. **Mencoba Mengubah Elemen Tuple**: Menuliskan kode seperti tuple\_dimensi \= 128\. Hal ini akan memicu TypeError: 'tuple' object does not support item assignment karena sifat Tuple yang tidak dapat diubah.
2. **Menggunakan List sebagai Kunci Dictionary**: Menulis d \= {: "nilai"}. List bersifat mutable dan tidak dapat di-hash, sehingga tidak bisa dijadikan kunci Dictionary. Gunakan Tuple jika ingin membuat kunci gabungan.
3. **Kesalahan Pengindeksan Luar Batas**: Mengakses indeks List yang melebihi jumlah elemen yang tersedia, misalnya skor\_data pada List yang hanya berisi 6 elemen. Ini akan langsung memicu IndexError: list index out of range.

##### **3 Best Practices**

1. Gunakan **List** jika membutuhkan koleksi data terurut yang elemennya sering dimodifikasi atau ditambah sepanjang jalannya program.
2. Gunakan **Tuple** untuk data konstan yang merepresentasikan satu paket koordinat, konfigurasi statis, atau struktur data rekaman demi keamanan.
3. Gunakan **Dictionary** untuk menyimpan konfigurasi model atau data metadata terstruktur yang membutuhkan akses cepat melalui label kunci deskriptif.

##### **Hubungan Konsep Ini dengan AI/Data Science**

Struktur data koleksi adalah fondasi manipulasi dataset.1 Kumpulan teks mentah untuk pemrosesan bahasa alami disimpan dalam List. Metadata label gambar dalam visi komputer dikelola menggunakan Dictionary. Pengenalan dimensi citra didefinisikan menggunakan Tuple.

##### **Latihan Kecil dengan Contoh Jawaban**

Buatlah sebuah Dictionary bernama model\_info dengan kunci "nama" (string), "akurasi\_history" (List berisi tiga float), dan "optimum" (boolean). Tampilkan nilai akurasi pada indeks pertama dari list tersebut.
*Contoh Jawaban*:

Python
model\_info \= {
    "nama": "ResNet-50",
    "akurasi\_history": \[0.85, 0.88, 0.91\],
    "optimum": True
}
print(model\_info\["akurasi\_history"\])

##### **Ringkasan Chapter**

Python menyediakan empat macam struktur data koleksi terintegrasi (List, Tuple, Dictionary, dan Set) dengan karakteristik unik yang disesuaikan untuk berbagai kebutuhan penyimpanan, pengindeksan, pengubahan, dan pemrosesan data.

#### **Chapter: Alur Logika dan Percabangan**

##### **Tujuan Chapter**

Peserta mampu merancang alur logika keputusan program menggunakan operator perbandingan, operator logika, serta struktur kontrol percabangan if, elif, dan else.1

##### **Konsep Utama**

Percabangan mengontrol eksekusi baris kode berdasarkan evaluasi kondisi boolean.4 Python mengevaluasi ekspresi kondisional dari atas ke bawah dan mengeksekusi blok kode pertama yang bernilai True.4

##### **Analogi**

Bayangkan percabangan seperti **Gerbang Pemeriksaan Otomatis** di bandara. Gerbang akan mengecek kondisi dokumen Anda: **Jika** memiliki paspor diplomatik, Anda melewati jalur khusus pertama.4 **Jika tidak (Elif)**, jika memiliki paspor reguler yang valid, Anda melewati jalur pemeriksaan umum.4 **Selain itu (Else)**, jika semua syarat tidak terpenuhi, Anda diarahkan ke loket penanganan darurat.4

##### **Penjelasan Teori Rinci**

Secara default, interpreter Python mengeksekusi kode secara berurutan baris demi baris dari atas ke bawah.1 Namun, aplikasi dunia nyata membutuhkan kemampuan untuk mengambil keputusan secara dinamis.1 Struktur percabangan memungkinkan program untuk memilih jalur eksekusi yang berbeda berdasarkan kondisi data saat ini.4
Struktur percabangan di Python ditulis dengan kata kunci if, diikuti oleh ekspresi kondisi, dan diakhiri dengan titik dua.4 Blok kode yang termasuk dalam percabangan tersebut ditentukan menggunakan tingkat indentasi, bukan menggunakan tanda kurung kurawal seperti pada bahasa pemrograman lain.1
Evaluasi kondisi menggunakan dua jenis operator utama:
**Operator Perbandingan**: Digunakan untuk membandingkan dua nilai.4

* \== (Sama dengan)
* \!= (Tidak sama dengan)
* \> (Lebih dari), \< (Kurang dari)
* \>= (Lebih dari atau sama dengan), \<= (Kurang dari atau sama dengan)

**Operator Logika**: Digunakan untuk menggabungkan beberapa kondisi.11

* and: Mengembalikan True hanya jika kedua kondisi bernilai benar.11
* or: Mengembalikan True jika salah satu atau kedua kondisi bernilai benar.11
* not: Membalik nilai boolean.11

Ketika mengevaluasi rantai keputusan if \- elif \- else, Python bekerja secara *short-circuit*.4 Artinya, begitu Python menemukan satu kondisi yang bernilai True, ia akan langsung mengeksekusi blok kode di bawahnya dan mengabaikan semua kondisi berikutnya dalam rantai tersebut, meskipun kondisi di bawahnya mungkin juga bernilai benar.4 Oleh karena itu, urutan penulisan kondisi dari yang paling spesifik ke yang paling umum sangatlah krusial.4

Alur Logika Percabangan:
             Apakah Kondisi IF Benar?
                   /          \\
             (Ya) /            \\ (Tidak)
                 /              \\
     Eksekusi Blok IF     Apakah Kondisi ELIF Benar?
                                /          \\
                          (Ya) /            \\ (Tidak)
                              /              \\
                  Eksekusi Blok ELIF     Eksekusi Blok ELSE

##### **Contoh Kode Utama**

Python
akurasi \= 0.85

if akurasi \>= 0.90:
    print("Model Sangat Akurat")
elif akurasi \>= 0.75:
    print("Model Cukup Akurat")
else:
    print("Model Tidak Akurat")

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: akurasi \= 0.85
  Mendefinisikan variabel akurasi dengan nilai float 0.85.
* **Baris 2**: if akurasi \>= 0.90: Mengevaluasi apakah nilai akurasi lebih besar atau sama dengan 0.90.4 Karena 0.85 \>= 0.90 bernilai False, blok di bawahnya diabaikan.4
* **Baris 4**: elif akurasi \>= 0.75: Karena kondisi pertama gagal, Python menguji kondisi ini.4 0.85 \>= 0.75 bernilai True, sehingga program memasuki blok ini.4
* **Baris 5**: print("Model Cukup Akurat") Mencetak teks "Model Cukup Akurat".4 Jalur percabangan selesai dan blok else diabaikan.4

##### **3 Contoh Tambahan**

1. Menggunakan operator logika and untuk memvalidasi beberapa kriteria 11:
   Python
   loss \= 0.12
   val\_accuracy \= 0.88

   if loss \< 0.15 and val\_accuracy \> 0.85:
       print("Model Stabil")

   *Penjelasan baris demi baris*:
   * **Baris 1**: loss \= 0.12 menetapkan nilai loss.
   * **Baris 2**: val\_accuracy \= 0.88 menetapkan akurasi validasi.
   * **Baris 4**: if loss \< 0.15 and val\_accuracy \> 0.85: mengevaluasi kedua kondisi.4 Karena keduanya bernilai True, operasi and menghasilkan True.11
   * **Baris 5**: print("Model Stabil") dijalankan.4
2. Memeriksa keberadaan elemen di dalam List menggunakan operator in :
   Python
   token\_list \= \["ai", "python", "data"\]
   if "python" in token\_list:
       print("Token Ditemukan")

   *Penjelasan baris demi baris*:
   * **Baris 1**: token\_list \= \[...\] mendefinisikan list berisi tiga token kata.
   * **Baris 2**: if "python" in token\_list: mengecek apakah string "python" ada di dalam list tersebut.
   * **Baris 3**: print("Token Ditemukan") mencetak pesan karena kondisi bernilai True.4
3. Ekspresi kondisional satu baris:
   Python
   score \= 0.4
   status \= "Lulus" if score \>= 0.5 else "Gagal"
   print(status)

   *Penjelasan baris demi baris*:
   * **Baris 1**: score \= 0.4 menetapkan nilai skor.
   * **Baris 2**: status \= "Lulus" if score \>= 0.5 else "Gagal" mengevaluasi kondisi. Karena score \>= 0.5 adalah False, variabel status diisi dengan nilai di setelah kata kunci else, yaitu "Gagal".
   * **Baris 3**: print(status) mencetak teks "Gagal".4

##### **3 Common Mistakes**

1. **Menggunakan Operator Penugasan sebagai Pembanding**: Menulis if skor \= 100: alih-alih if skor \== 100:. Karakter \= tunggal digunakan untuk memasukkan nilai ke variabel, sedangkan \== ganda digunakan untuk membandingkan nilai.4
2. **Kesalahan Indentasi**: Menulis kode di dalam blok percabangan tanpa memberikan spasi indentasi yang seragam di awal baris.1
3. **Tumpang Tindih Kondisi yang Tidak Logis**: Menuliskan kondisi yang lebih umum di atas kondisi yang lebih spesifik, sehingga kondisi spesifik tidak pernah tercapai karena terpotong oleh evaluasi awal.4

##### **3 Best Practices**

1. Pastikan blok keputusan mencakup kondisi alternatif melalui else untuk menangani skenario data yang tidak terduga agar program tidak lolos begitu saja tanpa penanganan.4
2. Hindari membuat percabangan bersarang yang terlalu dalam karena akan menyulitkan pembacaan logika kode; pecah menjadi beberapa kondisi logis terpisah atau gunakan fungsi pembantu.
3. Gunakan tanda kurung jika menggabungkan banyak operator logika and dan or sekaligus dalam satu baris untuk mempertegas urutan prioritas evaluasi logika.

##### **Hubungan Konsep Ini dengan AI/Data Science**

Algoritma kecerdasan buatan sering kali menggunakan logika ambang batas. Misalnya, sebuah sistem klasifikasi sentimen mendeteksi bahwa peluang sebuah ulasan bernilai positif adalah ![][image2]. Program Python akan menggunakan blok if untuk menentukan: jika peluang tersebut berada di atas ![][image3], maka ulasan diklasifikasikan sebagai positif, jika tidak, diklasifikasikan sebagai negatif.

##### **Latihan Kecil dengan Contoh Jawaban**

Tuliskan struktur percabangan yang memeriksa variabel tingkat\_error (float). Jika tingkat\_error di bawah 0.05, cetak "Akurasi Tinggi". Jika di antara 0.05 dan 0.15, cetak "Akurasi Sedang". Selain itu, cetak "Akurasi Rendah".
*Contoh Jawaban*:

Python
tingkat\_error \= 0.08
if tingkat\_error \< 0.05:
    print("Akurasi Tinggi")
elif tingkat\_error \<= 0.15:
    print("Akurasi Sedang")
else:
    print("Akurasi Rendah")

##### **Ringkasan Chapter**

Struktur kontrol percabangan yang didukung oleh operator perbandingan dan logika memungkinkan pembuatan keputusan pemrograman secara dinamik berdasarkan data masukan.1

#### **Chapter: Perulangan**

##### **Tujuan Chapter**

Peserta mampu mengotomatisasi proses berulang menggunakan perulangan for dan while, mengendalikan alurnya dengan break dan continue, serta melakukan iterasi pada berbagai struktur data koleksi.1

##### **Konsep Utama**

Perulangan mengeksekusi sekumpulan instruksi secara berulang.6 Perulangan for digunakan saat jumlah iterasi sudah diketahui secara pasti (misalnya melintasi elemen List), sedangkan while berjalan selama suatu kondisi logika bernilai True.6

##### **Analogi**

Bayangkan Anda adalah seorang **Petugas Sortir Gudang** :

* **For loop** adalah tugas menyortir tumpukan surat yang sudah jelas jumlahnya. Anda mengambil surat pertama, menyortirnya, mengambil surat kedua, menyortirnya, dan berhenti saat semua surat di meja habis.
* **While loop** adalah instruksi memindahkan kotak barang dari ban berjalan ke dalam truk.6 Anda terus memindahkan kotak **selama** lampu indikator hijau masih menyala.6 Begitu lampu berubah menjadi merah, Anda berhenti, tidak peduli berapa banyak kotak yang sudah Anda pindahkan.6

##### **Penjelasan Teori Rinci**

Mengulang proses adalah kekuatan utama komputer dibandingkan manusia.6 Di dalam Python, terdapat dua mekanisme utama untuk memfasilitasi perulangan ini:
**For Loop**: Perulangan ini bekerja menggunakan protokol iterator.6 Python mengambil objek yang dapat diiterasi seperti List, Tuple, atau String, lalu melintasi elemen-elemennya satu per satu dari awal hingga akhir secara berurutan.2 Variabel iterasi akan diperbarui secara otomatis di setiap putaran untuk menyimpan nilai elemen aktif saat itu. Fungsi pembantu range(start, stop, step) sangat sering digunakan untuk menghasilkan deret angka urut secara dinamis tanpa harus menuliskan semua angka tersebut secara manual di dalam memori.4
**While Loop**: Perulangan ini didasarkan pada evaluasi kondisi boolean yang mirip dengan struktur if.6 Di awal setiap putaran, Python akan memeriksa kondisi yang ditentukan.6 Jika bernilai True, blok kode di dalam putaran dijalankan.6 Jika bernilai False, perulangan langsung dihentikan dan program berlanjut ke baris setelah blok perulangan.6 Di dalam blok while, kita wajib menyertakan instruksi yang mengubah nilai variabel kondisi (misalnya penambahan angka), agar kondisi tersebut suatu saat bisa menjadi False.6 Jika tidak, program akan terjebak dalam perulangan tanpa akhir yang menguras memori komputer.6
Untuk memberikan kontrol yang lebih presisi, Python menyediakan dua kata kunci kendali:

* break: Menghentikan seluruh proses perulangan secara paksa seketika itu juga dan keluar dari blok perulangan, bahkan jika kondisi perulangan sebenarnya masih terpenuhi.11
* continue: Menghentikan putaran aktif saat ini dan langsung melompat ke awal putaran berikutnya, melewati sisa baris kode di bawahnya dalam putaran tersebut.11

Alur Perulangan WHILE:
               Evaluasi Kondisi Perulangan
                     /              \\
               (True)/               \\(False)
                    /                 \\
          Jalankan Blok Kode         Keluar Perulangan
          (Ada modifikasi variabel)
                    ^
                    | Loopback
                    \+-----------------+

##### **Contoh Kode Utama**

Python
for i in range(3):
    print(f"Perulangan ke-{i}")

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: for i in range(3): Mengeksekusi perulangan for menggunakan deret angka yang dihasilkan oleh range(3) (yaitu 0, 1, 2).4 Di setiap putaran, variabel i akan menyimpan nilai angka aktif saat itu.
* **Baris 2**: print(f"Perulangan ke-{i}") Mencetak teks f-string yang menampilkan indeks angka aktif.4 Setelah putaran untuk nilai 2 selesai, program keluar dari perulangan secara otomatis.

##### **3 Contoh Tambahan**

1. Perulangan melintasi elemen List :
   Python
   list\_loss \= \[0.5, 0.3, 0.1\]
   for loss in list\_loss:
       print(loss)

   *Penjelasan baris demi baris*:
   * **Baris 1**: list\_loss \= \[...\] mendefinisikan list berisi angka loss.
   * **Baris 2**: for loss in list\_loss: melintasi list tersebut. Variabel loss diisi oleh elemen list satu per satu secara berurutan.
   * **Baris 3**: print(loss) mencetak nilai loss aktif di setiap putaran.4
2. Menggunakan perulangan while terkontrol 6:
   Python
   counter \= 1
   while counter \<= 3:
       print(counter)
       counter \+= 1

   *Penjelasan baris demi baris*:
   * **Baris 1**: counter \= 1 menginisialisasi variabel penghitung.
   * **Baris 2**: while counter \<= 3: mengecek kondisi.6 Selama counter kurang dari atau sama dengan 3, blok di bawahnya dieksekusi.6
   * **Baris 3**: print(counter) mencetak nilai counter aktif.4
   * **Baris 4**: counter \+= 1 menambah nilai counter sebesar 1 agar perulangan tidak berjalan selamanya.6
3. Menggunakan break untuk menghentikan perulangan sebelum waktunya 11:
   Python
   for angka in range(1, 10):
       if angka \== 4:
           break
       print(angka)

   *Penjelasan baris demi baris*:
   * **Baris 1**: for angka in range(1, 10): melintasi angka 1 sampai 9\.4
   * **Baris 2**: if angka \== 4: mengecek apakah nilai angka sama dengan 4\.4
   * **Baris 3**: break menghentikan seluruh perulangan seketika saat nilai angka mencapai 4\.11
   * **Baris 4**: print(angka) hanya sempat mencetak angka 1, 2, dan 3\.4

##### **3 Common Mistakes**

1. **Infinite Loop karena Lupa Modifikasi Kondisi**: Menulis while dengan variabel kondisi yang nilainya tidak pernah diubah di dalam blok perulangan, sehingga program berjalan selamanya dan membuat komputer hang.6
2. **Modifikasi List yang Sedang Diiterasi**: Menambah atau menghapus elemen dari sebuah List saat sedang melintasi List tersebut menggunakan perulangan for. Hal ini mengacaukan penunjuk indeks internal Python dan menghasilkan output yang tidak terduga.
3. **Kesalahan Off-by-One dengan Fungsi range**: Mengasumsikan range(1, 5\) akan menghasilkan angka dari 1 sampai 5\. Sebenarnya, batas atas pada fungsi range bersifat eksklusif, sehingga hasil yang keluar hanya 1, 2, 3, 4\.4

##### **3 Best Practices**

1. Gunakan **For Loop** sebagai pilihan utama jika sudah tahu batas akhir iterasi atau sedang bekerja dengan objek koleksi data.6
2. Selalu berikan batasan maksimal iterasi jika terpaksa menggunakan perulangan while untuk menghindari risiko *infinite loop* tak terduga.6
3. Hindari penulisan logika yang terlalu rumit di dalam putaran; jika blok di dalam putaran melebihi 15 baris, pertimbangkan untuk memindahkannya ke dalam sebuah fungsi terpisah.

##### **Hubungan Konsep Ini dengan AI/Data Science**

Pelatihan model kecerdasan buatan pada dasarnya adalah perulangan raksasa.1 Proses menyuapkan data ke model, menghitung eror, dan memperbarui bobot model diulangi ribuan kali.1 Setiap satu putaran penuh atas seluruh dataset dikenal dengan istilah **Epoch**. Pemahaman tentang bagaimana mengontrol perulangan sangat krusial saat mengimplementasikan iterasi epoch ini.1

##### **Latihan Kecil dengan Contoh Jawaban**

Tuliskan perulangan for yang melintasi angka 1 sampai 5, namun lewati cetakan untuk angka 3 menggunakan kata kunci continue.4 *Contoh Jawaban*:

Python
for i in range(1, 6):
    if i \== 3:
        continue
    print(i)

##### **Ringkasan Chapter**

Mekanisme perulangan (for dan while) menyederhanakan eksekusi proses berulang pada data, sementara kata kunci break dan continue memberikan kendali penuh untuk menghentikan atau mengalihkan putaran berdasarkan dinamika data.1

### **Topik 3: Kode yang Reusable**

#### **Chapter: Fungsi dan Parameter**

##### **Tujuan Chapter**

Peserta mampu mendesain fungsi yang modular dengan parameter wajib, parameter opsional, serta nilai kembalian untuk menghasilkan kode yang bersih dan tidak redundan.1

##### **Konsep Utama**

Fungsi adalah blok kode terorganisir yang dapat digunakan kembali untuk melakukan satu tugas spesifik.6 Fungsi menerima masukan melalui parameter dan mengirimkan hasil pemrosesan kembali menggunakan kata kunci return.6

##### **Analogi**

Bayangkan fungsi sebagai sebuah **Mesin Blender** di dapur. Mesin ini memiliki tugas spesifik: menghancurkan buah menjadi jus. Buah yang Anda masukkan ke dalam blender bertindak sebagai **Parameter**. Anda bisa memasukkan buah mangga, pisang, atau alpukat. Tombol kecepatan blender bertindak sebagai **Parameter Opsional** (secara default diatur ke kecepatan sedang, namun bisa Anda ubah jika mau). Hasil akhir berupa jus gelas segar yang keluar dari blender adalah **Nilai Kembalian**.

##### **Penjelasan Teori Rinci**

Menulis kode yang sama berulang kali di berbagai tempat dalam satu aplikasi adalah praktik buruk yang mempersulit pemeliharaan program.6 Jika terjadi kesalahan pada logika tersebut, pengembang harus melacak dan mengubahnya di setiap tempat satu per satu.6 Fungsi menyelesaikan masalah ini dengan menerapkan prinsip DRY (*Don't Repeat Yourself*).6
Di dalam Python, fungsi dideklarasikan menggunakan kata kunci def, diikuti oleh nama fungsi, tanda kurung yang berisi daftar parameter (jika ada), dan diakhiri dengan titik dua.6 Tubuh fungsi ditulis dengan indentasi masuk di bawah baris deklarasi tersebut.1
Fungsi dapat menerima argumen masukan dalam beberapa cara:
**Positional Arguments**: Argumen dimasukkan berdasarkan urutan penulisan parameter dalam deklarasi fungsi.
**Keyword Arguments**: Argumen dimasukkan dengan menyebutkan nama parameternya secara eksplisit, misalnya hitung\_loss(y\_true=1, y\_pred=0.9). Hal ini membuat pemanggilan fungsi menjadi sangat jelas dan urutannya bisa diubah-ubah bebas.
**Default Parameters**: Kita dapat memberikan nilai bawaan pada parameter saat mendeklarasikan fungsi. Jika pemanggil fungsi tidak memberikan nilai untuk parameter tersebut, Python akan menggunakan nilai bawaan tersebut. Parameter dengan nilai bawaan ini wajib diletakkan setelah parameter yang tidak memiliki nilai bawaan.
Satu hal yang wajib dipahami pemula adalah perbedaan antara menampilkan hasil menggunakan print() di dalam fungsi dengan mengembalikan hasil menggunakan return. Fungsi print() hanya menampilkan teks ke layar untuk dilihat manusia, namun nilainya tidak dapat digunakan oleh bagian program lain. Sebaliknya, return mengirimkan objek hasil kalkulasi keluar dari fungsi untuk disimpan ke dalam variabel atau disalurkan ke fungsi berikutnya dalam suatu rantai pemrosesan. Begitu pernyataan return dieksekusi, fungsi akan langsung berhenti seketika itu juga dan semua baris kode di bawah return di dalam fungsi tersebut diabaikan.

Alur Aliran Data pada Fungsi:
Input: Argumen/Parameter  \===\>  \+--------------------------------+  \===\> Output: Nilai Kembalian
                                |         Tubuh Fungsi           |                (Return Value)
                                |  (Proses kalkulasi/manipulasi) |
                                \+--------------------------------+

##### **Contoh Kode Utama**

Python
def hitung\_akurasi(benar, total):
    return benar / total

hasil \= hitung\_akurasi(80, 100\)

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: def hitung\_akurasi(benar, total): Mendeklarasikan fungsi baru bernama hitung\_akurasi yang membutuhkan dua parameter wajib: benar dan total.6
* **Baris 2**: return benar / total
  Menghitung hasil pembagian dan langsung mengembalikannya sebagai nilai kembalian fungsi menggunakan kata kunci return.
* **Baris 4**: hasil \= hitung\_akurasi(80, 100\)
  Memanggil fungsi hitung\_akurasi dengan argumen benar=80 dan total=100. Nilai kembalian 0.8 ditangkap dan disimpan ke dalam variabel hasil.

##### **3 Contoh Tambahan**

1. Fungsi dengan parameter default :
   Python
   def sapa\_user(nama, peran="Fellow"):
       return f"Halo {nama}, peran Anda adalah {peran}"

   print(sapa\_user("Rara"))

   *Penjelasan baris demi baris*:
   * **Baris 1**: def sapa\_user(...) mendefinisikan fungsi dengan parameter default peran="Fellow".6
   * **Baris 2**: return f"Halo..." mengembalikan pesan string.
   * **Baris 4**: print(sapa\_user("Rara")) memanggil fungsi hanya dengan satu argumen wajib. Parameter peran otomatis menggunakan nilai default "Fellow".4
2. Fungsi yang mengembalikan beberapa nilai sekaligus menggunakan Tuple :
   Python
   def kalkulasi\_min\_max(list\_angka):
       return min(list\_angka), max(list\_angka)

   terendah, tertinggi \= kalkulasi\_min\_max()

   *Penjelasan baris demi baris*:
   * **Baris 1**: def kalkulasi\_min\_max(...) menerima list angka.6
   * **Baris 2**: return min(list\_angka), max(list\_angka) mencari nilai minimum dan maksimum, lalu mengembalikannya sekaligus.2
   * **Baris 4**: terendah, tertinggi \=... memanggil fungsi dan langsung memecah Tuple hasil kembalian ke dalam dua variabel terpisah.2
3. Fungsi tanpa nilai kembalian (hanya efek samping cetak) :
   Python
   def log\_status(pesan):
       print(f"\[LOG\]: {pesan}")

   log\_status("Model berhasil dimuat")

   *Penjelasan baris demi baris*:
   * **Baris 1**: def log\_status(pesan): mendeklarasikan fungsi logger.6
   * **Baris 2**: print(f"\[LOG\]: {pesan}") mencetak log status ke konsol terminal.4 Fungsi ini tidak memiliki pernyataan return, sehingga mengembalikan objek kosong None secara implisit.
   * **Baris 4**: log\_status(...) mengeksekusi fungsi tersebut.

##### **3 Common Mistakes**

1. **Mencoba Mengakses Variabel Lokal di Luar Fungsi**: Menulis variabel yang dideklarasikan di dalam fungsi di bagian luar fungsi utama. Ini memicu NameError karena variabel tersebut berada di dalam ruang lingkup lokal fungsi yang hancur setelah fungsi selesai dieksekusi.
2. **Lupa Menuliskan Pernyataan return**: Menulis fungsi kalkulasi tanpa perintah return di akhir. Akibatnya, saat variabel menampung hasil pemanggilan fungsi, variabel tersebut akan berisi nilai kosong khusus None.
3. **Menempatkan Parameter Default Sebelum Parameter Wajib**: Menulis deklarasi fungsi seperti def proses(aksi="baca", nama\_file):. Python akan langsung memicu SyntaxError: non-default argument follows default argument.

##### **3 Best Practices**

1. Buatlah fungsi yang berfokus melakukan satu tugas secara spesifik agar kode mudah diuji dan dikelola.7
2. Sertakan dokumentasi singkat mengenai kegunaan fungsi, tipe parameter, dan nilai kembalian menggunakan gaya penulisan *Docstring*.
3. Gunakan penulisan anotasi tipe untuk memperjelas ekspektasi data, contoh: def hitung\_luas(panjang: float, lebar: float) \-\> float:.

##### **Hubungan Konsep Ini dengan AI/Data Science**

Dalam alur kerja kecerdasan buatan, seluruh proses persiapan data dipisahkan ke dalam fungsi-fungsi modular.1 Kita membuat satu fungsi khusus untuk membaca data, satu fungsi untuk membersihkan teks dari tanda baca, satu fungsi untuk melakukan normalisasi angka, dan satu fungsi untuk menghitung metrik akurasi akhir.1 Modularisasi ini membuat pipeline data menjadi sangat bersih dan mudah dimodifikasi tanpa risiko merusak bagian kode yang lain.1

##### **Latihan Kecil dengan Contoh Jawaban**

Buatlah fungsi bernama normalisasi\_skala yang menerima satu parameter angka nilai dan satu parameter opsional maksimum dengan nilai default 100\. Fungsi harus mengembalikan hasil pembagian nilai / maksimum.
*Contoh Jawaban*:

Python
def normalisasi\_skala(nilai, maksimum=100):
    return nilai / maksimum

print(normalisasi\_skala(75))

##### **Ringkasan Chapter**

Fungsi mengubah sekumpulan instruksi menjadi satu unit operasional modular yang dapat digunakan kembali, efisien, serta mudah dikelola melalui pengaturan parameter masukan dan pengembalian nilai hasil kalkulasi.1

#### **Chapter: Lambda Expression dan Generator Basics**

##### **Tujuan Chapter**

Peserta mampu menyusun fungsi anonim sekali pakai menggunakan ekspresi Lambda dan menghemat konsumsi memori untuk aliran data besar menggunakan konsep Generator sederhana.1

##### **Konsep Utama**

Lambda adalah fungsi tanpa nama yang ditulis dalam satu baris ekspresi tunggal.6 Generator adalah jenis fungsi khusus yang menghasilkan urutan nilai secara bertahap menggunakan kata kunci yield alih-alih mengembalikan semua nilai sekaligus di memori.1

##### **Analogi**

* **Lambda Expression** seperti **Pena Sekali Pakai** di bank. Anda hanya membutuhkannya untuk menandatangani satu slip formulir cepat, lalu Anda meninggalkannya begitu saja tanpa perlu menyimpannya di tempat pensil khusus.6
* **Generator** seperti **Keran Dispenser Air**. Jika membutuhkan 10 liter air untuk diminum sepanjang hari, Anda tidak perlu membawa ember raksasa 10 liter ke mana-mana. Cukup gunakan botol kecil, dan putar keran dispenser untuk mengeluarkan air **hanya pada saat haus** satu gelas demi satu gelas.1

##### **Penjelasan Teori Rinci**

Seiring dengan semakin besarnya skala aplikasi kecerdasan buatan dan sains data yang kita bangun, teknik penulisan kode konvensional kadang tidak lagi efisien. Python menyediakan fitur pemrograman fungsional tingkat lanjut untuk menyiasati keterbatasan efisiensi penulisan dan memori.1
**Lambda Expression**: Ditulis dengan kata kunci lambda, diikuti parameter, tanda titik dua, dan ekspresi tunggal yang langsung dievaluasi serta dikembalikan hasilnya.6 Sintaksis Lambda sangat minimalis karena tidak membutuhkan kata kunci def maupun pernyataan return.6 Karakteristik utama Lambda adalah ia tidak memiliki nama di ruang namespace program.6 Lambda biasanya digunakan sebagai argumen untuk fungsi tingkat tinggi yang menerima fungsi lain sebagai masukannya, seperti fungsi filter, sorting khusus, atau fungsi pemetaan data pada Pandas DataFrame.6
**Generator**: Fungsi normal di Python akan menghitung semua nilai hasil kalkulasi, menyimpannya di dalam memori sebagai satu List besar, lalu mengembalikannya ke pemanggil.2 Namun, jika dataset Anda berisi jutaan baris dokumen teks, menyimpannya sekaligus dalam memori akan menyebabkan sistem kehabisan RAM. Generator mengatasi masalah ini dengan menerapkan prinsip evaluasi malas.1
Generator dideklarasikan seperti fungsi biasa menggunakan def, namun alih-alih menggunakan return, ia menggunakan kata kunci yield.1 Ketika fungsi generator dipanggil, ia tidak langsung menjalankan kode di dalamnya.1 Ia hanya mengembalikan objek generator.1 Ketika program meminta nilai berikutnya (misalnya melalui fungsi next() atau perulangan for), generator akan berjalan hingga menemui baris yield, mengembalikan nilai tersebut, dan **membekukan status eksekusinya** di titik tersebut.1 Saat diminta nilai berikutnya lagi, generator melanjutkan eksekusi dari titik beku tersebut.1

Perbandingan Memori (Return vs Yield):
Return (Konvensional):  \==\> Dimuat semua ke RAM sekaligus
Yield (Generator):      \==\> Hanya satu data di RAM, sisanya diproses bertahap sesuai permintaan

##### **Contoh Kode Utama**

Python
kali\_dua \= lambda x: x \* 2

def generator\_angka():
    yield 1
    yield 2

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: kali\_dua \= lambda x: x \* 2 Membuat fungsi anonim Lambda yang menerima satu parameter x dan langsung mengembalikan hasil perkalian x \* 2\.6 Fungsi ini disimpan ke variabel referensi kali\_dua agar bisa dipanggil.6
* **Baris 3**: def generator\_angka(): Mendeklarasikan fungsi generator khusus menggunakan kata kunci def.1
* **Baris 4**: yield 1 Menyerahkan angka 1 ke program utama dan menjeda eksekusi fungsi generator.1
* **Baris 5**: yield 2 Ketika dipanggil kembali untuk kedua kalinya, generator melanjutkan dan menyerahkan angka 2\.1

##### **3 Contoh Tambahan**

1. Menggunakan Lambda bersama fungsi filter 6:
   Python
   list\_loss \= \[0.8, 0.4, 0.9, 0.2\]
   loss\_kecil \= list(filter(lambda x: x \< 0.5, list\_loss))
   print(loss\_kecil)

   *Penjelasan baris demi baris*:
   * **Baris 1**: list\_loss \= \[...\] mendefinisikan list angka.
   * **Baris 2**: loss\_kecil \=... memanggil fungsi filter() yang menyaring elemen list menggunakan ekspresi Lambda lambda x: x \< 0.5.6 Hasil saringan dikonversi kembali menjadi List.2
   * **Baris 3**: print(loss\_kecil) mencetak \[0.4, 0.2\].4
2. Membuat Generator deret angka genap dinamis 1:
   Python
   def genap\_generator(maks):
       n \= 0
       while n \< maks:
           yield n
           n \+= 2

   for angka in genap\_generator(5):
       print(angka)

   *Penjelasan baris demi baris*:
   * **Baris 1**: def genap\_generator(maks): mendeklarasikan generator.1
   * **Baris 3**: while n \< maks: mengevaluasi batas perulangan.6
   * **Baris 4**: yield n mengeluarkan angka genap aktif dan menjeda fungsi.1
   * **Baris 5**: n \+= 2 menaikkan nilai variabel untuk putaran berikutnya.6
   * **Baris 7**: for angka in... melintasi generator, menghasilkan output cetak 0 dan 2 secara bertahap.4
3. List Comprehension sebagai bentuk ringkas pemrosesan data 6:
   Python
   skor\_mentah \=
   skor\_bersih \= \[x \+ 5 for x in skor\_mentah\]
   print(skor\_bersih)

   *Penjelasan baris demi baris*:
   * **Baris 1**: skor\_mentah \= \[...\] mendefinisikan list awal.
   * **Baris 2**: skor\_bersih \= \[x \+ 5 for x in skor\_mentah\] menggunakan sintaksis List Comprehension untuk menambah setiap elemen dengan 5 secara ringkas dan cepat.6
   * **Baris 3**: print(skor\_bersih) mencetak \`\`.4

##### **3 Common Mistakes**

1. **Mencoba Menulis Banyak Baris Logika di Dalam Lambda**: Memaksakan percabangan atau perulangan di dalam ekspresi Lambda. Ingat bahwa Lambda dirancang hanya untuk menampung ekspresi satu baris tunggal.6
2. **Menggunakan Generator yang Sudah Habis**: Berusaha membaca ulang elemen dari generator yang sudah selesai dilintasi. Generator hanya bisa dibaca satu kali melintas; jika ingin dibaca ulang, Anda harus menginstansiasi ulang objek generator baru dari fungsinya.1
3. **Mengasumsikan Generator Menyimpan Data Secara Fisik**: Mengira bahwa objek generator adalah sebuah list yang bisa diperiksa panjangnya menggunakan fungsi len(). Hal ini akan langsung memicu TypeError karena generator tidak memiliki konsep ukuran panjang sebelum dievaluasi secara tuntas.1

##### **3 Best Practices**

1. Gunakan **Lambda Expression** hanya untuk fungsi pemrosesan satu baris yang sangat sederhana dan dilewatkan sebagai argumen fungsi pemetaan pustaka seperti Pandas atau Map.6
2. Gunakan **Generator** jika perlu memproses berkas teks besar, logs sistem raksasa, atau batch gambar berukuran gigabyte untuk menghemat kapasitas RAM komputer.1
3. Tuliskan dokumentasi yang jelas pada generator Anda untuk mempermudah developer lain memahami format batch data yang dikeluarkan di setiap putaran *yield*.1

##### **Hubungan Konsep Ini dengan AI/Data Science**

Pelatihan model pembelajaran mendalam modern tidak mungkin dilakukan tanpa generator.1 Dataset gambar medis atau teks internet raksasa berukuran ratusan gigabyte tidak akan muat di memori komputer. Dengan menggunakan generator (diimplementasikan sebagai *DataLoader* di PyTorch atau *Data Generator* di TensorFlow), model dapat mengambil gambar bertahap 32 per 32 gambar untuk dilatih, membebaskan memori RAM agar program tetap berjalan stabil.1

##### **Latihan Kecil dengan Contoh Jawaban**

Buatlah ekspresi Lambda bernama is\_positive yang menerima satu parameter angka dan mengembalikan nilai True jika angka tersebut lebih besar dari nol, dan False jika sebaliknya.6 *Contoh Jawaban*:

Python
is\_positive \= lambda x: x \> 0
print(is\_positive(5))
print(is\_positive(-3))

##### **Ringkasan Chapter**

Ekspresi Lambda menyederhanakan deklarasi fungsi anonim sekali pakai untuk pemrosesan ringkas.6 Sementara itu, konsep Generator bertindak sebagai penyelamat kinerja sistem memori saat memproses aliran data bervolume besar melalui evaluasi malas berbasis yield.1

### **Topik 4: Program Terstruktur dan Robust**

#### **Chapter: Object-Oriented Programming Dasar**

##### **Tujuan Chapter**

Peserta memahami filosofi dasar Pemrograman Berorientasi Objek, serta mampu menyusun Class, instansiasi Object, konstruktor \_\_init\_\_, pembuatan metode kelas, dan konsep pewarisan sederhana.1

##### **Konsep Utama**

OOP adalah paradigma pemrograman yang menyusun kode dalam bentuk objek-objek mandiri yang menggabungkan data (Attributes) dan perilaku (Methods).7 Class bertindak sebagai cetak biru, sementara Object adalah perwujudan fisik dari cetak biru tersebut.7

##### **Analogi**

Bayangkan Class sebagai sebuah **Cetak Biru Arsitek** untuk rumah.7 Cetak biru tersebut berisi spesifikasi ruangan, warna cat default, dan sistem pipa.7 Namun, Anda tidak bisa tidur atau berteduh di dalam cetak biru tersebut.7 Anda harus membangun rumah fisik berdasarkan cetak biru tersebut.7 Rumah fisik yang sudah jadi inilah yang disebut sebagai **Object** atau **Instance**.7 Anda bisa membangun 10 rumah berbeda dari satu cetak biru yang sama, masing-masing dengan warna cat interior atau perabotan yang unik.7

##### **Penjelasan Teori Rinci**

Seiring perkembangan arsitektur perangkat lunak, pemrograman prosedural murni sering kali menyulitkan pengorganisasian kode jika entitas sistem memiliki banyak state internal.7 Paradigma Pemrograman Berorientasi Objek memecahkan masalah ini dengan mengelompokkan data dan logika terkait ke dalam satu kesatuan struktur logis.7
Di dalam Python, pembuatan kelas ditandai dengan kata kunci class diikuti oleh nama kelas yang ditulis dengan konvensi PascalCase.7
Mari kita bedah pilar dan elemen penting dalam OOP dasar:
**Konstruktor (\_\_init\_\_)**: Merupakan metode bawaan khusus yang dipanggil secara otomatis oleh Python pada saat objek pertama kali diciptakan di memori.7 Konstruktor biasanya digunakan untuk menginisialisasi nilai awal dari atribut objek.7
**Kata Kunci self**: Mewakili referensi ke instansi objek aktif yang sedang memanggil metode tersebut.7 Melalui self, kita dapat mengakses dan memodifikasi atribut milik objek tersebut di dalam metode kelas.7 Setiap kali kita mendefinisikan metode di dalam kelas, parameter pertama wajib berupa self.7
**Pewarisan (*Inheritance*)**: Memungkinkan suatu kelas baru (disebut kelas anak) untuk mewarisi seluruh atribut dan metode dari kelas yang sudah ada (disebut kelas induk).7 Konsep ini sangat menghemat penulisan kode karena kita tidak perlu mendefinisikan ulang logika umum yang dimiliki oleh beberapa entitas sejenis.7 Kita cukup menuliskan perbedaan atau fitur tambahan khusus di kelas anak.7

Struktur Pewarisan (Inheritance):
            \+------------------------------------+
            |        Parent Class: Model         |
            |  Atribut: nama, tipe               |
            |  Metode: info()                    |
            \+------------------------------------+
                             ^
                             | Mewarisi (Inherits)
                             |
            \+------------------------------------+
            |      Child Class: NeuralNetwork    |
            |  Atribut tambahan: jumlah\_layer    |
            |  Metode tambahan: latih()          |
            \+------------------------------------+

##### **Contoh Kode Utama**

Python
class Model:
    def \_\_init\_\_(self, nama):
        self.nama \= nama

class JaringanSaraf(Model):
    def latih(self):
        return f"Melatih model: {self.nama}"

nn \= JaringanSaraf("MultiLayerPerceptron")

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: class Model: Mendeklarasikan kelas dasar bernama Model.12
* **Baris 2**: def \_\_init\_\_(self, nama): Mendefinisikan metode konstruktor kelas induk yang menerima satu argumen masukan nama.7
* **Baris 3**: self.nama \= nama Mengikat nilai argumen masukan ke dalam atribut instansi nama milik objek bersangkutan menggunakan kata kunci self.7
* **Baris 5**: class JaringanSaraf(Model): Mendefinisikan kelas anak bernama JaringanSaraf yang mewarisi seluruh sifat dari kelas induk Model.7
* **Baris 6**: def latih(self): Mendefinisikan metode baru khusus untuk kelas anak.12
* **Baris 7**: return f"Melatih model: {self.nama}" Mengembalikan pesan teks yang memanfaatkan atribut nama yang diwarisinya dari kelas induk.7
* **Baris 9**: nn \= JaringanSaraf("MultiLayerPerceptron") Melakukan instansiasi untuk membuat objek baru di memori komputer.12

##### **3 Contoh Tambahan**

1. Kelas dengan variabel statis bersama:
   Python
   class AsistenAI:
       versi \= "2.0" \# Atribut kelas, dimiliki bersama oleh seluruh instansi

       def \_\_init\_\_(self, nama):
           self.nama \= nama \# Atribut instansi spesifik objek

   bot1 \= AsistenAI("Anya")
   print(bot1.versi)

   *Penjelasan baris demi baris*:
   * **Baris 1**: class AsistenAI: mendeklarasikan kelas.12
   * **Baris 2**: versi \= "2.0" menetapkan atribut kelas bersama.
   * **Baris 4**: def \_\_init\_\_(...) menetapkan konstruktor kelas.7
   * **Baris 7**: bot1 \=... membuat objek instansi.12
   * **Baris 8**: print(bot1.versi) mengakses variabel kelas statis.4
2. Mendefinisikan ulang perilaku pencetakan objek menggunakan \_\_str\_\_ 7:
   Python
   class Metrik:
       def \_\_init\_\_(self, nama, skor):
           self.nama \= nama
           self.skor \= skor
       def \_\_str\_\_(self):
           return f"Metrik {self.nama}: {self.skor}"

   m \= Metrik("Akurasi", 0.95)
   print(m)

   *Penjelasan baris demi baris*:
   * **Baris 1**: class Metrik: mendefinisikan kelas baru.12
   * **Baris 5**: def \_\_str\_\_(self): mendefinisikan ulang metode representasi teks internal objek.7
   * **Baris 9**: print(m) otomatis memanggil fungsi \_\_str\_\_ yang mengembalikan kalimat berformat kustom.4
3. Metode pembaruan atribut internal di dalam kelas 12:
   Python
   class Dataset:
       def \_\_init\_\_(self):
           self.jumlah\_baris \= 0
       def tambah\_data(self, n):
           self.jumlah\_baris \+= n

   ds \= Dataset()
   ds.tambah\_data(100)

   *Penjelasan baris demi baris*:
   * **Baris 1**: class Dataset: mendefinisikan kelas pengelola data.12
   * **Baris 3**: self.jumlah\_baris \= 0 menginisialisasi nilai atribut awal.7
   * **Baris 4**: def tambah\_data(self, n): membuat metode untuk memperbarui status.12
   * **Baris 5**: self.jumlah\_baris \+= n menambah nilai atribut internal.7
   * **Baris 7**: ds \= Dataset() melakukan instansiasi objek.12
   * **Baris 8**: ds.tambah\_data(100) memperbarui data objek menjadi 100\.12

##### **3 Common Mistakes**

1. **Lupa Menuliskan Parameter self**: Menuliskan fungsi di dalam kelas seperti def info(): tanpa menyertakan self sebagai parameter pertama.7 Akibatnya, saat metode dipanggil melalui objek, Python akan memicu TypeError: info() takes 0 positional arguments but 1 was given.
2. **Mengasumsikan Properti Instansi Bersifat Statis**: Mengubah atribut instansi pada satu objek dan mengira perubahan tersebut akan otomatis memengaruhi objek lainnya. Setiap instansi objek memiliki ruang memori atributnya sendiri-sendiri.7
3. **Lupa Memanggil super().\_\_init\_\_ di Kelas Anak**: Mengabaikan inisialisasi kelas induk saat menulis konstruktor kelas anak, yang mengakibatkan atribut-atribut milik kelas induk tidak pernah terbuat dan memicu AttributeError saat diakses.

##### **3 Best Practices**

1. Gunakan konvensi penamaan kelas dengan format PascalCase (contoh: JaringanSarafTiruan, PreprocessPipeline) dan gunakan kata benda.7
2. Jaga agar sebuah kelas tetap fokus pada tanggung jawab tunggal, jangan membuat kelas raksasa yang mengurusi semua urusan aplikasi dari koneksi database hingga pelatihan model kecerdasan buatan.7
3. Gunakan tanda garis bawah tunggal (\_) atau ganda (\_\_) di depan nama atribut untuk menandai secara konvensi bahwa atribut tersebut bersifat privat agar tidak diakses langsung dari luar kelas.7

##### **Hubungan Konsep Ini dengan AI/Data Science**

Seluruh pustaka pembelajaran mesin modern dirancang menggunakan OOP.1 Di Scikit-Learn, setiap model (seperti LinearRegression atau RandomForestClassifier) adalah sebuah Class.7 Anda membuat objeknya, lalu memanggil metode .fit() untuk melatih model dan .predict() untuk menghasilkan prediksi.7 Di PyTorch, model jaringan saraf tiruan kustom Anda wajib dideklarasikan sebagai kelas anak yang mewarisi torch.nn.Module.1

##### **Latihan Kecil dengan Contoh Jawaban**

Buatlah Class bernama Tokenizer yang menerima parameter vocab (list kata) pada konstruktornya. Buat metode bernama is\_known yang menerima satu parameter string kata dan mengembalikan True jika kata tersebut ada di dalam vocab, dan False jika sebaliknya.2 *Contoh Jawaban*:

Python
class Tokenizer:
    def \_\_init\_\_(self, vocab):
        self.vocab \= vocab
    def is\_known(self, kata):
        return kata in self.vocab

tok \= Tokenizer(\["ai", "deep", "learning"\])
print(tok.is\_known("deep"))
print(tok.is\_known("python"))

##### **Ringkasan Chapter**

Paradigma Pemrograman Berorientasi Objek memfasilitasi pengorganisasian kode yang rapi, modular, dan dapat diandalkan melalui pemodelan struktur Class, instansiasi Object dengan state atribut internalnya masing-masing, serta perluasan fungsionalitas lewat mekanisme pewarisan sifat.1

#### **Chapter: Exception Handling**

##### **Tujuan Chapter**

Peserta mampu mengantisipasi anomali runtime program, mengisolasi kode rawan eror menggunakan blok try, except, else, dan finally, serta memahami cara membaca jejak galat.

##### **Konsep Utama**

Penanganan kesalahan mencegah program mati seketika saat menemui kendala runtime dengan mengalihkan kendali eksekusi ke blok penanganan darurat kustom.2

##### **Analogi**

Bayangkan Anda sedang berkendara menggunakan mobil dengan **Sistem Autopilot**. Di jalur utama yang mulus, sistem berjalan lancar. Namun, tiba-tiba di tengah jalan terdapat genangan air yang sangat dalam atau jalanan amblas. Jika sistem autopilot tidak memiliki penanganan kondisi darurat, mobil akan langsung menabrak rintangan atau mati mesin di tengah jalan. Namun, jika diprogram dengan baik, sistem akan mendeteksi rintangan tersebut (**Try**), menghentikan kemudi otomatis (**Except**), membunyikan alarm peringatan, dan menyerahkan kendali kembali secara aman kepada pengemudi manusia (**Finally**).2

##### **Penjelasan Teori Rinci**

Eror dalam pemrograman diklasifikasikan menjadi dua jenis utama :
**Syntax Error**: Terjadi saat penulisan kode melanggar aturan sintaksis Python.1 Eror jenis ini dideteksi sebelum program mulai dijalankan.1
**Exceptions (Runtime Error)**: Terjadi ketika sintaksis kode sudah benar, namun terjadi anomali tidak terduga pada saat program sedang berjalan.2 Contoh klasik meliputi pembagian angka dengan nol, memanggil variabel yang tidak ada, membuka berkas yang tidak eksis di cakram keras, atau salah tipe data.2
Jika program tidak memiliki mekanisme penanganan, kemunculan satu buah *exception* akan menghentikan seluruh proses eksekusi seketika itu juga. Untuk aplikasi yang berjalan terus-menerus, hal ini sangat berbahaya.
Python menyediakan arsitektur penanganan kesalahan yang elegan menggunakan blok berikut :

* try: Blok tempat kita meletakkan baris kode yang berisiko memicu eror. Python akan mencoba mengeksekusi blok ini terlebih dahulu.
* except: Jika terjadi eror di dalam blok try, Python akan menghentikan eksekusi baris tersisa di dalam try, mencari blok except yang sesuai dengan tipe eror tersebut, dan mengeksekusi penanganan kustom di dalamnya.
* else: Berisi kode yang hanya dijalankan jika blok try berhasil dieksekusi sepenuhnya tanpa memicu eror sama sekali.
* finally: Berisi kode yang **dijamin akan selalu dieksekusi**, tidak peduli apakah terjadi eror atau tidak di blok try. Blok ini sangat ideal untuk melakukan operasi pembersihan sistem seperti menutup koneksi database atau menutup file yang terbuka.

Alur Eksekusi Exception Handling:
           Masuk Blok TRY
                 |
        Apakah Terjadi Eror?
             /        \\
       (Ya) /          \\ (Tidak)
           /            \\
  Blok EXCEPT          Blok ELSE
           \\            /
            \\          /
             v        v
           Blok FINALLY

##### **Contoh Kode Utama**

Python
try:
    hasil \= 10 / 0
except ZeroDivisionError:
    hasil \= 0

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: try:
  Memulai blok pemantauan keamanan eksekusi kode.
* **Baris 2**: hasil \= 10 / 0 Mencoba membagi angka 10 dengan 0\.3 Karena secara matematis hal ini ilegal, Python langsung memicu ZeroDivisionError. Eksekusi dalam blok try segera dihentikan.
* **Baris 3**: except ZeroDivisionError:
  Interpreter mencocokkan tipe kesalahan. Karena cocok, alur dialihkan ke dalam blok ini.
* **Baris 4**: hasil \= 0
  Menetapkan nilai alternatif hasil \= 0 agar program dapat terus berjalan dengan selamat tanpa mengalami crash.

##### **3 Contoh Tambahan**

1. Menangkap beberapa jenis eror secara terpisah :
   Python
   try:
       d \= {"a": 1}
       nilai \= d\["b"\]
   except KeyError:
       print("Kunci tidak ada")
   except IndexError:
       print("Indeks salah")

   *Penjelasan baris demi baris*:
   * **Baris 1**: try: memulai blok keamanan.
   * **Baris 3**: nilai \= d\["b"\] mencoba mengakses kunci yang tidak eksis di Dictionary, memicu KeyError.
   * **Baris 4**: except KeyError: menangkap kesalahan kunci dan mencetak peringatan.2
   * **Baris 6**: except IndexError: diabaikan karena tidak relevan.
2. Menggunakan blok finally untuk menjamin pembersihan :
   Python
   try:
       print("Membuka Koneksi")
       eror\_pemicu \= 5 / 0
   except ZeroDivisionError:
       print("Eror Ditangani")
   finally:
       print("Koneksi Ditutup")

   *Penjelasan baris demi baris*:
   * **Baris 2**: print("Membuka Koneksi") dijalankan.4
   * **Baris 3**: eror\_pemicu \= 5 / 0 memicu kesalahan pembagian dengan nol.
   * **Baris 4**: except ZeroDivisionError: menangkap kesalahan tersebut.
   * **Baris 6**: finally: menjamin blok terakhir dijalankan sehingga teks "Koneksi Ditutup" tetap tercetak.2
3. Melempar Exception kustom secara sengaja menggunakan raise :
   Python
   def validasi\_skor(s):
       if s \< 0:
           raise ValueError("Skor tidak boleh negatif")

   try:
       validasi\_skor(-10)
   except ValueError as e:
       print(f"Eror Tertangkap: {e}")

   *Penjelasan baris demi baris*:
   * **Baris 1**: def validasi\_skor(s): mendefinisikan fungsi validasi.6
   * **Baris 3**: raise ValueError(...) memicu kesalahan secara manual jika kondisi terpenuhi.
   * **Baris 5**: try: memantau eksekusi fungsi.
   * **Baris 8**: print(...) menangkap objek pesan kesalahan dan menampilkan rinciannya ke layar.2

##### **3 Common Mistakes**

1. **Menggunakan Blok Except Kosong**: Menuliskan kode except: tanpa mendefinisikan tipe eror atau tanpa menuliskan aksi penanganan di dalamnya. Praktik buruk ini menyembunyikan masalah serius dalam kode sehingga membuat proses pencarian serangga menjadi sangat sulit.
2. **Salah Memosisikan Penanganan Generik**: Menulis except Exception: di bagian paling atas sebelum penanganan spesifik seperti except ZeroDivisionError:. Python mengevaluasi dari atas ke bawah, sehingga blok generik akan menangkap semua eror terlebih dahulu dan mematikan blok spesifik di bawahnya.
3. **Mengasumsikan Exception Handling Menyembunyikan Bug Desain**: Menggunakan try-except untuk menutupi kesalahan logika penulisan kode dasar yang seharusnya diperbaiki, bukan disembunyikan lewat blok penangkapan eror.

##### **3 Best Practices**

1. Tangkaplah tipe kesalahan yang sespesifik mungkin agar tahu persis cara menangani kondisi darurat tersebut secara presisi.
2. Gunakan blok finally secara disiplin untuk menutup koneksi eksternal (file, jaringan, database) guna mencegah terjadinya kebocoran sumber daya sistem.
3. Catat rincian eror yang terjadi menggunakan pustaka pencatatan resmi Python alih-alih hanya mencetaknya dengan fungsi print, agar riwayat kesalahan dapat ditelusuri di lingkungan server produksi.

##### **Hubungan Konsep Ini dengan AI/Data Science**

Aplikasi kecerdasan buatan sering kali berinteraksi dengan dunia luar yang tidak ideal.1 Saat model bertugas mengambil data gambar dari kamera keamanan internet, koneksi jaringan bisa saja terputus di tengah jalan.8 Saat memproses dataset teks ulasan dari internet, ada kemungkinan beberapa baris ulasan kosong atau rusak.8 Tanpa adanya penanganan kesalahan menggunakan try-except, satu baris data yang rusak atau gangguan jaringan sesaat dapat mematikan seluruh sistem pengolahan kecerdasan buatan yang sedang berjalan.

##### **Latihan Kecil dengan Contoh Jawaban**

Tuliskan program yang mencoba mengubah string "bukan\_angka" menjadi integer menggunakan fungsi int(). Tangkap kesalahan ValueError yang terjadi dan cetak pesan "Konversi Gagal\!".2 *Contoh Jawaban*:

Python
try:
    angka \= int("bukan\_angka")
except ValueError:
    print("Konversi Gagal\!")

##### **Ringkasan Chapter**

Arsitektur penanganan kesalahan menggunakan struktur blok try-except-else-finally menjamin keberlangsungan aplikasi dari ancaman crash akibat anomali data atau kegagalan interaksi sistem di fase runtime.

#### **Chapter: Operasi File I/O**

##### **Tujuan Chapter**

Peserta mampu melakukan interaksi baca-tulis dokumen fisik pada format teks secara aman menggunakan manajer konteks, serta memahami cara kerja navigasi direktori berkas.1

##### **Konsep Utama**

Operasi File I/O memungkinkan penyimpanan dan pembacaan data secara persisten ke dalam cakram keras.6 Penggunaan struktur with menjamin berkas ditutup otomatis oleh sistem demi mencegah terjadinya penguncian data.6

##### **Analogi**

Bayangkan membaca berkas seperti **Mengambil Buku dari Lemari Arsip Terkunci**. Langkah konvensionalnya adalah: Anda mengambil kunci, membuka pintu lemari, mengambil dokumen, membaca isinya, lalu Anda wajib mengunci kembali pintu lemari tersebut dan menyimpan kuncinya. Jika Anda lupa mengunci kembali lemari (atau terjadi kecelakaan di tengah jalan saat Anda membaca), lemari akan tetap terbuka selamanya, berisiko dirusak orang lain atau file terkunci. Penggunaan manajer konteks with bertindak seperti **Petugas Arsip Otomatis** yang mendampingi Anda: ia membukakan lemari, dan begitu selesai membaca atau pergi dari meja, ia langsung mengunci kembali lemari tersebut secara instan tanpa perlu Anda ingat.6

##### **Penjelasan Teori Rinci**

Sejauh ini, semua variabel dan objek data yang kita buat hanya disimpan di dalam memori akses acak komputer. Saat program mati atau komputer dimatikan, semua data tersebut akan langsung hilang. Operasi File I/O memungkinkan kita untuk membaca data masukan dari media penyimpanan non-volatile dan menyimpan hasil pemrosesan program secara permanen.6
Dalam Python, untuk berinteraksi dengan berkas, kita menggunakan fungsi bawaan open(file, mode).6 Parameter mode menentukan jenis interaksi yang diizinkan 6:

* "r" (Read): Membuka berkas hanya untuk dibaca.6 Jika berkas tidak eksis di direktori tujuan, akan muncul eror FileNotFoundError.
* "w" (Write): Membuka berkas untuk ditulis.6 Jika berkas belum ada, berkas baru akan dibuat secara otomatis.6 Jika berkas sudah ada, seluruh isi lamanya akan dihapus total (ditimpa).6
* "a" (Append): Membuka berkas untuk ditulis, namun isinya tidak dihapus.6 Data baru yang kita tulis akan ditambahkan di baris paling akhir dari isi berkas lama.6

Masalah terbesar bagi pemula saat menulis kode File I/O adalah lupa menutup koneksi berkas menggunakan fungsi .close() setelah operasi selesai.6 Hal ini dapat menyebabkan penggunaan sumber daya memori yang tidak efisien, mencegah proses lain untuk memodifikasi berkas tersebut, atau bahkan kehilangan data yang belum sempat dikirim dari buffer ke cakram keras.6
Untuk mengatasi risiko tersebut, Python menyediakan protokol manajer konteks yang ditandai dengan kata kunci with.6 Ketika blok with open(...) as f: dibuat, Python akan mendirikan batas eksekusi aman.6 Begitu program keluar dari blok indentasi with tersebut, Python secara otomatis akan memanggil fungsi .close() di balik layar untuk melepas berkas kembali ke sistem operasi.6

Alur Manajer Konteks WITH:
             with open("data.txt", "r") as f:
                             |
                   Masuk Blok Indentasi
                    (Operasi Baca File)
                             |
          Apakah Keluar Blok (Atau Terjadi Eror)?
                             |
                     \+-------v-------+
                     |  Sistem AUTO- |
                     |  CLOSE Berkas |
                     \+---------------+

##### **Contoh Kode Utama**

Python
with open("log.txt", "w") as f:
    f.write("Akurasi: 0.95")

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: with open("log.txt", "w") as f: Menggunakan manajer konteks with untuk membuka berkas bernama "log.txt" dalam mode menulis "w".6 Objek berkas dirujuk dengan variabel penunjuk alias f.6
* **Baris 2**: f.write("Akurasi: 0.95") Memanggil metode .write() milik objek berkas untuk merekam string "Akurasi: 0.95" ke dalam berkas fisik di hard disk.6 Setelah baris ini selesai, Python secara otomatis menutup berkas.6

##### **3 Contoh Tambahan**

1. Membaca seluruh konten berkas sekaligus 6:
   Python
   with open("log.txt", "r") as f:
       isi \= f.read()
       print(isi)

   *Penjelasan baris demi baris*:
   * **Baris 1**: with open(...) membuka berkas log dalam mode membaca "r".6
   * **Baris 2**: isi \= f.read() memanggil metode .read() untuk menyedot seluruh konten teks berkas menjadi satu string tunggal.6
   * **Baris 3**: print(isi) mencetak isi berkas tersebut.4
2. Membaca berkas baris demi baris secara efisien menggunakan perulangan 6:
   Python
   with open("log.txt", "r") as f:
       for baris in f:
           print(baris.strip())

   *Penjelasan baris demi baris*:
   * **Baris 1**: with open(...) membuka berkas log untuk dibaca.6
   * **Baris 2**: for baris in f: memanfaatkan sifat iterable dari objek berkas untuk membaca baris demi baris secara malas, sangat hemat memori RAM.6
   * **Baris 3**: print(baris.strip()) mencetak baris dengan membuang karakter spasi atau baris baru di ujung teks menggunakan .strip().4
3. Menambahkan baris teks baru tanpa menghapus isi lama menggunakan mode "a" 6:
   Python
   with open("log.txt", "a") as f:
       f.write("\\nEpoch berikutnya selesai")

   *Penjelasan baris demi baris*:
   * **Baris 1**: with open(...) membuka berkas dengan mode "a" (Append).6
   * **Baris 2**: f.write(...) menulis teks tambahan di bagian paling akhir berkas log fisik.6

##### **3 Common Mistakes**

1. **Lupa Menggunakan Manajer Konteks with**: Membuka berkas dengan penulisan lama f \= open("file.txt") dan lupa memanggil f.close(). Akibatnya, berkas terkunci oleh sistem operasi.
2. **Menggunakan Mode "w" Saat Ingin Menambah Data**: Salah memilih mode tulis, berniat ingin menambahkan data baru namun menggunakan mode "w" alih-alih "a". Ini mengakibatkan seluruh data riwayat lama Anda di dalam berkas terhapus bersih secara permanen.6
3. **Kesalahan Lokasi Berkas**: Mencoba membaca berkas dengan nama relatif tanpa menyadari bahwa terminal aktif berada di direktori yang berbeda, sehingga memicu FileNotFoundError. Selalu pastikan path lokasi berkas dirujuk secara tepat.

##### **3 Best Practices**

1. Selalu gunakan struktur manajer konteks with open(...) untuk menjamin keamanan penutupan berkas secara otomatis.6
2. Tentukan parameter penyandian karakter secara eksplisit saat membuka berkas teks, contoh: open("data.txt", "r", encoding="utf-8"), untuk menghindari masalah eror pembacaan karakter non-ASCII di sistem operasi yang berbeda.
3. Untuk penanganan jalur berkas yang tangguh lintas sistem operasi, gunakan modul pustaka standar pathlib bawaan Python.

##### **Hubungan Konsep Ini dengan AI/Data Science**

Operasi File I/O adalah gerbang masuk pertama bagi model kecerdasan buatan.1 Dalam pemrosesan bahasa alami, dataset teks mentah seperti ulasan pelanggan, dokumen PDF hukum, atau percakapan obrolan tersimpan di dalam cakram keras dalam bentuk file teks.8 Program Python harus membuka file-file tersebut terlebih dahulu, mengekstrak teks di dalamnya baris demi baris, melakukan pembersihan teks, sebelum akhirnya data dikonversi menjadi representasi vektor numerik untuk dilatih oleh model.1

##### **Latihan Kecil dengan Contoh Jawaban**

Tuliskan program yang membuat berkas bernama token.txt dan menulis kata "Fellowship" di dalamnya, kemudian baca kembali berkas tersebut dan tampilkan isinya.6 *Contoh Jawaban*:

Python
with open("token.txt", "w") as f:
    f.write("Fellowship")

with open("token.txt", "r") as f:
    konten \= f.read()
    print(konten)

##### **Ringkasan Chapter**

Interaksi berkas fisik berbasis penyimpanan permanen dikelola dengan menggunakan fungsi open() dan parameter mode aksesnya, di mana struktur manajer konteks with bertindak sebagai pengaman utama pelepasan sumber daya sistem secara otomatis.1

### **Topik 5: Pintu Gerbang Data Science**

#### **Chapter: NumPy dan Operasi Matriks**

##### **Tujuan Chapter**

Peserta mampu melakukan inisialisasi array multi-dimensi menggunakan pustaka NumPy, memahami konsep efisiensi komputasi berbasis vektorisasi, serta mampu mengeksekusi operasi matriks dasar.1

##### **Konsep Utama**

NumPy menyediakan objek array multi-dimensi homogen berkinerja tinggi (ndarray).2 Operasi matematika pada NumPy memanfaatkan kompilasi tingkat rendah C yang menghindari lambatnya perulangan iterasi Python murni.1

##### **Analogi**

Bayangkan Anda adalah seorang **Koki Pembuat 100 Gelas Jus Jeruk** :

* Menggunakan **Python List murni** seperti mengupas satu jeruk, memerasnya, menuangkannya ke gelas, lalu mengulanginya dari awal satu per satu sebanyak 100 kali.2 Ini sangat melelahkan dan memakan waktu lama.2
* Menggunakan **NumPy Array** seperti menggunakan **Mesin Industri Pemeras Jeruk Raksasa**.2 Anda memasukkan 100 jeruk ke dalam mesin sekaligus, menekan satu tombol, dan dalam satu detik mesin mengeluarkan 100 gelas jus jeruk secara bersamaan.2 Konsep ini disebut sebagai **Vektorisasi**.3

##### **Penjelasan Teori Rinci**

Python List bawaan sangat fleksibel karena dapat menyimpan berbagai tipe data campuran dalam satu tempat. Namun, fleksibilitas ini harus dibayar mahal.2 Secara internal, Python List hanyalah kumpulan penunjuk pointer alamat memori yang tersebar secara acak.2 Ketika melakukan operasi aritmatika pada List menggunakan perulangan, interpreter Python harus memeriksa tipe data setiap elemen satu per satu, mengonversinya, dan menghitungnya.2 Proses ini lambat dan tidak efisien untuk data skala besar.2
NumPy (Numerical Python) memecahkan masalah performa ini dengan memperkenalkan struktur data ndarray (N-dimensional Array).2 Karakteristik arsitektural utama NumPy Array meliputi:
**Memori Kontigu Homogen**: Semua elemen di dalam NumPy Array wajib memiliki tipe data yang sama.2 Hal ini memungkinkan NumPy untuk menyimpan data secara berurutan tanpa jeda di dalam blok memori fisik komputer.2
**Vektorisasi**: Memungkinkan kita mengeksekusi operasi matematika pada seluruh elemen array secara bersamaan tanpa memerlukan penulisan perulangan for di tingkat Python.3 Di balik layar, operasi ini dijalankan menggunakan instruksi kompilasi bahasa C tingkat rendah dan teknologi akselerasi prosesor modern.1
Mari kita pelajari operasi matriks dasar yang merupakan pilar matematika kecerdasan buatan:
**Penjumlahan Matriks**: Menjumlahkan elemen-elemen yang berada di posisi indeks yang sama dari dua matriks yang memiliki dimensi yang sama persis.3
**Perkalian Skalar**: Mengalikan setiap elemen individual di dalam matriks dengan satu nilai angka tunggal.9
**Dot Product (Perkalian Matriks)**: Operasi baris kali kolom.14 Untuk mengalikan dua matriks ![][image4] dan ![][image5], jumlah kolom dari matriks pertama ![][image4] wajib sama dengan jumlah baris dari matriks kedua ![][image5].14 Operasi ini diimplementasikan menggunakan operator khusus @ atau fungsi np.dot().3
**Transpose**: Memutar matriks sehingga baris menjadi kolom dan sebaliknya.3 Operasi ini ditulis sangat ringkas di NumPy menggunakan atribut .T.3

| Karakteristik | Python List Murni | NumPy Array (ndarray) |
| :---- | :---- | :---- |
| **Tipe Data Elemen** | Boleh Campuran (Heterogen) | Wajib Sama (Homogen) 2 |
| **Tata Letak Memori** | Tersebar di RAM 2 | Blok Kontigu Berurutan 2 |
| **Kecepatan Eksekusi** | Lambat 3 | Sangat Cepat (Bahasa C) 1 |
| **Operasi Matematika** | Harus Ditulis dengan Perulangan 3 | Mendukung Operasi Langsung 3 |

Ilustrasi Dot Product (Perkalian Matriks):
Matriks A (2 x 3\)           Matriks B (3 x 2\)             Hasil Matriks C (2 x 2\)
\[ a11  a12  a13 \]     x     \[ b11  b12 \]          \=       \[ c11  c12 \]
\[ a21  a22  a23 \]           \[ b21  b22 \]                  \[ c21  c22 \]
                            \[ b31  b32 \]
Kalkulasi c11: (a11 \* b11) \+ (a12 \* b21) \+ (a13 \* b31)

##### **Contoh Kode Utama**

Python
import numpy as np

m1 \= np.array(\[, \])
m2 \= np.array(\[, \])

hasil \= m1 @ m2

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: import numpy as np Mengimpor pustaka NumPy ke dalam program dan memberi alias np secara standar industri.9
* **Baris 3**: m1 \= np.array(\[, \]) Membuat matriks NumPy pertama berdimensi ![][image6] dari struktur List bersarang.3
* **Baris 4**: m2 \= np.array(\[, \]) Membuat matriks NumPy kedua berdimensi ![][image6].3
* **Baris 6**: hasil \= m1 @ m2 Mengeksekusi perkalian aljabar matriks (dot product) menggunakan operator khusus @.3 Nilai posisi indeks pertama dari matriks hasil dihitung dari ![][image7].5

##### **3 Contoh Tambahan**

1. Penjumlahan elemen-demi-elemen pada matriks 3:
   Python
   a \= np.array()
   b \= np.array()
   c \= a \+ b
   print(c)

   *Penjelasan baris demi baris*:
   * **Baris 1**: a \=... mendefinisikan array satu dimensi pertama.9
   * **Baris 2**: b \=... mendefinisikan array satu dimensi kedua.9
   * **Baris 3**: c \= a \+ b menjumlahkan elemen pada posisi indeks yang bersesuaian secara paralel.3
   * **Baris 4**: print(c) mencetak hasil \`\`.4
2. Mengalikan matriks dengan skalar 9:
   Python
   matriks \= np.array(\[, \])
   skalar\_hasil \= matriks \* 3
   print(skalar\_hasil)

   *Penjelasan baris demi baris*:
   * **Baris 1**: matriks \=... membuat matriks ![][image6].3
   * **Baris 2**: skalar\_hasil \= matriks \* 3 mengalikan setiap elemen di dalam matriks dengan angka 3 secara serentak.9
   * **Baris 3**: print(skalar\_hasil) mencetak \[, \].4
3. Melakukan Transpose Matriks 3:
   Python
   original \= np.array(\[, \])
   rotated \= original.T
   print(rotated)

   *Penjelasan baris demi baris*:
   * **Baris 1**: original \=... membuat matriks berukuran ![][image8].3
   * **Baris 2**: rotated \= original.T memutar matriks sehingga kolom menjadi baris menggunakan properti .T.3
   * **Baris 3**: print(rotated) mencetak matriks hasil pemutaran berukuran ![][image9].4

##### **3 Common Mistakes**

1. **Dimensi Tidak Cocok untuk Dot Product**: Mencoba mengalikan dua matriks dengan operator @ padahal kolom matriks pertama tidak sama dengan baris matriks kedua, misalnya mengalikan matriks ![][image8] dengan matriks ![][image6]. Ini akan memicu ValueError: shapes not aligned.
2. **Mengasumsikan Bintang (\*) adalah Dot Product**: Menggunakan operator \* dan mengira itu melakukan perkalian aljabar matriks. Operator \* pada NumPy mengeksekusi perkalian elemen-demi-elemen (*Hadamard Product*), sedangkan @ mengeksekusi aljabar matriks dot product.14
3. **Lupa Melewatkan Tuple untuk Fungsi Shape**: Menulis np.zeros(3, 4\) alih-alih np.zeros((3, 4)). Fungsi inisialisasi NumPy mengharapkan satu objek Tuple untuk parameter dimensinya.

##### **3 Best Practices**

1. Selalu gunakan alias import numpy as np secara konsisten karena ini adalah konvensi universal sains data.9
2. Lakukan inspeksi bentuk array menggunakan atribut .shape sebelum melakukan operasi aljabar linear kompleks untuk menghemat waktu debugging eror dimensi.14
3. Manfaatkan operasi vektor bawaan NumPy secara maksimal, hindari penggunaan perulangan for biasa jika Anda bisa mengekspresikannya dalam bentuk operasi matriks NumPy langsung demi kecepatan performa.3

##### **Hubungan Konsep Ini dengan AI/Data Science**

Operasi matriks adalah jantung komputasi kecerdasan buatan.1 Di dalam Jaringan Saraf Tiruan, input data direpresentasikan sebagai matriks ![][image10], dan bobot sinapsis antar-neuron direpresentasikan sebagai matriks ![][image11].3 Proses penyuapan data ke depan di setiap lapisan neuron pada dasarnya hanyalah operasi perkalian matriks diikuti penjumlahan bias: ![][image12].3 Memahami NumPy adalah kunci utama untuk memahami bagaimana pustaka seperti PyTorch memproses model kecerdasan buatan.1

##### **Latihan Kecil dengan Contoh Jawaban**

Buatlah dua matriks NumPy satu dimensi: x \= dan y \= . Hitung hasil perkalian dot product antara kedua array tersebut menggunakan fungsi np.dot(x, y).9 *Contoh Jawaban*:

Python
import numpy as np
x \= np.array()
y \= np.array()
hasil\_dot \= np.dot(x, y)
print(hasil\_dot) \# Menghasilkan (1\*3) \+ (2\*4) \= 11

##### **Ringkasan Chapter**

Pustaka NumPy memperkenalkan struktur ndarray homogen berkinerja tinggi yang mendukung komputasi matriks aljabar linear berkecepatan tinggi melalui vektorisasi, menjadi fondasi utama kalkulasi model kecerdasan buatan modern.1

#### **Chapter: Pandas dan Tabular Data**

##### **Tujuan Chapter**

Peserta memahami struktur data Series dan DataFrame milik pustaka Pandas, mampu membaca file dataset eksternal berformat CSV menggunakan read\_csv(), serta mampu melakukan operasi inspeksi dan pemfilteran data tabular sederhana.

##### **Konsep Utama**

Pandas adalah pustaka manipulasi data tabular yang dibangun di atas NumPy, menawarkan struktur DataFrame untuk mengelola tabel data lengkap dengan kolom berlabel dan pengindeksan baris yang fleksibel.2

##### **Analogi**

Bayangkan Pandas sebagai aplikasi **Microsoft Excel di dalam Kode Python**.2 Jika NumPy adalah susunan angka mentah yang tidak memiliki label, maka Pandas DataFrame adalah lembar kerja Excel lengkap dengan nama kolom di bagian atas, dan nomor baris di bagian samping, membuat analisis data menjadi sangat intuitif.2

##### **Penjelasan Teori Rinci**

Meskipun NumPy sangat cepat dan efisien untuk operasi matematika numerik, ia memiliki keterbatasan serius saat kita bekerja dengan dataset dunia nyata.2 Dataset riil biasanya heterogen (berisi campuran teks, tanggal, dan angka desimal) dan membutuhkan label deskriptif untuk kolom-kolomnya.2 NumPy Array tidak dirancang untuk menangani data heterogen semacam ini.2
Pandas didesain khusus untuk mengatasi tantangan tersebut. Pandas memperkenalkan dua objek data utama:
**Series**: Struktur data satu dimensi yang menyerupai List atau array satu dimensi NumPy.6 Bedanya, Series memiliki indeks berlabel kustom yang bisa berupa string, bukan hanya nomor indeks integer saja.6
**DataFrame**: Struktur data dua dimensi berbentuk tabel terstruktur.2 DataFrame pada dasarnya adalah kumpulan dari beberapa objek Series yang saling berbagi baris indeks yang sama.2 Setiap kolom di dalam DataFrame dapat memiliki tipe data yang berbeda.
Fungsi paling populer di Pandas untuk memulai analisis data adalah read\_csv(file\_path).1 Fungsi ini bertugas membaca dokumen bertipe CSV dari cakram keras, secara otomatis mendeteksi nama kolom dari baris pertama berkas, mengurai tipe data di setiap kolom, dan membangun objek DataFrame lengkap di dalam memori program.1
Setelah data dimuat menjadi DataFrame, kita dapat melakukan berbagai operasi penting:

* Inspeksi Awal: Menggunakan .head(n) untuk mengintip ![][image13] baris pertama data guna memahami strukturnya, atau .info() untuk melihat ringkasan tipe data dan jumlah baris yang tidak kosong.
* Pemilihan Kolom: Mengakses kolom tertentu seperti df\["Nama\_Kolom"\] untuk analisis spesifik.
* Pemfilteran Logis (*Boolean Masking*): Memfilter baris berdasarkan kondisi data tertentu, misalnya menyaring data pelanggan yang memiliki umur di atas 30 tahun.

Struktur DataFrame Pandas:
           Kolom 0 (Nama)     Kolom 1 (Umur)     Kolom 2 (Aktif)
          \+-----------------+------------------+-----------------+
Indeks 0  | "Anya"          | 25               | True            |  \===\> Baris 0
Indeks 1  | "Budi"          | 34               | False           |  \===\> Baris 1
          \+-----------------+------------------+-----------------+
                  |                  |                  |
               Series 0           Series 1           Series 2

##### **Contoh Kode Utama**

Python
import pandas as pd

data \= {"Nama":, "Skor": }
df \= pd.DataFrame(data)

lulus \= df \>= 90\]

##### **Penjelasan Kode Baris demi Baris**

* **Baris 1**: import pandas as pd
  Mengimpor pustaka Pandas ke dalam lingkungan runtime program aktif dan memberikan alias berupa kata kunci pd secara standar industri.
* **Baris 3**: data \= {"Nama":, "Skor": }
  Membuat Dictionary data mentah dengan dua entitas kolom kunci-nilai.
* **Baris 4**: df \= pd.DataFrame(data)
  Menginstansiasi dan mengonversi Dictionary data mentah tersebut menjadi objek DataFrame tabel terstruktur.
* **Baris 6**: lulus \= df \>= 90\]
  Mengevaluasi kondisi baris di mana kolom "Skor" bernilai lebih besar atau sama dengan 90 menggunakan teknik *Boolean Masking*. DataFrame baru hasil penyaringan diserahkan ke variabel lulus.

##### **3 Contoh Tambahan**

1. Membaca file CSV eksternal 1:
   Python
   \# df\_csv \= pd.read\_csv("dataset\_model.csv")
   \# print(df\_csv.head(3))

   *Penjelasan baris demi baris*:
   * **Baris 1**: pd.read\_csv(...) digunakan untuk membaca file tabular CSV fisik di penyimpanan lokal menjadi objek DataFrame Pandas secara instan.1
   * **Baris 2**: df\_csv.head(3) mengembalikan tiga baris teratas dari tabel dataset untuk diintip.
2. Mendapatkan deskripsi statistik deskriptif dasar secara instan :
   Python
   data\_skor \= {"Nilai": }
   df\_skor \= pd.DataFrame(data\_skor)
   print(df\_skor.describe())

   *Penjelasan baris demi baris*:
   * **Baris 1**: data\_skor \=... menyiapkan data nilai.
   * **Baris 2**: df\_skor \=... membentuk DataFrame tabel.
   * **Baris 3**: print(df\_skor.describe()) mengeksekusi metode .describe() yang secara otomatis menghitung metrik statistik ringkas.
3. Mengakses kolom tertentu dan menghitung rata-ratanya :
   Python
   data\_loss \= {"loss": \[0.4, 0.2, 0.1\]}
   df\_loss \= pd.DataFrame(data\_loss)
   mean\_loss \= df\_loss\["loss"\].mean()
   print(mean\_loss)

   *Penjelasan baris demi baris*:
   * **Baris 1**: data\_loss \=... mendefinisikan Dictionary.
   * **Baris 2**: df\_loss \=... membentuk DataFrame Pandas.
   * **Baris 3**: mean\_loss \= df\_loss\["loss"\].mean() mengakses kolom Series "loss" dan memanggil fungsi .mean() untuk menghitung rata-rata nilai desimal.
   * **Baris 4**: print(mean\_loss) mencetak hasilnya.4

##### **3 Common Mistakes**

1. **Mengasumsikan DataFrame Mengubah Data Asli**: Mengira operasi filter atau penghapusan kolom langsung mengubah variabel DataFrame asal. Secara default, sebagian besar operasi Pandas mengembalikan objek DataFrame baru. Jika ingin mengubah asli, gunakan parameter inplace=True atau simpan kembali hasil ke variabel asal.
2. **Salah Sintaksis Penggabungan Filter**: Menulis beberapa kondisi filter menggunakan operator logika kata Python biasa, seperti df\[(df\["Akurasi"\] \> 0.8) and (df \< 100)\]. Di Pandas, Anda wajib menggunakan operator biner simbol seperti & untuk *and*, | untuk *or*, dan wajib menyertakan tanda kurung di setiap kondisi.
3. **Kesalahan Referensi Nama Kolom**: Menulis label kunci kolom dengan ejaan atau huruf besar/kecil yang salah, memicu KeyError. Selalu pastikan nama kolom yang dipanggil sesuai dengan nama fisik kolom di dataset.

##### **3 Best Practices**

1. Selalu gunakan alias standar import pandas as pd untuk konsistensi pembacaan kode.
2. Gunakan metode .info() segera setelah memuat data baru dari CSV untuk mendeteksi keberadaan data kosong dan memastikan tipe data di setiap kolom sudah terdeteksi secara benar.
3. Hindari penggunaan perulangan for untuk memodifikasi baris DataFrame secara manual; gunakan fungsi .apply() bersama ekspresi Lambda untuk pemrosesan kolom yang tervektorisasi dan jauh lebih cepat.2

##### **Hubungan Konsep Ini dengan AI/Data Science**

Tahap terpenting dari proyek kecerdasan buatan bukanlah pembuatan model, melainkan persiapan data. Sekitar 70% waktu praktisi kecerdasan buatan dihabiskan untuk memeriksa data, membersihkan data yang rusak, membuang baris kosong, memilih fitur kolom yang relevan, dan memotong dataset menjadi porsi latih dan uji.2 Semua aktivitas pembersihan dan rekayasa fitur data tabular tersebut diimplementasikan menggunakan pustaka Pandas.

##### **Latihan Kecil dengan Contoh Jawaban**

Buatlah DataFrame yang merepresentasikan dataset mini berikut: memiliki kolom "Model" berisi \`\` dan kolom "Akurasi" berisi \[0.85, 0.72, 0.91\]. Filter DataFrame tersebut untuk hanya menampilkan model yang memiliki akurasi di atas 0.80.
*Contoh Jawaban*:

Python
import pandas as pd
data\_ai \= {
    "Model":,
    "Akurasi": \[0.85, 0.72, 0.91\]
}
df\_ai \= pd.DataFrame(data\_ai)
filter\_df \= df\_ai\[df\_ai\["Akurasi"\] \> 0.80\]
print(filter\_df)

##### **Ringkasan Chapter**

Pustaka Pandas menyederhanakan manipulasi data tabular berlabel dinamis menggunakan struktur data Series dan DataFrame, mempermudah pemuatan dataset fisik melalui read\_csv(), serta menawarkan fungsionalitas inspeksi, pemfilteran, dan agregasi statistik yang krusial bagi fase penyiapan data kecerdasan buatan.1

## **Latihan Lengkap Terpadu**

### **Soal Reflektif**

1. Analisis bagaimana peran Python sebagai bahasa kontrol (control language) mendukung efisiensi komputasi pada pustaka AI berkinerja tinggi seperti PyTorch, jelaskan hubungan fungsionalnya dengan bahasa tingkat rendah seperti C++.1
2. Diberikan skenario di mana Anda harus menyimpan parameter konfigursi model kecerdasan buatan yang tidak boleh berubah secara tidak sengaja selama proses pelatihan. Struktur data koleksi manakah (List atau Tuple) yang paling aman untuk digunakan? Berikan argumen logis dari sudut pandang sifat mutabilitas objek.
3. Ketika mengolah aliran data sensor (data streaming) berkapasitas gigabyte, mengapa penggunaan Generator berbasis yield lebih disarankan dibandingkan penulisan fungsi konvensional yang mengembalikan objek List besar? Evaluasi dari perspektif efisiensi penggunaan ruang memori RAM komputer.1

### **Instruksi Coding**

Peserta diminta menuliskan sebuah skrip program Python utuh yang mensimulasikan alur kerja persiapan data (data preprocessing pipeline) sederhana untuk model kecerdasan buatan dengan rincian langkah berikut:

1. Buat sebuah berkas data fisik bernama sensor\_data.txt menggunakan operasi File I/O.6 Tuliskan lima baris nilai loss numerik tiruan berikut di dalamnya: 0.95, 1.50, \-0.20, 0.45, 0.10.6
2. Buatlah sebuah fungsi generator bernama baca\_aliran\_data yang bertugas membuka berkas tersebut, melintasi baris-baris data secara malas (bertahap menggunakan yield), dan secara otomatis membuang spasi kosong atau karakter baris baru.1
3. Di dalam generator tersebut, implementasikan blok try-except untuk menangkap potensi kesalahan konversi tipe data (ValueError) seandainya terdapat baris teks yang tidak dapat diubah menjadi float.
4. Buatlah fungsi kalkulator kustom bernama kalibrasi\_loss yang mengonsumsi data dari generator tersebut.6 Fungsi ini harus mengabaikan nilai loss negatif (di bawah 0.0) karena dianggap anomali sensor 4, dan mengalikan nilai loss positif dengan faktor skala kalibrasi sebesar 1.2.
5. Hitung rata-rata akhir dari seluruh nilai loss terkalibrasi tersebut, gunakan blok try-except tambahan untuk mengantisipasi potensi kesalahan pembagian dengan nol (ZeroDivisionError) jika tidak ada data valid yang terproses.
6. Tampilkan ringkasan laporan hasil pemrosesan di terminal.

### **Expected Output**

\=== Memulai Jalur Pemrosesan Data Sensor \===
Membaca nilai loss sensor: 0.95
Membaca nilai loss sensor: 1.50
Membaca nilai loss sensor: \-0.20 (Abaikan: Anomali Sensor)
Membaca nilai loss sensor: 0.45
Membaca nilai loss sensor: 0.10

\--- Pemrosesan Selesai \---
Jumlah Data Valid Terkalibrasi: 4
Rata-rata Nilai Loss Kalibrasi: 0.900

### **Contoh Jawaban Ideal**

Python
\# Langkah 1: Membuat berkas data sensor fisik
with open("sensor\_data.txt", "w") as f:
    f.write("0.95\\n")
    f.write("1.50\\n")
    f.write("-0.20\\n")
    f.write("0.45\\n")
    f.write("0.10\\n")

\# Langkah 2 & 3: Fungsi Generator Pembaca Aliran Data
def baca\_aliran\_data(nama\_file):
    try:
        with open(nama\_file, "r") as f:
            for baris in f:
                baris\_bersih \= baris.strip()
                if baris\_bersih:
                    try:
                        nilai\_float \= float(baris\_bersih)
                        yield nilai\_float
                    except ValueError:
                        print(f"Mengabaikan baris rusak (bukan angka): {baris\_bersih}")
    except FileNotFoundError:
        print("Eror: Berkas data sensor tidak ditemukan\!")

\# Langkah 4 & 5: Fungsi Kalibrasi dan Perhitungan Rata-rata
def kalibrasi\_loss(aliran\_generator):
    total\_akumulasi \= 0.0
    jumlah\_data\_valid \= 0
    faktor\_skala \= 1.2

    for nilai in aliran\_generator:
        if nilai \< 0.0:
            print(f"Membaca nilai loss sensor: {nilai} (Abaikan: Anomali Sensor)")
            continue

        print(f"Membaca nilai loss sensor: {nilai}")
        nilai\_terkalibrasi \= nilai \* faktor\_skala
        total\_akumulasi \+= nilai\_terkalibrasi
        jumlah\_data\_valid \+= 1

    try:
        rata\_rata \= total\_akumulasi / jumlah\_data\_valid
    except ZeroDivisionError:
        rata\_rata \= 0.0

    return jumlah\_data\_valid, rata\_rata

\# Langkah 6: Eksekusi Utama Program
print("=== Memulai Jalur Pemrosesan Data Sensor \===")
aliran \= baca\_aliran\_data("sensor\_data.txt")
jumlah, rata\_loss \= kalibrasi\_loss(aliran)

print("\\n--- Pemrosesan Selesai \---")
print(f"Jumlah Data Valid Terkalibrasi: {jumlah}")
print(f"Rata-rata Nilai Loss Kalibrasi: {rata\_loss:.3f}")

### **Rubrik / Kriteria Jawaban Bagus**

* **Desain Aliran Data & Generator (Bobot 30%)**: Peserta secara konsisten mengimplementasikan manajer konteks with untuk membuka berkas secara aman 6 dan merancang fungsi generator menggunakan instruksi yield secara benar.1
* **Keamanan Kode & Exception Handling (Bobot 30%)**: Program menyertakan blok penanganan kesalahan yang spesifik, yaitu menangkap ValueError saat konversi string-to-float, mengantisipasi FileNotFoundError untuk kegagalan file, serta memblokir ZeroDivisionError pada perhitungan pembagian rata-rata.
* **Ketepatan Logika Kalibrasi (Bobot 25%)**: Logika pengabaian nilai negatif serta operasi pengalian skalar dengan faktor skala kalibrasi berjalan tepat sesuai spesifikasi instruksi.
* **Kualitas Struktur & Gaya Penulisan (Bobot 15%)**: Kode ditulis dengan bersih, rapi, menerapkan gaya penamaan variabel yang deskriptif (*snake\_case*), serta menyertakan dokumentasi penjelas alur fungsi.7

## **Kuis Evaluasi Komprehensif**

### **Soal 1**

Mengapa ekosistem kecerdasan buatan dan analisis data sangat mengandalkan bahasa pemrograman Python sebagai bahasa antarmuka kendali utama?

* A. Karena Python memiliki kecepatan eksekusi kompilasi kode biner yang jauh lebih cepat dibandingkan bahasa tingkat rendah seperti C++ atau Assembly.
* B. Karena Python menyediakan sintaksis yang bersih dan mudah dibaca oleh pemula, yang bertindak sebagai bahasa kontrol di atas modul komputasi berkinerja tinggi yang ditulis dalam bahasa C/C++.1
* C. Karena Python memiliki manajemen memori manual yang sangat ketat yang memungkinkannya mengontrol memori GPU secara eksklusif tanpa perantara driver.
* D. Karena interpreter Python mengeksekusi perhitungan matriks aljabar linear pada jaringan saraf tiruan secara langsung di tingkat sirkuit komputer tanpa bantuan hardware akselerator.

**Jawaban Benar**: **B** *Alasan*: Python disukai karena ia bertindak sebagai perekat atau bahasa kontrol.1 Proses komputasi matematika yang berat ditangani oleh pustaka berkinerja tinggi di tingkat bahasa C/C++, sementara Python memfasilitasi kemudahan penulisan instruksi di tingkat atas.1 *Alasan Opsi Salah*:

* *Opsi A salah* karena Python adalah bahasa yang diinterpretasikan, yang kecepatan eksekusi aslinya lebih lambat dibandingkan bahasa kompilasi murni seperti C++.2
* *Opsi C salah* karena Python menggunakan manajemen memori otomatis berbasis pengumpul sampah, bukan manajemen memori manual.7
* *Opsi D salah* karena kalkulasi matriks berat didelegasikan ke pustaka eksternal berbasis C++/CUDA untuk dieksekusi di GPU, bukan ditangani langsung oleh interpreter Python murni.1

### **Soal 2**

Jika pengembang ingin mengisolasi paket dan pustaka dependensi agar proyek klasifikasi gambar tidak bentrok dengan proyek pemrosesan bahasa alami yang menggunakan versi pustaka berbeda, tindakan manakah yang paling tepat dilakukan?

* A. Melakukan instalasi sistem operasi baru secara terpisah untuk setiap proyek kecerdasan buatan.
* B. Memasang beberapa versi interpreter Python global yang berbeda di dalam folder sistem utama secara bersamaan.
* C. Membuat dan mengaktifkan lingkungan virtual mandiri untuk masing-masing proyek menggunakan modul bawaan venv.
* D. Mengunggah seluruh file kode ke GitHub untuk membiarkan server awan menangani dependensinya secara otomatis.

**Jawaban Benar**: **C**
*Alasan*: Penggunaan lingkungan virtual terisolasi lewat venv adalah standar industri untuk mengisolasi dependensi antarproyek agar tidak terjadi konflik versi pustaka.
*Alasan Opsi Salah*:

* *Opsi A salah* karena menginstal ulang sistem operasi terlalu ekstrem dan tidak efisien untuk manajemen proyek harian.
* *Opsi B salah* karena memasang banyak versi Python global secara bersamaan di sistem utama sering kali merusak konfigurasi sistem jalur path komputer global.
* *Opsi D salah* karena GitHub hanyalah repositori penyimpanan kode versi, bukan platform eksekusi lokal yang mengelola isolasi dependensi runtime komputer pengembang.13

### **Soal 3**

Diberikan penugasan variabel berikut: x \= 25.0 dan y \= 4\. Apakah tipe data dari objek hasil pembagian z \= x / y di Python?

* A. Integer (int)
* B. String (str)
* C. Float (float) 11
* D. Boolean (bool)

**Jawaban Benar**: **C** *Alasan*: Pembagian menggunakan operator / di Python akan selalu menghasilkan tipe data desimal Float, bahkan jika kedua operand adalah integer utuh.11 Pada contoh ini, 25.0 / 4 menghasilkan 6.25 yang bertipe Float.11 *Alasan Opsi Salah*:

* *Opsi A salah* karena hasil pembagian memiliki komponen desimal di belakang koma, sehingga tidak bisa direpresentasikan sebagai Integer utuh.11
* *Opsi B salah* karena tidak ada proses konversi string atau representasi teks di dalam operasi matematika tersebut.
* *Opsi D salah* karena operasi aritmatika pembagian menghasilkan angka, bukan status logika kebenaran True/False.11

### **Soal 4**

Diberikan definisi list berikut: model\_list \=. Apakah yang akan terjadi jika mengeksekusi instruksi model\_list \= "ResNet"?

* A. List akan bertambah secara otomatis sehingga elemen ketiga menjadi "ResNet".
* B. Python akan memicu kesalahan runtime berupa IndexError karena mencoba mengakses indeks di luar kapasitas list aktif.
* C. Elemen pertama "YOLO" akan terhapus dan digantikan oleh "ResNet".
* D. "ResNet" akan disisipkan di antara "YOLO" dan "BERT" tanpa mengubah ukuran indeks list.

**Jawaban Benar**: **B**
*Alasan*: List model\_list hanya memiliki dua elemen (indeks 0 dan indeks 1). Mencoba melakukan penugasan langsung pada indeks ke-2 (elemen ketiga yang belum ada) akan memicu galat IndexError: list assignment index out of range.
*Alasan Opsi Salah*:

* *Opsi A salah* karena penugasan langsung tidak menambah kapasitas list dinamis secara otomatis, Anda harus menggunakan metode .append() atau .insert().
* *Opsi C salah* karena indeks ke-0 ("YOLO") tidak tersentuh oleh instruksi indeks ke-2.
* *Opsi D salah* karena operasi penyisipan membutuhkan metode khusus .insert(posisi, nilai).

### **Soal 5**

Apakah perbedaan mendasar antara struktur data List dengan struktur data Set di dalam Python?

* A. List hanya bisa menyimpan tipe data string, sedangkan Set bisa menyimpan tipe data campuran.
* B. List bersifat mutable (bisa diubah), sedangkan Set bersifat immutable (tidak bisa diubah sama sekali).
* C. List menjamin urutan elemen sesuai waktu penulisan, sedangkan Set tidak menjamin urutan dan secara otomatis mengeliminasi elemen duplikat.
* D. List diakses menggunakan label kunci string, sedangkan Set diakses menggunakan indeks angka biner.

**Jawaban Benar**: **C**
*Alasan*: List adalah koleksi terurut yang mengizinkan duplikasi. Sementara Set adalah koleksi tidak terurut yang menjamin seluruh elemen di dalamnya bersifat unik (elemen duplikat otomatis dihapus).
*Alasan Opsi Salah*:

* *Opsi A salah* karena kedua struktur data tersebut sama-sama bebas menyimpan tipe data campuran apa saja.
* *Opsi B salah* karena objek Set dasar sebenarnya bersifat mutable (elemennya bisa ditambah atau dihapus), meskipun elemen individualnya harus bersifat immutable agar bisa di-hash.
* *Opsi D salah* karena pengaksesan berbasis kunci adalah ciri khas Dictionary, bukan List maupun Set.

### **Soal 6**

Perhatikan evaluasi logika boolean berikut: score \= 15 dan status \= (score \< 10\) or (score % 3 \== 0). Apakah nilai boolean akhir yang disimpan di dalam variabel status?

* A. True 11
* B. False
* C. None
* D. Eror Sintaksis

**Jawaban Benar**: **A** *Alasan*: Kondisi pertama score \< 10 (15 \< 10\) bernilai False.4 Kondisi kedua score % 3 \== 0 (15 % 3 \== 0 \-\> 0 \== 0\) bernilai True.4 Operasi logika False or True menggunakan operator or akan mengevaluasi hasil akhir menjadi True.11 *Alasan Opsi Salah*:

* *Opsi B salah* karena operator or hanya membutuhkan salah satu kondisi bernilai benar untuk menghasilkan True.11
* *Opsi C salah* karena ekspresi logika menghasilkan nilai boolean asli, bukan objek kosong None.
* *Opsi D salah* karena penulisan ekspresi perbandingan dan aritmatika modulo sisa bagi sudah valid secara sintaksis.

### **Soal 7**

Di dalam struktur fungsi Python, manakah dari pernyataan berikut yang paling akurat membedakan peran antara kata kunci return dengan fungsi print()?

* A. return menampilkan teks ke layar terminal, sedangkan print() mengirimkan data ke memori utama program.
* B. print() hanya menampilkan teks untuk dilihat manusia di konsol, sedangkan return mengirimkan objek data hasil kalkulasi keluar dari fungsi untuk dapat digunakan di bagian program lainnya.
* C. return menghentikan fungsi dan menghapus seluruh variabel global, sedangkan print() mengulangi fungsi tanpa batas.
* D. print() wajib digunakan di dalam fungsi, sedangkan return dilarang ditulis di dalam blok fungsi.

**Jawaban Benar**: **B** *Alasan*: Fungsi print() hanyalah efek samping cetak keluaran ke layar untuk kebutuhan inspeksi manusia.4 Agar nilai hasil kalkulasi di dalam fungsi dapat disalurkan, diolah, atau disimpan ke dalam variabel di luar fungsi, pengembang wajib menggunakan kata kunci return. *Alasan Opsi Salah*:

* *Opsi A salah* karena peran keduanya tertukar secara definisi.
* *Opsi C salah* karena return hanya menghentikan jalannya fungsi lokal yang bersangkutan, bukan menghapus ruang lingkup variabel global program.
* *Opsi D salah* karena penulisan return justru sangat direkomendasikan untuk fungsi-fungsi kalkulasi matematika di bidang AI.1

### **Soal 8**

Bagaimanakah mekanisme kerja kata kunci yield pada fungsi Generator di Python?

* A. Mengakhiri jalannya fungsi secara instan dan mengembalikan seluruh data dalam satu struktur list besar ke memori.
* B. Menghapus seluruh instansi objek di memori RAM untuk mencegah terjadinya memory leaks.
* C. Mengembalikan satu nilai aktif keluar ke program utama, menjeda sementara eksekusi fungsi generator, dan mengingat seluruh status variabel internal untuk dilanjutkan nanti.1
* D. Memicu pembagian beban kerja komputasi secara otomatis dari CPU ke core GPU.

**Jawaban Benar**: **C** *Alasan*: Berbeda dengan return yang mematikan fungsi, kata kunci yield pada generator berfungsi untuk merealisasikan evaluasi malas.1 Ia mengeluarkan satu nilai, membekukan state fungsi, dan siap melanjutkannya saat dipanggil kembali.1 *Alasan Opsi Salah*:

* *Opsi A salah* karena mengembalikan seluruh data sekaligus adalah karakteristik dari pernyataan return konvensional.6
* *Opsi B salah* karena generator justru menghemat memori dengan tidak menciptakan list objek besar di awal, bukan bertindak sebagai penghapus memori paksa.1
* *Opsi D salah* karena yield adalah bagian dari kontrol alur tingkat tinggi Python murni dan tidak mengurusi pembagian instruksi hardware ke GPU.1

### **Soal 9**

Diberikan potongan kode instansiasi kelas berikut:

Python
class AgenAI:
    def \_\_init\_\_(self, nama):
        self.nama \= nama
bot \= AgenAI("IndoBot")

Apakah peran dari parameter self di dalam metode \_\_init\_\_ tersebut?

* A. Bertindak sebagai variabel global yang mengimpor seluruh pustaka eksternal ke dalam kelas secara otomatis.
* B. Mewakili referensi ke instansi objek aktif yang sedang dibuat di memori, memungkinkan pengikatan atribut spesifik ke objek tersebut.7
* C. Menghapus objek lama yang memiliki nama yang sama dari memori komputer.
* D. Mengonversi tipe data kelas menjadi string agar bisa dicetak langsung di terminal.

**Jawaban Benar**: **B** *Alasan*: Parameter self wajib ditulis sebagai parameter pertama setiap metode dalam kelas.7 self bertindak sebagai penunjuk referensi ke objek fisik yang sedang memanggil metode tersebut, sehingga atribut individual objek dapat diatur secara terisolasi.7 *Alasan Opsi Salah*:

* *Opsi A salah* karena self tidak ada hubungannya dengan modul impor eksternal program.
* *Opsi C salah* karena penghapusan objek ditangani oleh pengumpul sampah otomatis Python atau metode dunder destructor \_\_del\_\_, bukan oleh parameter self.7
* *Opsi D salah* karena konversi representasi string ditangani oleh metode dunder \_\_str\_\_ atau \_\_repr\_\_.7

### **Soal 10**

Diberikan dua matriks NumPy berdimensi ![][image6] sebagai berikut:

Python
A \= np.array(\[, \])
B \= np.array(\[, \])

Apakah hasil yang diperoleh dari operasi aljabar matriks dot product A @ B?

* A. \[, \]
* B. \[, \] 3
* C. \[, \]
* D. \[, \]

**Jawaban Benar**: **B** *Alasan*: Operator @ mengeksekusi operasi perkalian aljabar matriks dot product (baris dikali kolom) 3:

* Elemen ![][image14]: ![][image15] 14
* Elemen ![][image16]: ![][image17] 14
* Elemen ![][image18]: ![][image19] 14
* Elemen ![][image20]: ![][image21] 14 Sehingga hasilnya adalah \[, \].14 *Alasan Opsi Salah*:
* *Opsi A salah* karena \[, \] adalah hasil dari perkalian elemen-demi-elemen (A \* B), bukan aljabar matriks dot product.14
* *Opsi C salah* karena itu adalah hasil penjumlahan biasa A \+ B.3
* *Opsi D salah* karena hasil perkalian dot product mengubah nilai elemen berdasarkan relasi baris-kolom.

## **Diskusi**

### **Prompt Diskusi Utama**

"Dalam dunia kecerdasan buatan, terdapat perdebatan antara efisiensi penulisan kode dengan efisiensi performa eksekusi komputer. Python sangat disukai karena mudah dipelajari dan mempercepat proses eksperimen. Namun, untuk sistem kritis berkinerja tinggi seperti kemudi otomatis atau pemrosesan video real-time beresolusi tinggi, beberapa ahli menyarankan penggunaan bahasa kompilasi tingkat rendah seperti C++ atau Rust. Analisis bagaimana ekosistem AI modern menjembatani jurang pemisah ini. Mengapa pemula AI disarankan tetap menggunakan Python sebagai langkah pertama mereka, dan bagaimana arsitektur pustaka seperti NumPy dan PyTorch menyiasati kelemahan kecepatan Python?" 1

### **Beberapa Pertanyaan Lanjutan**

1. Apakah menurut Anda di masa depan akan ada bahasa pemrograman baru yang mampu menggantikan dominasi Python di bidang kecerdasan buatan? Kriteria arsitektural apa saja yang harus dimiliki bahasa tersebut? 1
2. Bagaimana peran lingkungan virtual (venv) mendukung kolaborasi global dalam tim pengembang kecerdasan buatan yang memiliki sistem operasi komputer berbeda-beda? 1
3. Dalam alur kerja sains data, manakah yang lebih berbahaya bagi integritas model kecerdasan buatan: kesalahan sintaksis (*Syntax Error*) atau kesalahan penanganan data kosong (*Missing/Null Values*) di Pandas DataFrame? Berikan argumentasi logis Anda.

### **Contoh Jawaban Diskusi yang Bagus**

"Ekosistem kecerdasan buatan modern berhasil menjembatani jurang pemisah antara kemudahan penulisan kode Python dengan kecepatan eksekusi mesin melalui pendekatan arsitektur hibrida.1 Pustaka kecerdasan buatan populer seperti NumPy dan PyTorch tidak menjalankan perhitungan matematis beratnya di tingkat interpreter Python murni.1 Sebaliknya, mereka bertindak sebagai bahasa kontrol.1 Di balik layar, seluruh komputasi intensif aljabar linear, perkalian matriks, dan kalkulasi gradien ditulis menggunakan bahasa C++ dan CUDA yang dikompilasi secara optimal untuk dijalankan langsung di atas CPU atau GPU.1 Dengan demikian, pengembang mendapatkan yang terbaik dari kedua dunia: kemudahan menulis instruksi tingkat tinggi dengan sintaksis Python yang bersih, sekaligus performa eksekusi tingkat rendah yang setara dengan C++.1
Bagi pemula, belajar Python sebagai langkah pertama sangat disarankan karena kurva pembelajarannya yang landai. Pemula dapat memusatkan fokus kognitif mereka untuk memahami konsep logika matematika kecerdasan buatan, algoritma, dan alur manipulasi data, tanpa harus terdistraksi oleh kompleksitas manajemen memori manual, alokasi pointer, atau penulisan tipe data yang kaku seperti di C++.1 Python meminimalkan gesekan teknis di awal, menumbuhkan rasa percaya diri pemrogram pemula untuk terus bereksperimen menciptakan solusi kecerdasan buatan yang nyata.4"

## **Mini Project Akhir**

### **Deskripsi Project**

**"Sistem Klasifikasi dan Preprocessing Dataset Teks Otomatis"**
Peserta akan membangun prototipe sistem pemrosesan awal dataset teks otomatis untuk asisten kecerdasan buatan. Sistem ini harus mampu mensimulasikan pembacaan file dataset ulasan mentah, menyaring baris data kosong atau rusak secara aman, mengklasifikasikan kategori berdasarkan aturan logika sederhana, serta melakukan analisis statistik frekuensi menggunakan Pandas DataFrame.1

### **Langkah Pengerjaan**

1. **Tahap Penyiapan Data**: Buatlah file dataset fisik bernama ulasan\_mentah.txt menggunakan File I/O.6 Masukkan beberapa ulasan ulasan dengan format teks\_ulasan;sentimen\_label di mana ada baris yang sengaja dirusak (kosong atau salah pemisah).6
2. **Tahap OOP**: Buat sebuah Class bernama DokumenUlasan yang menyimpan data instansi teks\_asli dan kategori.7
3. **Tahap Pembersihan**: Susun fungsi generator aliran\_pembersih yang membaca file tersebut secara bertahap.1 Di dalam generator, terapkan penanganan kesalahan try-except untuk memotong teks, mengubah ke huruf kecil, menghapus spasi berlebih, serta memfilter baris kosong agar program tidak crash.2
4. **Tahap Analisis DataFrame**:
   * Konversi kumpulan objek DokumenUlasan yang bersih menjadi sebuah Pandas DataFrame.
   * Lakukan filter untuk memisahkan data ulasan positif dan negatif.
   * Hitung ringkasan statistik deskriptif dan tampilkan hasilnya di konsol terminal.

### **Starter Code**

Python
import pandas as pd

\# 1\. Menulis file dataset mentah tiruan
with open("ulasan\_mentah.txt", "w") as f:
    f.write("Akurasi model ini SANGAT hebat\!;Positif\\n")
    f.write(";\\n") \# Baris rusak kosong
    f.write("Pelatihan berjalan sangat LAMBAT;Negatif\\n")
    f.write("Suka sekali belajar di HerAI Fellowship;Positif\\n")
    f.write("Dokumentasi program kurang LENGKAP;Negatif\\n")

\# 2\. Membuat Class DokumenUlasan
class DokumenUlasan:
    def \_\_init\_\_(self, teks\_asli, kategori):
        self.teks\_asli \= teks\_asli
        self.teks\_bersih \= self.bersihkan\_teks(teks\_asli)
        self.kategori \= kategori

    def \_\_str\_\_(self):
        return f"\[{self.kategori}\]: {self.teks\_bersih}"

    def bersihkan\_teks(self, teks):
        \# Mengubah teks ke huruf kecil dan menghapus spasi di awal/akhir
        return " ".join(teks.lower().strip().split())

\# 3\. Fungsi Generator aliran\_pembersih
def aliran\_pembersih(nama\_file):
    try:
        with open(nama\_file, "r") as f:
            for baris in f:
                baris\_bersih \= baris.strip()
                if not baris\_bersih or ";" not in baris\_bersih:
                    \# Mengabaikan baris kosong atau rusak
                    continue

                try:
                    teks, kategori \= baris\_bersih.split(";")
                    if teks.strip():
                        \# Membuat objek dokumen baru
                        yield DokumenUlasan(teks, kategori)
                except ValueError:
                    continue
    except FileNotFoundError:
        print("Eror: Berkas dataset tidak ditemukan\!")

\# 4\. Pipeline Utama Analisis Pandas DataFrame
print("=== Memulai Analisis Dataset Teks \===")
generator\_ulasan \= aliran\_pembersih("ulasan\_mentah.txt")

\# Memasukkan objek generator ke dalam List
list\_objek\_ulasan \= list(generator\_ulasan)

\# Membuat DataFrame dari list objek dengan mengekstrak atributnya
data\_tabel \= {
    "Teks\_Bersih": \[obj.teks\_bersih for obj in list\_objek\_ulasan\],
    "Kategori": \[obj.kategori for obj in list\_objek\_ulasan\]
}
df\_ulasan \= pd.DataFrame(data\_tabel)

\# Menampilkan DataFrame
print("\\nDataFrame Hasil Pemrosesan:")
print(df\_ulasan)

\# Menghitung Statistik
jumlah\_positif \= len(df\_ulasan\[df\_ulasan\["Kategori"\] \== "Positif"\])
jumlah\_negatif \= len(df\_ulasan\[df\_ulasan\["Kategori"\] \== "Negatif"\])

print("\\n=== Ringkasan Laporan Statistik \===")
print(f"Total Ulasan Positif: {jumlah\_positif}")
print(f"Total Ulasan Negatif: {jumlah\_negatif}")

### **Expected Output**

\=== Memulai Analisis Dataset Teks \===

DataFrame Hasil Pemrosesan:
                               Teks\_Bersih Kategori
0          akurasi model ini sangat hebat\!  Positif
1          pelatihan berjalan sangat lambat  Negatif
2  suka sekali belajar di herai fellowship  Positif
3         dokumentasi program kurang lengkap  Negatif

\=== Ringkasan Laporan Statistik \===
Total Ulasan Positif: 2
Total Ulasan Negatif: 2

### **Kriteria Penilaian**

| Kategori Evaluasi | Indikator Pencapaian Utama | Bobot |
| :---- | :---- | :---- |
| **Penerapan OOP Dasar** | Ketepatan pendeklarasian Class, penyusunan atribut instansi, serta pemanggilan fungsi metode kelas.7 | 20% |
| **Keamanan & Exception Handling** | Keberhasilan implementasi blok try-except untuk memotong teks bermasalah tanpa menghentikan program. | 20% |
| **Operasi File I/O & Generator** | Penulisan kode pembacaan file dengan manajer konteks with dan efisiensi memori berbasis yield.6 | 20% |
| **Integrasi Pandas DataFrame** | Ketepatan konversi data objek menjadi DataFrame terstruktur dan keberhasilan manipulasi statistik. | 25% |
| **Kerapian & Struktur Kode** | Konsistensi penulisan indentasi, penamaan variabel (PEP 8), dan kebersihan log terminal.7 | 15% |

## **Catatan untuk Developer**

### **Bagian yang Cocok Jadi Materi Teori Naratif**

* **Topik 1: Memulai Python** (Chapter Apa Itu Python) dan bagian pengantar **Fase 1 s/d Fase 5** sangat baik disajikan dalam format teks bacaan naratif interaktif di platform karena kaya akan analogi sehari-hari.1
* **Penjelasan Teori Rinci** pada setiap chapter yang membahas struktur alokasi memori objek Python dan aljabar matriks NumPy disarankan menggunakan ilustrasi grafis statis pendukung di halaman website platform.3

### **Bagian yang Cocok Jadi Latihan Hands-on Coding**

* **Instruksi Coding Latihan Lengkap Terpadu** dan **Mini Project Akhir** sangat disarankan diintegrasikan langsung dengan sistem penilaian otomatis di platform belajar.
* **Chapter NumPy dan Pandas** sebaiknya dilengkapi dengan workspace Jupyter Notebook interaktif di platform agar peserta bisa langsung mengeksekusi manipulasi data tabular secara live.

### **Bagian yang Cocok Jadi Kuis Interaktif**

* **Kuis Evaluasi Komprehensif (Soal 1 s/d Soal 10\)** sangat ideal disajikan sebagai kuis pilihan ganda interaktif di akhir setiap fase pembelajaran untuk memverifikasi pemahaman teoretis peserta secara cepat.4

### **Bagian yang Cocok Jadi Diskusi Kelompok**

* **Prompt Diskusi Utama** mengenai perbandingan efisiensi Python vs C++ sangat disarankan disajikan pada forum diskusi terbuka antar-peserta di platform untuk melatih pemikiran kritis.1

#### **Karya yang dikutip**

1. pemorgraman-pyhton4.md
2. Python for Data Science, AI & Development | Coursera, diakses Juli 10, 2026, [https://www.coursera.org/learn/python-for-applied-data-science-ai](https://www.coursera.org/learn/python-for-applied-data-science-ai)
3. A Complete Guide to Matrices for Machine Learning with Python \- MachineLearningMastery.com, diakses Juli 10, 2026, [https://machinelearningmastery.com/a-complete-guide-to-matrices-for-machine-learning-with-python/](https://machinelearningmastery.com/a-complete-guide-to-matrices-for-machine-learning-with-python/)
4. Python with AI \- Udemy, diakses Juli 10, 2026, [https://www.udemy.com/course/pythonwithai/](https://www.udemy.com/course/pythonwithai/)
5. Matrix Multiplication with np.dot() in NumPy | Linear Algebra Tutorial for Beginners, diakses Juli 10, 2026, [https://www.youtube.com/watch?v=aN4bgCsnv6k](https://www.youtube.com/watch?v=aN4bgCsnv6k)
6. Complete Python Fundamentals \- Ai+ Training, diakses Juli 10, 2026, [https://app.aiplus.training/courses/complete-python-fundamentals](https://app.aiplus.training/courses/complete-python-fundamentals)
7. Python OOP Concepts Explained: The Ultimate | CDPL Blog \- Cinute Digital, diakses Juli 10, 2026, [https://www.cinutedigital.com/blog/python-oop-concepts-beginners](https://www.cinutedigital.com/blog/python-oop-concepts-beginners)
8. AI Python for Beginners \- Coursera, diakses Juli 10, 2026, [https://www.coursera.org/learn/ai-python-for-beginners](https://www.coursera.org/learn/ai-python-for-beginners)
9. Basic Matrix Operations | CodeSignal Learn, diakses Juli 10, 2026, [https://codesignal.com/learn/courses/introduction-to-linear-algebra-for-machine-learning/lessons/basic-matrix-operations](https://codesignal.com/learn/courses/introduction-to-linear-algebra-for-machine-learning/lessons/basic-matrix-operations)
10. AI Python for Beginners \- DeepLearning.AI, diakses Juli 10, 2026, [https://www.deeplearning.ai/courses/ai-python-for-beginners](https://www.deeplearning.ai/courses/ai-python-for-beginners)
11. Python for Beginners \- Microsoft Learn, diakses Juli 10, 2026, [https://learn.microsoft.com/en-us/shows/intro-to-python-development/](https://learn.microsoft.com/en-us/shows/intro-to-python-development/)
12. Python OOP Fundamentals: Understanding the Basics of Object Oriented Programming | by Sadaf Saleem | Medium, diakses Juli 10, 2026, [https://medium.com/@sadafsaleem5815/python-oop-fundamentals-understanding-the-basics-of-object-oriented-programming-c649552ac490](https://medium.com/@sadafsaleem5815/python-oop-fundamentals-understanding-the-basics-of-object-oriented-programming-c649552ac490)
13. ayyucedemirbas/Machine-Learning-Pathway \- GitHub, diakses Juli 10, 2026, [https://github.com/ayyucedemirbas/Machine-Learning-Pathway](https://github.com/ayyucedemirbas/Machine-Learning-Pathway)
14. NumPy Dot Product and Matrix Multiplication: Complete Guide \- Codecademy, diakses Juli 10, 2026, [https://www.codecademy.com/article/numpy-matrix-multiplication-a-beginners-guide](https://www.codecademy.com/article/numpy-matrix-multiplication-a-beginners-guide)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAZCAYAAACo79dmAAAB7klEQVR4Xu2XMUhWURiGD4YoZblZ6JZaUUNBLUWBRujgkjS0BSKtJS01BFFESUQE0lLNVhC5CFaTiAUiOgQuakvUliDi1lDvy3kPfX7dK+cPFX74H3iW7z3857vce79z/xBq1Nhy6mCfzGUf7PbFSmiG9+U7OAqn4DVZxu0QN/abH5DPYZvLyDN40hdzOAEX4CWZ2Au/yFumnjgLX7haI/wIx+Vv2LFhRYS/PQfrZRadcAVe9IEYkGtwt8vGQrzQIo7IsmbJYzgos6iqZj+HeNvKOC+56XHV0vO4nBYVkNPsOTgpN6VX8sf6XWa5LLnujKu9SYsKyGmWd2pdNrhsA3xL6S/Y5DLLE8lNW1S7Jx+mRQXkNEt+yMM+sHAs0SUfOL7KT6bGsUNvmpont1lOIXraB5aqavaDnPeBgacSN6M9pp4eoSFT89hmOXHK4KylfIlLeSA5tna5jPBIXIRPpeWRvOPqFtvsIZdZ0p075QNLq/wJrxdk0yG+WLwQfzE35IirW2yzm708q3K/D4o4CidCnLWv5VvYZdZ4OMIoL6iIV3BGstnZEL81PAfhN5lFVTX7P6SPj+/h3yO4Eq7AYbnt3IVXfbECJmG73Hb4Dfwe7pGVcCHEU3BHORb+Hr+5cCy+DPFfxo5SVc3WSPwBnGSGhAVsnUMAAAAASUVORK5CYII=>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAZCAYAAADNLudcAAAFRUlEQVR4Xu2ZZ4gkRRSAnzkHzOlkFc/wQz0VREXxjCioHGaF0xXFjDljQDlFBSNGPHXv9BADxlNUzHpGzD8MiGDAnLM/DO/jvXddU9u9O3s3O3ML9cH3Y6q7Z7q7Xr16VSNSKBQKhUKhi2zsrpkfGMNMyhsKc84q6kz3d/VL9RH1YfdN9UF1tbggYWX1dne+7Fg3uFB9Jm9sYFX1M3VXN+Uw9y71c/VM9Wi3l8yvXu7OUO9UD2g5o55F1VfUDdx1Ese5sJ56h5+Ls9RN/VhHITjwJ/XUmmPPqo9l7UAgruX2gtPUu/NGsYDPYTDwErdzg83VD9zF1I/VHcSeDemgXnG8epsLC6ofqhu5Tayv/tcg/Yh810Pqkn4NXK1+o66QtHUEbihuaovsGNwvltlSmBZpn9dYWH0rbxyCM8QyA6bs5kbn9oL31L3d4Dr1CrcJMvRNYtkO9xH7jpfU8S7996O6pV8DJApi4PCkrSOUACsBBqMWYP3uH+pCLUfs8/fqQNZ+jdg1vWARlxfFFAekfKQuo47Kodbkpa7hBmdLVUem8NxIJ1DTdJulxTqb6RqDKerLbhN7quvWtB2afF5d/UHdJWlbVuw3z0vaOsKN7pNJW3QYI4WMkM/LjK68PrlE/Vbse5DRNqC+rm7jBnTaVe5UsfOoOVJ4KQTyxS6LjclihSi+LVY3QoxW7vUv9VGxUYxwqfq3eoILB4nVNF+7XDPBjwUvqttmbd2AAKGzJ7oBnU+diO1C31HMDwe1Kb9J5u4o77h02IDL9IcnimWLFEb2PzXtMF0soHAJb+tXf3UptoHi/BQ3YBVH4Y7Aqo8gD0j1/cnn7aUKsGB/qc9g8Jy0BhiQweJZ65ihHpE31kBmGWjTdr6PIr4uwM5Rv3Pb5UoZvHKugwH8gtjqtWMsIxYsuFd2rIkV1T/zRoeslU85BMkv7klSjc4+NzhYLG0jD/mp+rhYTYAsq1eafbZlxJEEGFl1pAF2rdi2RbfhWesC7Fz1C3c46FvkHQ01zUe9STanlOgoJcBKgI1qgO0s1R7JuOxYE2y65h0bUDPlAQYfudRcu4v9HsGSBgzBEfdCELOifU2qAcAUu9Xss0W2lsH3kQbYAm7whIw8wC5TL8gbu0AU+fQPBhdJVYIMBwMWh6rX+tQ33Pg3Ji1L5prz1a/cdllcrMPZhM2pCzBumMIb6dwJYi+PUYrBkWKrNiQwYiedl40sBtKN1boMtp9UAUbwYNR9dRmMmmaoALtZWuvEJqbI4FqryaOkPd5XD3QDFi03uMMRize2J+ogq/FvzXgX2KqIGrgj8NLZ0cWRwHS3fN4oFmCvujESWB2yusS4ht893Q0oMskWyLUE/VLJ8Z3EpqygLsBY0v8s1ZYFxmKkKcAecOsg8PbNG7sE5US6R8dzkI02c4GB+JRUq+iUWe7TWXtwq9igPdY9TmwAtFsqDckksRUDmSgyGKu4dqE22jFvFAuw5122BngAHnBDN6A2IDvgPep9Yp1N7YW8OL5jQGwVhNPE9m8mukwT/0rrJimBRVDMFFutxYqNkfybVH8L7SH2UqnzImveqy7n5wefqGtnbd2CdxDPzjMyCCa3nGEreoIuX5HDLS59ksMGa5QjuZsk580xJcBKgOWB1dEAm1tOFqvfcupqsE4TxTuBCLzk4YhzqBuR6wnGujoSKHixqX4pjDJkoHdl8Ertehn9AOsGUQsekh8odI9jpNqjgrPEplr+u0T+3hmLsBfEtI3p4Cn0APaJsE8GTzntTF3zIqxUCbKObzoWRk4JsEKhUCiMcf4HOMKq/i91ujkAAAAASUVORK5CYII=>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAZCAYAAAC2JufVAAABlElEQVR4Xu2VTysFYRTGDwqhRChFLkqy9QWUhZsPYGPlz0JKVhYsbMhaWSnJnw1KbGwUZSkpH0HZWVlYKXGe5jnmzOu+Nxs1i/nVbzHnvj3nzHtn5hUpKPgf2uipuqeeq2O0Gi10Su1UW9UZuu7WgTDfekQ5ocu8RoMX2mWLKjBIv5zPdPhnVUKYbz0q5uPHT1py9Wu65GohA/RWXVWn1WZq2ABhPojm53KoSUm3Hs+EYX/pmauFlOh2tpwB+dbD54No/qykQzW6+jG9c7WQPoqd2pFk/T61LORbD58PovmLUnmoQ/rkaiEd1O+U3cwur5FvPcKhovlzkg7V5OpH9N7V/gLeMPihNkiSbz18Pojm53KosqRD4QNn4AGEl64WMk83XW2BIq9Xknzr4fNBNN9/EoZcHQ8gxKse44reuNoafVdrJftJ8Pmgar7tygqvu9VX2sNav/pAR1mzXcGxAurVRxoeM2G+9bD8X7RTnEcHktz9ODVG1Dc6wVoN3VAvJBl4i9ZxjRHmW48ouRyqoKCgQPkGQNiK1RUyMUAAAAAASUVORK5CYII=>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAYAAABozQZiAAAAvklEQVR4Xu3RIQvCUBTF8StqsmgyWIbdYrBrNVgNNrP6FYzihxCMgmC1GwSDWSzaTH4F9TzuGWwP3nxuYNoffmG7nLKJ5LkawNZ+6VMZrnCwDz5NRccX++BTqnGVNjCHZ+z6pSW1YQIvKFFiAazINII31CmxQDKM19AkU1903CJnHbjBPuIoOu6Rsx3UrHeB6HhIzlKNxzSzD6giOja32N18lLPofzTu0Ijcu3ASHT9oER4LUAwffi3TOO9ffQDNPCoxcwZ7RQAAAABJRU5ErkJggg==>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAaCAYAAABRqrc5AAAA2ElEQVR4Xu3RPwtBURjH8UMGUspC8RJMdi/AYJLVZrF6Cd6FZDApAxMZsMjCZmBiUBaropQ/v+P+bs497r2KO95vfZbn4enWEcLvWykYwYX2MKQFDSBt/sGpIJyoqs2ljTAOuZaBB2W1nawrjC90zZMjFThTSJlH6QBNZW5bC+ZkFoEeTSCm7Gxbw4oatIQ+hd8/de7vI3G4Q5HUzCNTbf5RXhivkiS1Gsl9QttZqsNWH7IOHSGg7Sx5ckQ+X1sfojJcqaTtXhVgRjfYwVghX0kez5Gf3089AdppQXMiEbA7AAAAAElFTkSuQmCC>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAZCAYAAABOxhwiAAABb0lEQVR4Xu2WPS8FQRSGh4jER6hpKRS+So1IaNAIv0IhGn8AhUohJBJRCILoJf6BRqPTS5QKiUrDe3hP9uyYnZ1bXHJjnuRJ7p7Z3TzZzU6uc5nM/2CYXsI7eA9n6G/iN2hHkA54S/s524ZvVG7WbKRBO2yDdgQbJuArneWsD37QLc6aiTRoh23QjmBDy4YPwBe6zFk7fKfHnIXQVzznLxhkTZR7ViEN2mEbtCPWUGLcFU981VsLsQOX/CFYgZu0UaRBO1IavjiFj7TbW6viAM6b4wW4a44bRRq0I6lBtp8nOERTkdcqr3SDHsK20hnpaIN2JNGS4YPwAY6YmXx8qUzDZzrlraViG7SjsqGT3sAxznronp5UwyS8cMV153C0dEY9foMQbTii8jGswXW4T+V3HfJkrmGXmcnvK1f8nUjBb9COYIO8Ut36Qi4Wp/5A9/Ez9/1kfHrhCY3t49IQ6wg2xC6ovIj8aXgmk8lk3CfufXF06WL6rgAAAABJRU5ErkJggg==>

[image7]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAAAZCAYAAACRpKR4AAAE1UlEQVR4Xu2ad4hdRRSHjyUaa5So2A0S1EgsIArWDSJiN9YYISKxgQXsBf3HsopgQ7GXrAkJkUQsWCAWoiEWgiBiFzGCiliwYUFEPT/nN+7sYe59b+aV+2Dng4/dPXN379t7z51y5ooUCoVCoVAodI2ZNtAwx9NB4UB1sg02yLTAcc9p6hk2qGyq3kQPMG2d8oq6QL1RfZg+HrQfS68JYk2wK703iK1P71CfVz9Ur6JrBMflcjW9UJ0aEQ/SBHHXC27lfq1x8NkWq+vZBnHX6z76mPqyesSYIzLBE/ysDSrL1CXqP/Sosc0d84H6m/qt+gCN9XCL1CEb7BPrqm/SjYP4XXRf/ryn+ie91B/UAfOov/ZWfw7fA7/In5tgd/UF+pK4z7fhmCMcT6i3ULCd+rM6hWaDnu9oGyT4IL1K4KdsoIK91eU2mMApNpDAHPVWGvI1HQ5iz9FPg1guT9PT1VnqieJGSPiaus7/RzrQAc0wsSZAjsQSeDfGD6GeVeoVNJuSwNWUBE6jrwm8Cf1e3HwqRi8T+EkbqOELyR9qMDXJ5XV1fxqCJILh315Ifw9iuWDeb+f+99OdTBycqY7YYANUJTA6EcQx5fLTLoCpzzM0GUyg4QrbENDLBMaHx3zoHhntvTCfirFUXG8EU3nQBtoE//sf6kTaivfpStvQBZAA59EY09XVNtgAVQl8MuP7Uc+r4nphmMzldMTEQ3qZwFjVT+L3x9GvxK1WLTcHpvKQDbTJPtJ+Uhyp/kVnjG3qGCwk35H6Bwmrftyj2Oo/ZA9x97tdUVpNKa9WJfAUcdfmUOrB/X6XJuMTAqWgKnIS+HpxNzSFbSjOc6ppAyhP+VJbKrkJfLj6tg1GQHXiI3UurWM2vcw21HCWuBGoFRgtsLJvkqoEBhhpb6cAOfKDuGoXTKYkcD0lgdPpawLfRuuG5TCBqyoVHqyM4Y/qo6YtZC+KuqAfEjejOE/s5l4krh4Mq8A8cSTix5EY3IVWcYy4+m8d2LTAYhSLKM/awfcWP9f/3DbUsFJcp9CKnyS+wOsnPoE3sg3icgP/B8T08Rxx1aUwqZPwK13sjFQRJjBuaDugsjHBBgOQjPAbdWvGcOFh1XmuldFdnFRye2DsPGKHrY7r1HNNrO58mM/C2A2OgWPRs1Yt3jxrqn+rW9oGQ+oc+ATaLj6Bw00fz5C6LQV4+FGKxGeCyaDXgHXDU5jA2NbtBjvT+UEMCQoxZMd6sLtldKs2lbqEqgPbot/ZIDmJvqWer16gXkLRw3YLXz+NbfOHbK7+qq5lG/qMT2C/OA/BjuuVFOChxLZzNn6P/zPbQOaJe1/BJzB6IyR7t+ZZeLKxmbGcX6F/Oi1vqAfTVHITGKCH2IGG/EL9tQmtm+aksoX6pXqQbTAcJq4k1QTIB7yPAd8Tdw1Qmn2EevCg+5ovNl7uFDfCZFMSuDUlgVvTWAJ7Vqvb2+AAgfniJ+KGx5whspMEHhH3ph4cZIbVs21wvIBFyA02OEBgfonFZi74/Vymi+vZmurdWoHFMsSbfRuYtnEDyht4p9VXBAYF/64GXmpptcPUS3yZB3XhQeNiGqudjytQfsGLIoMENljgjrahz/ipC96piL2v3BR4bwQj5yCPnn2jJHA1JYELhUKhUPiPfwH5dmijXobUHAAAAABJRU5ErkJggg==>

[image8]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAZCAYAAABOxhwiAAABp0lEQVR4Xu3WzSs1URwH8EPIW2yxsEFe8tazspEiQt6zkLKzsJCNfwCLZ/UsniglCyEkG0phIxtSNqzslVJSlIVs+H6737n3zLhjxubWzXzrU2d+59x7z8ycOXONiRLld6RStuECrqBNUply2IQtOJdO1wgrWXAkxaotwKvwhFKVU+hSe0reoDQ+wkoTvEi7akXwIfOqpSKPsKd2h3AOo/ERVtJ24rwNTzKsWia8y6pqycJlRvwBvzgT4HcGZQj+qD0hnHhdfERAGk3iinOdBeUvDHqLyAjMyU+SDWey7uoJCAffSr6nzy9L0G0d98A/6zhs+uEEbqTE3e0fboF3UCFhw6XAZTUry5DhGvGzTMoDVHn6kiYtJ14G11Bj1fjwhU0r3EuLpy9Mak3iIeY7hfic+a7zHDmEBtUK5L8zKCDNJvbGcz7HN2C9a4R/esXeDHKFtX3VvmRFeGbTMAOLwnZQeId2Ic+qsb1jEn8nvgtPkJ6hWrU+4cQHVHOFt9TZ+pLhlfCLs49vmNhV9qYQ1iTMPj4Gx3AAlzLuGmElbSceJUqUKFHMJ4R+biBqANa6AAAAAElFTkSuQmCC>

[image9]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAZCAYAAABOxhwiAAABp0lEQVR4Xu2VvStFYRzHH0LeYsVgQV7ylskiRYS8Z5CyGQyy+AcwmAyilAxCSBZKYZGFlIXJrpSSogyy8P11vo/73Oeec+65w1W3ez716Zzn9/w6/c7zqlRISHpQTnfhHryGXfQ/qYT78Abe0faoDItL2s32NPyipTopiWTRM1jM2CL9VM4PufJKj9juhD90TCclkSb6ATsYK6JSwwJjMaRs4cO0he1JFSm8Tie5oKdYftQL6RMz7Q4DWY7iGxxhTPLFb7jJmC/Z8Apu0yAswSE7CEbhPE2URiqDJ3vOlwF4AR9gCQ3KGuwx2r1w2Wgnih64R5hv9XkyBV9oldXnhUyrTOkcXYcZURnBkSPwiVZYfb6kTOG1VG8gOUv15gy6zoU2+Exbrb6glMF7WEMFOQBi6FORIvUmyDVix4zFo1k5t24BlVu4PiojPjnwFDYYMfnWitH+Qz7+TqsZ61eRwgcZ80NG5hDmGTF5P1DOred581lsKGeGZ+AsXeXTlXF6Dk/gLZygfuhzfEc5I2NTCLeo3zkuy0rUg2Urq8KVlC08JCQkJM35BYFLb+CiMZCoAAAAAElFTkSuQmCC>

[image10]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAZCAYAAADTyxWqAAAA10lEQVR4Xu3TMQsBYRzH8UcMSpRiVDdZTXabN8BkV16LxSoKmzJgtCnyArwGJSODIuL3d7/h8aTz3J1J963P8vzvnu6e65T612LmQpi+blaGJdzoCj3OWnSHE6wgTZ7NaA9xrhVoAXmuWVWjB1QhCRPKaddZ9dPN5GZxhCF0oUSBGyj3wBvmIEhN5b5q3Rz4yaER7GCqD/3mUOjNUjCmDLThAlmyTn6RPhRJki8o5ybnJ6xKQEd9PuwtrMkz+ffEQblPMH8fv17zzJnYQEW/QO+nm0VFGT0BEhM3Q32KEAwAAAAASUVORK5CYII=>

[image11]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAABEUlEQVR4Xu3TMUtCURjG8ZcCE0KwoTYXhyD8CNLQJxC/gUGQUyBC2CK66FRBi1FfILeGGmoQl5aisUlwjCSaJBoa7DmcR+/hJfMsZ+r+4QeX9+rrBc8ViQvQkh5koUcTGELTuX8BnzCma0jAKj2L/d4TZGhWiswH9t0bzPzoLem24FgPdd9wqGbmqUbwQLoTsQ/1Z8EWv0NLzarQhxealqMDZza3AXR4naYGnMIrTTujFWc2t0e44nWNNsQu/yJTHnbJq2CL7+EO1uGITBWxR9FIwiUsk1ddsQe9DmtkKkm0eA+KnHt3Dh9iT4JbQaLFv70kCwu2uA1vYl8Kt22JFu+oe16ZP6msh2gTbigu7t/0A9ZPSf0Ni91+AAAAAElFTkSuQmCC>

[image12]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAAZCAYAAADnnhbzAAADZUlEQVR4Xu2ZaahNURTHl+EZM5UhZU7KUFIoiSilfJEiRQmZRSFC0vOFJENS5lxJERmfQugJL3n5oiQpRcaQmczWv722c956l3vP4N5L61e/D3etc+87nbPeOnvtQ2QYhmEYRglQRweKQF3xv2QsW8X+YB+IC0P5PuJz9h17li0TC8kAtlL8yn5md4pgNvuNfSNeYptJLg7d2Avkrgu8y66S3A7xPfuWPcY2EJuy1+U71WJH97WCsFu8x35gT7LHxdPsDXbUr6MTUo9cYeACwDCNxQq2s8oVC5zjY3LnDQFuzhm2jZgGKDxfODNVDqCwTukg05Ndr4MF5gh7QgeZteQKvrWYmAy5H4RNQvHtYr9QrNigS+JmjhQbsYcopQuh+CIuCcXQVeBT9koo7tlA8bvdOB2ICZ4cy3WQmUDu2g0UE5MhK5xsWOHkYDQFbXmMxOaw08VSAoXymlyxQxR231A+TZ6Jq0OxRWIlezMUB73Z+SoWhS06EJEOIu7jCJUDe8kVlV+TJQY3A4tfuJ8dRG6RVarsIbcYhhNVLk3uiFvlc0u2XNzIPpK4ZzPbUMWikLRw0LHgd7aFyqEB4HwxaKTKYRFTyTly7Tgq/SnoBPnYjuIxg4IOmVZ7z8Y18YB8Xsq2FcvZjxIfLE6Rz3FJWjh4TMKX5DrxNgqGnlvkOmLqYHKAuBl/5Q+kRBcKWi48WiObm+7kCg/mAtsP0E9sy0K5BeSuFbq13xrwU15ckhbOVRHbBZqp7Cu2q04kxQqnNlY4eYAZH+KZXor4aQaPjebsOvET2yp0XC6wkYdNRJjrewfFanYl1Tx+MrnCmUZuoPBDRT5g6sI6LaPE40TH4FDxT6CAsTEKJ6kcwKYmzhdDT6pcFPfpRASirnHaU37gFcIusYfEMElBXIx8uoenjNyGYT47ulgjwBfkJqkwfhLNtgkYlyQdZwgF6z4UiWY8uVyuAowERjNsUcO5Klds6rObKJgYNNhGv6yDKbFGfEK1hwV/o4areBKSFA4eow/FML3E++T+WVNjBQXvVyDa5bwaRxQPrBuw0Ybz8u9cPP5RhWJHvoodJqYF1jFwlk6Q63wVOpiQOIXTiT1Pbv3ixVQMsd65LS6mlF+6WuH8Hisc458gTuEYRtbOZhiGYRiGYRhGKfETg5IQqtuQBkkAAAAASUVORK5CYII=>

[image13]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAbCAYAAABIpm7EAAAAi0lEQVR4XmNgGAVDFkgC8VQoPgHEPkDcAsXTgHg1EDNCMXkaGoFYAIqfAXEPTAIIuID4PxCLQzEYCAOxBhT/AGJOmAQQOALxCwY0G0jWAAJ5ULwPWRAIZgHxZCDmgWIOmMRGKK6A8mEmvgViMyDuhWKQJjC4CsVaMAEo2A3Ek4DYG4rhgGQNo2CIAQAd/iAn4vaTIgAAAABJRU5ErkJggg==>

[image14]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAZCAYAAABOxhwiAAAByElEQVR4Xu2XSyhFURSGt5SUCWLIwEgm8pgbmEghj4G5kglKoiQllEcpj8hACgOZMJDExFAGlJShx8CjZGak5F/tteucde7J2vdGnbpffXX71+3f+9xzzz3nGpMlS0a0yeAfaZeBlkHYIbJqeMSuwz1YFnqHDtdDHXE93XBIZL9SZ2xZkDz4YOyiJNECz/m1lmCPI67n0Ni9kCpo0w0io0//XmS58AtWshp8ehqN3TypInEbL2Vf5ADMw2sZgnfYw2rw6cmBH2xhII/QyR7LAdiGFzIEr3CM1eDbc8a2ijzEBLsiB2DfxC84y2rw7dlgR0QeYomdkgOwY1Iv+AYnWQ2+PXMBY0nsxtfYcTkw9hReydDYC6eP1eDb4w5mWeQhZtgFOTD2Z+xJZHQz+YY1rAbfHvctmBZ5iH52Sw5APnyEtSzRZaKnnbJLWMRKgj2OVD2OXbZXDoLUszdywNBiJ+wmPIDloXfYU/1p7ENS3IOS66GOuB7HHRs80AiJ3TjdeslnWCxmPjTDJjYT6C5+y6oYhcMy9IAupgI2E+gu6q47FbTgqUnvU6+CAzJMgxJjH67oF4dUUwEXZfiPrJronwsVid14lr/kB3Mwio4fp0kuAAAAAElFTkSuQmCC>

[image15]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAZCAYAAAC7FFXXAAAES0lEQVR4Xu2aa6gVVRTHl2WllpkmopkVgqJm6iff4cUgNIpIEEVULmQqPUxRCcEPtzAiUDDFZ6QXRbnUJcrQRPtgCkYhYhD4wBeSIKhQqKgh5fq71/buszpnzp7HOTNe9g9+XM7a53rHmf/M7L1miAKBQCAQCLRD3tSFAjBFF3LkZbaHLubIEHaw2G6Zzb6ti0x39jNxvBpLy0S2lf2d3S9iZ7sgmMtVrd5gm+AGp9ZF/IL9kT0hLmM7ON/Lggnsel1kHmW/E/uosTzpyZ7XxSTgjNuti8w+9hv2P/H10uHEPC8ilA+JLeKfbLe2r94DdRycPHiM/VV80qmvFcfK5xHiP+wS+6UUzBT3ssfYI6XD93lR/EkP5Mg69rouJuEr9g1dFJ6g7IP5nniBfVZqI0X8nVlSs4xiD6haHKbqQgywLatEl0viJ6q+hz2jamlZSZWDacFVu0EXcwAnyUkKwfQiBLN+ZBLMp8Sr7CNqzFKLYL4m/sUOkBp+Qvydj6TmcpF9QYxLufmZL7+w40SXw+JmVd/B3lS1tPgE8x22WRdzYDs7n1IGE0GDh/SAQy2CWY5pIv7OK2oMtLKNYlzcRUscurK32E6iD8cpen8mwSeYQymjBUdCJonvstMpZTCxgoTNqu5Sr2D+JmKyX47PHeOyURc8GUP+B9ue5HfItJWyxCeYnckcI/yMYjiZ4+0rWojV2ogPs1+LHSmDYNq502o94JAkmE1kzh5fMN88KmJqUQ6cQJgLw7gkDSbm3VgRVwNdhFNiY+nQ/7B3hkV6IAKfYAJc3fvpYh3ArXuyCEIwPQnBrC2ZB3ONGHV7jBNMNHwhFjVb1Fgl0AdEj/BpEeB2oMGB3ClWAjukuYxYJeoaHChWAs19bFsUaKZ/z84RQbntt2DVDs/qgQh8g/k3Rf9/agF6u9tULXUwm8SoK0qcYFpwBUHTvBp9yTztsYEEaFIvcD5bPiaznVHbWokkvwMayDzNiQLtonmqFnVSomEPq80FXXyCif39L9tbDyjizjHfEivxKpnuxF7HP8jMte3n2E8McQmGrXrAIUkwq2FXubgafcq+z34otpBpJWnQ8rGLtbgkDeYg9oouCuiNQgQG2/+BuJhMTzFLfILZi71BZiGSNwsp5RXzJfGcHhC2sj9TWzDRCkGI085jcPCg/Xe15W5HCDGercO4JA0mbtOXqe0Rqss1UW87jJpu+GLbL9+SaeTfJvPYGGLfaTC/O6iLObCJzNQJV+9d4uiSb3gQghlNCGZ8MgkmdjzEo8Hn1FiRQKP7NJnbVJJbVdJgAjzJwJtXsMjg7a+5uvigg7nRCl0sEJh7pnn1DU8jkjKMzJOcrJ/mZIXthOAq9bgae+DBKhGrp2f0QAHA+6A/ULxVbNbgnUto+3RFYqk4Qw+0F9BmwPygaKDP2l8X64ydQnxJxXqDHa013OmKfLdLTQhmZUIwA4FAIFAw7gKwyUNXNI9RqwAAAABJRU5ErkJggg==>

[image16]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAZCAYAAABOxhwiAAAB4ElEQVR4Xu2XSyhFURSGN0pigphhYCQpeQw8BgYmUshjYK5kgpIoSQnlUcojMpDCQFIMJDExUTIgUoYeA4+SmZHCv9rrdPdd7sne9+bWrfvVV1r/KX+7fc7eV6k4cSKiSQ6iSLMc2NILW8SsGO6zy3AL5gY9YU82nGOLREa0wz45/IsypUuZJMN7pcuTRAM84b9tSYRHcA9+sxVBTwSgZ6gLaQWVrhEzWv07MUuCn7CAdSFH/V28VunypBUxV5z2HfksAzANL+UQvMEO1gWb4gnwnU0XWRCt7IEMwDo8k0PwAodYF2yKE8dsowxMRtgFGYBt5V98knXBtvgKOyADE+/zNCYDsKFCF3+Fo6wLtsWnDH2J2eJL7LAMlN4KF3Ko9IvTxbpgFq8UmYm3KPMyMJlgZ2Sg9OfwUczoUPqCJawLZvEqkZl4u2BcBibd7JoMQAp8gKUs0aZ+bx+ancMM1g+zeLXITDbZThmYlLPXMmCo8CG7CndhXtATest8KH1J8rsoUZFTFSh+BXdgKmtyy3qLFZKYLU5HOPkEM0XmQj2sYyOBTvEb1opB2C+HDtDLlMZGAp3G3ntnBf1DunqGs+qFsEcOwyBL6csVfblIa/LhrBxGkUUV5o+UmC0e5z/5AQQmiJmHvlc5AAAAAElFTkSuQmCC>

[image17]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAZCAYAAAC7FFXXAAAEQklEQVR4Xu2ae6hPWRTHF+M13qNpQnnkD5kZhv9cr9wUUR5RIkW3xiDNNKOZ+WPKH0YT+UN55B0uIuEPb5I/DGWa8seM0TCa4aaUPEKIpGF922tn3+Xsc8/j9zh+7U990l37d9f9OWftc/Ze5xAFAoFAIBCoQabpQAGYoQNVZAzbQweryGfsp2LNMo/9UgeZj9iV4mg1lpfP2ePsJvagOKjZJ0xhLlWxSoMCgPielo7iWvYUe038iW3lfC4rUfmR283fjj0s9pJYEfiYbdLBLGDGndBB5gyZYnktTm4+nJm24g22TmIjxL9lzGU/O1bFKkV79nexqxNfL46Un4eJL9kf7IdyEJUfuXV+TG541olVmw3sUx3MwnZ2ig4Knan0hTlVvKMHmLvseBUbzp5TsTTM1IEUzGVXiy747nC5ip9k/1OxLETlR25fflxV63WwCmCS/EOhMBMRCrNylKQwu4sP6N3bp6UchblCvKoHyKyl9MkGt9n+Ylo26kAKfmNHiS4Xxa0qvpd9rmJZiMqP3L78X7GNOlgF9rCLKGdhotDgBT3gUI7C3CH+oQeYv9gtOsgcYhvEtLibljR0YV+wHcQkYLLFHc88ILcv/2Aq0YYjIxPFxexsylmYdpfXqOIu5SjMfWJUYf5JZrOjWeWYls06kBBsxpp00IOd5K/ItJVKjc3ty/8hmXOEf+MYSuZ8JxUtxJbaiB+wB8Q2VILCtGunNXrAIUthLiMze3zsFC/rATKxXTpIZgJhLQzTkrUwse6Omjyabux1saH50DvMEpfogRhs/gbRB67ufXSwAuDWPUkEoTATEgqzvJS8MNeJcbfHNIWJhi98RGYN6eMXEbs3DU4AmvkanEi7BPCBA9IYIf6OjsGBog8099G/jAPN7iPsfBHgdubD7qzRw02Cm9/iy/+Y4v8/5QC93d0qlrswl4lxV5Q0hWnBDG+tgw62XfRQD5Ap6qg1zc9kvmfcd/WR5XdAPZkuQRzoICxUsbhJiYY9bGktaEmaH8f7f7anHlCkXWNOF31MINM9OO14hcxa2P6c+okhLsEQO14fWQqzJeyVFVcNu5CvF/+VMQ1aPnazlpashTmIva+DAnqj8BL7NfuN+D2ZnmJeovIjty//J+wzMhuRavMd5bxiDhFv6gEB68Bf6W1holWBIi7VOgZ/GwcZ68ajou+FBNxSx4lpyVqYuI3eY/uJLk9Ee2xc45YbSUmbH+u78zpYBdDqw9IJV297TuuafSIBoTDjCYWZnpIUJg48vMX2VWNFAo1u3OJxm8pyq8pamABPMvDmFSwy2DAu0MH3HaxfsEsuKt9Svlff8DQiK1+QedIS9bSlCNj1Oq5SndTYew92idg99dYDBQDvgx6j5LvYcoB3IqHt0xWJH8U5eqBWQJsh6hl1tUGfdYAOVhi7hNhGxXqDHe9o2p5wzRIK008ozEAgEAgUjDcQq1d8Q1+iAwAAAABJRU5ErkJggg==>

[image18]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAZCAYAAABOxhwiAAAB5klEQVR4Xu2XSyhEcRTG/yiJDWKHhZWk5LHwWFjYSCGPhb2SDUqiJCWURymPyEIKC0mxkMTGRsmCSFl6LDxKdlYK3+me25x7ZiZ/czM1Nb/6LeY7d+797p37GmPixPFFkw6iSLMObOmFLToE2ewcLFIzW4rhPlxmt2CuZwlj2mGfyn6lzDgrkyTCI7jHfsMKzxJ2JMN745R3aYAn4rMLbYe6kFZQ6RodMjlspMXpV7xTWRL8hAWsS60JHCgrYq64e/4+64HAb/FpeKlD8AY7WJcE+M6mizyIVvZADwR+i6/DMx2CFzjESo7ZRpV7GGEX9EDgt/i2CV98kpWssAMq90C3OHJMDwR+i2+Y0MVf4SgrmRKGJWaLL7HDeiCQxSvVzAY6FS50aJwLsIuVuDszr3IPE+yMHghk8So1s4Fuh48qo4fSFyxhJe5ZMK5yD93smh4IZPFqNSPa4DnMYDUp8AGWioy+E+r0ITbZTj2QlLPXesDQCk5ZKn4Fd2AqS9BP/WGcl6RwL0pU+hCusrswz7NEgFtW7mgQMVucHr3kE8xUs79QD+tYP9BT/Ia1YhD26/AP0MWUxvqBnqLudWcFbZBeYSM56oWwR4cRkGWclyu645DW5MNZHUaRRRP858KKmC0e5z/5AeD3fcjUfT+7AAAAAElFTkSuQmCC>

[image19]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAAAZCAYAAACRpKR4AAAE6klEQVR4Xu2bZ4gkRRSAn+EMmBMm9A45z8ChggFE5UQ8MXvoDwMmUMQcUU9QUfQExYg5MoZTT05/nBFUMIAJIygm0BUV/aGgoBgQ9X3Wq7PmXffsVO/s9MDWBx/LvOrZ7Z5+XeHVrEihUCgUCoXCwJjnAy1zqDkq7KGu54Mtsk3ilOdY9QQX2019VF1kvqxu13XExNhLXax+oD5vbpu0H2JenMTagHPC231DwrrqF+agmaPe5oPKNPVxc2PX1hYzJeTMqr5BWUtdaN4r4d4f2HVEQ3iCn3ax1STcjBlJ7Fb1O3XlJNaE6eZj6vImF43fSLjQlIcl3MQ24FrfNNd0bSk3q7+Yg+Bo8zn1ffXt7ualxB74Bd8wROjUYgf0ovqPunrXEYGH1PkmrKF+LSHpsTE8DQe52FYSTuTCJHaWxbZPYk04zfxW3cxiu5j8/mMsFtlZfcnFcjjCBzLgXK4z6yCBPpXBJnDKtVKfwBE6oD19sAXoUasSeB31L3VrM/KIusBsTEngekoC5zHUBF7b/FHCfMpDkm2avL5G/U2WHeJz2d/8Sd3SYvxE/9BEmFrMMHO5ywcyeF3CWgDreFA9WdpN4BPVjg+2QF0Cz7X4hmbkFvUVM5uYSK/6BgdPD36lXuLaBsXhJhfJxXqY8B9v5nK3D/QJN+F3dRWzin3VUyX08m0m8Gx1zAdboC6BKRIQj51m5AYJoxdmc4HZcfGUMyT0QsiCgsXdZPCWyUJgOdcGVyfmco8P9AlTmjEfNFYwWYiuKO0nMKt+EqRq9Z/C9K+TIaXVnPJqXQKfZHGfwEzNvjeziQlxo2+ogeM+llAy6sUV6gE+2INT1HdNevoqLpIwV8dcmibwfhIqAFUwZUCOgX4T+EjzfN/Qg34SGBgt4pqiLeoS+DiLkztp/lwvYWTHbEoC96YkcD5DTWDejFXD8krqLBdjIcNJXObiEd6DLM7ud2117CqhxsoOV9zlYkj2nCOhHox1kESdCj+riKFfEXsOlnBuHurBD5iRfhP4GTPnhpHA7/hgBT/Lsvds2MQEpsabMtfibLikmy5s0LxhZsMOF97hGyQkNX9wxyS2k8WYePeCOc40H6yACgeF7/WTGEXxM5PXkcslnGfVuY5H0x54d/UTH1T2UV8zWRfghxLKRMjrOUuP7oaNEfQ3uBckMKNTL9gM+lvdyDc4cufAh5n9EhPYb/rQ6/LZcH8xsli9ycyG0gvySzxMurl56VAwX/1T3SGJNSGu6undrlJPl1BjRuqCVEY87AIyjcBcmiYwu0M/+GANZ0t/PXATSOD3fNCxgfqrhIVlm8QEriq1LpRQxYqVLDo6Fm+zzWziHv+XvkHCE32phN7kKZNy297pQQ05z+RCq6waBhli+O4E5tI0gYEPeLpZx50SykD0gPik9K4b9wPlOXxCwjn8IWGzAvnsPBzbqJY6AJh3x+9kfCThHpIr95kREnaRyRSTa5nQl7VKAo9PSeDxaS2BI2Pq5j44QjBf/Fz+r73mMpEE7kgowuMos0DCtG9Kwk7SlT44QrCZwmKzKby/KczNGm91DgEWy0h5c7I2mUYeSl/Pqpv4hpaJuzZLZPwdpsmEqgvGmu8oca55lG+YalB+YS43SrBxglv4hiETpy58p2KU/iODchQj5yiPnkOjJHA9JYELhUKhUPiPfwH/nGmvtAxXYwAAAABJRU5ErkJggg==>

[image20]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAZCAYAAABOxhwiAAABiUlEQVR4Xu2WvytFYRjHX5SBBbGxGGXC4MdgsMhALoO/QBaURElKGKSUHymTxWAwmAzMFhsp/wGbzczzdL9v9znf7jnec29OnTqf+izP9/Scb6dz7n2dKyioixkeZMgsD0JZFUs8FLrgidhPWRr8jrg9C+IaD/9iULyhWaP4IN7BH3E4ckUYdo/uSNqj12gXNQgtPc5D0A2TbhiC35G0Z8JVHlQQuSvu399PDgxZFm8Qv2AbZRHm4D0HhiyLK49wmgPLDjzjwJB18Uu4wYHF/zztcWDIuvihMZbcFr+A2xwYbPERytJgiyft2YWnHFgO4BEHBlt8lLI02OJJe/xbsM+BZRlecWCwxccoU+bFZ7EdxmGLV9vjuYaLHFiG4CsHQBc8Qb3hi3grtkBlSfx25UNS3EHJ7/HFq+3xvMMBmkfIbfEm+CF2UJaGKXES1oP+i7/BIDbFdR6mQD+mVlgPW67y3QWhN9SjZy1PvU9c4WENdLry4aoZBtMrHvMwQ87FHh6GkNviBf/JL3Hte9NEcD1WAAAAAElFTkSuQmCC>

[image21]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAZCAYAAAC7FFXXAAAE5ElEQVR4Xu2aZ4hdRRTHj71hiYhEQV3yQbOaVUHB2JeIomBBISiiUezdiIoRVFYRNajYsKOuSmIFSxIbfrCAsuAHGzYsUTCKBRUrIibnz/zHnXe89747827eXh7zgx9hz9zNK/fMzJlzVySTyWQymcwAcoQNtICjbGAK2Vfd3AankB3VYTqwzFNPNrG91UfVx+ir6kjHFb2xk7pUvVN9gs7suMIl5mUm1m+QABDvs4wt6HITT2VDeov6vPqReildg9esqz5Nt2JsKsD7uZw+ri5Wr1fXoslgxi0zsY3Uz9ShIHa7+rW6XhBLYR36uTqbsT3pBxwLweTY38T6BT7rBN3EjIXgu4G/2YFEbqN78edd1b/pRf4icZMbvhzE+s1x6pnUg8XkEprMfephJraDulI6/+PzGdsliKVwOP3WDijfqQea2B7qKyYWw1wbiOB49UZaBhLjY9pUYuK7gVcFsecoFgwLVtVRG+wTD6uHUA8WmadoMjkxy8mJ2Z3GE3Mz+qP8f/sEZ6lbBz8vVP+Q6i2tDtfQD+2AuFoqvBkelBBDNJY7bCCCN8XV2rAM3JgzaFOJ+Qa9J4gton8GMc+p6rgN9gmUMCvoAYxdp55AozmUvm4HDNPol+oCM5bC/fRtO6C8p95tg8qT6ok0lqpDSxUbq3+p69MiDhY3gY+hTSVmEZjIsOh+zZLmDl6xzJDJFf5fcecVLGLJ+FPeuImHnCdu1YDYLnAo6hWc2mBRYr4j7rBjwQf1xnKXDdQE29FyGyT+xIlT6Nqy+hMTC8g/FG0rywbiyiz8WwXKsPEI0UKs00a8ieLwiveBsmaIRuNrp5vtQAm4DjO2Wy9vTNxKUsYD9F07IC72oA2Km0CohWEsqYmJurto8gC/dfu6qm5iHk0vsAMVbKp+It13DKzu29hgH0Cb6EqK1tHZ4ko+X45EkxOzmpyY9Wg8MW+lRdsjmrfbmxgOAFimx0zcg9+BP4urIcu4mmK5t+AGXGuD4m6kLwHKQGKMF4jXsTGIz2c/Ywia+xM2KO7w9xD11E1Mf7JGD7cOuNHPqKcEMZQORfwi1Z9ndYDS4Rtx/d6wv72fuHoT4sFDFGO0aEVBsiIJdwtiuzOGWqIKzPA1bTDAt4t+sgPikrqopsFsxPsseq/dSPkdMCquS2A5SCZXgxfo+xQ1IH7e57+rO/E3sFst6EGH4nQTK5r0+L6RBNPtgCG2xjySluG7OkWsoFisovDbEU68ltPE3ZTwsLNA3JMHPIXoBb+yYtXwhfwo/ZRjFrR8/GEtltTEnKn+YIMlzKfdVsy6oPcK31LPUc9VL6Q4hFq2VH+XHh8BJvKSehL1YLdBqytsd9VmhH5hB8TNwCvEzf6l9DV1TnhRj+C18SWjbnyWDndcMQm2VLx2yuunJia20e/V7WgZaG/5BjtWLXyO2R1XxPMrxQ5lLSpnUOvi/kwF2KofoS/y3xvE7Qp1d4YOcmJWkxOzHo0nJr54+JW6rRlrE2h0Y4v3vcNYUhMT4KnOPNpmcGBE+TVQoH7BKbmt4Bl9L3/6hiczqews7klL0dOWNuDrdazWTTz8aBU4JWLLDp+LtwU8Cl0iiVtCQ+BvIiG2y7ZxMT3WDgwKaDOgVmob6LPOsME+40uIe6X7w4V+gu6I7wkPLDkxy8mJmclkMpmWsQqDF1tfnL8VqwAAAABJRU5ErkJggg==>