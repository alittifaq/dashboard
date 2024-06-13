document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm_password').value;
  
      // Validasi sederhana untuk memastikan password dan konfirmasi password sama
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
  
      const data = {
        fullname: fullname,
        email: email,
        password: password,
        confirm_password: confirmPassword
      };
  
      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Registration successful');
          form.reset();
        } else {
          alert('Registration failed: ' + data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
    });
  });
  