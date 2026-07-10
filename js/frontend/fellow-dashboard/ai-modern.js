window.initAiModernMateri = function() {
    var container = document.getElementById('modern-chapter-container');
    if (!container) return;

    var STORAGE_KEY_CHAPTER = 'heraiAiModernCurrentChapter';
    var currentChapter = parseInt(localStorage.getItem(STORAGE_KEY_CHAPTER) || '1', 10);
    var totalChapters = 4; // 4 sub-modules for Modern AI

    var btnPrev = document.getElementById('btn-prev-chapter');
    var btnNext = document.getElementById('btn-next-chapter');
    var btnFinish = document.getElementById('btn-finish-materi');

    function loadChapter(chapterNumber) {
        container.innerHTML = '<div style="text-align: center; padding: 60px; color: var(--fellow-muted);"><i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--fellow-pink); margin-bottom: 16px;"></i><p>Memuat Topik ' + chapterNumber + '...</p></div>';
        
        var formattedNumber = chapterNumber < 10 ? '0' + chapterNumber : chapterNumber;
        var path = formattedNumber + '-materi.html';

        fetch('/pages/frontend/fellow-dashboard/foundation-core-ai/ai-fundamentals-advanced/ai-fundamentals/03-konsep-ai-modern/chapters/' + path)
            .then(function(res) { 
                if (!res.ok) throw new Error('Not found'); 
                return res.text(); 
            })
            .then(function(html) {
                container.innerHTML = html;
                window.scrollTo({ top: 0, behavior: 'smooth' });

                btnPrev.style.display = chapterNumber > 1 ? 'inline-block' : 'none';
                btnNext.style.display = chapterNumber < totalChapters ? 'inline-block' : 'none';
                btnFinish.style.display = chapterNumber === totalChapters ? 'inline-block' : 'none';
                
                // Update sidebar list styling
                var listItems = document.querySelectorAll('#modern-sidebar-list li');
                listItems.forEach(function(li) {
                    var chapter = parseInt(li.getAttribute('data-chapter') || '0', 10);
                    var icon = li.querySelector('i');
                    if (chapter === chapterNumber) {
                        li.classList.add('active');
                        icon.className = 'far fa-circle-play';
                    } else if (chapter < chapterNumber) {
                        li.classList.add('active'); // It is completed/active
                        icon.className = 'fas fa-circle-check';
                    } else {
                        li.classList.remove('active');
                        icon.className = 'far fa-circle';
                    }
                });
                
                // Update progress percentage
                var progressValue = Math.round(((chapterNumber - 1) / totalChapters) * 100);
                var progressB = document.querySelector('.lesson-progress-mini b');
                var progressStrong = document.querySelector('.lesson-progress-mini strong');
                var progressText = document.querySelector('.lesson-progress-card p');
                if (progressB) progressB.style.setProperty('--value', progressValue + '%');
                if (progressStrong) progressStrong.textContent = progressValue + '%';
                if (progressText) progressText.textContent = (chapterNumber - 1) + ' dari ' + totalChapters + ' materi selesai';
            })
            .catch(function(err) {
                container.innerHTML = '<div style="text-align: center; padding: 60px; color: #d81b60;"><i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 16px;"></i><p>Gagal memuat materi. Silakan coba lagi.</p></div>';
                console.error(err);
            });
    }

    btnPrev?.addEventListener('click', function() {
        if (currentChapter > 1) {
            currentChapter--;
            localStorage.setItem(STORAGE_KEY_CHAPTER, currentChapter.toString());
            loadChapter(currentChapter);
        }
    });

    btnNext?.addEventListener('click', function() {
        if (currentChapter < totalChapters) {
            currentChapter++;
            localStorage.setItem(STORAGE_KEY_CHAPTER, currentChapter.toString());
            loadChapter(currentChapter);
        }
    });

    window.loadModernChapter = function(chapterNum) {
        if (chapterNum >= 1 && chapterNum <= totalChapters) {
            currentChapter = chapterNum;
            localStorage.setItem(STORAGE_KEY_CHAPTER, currentChapter.toString());
            loadChapter(currentChapter);
        }
    };

    // Load initial chapter
    loadChapter(currentChapter);
};

(function () {
    var STORAGE = {
        practice: 'heraiAiModernPractice',
        quizDone: 'heraiAiModernQuizDone',
        quizScore: 'heraiAiModernQuizScore',
        quizAnswers: 'heraiAiModernQuizAnswers',
        discussion: 'heraiAiModernDiscussion'
    };

    var DISCUSSION_PROMPTS = [
        'Kapan context window besar cukup, dan kapan sistem tetap perlu RAG?',
        'Apa risiko memakai foundation model umum untuk data internal fellowship?',
        'Tool apa saja yang aman diberikan ke agent pembelajaran, dan mana yang perlu approval manusia?',
        'Bagaimana kamu membuktikan jawaban assistant benar-benar grounded pada dokumen sumber?',
        'Metrik apa yang paling penting untuk assistant peserta: factuality, helpfulness, latency, atau cost?',
        'Bagaimana HerAI sebaiknya menjelaskan batas kemampuan AI kepada peserta?'
    ];

    function safeJsonParse(value, fallback) {
        if (!value) return fallback;
        try {
            return JSON.parse(value);
        } catch (error) {
            return fallback;
        }
    }

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function escapeSelector(value) {
        if (window.CSS && typeof window.CSS.escape === 'function') {
            return window.CSS.escape(value);
        }
        return String(value).replace(/["\\]/g, '\\$&');
    }

    function setStatus(selector, message, tone) {
        var status = document.querySelector(selector);
        if (!status) return;
        status.textContent = message;
        status.dataset.tone = tone || 'neutral';
    }

    function getPracticePayload(form) {
        var answers = {};
        form.querySelectorAll('textarea, select').forEach(function (field) {
            if (!field.name) return;
            answers[field.name] = field.value.trim();
        });

        return {
            updatedAt: new Date().toISOString(),
            answers: answers
        };
    }

    function restorePractice(form) {
        var saved = safeJsonParse(localStorage.getItem(STORAGE.practice), null);
        if (!saved || !saved.answers) return false;

        Object.entries(saved.answers).forEach(function (entry) {
            var field = form.querySelector('[name="' + escapeSelector(entry[0]) + '"]');
            if (field) field.value = entry[1];
        });

        return true;
    }

    function updatePracticeFeedback(form) {
        form.querySelectorAll('[data-feedback-for]').forEach(function (box) {
            var target = form.querySelector('[name="' + escapeSelector(box.dataset.feedbackFor) + '"]');
            var value = target ? target.value.trim() : '';
            box.hidden = !value;
            if (value) {
                box.innerHTML = '<i class="fas fa-circle-check"></i><span>' + escapeHtml(box.dataset.feedback || 'Jawaban tersimpan. Pastikan alasanmu spesifik dan berbasis sistem.') + '</span>';
            }
        });
    }

    function setPracticeReadonly(form, readonly) {
        form.querySelectorAll('textarea, select').forEach(function (field) {
            field.disabled = readonly;
        });
        form.classList.toggle('is-saved', readonly);
    }

    window.initAiModernBasic = function () {
        var form = document.getElementById('aiModernPracticeForm');
        if (!form) return;

        var restored = restorePractice(form);
        updatePracticeFeedback(form);
        setStatus('#aiModernPracticeStatus', restored ? 'Jawaban terakhir berhasil dipulihkan dari browsermu.' : 'Jawaban akan tersimpan di browsermu.', restored ? 'success' : 'neutral');

        form.querySelectorAll('textarea, select').forEach(function (field) {
            field.addEventListener('input', function () { updatePracticeFeedback(form); });
            field.addEventListener('change', function () { updatePracticeFeedback(form); });
        });

        var saveButton = form.querySelector('[data-practice-save]');
        var editButton = form.querySelector('[data-practice-edit]');
        var deleteButton = form.querySelector('[data-practice-delete]');

        if (saveButton) {
            saveButton.addEventListener('click', function () {
                localStorage.setItem(STORAGE.practice, JSON.stringify(getPracticePayload(form)));
                updatePracticeFeedback(form);
                setPracticeReadonly(form, true);
                setStatus('#aiModernPracticeStatus', 'Latihan AI Modern tersimpan. Kamu bisa lanjut ke kuis atau edit lagi bila perlu.', 'success');
            });
        }

        if (editButton) {
            editButton.addEventListener('click', function () {
                setPracticeReadonly(form, false);
                setStatus('#aiModernPracticeStatus', 'Mode edit aktif. Jangan lupa simpan ulang setelah mengubah jawaban.', 'neutral');
            });
        }

        if (deleteButton) {
            deleteButton.addEventListener('click', function () {
                localStorage.removeItem(STORAGE.practice);
                form.reset();
                setPracticeReadonly(form, false);
                updatePracticeFeedback(form);
                setStatus('#aiModernPracticeStatus', 'Jawaban latihan dihapus dari browser ini.', 'neutral');
            });
        }
    };

    function getQuizGroups(form) {
        return Array.from(new Set(
            Array.from(form.querySelectorAll('input[type="radio"]')).map(function (input) {
                return input.name;
            })
        ));
    }

    function getQuizAnswers(form) {
        return getQuizGroups(form).reduce(function (acc, name) {
            var checked = form.querySelector('input[name="' + escapeSelector(name) + '"]:checked');
            acc[name] = checked ? checked.value : '';
            return acc;
        }, {});
    }

    function renderQuizResult(form, score, total, message) {
        var result = document.getElementById('aiModernQuizResult');
        if (!result) return;

        var percent = Math.round((score / total) * 100);
        result.hidden = false;
        result.innerHTML = '<strong>Skor kamu: ' + score + '/' + total + ' (' + percent + '%)</strong><span>' + escapeHtml(message || 'Review pembahasan di tiap soal untuk memperkuat konsep.') + '</span>';

        var quizDone = localStorage.getItem(STORAGE.quizDone) === 'true';
        if (quizDone && (location.hostname === 'localhost' || location.hostname === '127.0.0.1') && !result.querySelector('[data-quiz-reset]')) {
            var resetButton = document.createElement('button');
            resetButton.type = 'button';
            resetButton.className = 'ml-dev-reset';
            resetButton.dataset.quizReset = 'true';
            resetButton.textContent = 'Reset Dev';
            resetButton.addEventListener('click', function () {
                localStorage.removeItem(STORAGE.quizDone);
                localStorage.removeItem(STORAGE.quizScore);
                localStorage.removeItem(STORAGE.quizAnswers);
                window.initAiModernQuiz();
            });
            result.appendChild(resetButton);
        }
    }

    function lockQuiz(form, answers) {
        form.querySelectorAll('input[type="radio"]').forEach(function (input) {
            input.disabled = true;
            if (answers && answers[input.name] === input.value) input.checked = true;
        });

        form.querySelectorAll('.quiz-list article').forEach(function (article) {
            var selected = article.querySelector('input[type="radio"]:checked');
            var explanation = article.dataset.explanation || 'Pembahasan belum tersedia.';

            article.querySelectorAll('label').forEach(function (label) {
                var input = label.querySelector('input');
                var isCorrect = input && input.value === '1';
                var isSelected = input && selected && input === selected;
                label.classList.toggle('is-correct', Boolean(isCorrect));
                label.classList.toggle('is-wrong', Boolean(isSelected && !isCorrect));
            });

            var explanationBox = article.querySelector('.quiz-explanation');
            if (!explanationBox) {
                explanationBox = document.createElement('p');
                explanationBox.className = 'quiz-explanation';
                article.appendChild(explanationBox);
            }
            explanationBox.innerHTML = '<i class="fas fa-lightbulb"></i> ' + escapeHtml(explanation);
        });

        var submitButton = form.querySelector('.quiz-submit-btn');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Kuis Sudah Dikirim';
        }

        var next = document.getElementById('aiModernQuizNext');
        if (next) next.classList.remove('is-disabled');
    }

    window.initAiModernQuiz = function () {
        var form = document.getElementById('aiModernQuizForm');
        if (!form) return;

        form.querySelectorAll('.quiz-explanation').forEach(function (node) { node.remove(); });
        form.querySelectorAll('label').forEach(function (label) { label.classList.remove('is-correct', 'is-wrong'); });
        form.querySelectorAll('input[type="radio"]').forEach(function (input) {
            input.disabled = false;
            input.checked = false;
        });

        var groups = getQuizGroups(form);
        var isDone = localStorage.getItem(STORAGE.quizDone) === 'true';
        if (isDone) {
            var savedAnswers = safeJsonParse(localStorage.getItem(STORAGE.quizAnswers), {});
            if (Object.keys(savedAnswers).length !== groups.length) {
                localStorage.removeItem(STORAGE.quizDone);
                localStorage.removeItem(STORAGE.quizScore);
                localStorage.removeItem(STORAGE.quizAnswers);
                window.initAiModernQuiz();
                return;
            }

            var savedScore = Number(localStorage.getItem(STORAGE.quizScore)) || 0;
            renderQuizResult(form, savedScore, groups.length, 'Kuis ini single attempt. Jawaban dan pembahasan sudah dikunci.');
            lockQuiz(form, savedAnswers);
            return;
        }

        var result = document.getElementById('aiModernQuizResult');
        if (result) {
            result.hidden = true;
            result.innerHTML = '';
        }

        var next = document.getElementById('aiModernQuizNext');
        if (next) next.classList.add('is-disabled');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var answers = getQuizAnswers(form);
            var unanswered = groups.filter(function (name) { return !answers[name]; });
            if (unanswered.length) {
                renderQuizResult(form, 0, groups.length, 'Masih ada ' + unanswered.length + ' soal yang belum dijawab.');
                return;
            }

            var score = groups.reduce(function (total, name) {
                return total + (answers[name] === '1' ? 1 : 0);
            }, 0);

            localStorage.setItem(STORAGE.quizDone, 'true');
            localStorage.setItem(STORAGE.quizScore, String(score));
            localStorage.setItem(STORAGE.quizAnswers, JSON.stringify(answers));

            renderQuizResult(form, score, groups.length, 'Pembahasan sudah dibuka. Gunakan ini untuk membaca ulang materi yang belum kuat.');
            lockQuiz(form, answers);
        });
    };

    function getDiscussionPosts() {
        var saved = safeJsonParse(localStorage.getItem(STORAGE.discussion), null);
        if (Array.isArray(saved)) return saved;

        return DISCUSSION_PROMPTS.map(function (prompt, index) {
            return {
                id: 'seed-' + (index + 1),
                prompt: prompt,
                text: 'Gunakan prompt ini sebagai titik mulai diskusi.',
                createdAt: new Date().toISOString(),
                replies: []
            };
        });
    }

    function saveDiscussionPosts(posts) {
        localStorage.setItem(STORAGE.discussion, JSON.stringify(posts));
    }

    function renderDiscussion(posts) {
        var list = document.getElementById('aiModernDiscussionList');
        if (!list) return;

        if (!posts.length) {
            list.innerHTML = '<div class="ml-empty-state">Belum ada diskusi. Jadilah yang pertama membuka percakapan.</div>';
            return;
        }

        list.innerHTML = posts.map(function (post) {
            var initials = post.id && post.id.indexOf('seed') === 0 ? 'H' : 'A';
            var replies = Array.isArray(post.replies) ? post.replies : [];
            return '<article class="discussion-bubble" data-discussion-id="' + escapeHtml(post.id) + '">' +
                '<div>' +
                    '<span>' + initials + '</span>' +
                    '<strong>' + (post.id && post.id.indexOf('seed') === 0 ? 'HerAI Prompt' : 'Aisyah Putri') + '</strong>' +
                    '<small>' + new Date(post.createdAt).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) + '</small>' +
                '</div>' +
                '<p><b>' + escapeHtml(post.prompt) + '</b></p>' +
                '<p>' + escapeHtml(post.text) + '</p>' +
                '<button type="button" data-reply="' + escapeHtml(post.id) + '"><i class="far fa-message"></i> Balas</button>' +
                '<div class="discussion-replies">' +
                    replies.map(function (reply) {
                        return '<article>' +
                            '<strong>Aisyah Putri</strong>' +
                            '<small>' + new Date(reply.createdAt).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) + '</small>' +
                            '<p>' + escapeHtml(reply.text) + '</p>' +
                        '</article>';
                    }).join('') +
                '</div>' +
            '</article>';
        }).join('');

        list.querySelectorAll('[data-reply]').forEach(function (button) {
            button.addEventListener('click', function () {
                var text = window.prompt('Tulis balasan singkat untuk thread ini:');
                if (!text || !text.trim()) return;

                var nextPosts = getDiscussionPosts();
                var target = nextPosts.find(function (post) { return post.id === button.dataset.reply; });
                if (!target) return;
                target.replies = Array.isArray(target.replies) ? target.replies : [];
                target.replies.push({
                    text: text.trim(),
                    createdAt: new Date().toISOString()
                });
                saveDiscussionPosts(nextPosts);
                renderDiscussion(nextPosts);
            });
        });
    }

    window.initAiModernDiscussion = function () {
        var form = document.getElementById('aiModernDiscussionForm');
        var textarea = form ? form.querySelector('textarea') : null;
        var select = form ? form.querySelector('select') : null;
        var posts = getDiscussionPosts();

        renderDiscussion(posts);

        document.querySelectorAll('[data-discussion-prompt]').forEach(function (button) {
            button.addEventListener('click', function () {
                if (select) select.value = button.dataset.discussionPrompt;
                if (textarea && !textarea.value.trim()) {
                    textarea.value = button.dataset.discussionPrompt + '\n\n';
                    textarea.focus();
                }
            });
        });

        if (!form || !textarea || !select) return;

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var text = textarea.value.trim();
            if (!text) {
                setStatus('#aiModernDiscussionStatus', 'Tulis isi diskusi terlebih dahulu.', 'warning');
                return;
            }

            posts = getDiscussionPosts();
            posts.unshift({
                id: 'post-' + Date.now(),
                prompt: select.value,
                text: text,
                createdAt: new Date().toISOString(),
                replies: []
            });
            saveDiscussionPosts(posts);
            form.reset();
            setStatus('#aiModernDiscussionStatus', 'Diskusi berhasil diposting dan tersimpan di browser ini.', 'success');
            renderDiscussion(posts);
        });
    };
})();
