window.initChooseRole = function() {
    const cards = document.querySelectorAll('.role-card');
    cards.forEach(c => {
        c.addEventListener('click', () => {
            cards.forEach(card => card.classList.remove('active'));
            c.classList.add('active');
        });
    });
    const btn = document.getElementById('btnContinueRole');
    if (btn) {
        btn.addEventListener('click', () => {
            window.location.hash = '#/fellow-dashboard';
        });
    }
};
