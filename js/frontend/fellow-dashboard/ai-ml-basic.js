(function() {
    'use strict';

    /* ── HerAI Modul 02 — Ml untuk AI ─── */

    var pyodideInstance = null;
    var pyodideReady = false;
    var pyodideLoading = false;

    function startPyodide() {
        if (pyodideReady) {
            enableAllPlaygrounds();
            return;
        }
        
        var status = document.getElementById('pyodideStatus');

        if (typeof loadPyodide === 'undefined') {
            if (status) { status.querySelector('span').textContent = 'Ml runtime tidak tersedia di perangkat ini.'; }
            return;
        }

        if (pyodideLoading) return;
        pyodideLoading = true;
        
        // Disable all runs and show loading
        var runs = document.querySelectorAll('.py-run');
        runs.forEach(function(btn) { 
            btn.disabled = true; 
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        });

        var bars = 0;
        var dots = '';
        var interval = setInterval(function() {
            bars = (bars + 1) % 4;
            dots = '.'.repeat(bars);
            if (status) {
                var s = status.querySelector('span');
                if (s && !pyodideReady) s.textContent = 'Memuat Ml runtime' + dots;
            }
        }, 400);

        loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/' }).then(function(pyodide) {
            pyodideInstance = pyodide;
            pyodideReady = true;
            clearInterval(interval);
            if (status) {
                status.classList.add('ready');
                status.querySelector('span').textContent = 'Ml runtime siap. Kamu bisa menjalankan kode di bawah.';
            }
            enableAllPlaygrounds();
        }).catch(function(err) {
            clearInterval(interval);
            if (status) status.querySelector('span').textContent = 'Gagal memuat Ml: ' + (err.message || 'unknown error');
        });
    }

    function enableAllPlaygrounds() {
        var runs = document.querySelectorAll('.py-run');
        for (var i = 0; i < runs.length; i++) { 
            runs[i].disabled = false; 
            runs[i].innerHTML = '<i class="fas fa-play"></i> Run Code';
        }
    }

    function runCode(playId) {
        if (!pyodideReady || !pyodideInstance) return;
        var editor = document.querySelector('#play-' + playId + ' .py-editor');
        var output = document.getElementById('out-' + playId);
        if (!editor || !output) return;
        var code = editor.value;

        output.className = 'py-output visible';
        output.textContent = 'Running...';

        var captured = '';
        pyodideInstance.setStdout({ batched: function(text) { captured += text + '\n'; } });
        pyodideInstance.setStderr({ batched: function(text) { captured += text + '\n'; } });

        pyodideInstance.loadPackagesFromImports(code).then(function() {
            return pyodideInstance.runMlAsync(code);
        }).then(function(result) {
            var resultText = result !== undefined ? String(result) : '';
            var final = captured ? captured.trimEnd() : '';
            if (resultText && final) final += '\n' + resultText;
            else if (resultText) final = resultText;
            output.textContent = final || '(kode berjalan, tidak ada output)';
            output.classList.remove('error');
        }).catch(function(err) {
            var final = captured ? captured.trimEnd() + '\n' : '';
            final += 'Error: ' + (err.message || err);
            output.textContent = final;
            output.classList.add('error');
        });
    }

    window.initAiMlBasic = function() {
        var form = document.getElementById('mlPracticeForm');
        if (!form || form.dataset.practiceReady) return;
        form.dataset.practiceReady = 'true';
        var STORAGE_KEY = 'heraiAiMlPractice';
        var status = document.getElementById('mlPracticeStatus');
        var fields = Array.from(form.querySelectorAll('textarea[name]'));

        var saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        fields.forEach(function(f) { if (saved[f.name]) f.value = saved[f.name]; });
        if (Object.keys(saved).length && status) {
            status.textContent = 'Jawaban latihan tersimpan di perangkatmu.';
        }

        var saveButton = form.querySelector('[data-practice-save]');
        var editButton = form.querySelector('[data-practice-edit]');
        var deleteButton = form.querySelector('[data-practice-delete]');

        saveButton?.addEventListener('click', function() {
            var payload = {};
            var hasAnswer = false;
            fields.forEach(function(f) { 
                var val = f.value.trim();
                payload[f.name] = val; 
                if (val.length > 0) hasAnswer = true;
            });

            if (!hasAnswer) {
                if (status) {
                    status.style.color = '#e74c3c';
                    status.textContent = 'Oops, jawaban tidak boleh kosong! Silakan kerjakan minimal satu soal reflektif.';
                }
                return;
            }

            localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
            if (status) {
                status.style.color = 'var(--fellow-muted)';
                status.textContent = 'Jawaban berhasil disimpan. Kamu bisa edit atau hapus kapan saja.';
            }
        });
        editButton?.addEventListener('click', function() {
            fields[0]?.focus();
            if (status) {
                status.style.color = 'var(--fellow-muted)';
                status.textContent = 'Mode edit aktif.';
            }
        });
        deleteButton?.addEventListener('click', function() {
            localStorage.removeItem(STORAGE_KEY);
            fields.forEach(function(f) { f.value = ''; });
            if (status) {
                status.style.color = 'var(--fellow-muted)';
                status.textContent = 'Jawaban latihan dihapus.';
            }
        });

        // Bind Pyodide run/reset
        document.querySelectorAll('.py-run').forEach(function(btn) {
            var pid = btn.getAttribute('data-play');
            btn.disabled = true;
            btn.addEventListener('click', function() { runCode(pid); });
        });
        document.querySelectorAll('.py-reset').forEach(function(btn) {
            var pid = btn.getAttribute('data-play');
            btn.addEventListener('click', function() {
                var editor = document.querySelector('#play-' + pid + ' .py-editor');
                if (!editor) return;
                editor.value = editor.defaultValue || editor.getAttribute('data-original') || '';
                var out = document.getElementById('out-' + pid);
                if (out) { out.className = 'py-output'; out.textContent = ''; }
            });
        });

        // Store original code for reset
        document.querySelectorAll('.py-editor').forEach(function(ed) {
            ed.setAttribute('data-original', ed.value);
        });

        startPyodide();
    };

    window.initAiMlQuiz = function() {
        var quizForm = document.getElementById('aiMlQuizForm');
        if (!quizForm || quizForm.dataset.quizReady) return;
        quizForm.dataset.quizReady = 'true';
        var quizDoneKey = 'heraiAiMlQuizDone';
        var quizScoreKey = 'heraiAiMlQuizScore';
        var groups = ['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];
        var resultBox = document.getElementById('aiMlQuizResult');
        var nextLink = document.getElementById('aiMlQuizNext');
        var submitButton = quizForm.querySelector('.quiz-submit-btn');
        var isQuizDone = localStorage.getItem(quizDoneKey) === 'true';

        var showResult = function(score, total) {
            if (!resultBox) return;
            resultBox.hidden = false;
            resultBox.innerHTML = '<strong>Nilai kamu: ' + score + '/' + total + '</strong><span>Skor tersimpan. Jawaban yang benar ditandai dengan warna hijau.</span>';
        };

        if (isQuizDone) {
            var savedScore = Number(localStorage.getItem(quizScoreKey) || 0);
            showResult(savedScore, groups.length);
            quizForm.querySelectorAll('label').forEach(function(lbl) {
                var inp = lbl.querySelector('input');
                if (inp) {
                    inp.disabled = true;
                    if (inp.value === '1') {
                        lbl.style.background = 'rgba(46, 160, 67, 0.1)';
                        lbl.style.borderColor = '#2ea043';
                    } else if (inp.checked) {
                        lbl.style.background = 'rgba(231, 76, 60, 0.1)';
                        lbl.style.borderColor = '#e74c3c';
                    }
                }
            });
            if (submitButton) { submitButton.disabled = true; submitButton.textContent = 'Kuis Sudah Dikirim'; }
            if (nextLink) nextLink.classList.remove('is-disabled');
            document.querySelectorAll('[data-locked-after-quiz]').forEach(function(i) { i.hidden = false; });
            document.querySelectorAll('.lesson-lock-hint').forEach(function(i) { i.hidden = true; });
            return;
        }

        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var score = 0;
            for (var i = 0; i < groups.length; i++) {
                var s = quizForm.querySelector('input[name="' + groups[i] + '"]:checked');
                if (s && s.value === '1') score += 1;
            }
            localStorage.setItem(quizDoneKey, 'true');
            localStorage.setItem(quizScoreKey, String(score));
            showResult(score, groups.length);
            quizForm.querySelectorAll('label').forEach(function(lbl) {
                var inp = lbl.querySelector('input');
                if (inp) {
                    inp.disabled = true;
                    if (inp.value === '1') {
                        lbl.style.background = 'rgba(46, 160, 67, 0.1)';
                        lbl.style.borderColor = '#2ea043';
                    } else if (inp.checked) {
                        lbl.style.background = 'rgba(231, 76, 60, 0.1)';
                        lbl.style.borderColor = '#e74c3c';
                    }
                }
            });
            if (submitButton) { submitButton.disabled = true; submitButton.textContent = 'Kuis Sudah Dikirim'; }
            document.querySelectorAll('[data-locked-after-quiz]').forEach(function(i) { i.hidden = false; });
            document.querySelectorAll('.lesson-lock-hint').forEach(function(i) { i.hidden = true; });
            if (nextLink) nextLink.classList.remove('is-disabled');
        });
    };

    window.initAiMlDiscussion = function() {
        var form = document.getElementById('aiMlDiscussionForm');
        var list = document.getElementById('aiMlDiscussionList');
        if (!form || !list || form.dataset.discussionReady) return;
        form.dataset.discussionReady = 'true';
        var STORAGE_KEY = 'heraiAiMlDiscussion';
        var fallback = [
            { id: 'seed-1', name: 'Aisyah Putri', time: 'Hari ini, 10.30', text: 'Ada yang bisa jelasin beda list dan tuple dengan contoh simpel? Aku masih suka bingung kapan pakai yang mana.', replies: [{ name: 'Mentor Rani', time: 'Hari ini, 10.42', text: 'List untuk data yang bisa berubah (seperti daftar peserta), tuple untuk data yang tetap (seperti koordinat lokasi). Tuple lebih cepat dan hemat memori.' }] }
        ];

        var esc = function(v) { return String(v||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;'); };
        var load = function() { return JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(fallback)); };
        var save = function(items) { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); };
        var ts = function() { return new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date()); };
        var render = function() {
            var items = load();
            list.innerHTML = items.map(function(item) {
                return '<article class="discussion-bubble"><div><span>' + esc(item.name.charAt(0)) + '</span><strong>' + esc(item.name) + '</strong><small>' + esc(item.time) + '</small></div><p>' + esc(item.text) + '</p><button type="button" data-reply="' + item.id + '">Reply</button><div class="discussion-replies">' + (item.replies || []).map(function(r) { return '<article><strong>' + esc(r.name) + '</strong><small>' + esc(r.time) + '</small><p>' + esc(r.text) + '</p></article>'; }).join('') + '</div></article>';
            }).join('');
            list.querySelectorAll('[data-reply]').forEach(function(b) {
                b.addEventListener('click', function() {
                    var txt = prompt('Tulis balasan diskusi:');
                    if (!txt || !txt.trim()) return;
                    var u = load();
                    var t = u.find(function(x) { return x.id === b.dataset.reply; });
                    if (t) { t.replies = t.replies || []; t.replies.push({ name: 'Aisyah Putri', time: ts(), text: txt.trim() }); save(u); render(); }
                });
            });
        };
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var ta = form.querySelector('textarea');
            var txt = ta?.value.trim();
            if (!txt) return;
            var u = load();
            u.unshift({ id: 'post-' + Date.now(), name: 'Aisyah Putri', time: ts(), text: txt, replies: [] });
            save(u); ta.value = ''; render();
        });
        render();
        render();
    };

    window.initAiMlMateri = function() {
        var container = document.getElementById('ml-chapter-container');
        if (!container) return;

        var STORAGE_KEY_CHAPTER = 'heraiAiMlCurrentChapter';
        var currentChapter = parseInt(localStorage.getItem(STORAGE_KEY_CHAPTER) || '1', 10);
        var totalChapters = 4; // All 5 modules are complete

        var btnPrev = document.getElementById('btn-prev-chapter');
        var btnNext = document.getElementById('btn-next-chapter');
        var btnFinish = document.getElementById('btn-finish-materi');

        function loadChapter(chapterNumber) {
            container.innerHTML = '<div style="text-align: center; padding: 60px; color: var(--fellow-muted);"><i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--fellow-pink); margin-bottom: 16px;"></i><p>Memuat Topik ' + chapterNumber + '...</p></div>';
            
            var formattedNumber = chapterNumber < 10 ? '0' + chapterNumber : chapterNumber;
            var path = '';
            if (chapterNumber === 1) path = '01-memulai-ml.html';
            else path = formattedNumber + '-materi.html'; // Future fallback

            fetch('/pages/frontend/fellow-dashboard/ai-fundamental/03-machine-learning/chapters/' + path)
                .then(function(res) { 
                    if (!res.ok) throw new Error('Not found'); 
                    return res.text(); 
                })
                .then(function(html) {
                    container.innerHTML = html;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    
                    // Activate Inline Playgrounds
                    startPyodide();
                    var runs = container.querySelectorAll('.py-run');
                    runs.forEach(function(btn) {
                        btn.addEventListener('click', function() {
                            var idMatch = this.getAttribute('onclick') ? this.getAttribute('onclick').match(/'([^']+)'/) : null;
                            var id = idMatch ? idMatch[1] : this.id.replace('btn-run-', '');
                            runCode(id);
                        });
                        btn.removeAttribute('onclick');
                    });
                    
                    // Update sidebar list styling
                    var listItems = document.querySelectorAll('#ml-sidebar-list li');
                    listItems.forEach(function(li) {
                        var chapter = parseInt(li.getAttribute('data-chapter') || '0', 10);
                        var icon = li.querySelector('i');
                        if (chapter === chapterNumber) {
                            li.classList.add('active');
                            icon.className = 'far fa-circle-play';
                        } else if (chapter < chapterNumber) {
                            li.classList.add('active');
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
                    console.error("Modul load error:", err);
                    container.innerHTML = '<div style="padding: 40px; text-align:center; color: #f63392;"><h3>Topik Belum Tersedia</h3><p>Topik ' + chapterNumber + ' masih dalam tahap penulisan oleh AI Curriculum Engineer.</p></div>';
                });

            if (btnPrev) btnPrev.style.display = chapterNumber > 1 ? 'block' : 'none';
            if (btnNext) btnNext.style.display = chapterNumber < totalChapters ? 'block' : 'none';
            if (btnFinish) btnFinish.style.display = chapterNumber === totalChapters ? 'block' : 'none';
        }

        if (btnPrev) {
            btnPrev.addEventListener('click', function() {
                if (currentChapter > 1) {
                    currentChapter--;
                    localStorage.setItem(STORAGE_KEY_CHAPTER, currentChapter.toString());
                    loadChapter(currentChapter);
                }
            });
        }

        if (btnNext) {
            btnNext.addEventListener('click', function() {
                if (currentChapter < totalChapters) {
                    currentChapter++;
                    localStorage.setItem(STORAGE_KEY_CHAPTER, currentChapter.toString());
                    loadChapter(currentChapter);
                }
            });
        }

        window.loadMlChapter = function(chapterNum) {
            if (chapterNum >= 1 && chapterNum <= totalChapters) {
                currentChapter = chapterNum;
                localStorage.setItem(STORAGE_KEY_CHAPTER, currentChapter.toString());
                loadChapter(currentChapter);
            }
        };

        // Load immediately
        loadChapter(currentChapter);
    };

})();
