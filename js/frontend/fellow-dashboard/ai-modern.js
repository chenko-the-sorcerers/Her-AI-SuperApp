window.initAiModernMateri = function () {
    var container = document.getElementById("modern-chapter-container");
    if (!container) return;

    var STORAGE_KEY_CHAPTER = "heraiAiModernCurrentChapter";
    var currentChapter = parseInt(localStorage.getItem(STORAGE_KEY_CHAPTER) || "1", 10);
    var totalChapters = 4;

    var btnPrev = document.getElementById("btn-prev-chapter");
    var btnNext = document.getElementById("btn-next-chapter");
    var btnFinish = document.getElementById("btn-finish-materi");

    if (!Number.isFinite(currentChapter) || currentChapter < 1 || currentChapter > totalChapters) {
        currentChapter = 1;
        localStorage.setItem(STORAGE_KEY_CHAPTER, "1");
    }

    function bindModernChapterInteractions() {
        container.querySelectorAll("[data-modern-reveal]").forEach(function (button) {
            button.addEventListener("click", function () {
                var panel = button.closest(".ai-modern-active");
                var feedback = panel ? panel.querySelector(".ai-modern-feedback") : null;
                if (!feedback) return;
                feedback.hidden = !feedback.hidden;
                button.textContent = feedback.hidden ? "Tampilkan feedback" : "Sembunyikan feedback";
            });
        });
    }

    function updateProgress(chapterNumber) {
        var listItems = document.querySelectorAll("#modern-sidebar-list li");
        listItems.forEach(function (li) {
            var chapter = parseInt(li.getAttribute("data-chapter") || "0", 10);
            var icon = li.querySelector("i");
            if (chapter === chapterNumber) {
                li.classList.add("active");
                if (icon) icon.className = "far fa-circle-play";
            } else if (chapter < chapterNumber) {
                li.classList.add("active");
                if (icon) icon.className = "fas fa-circle-check";
            } else {
                li.classList.remove("active");
                if (icon) icon.className = "far fa-circle";
            }
        });

        var progressValue = Math.round(((chapterNumber - 1) / totalChapters) * 100);
        var progressB = document.querySelector(".lesson-progress-mini b");
        var progressStrong = document.querySelector(".lesson-progress-mini strong");
        var progressText = document.querySelector(".lesson-progress-card p");
        if (progressB) progressB.style.setProperty("--value", progressValue + "%");
        if (progressStrong) progressStrong.textContent = progressValue + "%";
        if (progressText) progressText.textContent = (chapterNumber - 1) + " dari " + totalChapters + " materi selesai";
    }

    function loadChapter(chapterNumber) {
        container.innerHTML = '<div class="ai-modern-loading"><i class="fas fa-spinner fa-spin"></i><p>Memuat Topik ' + chapterNumber + "...</p></div>";

        var formattedNumber = chapterNumber < 10 ? "0" + chapterNumber : chapterNumber;
        var path = formattedNumber + "-materi.html";

        fetch("/pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/chapters/" + path)
            .then(function (res) {
                if (!res.ok) throw new Error("Not found");
                return res.text();
            })
            .then(function (html) {
                container.innerHTML = html;
                window.scrollTo({ top: 0, behavior: "smooth" });

                if (btnPrev) btnPrev.style.display = chapterNumber > 1 ? "inline-block" : "none";
                if (btnNext) btnNext.style.display = chapterNumber < totalChapters ? "inline-block" : "none";
                if (btnFinish) btnFinish.style.display = chapterNumber === totalChapters ? "inline-block" : "none";

                updateProgress(chapterNumber);
                bindModernChapterInteractions();
            })
            .catch(function (err) {
                container.innerHTML = '<div class="ai-modern-error"><i class="fas fa-triangle-exclamation"></i><p>Gagal memuat materi. Silakan coba lagi.</p></div>';
                console.error(err);
            });
    }

    if (btnPrev) {
        btnPrev.addEventListener("click", function () {
            if (currentChapter > 1) {
                currentChapter--;
                localStorage.setItem(STORAGE_KEY_CHAPTER, String(currentChapter));
                loadChapter(currentChapter);
            }
        });
    }

    if (btnNext) {
        btnNext.addEventListener("click", function () {
            if (currentChapter < totalChapters) {
                currentChapter++;
                localStorage.setItem(STORAGE_KEY_CHAPTER, String(currentChapter));
                loadChapter(currentChapter);
            }
        });
    }

    window.loadModernChapter = function (chapterNum) {
        if (chapterNum >= 1 && chapterNum <= totalChapters) {
            currentChapter = chapterNum;
            localStorage.setItem(STORAGE_KEY_CHAPTER, String(currentChapter));
            loadChapter(currentChapter);
        }
    };

    loadChapter(currentChapter);
};

(function () {
    var STORAGE = {
        practice: "heraiAiModernPractice",
        quizDone: "heraiAiModernQuizDone",
        quizScore: "heraiAiModernQuizScore",
        quizAnswers: "heraiAiModernQuizAnswers",
        discussion: "heraiAiModernDiscussion"
    };

    var PRACTICE_ITEMS = [
        ["foundation-layer-map", "Foundation Models", "Mengidentifikasi foundation model, adaptation layer, dan application layer.", "Universitas memakai API model bahasa, menambahkan dokumen akademik lewat retrieval, lalu membangun dashboard mahasiswa.", "Petakan mana foundation model, adaptation/context layer, dan application layer. Jelaskan dua risiko jika batas antar layer tidak dipahami.", ["foundation model teridentifikasi", "RAG/prompt/tool layer dijelaskan", "aplikasi end-to-end disebut", "risiko ditulis konkret"]],
        ["model-card-audit", "Foundation Models", "Membaca dan mengaudit model card di Hugging Face.", "Tim menemukan model open-weight yang terlihat populer untuk Bahasa Indonesia.", "Tulis checklist model card: intended use, out-of-scope use, language coverage, benchmark, limitations, license, hardware, dan safety notes.", ["intended use", "license", "bahasa Indonesia", "limitations", "hardware"]],
        ["deployment-matrix", "Foundation Models", "Membuat decision matrix API-hosted vs open-weight vs local.", "HerAI ingin assistant yang murah, privat, cepat, dan bisa memakai tool.", "Bandingkan tiga pendekatan deployment dengan kriteria privasi, biaya, latency, maintenance, customization, dan vendor dependency.", ["semua opsi dibandingkan", "trade-off jelas", "rekomendasi kontekstual"]],
        ["tokenization-id", "Transformer", "Eksperimen konseptual tokenisasi Bahasa Indonesia.", "Kalimat: Peserta fellowship mengunggah ulang tugasnya setelah mentor memberi revisi.", "Buat tokenisasi ilustratif, lalu jelaskan dampak token terhadap biaya, truncation, dan context window.", ["token bukan selalu kata", "dampak biaya", "dampak context"]],
        ["attention-walkthrough", "Transformer", "Menelusuri alur token ke embedding ke attention ke output.", "Model harus menjawab siapa yang meminta revisi pada kalimat panjang.", "Jelaskan alur token, embedding, positional information, Query/Key/Value, weighted context, dan output token.", ["QKV dijelaskan", "posisi disebut", "weighted context masuk"]],
        ["generation-config", "Transformer", "Membandingkan konfigurasi generation untuk tugas faktual dan kreatif.", "Tim punya konfigurasi A temperature rendah/top-p rendah dan B temperature lebih tinggi/top-p luas.", "Pilih konfigurasi untuk ringkasan kebijakan, caption kreatif, dan jawaban faktual. Jelaskan alasan.", ["tugas faktual stabil", "kreatif lebih leluasa", "risiko halusinasi disebut"]],
        ["tool-schema", "AI Agents", "Merancang dua tool schema untuk assistant fellowship.", "Assistant perlu membaca jadwal dan membuat draft pesan mentor.", "Tulis dua tool schema ringkas: nama, deskripsi, parameter wajib, error case, dan izin yang dibutuhkan.", ["schema jelas", "required parameter", "authorization", "error handling"]],
        ["agent-loop", "AI Agents", "Menyusun agent loop beserta stopping condition dan error recovery.", "Agent membantu peserta menemukan tugas yang belum selesai.", "Rancang goal, observe, decide, tool call, result, update state, stop condition, retry limit, dan escalation.", ["loop lengkap", "stop condition", "recovery", "human escalation"]],
        ["platform-agent-matrix", "AI Agents", "Membandingkan OpenAI Agents SDK, Anthropic tool use, Google ADK, dan LangChain.", "Tim ingin memilih pendekatan agent untuk prototype fellowship.", "Buat decision matrix berdasarkan tools, handoff, graph workflow, observability, human-in-the-loop, dan kompleksitas.", ["bukan promosi vendor", "berbasis kebutuhan", "observability masuk"]],
        ["rag-design", "Sistem AI", "Merancang RAG untuk pedoman fellowship.", "Assistant harus menjawab berdasarkan pedoman internal dan menampilkan sumber.", "Rancang pipeline documents, chunking, embeddings, vector index, retrieval, reranking, context assembly, generation, citation, dan fallback.", ["chunking", "metadata/access control", "citation", "fallback"]],
        ["deployment-patterns", "Sistem AI", "Membandingkan managed API, managed cloud, self-hosted, dan local deployment.", "HerAI perlu prototype cepat tetapi juga mempertimbangkan privasi dan biaya.", "Bandingkan empat pola deployment dan pilih pendekatan awal serta pendekatan production.", ["empat pola", "privacy", "cost", "maintenance"]],
        ["production-readiness", "Sistem AI", "Melakukan production-readiness audit.", "Arsitektur sengaja buruk: API key di frontend, satu model untuk semua tugas, retrieval tanpa access control, tool delete tanpa approval, tanpa logging dan evaluation set.", "Temukan minimal enam risiko dan tulis perbaikan pada layer security, retrieval, tool permission, observability, dan evaluation.", ["enam risiko", "perbaikan spesifik", "approval gate"]],
        ["capstone-herai-assistant", "Capstone", "Mendesain arsitektur HerAI Fellowship Assistant end-to-end.", "Assistant menjawab pertanyaan peserta, membaca pedoman, mengecek jadwal, dan membuat draft pesan. Tidak boleh mengubah data atau mengirim pesan tanpa approval staf.", "Isi architecture canvas: use case, model strategy, retrieval source, tools, permission, guardrails, approval gate, logging, evaluation, fallback, dan deployment approach.", ["end-to-end", "guardrail", "approval", "evaluation", "fallback"]]
    ];

    var QUIZ = [
        ["Foundation model paling tepat didefinisikan sebagai...", ["Model task-specific yang hanya bisa klasifikasi spam.", "Model dasar yang dilatih pada data luas dan dapat diadaptasi ke banyak tugas.", "Dashboard chatbot yang sudah punya tombol kirim.", "Dataset internal yang dipakai untuk retrieval."], 1, "Foundation model adalah basis umum yang dapat diadaptasi. Aplikasi AI berada di atasnya."],
        ["Sebuah chatbot memakai model via API dan dokumen internal lewat RAG. Mana yang merupakan AI application?", ["Model API saja.", "Dokumen PDF saja.", "Gabungan model, prompt, retrieval, workflow, UI, evaluasi, dan pengawasan.", "Embedding vector saja."], 2, "AI application adalah sistem end-to-end, bukan hanya model."],
        ["Mengapa open-weight tidak otomatis berarti sepenuhnya terbuka?", ["Karena bobot bisa tersedia tetapi data training dan proses alignment belum tentu dibuka.", "Karena open-weight selalu lebih mahal.", "Karena open-weight tidak bisa dipakai komersial dalam kondisi apa pun.", "Karena open-weight hanya bisa berjalan di browser."], 0, "Open-weight perlu tetap dibaca lisensi, model card, dan batasannya."],
        ["Kapan RAG lebih realistis daripada fine-tuning?", ["Saat pengetahuan sering berubah dan harus berbasis dokumen sumber.", "Saat ingin menghapus semua dokumen.", "Saat model tidak boleh menerima konteks.", "Saat jawaban tidak perlu sumber."], 0, "RAG cocok untuk knowledge base yang berubah dan perlu citation."],
        ["Decision matrix model sebaiknya memasukkan...", ["Popularitas model saja.", "Privasi, biaya, latency, bahasa, tool use, deployment, dan evaluasi.", "Warna logo vendor.", "Jumlah follower komunitas."], 1, "Pemilihan model adalah keputusan sistem, bukan kontes popularitas."],
        ["Tokenization pada LLM berarti...", ["Selalu memecah teks per kata utuh.", "Memecah teks menjadi unit yang diproses model, bisa kata, subword, atau tanda baca.", "Menghapus semua tanda baca.", "Menentukan role user di dashboard."], 1, "Token bisa berupa subword dan hasilnya berbeda antar model."],
        ["Embedding di dalam Transformer berfungsi untuk...", ["Mengubah token ID menjadi representasi vektor.", "Menyimpan API key.", "Mengirim email otomatis.", "Menghapus context window."], 0, "Embedding membuat token dapat diproses sebagai representasi numerik."],
        ["Mengapa positional information diperlukan?", ["Attention sendiri tidak otomatis mengetahui urutan token.", "Agar model selalu menolak prompt panjang.", "Agar token menjadi gambar.", "Agar database tidak perlu index."], 0, "Urutan perlu diberi sinyal melalui positional encoding atau variasinya."],
        ["Context window bukan long-term memory karena...", ["Ia hanya batas token dalam satu request, bukan penyimpanan permanen.", "Ia selalu menyimpan semua riwayat user selamanya.", "Ia menggantikan database.", "Ia hanya dipakai untuk CSS."], 0, "Memory harus dirancang eksplisit melalui state, database, retrieval, atau profile."],
        ["Untuk jawaban faktual, konfigurasi generation yang lebih aman biasanya...", ["Temperature rendah dan top-p lebih sempit.", "Temperature sangat tinggi dan top-p sangat luas.", "Tidak memakai stop condition apa pun.", "Mengacak output sebanyak mungkin."], 0, "Tugas faktual biasanya perlu output lebih stabil dan terkontrol."],
        ["Agent berbeda dari workflow deterministik karena...", ["Agent dapat memilih tindakan/tool dalam loop berdasarkan konteks.", "Agent selalu lebih murah.", "Agent tidak perlu logging.", "Agent tidak bisa memakai tool."], 0, "Agent punya loop pengambilan keputusan; workflow deterministik langkahnya ditentukan developer."],
        ["Tool schema yang baik minimal memuat...", ["Nama, deskripsi, parameter, validasi, dan izin.", "Warna tombol dan font.", "Nama vendor saja.", "Jumlah likes."], 0, "Tool schema harus jelas agar model dan sistem dapat mengeksekusi tool dengan aman."],
        ["Tindakan agent yang harus memerlukan approval manusia adalah...", ["Menghapus data peserta atau mengirim email massal.", "Membaca halaman bantuan publik.", "Menyusun draft yang belum dikirim.", "Menyarankan topik belajar."], 0, "Side effect yang berdampak nyata wajib gate approval."],
        ["Tool result grounding penting karena...", ["Agent bisa salah memilih tool, parameter, atau membaca hasil.", "Tool membuat semua jawaban otomatis benar.", "Tool menghapus kebutuhan evaluasi.", "Tool tidak pernah gagal."], 0, "Tool use tetap perlu validasi dan pembacaan hasil yang benar."],
        ["Metrik observability agent yang relevan adalah...", ["Tool success rate, latency, cost per successful task, human intervention rate.", "Jumlah warna di UI.", "Ukuran avatar.", "Jumlah menu sidebar."], 0, "Agent perlu trace dan metrik agar kegagalannya bisa dianalisis."],
        ["Modern AI system paling tepat dipahami sebagai...", ["Model saja.", "Model plus instructions, context, retrieval, tools, state, guardrails, evaluation, infrastructure, dan human oversight.", "Hanya prompt panjang.", "Hanya database vektor."], 1, "Kualitas sistem tidak hanya ditentukan model."],
        ["Kapan database query biasa lebih tepat daripada RAG?", ["Saat butuh data terstruktur deterministik seperti status pembayaran.", "Saat dokumen bebas perlu dirangkum.", "Saat sumber tidak punya struktur apa pun.", "Saat ingin jawaban kreatif."], 0, "Data terstruktur sering lebih aman dipanggil lewat query/API deterministik."],
        ["Risiko API key di frontend adalah...", ["Secret dapat diambil pengguna dan disalahgunakan.", "Model menjadi terlalu kecil.", "Context window bertambah otomatis.", "Retrieval menjadi lebih akurat."], 0, "Secret tidak boleh disimpan di HTML/JS frontend."],
        ["Human-in-the-loop berarti...", ["Manusia menyetujui sebelum aksi penting dijalankan.", "Manusia tidak pernah melihat sistem.", "Model selalu menolak tool.", "User interface tidak memiliki tombol."], 0, "Human-in-the-loop cocok untuk aksi yang punya dampak nyata."],
        ["Failure taxonomy membantu karena...", ["Kegagalan bisa terjadi di input, prompt, retrieval, model, tool, agent, validation, infrastructure, governance, atau human process.", "Semua kegagalan pasti berasal dari model.", "Logging tidak lagi diperlukan.", "Evaluasi cukup dilakukan sekali."], 0, "Melihat layer kegagalan mencegah diagnosis yang terlalu sempit."]
    ];

    var DISCUSSION_PROMPTS = [
        {
            title: "Foundation model sebagai infrastruktur bersama",
            context: "Organisasi kecil ingin memakai AI untuk layanan peserta, tetapi punya tim dan budget terbatas.",
            a: "Bangun model sendiri agar kontrol penuh.",
            b: "Pakai API atau open-weight model dan fokus pada aplikasi, evaluasi, serta data governance.",
            question: "Apakah organisasi kecil sebaiknya membangun model sendiri, memakai API, atau memakai open-weight model?",
            caseText: "Chatbot fellowship butuh Bahasa Indonesia, privasi data peserta, dan biaya terkendali."
        },
        {
            title: "Transformer dan batas context",
            context: "Model baru punya context window besar, tetapi dokumen kebijakan sering berubah.",
            a: "Context window besar cukup untuk semua kebutuhan.",
            b: "Retrieval, memory, dan database tetap diperlukan untuk sumber yang berubah dan terstruktur.",
            question: "Apakah context window besar dapat menggantikan retrieval, memory, dan database?",
            caseText: "Assistant harus menjawab berdasarkan pedoman terbaru dan tidak boleh memakai aturan lama."
        },
        {
            title: "Agent autonomy",
            context: "Agent dapat mengecek jadwal, membuat draft pesan, dan memanggil tool operasional.",
            a: "Agent boleh melakukan banyak aksi otomatis agar cepat.",
            b: "Aksi berdampak harus dibatasi dengan permission, logging, dan approval manusia.",
            question: "Tindakan apa yang boleh dilakukan agent tanpa approval manusia?",
            caseText: "Agent ingin mengirim pengumuman massal ke peserta setelah membaca kalender."
        },
        {
            title: "Sistem AI untuk fellowship",
            context: "HerAI Fellowship Assistant harus berguna, hemat biaya, menjaga privasi, dan mudah dirawat.",
            a: "Pakai model paling kuat untuk semua tugas.",
            b: "Gunakan routing, retrieval, caching, guardrails, dan evaluasi sesuai risiko tiap tugas.",
            question: "Bagaimana menyeimbangkan kemampuan, biaya, privasi, reliability, dan maintenance?",
            caseText: "Sistem harus menjawab pertanyaan peserta, membaca pedoman, cek jadwal, dan membuat draft pesan."
        }
    ];

    function safeJsonParse(value, fallback) {
        if (!value) return fallback;
        try {
            return JSON.parse(value);
        } catch (error) {
            return fallback;
        }
    }

    function saveJson(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function setStatus(selector, message, tone) {
        var status = document.querySelector(selector);
        if (!status) return;
        status.textContent = message;
        status.dataset.tone = tone || "neutral";
    }

    function readPractice() {
        var saved = safeJsonParse(localStorage.getItem(STORAGE.practice), null);
        if (!saved || typeof saved !== "object") return {};
        if (saved.answers && typeof saved.answers === "object") return saved.answers;
        return saved;
    }

    function renderChecklist(items) {
        return items.map(function (item) {
            return "<li><i class=\"fas fa-circle-check\"></i><span>" + escapeHtml(item) + "</span></li>";
        }).join("");
    }

    window.initAiModernBasic = function () {
        var root = document.getElementById("aiModernPracticeApp");
        var form = document.getElementById("aiModernPracticeForm");
        if (!root || !form) return;
        if (form.dataset.aiModernInitialized === "true") return;
        form.dataset.aiModernInitialized = "true";

        var answers = readPractice();

        root.innerHTML = PRACTICE_ITEMS.map(function (item, index) {
            var slug = item[0];
            var value = answers[slug] || "";
            return "<article class=\"practice-card ml-practice-card ai-modern-practice-item\" data-practice-item=\"" + slug + "\">" +
                "<div class=\"ml-card-top\"><span>" + (index + 1) + "</span><div><small>" + escapeHtml(item[1]) + "</small><h3>" + escapeHtml(item[2]) + "</h3><p>" + escapeHtml(item[3]) + "</p></div></div>" +
                "<div class=\"ai-modern-practice-body\">" +
                    "<p><strong>Instruksi:</strong> " + escapeHtml(item[4]) + "</p>" +
                    "<ul class=\"ai-modern-checklist\">" + renderChecklist(item[5]) + "</ul>" +
                    "<label><span>Jawabanmu</span><textarea name=\"" + slug + "\" rows=\"6\" placeholder=\"Tulis analisis, keputusan, dan alasanmu...\">" + escapeHtml(value) + "</textarea></label>" +
                    "<details><summary><i class=\"fas fa-lightbulb\"></i> Hint dan rubrik</summary><p>Jawaban kuat menyebut konteks kasus, trade-off, risiko, dan keputusan yang dapat diuji. Gunakan checklist sebagai rubrik minimum.</p></details>" +
                    "<div class=\"ml-feedback\" data-feedback-for=\"" + slug + "\"" + (value ? "" : " hidden") + "><i class=\"fas fa-circle-check\"></i><span>Jawaban tersimpan atau siap disimpan. Pastikan contohmu spesifik dan tidak membutuhkan API key.</span></div>" +
                "</div>" +
            "</article>";
        }).join("");

        function collectAnswers() {
            var next = {};
            form.querySelectorAll("textarea").forEach(function (field) {
                next[field.name] = field.value.trim();
            });
            return next;
        }

        function updateFeedback() {
            form.querySelectorAll("[data-feedback-for]").forEach(function (box) {
                var field = form.querySelector("[name=\"" + box.dataset.feedbackFor + "\"]");
                box.hidden = !(field && field.value.trim());
            });
            var completed = Object.values(collectAnswers()).filter(Boolean).length;
            var counter = document.getElementById("aiModernPracticeCounter");
            if (counter) counter.textContent = completed + "/" + PRACTICE_ITEMS.length + " latihan terisi";
        }

        function setReadonly(readonly) {
            form.querySelectorAll("textarea").forEach(function (field) {
                field.disabled = readonly;
            });
            form.classList.toggle("is-saved", readonly);
        }

        form.querySelectorAll("textarea").forEach(function (field) {
            field.addEventListener("input", updateFeedback);
        });

        var saveButton = form.querySelector("[data-practice-save]");
        var editButton = form.querySelector("[data-practice-edit]");
        var deleteButton = form.querySelector("[data-practice-delete]");

        if (saveButton) {
            saveButton.addEventListener("click", function () {
                saveJson(STORAGE.practice, { version: 2, updatedAt: new Date().toISOString(), answers: collectAnswers() });
                setReadonly(true);
                updateFeedback();
                setStatus("#aiModernPracticeStatus", "Latihan AI Modern tersimpan. Kamu bisa lanjut kuis atau edit lagi.", "success");
            });
        }

        if (editButton) {
            editButton.addEventListener("click", function () {
                setReadonly(false);
                setStatus("#aiModernPracticeStatus", "Mode edit aktif. Simpan ulang setelah mengubah jawaban.", "neutral");
            });
        }

        if (deleteButton) {
            deleteButton.addEventListener("click", function () {
                localStorage.removeItem(STORAGE.practice);
                form.querySelectorAll("textarea").forEach(function (field) { field.value = ""; });
                setReadonly(false);
                updateFeedback();
                setStatus("#aiModernPracticeStatus", "Jawaban latihan dihapus dari browser ini.", "neutral");
            });
        }

        updateFeedback();
        setStatus("#aiModernPracticeStatus", Object.keys(answers).length ? "Jawaban lama berhasil dipulihkan dari browsermu." : "Jawaban akan tersimpan di browsermu.", Object.keys(answers).length ? "success" : "neutral");
    };

    function getQuizState() {
        var savedAnswers = safeJsonParse(localStorage.getItem(STORAGE.quizAnswers), []);
        if (!Array.isArray(savedAnswers) || savedAnswers.length !== QUIZ.length) {
            localStorage.removeItem(STORAGE.quizDone);
            localStorage.removeItem(STORAGE.quizScore);
            localStorage.removeItem(STORAGE.quizAnswers);
            savedAnswers = Array(QUIZ.length).fill(null);
        }
        return {
            done: localStorage.getItem(STORAGE.quizDone) === "true",
            score: Number(localStorage.getItem(STORAGE.quizScore)) || 0,
            answers: savedAnswers,
            current: 0
        };
    }

    window.initAiModernQuiz = function () {
        var root = document.getElementById("aiModernQuizApp");
        var form = document.getElementById("aiModernQuizForm");
        if (!root || !form) return;
        if (form.dataset.aiModernInitialized === "true") return;
        form.dataset.aiModernInitialized = "true";

        var state = getQuizState();

        function answeredCount() {
            return state.answers.filter(function (answer) { return answer !== null && answer !== undefined; }).length;
        }

        function renderQuestion() {
            var item = QUIZ[state.current];
            var chosen = state.answers[state.current];
            var locked = state.done;
            root.innerHTML = "<div class=\"ai-modern-quiz-top\"><span>Soal " + (state.current + 1) + " dari " + QUIZ.length + "</span><strong id=\"aiModernQuizCounter\">" + answeredCount() + "/" + QUIZ.length + " terjawab</strong></div>" +
                "<article class=\"ai-modern-quiz-card\">" +
                    "<h3>" + escapeHtml(item[0]) + "</h3>" +
                    "<div class=\"ai-modern-quiz-options\">" + item[1].map(function (option, index) {
                        var classes = [];
                        if (chosen === index) classes.push("is-selected");
                        if (locked && index === item[2]) classes.push("is-correct");
                        if (locked && chosen === index && index !== item[2]) classes.push("is-wrong");
                        return "<button type=\"button\" class=\"" + classes.join(" ") + "\" data-quiz-option=\"" + index + "\"" + (locked ? " disabled" : "") + "><span>" + String.fromCharCode(65 + index) + "</span><p>" + escapeHtml(option) + "</p></button>";
                    }).join("") + "</div>" +
                    (locked ? "<p class=\"quiz-explanation\"><i class=\"fas fa-lightbulb\"></i> " + escapeHtml(item[3]) + "</p>" : "") +
                "</article>" +
                "<div class=\"ai-modern-quiz-nav\"><button type=\"button\" data-quiz-prev" + (state.current === 0 ? " disabled" : "") + "><i class=\"fas fa-arrow-left\"></i> Sebelumnya</button><button type=\"button\" data-quiz-next" + (state.current === QUIZ.length - 1 ? " disabled" : "") + ">Berikutnya <i class=\"fas fa-arrow-right\"></i></button></div>" +
                "<div class=\"ai-modern-quiz-map\">" + QUIZ.map(function (_, index) {
                    var cls = index === state.current ? "active" : state.answers[index] !== null && state.answers[index] !== undefined ? "answered" : "";
                    return "<button type=\"button\" class=\"" + cls + "\" data-quiz-jump=\"" + index + "\">" + (index + 1) + "</button>";
                }).join("") + "</div>";

            root.querySelectorAll("[data-quiz-option]").forEach(function (button) {
                button.addEventListener("click", function () {
                    state.answers[state.current] = Number(button.dataset.quizOption);
                    renderQuestion();
                });
            });
            root.querySelector("[data-quiz-prev]")?.addEventListener("click", function () {
                state.current = Math.max(0, state.current - 1);
                renderQuestion();
            });
            root.querySelector("[data-quiz-next]")?.addEventListener("click", function () {
                state.current = Math.min(QUIZ.length - 1, state.current + 1);
                renderQuestion();
            });
            root.querySelectorAll("[data-quiz-jump]").forEach(function (button) {
                button.addEventListener("click", function () {
                    state.current = Number(button.dataset.quizJump);
                    renderQuestion();
                });
            });
        }

        function renderResult(message) {
            var result = document.getElementById("aiModernQuizResult");
            if (!result) return;
            var percent = Math.round((state.score / QUIZ.length) * 100);
            result.hidden = false;
            result.innerHTML = "<strong>Skor kamu: " + state.score + "/" + QUIZ.length + " (" + percent + "%)</strong><span>" + escapeHtml(message || (percent >= 75 ? "Lulus. Review pembahasan untuk mengunci pemahaman." : "Belum mencapai 75%. Gunakan pembahasan untuk review.")) + "</span>";
            var next = document.getElementById("aiModernQuizNext");
            if (next && percent >= 75) next.classList.remove("is-disabled");
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (state.done) return;
            if (answeredCount() < QUIZ.length) {
                renderResult("Masih ada " + (QUIZ.length - answeredCount()) + " soal yang belum dijawab.");
                return;
            }
            if (!window.confirm("Kirim kuis sekarang? Kuis ini single attempt dan jawaban akan dikunci.")) return;
            state.score = state.answers.reduce(function (score, answer, index) {
                return score + (answer === QUIZ[index][2] ? 1 : 0);
            }, 0);
            state.done = true;
            localStorage.setItem(STORAGE.quizDone, "true");
            localStorage.setItem(STORAGE.quizScore, String(state.score));
            saveJson(STORAGE.quizAnswers, state.answers);
            renderQuestion();
            renderResult();
        });

        renderQuestion();
        if (state.done) renderResult("Kuis ini single attempt. Jawaban dan pembahasan sudah dikunci.");
    };

    function getDiscussionPosts() {
        var saved = safeJsonParse(localStorage.getItem(STORAGE.discussion), null);
        return Array.isArray(saved) ? saved : [];
    }

    function saveDiscussionPosts(posts) {
        saveJson(STORAGE.discussion, posts);
    }

    function renderPromptCards() {
        var box = document.getElementById("aiModernDiscussionPrompts");
        if (!box) return;
        box.innerHTML = DISCUSSION_PROMPTS.map(function (prompt, index) {
            return "<article class=\"ai-modern-discussion-prompt\">" +
                "<span>" + (index + 1) + "</span><h3>" + escapeHtml(prompt.title) + "</h3><p>" + escapeHtml(prompt.context) + "</p>" +
                "<div><strong>Posisi A:</strong> " + escapeHtml(prompt.a) + "</div><div><strong>Posisi B:</strong> " + escapeHtml(prompt.b) + "</div>" +
                "<p><strong>Pemantik:</strong> " + escapeHtml(prompt.question) + "</p><small>" + escapeHtml(prompt.caseText) + "</small>" +
                "<button type=\"button\" data-discussion-prompt=\"" + escapeHtml(prompt.title) + "\"><i class=\"far fa-message\"></i> Pakai prompt ini</button>" +
            "</article>";
        }).join("");
    }

    function renderDiscussion(posts) {
        var list = document.getElementById("aiModernDiscussionList");
        if (!list) return;
        if (!posts.length) {
            list.innerHTML = "<div class=\"ml-empty-state\">Belum ada diskusi tersimpan. Pilih prompt di atas atau tulis posisi diskusimu sendiri.</div>";
            return;
        }
        list.innerHTML = posts.map(function (post) {
            var replies = Array.isArray(post.replies) ? post.replies : [];
            return "<article class=\"discussion-bubble\" data-discussion-id=\"" + escapeHtml(post.id) + "\">" +
                "<div><span>A</span><strong>Aisyah Putri</strong><small>" + new Date(post.createdAt).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }) + "</small></div>" +
                "<p><b>" + escapeHtml(post.prompt) + "</b></p><p>" + escapeHtml(post.text) + "</p>" +
                "<button type=\"button\" data-reply=\"" + escapeHtml(post.id) + "\"><i class=\"far fa-message\"></i> Balas</button>" +
                "<div class=\"discussion-replies\">" + replies.map(function (reply) {
                    return "<article><strong>Aisyah Putri</strong><small>" + new Date(reply.createdAt).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }) + "</small><p>" + escapeHtml(reply.text) + "</p></article>";
                }).join("") + "</div></article>";
        }).join("");

        list.querySelectorAll("[data-reply]").forEach(function (button) {
            button.addEventListener("click", function () {
                var text = window.prompt("Tulis balasan singkat untuk thread ini:");
                if (!text || !text.trim()) return;
                var nextPosts = getDiscussionPosts();
                var target = nextPosts.find(function (post) { return post.id === button.dataset.reply; });
                if (!target) return;
                target.replies = Array.isArray(target.replies) ? target.replies : [];
                target.replies.push({ text: text.trim(), createdAt: new Date().toISOString() });
                saveDiscussionPosts(nextPosts);
                renderDiscussion(nextPosts);
            });
        });
    }

    window.initAiModernDiscussion = function () {
        var form = document.getElementById("aiModernDiscussionForm");
        var textarea = form ? form.querySelector("textarea") : null;
        var select = form ? form.querySelector("select") : null;
        if (form && form.dataset.aiModernInitialized === "true") return;
        if (form) form.dataset.aiModernInitialized = "true";
        renderPromptCards();

        var posts = getDiscussionPosts();
        renderDiscussion(posts);

        document.querySelectorAll("[data-discussion-prompt]").forEach(function (button) {
            button.addEventListener("click", function () {
                if (select) select.value = button.dataset.discussionPrompt;
                if (textarea && !textarea.value.trim()) {
                    textarea.value = button.dataset.discussionPrompt + "\n\nPosisi saya:\nAlasan:\nRisiko:\n";
                    textarea.focus();
                }
            });
        });

        if (!form || !textarea || !select) return;

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            var text = textarea.value.trim();
            if (!text) {
                setStatus("#aiModernDiscussionStatus", "Tulis isi diskusi terlebih dahulu.", "warning");
                return;
            }
            posts = getDiscussionPosts();
            posts.unshift({ id: "post-" + Date.now(), prompt: select.value, text: text, createdAt: new Date().toISOString(), replies: [] });
            saveDiscussionPosts(posts);
            form.reset();
            setStatus("#aiModernDiscussionStatus", "Diskusi berhasil diposting dan tersimpan di browser ini.", "success");
            renderDiscussion(posts);
        });
    };
})();
