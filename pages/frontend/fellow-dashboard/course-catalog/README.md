# Fellow Dashboard Course Catalog

Folder ini mengikuti hierarchy produk yang terlihat di UI `pages/frontend/fellow-dashboard/modules.html`.

```text
course-catalog/
  foundation-core-ai/
    ai-fundamentals-advanced/
    math-for-ai/
    machine-learning/
    deep-learning/
    reinforcement-learning/

  generative-multimodal-ai/
    generative-ai/
    llm/
    vlm/
    multimodal-llm/
    agentic-ai/

  data-engineering-domains/
    computer-vision/
    nlp/
    bioinformatics/
    data-engineering/
    data-science/
    infrastructure/
    deployment/
    front-end/
    back-end/

  business-industry-applications/
    business-insight/
    people-business-mgt/
    ai-for-culture/
    ai-for-healthcare/
    ui-ux-design-thinking/
    ai-for-manufacturing/
    ai-for-geospatial/
```

Aturan hierarchy:

- Category/domain adalah folder level pertama.
- Course adalah folder level kedua.
- Module/chapter dan activity course disimpan di dalam folder course.
- URL peserta tetap diatur oleh `js/router.js`; struktur folder tidak harus sama dengan hash route.

Saat ini `foundation-core-ai/machine-learning/` sudah menjadi course aktif. Folder course lain masih scaffold agar struktur codebase sesuai katalog UI dan siap diisi bertahap.
