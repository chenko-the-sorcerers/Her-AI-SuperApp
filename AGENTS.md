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
- **Code blocks**: background eksplisit (bukan transparent), text `#171827`
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
