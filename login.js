document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulating a server request. Replace this with actual server request.
        const storedUser = localStorage.getItem('user');
        const user = storedUser ? JSON.parse(storedUser) : null;

        if (user && user.email === email && user.password === password) {
            alert('Login successful!');
            // Redirect to the admin dashboard or homepage
            window.location.href = 'dashboard.html'; // Change this to your desired page
        } else {
            document.getElementById('error').style.display = 'block';
        }
    });
});
