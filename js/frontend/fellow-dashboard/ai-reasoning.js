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
            title: "Kognisi Mesin: dari Pattern Matching ke Reasoning",
            shortTitle: "Kognisi Mesin",
            duration: "30 menit",
            icon: "fas fa-brain",
            sourcePath: SOURCE_BASE + "01-full.html",
            summary: "Membedakan respons intuitif LLM dasar dengan penalaran terstruktur yang sengaja memecah masalah sebelum menjawab.",
            objectives: [
                "Menjelaskan perbedaan pattern matching, reasoning, System 1, dan System 2.",
                "Mengidentifikasi kapan model perlu menjawab cepat dan kapan perlu diberi ruang analisis.",
                "Menguji klaim jawaban AI dengan memisahkan fakta, asumsi, langkah, dan kesimpulan."
            ],
            concepts: [
                ["Pattern matching", "Respons cepat berbasis pola bahasa dan asosiasi statistik dari data pelatihan."],
                ["Reasoning", "Proses menghubungkan premis, batasan, dan langkah analitis untuk sampai pada kesimpulan yang dapat diperiksa."],
                ["System 1", "Mode cepat, intuitif, cocok untuk terjemahan sapaan, ringkasan sederhana, atau klasifikasi permukaan."],
                ["System 2", "Mode lambat, deliberatif, cocok untuk matematika, planning, diagnosis, audit, dan keputusan berisiko."]
            ],
            flow: [
                ["Baca tujuan", "Apa yang sebenarnya diminta?"],
                ["Pisah data", "Fakta, asumsi, dan batasan"],
                ["Susun langkah", "Urutan logis yang bisa diulang"],
                ["Cek hasil", "Apakah kesimpulan mengikuti premis?"]
            ],
            analogy: "Membaca kata BAHAYA di papan dilakukan hampir otomatis. Menghitung anggaran acara dengan peserta, vendor, dan biaya cadangan butuh berhenti, menulis variabel, menghitung, lalu memeriksa ulang.",
            llmExample: "Prompt sederhana seperti menerjemahkan sapaan bisa dijawab cepat. Tetapi pertanyaan '60 peserta, konsumsi Rp35.000, logistik Rp250.000, anggaran Rp3.000.000, cukup atau tidak?' perlu langkah: hitung konsumsi, tambah logistik, bandingkan anggaran, sebutkan sisa.",
            prompt: [
                "Tugas: audit jawaban AI berikut.",
                "Pisahkan: fakta yang diberikan, asumsi yang dibuat, langkah penalaran, dan kesimpulan.",
                "Tandai bagian yang tidak didukung data.",
                "Berikan versi jawaban yang lebih aman dan dapat diverifikasi."
            ],
            quickCheck: {
                question: "Tugas mana yang paling mewakili System 1 pada LLM dasar?",
                options: [
                    "Membuktikan teorema aljabar baru.",
                    "Menerjemahkan sapaan sehari-hari dari Indonesia ke Spanyol.",
                    "Mendiagnosis kasus medis langka dengan 25 indikator bertentangan."
                ],
                answer: 1,
                explanation: "Penerjemahan sapaan umum adalah pemetaan pola bahasa yang biasanya tidak memerlukan dekomposisi logis panjang."
            },
            challenge: "Ambil satu tugas kerja atau kuliah. Tulis bagian yang bisa dikerjakan dengan intuisi cepat, lalu tulis bagian yang wajib dianalisis langkah demi langkah agar tidak salah.",
            mistakes: [
                "Menganggap bahasa yang fasih berarti model memahami dunia seperti manusia.",
                "Meminta jawaban final untuk masalah multi-langkah tanpa memberi struktur verifikasi.",
                "Mengabaikan asumsi tersembunyi karena jawaban AI terdengar yakin."
            ],
            summary: "Reasoning AI bukan bukti kesadaran. Dalam produk, istilah ini berarti kemampuan sistem menghubungkan konteks, aturan, langkah, dan validasi sehingga jawabannya bisa ditelusuri."
        },
        {
            title: "Paradigma Penalaran: Deduktif, Induktif, Abduktif, dan Kausal",
            shortTitle: "Jenis Penalaran",
            duration: "35 menit",
            icon: "fas fa-code-branch",
            sourcePath: SOURCE_BASE + "02-full.html",
            summary: "Memilih jenis logika yang tepat untuk aturan pasti, prediksi probabilistik, hipotesis terbaik, dan sebab-akibat.",
            objectives: [
                "Membedakan deduksi, induksi, abduksi, dan kausalitas.",
                "Memilih paradigma reasoning sesuai jenis masalah dan tingkat risiko.",
                "Mengenali jebakan korelasi yang sering membuat AI memberi rekomendasi keliru."
            ],
            concepts: [
                ["Deduktif", "Dari aturan umum ke kasus spesifik. Jika premis benar, kesimpulan wajib benar."],
                ["Induktif", "Dari banyak observasi ke pola umum. Berguna untuk prediksi, tetapi selalu probabilistik."],
                ["Abduktif", "Dari bukti parsial ke penjelasan paling masuk akal. Berguna untuk diagnosis awal."],
                ["Kausal", "Menguji apakah satu faktor benar-benar menyebabkan faktor lain, termasuk lewat counterfactual dan confounder."]
            ],
            flow: [
                ["Aturan", "Gunakan deduksi"],
                ["Data historis", "Gunakan induksi"],
                ["Gejala parsial", "Gunakan abduksi"],
                ["Intervensi", "Gunakan kausalitas"]
            ],
            analogy: "Ayam berkokok sebelum matahari terbit tidak menyebabkan matahari terbit. Korelasi waktu terlihat kuat, tetapi mekanisme kausalnya salah.",
            llmExample: "AI HR yang belajar dari histori perusahaan dapat menyimpulkan kandidat laki-laki lebih sering lolos karena data masa lalu bias. Reasoning kausal memaksa sistem menanyakan apakah gender penyebab performa, atau hanya confounder historis yang harus dikendalikan.",
            prompt: [
                "Analisis klaim: siswa yang minum suplemen X nilainya lebih tinggi.",
                "Pisahkan korelasi dan kemungkinan sebab-akibat.",
                "Sebutkan minimal tiga confounder.",
                "Rancang eksperimen sederhana untuk menguji efek suplemen."
            ],
            table: {
                headers: ["Jenis", "Arah berpikir", "Kepastian", "Contoh AI"],
                rows: [
                    ["Deduktif", "Aturan ke kasus", "Tinggi jika premis benar", "Compliance pajak, validasi policy"],
                    ["Induktif", "Observasi ke pola", "Probabilistik", "Prediksi churn, klasifikasi gambar"],
                    ["Abduktif", "Bukti parsial ke hipotesis", "Hipotesis terbaik", "Triage medis, deteksi anomali"],
                    ["Kausal", "Intervensi dan counterfactual", "Sebab-akibat yang diuji", "Eksperimen produk, analisis dampak"]
                ]
            },
            quickCheck: {
                question: "AI melihat keterlambatan kapal dan pembelian asuransi laut naik bersamaan, lalu menyimpulkan keterlambatan kapal menyebabkan pembelian asuransi. Masalah utamanya apa?",
                options: [
                    "AI memakai deduksi terlalu ketat.",
                    "AI mungkin mengabaikan confounder seperti badai besar yang memengaruhi keduanya.",
                    "AI menggunakan terlalu banyak data counterfactual."
                ],
                answer: 1,
                explanation: "Kenaikan bersamaan belum membuktikan sebab-akibat. Bisa ada faktor ketiga yang menyebabkan dua peristiwa muncul bersamaan."
            },
            challenge: "Pilih satu klaim data di sekitar kamu, misalnya belajar online meningkatkan nilai. Tulis versi induktifnya, versi abduktifnya, dan pertanyaan kausal yang perlu dijawab sebelum mengambil keputusan.",
            mistakes: [
                "Memperlakukan prediksi induktif sebagai kepastian deduktif.",
                "Melupakan confounder karena grafik terlihat meyakinkan.",
                "Meminta AI membuat rekomendasi kebijakan tanpa mendefinisikan intervensi yang diuji."
            ],
            summary: "Tidak semua masalah memakai logika yang sama. Deduksi mencari kepastian, induksi mencari pola, abduksi mencari hipotesis terbaik, dan kausalitas mencari dampak intervensi."
        },
        {
            title: "Reasoning Internal LLM: CoT, ToT, Scratchpad, dan Native Reasoner",
            shortTitle: "Reasoning Internal",
            duration: "35 menit",
            icon: "fas fa-diagram-project",
            sourcePath: SOURCE_BASE + "03-full.html",
            summary: "Membedah cara LLM memecah masalah di waktu inferensi melalui langkah linear, eksplorasi cabang, memori kerja, dan model reasoning-native.",
            objectives: [
                "Menjelaskan Chain-of-Thought, Tree of Thoughts, scratchpad, dan test-time compute.",
                "Membedakan kapan reasoning eksplisit membantu dan kapan justru membebani.",
                "Merancang prompt yang memisahkan proses analisis dari jawaban akhir."
            ],
            concepts: [
                ["Zero-shot", "Model langsung menjawab tanpa struktur perantara. Cepat, tetapi rentan pada masalah multi-langkah."],
                ["Chain-of-Thought", "Masalah dipecah linear menjadi langkah kecil agar error tidak menumpuk."],
                ["Tree of Thoughts", "Model mengeksplorasi beberapa cabang solusi, mengevaluasi, lalu memilih rute terbaik."],
                ["Scratchpad", "Ruang kerja sementara untuk hitungan, variabel, dan draft sebelum jawaban final."],
                ["Native reasoner", "Model yang dilatih agar memakai komputasi inferensi lebih dalam untuk refleksi dan self-correction."]
            ],
            flow: [
                ["Zero-shot", "Cepat untuk fakta sederhana"],
                ["CoT", "Satu jalur langkah"],
                ["ToT", "Banyak cabang solusi"],
                ["Self-check", "Deteksi dan perbaiki error"],
                ["Final", "Jawaban ringkas untuk user"]
            ],
            analogy: "Mengalikan 789 x 456 dalam dua detik membuat orang menebak. Dengan kertas coretan, ia bisa memecah perkalian, menjumlahkan parsial, dan memeriksa hasil.",
            llmExample: "Untuk puzzle 'A lebih tinggi dari B, C lebih pendek dari B', model yang baik menandai relasi A > B dan B > C, lalu menyimpulkan A paling tinggi. Model yang buruk menebak dari pola bahasa.",
            prompt: [
                "Gunakan ruang analisis internal untuk memeriksa relasi dan batasan.",
                "Jangan tampilkan seluruh jejak berpikir mentah.",
                "Tampilkan hanya: asumsi penting, langkah verifikasi ringkas, jawaban final, dan confidence.",
                "Jika data tidak cukup, sebutkan data yang perlu dikonfirmasi."
            ],
            table: {
                headers: ["Mekanisme", "Bentuk", "Kapan dipakai"],
                rows: [
                    ["Zero-shot", "Langsung", "Fakta sederhana, transformasi format"],
                    ["CoT", "Linear", "Aritmetika, logika urutan, checklist audit"],
                    ["ToT", "Bercabang", "Strategi, desain, puzzle, rute alternatif"],
                    ["Scratchpad", "Memori kerja", "Hitungan, parsing dokumen, draft teknis"],
                    ["Native reasoner", "Self-correction laten", "STEM, coding, high-stakes analysis"]
                ]
            },
            quickCheck: {
                question: "Mana yang paling menggambarkan Tree of Thoughts?",
                options: [
                    "Satu penjelasan linear dari awal sampai akhir.",
                    "Beberapa cabang solusi dibuat, dievaluasi, lalu cabang lemah dibuang.",
                    "Model menyalin teks dari mesin pencari tanpa evaluasi."
                ],
                answer: 1,
                explanation: "Tree of Thoughts memakai eksplorasi alternatif dan evaluasi cabang, bukan satu jalur linear saja."
            },
            challenge: "Buat 3 langkah reasoning untuk teka-teki: Lemari A lebih tinggi dari Lemari B. Lemari C lebih pendek dari Lemari B. Unit mana paling tinggi? Tulis relasi, bandingkan, lalu simpulkan.",
            mistakes: [
                "Memaksa CoT panjang untuk pertanyaan trivial sehingga membuang token dan memperlambat UI.",
                "Menganggap penjelasan panjang pasti benar.",
                "Membocorkan scratchpad mentah pada end-user padahal yang dibutuhkan hanya ringkasan verifikasi."
            ],
            summary: "Reasoning internal bukan sekadar menambahkan kalimat 'berpikir langkah demi langkah'. Praktiknya adalah mengatur kapan model perlu ruang kerja, cabang alternatif, self-check, dan output final yang bersih."
        },
        {
            title: "Reasoning Eksternal: Planning, ReAct, dan Tool Use",
            shortTitle: "ReAct & Tool Use",
            duration: "40 menit",
            icon: "fas fa-screwdriver-wrench",
            sourcePath: SOURCE_BASE + "04-full.html",
            summary: "Menghubungkan reasoning LLM dengan action nyata: pencarian, kalkulator, database, API, sandbox, dan feedback environment.",
            objectives: [
                "Menjelaskan loop Thought, Action, Observation pada ReAct.",
                "Mendesain dekomposisi tugas yang realistis untuk agen AI.",
                "Menentukan kapan model harus memakai tool dan kapan cukup bernalar internal."
            ],
            concepts: [
                ["Planning", "Mengubah tujuan besar menjadi subtugas, dependency, urutan, dan kriteria selesai."],
                ["Action", "Pemanggilan tool seperti search, calculator, database, file parser, atau API."],
                ["Observation", "Hasil tool yang dipakai model untuk memperbarui rencana."],
                ["Tool schema", "Deskripsi nama fungsi, parameter, batasan, dan output agar model tidak salah panggil."]
            ],
            flow: [
                ["Thought", "Apa gap informasinya?"],
                ["Action", "Tool mana yang relevan?"],
                ["Observation", "Apa hasilnya?"],
                ["Update", "Rencana berubah atau lanjut?"],
                ["Finish", "Jawab dengan sumber dan batasan"]
            ],
            analogy: "Membangun gedung tidak dimulai dengan instruksi 'dirikan gedung'. Tim membuat blueprint, mengecek tanah, memakai alat berat, memeriksa hasil, lalu lanjut ke tahap berikutnya.",
            llmExample: "Pertanyaan 'akar kuadrat populasi Tokyo saat ini' tidak aman dijawab dari memori model. Agen perlu mencari data terbaru, mengamati angka, memanggil kalkulator, lalu menjelaskan tanggal dan sumber data.",
            prompt: [
                "Task: cek apakah besok hujan deras di Shinjuku dan kirim pengingat jika perlu.",
                "Thought: tentukan data cuaca yang dibutuhkan.",
                "Action: panggil weather_api(location='Shinjuku', date='tomorrow').",
                "Observation: baca probabilitas hujan dan intensitas.",
                "Thought: jika intensitas tinggi, panggil telegram_webhook dengan pesan ringkas."
            ],
            table: {
                headers: ["Fase", "Pertanyaan kontrol", "Risiko jika buruk"],
                rows: [
                    ["Thought", "Apa yang belum diketahui?", "Model menebak dari memori"],
                    ["Action", "Tool apa yang tepat?", "API salah, parameter kacau"],
                    ["Observation", "Apa hasil tool?", "Data baru tidak dipakai"],
                    ["Update", "Apakah rencana berubah?", "Loop buntu atau tindakan berulang"],
                    ["Finish", "Apa jawaban final?", "Tidak ada sumber atau batasan"]
                ]
            },
            quickCheck: {
                question: "Dalam ReAct, fase mana yang mengevaluasi hasil tool untuk menentukan langkah berikutnya?",
                options: ["Action", "Observation mentah saja", "Thought setelah observation"],
                answer: 2,
                explanation: "Observation adalah data balik. Thought berikutnya yang menafsirkan data itu dan mengubah rencana."
            },
            challenge: "Rancang loop ReAct untuk asisten yang mengecek stok tiket, membandingkan harga, lalu membuat rekomendasi rute. Tulis Thought 1, Action 1, Observation 1, Thought 2.",
            mistakes: [
                "Memakai tool untuk hal trivial seperti 25 + 7.",
                "Mengulang panggilan tool yang sama saat error tanpa strategi fallback.",
                "Mendeskripsikan tool schema terlalu ambigu sehingga model salah mengisi parameter."
            ],
            summary: "Tool use membuat AI tidak terkurung knowledge cutoff, tetapi juga menambah risiko. Agen yang baik punya rencana, batas loop, schema jelas, dan verifikasi hasil tool."
        },
        {
            title: "Evaluasi, Risiko, dan Arsitektur Verifikasi Reasoning",
            shortTitle: "Evaluasi & Risiko",
            duration: "40 menit",
            icon: "fas fa-shield-halved",
            sourcePath: SOURCE_BASE + "05-full.html",
            summary: "Mengukur kualitas reasoning, mengenali halusinasi logika, dan merancang mekanisme self-checking untuk produk nyata.",
            objectives: [
                "Menilai reasoning bukan dari kefasihan, tetapi dari premis, langkah, bukti, dan hasil.",
                "Membedakan false premise, circular reasoning, overconfidence, dan grounding failure.",
                "Mendesain lapisan verifikasi untuk sistem AI berisiko sedang sampai tinggi."
            ],
            concepts: [
                ["Benchmark reasoning", "GSM8K, MATH, atau evaluasi internal yang menguji masalah multi-langkah."],
                ["False premise", "Kesimpulan dibangun rapi di atas fakta awal yang salah."],
                ["Circular reasoning", "Model membuktikan klaim dengan kalimat yang ia hasilkan sendiri."],
                ["Cross-check", "Model, tool, atau manusia lain mengaudit hasil sebelum dipakai."]
            ],
            flow: [
                ["Draft", "AI membuat solusi awal"],
                ["Ground", "Cek fakta ke sumber/tool"],
                ["Audit", "Cari premis salah dan lompatan logika"],
                ["Revise", "Perbaiki atau turunkan confidence"],
                ["Approve", "Human review untuk risiko tinggi"]
            ],
            analogy: "Bangunan bisa dihitung dengan rumus struktur yang benar, tetapi tetap runtuh jika fondasinya ditanam di tanah rawa. Reasoning yang rapi tidak berguna jika premis awal salah.",
            llmExample: "Dalam dokumen hukum, AI dapat mengarang nama kasus yang terdengar valid. Formatnya meyakinkan, tetapi grounding gagal. Sistem produksi harus mengecek rujukan ke database legal sebelum jawaban keluar.",
            prompt: [
                "Peran: auditor reasoning independen.",
                "Periksa jawaban berikut berdasarkan 5 kriteria: premis, bukti, urutan langkah, alternatif, dan batasan.",
                "Tandai klaim yang tidak punya sumber.",
                "Berikan revisi final dengan tingkat confidence dan kebutuhan human review."
            ],
            table: {
                headers: ["Risiko", "Gejala", "Mitigasi"],
                rows: [
                    ["False premise", "Jawaban rapi tetapi fakta awal salah", "RAG, source check, data validation"],
                    ["Circular reasoning", "Klaim dibuktikan oleh klaim sendiri", "Auditor independen dan bukti eksternal"],
                    ["Overconfidence", "Nada pasti tanpa basis cukup", "Confidence calibration dan fallback"],
                    ["Tool error", "Hasil API salah dibaca", "Schema ketat, retry terbatas, log observasi"],
                    ["Bias induktif", "Pola historis dijadikan aturan", "Causal review dan fairness check"]
                ]
            },
            quickCheck: {
                question: "Apa tanda false premise dalam reasoning AI?",
                options: [
                    "Model memakai kalimat pendek.",
                    "Langkah terlihat logis, tetapi fakta awal yang dipakai tidak benar atau tidak terverifikasi.",
                    "Model meminta klarifikasi sebelum menjawab."
                ],
                answer: 1,
                explanation: "False premise membuat seluruh rantai kesimpulan tercemar walaupun langkah setelahnya tampak rapi."
            },
            challenge: "Ambil satu jawaban AI yang pernah kamu terima. Audit dengan rubrik: premis, sumber, asumsi, langkah, alternatif, dan confidence. Tulis keputusan: pakai, revisi, atau tolak.",
            mistakes: [
                "Menilai reasoning dari panjang jawaban, bukan validitas langkah.",
                "Tidak menyimpan trace tool sehingga kesalahan tidak bisa diaudit.",
                "Tidak melibatkan manusia pada keputusan medis, hukum, finansial, atau keselamatan."
            ],
            summary: "Reasoning yang siap produksi harus dapat diuji. Produk AI perlu benchmark, grounding, auditor, batas confidence, dan jalur human-in-the-loop untuk kasus berisiko."
        }
    ];

    const PRACTICES = [
        {
            id: "system-triage",
            title: "Triase System 1 vs System 2",
            focus: "Chapter 1",
            prompt: "Skenario: peserta meminta AI membuat jadwal belajar 7 hari, maksimal 2 jam per hari, fokus machine learning, tetapi level peserta belum jelas. Tuliskan bagian yang bisa dijawab cepat dan bagian yang perlu reasoning terstruktur.",
            fields: [
                ["intuition", "Bagian System 1 atau respons cepat"],
                ["analysis", "Bagian System 2 yang perlu data, asumsi, dan langkah"],
                ["verification", "Cara memeriksa jawaban sebelum diberikan"]
            ],
            guide: "Jawaban kuat menyebut batas durasi, fokus materi, asumsi level peserta, dan opsi klarifikasi atau skenario pemula/menengah."
        },
        {
            id: "reasoning-type",
            title: "Klasifikasi Jenis Penalaran",
            focus: "Chapter 2",
            prompt: "Skenario: data menunjukkan pelanggan yang memakai fitur reminder lebih sering memperpanjang langganan. Tentukan bagian induktif, kemungkinan confounder, dan pertanyaan kausal sebelum membuat rekomendasi produk.",
            fields: [
                ["inductive", "Kesimpulan induktif yang boleh dibuat"],
                ["confounder", "Minimal tiga confounder yang mungkin"],
                ["causal", "Eksperimen atau counterfactual yang perlu diuji"]
            ],
            guide: "Jangan langsung menyimpulkan reminder menyebabkan retensi. Pertimbangkan segmentasi pengguna aktif, onboarding, harga, dan kualitas akun."
        },
        {
            id: "scratchpad-design",
            title: "Desain Scratchpad Aman",
            focus: "Chapter 3",
            prompt: "Skenario: AI tutor harus membantu siswa menyelesaikan soal matematika tanpa membocorkan semua chain-of-thought mentah. Rancang format output yang tetap pedagogis dan aman.",
            fields: [
                ["internal", "Apa yang boleh masuk ruang kerja internal"],
                ["visible", "Apa yang ditampilkan ke siswa"],
                ["guardrail", "Batasan agar AI tidak over-explain atau mengarang"]
            ],
            guide: "Output ideal menampilkan petunjuk, langkah verifikasi ringkas, dan jawaban akhir, bukan seluruh jejak reasoning mentah."
        },
        {
            id: "react-loop",
            title: "Loop ReAct untuk Data Terbaru",
            focus: "Chapter 4",
            prompt: "Skenario: asisten operasional perlu mengecek cuaca besok dan mengirim pengingat jika hujan deras. Tulis satu loop Thought, Action, Observation, Update, Finish.",
            fields: [
                ["thought", "Thought awal dan gap informasi"],
                ["action", "Tool dan parameter yang dipanggil"],
                ["observation", "Bagaimana hasil tool dipakai untuk update rencana"]
            ],
            guide: "Jawaban kuat menyebut API cuaca, threshold hujan, fallback jika API error, dan tindakan akhir yang tidak berlebihan."
        },
        {
            id: "verification",
            title: "Audit False Premise",
            focus: "Chapter 5",
            prompt: "Skenario: AI legal assistant menyebut tiga preseden hukum yang terdengar valid, tetapi belum ada link sumber. Buat rencana verifikasi sebelum jawaban dipakai.",
            fields: [
                ["premise", "Premis atau klaim yang harus dicek"],
                ["source", "Sumber atau tool validasi yang dibutuhkan"],
                ["decision", "Kapan jawaban boleh dipakai, direvisi, atau ditolak"]
            ],
            guide: "Untuk domain hukum, jawaban tidak boleh dipakai sebelum preseden diverifikasi ke database legal atau ahli manusia."
        },
        {
            id: "product-architecture",
            title: "Arsitektur Reasoning untuk Produk HerAI",
            focus: "Integrasi",
            prompt: "Rancang alur reasoning untuk fitur assistant peserta yang menjawab pertanyaan materi course. Tentukan kapan memakai retrieval, kapan memakai kalkulator/tool, kapan meminta klarifikasi, dan kapan human review.",
            fields: [
                ["flow", "Alur utama dari pertanyaan sampai jawaban"],
                ["tools", "Tool yang boleh dipakai dan batasannya"],
                ["risk", "Risiko dan mitigasi"]
            ],
            guide: "Alur matang punya retrieval dokumen course, citation/source check, batas confidence, dan fallback ke mentor untuk pertanyaan sensitif."
        }
    ];

    const QUIZ = [
        ["Apa perbedaan utama pattern matching dan reasoning?", ["Pattern matching selalu salah, reasoning selalu benar.", "Pattern matching mengandalkan asosiasi pola; reasoning menghubungkan premis, batasan, dan langkah yang dapat diperiksa.", "Pattern matching hanya dipakai manusia.", "Reasoning tidak membutuhkan data."], 1, "Reasoning tetap bisa salah, tetapi ia memberi struktur pemeriksaan yang lebih jelas daripada respons pola semata."],
        ["Tugas mana yang paling membutuhkan System 2?", ["Mengubah huruf kecil menjadi huruf besar.", "Menerjemahkan sapaan umum.", "Mengevaluasi rencana anggaran dengan beberapa batasan dan risiko.", "Menjawab nama ibukota yang umum diketahui."], 2, "Masalah multi-batasan memerlukan langkah, asumsi, dan verifikasi."],
        ["Penalaran deduktif bergerak dari...", ["Aturan umum ke kasus spesifik.", "Observasi acak ke dugaan umum.", "Gejala parsial ke hipotesis terbaik.", "Intervensi ke counterfactual."], 0, "Deduksi menghasilkan kesimpulan pasti bila premisnya benar."],
        ["Induksi paling tepat untuk...", ["Membuktikan kepatuhan berdasarkan aturan eksplisit.", "Membuat pola umum dari data historis.", "Memastikan satu faktor menyebabkan faktor lain.", "Menghapus kebutuhan validasi."], 1, "Induksi adalah dasar banyak model prediktif, tetapi hasilnya probabilistik."],
        ["Abduksi berguna ketika...", ["Semua premis dan aturan sudah lengkap.", "Data parsial tersedia dan sistem perlu memilih hipotesis paling masuk akal.", "Kita hanya ingin mengganti format teks.", "Tidak ada observasi apa pun."], 1, "Abduksi sering dipakai dalam diagnosis awal atau investigasi."],
        ["Kesalahan korelasi vs kausalitas terjadi ketika AI...", ["Memakai terlalu banyak sumber.", "Menganggap dua pola yang naik bersamaan pasti saling menyebabkan.", "Meminta klarifikasi.", "Menolak menjawab tanpa data."], 1, "Korelasi tidak membuktikan mekanisme sebab-akibat."],
        ["Chain-of-Thought paling cocok untuk...", ["Masalah yang perlu langkah linear dan pemeriksaan antar tahap.", "Pertanyaan salam.", "Menghapus semua kebutuhan validasi.", "Menyalin teks eksternal."], 0, "CoT membantu pada matematika, logika urutan, dan analisis multi-langkah."],
        ["Tree of Thoughts berbeda dari CoT karena...", ["ToT tidak punya langkah.", "ToT mengeksplorasi beberapa cabang solusi dan mengevaluasinya.", "ToT hanya untuk terjemahan.", "ToT selalu memakai database."], 1, "ToT memberi ruang alternatif dan backtracking."],
        ["Untuk native reasoner, prompt yang baik biasanya fokus pada...", ["Menggurui model agar selalu berpikir langkah demi langkah.", "Memperjelas masalah, batasan, output, dan kriteria verifikasi.", "Menyembunyikan semua konteks.", "Memaksa jawaban satu kata untuk semua tugas."], 1, "Model reasoning-native sudah punya mekanisme berpikir; prompt perlu mengatur konteks dan hasil."],
        ["Fase Action dalam ReAct berarti...", ["Menafsirkan hasil tool.", "Memanggil tool atau fungsi dengan parameter tertentu.", "Membuat kesimpulan final tanpa data.", "Menyimpan skor kuis."], 1, "Action adalah tindakan operasional seperti search, API, kalkulator, atau database call."],
        ["Tool schema buruk berisiko membuat agen...", ["Lebih aman otomatis.", "Salah memilih fungsi atau salah mengisi parameter.", "Tidak membutuhkan fallback.", "Selalu lebih cepat."], 1, "Deskripsi tool harus jelas agar model bisa memanggil fungsi dengan benar."],
        ["Kapan AI sebaiknya memakai tool eksternal?", ["Saat membutuhkan data terbaru, perhitungan presisi, sumber terverifikasi, atau aksi sistem.", "Untuk semua pertanyaan termasuk salam.", "Hanya saat user memakai huruf kapital.", "Tidak pernah."], 0, "Tool dipakai saat reasoning internal tidak cukup atau butuh grounding eksternal."],
        ["False premise berarti...", ["Premis awal salah, sehingga rantai logika setelahnya ikut tercemar.", "Jawaban terlalu pendek.", "Model memakai ikon FontAwesome.", "User belum membuka kuis."], 0, "Reasoning rapi tetap gagal jika fondasinya salah."],
        ["Circular reasoning pada AI terjadi ketika...", ["Model meminta sumber.", "Model membuktikan klaim memakai klaim atau kalimat buatannya sendiri.", "Model menghitung dengan kalkulator.", "Model menolak domain risiko tinggi."], 1, "Circular reasoning tidak memakai bukti independen."],
        ["Mitigasi terbaik untuk halusinasi rujukan hukum adalah...", ["Percaya karena formatnya rapi.", "Mengecek preseden ke sumber legal valid atau human expert sebelum dipakai.", "Menghapus semua citation.", "Minta AI menulis lebih panjang."], 1, "Domain hukum membutuhkan grounding dan review manusia."]
    ];

    const DISCUSSION_PROMPTS = [
        "Jika AI dapat berpikir langkah demi langkah tetapi tetap bisa halusinasi, apakah Anda lebih percaya pada model yang cepat namun tidak menjelaskan prosesnya, atau model yang lambat tetapi transparan? Jelaskan trade-off antara kecepatan, kepercayaan, dan risiko over-explanation.",
        "Bagaimana seharusnya produk HerAI menampilkan reasoning AI kepada peserta: ringkasan verifikasi, sumber eksternal, atau seluruh langkah berpikir? Jelaskan batas yang menurut Anda paling sehat.",
        "Tool apa yang aman diberikan ke assistant peserta HerAI, dan tool apa yang wajib butuh approval manusia sebelum dijalankan?",
        "Bagaimana cara mendesain AI tutor yang membantu siswa berpikir tanpa langsung memberikan semua jawaban?",
        "Di domain hukum, medis, atau finansial, batas minimum verifikasi reasoning AI seharusnya seperti apa?",
        "Ketika AI membuat rencana multi-langkah, bagian mana yang harus otomatis dan bagian mana yang harus tetap diputuskan manusia?"
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
        return `<div class="reasoning-code-block"><div><i class="fas fa-terminal"></i><span>Prompt Pattern</span></div><pre><code>${escapeHtml(lines.join("\n"))}</code></pre></div>`;
    }

    function renderSourcePanel(containerId, label) {
        return `<section class="reasoning-source-panel">
            <div class="reasoning-source-panel-head">
                <i class="fas fa-file-lines" aria-hidden="true"></i>
                <div>
                    <span>Sumber utuh</span>
                    <h3>${escapeHtml(label)}</h3>
                    <p>Teks di bawah ini dirender langsung dari <code>materi/baru/Reasoning-baru.md</code> tanpa dikurangi.</p>
                </div>
            </div>
            <div id="${escapeHtml(containerId)}" class="reasoning-source-container">
                <p class="reasoning-source-loading"><i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Memuat materi sumber...</p>
            </div>
        </section>`;
    }

    const SOURCE_VISUALS = {
        "01-full.html": {
            eyebrow: "Cognitive mode switch",
            title: "Kapan AI perlu cepat, kapan perlu berhenti dan menalar?",
            options: [
                ["System 1", "fas fa-bolt", "Respons instan", "Pencocokan pola, heuristik, bahasa, dan asosiasi statistik.", "Terjemahan sapaan, ringkasan sederhana, klasifikasi permukaan."],
                ["System 2", "fas fa-list-check", "Analisis terstruktur", "Premis, batasan, langkah, pemeriksaan, lalu kesimpulan.", "Matematika, planning, diagnosis, audit, dan keputusan berisiko."],
                ["Neural-Simbolik", "fas fa-circle-nodes", "Gabungan modern", "Fleksibilitas jaringan saraf dipadukan dengan aturan yang dapat diperiksa.", "Sistem yang harus adaptif sekaligus dapat diaudit."]
            ]
        },
        "02-full.html": {
            eyebrow: "Reasoning compass",
            title: "Pilih arah logika sesuai bentuk masalah",
            options: [
                ["Deduktif", "fas fa-arrow-down", "Aturan ke kasus", "Jika premis benar, kesimpulan bersifat pasti.", "Compliance, validasi kebijakan, dan sistem pakar."],
                ["Induktif", "fas fa-arrow-up", "Data ke pola", "Kesimpulan probabilistik dibangun dari observasi.", "Prediksi tren dan klasifikasi machine learning."],
                ["Abduktif", "fas fa-magnifying-glass", "Bukti ke hipotesis", "Mencari penjelasan terbaik dari data yang belum lengkap.", "Diagnosis awal dan investigasi anomali."],
                ["Kausal", "fas fa-code-branch", "Intervensi ke dampak", "Membedakan korelasi, confounder, sebab, dan counterfactual.", "Eksperimen produk dan keputusan kebijakan."]
            ]
        },
        "03-full.html": {
            eyebrow: "Inference strategy explorer",
            title: "Lihat bagaimana jalur solusi berkembang",
            options: [
                ["Zero-shot", "fas fa-forward", "Langsung", "Model melompat dari pertanyaan ke jawaban tanpa struktur perantara.", "Cepat untuk tugas sempit, rentan pada masalah multi-langkah."],
                ["Chain-of-Thought", "fas fa-link", "Jalur linear", "Masalah diurai menjadi langkah kecil yang saling mengikuti.", "Aritmetika, urutan logis, dan audit prosedural."],
                ["Tree of Thoughts", "fas fa-diagram-project", "Jalur bercabang", "Beberapa rute diuji, dinilai, dan dapat di-backtrack.", "Strategi kompleks dan ruang solusi dengan banyak alternatif."],
                ["Native Reasoner", "fas fa-microchip", "Self-correction", "Test-time compute memberi ruang pencarian dan koreksi internal.", "STEM, coding, dan analisis dengan batasan kompleks."]
            ]
        },
        "04-full.html": {
            eyebrow: "ReAct control loop",
            title: "Reasoning menjadi tindakan yang terhubung ke dunia nyata",
            options: [
                ["Thought", "fas fa-brain", "Identifikasi gap", "Agen menentukan informasi atau langkah yang masih dibutuhkan.", "Belum ada aksi eksternal pada fase ini."],
                ["Action", "fas fa-wrench", "Panggil alat", "Agen memilih fungsi dan menyusun parameter yang tepat.", "API, kalkulator, database, pencarian, atau skrip."],
                ["Observation", "fas fa-eye", "Baca hasil", "Data atau error dari alat masuk kembali ke konteks agen.", "Hasil ini menjadi dasar iterasi berikutnya."],
                ["Finish", "fas fa-flag-checkered", "Sintesis", "Agen berhenti ketika bukti cukup dan menyusun keluaran akhir.", "Kesimpulan harus tetap terikat pada observasi."]
            ]
        },
        "05-full.html": {
            eyebrow: "Verification gate",
            title: "Jangan izinkan jawaban melewati gerbang tanpa bukti",
            options: [
                ["Premise", "fas fa-layer-group", "Periksa fondasi", "Validasi data awal sebelum menilai keruntutan langkah.", "Premis palsu membuat reasoning rapi tetap salah."],
                ["Process", "fas fa-route", "Audit jalur", "Cari lompatan logika, bias, dan pembuktian melingkar.", "Gunakan evaluator independen bila risikonya tinggi."],
                ["Evidence", "fas fa-link", "Grounding eksternal", "Hubungkan klaim dengan sumber atau alat yang dapat diverifikasi.", "Klaim buatan model bukan bukti independen."],
                ["Approval", "fas fa-user-check", "Human in the Loop", "Tindakan kritis berhenti sampai manusia memberi otorisasi.", "Wajib untuk medis, legal, finansial, dan aksi destruktif."]
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

    function enhanceSourceMaterial(container, path) {
        const material = container.querySelector(".reasoning-source-material");
        if (!material) return;
        const config = SOURCE_VISUALS[getSourceFile(path)];
        const headings = Array.from(material.querySelectorAll("h2, h3, h4"));
        const toolbar = document.createElement("div");
        toolbar.className = "reasoning-source-toolbar";
        toolbar.innerHTML = `<div class="reasoning-view-toggle" aria-label="Mode tampilan materi">
                <button type="button" class="is-active" data-source-view="visual"><i class="fas fa-shapes" aria-hidden="true"></i>Visual</button>
                <button type="button" data-source-view="source"><i class="fas fa-align-left" aria-hidden="true"></i>Source</button>
            </div>
            <div class="reasoning-source-jumps" aria-label="Navigasi bagian"></div>`;
        container.insertBefore(toolbar, material);

        const jumps = toolbar.querySelector(".reasoning-source-jumps");
        headings.slice(0, 12).forEach(function (heading, index) {
            const id = "reasoning-source-section-" + index + "-" + getSourceFile(path).replace(/\W/g, "-");
            heading.id = id;
            const button = document.createElement("button");
            button.type = "button";
            button.textContent = heading.textContent.replace(/^\d+\.?\s*/, "").trim();
            button.addEventListener("click", function () {
                heading.scrollIntoView({ behavior: "smooth", block: "start" });
            });
            jumps.appendChild(button);
        });

        material.classList.add("is-visual-view");
        Array.from(material.children).forEach(function (element, index) {
            if (element.matches("p")) {
                const isLabelled = Boolean(element.querySelector(":scope > strong:first-child"));
                structureSourceParagraph(element);
                element.classList.add("reasoning-source-step");
                element.style.setProperty("--source-step", '"' + String(index + 1).padStart(2, "0") + '"');
                if (isLabelled) element.classList.add("is-labelled");
                if (/^\s*\[(?:image|ref)/i.test(element.textContent)) element.classList.add("is-technical-attachment");
            }
            if (element.matches("ol, ul")) element.classList.add("reasoning-source-list-board");
            if (element.matches("h2, h3, h4")) element.classList.add("reasoning-source-milestone");
        });
        material.querySelectorAll("table").forEach(function (table) {
            table.classList.add("reasoning-source-matrix");
            if (!table.parentElement.classList.contains("reasoning-source-table-scroll")) {
                const scroll = document.createElement("div");
                scroll.className = "reasoning-source-table-scroll";
                table.parentNode.insertBefore(scroll, table);
                scroll.appendChild(table);
            }
            table.querySelectorAll("tbody tr").forEach(function (row) {
                row.tabIndex = 0;
            });
        });

        toolbar.querySelectorAll("[data-source-view]").forEach(function (button) {
            button.addEventListener("click", function () {
                const visual = button.dataset.sourceView === "visual";
                material.classList.toggle("is-visual-view", visual);
                material.classList.toggle("is-source-view", !visual);
                toolbar.querySelectorAll("[data-source-view]").forEach(function (item) {
                    item.classList.toggle("is-active", item === button);
                });
            });
        });

        if (config) {
            toolbar.insertAdjacentHTML("afterend", renderSourceVisualLab(config));
            initSourceVisualLab(container, config);
        }
    }

    function loadSourceHtml(path, containerId) {
        const container = document.getElementById(containerId);
        if (!container || !path) return;
        fetch(path, { cache: "no-store" })
            .then(function (response) {
                if (!response.ok) throw new Error("Gagal memuat " + path);
                return response.text();
            })
            .then(function (html) {
                container.innerHTML = html;
                enhanceSourceMaterial(container, path);
            })
            .catch(function () {
                container.innerHTML = '<div class="reasoning-source-error"><i class="fas fa-triangle-exclamation" aria-hidden="true"></i><p>Materi sumber belum bisa dimuat. Refresh halaman atau cek path source Reasoning.</p></div>';
            });
    }

    function renderChapter(chapter, chapterNumber, total) {
        return `
            <section class="reasoning-scaffold-module-meta reasoning-final-meta">
                <div class="reasoning-scaffold-module-meta-head">
                    <i class="${escapeHtml(chapter.icon)}" aria-hidden="true"></i>
                    <div>
                        <span>Topik ${chapterNumber} dari ${total}</span>
                        <h2>${escapeHtml(chapter.title)}</h2>
                        <p>${escapeHtml(chapter.summary)}</p>
                    </div>
                </div>
                <div><strong>Durasi</strong><span>${escapeHtml(chapter.duration)}</span></div>
                <div><strong>Learning Objective</strong>${renderList(chapter.objectives)}</div>
            </section>

            <section class="reasoning-visual-board" aria-label="Visualisasi reasoning">
                <div class="reasoning-visual-head">
                    <i class="fas fa-route" aria-hidden="true"></i>
                    <div>
                        <span>Visual reasoning flow</span>
                        <h3>Alur pikir yang bisa dilacak</h3>
                    </div>
                </div>
                ${renderFlow(chapter.flow)}
            </section>

            <section class="reasoning-scaffold-grid">
                ${chapter.concepts.map(concept => `<article><i class="fas fa-circle-nodes" aria-hidden="true"></i><h3>${escapeHtml(concept[0])}</h3><p>${escapeHtml(concept[1])}</p></article>`).join("")}
            </section>

            <section class="reasoning-scaffold-callout">
                <i class="fas fa-lightbulb" aria-hidden="true"></i>
                <p><strong>Analogi:</strong> ${escapeHtml(chapter.analogy)}</p>
            </section>

            <section class="reasoning-scaffold-example">
                <span>Contoh AI/LLM</span>
                <h3>Bagaimana konsep ini muncul di produk AI</h3>
                <p>${escapeHtml(chapter.llmExample)}</p>
            </section>

            ${renderTable(chapter.table)}
            ${renderPrompt(chapter.prompt)}

            <section class="reasoning-quick-check" data-check-answer="${chapter.quickCheck.answer}">
                <div class="reasoning-quick-head"><i class="fas fa-circle-question" aria-hidden="true"></i><div><span>Quick Check</span><h3>${escapeHtml(chapter.quickCheck.question)}</h3></div></div>
                <div class="reasoning-check-options">
                    ${chapter.quickCheck.options.map((option, index) => `<button type="button" data-check-option="${index}"><b>${String.fromCharCode(65 + index)}</b><span>${escapeHtml(option)}</span></button>`).join("")}
                </div>
                <p class="reasoning-check-feedback" hidden>${escapeHtml(chapter.quickCheck.explanation)}</p>
            </section>

            <section class="reasoning-mini-challenge">
                <div><i class="fas fa-pen-ruler" aria-hidden="true"></i><span>Mini Challenge</span></div>
                <h3>Latihan reflektif singkat</h3>
                <p>${escapeHtml(chapter.challenge)}</p>
            </section>

            <section class="reasoning-scaffold-checklist">
                <h3><i class="fas fa-triangle-exclamation" aria-hidden="true"></i> Common mistakes</h3>
                ${renderList(chapter.mistakes)}
            </section>

            <section class="reasoning-scaffold-summary">
                <h3><i class="fas fa-bookmark" aria-hidden="true"></i> Ringkasan</h3>
                <p>${escapeHtml(chapter.summary)}</p>
            </section>

            ${renderSourcePanel("reasoning-source-container", "Materi lengkap chapter " + chapterNumber)}
        `;
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
        const total = CHAPTERS.length;
        const chapter = Math.min(Math.max(Number(chapterNumber) || 1, 1), total);
        const module = CHAPTERS[chapter - 1];
        const container = document.getElementById("reasoning-chapter-container");
        const btnPrev = document.getElementById("btn-prev-chapter");
        const btnNext = document.getElementById("btn-next-chapter");
        const btnFinish = document.getElementById("btn-finish-materi");
        if (!container || !module) return;

        localStorage.setItem(STORAGE.chapter, String(chapter));
        container.innerHTML = renderChapter(module, chapter, total);
        initQuickChecks(container);
        loadSourceHtml(module.sourcePath, "reasoning-source-container");

        if (btnPrev) btnPrev.style.display = chapter > 1 ? "inline-block" : "none";
        if (btnNext) btnNext.style.display = chapter < total ? "inline-block" : "none";
        if (btnFinish) btnFinish.style.display = chapter === total ? "inline-block" : "none";

        document.querySelectorAll("#reasoning-sidebar-list li").forEach(function (li) {
            const itemChapter = Number(li.dataset.chapter || "0");
            const icon = li.querySelector("i");
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
        return `<article class="reasoning-practice-card" data-practice-id="${escapeHtml(item.id)}">
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

        Object.entries(savedAnswers).forEach(function (entry) {
            const field = form.querySelector('[name="' + escapeSelector(entry[0]) + '"]');
            if (field) field.value = entry[1];
        });

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
            return `<article data-quiz-index="${index}">
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

        const savedDone = localStorage.getItem(STORAGE.quizDone) === "true";
        const savedAnswers = safeJsonParse(localStorage.getItem(STORAGE.quizAnswers), {});
        if (savedDone && Object.keys(savedAnswers).length === QUIZ.length) {
            const savedScore = Number(localStorage.getItem(STORAGE.quizScore)) || 0;
            renderQuizResult(savedScore, QUIZ.length, "Attempt sudah dipakai. Kuis single attempt, jadi jawaban, skor, dan pembahasan dikunci agar review tetap objektif.");
            lockQuiz(form, savedAnswers);
            return;
        }

        form.addEventListener("change", function (event) {
            const label = event.target.closest("label");
            if (!label) return;
            const article = label.closest("article");
            if (!article) return;
            article.querySelectorAll("label").forEach(item => item.classList.remove("is-selected"));
            label.classList.add("is-selected");
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const answers = getQuizAnswers(form);
            const unanswered = Object.values(answers).filter(value => !value).length;
            if (unanswered) {
                renderQuizResult(0, QUIZ.length, "Masih ada " + unanswered + " soal yang belum dijawab.");
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
