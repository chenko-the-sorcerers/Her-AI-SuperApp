(function () {
    const ACTIVITY_ORDER = ["materi", "latihan", "kuis", "diskusi"];
    const ACTIVITY_CONTENT = {
        materi: {
            title: "Materi scaffold siap diisi tim konten",
            copy: "Tab Materi menampilkan outline module/chapter awal. Saat course siap, ganti scaffold ini ke file course final atau lanjutkan dari struktur ini.",
            label: "Draft module/chapter",
            heading: "Outline materi awal"
        },
        latihan: {
            title: "Latihan belum final, tapi slot activity sudah disiapkan",
            copy: "Gunakan tab ini sebagai placeholder latihan agar struktur course konsisten tanpa mengirim peserta ke halaman under-development.",
            label: "Draft latihan",
            heading: "Rencana latihan"
        },
        kuis: {
            title: "Kuis belum final, tapi slot evaluasi sudah disiapkan",
            copy: "Tab ini menandai tempat kuis nanti dipasang. Route tetap berada di course scaffold supaya peserta tidak kehilangan konteks.",
            label: "Draft evaluasi",
            heading: "Rencana kuis"
        },
        diskusi: {
            title: "Diskusi belum final, tapi ruang activity sudah disiapkan",
            copy: "Tab ini menjaga pola Materi, Latihan, Kuis, Diskusi tetap lengkap sambil menunggu forum course final.",
            label: "Draft diskusi",
            heading: "Rencana diskusi"
        }
    };

    function slugify(value) {
        return String(value)
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    function makeModule(title, summary) {
        const slug = slugify(title);
        return {
            slug,
            title,
            summary,
            materi: `Draft materi untuk ${title}: konsep utama, istilah penting, contoh penerapan, dan checkpoint pemahaman.`,
            latihan: `Draft latihan untuk ${title}: skenario praktik terarah yang bisa dikerjakan peserta secara bertahap.`,
            kuis: `Draft kuis untuk ${title}: evaluasi singkat untuk menguji pemahaman konsep dan penerapan.`,
            diskusi: `Draft diskusi untuk ${title}: pertanyaan pemantik, refleksi, dan ruang tanya jawab dengan tim.`
        };
    }

    function modules(items) {
        return items.map(item => makeModule(item[0], item[1]));
    }

    function renderQuizQuestions(questions) {
        return `<div class="reasoning-scaffold-quiz">
            ${questions.map((question, index) => `
                <details>
                    <summary><span>${index + 1}</span>${escapeHtml(question.question)}</summary>
                    <ol type="A">
                        ${question.options.map(option => `<li>${escapeHtml(option)}</li>`).join("")}
                    </ol>
                    <div class="reasoning-scaffold-answer">
                        <strong>Jawaban: ${escapeHtml(question.answer)}</strong>
                        <p>${escapeHtml(question.explanation)}</p>
                    </div>
                </details>
            `).join("")}
        </div>`;
    }

    function renderDiscussionPrompt(topic, guides) {
        return `<div class="reasoning-scaffold-discussion">
            <i class="far fa-comments" aria-hidden="true"></i>
            <div>
                <span>Topik diskusi</span>
                <h3>${escapeHtml(topic)}</h3>
                <p>Gunakan pertanyaan berikut untuk menjaga diskusi tetap terarah:</p>
                <ul>${guides.map(guide => `<li>${escapeHtml(guide)}</li>`).join("")}</ul>
            </div>
        </div>`;
    }

    const REASONING_REFERENCES = `
        <section class="reasoning-scaffold-references" aria-labelledby="reasoning-references-title">
            <h3 id="reasoning-references-title">Referensi Singkat</h3>
            <ol>
                <li>Wang, L., dkk. (2023). <a href="https://arxiv.org/abs/2305.04091" target="_blank" rel="noopener noreferrer">Plan-and-Solve Prompting: Improving Zero-Shot Chain-of-Thought Reasoning by Large Language Models</a>. arXiv:2305.04091.</li>
                <li>Wei, J., dkk. (2022). <a href="https://arxiv.org/abs/2201.11903" target="_blank" rel="noopener noreferrer">Chain-of-Thought Prompting Elicits Reasoning in Large Language Models</a>. arXiv:2201.11903.</li>
                <li>Schick, T., dkk. (2023). <a href="https://arxiv.org/abs/2302.04761" target="_blank" rel="noopener noreferrer">Toolformer: Language Models Can Teach Themselves to Use Tools</a>. arXiv:2302.04761.</li>
                <li>Yao, S., dkk. (2022). <a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noopener noreferrer">ReAct: Synergizing Reasoning and Acting in Language Models</a>. arXiv:2210.03629.</li>
            </ol>
        </section>`;

    const REASONING_OVERVIEW = `
        <div class="reasoning-scaffold-overview">
            <section class="reasoning-scaffold-objectives">
                <div class="reasoning-scaffold-section-heading">
                    <i class="fas fa-bullseye" aria-hidden="true"></i>
                    <div><span>Tujuan pembelajaran</span><h3>Setelah menyelesaikan materi, peserta mampu:</h3></div>
                </div>
                <ol>
                    <li>Menjelaskan reasoning dalam konteks sistem AI.</li>
                    <li>Membedakan reasoning, planning, action, dan observation.</li>
                    <li>Memecah tujuan besar menjadi subtugas yang lebih kecil.</li>
                    <li>Menjelaskan Chain-of-Thought secara tepat beserta keterbatasannya.</li>
                    <li>Menentukan kapan AI perlu menggunakan tool.</li>
                    <li>Membaca alur Reason -> Plan -> Act -> Observe -> Answer.</li>
                    <li>Memeriksa keterbatasan jawaban, rencana, dan hasil tool AI.</li>
                </ol>
            </section>

            <section class="reasoning-scaffold-integrated">
                <div class="reasoning-scaffold-section-heading">
                    <i class="fas fa-arrows-to-circle" aria-hidden="true"></i>
                    <div><span>Gambaran besar</span><h3>Satu alur, enam tahap yang saling terhubung</h3></div>
                </div>
                <div class="reasoning-scaffold-flow" aria-label="Alur Reason, Plan, Act, Observe, Update, Answer">
                    <div><strong>Reason</strong><span>Memahami masalah dan informasi</span></div>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                    <div><strong>Plan</strong><span>Menentukan langkah</span></div>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                    <div><strong>Act</strong><span>Menjawab atau memakai tool</span></div>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                    <div><strong>Observe</strong><span>Membaca hasil tindakan</span></div>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                    <div><strong>Update</strong><span>Memperbaiki rencana</span></div>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                    <div><strong>Answer</strong><span>Memberikan hasil akhir</span></div>
                </div>
            </section>

            <section class="reasoning-scaffold-case">
                <span>Studi kasus terpadu</span>
                <h3>Apakah anggaran konsumsi cukup?</h3>
                <p><strong>Tugas:</strong> Berdasarkan data peserta di spreadsheet, tentukan apakah anggaran konsumsi cukup dan berikan rekomendasi.</p>
                <dl>
                    <div><dt>Reason</dt><dd>Data jumlah peserta dan biaya berada di spreadsheet.</dd></div>
                    <div><dt>Plan</dt><dd>Baca jumlah peserta dan biaya, hitung kebutuhan, bandingkan dengan anggaran, lalu periksa hasil.</dd></div>
                    <div><dt>Act</dt><dd>Gunakan spreadsheet atau Python untuk membaca dan menghitung data.</dd></div>
                    <div><dt>Observe</dt><dd>Tool mengembalikan data peserta dan hasil perhitungan.</dd></div>
                    <div><dt>Update</dt><dd>Periksa data kosong, format salah, atau biaya tambahan.</dd></div>
                    <div><dt>Answer</dt><dd>Sampaikan sisa atau kekurangan anggaran, asumsi, dan rekomendasi yang dapat ditindaklanjuti.</dd></div>
                </dl>
            </section>

            <section class="reasoning-scaffold-checklist">
                <h3><i class="fas fa-list-check" aria-hidden="true"></i> Checklist sebelum memberi jawaban</h3>
                <ul>
                    <li>Tujuan tugas sudah jelas.</li><li>Informasi relevan sudah ditemukan.</li>
                    <li>Asumsi sudah disebutkan.</li><li>Masalah sudah dipecah menjadi langkah.</li>
                    <li>Tool dipilih sesuai kebutuhan.</li><li>Parameter tool sudah benar.</li>
                    <li>Hasil tool dibaca dengan tepat.</li><li>Jawaban akhir sudah diperiksa.</li>
                </ul>
            </section>
            ${REASONING_REFERENCES}
        </div>`;

    const REASONING_MODULES = [
        {
            slug: "how-ai-reasons",
            title: "Bagaimana AI Melakukan Penalaran?",
            summary: "Memahami bagaimana AI menghubungkan instruksi, konteks, informasi yang tersedia, dan hasil sebelumnya untuk menentukan respons berikutnya.",
            materi: "Model mental reasoning AI: memahami tujuan, memilih informasi relevan, menentukan langkah, menjalankan langkah, memeriksa hasil, lalu menjawab.",
            latihan: "Klasifikasikan tahapan reasoning dan perbaiki jawaban AI yang memakai asumsi tanpa menyebutkannya.",
            kuis: "Empat soal tentang reasoning AI, fakta dan asumsi, pemeriksaan, serta keterbatasan jawaban yang terlihat runtut.",
            diskusi: "Bahas apakah jawaban yang runtut berarti AI benar-benar memahami masalah.",
            rich: {
                materi: `
                    <section class="reasoning-scaffold-prose">
                        <p class="reasoning-scaffold-lead">Dalam konteks large language model (LLM), reasoning tidak berarti AI berpikir persis seperti manusia. LLM menghasilkan token berdasarkan konteks dan pola yang dipelajari. Untuk tugas kompleks, model dapat menghasilkan langkah perantara yang membantu menyusun penyelesaian.</p>
                        <div class="reasoning-scaffold-flow reasoning-scaffold-flow--compact" aria-label="Tahapan penalaran AI">
                            <div><strong>Masalah</strong><span>Instruksi awal</span></div><i class="fas fa-arrow-right" aria-hidden="true"></i>
                            <div><strong>Tujuan</strong><span>Hasil yang diminta</span></div><i class="fas fa-arrow-right" aria-hidden="true"></i>
                            <div><strong>Informasi</strong><span>Fakta relevan</span></div><i class="fas fa-arrow-right" aria-hidden="true"></i>
                            <div><strong>Langkah</strong><span>Urutan penyelesaian</span></div><i class="fas fa-arrow-right" aria-hidden="true"></i>
                            <div><strong>Periksa</strong><span>Validasi hasil</span></div><i class="fas fa-arrow-right" aria-hidden="true"></i>
                            <div><strong>Jawaban</strong><span>Kesimpulan akhir</span></div>
                        </div>
                        <div class="reasoning-scaffold-grid reasoning-scaffold-grid--two">
                            <article><i class="fas fa-bullseye"></i><h3>Input dan tujuan</h3><p>Kenali apa yang diminta, hasil akhir, format jawaban, dan batasan tugas.</p></article>
                            <article><i class="fas fa-filter"></i><h3>Informasi relevan</h3><p>Pisahkan fakta, informasi yang tidak relevan, data yang belum tersedia, dan asumsi.</p></article>
                            <article><i class="fas fa-list-ol"></i><h3>Langkah penyelesaian</h3><p>Hubungkan informasi dengan tujuan, lalu pilih langkah yang dapat menghasilkan jawaban.</p></article>
                            <article><i class="fas fa-magnifying-glass-check"></i><h3>Pemeriksaan</h3><p>Pastikan tujuan dipahami, data benar, tidak ada langkah terlewat, dan kesimpulan mengikuti data.</p></article>
                        </div>
                        <section class="reasoning-scaffold-example">
                            <span>Contoh anggaran</span><h3>Menghitung konsumsi kegiatan</h3>
                            <p>Anggaran Rp3.000.000, peserta 60 orang, biaya konsumsi Rp35.000 per orang.</p>
                            <div class="reasoning-scaffold-calculation"><code>60 x Rp35.000 = Rp2.100.000</code><code>Rp3.000.000 - Rp2.100.000 = Rp900.000</code></div>
                            <p>Kesimpulan: anggaran konsumsi mencukupi dan tersisa Rp900.000, dengan asumsi tidak ada biaya konsumsi tambahan.</p>
                        </section>
                        <div class="reasoning-scaffold-callout"><i class="fas fa-triangle-exclamation"></i><p><strong>Penjelasan yang terdengar meyakinkan bukan bukti bahwa jawabannya benar.</strong> Jawaban tetap dapat salah karena pertanyaan disalahpahami, informasi tidak relevan dipakai, asumsi tidak disebutkan, langkah terlewat, atau perhitungan keliru.</p></div>
                    </section>`,
                latihan: `
                    <section class="reasoning-scaffold-exercises">
                        <article><span>Latihan 1</span><h3>Klasifikasikan tahapan reasoning</h3><p>Panitia memiliki tiga ruangan berkapasitas 25, 30, dan 40 orang untuk menempatkan 80 peserta.</p><p>Kelompokkan aktivitas berikut sebagai <strong>memahami tujuan, mengambil fakta, menentukan langkah, menjalankan langkah,</strong> atau <strong>memeriksa hasil</strong>:</p><ol><li>Mencatat kapasitas tiap ruangan.</li><li>Menentukan bahwa semua peserta harus mendapat tempat.</li><li>Menyusun kombinasi ruangan yang cukup.</li><li>Menjumlahkan kapasitas ruangan terpilih.</li><li>Memastikan kapasitas tidak kurang dari 80 dan kursi kosong tidak berlebihan.</li></ol></article>
                        <article><span>Latihan 2</span><h3>Temukan asumsi tersembunyi</h3><p>AI menjawab: "Gunakan ruangan 40 dan 30 orang karena pasti cukup untuk 80 peserta."</p><p>Perbaiki jawaban tersebut. Sebutkan kesalahan hitung, informasi yang masih perlu diketahui, dan asumsi yang boleh dipakai hanya jika dinyatakan dengan jelas.</p></article>
                    </section>`,
                kuis: renderQuizQuestions([
                    { question: "Apa arti reasoning dalam konteks sistem AI?", options: ["AI memiliki kesadaran seperti manusia", "Proses menghubungkan tujuan, konteks, informasi, dan langkah untuk menghasilkan respons", "Kemampuan menghafal semua jawaban", "Proses menjalankan tool tanpa tujuan"], answer: "B", explanation: "Reasoning membantu sistem menghubungkan informasi dengan tujuan dan langkah penyelesaian; ini bukan klaim bahwa AI berpikir seperti manusia." },
                    { question: "Manakah yang termasuk asumsi, bukan fakta?", options: ["Anggaran tertulis Rp3.000.000", "Jumlah peserta pada daftar adalah 60", "Semua peserta pasti hadir", "Harga konsumsi tertulis Rp35.000"], answer: "C", explanation: "Kehadiran penuh belum menjadi fakta jika tidak ada data konfirmasi; asumsi ini perlu disebutkan atau diverifikasi." },
                    { question: "Apa fungsi utama tahap pemeriksaan?", options: ["Membuat jawaban lebih panjang", "Memastikan data, langkah, dan kesimpulan saling sesuai", "Menghilangkan semua asumsi", "Mengganti tujuan pengguna"], answer: "B", explanation: "Pemeriksaan mencari salah tafsir, data keliru, langkah terlewat, dan kesimpulan yang tidak mengikuti hasil." },
                    { question: "Mengapa jawaban yang terlihat runtut belum tentu benar?", options: ["Karena semua langkah perantara selalu palsu", "Karena AI tidak boleh menghitung", "Karena langkah dapat memakai asumsi atau data yang salah", "Karena jawaban singkat selalu lebih akurat"], answer: "C", explanation: "Keruntutan membantu verifikasi, tetapi kebenaran tetap bergantung pada pemahaman, data, asumsi, dan perhitungan yang benar." }
                ]),
                diskusi: renderDiscussionPrompt("Apakah AI yang menghasilkan jawaban runtut dapat dikatakan benar-benar memahami masalah?", ["Apa perbedaan jawaban yang runtut dengan pemahaman?", "Bukti apa yang kamu perlukan sebelum mempercayai jawaban AI?", "Kapan pengguna perlu memeriksa fakta atau perhitungan secara mandiri?", "Bagaimana cara menyampaikan ketidakpastian tanpa membuat jawaban sulit dibaca?"])
            }
        },
        {
            slug: "planning-and-decomposition",
            title: "Planning dan Problem Decomposition",
            summary: "Memahami cara AI mengubah tujuan besar menjadi subtugas, menyusun urutan tindakan, dan memperbarui rencana saat kondisi berubah.",
            materi: "Bedakan reasoning dan planning, lalu gunakan goal, initial state, constraints, subtasks, sequence, serta success criteria untuk menyusun rencana.",
            latihan: "Susun rencana workshop AI dua jam, lalu revisi rencana ketika proyektor tidak tersedia pada 30 menit pertama.",
            kuis: "Empat soal tentang planning, problem decomposition, constraints, serta static dan dynamic planning.",
            diskusi: "Bahas kapan AI harus mempertahankan atau memperbarui rencana awal.",
            rich: {
                materi: `
                    <section class="reasoning-scaffold-prose">
                        <div class="reasoning-scaffold-compare"><article><span>Reasoning</span><p>Apa masalahnya, informasi apa yang penting, dan hubungan apa yang perlu dipahami?</p></article><article><span>Planning</span><p>Langkah apa yang harus dilakukan untuk mencapai tujuan?</p></article></div>
                        <div class="reasoning-scaffold-table-wrap"><table><thead><tr><th>Komponen</th><th>Pertanyaan</th></tr></thead><tbody><tr><td>Goal</td><td>Hasil akhir apa yang ingin dicapai?</td></tr><tr><td>Initial state</td><td>Informasi dan sumber daya apa yang tersedia?</td></tr><tr><td>Constraints</td><td>Batasan apa yang harus dipatuhi?</td></tr><tr><td>Subtasks</td><td>Tugas kecil apa yang harus diselesaikan?</td></tr><tr><td>Sequence</td><td>Langkah mana yang dikerjakan lebih dahulu?</td></tr><tr><td>Success criteria</td><td>Bagaimana mengetahui tugas sudah selesai?</td></tr></tbody></table></div>
                        <section class="reasoning-scaffold-example"><span>Contoh dekomposisi</span><h3>Workshop pengenalan AI selama dua jam untuk 50 mahasiswa</h3><ol><li>Kenali profil peserta.</li><li>Tentukan tujuan pembelajaran.</li><li>Pilih materi inti.</li><li>Bagi durasi sesi.</li><li>Tentukan kebutuhan perangkat.</li><li>Siapkan latihan.</li><li>Siapkan evaluasi.</li><li>Periksa kesesuaian waktu dan sumber daya.</li></ol></section>
                        <div class="reasoning-scaffold-compare"><article><span>Static planning</span><p>Rencana dibuat di awal lalu dijalankan tanpa perubahan: Plan -> Step 1 -> Step 2 -> Step 3 -> Result.</p></article><article><span>Dynamic planning</span><p>Setelah action dan observation, sistem menilai apakah rencana masih sesuai. Jika tidak, rencana diperbarui.</p></article></div>
                        <p class="reasoning-scaffold-citation">Pendekatan Plan-and-Solve memisahkan penyelesaian menjadi pembuatan rencana dan pelaksanaan subtugas berdasarkan rencana tersebut pada eksperimen yang dilaporkan [1]. Temuan ini tidak berarti semua jenis planning AI selalu lebih baik.</p>
                    </section>`,
                latihan: `<section class="reasoning-scaffold-exercises"><article><span>Latihan 1</span><h3>Bangun rencana kelas</h3><p>Susun kelas pengenalan AI selama dua jam untuk 30 peserta dengan satu mentor dan satu proyektor.</p><p>Isi enam bagian: <strong>goal, initial state, constraints, subtasks, sequence,</strong> dan <strong>success criteria</strong>.</p></article><article><span>Latihan 2</span><h3>Perbarui rencana</h3><p>Informasi baru muncul: proyektor tidak dapat digunakan selama 30 menit pertama.</p><p>Tentukan bagian rencana yang berubah, kegiatan pengganti pada 30 menit pertama, dan cara memastikan tujuan pembelajaran tetap tercapai.</p></article></section>`,
                kuis: renderQuizQuestions([
                    { question: "Apa fungsi utama planning?", options: ["Menentukan langkah untuk mencapai tujuan", "Menghapus semua batasan", "Menambah panjang jawaban", "Menjalankan semua tool"], answer: "A", explanation: "Planning menyusun langkah dan urutan tindakan berdasarkan tujuan, kondisi awal, serta batasan." },
                    { question: "Apa manfaat problem decomposition?", options: ["Membuat tugas selalu selesai otomatis", "Memecah tujuan besar menjadi subtugas yang lebih mudah dikelola", "Menghindari pemeriksaan hasil", "Mengganti goal di tengah proses"], answer: "B", explanation: "Dekomposisi membantu mengatur ketergantungan, urutan, dan pemeriksaan pada bagian tugas yang lebih kecil." },
                    { question: "Proyektor tidak tersedia selama 30 menit pertama termasuk komponen apa?", options: ["Goal", "Constraint", "Success criteria", "Final answer"], answer: "B", explanation: "Keterbatasan perangkat dan waktu merupakan constraint yang harus dipertimbangkan saat menyusun rencana." },
                    { question: "Apa ciri dynamic planning?", options: ["Rencana tidak pernah berubah", "Tidak memiliki tujuan", "Rencana dapat diperbarui berdasarkan observation", "Semua langkah dijalankan bersamaan"], answer: "C", explanation: "Dynamic planning memakai hasil tindakan atau informasi baru untuk menilai dan memperbarui langkah berikutnya." }
                ]),
                diskusi: renderDiscussionPrompt("Apakah AI sebaiknya selalu mengikuti rencana awal, atau boleh mengubahnya ketika menemukan informasi baru?", ["Kapan perubahan rencana menjadi keputusan yang tepat?", "Batas apa yang tidak boleh diubah tanpa persetujuan pengguna?", "Bagaimana AI menjelaskan alasan perubahan rencana?", "Siapa yang bertanggung jawab bila rencana baru menimbulkan risiko?"])
            }
        },
        {
            slug: "chain-of-thought",
            title: "Chain-of-Thought dan Langkah Penyelesaian",
            summary: "Memahami fungsi langkah perantara pada tugas kompleks tanpa menganggapnya sebagai akses penuh ke proses internal model.",
            materi: "Chain-of-Thought adalah rangkaian langkah perantara yang dihasilkan model sebelum jawaban akhir; langkah ini membantu pemeriksaan tetapi tidak menjamin kebenaran.",
            latihan: "Bandingkan prompt langsung dengan prompt terstruktur, lalu temukan kesalahan pada langkah penyelesaian AI.",
            kuis: "Empat soal tentang definisi, kegunaan, dan keterbatasan Chain-of-Thought.",
            diskusi: "Bahas apakah langkah penyelesaian AI harus selalu ditampilkan kepada pengguna.",
            rich: {
                materi: `
                    <section class="reasoning-scaffold-prose">
                        <p class="reasoning-scaffold-lead"><strong>Chain-of-Thought</strong> adalah rangkaian langkah perantara yang dihasilkan model sebelum memberikan jawaban akhir.</p>
                        <div class="reasoning-scaffold-flow reasoning-scaffold-flow--compact" aria-label="Alur langkah penyelesaian"><div><strong>Pertanyaan</strong><span>Masalah awal</span></div><i class="fas fa-arrow-right"></i><div><strong>Langkah perantara</strong><span>Urutan penyelesaian</span></div><i class="fas fa-arrow-right"></i><div><strong>Pemeriksaan</strong><span>Validasi</span></div><i class="fas fa-arrow-right"></i><div><strong>Jawaban akhir</strong><span>Hasil ringkas</span></div></div>
                        <div class="reasoning-scaffold-compare"><article><span>Jawaban langsung</span><p>Sisa anggarannya adalah Rp900.000.</p></article><article><span>Jawaban terstruktur</span><p>60 x Rp35.000 = Rp2.100.000. Rp3.000.000 - Rp2.100.000 = Rp900.000. Jadi anggaran mencukupi.</p></article></div>
                        <p>Langkah terstruktur berguna saat tugas memiliki beberapa tahap, melibatkan perhitungan, mengandung banyak batasan, membutuhkan perbandingan, atau perlu diperiksa kembali. Pertanyaan fakta sederhana tidak selalu memerlukannya.</p>
                        <section class="reasoning-scaffold-example"><span>Pola yang aman</span><h3>Langkah penyelesaian yang dapat diperiksa</h3><ol><li>Identifikasi tujuan.</li><li>Catat informasi relevan.</li><li>Pecah masalah menjadi beberapa langkah.</li><li>Kerjakan setiap langkah.</li><li>Periksa hasilnya.</li><li>Berikan jawaban akhir secara ringkas.</li></ol></section>
                        <div class="reasoning-scaffold-callout"><i class="fas fa-circle-info"></i><p><strong>Chain-of-Thought tidak menjamin jawaban benar.</strong> Teks langkah perantara juga tidak selalu menjadi gambaran lengkap proses internal model. Perlakukan sebagai langkah penyelesaian yang dapat diperiksa, bukan "isi pikiran rahasia AI".</p></div>
                        <p class="reasoning-scaffold-citation">Wei dkk. memperkenalkan Chain-of-Thought prompting melalui contoh yang berisi langkah reasoning perantara dan melaporkan peningkatan pada beberapa tugas aritmetika, commonsense, dan symbolic reasoning, pada eksperimen dan model yang diuji [2].</p>
                    </section>`,
                latihan: `<section class="reasoning-scaffold-exercises"><article><span>Latihan 1</span><h3>Bandingkan dua prompt</h3><div class="reasoning-scaffold-prompts"><code>Hitung kebutuhan konsumsi acara ini.</code><code>Identifikasi data yang tersedia, susun langkah perhitungan, kerjakan setiap langkah, periksa hasilnya, lalu berikan jawaban akhir.</code></div><p>Bandingkan kelengkapan, kejelasan, ketepatan, dan kemudahan verifikasi dari hasil kedua prompt.</p></article><article><span>Latihan 2</span><h3>Temukan kesalahan</h3><p>AI menulis: "50 peserta x Rp40.000 = Rp1.500.000, jadi anggaran Rp1.800.000 tersisa Rp300.000."</p><p>Tandai langkah yang salah, perbaiki perhitungannya, lalu perbarui kesimpulan akhir.</p></article></section>`,
                kuis: renderQuizQuestions([
                    { question: "Apa definisi sederhana Chain-of-Thought?", options: ["Akses penuh ke proses internal model", "Rangkaian langkah perantara yang dihasilkan sebelum jawaban akhir", "Database fakta milik AI", "Tool untuk mencari informasi terbaru"], answer: "B", explanation: "CoT adalah teks langkah perantara yang dihasilkan model, bukan jendela lengkap menuju proses internalnya." },
                    { question: "Kapan langkah perantara paling berguna?", options: ["Saat tugas terdiri dari beberapa tahap dan perlu diperiksa", "Untuk setiap salam singkat", "Hanya saat memakai internet", "Saat pengguna tidak memberi tujuan"], answer: "A", explanation: "Tugas multi-langkah, perhitungan, perbandingan, dan banyak batasan lebih terbantu oleh langkah yang terstruktur." },
                    { question: "Pernyataan mana yang tepat tentang keterbatasan CoT?", options: ["Selalu menunjukkan seluruh proses internal model", "Selalu menghasilkan jawaban benar", "Dapat membantu pemeriksaan tetapi tetap dapat berisi kesalahan", "Tidak boleh digunakan untuk perhitungan"], answer: "C", explanation: "Langkah terstruktur memudahkan pemeriksaan, tetapi data, asumsi, atau perhitungannya tetap dapat salah." },
                    { question: "Mengapa CoT tidak menjamin kebenaran?", options: ["Karena langkah yang runtut dapat dibangun dari pemahaman atau data yang salah", "Karena model tidak dapat menghasilkan teks", "Karena jawaban akhir selalu acak", "Karena semua tugas harus memakai tool"], answer: "A", explanation: "Struktur yang rapi tidak memperbaiki fakta salah, asumsi tanpa dasar, atau kesalahan hitung secara otomatis." }
                ]),
                diskusi: renderDiscussionPrompt("Apakah langkah penyelesaian AI harus selalu ditampilkan kepada pengguna?", ["Kapan transparansi langkah membantu pengguna melakukan verifikasi?", "Kapan langkah panjang justru mengganggu kesederhanaan antarmuka?", "Apa risiko jika penjelasan yang ditampilkan terdengar masuk akal tetapi tidak akurat?", "Bentuk ringkasan atau bukti apa yang lebih berguna daripada langkah yang sangat panjang?"])
            }
        },
        {
            slug: "tool-use",
            title: "Tool Use: Ketika AI Membutuhkan Alat Eksternal",
            summary: "Memahami cara AI memilih, memanggil, membaca, dan memeriksa hasil tool ketika teks saja tidak cukup menyelesaikan tugas.",
            materi: "Tool use membantu perhitungan presisi, informasi terbaru, dokumen, spreadsheet, kode, kalender, database, dan layanan eksternal.",
            latihan: "Klasifikasikan kebutuhan tool dan lengkapi simulasi Reason, Plan, Tool, Observation, Updated plan, serta Final answer.",
            kuis: "Lima soal tentang kebutuhan tool, pemilihan tool, parameter, observation, dan verifikasi hasil.",
            diskusi: "Bahas batas otorisasi ketika AI menggunakan tool atau mengambil tindakan.",
            rich: {
                materi: `
                    <section class="reasoning-scaffold-prose">
                        <p class="reasoning-scaffold-lead"><strong>Tool use</strong> adalah kemampuan sistem AI untuk menggunakan alat atau layanan eksternal ketika tugas tidak cukup diselesaikan hanya dengan menghasilkan teks.</p>
                        <div class="reasoning-scaffold-table-wrap"><table><thead><tr><th>Kebutuhan</th><th>Tool yang sesuai</th></tr></thead><tbody><tr><td>Perhitungan presisi</td><td>Kalkulator</td></tr><tr><td>Pengolahan data</td><td>Python atau spreadsheet</td></tr><tr><td>Informasi terbaru</td><td>Web search atau API</td></tr><tr><td>Isi dokumen tertentu</td><td>Document retrieval</td></tr><tr><td>Jadwal aktual</td><td>Calendar</td></tr><tr><td>Lokasi dan rute</td><td>Maps</td></tr><tr><td>Komunikasi</td><td>Email atau messaging service</td></tr></tbody></table></div>
                        <div class="reasoning-scaffold-flow reasoning-scaffold-flow--compact" aria-label="Siklus penggunaan tool"><div><strong>Tujuan</strong><span>Pahami tugas</span></div><i class="fas fa-arrow-right"></i><div><strong>Pilih</strong><span>Tentukan tool</span></div><i class="fas fa-arrow-right"></i><div><strong>Parameter</strong><span>Siapkan input</span></div><i class="fas fa-arrow-right"></i><div><strong>Hasil</strong><span>Baca output</span></div><i class="fas fa-arrow-right"></i><div><strong>Perbarui</strong><span>Revisi jawaban</span></div></div>
                        <section class="reasoning-scaffold-case"><span>Contoh spreadsheet</span><h3>Menghitung rata-rata nilai peserta</h3><dl><div><dt>Reason</dt><dd>Data nilai berada di file, bukan di prompt.</dd></div><div><dt>Plan</dt><dd>Buka file, cari kolom nilai, periksa data kosong, hitung rata-rata, sajikan hasil.</dd></div><div><dt>Action</dt><dd>Gunakan spreadsheet tool atau Python.</dd></div><div><dt>Observation</dt><dd>Tool mengembalikan rata-rata 82,4.</dd></div><div><dt>Answer</dt><dd>Rata-rata nilai peserta adalah 82,4, setelah data kosong dan format tidak valid diperiksa.</dd></div></dl></section>
                        <div class="reasoning-scaffold-compare"><article><span>Tool perlu digunakan</span><p>Data belum ada di konteks, informasi mudah berubah, hasil membutuhkan presisi, tugas perlu dieksekusi, atau hasil harus diverifikasi ke sistem eksternal.</p></article><article><span>Tool tidak perlu digunakan</span><p>Informasi sudah ada di prompt, tugas hanya menyusun ulang teks, pertanyaan konseptual dapat dijawab dari konteks, atau tool tidak menambah manfaat.</p></article></div>
                        <section class="reasoning-scaffold-example"><span>Kesalahan umum</span><h3>Tool tetap perlu diawasi</h3><ol><li>Memilih tool yang salah.</li><li>Menggunakan tool padahal tidak diperlukan.</li><li>Mengirim parameter yang salah.</li><li>Salah membaca hasil tool.</li><li>Menganggap output tool pasti benar.</li><li>Tidak memeriksa data kosong atau format data.</li><li>Menggunakan data lama untuk pertanyaan terbaru.</li></ol></section>
                        <p class="reasoning-scaffold-citation">Toolformer mempelajari keputusan mengenai tool, waktu pemanggilan, argumen, dan penggunaan hasil tool dalam generasi berikutnya [3]. ReAct menggabungkan reasoning dan tindakan secara bergantian agar hasil tindakan dapat memperbarui langkah berikutnya [4]. Keduanya adalah pendekatan riset, bukan arsitektur wajib bagi semua sistem tool-using AI.</p>
                    </section>`,
                latihan: `
                    <section class="reasoning-scaffold-exercises">
                        <article><span>Latihan 1</span><h3>Apakah tool diperlukan?</h3><div class="reasoning-scaffold-table-wrap"><table><thead><tr><th>Tugas</th><th>Tool diperlukan?</th></tr></thead><tbody><tr><td>Menjelaskan pengertian machine learning</td><td>Tidak</td></tr><tr><td>Menghitung 287 x 9.451 secara presisi</td><td>Ya</td></tr><tr><td>Mengetahui cuaca hari ini</td><td>Ya</td></tr><tr><td>Merangkum paragraf yang diberikan</td><td>Tidak</td></tr><tr><td>Menganalisis 10.000 baris data</td><td>Ya</td></tr><tr><td>Membaca agenda peserta minggu depan</td><td>Ya</td></tr></tbody></table></div><p>Untuk setiap tugas, pilih tool yang paling sesuai dan jelaskan alasannya.</p></article>
                        <article><span>Latihan 2</span><h3>Simulasikan tool use</h3><div class="reasoning-scaffold-template"><p><strong>Reason:</strong> ...</p><p><strong>Plan:</strong> ...</p><p><strong>Tool:</strong> ...</p><p><strong>Observation:</strong> ...</p><p><strong>Updated plan:</strong> ...</p><p><strong>Final answer:</strong> ...</p></div><p>Gunakan kasus data spreadsheet atau jadwal aktual. Pastikan hasil tool diperiksa sebelum jawaban akhir dibuat.</p></article>
                    </section>`,
                kuis: renderQuizQuestions([
                    { question: "Apa yang dimaksud dengan tool use?", options: ["Kemampuan AI menggunakan layanan eksternal untuk membantu menyelesaikan tugas", "Kemampuan AI menghafal semua data", "Cara membuat jawaban lebih panjang", "Proses menghapus konteks pengguna"], answer: "A", explanation: "Tool memberi sistem kemampuan tambahan seperti menghitung, membaca file, mencari data terbaru, atau menjalankan tindakan." },
                    { question: "Tool apa yang paling sesuai untuk menghitung rata-rata 10.000 baris nilai?", options: ["Calendar", "Python atau spreadsheet", "Maps", "Email"], answer: "B", explanation: "Python atau spreadsheet cocok untuk membaca banyak baris, membersihkan data, dan menghitung agregasi secara presisi." },
                    { question: "Apa risiko parameter tool yang salah?", options: ["Tool selalu memperbaikinya otomatis", "Hasil dapat menggunakan data, rentang, atau operasi yang keliru", "Jawaban pasti menjadi lebih singkat", "Tidak ada dampak pada hasil"], answer: "B", explanation: "Input menentukan operasi tool; parameter salah dapat menghasilkan observation yang tampak valid tetapi tidak relevan." },
                    { question: "Apa yang harus dilakukan setelah menerima observation dari tool?", options: ["Langsung menganggapnya benar", "Memeriksa hasil dan memperbarui rencana atau jawaban", "Menghapus tujuan awal", "Selalu memanggil tool kedua"], answer: "B", explanation: "Observation perlu dibaca dalam konteks tujuan, format, kelengkapan data, dan kemungkinan error." },
                    { question: "Kapan tool biasanya tidak diperlukan?", options: ["Saat pengguna meminta cuaca hari ini", "Saat data ada di spreadsheet besar", "Saat pengguna meminta merangkum teks yang sudah diberikan", "Saat jadwal aktual harus diperiksa"], answer: "C", explanation: "Ringkasan dapat dibuat dari konteks yang sudah tersedia; tool eksternal tidak menambah akurasi atau manfaat." }
                ]),
                diskusi: renderDiscussionPrompt("Apakah AI boleh menggunakan tool dan mengambil tindakan tanpa persetujuan pengguna?", ["Tindakan apa yang boleh dilakukan tanpa konfirmasi dan mana yang harus meminta izin?", "Bagaimana sistem menjelaskan tool, data, dan tujuan yang digunakan?", "Apa risiko ketika tool mengakses data pribadi?", "Siapa yang bertanggung jawab atas tindakan otomatis yang keliru?", "Bagaimana manusia tetap memiliki kontrol akhir?"])
            }
        }
    ];

    const COURSE_SCAFFOLDS = {
        "/participant-ai-reasoning": {
            title: "Reasoning",
            displayTitle: "Cara AI Menalar, Merencanakan, dan Menggunakan Tools",
            category: "Foundation & Core AI",
            parentCourse: "AI Fundamentals & Advanced",
            icon: "fas fa-code-branch",
            status: "Scaffold aktif dengan konten diperkaya",
            moduleStatus: "Submateri scaffold",
            duration: "75-100 menit",
            unitLabel: "submateri",
            actionLabel: "Buka submateri",
            sectionLabel: "Bagian pembelajaran",
            sectionTitle: "Empat submateri Reasoning",
            detailLabel: "Submateri Reasoning",
            activityTitles: {
                materi: "Materi scaffold Reasoning diperkaya",
                latihan: "Latihan scaffold Reasoning siap digunakan",
                kuis: "Kuis scaffold Reasoning dengan pembahasan",
                diskusi: "Panduan diskusi scaffold Reasoning"
            },
            summary: "Pelajari bagaimana AI mengolah masalah, menyusun rencana, menghasilkan langkah penyelesaian, dan menggunakan alat eksternal untuk memperoleh jawaban yang lebih akurat.",
            overviewHtml: REASONING_OVERVIEW,
            modules: REASONING_MODULES
        },
        "/participant-ai-evaluation": {
            title: "Evaluation",
            category: "AI Fundamentals",
            icon: "fas fa-clipboard-check",
            status: "Module scaffold",
            summary: "Module untuk mengevaluasi output AI dari sisi akurasi, reliability, fairness, benchmark, dan kualitas produk.",
            modules: modules([
                ["Evaluation Overview", "Tujuan evaluasi AI, metrik dasar, dan perbedaan evaluasi model dengan evaluasi produk."],
                ["Benchmark and Test Set", "Cara menyusun dataset uji, rubric, baseline, dan benchmark yang relevan."],
                ["Reliability and Bias", "Pemeriksaan konsistensi output, bias, hallucination, dan risiko operasional."],
                ["Evaluation Report", "Format laporan evaluasi yang bisa dipakai tim konten, produk, dan stakeholder."]
            ])
        },
        "/participant-ai-evolution": {
            title: "Evolution of AI",
            category: "AI Fundamentals",
            icon: "fas fa-timeline",
            status: "Module scaffold",
            summary: "Module tentang perkembangan AI dari symbolic AI, machine learning klasik, deep learning, hingga generative AI.",
            modules: modules([
                ["Symbolic AI Era", "Perkembangan rule-based system, expert system, dan batasan pendekatan simbolik."],
                ["Machine Learning Era", "Peralihan ke pembelajaran berbasis data, fitur, model statistik, dan evaluasi."],
                ["Deep Learning Era", "Peran neural network, representation learning, akselerasi compute, dan data besar."],
                ["Generative AI Era", "Kemunculan foundation model, multimodal AI, agentic workflow, dan arah masa depan."]
            ])
        },
        "/participant-ai-lab-deep-learning": {
            title: "Deep Learning",
            category: "Foundation & Core AI",
            icon: "fas fa-layer-group",
            status: "Placeholder route",
            summary: "Course untuk memahami neural network modern, training loop, regularization, dan arsitektur deep learning.",
            modules: modules([
                ["Neural Network Basics", "Neuron, layer, activation, loss, dan intuisi dasar deep learning."],
                ["Training and Backpropagation", "Training loop, gradient descent, backpropagation, dan debugging training."],
                ["CNN and RNN Overview", "Gambaran arsitektur untuk data visual, sequential, dan temporal."],
                ["Transformer Basics", "Self-attention, embedding, positional encoding, dan pola transformer modern."],
                ["Regularization", "Overfitting, dropout, normalization, augmentation, dan strategi generalisasi."]
            ])
        },
        "/participant-ai-lab-reinforcement-learning": {
            title: "Reinforcement Learning",
            category: "Foundation & Core AI",
            icon: "fas fa-gamepad",
            status: "Placeholder route",
            summary: "Course tentang agent, environment, reward, policy, value function, dan decision optimization.",
            modules: modules([
                ["Agent and Environment", "Komponen dasar RL, state, action, environment, dan episode."],
                ["Reward and Policy", "Desain reward, policy, dan konsekuensi reward shaping."],
                ["Value Function", "Value, Q-value, Bellman intuition, dan estimasi keputusan."],
                ["Exploration vs Exploitation", "Tradeoff eksplorasi, eksploitasi, dan strategi belajar agent."],
                ["RL Case Study", "Studi kasus penerapan RL pada simulasi, game, atau optimisasi."]
            ])
        },
        "/participant-ai-lab-gen": {
            title: "Generative AI",
            category: "Generative & Multimodal AI",
            icon: "fas fa-wand-magic-sparkles",
            status: "Under-development",
            summary: "Course untuk memahami prompting, diffusion, generation pipeline, evaluasi output, dan creative AI workflow.",
            modules: modules([
                ["Generative AI Overview", "Konsep model generatif, use case, risiko, dan workflow dasar."],
                ["Prompting Workflow", "Struktur prompt, iterasi instruksi, konteks, dan evaluasi respons."],
                ["Diffusion and GAN Basics", "Intuisi generation model untuk gambar dan media sintetis."],
                ["Output Evaluation", "Rubric untuk menilai kualitas, factuality, keamanan, dan kesesuaian output."],
                ["Creative Workflow", "Pipeline kreatif dari ide, variasi, kurasi, hingga delivery."]
            ])
        },
        "/participant-ai-lab-llm": {
            title: "LLM",
            category: "Generative & Multimodal AI",
            icon: "fas fa-message",
            status: "Placeholder route",
            summary: "Course tentang transformer, instruction tuning, RAG, fine-tuning, dan deployment large language model.",
            modules: modules([
                ["Transformer Recap", "Recap transformer sebagai fondasi large language model."],
                ["Prompting and Instruction", "Instruksi, format output, few-shot example, dan system behavior."],
                ["RAG Basics", "Retrieval augmented generation, chunking, embedding, dan grounding."],
                ["Fine-tuning Overview", "Kapan fine-tuning dibutuhkan, data training, dan batasannya."],
                ["Deployment Notes", "Serving, latency, cost, monitoring, dan safety untuk LLM."]
            ])
        },
        "/participant-ai-lab-vlm": {
            title: "VLM",
            category: "Generative & Multimodal AI",
            icon: "fas fa-eye",
            status: "Placeholder route",
            summary: "Course untuk memahami vision-language model, image-text alignment, captioning, dan visual reasoning.",
            modules: modules([
                ["Image-Text Alignment", "Cara model menghubungkan representasi visual dan bahasa."],
                ["Captioning", "Pembuatan caption, deskripsi gambar, dan batasan interpretasi visual."],
                ["Visual Question Answering", "Menjawab pertanyaan berbasis gambar dan konteks visual."],
                ["VLM Evaluation", "Metrik dan rubric evaluasi output vision-language."],
                ["VLM Use Cases", "Use case VLM untuk pendidikan, dokumentasi, aksesibilitas, dan produk."]
            ])
        },
        "/participant-ai-lab-multimodal-llm": {
            title: "Multimodal LLM",
            category: "Generative & Multimodal AI",
            icon: "fas fa-cubes",
            status: "Placeholder route",
            summary: "Course tentang model yang menggabungkan teks, gambar, audio, video, dan structured context.",
            modules: modules([
                ["Multimodal Inputs", "Jenis input multimodal dan cara merancang konteks lintas media."],
                ["Cross-modal Learning", "Intuisi pembelajaran lintas teks, gambar, audio, dan video."],
                ["Fusion Strategies", "Strategi menggabungkan sinyal dari beberapa modality."],
                ["Multimodal Evaluation", "Cara menguji akurasi, grounding, dan konsistensi output multimodal."],
                ["Product Patterns", "Pola produk untuk chatbot visual, assistant, dan workflow multimodal."]
            ])
        },
        "/participant-ai-lab-agentic-ai": {
            title: "Agentic AI",
            category: "Generative & Multimodal AI",
            icon: "fas fa-robot",
            status: "Placeholder route",
            summary: "Course untuk memahami tool use, planning, memory, workflow orchestration, dan evaluasi AI agents.",
            modules: modules([
                ["Agent Loop", "Observe, plan, act, reflect, dan batasan loop agent."],
                ["Tool Use", "Pemilihan tool, validasi argumen, dan handling error."],
                ["Planning", "Task decomposition, dependency, dan kontrol eksekusi."],
                ["Memory", "Short-term memory, long-term memory, dan risiko state persistence."],
                ["Agent Evaluation", "Evaluasi reliability, cost, safety, dan task success."]
            ])
        },
        "/participant-ai-lab-bioinformatics": {
            title: "Bioinformatics",
            category: "Data & Engineering Domains",
            icon: "fas fa-dna",
            status: "Placeholder route",
            summary: "Course tentang genomics, protein analysis, computational biology, dan aplikasi AI medis.",
            modules: modules([
                ["Bio Data Basics", "Jenis data biologis dan format umum untuk analisis komputasional."],
                ["Genomics Overview", "Sequence, variant, annotation, dan workflow genomics."],
                ["Protein Analysis", "Representasi protein, structure prediction, dan analisis fungsi."],
                ["Medical AI Risks", "Risiko bias, validasi klinis, privasi, dan interpretabilitas."],
                ["Bioinformatics Case Study", "Studi kasus pipeline AI untuk biological insight."]
            ])
        },
        "/participant-ai-lab-data-engineering": {
            title: "Data Engineering",
            category: "Data & Engineering Domains",
            icon: "fas fa-database",
            status: "Placeholder route",
            summary: "Course untuk membangun pipeline data, ETL, warehouse, lakehouse, orchestration, dan quality control.",
            modules: modules([
                ["Data Pipeline", "Alur ingest, transform, store, serve, dan monitoring data."],
                ["ETL and ELT", "Perbandingan ETL/ELT, batch, streaming, dan transformasi."],
                ["Warehouse and Lakehouse", "Model penyimpanan data untuk analytics dan AI workload."],
                ["Orchestration", "Scheduling, dependency, retry, dan observability pipeline."],
                ["Data Quality", "Validasi schema, completeness, freshness, dan lineage."]
            ])
        },
        "/participant-ai-lab-data-science": {
            title: "Data Science",
            category: "Data & Engineering Domains",
            icon: "fas fa-chart-line",
            status: "Placeholder route",
            summary: "Course tentang analytics, experimentation, visualization, modeling, dan insight generation.",
            modules: modules([
                ["Exploratory Analysis", "Memahami data dengan statistik deskriptif, segmentasi, dan anomaly check."],
                ["Experimentation", "Hipotesis, A/B testing, metric, dan interpretasi hasil eksperimen."],
                ["Visualization", "Memilih chart, membangun narasi visual, dan menghindari misleading chart."],
                ["Modeling", "Baseline model, feature, validation, dan interpretasi model sederhana."],
                ["Insight Storytelling", "Menyusun insight yang actionable untuk keputusan bisnis."]
            ])
        },
        "/participant-ai-lab-infrastructure": {
            title: "Infrastructure",
            category: "Data & Engineering Domains",
            icon: "fas fa-server",
            status: "Placeholder route",
            summary: "Course tentang cloud, GPU environment, serving stack, observability, dan scaling sistem AI.",
            modules: modules([
                ["Compute Basics", "CPU, GPU, memory, storage, dan kebutuhan compute AI."],
                ["GPU Environment", "Setup runtime, dependency, driver, dan resource management."],
                ["Serving Stack", "Komponen serving model, API, queue, dan cache."],
                ["Observability", "Log, metric, trace, alerting, dan incident visibility."],
                ["Scaling", "Horizontal scaling, load, autoscaling, dan cost control."]
            ])
        },
        "/participant-ai-lab-deployment": {
            title: "Deployment",
            category: "Data & Engineering Domains",
            icon: "fas fa-cloud-arrow-up",
            status: "Placeholder route",
            summary: "Course tentang packaging, API serving, model release, monitoring, dan rollback strategy.",
            modules: modules([
                ["Packaging", "Menyiapkan artifact, dependency, image, dan konfigurasi runtime."],
                ["API Serving", "Endpoint, schema, auth, timeout, dan error contract."],
                ["Release Strategy", "Versioning, staging, canary, dan approval sebelum rilis."],
                ["Monitoring", "Monitoring kualitas model, performa API, dan biaya."],
                ["Rollback", "Strategi rollback saat model atau service bermasalah."]
            ])
        },
        "/participant-ai-lab-front-end": {
            title: "Front-end",
            category: "Data & Engineering Domains",
            icon: "fas fa-code",
            status: "Placeholder route",
            summary: "Course untuk membangun interface, dashboard, visualization, accessibility, dan AI product UX.",
            modules: modules([
                ["AI Interface Patterns", "Pola UI untuk chat, assistant, copilots, dan review workflow."],
                ["Dashboard Basics", "Menyusun dashboard yang mudah dipindai dan dipakai berulang."],
                ["Visualization", "Menampilkan output, metric, dan data AI secara jelas."],
                ["Accessibility", "Aksesibilitas, keyboard flow, contrast, dan state feedback."],
                ["Frontend Integration", "Integrasi API AI, loading state, error state, dan streaming."]
            ])
        },
        "/participant-ai-lab-back-end": {
            title: "Back-end",
            category: "Data & Engineering Domains",
            icon: "fas fa-gears",
            status: "Placeholder route",
            summary: "Course tentang API, database, auth, queues, integration, dan scalable service design untuk produk AI.",
            modules: modules([
                ["API Design", "Contract endpoint, validation, pagination, dan error handling."],
                ["Database and Auth", "Model data, akses pengguna, permission, dan audit trail."],
                ["Queues", "Background job, retry, scheduling, dan async workload."],
                ["Integrations", "Integrasi model provider, webhook, dan third-party tools."],
                ["Service Scaling", "Scaling service, cache, rate limit, dan reliability."]
            ])
        },
        "/participant-ai-lab-business-insight": {
            title: "Business Insight",
            category: "Business & Industry Applications",
            icon: "fas fa-lightbulb",
            status: "Placeholder route",
            summary: "Course tentang AI analytics, market insight, decision support, dan business intelligence.",
            modules: modules([
                ["Business Question", "Merumuskan pertanyaan bisnis yang bisa dijawab dengan data dan AI."],
                ["Metric Design", "Mendesain metric, leading indicator, dan guardrail metric."],
                ["Insight Pipeline", "Mengubah data menjadi insight dengan workflow yang repeatable."],
                ["Decision Support", "Menggunakan AI untuk membantu prioritas dan keputusan operasional."],
                ["Executive Storytelling", "Menyampaikan rekomendasi secara singkat, jelas, dan berbasis bukti."]
            ])
        },
        "/participant-ai-lab-people-business-mgt": {
            title: "People & Business Mgt",
            category: "Business & Industry Applications",
            icon: "fas fa-people-group",
            status: "Placeholder route",
            summary: "Course tentang AI adoption, team process, change management, dan operational strategy.",
            modules: modules([
                ["AI Adoption", "Strategi adopsi AI yang realistis untuk tim dan organisasi."],
                ["Team Workflow", "Integrasi AI ke proses kerja tanpa menghilangkan akuntabilitas."],
                ["Change Management", "Mengelola resistensi, training, communication, dan rollout."],
                ["Governance", "Policy, risk review, permission, dan audit penggunaan AI."],
                ["Operational Strategy", "Menentukan prioritas use case, biaya, dan dampak operasional."]
            ])
        },
        "/participant-ai-lab-ai-culture": {
            title: "AI for Culture",
            category: "Business & Industry Applications",
            icon: "fas fa-palette",
            status: "Placeholder route",
            summary: "Course tentang AI untuk arsip budaya, kreativitas, bahasa lokal, dan cultural preservation.",
            modules: modules([
                ["Cultural Data", "Mengelola data budaya, metadata, konteks, dan provenance."],
                ["Language Preservation", "AI untuk dokumentasi bahasa lokal dan variasi linguistik."],
                ["Creative Workflow", "Workflow kreatif yang menghormati konteks budaya."],
                ["Culture Ethics", "Consent, ownership, representasi, dan risiko apropriasi."],
                ["Culture Case Study", "Studi kasus preservasi atau eksplorasi budaya dengan AI."]
            ])
        },
        "/participant-ai-lab-healthcare": {
            title: "AI for Healthcare",
            category: "Business & Industry Applications",
            icon: "fas fa-heart-pulse",
            status: "Placeholder route",
            summary: "Course tentang clinical decision support, imaging, patient analytics, dan ethical healthcare AI.",
            modules: modules([
                ["Healthcare Data", "Jenis data kesehatan, privasi, consent, dan quality requirement."],
                ["Clinical Decision Support", "AI sebagai pendukung keputusan klinis dan batas tanggung jawabnya."],
                ["Medical Imaging", "Use case imaging, diagnosis support, dan validasi model visual."],
                ["Patient Analytics", "Segmentasi pasien, prediksi risiko, dan insight operasional."],
                ["Safety and Ethics", "Safety, bias, audit, dan validasi sebelum penggunaan klinis."]
            ])
        },
        "/participant-ai-lab-ui-ux": {
            title: "UI/UX Design Thinking",
            category: "Business & Industry Applications",
            icon: "fas fa-pen-nib",
            status: "Placeholder route",
            summary: "Course tentang human-centered AI, prototyping, research, journey mapping, dan usability test.",
            modules: modules([
                ["User Research", "Riset kebutuhan, pain point, konteks, dan perilaku pengguna."],
                ["AI Journey Mapping", "Memetakan titik AI membantu, membatasi, atau perlu human review."],
                ["Prototyping", "Membuat prototype AI workflow untuk validasi cepat."],
                ["Usability Test", "Menilai kejelasan, trust, control, dan error recovery."],
                ["Design Evaluation", "Rubric evaluasi UX untuk produk berbasis AI."]
            ])
        },
        "/participant-ai-lab-manufacturing": {
            title: "AI for Manufacturing",
            category: "Business & Industry Applications",
            icon: "fas fa-industry",
            status: "Placeholder route",
            summary: "Course tentang predictive maintenance, quality inspection, robotics, dan process optimization.",
            modules: modules([
                ["Manufacturing Data", "Sensor, produksi, quality log, dan data operasional pabrik."],
                ["Predictive Maintenance", "Prediksi kerusakan, anomaly detection, dan preventive action."],
                ["Quality Inspection", "Computer vision dan automation untuk pemeriksaan kualitas."],
                ["Robotics", "AI pada robot, kontrol, safety, dan human-machine interaction."],
                ["Process Optimization", "Optimisasi proses, bottleneck, throughput, dan cost efficiency."]
            ])
        },
        "/participant-ai-lab-geospatial": {
            title: "AI for Geospatial",
            category: "Business & Industry Applications",
            icon: "fas fa-map-location-dot",
            status: "Placeholder route",
            summary: "Course tentang remote sensing, GIS intelligence, spatial modeling, dan location analytics.",
            modules: modules([
                ["Geospatial Data", "Raster, vector, coordinate system, dan sumber data geospasial."],
                ["Remote Sensing", "Satellite imagery, preprocessing, dan analisis citra bumi."],
                ["GIS Intelligence", "Spatial join, overlay, layer, dan insight berbasis lokasi."],
                ["Spatial Modeling", "Model prediksi dan klasifikasi berbasis data spasial."],
                ["Location Analytics", "Analitik lokasi untuk bisnis, lingkungan, dan kebijakan."]
            ])
        },
        "/participant-specialization-computer-vision": {
            title: "Computer Vision Track",
            category: "Specialization Track",
            icon: "fas fa-eye",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk image processing, object detection, recognition, dan visual intelligence.",
            modules: modules([
                ["CV Course Review", "Review konsep computer vision dan readiness menuju spesialisasi."],
                ["OpenCV Practice", "Praktik image processing, filtering, dan transformasi dasar."],
                ["Detection Models", "Object detection, segmentation, dan use case industri."],
                ["Vision Transformers", "Konsep transformer untuk image dan multimodal vision."],
                ["CV Portfolio Project", "Proyek portofolio untuk menunjukkan kemampuan computer vision."]
            ])
        },
        "/participant-specialization-speech-recognition": {
            title: "Speech Recognition Track",
            category: "Specialization Track",
            icon: "fas fa-wave-square",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk voice processing, audio analysis, ASR, dan text-to-speech.",
            modules: modules([
                ["Audio Basics", "Waveform, sample rate, spectrogram, dan fitur audio."],
                ["Feature Extraction", "MFCC, embedding audio, dan preprocessing suara."],
                ["ASR Pipeline", "Automatic speech recognition dari audio ke teks."],
                ["TTS Overview", "Text-to-speech, voice quality, dan synthesis workflow."],
                ["Speech Product Case", "Studi kasus produk berbasis suara dan evaluasinya."]
            ])
        },
        "/participant-specialization-nlp-llm": {
            title: "NLP & LLM Track",
            category: "Specialization Track",
            icon: "fas fa-message",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk text generation, semantic understanding, retrieval, dan RAG.",
            modules: modules([
                ["NLP Foundation", "Token, embedding, classification, entity, dan semantic similarity."],
                ["LLM Workflow", "Prompt, instruction, context, dan structured output."],
                ["RAG System", "Retrieval, chunking, grounding, dan answer synthesis."],
                ["NLP Evaluation", "Metrik dan human evaluation untuk aplikasi bahasa."],
                ["NLP Capstone", "Proyek akhir NLP/LLM berbasis kebutuhan nyata."]
            ])
        },
        "/participant-specialization-mlops-deployment": {
            title: "MLOps & Deployment Track",
            category: "Specialization Track",
            icon: "fas fa-server",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk cloud computing, model deployment, monitoring, dan scalability.",
            modules: modules([
                ["MLOps Overview", "Lifecycle model dari eksperimen sampai produksi."],
                ["Model Serving", "Serving pattern, API, batch inference, dan latency."],
                ["CI/CD", "Pipeline release, testing, artifact, dan environment promotion."],
                ["MLOps Monitoring", "Monitoring drift, quality, service health, dan cost."],
                ["Production Incident Drill", "Latihan menangani incident model atau service di produksi."]
            ])
        },
        "/participant-specialization-multimodal-llm": {
            title: "Multimodal LLM Track",
            category: "Specialization Track",
            icon: "fas fa-cubes",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk VLM, cross-modal learning, multimodal UX, dan world models.",
            modules: modules([
                ["Multimodal Foundation", "Fondasi teks, gambar, audio, video, dan structured context."],
                ["VLM Use Cases", "Use case vision-language untuk produk dan analisis."],
                ["Cross-modal Evaluation", "Evaluasi keselarasan lintas modality dan grounding."],
                ["Product UX", "Desain UX untuk input dan output multimodal."],
                ["Multimodal Capstone", "Proyek akhir multimodal dengan evaluasi terstruktur."]
            ])
        },
        "/participant-specialization-medical-biology-ai": {
            title: "Medical & Biology AI Track",
            category: "Specialization Track",
            icon: "fas fa-dna",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk genomics, protein analysis, computational biology, dan medical AI.",
            modules: modules([
                ["Bio Data Foundation", "Data biologis dan medis sebagai input sistem AI."],
                ["Clinical AI", "Clinical support, validation, dan governance untuk AI kesehatan."],
                ["Protein and Genomics", "Analisis protein, genomics, dan biological sequence."],
                ["Safety Review", "Review safety, bias, privacy, dan interpretability."],
                ["Medical Biology Capstone", "Proyek akhir medical/biology AI dengan laporan evaluasi."]
            ])
        }
    };

    function getRouteState() {
        const hash = window.location.hash || "";
        const parts = hash.replace("#", "").split("?");
        const path = parts[0] || "/participant-modules";
        const params = new URLSearchParams(parts[1] || "");
        const activity = ACTIVITY_ORDER.includes(params.get("activity")) ? params.get("activity") : "materi";
        const moduleSlug = params.get("module") || "";
        return { path, params, activity, moduleSlug };
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function setText(selector, value) {
        document.querySelectorAll(selector).forEach(node => {
            node.textContent = value;
        });
    }

    function setIcon(selector, iconClass) {
        document.querySelectorAll(selector).forEach(node => {
            node.className = iconClass;
        });
    }

    function buildHref(basePath, moduleSlug, activity) {
        const params = new URLSearchParams();
        if (moduleSlug) params.set("module", moduleSlug);
        if (activity !== "materi") params.set("activity", activity);
        const query = params.toString();
        return `#${basePath}${query ? `?${query}` : ""}`;
    }

    function findModule(course, moduleSlug) {
        if (!moduleSlug) return null;
        return (course.modules || []).find(item => item.slug === moduleSlug) || null;
    }

    function renderModules(course, activeActivity) {
        const list = document.querySelector("[data-course-scaffold-modules]");
        if (!list) return;
        list.hidden = false;
        list.innerHTML = (course.modules || []).map((item, index) => `
            <li>
                <span>${index + 1}</span>
                <div>
                    <strong>${escapeHtml(item.title)}</strong>
                    <p>${escapeHtml(item.summary)}</p>
                    <a class="lesson-action" href="${buildHref(getRouteState().path, item.slug, activeActivity)}">${escapeHtml(course.actionLabel || "Buka module")}</a>
                </div>
            </li>
        `).join("");

        const richContent = document.querySelector("[data-course-scaffold-rich-content]");
        if (richContent) {
            const showOverview = activeActivity === "materi" && course.overviewHtml;
            richContent.hidden = !showOverview;
            richContent.innerHTML = showOverview ? course.overviewHtml : "";
        }
    }

    function renderModuleActivity(moduleData, activeActivity) {
        const list = document.querySelector("[data-course-scaffold-modules]");
        if (!list) return;
        const activityText = moduleData[activeActivity] || moduleData.materi;
        const richContent = document.querySelector("[data-course-scaffold-rich-content]");
        const richHtml = moduleData.rich && moduleData.rich[activeActivity];

        if (richHtml && richContent) {
            list.hidden = true;
            list.innerHTML = "";
            richContent.hidden = false;
            richContent.innerHTML = `
                <a class="reasoning-scaffold-back" href="${buildHref(getRouteState().path, "", "materi")}">
                    <i class="fas fa-arrow-left" aria-hidden="true"></i> Kembali ke overview Reasoning
                </a>
                ${richHtml}
            `;
            return;
        }

        list.hidden = false;
        if (richContent) {
            richContent.hidden = true;
            richContent.innerHTML = "";
        }
        list.innerHTML = `
            <li>
                <span>1</span>
                <div>
                    <strong>${escapeHtml(moduleData.title)}</strong>
                    <p>${escapeHtml(moduleData.summary)}</p>
                </div>
            </li>
            <li>
                <span>2</span>
                <div>
                    <strong>${escapeHtml(ACTIVITY_CONTENT[activeActivity].heading)}</strong>
                    <p>${escapeHtml(activityText)}</p>
                </div>
            </li>
        `;
    }

    function updateActivityTabs(basePath, moduleSlug, activeActivity) {
        ACTIVITY_ORDER.forEach(key => {
            document.querySelectorAll(`[data-course-scaffold-tab="${key}"]`).forEach(node => {
                node.setAttribute("href", buildHref(basePath, moduleSlug, key));
                node.classList.toggle("active", key === activeActivity);
            });
        });
    }

    function renderActivityContent(course, moduleData, activity) {
        const content = ACTIVITY_CONTENT[activity] || ACTIVITY_CONTENT.materi;
        const activityTitle = (course.activityTitles && course.activityTitles[activity]) || content.title;
        if (moduleData) {
            setText("[data-course-scaffold-activity-title]", `${activityTitle}: ${moduleData.title}`);
            setText("[data-course-scaffold-activity-copy]", moduleData[activity] || moduleData.materi);
            setText("[data-course-scaffold-section-label]", course.detailLabel || content.label);
            setText("[data-course-scaffold-section-title]", moduleData.title);
            renderModuleActivity(moduleData, activity);
            return;
        }

        setText("[data-course-scaffold-activity-title]", activityTitle);
        setText("[data-course-scaffold-activity-copy]", `${content.copy} Pilih salah satu ${course.unitLabel || "module"} ${course.title} untuk membuka detail activity.`);
        setText("[data-course-scaffold-section-label]", course.sectionLabel || "Overview course");
        setText("[data-course-scaffold-section-title]", course.sectionTitle || "Daftar module scaffold");
        renderModules(course, activity);
    }

    window.initCoursePlaceholder = function () {
        const page = document.querySelector(".course-scaffold-page");
        if (!page) return;

        const state = getRouteState();
        page.classList.toggle("reasoning-scaffold-page", state.path === "/participant-ai-reasoning");
        const data = COURSE_SCAFFOLDS[state.path] || {
            title: "Course Scaffold",
            category: "Course Catalog",
            icon: "fas fa-layer-group",
            status: "Scaffold",
            summary: "Outline awal course sudah disiapkan untuk diisi tim konten.",
            modules: modules([
                ["Overview konsep dan istilah penting", "Draft overview untuk fondasi course."],
                ["Workflow dasar dan contoh penerapan", "Draft workflow praktik untuk peserta."],
                ["Risiko, evaluasi, dan best practice", "Draft evaluasi dan mitigasi risiko."],
                ["Mini project atau studi kasus", "Draft studi kasus untuk mengunci pemahaman."]
            ])
        };
        const currentModule = findModule(data, state.moduleSlug);

        setText("[data-course-scaffold-title]", data.title);
        setText("[data-course-scaffold-category]", data.category);
        setText("[data-course-scaffold-heading]", currentModule ? currentModule.title : (data.displayTitle || data.title));
        setText("[data-course-scaffold-summary]", currentModule ? currentModule.summary : data.summary);
        setText("[data-course-scaffold-status]", currentModule ? (data.moduleStatus || "Module scaffold") : data.status);
        setText("[data-course-scaffold-count]", String((data.modules || []).length));
        setText("[data-course-scaffold-duration]", data.duration || "Draft outline");
        setText("[data-course-scaffold-unit]", data.unitLabel || "topik awal");
        setIcon("[data-course-scaffold-icon]", data.icon);
        setIcon("[data-course-scaffold-visual-icon]", data.icon);
        renderActivityContent(data, currentModule, state.activity);
        updateActivityTabs(state.path, currentModule ? currentModule.slug : "", state.activity);
    };
})();
