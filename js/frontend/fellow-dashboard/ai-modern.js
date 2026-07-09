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
