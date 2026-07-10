(function () {
    const ACTIVITY_ORDER = ["materi", "latihan", "kuis", "diskusi"];
    const ACTIVITY_CONTENT = {
        materi: {
            title: "Materi scaffold siap diisi tim konten",
            copy: "Tab Materi menampilkan outline module/chapter awal. Saat course siap, ganti scaffold ini ke file course final atau lanjutkan dari struktur ini.",
            label: "Draft module/chapter",
            heading: "Outline materi awal"
        },
        latihan: {
            title: "Latihan belum final, tapi slot activity sudah disiapkan",
            copy: "Gunakan tab ini sebagai placeholder latihan agar struktur course konsisten tanpa mengirim peserta ke halaman under-development.",
            label: "Draft latihan",
            heading: "Rencana latihan"
        },
        kuis: {
            title: "Kuis belum final, tapi slot evaluasi sudah disiapkan",
            copy: "Tab ini menandai tempat kuis nanti dipasang. Route tetap berada di course scaffold supaya peserta tidak kehilangan konteks.",
            label: "Draft evaluasi",
            heading: "Rencana kuis"
        },
        diskusi: {
            title: "Diskusi belum final, tapi ruang activity sudah disiapkan",
            copy: "Tab ini menjaga pola Materi, Latihan, Kuis, Diskusi tetap lengkap sambil menunggu forum course final.",
            label: "Draft diskusi",
            heading: "Rencana diskusi"
        }
    };

    function slugify(value) {
        return String(value)
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    function makeModule(title, summary) {
        const slug = slugify(title);
        return {
            slug,
            title,
            summary,
            materi: `Draft materi untuk ${title}: konsep utama, istilah penting, contoh penerapan, dan checkpoint pemahaman.`,
            latihan: `Draft latihan untuk ${title}: skenario praktik terarah yang bisa dikerjakan peserta secara bertahap.`,
            kuis: `Draft kuis untuk ${title}: evaluasi singkat untuk menguji pemahaman konsep dan penerapan.`,
            diskusi: `Draft diskusi untuk ${title}: pertanyaan pemantik, refleksi, dan ruang tanya jawab dengan tim.`
        };
    }

    function modules(items) {
        return items.map(item => makeModule(item[0], item[1]));
    }

    const COURSE_SCAFFOLDS = {
        "/participant-ai-reasoning": {
            title: "Reasoning",
            category: "AI Fundamentals",
            icon: "fas fa-code-branch",
            status: "Module scaffold",
            summary: "Module untuk memahami cara sistem AI melakukan penalaran, planning, tool use, dan validasi langkah.",
            modules: modules([
                ["Reasoning Overview", "Konsep penalaran AI, batasan model, dan pola reasoning pada task sehari-hari."],
                ["Planning and Decomposition", "Cara memecah tujuan menjadi langkah kecil yang dapat dieksekusi dan diperiksa."],
                ["Tool Use Workflow", "Pola penggunaan tool, input-output contract, dan guardrail saat AI beraksi."],
                ["Reasoning Quality Review", "Cara menilai koherensi, trace, error, dan reliability dari hasil reasoning."]
            ])
        },
        "/participant-ai-evaluation": {
            title: "Evaluation",
            category: "AI Fundamentals",
            icon: "fas fa-clipboard-check",
            status: "Module scaffold",
            summary: "Module untuk mengevaluasi output AI dari sisi akurasi, reliability, fairness, benchmark, dan kualitas produk.",
            modules: modules([
                ["Evaluation Overview", "Tujuan evaluasi AI, metrik dasar, dan perbedaan evaluasi model dengan evaluasi produk."],
                ["Benchmark and Test Set", "Cara menyusun dataset uji, rubric, baseline, dan benchmark yang relevan."],
                ["Reliability and Bias", "Pemeriksaan konsistensi output, bias, hallucination, dan risiko operasional."],
                ["Evaluation Report", "Format laporan evaluasi yang bisa dipakai tim konten, produk, dan stakeholder."]
            ])
        },
        "/participant-ai-evolution": {
            title: "Evolution of AI",
            category: "AI Fundamentals",
            icon: "fas fa-timeline",
            status: "Module scaffold",
            summary: "Module tentang perkembangan AI dari symbolic AI, machine learning klasik, deep learning, hingga generative AI.",
            modules: modules([
                ["Symbolic AI Era", "Perkembangan rule-based system, expert system, dan batasan pendekatan simbolik."],
                ["Machine Learning Era", "Peralihan ke pembelajaran berbasis data, fitur, model statistik, dan evaluasi."],
                ["Deep Learning Era", "Peran neural network, representation learning, akselerasi compute, dan data besar."],
                ["Generative AI Era", "Kemunculan foundation model, multimodal AI, agentic workflow, dan arah masa depan."]
            ])
        },
        "/participant-ai-lab-deep-learning": {
            title: "Deep Learning",
            category: "Foundation & Core AI",
            icon: "fas fa-layer-group",
            status: "Placeholder route",
            summary: "Course untuk memahami neural network modern, training loop, regularization, dan arsitektur deep learning.",
            modules: modules([
                ["Neural Network Basics", "Neuron, layer, activation, loss, dan intuisi dasar deep learning."],
                ["Training and Backpropagation", "Training loop, gradient descent, backpropagation, dan debugging training."],
                ["CNN and RNN Overview", "Gambaran arsitektur untuk data visual, sequential, dan temporal."],
                ["Transformer Basics", "Self-attention, embedding, positional encoding, dan pola transformer modern."],
                ["Regularization", "Overfitting, dropout, normalization, augmentation, dan strategi generalisasi."]
            ])
        },
        "/participant-ai-lab-reinforcement-learning": {
            title: "Reinforcement Learning",
            category: "Foundation & Core AI",
            icon: "fas fa-gamepad",
            status: "Placeholder route",
            summary: "Course tentang agent, environment, reward, policy, value function, dan decision optimization.",
            modules: modules([
                ["Agent and Environment", "Komponen dasar RL, state, action, environment, dan episode."],
                ["Reward and Policy", "Desain reward, policy, dan konsekuensi reward shaping."],
                ["Value Function", "Value, Q-value, Bellman intuition, dan estimasi keputusan."],
                ["Exploration vs Exploitation", "Tradeoff eksplorasi, eksploitasi, dan strategi belajar agent."],
                ["RL Case Study", "Studi kasus penerapan RL pada simulasi, game, atau optimisasi."]
            ])
        },
        "/participant-ai-lab-gen": {
            title: "Generative AI",
            category: "Generative & Multimodal AI",
            icon: "fas fa-wand-magic-sparkles",
            status: "Under-development",
            summary: "Course untuk memahami prompting, diffusion, generation pipeline, evaluasi output, dan creative AI workflow.",
            modules: modules([
                ["Generative AI Overview", "Konsep model generatif, use case, risiko, dan workflow dasar."],
                ["Prompting Workflow", "Struktur prompt, iterasi instruksi, konteks, dan evaluasi respons."],
                ["Diffusion and GAN Basics", "Intuisi generation model untuk gambar dan media sintetis."],
                ["Output Evaluation", "Rubric untuk menilai kualitas, factuality, keamanan, dan kesesuaian output."],
                ["Creative Workflow", "Pipeline kreatif dari ide, variasi, kurasi, hingga delivery."]
            ])
        },
        "/participant-ai-lab-llm": {
            title: "LLM",
            category: "Generative & Multimodal AI",
            icon: "fas fa-message",
            status: "Placeholder route",
            summary: "Course tentang transformer, instruction tuning, RAG, fine-tuning, dan deployment large language model.",
            modules: modules([
                ["Transformer Recap", "Recap transformer sebagai fondasi large language model."],
                ["Prompting and Instruction", "Instruksi, format output, few-shot example, dan system behavior."],
                ["RAG Basics", "Retrieval augmented generation, chunking, embedding, dan grounding."],
                ["Fine-tuning Overview", "Kapan fine-tuning dibutuhkan, data training, dan batasannya."],
                ["Deployment Notes", "Serving, latency, cost, monitoring, dan safety untuk LLM."]
            ])
        },
        "/participant-ai-lab-vlm": {
            title: "VLM",
            category: "Generative & Multimodal AI",
            icon: "fas fa-eye",
            status: "Placeholder route",
            summary: "Course untuk memahami vision-language model, image-text alignment, captioning, dan visual reasoning.",
            modules: modules([
                ["Image-Text Alignment", "Cara model menghubungkan representasi visual dan bahasa."],
                ["Captioning", "Pembuatan caption, deskripsi gambar, dan batasan interpretasi visual."],
                ["Visual Question Answering", "Menjawab pertanyaan berbasis gambar dan konteks visual."],
                ["VLM Evaluation", "Metrik dan rubric evaluasi output vision-language."],
                ["VLM Use Cases", "Use case VLM untuk pendidikan, dokumentasi, aksesibilitas, dan produk."]
            ])
        },
        "/participant-ai-lab-multimodal-llm": {
            title: "Multimodal LLM",
            category: "Generative & Multimodal AI",
            icon: "fas fa-cubes",
            status: "Placeholder route",
            summary: "Course tentang model yang menggabungkan teks, gambar, audio, video, dan structured context.",
            modules: modules([
                ["Multimodal Inputs", "Jenis input multimodal dan cara merancang konteks lintas media."],
                ["Cross-modal Learning", "Intuisi pembelajaran lintas teks, gambar, audio, dan video."],
                ["Fusion Strategies", "Strategi menggabungkan sinyal dari beberapa modality."],
                ["Multimodal Evaluation", "Cara menguji akurasi, grounding, dan konsistensi output multimodal."],
                ["Product Patterns", "Pola produk untuk chatbot visual, assistant, dan workflow multimodal."]
            ])
        },
        "/participant-ai-lab-agentic-ai": {
            title: "Agentic AI",
            category: "Generative & Multimodal AI",
            icon: "fas fa-robot",
            status: "Placeholder route",
            summary: "Course untuk memahami tool use, planning, memory, workflow orchestration, dan evaluasi AI agents.",
            modules: modules([
                ["Agent Loop", "Observe, plan, act, reflect, dan batasan loop agent."],
                ["Tool Use", "Pemilihan tool, validasi argumen, dan handling error."],
                ["Planning", "Task decomposition, dependency, dan kontrol eksekusi."],
                ["Memory", "Short-term memory, long-term memory, dan risiko state persistence."],
                ["Agent Evaluation", "Evaluasi reliability, cost, safety, dan task success."]
            ])
        },
        "/participant-ai-lab-bioinformatics": {
            title: "Bioinformatics",
            category: "Data & Engineering Domains",
            icon: "fas fa-dna",
            status: "Placeholder route",
            summary: "Course tentang genomics, protein analysis, computational biology, dan aplikasi AI medis.",
            modules: modules([
                ["Bio Data Basics", "Jenis data biologis dan format umum untuk analisis komputasional."],
                ["Genomics Overview", "Sequence, variant, annotation, dan workflow genomics."],
                ["Protein Analysis", "Representasi protein, structure prediction, dan analisis fungsi."],
                ["Medical AI Risks", "Risiko bias, validasi klinis, privasi, dan interpretabilitas."],
                ["Bioinformatics Case Study", "Studi kasus pipeline AI untuk biological insight."]
            ])
        },
        "/participant-ai-lab-data-engineering": {
            title: "Data Engineering",
            category: "Data & Engineering Domains",
            icon: "fas fa-database",
            status: "Placeholder route",
            summary: "Course untuk membangun pipeline data, ETL, warehouse, lakehouse, orchestration, dan quality control.",
            modules: modules([
                ["Data Pipeline", "Alur ingest, transform, store, serve, dan monitoring data."],
                ["ETL and ELT", "Perbandingan ETL/ELT, batch, streaming, dan transformasi."],
                ["Warehouse and Lakehouse", "Model penyimpanan data untuk analytics dan AI workload."],
                ["Orchestration", "Scheduling, dependency, retry, dan observability pipeline."],
                ["Data Quality", "Validasi schema, completeness, freshness, dan lineage."]
            ])
        },
        "/participant-ai-lab-data-science": {
            title: "Data Science",
            category: "Data & Engineering Domains",
            icon: "fas fa-chart-line",
            status: "Placeholder route",
            summary: "Course tentang analytics, experimentation, visualization, modeling, dan insight generation.",
            modules: modules([
                ["Exploratory Analysis", "Memahami data dengan statistik deskriptif, segmentasi, dan anomaly check."],
                ["Experimentation", "Hipotesis, A/B testing, metric, dan interpretasi hasil eksperimen."],
                ["Visualization", "Memilih chart, membangun narasi visual, dan menghindari misleading chart."],
                ["Modeling", "Baseline model, feature, validation, dan interpretasi model sederhana."],
                ["Insight Storytelling", "Menyusun insight yang actionable untuk keputusan bisnis."]
            ])
        },
        "/participant-ai-lab-infrastructure": {
            title: "Infrastructure",
            category: "Data & Engineering Domains",
            icon: "fas fa-server",
            status: "Placeholder route",
            summary: "Course tentang cloud, GPU environment, serving stack, observability, dan scaling sistem AI.",
            modules: modules([
                ["Compute Basics", "CPU, GPU, memory, storage, dan kebutuhan compute AI."],
                ["GPU Environment", "Setup runtime, dependency, driver, dan resource management."],
                ["Serving Stack", "Komponen serving model, API, queue, dan cache."],
                ["Observability", "Log, metric, trace, alerting, dan incident visibility."],
                ["Scaling", "Horizontal scaling, load, autoscaling, dan cost control."]
            ])
        },
        "/participant-ai-lab-deployment": {
            title: "Deployment",
            category: "Data & Engineering Domains",
            icon: "fas fa-cloud-arrow-up",
            status: "Placeholder route",
            summary: "Course tentang packaging, API serving, model release, monitoring, dan rollback strategy.",
            modules: modules([
                ["Packaging", "Menyiapkan artifact, dependency, image, dan konfigurasi runtime."],
                ["API Serving", "Endpoint, schema, auth, timeout, dan error contract."],
                ["Release Strategy", "Versioning, staging, canary, dan approval sebelum rilis."],
                ["Monitoring", "Monitoring kualitas model, performa API, dan biaya."],
                ["Rollback", "Strategi rollback saat model atau service bermasalah."]
            ])
        },
        "/participant-ai-lab-front-end": {
            title: "Front-end",
            category: "Data & Engineering Domains",
            icon: "fas fa-code",
            status: "Placeholder route",
            summary: "Course untuk membangun interface, dashboard, visualization, accessibility, dan AI product UX.",
            modules: modules([
                ["AI Interface Patterns", "Pola UI untuk chat, assistant, copilots, dan review workflow."],
                ["Dashboard Basics", "Menyusun dashboard yang mudah dipindai dan dipakai berulang."],
                ["Visualization", "Menampilkan output, metric, dan data AI secara jelas."],
                ["Accessibility", "Aksesibilitas, keyboard flow, contrast, dan state feedback."],
                ["Frontend Integration", "Integrasi API AI, loading state, error state, dan streaming."]
            ])
        },
        "/participant-ai-lab-back-end": {
            title: "Back-end",
            category: "Data & Engineering Domains",
            icon: "fas fa-gears",
            status: "Placeholder route",
            summary: "Course tentang API, database, auth, queues, integration, dan scalable service design untuk produk AI.",
            modules: modules([
                ["API Design", "Contract endpoint, validation, pagination, dan error handling."],
                ["Database and Auth", "Model data, akses pengguna, permission, dan audit trail."],
                ["Queues", "Background job, retry, scheduling, dan async workload."],
                ["Integrations", "Integrasi model provider, webhook, dan third-party tools."],
                ["Service Scaling", "Scaling service, cache, rate limit, dan reliability."]
            ])
        },
        "/participant-ai-lab-business-insight": {
            title: "Business Insight",
            category: "Business & Industry Applications",
            icon: "fas fa-lightbulb",
            status: "Placeholder route",
            summary: "Course tentang AI analytics, market insight, decision support, dan business intelligence.",
            modules: modules([
                ["Business Question", "Merumuskan pertanyaan bisnis yang bisa dijawab dengan data dan AI."],
                ["Metric Design", "Mendesain metric, leading indicator, dan guardrail metric."],
                ["Insight Pipeline", "Mengubah data menjadi insight dengan workflow yang repeatable."],
                ["Decision Support", "Menggunakan AI untuk membantu prioritas dan keputusan operasional."],
                ["Executive Storytelling", "Menyampaikan rekomendasi secara singkat, jelas, dan berbasis bukti."]
            ])
        },
        "/participant-ai-lab-people-business-mgt": {
            title: "People & Business Mgt",
            category: "Business & Industry Applications",
            icon: "fas fa-people-group",
            status: "Placeholder route",
            summary: "Course tentang AI adoption, team process, change management, dan operational strategy.",
            modules: modules([
                ["AI Adoption", "Strategi adopsi AI yang realistis untuk tim dan organisasi."],
                ["Team Workflow", "Integrasi AI ke proses kerja tanpa menghilangkan akuntabilitas."],
                ["Change Management", "Mengelola resistensi, training, communication, dan rollout."],
                ["Governance", "Policy, risk review, permission, dan audit penggunaan AI."],
                ["Operational Strategy", "Menentukan prioritas use case, biaya, dan dampak operasional."]
            ])
        },
        "/participant-ai-lab-ai-culture": {
            title: "AI for Culture",
            category: "Business & Industry Applications",
            icon: "fas fa-palette",
            status: "Placeholder route",
            summary: "Course tentang AI untuk arsip budaya, kreativitas, bahasa lokal, dan cultural preservation.",
            modules: modules([
                ["Cultural Data", "Mengelola data budaya, metadata, konteks, dan provenance."],
                ["Language Preservation", "AI untuk dokumentasi bahasa lokal dan variasi linguistik."],
                ["Creative Workflow", "Workflow kreatif yang menghormati konteks budaya."],
                ["Culture Ethics", "Consent, ownership, representasi, dan risiko apropriasi."],
                ["Culture Case Study", "Studi kasus preservasi atau eksplorasi budaya dengan AI."]
            ])
        },
        "/participant-ai-lab-healthcare": {
            title: "AI for Healthcare",
            category: "Business & Industry Applications",
            icon: "fas fa-heart-pulse",
            status: "Placeholder route",
            summary: "Course tentang clinical decision support, imaging, patient analytics, dan ethical healthcare AI.",
            modules: modules([
                ["Healthcare Data", "Jenis data kesehatan, privasi, consent, dan quality requirement."],
                ["Clinical Decision Support", "AI sebagai pendukung keputusan klinis dan batas tanggung jawabnya."],
                ["Medical Imaging", "Use case imaging, diagnosis support, dan validasi model visual."],
                ["Patient Analytics", "Segmentasi pasien, prediksi risiko, dan insight operasional."],
                ["Safety and Ethics", "Safety, bias, audit, dan validasi sebelum penggunaan klinis."]
            ])
        },
        "/participant-ai-lab-ui-ux": {
            title: "UI/UX Design Thinking",
            category: "Business & Industry Applications",
            icon: "fas fa-pen-nib",
            status: "Placeholder route",
            summary: "Course tentang human-centered AI, prototyping, research, journey mapping, dan usability test.",
            modules: modules([
                ["User Research", "Riset kebutuhan, pain point, konteks, dan perilaku pengguna."],
                ["AI Journey Mapping", "Memetakan titik AI membantu, membatasi, atau perlu human review."],
                ["Prototyping", "Membuat prototype AI workflow untuk validasi cepat."],
                ["Usability Test", "Menilai kejelasan, trust, control, dan error recovery."],
                ["Design Evaluation", "Rubric evaluasi UX untuk produk berbasis AI."]
            ])
        },
        "/participant-ai-lab-manufacturing": {
            title: "AI for Manufacturing",
            category: "Business & Industry Applications",
            icon: "fas fa-industry",
            status: "Placeholder route",
            summary: "Course tentang predictive maintenance, quality inspection, robotics, dan process optimization.",
            modules: modules([
                ["Manufacturing Data", "Sensor, produksi, quality log, dan data operasional pabrik."],
                ["Predictive Maintenance", "Prediksi kerusakan, anomaly detection, dan preventive action."],
                ["Quality Inspection", "Computer vision dan automation untuk pemeriksaan kualitas."],
                ["Robotics", "AI pada robot, kontrol, safety, dan human-machine interaction."],
                ["Process Optimization", "Optimisasi proses, bottleneck, throughput, dan cost efficiency."]
            ])
        },
        "/participant-ai-lab-geospatial": {
            title: "AI for Geospatial",
            category: "Business & Industry Applications",
            icon: "fas fa-map-location-dot",
            status: "Placeholder route",
            summary: "Course tentang remote sensing, GIS intelligence, spatial modeling, dan location analytics.",
            modules: modules([
                ["Geospatial Data", "Raster, vector, coordinate system, dan sumber data geospasial."],
                ["Remote Sensing", "Satellite imagery, preprocessing, dan analisis citra bumi."],
                ["GIS Intelligence", "Spatial join, overlay, layer, dan insight berbasis lokasi."],
                ["Spatial Modeling", "Model prediksi dan klasifikasi berbasis data spasial."],
                ["Location Analytics", "Analitik lokasi untuk bisnis, lingkungan, dan kebijakan."]
            ])
        },
        "/participant-specialization-computer-vision": {
            title: "Computer Vision Track",
            category: "Specialization Track",
            icon: "fas fa-eye",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk image processing, object detection, recognition, dan visual intelligence.",
            modules: modules([
                ["CV Course Review", "Review konsep computer vision dan readiness menuju spesialisasi."],
                ["OpenCV Practice", "Praktik image processing, filtering, dan transformasi dasar."],
                ["Detection Models", "Object detection, segmentation, dan use case industri."],
                ["Vision Transformers", "Konsep transformer untuk image dan multimodal vision."],
                ["CV Portfolio Project", "Proyek portofolio untuk menunjukkan kemampuan computer vision."]
            ])
        },
        "/participant-specialization-speech-recognition": {
            title: "Speech Recognition Track",
            category: "Specialization Track",
            icon: "fas fa-wave-square",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk voice processing, audio analysis, ASR, dan text-to-speech.",
            modules: modules([
                ["Audio Basics", "Waveform, sample rate, spectrogram, dan fitur audio."],
                ["Feature Extraction", "MFCC, embedding audio, dan preprocessing suara."],
                ["ASR Pipeline", "Automatic speech recognition dari audio ke teks."],
                ["TTS Overview", "Text-to-speech, voice quality, dan synthesis workflow."],
                ["Speech Product Case", "Studi kasus produk berbasis suara dan evaluasinya."]
            ])
        },
        "/participant-specialization-nlp-llm": {
            title: "NLP & LLM Track",
            category: "Specialization Track",
            icon: "fas fa-message",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk text generation, semantic understanding, retrieval, dan RAG.",
            modules: modules([
                ["NLP Foundation", "Token, embedding, classification, entity, dan semantic similarity."],
                ["LLM Workflow", "Prompt, instruction, context, dan structured output."],
                ["RAG System", "Retrieval, chunking, grounding, dan answer synthesis."],
                ["NLP Evaluation", "Metrik dan human evaluation untuk aplikasi bahasa."],
                ["NLP Capstone", "Proyek akhir NLP/LLM berbasis kebutuhan nyata."]
            ])
        },
        "/participant-specialization-mlops-deployment": {
            title: "MLOps & Deployment Track",
            category: "Specialization Track",
            icon: "fas fa-server",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk cloud computing, model deployment, monitoring, dan scalability.",
            modules: modules([
                ["MLOps Overview", "Lifecycle model dari eksperimen sampai produksi."],
                ["Model Serving", "Serving pattern, API, batch inference, dan latency."],
                ["CI/CD", "Pipeline release, testing, artifact, dan environment promotion."],
                ["MLOps Monitoring", "Monitoring drift, quality, service health, dan cost."],
                ["Production Incident Drill", "Latihan menangani incident model atau service di produksi."]
            ])
        },
        "/participant-specialization-multimodal-llm": {
            title: "Multimodal LLM Track",
            category: "Specialization Track",
            icon: "fas fa-cubes",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk VLM, cross-modal learning, multimodal UX, dan world models.",
            modules: modules([
                ["Multimodal Foundation", "Fondasi teks, gambar, audio, video, dan structured context."],
                ["VLM Use Cases", "Use case vision-language untuk produk dan analisis."],
                ["Cross-modal Evaluation", "Evaluasi keselarasan lintas modality dan grounding."],
                ["Product UX", "Desain UX untuk input dan output multimodal."],
                ["Multimodal Capstone", "Proyek akhir multimodal dengan evaluasi terstruktur."]
            ])
        },
        "/participant-specialization-medical-biology-ai": {
            title: "Medical & Biology AI Track",
            category: "Specialization Track",
            icon: "fas fa-dna",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk genomics, protein analysis, computational biology, dan medical AI.",
            modules: modules([
                ["Bio Data Foundation", "Data biologis dan medis sebagai input sistem AI."],
                ["Clinical AI", "Clinical support, validation, dan governance untuk AI kesehatan."],
                ["Protein and Genomics", "Analisis protein, genomics, dan biological sequence."],
                ["Safety Review", "Review safety, bias, privacy, dan interpretability."],
                ["Medical Biology Capstone", "Proyek akhir medical/biology AI dengan laporan evaluasi."]
            ])
        }
    };

    function getRouteState() {
        const hash = window.location.hash || "";
        const parts = hash.replace("#", "").split("?");
        const path = parts[0] || "/participant-modules";
        const params = new URLSearchParams(parts[1] || "");
        const activity = ACTIVITY_ORDER.includes(params.get("activity")) ? params.get("activity") : "materi";
        const moduleSlug = params.get("module") || "";
        return { path, params, activity, moduleSlug };
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function setText(selector, value) {
        document.querySelectorAll(selector).forEach(node => {
            node.textContent = value;
        });
    }

    function setIcon(selector, iconClass) {
        document.querySelectorAll(selector).forEach(node => {
            node.className = iconClass;
        });
    }

    function buildHref(basePath, moduleSlug, activity) {
        const params = new URLSearchParams();
        if (moduleSlug) params.set("module", moduleSlug);
        if (activity !== "materi") params.set("activity", activity);
        const query = params.toString();
        return `#${basePath}${query ? `?${query}` : ""}`;
    }

    function findModule(course, moduleSlug) {
        if (!moduleSlug) return null;
        return (course.modules || []).find(item => item.slug === moduleSlug) || null;
    }

    function renderModules(course, activeActivity) {
        const list = document.querySelector("[data-course-scaffold-modules]");
        if (!list) return;
        list.innerHTML = (course.modules || []).map((item, index) => `
            <li>
                <span>${index + 1}</span>
                <div>
                    <strong>${escapeHtml(item.title)}</strong>
                    <p>${escapeHtml(item.summary)}</p>
                    <a class="lesson-action" href="${buildHref(getRouteState().path, item.slug, activeActivity)}">Buka module</a>
                </div>
            </li>
        `).join("");
    }

    function renderModuleActivity(moduleData, activeActivity) {
        const list = document.querySelector("[data-course-scaffold-modules]");
        if (!list) return;
        const activityText = moduleData[activeActivity] || moduleData.materi;
        list.innerHTML = `
            <li>
                <span>1</span>
                <div>
                    <strong>${escapeHtml(moduleData.title)}</strong>
                    <p>${escapeHtml(moduleData.summary)}</p>
                </div>
            </li>
            <li>
                <span>2</span>
                <div>
                    <strong>${escapeHtml(ACTIVITY_CONTENT[activeActivity].heading)}</strong>
                    <p>${escapeHtml(activityText)}</p>
                </div>
            </li>
        `;
    }

    function updateActivityTabs(basePath, moduleSlug, activeActivity) {
        ACTIVITY_ORDER.forEach(key => {
            document.querySelectorAll(`[data-course-scaffold-tab="${key}"]`).forEach(node => {
                node.setAttribute("href", buildHref(basePath, moduleSlug, key));
                node.classList.toggle("active", key === activeActivity);
            });
        });
    }

    function renderActivityContent(course, moduleData, activity) {
        const content = ACTIVITY_CONTENT[activity] || ACTIVITY_CONTENT.materi;
        if (moduleData) {
            setText("[data-course-scaffold-activity-title]", `${content.title}: ${moduleData.title}`);
            setText("[data-course-scaffold-activity-copy]", moduleData[activity] || moduleData.materi);
            setText("[data-course-scaffold-section-label]", content.label);
            setText("[data-course-scaffold-section-title]", moduleData.title);
            renderModuleActivity(moduleData, activity);
            return;
        }

        setText("[data-course-scaffold-activity-title]", content.title);
        setText("[data-course-scaffold-activity-copy]", `${content.copy} Pilih salah satu module ${course.title} untuk membuka detail activity.`);
        setText("[data-course-scaffold-section-label]", "Overview course");
        setText("[data-course-scaffold-section-title]", "Daftar module scaffold");
        renderModules(course, activity);
    }

    window.initCoursePlaceholder = function () {
        const page = document.querySelector(".course-scaffold-page");
        if (!page) return;

        const state = getRouteState();
        const data = COURSE_SCAFFOLDS[state.path] || {
            title: "Course Scaffold",
            category: "Course Catalog",
            icon: "fas fa-layer-group",
            status: "Scaffold",
            summary: "Outline awal course sudah disiapkan untuk diisi tim konten.",
            modules: modules([
                ["Overview konsep dan istilah penting", "Draft overview untuk fondasi course."],
                ["Workflow dasar dan contoh penerapan", "Draft workflow praktik untuk peserta."],
                ["Risiko, evaluasi, dan best practice", "Draft evaluasi dan mitigasi risiko."],
                ["Mini project atau studi kasus", "Draft studi kasus untuk mengunci pemahaman."]
            ])
        };
        const currentModule = findModule(data, state.moduleSlug);

        setText("[data-course-scaffold-title]", data.title);
        setText("[data-course-scaffold-category]", data.category);
        setText("[data-course-scaffold-heading]", currentModule ? currentModule.title : data.title);
        setText("[data-course-scaffold-summary]", currentModule ? currentModule.summary : data.summary);
        setText("[data-course-scaffold-status]", currentModule ? "Module scaffold" : data.status);
        setText("[data-course-scaffold-count]", String((data.modules || []).length));
        setIcon("[data-course-scaffold-icon]", data.icon);
        setIcon("[data-course-scaffold-visual-icon]", data.icon);
        renderActivityContent(data, currentModule, state.activity);
        updateActivityTabs(state.path, currentModule ? currentModule.slug : "", state.activity);
    };
})();
