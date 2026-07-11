(function () {
    const STORAGE = {
        chapter: "heraiAiReasoningCurrentChapter",
        practice: "heraiAiReasoningPractice",
        quizDone: "heraiAiReasoningQuizDone",
        quizScore: "heraiAiReasoningQuizScore",
        quizAnswers: "heraiAiReasoningQuizAnswers",
        discussion: "heraiAiReasoningDiscussion"
    };

    const SOURCE_BASE = "/pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/chapters/";

        const CHAPTERS = [
    {
        "title": "Dari Menjawab ke Menalar",
        "shortTitle": "Dari Menjawab ke Menalar",
        "duration": "20 menit",
        "icon": "fas fa-brain",
        "summary": "Reasoning AI menghubungkan fakta dan asumsi secara runtut.",
        "objectives": [
            "Menjelaskan reasoning dalam konteks sistem AI",
            "Memisahkan fakta, asumsi, batasan, dan kesimpulan"
        ],
        "concepts": [
            [
                "Reasoning",
                "Proses menghubungkan informasi untuk menghasilkan kesimpulan"
            ]
        ],
        "flow": [
            [
                "Memahami",
                "Tujuan dan batasan"
            ],
            [
                "Fakta",
                "Data relevan"
            ],
            [
                "Hubungan",
                "Kaitan antar info"
            ],
            [
                "Kesimpulan",
                "Hasil penalaran"
            ]
        ],
        "analogy": "Seperti menjawab soal cerita, kita tidak bisa langsung menebak. Harus dicari data apa yang diketahui dan langkah perhitungannya.",
        "llmExample": "AI menghitung anggaran: harus memisahkan harga, jumlah peserta, dan biaya lain secara runtut.",
        "prompt": [
            "Pisahkan fakta dan asumsi.",
            "Tentukan informasi yang hilang.",
            "Lakukan langkah secara runtut."
        ],
        "quickCheck": {
            "question": "AI berkata anggaran pasti cukup. Apa yang salah?",
            "options": [
                "Menebak tanpa fakta",
                "Menggunakan asumsi",
                "Semua benar"
            ],
            "answer": 0,
            "explanation": "AI terlalu percaya diri tanpa bukti yang cukup."
        },
        "challenge": "Cari contoh LLM salah menjawab soal matematika",
        "mistakes": [
            "Membuat asumsi tersembunyi",
            "Salah memahami tujuan",
            "Terlalu percaya diri"
        ],
        "sourcePath": "/pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/chapters/01-full.html"
    },
    {
        "title": "Reasoning yang Dapat Diperiksa",
        "shortTitle": "Reasoning Dapat Diperiksa",
        "duration": "25 menit",
        "icon": "fas fa-check-double",
        "summary": "Penjelasan meyakinkan bukan jaminan valid. Wajib diperiksa.",
        "objectives": [
            "Mengidentifikasi kesalahan umum",
            "Memeriksa hasil penalaran AI"
        ],
        "concepts": [
            [
                "Validasi",
                "Pemeriksaan konsistensi langkah"
            ]
        ],
        "flow": [
            [
                "Cek Data",
                "Data relevan"
            ],
            [
                "Cek Urutan",
                "Langkah masuk akal"
            ],
            [
                "Cek Hasil",
                "Angka dan satuan benar"
            ]
        ],
        "analogy": "Seperti guru matematika memeriksa langkah ujian siswa, bukan cuma jawaban akhirnya.",
        "llmExample": "AI salah mengalikan harga dengan 0 atau melupakan biaya sewa dalam laporan.",
        "prompt": [
            "Periksa apakah perhitungan AI masuk akal",
            "Cari informasi tersembunyi"
        ],
        "quickCheck": {
            "question": "Jawaban yang runtut pasti benar?",
            "options": [
                "Ya, karena strukturnya rapi",
                "Belum tentu, karena premis bisa salah",
                "Tidak tahu"
            ],
            "answer": 1,
            "explanation": "Kelancaran tidak sama dengan kebenaran."
        },
        "challenge": "Beri skor untuk jawaban AI yang salah perhitungan.",
        "mistakes": [
            "Percaya penjelasan meyakinkan",
            "Malas memvalidasi output"
        ],
        "sourcePath": "/pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/chapters/02-full.html"
    },
    {
        "title": "Planning & Problem Decomposition",
        "shortTitle": "Planning",
        "duration": "30 menit",
        "icon": "fas fa-layer-group",
        "summary": "Rencana memecah tugas besar jadi langkah eksekusi dengan dependensi yang benar.",
        "objectives": [
            "Memecah tugas besar",
            "Menyusun rencana statis dan dinamis"
        ],
        "concepts": [
            [
                "Problem Decomposition",
                "Memecah tugas besar"
            ],
            [
                "Dynamic Planning",
                "Rencana yang bisa diupdate"
            ]
        ],
        "flow": [
            [
                "Goal",
                "Tujuan akhir"
            ],
            [
                "Constraints",
                "Batasan"
            ],
            [
                "Subtasks",
                "Pecahan tugas"
            ],
            [
                "Dependencies",
                "Urutan"
            ],
            [
                "Success",
                "Kriteria"
            ]
        ],
        "analogy": "Mengadakan acara butuh urutan: sewa gedung dulu, baru sebar undangan.",
        "llmExample": "AI diminta buat aplikasi. AI memecah jadi: DB schema, Backend, Frontend, Testing.",
        "prompt": [
            "Bantu pecah tugas ini",
            "Apa urutannya?",
            "Buat rencana cadangan"
        ],
        "quickCheck": {
            "question": "Apa itu constraint?",
            "options": [
                "Aturan/Batasan yang harus dipatuhi",
                "Hasil akhir",
                "Asumsi"
            ],
            "answer": 0,
            "explanation": "Constraint membatasi solusi."
        },
        "challenge": "Buat rencana cadangan kalau internet mati saat presentasi",
        "mistakes": [
            "Goal terlalu kabur",
            "Dependensi terlewat",
            "Rencana terlalu kaku"
        ],
        "sourcePath": "/pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/chapters/03-full.html"
    },
    {
        "title": "Structured Reasoning & Chain-of-Thought",
        "shortTitle": "Chain-of-Thought",
        "duration": "30 menit",
        "icon": "fas fa-list-ol",
        "summary": "CoT membuat jawaban lebih bisa diaudit walau tidak sempurna.",
        "objectives": [
            "Menjelaskan fungsi CoT",
            "Mengenali kelemahan CoT (faithfulness)"
        ],
        "concepts": [
            [
                "Chain-of-Thought",
                "Langkah perantara berbentuk bahasa"
            ]
        ],
        "flow": [
            [
                "Pertanyaan",
                "Input"
            ],
            [
                "Langkah",
                "Reasoning perantara"
            ],
            [
                "Pemeriksaan",
                "Validasi"
            ],
            [
                "Jawaban",
                "Hasil akhir"
            ]
        ],
        "analogy": "Berpikir keras-keras (think aloud) saat menyelesaikan puzzle.",
        "llmExample": "AI menuliskan hitungannya satu per satu sebelum memberikan total biaya.",
        "prompt": [
            "Berpikir langkah demi langkah",
            "Jelaskan alasanmu"
        ],
        "quickCheck": {
            "question": "CoT pasti menjamin kebenaran?",
            "options": [
                "Pasti",
                "Tidak menjamin",
                "Hanya untuk kode"
            ],
            "answer": 1,
            "explanation": "CoT tetap bisa halusinasi langkah."
        },
        "challenge": "Suruh AI berpikir langkah demi langkah untuk menyusun koper",
        "mistakes": [
            "CoT dipaksakan untuk tugas sederhana",
            "Percaya 100% pada alasan model"
        ],
        "sourcePath": "/pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/chapters/04-full.html"
    },
    {
        "title": "Tool Use yang Bertanggung Jawab",
        "shortTitle": "Tool Use",
        "duration": "30 menit",
        "icon": "fas fa-toolbox",
        "summary": "Alat menutupi kelemahan AI asal parameternosional dan diobservasi dengan baik.",
        "objectives": [
            "Menentukan kapan tool diperlukan",
            "Memilih tool yang sesuai",
            "Menilai hasil tool"
        ],
        "concepts": [
            [
                "Tool Use",
                "AI memakai kalkulator, API, web"
            ],
            [
                "Observation",
                "Hasil yang dikembalikan tool"
            ]
        ],
        "flow": [
            [
                "Plan",
                "Pilih tool"
            ],
            [
                "Act",
                "Panggil tool"
            ],
            [
                "Observe",
                "Baca hasil"
            ],
            [
                "Update",
                "Update state"
            ]
        ],
        "analogy": "Seperti mempekerjakan asisten yang bisa browsing web untuk mencari harga tiket.",
        "llmExample": "AI panggil API Cuaca, bukan mengarang suhu hari ini.",
        "prompt": [
            "Gunakan tool kalkulator",
            "Cari informasi terbaru di web"
        ],
        "quickCheck": {
            "question": "Jika data tak ditemukan oleh tool, AI harus:",
            "options": [
                "Mengarang",
                "Bilang error/data tidak ada",
                "Berhenti"
            ],
            "answer": 1,
            "explanation": "AI harus transparan tentang kegagalan tool."
        },
        "challenge": "Pilih tool untuk menghitung jarak dua kota.",
        "mistakes": [
            "Terlalu banyak pakai tool",
            "Mengabaikan error dari tool"
        ],
        "sourcePath": "/pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/chapters/05-full.html"
    },
    {
        "title": "Integrated Reasoning Mission",
        "shortTitle": "Integrated Mission",
        "duration": "35 menit",
        "icon": "fas fa-flag-checkered",
        "summary": "Reasoning, planning, dan tool use bersatu dalam loop iteratif untuk menyelesaikan misi kompleks.",
        "objectives": [
            "Mengevaluasi apakah jawaban AI cukup layak dipercaya",
            "Menjalankan siklus penuh"
        ],
        "concepts": [
            [
                "Siklus Terpadu",
                "Iterasi dari pemahaman sampai validasi"
            ]
        ],
        "flow": [
            [
                "Reason",
                "Pemahaman"
            ],
            [
                "Plan",
                "Rencana & Tool"
            ],
            [
                "Act",
                "Eksekusi"
            ],
            [
                "Observe",
                "Lihat Hasil"
            ],
            [
                "Update",
                "Sesuaikan"
            ],
            [
                "Answer",
                "Berikan Jawaban"
            ]
        ],
        "analogy": "Menjalankan misi rahasia: pahami target, rencanakan rute, jalankan, hindari rintangan, lapor sukses.",
        "llmExample": "AI mengekstrak data dari sheet, panggil fungsi matematika, lalu buat tabel rangkuman akhir.",
        "prompt": [
            "Kerjakan ini secara end-to-end",
            "Jalankan, observasi, dan laporkan hasilnya"
        ],
        "quickCheck": {
            "question": "Apakah alur Reason-Plan-Act linear?",
            "options": [
                "Ya, selalu maju",
                "Tidak, bisa looping (update/replanning)",
                "Tidak tahu"
            ],
            "answer": 1,
            "explanation": "AI harus fleksibel merespon hasil yang tidak diharapkan."
        },
        "challenge": "Lakukan audit end-to-end pada rencana bisnis singkat.",
        "mistakes": [
            "Mengklaim berhasil tanpa konfirmasi",
            "Tidak ada rencana cadangan"
        ],
        "sourcePath": "/pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/04-reasoning/chapters/06-full.html"
    }
];

    const PRACTICES = [
    {
        "id": "latihan-1",
        "title": "Latihan 1 — Fakta atau Asumsi?",
        "focus": "Latihan 1",
        "prompt": "Kasus:  > Sebuah kelas memiliki 40 peserta. Biaya modul Rp20.000 per orang. Panitia menyiapkan anggaran Rp1.000.000. AI menghitung seluruh peserta memperoleh satu modul.  Klasifikasikan pernyataan berikut:  1. Peserta berjumlah 40 orang. 2. Biaya modul Rp20.000 per orang. 3. Semua peserta memperoleh satu modul. 4. Total biaya modul Rp800.000. 5. Anggaran cukup.",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": "| Pernyataan | Kategori | |---|---| | Peserta berjumlah 40 orang | Fakta | | Biaya modul Rp20.000 per orang | Fakta | | Semua peserta memperoleh satu modul | Asumsi | | Total biaya modul Rp800.000 | Hasil langkah | | Anggaran cukup | Kesimpulan |"
    },
    {
        "id": "latihan-2",
        "title": "Latihan 2 — Urutkan Langkah",
        "focus": "Latihan 2",
        "prompt": "Urutkan langkah berikut:  - bandingkan total kebutuhan dengan anggaran; - hitung sisa anggaran; - identifikasi jumlah peserta; - hitung total konsumsi; - identifikasi harga per peserta.",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": "```text 1. Identifikasi jumlah peserta. 2. Identifikasi harga per peserta. 3. Hitung total konsumsi. 4. Bandingkan total kebutuhan dengan anggaran. 5. Hitung sisa anggaran. ```"
    },
    {
        "id": "latihan-3",
        "title": "Latihan 3 — Temukan Kesalahan",
        "focus": "Latihan 3",
        "prompt": "Jawaban AI:  > “Untuk 50 peserta dengan harga Rp25.000 per orang dan biaya sewa Rp400.000, total kebutuhannya adalah Rp1.250.000. Anggaran Rp1.500.000 berarti tersisa Rp250.000.”",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": "AI melupakan biaya sewa.  ```text Konsumsi: 50 × Rp25.000 = Rp1.250.000  Total: Rp1.250.000 + Rp400.000 = Rp1.650.000  Kekurangan: Rp1.650.000 − Rp1.500.000 = Rp150.000 ```"
    },
    {
        "id": "latihan-4",
        "title": "Latihan 4 — Prioritas Nonnumerik",
        "focus": "Latihan 4",
        "prompt": "Urutkan pekerjaan berikut:  - memperbaiki tombol pembayaran yang gagal; - mengubah warna kartu; - menambah ilustrasi kosong.",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": "Tombol pembayaran harus diprioritaskan karena memengaruhi fungsi dan transaksi utama. Perubahan visual dapat dikerjakan setelah fungsi kritis stabil.  ---"
    },
    {
        "id": "latihan-5",
        "title": "Latihan 5 — Pecah Tujuan",
        "focus": "Latihan 5",
        "prompt": "Tugas:  > Buat program mentoring AI selama empat minggu untuk peserta pemula.  Buat 6–10 subtugas.",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": "1. Mengidentifikasi kemampuan awal peserta. 2. Menentukan tujuan empat minggu. 3. Membagi materi per minggu. 4. Menentukan mentor. 5. Menyiapkan contoh dan latihan. 6. Menentukan jadwal. 7. Menyiapkan kanal diskusi. 8. Membuat evaluasi mingguan. 9. Membuat proyek akhir. 10. Mengumpulkan feedback."
    },
    {
        "id": "latihan-6",
        "title": "Latihan 6 — Temukan Dependensi",
        "focus": "Latihan 6",
        "prompt": "Urutkan:  - melakukan evaluasi akhir; - menetapkan tujuan belajar; - membuat latihan; - memilih materi; - menjalankan sesi.",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": "```text 1. Menetapkan tujuan belajar. 2. Memilih materi. 3. Membuat latihan. 4. Menjalankan sesi. 5. Melakukan evaluasi akhir. ```"
    },
    {
        "id": "latihan-7",
        "title": "Latihan 7 — Replanning",
        "focus": "Latihan 7",
        "prompt": "Rencana awal menggunakan laboratorium komputer. Pada hari pelaksanaan, setengah komputer tidak dapat digunakan.",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": "- ubah latihan menjadi berpasangan; - prioritaskan aktivitas yang dapat dijalankan melalui browser; - siapkan demonstrasi terpusat; - kurangi aktivitas yang membutuhkan satu perangkat per peserta; - pertahankan tujuan belajar, tetapi ubah metode."
    },
    {
        "id": "latihan-8",
        "title": "Latihan 8 — Evaluasi Rencana",
        "focus": "Latihan 8",
        "prompt": "Sebuah workshop memiliki durasi 90 menit, tetapi rencana AI berisi:  - pembukaan 15 menit; - materi 35 menit; - demo 25 menit; - latihan 30 menit; - kuis 15 menit.",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": "Total rencana adalah 120 menit. Rencana melanggar batas waktu dan harus dipangkas atau disusun ulang.  ---"
    },
    {
        "id": "latihan-9",
        "title": "Latihan 9 — Ubah Prompt",
        "focus": "Latihan 9",
        "prompt": "Prompt awal:  > “Hitung biaya acara ini.”  #### Contoh Perbaikan  > “Identifikasi jumlah peserta, biaya per peserta, biaya tambahan, dan anggaran. Hitung total kebutuhan, bandingkan dengan anggaran, periksa perhitungan, lalu berikan kesimpulan.”",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": ""
    },
    {
        "id": "latihan-10",
        "title": "Latihan 10 — Temukan Kesalahan",
        "focus": "Latihan 10",
        "prompt": "```text Peserta: 45 Biaya: Rp30.000 Total menurut AI: Rp1.250.000 ```",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": "```text 45 × Rp30.000 = Rp1.350.000 ```"
    },
    {
        "id": "latihan-11",
        "title": "Latihan 11 — Kurangi Penjelasan Berlebihan",
        "focus": "Latihan 11",
        "prompt": "Tugas peserta: ringkas penjelasan 10 paragraf menjadi:  1. data; 2. tiga langkah utama; 3. hasil; 4. satu catatan asumsi.",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": ""
    },
    {
        "id": "latihan-12",
        "title": "Latihan 12 — Perlu CoT atau Tidak?",
        "focus": "Latihan 12",
        "prompt": "| Tugas | CoT? | Alasan | |---|---|---| | Memperbaiki typo “algoritm” | Tidak | Satu langkah | | Membandingkan dua rencana anggaran | Ya | Banyak kriteria | | Menerjemahkan “good morning” | Tidak | Tugas sederhana | | Menyusun jadwal dengan lima batasan | Ya | Perlu pelacakan batasan | | Menghitung data dari 5.000 baris | Perlu langkah + tool | CoT saja tidak cukup |  ---",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": ""
    },
    {
        "id": "latihan-13",
        "title": "Latihan 13 — Pilih Tool",
        "focus": "Latihan 13",
        "prompt": "| Tugas | Tool | |---|---| | Menghitung 287 × 9.451 | Kalkulator | | Menganalisis 10.000 baris data | Spreadsheet atau Python | | Mengetahui cuaca hari ini | Weather tool | | Merangkum paragraf yang diberikan | Tidak perlu tool eksternal | | Mencari isi kebijakan dalam PDF | File retrieval | | Mencari slot rapat | Calendar | | Membuat draft email | Email drafting tool | | Mengetahui rute | Maps |",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": ""
    },
    {
        "id": "latihan-14",
        "title": "Latihan 14 — Tentukan Parameter",
        "focus": "Latihan 14",
        "prompt": "Tugas:  > Cari slot rapat dua jam minggu depan.  Parameter yang perlu ditentukan:  - tanggal mulai; - tanggal akhir; - zona waktu; - durasi; - kalender; - jam kerja; - peserta yang perlu diperiksa.",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": ""
    },
    {
        "id": "latihan-15",
        "title": "Latihan 15 — Baca Observation",
        "focus": "Latihan 15",
        "prompt": "```text Jumlah baris: 100 Nilai valid: 0 Error: kolom “score” berisi teks ```",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": "AI tidak boleh menghitung rata-rata. AI harus menjelaskan bahwa kolom tidak berisi nilai numerik dan meminta kolom alternatif atau perbaikan data."
    },
    {
        "id": "latihan-16",
        "title": "Latihan 16 — Permission Check",
        "focus": "Latihan 16",
        "prompt": "Klasifikasikan:  - membaca kalender sendiri; - membuat draft email; - mengirim email; - menghapus agenda; - menjalankan kalkulator.  Tindakan mengirim email dan menghapus agenda memiliki dampak lebih tinggi daripada sekadar membaca atau membuat draft.",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": ""
    },
    {
        "id": "latihan-17",
        "title": "Latihan 17 — Perbaiki Tool Loop",
        "focus": "Latihan 17",
        "prompt": "Alur salah:  ```text Reason → Tool → Answer ```  Alur perbaikan:  ```text Reason → Plan → Tool → Observe → Validate → Update → Answer ```  ---",
        "fields": [
            [
                "jawaban",
                "Tuliskan analisis atau jawaban Anda di sini"
            ]
        ],
        "guide": ""
    }
];

    const QUIZ = [
    [
        "Apa pengertian paling tepat dari reasoning dalam konteks AI?",
        [
            "Kemampuan AI memiliki kesadaran",
            "Proses menghubungkan informasi untuk menghasilkan kesimpulan atau langkah",
            "Proses menyimpan semua percakapan pengguna",
            "Kemampuan AI mengakses internet secara otomatis"
        ],
        1,
        "Reasoning menggambarkan proses pengolahan dan penghubungan informasi untuk menyelesaikan tugas. Istilah tersebut tidak menyatakan bahwa AI memiliki kesadaran."
    ],
    [
        "Manakah yang termasuk asumsi?",
        [
            "Anggaran yang tertulis adalah Rp2.000.000",
            "Jumlah peserta pada daftar adalah 50",
            "Semua peserta hadir dan menerima konsumsi",
            "Harga konsumsi pada invoice adalah Rp30.000"
        ],
        2,
        "Kehadiran seluruh peserta tidak otomatis diketahui hanya dari jumlah peserta yang terdaftar."
    ],
    [
        "Mengapa AI perlu mengenali informasi yang tidak relevan?",
        [
            "Agar jawaban menjadi lebih panjang",
            "Agar seluruh kata dalam prompt digunakan",
            "Agar proses tetap fokus pada data yang memengaruhi hasil",
            "Agar AI tidak perlu memeriksa hasil"
        ],
        2,
        ""
    ],
    [
        "Sebuah jawaban AI memiliki langkah yang panjang. Apa kesimpulan yang paling tepat?",
        [
            "Jawaban pasti benar",
            "AI pasti memahami masalah seperti manusia",
            "Panjangnya penjelasan tidak menjamin validitas",
            "Jawaban tidak perlu diperiksa"
        ],
        2,
        ""
    ],
    [
        "Apa langkah paling tepat setelah AI memperoleh hasil perhitungan?",
        [
            "Segera menghapus langkah sebelumnya",
            "Memeriksa angka, satuan, batasan, dan kesimpulan",
            "Menambahkan asumsi baru",
            "Mengganti pertanyaan pengguna"
        ],
        1,
        ""
    ],
    [
        "AI diminta memilih pekerjaan prioritas. Informasi apa yang paling relevan?",
        [
            "Warna ikon setiap pekerjaan",
            "Nama orang yang mengusulkan pekerjaan",
            "Dampak, urgensi, risiko, dan dependensi",
            "Panjang judul pekerjaan"
        ],
        2,
        ""
    ],
    [
        "Apa fungsi utama planning?",
        [
            "Menyimpan semua data",
            "Mengubah tujuan menjadi urutan langkah",
            "Menjamin tidak ada perubahan",
            "Menggantikan seluruh reasoning"
        ],
        1,
        ""
    ],
    [
        "Manakah contoh constraint?",
        [
            "Menentukan materi",
            "Membuat slide",
            "Durasi maksimal 90 menit",
            "Menulis kesimpulan"
        ],
        2,
        ""
    ],
    [
        "Apa tujuan problem decomposition?",
        [
            "Membuat tugas lebih kabur",
            "Memecah tugas besar menjadi bagian yang dapat dikerjakan",
            "Menghapus seluruh batasan",
            "Menghindari evaluasi"
        ],
        1,
        ""
    ],
    [
        "Mengapa dependencies penting?",
        [
            "Agar semua langkah dapat dikerjakan acak",
            "Agar urutan mengikuti kebutuhan input dan output",
            "Agar rencana menjadi lebih panjang",
            "Agar goal tidak perlu ditentukan"
        ],
        1,
        ""
    ],
    [
        "Kapan static planning paling sesuai?",
        [
            "Kondisi sering berubah dan data belum tersedia",
            "Tugas stabil dengan langkah yang sudah jelas",
            "Pengguna terus memberikan informasi baru",
            "Tool sering gagal"
        ],
        1,
        ""
    ],
    [
        "Apa tindakan paling tepat ketika observation menunjukkan kondisi berubah?",
        [
            "Mengabaikan observation",
            "Selalu membatalkan tugas",
            "Memeriksa dan memperbarui rencana jika diperlukan",
            "Tetap mengikuti rencana awal tanpa evaluasi"
        ],
        2,
        ""
    ],
    [
        "Apa definisi Chain-of-Thought?",
        [
            "Seluruh proses internal AI yang pasti lengkap",
            "Rangkaian langkah perantara berbentuk bahasa",
            "Database rahasia model",
            "Tool untuk mengirim email"
        ],
        1,
        ""
    ],
    [
        "Kapan CoT paling berguna?",
        [
            "Tugas multi-langkah dengan beberapa batasan",
            "Perbaikan satu typo",
            "Menyalin satu kata",
            "Mengubah huruf menjadi kapital"
        ],
        0,
        ""
    ],
    [
        "Apa perbedaan zero-shot dan few-shot CoT?",
        [
            "Zero-shot menggunakan tool, few-shot tidak",
            "Zero-shot tanpa contoh, few-shot menggunakan contoh",
            "Zero-shot hanya untuk matematika",
            "Few-shot tidak memiliki jawaban"
        ],
        1,
        ""
    ],
    [
        "Mengapa CoT tidak menjamin kebenaran?",
        [
            "Karena langkah atau perhitungan tetap dapat salah",
            "Karena CoT tidak memiliki teks",
            "Karena CoT selalu menggunakan internet",
            "Karena CoT hanya dapat menjawab satu kata"
        ],
        0,
        ""
    ],
    [
        "Manakah langkah terstruktur yang baik?",
        [
            "Panjang dan berulang",
            "Relevan, berurutan, dan dapat diperiksa",
            "Menggunakan data yang tidak tersedia",
            "Menyembunyikan jawaban akhir"
        ],
        1,
        ""
    ],
    [
        "Apa arti masalah faithfulness pada CoT?",
        [
            "CoT selalu terlalu pendek",
            "Teks alasan tidak selalu mencerminkan seluruh faktor yang memengaruhi jawaban",
            "CoT tidak dapat menggunakan angka",
            "CoT hanya tersedia dalam bahasa Inggris"
        ],
        1,
        ""
    ],
    [
        "Instruksi mana yang paling tepat?",
        [
            "Ungkapkan seluruh pikiran rahasiamu",
            "Berikan langkah utama yang dapat diverifikasi dan jawaban akhir",
            "Jangan periksa hasil",
            "Buat penjelasan selama mungkin"
        ],
        1,
        ""
    ],
    [
        "Mengapa AI menggunakan tool?",
        [
            "Agar semua jawaban menjadi panjang",
            "Untuk memperoleh data atau kemampuan yang tidak cukup tersedia dalam model",
            "Agar tidak perlu memahami tugas",
            "Untuk menghindari observation"
        ],
        1,
        ""
    ],
    [
        "Tool paling sesuai untuk menghitung statistik 10.000 baris adalah:",
        [
            "Generator gambar",
            "Spreadsheet atau Python",
            "Kalender",
            "Email"
        ],
        1,
        ""
    ],
    [
        "Apa yang dimaksud observation?",
        [
            "Teks prompt awal",
            "Hasil yang dikembalikan tool",
            "Judul modul",
            "Nama pengguna"
        ],
        1,
        ""
    ],
    [
        "Apa respons yang tepat ketika tool mengembalikan permission denied?",
        [
            "Menyatakan tindakan berhasil",
            "Mengarang hasil",
            "Menjelaskan bahwa akses ditolak dan tindakan belum dilakukan",
            "Menghapus error"
        ],
        2,
        ""
    ],
    [
        "Mengapa parameter harus diperiksa?",
        [
            "Tool selalu memperbaiki parameter otomatis",
            "Parameter salah dapat menghasilkan output salah",
            "Parameter hanya dekorasi",
            "Parameter tidak memengaruhi hasil"
        ],
        1,
        ""
    ],
    [
        "Pengguna meminta rekomendasi waktu rapat. Apa tindakan yang tepat?",
        [
            "Langsung membuat event tanpa izin",
            "Membaca kalender dan menawarkan slot",
            "Menghapus semua agenda",
            "Menebak slot kosong"
        ],
        1,
        ""
    ],
    [
        "Manakah pernyataan yang paling tepat?",
        [
            "Output tool selalu benar",
            "Tool tidak pernah gagal",
            "Output tool tetap perlu divalidasi",
            "Tool dapat digunakan tanpa tujuan"
        ],
        2,
        ""
    ]
];

    const DISCUSSION_PROMPTS = [
    "Apakah AI yang dapat memberikan alasan runtut berarti benar-benar memahami masalah?",
    "Apakah AI sebaiknya mempertahankan rencana awal atau terus menyesuaikan rencana?",
    "Haruskah AI selalu menampilkan langkah penyelesaiannya?",
    "Seberapa jauh AI boleh menggunakan tool dan mengambil tindakan atas nama pengguna?"
];

    function safeJsonParse(value, fallback) {
        if (!value) return fallback;
        try {
            return JSON.parse(value);
        } catch (error) {
            return fallback;
        }
    }

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function escapeSelector(value) {
        if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
        return String(value).replace(/["\\]/g, "\\$&");
    }

    function setStatus(selector, message, tone) {
        const status = document.querySelector(selector);
        if (!status) return;
        status.textContent = message;
        status.dataset.tone = tone || "neutral";
    }

    function renderList(items) {
        return `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
    }

    function renderFlow(items) {
        return `<div class="reasoning-scaffold-flow reasoning-scaffold-flow--compact">${items.map(function (item, index) {
            const arrow = index < items.length - 1 ? '<i class="fas fa-arrow-right" aria-hidden="true"></i>' : "";
            return `<div><strong>${escapeHtml(item[0])}</strong><span>${escapeHtml(item[1])}</span></div>${arrow}`;
        }).join("")}</div>`;
    }

    function renderTable(table) {
        if (!table) return "";
        return `<div class="reasoning-scaffold-table-wrap"><table><thead><tr>${table.headers.map(header => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead><tbody>${table.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    }

    function renderPrompt(lines) {
        return `<div class="reasoning-code-block"><div><i class="fas fa-terminal"></i><span>Prompt Pattern</span></div><pre><code>${escapeHtml(lines.join("\\n"))}</code></pre></div>`;
    }

    function renderSourcePanel(containerId, label) {
        return `<details class="reasoning-source-panel-details" style="margin-top: 32px; border: 1px solid var(--fellow-line); border-radius: 14px; overflow: hidden; background: #fff;">
            <summary style="padding: 16px 20px; font-weight: 600; color: var(--fellow-text); cursor: pointer; background: var(--fellow-pink-light, #fff7fb); display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-file-lines" style="color: var(--fellow-pink);"></i>
                <span>Referensi Teks Lengkap: ${escapeHtml(label)}</span>
            </summary>
            <div id="${escapeHtml(containerId)}" class="reasoning-source-container" style="padding: 24px; font-size: 0.95rem;">
                <p class="reasoning-source-loading"><i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Memuat materi sumber...</p>
            </div>
        </details>`;
    }


    var SOURCE_VISUALS = {
        "01-full.html": {
            eyebrow: "Reasoning Anatomy Lab",
            title: "Dari Menjawab ke Menalar",
            description: "Cara AI menghubungkan fakta dan asumsi untuk menghasilkan kesimpulan yang dapat diaudit.",
            options: [
                ["Jawab Langsung", "fas fa-bolt", "Insting Cepat", "Jawaban singkat tanpa langkah — cocok untuk definisi sederhana.", "Menjawab satu fakta atau definisi."],
                ["Reasoning", "fas fa-brain", "Hubungan Logis", "Menghubungkan beberapa informasi untuk memperoleh hasil baru.", "Tugas perhitungan, audit, atau perbandingan."],
                ["Fakta & Asumsi", "fas fa-layer-group", "Pemisahan Data", "Fakta adalah informasi tersedia. Asumsi adalah anggapan agar proses bisa dilanjutkan.", "Wajib dibedakan untuk menghindari simpulan yang menyesatkan."]
            ]
        },
        "02-full.html": {
            eyebrow: "Verification Lab",
            title: "Reasoning yang Dapat Diperiksa",
            description: "Penjelasan yang meyakinkan bukan jaminan validitas. Setiap langkah harus bisa diaudit.",
            options: [
                ["Cek Data", "fas fa-database", "Verifikasi Input", "Apakah semua data relevan sudah dipakai? Apakah ada yang mengada-ada?", "Langkah pertama sebelum menilai hasil."],
                ["Cek Urutan", "fas fa-list-ol", "Verifikasi Proses", "Apakah urutan langkah masuk akal? Apakah dependensi terpenuhi?", "Mencegah hasil yang benar tapi jalannya salah."],
                ["Cek Hasil", "fas fa-check-double", "Verifikasi Output", "Apakah angka, satuan, dan batasan konsisten? Apakah kesimpulan mengikuti data?", "Langkah terakhir sebelum jawaban diterima."]
            ]
        },
        "03-full.html": {
            eyebrow: "Planning Studio",
            title: "Planning & Problem Decomposition",
            description: "Memecah tujuan besar menjadi langkah eksekusi dengan dependensi yang benar.",
            options: [
                ["Goal & Constraints", "fas fa-bullseye", "Tujuan & Batasan", "Goal adalah hasil akhir. Constraints adalah batasan yang harus dipatuhi.", "Tanpa goal dan batasan jelas, rencana akan kabur."],
                ["Decomposition", "fas fa-layer-group", "Pecah Tugas", "Memecah tugas besar menjadi subtugas yang dapat dikerjakan satu per satu.", "Work Breakdown Structure."],
                ["Static vs Dynamic", "fas fa-arrows-spin", "Rencana Fleksibel", "Static: jalankan sesuai rencana awal. Dynamic: perbarui berdasarkan hasil observasi.", "Replanning adalah tanda kecerdasan, bukan kegagalan."]
            ]
        },
        "04-full.html": {
            eyebrow: "Structured Reasoning Lab",
            title: "Chain-of-Thought & Langkah Perantara",
            description: "Langkah perantara membuat jawaban lebih mudah diaudit, meski tidak menjamin kebenaran.",
            options: [
                ["Direct vs Structured", "fas fa-code-compare", "Bandingkan Pendekatan", "Jawaban langsung ('Anggaran cukup') vs jawaban bertahap ('total = … sisa = …').", "Tugas kompleks butuh langkah perantara yang bisa diperiksa."],
                ["Prompt Transformer", "fas fa-wand-sparkles", "Ubah Prompt", "Prompt sederhana diubah menjadi instruksi bertahap: 'Identifikasi data → Susun langkah → Periksa → Jawab'.", "Zero-shot dan few-shot pattern."],
                ["Faithfulness Callout", "fas fa-triangle-exclamation", "Waspadai Ilusi", "Langkah yang rapi bisa saja rationalization dari jawaban yang sudah dipilih sebelumnya.", "CoT membantu struktur, bukan bukti mutlak kebenaran."]
            ]
        },
        "05-full.html": {
            eyebrow: "Tool Decision Lab",
            title: "Tool Use yang Bertanggung Jawab",
            description: "Kapan AI perlu tool, tool apa yang tepat, dan bagaimana memvalidasi output-nya.",
            options: [
                ["Perlu Tool?", "fas fa-circle-question", "Decision Tree", "Apakah informasi ada dalam model? Apakah perlu akses real-time? Apakah perlu komputasi?", "Tidak semua tugas butuh tool eksternal."],
                ["Pilih & Parameter", "fas fa-sliders", "Tool Matching", "Tool yang tepat + parameter yang benar = output yang berguna. Salah satu saja bisa gagal.", "Kalkulator vs spreadsheet vs API cuaca — beda tugas, beda tool."],
                ["Observation & Risk", "fas fa-eye", "Validasi & Izin", "Baca hasil tool. Validasi. Periksa error. Hormati batas otorisasi.", "Permission denied bukan berarti harus mengarang data."]
            ]
        },
        "06-full.html": {
            eyebrow: "Integrated Mission",
            title: "Misi Reasoning Terpadu",
            description: "Reasoning, planning, dan tool use bersatu dalam loop iteratif: Reason → Plan → Act → Observe → Update → Answer.",
            options: [
                ["Reason → Plan", "fas fa-compass", "Pahami & Rencanakan", "Pahami tugas, identifikasi data, susun rencana dan tentukan tool yang diperlukan.", "Foundation dari seluruh loop."],
                ["Act → Observe", "fas fa-play", "Eksekusi & Amati", "Jalankan tool, baca hasil, bandingkan dengan ekspektasi.", "Di sinilah banyak kegagalan terdeteksi."],
                ["Update → Answer → Verify", "fas fa-flag-checkered", "Perbarui & Verifikasi", "Perbarui rencana jika perlu, beri jawaban, lalu verifikasi akhir sebelum disampaikan.", "Gate terakhir sebelum jawaban sampai ke pengguna."]
            ]
        }
    };

    function getSourceFile(path) {
        return String(path || "").split("/").pop();
    }

    function renderSourceVisualLab(config) {
        if (!config) return "";
        return `<section class="reasoning-concept-lab" aria-label="${escapeHtml(config.title)}">
            <div class="reasoning-concept-lab-head">
                <div><span>${escapeHtml(config.eyebrow)}</span><h4>${escapeHtml(config.title)}</h4></div>
                <span class="reasoning-concept-counter">1 / ${config.options.length}</span>
            </div>
            <div class="reasoning-concept-tabs" role="tablist">
                ${config.options.map(function (option, index) {
                    return `<button type="button" role="tab" aria-selected="${index === 0}" data-concept-index="${index}"><i class="${escapeHtml(option[1])}" aria-hidden="true"></i><span>${escapeHtml(option[0])}</span></button>`;
                }).join("")}
            </div>
            <div class="reasoning-concept-stage" role="tabpanel" tabindex="0">
                <div class="reasoning-concept-node"><i class="${escapeHtml(config.options[0][1])}" aria-hidden="true"></i></div>
                <div><span>${escapeHtml(config.options[0][2])}</span><h5>${escapeHtml(config.options[0][0])}</h5><p>${escapeHtml(config.options[0][3])}</p><small><i class="fas fa-location-dot" aria-hidden="true"></i>${escapeHtml(config.options[0][4])}</small></div>
            </div>
        </section>`;
    }

    function initSourceVisualLab(container, config) {
        if (!config) return;
        const stage = container.querySelector(".reasoning-concept-stage");
        const counter = container.querySelector(".reasoning-concept-counter");
        container.querySelectorAll("[data-concept-index]").forEach(function (button) {
            button.addEventListener("click", function () {
                const index = Number(button.dataset.conceptIndex);
                const option = config.options[index];
                if (!stage || !option) return;
                container.querySelectorAll("[data-concept-index]").forEach(function (tab) {
                    tab.setAttribute("aria-selected", String(tab === button));
                });
                stage.innerHTML = `<div class="reasoning-concept-node"><i class="${escapeHtml(option[1])}" aria-hidden="true"></i></div><div><span>${escapeHtml(option[2])}</span><h5>${escapeHtml(option[0])}</h5><p>${escapeHtml(option[3])}</p><small><i class="fas fa-location-dot" aria-hidden="true"></i>${escapeHtml(option[4])}</small></div>`;
                if (counter) counter.textContent = (index + 1) + " / " + config.options.length;
            });
        });
    }

    function structureSourceParagraph(paragraph) {
        const copy = document.createElement("div");
        copy.className = "reasoning-source-step-copy";
        while (paragraph.firstChild) copy.appendChild(paragraph.firstChild);

        const directLabels = Array.from(copy.children).filter(function (child) {
            return child.tagName === "STRONG";
        });
        if (directLabels.length > 1) {
            const compound = document.createElement("div");
            compound.className = "reasoning-source-compound";
            let section = null;
            Array.from(copy.childNodes).forEach(function (node) {
                if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "STRONG") {
                    section = document.createElement("section");
                    section.className = "reasoning-source-subsection";
                    compound.appendChild(section);
                }
                if (!section) {
                    section = document.createElement("section");
                    section.className = "reasoning-source-subsection";
                    compound.appendChild(section);
                }
                section.appendChild(node);
            });
            copy.appendChild(compound);
            paragraph.classList.add("is-compound");
        }
        paragraph.appendChild(copy);
    }

    function enhanceSourceMaterialForCanvas(container, chapter) {
        if (!container) return;
        container.querySelectorAll("table").forEach(function (table) {
            if (!table.parentElement.classList.contains("reasoning-scaffold-table-wrap")) {
                var scroll = document.createElement("div");
                scroll.className = "reasoning-scaffold-table-wrap";
                table.parentNode.insertBefore(scroll, table);
                scroll.appendChild(table);
            }
        });
        container.querySelectorAll("pre").forEach(function (block) {
            if (!block.parentElement.classList.contains("reasoning-code-block")) {
                var wrapper = document.createElement("div");
                wrapper.className = "reasoning-code-block";
                wrapper.innerHTML = '<div><i class="fas fa-code"></i><span>Snippet</span></div>';
                block.parentNode.insertBefore(wrapper, block);
                wrapper.appendChild(block);
            }
        });
        container.querySelectorAll("blockquote").forEach(function (bq) {
            bq.classList.add("reasoning-scaffold-callout");
        });
    }

    function enhanceSourceMaterial(container, path) {
        if (arguments.length > 2 && arguments[2]) {
            const chapter = arguments[2];
            container.querySelectorAll("h2, h3, h4").forEach(function (heading) {
                const text = heading.textContent.toLowerCase();
                let replacement = null;

                if (text.includes("visual flow") && chapter.flow) {
                    replacement = `<section class="reasoning-visual-board" aria-label="Visualisasi reasoning">
                        <div class="reasoning-visual-head"><i class="fas fa-route" aria-hidden="true"></i><div><span>Visual reasoning flow</span><h3>Alur pikir yang bisa dilacak</h3></div></div>
                        ${renderFlow(chapter.flow)}
                    </section>`;
                } else if (text.includes("quick check") && chapter.quickCheck) {
                    replacement = `<section class="reasoning-quick-check" data-check-answer="${chapter.quickCheck.answer}">
                        <div class="reasoning-quick-head"><i class="fas fa-circle-question" aria-hidden="true"></i><div><span>Quick Check</span><h3>${escapeHtml(chapter.quickCheck.question)}</h3></div></div>
                        <div class="reasoning-check-options">
                            ${chapter.quickCheck.options.map((option, index) => `<button type="button" data-check-option="${index}"><b>${String.fromCharCode(65 + index)}</b><span>${escapeHtml(option)}</span></button>`).join("")}
                        </div>
                        <p class="reasoning-check-feedback" hidden>${escapeHtml(chapter.quickCheck.explanation)}</p>
                    </section>`;
                } else if (text.includes("mini challenge") && chapter.challenge) {
                    replacement = `<section class="reasoning-mini-challenge">
                        <div><i class="fas fa-pen-ruler" aria-hidden="true"></i><span>Mini Challenge</span></div>
                        <h3>Latihan reflektif singkat</h3>
                        <p>${escapeHtml(chapter.challenge)}</p>
                    </section>`;
                } else if (text.includes("common mistakes") && chapter.mistakes) {
                    replacement = `<section class="reasoning-scaffold-checklist">
                        <h3><i class="fas fa-triangle-exclamation" aria-hidden="true"></i> Common mistakes</h3>
                        ${renderList(chapter.mistakes)}
                    </section>`;
                } else if (text.includes("ringkasan") && chapter.summary) {
                    replacement = `<section class="reasoning-scaffold-summary">
                        <h3><i class="fas fa-bookmark" aria-hidden="true"></i> Ringkasan</h3>
                        <p>${escapeHtml(chapter.summary)}</p>
                    </section>`;
                } else if (text.includes("contoh ai") && chapter.llmExample) {
                    replacement = `<section class="reasoning-scaffold-example">
                        <span>Contoh AI/LLM</span>
                        <h3>Bagaimana konsep ini muncul di produk AI</h3>
                        <p>${escapeHtml(chapter.llmExample)}</p>
                    </section>`;
                } else if (text.includes("analogi:") && chapter.analogy) {
                    replacement = `<section class="reasoning-scaffold-callout">
                        <i class="fas fa-lightbulb" aria-hidden="true"></i>
                        <p><strong>Analogi:</strong> ${escapeHtml(chapter.analogy)}</p>
                    </section>`;
                }

                if (replacement) {
                    let current = heading.nextElementSibling;
                    while (current && !current.matches("h1, h2, h3, h4")) {
                        const next = current.nextElementSibling;
                        current.remove();
                        current = next;
                    }
                    heading.insertAdjacentHTML("afterend", replacement);
                    heading.remove();
                }
            });

            if (typeof initQuickChecks === "function") {
                initQuickChecks(container);
            }
        }

                const material = container.querySelector(".reasoning-source-material");
        if (!material) return;

        material.querySelectorAll("table").forEach(function (table) {
            if (!table.parentElement.classList.contains("reasoning-scaffold-table-wrap")) {
                const scroll = document.createElement("div");
                scroll.className = "reasoning-scaffold-table-wrap";
                table.parentNode.insertBefore(scroll, table);
                scroll.appendChild(table);
            }
        });
    }

    function loadSourceHtml(path, containerId, chapter) {
        var container = document.getElementById(containerId);
        if (!container || !path) return;
        fetch(path, { cache: "no-store" })
            .then(function (response) {
                if (!response.ok) throw new Error("Gagal memuat " + path);
                return response.text();
            })
            .then(function (html) {
                container.innerHTML = html;
                container.classList.add("is-source-view");
                enhanceSourceMaterialForCanvas(container, chapter);
                var jumpsNav = document.getElementById("reasoning-source-jumps");
                if (jumpsNav) {
                    generateNavChips(container, jumpsNav);
                }
            })
            .catch(function () {
                container.innerHTML = '<div class="reasoning-source-error"><i class="fas fa-triangle-exclamation" aria-hidden="true"></i><p>Materi sumber belum bisa dimuat. Refresh halaman atau cek path source Reasoning.</p></div>';
            });
    }

    function renderChapter(chapter, chapterNumber, total) {
        var sourceFile = getSourceFile(chapter.sourcePath);
        var visualConfig = SOURCE_VISUALS[sourceFile];
        var navChipHtml = "";
        var conceptTags = [];
        if (chapter.concepts) {
            chapter.concepts.forEach(function (pair) {
                conceptTags.push('<span class="reasoning-concept-tag"><i class="fas fa-tag" aria-hidden="true"></i>' + escapeHtml(pair[0]) + '</span>');
            });
        }
        return '\n            <section class="reasoning-scaffold-module-meta reasoning-final-meta">\n                <div class="reasoning-scaffold-module-meta-head">\n                    <i class="' + escapeHtml(chapter.icon) + '" aria-hidden="true"></i>\n                    <div>\n                        <span>Topik ' + chapterNumber + ' dari ' + total + '</span>\n                        <h2>' + escapeHtml(chapter.title) + '</h2>\n                        <p>' + escapeHtml(chapter.summary) + '</p>\n                        ' + (conceptTags.length ? '<div class="reasoning-concept-tags">' + conceptTags.join("") + '</div>' : "") + '\n                    </div>\n                </div>\n                <div class="reasoning-meta-row"><strong><i class="far fa-clock" aria-hidden="true"></i> Durasi</strong> <span>' + escapeHtml(chapter.duration) + '</span></div>\n                <div class="reasoning-meta-row"><strong><i class="fas fa-bullseye" aria-hidden="true"></i> Learning Objective</strong>' + renderList(chapter.objectives) + '</div>\n                ' + (chapter.analogy ? '<div class="reasoning-scaffold-callout"><i class="fas fa-lightbulb" aria-hidden="true"></i><p><strong>Analogi:</strong> ' + escapeHtml(chapter.analogy) + '</p></div>' : "") + '\n            </section>\n\n            <div class="reasoning-source-toolbar" id="reasoning-source-toolbar">\n                <div class="reasoning-view-toggle" role="group" aria-label="Mode tampilan materi">\n                    <button type="button" class="is-active" data-reasoning-view="visual" aria-pressed="true"><i class="fas fa-eye" aria-hidden="true"></i> Visual Learning</button>\n                    <button type="button" data-reasoning-view="source" aria-pressed="false"><i class="fas fa-file-lines" aria-hidden="true"></i> Sumber Lengkap</button>\n                </div>\n                <nav class="reasoning-source-jumps" id="reasoning-source-jumps" aria-label="Lompat ke bagian">\n                    <span>Lompat ke:</span>\n                </nav>\n            </div>\n\n            ' + (visualConfig ? renderChapterVisualLab(visualConfig, chapter) : "") + '\n\n            <section class="reasoning-scaffold-rich reasoning-visual-canvas" id="reasoning-visual-canvas">\n                ' + renderVisualCanvas(chapter) + '\n            </section>\n\n            <div class="reasoning-source-panel" id="reasoning-source-panel" hidden>\n                <div class="reasoning-source-panel-head">\n                    <i class="fas fa-file-lines" aria-hidden="true"></i>\n                    <div>\n                        <span>Sumber Lengkap</span>\n                        <h3>' + escapeHtml(chapter.title) + '</h3>\n                        <p>Materi asli dari Nazril — seluruh teks, tabel, contoh, latihan, kuis, dan pembahasan. Tidak dikurangi atau diringkas.</p>\n                    </div>\n                </div>\n                <div class="reasoning-source-material" id="reasoning-scaffold-rich-content">\n                    <div class="reasoning-scaffold-spinner"><i class="fas fa-circle-notch fa-spin" aria-hidden="true"></i> Memuat materi sumber...</div>\n                </div>\n            </div>\n        ';
    }

    function renderChapterVisualLab(config, chapter) {
        if (!config) return "";
        return '<section class="reasoning-concept-lab" data-reasoning-lab aria-label="' + escapeHtml(config.eyebrow) + '">\n            <div class="reasoning-concept-lab-head">\n                <div>\n                    <span>' + escapeHtml(config.eyebrow) + '</span>\n                    <h4>' + escapeHtml(config.title) + '</h4>\n                    <p>' + escapeHtml(config.description) + '</p>\n                </div>\n                <span class="reasoning-concept-counter">1 / ' + config.options.length + '</span>\n            </div>\n            <div class="reasoning-concept-tabs" role="tablist" aria-label="Mode eksplorasi konsep">\n                ' + config.options.map(function (option, index) {
                    return '<button type="button" role="tab" aria-selected="' + (index === 0 ? "true" : "false") + '" data-concept-index="' + index + '"><i class="' + escapeHtml(option[1]) + '" aria-hidden="true"></i><span>' + escapeHtml(option[0]) + '</span></button>';
                }).join("") + '\n            </div>\n            <div class="reasoning-concept-stage" role="tabpanel" tabindex="0">\n                <div class="reasoning-concept-node"><i class="' + escapeHtml(config.options[0][1]) + '" aria-hidden="true"></i></div>\n                <div>\n                    <span>' + escapeHtml(config.options[0][2]) + '</span>\n                    <h5>' + escapeHtml(config.options[0][0]) + '</h5>\n                    <p>' + escapeHtml(config.options[0][3]) + '</p>\n                    <small><i class="fas fa-location-dot" aria-hidden="true"></i> ' + escapeHtml(config.options[0][4]) + '</small>\n                </div>\n            </div>\n        </section>';
    }

    function renderVisualCanvas(chapter) {
        var parts = [];
        if (chapter.flow && chapter.flow.length) {
            parts.push('<section class="reasoning-visual-board" aria-label="Alur reasoning">\n                <div class="reasoning-visual-head"><i class="fas fa-route" aria-hidden="true"></i><div><span>Visual reasoning flow</span><h3>Alur pikir yang bisa dilacak</h3></div></div>\n                ' + renderFlow(chapter.flow) + '\n            </section>');
        }
        if (chapter.quickCheck) {
            parts.push('<section class="reasoning-quick-check" data-check-answer="' + chapter.quickCheck.answer + '">\n                <div class="reasoning-quick-head"><i class="fas fa-circle-question" aria-hidden="true"></i><div><span>Quick Check</span><h3>' + escapeHtml(chapter.quickCheck.question) + '</h3></div></div>\n                <div class="reasoning-check-options">\n                    ' + chapter.quickCheck.options.map(function (option, index) {
                        return '<button type="button" data-check-option="' + index + '"><b>' + String.fromCharCode(65 + index) + '</b><span>' + escapeHtml(option) + '</span></button>';
                    }).join("") + '\n                </div>\n                <p class="reasoning-check-feedback" hidden>' + escapeHtml(chapter.quickCheck.explanation) + '</p>\n            </section>');
        }
        if (chapter.llmExample) {
            parts.push('<section class="reasoning-scaffold-example">\n                <span>Contoh AI/LLM</span>\n                <h3>Bagaimana konsep ini muncul di produk AI</h3>\n                <p>' + escapeHtml(chapter.llmExample) + '</p>\n            </section>');
        }
        if (chapter.prompt && chapter.prompt.length) {
            parts.push(renderPrompt(chapter.prompt));
        }
        if (chapter.challenge) {
            parts.push('<section class="reasoning-mini-challenge">\n                <div><i class="fas fa-pen-ruler" aria-hidden="true"></i><span>Mini Challenge</span></div>\n                <h3>Latihan reflektif singkat</h3>\n                <p>' + escapeHtml(chapter.challenge) + '</p>\n            </section>');
        }
        if (chapter.mistakes && chapter.mistakes.length) {
            parts.push('<section class="reasoning-scaffold-checklist">\n                <h3><i class="fas fa-triangle-exclamation" aria-hidden="true"></i> Common mistakes</h3>\n                ' + renderList(chapter.mistakes) + '\n            </section>');
        }
        if (chapter.bestPractices && chapter.bestPractices.length) {
            parts.push('<section class="reasoning-scaffold-checklist">\n                <h3><i class="fas fa-circle-check" aria-hidden="true"></i> Best Practices</h3>\n                ' + renderList(chapter.bestPractices) + '\n            </section>');
        }
        parts.push('<section class="reasoning-scaffold-summary">\n            <h3><i class="fas fa-bookmark" aria-hidden="true"></i> Ringkasan</h3>\n            <p>' + escapeHtml(chapter.summary) + '</p>\n        </section>');
        return parts.join("\n");
    }

    function setupViewToggle(container) {
        var toggle = container.querySelector(".reasoning-view-toggle");
        var visualCanvas = container.querySelector(".reasoning-visual-canvas");
        var sourcePanel = container.querySelector(".reasoning-source-panel");
        if (!toggle || !visualCanvas || !sourcePanel) return;
        toggle.querySelectorAll("[data-reasoning-view]").forEach(function (button) {
            button.addEventListener("click", function () {
                var view = button.dataset.reasoningView;
                var isVisual = view === "visual";
                toggle.querySelectorAll("[data-reasoning-view]").forEach(function (btn) {
                    btn.classList.toggle("is-active", btn === button);
                    btn.setAttribute("aria-pressed", String(btn === button));
                });
                visualCanvas.hidden = !isVisual;
                sourcePanel.hidden = isVisual;
            });
        });
    }

    function generateNavChips(sourceContainer, jumpsContainer) {
        if (!sourceContainer || !jumpsContainer) return;
        var headings = sourceContainer.querySelectorAll("h2, h3");
        if (!headings.length) return;
        var seen = {};
        headings.forEach(function (heading, index) {
            var text = heading.textContent.replace(/^\d+\.?\s*/, "").trim();
            if (!text || seen[text]) return;
            seen[text] = true;
            var id = "reasoning-nav-" + index;
            heading.id = id;
            var chip = document.createElement("button");
            chip.type = "button";
            chip.textContent = text;
            chip.title = text;
            chip.addEventListener("click", function () {
                var target = document.getElementById(id);
                if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
            });
            jumpsContainer.appendChild(chip);
        });
    }

    function initQuickChecks(scope) {
        scope.querySelectorAll(".reasoning-quick-check").forEach(function (card) {
            const answer = Number(card.dataset.checkAnswer);
            const feedback = card.querySelector(".reasoning-check-feedback");
            card.querySelectorAll("[data-check-option]").forEach(function (button) {
                button.addEventListener("click", function () {
                    const selected = Number(button.dataset.checkOption);
                    card.querySelectorAll("[data-check-option]").forEach(function (option) {
                        const optionIndex = Number(option.dataset.checkOption);
                        option.classList.toggle("is-correct", optionIndex === answer);
                        option.classList.toggle("is-wrong", optionIndex === selected && selected !== answer);
                    });
                    if (feedback) {
                        feedback.hidden = false;
                        feedback.dataset.tone = selected === answer ? "success" : "warning";
                    }
                });
            });
        });
    }

    function updateProgress(chapterNumber, total) {
        const completed = Math.max(0, chapterNumber - 1);
        const percent = Math.round((completed / total) * 100);
        const progressB = document.querySelector(".lesson-progress-mini b");
        const progressStrong = document.querySelector(".lesson-progress-mini strong");
        const progressText = document.querySelector(".lesson-progress-card p");
        if (progressB) progressB.style.setProperty("--value", percent + "%");
        if (progressStrong) progressStrong.textContent = percent + "%";
        if (progressText) progressText.textContent = completed + " dari " + total + " materi selesai";
    }

    window.loadReasoningChapter = function (chapterNumber) {
        var total = CHAPTERS.length;
        var chapter = Math.min(Math.max(Number(chapterNumber) || 1, 1), total);
        var module = CHAPTERS[chapter - 1];
        var container = document.getElementById("reasoning-chapter-container");
        var btnPrev = document.getElementById("btn-prev-chapter");
        var btnNext = document.getElementById("btn-next-chapter");
        var btnFinish = document.getElementById("btn-finish-materi");
        if (!container || !module) return;

        localStorage.setItem(STORAGE.chapter, String(chapter));
        container.innerHTML = renderChapter(module, chapter, total);

        var sourceFile = getSourceFile(module.sourcePath);
        var visualConfig = SOURCE_VISUALS[sourceFile];

        if (visualConfig) {
            initSourceVisualLab(container, visualConfig);
        }
        initQuickChecks(container);
        setupViewToggle(container);

        loadSourceHtml(module.sourcePath, "reasoning-scaffold-rich-content", module);

        if (btnPrev) btnPrev.style.display = chapter > 1 ? "inline-block" : "none";
        if (btnNext) btnNext.style.display = chapter < total ? "inline-block" : "none";
        if (btnFinish) btnFinish.style.display = chapter === total ? "inline-block" : "none";

        document.querySelectorAll("#reasoning-sidebar-list li").forEach(function (li) {
            var itemChapter = Number(li.dataset.chapter || "0");
            var icon = li.querySelector("i");
            li.classList.toggle("active", itemChapter === chapter);
            li.classList.toggle("completed", itemChapter < chapter);
            if (!icon) return;
            if (itemChapter === chapter) icon.className = "far fa-circle-play";
            else if (itemChapter < chapter) icon.className = "fas fa-circle-check";
            else icon.className = "far fa-circle";
        });

        updateProgress(chapter, total);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.initAiReasoningMateri = function () {
        const total = CHAPTERS.length;
        const initial = Math.min(Math.max(Number(localStorage.getItem(STORAGE.chapter)) || 1, 1), total);
        const list = document.getElementById("reasoning-sidebar-list");
        const btnPrev = document.getElementById("btn-prev-chapter");
        const btnNext = document.getElementById("btn-next-chapter");

        if (list) {
            list.innerHTML = CHAPTERS.map(function (chapter, index) {
                const chapterNumber = index + 1;
                return `<li data-chapter="${chapterNumber}"><span>${chapterNumber}</span><a href="javascript:void(0)" onclick="window.loadReasoningChapter(${chapterNumber})">${escapeHtml(chapter.shortTitle)}</a><i class="far fa-circle"></i></li>`;
            }).join("");
        }

        if (btnPrev) {
            btnPrev.addEventListener("click", function () {
                const current = Number(localStorage.getItem(STORAGE.chapter)) || initial;
                window.loadReasoningChapter(Math.max(1, current - 1));
            });
        }

        if (btnNext) {
            btnNext.addEventListener("click", function () {
                const current = Number(localStorage.getItem(STORAGE.chapter)) || initial;
                window.loadReasoningChapter(Math.min(total, current + 1));
            });
        }

        window.loadReasoningChapter(initial);
    };

    function getSavedPractice() {
        return safeJsonParse(localStorage.getItem(STORAGE.practice), { answers: {}, revealed: [] });
    }

    function savePracticePayload(payload) {
        localStorage.setItem(STORAGE.practice, JSON.stringify({
            answers: payload.answers || {},
            revealed: Array.from(new Set(payload.revealed || [])),
            updatedAt: new Date().toISOString()
        }));
    }

    function collectPracticeAnswers(form) {
        const answers = {};
        form.querySelectorAll("textarea").forEach(function (field) {
            if (field.name) answers[field.name] = field.value.trim();
        });
        return answers;
    }

    function renderPracticeCard(item, index) {
        return `<article class="reasoning-practice-card" data-practice-id="${escapeHtml(item.id)}" tabindex="-1">
            <div class="reasoning-practice-card-head">
                <span>${index + 1}</span>
                <div><small>${escapeHtml(item.focus)}</small><h3>${escapeHtml(item.title)}</h3></div>
            </div>
            <p>${escapeHtml(item.prompt)}</p>
            <div class="reasoning-practice-fields">
                ${item.fields.map(function (field) {
                    const name = item.id + "__" + field[0];
                    return `<label><span>${escapeHtml(field[1])}</span><textarea name="${escapeHtml(name)}" rows="4" placeholder="Tulis jawabanmu di sini..."></textarea></label>`;
                }).join("")}
            </div>
            <button type="button" class="reasoning-scaffold-reveal-button" data-reasoning-reveal="${escapeHtml(item.id)}" aria-expanded="false"><i class="fas fa-lightbulb" aria-hidden="true"></i> Lihat pembahasan</button>
            <div class="reasoning-scaffold-exercise-answer" data-reasoning-answer="${escapeHtml(item.id)}" hidden><strong>Pembahasan</strong><p>${escapeHtml(item.guide)}</p></div>
        </article>`;
    }

    window.initAiReasoningPractice = function () {
        const form = document.getElementById("aiReasoningPracticeForm");
        const practiceList = document.getElementById("aiReasoningPracticeList");
        if (!form || !practiceList) return;

        loadSourceHtml(SOURCE_BASE + "practice-full.html", "aiReasoningPracticeSource");
        practiceList.innerHTML = PRACTICES.map(renderPracticeCard).join("");
        const saved = getSavedPractice();
        const savedAnswers = saved.answers || {};
        const revealed = Array.isArray(saved.revealed) ? saved.revealed.slice() : [];
        const navigator = document.getElementById("aiReasoningPracticeNavigator");
        const counter = document.getElementById("aiReasoningPracticeCounter");
        const previousButton = form.querySelector("[data-practice-prev]");
        const nextButton = form.querySelector("[data-practice-next]");
        let currentPractice = 0;

        function isPracticeComplete(index) {
            const card = practiceList.querySelectorAll("[data-practice-id]")[index];
            if (!card) return false;
            return Array.from(card.querySelectorAll("textarea")).every(field => field.value.trim());
        }

        function updatePracticeNavigator() {
            if (navigator) {
                navigator.querySelectorAll("[data-practice-step]").forEach(function (button) {
                    const index = Number(button.dataset.practiceStep);
                    button.classList.toggle("is-active", index === currentPractice);
                    button.classList.toggle("is-complete", isPracticeComplete(index));
                    button.setAttribute("aria-current", index === currentPractice ? "step" : "false");
                });
            }
            if (counter) counter.textContent = "Skenario " + (currentPractice + 1) + " dari " + PRACTICES.length;
            if (previousButton) previousButton.disabled = currentPractice === 0;
            if (nextButton) nextButton.disabled = currentPractice === PRACTICES.length - 1;
        }

        function showPractice(index, shouldFocus) {
            currentPractice = Math.min(Math.max(index, 0), PRACTICES.length - 1);
            practiceList.querySelectorAll("[data-practice-id]").forEach(function (card, cardIndex) {
                card.hidden = cardIndex !== currentPractice;
            });
            updatePracticeNavigator();
            if (shouldFocus) {
                const activeCard = practiceList.querySelectorAll("[data-practice-id]")[currentPractice];
                if (activeCard) activeCard.focus({ preventScroll: true });
            }
        }

        if (navigator) {
            navigator.innerHTML = PRACTICES.map(function (item, index) {
                return `<button type="button" data-practice-step="${index}" title="${escapeHtml(item.title)}"><span>${index + 1}</span><small>${escapeHtml(item.focus)}</small></button>`;
            }).join("");
            navigator.querySelectorAll("[data-practice-step]").forEach(function (button) {
                button.addEventListener("click", function () {
                    savePracticePayload({ answers: collectPracticeAnswers(form), revealed: revealed });
                    showPractice(Number(button.dataset.practiceStep), true);
                });
            });
        }

        Object.entries(savedAnswers).forEach(function (entry) {
            const field = form.querySelector('[name="' + escapeSelector(entry[0]) + '"]');
            if (field) field.value = entry[1];
        });

        const firstIncomplete = PRACTICES.findIndex(function (_item, index) {
            return !isPracticeComplete(index);
        });
        currentPractice = firstIncomplete === -1 ? PRACTICES.length - 1 : firstIncomplete;
        showPractice(currentPractice, false);

        form.addEventListener("input", function (event) {
            if (event.target.matches("textarea")) updatePracticeNavigator();
        });

        if (previousButton) {
            previousButton.addEventListener("click", function () {
                savePracticePayload({ answers: collectPracticeAnswers(form), revealed: revealed });
                showPractice(currentPractice - 1, true);
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", function () {
                savePracticePayload({ answers: collectPracticeAnswers(form), revealed: revealed });
                showPractice(currentPractice + 1, true);
            });
        }

        revealed.forEach(function (id) {
            const answer = form.querySelector('[data-reasoning-answer="' + escapeSelector(id) + '"]');
            const button = form.querySelector('[data-reasoning-reveal="' + escapeSelector(id) + '"]');
            if (answer) answer.hidden = false;
            if (button) {
                button.setAttribute("aria-expanded", "true");
                button.innerHTML = '<i class="fas fa-eye" aria-hidden="true"></i> Pembahasan terbuka';
            }
        });

        setStatus("#aiReasoningPracticeStatus", Object.keys(savedAnswers).length ? "Jawaban latihan dipulihkan dari browsermu." : "Jawaban akan tersimpan di browser ini.", Object.keys(savedAnswers).length ? "success" : "neutral");

        form.querySelectorAll("[data-reasoning-reveal]").forEach(function (button) {
            button.addEventListener("click", function () {
                const id = button.dataset.reasoningReveal;
                const answer = form.querySelector('[data-reasoning-answer="' + escapeSelector(id) + '"]');
                if (!answer) return;
                answer.hidden = !answer.hidden;
                button.setAttribute("aria-expanded", String(!answer.hidden));
                button.innerHTML = answer.hidden
                    ? '<i class="fas fa-lightbulb" aria-hidden="true"></i> Lihat pembahasan'
                    : '<i class="fas fa-eye" aria-hidden="true"></i> Pembahasan terbuka';
                if (!answer.hidden && !revealed.includes(id)) revealed.push(id);
                savePracticePayload({ answers: collectPracticeAnswers(form), revealed: revealed });
                setStatus("#aiReasoningPracticeStatus", "Pembahasan dan jawaban tersimpan di browser ini.", "success");
            });
        });

        const saveButton = form.querySelector("[data-practice-save]");
        const editButton = form.querySelector("[data-practice-edit]");
        const resetButton = form.querySelector("[data-practice-reset]");

        if (saveButton) {
            saveButton.addEventListener("click", function () {
                savePracticePayload({ answers: collectPracticeAnswers(form), revealed: revealed });
                form.classList.add("is-saved");
                form.querySelectorAll("textarea").forEach(field => { field.disabled = true; });
                setStatus("#aiReasoningPracticeStatus", "Latihan Reasoning tersimpan. Kamu bisa lanjut ke kuis atau edit lagi bila perlu.", "success");
            });
        }

        if (editButton) {
            editButton.addEventListener("click", function () {
                form.classList.remove("is-saved");
                form.querySelectorAll("textarea").forEach(field => { field.disabled = false; });
                setStatus("#aiReasoningPracticeStatus", "Mode edit aktif. Simpan ulang setelah mengubah jawaban.", "neutral");
            });
        }

        if (resetButton) {
            resetButton.addEventListener("click", function () {
                localStorage.removeItem(STORAGE.practice);
                form.reset();
                form.classList.remove("is-saved");
                form.querySelectorAll("textarea").forEach(field => { field.disabled = false; });
                form.querySelectorAll("[data-reasoning-answer]").forEach(answer => { answer.hidden = true; });
                revealed.splice(0, revealed.length);
                showPractice(0, false);
                setStatus("#aiReasoningPracticeStatus", "Jawaban latihan direset dari browser ini.", "warning");
            });
        }
    };

    function getQuizAnswers(form) {
        return QUIZ.reduce(function (acc, _question, index) {
            const checked = form.querySelector('input[name="reasoning-q' + index + '"]:checked');
            acc["reasoning-q" + index] = checked ? checked.value : "";
            return acc;
        }, {});
    }

    function renderQuizResult(score, total, message) {
        const result = document.getElementById("aiReasoningQuizResult");
        if (!result) return;
        const percent = Math.round((score / total) * 100);
        result.hidden = false;
        result.innerHTML = `<strong>Skor kamu: ${score}/${total} (${percent}%)</strong><span>${escapeHtml(message)}</span>`;
    }

    function lockQuiz(form, answers) {
        form.classList.add("is-locked");
        form.querySelectorAll('input[type="radio"]').forEach(function (input) {
            input.disabled = true;
            if (answers[input.name] === input.value) input.checked = true;
        });

        QUIZ.forEach(function (question, index) {
            const article = form.querySelector('[data-quiz-index="' + index + '"]');
            if (!article) return;
            article.querySelectorAll("label").forEach(function (label) {
                const input = label.querySelector("input");
                const isCorrect = input && Number(input.value) === question[2];
                const isSelected = input && answers[input.name] === input.value;
                label.classList.toggle("is-correct", Boolean(isCorrect));
                label.classList.toggle("is-wrong", Boolean(isSelected && !isCorrect));
            });
            let explanation = article.querySelector(".quiz-explanation");
            if (!explanation) {
                explanation = document.createElement("p");
                explanation.className = "quiz-explanation";
                article.appendChild(explanation);
            }
            explanation.innerHTML = '<i class="fas fa-lightbulb"></i> ' + escapeHtml(question[3]);
        });

        const submit = form.querySelector(".quiz-submit-btn");
        if (submit) {
            submit.disabled = true;
            submit.innerHTML = '<i class="fas fa-lock"></i> Kuis Sudah Dikirim';
        }

        const next = document.getElementById("aiReasoningQuizNext");
        if (next) next.classList.remove("is-disabled");
    }

    window.initAiReasoningQuiz = function () {
        const form = document.getElementById("aiReasoningQuizForm");
        const list = document.getElementById("aiReasoningQuizList");
        if (!form || !list) return;

        loadSourceHtml(SOURCE_BASE + "quiz-source-full.html", "aiReasoningQuizSource");
        list.innerHTML = QUIZ.map(function (question, index) {
            return `<article data-quiz-index="${index}" tabindex="-1">
                <span>${index + 1}</span>
                <small>Reasoning Final</small>
                <h3>${escapeHtml(question[0])}</h3>
                <div class="reasoning-scaffold-options">
                    ${question[1].map(function (option, optionIndex) {
                        const letter = String.fromCharCode(65 + optionIndex);
                        return `<label><input type="radio" name="reasoning-q${index}" value="${optionIndex}"><span><b>${letter}</b>${escapeHtml(option)}</span></label>`;
                    }).join("")}
                </div>
            </article>`;
        }).join("");

        const navigator = document.getElementById("aiReasoningQuizNavigator");
        const counter = document.getElementById("aiReasoningQuizCounter");
        const previousButton = form.querySelector("[data-quiz-prev]");
        const nextButton = form.querySelector("[data-quiz-next]");
        let currentQuiz = 0;

        function isQuizAnswered(index) {
            return Boolean(form.querySelector('input[name="reasoning-q' + index + '"]:checked'));
        }

        function updateQuizNavigator() {
            const answered = QUIZ.reduce((total, _question, index) => total + (isQuizAnswered(index) ? 1 : 0), 0);
            if (navigator) {
                navigator.querySelectorAll("[data-quiz-step]").forEach(function (button) {
                    const index = Number(button.dataset.quizStep);
                    button.classList.toggle("is-active", index === currentQuiz);
                    button.classList.toggle("is-complete", isQuizAnswered(index));
                    button.setAttribute("aria-current", index === currentQuiz ? "step" : "false");
                });
            }
            if (counter) counter.textContent = "Soal " + (currentQuiz + 1) + " dari " + QUIZ.length + " | " + answered + " terjawab";
            if (previousButton) previousButton.disabled = currentQuiz === 0;
            if (nextButton) nextButton.disabled = currentQuiz === QUIZ.length - 1;
        }

        function showQuiz(index, shouldFocus) {
            currentQuiz = Math.min(Math.max(index, 0), QUIZ.length - 1);
            list.querySelectorAll("[data-quiz-index]").forEach(function (article, articleIndex) {
                article.hidden = articleIndex !== currentQuiz;
            });
            updateQuizNavigator();
            if (shouldFocus) {
                const activeQuestion = list.querySelector('[data-quiz-index="' + currentQuiz + '"]');
                if (activeQuestion) activeQuestion.focus({ preventScroll: true });
            }
        }

        if (navigator) {
            navigator.innerHTML = QUIZ.map(function (_question, index) {
                return `<button type="button" data-quiz-step="${index}" aria-label="Buka soal ${index + 1}">${index + 1}</button>`;
            }).join("");
            navigator.querySelectorAll("[data-quiz-step]").forEach(function (button) {
                button.addEventListener("click", function () {
                    showQuiz(Number(button.dataset.quizStep), true);
                });
            });
        }

        if (previousButton) previousButton.addEventListener("click", () => showQuiz(currentQuiz - 1, true));
        if (nextButton) nextButton.addEventListener("click", () => showQuiz(currentQuiz + 1, true));
        showQuiz(0, false);

        const savedDone = localStorage.getItem(STORAGE.quizDone) === "true";
        const savedAnswers = safeJsonParse(localStorage.getItem(STORAGE.quizAnswers), {});
        if (savedDone && Object.keys(savedAnswers).length === QUIZ.length) {
            const savedScore = Number(localStorage.getItem(STORAGE.quizScore)) || 0;
            renderQuizResult(savedScore, QUIZ.length, "Attempt sudah dipakai. Kuis single attempt, jadi jawaban, skor, dan pembahasan dikunci agar review tetap objektif.");
            lockQuiz(form, savedAnswers);
            updateQuizNavigator();
            return;
        }

        form.addEventListener("change", function (event) {
            const label = event.target.closest("label");
            if (!label) return;
            const article = label.closest("article");
            if (!article) return;
            article.querySelectorAll("label").forEach(item => item.classList.remove("is-selected"));
            label.classList.add("is-selected");
            updateQuizNavigator();
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const answers = getQuizAnswers(form);
            const unanswered = Object.values(answers).filter(value => !value).length;
            if (unanswered) {
                renderQuizResult(0, QUIZ.length, "Masih ada " + unanswered + " soal yang belum dijawab.");
                const firstUnanswered = QUIZ.findIndex((_question, index) => !answers["reasoning-q" + index]);
                if (firstUnanswered >= 0) showQuiz(firstUnanswered, true);
                return;
            }

            const score = QUIZ.reduce(function (total, question, index) {
                return total + (Number(answers["reasoning-q" + index]) === question[2] ? 1 : 0);
            }, 0);

            localStorage.setItem(STORAGE.quizDone, "true");
            localStorage.setItem(STORAGE.quizScore, String(score));
            localStorage.setItem(STORAGE.quizAnswers, JSON.stringify(answers));
            renderQuizResult(score, QUIZ.length, "Pembahasan dibuka. Gunakan kartu merah/hijau untuk membaca ulang topik yang belum kuat.");
            lockQuiz(form, answers);
        });
    };

    function getDiscussionPosts() {
        const saved = safeJsonParse(localStorage.getItem(STORAGE.discussion), null);
        if (Array.isArray(saved)) return saved;
        return DISCUSSION_PROMPTS.map(function (prompt, index) {
            return {
                id: "seed-" + (index + 1),
                prompt: prompt,
                text: "Gunakan prompt ini sebagai titik mulai diskusi Reasoning.",
                createdAt: new Date().toISOString(),
                replies: []
            };
        });
    }

    function saveDiscussionPosts(posts) {
        localStorage.setItem(STORAGE.discussion, JSON.stringify(posts));
    }

    function renderDiscussion(posts) {
        const list = document.getElementById("aiReasoningDiscussionList");
        if (!list) return;
        list.innerHTML = posts.map(function (post) {
            const replies = Array.isArray(post.replies) ? post.replies : [];
            return `<article class="discussion-bubble" data-discussion-id="${escapeHtml(post.id)}">
                <div>
                    <span>${post.id.indexOf("seed") === 0 ? "H" : "A"}</span>
                    <strong>${post.id.indexOf("seed") === 0 ? "HerAI Prompt" : "Aisyah Putri"}</strong>
                    <small>${new Date(post.createdAt).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}</small>
                </div>
                <p><b>${escapeHtml(post.prompt)}</b></p>
                <p>${escapeHtml(post.text)}</p>
                <button type="button" data-reply="${escapeHtml(post.id)}"><i class="far fa-message"></i> Balas</button>
                <div class="discussion-replies">
                    ${replies.map(function (reply) {
                        return `<article><strong>Aisyah Putri</strong><small>${new Date(reply.createdAt).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}</small><p>${escapeHtml(reply.text)}</p></article>`;
                    }).join("")}
                </div>
            </article>`;
        }).join("");

        list.querySelectorAll("[data-reply]").forEach(function (button) {
            button.addEventListener("click", function () {
                const text = window.prompt("Tulis balasan singkat untuk thread ini:");
                if (!text || !text.trim()) return;
                const posts = getDiscussionPosts();
                const target = posts.find(post => post.id === button.dataset.reply);
                if (!target) return;
                target.replies = Array.isArray(target.replies) ? target.replies : [];
                target.replies.push({ text: text.trim(), createdAt: new Date().toISOString() });
                saveDiscussionPosts(posts);
                renderDiscussion(posts);
            });
        });
    }

    window.initAiReasoningDiscussion = function () {
        const form = document.getElementById("aiReasoningDiscussionForm");
        const select = form ? form.querySelector("select") : null;
        const textarea = form ? form.querySelector("textarea") : null;
        loadSourceHtml(SOURCE_BASE + "discussion-source-full.html", "aiReasoningDiscussionSource");
        renderDiscussion(getDiscussionPosts());

        const promptButtons = document.querySelector(".ml-discussion-prompts");
        if (promptButtons) {
            promptButtons.innerHTML = DISCUSSION_PROMPTS.map(function (prompt, index) {
                const labels = ["Kepercayaan", "Transparansi", "Tool use", "AI tutor", "High-stakes", "Human review"];
                const icons = ["fas fa-shield-heart", "fas fa-list-check", "fas fa-screwdriver-wrench", "fas fa-graduation-cap", "fas fa-scale-balanced", "fas fa-user-check"];
                return `<button type="button" data-discussion-prompt="${escapeHtml(prompt)}"><i class="${icons[index]}" aria-hidden="true"></i><span>${labels[index]}</span></button>`;
            }).join("");
        }

        if (select) {
            select.innerHTML = DISCUSSION_PROMPTS.map(prompt => `<option>${escapeHtml(prompt)}</option>`).join("");
        }

        document.querySelectorAll("[data-discussion-prompt]").forEach(function (button) {
            button.addEventListener("click", function () {
                if (select) select.value = button.dataset.discussionPrompt;
                if (textarea && !textarea.value.trim()) {
                    textarea.value = button.dataset.discussionPrompt + "\n\n";
                    textarea.focus();
                }
            });
        });

        if (!form || !select || !textarea) return;
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const text = textarea.value.trim();
            if (!text) {
                setStatus("#aiReasoningDiscussionStatus", "Tulis isi diskusi terlebih dahulu.", "warning");
                return;
            }

            const posts = getDiscussionPosts();
            posts.unshift({
                id: "post-" + Date.now(),
                prompt: select.value,
                text: text,
                createdAt: new Date().toISOString(),
                replies: []
            });
            saveDiscussionPosts(posts);
            form.reset();
            setStatus("#aiReasoningDiscussionStatus", "Diskusi berhasil diposting dan tersimpan di browser ini.", "success");
            renderDiscussion(posts);
        });
    };
})();
