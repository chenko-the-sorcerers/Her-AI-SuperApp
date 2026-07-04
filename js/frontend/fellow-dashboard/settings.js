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
        { path: '/participant-ai-intro', title: 'Apa itu Artificial Intelligence?', short: 'Pengantar AI' },
        { path: '/participant-ai-history', title: 'Sejarah Artificial Intelligence', short: 'Sejarah AI' },
        { path: '/participant-ai-types', title: 'Jenis-Jenis Artificial Intelligence', short: 'Jenis AI' },
        { path: '/participant-ai-components', title: 'Komponen Utama AI', short: 'Komponen AI' },
        { path: '/participant-ai-applications', title: 'AI di Berbagai Bidang', short: 'Penerapan AI' },
        { path: '/participant-ai-pipeline', title: 'AI Development Pipeline', short: 'AI Pipeline' },
        { path: '/participant-ai-ml-dl', title: 'AI vs Machine Learning vs Deep Learning', short: 'AI vs ML vs DL' },
        { path: '/participant-ai-pros-cons', title: 'Kelebihan & Keterbatasan AI', short: 'Kelebihan & Kekurangan' },
        { path: '/participant-ai-ethics', title: 'Etika AI', short: 'Etika AI' },
        { path: '/participant-ai-future', title: 'Future of AI', short: 'Masa Depan AI' },
        { path: '/participant-ai-summary', title: 'Ringkasan', short: 'Ringkasan' }
    ];

    const generatedLessonContent = {
        '/participant-ai-history': {
            title: 'Sejarah Singkat AI',
            description: 'Memahami bagaimana AI berkembang dari gagasan mesin berpikir hingga menjadi teknologi arus utama.',
            duration: '35 menit',
            tag: 'Konteks',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-hourglass-half"></i> Topik 2: Sejarah Artificial Intelligence
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Memahami perkembangan AI dari masa ke masa dan penyebab munculnya era AI modern.
                    </p>
                </div>

                <h3>2.1 Timeline Sejarah AI ⏳</h3>
                <p>Siapa sangka ide tentang mesin cerdas udah ada dari tahun 1940-an lho bestie! Yuk intip timeline perjalanan seru AI sampai bisa secanggih sekarang!</p>
                
                <div style="position: relative; padding-left: 32px; margin: 32px 0; border-left: 2px solid rgba(246,51,146,0.3);">
                    
                    <div style="position: relative; margin-bottom: 24px;">
                        <div style="position: absolute; left: -42px; width: 20px; height: 20px; background: var(--fellow-pink); border-radius: 50%; border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">1943 — Artificial Neuron</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-text);">Warren McCulloch dan Walter Pitts mengusulkan model matematis pertama dari neuron saraf otak.</p>
                    </div>

                    <div style="position: relative; margin-bottom: 24px;">
                        <div style="position: absolute; left: -42px; width: 20px; height: 20px; background: var(--fellow-pink); border-radius: 50%; border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">1950 — Turing Test</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-text);">Alan Turing mencetuskan "Turing Test" buat menguji apakah sebuah mesin bisa meniru kecerdasan manusia.</p>
                    </div>

                    <div style="position: relative; margin-bottom: 24px;">
                        <div style="position: absolute; left: -42px; width: 20px; height: 20px; background: var(--fellow-pink); border-radius: 50%; border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">1956 — Istilah "Artificial Intelligence" Lahir</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-text);">John McCarthy menggunakan istilah ini pertama kali di konferensi Dartmouth. Ini jadi awal mula AI diakui sebagai bidang riset mandiri!</p>
                    </div>

                    <div style="position: relative; margin-bottom: 24px;">
                        <div style="position: absolute; left: -42px; width: 20px; height: 20px; background: var(--fellow-pink); border-radius: 50%; border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">1960-1970an — Era Expert System</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-text);">Sistem pakar mulai booming. Komputer diprogram dengan aturan ketat untuk meniru keputusan seorang ahli (misal dokter).</p>
                    </div>

                    <div style="position: relative; margin-bottom: 24px;">
                        <div style="position: absolute; left: -42px; width: 20px; height: 20px; background: #94a3b8; border-radius: 50%; border: 4px solid white; box-shadow: 0 0 0 2px rgba(148,163,184,0.2);"></div>
                        <h4 style="margin: 0 0 4px 0; color: #475569;">1980an & 1990an — AI Winter 🥶</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-text);">Masa suram AI. Karena keterbatasan hardware dan ekspektasi yang ketinggian, banyak dana riset dicabut. Perkembangan AI mandek.</p>
                    </div>

                    <div style="position: relative; margin-bottom: 24px;">
                        <div style="position: absolute; left: -42px; width: 20px; height: 20px; background: var(--fellow-pink); border-radius: 50%; border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">1997 — Deep Blue Menang Catur</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-text);">Superkomputer IBM Deep Blue ngalahin juara catur dunia Garry Kasparov. Ini momen bersejarah banget!</p>
                    </div>

                    <div style="position: relative; margin-bottom: 24px;">
                        <div style="position: absolute; left: -42px; width: 20px; height: 20px; background: var(--fellow-pink); border-radius: 50%; border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">2012 — AlexNet & Kebangkitan Deep Learning</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-text);">AI bernama AlexNet menang lomba deteksi gambar dengan telak pake teknologi Deep Learning. Ini yang memicu revolusi AI modern!</p>
                    </div>

                    <div style="position: relative; margin-bottom: 24px;">
                        <div style="position: absolute; left: -42px; width: 20px; height: 20px; background: var(--fellow-pink); border-radius: 50%; border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h4 style="margin: 0 0 4px 0; color: var(--fellow-pink);">2016 — AlphaGo</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-text);">AI buatan Google DeepMind ngalahin juara dunia permainan Go (permainan yang jauuuh lebih kompleks dari catur).</p>
                    </div>

                    <div style="position: relative; margin-bottom: 24px;">
                        <div style="position: absolute; left: -42px; width: 20px; height: 20px; background: #eab308; border-radius: 50%; border: 4px solid white; box-shadow: 0 0 0 2px rgba(234,179,8,0.2);"></div>
                        <h4 style="margin: 0 0 4px 0; color: #ca8a04;">2022-Sekarang — Era Generative AI ✨</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-text);">ChatGPT dirilis! AI nggak cuma bisa nganalisa, tapi bisa NYIPTAIN sesuatu yang baru (teks, gambar, video, musik).</p>
                    </div>
                </div>

                <h3>2.2 AI Winter: Waktu AI "Mati Suri" 🥶</h3>
                <p>Bayangin kalau kamu janjin mau bikin mobil terbang besok, tapi pas besok ternyata kamu cuma bisa bikin layangan. Orang-orang pasti kecewa kan dan nggak mau ngasih kamu modal lagi? Nah, itu persis yang terjadi sama AI!</p>
                <p>AI Winter adalah periode di mana riset AI berhenti karena kehabisan dana. Kenapa bisa terjadi?</p>
                <ul>
                    <li>Ekspektasi peneliti yang terlalu bombastis di awal.</li>
                    <li>Hardware komputer jaman dulu masih lambat banget (computing power lemah).</li>
                    <li>Data digital untuk melatih AI (dataset) belum banyak.</li>
                </ul>

                <aside class="lesson-reference">Referensi: Artificial Intelligence: A Modern Approach — Stuart Russell & Peter Norvig.</aside>
            `
        },
        '/participant-ai-types': {
            title: 'Jenis-Jenis Artificial Intelligence',
            description: 'Memahami perbedaan tingkatan AI dan pengelompokan berdasarkan fungsinya.',
            duration: '35 menit',
            tag: 'Klasifikasi',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-layer-group"></i> Topik 3: Jenis-Jenis Artificial Intelligence
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Mengetahui tingkatan AI secara kapabilitas dan fungsi, serta memahami batasannya.
                    </p>
                </div>

                <h3>3.1 Berdasarkan Kemampuan (Capability) 📊</h3>
                <p>Se-canggih apa sih AI sekarang? Secara teori, kecerdasan AI itu dibagi jadi tiga tingkatan, bestie. Yuk lihat bedanya:</p>
                
                <div class="ai-capability-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-top: 16px;">
                    <article style="padding: 20px; border-radius: 16px; border: 1px solid rgba(246,51,146,0.15); box-shadow: 0 4px 12px rgba(0,0,0,0.03); background: #fff;">
                        <i class="fas fa-bullseye" style="color: var(--fellow-pink); font-size: 2rem; margin-bottom: 12px; display: block;"></i>
                        <h3 style="font-size: 1.1rem; margin-bottom: 8px;">ANI (Narrow AI)</h3>
                        <p style="font-size: 0.85rem; color: var(--fellow-muted);">AI spesialis! Cuma jago di SATU tugas aja. <b>Semua AI yang ada di dunia saat ini (termasuk ChatGPT) masuknya ke kategori ini.</b></p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; border: 1px solid rgba(246,51,146,0.15); box-shadow: 0 4px 12px rgba(0,0,0,0.03); background: #fff;">
                        <i class="fas fa-brain" style="color: var(--fellow-pink); font-size: 2rem; margin-bottom: 12px; display: block;"></i>
                        <h3 style="font-size: 1.1rem; margin-bottom: 8px;">AGI (General AI)</h3>
                        <p style="font-size: 0.85rem; color: var(--fellow-muted);">AI level manusia! Bisa mikir, paham konteks, dan multitasking kayak otak kita. Saat ini AGI masih sebatas teori (belum ada wujudnya).</p>
                    </article>
                    <article style="padding: 20px; border-radius: 16px; border: 1px solid rgba(246,51,146,0.15); box-shadow: 0 4px 12px rgba(0,0,0,0.03); background: #fff;">
                        <i class="fas fa-star" style="color: var(--fellow-pink); font-size: 2rem; margin-bottom: 12px; display: block;"></i>
                        <h3 style="font-size: 1.1rem; margin-bottom: 8px;">ASI (Super AI)</h3>
                        <p style="font-size: 0.85rem; color: var(--fellow-muted);">Level Dewa! Jauh lebih cerdas dari manusia paling pintar di bumi. Ini yang sering jadi inspirasi film sci-fi (kayak Ultron/Skynet).</p>
                    </article>
                </div>

                <h3 style="margin-top: 32px;">3.2 Berdasarkan Fungsi (Functionality) ⚙️</h3>
                <p>Nah kalau berdasarkan fungsinya, AI diklasifikasikan lagi jadi 4 tahap evolusi:</p>

                <div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0;">
                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: var(--fellow-pink);"><i class="fas fa-calculator"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">1. Reactive Machine</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Level paling dasar. Dia cuma bereaksi sama input saat itu juga tanpa punya ingatan masa lalu. (Contoh: Deep Blue si jago catur).</p>
                        </div>
                    </div>
                    <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: var(--fellow-pink);"><i class="fas fa-memory"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">2. Limited Memory</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Bisa belajar dari data masa lalu yang terbatas untuk ambil keputusan lebih baik. Hampir semua AI modern kayak Self-Driving Car dan ChatGPT ada di level ini!</p>
                        </div>
                    </div>
                    <div style="background: white; border: 1px dashed #cbd5e1; border-radius: 12px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: #94a3b8;"><i class="fas fa-people-arrows"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0; color: #64748b;">3. Theory of Mind (Belum Ada)</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Level ini adalah impian. AI nantinya bisa paham bahwa manusia punya emosi, niat, dan pikiran yang beda-beda, terus AI bisa berinteraksi secara sosial.</p>
                        </div>
                    </div>
                    <div style="background: white; border: 1px dashed #cbd5e1; border-radius: 12px; padding: 16px; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: #94a3b8;"><i class="fas fa-user-astronaut"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0; color: #64748b;">4. Self-Awareness (Belum Ada)</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Puncaknya! AI punya kesadaran sendiri. Dia sadar eksistensinya, punya perasaannya sendiri. Kalau udah nyampe level ini, kita mungkin butuh hukum khusus buat robot deh.</p>
                        </div>
                    </div>
                </div>

                <aside class="lesson-reference">Referensi: WTTC, <em>Introduction to Artificial Intelligence (AI) Technology</em>, 2024.</aside>
            `
        },
        '/participant-ai-components': {
            title: 'Komponen Utama AI',
            description: 'Mempelajari tiga fondasi utama pembentuk AI modern: data, algoritma, dan komputasi.',
            duration: '35 menit',
            tag: 'Fondasi',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-cubes"></i> Topik 4: Komponen Utama AI (Trinitas AI)
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Mengetahui rahasia di balik kenapa AI tiba-tiba jadi sangat pintar belakangan ini.
                    </p>
                </div>

                <p>Kenapa AI sempet "mati suri" (AI Winter) dan tiba-tiba sekarang bangkit dan jago banget? Jawabannya karena 3 komponen utama (Trinitas AI) ini akhirnya berkumpul!</p>

                <div style="display: grid; gap: 24px; margin: 32px 0;">
                    
                    <div style="border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background: #fff;">
                        <div style="background: #f8fafc; padding: 16px 20px; border-bottom: 1px solid #e2e8f0;">
                            <h4 style="margin: 0; color: #0f172a; display: flex; align-items: center; gap: 8px;"><i class="fas fa-database" style="color: #3b82f6;"></i> 1. Data (Bensinnya AI)</h4>
                        </div>
                        <div style="padding: 20px;">
                            <p style="margin-top: 0;">AI itu bodoh kalau nggak ada data. Sama kayak manusia yang nggak pernah disekolahin. Semakin banyak data, AI semakin pinter.</p>
                            <ul style="margin-bottom: 0;">
                                <li><b>Structured Data:</b> Data rapi berbentuk tabel (kayak Excel). Gampang dibaca AI.</li>
                                <li><b>Unstructured Data:</b> Data acak kayak teks, foto, suara, video. (Nah, AI modern jago banget nanganin ini!).</li>
                            </ul>
                        </div>
                    </div>

                    <div style="border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background: #fff;">
                        <div style="background: #f8fafc; padding: 16px 20px; border-bottom: 1px solid #e2e8f0;">
                            <h4 style="margin: 0; color: #0f172a; display: flex; align-items: center; gap: 8px;"><i class="fas fa-code-branch" style="color: #10b981;"></i> 2. Algorithm (Otaknya AI)</h4>
                        </div>
                        <div style="padding: 20px;">
                            <p style="margin-top: 0;">Data yang banyak tadi bakal percuma kalau nggak tahu cara ngolahnya. Algoritma itu aturan matematis biar mesin bisa nyari pola.</p>
                            <ul style="margin-bottom: 0;">
                                <li><b>Rule-Based:</b> Tradisional. Kalau A, maka B. (Kurang fleksibel).</li>
                                <li><b>Machine Learning:</b> Mesin belajar pola sendiri dari data tanpa di-coding kaku.</li>
                                <li><b>Deep Learning:</b> Pake <i>Neural Network</i> (jaringan saraf tiruan) yang canggih banget.</li>
                            </ul>
                        </div>
                    </div>

                    <div style="border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background: #fff;">
                        <div style="background: #f8fafc; padding: 16px 20px; border-bottom: 1px solid #e2e8f0;">
                            <h4 style="margin: 0; color: #0f172a; display: flex; align-items: center; gap: 8px;"><i class="fas fa-microchip" style="color: #8b5cf6;"></i> 3. Computing Power (Ototnya AI)</h4>
                        </div>
                        <div style="padding: 20px;">
                            <p style="margin-top: 0;">Punya data berjuta-juta + algoritma ribet = Butuh komputer super dewa! Dulu orang nggak bisa bikin AI canggih karena hardwarenya belum kuat.</p>
                            <ul style="margin-bottom: 0;">
                                <li><b>CPU:</b> Prosesor biasa (lambat buat AI).</li>
                                <li><b>GPU:</b> Graphic card (kayak punya gamer), jago banget jalanin kalkulasi matematis paralel. Penyelamat AI modern!</li>
                                <li><b>TPU:</b> Chip khusus buatan Google spesialis buat AI.</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <h3>Konsep Tambahan: Model & Evaluation</h3>
                <p>Setelah 3 trinitas di atas gabung, prosesnya bakal menghasilkan sebuah <b>Model</b>. Model itu ya hasil akhir AI-nya yang udah pintar.</p>
                <ul>
                    <li><b>Training:</b> Fase AI belajar dari data.</li>
                    <li><b>Inference:</b> Fase AI dipakai buat jawab pertanyaan user.</li>
                    <li><b>Evaluation:</b> Nge-test seberapa akurat si AI (diukur pakai matriks seperti Accuracy, Precision, Recall).</li>
                </ul>

                <aside class="lesson-reference">Referensi: Stanford CS221 & Deep Learning by Ian Goodfellow.</aside>
            `
        },
        '/participant-ai-applications': {
            title: 'AI di Berbagai Bidang',
            description: 'Mengeksplorasi penggunaan AI di sektor kesehatan, pendidikan, keuangan, dan lainnya.',
            duration: '30 menit',
            tag: 'Penerapan',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-globe"></i> Topik 5: AI di Berbagai Bidang
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Membuka wawasan tentang bagaimana AI merevolusi semua sektor industri di dunia.
                    </p>
                </div>

                <p>Udah paham kan teori AI? Sekarang kita lihat betapa "menggilanya" AI ngebantu kehidupan manusia di berbagai industri. Coba cek industri yang kamu minati!</p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 24px 0;">
                    
                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid #e2e8f0;">
                        <h4 style="margin-top: 0; color: var(--fellow-pink);"><i class="fas fa-heartbeat"></i> Healthcare (Kesehatan)</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem;">
                            <li><b>Diagnosa Penyakit:</b> AI mendeteksi kanker dari hasil X-ray lebih akurat dari dokter.</li>
                            <li><b>Drug Discovery:</b> AI nyari resep obat baru dalam hitungan bulan (biasanya butuh belasan tahun).</li>
                        </ul>
                    </div>

                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid #e2e8f0;">
                        <h4 style="margin-top: 0; color: var(--fellow-pink);"><i class="fas fa-graduation-cap"></i> Education (Pendidikan)</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem;">
                            <li><b>AI Tutor:</b> Guru virtual 24/7 yang ngebantu murid belajar sesuai pace-nya sendiri (Personalized Learning).</li>
                            <li><b>Auto-grading:</b> Ngoreksi esai otomatis.</li>
                        </ul>
                    </div>

                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid #e2e8f0;">
                        <h4 style="margin-top: 0; color: var(--fellow-pink);"><i class="fas fa-money-bill-wave"></i> Finance (Keuangan)</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem;">
                            <li><b>Fraud Detection:</b> Nge-block transaksi kartu kredit kalau terdeteksi ada yang aneh.</li>
                            <li><b>Credit Scoring:</b> AI mutusin apakah kamu layak dikasih pinjaman atau nggak.</li>
                        </ul>
                    </div>

                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid #e2e8f0;">
                        <h4 style="margin-top: 0; color: var(--fellow-pink);"><i class="fas fa-car"></i> Transportation (Transportasi)</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem;">
                            <li><b>Self-Driving Car:</b> Mobil Tesla jalan sendiri pake AI (Computer Vision).</li>
                            <li><b>Traffic Prediction:</b> Prediksi kemacetan lampu merah.</li>
                        </ul>
                    </div>

                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid #e2e8f0;">
                        <h4 style="margin-top: 0; color: var(--fellow-pink);"><i class="fas fa-seedling"></i> Agriculture (Pertanian)</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem;">
                            <li><b>Smart Farming:</b> Drone AI nge-scan ladang buat nyari tanaman yang sakit.</li>
                            <li><b>Prediksi Panen:</b> Berdasarkan data cuaca dan kondisi tanah.</li>
                        </ul>
                    </div>

                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid #e2e8f0;">
                        <h4 style="margin-top: 0; color: var(--fellow-pink);"><i class="fas fa-shopping-cart"></i> Retail & E-Commerce</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem;">
                            <li><b>Recommendation System:</b> Tokopedia nebak barang yang mau kamu beli.</li>
                            <li><b>Virtual Try-on:</b> Nyoba baju pake AR & AI.</li>
                        </ul>
                    </div>

                </div>
            `
        },
        '/participant-ai-pipeline': {
            title: 'AI Development Pipeline',
            description: 'Langkah-langkah sistematis dalam membangun proyek Artificial Intelligence.',
            duration: '35 menit',
            tag: 'Pipeline',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-project-diagram"></i> Topik 6: AI Development Pipeline
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Memahami tahapan siklus hidup (lifecycle) dalam pembuatan proyek AI.
                    </p>
                </div>

                <p>Mau bikin AI? Kamu nggak bisa langsung ngetik <i>codingan</i> gitu aja! Ada alur kerja wajib yang namanya <b>AI Development Pipeline</b>. Mirip kayak pabrik mobil, bikin AI ada urutannya dari mentah sampai jadi.</p>

                <div style="margin: 40px 0; display: flex; flex-direction: column; gap: 20px;">
                    
                    <div style="display: flex; gap: 16px; align-items: stretch;">
                        <div style="width: 48px; background: var(--fellow-pink); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">1</div>
                        <div style="flex: 1; padding: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px;">
                            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Define Problem</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b;">Tentukan dulu masalahnya! Apa objektifnya? Metrik kesuksesannya apa? (Misal: Ingin deteksi email spam dengan akurasi 95%).</p>
                        </div>
                    </div>
                    
                    <div style="margin-left: 22px; width: 4px; height: 16px; background: #e2e8f0;"></div>

                    <div style="display: flex; gap: 16px; align-items: stretch;">
                        <div style="width: 48px; background: var(--fellow-pink); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">2</div>
                        <div style="flex: 1; padding: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px;">
                            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Collect Data</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b;">Kumpulin bahan bakarnya! Bisa lewat scraping web, beli dataset, atau pakai data internal perusahaan.</p>
                        </div>
                    </div>

                    <div style="margin-left: 22px; width: 4px; height: 16px; background: #e2e8f0;"></div>

                    <div style="display: flex; gap: 16px; align-items: stretch;">
                        <div style="width: 48px; background: var(--fellow-pink); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">3</div>
                        <div style="flex: 1; padding: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px;">
                            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Prepare Data</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b;">Data mentah biasanya kotor (ada nilai kosong, duplikat). Di tahap ini, data dibersihkan (cleaning) dan diformat biar enak dimakan AI.</p>
                        </div>
                    </div>

                    <div style="margin-left: 22px; width: 4px; height: 16px; background: #e2e8f0;"></div>

                    <div style="display: flex; gap: 16px; align-items: stretch;">
                        <div style="width: 48px; background: var(--fellow-pink); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">4</div>
                        <div style="flex: 1; padding: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px;">
                            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Train Model</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b;">Nah, ini inti mesinnya! Algoritma dikasih lihat data berulang-ulang sampai dia nemu polanya sendiri.</p>
                        </div>
                    </div>

                    <div style="margin-left: 22px; width: 4px; height: 16px; background: #e2e8f0;"></div>

                    <div style="display: flex; gap: 16px; align-items: stretch;">
                        <div style="width: 48px; background: var(--fellow-pink); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">5</div>
                        <div style="flex: 1; padding: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px;">
                            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Evaluate</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b;">AI di-ujianin! Kita ngetest pake data baru yang belum pernah dia lihat, akurat nggak dia?</p>
                        </div>
                    </div>

                    <div style="margin-left: 22px; width: 4px; height: 16px; background: #e2e8f0;"></div>

                    <div style="display: flex; gap: 16px; align-items: stretch;">
                        <div style="width: 48px; background: var(--fellow-pink); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">6</div>
                        <div style="flex: 1; padding: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px;">
                            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Deploy</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b;">Kalau udah lulus ujian, AI diluncurkan (deploy) ke server/aplikasi nyata biar bisa dipakai user (contoh: jadi chatbot).</p>
                        </div>
                    </div>

                    <div style="margin-left: 22px; width: 4px; height: 16px; background: #e2e8f0;"></div>

                    <div style="display: flex; gap: 16px; align-items: stretch;">
                        <div style="width: 48px; background: var(--fellow-pink); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; flex-shrink: 0;">7</div>
                        <div style="flex: 1; padding: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px;">
                            <h4 style="margin: 0 0 8px 0; color: #1e293b;">Monitor & Improve</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b;">Di dunia nyata, data berubah terus (Data Drift). AI harus terus dipantau, dilatih ulang (retrain) biar nggak jadi bodoh seiring waktu.</p>
                        </div>
                    </div>

                </div>

            `
        },
        '/participant-ai-ml-dl': {
            title: 'AI vs Machine Learning vs Deep Learning',
            description: 'Memahami hubungan hirarki antara konsep AI, Machine Learning, dan Deep Learning.',
            duration: '25 menit',
            tag: 'Konsep',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-project-diagram"></i> Topik 7: AI vs ML vs DL
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Mengurai kerancuan istilah AI, Machine Learning, dan Deep Learning dalam dunia nyata.
                    </p>
                </div>

                <h3>Keluarga Besar AI 👨‍👩‍👧‍👦</h3>
                <p>Pernah dengar istilah Machine Learning (ML) atau Deep Learning (DL) dan bingung bedanya sama AI? Wajar banget! Anggap aja mereka itu kayak keluarga besar yang saling berhubungan (konsep hierarki/subset). Yuk lihat penjelasannya!</p>
                
                <div class="ai-hierarchy-diagram" aria-label="Diagram Hubungan AI Machine Learning dan Deep Learning" style="margin: 24px 0; padding: 20px; background: #fafafa; border-radius: 20px; text-align: center;">
                    <div class="ai-layer ai-layer-ai" style="padding: 24px; border-radius: 16px; background: rgba(246,51,146,0.1); border: 2px dashed rgba(246,51,146,0.4);">
                        <span style="font-weight: bold; color: var(--fellow-text); font-size: 1.1rem; margin-bottom: 16px; display: block;">🤖 Artificial Intelligence (AI)</span>
                        <p style="font-size: 0.85rem; margin-bottom: 16px; color: var(--fellow-muted);">Payung besar dari semua teknologi cerdas. Tujuan utamanya: meniru kecerdasan manusia.</p>
                        
                        <div class="ai-layer ai-layer-ml" style="padding: 24px; border-radius: 12px; background: rgba(246,51,146,0.2); border: 2px dashed rgba(246,51,146,0.5);">
                            <span style="font-weight: bold; color: var(--fellow-text); font-size: 1rem; margin-bottom: 12px; display: block;">📈 Machine Learning (ML)</span>
                            <p style="font-size: 0.85rem; margin-bottom: 16px; color: var(--fellow-muted);">Sub-bidang AI. Mesin dikasih data berlimpah untuk belajar nyari pola secara statistik (misal: Regresi, Decision Tree).</p>
                            
                            <div class="ai-layer ai-layer-dl" style="padding: 24px; border-radius: 8px; background: rgba(246,51,146,0.3); border: 2px solid var(--fellow-pink);">
                                <span style="font-weight: bold; color: var(--fellow-text); margin-bottom: 8px; display: block;">🧠 Deep Learning (DL)</span>
                                <p style="font-size: 0.85rem; margin: 0; color: #171827;">Sub-bidang ML paling canggih. Pakai Neural Networks (Jaringan Saraf Tiruan) berlapis-lapis. Cocok untuk data super ribet kayak gambar & bahasa.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(246,51,146,0.05); border-left: 4px solid var(--fellow-pink); padding: 16px 20px; border-radius: 0 16px 16px 0; margin: 32px 0;">
                    <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink); display: flex; align-items: center; gap: 8px;"><i class="fas fa-check-circle"></i> Rule of Thumb</h4>
                    <p style="margin: 0; font-size: 0.95rem;"><b>Semua Deep Learning pasti Machine Learning, dan semua Machine Learning pasti AI. Tapi nggak semua AI itu pake Deep Learning!</b> 🤯</p>
                </div>
            `
        },
        '/participant-ai-pros-cons': {
            title: 'Kelebihan & Keterbatasan AI',
            description: 'Menganalisis sisi positif dan negatif dari implementasi Artificial Intelligence.',
            duration: '25 menit',
            tag: 'Analisis',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-balance-scale"></i> Topik 8: Kelebihan & Keterbatasan AI
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Menjadi pengguna AI yang realistis, tahu kekuatannya, dan paham kelemahannya.
                    </p>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0;">
                    
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 16px; padding: 24px;">
                        <h4 style="color: #166534; font-size: 1.2rem; margin-top: 0; border-bottom: 2px solid #bbf7d0; padding-bottom: 12px;"><i class="fas fa-thumbs-up"></i> Kelebihan AI</h4>
                        <ul style="padding-left: 20px; color: #15803d; line-height: 1.7; margin-bottom: 0;">
                            <li><b>Otomatisasi:</b> Ngerjain tugas berulang tanpa capek (24/7).</li>
                            <li><b>Akurasi Tinggi:</b> Khususnya di hal repetitif dan detail (kayak review ribuan dokumen).</li>
                            <li><b>Efisiensi Waktu:</b> Yang tadinya berhari-hari, selesai dalam hitungan detik.</li>
                            <li><b>Analisis Big Data:</b> Manusia pusing lihat tabel sejuta baris, AI seneng banget dan cepet nemuin polanya!</li>
                        </ul>
                    </div>

                    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 16px; padding: 24px;">
                        <h4 style="color: #991b1b; font-size: 1.2rem; margin-top: 0; border-bottom: 2px solid #fecaca; padding-bottom: 12px;"><i class="fas fa-thumbs-down"></i> Keterbatasan AI</h4>
                        <ul style="padding-left: 20px; color: #b91c1c; line-height: 1.7; margin-bottom: 0;">
                            <li><b>Bias (Diskriminasi):</b> Kalau data pelatihannya rasis, AI bakal ikutan rasis.</li>
                            <li><b>Hallucination:</b> Kadang ngarang bebas tapi dengan gaya super PD (biasanya LLM kayak ChatGPT).</li>
                            <li><b>Black Box:</b> Sangat susah jelasin "Kenapa AI mutusin kayak gitu?" (khususnya Deep Learning).</li>
                            <li><b>Biaya Tinggi:</b> Training AI itu mahal banget, butuh ratusan GPU dan bayar listrik mahal.</li>
                            <li><b>Privacy:</b> Butuh menyedot data personal user untuk belajar.</li>
                        </ul>
                    </div>

                </div>
            `
        },
        '/participant-ai-ethics': {
            title: 'Etika Artificial Intelligence',
            description: 'Mempelajari panduan moral dan etika dalam pengembangan sistem cerdas.',
            duration: '30 menit',
            tag: 'Etika',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-shield-alt"></i> Topik 9: Etika Artificial Intelligence
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Memahami tanggung jawab moral dalam menciptakan dan menggunakan AI (Responsible AI).
                    </p>
                </div>

                <p><i>"With great power, comes great responsibility"</i> — Yap, Spider-Man bener banget. AI itu kuat banget, makanya butuh <b>Guardrails</b> (pagar pembatas) biar nggak nyelakain manusia!</p>

                <div style="display: grid; gap: 16px; margin: 24px 0;">
                    
                    <div style="padding: 16px; border-radius: 12px; background: white; border: 1px solid #e2e8f0; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: #ef4444;"><i class="fas fa-mask"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">1. Deepfake & Disinformasi</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b;">AI dipakai untuk bikin video palsu atau hoax otomatis untuk menyetir opini publik (misal pas Pemilu). Bahaya banget!</p>
                        </div>
                    </div>

                    <div style="padding: 16px; border-radius: 12px; background: white; border: 1px solid #e2e8f0; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: #f59e0b;"><i class="fas fa-gavel"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">2. AI Bias & Fairness</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b;">Pernah ada AI rekrutmen kerja yang selalu nolak CV perempuan karena dilatih pakai data mayoritas pegawai laki-laki. Developer AI harus pastiin data pelatihannya adil (fairness).</p>
                        </div>
                    </div>

                    <div style="padding: 16px; border-radius: 12px; background: white; border: 1px solid #e2e8f0; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: #3b82f6;"><i class="fas fa-eye"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">3. Explainable AI (XAI)</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b;">Kalau AI kesehatan memvonis seorang pasien kena kanker mematikan, AI harus bisa "ngejelasin" kenapa dia mutusin gitu. Nggak boleh asal "pokoknya kena".</p>
                        </div>
                    </div>

                    <div style="padding: 16px; border-radius: 12px; background: white; border: 1px solid #e2e8f0; display: flex; gap: 16px;">
                        <div style="font-size: 1.5rem; color: #8b5cf6;"><i class="fas fa-copyright"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0;">4. Copyright (Hak Cipta)</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #64748b;">Generative AI dilatih pakai jutaan gambar milik seniman tanpa izin. Siapa yang punya hak cipta dari gambar AI? Ini masih jadi perdebatan panas (AI Governance).</p>
                        </div>
                    </div>

                </div>
            `
        },
        '/participant-ai-future': {
            title: 'Future of AI',
            description: 'Meneropong arah perkembangan teknologi AI di masa depan.',
            duration: '20 menit',
            tag: 'Trend',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-rocket"></i> Topik 10: Future of AI
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Mengetahui tren AI terkini agar bisa siap dan relevan dengan karir masa depan.
                    </p>
                </div>

                <p>Dunia AI itu geraknya super cepat (hitungannya bulan, bukan tahun lagi). Apa aja sih tren AI masa depan yang bakal ngubah dunia kita?</p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 24px 0;">
                    
                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);">🤖 AI Agents & Multi-Agent</h4>
                        <p style="font-size: 0.9rem; color: var(--fellow-muted); margin: 0;">AI nantinya nggak cuma jawab pertanyaan, tapi bisa ngerjain tugas mandiri. Misal: "Tolong pesenin tiket pesawat termurah besok dan booking hotelnya". Multi-Agent itu kumpulan AI yang ngobrol satu sama lain buat ngerjain project gede!</p>
                    </div>

                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);">🚗 Autonomous Vehicles</h4>
                        <p style="font-size: 0.9rem; color: var(--fellow-muted); margin: 0;">Mobil, truk, sampai drone bakal jalan mandiri 100% tanpa supir, merevolusi industri logistik global.</p>
                    </div>

                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);">📱 Edge AI (AI on Device)</h4>
                        <p style="font-size: 0.9rem; color: var(--fellow-muted); margin: 0;">AI model bakal dikecilin ukurannya biar bisa jalan langsung di HP atau laptop kamu TANPA internet. Lebih cepat, hemat baterai, dan aman buat privasi.</p>
                    </div>

                    <div style="padding: 20px; border-radius: 12px; background: white; border: 1px solid var(--fellow-line);">
                        <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink);">🔗 AI + Blockchain / IoT</h4>
                        <p style="font-size: 0.9rem; color: var(--fellow-muted); margin: 0;">AI digabung sama teknologi lain. Misal kulkas kamu (IoT) yang mendeteksi telur abis (AI) lalu otomatis pesen telur ke supermarket dan bayar pake smart contract (Blockchain).</p>
                    </div>

                </div>
            `
        },
        '/participant-ai-summary': {
            title: 'Ringkasan',
            description: 'Kesimpulan akhir dari modul Pengantar AI.',
            duration: '15 menit',
            tag: 'Review',
            content: `
                <div style="background: linear-gradient(90deg, rgba(246,51,146,.1) 0%, rgba(246,51,146,.02) 100%); border: 1px solid rgba(246,51,146,.15); padding: 24px; margin-bottom: 32px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;">
                    <h3 style="margin:0; color: #f63392; font-size: 1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-clipboard-check"></i> Topik 11: Ringkasan Pengantar AI
                    </h3>
                    <p style="margin: 0; font-size: 1.05rem; color: var(--fellow-text); font-weight: 500;">
                        Goal: Mengunci pemahaman inti sebelum kamu mulai latihan Mini Project.
                    </p>
                </div>

                <h3>Ceklis Pengetahuan Baru Kamu:</h3>
                <p>Kalau kamu udah paham kelima poin di bawah ini, berarti kamu udah siap banget ngobrolin AI di tongkrongan! 😎</p>

                <div style="display: flex; flex-direction: column; gap: 16px; margin: 32px 0;">
                    <div style="display: flex; gap: 16px; align-items: center; padding: 16px; background: white; border: 1px solid #eee; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                        <div style="width: 32px; height: 32px; background: var(--fellow-pink); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">1</div>
                        <p style="margin: 0; font-size: 0.95rem;"><b>AI Bukan Cuma Robot.</b> AI adalah payung besar (termasuk ML dan DL) buat bikin sistem yang bisa belajar dan mikir mirip manusia.</p>
                    </div>

                    <div style="display: flex; gap: 16px; align-items: center; padding: 16px; background: white; border: 1px solid #eee; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                        <div style="width: 32px; height: 32px; background: var(--fellow-pink); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">2</div>
                        <p style="margin: 0; font-size: 0.95rem;"><b>AI Nggak Terjadi Semalam.</b> Ada sejarah panjang dari tahun 1950 (Turing Test) sampai sempat ngerasain AI Winter sebelum sukses sekarang.</p>
                    </div>

                    <div style="display: flex; gap: 16px; align-items: center; padding: 16px; background: white; border: 1px solid #eee; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                        <div style="width: 32px; height: 32px; background: var(--fellow-pink); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">3</div>
                        <p style="margin: 0; font-size: 0.95rem;"><b>Semua AI Punya Tipe.</b> Ada yang jago 1 hal doang (ANI), dan ada juga Generative AI yang bisa nyiptain lagu atau gambar dari nol.</p>
                    </div>

                    <div style="display: flex; gap: 16px; align-items: center; padding: 16px; background: white; border: 1px solid #eee; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                        <div style="width: 32px; height: 32px; background: var(--fellow-pink); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">4</div>
                        <p style="margin: 0; font-size: 0.95rem;"><b>Trinitas AI Modern.</b> AI bisa sepintar ini gara-gara 3 faktor yang akhirnya terkumpul: Algoritma cerdas + Big Data + GPU (Komputasi).</p>
                    </div>

                    <div style="display: flex; gap: 16px; align-items: center; padding: 16px; background: white; border: 1px solid #eee; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                        <div style="width: 32px; height: 32px; background: var(--fellow-pink); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">5</div>
                        <p style="margin: 0; font-size: 0.95rem;"><b>Tetap Kritis.</b> Walau canggih ngebantu kerjaan, AI bisa halusinasi, bias, atau dipakai nyebar hoax. Selalu cross-check ya!</p>
                    </div>
                </div>

                <div class="daily-ai-box" style="margin-top: 40px;">
                    <h3>Mini Project: AI Around Me <i class="fas fa-search" style="color: #f59e0b;"></i></h3>
                    <p style="font-size: 0.9rem; color: #51596d; margin-bottom: 16px;">Tugas Mandiri (Bisa kamu kerjakan di tab Latihan):</p>
                    <div style="background: white; border: 1px dashed var(--fellow-pink); border-radius: 12px; padding: 16px;">
                        <p style="margin-top: 0;">Identifikasi minimal 10 aplikasi AI yang digunakan dalam kehidupan sehari-harimu. Untuk setiap aplikasi jelaskan:</p>
                        <ul style="margin-bottom: 0;">
                            <li>Nama aplikasi</li>
                            <li>Jenis AI</li>
                            <li>Cara kerja secara umum</li>
                            <li>Manfaat & Tantangan</li>
                        </ul>
                    </div>
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
