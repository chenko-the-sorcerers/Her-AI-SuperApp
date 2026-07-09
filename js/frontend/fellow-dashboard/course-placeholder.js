(function () {
    const DEFAULT_MODULES = [
        "Overview konsep dan istilah penting",
        "Workflow dasar dan contoh penerapan",
        "Risiko, evaluasi, dan best practice",
        "Mini project atau studi kasus"
    ];

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

    const COURSE_SCAFFOLDS = {
        "/participant-ai-lab-math": {
            title: "Math for AI",
            category: "Foundation & Core AI",
            icon: "fas fa-square-root-variable",
            status: "Under-development",
            summary: "Fondasi matematika untuk memahami representasi data, optimisasi model, probabilitas, dan evaluasi AI.",
            modules: ["Linear Algebra", "Statistics", "Probability", "Calculus", "Optimization", "Case Study"]
        },
        "/participant-ai-lab-deep-learning": {
            title: "Deep Learning",
            category: "Foundation & Core AI",
            icon: "fas fa-layer-group",
            status: "Placeholder route",
            summary: "Course untuk memahami neural network modern, training loop, regularization, dan arsitektur deep learning.",
            modules: ["Neural Network Basics", "Training & Backpropagation", "CNN/RNN Overview", "Transformer Basics", "Regularization"]
        },
        "/participant-ai-lab-reinforcement-learning": {
            title: "Reinforcement Learning",
            category: "Foundation & Core AI",
            icon: "fas fa-gamepad",
            status: "Placeholder route",
            summary: "Course tentang agent, environment, reward, policy, value function, dan decision optimization.",
            modules: ["Agent & Environment", "Reward and Policy", "Value Function", "Exploration vs Exploitation", "Case Study"]
        },
        "/participant-ai-lab-gen": {
            title: "Generative AI",
            category: "Generative & Multimodal AI",
            icon: "fas fa-wand-magic-sparkles",
            status: "Under-development",
            summary: "Course untuk memahami prompting, diffusion, generation pipeline, evaluasi output, dan creative AI workflow.",
            modules: ["Generative AI Overview", "Prompting Workflow", "Diffusion & GAN Basics", "Output Evaluation", "Creative Workflow"]
        },
        "/participant-ai-lab-llm": {
            title: "LLM",
            category: "Generative & Multimodal AI",
            icon: "fas fa-message",
            status: "Placeholder route",
            summary: "Course tentang transformer, instruction tuning, RAG, fine-tuning, dan deployment large language model.",
            modules: ["Transformer Recap", "Prompting & Instruction", "RAG Basics", "Fine-tuning Overview", "Deployment Notes"]
        },
        "/participant-ai-lab-vlm": {
            title: "VLM",
            category: "Generative & Multimodal AI",
            icon: "fas fa-eye",
            status: "Placeholder route",
            summary: "Course untuk memahami vision-language model, image-text alignment, captioning, dan visual reasoning.",
            modules: ["Image-Text Alignment", "Captioning", "Visual Question Answering", "Evaluation", "Use Cases"]
        },
        "/participant-ai-lab-multimodal-llm": {
            title: "Multimodal LLM",
            category: "Generative & Multimodal AI",
            icon: "fas fa-cubes",
            status: "Placeholder route",
            summary: "Course tentang model yang menggabungkan teks, gambar, audio, video, dan structured context.",
            modules: ["Multimodal Inputs", "Cross-modal Learning", "Fusion Strategies", "Evaluation", "Product Patterns"]
        },
        "/participant-ai-lab-agentic-ai": {
            title: "Agentic AI",
            category: "Generative & Multimodal AI",
            icon: "fas fa-robot",
            status: "Placeholder route",
            summary: "Course untuk memahami tool use, planning, memory, workflow orchestration, dan evaluasi AI agents.",
            modules: ["Agent Loop", "Tool Use", "Planning", "Memory", "Agent Evaluation"]
        },
        "/participant-ai-lab-bioinformatics": {
            title: "Bioinformatics",
            category: "Data & Engineering Domains",
            icon: "fas fa-dna",
            status: "Placeholder route",
            summary: "Course tentang genomics, protein analysis, computational biology, dan aplikasi AI medis.",
            modules: ["Bio Data Basics", "Genomics Overview", "Protein Analysis", "Medical AI Risks", "Case Study"]
        },
        "/participant-ai-lab-data-engineering": {
            title: "Data Engineering",
            category: "Data & Engineering Domains",
            icon: "fas fa-database",
            status: "Placeholder route",
            summary: "Course untuk membangun pipeline data, ETL, warehouse, lakehouse, orchestration, dan quality control.",
            modules: ["Data Pipeline", "ETL/ELT", "Warehouse & Lakehouse", "Orchestration", "Data Quality"]
        },
        "/participant-ai-lab-data-science": {
            title: "Data Science",
            category: "Data & Engineering Domains",
            icon: "fas fa-chart-line",
            status: "Placeholder route",
            summary: "Course tentang analytics, experimentation, visualization, modeling, dan insight generation.",
            modules: ["Exploratory Analysis", "Experimentation", "Visualization", "Modeling", "Insight Storytelling"]
        },
        "/participant-ai-lab-infrastructure": {
            title: "Infrastructure",
            category: "Data & Engineering Domains",
            icon: "fas fa-server",
            status: "Placeholder route",
            summary: "Course tentang cloud, GPU environment, serving stack, observability, dan scaling sistem AI.",
            modules: ["Compute Basics", "GPU Environment", "Serving Stack", "Observability", "Scaling"]
        },
        "/participant-ai-lab-deployment": {
            title: "Deployment",
            category: "Data & Engineering Domains",
            icon: "fas fa-cloud-arrow-up",
            status: "Placeholder route",
            summary: "Course tentang packaging, API serving, model release, monitoring, dan rollback strategy.",
            modules: ["Packaging", "API Serving", "Release Strategy", "Monitoring", "Rollback"]
        },
        "/participant-ai-lab-front-end": {
            title: "Front-end",
            category: "Data & Engineering Domains",
            icon: "fas fa-code",
            status: "Placeholder route",
            summary: "Course untuk membangun interface, dashboard, visualization, accessibility, dan AI product UX.",
            modules: ["AI Interface Patterns", "Dashboard Basics", "Visualization", "Accessibility", "Frontend Integration"]
        },
        "/participant-ai-lab-back-end": {
            title: "Back-end",
            category: "Data & Engineering Domains",
            icon: "fas fa-gears",
            status: "Placeholder route",
            summary: "Course tentang API, database, auth, queues, integration, dan scalable service design untuk produk AI.",
            modules: ["API Design", "Database & Auth", "Queues", "Integrations", "Service Scaling"]
        },
        "/participant-ai-lab-business-insight": {
            title: "Business Insight",
            category: "Business & Industry Applications",
            icon: "fas fa-lightbulb",
            status: "Placeholder route",
            summary: "Course tentang AI analytics, market insight, decision support, dan business intelligence.",
            modules: ["Business Question", "Metric Design", "Insight Pipeline", "Decision Support", "Executive Storytelling"]
        },
        "/participant-ai-lab-people-business-mgt": {
            title: "People & Business Mgt",
            category: "Business & Industry Applications",
            icon: "fas fa-people-group",
            status: "Placeholder route",
            summary: "Course tentang AI adoption, team process, change management, dan operational strategy.",
            modules: ["AI Adoption", "Team Workflow", "Change Management", "Governance", "Operational Strategy"]
        },
        "/participant-ai-lab-ai-culture": {
            title: "AI for Culture",
            category: "Business & Industry Applications",
            icon: "fas fa-palette",
            status: "Placeholder route",
            summary: "Course tentang AI untuk arsip budaya, kreativitas, bahasa lokal, dan cultural preservation.",
            modules: ["Cultural Data", "Language Preservation", "Creative Workflow", "Ethics", "Case Study"]
        },
        "/participant-ai-lab-healthcare": {
            title: "AI for Healthcare",
            category: "Business & Industry Applications",
            icon: "fas fa-heart-pulse",
            status: "Placeholder route",
            summary: "Course tentang clinical decision support, imaging, patient analytics, dan ethical healthcare AI.",
            modules: ["Healthcare Data", "Clinical Decision Support", "Medical Imaging", "Patient Analytics", "Safety & Ethics"]
        },
        "/participant-ai-lab-ui-ux": {
            title: "UI/UX Design Thinking",
            category: "Business & Industry Applications",
            icon: "fas fa-pen-nib",
            status: "Placeholder route",
            summary: "Course tentang human-centered AI, prototyping, research, journey mapping, dan usability test.",
            modules: ["User Research", "AI Journey Mapping", "Prototyping", "Usability Test", "Design Evaluation"]
        },
        "/participant-ai-lab-manufacturing": {
            title: "AI for Manufacturing",
            category: "Business & Industry Applications",
            icon: "fas fa-industry",
            status: "Placeholder route",
            summary: "Course tentang predictive maintenance, quality inspection, robotics, dan process optimization.",
            modules: ["Manufacturing Data", "Predictive Maintenance", "Quality Inspection", "Robotics", "Process Optimization"]
        },
        "/participant-ai-lab-geospatial": {
            title: "AI for Geospatial",
            category: "Business & Industry Applications",
            icon: "fas fa-map-location-dot",
            status: "Placeholder route",
            summary: "Course tentang remote sensing, GIS intelligence, spatial modeling, dan location analytics.",
            modules: ["Geospatial Data", "Remote Sensing", "GIS Intelligence", "Spatial Modeling", "Location Analytics"]
        },
        "/participant-specialization-computer-vision": {
            title: "Computer Vision Track",
            category: "Specialization Track",
            icon: "fas fa-eye",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk image processing, object detection, recognition, dan visual intelligence.",
            modules: ["CV Course Review", "OpenCV Practice", "Detection Models", "Vision Transformers", "Portfolio Project"]
        },
        "/participant-specialization-speech-recognition": {
            title: "Speech Recognition Track",
            category: "Specialization Track",
            icon: "fas fa-wave-square",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk voice processing, audio analysis, ASR, dan text-to-speech.",
            modules: ["Audio Basics", "Feature Extraction", "ASR Pipeline", "TTS Overview", "Speech Product Case"]
        },
        "/participant-specialization-nlp-llm": {
            title: "NLP & LLM Track",
            category: "Specialization Track",
            icon: "fas fa-message",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk text generation, semantic understanding, retrieval, dan RAG.",
            modules: ["NLP Foundation", "LLM Workflow", "RAG System", "Evaluation", "Capstone"]
        },
        "/participant-specialization-mlops-deployment": {
            title: "MLOps & Deployment Track",
            category: "Specialization Track",
            icon: "fas fa-server",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk cloud computing, model deployment, monitoring, dan scalability.",
            modules: ["MLOps Overview", "Model Serving", "CI/CD", "Monitoring", "Production Incident Drill"]
        },
        "/participant-specialization-multimodal-llm": {
            title: "Multimodal LLM Track",
            category: "Specialization Track",
            icon: "fas fa-cubes",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk VLM, cross-modal learning, multimodal UX, dan world models.",
            modules: ["Multimodal Foundation", "VLM Use Cases", "Cross-modal Evaluation", "Product UX", "Capstone"]
        },
        "/participant-specialization-medical-biology-ai": {
            title: "Medical & Biology AI Track",
            category: "Specialization Track",
            icon: "fas fa-dna",
            status: "Track scaffold",
            summary: "Jalur spesialisasi untuk genomics, protein analysis, computational biology, dan medical AI.",
            modules: ["Bio Data Foundation", "Clinical AI", "Protein & Genomics", "Safety Review", "Capstone"]
        }
    };

    function getPath() {
        return (window.location.hash || "").replace("#", "").split("?")[0] || "/participant-modules";
    }

    function getActivity() {
        const query = (window.location.hash || "").split("?")[1] || "";
        const params = new URLSearchParams(query);
        const activity = params.get("activity") || "materi";
        return Object.prototype.hasOwnProperty.call(ACTIVITY_CONTENT, activity) ? activity : "materi";
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

    function renderModules(modules) {
        const list = document.querySelector("[data-course-scaffold-modules]");
        if (!list) return;
        list.innerHTML = modules.map((item, index) => `
            <li>
                <span>${index + 1}</span>
                <div>
                    <strong>${item}</strong>
                    <p>Draft topik awal. Tim konten bisa mengganti judul, urutan, dan kedalaman materi sesuai kebutuhan course.</p>
                </div>
            </li>
        `).join("");
    }

    function updateActivityTabs(basePath, activeActivity) {
        Object.keys(ACTIVITY_CONTENT).forEach(key => {
            document.querySelectorAll(`[data-course-scaffold-tab="${key}"]`).forEach(node => {
                node.setAttribute("href", key === "materi" ? `#${basePath}` : `#${basePath}?activity=${key}`);
                node.classList.toggle("active", key === activeActivity);
            });
        });
    }

    function renderActivityContent(activity) {
        const content = ACTIVITY_CONTENT[activity] || ACTIVITY_CONTENT.materi;
        setText("[data-course-scaffold-activity-title]", content.title);
        setText("[data-course-scaffold-activity-copy]", content.copy);
        setText("[data-course-scaffold-section-label]", content.label);
        setText("[data-course-scaffold-section-title]", content.heading);
    }

    window.initCoursePlaceholder = function () {
        const page = document.querySelector(".course-scaffold-page");
        if (!page) return;
        const currentPath = getPath();
        const currentActivity = getActivity();

        const data = COURSE_SCAFFOLDS[currentPath] || {
            title: "Course Scaffold",
            category: "Course Catalog",
            icon: "fas fa-layer-group",
            status: "Scaffold",
            summary: "Outline awal course sudah disiapkan untuk diisi tim konten.",
            modules: DEFAULT_MODULES
        };

        setText("[data-course-scaffold-title]", data.title);
        setText("[data-course-scaffold-category]", data.category);
        setText("[data-course-scaffold-heading]", data.title);
        setText("[data-course-scaffold-summary]", data.summary);
        setText("[data-course-scaffold-status]", data.status);
        setText("[data-course-scaffold-count]", String((data.modules || DEFAULT_MODULES).length));
        setIcon("[data-course-scaffold-icon]", data.icon);
        setIcon("[data-course-scaffold-visual-icon]", data.icon);
        renderModules(data.modules || DEFAULT_MODULES);
        renderActivityContent(currentActivity);
        updateActivityTabs(currentPath, currentActivity);
    };
})();
