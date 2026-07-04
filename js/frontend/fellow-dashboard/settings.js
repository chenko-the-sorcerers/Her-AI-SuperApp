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
        { path: '/participant-ai-history', title: 'Sejarah Singkat AI', short: 'Sejarah AI' },
        { path: '/participant-ai-types', title: 'Jenis-Jenis AI', short: 'Jenis AI' },
        { path: '/participant-ai-components', title: 'Komponen Utama AI', short: 'Komponen AI' },
        { path: '/participant-ai-applications', title: 'Penerapan AI di Berbagai Bidang', short: 'Penerapan AI' },
        { path: '/participant-ai-summary', title: 'Ringkasan', short: 'Ringkasan' }
    ];

    const generatedLessonContent = {
        '/participant-ai-history': {
            title: 'Sejarah Singkat AI',
            description: 'Memahami bagaimana AI berkembang dari gagasan mesin berpikir hingga menjadi teknologi arus utama.',
            duration: '35 menit',
            tag: 'Konteks',
            content: `
                <h2 style="color: var(--fellow-pink); display: flex; align-items: center; gap: 8px;"><i class="fas fa-hourglass-half"></i> Topik 2: Sejarah Singkat Artificial Intelligence</h2>
                
                <div style="background: #fff0f7; border: 1px solid rgba(246,51,146,0.3); border-radius: 20px; padding: 24px; display: flex; gap: 20px; align-items: flex-start; margin: 24px 0; box-shadow: 0 4px 12px rgba(246,51,146,0.05);">
                    <img src="/assets/messaging/herai-chat-persona.png" alt="HerAI Buddy" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <div>
                        <h4 style="color: var(--fellow-pink); margin: 0 0 8px 0; font-size: 1.1rem; font-weight: 700;">Waktunya Time Travel! ⏳</h4>
                        <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--fellow-text);">Tahu nggak sih? Konsep AI itu udah ada jauh sebelum HP layar sentuh apalagi TikTok diciptakan lho! Perjalanan AI itu panjang banget, ada masa jayanya, ada juga masa "musim dingin" (AI Winter) di mana orang-orang sempet nyerah. Yuk kita intip gimana mesin bisa perlahan-lahan jadi sepintar sekarang!</p>
                    </div>
                </div>

                <h3>Dari Imajinasi Menjadi Realitas 🌌</h3>
                <p>Jauh sebelum komputer modern lahir, manusia udah ngebayangin benda mati yang bisa hidup dan berpikir. Dari mitologi Yunani tentang robot perunggu <i>Talos</i>, sampai kisah Frankenstein. Tapi, AI sebagai ilmu pengetahuan yang nyata baru beneran dimulai setelah Perang Dunia II.</p>

                <div style="position: relative; margin: 40px 0; padding-left: 20px; border-left: 4px solid rgba(246,51,146,0.2);">
                    <article style="position: relative; margin-bottom: 32px;">
                        <div style="position: absolute; left: -30px; top: 0; width: 16px; height: 16px; border-radius: 50%; background: var(--fellow-pink); border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h3 style="margin: 0 0 8px 0; color: var(--fellow-pink);">1950: Tes Turing</h3>
                        <p style="margin: 0; font-size: 0.95rem;">Alan Turing, seorang jenius matematika, nulis paper legendaris: <i>"Can machines think?"</i> Dia bikin <b>Turing Test</b>—kalau mesin bisa ngobrol sama manusia lewat teks dan manusianya nggak nyadar kalau dia lagi ngobrol sama mesin, berarti mesin itu "cerdas"!</p>
                    </article>
                    
                    <article style="position: relative; margin-bottom: 32px;">
                        <div style="position: absolute; left: -30px; top: 0; width: 16px; height: 16px; border-radius: 50%; background: var(--fellow-pink); border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h3 style="margin: 0 0 8px 0; color: var(--fellow-pink);">1956: Kelahiran AI Sesungguhnya</h3>
                        <p style="margin: 0; font-size: 0.95rem;">Istilah <b>"Artificial Intelligence"</b> pertama kali diresmikan di <i>Dartmouth Conference</i>. Para ilmuwan super pintar ngumpul dan optimis banget bisa bikin mesin cerdas dalam beberapa tahun (spoiler: ternyata jauh lebih susah dari perkiraan mereka! 🤭).</p>
                    </article>

                    <article style="position: relative; margin-bottom: 32px;">
                        <div style="position: absolute; left: -30px; top: 0; width: 16px; height: 16px; border-radius: 50%; background: var(--fellow-pink); border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h3 style="margin: 0 0 8px 0; color: var(--fellow-pink);">1970an - 1980an: AI Winter ❄️</h3>
                        <p style="margin: 0; font-size: 0.95rem;">Fase sedih buat AI. Riset mandek karena ekspektasi ketinggian tapi komputernya masih lemot dan datanya dikit. Dana riset disetop, dan banyak yang pesimis AI bakal terwujud.</p>
                    </article>

                    <article style="position: relative; margin-bottom: 32px;">
                        <div style="position: absolute; left: -30px; top: 0; width: 16px; height: 16px; border-radius: 50%; background: var(--fellow-pink); border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h3 style="margin: 0 0 8px 0; color: var(--fellow-pink);">1997: Manusia vs Mesin (Deep Blue)</h3>
                        <p style="margin: 0; font-size: 0.95rem;">Titik balik! Superkomputer IBM <b>Deep Blue</b> berhasil ngalahin juara dunia catur, Garry Kasparov. Ini ngebuktiin kalau mesin bisa menangani problem-solving yang sangat rumit.</p>
                    </article>

                    <article style="position: relative;">
                        <div style="position: absolute; left: -30px; top: 0; width: 16px; height: 16px; border-radius: 50%; background: var(--fellow-pink); border: 4px solid white; box-shadow: 0 0 0 2px rgba(246,51,146,0.2);"></div>
                        <h3 style="margin: 0 0 8px 0; color: var(--fellow-pink);">2010an - Sekarang: Era Deep Learning 🚀</h3>
                        <p style="margin: 0; font-size: 0.95rem;">Berkat internet (data melimpah) dan GPU buat gaming (komputasi ngebut), <i>Deep Learning</i> meledak! AI mulai bisa mengenali gambar, nerjemahin bahasa, sampai akhirnya ChatGPT rilis di 2022 dan ngerubah dunia.</p>
                    </article>
                </div>

                <div style="background: rgba(246,51,146,0.05); border-left: 4px solid var(--fellow-pink); padding: 16px 20px; border-radius: 0 16px 16px 0; margin: 32px 0;">
                    <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink); display: flex; align-items: center; gap: 8px;"><i class="fas fa-seedling"></i> Pelajaran Penting</h4>
                    <p style="margin: 0; font-size: 0.95rem;">AI nggak meledak dalam semalam lho! Dia berevolusi puluhan tahun, jatuh bangun, sampai akhirnya tiga hal ngumpul di waktu yang pas: <b>Data yang super banyak, Algoritma yang makin pintar, dan Komputer yang makin kencang.</b></p>
                </div>

                <aside class="lesson-reference">Referensi: World Travel & Tourism Council, <em>Introduction to Artificial Intelligence (AI) Technology</em>, 2024, pp. 4-7.</aside>
            `
        },
        '/participant-ai-types': {
            title: 'Jenis-Jenis AI',
            description: 'Membedakan AI berdasarkan cara belajar, kapabilitas, dan fungsionalitasnya.',
            duration: '40 menit',
            tag: 'Klasifikasi',
            content: `
                <h2 style="color: var(--fellow-pink); display: flex; align-items: center; gap: 8px;"><i class="fas fa-layer-group"></i> Topik 3: Jenis-Jenis Artificial Intelligence</h2>
                
                <div style="background: #fff0f7; border: 1px solid rgba(246,51,146,0.3); border-radius: 20px; padding: 24px; display: flex; gap: 20px; align-items: flex-start; margin: 24px 0; box-shadow: 0 4px 12px rgba(246,51,146,0.05);">
                    <img src="/assets/messaging/herai-chat-persona.png" alt="HerAI Buddy" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <div>
                        <h4 style="color: var(--fellow-pink); margin: 0 0 8px 0; font-size: 1.1rem; font-weight: 700;">Nggak Semua AI Diciptakan Sama! 🎨</h4>
                        <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--fellow-text);">Sering denger ChatGPT disamain sama bot customer service bank? Padahal beda banget lho "otak"-nya! AI itu banyak jenisnya, tergantung buat apa dia diciptakan dan gimana cara kerjanya. Yuk kita kelompokin biar kamu nggak salah sebut lagi!</p>
                    </div>
                </div>

                <h3>Berdasarkan Fungsionalitas (Apa yang mereka kerjakan) 🛠️</h3>
                <p>Kalau kita lihat dari kegunaannya di dunia nyata, AI bisa dibagi jadi beberapa tipe jagoan:</p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 32px 0;">
                    <article style="background: white; padding: 24px; border-radius: 16px; border: 1px solid #eee; box-shadow: 0 4px 16px rgba(0,0,0,0.04); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: var(--fellow-pink);"></div>
                        <i class="fas fa-gavel" style="font-size: 2rem; color: var(--fellow-pink); margin-bottom: 16px; display: block;"></i>
                        <h3 style="margin: 0 0 12px 0; font-size: 1.1rem; color: #171827;">1. Expert Systems</h3>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted); line-height: 1.5;">Sistem senior yang kerjanya ngasih rekomendasi berdasarkan <i>rules</i> (aturan) yang kaku. Contoh: Sistem diagnosa penyakit di aplikasi halo-halo dokter versi lama yang nanya gejalamu satu-satu.</p>
                    </article>

                    <article style="background: white; padding: 24px; border-radius: 16px; border: 1px solid #eee; box-shadow: 0 4px 16px rgba(0,0,0,0.04); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: var(--fellow-pink);"></div>
                        <i class="fas fa-chart-line" style="font-size: 2rem; color: var(--fellow-pink); margin-bottom: 16px; display: block;"></i>
                        <h3 style="margin: 0 0 12px 0; font-size: 1.1rem; color: #171827;">2. Predictive AI</h3>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted); line-height: 1.5;">Sang peramal masa depan! Dia makan banyak banget data masa lalu buat nebak apa yang bakal terjadi. Contoh: AI BMKG buat nebak cuaca, atau rekomendasi saham.</p>
                    </article>

                    <article style="background: white; padding: 24px; border-radius: 16px; border: 1px solid #eee; box-shadow: 0 4px 16px rgba(0,0,0,0.04); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: var(--fellow-pink);"></div>
                        <i class="fas fa-wand-magic-sparkles" style="font-size: 2rem; color: var(--fellow-pink); margin-bottom: 16px; display: block;"></i>
                        <h3 style="margin: 0 0 12px 0; font-size: 1.1rem; color: #171827;">3. Generative AI</h3>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted); line-height: 1.5;">Si seniman kreatif! Nggak cuma nebak, dia bisa nyiptain hal BARU. Bikin puisi, gambar kucing naik naga, sampai nulis kode program. Contoh: ChatGPT, Midjourney, Canva Magic.</p>
                    </article>
                </div>

                <h3>Berdasarkan Cara Belajar (Gaya Belajar AI) 🎓</h3>
                <p>Sama kayak manusia, AI juga punya gaya belajar yang beda-beda waktu di sekolah alias waktu di-<i>training</i> sama programmernya:</p>

                <div style="background: #fafafa; border-radius: 20px; padding: 24px; margin: 32px 0;">
                    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                        <div style="width: 40px; height: 40px; background: rgba(246,51,146,0.1); color: var(--fellow-pink); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-chalkboard-teacher"></i></div>
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 1.05rem;">Supervised Learning (Belajar Pake Kunci Jawaban)</h4>
                            <p style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: var(--fellow-muted);">AI dikasih ribuan soal lengkap sama kunci jawabannya. Misalnya, dikasih 1000 gambar kucing yang udah di-label "Ini Kucing". Nanti dia bakal hafal pola kucing itu kayak apa.</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                        <div style="width: 40px; height: 40px; background: rgba(246,51,146,0.1); color: var(--fellow-pink); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-puzzle-piece"></i></div>
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 1.05rem;">Unsupervised Learning (Belajar Ngelompokin Sendiri)</h4>
                            <p style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: var(--fellow-muted);">AI dikasih banyak data tapi <b>tanpa kunci jawaban</b>. Tugas dia adalah nyari pola sendiri. Cocok banget buat nyari kelompok pembeli di mall yang sifat belanjanya mirip-mirip.</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 16px;">
                        <div style="width: 40px; height: 40px; background: rgba(246,51,146,0.1); color: var(--fellow-pink); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-gamepad"></i></div>
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 1.05rem;">Reinforcement Learning (Belajar dari Hukuman & Hadiah)</h4>
                            <p style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: var(--fellow-muted);">Persis kayak ngelatih anjing peliharaan! AI disuruh nyoba main game, kalau mati dia dikasih "penalti", kalau menang dikasih "poin". Lama-lama dia bakal jago banget nyari cara buat menang (kayak AI yang ngalahin juara catur tadi).</p>
                        </div>
                    </div>
                </div>

                <aside class="lesson-reference">Referensi: World Travel & Tourism Council, <em>Introduction to Artificial Intelligence (AI) Technology</em>, 2024, pp. 21-24.</aside>
            `
        },
        '/participant-ai-components': {
            title: 'Komponen Utama AI',
            description: 'Mempelajari tiga fondasi utama AI modern: algoritma, data, dan computing power.',
            duration: '45 menit',
            tag: 'Fondasi',
            content: `
            content: `
                <h2 style="color: var(--fellow-pink); display: flex; align-items: center; gap: 8px;"><i class="fas fa-cubes"></i> Topik 4: Komponen Utama AI (Trinitas AI Modern)</h2>
                
                <div style="background: #fff0f7; border: 1px solid rgba(246,51,146,0.3); border-radius: 20px; padding: 24px; display: flex; gap: 20px; align-items: flex-start; margin: 24px 0; box-shadow: 0 4px 12px rgba(246,51,146,0.05);">
                    <img src="/assets/messaging/herai-chat-persona.png" alt="HerAI Buddy" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <div>
                        <h4 style="color: var(--fellow-pink); margin: 0 0 8px 0; font-size: 1.1rem; font-weight: 700;">Resep Rahasia AI Super Pintar! 🍳</h4>
                        <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--fellow-text);">Pernah mikir nggak sih, buat bikin AI kayak ChatGPT itu butuh apa aja? Nah, di dunia AI modern, ada tiga bahan baku utama yang nggak boleh kurang satupun. Kalau kurang satu aja, AI-nya bakal gagal total! Ketiga bahan ini sering disebut sebagai <i>Trinitas AI Modern</i>. Mari kita bedah resepnya!</p>
                    </div>
                </div>

                <h3>Tiga Pilar Utama (The Big Three) 🏛️</h3>
                <p>Menurut riset dan pakar industri, ledakan AI dekade ini terjadi karena tiga hal ini akhirnya "matang" secara bersamaan:</p>

                <div class="practice-card-grid" style="margin: 32px 0;">
                    <article style="background: white; border-radius: 16px; border: 1px solid #e1e4e8; padding: 24px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                        <div style="width: 60px; height: 60px; margin: 0 auto 16px auto; background: rgba(246,51,146,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--fellow-pink); font-size: 1.5rem;"><i class="fas fa-code"></i></div>
                        <h3 style="margin: 0 0 12px 0; font-size: 1.1rem;">1. Algoritma (Sang Koki)</h3>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Algoritma adalah otak matematis atau instruksi kerjanya. Bukannya dikasih aturan mutlak <i>"if x do y"</i>, algoritma ML modern itu kayak ngajarin koki cara masak. Mereka dibikin supaya bisa belajar dan beradaptasi dari pengalaman.</p>
                    </article>

                    <article style="background: white; border-radius: 16px; border: 1px solid #e1e4e8; padding: 24px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                        <div style="width: 60px; height: 60px; margin: 0 auto 16px auto; background: rgba(246,51,146,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--fellow-pink); font-size: 1.5rem;"><i class="fas fa-database"></i></div>
                        <h3 style="margin: 0 0 12px 0; font-size: 1.1rem;">2. Data (Bahan Bakunya)</h3>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Koki jago tetep butuh bahan masakan! Data adalah bahan bakar utama AI. Semakin banyak dan bersih datanya (teks, gambar, video dari internet), semakin pinter AI-nya. Makanya sekarang data dibilang <i>"The New Oil"</i>.</p>
                    </article>

                    <article style="background: white; border-radius: 16px; border: 1px solid #e1e4e8; padding: 24px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                        <div style="width: 60px; height: 60px; margin: 0 auto 16px auto; background: rgba(246,51,146,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--fellow-pink); font-size: 1.5rem;"><i class="fas fa-microchip"></i></div>
                        <h3 style="margin: 0 0 12px 0; font-size: 1.1rem;">3. Komputasi (Dapurnya)</h3>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--fellow-muted);">Koki jago + bahan banyak, tapi kalau dapurnya kecil ya lama masaknya! Buat memproses miliaran data, butuh superkomputer dan chip khusus (kayak GPU Nvidia/TPU Google) yang sangaaaat ngebut!</p>
                    </article>
                </div>

                <h3>Kenapa Data Sekarang Tiba-Tiba Penting Banget? 📈</h3>
                <p>Coba deh kamu ingat-ingat, berapa banyak foto yang kamu upload ke sosmed? Berapa banyak chat yang kamu kirim? Atau berapa kali kamu Googling sehari? Berkat internet dan smartphone, volume data dunia tuh numpuk super duper cepat! Nah, lautan data inilah yang dipake buat ngelatih AI masa kini biar mereka bisa paham pola bahasa, gambar, dan kebiasaan manusia yang <i>complex</i> banget.</p>

                <h3>Kenapa Chip (Komputasi) Bikin AI Makin Pintar? 💻</h3>
                <p>Bayangin kalau kamu disuruh baca jutaan buku dalam 1 detik. Mustahil kan? Sama! Komputer zaman dulu juga nggak kuat. Tapi semenjak perusahaan bikin <b>GPU (Graphics Processing Unit)</b>—yang awalnya buat anak gaming main game 3D—ternyata chip ini jago banget disuruh ngerjain kalkulasi AI secara bersamaan (parallel). Akhirnya, model AI raksasa bisa dilatih dalam hitungan minggu, bukan lagi puluhan tahun!</p>

                <div style="background: rgba(246,51,146,0.05); border-left: 4px solid var(--fellow-pink); padding: 16px 20px; border-radius: 0 16px 16px 0; margin: 32px 0;">
                    <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink); display: flex; align-items: center; gap: 8px;"><i class="fas fa-exclamation-circle"></i> Ringkasan Simpelnya:</h4>
                    <p style="margin: 0; font-size: 0.95rem;"><b>AI Pintar = Algoritma Cerdas + Big Data + GPU Super Ngebut.</b> Kalau salah satu nggak ada, maka AI bakal balik lagi ke "zaman es" (AI Winter) kayak tahun 80an!</p>
                </div>

                <aside class="lesson-reference">Referensi: World Travel & Tourism Council, <em>Introduction to Artificial Intelligence (AI) Technology</em>, 2024, pp. 8-20.</aside>
            `
        },
        '/participant-ai-applications': {
            title: 'Penerapan AI di Berbagai Bidang',
            description: 'Melihat bagaimana AI diterapkan pada bisnis, pariwisata, kesehatan, kreatif, dan layanan digital.',
            duration: '40 menit',
            tag: 'Aplikasi',
            content: `
                <h2 style="color: var(--fellow-pink); display: flex; align-items: center; gap: 8px;"><i class="fas fa-globe"></i> Topik 5: Penerapan AI di Kehidupan Nyata</h2>
                
                <div style="background: #fff0f7; border: 1px solid rgba(246,51,146,0.3); border-radius: 20px; padding: 24px; display: flex; gap: 20px; align-items: flex-start; margin: 24px 0; box-shadow: 0 4px 12px rgba(246,51,146,0.05);">
                    <img src="/assets/messaging/herai-chat-persona.png" alt="HerAI Buddy" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <div>
                        <h4 style="color: var(--fellow-pink); margin: 0 0 8px 0; font-size: 1.1rem; font-weight: 700;">AI Itu Ada di Mana-Mana! 🌍</h4>
                        <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--fellow-text);">Sadar atau nggak, dari bangun tidur sampai tidur lagi, kamu udah dibantuin sama AI lho! AI bukan lagi sekadar robot di film sci-fi, tapi udah masuk ke semua aspek kehidupan kita. Mulai dari hiburan, kesehatan, sampai nulis email buat kerjaan. Yuk kita lihat seberapa jauh AI udah bantu (dan ngubah) dunia kita!</p>
                    </div>
                </div>

                <h3>AI di Berbagai Industri 🏢</h3>
                <p>Layaknya listrik di abad ke-20, AI adalah "general-purpose technology" yang bisa dipakai di industri manapun. Coba cek beberapa contoh keren ini:</p>

                <div class="lesson-insight-grid" style="margin: 32px 0;">
                    <article style="border: 2px solid #eee; transition: all 0.3s; border-radius: 16px; position: relative;">
                        <div style="position: absolute; top: -15px; left: 20px; background: var(--fellow-pink); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold;"><i class="fas fa-plane"></i> Pariwisata</div>
                        <h3 style="margin-top: 16px;">Jalan-Jalan Pintar</h3>
                        <p>Tiket pesawat murah yang tiba-tiba muncul? Rekomendasi hotel yang cocok banget sama selera kamu? Atau koper yang rutenya di-track otomatis di bandara? Itu semua berkat AI yang nganalisa jutaan data traveler setiap detik!</p>
                    </article>
                    
                    <article style="border: 2px solid #eee; transition: all 0.3s; border-radius: 16px; position: relative;">
                        <div style="position: absolute; top: -15px; left: 20px; background: var(--fellow-pink); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold;"><i class="fas fa-heartbeat"></i> Kesehatan</div>
                        <h3 style="margin-top: 16px;">Asisten Dokter Super</h3>
                        <p>AlphaFold buatan Google DeepMind berhasil memprediksi bentuk ratusan juta protein (ini penting banget buat bikin obat baru!). AI juga jago ngebaca hasil rontgen buat deteksi tumor lebih cepet dari mata manusia.</p>
                    </article>

                    <article style="border: 2px solid #eee; transition: all 0.3s; border-radius: 16px; position: relative;">
                        <div style="position: absolute; top: -15px; left: 20px; background: var(--fellow-pink); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold;"><i class="fas fa-palette"></i> Kreatif & Seni</div>
                        <h3 style="margin-top: 16px;">Generator Konten</h3>
                        <p>Buntu nulis caption? Minta ChatGPT! Butuh ilustrasi kucing main gitar? Pake Midjourney! AI Generatif udah ngubah cara kreator kerja. Bukan buat gantiin seniman, tapi buat <i>brainstorming</i> kilat.</p>
                    </article>
                </div>

                <h3>Tapi Hati-Hati, AI Juga Punya Sisi Gelap ⚠️</h3>
                <p>Walaupun canggih, AI tetep buatan manusia yang nggak sempurna. Ada beberapa risiko yang wajib kita waspadai kalau pakai AI:</p>

                <div style="display: grid; gap: 16px; margin: 32px 0;">
                    <div style="display: flex; gap: 16px; padding: 16px; border-radius: 12px; background: #fff; border: 1px solid #fee2e2;">
                        <div style="color: #ef4444; font-size: 1.5rem;"><i class="fas fa-mask"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0; color: #b91c1c;">Deepfake & Disinformasi</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #4b5563;">AI bisa dipake buat bikin video palsu orang penting ngomong hal yang nggak pernah dia bilang. Hati-hati ya sama hoax canggih!</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 16px; padding: 16px; border-radius: 12px; background: #fff; border: 1px solid #fef3c7;">
                        <div style="color: #f59e0b; font-size: 1.5rem;"><i class="fas fa-balance-scale-right"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0; color: #b45309;">Bias & Diskriminasi</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #4b5563;">Karena AI belajar dari data manusia, dan manusia itu nggak sempurna, AI bisa ikutan rasis atau seksis kalau data pelatihannya kotor lho!</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 16px; padding: 16px; border-radius: 12px; background: #fff; border: 1px solid #e0e7ff;">
                        <div style="color: #6366f1; font-size: 1.5rem;"><i class="fas fa-ghost"></i></div>
                        <div>
                            <h4 style="margin: 0 0 4px 0; color: #4338ca;">Hallucination (Halusinasi)</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #4b5563;">Pernah dikasih jawaban yang kelihatan "sangat meyakinkan" sama ChatGPT, padahal faktanya ngawur 100%? Nah itu namanya halusinasi. Makanya <b>wajib cek fakta!</b></p>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(246,51,146,0.05); border-left: 4px solid var(--fellow-pink); padding: 16px 20px; border-radius: 0 16px 16px 0; margin: 32px 0;">
                    <h4 style="margin: 0 0 8px 0; color: var(--fellow-pink); display: flex; align-items: center; gap: 8px;"><i class="fas fa-shield-alt"></i> Butuh "Guardrails"</h4>
                    <p style="margin: 0; font-size: 0.95rem;">Sama kayak jalan tol tol butuh pagar pembatas, pengembangan AI juga butuh regulasi, kode etik, dan kebijakan (guardrails) biar nggak membahayakan manusia.</p>
                </div>

                <aside class="lesson-reference">Referensi: World Travel & Tourism Council, <em>Introduction to Artificial Intelligence (AI) Technology</em>, 2024, pp. 22-31.</aside>
            `
        },
        '/participant-ai-summary': {
            title: 'Ringkasan Pengantar AI',
            description: 'Merangkum konsep inti dan kesiapan skill yang dibutuhkan untuk belajar AI lebih lanjut.',
            duration: '25 menit',
            tag: 'Review',
            content: `
            content: `
                <h2 style="color: var(--fellow-pink); display: flex; align-items: center; gap: 8px;"><i class="fas fa-clipboard-check"></i> Topik 6: Ringkasan Pengantar AI</h2>
                
                <div style="background: #fff0f7; border: 1px solid rgba(246,51,146,0.3); border-radius: 20px; padding: 24px; display: flex; gap: 20px; align-items: flex-start; margin: 24px 0; box-shadow: 0 4px 12px rgba(246,51,146,0.05);">
                    <img src="/assets/messaging/herai-chat-persona.png" alt="HerAI Buddy" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <div>
                        <h4 style="color: var(--fellow-pink); margin: 0 0 8px 0; font-size: 1.1rem; font-weight: 700;">Yeay! Kamu Berhasil! 🎉</h4>
                        <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--fellow-text);">Selamat, Tech Bestie! Kamu udah nyelesain Modul 1 dan resmi jadi orang yang "melek AI". Sebelum lanjut latihan dan ngerjain kuis, yuk kita ingat-ingat lagi apa aja poin penting yang udah kita pelajarin bareng. <i>Let's wrap this up!</i></p>
                    </div>
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
                    <h3>Lencana Konsep Dasar <i class="fas fa-medal" style="color: #f59e0b;"></i></h3>
                    <p style="font-size: 0.9rem; color: #51596d; margin-bottom: 16px;">Kamu udah buka semua pilar pengetahuan dasar ini:</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
                        <span style="background: rgba(246,51,146,0.1); color: var(--fellow-pink); padding: 8px 16px; border-radius: 100px; font-weight: 500; font-size: 0.9rem;"><i class="fas fa-brain"></i> Definisi AI</span>
                        <span style="background: rgba(246,51,146,0.1); color: var(--fellow-pink); padding: 8px 16px; border-radius: 100px; font-weight: 500; font-size: 0.9rem;"><i class="fas fa-code-branch"></i> ML dan DL</span>
                        <span style="background: rgba(246,51,146,0.1); color: var(--fellow-pink); padding: 8px 16px; border-radius: 100px; font-weight: 500; font-size: 0.9rem;"><i class="fas fa-database"></i> Data</span>
                        <span style="background: rgba(246,51,146,0.1); color: var(--fellow-pink); padding: 8px 16px; border-radius: 100px; font-weight: 500; font-size: 0.9rem;"><i class="fas fa-microchip"></i> Komputasi</span>
                        <span style="background: rgba(246,51,146,0.1); color: var(--fellow-pink); padding: 8px 16px; border-radius: 100px; font-weight: 500; font-size: 0.9rem;"><i class="fas fa-shield-halved"></i> Risiko</span>
                    </div>
                </div>

                <aside class="lesson-reference">Referensi: WTTC, <em>Introduction to Artificial Intelligence (AI) Technology</em>, 2024, pp. 31-35.</aside>
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
        page.querySelector('[data-lesson-position]').textContent = `Topik ${index + 1} dari ${introLessonRoutes.length}`;
        page.querySelector('[data-lesson-tag]').textContent = lesson.tag;
        page.querySelector('[data-lesson-content]').innerHTML = lesson.content;
        page.querySelector('[data-lesson-list]').innerHTML = renderLessonList(path);
        page.querySelector('[data-lesson-progress-bar]').style.setProperty('--value', `${progress}%`);
        page.querySelector('[data-lesson-progress-text]').textContent = `${progress}%`;
        page.querySelector('[data-lesson-progress-caption]').textContent = `${index + 1} dari ${introLessonRoutes.length} materi Pengantar AI`;
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
