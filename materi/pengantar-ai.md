# Materi Pengantar AI - HerAI

Snapshot terbaru materi runtime `Pengantar AI` untuk course `AI Fundamentals & Advanced`.

## Sumber Runtime

- Materi utama: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/materi.html`
- Materi lanjutan: `js/frontend/fellow-dashboard/settings.js` bagian `generatedLessonContent`
- Latihan: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/latihan.html`
- Kuis: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/kuis.html`
- Diskusi: `pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/01-pengantar-ai/diskusi.html`

## Konteks Course

Course: AI Fundamentals & Advanced

Submodul aktif:

1. Pengantar AI
2. Pemrograman Python untuk AI
3. Konsep AI Modern
4. Reasoning (scaffold)
5. Evaluation (scaffold)
6. Evolution of AI (scaffold)

Flow belajar:

1. Materi
2. Latihan
3. Kuis
4. Diskusi

## Pengantar AI

Deskripsi halaman:

Membangun model mental tentang AI sebagai sistem prediktif yang perlu dipahami secara kritis dan bertanggung jawab.

Durasi materi utama: 60-75 menit.

Posisi: Modul 1 dari 6.

## Daftar Topik

Struktur runtime terbaru dipadatkan dari 10 topik kecil menjadi 5 chapter besar agar setiap sesi baca terasa lebih panjang dan mendalam.

1. AI di Sekitar Kita dan Fondasi Awal
2. Definisi, Software Biasa, dan Sistem AI
3. Cara Kerja AI: Data, Model, dan Human Check
4. Peta Istilah dan Penerapan AI
5. Risiko, Etika, dan Audit Sosio-Teknis

Catatan sinkronisasi:

- Route lama seperti `#/participant-ai-components`, `#/participant-ai-pipeline`, `#/participant-ai-applications`, `#/participant-ai-pros-cons`, dan `#/participant-ai-ethics` tetap ada di `js/router.js` agar link lama tidak rusak.
- Daftar materi utama yang tampil ke peserta sekarang hanya 5 chapter.
- Materi dari route kecil lama digabung ke chapter besar agar peserta membaca lebih padat dalam satu alur.
- Chapter 2 menggabungkan definisi modern AI, software biasa vs AI, analogi buku resep/pekerja magang, dan contoh harian.
- Chapter 3 menggabungkan model mental enam langkah, contoh spam, training, inferensi, human check, cara pandang sosio-teknis, studi kasus navigasi, chatbot pendidikan, kredit mikro, filter wajah, dan pola kesalahan umum. Penomoran runtime: 3.1 sampai 3.12.
- Chapter 4 menggabungkan peta istilah AI/ML/DL/ANI, penerapan harian, manfaat, batas awal AI, jembatan ke modul lanjutan, serta penerapan di pendidikan, kesehatan, keamanan siber, dan bisnis. Penomoran runtime: 4.1 sampai 4.12.
- Chapter 5 menggabungkan bias, halusinasi, privasi, black box, rubrik audit, studi kasus, template jawaban audit, rubrik skor risiko, contoh audit, dan kesimpulan modul. Penomoran runtime: 5.1 sampai 5.13.

## Topik 1: AI di Sekitar Kita

Tujuan:

Memahami AI secara akurat tanpa terjebak gambaran robot fiksi ilmiah.

Inti materi:

- AI sering hadir sebagai sistem prediktif, bukan robot sadar diri.
- AI adalah sistem berbasis mesin yang menggunakan input untuk menghasilkan output seperti prediksi, rekomendasi, konten, atau keputusan.
- AI membantu komputer menjalankan tugas yang biasanya membutuhkan kecerdasan manusia: mengenali pola, memprediksi kemungkinan, memahami bahasa, melihat gambar, dan membantu menyaring pilihan kompleks.
- Software biasa mengikuti aturan eksplisit. AI modern memanfaatkan data historis dan korelasi pola.
- Analogi utama: software biasa seperti buku resep, sedangkan AI seperti pekerja magang yang belajar dari banyak contoh.
- Modul ini sengaja tidak memulai dari kode, rumus, transformer, atau metrik evaluasi. Fokus awalnya adalah membangun cara berpikir ketika sistem otomatis memberi saran, label, prediksi, atau jawaban.

Kompetensi Topik 1:

1. Menjelaskan AI sebagai sistem berbasis input dan output, bukan makhluk yang punya pikiran manusia.
2. Membedakan software biasa yang mengikuti aturan kaku dari sistem AI yang belajar dari pola data.
3. Mengenali contoh AI di sekitar kita.
4. Membiasakan pemeriksaan manusia ketika output AI terdengar meyakinkan tetapi berpotensi salah.

Perbandingan software biasa dan AI:

- Software biasa berjalan dengan aturan eksplisit. Contoh: kalkulator, validasi simbol @ pada form email, dan tombol submit yang menjalankan instruksi tetap.
- Sistem AI mencari pola dari banyak contoh. Contoh: filter spam, rekomendasi musik, dan peta digital yang membaca pola lalu lintas.

Analogi buku resep dan pekerja magang:

Software biasa seperti buku resep: setiap langkah harus ditulis jelas dari awal. AI lebih seperti pekerja magang yang diberi ribuan contoh dokumen pekerjaan. Ia belajar dari contoh lama, melihat pola yang dianggap baik atau salah, lalu mencoba membantu pada kasus baru. Jika contoh lama bias atau keliru, sistem juga dapat mewarisi masalah tersebut.

Contoh AI sehari-hari:

- Rekomendasi musik
- Navigasi peta
- Filter spam
- Penerjemah teks
- Screening CV
- Chatbot layanan pelanggan

Kebiasaan berpikir kritis:

Saat melihat output AI, tanyakan apa tujuan sistemnya, data apa yang digunakan, pola apa yang mungkin dipelajari, siapa yang diuntungkan, dan bagaimana manusia bisa mengoreksi kesalahan.

Contoh membaca sistem:

- Rekomendasi musik tidak memahami suasana hati seperti manusia. Sistem membaca lagu yang sering diputar, lagu yang dilewati, waktu mendengarkan, dan kemiripan perilaku dengan pengguna lain.
- Peta digital tidak otomatis mempertimbangkan kenyamanan warga lokal. Sistem sering mengoptimalkan waktu tempuh, sehingga perlu ditanya dampak sosialnya.
- Chatbot dapat menjawab dengan kalimat rapi, tetapi tetap perlu diverifikasi ketika menyangkut fakta, hukum, kesehatan, keuangan, atau keselamatan.

## Topik 2: Definisi Modern AI

Tujuan:

Meluruskan definisi AI agar tidak terjebak pada gambaran robot sadar diri atau fiksi ilmiah.

Inti materi:

- AI bukan makhluk digital yang punya emosi, kesadaran, dan niat seperti manusia.
- AI modern lebih tepat dipahami sebagai sistem berbasis mesin yang menerima input, membaca pola, lalu menghasilkan output.
- Output AI dapat berupa prediksi, rekomendasi, konten, skor, label, atau keputusan.
- Kekuatan AI adalah membaca pola statistik dari data besar, bukan memahami makna dunia seperti manusia.
- Definisi yang menyesatkan perlu dihindari karena membuat peserta takut atau terlalu percaya pada mesin.

## Topik 3: Software Biasa vs Sistem AI

Tujuan:

Membedakan program deterministik dari sistem yang belajar dari data historis.

Inti materi:

- Software biasa menjalankan aturan eksplisit yang ditulis pemrogram.
- Sistem AI mencari pola dari banyak contoh dan memakai pola itu untuk prediksi kasus baru.
- Kalkulator dan validasi form email adalah contoh software biasa.
- Filter spam, rekomendasi musik, dan navigasi peta adalah contoh sistem yang menggunakan pola data.
- Analogi utama: buku resep untuk software biasa, pekerja magang untuk AI.

## Topik 4: Model Mental Cara Kerja AI

Tujuan:

Memahami alur kerja AI tanpa masuk ke kode, rumus, atau arsitektur teknis.

Model mental enam langkah:

1. Tujuan: apa yang ingin dibantu sistem.
2. Input: data yang masuk ke sistem.
3. Pola: keteraturan statistik yang ditemukan dari contoh masa lalu.
4. Model: pola yang dipadatkan menjadi sistem prediktif.
5. Output: prediksi, label, rekomendasi, konten, atau keputusan.
6. Pemeriksaan Manusia: manusia memeriksa apakah output masuk akal, aman, adil, dan perlu dikoreksi.

Model mental ini dapat digunakan untuk membaca email, rekomendasi video, chatbot, peta digital, sistem pinjaman, sampai alat rekrutmen. Tujuannya bukan menghafal istilah teknis, tetapi membiasakan diri melihat AI sebagai rangkaian keputusan yang bisa ditanya dan diaudit.

Contoh penyaring email spam:

- Tujuan: memprediksi apakah email baru adalah spam atau bukan spam.
- Input dan pola: sistem membaca contoh email lama, subjek, isi pesan, asal pengirim, waktu kirim, dan label dari pengguna.
- Model dan output: model memberi label pada email baru.
- Pemeriksaan manusia: pengguna perlu memulihkan email penting yang salah masuk spam dan memberi koreksi.

Detail konsep:

Sistem filter spam tidak memahami penipuan seperti manusia, tetapi dapat membaca korelasi dari subjek, isi pesan, tautan, waktu kirim, alamat domain, dan laporan pengguna lain. Karena itu, kesalahan tetap mungkin terjadi dan harus bisa dikoreksi.

Dua fase utama:

- Training: sistem belajar dari banyak contoh dan membentuk model.
- Inferensi: model yang sudah jadi memproses input baru dan menghasilkan output.

Training biasanya lebih berat, memakan waktu, dan membutuhkan komputasi besar karena sistem belajar dari data historis. Inferensi adalah fase penggunaan harian, ketika model yang sudah jadi menerima input baru dan memberi output cepat seperti label spam, terjemahan, rute, atau rekomendasi.

Cara pandang sosio-teknis:

Kualitas AI tidak hanya ditentukan oleh kode. Sistem dipengaruhi oleh siapa yang membiayai, data siapa yang dominan, kelompok mana yang terwakili, dan siapa yang menanggung dampak ketika sistem salah.

Contoh: sistem rekrutmen yang dilatih dari arsip karyawan sukses selama sepuluh tahun dapat tampak objektif, padahal data lama mungkin mencerminkan budaya kerja yang tidak adil. Jika masa lalu lebih sering memberi kesempatan kepada kelompok tertentu, model dapat belajar bahwa kelompok itulah pola kandidat ideal.

Checklist audit singkat:

1. Apa tujuan bisnis atau tujuan sosial dari sistem ini?
2. Input apa yang terlihat dan input apa yang mungkin tersembunyi?
3. Pola apa yang mungkin dipelajari dari data masa lalu?
4. Output apa yang memengaruhi pengguna?
5. Siapa yang memeriksa dan bertanggung jawab jika output keliru?

## Topik 5: Training, Inferensi, dan Human Check

Tujuan:

Memahami dua fase utama sistem AI dan kenapa pemeriksaan manusia harus menjadi bagian dari alur.

Inti materi:

- Training adalah fase ketika sistem belajar dari banyak contoh.
- Inferensi adalah fase ketika model yang sudah jadi memproses input baru.
- Human check adalah tahap keselamatan untuk memeriksa output yang salah, bias, atau berisiko.
- Koreksi manusia dapat berupa feedback, banding, audit, atau validasi sumber.
- Training dan inferensi terjadi dalam konteks sosial: data dikumpulkan manusia, label dibuat manusia, dan dampaknya dialami masyarakat.

## Topik 6: Peta Istilah AI, ML, DL, dan ANI

Tujuan:

Membedakan AI, Machine Learning, Deep Learning, dan mengenali AI dalam pengalaman harian.

Hubungan istilah:

- Artificial Intelligence: payung besar sistem yang menjalankan tugas yang biasanya membutuhkan kecerdasan manusia.
- Machine Learning: bagian dari AI yang menemukan pola dari data tanpa aturan langkah demi langkah yang ditulis manual.
- Deep Learning: bagian dari Machine Learning yang memakai jaringan berlapis untuk mengenali pola kompleks pada gambar, suara, teks, dan data tak terstruktur.

Pemisahan istilah ini penting karena media sering memakai AI, ML, dan DL secara bergantian. Tidak semua AI adalah Deep Learning, dan tidak semua sistem otomatis adalah Machine Learning. Pemahaman payung konsep ini membantu peserta masuk ke modul Python, Matematika, Machine Learning, NLP, dan Computer Vision tanpa tertukar.

Fokus praktis:

Teknologi yang digunakan hari ini adalah Artificial Narrow Intelligence (ANI), yaitu sistem spesialis yang mahir pada tugas sempit. AGI dan ASI cukup dikenali sebagai konsep spekulatif dan bukan fokus modul dasar.

AGI biasanya dibayangkan sebagai mesin yang fleksibel seperti manusia di semua bidang. ASI lebih spekulatif lagi, yaitu skenario ketika kemampuan mesin melampaui manusia secara luas. Modul dasar menaruh diskusi ini di pinggir agar fokus belajar tetap pada sistem nyata yang sudah memengaruhi hidup peserta.

Penerapan:

- Media dan hiburan: rekomendasi video atau playlist personal.
- Mobilitas kota: prediksi ETA dan rute alternatif.
- Komunikasi bahasa: prediksi terjemahan yang paling alami.
- Produktivitas kerja: chatbot, ringkasan, dan shortlist kandidat.

Penerapan dengan alur tujuan ke output:

- Layanan streaming: tujuan membuat pengguna bertahan lebih lama; input riwayat tontonan, durasi, klik, dan konten yang dilewati; output daftar rekomendasi personal.
- Navigasi lalu lintas: tujuan mencari rute efisien; input lokasi perangkat, kecepatan kendaraan, laporan kecelakaan, dan pola historis; output ETA dan rute alternatif.
- Screening resume: tujuan mempercepat seleksi; input CV, riwayat kandidat sukses, kata kunci, institusi, dan pengalaman; output skor atau shortlist. Risiko muncul jika data lama sudah bias.

## Topik 7: Penerapan AI dalam Kehidupan

Tujuan:

Membedah penerapan AI sehari-hari menggunakan alur tujuan, input, pola, dan output.

Contoh penerapan:

- Media dan hiburan: rekomendasi video, lagu, playlist, dan feed personal.
- Mobilitas kota: ETA, rute alternatif, laporan kecelakaan, dan pola kemacetan.
- Komunikasi bahasa: terjemahan teks, transkripsi suara, dan penyusunan kalimat alami.
- Ruang kerja: chatbot, ringkasan dokumen, draft email, FAQ, dan screening CV.

Pertanyaan analitis:

1. Apa tujuan aplikasi dari sisi pengguna dan perusahaan?
2. Data apa yang terlihat dikumpulkan?
3. Data apa yang mungkin tersembunyi?
4. Output apa yang memengaruhi keputusan pengguna?
5. Apa risiko jika output salah atau manipulatif?

## Topik 8: Manfaat dan Keterbatasan AI

Tujuan:

Mengapresiasi manfaat AI tanpa kehilangan sikap kritis terhadap batas dan risikonya.

Manfaat:

- Menyaring informasi dari dokumen, email, tiket layanan, atau konten.
- Menghemat waktu melalui draft, ringkasan, klasifikasi awal, atau rekomendasi.
- Mengenali pola tersembunyi seperti transaksi mencurigakan atau pola lalu lintas.
- Membantu akses melalui penerjemah, transkripsi, caption, dan asisten belajar.

Keterbatasan:

- Bergantung pada kualitas data.
- Tidak memahami konteks penuh seperti manusia.
- Dapat terdengar meyakinkan saat salah.
- Tujuan sistem bisa terlalu sempit.
- Model kompleks bisa sulit dijelaskan.

## Topik 9: Bias, Halusinasi, Privasi, dan Black Box

Tujuan:

Membiasakan skeptisisme sehat saat membaca output mesin.

Risiko utama:

Literasi AI tidak cukup dengan menilai sistem dari kecepatan atau kecanggihannya. Sistem yang cepat tetapi bias, tidak transparan, melanggar privasi, atau tidak bisa dikoreksi tetap berbahaya.

1. Ilusi objektivitas dan bias:
   AI belajar dari data historis. Jika data masa lalu memuat diskriminasi gender, kelas, ras, wilayah, atau akses pendidikan, model dapat mengulang pola tidak adil itu.

2. Halusinasi algoritmik:
   Model bahasa dapat menghasilkan jawaban yang terdengar rapi tetapi faktanya salah. Verifikasi independen wajib dilakukan untuk konteks hukum, medis, akademik, atau keputusan penting.

3. Privasi dan data personal:
   Sistem prediktif sering membutuhkan lokasi, perilaku klik, pembelian, wajah, suara, atau interaksi. Pengumpulan tanpa persetujuan yang jelas mengancam martabat dan keamanan pengguna.

4. Black box dan hak bertanya:
   Jika sistem menolak pinjaman, memblokir akun, atau menyaring CV tanpa alasan yang bisa dipahami, pengguna kehilangan kesempatan untuk mengoreksi dan mengajukan keberatan.

Studi kasus risiko:

- Rekrutmen dan bias masa lalu: alat rekrutmen yang dilatih dari data perusahaan yang dulu lebih sering menerima laki-laki dari kampus tertentu dapat menurunkan skor kandidat lain, walaupun kompetensinya kuat.
- Halusinasi hukum: model bahasa dapat menyusun argumen hukum yang rapi sekaligus menciptakan nomor kasus palsu. Untuk urusan hukum, setiap rujukan harus dicek ke sumber resmi.
- Optimasi navigasi: jika sistem hanya mengurangi waktu tempuh pengendara, rute bisa dialihkan ke jalan pemukiman kecil dan menimbulkan risiko bagi warga lokal.

Ringkasan kompetensi:

- AI adalah sistem berbasis mesin yang menyimpulkan dari input.
- Software biasa mengikuti aturan eksplisit; AI memanfaatkan pola data.
- AI mencakup ML, dan ML mencakup DL.
- AI saat ini adalah ANI, bukan kecerdasan umum sadar diri.
- Human check adalah kebiasaan wajib untuk melawan bias, halusinasi, keputusan buram, dan risiko privasi.

Pertanyaan penutup untuk setiap output AI:

1. Apakah output ini fakta, prediksi, rekomendasi, atau opini sintetis?
2. Apakah ada sumber independen yang bisa dipakai untuk memverifikasi?
3. Apakah data yang dipakai mungkin tidak mewakili kelompok tertentu?
4. Apakah pengguna punya hak untuk menolak, mengoreksi, atau meminta penjelasan?
5. Apakah keputusan akhir seharusnya tetap dipegang manusia?

## Topik 10: Audit Sistem Sosio-Teknis

Tujuan:

Mengubah peserta dari pengguna pasif menjadi auditor kritis sistem AI harian.

Kerangka audit:

1. Pilih satu layanan otomatis yang digunakan dalam 24 jam terakhir.
2. Jelaskan tujuan sistem dari sisi pengguna dan perusahaan.
3. Identifikasi input yang terlihat dan input yang mungkin tersembunyi.
4. Tebak pola perilaku apa yang dipelajari sistem.
5. Jelaskan output yang muncul di layar.
6. Tentukan bagaimana manusia bisa mengoreksi ketika sistem salah.
7. Identifikasi risiko privasi dan bias.
8. Jelaskan siapa yang berisiko dirugikan jika sistem salah.

## Latihan

Proyek mini: Audit Sistem Sosio-Teknis Harian.

Peserta memilih satu layanan otomatis yang digunakan dalam 24 jam terakhir, lalu menjawab:

1. Sistem yang dipilih dan kapan terakhir digunakan.
2. Tujuan, input, pola, dan output sistem.
3. Cara pemeriksaan manusia dapat diterapkan.
4. Risiko privasi dan bias yang mungkin muncul.

## Kuis

Kuis terdiri dari 10 soal pilihan ganda single attempt. Fokus soal:

1. Definisi AI modern.
2. Analogi pekerja magang.
3. Pemeriksaan manusia.
4. Hubungan AI, ML, dan DL.
5. Perbedaan software biasa dan AI.
6. Halusinasi algoritmik.
7. Bias dari data historis.
8. Training vs inferensi.
9. Pertanyaan etis utama sebelum adopsi AI.
10. Posisi AGI/ASI sebagai spekulasi dan fokus pada ANI.

## Diskusi

Prompt diskusi diarahkan ke tiga skenario:

1. Algoritma rekrutmen yang bias terhadap perempuan.
2. Chatbot hukum yang mengarang preseden.
3. Navigasi yang mengalihkan kemacetan ke jalan pemukiman.

Peserta diminta membedah kasus dengan alur tujuan, input, pola, output, dan pemeriksaan manusia.

## Catatan Implementasi

- Route tidak berubah.
- Layout, sidebar, topbar, breadcrumb, tabs, right panel, dan footer nav dipertahankan.
- Materi final dari `materi/baru/pengantar-ai-baru.md` diringkas menjadi bahasa pembelajaran runtime agar tidak terlalu panjang dan tidak menabrak modul lanjutan seperti Python, AI Modern, Math for AI, Machine Learning, NLP, dan Computer Vision.
