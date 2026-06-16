window.initLoginFellow = function() {
    const loginForm = document.getElementById('fellowLoginForm');
    if (!loginForm) return;
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nik = document.getElementById('fellowNik').value;
        if (nik.length === 16) {
            localStorage.setItem('herai_fellow_session', nik);
            window.location.hash = '#/choose-role';
        } else {
            alert('NIK harus 16 digit.');
        }
    });
};
