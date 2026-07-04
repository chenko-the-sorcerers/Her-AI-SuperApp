# Modul 02 — Pemrograman Python untuk AI

> **Untuk AI baru:** Tempel seluruh file ini ke context window sebelum menyentuh kode apapun.
> Modul ini melanjutkan pola dari modul 01 yang dibuat oleh mentor.

---

## 1. STATUS

| Halaman | Route | HTML | JS | Interaktif | Status |
|---|---|---|---|---|---|
| Materi | `#/participant-ai-python` | `materi.html` | — | ❌ | ✅ Done |
| Latihan | `#/participant-ai-python-practice` | `latihan.html` | `ai-python-basic.js` | ✅ Pyodide | ✅ Done |
| Kuis | `#/participant-ai-python-quiz` | `kuis.html` | `ai-python-basic.js` | ✅ Submit + Lock | ✅ Done |
| Diskusi | `#/participant-ai-python-discussion` | `diskusi.html` | `ai-python-basic.js` | ✅ Forum + Seed | ✅ Done |

**Semua test PASS** — 0 error, 0 emoji, 0 regresi.

---

## 2. FILE STRUCTURE

```
pages/frontend/fellow-dashboard/ai-fundamental/
  02-python-untuk-ai/
    materi.html          ← 6 section konten Python dasar (variabel, list, dict, loop, function, libraries)
    latihan.html         ← 5 soal reflektif textarea + 5 Pyodide interactive playground
    kuis.html            ← 10 soal multiple choice + lock mechanism
    diskusi.html         ← Forum diskusi + seed post

js/frontend/fellow-dashboard/
  ai-python-basic.js     ← Semua logic: latihan save/edit/delete, kuis submit/score/lock, diskusi post/seed, Pyodide init

DIUBAH:
  js/router.js           ← 4 route + init call (3 tempat)
  ai-fundamentals.html   ← Card 2: button → link
  index.html             ← CSS cache buster + JS reference
  css/.../modules.css    ← Tambah CSS untuk .py-playground, .py-editor, .py-run, .pyodide-status
```

---

## 3. ROUTE REGISTRATION (3 tempat di router.js)

```js
// 1. routes object
"/participant-ai-python": "ai-fundamental/02-python-untuk-ai/materi.html",
"/participant-ai-python-practice": "ai-fundamental/02-python-untuk-ai/latihan.html",
"/participant-ai-python-quiz": "ai-fundamental/02-python-untuk-ai/kuis.html",
"/participant-ai-python-discussion": "ai-fundamental/02-python-untuk-ai/diskusi.html",

// 2. participantDashboardPages array
"/participant-ai-python",
"/participant-ai-python-practice",
"/participant-ai-python-quiz",
"/participant-ai-python-discussion",

// 3. handleRouting() init call — SEBELUM catch-all startsWith("/participant-ai-lab-")
if (path.startsWith("/participant-ai-python")) {
    window.initFellowDashboardPage("modules");
    if (path === "...-practice") window.initAiPythonBasic();
    if (path === "...-quiz") window.initAiPythonQuiz();
    if (path === "...-discussion") window.initAiPythonDiscussion();
}
```

---

## 4. PYODIDE — CARA KERJA

**Latihan page** punya 5 interactive playground yang menjalankan Python asli di browser.

### Init flow:
1. Halaman load → `initAiPythonBasic()` dipanggil router
2. Panggil `loadPyodide()` — tampil `Memuat Python runtime...` dengan loading bar animasi
3. Setelah siap (5-8 detik pertama, 0 detik jika cached) → status berubah `ready` + semua Run button enable
4. Klik Run → `pyodideInstance.runPythonAsync()` + stdout capture → output tampil di bawah
5. Klik Reset → kembalikan kode ke original

### Fungsi-fungsi:
```
startPyodide()      — init Pyodide, loading bar animation
runCode(playId)     — capture stdout + stderr, eksekusi kode, tampil output
enableAllPlaygrounds() — enable semua Run button setelah Pyodide siap
```

### localStorage keys:
| Key | Isi |
|---|---|
| `heraiAiPythonPractice` | Jawaban reflektif (JSON) |
| `heraiAiPythonQuizDone` | `"true"` setelah submit kuis |
| `heraiAiPythonQuizScore` | Skor kuis (string number) |
| `heraiAiPythonDiscussion` | Thread diskusi (JSON array) |

---

## 5. DESIGN — PINK THEME

Semua komponen pakai design system HerAI:
- Primary accent: `var(--fellow-pink, #f63392)`
- Border: `var(--fellow-line, rgba(244,143,188,.26))`
- Background: `#fff7fb` / `#fff0f7`
- Font: Plus Jakarta Sans (heading), SF Mono/Space Mono (code)

### Komponen Pyodide CSS (di modules.css):
- `.py-playground` — container playground (white bg, pink border, 14px radius)
- `.py-editor` — code textarea (mono font, no border, no outline)
- `.py-run` — pink pill button
- `.py-reset` — outline button
- `.py-output` — dark terminal output (bg `#1e1e2e`, green text)
- `.pyodide-status` — loading bar (pink pulse animation → green saat ready)

---

## 6. POLA — IKUTI MENTOR

Pattern yang dipakai identik dengan modul 01 (Pengantar AI):
- Sidebar + breadcrumb + hero + tabs + right panel + nav footer
- Materi → Latihan → Kuis → Diskusi (flow kiri ke kanan)
- Kuis submit → localStorage flag → unlock konten berikutnya
- Diskusi punya seed post + reply mechanism

**Bedanya:** Latihan di 02 punya Pyodide playground (interactive), 01 cuma textarea reflektif.

---

## 7. NAVIGASI

```
http://localhost:3000/#/participant-ai-fundamentals    ← Hub (klik card 2)
http://localhost:3000/#/participant-ai-python           ← Materi
http://localhost:3000/#/participant-ai-python-practice   ← Latihan + Pyodide
http://localhost:3000/#/participant-ai-python-quiz       ← Kuis
http://localhost:3000/#/participant-ai-python-discussion ← Diskusi
```

---

## 8. NEXT — MODUL 03

Modul 03 tinggal copy pola yang sama:
```
ai-fundamental/03-konsep-ai-modern/
  materi.html, latihan.html, kuis.html, diskusi.html
```
Register 4 route di router.js (copy dari Python block, ganti nama), update ai-fundamentals.html card 3.

---

## 9. RULES

1. ❌ JANGAN edit `gas/Code.gs`, `render.yaml`, `signaling/main.go`
2. ✅ Selalu scope CSS: ikuti existing class di `modules.css`
3. ✅ Cache buster setiap edit JS: bump `?v=`
4. ✅ Test Playwright setelah perubahan
5. ✅ 0 emoji — semua FontAwesome icons
6. ✅ Commit per modul: `feat(ai-fundamental): modul 03 — konsep AI modern`

---

*Last updated: 2026-07-04*  
*Branch: design*  
*Status: Modul 02 selesai — 4 halaman + Pyodide interactive playground*
