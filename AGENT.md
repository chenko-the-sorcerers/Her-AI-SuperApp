# AI LAB DEVELOPMENT CONSTITUTION

> Dokumen ini WAJIB dibaca sebelum AI mengubah SATU BARIS kode.
> Apabila ada aturan yang bertentangan dengan kebiasaan AI, maka AGENT.md memiliki prioritas lebih tinggi.

---

## 1. GOLDEN REFERENCE

Jika user memberikan:
- Screenshot
- Figma
- Mockup
- UI Reference

MAKA itu dianggap sebagai **GOLDEN REFERENCE**.

**AI TIDAK BOLEH:**
- Mendesain ulang
- Mengubah hierarchy
- Mengubah UX
- Mengubah posisi komponen
- Membuat interpretasi sendiri

Target AI adalah: **Pixel-perfect implementation**.

---

## 2. DESIGN SYSTEM

Seluruh halaman WAJIB mengikuti Design System AI Lab.

**JANGAN** membuat style baru.

Selalu gunakan:
- existing components
- existing design token
- existing theme
- existing spacing
- existing typography
- existing radius
- existing shadow

Tidak boleh hardcode.

---

## 3. REUSABLE COMPONENT

Sebelum membuat component baru, AI WAJIB mencari apakah component tersebut sudah ada.

**Contoh component yang sudah ada:**
- Navbar (`lesson-topbar` + `lesson-topbar-inner`)
- Sidebar (`fellow-sidebar`)
- Container (`lesson-layout`, `lesson-main-content`, `lesson-article`)
- Card (`widget-card`, `info-card`, `challenge-card`, `playground-card`)
- Button (`run-btn`, `hint-btn`, `reset-btn`, `flip-btn`)
- Badge (`challenge-badge`, `quiz-badge`)
- Alert (`callout.info`, `callout.warn`, `callout.danger`)
- Code Block (`code-block` + `cb-label`)
- Mini Challenge (`challenge-card` + `challenge-editor` + code-editor)
- Playground (`playground-card` + `playground-editor`)
- Progress (`lesson-progress-card`)
- Section (`lesson-sec` + `sec-header` + `sec-num` + `sec-title` + `sec-sub`)
- Output (`output-wrap` + `output-label` + `output-pre`)

Jika sudah ada, **gunakan component reusable**. Jangan copy paste.

---

## 4. VISUAL CONSISTENCY

Semua halaman harus terlihat dibuat oleh **SATU DESIGN SYSTEM**.

**Yang harus identik:**
- Navbar
- Sidebar
- Footer
- Card
- Button
- Typography
- Spacing
- Animation
- Color
- Shadow
- Radius

Tidak boleh ada halaman yang tampil berbeda sendiri.

---

## 5. THEME

Project menggunakan **theme AI Lab** (pink HerAI).

Tidak boleh ada component yang masih menggunakan style lama (dark theme).

**Yang HARUS dimigrasikan ke theme baru:**
- Dark Card lama → white card + pink border
- Old Playground → pink bg `#fff0f7`
- Old Editor → pink bg `#fff0f7`
- Old Button → pink accent `#f63392`
- Old Badge → pink accent `#f63392`

---

## 6. COLOR

Tidak boleh hardcode warna. Gunakan semantic token.

**Design Token yang tersedia:**
```css
--px-bg: #fff7fb;
--px-bg-2: #fff0f7;
--px-card: #ffffff;
--px-line: rgba(246,51,146,.16);
--px-line-strong: rgba(246,51,146,.24);
--px-text: #171827;
--px-text-2: #6f7282;
--px-text-3: #8e91a0;
--px-accent: #f63392;
--px-accent-soft: rgba(246,51,146,.08);
--px-shadow: 0 18px 50px rgba(246,51,146,.08);
--px-shadow-lg: 0 24px 60px rgba(23,24,39,.08);
--px-radius: 20px;
--px-radius-sm: 14px;
--px-font-disp: 'Plus Jakarta Sans', sans-serif;
--px-font-body: 'Inter', sans-serif;
--px-font-mono: 'SF Mono','Space Mono',monospace;
```

Jika tidak ada, tambahkan ke Design Token.

---

## 7. CONTRAST

Semua text harus memenuhi **WCAG AA** (contrast ratio minimal 4.5:1).

**Tidak boleh ada:**
- Text hampir hilang
- Muted terlalu terang
- Pink di atas pink
- Gray di atas pink
- Placeholder tidak terlihat
- Caption tidak terlihat

**Aturan kontras:**
- Text utama: `#171827` pada background putih
- Text secondary: **minimal** `#6f7282` (JANGAN `#8e91a0` untuk body text)
- Label/caption: `#51596d` atau `#6f7282` (JANGAN `#8e91a0`)
- Code inline: bg eksplisit `var(--px-bg-2)`, text `var(--px-text)`
- Pink accent `#f63392` hanya untuk aksen — background minimal `rgba(246,51,146,.12)`

---

## 8. LAYOUT

**Tidak boleh ada:**
- Overflow
- Horizontal Scroll
- Content keluar viewport
- Card keluar container
- Image keluar
- Table keluar
- Code keluar
- Button keluar

Semua layout harus berada di dalam container.

---

## 9. ROOT CAUSE

**AI DILARANG menyembunyikan bug.**

**Dilarang menggunakan:**
- `overflow: hidden`
- `display: none`
- `visibility: hidden`
- `opacity: 0`
- `clip-path`
- translate hack
- negative margin

Jika ada bug, **cari root cause**.

---

## 10. RESPONSIVE

**WAJIB test pada viewport:**
- 320px
- 375px
- 390px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

**Pastikan:**
- Tidak overflow
- Tidak horizontal scroll
- Tidak text overlap
- Tidak image stretch
- Tidak button keluar

---

## 11. MCP PLAYWRIGHT

**Sebelum coding:** WAJIB membuka halaman menggunakan MCP Playwright.

**Sesudah coding:** WAJIB membuka lagi. Lakukan visual audit.

**Jangan hanya membaca source code.**

---

## 12. VISUAL REGRESSION

Jika user memberikan screenshot, **WAJIB:**
- Bandingkan screenshot hasil implementasi dengan screenshot referensi
- Jika masih berbeda, lanjutkan perbaikan
- **Jangan menyatakan task selesai** sebelum visual identik

---

## 13. HIERARCHY

**AI DILARANG mengubah hierarchy visual.**

Contoh:
```
Original
↓
Button
↓
Result
```

Tidak boleh diubah menjadi:
```
Button
↓
Original
↓
Result
```

Hierarchy harus tetap.

---

## 14. INTERACTIVE PLAYGROUND

Semua Interactive Playground harus konsisten.

**Desktop:**
```
Original  |  Controls  |  Result
```
berada pada **satu row**.

Code block berada di bawah. Explanation berada di bawah.

---

## 15. MINI CHALLENGE

Semua Mini Challenge harus menggunakan **style terbaru** (pink theme).

**Tidak boleh ada:**
- Dark theme lama
- Background hitam lama
- Button lama (blue accent)
- Editor lama (dark bg)
- Output lama (transparent/dark)

---

## 16. CODE BLOCK

Semua code block harus identik:
- Radius: `14px`
- Padding: `18px 20px`
- Background: `#fff`
- Border: pink `rgba(246,51,146,.16)`
- Typography: `SF Mono` / `Space Mono`, 13px
- Syntax Highlight: pink theme (`#db2777` keyword, `#7c3aed` function, etc.)

---

## 17. ACCESSIBILITY

Semua komponen harus:
- Keyboard accessible
- Visible focus
- Contrast AA
- Aria label jika diperlukan

---

## 18. IMAGE

Semua image harus:
- Responsive
- Lazy Load
- Object Fit
- Rounded (`border-radius`)
- Tidak stretch
- Tidak blur
- Max-width terbatas (hero image: `max-width: 240px`)

---

## 19. DEBUGGING

Jika menemukan bug, AI WAJIB melakukan **Root Cause Analysis**, bukan Trial & Error.

**Langkah-langkah:**
1. Identifikasi gejala
2. Cari penyebab (file, baris, properti CSS)
3. Verifikasi dengan Playwright
4. Baru perbaiki

---

## 20. BEFORE FINISH

Sebelum menyatakan task selesai, WAJIB menjalankan checklist.

# Legacy Component Migration Rules

Sebelum membuat perubahan UI, AI WAJIB melakukan audit terhadap komponen yang digunakan.

Jika ditemukan komponen lama (legacy), seperti:

- Old Theme
- Old Card
- Old Playground
- Old Mini Challenge
- Old Code Block
- Old Editor Wrapper
- Old Button
- Old Badge

AI WAJIB mengganti penggunaan komponen tersebut dengan reusable component yang mengikuti Design System terbaru.

Dilarang mencampurkan komponen lama dan baru dalam satu halaman.

Setiap halaman AI Lab harus menggunakan satu Design System yang konsisten.

Jika terdapat dua implementasi komponen dengan fungsi yang sama, AI harus melakukan refactor agar hanya satu implementasi yang digunakan.

Sebelum menyatakan task selesai, AI WAJIB memverifikasi hasil menggunakan MCP Playwright dan memastikan tidak ada lagi komponen legacy yang tersisa.


# Theme Migration Rules

AI DILARANG mencampurkan dua Design System dalam satu halaman.

Jika ditemukan:

- Legacy Theme
- Legacy Playground
- Legacy Card
- Legacy Progress
- Legacy Footer
- Legacy Toolbar
- Legacy Button

AI WAJIB melakukan migrasi penuh ke Design System terbaru.

Jangan melakukan partial migration.

Satu halaman harus menggunakan SATU Design System yang konsisten.

Sebelum task selesai,

AI WAJIB memastikan:

□ Tidak ada warna legacy

□ Tidak ada component legacy

□ Tidak ada accent color lama

□ Tidak ada spacing lama

□ Tidak ada typography lama

□ Tidak ada footer lama

□ Tidak ada progress card lama
---

## CHECKLIST

- [ ] Console tanpa error
- [ ] Console tanpa warning (kecuali `textContent` / `loadPyodide` yang diketahui)
- [ ] Tidak ada Overflow
- [ ] Tidak ada Horizontal Scroll
- [ ] Tidak ada Content keluar viewport
- [ ] Responsive Desktop (1440px)
- [ ] Responsive Tablet (768px)
- [ ] Responsive Mobile (375px)
- [ ] Visual sesuai Golden Reference (jika ada)
- [ ] Theme konsisten (pink HerAI)
- [ ] Typography konsisten
- [ ] Spacing konsisten
- [ ] Button konsisten
- [ ] Navbar konsisten (transparent, 3-col, inner wrapper)
- [ ] Sidebar konsisten
- [ ] Footer konsisten
- [ ] Card konsisten (white bg, pink border, radius 20px)
- [ ] Mini Challenge konsisten (pink editor, pink output)
- [ ] Playground konsisten (pink bg, pink toolbar)
- [ ] Code Block konsisten (white bg, pink border, radius 14px)
- [ ] Warna konsisten (pakai design token, jangan hardcode)
- [ ] Shadow konsisten
- [ ] Radius konsisten
- [ ] Contrast memenuhi WCAG AA
- [ ] Screenshot Playwright SESUDAH perubahan sudah diverifikasi
- [ ] Tidak ada emoji — semua FontAwesome icons
- [ ] Tidak ada `overflow: hidden` yang menyembunyikan bug
- [ ] Setiap halaman punya page-specific class (contoh: `pixel-anatomy-page`, `opencv-page`)

Jika salah satu checklist gagal, AI TIDAK BOLEH menyatakan task selesai. AI harus melanjutkan debugging sampai seluruh checklist terpenuhi.
