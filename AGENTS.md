# HerAI — Design Rules for AI Agents

> Baca ini SEBELUM mengubah CSS atau layout halaman.

## Border-radius (JANGAN PERNAH 0)

Semua elemen visual HARUS punya border-radius:
| Elemen | Radius |
|---|---|
| Cards, containers | `14px` – `20px` |
| Buttons, pills | `100px` (pill shape) |
| Inputs, search bars | `14px` – `20px` |
| Code blocks | `12px` – `16px` |
| Avatars, icons | `50%` |

❌ `border-radius: 0` dilarang untuk elemen visible
❌ Kotak lancip = berantakan

## Warna & Kontras (WAJIB TERBACA)

⚠️ Pink `#f63392` di atas pink lembut `#fff7fb`/`#fff0f7` KURANG KONTRA.

Gunakan aturan:
- **Text utama**: `#171827` pada background putih
- **Text secondary**: `#6f7282` minimal (JANGAN `#8e91a0` untuk body text)
- **Label/caption**: `#51596d` atau `#6f7282` (JANGAN `#8e91a0` atau lebih terang)
- **Pink accent**: `#f63392` hanya untuk aksen (icon, border active, badge)
  - Background aksen: minimal `rgba(246,51,146,.12)` biar kelihatan
- **Code blocks**: background eksplisit bernuansa HerAI pink-light seperti `#fff7fb`, `#fff0f7`, atau `#fffcfd`, text utama `#171827`
- **Code blocks di materi**: jangan memakai terminal hitam/dark block sebagai default. Wajib membawa aksen HerAI pink melalui border, header, label kecil, syntax string/keyword pink, atau icon FontAwesome pink.
- **Course learning surfaces wajib light theme**: visualisasi, milestone, concept lab, callout, source renderer, panel chapter, dan container pembelajaran tidak boleh memakai background hitam atau dark navy. Gunakan putih, `#fff7fb`, `#fff0f7`, atau `#fffcfd`; `#171827` hanya untuk warna teks utama.
- **Badge quiz**: pakai pink (`#f63392`), JANGAN purple (`#7c3aed`)

## Pink Theme HerAI

```css
--fellow-pink: #f63392;                    /* Primary accent */
--fellow-line: rgba(244,143,188,.26);       /* Border tipis */
--fellow-text: #171827;                     /* Dark text */
--fellow-muted: #6f7282;                   /* Gray secondary */
--fellow-line-active: rgba(246,51,146,.3); /* Border lebih jelas */
```

## Wajib Diperiksa

- [ ] Semua elemen visible punya border-radius > 0
- [ ] Contrast ratio minimal 4.5:1 untuk body text
- [ ] Tidak ada teks tipis (`#8e91a0` atau lebih terang) untuk konten penting
- [ ] Semua icon/style konsisten pink, bukan biru/hijau/ungu
- [ ] Tidak ada emoji — semua FontAwesome icons
- [ ] Tidak ada course card, milestone, visual lab, atau source panel dengan background hitam/dark navy
- [ ] Tidak ada teks yang pecah satu huruf/kata per baris karena grid/flex item terlalu sempit
- [ ] Periksa screenshot desktop dan mobile, bukan hanya `scrollWidth`, untuk memastikan isi card benar-benar terbaca

## Course UI Interaktif

- Materi course tidak boleh berupa teks panjang polos saja. Setiap rombak materi wajib punya minimal salah satu dari: callout konsep, checklist belajar, quick check, mini challenge, atau playground/link praktik yang terasa jelas.
- Kuis wajib memakai opsi yang seluruh kartunya bisa diklik, bukan hanya radio kecil. State `selected`, `correct`, `wrong`, dan `locked` harus terlihat jelas.
- Jika kuis single attempt terkunci oleh localStorage, UI harus menjelaskan bahwa attempt sudah dipakai; jangan terlihat seperti bug tidak bisa diklik.
- Code block harus tampil sebagai blok visual yang rapi dengan background eksplisit, radius 12px-16px, overflow aman, dan tidak membuat teks utama terasa seperti dump Markdown.
- Tema HerAI pink wajib konsisten di materi, latihan, kuis, diskusi, callout, quick check, selected state, active border, icon, dan code block. Warna lain boleh dipakai hanya untuk semantic state seperti benar/salah/error, bukan sebagai aksen utama.
- Jangan menerapkan `display: grid` atau `display: flex` langsung pada elemen paragraf yang memiliki campuran text node dan elemen inline seperti `<strong>`/`<em>`. Bungkus isi teks terlebih dahulu agar label dan badan paragraf tidak terpecah menjadi kolom sempit.
- Jika satu paragraf hasil konversi Markdown memuat beberapa label bagian seperti `Tujuan Chapter`, `Kenapa Chapter Ini Penting`, `Quick Check`, `Mini Challenge`, atau `Ringkasan`, pecah secara visual berdasarkan label tanpa menghapus, meringkas, atau mengubah urutan teks sumber.

## Cache dan Smoke Test SPA

- Jika mengubah controller JS atau stylesheet course yang sudah aktif, bump cache buster keduanya di `index.html`. Jangan hanya membump JS ketika tampilan juga berubah.
- Saat smoke test aplikasi hash-router/SPA, selector generik dapat menangkap DOM route sebelumnya sebelum fetch/render baru selesai. Tunggu container route-specific dan teks unik milik route/chapter target.
- Setelah transformasi DOM materi sumber, bandingkan `textContent` sebelum dan sesudah transformasi untuk memastikan tidak ada materi yang hilang.
- Untuk overflow mobile, cek `document.documentElement.scrollWidth <= innerWidth` dan inspeksi elemen penyebab. Tabel/chip panjang harus scroll di dalam wrapper, bukan memperlebar dokumen.
