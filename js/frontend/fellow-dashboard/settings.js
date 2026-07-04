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
        { path: '/participant-ai-intro', title: 'Pengantar & Sejarah AI', short: 'Intro & Sejarah' },
        { path: '/participant-ai-types', title: 'Jenis & Komponen AI', short: 'Konsep AI' },
        { path: '/participant-ai-applications', title: 'Penerapan & Masa Depan AI', short: 'Penerapan AI' },
        { path: '/participant-ai-summary', title: 'Ringkasan Modul 1', short: 'Ringkasan' }
    ];

    const generatedLessonContent = {
        '/participant-ai-types': {
            title: 'Jenis & Komponen AI',
            description: 'Memahami tingkatan AI dan 3 fondasi utama pembentuk AI modern: data, algoritma, dan komputasi.',
            duration: '45 menit',
            tag: 'Konsep Inti',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-layer-group"></i> Topik 2: Jenis & Komponen AI
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Mengetahui tingkatan AI, batasannya, serta rahasia di balik kecerdasan AI modern.
                    </p>
                </div>

                <h3>2.1 Jenis AI Berdasarkan Kemampuan 📊</h3>
                <p>Se-canggih apa sih AI sekarang? Secara teori, kecerdasan AI dibagi jadi tiga tingkatan:</p>
                <div class="ai-capability-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
                    <article style="padding: 20px; border-radius: 16px; border: 1px solid rgba(246,51,146,0.15); box-shadow: 0 4px 12px rgba(0,0,0,0.03); background: #fff;">
                        <i class="fas fa-bullseye" style="color: var(--fellow-pink); font-size: 2rem; margin-bottom: 12px; display: block;"></i>
                        <h3 style="font-size: 1.1rem; margin-bottom: 8px;">ANI (Narrow AI)</h3>
                        <p style="font-size: 0.85rem; color: var(--fellow-muted);">AI spesialis! Cuma jago di SATU tugas aja. <b>Semua AI yang ada di dunia saat ini (termasuk ChatGPT) masuk kategori ini.</b></p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; border: 1px solid rgba(246,51,146,0.15); box-shadow: 0 4px 12px rgba(0,0,0,0.03); background: #fff;">
                        <i class="fas fa-brain" style="color: var(--fellow-pink); font-size: 2rem; margin-bottom: 12px; display: block;"></i>
                        <h3 style="font-size: 1.1rem; margin-bottom: 8px;">AGI (General AI)</h3>
                        <p style="font-size: 0.85rem; color: var(--fellow-muted);">AI level manusia! Bisa mikir, paham konteks, dan multitasking kayak otak manusia. Saat ini masih sebatas teori riset.</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; border: 1px solid rgba(246,51,146,0.15); box-shadow: 0 4px 12px rgba(0,0,0,0.03); background: #fff;">
                        <i class="fas fa-star" style="color: var(--fellow-pink); font-size: 2rem; margin-bottom: 12px; display: block;"></i>
                        <h3 style="font-size: 1.1rem; margin-bottom: 8px;">ASI (Super AI)</h3>
                        <p style="font-size: 0.85rem; color: var(--fellow-muted);">Level Dewa! Jauh lebih cerdas dari manusia paling pintar di bumi. Sering jadi inspirasi film sci-fi (kayak Ultron).</p>
                    </article>
                </div>

                <h3 style="margin-top: 32px;">2.2 Jenis AI Berdasarkan Fungsi ⚙️</h3>
                <div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0;">
                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: var(--fellow-pink);"><i class="fas fa-calculator"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">1. Reactive Machine</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Bereaksi sama input saat itu juga tanpa memori masa lalu. (Contoh: Deep Blue IBM).</p>
                        </div>
                    </div>
                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: var(--fellow-pink);"><i class="fas fa-memory"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">2. Limited Memory</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Bisa belajar dari data historis terbatas. Hampir semua AI modern kayak Self-Driving Car dan ChatGPT ada di level ini!</p>
                        </div>
                    </div>
                    <div style="background: white; border: 1px dashed #cbd5e1; border-radius: 12px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: #94a3b8;"><i class="fas fa-people-arrows"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0; color: #64748b;">3. Theory of Mind (Masa Depan)</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">AI bisa paham bahwa manusia punya emosi dan pikiran, lalu berinteraksi secara sosial (emosional).</p>
                        </div>
                    </div>
                    <div style="background: white; border: 1px dashed #cbd5e1; border-radius: 12px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: #94a3b8;"><i class="fas fa-user-astronaut"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0; color: #64748b;">4. Self-Awareness (Masa Depan)</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">AI punya kesadaran dan perasaannya sendiri. Kalau udah nyampe level ini, kita butuh hukum khusus buat robot!</p>
                        </div>
                    </div>
                </div>

                <h3 style="margin-top: 32px;">2.3 Komponen Utama AI (Trinitas AI) 💡</h3>
                <p>Kenapa AI sempat "mati suri" (AI Winter) dan tiba-tiba sekarang bangkit dan pintar banget? Karena 3 komponen utama ini akhirnya berkumpul!</p>
                
                <div style="display: grid; gap: 24px; margin: 32px 0;">
                    <div style="border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background: #fff;">
                        <div style="background: #f8fafc; padding: 16px 20px; border-bottom: 1px solid #e2e8f0;">
                            <h4 style="margin: 0; color: #0f172a; display: flex; align-items: center; gap: 8px;"><i class="fas fa-database" style="color: #3b82f6;"></i> 1. Data (Bahan Bakar)</h4>
                        </div>
                        <div style="padding: 20px;">
                            <p style="margin-top: 0; font-size: 0.95rem;">AI itu bodoh kalau nggak ada data. Sama kayak anak kecil yang harus diajarin. Ada dua jenis data:</p>
                            <ul style="margin-bottom: 0; font-size: 0.95rem;">
                                <li><b>Structured Data:</b> Rapi di tabel Excel.</li>
                                <li><b>Unstructured Data:</b> Teks, foto, suara. (AI modern jagonya disini).</li>
                            </ul>
                        </div>
                    </div>
                    <div style="border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background: #fff;">
                        <div style="background: #f8fafc; padding: 16px 20px; border-bottom: 1px solid #e2e8f0;">
                            <h4 style="margin: 0; color: #0f172a; display: flex; align-items: center; gap: 8px;"><i class="fas fa-code-branch" style="color: #10b981;"></i> 2. Algoritma (Otak)</h4>
                        </div>
                        <div style="padding: 20px;">
                            <p style="margin-top: 0; font-size: 0.95rem;">Aturan matematis biar mesin nyari pola sendiri. Yang paling hits sekarang adalah <b>Deep Learning (Neural Networks)</b>.</p>
                        </div>
                    </div>
                    <div style="border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background: #fff;">
                        <div style="background: #f8fafc; padding: 16px 20px; border-bottom: 1px solid #e2e8f0;">
                            <h4 style="margin: 0; color: #0f172a; display: flex; align-items: center; gap: 8px;"><i class="fas fa-microchip" style="color: #8b5cf6;"></i> 3. Computing Power (Otot)</h4>
                        </div>
                        <div style="padding: 20px;">
                            <p style="margin-top: 0; font-size: 0.95rem;">Butuh hardware dewa! <b>GPU</b> (Graphic Card gamer) jadi andalan buat hitung jutaan matriks secara paralel, dibanding CPU biasa.</p>
                        </div>
                    </div>
                </div>

                <h3>Konsep Tambahan: Model & Evaluation 🎯</h3>
                <p>Setelah 3 trinitas di atas digabung, prosesnya menghasilkan sebuah <b>Model</b> (hasil akhir AI). Prosesnya meliputi:</p>
                <ul style="line-height: 1.8;">
                    <li><b>Training:</b> Fase AI belajar dari ribuan data. Butuh waktu lama.</li>
                    <li><b>Inference:</b> Fase AI dipakai ngejawab pertanyaan user. Ini instan!</li>
                    <li><b>Evaluation:</b> Mengetes akurasi si AI pakai matriks evaluasi (Accuracy, Precision, Recall).</li>
                </ul>

                
                <div style="background: #fff; border: 1px solid rgba(246,51,146,0.2); border-left: 4px solid var(--fellow-pink); border-radius: 12px; padding: 16px; margin-top: 32px; display: flex; align-items: flex-start; gap: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                    <i class="fas fa-book-open" style="color: var(--fellow-pink); font-size: 1.1rem; margin-top: 2px;"></i>
                    <div>
                        <h4 style="margin: 0 0 4px 0; color: #334155; font-size: 0.95rem;">Referensi Belajar</h4>
                        <p style="margin: 0; font-size: 0.85rem; color: #64748b;">Stanford CS221 & Deep Learning by Ian Goodfellow.</p>
                    </div>
                </div>
            `
        },
        '/participant-ai-applications': {
            title: 'Penerapan & Masa Depan AI',
            description: 'Mengeksplorasi penggunaan AI di industri, pipeline pengembangan, dan tantangan etika masa depan.',
            duration: '40 menit',
            tag: 'Penerapan',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-globe"></i> Topik 3: Penerapan & Masa Depan AI
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Melihat bagaimana AI mengubah wajah industri dan tantangan apa yang menanti kita.
                    </p>
                </div>

                <h3>3.1 AI di Berbagai Industri 🌍</h3>
                <p>AI bukan cuma buat IT doang! Hampir semua sektor udah "dijajah" AI. Cek industri favoritmu:</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 24px 0;">
                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid #e2e8f0;">
                        <h4 style="margin-top: 0; color: var(--fellow-pink);"><i class="fas fa-heartbeat"></i> Healthcare</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem;">
                            <li>Deteksi kanker dari X-ray lebih akurat.</li>
                            <li><i>Drug Discovery</i> penemuan obat baru super cepat.</li>
                        </ul>
                    </div>
                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid #e2e8f0;">
                        <h4 style="margin-top: 0; color: var(--fellow-pink);"><i class="fas fa-graduation-cap"></i> Education</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem;">
                            <li>AI Tutor untuk belajar privat 24/7.</li>
                            <li>Auto-grading untuk koreksi otomatis.</li>
                        </ul>
                    </div>
                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid #e2e8f0;">
                        <h4 style="margin-top: 0; color: var(--fellow-pink);"><i class="fas fa-money-bill-wave"></i> Finance</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem;">
                            <li>Deteksi penipuan kartu kredit (Fraud Detection).</li>
                            <li>Analisis skor kredit pinjaman otomatis.</li>
                        </ul>
                    </div>
                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid #e2e8f0;">
                        <h4 style="margin-top: 0; color: var(--fellow-pink);"><i class="fas fa-car"></i> Transportation</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem;">
                            <li>Mobil otonom (Self-Driving Car).</li>
                            <li>Prediksi kemacetan rute.</li>
                        </ul>
                    </div>
                </div>

                <h3 style="margin-top: 40px;">3.2 AI Development Pipeline ⚙️</h3>
                <p>Mau bikin AI? Kamu nggak bisa langsung ngetik <i>codingan</i>. Ada alur kerja wajibnya:</p>
                <div style="background: white; border: 1px solid var(--fellow-line); border-radius: 16px; padding: 24px; margin: 24px 0;">
                    <ol style="margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li><b>Define Problem:</b> Tentukan tujuan. Mau bikin prediksi apa?</li>
                        <li><b>Collect Data:</b> Scraping web, pakai sensor IoT, atau database internal.</li>
                        <li><b>Prepare Data:</b> Bersihkan data yang kosong/salah (Cleaning).</li>
                        <li><b>Train Model:</b> Algoritma mulai "belajar" nyari pola di data.</li>
                        <li><b>Evaluate Model:</b> Diuji ke data baru. Seberapa akurat?</li>
                        <li><b>Deploy & Monitor:</b> Di-launching ke server biar bisa dipakai user, lalu dipantau kinerjanya.</li>
                    </ol>
                </div>

                <h3 style="margin-top: 40px;">3.3 Etika & Keterbatasan AI ⚖️</h3>
                <p>Di balik kecanggihannya, AI juga punya "sisi gelap" yang wajib kamu waspadai:</p>
                <ul style="line-height: 1.8;">
                    <li><b>Bias & Diskriminasi:</b> AI bisa jadi rasis/seksis kalau dilatih pakai data yang emang bias.</li>
                    <li><b>Halusinasi:</b> Generative AI (kayak ChatGPT) sering ngarang fakta seolah-olah itu benar.</li>
                    <li><b>Black Box Problem:</b> Terkadang peneliti AI sendiri nggak ngerti gimana AI-nya bisa ambil keputusan rumit.</li>
                    <li><b>Data Privacy:</b> AI butuh data kita. Sejauh mana perusahaan boleh "mengintip" data pribadi kita?</li>
                    <li><b>Deepfakes:</b> Penyalahgunaan AI untuk bikin video palsu buat fitnah atau penipuan.</li>
                </ul>

                <div style="background: rgba(246,51,146,0.05); border-left: 4px solid var(--fellow-pink); padding: 16px 20px; border-radius: 0 16px 16px 0; margin: 32px 0;">
                    <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);">Masa Depan AI: Multi-Agent & Edge AI</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Masa depan AI bukan cuma satu chatbot, tapi <b>Multi-Agent</b> (beberapa agen AI berkolaborasi nyelesain project rumit) dan <b>Edge AI</b> (AI canggih yang jalan langsung di HP/laptopmu tanpa butuh koneksi internet!).</p>
                </div>

                
                <div style="background: #fff; border: 1px solid rgba(246,51,146,0.2); border-left: 4px solid var(--fellow-pink); border-radius: 12px; padding: 16px; margin-top: 32px; display: flex; align-items: flex-start; gap: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                    <i class="fas fa-book-open" style="color: var(--fellow-pink); font-size: 1.1rem; margin-top: 2px;"></i>
                    <div>
                        <h4 style="margin: 0 0 4px 0; color: #334155; font-size: 0.95rem;">Referensi Belajar</h4>
                        <p style="margin: 0; font-size: 0.85rem; color: #64748b;">World Economic Forum: The Future of AI Ethics, 2024.</p>
                    </div>
                </div>
            `
        },
        '/participant-ai-summary': {
            title: 'Ringkasan Modul 1',
            description: 'Kesimpulan akhir dan Mini Project dari modul Pengantar AI.',
            duration: '15 menit',
            tag: 'Review',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-clipboard-check"></i> Topik 4: Ringkasan & Kesimpulan
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Mengunci pemahaman inti sebelum kamu mulai latihan Mini Project.
                    </p>
                </div>

                <div style="background: #fff0f7; border: 1px solid rgba(246,51,146,0.3); border-radius: 20px; padding: 24px; display: flex; gap: 20px; align-items: flex-start; margin: 24px 0; box-shadow: 0 4px 12px rgba(246,51,146,0.05);">
                    <img src="/assets/messaging/herai-chat-persona.png" alt="HerAI Buddy" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <div>
                        <h4 style="color: var(--fellow-pink); margin: 0 0 8px 0; font-size: 1.1rem; font-weight: 700;">Yeay! Kamu Berhasil! 🎉</h4>
                        <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--fellow-text);">Selamat, Tech Bestie! Kamu udah merampungkan konsep dasar AI dengan luar biasa. Kalau kamu udah paham poin-poin di bawah ini, berarti kamu udah siap banget ngobrolin AI di tongkrongan! 😎</p>
                    </div>
                </div>

                <h3>Ceklis Pengetahuan Baru Kamu:</h3>
                <ul class="summary-check-list" style="list-style: none; padding-left: 0;">
                    <li style="margin-bottom: 12px; display: flex; gap: 12px;"><i class="fas fa-check-circle" style="color: #10b981; margin-top: 4px;"></i> <span><b>AI itu mesin cerdas</b> yang bisa belajar dari data, nggak cuma nunggu dikasih rumus kaku.</span></li>
                    <li style="margin-bottom: 12px; display: flex; gap: 12px;"><i class="fas fa-check-circle" style="color: #10b981; margin-top: 4px;"></i> <span><b>Sejarah AI penuh lika-liku</b>, sempet masuk fase mati suri (AI Winter) sebelum akhirnya sukses berkat Deep Learning dan Generative AI.</span></li>
                    <li style="margin-bottom: 12px; display: flex; gap: 12px;"><i class="fas fa-check-circle" style="color: #10b981; margin-top: 4px;"></i> <span><b>Trinitas penyokong AI</b> adalah: Data (bensin), Algoritma (otak), dan Computing Power (otot/GPU).</span></li>
                    <li style="margin-bottom: 12px; display: flex; gap: 12px;"><i class="fas fa-check-circle" style="color: #10b981; margin-top: 4px;"></i> <span><b>Penerapan AI ada dimana-mana</b>, mulai dari ngecek kesehatan, nentuin pinjaman bank, sampai rekomendasi TikTok.</span></li>
                    <li style="margin-bottom: 12px; display: flex; gap: 12px;"><i class="fas fa-check-circle" style="color: #10b981; margin-top: 4px;"></i> <span><b>AI masih punya bias dan halusinasi</b>, makanya kita nggak boleh asal percaya 100% tanpa verifikasi manusia.</span></li>
                </ul>

                <div class="daily-ai-box" style="margin-top: 40px; background: white; border: 2px dashed var(--fellow-pink); border-radius: 16px; padding: 24px; text-align: center;">
                    <h3 style="margin-top: 0; color: var(--fellow-pink);">Mini Project: AI Around Me <i class="fas fa-search" style="color: #f59e0b;"></i></h3>
                    <p style="font-size: 0.95rem; color: var(--fellow-muted); margin-bottom: 16px;">Sekarang saatnya unjuk gigi! Kerjakan tugas mandiri ini di tab Latihan.</p>
                    <p style="background: rgba(246,51,146,0.05); padding: 12px; border-radius: 8px; font-weight: 500; display: inline-block; margin: 0;">Identifikasi 10 aplikasi AI yang kamu pakai hari ini. Analisis jenisnya, algoritma tebakanmu, dan potensi biasnya!</p>
                </div>
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
            { id: 'seed-1', name: 'Aisyah Putri', time: 'Hari ini, 09.15', text: 'Menurutku AI paling terasa di rekomendasi konten dan navigasi. Tapi aku masih penasaran bagaimana cara membedakan rekomendasi yang membantu dan yang manipulatif.', replies: [{ name: 'Mentor Rani', time: 'Hari ini, 09.28', text: 'Pertanyaan bagus. Salah satu caranya adalah melihat transparansi data, tujuan sistem, dan apakah pengguna masih punya kontrol.' }] }
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
            showResult(savedScore, 5);
            quizForm.querySelectorAll('input').forEach(input => input.disabled = true);
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Kuis Sudah Dikirim';
            }
            return;
        }

        quizForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const groups = ['q1', 'q2', 'q3', 'q4', 'q5'];
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
