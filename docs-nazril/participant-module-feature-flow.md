# Dokumentasi Alur Fitur Modul Participant

Dokumen ini menjelaskan alur fitur `Modul` di dashboard participant HerAI. Fokusnya adalah flow dari halaman katalog modul, interaksi katalog, routing ke course aktif, dan pola pengembangan modul baru.

## Scope Fitur

Fitur Modul berada di participant dashboard:

- Route utama: `#/participant-modules`
- File utama: `pages/frontend/fellow-dashboard/modules.html`
- CSS utama: `css/frontend/fellow-dashboard/modules.css`
- Initializer utama: `initModuleInteractions()` di `js/frontend/fellow-dashboard/settings.js`
- Router utama: `js/router.js`

Fitur ini tidak berdiri sendiri sebagai aplikasi terpisah. Semua halaman modul dimuat oleh SPA router ke dalam `#app-content`.

## Ringkasan Alur User

1. Peserta masuk dashboard participant.
2. Peserta klik menu `Modul` di sidebar.
3. Router memuat `pages/frontend/fellow-dashboard/modules.html`.
4. `initFellowDashboardPage("modules")` dijalankan oleh router.
5. `settings.js` menjalankan `initModuleInteractions()`.
6. Peserta melihat:
   - topbar Modul
   - tab Semua Modul, Foundation Phase, Specialization Track
   - ringkasan progres
   - AI Lab Course Catalog
   - 6 Specialization Tracks
   - panel kanan progres, jadwal, resource, dan bantuan
7. Peserta memilih course card.
8. Jika course sudah aktif, peserta diarahkan ke route course/lesson.
9. Jika course belum aktif, card masih mengarah ke `#/participant-modules` sebagai placeholder.

## Struktur Halaman Modul

```text
section.fellow-dashboard.fellow-modules-page
  aside.fellow-sidebar
    nav.fellow-menu

  main.fellow-main
    header.fellow-topbar.module-topbar

    div.module-layout
      div.module-content
        div.module-tabs
        section.module-stat-grid
        section#moduleCatalogPanel.module-panel.ai-lab-catalog
          div.module-filter-bar
          div.course-category-scroll
            div.course-category
              div.course-card-grid[data-course-group]
                article.course-card
        section#specializationTrackPanel.module-panel.specialization-panel
          div.specialization-grid

      aside.module-right
        section.progress-card
        section.schedule-card
        section.resource-card
        section.module-help-card
```

## Komponen Utama

| Komponen | Class/Selector | Fungsi |
|---|---|---|
| Shell halaman | `.fellow-dashboard.fellow-modules-page` | Menandai halaman sebagai area modul participant. |
| Topbar | `.module-topbar` | Header halaman Modul, search, notifikasi, dan user button. |
| Layout utama | `.module-layout` | Grid dua kolom: konten utama dan panel kanan. |
| Konten utama | `.module-content` | Berisi tab, statistik, katalog course, dan specialization track. |
| Panel kanan | `.module-right` | Ringkasan progres, jadwal, resource, bantuan. |
| Tab modul | `[data-module-tab]` | Shortcut scroll ke semua modul, foundation, atau specialization. |
| Filter katalog | `[data-course-filter]` | Filter kategori course di AI Lab Course Catalog. |
| Panel collapse | `[data-collapse-panel]` | Minimize/expand panel katalog atau specialization. |
| Course card | `.course-card` | Card course; seluruh card bisa diklik menuju link utama di dalam card. |
| Scroll area katalog | `.course-category-scroll` | Area scroll khusus untuk daftar kategori course. |

## Alur Inisialisasi

Route `#/participant-modules` didefinisikan di `js/router.js`:

```js
"/participant-modules": "/pages/frontend/fellow-dashboard/modules.html"
```

Setelah HTML dimuat, router menjalankan:

```js
window.initFellowDashboardPage("modules");
```

Di `settings.js`, `initFellowDashboardPage("modules")` memanggil:

```js
initModuleInteractions();
```

`initModuleInteractions()` melakukan 4 hal:

1. Menandai halaman dengan `data-module-ready`.
2. Membuat seluruh area `.course-card` bisa diklik jika card punya link.
3. Mengaktifkan tab `[data-module-tab]` untuk scroll ke bagian katalog atau specialization.
4. Mengaktifkan filter `[data-course-filter]` dan collapse panel `[data-collapse-panel]`.

## Alur Interaksi Katalog

### Klik Course Card

Setiap `.course-card` dibaca oleh `initModuleInteractions()`.

Jika card memiliki elemen `<a>`, klik di area card akan memicu link tersebut selama target klik bukan `a`, `button`, `input`, atau `textarea`.

Flow:

```text
Klik card
  -> cek link utama di dalam card
  -> jika klik bukan pada elemen interaktif lain
  -> link.click()
  -> hash route berubah
  -> router memuat halaman tujuan
```

### Tab Modul

Tab memakai atribut `data-module-tab`:

| Value | Efek |
|---|---|
| `all` | Scroll ke area tab/katalog awal. |
| `foundation` | Scroll ke `#moduleCatalogPanel`. |
| `specialization` | Scroll ke `#specializationTrackPanel`. |

Tab ini tidak melakukan filtering data. Fungsinya navigasi cepat di dalam halaman.

### Filter Course Catalog

Filter memakai atribut `data-course-filter`:

| Filter | Target `data-course-group` |
|---|---|
| `all` | Semua kategori tampil. |
| `foundation` | Foundation & Core AI. |
| `generative` | Generative & Multimodal AI. |
| `engineering` | Data & Engineering Domains. |
| `business` | Business & Industry Applications. |

Logic filter:

```text
Klik filter
  -> filter aktif diberi class active
  -> setiap .course-category dicek data-course-group
  -> kategori disembunyikan jika group tidak cocok
```

### Collapse Panel

Tombol collapse memakai `data-collapse-panel`.

Flow:

```text
Klik tombol collapse
  -> cari panel by id
  -> toggle class is-collapsed
  -> update aria-expanded
  -> icon chevron-up/chevron-down ikut berubah
```

Panel yang aktif saat ini:

- `#moduleCatalogPanel`
- `#specializationTrackPanel`

## Course Catalog

Katalog menampilkan 26 course dalam 4 kategori besar.

### Foundation & Core AI

| Course | Status Route | Route |
|---|---|---|
| AI Fundamentals & Advanced | Aktif | `#/participant-ai-fundamentals` |
| Math for AI | Placeholder | `#/participant-modules` |
| Machine Learning | Aktif | `#/participant-ai-lab-ml` |
| Deep Learning | Placeholder | `#/participant-modules` |
| Reinforcement Learning | Placeholder | `#/participant-modules` |

### Generative & Multimodal AI

| Course | Status Route | Route |
|---|---|---|
| Generative AI | Placeholder dari katalog | `#/participant-modules` |
| LLM | Placeholder | `#/participant-modules` |
| VLM | Placeholder | `#/participant-modules` |
| Multimodal LLM | Placeholder | `#/participant-modules` |
| Agentic AI | Placeholder | `#/participant-modules` |

Catatan: route `#/participant-ai-lab-gen` sudah ada di router untuk overview Generative AI, tetapi card katalog saat ini masih mengarah ke placeholder.

### Data & Engineering Domains

| Course | Status Route | Route |
|---|---|---|
| Computer Vision | Aktif | `#/participant-ai-lab-cv` |
| NLP | Aktif | `#/participant-ai-lab-nlp` |
| Bioinformatics | Placeholder | `#/participant-modules` |
| Data Engineering | Placeholder | `#/participant-modules` |
| Data Science | Placeholder | `#/participant-modules` |
| Infrastructure | Placeholder | `#/participant-modules` |
| Deployment | Placeholder | `#/participant-modules` |
| Front-end | Placeholder | `#/participant-modules` |
| Back-end | Placeholder | `#/participant-modules` |

### Business & Industry Applications

Semua course di kategori ini masih placeholder ke `#/participant-modules`:

- Business Insight
- People & Business Mgt
- AI for Culture
- AI for Healthcare
- UI/UX Design Thinking
- AI for Manufacturing
- AI for Geospatial

## Specialization Tracks

Panel `6 Specialization Tracks` menampilkan track:

- Computer Vision
- Speech Recognition
- NLP & LLM
- MLOps & Deployment
- Multimodal LLM
- Medical & Biology AI

Saat ini semua tombol `Pilih Track` masih mengarah ke `#/participant-modules`.

## Route Course Aktif

### AI Fundamentals & Advanced

Hub:

```text
#/participant-ai-fundamentals
```

Sub route aktif:

```text
#/participant-ai-intro
#/participant-ai-intro-practice
#/participant-ai-intro-quiz
#/participant-ai-intro-discussion
#/participant-ai-history
#/participant-ai-types
#/participant-ai-components
#/participant-ai-applications
#/participant-ai-summary
#/participant-ai-python
#/participant-ai-python-practice
#/participant-ai-python-quiz
#/participant-ai-python-discussion
```

Detail flow course ini dicatat di:

```text
docs/ai-fundamental-advanced-module-flow.md
```

### NLP

Overview:

```text
#/participant-ai-lab-nlp
```

Lesson aktif:

```text
#/participant-ai-lab-tokenization
#/participant-ai-lab-preprocessing
#/participant-ai-lab-pos-ner
#/participant-ai-lab-bow
#/participant-ai-lab-tfidf
```

### Machine Learning

Overview:

```text
#/participant-ai-lab-ml
#/participant-ai-lab-machine-learning
```

Lesson aktif:

```text
#/participant-ai-lab-ml-intro
#/participant-ai-lab-ml-hypothesis
#/participant-ai-lab-ml-vc-dim
#/participant-ai-lab-ml-bias-variance
```

### Computer Vision

Overview:

```text
#/participant-ai-lab-cv
```

Lesson aktif:

```text
#/participant-ai-lab-cv-cnn-intro
#/participant-ai-lab-cv-cnn-why
#/participant-ai-lab-cv-cnn-relu
#/participant-ai-lab-cv-filtering-kernels
#/participant-ai-lab-cv-cnn-fc
#/participant-ai-lab-cv-cnn-hands
#/participant-ai-lab-cv-cnn-arch
#/participant-ai-lab-cv-cnn-arch-builder
#/participant-ai-lab-cv-morph
#/participant-ai-lab-cv-opencv
#/participant-ai-lab-cv-pixel
```

### Generative AI

Route overview tersedia:

```text
#/participant-ai-lab-gen
```

Namun card katalog `Generative AI` saat ini belum diarahkan ke route tersebut.

## File dan Tanggung Jawab

| File | Tanggung jawab |
|---|---|
| `pages/frontend/fellow-dashboard/modules.html` | Markup halaman katalog modul, course card, filter, tabs, specialization, panel kanan. |
| `css/frontend/fellow-dashboard/modules.css` | Semua style modul, course card, lesson layout, quiz, discussion, Pyodide, responsive modul. |
| `js/frontend/fellow-dashboard/settings.js` | Sidebar state, active nav, module interactions, dashboard data, AI Fundamental modul 01 helper. |
| `js/router.js` | Route map, participant dashboard route list, route aliases, initializer per route. |
| `index.html` | Registrasi CSS/JS global SPA dan cache buster. |

## Pola Menambahkan Course Baru

Gunakan pola ini jika course baru mau diaktifkan dari katalog.

1. Siapkan halaman tujuan:
   - overview course, atau
   - lesson langsung.
2. Tambahkan route di `js/router.js`:
   - object `routes`
   - list `participantDashboardPages`
   - block initializer di `handleRouting()`
3. Jika route butuh JS khusus, buat initializer global, misalnya:

```js
window.initAiLabExample = function() {
    // init course/lesson
};
```

4. Tambahkan `<script>` di `index.html` jika file JS baru.
5. Update card di `modules.html`:

```html
<a href="#/participant-ai-lab-example">Mulai <i class="fas fa-arrow-right"></i></a>
```

6. Pastikan route init khusus ditempatkan sebelum catch-all yang lebih umum.
7. Test klik card dari `#/participant-modules`, bukan hanya buka route langsung.

## Pola Menambahkan Kategori Course

Jika menambah kategori baru di AI Lab Course Catalog:

1. Tambahkan tombol filter:

```html
<button type="button" data-course-filter="new-group">Nama Filter</button>
```

2. Tambahkan `.course-category`.
3. Pastikan `.course-card-grid` punya `data-course-group="new-group"`.
4. Semua card di kategori tersebut akan otomatis mengikuti filter.

## State

Halaman katalog modul saat ini tidak menyimpan state filter/tab/collapse ke `localStorage`. Semua interaksi bersifat ephemeral dan reset saat reload.

State belajar per course disimpan di masing-masing modul/lesson, misalnya:

- AI Fundamental: `heraiAiIntroQuizDone`, `heraiAiIntroPracticeAnswers`
- Python untuk AI: `heraiAiPythonQuizDone`, `heraiAiPythonCurrentChapter`
- AI Lab lesson: mengikuti initializer JS masing-masing lesson

## Responsive dan Scroll

Skema layout Modul:

- `.module-topbar` sticky di atas area modul.
- `.module-layout` memakai dua kolom pada desktop.
- `.module-right` sticky pada desktop.
- `.course-category-scroll` adalah area scroll khusus untuk daftar kategori course.
- Pada viewport kecil, layout turun menjadi satu kolom dan scroll kembali mengikuti flow mobile.

Jangan memindahkan scroll ke seluruh body jika hanya daftar course yang panjang. Area scroll yang diharapkan adalah konten katalog course, bukan topbar atau panel kanan.

## Aturan Aman

- Jangan edit `Website-Portofolio-Chen/`; folder itu hanya referensi.
- Jangan mengubah styling global dashboard dari fitur modul.
- Jangan mengubah route fitur lain saat menambah course baru.
- CSS modul tetap di `modules.css` atau selector yang scoped ke `.fellow-modules-page`.
- Gunakan FontAwesome icon, bukan emoji.
- Jika edit JS/CSS yang direferensikan `index.html`, update cache buster.
- Untuk course AI Lab, route `participant-ai-lab-*` harus diproses sebelum catch-all `participant-ai-*`.

## Smoke Test Manual

Jalankan:

```bash
node server.js
```

Buka:

```text
http://localhost:3000/#/participant-modules
```

Checklist:

- Sidebar menandai menu Modul sebagai aktif.
- Klik tab `Foundation Phase` scroll ke `AI Lab Course Catalog`.
- Klik tab `Specialization Track` scroll ke `6 Specialization Tracks`.
- Filter `Foundation`, `Generative`, `Engineering`, `Business` hanya menampilkan kategori yang sesuai.
- Tombol collapse panel mengubah `aria-expanded` dan icon.
- Klik card aktif membuka route tujuan:
  - AI Fundamentals & Advanced
  - Machine Learning
  - Computer Vision
  - NLP
- Klik card placeholder tetap berada di halaman modul.
- Area `course-category-scroll` bisa discroll tanpa menggeser topbar.
