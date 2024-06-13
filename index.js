document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton');
  
    registerButton.addEventListener('click', function(event) {
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
  
      fetch('https://asia-southeast2-blkkalittifaq-426014.cloudfunctions.net/blkkalittifaq/data/adminregister', {
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
          document.getElementById('fullname').value = '';
          document.getElementById('email').value = '';
          document.getElementById('password').value = '';
          document.getElementById('confirm_password').value = '';
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
  