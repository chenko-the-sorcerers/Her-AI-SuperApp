(function () {
    const STORAGE = {
        chapter: "heraiAiReasoningCurrentChapter",
        practice: "heraiAiReasoningPractice",
        quizDone: "heraiAiReasoningQuizDone",
        quizScore: "heraiAiReasoningQuizScore",
        quizAnswers: "heraiAiReasoningQuizAnswers",
        discussion: "heraiAiReasoningDiscussion"
    };

    const DISCUSSION_PROMPTS = [
        "Apakah jawaban AI yang runtut berarti AI benar-benar memahami masalah?",
        "Kapan rencana AI perlu diperbarui saat kondisi berubah?",
        "Apakah langkah penyelesaian AI harus selalu ditampilkan kepada pengguna?",
        "Seberapa jauh AI boleh menggunakan tool dan mengambil tindakan atas nama pengguna?"
    ];

    function getCourse() {
        return window.HERAI_REASONING_COURSE || { modules: [], overviewHtml: "" };
    }

    function safeJsonParse(value, fallback) {
        if (!value) return fallback;
        try {
            return JSON.parse(value);
        } catch (error) {
            return fallback;
        }
    }

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function escapeSelector(value) {
        if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
        return String(value).replace(/["\\]/g, "\\$&");
    }

    function setStatus(selector, message, tone) {
        const status = document.querySelector(selector);
        if (!status) return;
        status.textContent = message;
        status.dataset.tone = tone || "neutral";
    }

    function updateProgress(chapterNumber, total) {
        const completed = Math.max(0, chapterNumber - 1);
        const percent = Math.round((completed / total) * 100);
        const progressB = document.querySelector(".lesson-progress-mini b");
        const progressStrong = document.querySelector(".lesson-progress-mini strong");
        const progressText = document.querySelector(".lesson-progress-card p");
        if (progressB) progressB.style.setProperty("--value", percent + "%");
        if (progressStrong) progressStrong.textContent = percent + "%";
        if (progressText) progressText.textContent = completed + " dari " + total + " materi selesai";
    }

    window.loadReasoningChapter = function (chapterNumber) {
        const course = getCourse();
        const modules = course.modules || [];
        const total = modules.length;
        const chapter = Math.min(Math.max(Number(chapterNumber) || 1, 1), total || 1);
        const module = modules[chapter - 1];
        const container = document.getElementById("reasoning-chapter-container");
        const btnPrev = document.getElementById("btn-prev-chapter");
        const btnNext = document.getElementById("btn-next-chapter");
        const btnFinish = document.getElementById("btn-finish-materi");

        if (!container || !module) return;

        localStorage.setItem(STORAGE.chapter, String(chapter));
        container.innerHTML = `
            <section class="reasoning-scaffold-module-meta">
                <div class="reasoning-scaffold-module-meta-head">
                    <i class="fas fa-code-branch" aria-hidden="true"></i>
                    <div>
                        <span>Topik ${chapter} dari ${total}</span>
                        <h2>${escapeHtml(module.title)}</h2>
                        <p>${escapeHtml(module.summary)}</p>
                    </div>
                </div>
                <div><strong>Durasi</strong><span>${escapeHtml(module.duration || "25-35 menit")}</span></div>
                <div><strong>Target Belajar</strong><ul>${(module.learningObjectives || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
            </section>
            ${module.rich && module.rich.materi ? module.rich.materi : `<p>${escapeHtml(module.materi)}</p>`}
        `;

        if (btnPrev) btnPrev.style.display = chapter > 1 ? "inline-block" : "none";
        if (btnNext) btnNext.style.display = chapter < total ? "inline-block" : "none";
        if (btnFinish) btnFinish.style.display = chapter === total ? "inline-block" : "none";

        document.querySelectorAll("#reasoning-sidebar-list li").forEach(function (li) {
            const itemChapter = Number(li.dataset.chapter || "0");
            const icon = li.querySelector("i");
            li.classList.toggle("active", itemChapter === chapter);
            li.classList.toggle("completed", itemChapter < chapter);
            if (!icon) return;
            if (itemChapter === chapter) icon.className = "far fa-circle-play";
            else if (itemChapter < chapter) icon.className = "fas fa-circle-check";
            else icon.className = "far fa-circle";
        });

        updateProgress(chapter, total);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.initAiReasoningMateri = function () {
        const course = getCourse();
        const total = (course.modules || []).length;
        const initial = Math.min(Math.max(Number(localStorage.getItem(STORAGE.chapter)) || 1, 1), total || 1);
        const btnPrev = document.getElementById("btn-prev-chapter");
        const btnNext = document.getElementById("btn-next-chapter");

        if (btnPrev) {
            btnPrev.addEventListener("click", function () {
                const current = Number(localStorage.getItem(STORAGE.chapter)) || initial;
                window.loadReasoningChapter(Math.max(1, current - 1));
            });
        }

        if (btnNext) {
            btnNext.addEventListener("click", function () {
                const current = Number(localStorage.getItem(STORAGE.chapter)) || initial;
                window.loadReasoningChapter(Math.min(total, current + 1));
            });
        }

        window.loadReasoningChapter(initial);
    };

    function getSavedPractice() {
        return safeJsonParse(localStorage.getItem(STORAGE.practice), { revealed: [] });
    }

    function savePractice(revealed) {
        localStorage.setItem(STORAGE.practice, JSON.stringify({
            revealed: Array.from(new Set(revealed)),
            updatedAt: new Date().toISOString()
        }));
    }

    window.initAiReasoningPractice = function () {
        const practiceList = document.getElementById("aiReasoningPracticeList");
        if (practiceList) {
            const course = getCourse();
            practiceList.innerHTML = (course.modules || []).map(function (module, moduleIndex) {
                return `<section class="reasoning-practice-group">
                    <div class="ml-section-head">
                        <span>Latihan ${moduleIndex + 1}</span>
                        <h2>${escapeHtml(module.title)}</h2>
                        <p>${escapeHtml(module.latihan || "Kerjakan latihan lalu buka pembahasan untuk membandingkan reasoning kamu.")}</p>
                    </div>
                    ${module.rich && module.rich.latihan ? module.rich.latihan : ""}
                </section>`;
            }).join("");

            practiceList.querySelectorAll("[data-reasoning-reveal]").forEach(function (button, index) {
                button.dataset.exerciseId = "reasoning-exercise-" + index;
            });
        }

        const saved = getSavedPractice();
        const revealed = Array.isArray(saved.revealed) ? saved.revealed.slice() : [];
        const status = document.getElementById("aiReasoningPracticeStatus");

        document.querySelectorAll("[data-reasoning-reveal]").forEach(function (button, index) {
            const card = button.closest("article");
            const answer = card ? card.querySelector("[data-reasoning-answer]") : null;
            const id = button.dataset.exerciseId || "exercise-" + index;

            if (answer && revealed.includes(id)) {
                answer.hidden = false;
                button.setAttribute("aria-expanded", "true");
                button.innerHTML = '<i class="fas fa-eye" aria-hidden="true"></i> Pembahasan terbuka';
            }

            button.addEventListener("click", function () {
                if (!answer) return;
                answer.hidden = !answer.hidden;
                button.setAttribute("aria-expanded", String(!answer.hidden));
                button.innerHTML = answer.hidden
                    ? '<i class="fas fa-lightbulb" aria-hidden="true"></i> Lihat pembahasan'
                    : '<i class="fas fa-eye" aria-hidden="true"></i> Pembahasan terbuka';
                if (!answer.hidden && !revealed.includes(id)) revealed.push(id);
                savePractice(revealed);
                if (status) status.textContent = "Progres latihan tersimpan di browser ini.";
            });
        });

        if (status) {
            status.textContent = revealed.length
                ? "Sebagian pembahasan latihan dipulihkan dari browsermu."
                : "Buka pembahasan setelah mencoba menjawab sendiri.";
        }
    };

    function parseQuizQuestions() {
        const course = getCourse();
        return (course.modules || []).flatMap(function (module) {
            const holder = document.createElement("div");
            holder.innerHTML = module.rich && module.rich.kuis ? module.rich.kuis : "";
            return Array.from(holder.querySelectorAll(".reasoning-scaffold-question")).map(function (question) {
                return {
                    moduleTitle: module.title,
                    question: (question.querySelector("h3")?.textContent || "").replace(/^\d+\s*/, "").trim(),
                    answer: question.dataset.correctAnswer || "",
                    explanation: question.dataset.explanation || "",
                    options: Array.from(question.querySelectorAll(".reasoning-scaffold-options label")).map(function (label) {
                        return {
                            value: label.querySelector("input")?.value || "",
                            text: (label.querySelector("span")?.textContent || "").replace(/^[A-D]\s*/, "").trim()
                        };
                    })
                };
            });
        });
    }

    function getQuizAnswers(form) {
        return parseQuizQuestions().reduce(function (acc, _question, index) {
            const checked = form.querySelector('input[name="reasoning-q' + index + '"]:checked');
            acc["reasoning-q" + index] = checked ? checked.value : "";
            return acc;
        }, {});
    }

    function renderQuizResult(score, total, message) {
        const result = document.getElementById("aiReasoningQuizResult");
        if (!result) return;
        const percent = Math.round((score / total) * 100);
        result.hidden = false;
        result.innerHTML = `<strong>Skor kamu: ${score}/${total} (${percent}%)</strong><span>${escapeHtml(message)}</span>`;
    }

    function lockQuiz(form, questions, answers) {
        form.querySelectorAll('input[type="radio"]').forEach(function (input) {
            input.disabled = true;
            if (answers[input.name] === input.value) input.checked = true;
        });

        questions.forEach(function (question, index) {
            const article = form.querySelector('[data-quiz-index="' + index + '"]');
            if (!article) return;
            article.querySelectorAll("label").forEach(function (label) {
                const input = label.querySelector("input");
                const isCorrect = input && input.value === question.answer;
                const isSelected = input && answers[input.name] === input.value;
                label.classList.toggle("is-correct", Boolean(isCorrect));
                label.classList.toggle("is-wrong", Boolean(isSelected && !isCorrect));
            });
            let explanation = article.querySelector(".quiz-explanation");
            if (!explanation) {
                explanation = document.createElement("p");
                explanation.className = "quiz-explanation";
                article.appendChild(explanation);
            }
            explanation.innerHTML = '<i class="fas fa-lightbulb"></i> ' + escapeHtml(question.explanation);
        });

        const submit = form.querySelector(".quiz-submit-btn");
        if (submit) {
            submit.disabled = true;
            submit.innerHTML = '<i class="fas fa-lock"></i> Kuis Sudah Dikirim';
        }

        const next = document.getElementById("aiReasoningQuizNext");
        if (next) next.classList.remove("is-disabled");
    }

    window.initAiReasoningQuiz = function () {
        const form = document.getElementById("aiReasoningQuizForm");
        const list = document.getElementById("aiReasoningQuizList");
        if (!form || !list) return;

        const questions = parseQuizQuestions();
        list.innerHTML = questions.map(function (question, index) {
            return `<article data-quiz-index="${index}">
                <span>${index + 1}</span>
                <small>${escapeHtml(question.moduleTitle)}</small>
                <h3>${escapeHtml(question.question)}</h3>
                ${question.options.map(function (option) {
                    return `<label><input type="radio" name="reasoning-q${index}" value="${escapeHtml(option.value)}"><span><b>${escapeHtml(option.value)}</b>${escapeHtml(option.text)}</span></label>`;
                }).join("")}
            </article>`;
        }).join("");

        const savedDone = localStorage.getItem(STORAGE.quizDone) === "true";
        const savedAnswers = safeJsonParse(localStorage.getItem(STORAGE.quizAnswers), {});
        if (savedDone && Object.keys(savedAnswers).length === questions.length) {
            const savedScore = Number(localStorage.getItem(STORAGE.quizScore)) || 0;
            renderQuizResult(savedScore, questions.length, "Kuis ini single attempt. Jawaban, skor, dan pembahasan sudah dikunci.");
            lockQuiz(form, questions, savedAnswers);
            return;
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const answers = getQuizAnswers(form);
            const unanswered = Object.values(answers).filter(function (value) { return !value; }).length;
            if (unanswered) {
                renderQuizResult(0, questions.length, "Masih ada " + unanswered + " soal yang belum dijawab.");
                return;
            }

            const score = questions.reduce(function (total, question, index) {
                return total + (answers["reasoning-q" + index] === question.answer ? 1 : 0);
            }, 0);

            localStorage.setItem(STORAGE.quizDone, "true");
            localStorage.setItem(STORAGE.quizScore, String(score));
            localStorage.setItem(STORAGE.quizAnswers, JSON.stringify(answers));
            renderQuizResult(score, questions.length, "Pembahasan sudah dibuka. Gunakan hasil ini untuk membaca ulang topik yang belum kuat.");
            lockQuiz(form, questions, answers);
        });
    };

    function getDiscussionPosts() {
        const saved = safeJsonParse(localStorage.getItem(STORAGE.discussion), null);
        if (Array.isArray(saved)) return saved;
        return DISCUSSION_PROMPTS.map(function (prompt, index) {
            return {
                id: "seed-" + (index + 1),
                prompt: prompt,
                text: "Gunakan prompt ini sebagai titik mulai diskusi Reasoning.",
                createdAt: new Date().toISOString(),
                replies: []
            };
        });
    }

    function saveDiscussionPosts(posts) {
        localStorage.setItem(STORAGE.discussion, JSON.stringify(posts));
    }

    function renderDiscussion(posts) {
        const list = document.getElementById("aiReasoningDiscussionList");
        if (!list) return;
        list.innerHTML = posts.map(function (post) {
            const replies = Array.isArray(post.replies) ? post.replies : [];
            return `<article class="discussion-bubble" data-discussion-id="${escapeHtml(post.id)}">
                <div>
                    <span>${post.id.indexOf("seed") === 0 ? "H" : "A"}</span>
                    <strong>${post.id.indexOf("seed") === 0 ? "HerAI Prompt" : "Aisyah Putri"}</strong>
                    <small>${new Date(post.createdAt).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}</small>
                </div>
                <p><b>${escapeHtml(post.prompt)}</b></p>
                <p>${escapeHtml(post.text)}</p>
                <button type="button" data-reply="${escapeHtml(post.id)}"><i class="far fa-message"></i> Balas</button>
                <div class="discussion-replies">
                    ${replies.map(function (reply) {
                        return `<article><strong>Aisyah Putri</strong><small>${new Date(reply.createdAt).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}</small><p>${escapeHtml(reply.text)}</p></article>`;
                    }).join("")}
                </div>
            </article>`;
        }).join("");

        list.querySelectorAll("[data-reply]").forEach(function (button) {
            button.addEventListener("click", function () {
                const text = window.prompt("Tulis balasan singkat untuk thread ini:");
                if (!text || !text.trim()) return;
                const posts = getDiscussionPosts();
                const target = posts.find(function (post) { return post.id === button.dataset.reply; });
                if (!target) return;
                target.replies = Array.isArray(target.replies) ? target.replies : [];
                target.replies.push({ text: text.trim(), createdAt: new Date().toISOString() });
                saveDiscussionPosts(posts);
                renderDiscussion(posts);
            });
        });
    }

    window.initAiReasoningDiscussion = function () {
        const form = document.getElementById("aiReasoningDiscussionForm");
        const select = form ? form.querySelector("select") : null;
        const textarea = form ? form.querySelector("textarea") : null;
        renderDiscussion(getDiscussionPosts());

        document.querySelectorAll("[data-discussion-prompt]").forEach(function (button) {
            button.addEventListener("click", function () {
                if (select) select.value = button.dataset.discussionPrompt;
                if (textarea && !textarea.value.trim()) {
                    textarea.value = button.dataset.discussionPrompt + "\n\n";
                    textarea.focus();
                }
            });
        });

        if (!form || !select || !textarea) return;
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const text = textarea.value.trim();
            if (!text) {
                setStatus("#aiReasoningDiscussionStatus", "Tulis isi diskusi terlebih dahulu.", "warning");
                return;
            }

            const posts = getDiscussionPosts();
            posts.unshift({
                id: "post-" + Date.now(),
                prompt: select.value,
                text: text,
                createdAt: new Date().toISOString(),
                replies: []
            });
            saveDiscussionPosts(posts);
            form.reset();
            setStatus("#aiReasoningDiscussionStatus", "Diskusi berhasil diposting dan tersimpan di browser ini.", "success");
            renderDiscussion(posts);
        });
    };
})();
