(function() {
    'use strict';

    const STORAGE_KEY = 'heraiParticipantPortalSettings';
    const API_URL_KEY = 'heraiParticipantPortalApiUrl';
    const ADMIN_KEY = 'heraiParticipantPortalAdminKey';
    const SIDEBAR_STATE_KEY = 'heraiFellowSidebarExpanded';
    const PARTICIPANT_SESSION_KEY = 'heraiParticipantSession';
    const DEFAULT_SETTINGS = {
        enabled: true,
        pages: {
            dashboard: true,
            modules: true,
            profile: true,
            chatroom: true,
            mentor: true,
            tasks: true,
            projects: true,
            events: true,
            community: true,
            certificates: true,
            leaderboard: true,
            faq: true,
            settings: true
        }
    };

    function apiBase() {
        return window.PARTICIPANT_PORTAL_API_URL
            || localStorage.getItem(API_URL_KEY)
            || 'http://127.0.0.1:8092';
    }

    function mergeSettings(settings = {}) {
        return {
            ...DEFAULT_SETTINGS,
            ...settings,
            pages: {
                ...DEFAULT_SETTINGS.pages,
                ...(settings.pages || {})
            }
        };
    }

    function localSettings() {
        try {
            return mergeSettings(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
        } catch {
            return mergeSettings();
        }
    }

    async function fetchSettings() {
        const fallback = localSettings();
        try {
            const response = await fetch(`${apiBase()}/api/participant-portal/settings`, { cache: 'no-store' });
            if (!response.ok) return fallback;
            const result = await response.json();
            const merged = mergeSettings(result.settings || {});
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            return merged;
        } catch {
            return fallback;
        }
    }

    async function saveSettings(settings) {
        const merged = mergeSettings(settings);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        try {
            const headers = { 'Content-Type': 'application/json' };
            const adminKey = localStorage.getItem(ADMIN_KEY);
            if (adminKey) headers['X-HerAI-Admin-Key'] = adminKey;
            const response = await fetch(`${apiBase()}/api/participant-portal/settings`, {
                method: 'PUT',
                headers,
                body: JSON.stringify({ settings: merged })
            });
            if (!response.ok) throw new Error('Participant portal API rejected the update');
            const result = await response.json();
            const saved = mergeSettings(result.settings || merged);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
            return saved;
        } catch (error) {
            console.warn('Participant portal settings saved locally only:', error.message);
            return merged;
        }
    }

    function applySettings(settings, pageName) {
        const merged = mergeSettings(settings);
        document.querySelectorAll('[data-fellow-nav]').forEach(link => {
            const key = link.getAttribute('data-fellow-nav');
            link.hidden = merged.pages[key] === false;
        });

        const isBlocked = merged.enabled === false || (pageName && merged.pages[pageName] === false);
        const root = document.querySelector('.fellow-dashboard');
        if (root) root.classList.toggle('fellow-dashboard-locked', isBlocked);
        if (isBlocked && root) {
            root.innerHTML = `
                <section class="fellow-locked-state">
                    <div>
                        <i class="fas fa-lock"></i>
                        <h1>Dashboard Peserta Belum Aktif</h1>
                        <p>Halaman ini sedang dinonaktifkan oleh admin. Silakan kembali lagi setelah panitia membuka aksesnya.</p>
                        <a href="#/home">Kembali ke Beranda</a>
                    </div>
                </section>
            `;
        }
    }

    function attachSidebarRail() {
        const sidebar = document.querySelector('.fellow-sidebar');
        if (!sidebar || sidebar.dataset.railReady) return;
        sidebar.dataset.railReady = 'true';
        const dashboard = sidebar.closest('.fellow-dashboard');
        const toggle = dashboard?.querySelector('.fellow-menu-toggle');
        const scrim = dashboard?.querySelector('.fellow-sidebar-scrim');
        const logo = sidebar.querySelector('.fellow-logo');

        const setMobileMenu = (open) => {
            if (!dashboard) return;
            dashboard.classList.toggle('sidebar-open', open);
            toggle?.setAttribute('aria-expanded', String(open));
            toggle?.querySelector('i')?.classList.toggle('fa-bars', !open);
            toggle?.querySelector('i')?.classList.toggle('fa-xmark', open);
        };

        const setDesktopSidebar = (open, persist = true) => {
            if (window.matchMedia('(max-width: 860px)').matches) return;
            sidebar.classList.toggle('is-expanded', open);
            dashboard?.classList.toggle('sidebar-expanded', open);
            logo?.setAttribute('aria-expanded', String(open));
            if (persist) localStorage.setItem(SIDEBAR_STATE_KEY, open ? 'true' : 'false');
        };

        const stored = localStorage.getItem(SIDEBAR_STATE_KEY);
        setDesktopSidebar(stored === 'true', false);

        logo?.setAttribute('role', 'button');
        logo?.setAttribute('aria-expanded', String(sidebar.classList.contains('is-expanded')));
        logo?.addEventListener('click', (event) => {
            if (window.matchMedia('(max-width: 860px)').matches) return;
            event.preventDefault();
            setDesktopSidebar(!sidebar.classList.contains('is-expanded'));
        });
        toggle?.addEventListener('click', () => {
            const next = !dashboard?.classList.contains('sidebar-open');
            setMobileMenu(next);
        });
        scrim?.addEventListener('click', () => setMobileMenu(false));
        sidebar.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                if (window.matchMedia('(max-width: 860px)').matches) {
                    setMobileMenu(false);
                }
            });
        });
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') setMobileMenu(false);
        });
        window.addEventListener('resize', () => {
            if (!window.matchMedia('(max-width: 860px)').matches) {
                setMobileMenu(false);
                setDesktopSidebar(localStorage.getItem(SIDEBAR_STATE_KEY) === 'true', false);
            } else {
                sidebar.classList.remove('is-expanded');
                dashboard?.classList.remove('sidebar-expanded');
                logo?.setAttribute('aria-expanded', 'false');
            }
        });
    }

    function setActiveFellowNav(pageName) {
        const path = window.location.hash.replace(/^#/, '') || '/participant-dashboard';
        const pageByPath = {
            '/participant-dashboard': 'dashboard',
            '/participant-modules': 'modules',
            '/participant-ai-fundamentals': 'modules',
            '/participant-ai-intro': 'modules',
            '/participant-ai-intro-practice': 'modules',
            '/participant-ai-intro-quiz': 'modules',
            '/participant-ai-intro-discussion': 'modules',
            '/participant-ai-history': 'modules',
            '/participant-ai-types': 'modules',
            '/participant-ai-components': 'modules',
            '/participant-ai-applications': 'modules',
            '/participant-ai-summary': 'modules',
            '/participant-profile': 'profile',
            '/participant-mentor': 'mentor',
            '/participant-tasks': 'tasks',
            '/participant-projects': 'projects',
            '/participant-events': 'events',
            '/participant-community': 'community',
            '/participant-certificates': 'certificates',
            '/participant-leaderboard': 'leaderboard',
            '/participant-help': 'faq',
            '/participant-settings': 'settings'
        };
        const activeKey = pageByPath[path] || pageName;
        document.querySelectorAll('.fellow-menu a').forEach((link) => {
            link.classList.toggle('active', link.dataset.fellowNav === activeKey);
        });
    }

    function initModuleInteractions() {
        const modulePage = document.querySelector('.fellow-modules-page');
        if (!modulePage || modulePage.dataset.moduleReady) return;
        modulePage.dataset.moduleReady = 'true';

        modulePage.querySelectorAll('.course-card').forEach(card => {
            const link = card.querySelector('a');
            if (!link || card.dataset.clickReady) return;
            card.dataset.clickReady = 'true';
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                if (!e.target.closest('a, button, input, textarea')) {
                    link.click();
                }
            });
        });

        modulePage.querySelectorAll('[data-module-tab]').forEach((button) => {
            button.addEventListener('click', () => {
                modulePage.querySelectorAll('[data-module-tab]').forEach(item => item.classList.toggle('active', item === button));
                const target = button.dataset.moduleTab;
                if (target === 'foundation') {
                    document.getElementById('moduleCatalogPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else if (target === 'specialization') {
                    document.getElementById('specializationTrackPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    modulePage.querySelector('.module-tabs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        modulePage.querySelectorAll('[data-course-filter]').forEach((button) => {
            button.addEventListener('click', () => {
                const filter = button.dataset.courseFilter;
                modulePage.querySelectorAll('[data-course-filter]').forEach(item => item.classList.toggle('active', item === button));
                modulePage.querySelectorAll('.course-category').forEach((category) => {
                    const group = category.querySelector('[data-course-group]')?.dataset.courseGroup || '';
                    category.hidden = filter !== 'all' && group !== filter;
                });
            });
        });

        modulePage.querySelectorAll('[data-collapse-panel]').forEach((button) => {
            button.addEventListener('click', () => {
                const panel = document.getElementById(button.dataset.collapsePanel);
                if (!panel) return;
                const collapsed = panel.classList.toggle('is-collapsed');
                button.setAttribute('aria-expanded', String(!collapsed));
                button.querySelector('i')?.classList.toggle('fa-chevron-up', !collapsed);
                button.querySelector('i')?.classList.toggle('fa-chevron-down', collapsed);
            });
        });
    }

    const introLessonRoutes = [
        { path: '/participant-ai-intro', title: 'AI di Sekitar Kita', short: 'AI Sekitar Kita' },
        { path: '/participant-ai-history', title: 'Definisi Modern AI', short: 'Definisi AI' },
        { path: '/participant-ai-components', title: 'Software Biasa vs Sistem AI', short: 'Software vs AI' },
        { path: '/participant-ai-types', title: 'Model Mental Cara Kerja AI', short: 'Cara Kerja AI' },
        { path: '/participant-ai-pipeline', title: 'Training, Inferensi, dan Human Check', short: 'Training & Inferensi' },
        { path: '/participant-ai-ml-dl', title: 'Peta Istilah AI, ML, DL, dan ANI', short: 'Peta Istilah' },
        { path: '/participant-ai-applications', title: 'Penerapan AI dalam Kehidupan', short: 'Penerapan AI' },
        { path: '/participant-ai-pros-cons', title: 'Manfaat dan Keterbatasan AI', short: 'Batasan AI' },
        { path: '/participant-ai-ethics', title: 'Bias, Halusinasi, Privasi, dan Black Box', short: 'Risiko Etis' },
        { path: '/participant-ai-summary', title: 'Audit Sistem Sosio-Teknis', short: 'Audit AI' }
    ];

    const generatedLessonContent = {
        '/participant-ai-history': {
            title: 'Definisi Modern AI',
            description: 'Meluruskan definisi AI agar tidak terjebak pada gambaran robot sadar diri atau fiksi ilmiah.',
            duration: '35 menit',
            tag: 'Fondasi',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-compass"></i> Topik 2: Definisi Modern AI
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Menjelaskan AI secara akurat sebagai sistem berbasis mesin yang menghasilkan output dari input.
                    </p>
                </div>

                <h3>2.1 Kenapa Definisi AI Perlu Diluruskan</h3>
                <p>Banyak orang pertama kali mengenal AI dari film, novel, atau berita sensasional. Akibatnya, AI sering dibayangkan sebagai robot fisik yang punya emosi, kesadaran diri, atau niat tersembunyi. Gambaran itu menarik, tetapi kurang membantu untuk belajar AI yang dipakai hari ini.</p>
                <p>Dalam praktik modern, AI jauh lebih sering berbentuk sistem prediktif yang bekerja di balik aplikasi. Ia menerima input, mencari pola, lalu menghasilkan output. Output itu bisa berupa rekomendasi video, label spam, terjemahan kalimat, ringkasan teks, skor risiko, atau saran rute.</p>

                <div style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px; margin: 24px 0;">
                    <h4 style="margin: 0 0 10px 0; color: var(--fellow-text);"><i class="fas fa-quote-left" style="color: var(--fellow-pink);"></i> Definisi kerja yang dipakai modul ini</h4>
                    <p style="margin: 0; color: var(--fellow-text);">AI adalah sistem berbasis mesin yang, untuk tujuan tertentu, menggunakan input untuk menyimpulkan cara menghasilkan output seperti prediksi, rekomendasi, konten, atau keputusan yang dapat memengaruhi lingkungan digital maupun fisik.</p>
                </div>

                <h3>2.2 Apa yang AI Lakukan dengan Baik</h3>
                <p>Kekuatan utama AI bukan karena ia memahami dunia seperti manusia. Kekuatan utamanya ada pada kemampuan membaca pola dari data dalam skala besar. AI dapat menemukan keteraturan yang terlalu banyak, terlalu cepat, atau terlalu rumit untuk dicek manual.</p>
                <ul style="line-height: 1.8; color: var(--fellow-text);">
                    <li><strong>Mengenali pola:</strong> menemukan kemiripan dalam teks, gambar, suara, perilaku klik, atau transaksi.</li>
                    <li><strong>Memprediksi kemungkinan:</strong> memperkirakan kata berikutnya, rute tercepat, risiko spam, atau minat pengguna.</li>
                    <li><strong>Mengurutkan pilihan:</strong> memilih kandidat, video, produk, atau jawaban yang dianggap paling relevan.</li>
                    <li><strong>Membantu keputusan:</strong> memberi sinyal awal yang masih perlu diperiksa manusia.</li>
                </ul>

                <h3>2.3 Apa yang AI Tidak Lakukan</h3>
                <p>AI tidak otomatis memahami makna, nilai moral, konteks sosial, atau dampak keputusan seperti manusia. Ketika chatbot menulis jawaban rapi, itu bukan bukti bahwa ia benar. Ketika sistem memberi skor kandidat, itu bukan bukti bahwa penilaiannya adil. Ketika aplikasi peta memberi rute tercepat, itu bukan bukti bahwa rute tersebut paling aman untuk warga sekitar.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0;">
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-text);"><i class="fas fa-circle-check" style="color: var(--fellow-pink);"></i> Definisi yang membantu</h4>
                        <p style="margin: 0; color: var(--fellow-muted);">AI sebagai sistem yang mengolah input, membaca pola, dan menghasilkan output untuk tujuan tertentu.</p>
                    </article>
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-text);"><i class="fas fa-circle-xmark" style="color: var(--fellow-pink);"></i> Definisi yang menyesatkan</h4>
                        <p style="margin: 0; color: var(--fellow-muted);">AI sebagai mesin yang berpikir, merasa, dan memahami dunia persis seperti manusia.</p>
                    </article>
                </div>

                <h3>2.4 Prinsip Awal untuk Peserta</h3>
                <p>Dalam modul ini, setiap sistem AI akan dibaca dengan pertanyaan praktis: sistem ini dibuat untuk tujuan apa, input apa yang dipakai, pola apa yang dipelajari, output apa yang muncul, dan siapa yang memeriksa dampaknya.</p>
            `
        },
        '/participant-ai-components': {
            title: 'Software Biasa vs Sistem AI',
            description: 'Membedakan program deterministik dari sistem yang belajar dari data dan pola historis.',
            duration: '40 menit',
            tag: 'Konsep Inti',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-code-branch"></i> Topik 3: Software Biasa vs Sistem AI
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Mengetahui kapan sebuah aplikasi hanya software biasa dan kapan ia layak disebut sistem AI.
                    </p>
                </div>

                <h3>3.1 Software Biasa: Aturan Ditulis Manual</h3>
                <p>Software biasa bekerja dengan aturan yang jelas, eksplisit, dan sudah ditulis oleh pemrogram. Jika kondisi A terjadi, sistem melakukan B. Jika kondisi tidak terpenuhi, sistem melakukan C. Polanya deterministik: input yang sama akan menghasilkan output yang sama selama aturan tidak diubah.</p>
                <p>Contoh sederhana adalah kalkulator. Ketika pengguna menulis 2 + 2, kalkulator tidak belajar dari jutaan operasi matematika. Ia menjalankan aturan aritmatika yang pasti. Contoh lain adalah formulir pendaftaran yang menolak email jika tidak ada simbol @. Validasi seperti itu berguna, tetapi bukan AI.</p>

                <h3>3.2 Sistem AI: Pola Dipelajari dari Data</h3>
                <p>Sistem AI tidak selalu diberi aturan satu per satu. Ia diberi banyak contoh, lalu mencari pola yang sering muncul. Dari pola itu, sistem membuat prediksi ketika menghadapi data baru.</p>
                <p>Filter spam tidak perlu diberi aturan kaku bahwa setiap kata tertentu pasti penipuan. Ia membaca banyak email yang pernah ditandai spam atau bukan spam, lalu menemukan kombinasi pola: subjek, kata, tautan, pengirim, waktu kirim, format, dan riwayat laporan pengguna.</p>

                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0;">
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 10px 0; color: var(--fellow-text);"><i class="fas fa-calculator" style="color: var(--fellow-pink);"></i> Software biasa</h4>
                        <ul style="margin: 0; padding-left: 18px; line-height: 1.8; color: var(--fellow-text);">
                            <li>Aturan ditulis manual.</li>
                            <li>Tidak belajar dari contoh baru.</li>
                            <li>Output mengikuti logika yang sudah ditentukan.</li>
                            <li>Cocok untuk proses yang pasti dan stabil.</li>
                        </ul>
                    </article>
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 10px 0; color: var(--fellow-text);"><i class="fas fa-chart-line" style="color: var(--fellow-pink);"></i> Sistem AI</h4>
                        <ul style="margin: 0; padding-left: 18px; line-height: 1.8; color: var(--fellow-text);">
                            <li>Belajar dari banyak contoh.</li>
                            <li>Mencari korelasi dan pola statistik.</li>
                            <li>Output berupa prediksi atau rekomendasi.</li>
                            <li>Cocok untuk data besar dan pola kompleks.</li>
                        </ul>
                    </article>
                </div>

                <h3>3.3 Analogi Buku Resep dan Pekerja Magang</h3>
                <p>Software biasa seperti buku resep. Semua langkah harus ditulis jelas: bahan, takaran, suhu, dan waktu. Jika ada langkah yang tidak ditulis, sistem tidak tahu apa yang harus dilakukan.</p>
                <p>AI lebih mirip pekerja magang yang diberi ribuan contoh pekerjaan lama. Ia mengamati contoh yang dianggap benar, melihat pola yang sering muncul, lalu mencoba membantu pada kasus baru. Analogi ini membuat AI lebih mudah dipahami: ia tidak menunggu aturan lengkap, tetapi belajar dari contoh.</p>
                <p>Namun analogi ini juga menunjukkan risiko. Jika contoh lama tidak adil, pekerja magang akan mempelajari kebiasaan yang tidak adil. Jika arsip rekrutmen lama lebih sering memilih kandidat dari kelompok tertentu, sistem bisa menganggap kelompok itulah pola sukses.</p>

                <h3>3.4 Cara Mengecek Apakah Sesuatu AI</h3>
                <ol style="line-height: 1.8; color: var(--fellow-text);">
                    <li>Apakah sistem hanya menjalankan aturan tetap?</li>
                    <li>Apakah sistem memakai data historis untuk mencari pola?</li>
                    <li>Apakah output-nya berupa prediksi, rekomendasi, label, skor, atau konten?</li>
                    <li>Apakah sistem bisa salah karena data latihnya tidak lengkap atau bias?</li>
                    <li>Apakah manusia perlu memeriksa hasilnya sebelum keputusan penting dibuat?</li>
                </ol>
            `
        },
        '/participant-ai-types': {
            title: 'Model Mental Cara Kerja AI',
            description: 'Membangun model mental sederhana: tujuan, input, pola, model, output, dan pemeriksaan manusia.',
            duration: '55 menit',
            tag: 'Model Mental',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-route"></i> Topik 4: Model Mental Cara Kerja AI
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Memahami alur kerja AI tanpa masuk ke kode, rumus, atau arsitektur teknis.
                    </p>
                </div>

                <h3>2.1 Model Mental Enam Langkah</h3>
                <p>Setiap sistem AI bisa dibaca melalui alur sederhana: <strong>Tujuan, Input, Pola, Model, Output, dan Pemeriksaan Manusia</strong>. Alur ini membantu kita membedah AI tanpa perlu melihat kode di balik layar.</p>
                <p>Model mental ini sengaja dibuat sederhana agar peserta bisa menggunakannya pada banyak situasi: email, rekomendasi video, chatbot, peta digital, sistem pinjaman, sampai alat rekrutmen. Tujuannya bukan menghafal istilah teknis, tetapi membiasakan diri melihat AI sebagai rangkaian keputusan yang bisa ditanya dan diaudit.</p>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0;">
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <i class="fas fa-bullseye" style="color: var(--fellow-pink); font-size: 1.5rem; margin-bottom: 10px; display: block;"></i>
                        <h4 style="margin: 0 0 8px 0;">Tujuan</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Apa yang ingin dibantu sistem: menyaring spam, memberi rekomendasi, menerjemahkan teks, atau memprediksi rute.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <i class="fas fa-database" style="color: var(--fellow-pink); font-size: 1.5rem; margin-bottom: 10px; display: block;"></i>
                        <h4 style="margin: 0 0 8px 0;">Input</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Data yang masuk, seperti teks email, riwayat klik, lokasi, waktu, gambar, atau laporan pengguna.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <i class="fas fa-wave-square" style="color: var(--fellow-pink); font-size: 1.5rem; margin-bottom: 10px; display: block;"></i>
                        <h4 style="margin: 0 0 8px 0;">Pola</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Keteraturan statistik yang ditemukan mesin dari banyak contoh masa lalu.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <i class="fas fa-cubes" style="color: var(--fellow-pink); font-size: 1.5rem; margin-bottom: 10px; display: block;"></i>
                        <h4 style="margin: 0 0 8px 0;">Model</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Pola yang sudah dipadatkan menjadi sistem prediktif yang siap digunakan.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <i class="fas fa-arrow-up-right-from-square" style="color: var(--fellow-pink); font-size: 1.5rem; margin-bottom: 10px; display: block;"></i>
                        <h4 style="margin: 0 0 8px 0;">Output</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Prediksi, label, rekomendasi, konten, atau keputusan yang muncul ke pengguna.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <i class="fas fa-user-check" style="color: var(--fellow-pink); font-size: 1.5rem; margin-bottom: 10px; display: block;"></i>
                        <h4 style="margin: 0 0 8px 0;">Pemeriksaan Manusia</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Manusia memeriksa apakah output masuk akal, aman, adil, dan perlu dikoreksi.</p>
                    </article>
                </div>

                <h3 style="margin-top: 32px;">2.2 Contoh: Penyaring Email Spam</h3>
                <p>Bayangkan kotak masuk email yang otomatis memisahkan pesan penting dari spam. Sistemnya tidak sekadar diberi aturan kaku seperti &quot;jika ada kata hadiah, pasti spam&quot;. Sistem belajar dari banyak contoh email masa lalu dan mencari pola yang sering muncul pada pesan penipuan.</p>
                <p>Di balik fitur sederhana ini ada keputusan yang berlapis. Email dari pengirim baru bisa terlihat mencurigakan karena kombinasi subjek, isi pesan, tautan, waktu kirim, alamat domain, dan riwayat laporan pengguna lain. Sistem tidak tahu makna penipuan seperti manusia, tetapi ia bisa membaca korelasi yang sering muncul pada email berbahaya.</p>
                <div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0;">
                    <div style="background: white; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: var(--fellow-pink);"><i class="fas fa-flag"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">Tujuan</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Memprediksi apakah email baru adalah spam atau bukan spam.</p>
                        </div>
                    </div>
                    <div style="background: white; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: var(--fellow-pink);"><i class="fas fa-inbox"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">Input dan Pola</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Sistem membaca contoh email lama, subjek, isi pesan, asal pengirim, waktu kirim, dan label spam dari pengguna.</p>
                        </div>
                    </div>
                    <div style="background: white; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: var(--fellow-pink);"><i class="fas fa-tags"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">Model dan Output</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Model memberi label pada email baru. Output-nya bisa berupa &quot;spam&quot;, &quot;bukan spam&quot;, atau skor risiko.</p>
                        </div>
                    </div>
                    <div style="background: white; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: var(--fellow-pink);"><i class="fas fa-rotate"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">Pemeriksaan Manusia</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Jika email wawancara kerja masuk folder spam, pengguna perlu memulihkan dan memberi koreksi.</p>
                        </div>
                    </div>
                </div>

                <h3 style="margin-top: 32px;">2.3 Pelatihan dan Inferensi</h3>
                <p>Proses AI biasanya terbagi menjadi dua fase. <strong>Pelatihan</strong> adalah saat sistem belajar dari banyak contoh dan membentuk model. <strong>Inferensi</strong> adalah saat model yang sudah jadi digunakan untuk memproses input baru dan menghasilkan output.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0;">
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-text);"><i class="fas fa-graduation-cap" style="color: var(--fellow-pink);"></i> Training</h4>
                        <p style="margin: 0 0 10px 0; color: var(--fellow-muted);">Fase belajar dari data historis. Biasanya lebih berat, memakan waktu, dan membutuhkan komputasi besar.</p>
                        <ul style="margin: 0; padding-left: 18px; color: var(--fellow-text); font-size: .9rem; line-height: 1.7;">
                            <li>Data contoh dikumpulkan dan diberi label.</li>
                            <li>Sistem mencari pola yang berulang.</li>
                            <li>Pola disimpan menjadi model prediktif.</li>
                        </ul>
                    </article>
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-text);"><i class="fas fa-bolt" style="color: var(--fellow-pink);"></i> Inferensi</h4>
                        <p style="margin: 0 0 10px 0; color: var(--fellow-muted);">Fase penggunaan harian. Model yang sudah jadi menerima input baru dan menghasilkan output cepat.</p>
                        <ul style="margin: 0; padding-left: 18px; color: var(--fellow-text); font-size: .9rem; line-height: 1.7;">
                            <li>Email baru dilabeli spam atau bukan.</li>
                            <li>Kalimat baru diterjemahkan.</li>
                            <li>Rute baru direkomendasikan.</li>
                        </ul>
                    </article>
                </div>

                <div style="background: rgba(246,51,146,.08); border: 1px solid rgba(246,51,146,.18); border-radius: 16px; padding: 18px 20px; margin: 28px 0; display: flex; align-items: flex-start; gap: 12px;">
                    <i class="fas fa-cloud-sun-rain" style="color: var(--fellow-pink); font-size: 1.1rem; margin-top: 2px;"></i>
                    <div>
                        <h4 style="margin: 0 0 6px 0; color: var(--fellow-text); font-size: 1rem;">Analogi prediksi cuaca</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .95rem;">AI bekerja seperti orang yang menebak hujan dari pola awan, kelembapan, dan angin masa lalu. Prediksinya bisa sangat membantu, tetapi tetap probabilistik dan bisa keliru.</p>
                    </div>
                </div>

                <h3>2.4 Cara Pandang Sosio-Teknis</h3>
                <p>Kualitas AI tidak hanya ditentukan oleh kode. Sistem juga dipengaruhi oleh siapa yang membiayai, data siapa yang dominan, kelompok mana yang terwakili, dan siapa yang menanggung dampak saat sistem salah. Karena itu, setiap output AI perlu dilihat sebagai hasil interaksi antara teknologi dan masyarakat.</p>
                <p>Contohnya, sistem rekrutmen yang dilatih dari arsip karyawan sukses selama sepuluh tahun bisa tampak objektif, padahal arsip lama mungkin mencerminkan budaya kerja yang tidak adil. Jika masa lalu lebih sering memberi kesempatan kepada kelompok tertentu, model dapat belajar bahwa kelompok itulah pola kandidat ideal.</p>
                <p>Karena itu, pertanyaan pentingnya bukan hanya &quot;apakah modelnya pintar?&quot;, tetapi juga: data siapa yang dipakai, siapa yang tidak terlihat dalam data, siapa yang diuntungkan, siapa yang berisiko dirugikan, dan apakah ada jalur banding ketika sistem mengambil keputusan yang salah.</p>

                <div style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px; margin-top: 24px;">
                    <h4 style="margin: 0 0 12px 0; color: var(--fellow-text);"><i class="fas fa-clipboard-question" style="color: var(--fellow-pink);"></i> Checklist saat melihat sistem AI</h4>
                    <ol style="margin: 0; padding-left: 20px; color: var(--fellow-text); line-height: 1.8;">
                        <li>Apa tujuan bisnis atau tujuan sosial dari sistem ini?</li>
                        <li>Input apa yang terlihat dan input apa yang mungkin tersembunyi?</li>
                        <li>Pola apa yang mungkin dipelajari dari data masa lalu?</li>
                        <li>Output apa yang memengaruhi pengguna?</li>
                        <li>Siapa yang memeriksa dan bertanggung jawab jika output keliru?</li>
                    </ol>
                </div>
            `
        },
        '/participant-ai-pipeline': {
            title: 'Training, Inferensi, dan Human Check',
            description: 'Memahami dua fase utama sistem AI dan kenapa pemeriksaan manusia harus menjadi bagian dari alur.',
            duration: '45 menit',
            tag: 'Alur Kerja',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-arrows-spin"></i> Topik 5: Training, Inferensi, dan Human Check
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Memahami bahwa AI tidak hanya soal model, tetapi juga proses belajar, penggunaan, dan koreksi.
                    </p>
                </div>

                <h3>5.1 Dua Fase Utama AI</h3>
                <p>AI modern biasanya memiliki dua fase besar: <strong>training</strong> dan <strong>inferensi</strong>. Training adalah masa belajar. Inferensi adalah masa pemakaian. Perbedaan ini penting karena banyak orang hanya melihat output AI di layar, padahal kualitas output sangat ditentukan oleh proses belajar sebelumnya.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0;">
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-text);"><i class="fas fa-graduation-cap" style="color: var(--fellow-pink);"></i> Training</h4>
                        <p style="margin: 0 0 10px 0; color: var(--fellow-muted);">Sistem diberi banyak contoh untuk mencari pola. Fase ini dapat membutuhkan data besar, waktu lama, dan komputasi kuat.</p>
                        <ul style="margin: 0; padding-left: 18px; line-height: 1.8; color: var(--fellow-text);">
                            <li>Data dikumpulkan.</li>
                            <li>Contoh diberi label atau struktur.</li>
                            <li>Sistem mencari pola.</li>
                            <li>Pola disimpan menjadi model.</li>
                        </ul>
                    </article>
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-text);"><i class="fas fa-bolt" style="color: var(--fellow-pink);"></i> Inferensi</h4>
                        <p style="margin: 0 0 10px 0; color: var(--fellow-muted);">Model yang sudah jadi menerima input baru dan memberi output. Fase ini biasanya terasa cepat bagi pengguna.</p>
                        <ul style="margin: 0; padding-left: 18px; line-height: 1.8; color: var(--fellow-text);">
                            <li>Email baru dilabeli spam atau bukan.</li>
                            <li>Kalimat baru diterjemahkan.</li>
                            <li>Rute baru direkomendasikan.</li>
                            <li>Chatbot menyusun jawaban baru.</li>
                        </ul>
                    </article>
                </div>

                <h3>5.2 Contoh Lengkap: Email Spam</h3>
                <p>Pada fase training, sistem membaca banyak email lama. Sebagian sudah ditandai spam, sebagian bukan. Sistem mencari pola: kata tertentu, format tautan, reputasi pengirim, waktu pengiriman, gaya bahasa, dan laporan pengguna.</p>
                <p>Pada fase inferensi, email baru masuk. Sistem membandingkan email itu dengan pola yang sudah dipelajari, lalu memberi label. Jika labelnya salah, manusia harus bisa memperbaiki. Koreksi itu penting karena tanpa feedback, sistem bisa terus mengulang kesalahan.</p>

                <h3>5.3 Human Check Bukan Formalitas</h3>
                <p>Pemeriksaan manusia adalah tahap keselamatan. AI bekerja dengan probabilitas, bukan kepastian moral. Dalam kasus sepele seperti rekomendasi lagu, kesalahan mungkin hanya mengganggu. Dalam rekrutmen, kredit, kesehatan, hukum, atau keamanan, kesalahan bisa merugikan hidup seseorang.</p>
                <div style="background: rgba(246,51,146,.08); border: 1px solid rgba(246,51,146,.18); border-radius: 16px; padding: 20px; margin: 24px 0;">
                    <h4 style="margin: 0 0 10px 0; color: var(--fellow-text);"><i class="fas fa-user-check" style="color: var(--fellow-pink);"></i> Bentuk human check</h4>
                    <ul style="margin: 0; padding-left: 18px; line-height: 1.8; color: var(--fellow-text);">
                        <li>Memeriksa sumber dan fakta sebelum memakai jawaban chatbot.</li>
                        <li>Memberi tombol koreksi ketika rekomendasi tidak relevan.</li>
                        <li>Menyediakan proses banding untuk keputusan kredit atau rekrutmen.</li>
                        <li>Melakukan audit berkala terhadap dampak pada kelompok rentan.</li>
                    </ul>
                </div>

                <h3>5.4 Cara Pandang Sosio-Teknis</h3>
                <p>Training dan inferensi tidak terjadi di ruang netral. Data dikumpulkan oleh manusia, label dibuat oleh manusia, tujuan sistem ditentukan organisasi, dan dampaknya dirasakan masyarakat. Karena itu, AI harus dipahami sebagai sistem sosio-teknis: gabungan teknologi, data, institusi, budaya, dan keputusan manusia.</p>
            `
        },
        '/participant-ai-ml-dl': {
            title: 'Peta Istilah AI, ML, DL, dan ANI',
            description: 'Memisahkan istilah dasar agar peserta siap masuk ke modul lanjutan tanpa tertukar konsep.',
            duration: '45 menit',
            tag: 'Literasi AI',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-layer-group"></i> Topik 6: Peta Istilah AI, ML, DL, dan ANI
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Memahami hubungan payung antara AI, Machine Learning, Deep Learning, dan Narrow AI.
                    </p>
                </div>

                <h3>3.1 Hubungan AI, Machine Learning, dan Deep Learning</h3>
                <p>AI adalah payung besar. Di dalamnya ada Machine Learning, yaitu pendekatan yang membuat komputer belajar dari data. Di dalam Machine Learning ada Deep Learning, pendekatan berlapis yang kuat untuk gambar, suara, teks, dan data tak terstruktur berskala besar.</p>
                <p>Pemisahan istilah ini penting karena media sering memakai semua istilah secara bergantian. Tidak semua AI adalah Deep Learning, dan tidak semua sistem otomatis adalah Machine Learning. Dengan memahami payungnya, peserta tidak mudah tertukar ketika nanti masuk ke modul Python, Matematika, Machine Learning, NLP, dan Computer Vision.</p>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0;">
                    <div style="padding: 20px; border-radius: 16px; background: white; border: 1px solid var(--fellow-line);">
                        <i class="fas fa-umbrella" style="color: var(--fellow-pink); font-size: 1.6rem; margin-bottom: 10px;"></i>
                        <h4 style="margin: 0 0 8px 0;">Artificial Intelligence</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Semesta luas sistem yang menjalankan tugas yang biasanya butuh kecerdasan manusia.</p>
                    </div>
                    <div style="padding: 20px; border-radius: 16px; background: white; border: 1px solid var(--fellow-line);">
                        <i class="fas fa-chart-line" style="color: var(--fellow-pink); font-size: 1.6rem; margin-bottom: 10px;"></i>
                        <h4 style="margin: 0 0 8px 0;">Machine Learning</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Bagian dari AI yang menemukan pola dari data tanpa aturan langkah demi langkah yang ditulis manual.</p>
                    </div>
                    <div style="padding: 20px; border-radius: 16px; background: white; border: 1px solid var(--fellow-line);">
                        <i class="fas fa-network-wired" style="color: var(--fellow-pink); font-size: 1.6rem; margin-bottom: 10px;"></i>
                        <h4 style="margin: 0 0 8px 0;">Deep Learning</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Bagian dari ML yang memakai jaringan berlapis untuk mengenali pola kompleks.</p>
                    </div>
                </div>

                <h3 style="margin-top: 32px;">3.2 Fokus Praktis: ANI, Bukan Fiksi AGI</h3>
                <p>Teknologi yang kita gunakan hari ini adalah <strong>Artificial Narrow Intelligence</strong>: sistem spesialis yang sangat mahir pada tugas sempit. Sistem pendeteksi kanker tidak otomatis bisa bermain catur, dan sistem rekomendasi musik tidak otomatis memahami hukum. AGI dan ASI cukup dikenali sebagai konsep spekulatif, bukan fokus utama modul dasar.</p>
                <p>Artificial General Intelligence atau AGI biasanya dibayangkan sebagai mesin yang fleksibel seperti manusia di semua bidang. Artificial Superintelligence atau ASI lebih spekulatif lagi, yaitu skenario ketika kemampuan mesin melampaui manusia secara luas. Modul dasar ini tidak menolak diskusi tersebut, tetapi menaruhnya di pinggir agar fokus belajar tetap pada sistem nyata yang sudah memengaruhi hidup peserta hari ini.</p>

                <div style="background: rgba(246,51,146,.08); border: 1px solid rgba(246,51,146,.2); border-radius: 16px; padding: 18px 20px; margin: 24px 0;">
                    <h4 style="margin: 0 0 8px 0; color: var(--fellow-text);"><i class="fas fa-bullseye" style="color: var(--fellow-pink);"></i> Prinsip praktis</h4>
                    <p style="margin: 0; color: var(--fellow-muted);">Jangan menghabiskan energi belajar pada robot fiksi yang sadar diri. Fokuslah pada sistem sempit yang sudah memengaruhi email, pinjaman, rekrutmen, navigasi, pembelajaran, dan rekomendasi konten.</p>
                </div>

                <h3 style="margin-top: 32px;">3.3 AI dalam Kehidupan Sehari-hari</h3>
                <p>AI sering hadir sebagai mesin pembantu keputusan. Ia menyaring banyak kemungkinan menjadi rekomendasi kecil yang terlihat sederhana di layar.</p>

                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0;">
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-music"></i> Media dan hiburan</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Input: riwayat tontonan, lagu yang dilewati, durasi menonton. Output: rekomendasi video atau playlist personal.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-map-location-dot"></i> Mobilitas kota</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Input: lokasi perangkat, laporan kecelakaan, pola macet historis. Output: ETA dan rute alternatif.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-language"></i> Komunikasi bahasa</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Input: teks, suara, dan contoh terjemahan. Output: kalimat terjemahan yang diprediksi paling alami.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-briefcase"></i> Produktivitas kerja</h4>
                        <p style="margin: 0; color: var(--fellow-muted); font-size: .9rem;">Input: FAQ, arsip tiket, CV, atau riwayat pelanggan. Output: balasan chatbot, ringkasan, atau shortlist kandidat.</p>
                    </article>
                </div>

                <p>Setelah memahami pola ini, rekomendasi belanja atau rute peta tidak lagi terlihat seperti tebakan gaib. Sistem sedang menghitung kemiripan perilaku, probabilitas, dan pola dari banyak pengguna lain.</p>

                <h3 style="margin-top: 32px;">3.4 Membaca Penerapan dengan Alur Tujuan ke Output</h3>
                <div style="display: grid; gap: 16px; margin: 20px 0;">
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-play"></i> Layanan streaming</h4>
                        <p style="margin: 0; color: var(--fellow-text);">Tujuannya sering kali membuat pengguna bertahan lebih lama. Input-nya riwayat tontonan, durasi menonton, jeda, klik, dan konten yang dilewati. Output-nya daftar rekomendasi yang terasa personal.</p>
                    </article>
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-route"></i> Navigasi lalu lintas</h4>
                        <p style="margin: 0; color: var(--fellow-text);">Tujuannya mencari rute efisien. Input-nya lokasi perangkat, kecepatan kendaraan, laporan kecelakaan, dan pola historis. Output-nya ETA dan rute alternatif yang terus berubah.</p>
                    </article>
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-file-lines"></i> Screening resume</h4>
                        <p style="margin: 0; color: var(--fellow-text);">Tujuannya mempercepat seleksi. Input-nya CV, riwayat kandidat sukses, kata kunci, institusi, dan pengalaman. Output-nya skor atau shortlist. Risiko muncul jika data lama sudah bias terhadap kelompok tertentu.</p>
                    </article>
                </div>
            `
        },
        '/participant-ai-applications': {
            title: 'Penerapan AI dalam Kehidupan',
            description: 'Membedah penerapan AI sehari-hari menggunakan alur tujuan, input, pola, dan output.',
            duration: '45 menit',
            tag: 'Penerapan',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-globe"></i> Topik 7: Penerapan AI dalam Kehidupan
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Membaca AI di kehidupan sehari-hari sebagai sistem yang punya tujuan, input, dan dampak.
                    </p>
                </div>

                <h3>7.1 Kenapa Penerapan Harian Penting</h3>
                <p>Literasi AI tidak dimulai dari laboratorium. Ia dimulai dari kebiasaan membaca aplikasi yang dipakai setiap hari. Rekomendasi video, peta digital, filter email, chatbot layanan pelanggan, penerjemah teks, dan sistem harga transportasi daring semuanya bisa dibaca dengan model yang sama.</p>

                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0;">
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-music"></i> Media dan hiburan</h4>
                        <p style="margin: 0; color: var(--fellow-text);">Tujuan: membuat pengguna menemukan konten yang terasa relevan dan sering kali bertahan lebih lama. Input: riwayat tontonan, durasi menonton, klik, like, skip, dan pola pengguna mirip. Output: rekomendasi video, lagu, atau playlist.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-map-location-dot"></i> Mobilitas kota</h4>
                        <p style="margin: 0; color: var(--fellow-text);">Tujuan: memperkirakan rute efisien dan waktu tiba. Input: lokasi perangkat, kecepatan kendaraan, laporan kecelakaan, dan pola kemacetan historis. Output: ETA dan rute alternatif.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-language"></i> Komunikasi bahasa</h4>
                        <p style="margin: 0; color: var(--fellow-text);">Tujuan: membantu pengguna memahami bahasa lain. Input: teks, suara, konteks kalimat, dan contoh terjemahan. Output: susunan kalimat yang diprediksi paling alami.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-briefcase"></i> Ruang kerja</h4>
                        <p style="margin: 0; color: var(--fellow-text);">Tujuan: mempercepat pekerjaan repetitif. Input: FAQ, arsip tiket, dokumen, CV, atau riwayat pelanggan. Output: balasan chatbot, ringkasan, draft email, atau shortlist kandidat.</p>
                    </article>
                </div>

                <h3>7.2 Membaca Rekomendasi Bukan Sebagai Kebetulan</h3>
                <p>Ketika aplikasi belanja menampilkan produk yang terasa cocok, itu bukan tebakan gaib. Sistem membandingkan pola belanja, kata kunci, durasi melihat barang, harga yang sering diklik, dan perilaku pengguna lain yang mirip. Dari situ, sistem mengurutkan pilihan yang dianggap paling mungkin menarik perhatian.</p>

                <h3>7.3 Pertanyaan Analitis untuk Setiap Aplikasi</h3>
                <ol style="line-height: 1.8; color: var(--fellow-text);">
                    <li>Apa tujuan utama aplikasi dari sisi pengguna dan dari sisi perusahaan?</li>
                    <li>Data apa yang terlihat dikumpulkan?</li>
                    <li>Data apa yang mungkin dikumpulkan diam-diam, seperti lokasi, waktu, atau durasi interaksi?</li>
                    <li>Output apa yang memengaruhi keputusan pengguna?</li>
                    <li>Apa risiko jika output tersebut salah atau terlalu manipulatif?</li>
                </ol>
            `
        },
        '/participant-ai-pros-cons': {
            title: 'Manfaat dan Keterbatasan AI',
            description: 'Memahami manfaat praktis AI sekaligus batas bawaan yang tidak boleh diabaikan.',
            duration: '40 menit',
            tag: 'Evaluasi',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-scale-balanced"></i> Topik 8: Manfaat dan Keterbatasan AI
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Mengapresiasi manfaat AI tanpa kehilangan sikap kritis terhadap batas dan risikonya.
                    </p>
                </div>

                <h3>8.1 Manfaat Praktis AI</h3>
                <p>AI bermanfaat ketika dipakai untuk mempercepat analisis, menyaring informasi, menemukan pola, dan membantu manusia melihat pilihan yang terlalu banyak untuk diproses manual. Dalam konteks belajar dan kerja, AI dapat menjadi alat bantu yang kuat selama pengguna tetap memahami batasnya.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0;">
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-filter"></i> Menyaring informasi</h4>
                        <p style="margin: 0; color: var(--fellow-text);">AI dapat membantu memilih informasi paling relevan dari ribuan dokumen, email, tiket layanan, atau konten.</p>
                    </article>
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-clock"></i> Menghemat waktu</h4>
                        <p style="margin: 0; color: var(--fellow-text);">AI dapat membuat draft, ringkasan, klasifikasi awal, atau rekomendasi sehingga manusia bisa fokus pada keputusan akhir.</p>
                    </article>
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-eye"></i> Mengenali pola tersembunyi</h4>
                        <p style="margin: 0; color: var(--fellow-text);">AI dapat membaca pola yang sulit terlihat oleh manusia, misalnya pola transaksi mencurigakan atau pola lalu lintas.</p>
                    </article>
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-universal-access"></i> Membantu akses</h4>
                        <p style="margin: 0; color: var(--fellow-text);">Penerjemah, transkripsi, caption, dan asisten belajar dapat membantu lebih banyak orang mengakses informasi.</p>
                    </article>
                </div>

                <h3>8.2 Keterbatasan Bawaan AI</h3>
                <p>AI bukan sumber kebenaran absolut. AI bekerja dari data dan pola. Jika data tidak lengkap, konteks berubah, atau tujuan sistem terlalu sempit, output bisa tidak akurat atau tidak adil.</p>
                <ul style="line-height: 1.8; color: var(--fellow-text);">
                    <li><strong>Bergantung pada data:</strong> data buruk menghasilkan pola buruk.</li>
                    <li><strong>Tidak memahami konteks penuh:</strong> sistem bisa melewatkan norma sosial, empati, atau dampak manusia.</li>
                    <li><strong>Bisa terdengar meyakinkan saat salah:</strong> terutama pada model bahasa.</li>
                    <li><strong>Tujuan sistem bisa sempit:</strong> mengoptimalkan klik, waktu tempuh, atau efisiensi tanpa melihat dampak sosial.</li>
                    <li><strong>Sulit dijelaskan:</strong> model kompleks dapat menghasilkan keputusan yang tidak mudah dilacak alasannya.</li>
                </ul>

                <h3>8.3 Cara Memakai AI secara Realistis</h3>
                <p>Gunakan AI sebagai asisten, bukan pengganti penilaian manusia. Untuk tugas ringan, AI bisa mempercepat. Untuk keputusan penting, AI harus menjadi bahan pertimbangan yang diverifikasi, bukan penentu tunggal.</p>
            `
        },
        '/participant-ai-ethics': {
            title: 'Bias, Halusinasi, Privasi, dan Black Box',
            description: 'Membedah risiko fundamental AI sebagai sistem sosial dan teknis.',
            duration: '50 menit',
            tag: 'Etika AI',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-shield-halved"></i> Topik 9: Bias, Halusinasi, Privasi, dan Black Box
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Mengenali risiko AI yang paling sering muncul dalam kehidupan nyata.
                    </p>
                </div>

                <h3>9.1 Bias: Ketika Masa Lalu Diulang Mesin</h3>
                <p>Miskonsepsi besar tentang AI adalah anggapan bahwa keputusan komputer pasti objektif. Padahal AI belajar dari data historis yang dibuat oleh manusia dan institusi. Jika sejarah memuat diskriminasi, ketimpangan, atau pengecualian kelompok tertentu, model dapat mengulangnya dengan tampilan yang seolah netral.</p>
                <p>Contoh: alat rekrutmen dilatih dari data pelamar sukses sepuluh tahun terakhir. Jika data lama didominasi laki-laki dari kampus tertentu, model bisa menganggap pola itu sebagai tanda kandidat ideal dan menurunkan skor kandidat perempuan atau kandidat dari jalur pendidikan lain.</p>

                <h3>9.2 Halusinasi: Jawaban Rapi yang Salah</h3>
                <p>Model bahasa modern dapat menghasilkan teks yang runtut, sopan, dan terdengar meyakinkan. Tetapi ia tetap bisa mengarang fakta, kutipan, nama jurnal, pasal hukum, atau nomor kasus. Ini disebut halusinasi algoritmik.</p>
                <div style="background: rgba(246,51,146,.08); border: 1px solid rgba(246,51,146,.18); border-radius: 16px; padding: 20px; margin: 24px 0;">
                    <h4 style="margin: 0 0 8px 0; color: var(--fellow-text);"><i class="fas fa-gavel" style="color: var(--fellow-pink);"></i> Contoh risiko hukum</h4>
                    <p style="margin: 0; color: var(--fellow-text);">Jika chatbot menyusun argumen hukum dan mencantumkan kasus preseden palsu, dokumen bisa terlihat profesional tetapi tetap berbahaya. Dalam konteks hukum, medis, akademik, dan keuangan, setiap klaim harus diverifikasi ke sumber resmi.</p>
                </div>

                <h3>9.3 Privasi: Data sebagai Bahan Bakar</h3>
                <p>Banyak sistem AI membutuhkan data personal: lokasi, riwayat klik, pembelian, suara, wajah, pesan, atau pola interaksi. Pengumpulan data tanpa persetujuan yang jelas dapat mengancam keamanan dan martabat pengguna.</p>
                <p>Pertanyaan pentingnya bukan hanya apakah data bisa dikumpulkan, tetapi apakah data boleh dikumpulkan, apakah pengguna memahami tujuannya, berapa lama data disimpan, dan siapa yang dapat mengaksesnya.</p>

                <h3>9.4 Black Box: Ketika Alasan Tidak Jelas</h3>
                <p>Beberapa model kompleks sulit dijelaskan bahkan oleh pembuatnya. Masalah muncul ketika keputusan berdampak besar: kredit ditolak, akun diblokir, CV disaring, atau layanan publik tidak diberikan. Jika alasan tidak jelas, pengguna kehilangan hak untuk mempertanyakan dan memperbaiki keputusan.</p>

                <h3>9.5 Prinsip Aman untuk Pemula</h3>
                <ol style="line-height: 1.8; color: var(--fellow-text);">
                    <li>Jangan langsung percaya output AI hanya karena bahasanya rapi.</li>
                    <li>Selalu cek sumber untuk fakta penting.</li>
                    <li>Curigai sistem yang tidak memberi alasan atau jalur koreksi.</li>
                    <li>Perhatikan siapa yang mungkin tidak terwakili dalam data.</li>
                    <li>Jaga data pribadi sebelum memasukkan informasi sensitif ke alat AI.</li>
                </ol>
            `
        },
        '/participant-ai-summary': {
            title: 'Audit Sistem Sosio-Teknis',
            description: 'Mengunci semua konsep dengan kerangka audit praktis yang bisa dipakai di kehidupan harian.',
            duration: '35 menit',
            tag: 'Audit AI',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-magnifying-glass-chart"></i> Topik 10: Audit Sistem Sosio-Teknis
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Mengubah peserta dari pengguna pasif menjadi auditor kritis sistem AI harian.
                    </p>
                </div>

                <p>Literasi AI tidak selesai ketika kita bisa menjelaskan cara kerja model. Peserta juga perlu bertanya: apakah sistem ini aman, adil, transparan, menjaga privasi, dan masih memungkinkan manusia melakukan koreksi?</p>
                <p>Bagian ini adalah inti dari literasi sosio-teknis. AI tidak boleh dinilai hanya dari seberapa cepat atau canggih output-nya. Sistem yang cepat tetapi bias, tidak transparan, melanggar privasi, atau tidak bisa dikoreksi tetap berbahaya.</p>

                <div style="display: grid; gap: 16px; margin: 24px 0;">
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-scale-balanced"></i> Ilusi objektivitas dan bias</h4>
                        <p style="margin: 0; color: var(--fellow-muted);">AI belajar dari data historis. Jika data masa lalu memuat diskriminasi gender, kelas, ras, wilayah, atau akses pendidikan, model dapat mengulang pola tidak adil itu dalam bentuk yang terlihat netral.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-triangle-exclamation"></i> Halusinasi algoritmik</h4>
                        <p style="margin: 0; color: var(--fellow-muted);">Model bahasa bisa menghasilkan jawaban yang terdengar rapi tetapi faktanya salah. Untuk konteks hukum, medis, akademik, atau keputusan penting, verifikasi independen wajib dilakukan.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-user-lock"></i> Privasi dan data personal</h4>
                        <p style="margin: 0; color: var(--fellow-muted);">Banyak sistem prediktif membutuhkan lokasi, perilaku klik, pembelian, wajah, suara, atau interaksi. Pengumpulan tanpa persetujuan yang jelas dapat mengancam martabat dan keamanan pengguna.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; background: #fff; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);"><i class="fas fa-box"></i> Black box dan hak bertanya</h4>
                        <p style="margin: 0; color: var(--fellow-muted);">Jika sistem menolak pinjaman, memblokir akun, atau menyaring CV tanpa alasan yang bisa dipahami, pengguna kehilangan kesempatan untuk mengoreksi dan mengajukan keberatan.</p>
                    </article>
                </div>

                <h3>4.1 Studi Kasus Risiko</h3>
                <div style="display: grid; gap: 16px; margin: 20px 0;">
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-text);"><i class="fas fa-user-tie" style="color: var(--fellow-pink);"></i> Rekrutmen dan bias masa lalu</h4>
                        <p style="margin: 0; color: var(--fellow-text);">Jika alat rekrutmen dilatih dari data perusahaan yang dulu lebih sering menerima laki-laki dari kampus tertentu, model bisa membaca pola itu sebagai tanda kandidat ideal. Akibatnya, CV perempuan atau kandidat dari jalur pendidikan berbeda bisa dinilai lebih rendah walaupun kompetensinya kuat.</p>
                    </article>
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-text);"><i class="fas fa-gavel" style="color: var(--fellow-pink);"></i> Halusinasi hukum</h4>
                        <p style="margin: 0; color: var(--fellow-text);">Model bahasa bisa menyusun argumen hukum yang rapi sekaligus menciptakan nomor kasus palsu. Kesalahannya bukan karena model berniat menipu, melainkan karena ia memprediksi rangkaian kata yang tampak cocok. Untuk urusan hukum, setiap rujukan harus dicek ke sumber resmi.</p>
                    </article>
                    <article style="background: #fff; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 20px;">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-text);"><i class="fas fa-map" style="color: var(--fellow-pink);"></i> Optimasi navigasi</h4>
                        <p style="margin: 0; color: var(--fellow-text);">Jika tujuan sistem hanya mengurangi waktu tempuh pengendara, rute bisa dialihkan ke jalan pemukiman kecil. Pengendara terbantu, tetapi warga lokal menanggung kebisingan, kemacetan, dan risiko keselamatan. Ini menunjukkan bahwa tujuan sistem perlu dirancang dengan mempertimbangkan dampak komunitas.</p>
                    </article>
                </div>

                <h3>Ringkasan yang Perlu Dibawa</h3>
                <ul class="summary-check-list" style="list-style: none; padding-left: 0;">
                    <li style="margin-bottom: 12px; display: flex; gap: 12px;"><i class="fas fa-circle-check" style="color: var(--fellow-pink); margin-top: 4px;"></i> <span>AI adalah sistem berbasis mesin yang menyimpulkan dari input untuk menghasilkan prediksi, rekomendasi, konten, atau keputusan.</span></li>
                    <li style="margin-bottom: 12px; display: flex; gap: 12px;"><i class="fas fa-circle-check" style="color: var(--fellow-pink); margin-top: 4px;"></i> <span>Software biasa mengikuti aturan eksplisit; AI modern memanfaatkan data dan korelasi pola.</span></li>
                    <li style="margin-bottom: 12px; display: flex; gap: 12px;"><i class="fas fa-circle-check" style="color: var(--fellow-pink); margin-top: 4px;"></i> <span>AI, ML, dan DL tersusun seperti payung: AI mencakup ML, ML mencakup DL.</span></li>
                    <li style="margin-bottom: 12px; display: flex; gap: 12px;"><i class="fas fa-circle-check" style="color: var(--fellow-pink); margin-top: 4px;"></i> <span>AI saat ini adalah ANI: spesialis sempit, bukan kecerdasan umum yang sadar diri.</span></li>
                    <li style="margin-bottom: 12px; display: flex; gap: 12px;"><i class="fas fa-circle-check" style="color: var(--fellow-pink); margin-top: 4px;"></i> <span>Human check adalah kebiasaan wajib untuk melawan bias, halusinasi, keputusan buram, dan risiko privasi.</span></li>
                </ul>

                <div class="daily-ai-box" style="margin-top: 32px; background: white; border: 2px dashed var(--fellow-pink); border-radius: 16px; padding: 24px;">
                    <h3 style="margin-top: 0; color: var(--fellow-pink);"><i class="fas fa-magnifying-glass-chart"></i> Mini Project: Audit Sistem Sosio-Teknis Harian</h3>
                    <p style="font-size: 0.95rem; color: var(--fellow-muted); margin-bottom: 0;">Di tab Latihan, pilih satu layanan otomatis yang kamu gunakan dalam 24 jam terakhir. Bedah tujuan, input, pola, output, pemeriksaan manusia, risiko privasi, dan potensi ketidakadilan.</p>
                </div>

                <h3 style="margin-top: 32px;">4.2 Pertanyaan Penutup untuk Setiap Output AI</h3>
                <ol style="line-height: 1.8; color: var(--fellow-text);">
                    <li>Apakah output ini fakta, prediksi, rekomendasi, atau opini sintetis?</li>
                    <li>Apakah ada sumber independen yang bisa dipakai untuk memverifikasi?</li>
                    <li>Apakah data yang dipakai mungkin tidak mewakili kelompok tertentu?</li>
                    <li>Apakah pengguna punya hak untuk menolak, mengoreksi, atau meminta penjelasan?</li>
                    <li>Apakah keputusan akhir seharusnya tetap dipegang manusia?</li>
                </ol>
            `
        }
    };

    function currentPath() {
        return window.location.hash.replace(/^#/, '') || '/participant-dashboard';
    }

    function renderLessonList(activePath) {
        return introLessonRoutes.map((lesson, index) => {
            const active = lesson.path === activePath ? ' class="active"' : '';
            return `<li${active}><span>${index + 1}</span><a href="#${lesson.path}">${lesson.title}</a><i class="${active ? 'far fa-circle-play' : 'far fa-circle'}"></i></li>`;
        }).join('');
    }

    function initGeneratedLessonPage() {
        const page = document.querySelector('.ai-generated-lesson-page');
        if (!page || page.dataset.generatedReady) return;
        page.dataset.generatedReady = 'true';
        const path = currentPath();
        const lesson = generatedLessonContent[path] || generatedLessonContent['/participant-ai-history'];
        const index = Math.max(1, introLessonRoutes.findIndex(item => item.path === path));
        const prev = introLessonRoutes[index - 1] || introLessonRoutes[0];
        const next = introLessonRoutes[index + 1];
        const progress = Math.round(((index + 1) / introLessonRoutes.length) * 100);

        page.querySelector('[data-lesson-breadcrumb]').textContent = lesson.title;
        page.querySelector('[data-lesson-title]').textContent = lesson.title;
        page.querySelector('[data-lesson-description]').textContent = lesson.description;
        page.querySelector('[data-lesson-duration]').textContent = lesson.duration;
        page.querySelector('[data-lesson-position]').textContent = `Modul 1 dari 6`;
        page.querySelector('[data-lesson-tag]').textContent = lesson.tag;
        page.querySelector('[data-lesson-content]').innerHTML = lesson.content;
        page.querySelector('[data-lesson-list]').innerHTML = renderLessonList(path);
        page.querySelector('[data-lesson-progress-bar]').style.setProperty('--value', `${progress}%`);
        page.querySelector('[data-lesson-progress-text]').textContent = `${progress}%`;
        page.querySelector('[data-lesson-progress-caption]').textContent = `${index + 1} dari ${introLessonRoutes.length} materi selesai`;
        const prevLink = page.querySelector('[data-lesson-prev]');
        const nextLink = page.querySelector('[data-lesson-next]');
        prevLink.href = `#${prev.path}`;
        prevLink.innerHTML = `<i class="fas fa-chevron-left"></i> Topik Sebelumnya`;
        if (next) {
            nextLink.href = `#${next.path}`;
            nextLink.innerHTML = `Topik Selanjutnya <i class="fas fa-arrow-right"></i>`;
        } else {
            nextLink.href = '#/participant-ai-intro-practice';
            nextLink.innerHTML = 'Lanjut ke Latihan <i class="fas fa-arrow-right"></i>';
        }
    }

    function initPracticeNotes() {
        const form = document.getElementById('aiIntroPracticeForm');
        if (!form || form.dataset.practiceReady) return;
        form.dataset.practiceReady = 'true';
        const key = 'heraiAiIntroPracticeAnswers';
        const status = document.getElementById('aiIntroPracticeStatus');
        const saveButton = form.querySelector('[data-practice-save]');
        const editButton = form.querySelector('[data-practice-edit]');
        const deleteButton = form.querySelector('[data-practice-delete]');
        const fields = Array.from(form.querySelectorAll('textarea'));
        const setStatus = (message) => {
            if (status) status.textContent = message;
        };
        const setReadonly = (readonly) => {
            fields.forEach(field => field.readOnly = readonly);
            if (saveButton) saveButton.textContent = readonly ? 'Tersimpan' : 'Simpan Jawaban';
        };
        const saved = JSON.parse(localStorage.getItem(key) || '{}');
        fields.forEach(field => field.value = saved[field.name] || '');
        if (Object.keys(saved).length) {
            setReadonly(true);
            setStatus('Jawaban latihan tersimpan di perangkatmu.');
        }
        saveButton?.addEventListener('click', () => {
            const payload = {};
            fields.forEach(field => payload[field.name] = field.value.trim());
            localStorage.setItem(key, JSON.stringify(payload));
            setReadonly(true);
            setStatus('Jawaban berhasil disimpan. Kamu bisa edit atau hapus kapan saja.');
        });
        editButton?.addEventListener('click', () => {
            setReadonly(false);
            fields[0]?.focus();
            setStatus('Mode edit aktif.');
        });
        deleteButton?.addEventListener('click', () => {
            localStorage.removeItem(key);
            fields.forEach(field => {
                field.value = '';
                field.readOnly = false;
            });
            setStatus('Jawaban latihan dihapus.');
        });
    }

    function initLessonDiscussion() {
        const form = document.getElementById('aiIntroDiscussionForm');
        const list = document.getElementById('aiIntroDiscussionList');
        if (!form || !list || form.dataset.discussionReady) return;
        form.dataset.discussionReady = 'true';
        const key = 'heraiAiIntroDiscussionThread';
        const fallback = [
            { id: 'seed-1', name: 'Aisyah Putri', time: 'Hari ini, 09.15', text: 'Menurutku tahap Pemeriksaan Manusia paling penting saat AI dipakai untuk rekrutmen atau hukum. Kalau output terlihat rapi tetapi datanya bias atau fiktif, manusia tetap harus berani menghentikan keputusan.', replies: [{ name: 'Mentor Rani', time: 'Hari ini, 09.28', text: 'Setuju. Coba selalu mulai dari pertanyaan: apa tujuan sistem, data siapa yang dipakai, siapa yang terdampak, dan bagaimana koreksinya bisa dilakukan.' }] }
        ];
        const escapeHtml = (value = '') => String(value)
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
        const load = () => JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
        const save = (items) => localStorage.setItem(key, JSON.stringify(items));
        const timestamp = () => new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date());
        const render = () => {
            const items = load();
            list.innerHTML = items.map(item => `
                <article class="discussion-bubble">
                    <div><span>${escapeHtml(item.name.charAt(0))}</span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.time)}</small></div>
                    <p>${escapeHtml(item.text)}</p>
                    <button type="button" data-reply="${item.id}">Reply</button>
                    <div class="discussion-replies">${(item.replies || []).map(reply => `<article><strong>${escapeHtml(reply.name)}</strong><small>${escapeHtml(reply.time)}</small><p>${escapeHtml(reply.text)}</p></article>`).join('')}</div>
                </article>
            `).join('');
            list.querySelectorAll('[data-reply]').forEach(button => {
                button.addEventListener('click', () => {
                    const text = prompt('Tulis balasan diskusi:');
                    if (!text || !text.trim()) return;
                    const updated = load();
                    const target = updated.find(item => item.id === button.dataset.reply);
                    if (target) {
                        target.replies = target.replies || [];
                        target.replies.push({ name: 'Aisyah Putri', time: timestamp(), text: text.trim() });
                        save(updated);
                        render();
                    }
                });
            });
        };
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const textarea = form.querySelector('textarea');
            const text = textarea?.value.trim();
            if (!text) return;
            const updated = load();
            updated.unshift({ id: `post-${Date.now()}`, name: 'Aisyah Putri', time: timestamp(), text, replies: [] });
            save(updated);
            textarea.value = '';
            render();
        });
        render();
    }

    function initLessonControls() {
        const quizDoneKey = 'heraiAiIntroQuizDone';
        const quizScoreKey = 'heraiAiIntroQuizScore';
        const isQuizDone = localStorage.getItem(quizDoneKey) === 'true';

        document.querySelectorAll('[data-locked-after-quiz]').forEach((item) => {
            item.hidden = !isQuizDone;
        });
        document.querySelectorAll('.lesson-lock-hint').forEach((item) => {
            item.hidden = isQuizDone;
        });

        const nextLink = document.getElementById('aiIntroQuizNext');
        if (nextLink && isQuizDone) nextLink.classList.remove('is-disabled');
        if (nextLink && !nextLink.dataset.guardReady) {
            nextLink.dataset.guardReady = 'true';
            nextLink.addEventListener('click', (event) => {
                if (nextLink.classList.contains('is-disabled')) {
                    event.preventDefault();
                }
            });
        }

        const quizForm = document.getElementById('aiIntroQuizForm');
        if (!quizForm || quizForm.dataset.quizReady) return;
        quizForm.dataset.quizReady = 'true';

        const resultBox = document.getElementById('aiIntroQuizResult');
        const submitButton = quizForm.querySelector('.quiz-submit-btn');
        const showResult = (score, total) => {
            if (!resultBox) return;
            resultBox.hidden = false;
            resultBox.innerHTML = `
                <strong>Nilai kamu: ${score}/${total}</strong>
                <span>Skor tersimpan. Jawaban benar tidak ditampilkan agar evaluasi tetap fair.</span>
            `;
        };

        if (isQuizDone) {
            const savedScore = Number(localStorage.getItem(quizScoreKey) || 0);
            showResult(savedScore, 10);
            quizForm.querySelectorAll('input').forEach(input => input.disabled = true);
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Kuis Sudah Dikirim';
            }
            return;
        }

        quizForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const groups = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];
            const unanswered = groups.some(group => !quizForm.querySelector(`input[name="${group}"]:checked`));
            if (unanswered) {
                if (resultBox) {
                    resultBox.hidden = false;
                    resultBox.innerHTML = `
                        <strong>Lengkapi semua soal terlebih dahulu.</strong>
                        <span>Pilih satu jawaban untuk setiap nomor sebelum submit.</span>
                    `;
                }
                return;
            }
            let score = 0;
            for (const group of groups) {
                const selected = quizForm.querySelector(`input[name="${group}"]:checked`);
                if (selected && selected.value === '1') score += 1;
            }
            localStorage.setItem(quizDoneKey, 'true');
            localStorage.setItem(quizScoreKey, String(score));
            showResult(score, groups.length);
            quizForm.querySelectorAll('input').forEach(input => input.disabled = true);
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Kuis Sudah Dikirim';
            }
            document.querySelectorAll('[data-locked-after-quiz]').forEach(item => item.hidden = false);
            document.querySelectorAll('.lesson-lock-hint').forEach(item => item.hidden = true);
            nextLink?.classList.remove('is-disabled');
        });
    }

    function escapeHtml(value = '') {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function readParticipantSession() {
        try {
            return JSON.parse(sessionStorage.getItem(PARTICIPANT_SESSION_KEY) || 'null');
        } catch {
            return null;
        }
    }

    function initFellowUserMenu() {
        normalizeFellowUserMenu();
        const menu = document.querySelector('.fellow-user-menu');
        if (!menu || menu.dataset.ready) return;
        menu.dataset.ready = 'true';
        const toggle = menu.querySelector('[data-fellow-user-toggle]');
        const logout = menu.querySelector('[data-fellow-logout]');
        const session = readParticipantSession();
        const name = session?.name || window.__CURRENT_PARTICIPANT_PROFILE__?.nama_lengkap || 'Aisyah Putri';
        const nameNode = menu.querySelector('.fellow-user-button strong');
        const greeting = document.querySelector('[data-fellow-greeting]');
        if (nameNode) nameNode.textContent = name;
        if (greeting) greeting.textContent = `Halo, ${name}!`;

        toggle?.addEventListener('click', (event) => {
            event.stopPropagation();
            const open = !menu.classList.contains('is-open');
            menu.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', String(open));
        });
        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target)) {
                menu.classList.remove('is-open');
                toggle?.setAttribute('aria-expanded', 'false');
            }
        });
        logout?.addEventListener('click', () => {
            sessionStorage.removeItem(PARTICIPANT_SESSION_KEY);
            window.__CURRENT_PARTICIPANT_PROFILE__ = null;
            window.location.hash = '#/participant-login';
        });
    }

    function normalizeFellowUserMenu() {
        const actions = document.querySelector('.fellow-actions');
        if (!actions || actions.querySelector('.fellow-user-menu')) return;

        const userButton = actions.querySelector('.fellow-user-button');
        if (!userButton) return;

        const menu = document.createElement('div');
        menu.className = 'fellow-user-menu';

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = userButton.className;
        toggle.setAttribute('data-fellow-user-toggle', '');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = userButton.innerHTML;

        const dropdown = document.createElement('div');
        dropdown.className = 'fellow-user-dropdown';
        dropdown.setAttribute('data-fellow-user-dropdown', '');
        dropdown.innerHTML = `
            <a href="#/participant-profile"><i class="fas fa-user-gear"></i><span>Setting Akun</span></a>
            <button type="button" data-fellow-logout><i class="fas fa-right-from-bracket"></i><span>Log Out</span></button>
        `;

        menu.append(toggle, dropdown);
        userButton.replaceWith(menu);
    }

    function defaultParticipantDashboardData() {
        return {
            modules: [
                { title: 'AI Fundamentals & Advanced', subtitle: 'Pengantar AI dan konsep modern', progress: 0, icon: 'fas fa-brain', tone: 'pink', href: '#/participant-ai-fundamentals' },
                { title: 'Math for AI', subtitle: 'Aljabar, kalkulus, probabilitas', progress: 0, icon: 'fas fa-square-root-variable', tone: 'purple', href: '#/participant-modules' },
                { title: 'Machine Learning', subtitle: 'Model, evaluasi, dan pipeline', progress: 0, icon: 'fas fa-diagram-project', tone: 'orange', href: '#/participant-modules' }
            ],
            discussionTrails: [
                { actor: 'Mentor Rani', action: 'membalas diskusi', topic: 'Pengantar AI', time: '2 jam yang lalu', tone: '' },
                { actor: 'Aisyah Putri', action: 'menulis pertanyaan', topic: 'Reasoning', time: '3 jam yang lalu', tone: 'blue' },
                { actor: 'Panitia', action: 'menandai referensi baru', topic: 'Evaluation', time: '5 jam yang lalu', tone: 'green' }
            ],
            tracks: [
                { title: 'Vision', subtitle: 'Computer Vision, Image Processing, Object Detection', icon: 'fas fa-eye' },
                { title: 'Speech', subtitle: 'ASR, TTS, Whisper, Audio ML', icon: 'fas fa-microphone-lines' },
                { title: 'Language Model', subtitle: 'NLP, LLM, RAG, fine-tuning', icon: 'fas fa-message' },
                { title: 'Infrastructure', subtitle: 'MLOps, cloud, deployment, scalability', icon: 'fas fa-house-laptop' },
                { title: 'Multimodal Interaction', subtitle: 'VLM, multimodal LLM, cross-modal learning', icon: 'fas fa-layer-group' },
                { title: 'Bioinformatics', subtitle: 'Genomics, protein analysis, medical AI', icon: 'fas fa-dna' }
            ],
            journey: [
                { title: 'Foundation Phase', subtitle: 'Pemahaman dasar AI', progress: 0, icon: 'fas fa-book-open', accent: '#f63392' },
                { title: 'Specialization', subtitle: 'Pilih dan dalami track AI', progress: 0, icon: 'fas fa-code', accent: '#8b5cf6' },
                { title: 'Project Building', subtitle: 'Bangun proyek nyata', progress: 0, icon: 'fas fa-briefcase', accent: '#f8b84e' },
                { title: 'Graduation', subtitle: 'Persiapan karier dan sertifikasi', progress: 0, icon: 'fas fa-graduation-cap', accent: '#45c598' }
            ],
            events: [
                { day: '22', month: 'MEI', title: 'Live Session: Build RAG Chatbot', time: '10.00 - 12.00 WIB', url: '#/participant-events' },
                { day: '25', month: 'MEI', title: 'Mentor Clinic: Career in AI', time: '19.00 - 20.30 WIB', url: '#/participant-events' },
                { day: '30', month: 'MEI', title: 'Workshop: Data Visualization', time: '13.00 - 15.00 WIB', url: '#/participant-events' }
            ],
            leaderboard: [
                { rank: 1, name: 'Dewi Lestari', points: 2450 },
                { rank: 2, name: 'Aisyah Putri', points: 2120, current: true },
                { rank: 3, name: 'Siti Aulia', points: 1890 }
            ]
        };
    }

    async function fetchParticipantDashboardData() {
        const fallback = defaultParticipantDashboardData();
        try {
            const session = readParticipantSession();
            const response = await fetch('/__gas', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ action: 'getParticipantDashboardData', nik: session?.nik || '' })
            });
            if (!response.ok) return fallback;
            const result = await response.json();
            if (result.status !== 'success') return fallback;
            return { ...fallback, ...(result.data || {}) };
        } catch {
            return fallback;
        }
    }

    function renderParticipantDashboard(data) {
        const fallbackData = defaultParticipantDashboardData();
        const nonEmpty = (items, fallbackItems) => Array.isArray(items) && items.length ? items : fallbackItems;
        const moduleGrid = document.getElementById('dashboardModuleGrid');
        if (moduleGrid) {
            const modules = nonEmpty(data.modules, fallbackData.modules);
            moduleGrid.innerHTML = modules.map((item) => `
                <a class="module-card ${escapeHtml(item.tone || 'pink')}" href="${escapeHtml(item.href || '#/participant-modules')}">
                    <div class="module-icon"><i class="${escapeHtml(item.icon || 'fas fa-book-open')}"></i></div>
                    <span>${Number(item.progress || 0)}%</span>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.subtitle || 'Mulai belajar')}</p>
                </a>
            `).join('') + `
                <a class="module-card add" href="#/participant-modules">
                    <div class="module-icon"><i class="fas fa-plus"></i></div>
                    <h3>Pilih Modul Lainnya</h3>
                    <p>Jelajahi semua modul</p>
                </a>
            `;
        }

        const trail = document.getElementById('dashboardDiscussionTrail');
        if (trail) {
            const discussionTrails = nonEmpty(data.discussionTrails, fallbackData.discussionTrails);
            trail.innerHTML = discussionTrails.map((item) => `
                <li><span class="mini-avatar ${escapeHtml(item.tone || '')}"></span><p><strong>${escapeHtml(item.actor)}</strong> ${escapeHtml(item.action)} di diskusi <b>#${escapeHtml(item.topic)}</b><small>${escapeHtml(item.time)}</small></p><i></i></li>
            `).join('');
        }

        const tracks = document.getElementById('dashboardTrackGrid');
        if (tracks) {
            const trackItems = nonEmpty(data.tracks, fallbackData.tracks);
            tracks.innerHTML = trackItems.map((item) => `
                <article><i class="${escapeHtml(item.icon || 'fas fa-layer-group')}"></i><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.subtitle)}</span></article>
            `).join('');
        }

        const journey = document.getElementById('dashboardJourneyList');
        if (journey) {
            const journeyItems = nonEmpty(data.journey, fallbackData.journey);
            journey.innerHTML = journeyItems.map((item) => `
                <article style="--accent:${escapeHtml(item.accent || '#f63392')};--value:${Number(item.progress || 0)}%">
                    <i class="${escapeHtml(item.icon || 'fas fa-book-open')}"></i>
                    <div><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.subtitle)}</span><b></b></div>
                    <em>${Number(item.progress || 0)}%</em>
                </article>
            `).join('');
        }

        const events = document.getElementById('dashboardUpcomingEvents');
        if (events) {
            const eventItems = nonEmpty(data.events, fallbackData.events);
            events.innerHTML = eventItems.map((item) => `
                <article><time><strong>${escapeHtml(item.day)}</strong>${escapeHtml(item.month)}</time><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.time)}</p></div><a class="event-join-button" href="${escapeHtml(item.url || '#/participant-events')}">Gabung</a></article>
            `).join('');
        }

        const leaderboard = document.getElementById('dashboardLeaderboard');
        if (leaderboard) {
            const session = readParticipantSession();
            const currentName = session?.name || window.__CURRENT_PARTICIPANT_PROFILE__?.nama_lengkap || 'Aisyah Putri';
            const leaderboardItems = nonEmpty(data.leaderboard, fallbackData.leaderboard);
            leaderboard.innerHTML = leaderboardItems.map((item, index) => {
                const rank = item.rank || index + 1;
                const itemNik = String(item.nik || '').replace(/\D/g, '');
                const sessionNik = String(session?.nik || '').replace(/\D/g, '');
                const sameNik = itemNik && sessionNik && itemNik === sessionNik;
                const sameName = item.name && currentName && String(item.name).toLowerCase() === String(currentName).toLowerCase();
                const isCurrent = item.current === true || sameNik || sameName;
                const medal = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
                const shouldPreferStoredName = (sameNik || sameName || !session?.name) && item.name && item.name !== '*********';
                const cleanName = shouldPreferStoredName ? item.name : currentName;
                const visibleName = isCurrent ? `${escapeHtml(cleanName || 'Kamu')} (Kamu)` : '*********';
                return `<li class="${isCurrent ? 'current' : ''}"><span>${rank}</span><b class="avatar-small ${isCurrent ? 'pink' : 'masked'}">${isCurrent ? '' : '****'}</b><strong>${visibleName}</strong><em>${Number(item.points || 0).toLocaleString('id-ID')} Poin</em><i class="fas fa-medal ${medal}"></i></li>`;
            }).join('');
        }
    }

    async function initParticipantDashboardData() {
        renderParticipantDashboard(defaultParticipantDashboardData());
        const data = await fetchParticipantDashboardData();
        renderParticipantDashboard(data);
    }

    window.getParticipantPortalSettings = fetchSettings;
    window.saveParticipantPortalSettings = saveSettings;
    window.applyParticipantPortalSettings = applySettings;
    window.initFellowDashboardPage = async function(pageName = 'dashboard') {
        attachSidebarRail();
        initFellowUserMenu();
        setActiveFellowNav(pageName);
        const settings = await fetchSettings();
        applySettings(settings, pageName);
        if (pageName === 'dashboard') {
            initParticipantDashboardData();
        }
        if (pageName === 'modules') {
            initModuleInteractions();
            initGeneratedLessonPage();
            initPracticeNotes();
            initLessonDiscussion();
            initLessonControls();
        }
    };
})();
