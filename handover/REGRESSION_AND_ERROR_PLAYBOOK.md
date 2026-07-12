# HerAI Regression and Error Playbook

**Status:** current source of truth
**Updated:** 12 Juli 2026

Dokumen ini mencatat kegagalan nyata yang pernah terjadi pada Reasoning, Python untuk AI, dan Konsep AI Modern. Gunakan sebagai daftar pencegahan sebelum mengulang pola ke Evaluation, Evolution of AI, atau course lain.

## 1. Runtime dan Data

| Error nyata | Gejala | Akar masalah | Guardrail wajib |
|---|---|---|---|
| Fungsi helper tidak ikut tercopy | Page crash atau berhenti render | Controller baru hanya menyalin bagian utama | Audit function parity terhadap Reasoning sebelum browser test |
| `renderList` / `renderFlow` hilang | Materi crash saat enrichment dirender | Helper dianggap tidak dipakai | Masukkan keduanya dalam checklist wajib |
| `escapeHtml`, `escapeSelector`, `safeJsonParse`, `setStatus` hilang | Error HTML/query/localStorage/practice | Utility tersebar dan terlewat | Audit seluruh utility, jangan hanya render functions |
| `sourcePath` memakai literal `...` | Chapter 2–8 404 | Contoh dokumentasi disalin menjadi runtime | Gunakan absolute full path dan cek setiap file dengan filesystem/fetch |
| `PRACTICES.fields` undefined | Practice crash saat membuka skenario | Entry data tidak memenuhi schema renderer | Validasi semua entry punya `fields` array |
| First visit practice crash | `answers`/`revealed` dibaca dari null | Tidak ada null guard | `getSavedPractice() || { answers: {}, revealed: [] }` |
| Label practice masih Reasoning | Navigator course baru salah | `PRACTICE_TOPICS` tidak diganti | Audit seluruh copy/course name dan topic range |
| Router tidak menginisialisasi halaman | HTML muncul tetapi fitur kosong | Nama `window.init...` berbeda | Bandingkan export controller dengan `typeof window.init...` di router |
| Controller tidak pernah load | Tidak ada initializer di window | Script reference hilang | Cek `index.html` dan Network/console |
| Response chapter lama menimpa pilihan baru | User klik topik 3 tetapi topik 2 muncul | Race antar fetch | Sequence token atau `AbortController`, commit DOM hanya request terbaru |
| Event listener hilang setelah layout ulang | Kontrol terlihat tapi tidak merespons | Node interaktif di-clone | Pindahkan node dengan `appendChild`, jangan clone interactive DOM |
| localStorage lama membuat state parsial | UI locked/blank seperti bug | Schema baru tidak membaca data lama | Parser toleran, default per-field, migrasi eksplisit |

## 2. Integritas Materi

| Error nyata | Gejala | Akar masalah | Guardrail wajib |
|---|---|---|---|
| Source dianggap lampiran | Materi utama menjadi ringkasan dangkal | Pipeline visual menggantikan source | Source tetap main content; enrichment disisipkan kontekstual |
| Isi hilang setelah transformasi | Paragraf/list/source code berkurang | Filter selector terlalu luas | Bandingkan normalized `textContent` sebelum dan sesudah transformasi |
| Visual mengganti source code | Detail teknis tidak lagi tersedia | Original node dihapus | Pertahankan source asli; visual tambahan diberi marker injected |
| Satu paragraf berisi banyak label menjadi satu blob | Flow sulit dibaca | Converter Markdown menggabungkan section labels | Pecah visual berdasarkan label tanpa mengubah teks/urutan |
| Materi beginner masih terlalu standar | Hanya definition dan code dump | Enrichment generik, tanpa alur | Tambah roadmap, worked example, glossary, contextual explainer, trade-off |
| Semua enrichment menumpuk di akhir | Konsep dan visual terasa terpisah | Injection hanya `append` | Inject setelah heading/section yang relevan |

## 3. CSS dan Layout

| Error nyata | Gejala | Akar masalah | Guardrail wajib |
|---|---|---|---|
| CSS course hilang setelah merge | JS/data ada tapi halaman kembali default | Konflik merge mempertahankan versi stylesheet tanpa block terbaru | Cari selector penting di HEAD setelah merge; jangan percaya commit lama |
| Class renderer dan CSS berbeda | Card/table/list tidak terstyling | Misalnya renderer `reasoning-mp-card`, CSS mengharap `reasoning-mp-col` | Audit pasangan render class ↔ selector CSS |
| State class berbeda | Active/complete navigator tidak terlihat | JS memakai `active`, CSS memakai `is-active` | Satu kontrak state class, dites lewat interaksi |
| Browser default buttons | Tombol prev/next/guide kecil dan lancip | Tidak ada selector explicit | Semua control utama wajib punya component CSS |
| Textarea menyempit | Jawaban hanya beberapa karakter per baris | Grid column dibagi oleh label/text node | Wrapper field + `width: 100%` + jangan grid mixed text node |
| Lab stage text pecah kata per baris | Kolom deskripsi sangat sempit | `grid-template` salah atau item punya min-content width | `min-width: 0`, grid responsive, inspect computed width |
| Mistakes/practices kotak lancip | Terlihat berantakan | Border/radius hanya di parent atau missing class | Radius pada container dan item visible, selector class cocok |
| Objective text dipotong/marker bertabrakan | Checklist mempunyai dua pseudo-icons atau overflow | Global `.is-source-view ul li::before` menang | Wrapper `.objective-copy`, scoped override, inspect pseudo-element |
| Quiz map berada setelah soal | Orientasi peserta buruk | DOM order mengikuti implementasi lama | Map/progress sebelum active question |
| Number navigator terlalu panjang | Desktop/mobile padat tanpa grouping | Semua nomor dalam satu row | Grouping/topical overview + internal wrap/scroll |
| `scrollWidth` lulus tapi card tetap buruk | Tidak ada document overflow, tetapi text terlalu sempit | Hanya tes dokumen | Screenshot desktop/mobile + computed width tiap component |
| Cache lama tampil | Fix sudah ada tetapi browser menampilkan CSS/JS lama | Hanya satu asset dibump | Bump controller dan `modules.css` bersama |

## 4. Activity UX

| Error nyata | Gejala | Akar masalah | Guardrail wajib |
|---|---|---|---|
| Semua practice tampil sekaligus | Halaman panjang dan aksi tenggelam | Tidak ada progressive disclosure | Satu skenario aktif, navigator topik, progress overview |
| Referensi panjang di atas form | Peserta harus scroll jauh sebelum menjawab | Source dump ditempatkan dulu | Workspace/action dulu, source di `<details>` setelahnya |
| Quiz radio kecil saja yang dapat diklik | Sulit digunakan di mobile | Label/card tidak menjadi click target | Seluruh option card clickable |
| Quiz locked terlihat rusak | Option disabled tanpa penjelasan | Single attempt state tidak diberi copy | Banner attempt used + score + review |
| Review hanya soal terakhir | Peserta tidak bisa belajar dari hasil | Artikel lain masih hidden | Reveal semua question articles saat lock/review |
| Reply memakai `window.prompt` | UX kasar dan tidak kontekstual | Shortcut implementasi | Inline reply composer dengan save/cancel |
| Challenge tidak tersimpan | Setelah refresh jawaban hilang | Handler/key tidak konsisten | Test save-refresh-edit-reset per chapter |

## 5. Merge dan Worktree

- Worktree dapat berisi file untracked milik user, screenshot, debug, atau materi draft. Jangan hapus atau commit tanpa scope jelas.
- Setelah merge, jalankan `git status --short --branch`, `git log`, dan audit file hasil konflik.
- Jangan memakai `git reset --hard` atau checkout destruktif.
- Commit hanya file handover/course yang memang dikerjakan.
- Jangan push tanpa izin user.
- Branch ahead bukan error. Catat angka aktual pada checkpoint, tetapi prompt AI baru harus tetap meminta verifikasi ulang karena angka cepat berubah.

## 6. Checkpoint Verifikasi Wajib

### Static

```bash
git status --short --branch
node --check js/frontend/fellow-dashboard/ai-reasoning.js
node --check js/frontend/fellow-dashboard/ai-python.js
node --check js/frontend/fellow-dashboard/ai-modern.js
node --check js/frontend/fellow-dashboard/ai-evaluation.js
node --check js/frontend/fellow-dashboard/ai-evolution.js
node --check js/router.js
node scripts/check-participant-routes.mjs
```

### Browser per course

1. Materi: setiap chapter, rapid chapter switching, hook, lab, quick check, challenge, visual nav, copy.
2. Latihan: first visit storage kosong, direct jump, save, refresh, edit, reset, reveal, prev/next.
3. Kuis: select card, navigation, submit, locked copy, review semua soal, reload.
4. Diskusi: post, reply inline, edit/reset bila tersedia, reload.
5. Responsive: desktop dan 390px mobile, screenshot, console, document overflow, internal overflow.
6. Integrity: source text before/after transformation setara setelah node injected dikeluarkan dari clone audit.

### Route waiting rule

Hash-router dapat menyisakan DOM route lama sesaat. Browser test harus menunggu container dan teks unik route/chapter target, bukan selector generik yang juga ada di route sebelumnya.

## 7. Stop Conditions

Jangan menyebut module complete jika salah satu ini masih ada:

- console error;
- missing source chapter;
- source text berkurang;
- stale course labels;
- default browser controls pada aksi utama;
- text satu kata/huruf per baris;
- horizontal document overflow;
- practice/quiz state tidak jelas;
- localStorage first-visit atau reload crash;
- cache JS/CSS tidak sinkron;
- route checker gagal.
