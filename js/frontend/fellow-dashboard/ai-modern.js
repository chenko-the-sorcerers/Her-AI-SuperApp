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
        container.innerHTML = '<div style="text-align: center; padding: 60px; color: var(--fellow-muted);"><i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--fellow-pink); margin-bottom: 16px;"></i><p>Memuat Modul ' + chapterNumber + '...</p></div>';
        
        var formattedNumber = chapterNumber < 10 ? '0' + chapterNumber : chapterNumber;
        var path = formattedNumber + '-materi.html';

        fetch('/pages/frontend/fellow-dashboard/ai-fundamental/03-konsep-ai-modern/chapters/' + path)
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
                document.querySelectorAll('.lesson-list-card li.active').forEach(function(li) {
                    var liNum = parseInt(li.querySelector('span').innerText, 10);
                    var link = li.querySelector('a');
                    if (liNum === 3) {
                        // Keep modern AI active, we don't have separate sidebar links for sub-chapters yet, just main modules
                    }
                });
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

    // Load initial chapter
    loadChapter(currentChapter);
};
