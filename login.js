document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorElement = document.getElementById('error');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk submit secara default

        // Mengambil nilai email dan password dari input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulasi permintaan ke server. Gantilah dengan permintaan sebenarnya ke server Anda.
        const storedUser = localStorage.getItem('user');
        const user = storedUser ? JSON.parse(storedUser) : null;

        // Memeriksa apakah email dan password cocok
        if (user && user.email === email && user.password === password) {
            // Jika cocok, tampilkan pesan sukses dan redirect ke halaman dashboard
            alert('Login successful!');
            // Ganti halaman ini dengan halaman yang sesuai setelah login sukses
            window.location.href = 'dashboard.html';
        } else {
            // Jika tidak cocok, tampilkan pesan error
            errorElement.style.display = 'block';
        }
    });
});
