# HerAI AI Lab — Session Checkpoint (2026-07-02 update)

> **Untuk AI baru:** Baca file ini dari atas ke bawah SEBELUM melakukan apapun.
> Ini snapshot sesi 2026-07-01 yang sudah diupdate 2026-07-02. File arsitektur lengkap ada di `docs-faiz/FULL_CHECKPOINT.md`.

---

## 1. POSISI SEKARANG

### Task yang sedang dikerjakan:
**Perapihan visual halaman `#/participant-ai-lab-cv`**

User minta halaman CV overview dirapikan — layout, card, box, icon, dan code block harus:
- Konsisten dengan tema pink HerAI (tidak terlalu neon, harus menyatu)
- Konten mengacu ke referensi: `https://chen-silk.vercel.app/pages/ai-lab/computer-vision.html`
- Layout rapi, semua icon tampil, dan teks di code block tetap kebaca

### Status sekarang:
- ✅ Konten HTML CV overview sudah ada dan LENGKAP
- ✅ CSS component sudah ditambahkan ke ai-lab-lesson.css
- ✅ Layout lesson-layout + lesson-main + lesson-right-panel sudah terpasang
- ✅ CSS ter-apply normal lagi setelah brace issue dibereskan
- ✅ Semua komponen visual berfungsi (grid, flex, card, sticky panel)
- ✅ Icon yang kosong sudah diisi dan kontras code block sudah ditingkatkan

---

## 2. FILE YANG BERUBAH (BELUM DI-COMMIT)

```
M css/frontend/fellow-dashboard/ai-lab-lesson.css   polish code block contrast
M pages/frontend/fellow-dashboard/ai-lab/computer-vision.html  fill missing icons
M docs-faiz/SESSION_CHECKPOINT_20260701.md           update status
```

**COMMIT DULU sebelum lanjut kerja:**
```bash
git add css/frontend/fellow-dashboard/ai-lab-lesson.css \
        pages/frontend/fellow-dashboard/ai-lab/computer-vision.html \
        docs-faiz/SESSION_CHECKPOINT_20260701.md
git commit -m "fix(cv): polish overview spacing, icons, and contrast"
```

---

## 3. FILE UTAMA

| File | Keterangan |
|---|---|
| `pages/frontend/fellow-dashboard/ai-lab/computer-vision.html` | CV overview, sudah dirapikan dan ikon kosong sudah diisi |
| `css/frontend/fellow-dashboard/ai-lab-lesson.css` | CSS global AI Lab, sekarang sudah parse normal lagi |
| `js/frontend/fellow-dashboard/ai-lab/cv-overview.js` | Init file overview |
| `pages/frontend/fellow-dashboard/ai-lab/machine-learning.html` | ML Overview, sudah full rewrite |

### Struktur layout lesson page:
```
section.fellow-dashboard.fellow-modules-page
  aside.fellow-sidebar
  main.fellow-main
    header.lesson-topbar (breadcrumb + search + user)
    div.lesson-layout
      div.lesson-main                    ← konten utama (lesson-hero + lesson-material-panel)
        section.lesson-hero
        section.lesson-material-panel
          div.lesson-tabs
          article.lesson-article.ai-lab-content#mlintro-content
            section#sec-definisi
            section#sec-paradigma
            section#sec-supervised
            section#sec-unsupervised
            section#sec-reinforcement
            section#sec-kapan
      aside.lesson-right-panel           ← sidebar kanan (progress + daftar section)
```

---

## 4. MASALAH AKTIF & CARA FIXNYA

### Masalah lama: CSS tidak ter-apply

**Diagnosa:**
```bash
# Cek balance brace di CSS
python3 -c "
css = open('css/frontend/fellow-dashboard/ai-lab-lesson.css').read()
opens = css.count('{')
closes = css.count('}')
print(f'Opens: {opens}, Closes: {closes}, Imbalance: {opens-closes}')
"
```

**Status:** FIXED. Kalau muncul lagi, cari brace yang belum ketutup di `ai-lab-lesson.css`.

---

## 5. REFERENSI DESIGN

- **URL referensi:** `https://chen-silk.vercel.app/pages/ai-lab/computer-vision.html`
- **Source lokal (JANGAN EDIT):** `Website-Portofolio-Chen/pages/ai-lab/computer-vision.html`

### Tema HerAI Pink (wajib konsisten):
```css
--fellow-pink: #f63392;                    /* Primary accent */
--fellow-line: rgba(244,143,188,.26);       /* Border tipis */
background pink lembut: #fff7fb atau #fff0f7
text gelap: #171827
text secondary: #6f7282
```

### Preferensi visual user:
- Tidak ada border yang norak — border harus subtle
- Pink menyatu, tidak terlalu neon — pakai soft pink untuk background
- Card rapi — `border-radius: 16px`, shadow lembut
- TIDAK ADA EMOJI — semua pakai FontAwesome icons
- Font: Plus Jakarta Sans (heading 800), Inter (body)

---

## 6. KOMPONEN CSS YANG SUDAH ADA DI ai-lab-lesson.css

Ini sudah di-define (sudah ter-apply setelah fix 3 brace):

- `.sec-header`, `.sec-num`, `.sec-title`, `.sec-sub`
- `.paradigm-compare`, `.pc-col`, `.pc-header.classic/.ml`, `.pc-flow`, `.pc-box`, `.pc-vs`
- `.insight-callout`, `.ic-icon`, `.ic-body`
- `.worked-box`, `.wb-badge`, `.wb-title`
- `.motivation-grid`, `.motiv-card`, `.motiv-icon`, `.motiv-title`, `.motiv-desc`
- `.three-paradigms`, `.para-card.supervised/.unsupervised/.reinforcement`
- `.task-split`, `.ts-col`, `.ts-formula`, `.math-term.blue/.green/.purple`, `.math-op`
- `.pipeline-steps`, `.ps-step`, `.ps-circle`, `.ps-content`, `.ps-arrow`
- `.unsup-tasks`, `.ut-card`, `.ut-accent`, `.ut-icon`, `.ut-title`, `.ut-algos`, `.uta`
- `.rl-loop`, `.rll-center`, `.rll-agent`, `.rll-env`, `.rll-arrows`, `.rll-arrow`
- `.rl-concepts`, `.rlc-row`, `.rlc-term`, `.rlc-def`
- `.when-grid`, `.when-col.use/.avoid`, `.when-header`, `.wl-item`, `.wl-icon`, `.wl-content`
- `.next-lesson-cta`, `.nlc-inner`, `.nlc-label`, `.nlc-title`, `.nlc-desc`, `.nlc-btn`

---

## 7. CHECKLIST YANG HARUS DIVERIFIKASI SETELAH FIX

Via Playwright (`http://localhost:3000/#/participant-ai-lab-cv`):

- [x] Hero section: gradient bg, judul besar, persona image
- [x] Section header: nomor (01-06) + judul + subtitle
- [x] paradigm-compare: 2 kolom grid Klasik vs ML
- [x] insight-callout: callout box pink dengan icon
- [x] worked-box: card dengan pink accent header
- [x] motivation-grid: 2x2 grid card
- [x] three-paradigms: 3 card horizontal
- [x] task-split: 2 kolom klasifikasi vs regresi dengan formula
- [x] pipeline-steps: 4 langkah vertikal dengan circle number
- [x] unsup-tasks: 3 card clustering/dim-reduction/anomaly
- [x] rl-loop: diagram loop agent ↔ environment
- [x] rl-concepts: table 4 baris
- [x] when-grid: 2 kolom gunakan vs jangan
- [x] next-lesson-cta: CTA card di akhir
- [x] lesson-right-panel: sticky sidebar kanan dengan progress + daftar section
- [x] Scroll-spy: item di sidebar kanan highlight sesuai posisi scroll

---

## 8. LAST COMMIT

```
0003836 (HEAD -> design)
feat(ml-catalog): full rewrite machine-learning.html using HerAI CSS class system
```

---

## 9. RULES PENTING (RINGKAS)

1. ❌ JANGAN edit `gas/Code.gs`, `render.yaml`, `signaling/main.go` tanpa izin eksplisit
2. ❌ JANGAN edit `Website-Portofolio-Chen/` — read-only source
3. ✅ COMMIT setelah setiap chunk selesai (jangan push kecuali diminta)
4. ✅ Semua CSS di-scope: `.ai-lab-content .class-name`
5. ✅ Test Playwright sebelum bilang selesai
6. ✅ Tidak ada emoji — semua FA icons

---

*Checkpoint diperbarui: 2026-07-02 WIB (CV overview polish + docs refresh)*
