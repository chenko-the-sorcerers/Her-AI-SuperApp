import re

with open('/home/faiz/her/Her-AI-SuperApp/js/frontend/profile.js', 'r') as f:
    content = f.read()

# 1. Update FELLOW_SECTION_RENDERERS
old_renderers = """const FELLOW_SECTION_RENDERERS = {
    'participant-modules': renderFellowModulesPage,
    'participant-tasks': renderFellowTasksPage,
    'participant-project': renderFellowProjectsPage,
    'participant-events': renderFellowEventsPage
};"""

new_renderers = """const FELLOW_SECTION_RENDERERS = {
    'participant-chatroom': renderFellowChatroomPage,
    'participant-mentor': renderFellowMentorPage,
    'participant-modules': renderFellowModulesPage,
    'participant-tasks': renderFellowTasksPage,
    'participant-project': renderFellowProjectsPage,
    'participant-events': renderFellowEventsPage,
    'participant-community': renderFellowCommunityPage,
    'participant-certificate': renderFellowCertificatePage,
    'participant-leaderboard': renderFellowLeaderboardPage,
    'participant-help': renderFellowHelpPage,
    'participant-settings': renderFellowSettingsPage
};"""

content = content.replace(old_renderers, new_renderers)

# 2. Append the new render functions after renderFellowEventsPage
new_functions = """
function renderFellowChatroomPage() {
    return `
        <div class="fellow-section-page" style="padding: 0;">
            <div style="display: flex; height: calc(100vh - 80px); gap: 24px;">
                <aside style="width: 200px; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 11px; font-weight: 700; color: #a1a1aa; margin-bottom: 8px;">ROOM CHAT <button style="float: right; border: none; background: none; color: #a1a1aa; cursor: pointer;"><i class="fas fa-plus"></i></button></div>
                    <a href="#" style="background: #fdf2f8; color: #ec4899; padding: 10px; border-radius: 8px; font-weight: 600; font-size: 14px; text-decoration: none;"><span style="color: #ec4899; margin-right: 8px;">#</span> General Discussion <span style="float: right; background: #ec4899; color: white; border-radius: 50%; width: 20px; height: 20px; text-align: center; line-height: 20px; font-size: 10px;">3</span></a>
                    <a href="#" style="color: #52525b; padding: 10px; border-radius: 8px; font-weight: 500; font-size: 14px; text-decoration: none;"><span style="color: #a1a1aa; margin-right: 8px;">#</span> Announcements</a>
                    <a href="#" style="color: #52525b; padding: 10px; border-radius: 8px; font-weight: 500; font-size: 14px; text-decoration: none;"><span style="color: #a1a1aa; margin-right: 8px;">#</span> Foundation Phase</a>
                    <a href="#" style="color: #52525b; padding: 10px; border-radius: 8px; font-weight: 500; font-size: 14px; text-decoration: none;"><span style="color: #a1a1aa; margin-right: 8px;">#</span> Machine Learning</a>
                    <a href="#" style="color: #52525b; padding: 10px; border-radius: 8px; font-weight: 500; font-size: 14px; text-decoration: none;"><span style="color: #a1a1aa; margin-right: 8px;">#</span> LLM & NLP</a>
                    <a href="#" style="color: #52525b; padding: 10px; border-radius: 8px; font-weight: 500; font-size: 14px; text-decoration: none;"><span style="color: #a1a1aa; margin-right: 8px;">#</span> Computer Vision</a>
                    <a href="#" style="color: #52525b; padding: 10px; border-radius: 8px; font-weight: 500; font-size: 14px; text-decoration: none;"><span style="color: #a1a1aa; margin-right: 8px;">#</span> Project Building</a>
                    <a href="#" style="color: #52525b; padding: 10px; border-radius: 8px; font-weight: 500; font-size: 14px; text-decoration: none;"><span style="color: #a1a1aa; margin-right: 8px;">#</span> Career Lounge</a>
                    <a href="#" style="color: #52525b; padding: 10px; border-radius: 8px; font-weight: 500; font-size: 14px; text-decoration: none;"><span style="color: #a1a1aa; margin-right: 8px;">#</span> Random Talk</a>
                </aside>
                
                <main style="flex: 1; display: flex; flex-direction: column; background: white; border-radius: 12px; border: 1px solid #e4e4e7; overflow: hidden;">
                    <header style="padding: 24px; border-bottom: 1px solid #e4e4e7; display: flex; justify-content: space-between; align-items: center;">
                        <div style="display: flex; gap: 16px; align-items: center;">
                            <div style="width: 48px; height: 48px; background: #f4f4f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #71717a; font-size: 20px;"><i class="fas fa-users"></i></div>
                            <div>
                                <h2 style="margin: 0; font-size: 24px; color: #18181b;">General Discussion</h2>
                                <p style="margin: 4px 0 0; color: #71717a; font-size: 13px;"><span style="color: #22c55e; margin-right: 4px;">●</span> 126 online</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 16px; color: #71717a; font-size: 18px;">
                            <i class="fas fa-search" style="cursor: pointer;"></i>
                            <i class="fas fa-thumbtack" style="cursor: pointer;"></i>
                            <i class="fas fa-user" style="cursor: pointer;"></i>
                            <i class="fas fa-ellipsis-v" style="cursor: pointer;"></i>
                        </div>
                    </header>
                    <div style="background: #fff1f2; margin: 24px; padding: 16px; border-radius: 12px; display: flex; gap: 16px; align-items: center; border: 1px solid #fecdd3;">
                        <div style="background: #ec4899; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><i class="fas fa-bullhorn"></i></div>
                        <div style="flex: 1; font-size: 14px; color: #4c1d95;">
                            <strong style="color: #ec4899;">Pengumuman:</strong> Live Session "Build RAG Chatbot" hari ini jam 19.00 WIB. Jangan lupa join ya!
                        </div>
                        <i class="fas fa-times" style="color: #9ca3af; cursor: pointer;"></i>
                    </div>
                    
                    <div style="flex: 1; padding: 0 24px; overflow-y: auto;">
                        <div style="text-align: center; margin: 24px 0; position: relative;">
                            <span style="background: #fdf2f8; color: #ec4899; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; position: relative; z-index: 1;">Today</span>
                            <div style="position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: #fce7f3; z-index: 0;"></div>
                        </div>
                        
                        <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                            <img src="https://ui-avatars.com/api/?name=Siti+Aulia&background=f472b6&color=fff" alt="" style="width: 40px; height: 40px; border-radius: 50%;">
                            <div>
                                <div style="margin-bottom: 4px;"><strong style="color: #18181b;">Siti Aulia</strong> <span style="color: #a1a1aa; font-size: 12px; margin-left: 8px;">09:15</span></div>
                                <div style="background: #f4f4f5; padding: 12px 16px; border-radius: 0 12px 12px 12px; font-size: 14px; color: #3f3f46; margin-bottom: 8px;">
                                    Halo semuanya! 👋<br>Ada yang sudah mencoba fine-tuning LLM dengan dataset sendiri? Kira-kira tipsnya apa ya?
                                </div>
                                <div style="display: flex; gap: 8px;">
                                    <span style="background: #f4f4f5; padding: 4px 8px; border-radius: 12px; font-size: 12px; color: #ec4899;"><i class="fas fa-heart"></i> 6</span>
                                    <span style="background: #f4f4f5; padding: 4px 8px; border-radius: 12px; font-size: 12px;">🙂</span>
                                </div>
                            </div>
                        </div>
                        
                        <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                            <img src="https://ui-avatars.com/api/?name=Mentor+Rani&background=ec4899&color=fff" alt="" style="width: 40px; height: 40px; border-radius: 50%;">
                            <div>
                                <div style="margin-bottom: 4px;"><strong style="color: #ec4899;">Mentor Rani</strong> <span style="background: #fdf2f8; color: #ec4899; font-size: 10px; padding: 2px 6px; border-radius: 4px; border: 1px solid #fbcfe8; margin-left: 4px;">Mentor</span> <span style="color: #a1a1aa; font-size: 12px; margin-left: 8px;">09:18</span></div>
                                <div style="background: #fdf2f8; padding: 12px 16px; border-radius: 0 12px 12px 12px; font-size: 14px; color: #3f3f46; margin-bottom: 8px;">
                                    Halo Aulia! Beberapa tips yang bisa dicoba:<br><br>1. Pastikan data bersih & relevan<br>2. Gunakan format yang konsisten<br>3. Mulai dari model kecil dulu untuk eksperimen<br><br>Semangat! 💪
                                </div>
                                <div style="display: flex; gap: 8px;">
                                    <span style="background: #f4f4f5; padding: 4px 8px; border-radius: 12px; font-size: 12px; color: #ec4899;"><i class="fas fa-heart"></i> 10</span>
                                    <span style="background: #f4f4f5; padding: 4px 8px; border-radius: 12px; font-size: 12px;">🙂</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="padding: 16px 24px; border-top: 1px solid #e4e4e7; display: flex; gap: 16px; align-items: center;">
                        <i class="far fa-smile" style="color: #a1a1aa; font-size: 20px; cursor: pointer;"></i>
                        <input type="text" placeholder="Ketik pesan..." style="flex: 1; border: none; outline: none; font-size: 14px; color: #3f3f46;">
                        <i class="fas fa-paperclip" style="color: #a1a1aa; font-size: 20px; cursor: pointer;"></i>
                        <button style="background: #ec4899; color: white; width: 40px; height: 40px; border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer;"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </main>
                
                <aside style="width: 280px; background: white; border-radius: 12px; border: 1px solid #e4e4e7; display: flex; flex-direction: column;">
                    <div style="padding: 24px; border-bottom: 1px solid #e4e4e7; position: relative;">
                        <h3 style="margin: 0 0 24px; font-size: 16px; color: #18181b;">Info Room</h3>
                        <i class="fas fa-times" style="position: absolute; top: 24px; right: 24px; color: #71717a; cursor: pointer;"></i>
                        <div style="text-align: center;">
                            <div style="width: 80px; height: 80px; background: #ec4899; color: white; font-size: 32px; font-weight: bold; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">#</div>
                            <h4 style="margin: 0 0 4px; font-size: 18px; color: #18181b;">General Discussion</h4>
                            <p style="margin: 0 0 16px; color: #22c55e; font-size: 13px;">● 126 online</p>
                            <p style="margin: 0; color: #71717a; font-size: 13px;">Tempat untuk berdiskusi, berbagi ilmu, dan saling support satu sama lain 😊</p>
                        </div>
                    </div>
                    
                    <div style="padding: 16px 24px; border-bottom: 1px solid #e4e4e7;">
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; cursor: pointer;">
                            <div style="display: flex; gap: 12px; align-items: center;"><div style="background: #fdf2f8; color: #ec4899; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;"><i class="far fa-image"></i></div> <span style="font-size: 14px; color: #3f3f46; font-weight: 500;">Media, Link, dan File</span></div>
                            <div style="color: #71717a; font-size: 13px;">342 <i class="fas fa-chevron-right" style="margin-left: 8px; font-size: 10px;"></i></div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; cursor: pointer;">
                            <div style="display: flex; gap: 12px; align-items: center;"><div style="background: #fefce8; color: #eab308; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;"><i class="fas fa-star"></i></div> <span style="font-size: 14px; color: #3f3f46; font-weight: 500;">Pesan Berbintang</span></div>
                            <div style="color: #71717a; font-size: 13px;">12 <i class="fas fa-chevron-right" style="margin-left: 8px; font-size: 10px;"></i></div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; cursor: pointer;">
                            <div style="display: flex; gap: 12px; align-items: center;"><div style="background: #eff6ff; color: #3b82f6; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;"><i class="far fa-bell"></i></div> <span style="font-size: 14px; color: #3f3f46; font-weight: 500;">Pengaturan Notifikasi</span></div>
                            <div style="color: #71717a; font-size: 13px;">Semua Pesan <i class="fas fa-chevron-right" style="margin-left: 8px; font-size: 10px;"></i></div>
                        </div>
                    </div>
                    
                    <div style="padding: 24px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                            <h3 style="margin: 0; font-size: 14px; color: #18181b;">Anggota (1.248)</h3>
                            <a href="#" style="color: #ec4899; font-size: 13px; text-decoration: none; font-weight: 600;">Lihat Semua</a>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <img src="https://ui-avatars.com/api/?name=Mentor+Rani&background=ec4899&color=fff" alt="" style="width: 36px; height: 36px; border-radius: 50%;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: #18181b;">Mentor Rani <span style="background: #fdf2f8; color: #ec4899; font-size: 10px; padding: 2px 6px; border-radius: 4px; border: 1px solid #fbcfe8; font-weight: 500;">Mentor</span></div>
                                    <div style="font-size: 12px; color: #71717a;">Mentor</div>
                                </div>
                            </div>
                            <div style="color: #22c55e; font-size: 12px;">● Online</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <img src="https://ui-avatars.com/api/?name=Dewi+Lestari&background=ec4899&color=fff" alt="" style="width: 36px; height: 36px; border-radius: 50%;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: #18181b;">Dewi Lestari</div>
                                    <div style="font-size: 12px; color: #71717a;">Fellow</div>
                                </div>
                            </div>
                            <div style="color: #22c55e; font-size: 12px;">● Online</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <img src="https://ui-avatars.com/api/?name=Siti+Aulia&background=ec4899&color=fff" alt="" style="width: 36px; height: 36px; border-radius: 50%;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: #18181b;">Siti Aulia</div>
                                    <div style="font-size: 12px; color: #71717a;">Fellow</div>
                                </div>
                            </div>
                            <div style="color: #22c55e; font-size: 12px;">● Online</div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    `;
}

function renderFellowMentorPage() {
    return `
        <div class="fellow-section-page">
            <div style="display: flex; justify-content: space-between; margin-bottom: 24px;">
                <button style="padding: 10px 16px; border: 1px solid #e4e4e7; background: white; border-radius: 8px; font-weight: 500; color: #3f3f46; cursor: pointer;">Semua Keahlian <i class="fas fa-chevron-down" style="margin-left: 8px;"></i></button>
                <button style="padding: 10px 16px; border: 1px solid #e4e4e7; background: white; border-radius: 8px; font-weight: 500; color: #3f3f46; cursor: pointer;">Rekomendasi <i class="fas fa-chevron-down" style="margin-left: 8px;"></i></button>
            </div>
            
            <div class="fellow-section-layout">
                <div class="fellow-section-stack">
                    ${[
                        ['Dr. Alya Putri', 'Senior Data Scientist di TechCorp', 'Ahli di bidang Machine Learning, Natural Language Processing, dan AI Research.', ['Machine Learning', 'Career Prep'], 'pink'],
                        ['Sarah Jenkins', 'UI/UX Designer di Creativ AI', 'Membantu fellow merancang antarmuka pengguna untuk aplikasi AI yang intuitif.', ['UI/UX', 'Product Design'], 'orange'],
                        ['Budi Santoso', 'Lead AI Engineer di StartupX', 'Expertise dalam deployment model AI ke sistem cloud (AWS/GCP).', ['AI Engineering', 'Cloud'], 'blue']
                    ].map(([name, title, desc, tags, tone]) => `
                        <article style="background: white; border: 1px solid #fecdd3; border-radius: 12px; padding: 24px; display: flex; gap: 24px; align-items: flex-start; margin-bottom: 16px;">
                            <div style="width: 80px; height: 80px; border-radius: 50%; background: #fdf2f8; color: #ec4899; font-size: 32px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${name.split(' ').map(n=>n[0]).join('').substring(0,2).replace('D','A')}</div>
                            <div style="flex: 1;">
                                <h3 style="margin: 0 0 8px; font-size: 18px; color: #18181b;">${name}</h3>
                                <div style="background: #fdf2f8; color: #ec4899; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 16px; display: inline-block; margin-bottom: 16px;">${title}</div>
                                <p style="margin: 0 0 16px; color: #52525b; font-size: 14px; line-height: 1.5;">${desc}</p>
                                <div style="display: flex; gap: 8px;">
                                    ${tags.map(tag => `<span style="background: #f0fdf4; color: #16a34a; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 600;">${tag}</span>`).join('')}
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                <button style="background: white; border: 1px solid #ec4899; color: #ec4899; padding: 10px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s;">Jadwalkan Sesi</button>
                                <button style="background: white; border: 1px solid #d4d4d8; color: #52525b; padding: 10px 24px; border-radius: 8px; font-weight: 600; cursor: pointer;">Lihat Profil</button>
                            </div>
                        </article>
                    `).join('')}
                </div>
                
                <aside class="fellow-section-side">
                    <section class="fellow-side-card">
                        <h3 style="margin: 0 0 16px; font-size: 16px; color: #18181b;">Sesi Mendatang</h3>
                        <div class="fellow-side-list">
                            <article>
                                <span style="background: #f3e8ff; color: #9333ea;">1</span>
                                <p>Mentoring dengan Dr. Alya (20 Juni, 15:00 WIB)</p>
                                <i class="fas fa-chevron-right"></i>
                            </article>
                            <article>
                                <span style="background: #f3e8ff; color: #9333ea;">2</span>
                                <p>Review CV dengan Sarah (25 Juni, 10:00 WIB)</p>
                                <i class="fas fa-chevron-right"></i>
                            </article>
                        </div>
                    </section>
                    
                    <section class="fellow-side-card fellow-image-card">
                        <h3 style="margin: 0 0 16px; font-size: 16px; color: #18181b;">Mau jadi Mentor?</h3>
                        <img src="/assets/participant-sections/task-trophy.png" alt="" loading="lazy" style="background: #fdf2f8; border-radius: 12px;">
                        <p style="margin: 16px 0; color: #52525b; font-size: 14px;">Bagikan ilmumu dan bantu kembangkan talenta AI.</p>
                        <button style="background: #ec4899; color: white; border: none; padding: 12px; width: 100%; border-radius: 8px; font-weight: 600; cursor: pointer;">Daftar Sekarang</button>
                    </section>
                </aside>
            </div>
        </div>
    `;
}

function renderFellowCommunityPage() {
    return `
        <div class="fellow-section-page">
            ${renderFellowTabs(['Untukmu', 'Grup', 'Diskusi', 'Mentor Corner', 'Pengumuman'])}
            
            <div style="background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%); border-radius: 16px; padding: 40px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; position: relative; overflow: hidden;">
                <div style="max-width: 500px; position: relative; z-index: 1;">
                    <h2 style="font-size: 28px; font-weight: 800; color: #18181b; margin: 0 0 12px; line-height: 1.2;">Bergabung dan tumbuh bersama komunitas AI wanita terbesar di Indonesia!</h2>
                    <p style="font-size: 16px; color: #52525b; margin: 0 0 24px;">Temukan teman, mentor, dan peluang baru.</p>
                    <button style="background: #ec4899; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">Buat Postingan <i class="fas fa-external-link-alt"></i></button>
                </div>
                <div style="position: absolute; right: 0; bottom: 0; width: 400px; height: 200px; background: url('/assets/referensi/persona-her-ai.png') no-repeat right bottom; background-size: contain; opacity: 0.8;"></div>
            </div>
            
            <div class="fellow-section-layout">
                <div class="fellow-section-stack">
                    <section class="fellow-panel">
                        <header>
                            <h3 style="font-size: 18px; color: #18181b; margin: 0;">Grup Populer</h3>
                            <a href="#" style="color: #ec4899; font-size: 14px; font-weight: 600; text-decoration: none;">Lihat Semua <i class="fas fa-arrow-right"></i></a>
                        </header>
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
                            ${[
                                ['fa-code', 'AI & Machine Learning Indonesia', '12.4K anggota', 'pink'],
                                ['fa-rocket', 'Data Scientist Community', '8.7K anggota', 'purple'],
                                ['fa-brain', 'NLP Enthusiast', '6.1K anggota', 'orange'],
                                ['fa-plus', 'Lihat Semua Grup', 'Temukan lebih banyak grup', 'gray']
                            ].map(([icon, title, members, tone]) => `
                                <div style="border: 1px solid #fecdd3; border-radius: 12px; padding: 24px; text-align: center; background: white;">
                                    <div style="width: 56px; height: 56px; margin: 0 auto 16px; border-radius: 16px; background: ${tone === 'pink' ? '#ec4899' : tone === 'purple' ? '#8b5cf6' : tone === 'orange' ? '#f59e0b' : '#f4f4f5'}; color: ${tone === 'gray' ? '#71717a' : 'white'}; display: flex; align-items: center; justify-content: center; font-size: 24px;"><i class="fas ${icon}"></i></div>
                                    <h4 style="margin: 0 0 4px; font-size: 14px; color: #18181b; min-height: 40px;">${title}</h4>
                                    <p style="margin: 0 0 16px; font-size: 12px; color: #71717a;">${members}</p>
                                    <button style="width: 100%; padding: 8px; background: white; border: 1px solid #ec4899; color: #ec4899; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;">${tone === 'gray' ? 'Jelajahi' : 'Bergabung'}</button>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                    
                    <section class="fellow-panel">
                        <header>
                            <h3 style="font-size: 18px; color: #18181b; margin: 0;">Diskusi Terbaru</h3>
                            <div style="display: flex; gap: 16px;">
                                <a href="#" style="color: #ec4899; font-size: 14px; font-weight: 600; text-decoration: none; border-bottom: 2px solid #ec4899; padding-bottom: 4px;">Terbaru</a>
                                <a href="#" style="color: #71717a; font-size: 14px; font-weight: 500; text-decoration: none;">Populer</a>
                                <a href="#" style="color: #71717a; font-size: 14px; font-weight: 500; text-decoration: none;">Mengikuti</a>
                            </div>
                        </header>
                        
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            ${[
                                ['Tips belajar Python untuk pemula di bidang AI', 'Pemula', 'Siti Aulia • 2 jam yang lalu', '24', '128', 'pink'],
                                ['Rekomendasi dataset untuk project NLP', 'NLP', 'Dewi Lestari • 5 jam yang lalu', '18', '96', 'purple'],
                                ['Pengalaman ikut AI Hackathon pertama kali 🚀', 'Pengalaman', 'Rani Mentari • 1 hari yang lalu', '32', '156', 'green'],
                                ['Cara membangun portofolio AI yang menarik', 'Karier', 'Aisyah Putri • 2 hari yang lalu', '27', '134', 'orange']
                            ].map(([title, tag, meta, comments, likes, tone]) => `
                                <div style="display: flex; gap: 16px; align-items: center; border-bottom: 1px solid #f4f4f5; padding-bottom: 16px;">
                                    <img src="https://ui-avatars.com/api/?name=${meta.split(' ')[0]}+${meta.split(' ')[1]}&background=ec4899&color=fff" style="width: 40px; height: 40px; border-radius: 50%;">
                                    <div style="flex: 1;">
                                        <h4 style="margin: 0 0 4px; font-size: 15px; color: #18181b;">${title} <span style="background: #fdf2f8; color: #ec4899; font-size: 10px; padding: 2px 8px; border-radius: 12px; margin-left: 8px;">${tag}</span></h4>
                                        <p style="margin: 0; font-size: 12px; color: #71717a;">${meta}</p>
                                    </div>
                                    <div style="display: flex; gap: 16px; color: #71717a; font-size: 13px;">
                                        <span><i class="far fa-comment"></i> ${comments}</span>
                                        <span><i class="far fa-heart"></i> ${likes}</span>
                                        <i class="far fa-bookmark" style="cursor: pointer;"></i>
                                        <i class="fas fa-ellipsis-h" style="cursor: pointer;"></i>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div style="text-align: center; margin-top: 16px;">
                            <a href="#" style="color: #ec4899; font-size: 14px; font-weight: 600; text-decoration: none;">Lihat Semua Diskusi <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </section>
                </div>
                
                <aside class="fellow-section-side">
                    <section class="fellow-side-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                            <h3 style="margin: 0; font-size: 16px; color: #18181b;">Top Kontributor</h3>
                            <a href="#" style="color: #ec4899; font-size: 12px; font-weight: 600; text-decoration: none;">Lihat Semua <i class="fas fa-arrow-right"></i></a>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            ${[
                                [1, 'Dewi Lestari', '@dewilestari', '2.450 poin', true],
                                [2, 'Aisyah Putri (Kamu)', '@aisyahputri', '2.120 poin', true, true],
                                [3, 'Siti Aulia', '@sitiaulia', '1.890 poin', true],
                                [4, 'Rani Mentari', '@ranimentari', '1.450 poin', false],
                                [5, 'Nadia Putri', '@nadiaputri', '1.230 poin', false]
                            ].map(([rank, name, handle, points, hasMedal, isMe]) => `
                                <div style="display: flex; align-items: center; gap: 12px; padding: ${isMe ? '8px' : '0'}; background: ${isMe ? '#fdf2f8' : 'transparent'}; border-radius: ${isMe ? '8px' : '0'};">
                                    <span style="font-weight: bold; width: 16px; text-align: center; color: #18181b;">${rank}</span>
                                    <img src="https://ui-avatars.com/api/?name=${name.split(' ')[0]}+${name.split(' ')[1]}&background=ec4899&color=fff" style="width: 32px; height: 32px; border-radius: 50%;">
                                    <div style="flex: 1;">
                                        <div style="font-size: 13px; font-weight: 600; color: ${isMe ? '#ec4899' : '#18181b'};">${name}</div>
                                        <div style="font-size: 11px; color: #71717a;">${handle}</div>
                                    </div>
                                    <div style="font-size: 12px; color: #71717a;">${points}</div>
                                    ${hasMedal ? '<i class="fas fa-medal" style="color: #eab308;"></i>' : '<i class="fas fa-ellipsis-v" style="color: #d4d4d8;"></i>'}
                                </div>
                            `).join('')}
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    `;
}

function renderFellowCertificatePage() {
    return `
        <div class="fellow-section-page">
            ${renderFellowTabs(['Semua Sertifikat', 'Pencapaian Modul', 'Event & Workshop', 'Proyek', 'Komunitas'])}
            <div class="fellow-stat-grid">
                ${renderFellowStat('fa-award', 'Total Sertifikat', '12', 'Sertifikat', 'pink')}
                ${renderFellowStat('fa-check-circle', 'Sertifikat Terselesaikan', '10', 'Sertifikat', 'green')}
                ${renderFellowStat('fa-clock', 'Sedang Diproses', '2', 'Sertifikat', 'orange')}
                ${renderFellowStat('fa-trophy', 'Total Poin', '1.250', 'Poin', 'purple')}
            </div>
            <div class="fellow-section-layout">
                <section class="fellow-panel" style="flex: 1;">
                    <header style="display: flex; justify-content: space-between; margin-bottom: 24px;">
                        <button style="padding: 10px 16px; border: 1px solid #e4e4e7; background: white; border-radius: 8px; font-weight: 500; color: #3f3f46;">Terbaru <i class="fas fa-chevron-down" style="margin-left: 8px;"></i></button>
                        <div style="display: flex; gap: 16px;">
                            <div style="position: relative;">
                                <i class="fas fa-search" style="position: absolute; left: 12px; top: 12px; color: #a1a1aa;"></i>
                                <input type="text" placeholder="Cari sertifikat..." style="padding: 10px 16px 10px 36px; border: 1px solid #e4e4e7; border-radius: 8px; outline: none; width: 250px;">
                            </div>
                            <button style="padding: 10px; border: 1px solid #e4e4e7; background: #f4f4f5; border-radius: 8px; color: #3f3f46;"><i class="fas fa-th-large"></i></button>
                        </div>
                    </header>
                    
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
                        ${[
                            ['Python for AI Beginner', 'Modul • Foundation Phase', '25 Mei 2024', '100 Poin', 'pink'],
                            ['Machine Learning Fundamentals', 'Modul • Foundation Phase', '15 Juni 2024', '150 Poin', 'purple'],
                            ['Data Visualization with Python', 'Event • Workshop', '25 Mei 2024', '75 Poin', 'orange'],
                            ['Data Analysis with Pandas', 'Modul • Foundation Phase', '10 Juni 2024', '125 Poin', 'green'],
                            ['AI for Social Good Hackathon', 'Event • Hackathon', '8 Juni 2024', '200 Poin', 'blue'],
                            ['Top Contributor Komunitas', 'Komunitas • Pencapaian', '18 Mei 2024', '50 Poin', 'pink']
                        ].map(([title, tag, date, points, tone]) => `
                            <div style="border: 1px solid #e4e4e7; border-radius: 12px; overflow: hidden; background: white;">
                                <div style="height: 160px; background: #fdf2f8; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; border-bottom: 1px solid #e4e4e7; padding: 20px; text-align: center;">
                                    <div style="position: absolute; top: 12px; right: 12px; background: ${tone === 'pink' ? '#ec4899' : tone === 'purple' ? '#8b5cf6' : tone === 'orange' ? '#f59e0b' : tone === 'green' ? '#22c55e' : '#3b82f6'}; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px;"><i class="fas fa-award"></i></div>
                                    <h5 style="margin: 0 0 4px; font-size: 12px; color: #ec4899; text-transform: uppercase; letter-spacing: 1px;">Sertifikat</h5>
                                    <p style="margin: 0 0 8px; font-size: 8px; color: #71717a;">DIBERIKAN KEPADA</p>
                                    <h4 style="margin: 0 0 8px; font-size: 18px; color: #18181b;">Aisyah Putri</h4>
                                    <p style="margin: 0 0 4px; font-size: 8px; color: #71717a;">atas pencapaian dalam menyelesaikan</p>
                                    <h5 style="margin: 0; font-size: 14px; color: #18181b;">${title}</h5>
                                </div>
                                <div style="padding: 16px;">
                                    <h4 style="margin: 0 0 4px; font-size: 14px; color: #18181b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${title}</h4>
                                    <p style="margin: 0 0 16px; font-size: 12px; color: #71717a;">${tag}</p>
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <span style="font-size: 12px; color: #71717a;">${date}</span>
                                        <span style="font-size: 12px; color: #ec4899; font-weight: 600;"><i class="far fa-star"></i> ${points}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>
                
                <aside class="fellow-section-side">
                    ${renderFellowProgressCard('Ringkasan Pencapaian', '12', [['Modul', '7', 'pink'], ['Event', '3', 'purple'], ['Proyek', '1', 'orange'], ['Komunitas', '1', 'green']])}
                    
                    <section class="fellow-side-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                            <h3 style="margin: 0; font-size: 16px; color: #18181b;">Filter Sertifikat</h3>
                            <a href="#" style="color: #ec4899; font-size: 12px; text-decoration: none;">Reset</a>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <div style="padding: 10px 16px; border: 1px solid #e4e4e7; border-radius: 8px; display: flex; justify-content: space-between; color: #3f3f46; font-size: 14px;">Semua Kategori <i class="fas fa-chevron-down"></i></div>
                            <div style="padding: 10px 16px; border: 1px solid #e4e4e7; border-radius: 8px; display: flex; justify-content: space-between; color: #3f3f46; font-size: 14px;">Semua Sumber <i class="fas fa-chevron-down"></i></div>
                            <div style="padding: 10px 16px; border: 1px solid #e4e4e7; border-radius: 8px; display: flex; justify-content: space-between; color: #3f3f46; font-size: 14px;">Semua Status <i class="fas fa-chevron-down"></i></div>
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    `;
}

function renderFellowLeaderboardPage() {
    return `
        <div class="fellow-section-page">
            <div style="background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%); border-radius: 16px; padding: 40px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; position: relative; overflow: hidden;">
                <div style="max-width: 500px; position: relative; z-index: 1;">
                    <h2 style="font-size: 28px; font-weight: 800; color: #18181b; margin: 0 0 12px; line-height: 1.2;">Terus belajar, terus bertumbuh!</h2>
                    <p style="font-size: 16px; color: #52525b; margin: 0 0 24px;">Setiap poin mencerminkan usaha dan dedikasimu. Pertahankan posisimu di leaderboard atau kejar puncaknya! ✨</p>
                    <button style="background: #ec4899; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer;">Pelajari Cara Mendapat Poin →</button>
                </div>
                <div style="position: absolute; right: 40px; bottom: 0; width: 250px; height: 250px; background: url('/assets/participant-sections/task-trophy.png') no-repeat center bottom; background-size: contain;"></div>
            </div>
            
            ${renderFellowTabs(['Leaderboard Global', 'Leaderboard Mingguan', 'Leaderboard Bulanan', 'Leaderboard All Time'])}
            
            <div class="fellow-section-layout">
                <section class="fellow-panel" style="flex: 1;">
                    <header style="display: flex; justify-content: space-between; margin-bottom: 24px; border-bottom: none;">
                        <button style="padding: 10px 16px; border: 1px solid #e4e4e7; background: white; border-radius: 8px; font-weight: 500; color: #3f3f46;">Semua Kategori <i class="fas fa-chevron-down" style="margin-left: 8px;"></i></button>
                        <button style="padding: 10px 16px; border: 1px solid #e4e4e7; background: white; border-radius: 8px; font-weight: 500; color: #3f3f46;"><i class="far fa-calendar" style="margin-right: 8px;"></i> Minggu Ini <i class="fas fa-chevron-down" style="margin-left: 8px;"></i></button>
                    </header>
                    
                    <div style="width: 100%;">
                        <div style="display: flex; padding: 12px 24px; border-bottom: 1px solid #e4e4e7; color: #71717a; font-size: 13px; font-weight: 500;">
                            <div style="width: 40px;">#</div>
                            <div style="flex: 1;">Fellow</div>
                            <div style="width: 100px; text-align: right;">Poin</div>
                            <div style="width: 100px; text-align: right;">Minggu Ini</div>
                            <div style="width: 80px; text-align: center;">Badge</div>
                        </div>
                        
                        ${[
                            [1, 'Dewi Lestari', '@dewilestari', '2.450', '↑ 450', 'gold'],
                            [2, 'Aisyah Putri (Kamu)', '@aisyahputri', '2.120', '↑ 320', 'silver', true],
                            [3, 'Siti Aulia', '@sitiaulia', '1.890', '↑ 280', 'bronze'],
                            [4, 'Rani Mentari', '@ranimentari', '1.450', '↑ 210', 'pink'],
                            [5, 'Nadia Putri', '@nadiaputri', '1.230', '↑ 180', 'pink'],
                            [6, 'Putri Ananda', '@putriananda', '1.120', '↑ 160', 'pink'],
                            [7, 'Larasati Dewi', '@larasatidewi', '980', '↑ 120', 'pink'],
                            [8, 'Maya Pratiwi', '@mayapratiwi', '860', '↑ 110', 'pink']
                        ].map(([rank, name, handle, points, weekly, medalTone, isMe]) => `
                            <div style="display: flex; padding: 16px 24px; border-bottom: 1px solid #f4f4f5; align-items: center; background: ${isMe ? '#fdf2f8' : 'white'}; border-radius: ${isMe ? '8px' : '0'};">
                                <div style="width: 40px; font-weight: bold; color: ${rank <= 3 ? '#ec4899' : '#18181b'};">${rank <= 3 ? '<i class="fas fa-crown" style="color: #f59e0b; margin-right: 4px;"></i>' : ''}${rank}</div>
                                <div style="flex: 1; display: flex; gap: 12px; align-items: center;">
                                    <img src="https://ui-avatars.com/api/?name=${name.split(' ')[0]}+${name.split(' ')[1]}&background=ec4899&color=fff" style="width: 40px; height: 40px; border-radius: 50%;">
                                    <div>
                                        <div style="font-size: 14px; font-weight: 600; color: ${isMe ? '#ec4899' : '#18181b'};">${name}</div>
                                        <div style="font-size: 12px; color: #71717a;">${handle}</div>
                                    </div>
                                </div>
                                <div style="width: 100px; text-align: right; font-weight: 600; color: #ec4899;">${points}</div>
                                <div style="width: 100px; text-align: right; color: #22c55e; font-size: 13px;">${weekly}</div>
                                <div style="width: 80px; text-align: center; font-size: 20px; color: ${medalTone === 'gold' ? '#eab308' : medalTone === 'silver' ? '#94a3b8' : medalTone === 'bronze' ? '#b45309' : '#fbcfe8'};"><i class="fas fa-medal"></i></div>
                            </div>
                        `).join('')}
                    </div>
                    <div style="text-align: center; padding: 24px 0;">
                        <button style="background: none; border: none; color: #ec4899; font-weight: 600; cursor: pointer;">Lihat Selengkapnya <i class="fas fa-chevron-down"></i></button>
                    </div>
                </section>
                
                <aside class="fellow-section-side">
                    <section class="fellow-side-card">
                        <h3 style="margin: 0 0 16px; font-size: 16px; color: #18181b;">Ringkasan Saya</h3>
                        <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                            <div style="flex: 1; background: #fdf2f8; padding: 16px; border-radius: 12px;">
                                <p style="margin: 0 0 8px; font-size: 12px; color: #71717a;">Peringkat</p>
                                <div style="font-size: 24px; font-weight: bold; color: #ec4899;">2</div>
                                <p style="margin: 4px 0 0; font-size: 11px; color: #71717a;">dari 1.250 Fellow</p>
                            </div>
                            <div style="flex: 1; background: #fffbeb; padding: 16px; border-radius: 12px;">
                                <p style="margin: 0 0 8px; font-size: 12px; color: #71717a;">Total Poin</p>
                                <div style="font-size: 24px; font-weight: bold; color: #f59e0b;">2.120 <span style="font-size: 12px; font-weight: normal; color: #18181b;">Poin</span></div>
                                <p style="margin: 4px 0 0; font-size: 11px; color: #22c55e;">↑ 320 poin <span style="color: #71717a;">dari minggu lalu</span></p>
                            </div>
                        </div>
                        <div>
                            <p style="margin: 0 0 8px; font-size: 13px; color: #18181b; display: flex; justify-content: space-between;"><span>Menuju Peringkat 1</span> <span style="color: #71717a;">2.120 / 2.450</span></p>
                            <div style="height: 6px; background: #f4f4f5; border-radius: 3px; margin-bottom: 8px; overflow: hidden;">
                                <div style="height: 100%; width: 86%; background: #ec4899; border-radius: 3px;"></div>
                            </div>
                            <p style="margin: 0; font-size: 12px; color: #ec4899;">Anda hanya perlu 330 poin lagi!</p>
                        </div>
                    </section>
                    
                    <section class="fellow-side-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                            <h3 style="margin: 0; font-size: 16px; color: #18181b;">Cara Mendapat Poin</h3>
                            <a href="#" style="color: #ec4899; font-size: 12px; text-decoration: none;">Lihat Semua <i class="fas fa-arrow-right"></i></a>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <div style="width: 40px; height: 40px; background: #fdf2f8; color: #ec4899; border-radius: 8px; display: flex; align-items: center; justify-content: center;"><i class="fas fa-book"></i></div>
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: #18181b;">Menyelesaikan Modul</div>
                                    <div style="font-size: 12px; color: #71717a;">+100 poin</div>
                                </div>
                            </div>
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <div style="width: 40px; height: 40px; background: #f3e8ff; color: #9333ea; border-radius: 8px; display: flex; align-items: center; justify-content: center;"><i class="fas fa-clipboard-check"></i></div>
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: #18181b;">Menyelesaikan Tugas</div>
                                    <div style="font-size: 12px; color: #71717a;">+150 poin</div>
                                </div>
                            </div>
                            <div style="display: flex; gap: 12px; align-items: center;">
                                <div style="width: 40px; height: 40px; background: #fefce8; color: #eab308; border-radius: 8px; display: flex; align-items: center; justify-content: center;"><i class="fas fa-folder"></i></div>
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: #18181b;">Menyelesaikan Proyek</div>
                                    <div style="font-size: 12px; color: #71717a;">+200 poin</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    `;
}

function renderFellowSettingsPage() {
    return `
        <div class="fellow-section-page">
            <div class="fellow-section-layout">
                <aside style="width: 250px; flex-shrink: 0;">
                    <div style="background: white; border: 1px solid #e4e4e7; border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 8px;">
                        <a href="#" style="padding: 12px 16px; background: #fdf2f8; color: #ec4899; border-radius: 8px; font-weight: 600; text-decoration: none; display: flex; align-items: center; gap: 12px;"><i class="fas fa-user"></i> Profil Publik</a>
                        <a href="#" style="padding: 12px 16px; color: #52525b; border-radius: 8px; font-weight: 500; text-decoration: none; display: flex; align-items: center; gap: 12px;"><i class="fas fa-lock"></i> Keamanan Akun</a>
                        <a href="#" style="padding: 12px 16px; color: #52525b; border-radius: 8px; font-weight: 500; text-decoration: none; display: flex; align-items: center; gap: 12px;"><i class="fas fa-bell"></i> Notifikasi</a>
                        <a href="#" style="padding: 12px 16px; color: #52525b; border-radius: 8px; font-weight: 500; text-decoration: none; display: flex; align-items: center; gap: 12px;"><i class="fas fa-bullseye"></i> Preferensi Belajar</a>
                    </div>
                </aside>
                
                <section class="fellow-panel" style="flex: 1;">
                    <h3 style="margin: 0 0 24px; font-size: 20px; color: #18181b;">Profil Publik</h3>
                    
                    <div style="display: flex; gap: 24px; align-items: center; margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px solid #e4e4e7;">
                        <div style="width: 80px; height: 80px; background: #fdf2f8; color: #ec4899; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: bold;">AP</div>
                        <div>
                            <button style="background: #ec4899; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 600; margin-bottom: 8px; cursor: pointer;">Ubah Foto</button>
                            <p style="margin: 0; font-size: 13px; color: #71717a;">JPG, GIF atau PNG. Maksimal 2MB.</p>
                        </div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 24px;">
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #18181b;">Nama Lengkap</label>
                            <input type="text" value="Alya Putri Demo" style="width: 100%; max-width: 500px; padding: 12px 16px; border: 1px solid #e4e4e7; border-radius: 8px; font-size: 14px; color: #18181b; outline: none;">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #18181b;">Username</label>
                            <input type="text" value="@alyaputridemo" style="width: 100%; max-width: 500px; padding: 12px 16px; border: 1px solid #e4e4e7; border-radius: 8px; font-size: 14px; color: #18181b; outline: none;">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #18181b;">Bio Singkat</label>
                            <textarea rows="4" style="width: 100%; max-width: 500px; padding: 12px 16px; border: 1px solid #e4e4e7; border-radius: 8px; font-size: 14px; color: #18181b; outline: none;">Fellow HerAI batch 2026. Tech Enthusiast yang bersemangat mendalami Machine Learning dan AI Ethics.</textarea>
                        </div>
                        <div style="margin-top: 16px;">
                            <button style="background: #ec4899; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer;">Simpan Perubahan</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;
}

function renderFellowHelpPage() {
    return `
        <div class="fellow-section-page">
            <div style="text-align: center; max-width: 600px; margin: 0 auto 40px;">
                <h2 style="font-size: 28px; font-weight: 800; color: #18181b; margin: 0 0 16px;">FAQ & Bantuan</h2>
                <p style="font-size: 16px; color: #52525b; margin: 0;">Temukan jawaban dari pertanyaan yang sering diajukan mengenai program HerAI.</p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
                ${[
                    ['01', 'Apakah program ini berbayar?', 'Tidak. Program ini 100% Gratis bagi peserta yang lolos seleksi.'],
                    ['02', 'Harus background IT?', 'Tidak wajib, namun memiliki minat yang kuat dan komitmen tinggi sangat diutamakan.'],
                    ['03', 'Apa itu Jalur Afirmasi 3T?', 'Kuota khusus (30%) untuk pendaftar dari 122 kabupaten tertinggal (3T) di Indonesia (KTP/Domisili).'],
                    ['04', 'Bagaimana sistem belajarnya?', 'Intensif 8 minggu yang terbagi menjadi 3 fase: Foundation, Specialization, dan Application.'],
                    ['05', 'Sertifikasi resmi NVIDIA?', 'Ya, peserta yang lulus ujian akan mendapatkan sertifikasi resmi global dari NVIDIA.'],
                    ['06', 'Mentoring di Weekday?', 'Tidak, seluruh sesi mentoring dan kelas akan dilaksanakan setiap weekend.'],
                    ['07', 'Bentuk Tes Kompetensi?', 'Tes seputar logika dasar, pengetahuan umum tentang data, dan matematika.'],
                    ['08', 'Belum pernah belajar AI?', 'Tentu bisa! Fase Foundation akan mengajarkan dari nol.'],
                    ['09', 'Benefit Awardee HerAI?', '2 sertifikasi, networking expert, akses Woman Hub, dan akselerasi karir.']
                ].map(([num, q, a]) => `
                    <div style="background: white; border: 1px solid #e4e4e7; border-radius: 12px; padding: 32px; position: relative; overflow: hidden;">
                        <div style="position: absolute; top: -10px; right: 10px; font-size: 80px; font-weight: 900; color: #fdf2f8; line-height: 1; z-index: 0;">${num}</div>
                        <div style="position: relative; z-index: 1;">
                            <h4 style="margin: 0 0 12px; font-size: 16px; color: #18181b; font-weight: 700;">${q}</h4>
                            <p style="margin: 0; font-size: 14px; color: #52525b; line-height: 1.6;">${a}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div style="margin-top: 40px; background: linear-gradient(to right, #ec4899, #8b5cf6); border-radius: 16px; padding: 40px; text-align: center; color: white;">
                <h3 style="margin: 0 0 16px; font-size: 24px; font-weight: 700;">Masih Punya Pertanyaan?</h3>
                <p style="margin: 0 0 24px; font-size: 16px; opacity: 0.9;">Tim kami siap membantu menjawab pertanyaanmu seputar program HerAI.</p>
                <button style="background: white; color: #ec4899; border: none; padding: 12px 32px; border-radius: 8px; font-weight: 700; font-size: 16px; cursor: pointer;">Hubungi Support</button>
            </div>
        </div>
    `;
}
"""

content = content.replace("function renderFellowEventsPage() {", new_functions + "\nfunction renderFellowEventsPage() {")

with open('/home/faiz/her/Her-AI-SuperApp/js/frontend/profile.js', 'w') as f:
    f.write(content)

