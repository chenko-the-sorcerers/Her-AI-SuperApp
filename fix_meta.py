import re

with open('/home/faiz/her/Her-AI-SuperApp/js/frontend/profile.js', 'r') as f:
    content = f.read()

old_meta = """        const sectionMeta = {
            'participant-modules': ['Modul', 'Belajar terstruktur dengan 25+ modul yang dirancang untuk membawamu menjadi AI Talent yang siap berdampak.', 'Cari modul...'],
            'participant-tasks': ['Tugas', 'Selesaikan tugas untuk mengasah skill dan dapatkan poin!', 'Cari tugas...'],
            'participant-project': ['Proyek', 'Bangun solusi nyata dan terapkan ilmu AI yang kamu pelajari.', 'Cari proyek...'],
            'participant-events': ['Events', 'Ikuti berbagai acara seru untuk menambah wawasan, relasi, dan pengalamanmu.', 'Cari event, topik, atau pembicara...']
        }[key];"""

new_meta = """        const sectionMeta = {
            'participant-chatroom': ['Chatroom', 'Ruang diskusi dan kolaborasi real-time untuk para Fellow, Mentor, dan Tim HerAI.', 'Cari chat atau komunitas...'],
            'participant-mentor': ['Direktori Mentor', 'Temukan dan jadwalkan sesi 1-on-1 dengan mentor pilihanmu.', 'Cari mentor...'],
            'participant-community': ['Komunitas', 'Berkolaborasi, berbagi ilmu, dan tumbuh bersama komunitas HerAI Fellowship.', 'Cari komunitas, topik, atau anggota...'],
            'participant-certificate': ['Sertifikat', 'Kumpulkan sertifikat dari setiap pencapaian belajar dan kegiatanmu.', 'Cari sertifikat...'],
            'participant-leaderboard': ['Leaderboard', 'Apresiasi untuk para perempuan inspiratif yang terus belajar dan berkembang.', 'Cari nama atau pengguna...'],
            'participant-help': ['FAQ & Bantuan', 'Temukan jawaban dari pertanyaan yang sering diajukan mengenai program HerAI.', 'Cari bantuan...'],
            'participant-settings': ['Pengaturan', 'Kelola profil, keamanan, dan preferensi akun HerAI Fellowship kamu.', 'Cari pengaturan...'],
            'participant-modules': ['Modul', 'Belajar terstruktur dengan 25+ modul yang dirancang untuk membawamu menjadi AI Talent yang siap berdampak.', 'Cari modul...'],
            'participant-tasks': ['Tugas', 'Selesaikan tugas untuk mengasah skill dan dapatkan poin!', 'Cari tugas...'],
            'participant-project': ['Proyek', 'Bangun solusi nyata dan terapkan ilmu AI yang kamu pelajari.', 'Cari proyek...'],
            'participant-events': ['Events', 'Ikuti berbagai acara seru untuk menambah wawasan, relasi, dan pengalamanmu.', 'Cari event, topik, atau pembicara...']
        }[key] || ['Dashboard', 'HerAI Fellowship Dashboard', 'Cari...'];"""

content = content.replace(old_meta, new_meta)

with open('/home/faiz/her/Her-AI-SuperApp/js/frontend/profile.js', 'w') as f:
    f.write(content)

