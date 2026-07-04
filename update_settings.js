const fs = require('fs');
const path = require('path');

const settingsPath = path.join(__dirname, 'js/frontend/fellow-dashboard/settings.js');
let settingsContent = fs.readFileSync(settingsPath, 'utf8');

// Build the content for generatedLessonContent
const newContentBlocks = `const generatedLessonContent = {
        '/participant-ai-history': {
            title: 'Sejarah Artificial Intelligence',
            description: 'Perkembangan AI dari masa ke masa, dari Turing Test hingga Generative AI.',
            duration: '35 menit',
            tag: 'Sejarah',
            content: \`
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-hourglass-half"></i> Topik 2: Sejarah Artificial Intelligence
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Peserta memahami perkembangan AI dari masa ke masa.
                    </p>
                </div>
                
                <h3>Timeline Perkembangan AI ⏳</h3>
                <div style="position: relative; padding-left: 20px; border-left: 2px solid rgba(246,51,146,.2); margin: 32px 0;">
                    <div style="margin-bottom: 24px; position: relative;">
                        <div style="position: absolute; left: -27px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--fellow-pink); border: 2px solid white;"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">1943 — Artificial Neuron</h4>
                        <p style="margin: 0; font-size: 0.95rem;">Model matematika pertama dari jaringan saraf tiruan diperkenalkan.</p>
                    </div>
                    <div style="margin-bottom: 24px; position: relative;">
                        <div style="position: absolute; left: -27px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--fellow-pink); border: 2px solid white;"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">1950 — Alan Turing & Turing Test</h4>
                        <p style="margin: 0; font-size: 0.95rem;">Alan Turing mengusulkan tes untuk mengukur apakah mesin bisa "berpikir" layaknya manusia.</p>
                    </div>
                    <div style="margin-bottom: 24px; position: relative;">
                        <div style="position: absolute; left: -27px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--fellow-pink); border: 2px solid white;"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">1956 — "Artificial Intelligence" Lahir</h4>
                        <p style="margin: 0; font-size: 0.95rem;">John McCarthy pertama kali menggunakan istilah AI dalam konferensi Dartmouth.</p>
                    </div>
                    <div style="margin-bottom: 24px; position: relative;">
                        <div style="position: absolute; left: -27px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--fellow-pink); border: 2px solid white;"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">1960-1970 — Expert System</h4>
                        <p style="margin: 0; font-size: 0.95rem;">Sistem berbasis aturan diciptakan untuk meniru keputusan pakar manusia.</p>
                    </div>
                    <div style="margin-bottom: 24px; position: relative;">
                        <div style="position: absolute; left: -27px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: #ccc; border: 2px solid white;"></div>
                        <h4 style="margin: 0 0 4px 0; color: #6f7282;">AI Winter (Periode Musim Dingin AI) ❄️</h4>
                        <p style="margin: 0; font-size: 0.95rem; color: #6f7282;">Pendanaan dan antusiasme menurun drastis karena AI gagal memenuhi ekspektasi (hype terlalu tinggi, komputer belum kuat).</p>
                    </div>
                    <div style="margin-bottom: 24px; position: relative;">
                        <div style="position: absolute; left: -27px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--fellow-pink); border: 2px solid white;"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">1997 — Deep Blue vs Garry Kasparov</h4>
                        <p style="margin: 0; font-size: 0.95rem;">AI buatan IBM pertama kali mengalahkan juara dunia catur manusia.</p>
                    </div>
                    <div style="margin-bottom: 24px; position: relative;">
                        <div style="position: absolute; left: -27px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--fellow-pink); border: 2px solid white;"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">2012 — AlexNet & Deep Learning</h4>
                        <p style="margin: 0; font-size: 0.95rem;">Kebangkitan Deep Learning! Komputer akhirnya bisa mengenali gambar dengan akurasi sangat tinggi berkat GPU.</p>
                    </div>
                    <div style="margin-bottom: 24px; position: relative;">
                        <div style="position: absolute; left: -27px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--fellow-pink); border: 2px solid white;"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">2016 — AlphaGo</h4>
                        <p style="margin: 0; font-size: 0.95rem;">AI Google DeepMind mengalahkan juara dunia permainan Go (permainan papan paling kompleks).</p>
                    </div>
                    <div style="margin-bottom: 24px; position: relative;">
                        <div style="position: absolute; left: -27px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--fellow-pink); border: 2px solid white;"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">2022 — ChatGPT</h4>
                        <p style="margin: 0; font-size: 0.95rem;">AI yang bisa diajak ngobrol layaknya manusia dirilis, mengubah cara dunia bekerja.</p>
                    </div>
                    <div style="margin-bottom: 0; position: relative;">
                        <div style="position: absolute; left: -27px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: var(--fellow-pink); border: 2px solid white;"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">2024-Sekarang — Era Generative AI</h4>
                        <p style="margin: 0; font-size: 0.95rem;">AI kini bisa membuat teks, gambar, video, musik, dan coding dengan kualitas fantastis!</p>
                    </div>
                </div>
            \`
        },
        '/participant-ai-types': {
            title: 'Jenis-Jenis Artificial Intelligence',
            description: 'Memahami pembagian AI berdasarkan kemampuan dan fungsinya.',
            duration: '25 menit',
            tag: 'Klasifikasi',
            content: \`
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-sitemap"></i> Topik 3: Jenis-Jenis Artificial Intelligence
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Klasifikasi AI berdasarkan kemampuan dan fungsinya.
                    </p>
                </div>
                
                <h3>A. Berdasarkan Kemampuan 🧠</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 32px;">
                    <div style="background: #fff; border: 1px solid var(--fellow-line); padding: 24px; border-radius: 16px;">
                        <div style="font-size: 2rem; color: var(--fellow-pink); margin-bottom: 16px;"><i class="fas fa-robot"></i></div>
                        <h4 style="margin: 0 0 8px 0;">Artificial Narrow Intelligence (ANI)</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">AI "sempit" yang hanya jago di satu tugas spesifik. <b>Contoh:</b> Siri, Face ID, ChatGPT. Semua AI saat ini ada di level ini!</p>
                    </div>
                    <div style="background: #fff; border: 1px solid var(--fellow-line); padding: 24px; border-radius: 16px;">
                        <div style="font-size: 2rem; color: #6366f1; margin-bottom: 16px;"><i class="fas fa-brain"></i></div>
                        <h4 style="margin: 0 0 8px 0;">Artificial General Intelligence (AGI)</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">AI masa depan yang secerdas manusia di segala bidang. Bisa belajar hal baru secara mandiri. Saat ini masih tahap riset.</p>
                    </div>
                    <div style="background: #fff; border: 1px solid var(--fellow-line); padding: 24px; border-radius: 16px;">
                        <div style="font-size: 2rem; color: #f59e0b; margin-bottom: 16px;"><i class="fas fa-bolt"></i></div>
                        <h4 style="margin: 0 0 8px 0;">Artificial Super Intelligence (ASI)</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">AI fiksi ilmiah yang jauh melampaui kecerdasan kolektif seluruh umat manusia. Masih teori (dan agak menyeramkan!).</p>
                    </div>
                </div>

                <h3>B. Berdasarkan Fungsi 🛠️</h3>
                <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 16px;">
                    <li style="display: flex; gap: 16px; align-items: flex-start;">
                        <div style="width: 32px; height: 32px; background: rgba(246,51,146,.1); color: var(--fellow-pink); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-check"></i></div>
                        <div>
                            <strong>Reactive Machine:</strong> AI paling dasar, tidak punya memori masa lalu. Bereaksi sesuai input saat ini (cth: Deep Blue catur).
                        </div>
                    </li>
                    <li style="display: flex; gap: 16px; align-items: flex-start;">
                        <div style="width: 32px; height: 32px; background: rgba(246,51,146,.1); color: var(--fellow-pink); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-history"></i></div>
                        <div>
                            <strong>Limited Memory:</strong> Bisa mengingat data masa lalu dalam jangka pendek untuk mengambil keputusan (cth: Mobil Otonom/Self-Driving).
                        </div>
                    </li>
                    <li style="display: flex; gap: 16px; align-items: flex-start;">
                        <div style="width: 32px; height: 32px; background: rgba(246,51,146,.1); color: var(--fellow-pink); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-users"></i></div>
                        <div>
                            <strong>Theory of Mind:</strong> AI yang bisa memahami emosi, keyakinan, dan pikiran manusia. Masih dalam pengembangan.
                        </div>
                    </li>
                    <li style="display: flex; gap: 16px; align-items: flex-start;">
                        <div style="width: 32px; height: 32px; background: rgba(246,51,146,.1); color: var(--fellow-pink); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-eye"></i></div>
                        <div>
                            <strong>Self-Aware AI:</strong> AI yang punya kesadaran diri dan perasaan sendiri (seperti di film Sci-Fi). Belum ada saat ini.
                        </div>
                    </li>
                </ul>
            \`
        },
        '/participant-ai-components': {
            title: 'Komponen Utama AI',
            description: 'Mempelajari fondasi utama AI modern: data, algoritma, computing power, dan evaluasi.',
            duration: '35 menit',
            tag: 'Fondasi',
            content: \`
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-cogs"></i> Topik 4: Komponen Utama AI
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Apa saja yang membuat AI bisa bekerja? Ini dia 5 pilarnya.
                    </p>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 24px;">
                    <div style="border: 1px solid var(--fellow-line); border-radius: 16px; padding: 24px;">
                        <h4 style="color: var(--fellow-pink); font-size: 1.2rem; margin: 0 0 16px 0;"><i class="fas fa-database"></i> 1. Data (Bahan Bakar)</h4>
                        <p>Tanpa data, AI cuma kode kosong. Data bisa berupa:</p>
                        <ul>
                            <li><b>Structured Data:</b> Rapi, seperti tabel Excel/SQL.</li>
                            <li><b>Unstructured Data:</b> Bebas, seperti teks, foto, audio, video.</li>
                            <li><b>Label Data:</b> Data yang sudah diberi "kunci jawaban" oleh manusia.</li>
                        </ul>
                    </div>

                    <div style="border: 1px solid var(--fellow-line); border-radius: 16px; padding: 24px;">
                        <h4 style="color: var(--fellow-pink); font-size: 1.2rem; margin: 0 0 16px 0;"><i class="fas fa-code-branch"></i> 2. Algorithm (Otak/Resep)</h4>
                        <p>Aturan matematika atau logika yang mengolah data.</p>
                        <ul>
                            <li><b>Rule-Based System:</b> Jika A maka B (if-else).</li>
                            <li><b>Machine Learning:</b> Algoritma yang mencari pola sendiri.</li>
                            <li><b>Deep Learning:</b> Menggunakan jaringan saraf tiruan (Neural Networks).</li>
                        </ul>
                    </div>

                    <div style="border: 1px solid var(--fellow-line); border-radius: 16px; padding: 24px;">
                        <h4 style="color: var(--fellow-pink); font-size: 1.2rem; margin: 0 0 16px 0;"><i class="fas fa-microchip"></i> 3. Computing Power (Mesin)</h4>
                        <p>Perangkat keras super kuat untuk melatih model AI:</p>
                        <ul>
                            <li><b>CPU:</b> Prosesor biasa (lambat untuk AI).</li>
                            <li><b>GPU:</b> Graphic card (sangat cocok untuk hitungan matriks paralel AI).</li>
                            <li><b>TPU:</b> Tensor Processing Unit (chip khusus AI buatan Google).</li>
                        </ul>
                    </div>
                    
                    <div style="border: 1px solid var(--fellow-line); border-radius: 16px; padding: 24px;">
                        <h4 style="color: var(--fellow-pink); font-size: 1.2rem; margin: 0 0 16px 0;"><i class="fas fa-box-open"></i> 4. Model (Hasil Belajar)</h4>
                        <ul>
                            <li><b>Training:</b> Proses melatih AI dengan data.</li>
                            <li><b>Validation:</b> Ujian untuk mengecek performa saat training.</li>
                            <li><b>Inference:</b> Menggunakan AI di dunia nyata untuk memprediksi.</li>
                        </ul>
                    </div>

                    <div style="border: 1px solid var(--fellow-line); border-radius: 16px; padding: 24px;">
                        <h4 style="color: var(--fellow-pink); font-size: 1.2rem; margin: 0 0 16px 0;"><i class="fas fa-chart-line"></i> 5. Evaluation (Rapor)</h4>
                        <p>Cara mengukur seberapa pintar AI kita:</p>
                        <ul>
                            <li><b>Accuracy:</b> Akurasi keseluruhan.</li>
                            <li><b>Precision & Recall:</b> Ketelitian dan ketepatan menemukan kasus positif.</li>
                            <li><b>F1-Score:</b> Rata-rata harmonis presisi & recall.</li>
                        </ul>
                    </div>
                </div>
            \`
        },
        '/participant-ai-applications': {
            title: 'AI di Berbagai Bidang',
            description: 'Melihat bagaimana AI merevolusi berbagai industri di dunia nyata.',
            duration: '25 menit',
            tag: 'Penerapan',
            content: \`
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-globe"></i> Topik 5: Penerapan AI
                    </h3>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                    <div style="padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
                        <h4 style="color: #0f172a; margin: 0 0 8px 0;"><i class="fas fa-hospital-user" style="color: var(--fellow-pink);"></i> Healthcare</h4>
                        <p style="font-size: 0.9rem; margin: 0; color: #475569;">Diagnosa penyakit dari X-Ray, memprediksi risiko pasien, dan meracik obat baru dengan cepat.</p>
                    </div>
                    <div style="padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
                        <h4 style="color: #0f172a; margin: 0 0 8px 0;"><i class="fas fa-graduation-cap" style="color: var(--fellow-pink);"></i> Education</h4>
                        <p style="font-size: 0.9rem; margin: 0; color: #475569;">AI Tutor cerdas (seperti HerAI Buddy!), personalized learning sesuai kecepatan belajar siswa.</p>
                    </div>
                    <div style="padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
                        <h4 style="color: #0f172a; margin: 0 0 8px 0;"><i class="fas fa-coins" style="color: var(--fellow-pink);"></i> Finance</h4>
                        <p style="font-size: 0.9rem; margin: 0; color: #475569;">Fraud detection (mendeteksi kartu kredit dibobol), credit scoring otomatis, bot trading.</p>
                    </div>
                    <div style="padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
                        <h4 style="color: #0f172a; margin: 0 0 8px 0;"><i class="fas fa-car" style="color: var(--fellow-pink);"></i> Transportation</h4>
                        <p style="font-size: 0.9rem; margin: 0; color: #475569;">Self-Driving Car (Tesla), prediksi macet Google Maps, optimasi rute penerbangan.</p>
                    </div>
                    <div style="padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
                        <h4 style="color: #0f172a; margin: 0 0 8px 0;"><i class="fas fa-leaf" style="color: var(--fellow-pink);"></i> Agriculture</h4>
                        <p style="font-size: 0.9rem; margin: 0; color: #475569;">Smart farming dengan drone, deteksi penyakit daun tomat dari foto HP.</p>
                    </div>
                    <div style="padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
                        <h4 style="color: #0f172a; margin: 0 0 8px 0;"><i class="fas fa-film" style="color: var(--fellow-pink);"></i> Entertainment</h4>
                        <p style="font-size: 0.9rem; margin: 0; color: #475569;">Rekomendasi film Netflix, FYP TikTok, playlist Spotify, hingga dubbing suara aktor.</p>
                    </div>
                    <div style="padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
                        <h4 style="color: #0f172a; margin: 0 0 8px 0;"><i class="fas fa-shield-alt" style="color: var(--fellow-pink);"></i> Cyber Security</h4>
                        <p style="font-size: 0.9rem; margin: 0; color: #475569;">Mendeteksi malware otomatis, mencegah intrusi hacker (Intrusion Detection).</p>
                    </div>
                </div>
            \`
        },
        '/participant-ai-pipeline': {
            title: 'AI Development Pipeline',
            description: 'Langkah demi langkah cara para Engineer membuat sistem AI dari nol.',
            duration: '20 menit',
            tag: 'Workflow',
            content: \`
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-code-branch"></i> Topik 6: AI Development Pipeline
                    </h3>
                </div>
                
                <p>Membangun AI tidak sekadar "ngoding". Ini adalah alur kerja (pipeline) yang terstruktur:</p>
                <ol style="background: var(--ai-bg); padding: 24px 24px 24px 40px; border-radius: 16px; margin: 24px 0; border: 1px solid var(--fellow-line);">
                    <li style="margin-bottom: 12px;"><b>Problem Definition:</b> Tentukan dulu masalahnya apa? Apakah AI solusinya?</li>
                    <li style="margin-bottom: 12px;"><b>Collect Data:</b> Kumpulkan ribuan gambar/teks/angka. Tanpa data, ga ada AI!</li>
                    <li style="margin-bottom: 12px;"><b>Prepare Data:</b> Bersihkan data. Hapus yang buram, hapus yang outlier, jadikan format seragam.</li>
                    <li style="margin-bottom: 12px;"><b>Train Model:</b> Masukkan data ke algoritma agar AI "belajar".</li>
                    <li style="margin-bottom: 12px;"><b>Evaluate:</b> Uji dengan data baru (data tes) untuk mengecek akurasi model.</li>
                    <li style="margin-bottom: 12px;"><b>Deploy:</b> Pasang AI ke dalam aplikasi web/mobile (production).</li>
                    <li style="margin-bottom: 12px;"><b>Monitor:</b> Pantau, karena data dunia nyata terus berubah.</li>
                    <li style="margin-bottom: 0;"><b>Improve:</b> Ulangi siklus dengan data terbaru!</li>
                </ol>
            \`
        },
        '/participant-ai-ml-dl': {
            title: 'AI vs Machine Learning vs Deep Learning',
            description: 'Membedah perbedaan ketiga istilah yang sering tertukar ini.',
            duration: '20 menit',
            tag: 'Konsep',
            content: \`
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-layer-group"></i> Topik 7: AI vs ML vs DL
                    </h3>
                </div>
                
                <p>Sering dengar ketiga istilah ini? Bayangkan seperti <b>Matryoshka</b> (boneka Rusia yang berlapis-lapis).</p>

                <div style="display: flex; flex-direction: column; gap: 24px; margin: 32px 0;">
                    <div style="padding: 24px; border-radius: 20px; border: 2px solid var(--fellow-pink); background: rgba(246,51,146,0.02);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);">Artificial Intelligence (AI) - Lingkaran Terluar</h4>
                        <p style="margin:0;">Konsep paling luas. Pokoknya program komputer apapun yang terlihat "pintar" meniru manusia. Termasuk bot musuh di game Super Mario (Rule-based AI).</p>
                    </div>
                    
                    <div style="padding: 24px; border-radius: 20px; border: 2px solid #6366f1; background: rgba(99,102,241,0.02); margin-left: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: #6366f1;">Machine Learning (ML) - Lingkaran Tengah</h4>
                        <p style="margin:0;">Bagian dari AI. Di sini komputer tidak diprogram aturan IF-ELSE kaku, melainkan "belajar sendiri dari data" lewat teknik statistik (cth: regresi linier, SVM, Random Forest).</p>
                    </div>

                    <div style="padding: 24px; border-radius: 20px; border: 2px solid #f59e0b; background: rgba(245,158,11,0.02); margin-left: 40px;">
                        <h4 style="margin: 0 0 8px 0; color: #f59e0b;">Deep Learning (DL) - Lingkaran Terdalam</h4>
                        <p style="margin:0;">Bagian terkecil tapi terkuat dari ML. Menggunakan "Jaringan Saraf Tiruan" (Neural Networks) berlapis-lapis yang meniru arsitektur otak manusia. Sangat ahli menangani gambar, suara, dan teks (NLP/Generative AI).</p>
                    </div>
                </div>
            \`
        },
        '/participant-ai-pros-cons': {
            title: 'Kelebihan & Keterbatasan AI',
            description: 'Memahami apa yang AI bisa dan apa yang masih gagal dilakukannya.',
            duration: '20 menit',
            tag: 'Analisis',
            content: \`
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-balance-scale"></i> Topik 8: Kelebihan & Keterbatasan AI
                    </h3>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 24px; border-radius: 16px;">
                        <h4 style="color: #166534; margin: 0 0 16px 0;"><i class="fas fa-thumbs-up"></i> Kelebihan AI</h4>
                        <ul style="color: #166534; padding-left: 20px;">
                            <li><b>Otomatisasi:</b> Mengerjakan tugas repetitif tanpa lelah.</li>
                            <li><b>Akurasi:</b> Menghilangkan <i>human error</i> di hitungan rumit.</li>
                            <li><b>Analisis Big Data:</b> Manusia butuh seumur hidup baca jutaan dokumen, AI hanya butuh hitungan menit.</li>
                            <li><b>Ketersediaan 24/7:</b> Selalu online.</li>
                        </ul>
                    </div>
                    
                    <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 24px; border-radius: 16px;">
                        <h4 style="color: #991b1b; margin: 0 0 16px 0;"><i class="fas fa-thumbs-down"></i> Keterbatasan AI</h4>
                        <ul style="color: #991b1b; padding-left: 20px;">
                            <li><b>Bias:</b> Mewarisi prasangka rasis/seksis dari data manusia.</li>
                            <li><b>Hallucination:</b> Bisa mengarang cerita dengan sangat meyakinkan!</li>
                            <li><b>Black Box:</b> Seringkali penciptanya sendiri tak paham mengapa AI mengambil keputusan X.</li>
                            <li><b>Biaya Tinggi:</b> Butuh resource komputasi dan listrik super besar.</li>
                        </ul>
                    </div>
                </div>
            \`
        },
        '/participant-ai-ethics': {
            title: 'Etika Artificial Intelligence',
            description: 'Mengapa etika sangat penting dalam pengembangan AI modern.',
            duration: '25 menit',
            tag: 'Etika',
            content: \`
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-shield-alt"></i> Topik 9: Etika AI
                    </h3>
                </div>

                <p>AI itu powerful. Sama seperti nuklir, bisa jadi energi berguna, bisa jadi senjata mematikan. Itulah mengapa kita butuh <b>Responsible AI (AI yang Bertanggung Jawab)</b>.</p>

                <ul style="display: flex; flex-direction: column; gap: 16px; margin-top: 24px;">
                    <li style="background: #fff; padding: 16px; border: 1px solid var(--fellow-line); border-radius: 12px;"><b>AI Bias & Fairness:</b> Pastikan AI rekrutmen perusahaan tidak menolak kandidat hanya karena gender atau ras tertentu gara-gara data pelatihannya jelek.</li>
                    <li style="background: #fff; padding: 16px; border: 1px solid var(--fellow-line); border-radius: 12px;"><b>Explainable AI (XAI):</b> AI diagnosa dokter harus bisa "menjelaskan alasannya". Dokter tidak mau menerima vonis kanker dari AI yang sifatnya <i>black box</i>.</li>
                    <li style="background: #fff; padding: 16px; border: 1px solid var(--fellow-line); border-radius: 12px;"><b>Privacy & Copyright:</b> Gambar Generative AI (Midjourney) dituduh mencuri karya seniman manusia tanpa izin. Model LLM menelan privasi pengguna internet.</li>
                    <li style="background: #fff; padding: 16px; border: 1px solid var(--fellow-line); border-radius: 12px;"><b>Deepfake:</b> Membuat wajah atau suara tokoh berbohong atau menyebarkan hoax. Harus ada AI Governance dan aturan tegas.</li>
                </ul>
            \`
        },
        '/participant-ai-future': {
            title: 'Masa Depan AI',
            description: 'Melihat tren AI di tahun-tahun mendatang.',
            duration: '20 menit',
            tag: 'Vision',
            content: \`
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-rocket"></i> Topik 10: Future of AI
                    </h3>
                </div>

                <p>Mau dibawa ke mana AI selanjutnya? Ini tren masa depan yang sedang marak dikembangkan!</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 24px;">
                    <div style="padding: 16px; background: rgba(246,51,146,0.05); border-radius: 12px;">
                        <h4 style="margin: 0 0 8px 0;">🤖 AI Agent & Multi-Agent</h4>
                        <p style="margin: 0; font-size: 0.9rem;">Bukan cuma chat, AI bisa melakukan aksi. Misalnya: "Cari penerbangan termurah dan sekalian booking." Multi-agent berarti beberapa AI ngobrol dan memecahkan masalah bersama.</p>
                    </div>
                    <div style="padding: 16px; background: rgba(246,51,146,0.05); border-radius: 12px;">
                        <h4 style="margin: 0 0 8px 0;">🦾 Robotics & Embodied AI</h4>
                        <p style="margin: 0; font-size: 0.9rem;">AI dimasukkan ke tubuh robot humanoid agar bisa melihat, menyentuh, dan berinteraksi di dunia fisik (contoh: Tesla Optimus).</p>
                    </div>
                    <div style="padding: 16px; background: rgba(246,51,146,0.05); border-radius: 12px;">
                        <h4 style="margin: 0 0 8px 0;">📱 Edge AI</h4>
                        <p style="margin: 0; font-size: 0.9rem;">AI yang berjalan langsung di HP atau smartwatch kamu secara offline, tanpa butuh internet ke server cloud, lebih privat & cepat.</p>
                    </div>
                    <div style="padding: 16px; background: rgba(246,51,146,0.05); border-radius: 12px;">
                        <h4 style="margin: 0 0 8px 0;">🧬 AI + Blockchain & IoT</h4>
                        <p style="margin: 0; font-size: 0.9rem;">Kombinasi sensor pintar di seluruh kota (IoT) yang diproses AI, serta diamankan kepemilikan datanya dengan Blockchain.</p>
                    </div>
                </div>
            \`
        },
        '/participant-ai-summary': {
            title: 'Ringkasan Modul',
            description: 'Kesimpulan utama dari Modul Pengantar AI.',
            duration: '10 menit',
            tag: 'Wrap-up',
            content: \`
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-check-circle"></i> Ringkasan Pengantar AI
                    </h3>
                </div>

                <div style="padding: 24px; background: #fff; border: 2px dashed var(--fellow-pink); border-radius: 20px; text-align: center;">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=HerAI&backgroundColor=ffdfed" alt="HerAI Buddy" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 16px;">
                    <h3 style="margin: 0 0 16px 0;">Selamat! Kamu Telah Menyelesaikan Modul 1! 🎉</h3>
                    <p>
                        Kita telah membedah bahwa AI bukanlah sihir, melainkan gabungan <b>Data, Algoritma, dan Komputasi</b>. Mulai dari sejarah AI di 1950, pembagian Machine Learning & Deep Learning, hingga masa depannya yang menakjubkan.
                    </p>
                    <p style="margin-bottom: 0;">
                        <b>Selanjutnya:</b> Jangan lupa kerjakan <b>Quiz</b> dan selesaikan <b>Mini Project: AI Around Me</b> di tab diskusi/latihan ya!
                    </p>
                </div>
            \`
        }
    };`;

const introLessonRoutesNew = `const introLessonRoutes = [
        { path: '/participant-ai-intro', name: 'Apa itu AI?' },
        { path: '/participant-ai-history', name: 'Sejarah AI' },
        { path: '/participant-ai-types', name: 'Jenis-Jenis AI' },
        { path: '/participant-ai-components', name: 'Komponen Utama AI' },
        { path: '/participant-ai-applications', name: 'Penerapan AI' },
        { path: '/participant-ai-pipeline', name: 'AI Pipeline' },
        { path: '/participant-ai-ml-dl', name: 'AI vs ML vs DL' },
        { path: '/participant-ai-pros-cons', name: 'Kelebihan & Keterbatasan' },
        { path: '/participant-ai-ethics', name: 'Etika AI' },
        { path: '/participant-ai-future', name: 'Future of AI' },
        { path: '/participant-ai-summary', name: 'Ringkasan' }
    ];`;

const startIndex = settingsContent.indexOf('const generatedLessonContent = {');
const endIndexStr = 'window.fellowDashboardSettings = {';
const endIndex = settingsContent.indexOf(endIndexStr);

if (startIndex !== -1 && endIndex !== -1) {
    const beforeBlock = settingsContent.substring(0, startIndex);
    const afterBlock = settingsContent.substring(endIndex);
    settingsContent = beforeBlock + newContentBlocks + "\\n\\n    " + afterBlock;
}

settingsContent = settingsContent.replace(/const introLessonRoutes = \[[\\s\\S]*?\];/, introLessonRoutesNew);

fs.writeFileSync(settingsPath, settingsContent, 'utf8');
console.log('Settings updated successfully (v2)!');
