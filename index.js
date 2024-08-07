document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("registerButton");

  registerButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Ambil nilai input dari form
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    // Validasi sederhana untuk memastikan password dan konfirmasi password sama
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Siapkan data untuk dikirim ke server
    const data = {
      fullname: fullname,
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };

    // Kirim data ke server menggunakan fetch
    fetch(
      "https://asia-southeast2-blkkalittifaq-426014.cloudfunctions.net/blkkalittifaq/data/adminregister",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Registrasi Berhasil");
          // Reset form setelah registrasi berhasil
          document.getElementById("fullname").value = "";
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          document.getElementById("confirm_password").value = "";
        } else {
          alert("Registration : " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan. Silakan coba lagi nanti.");
      });
  });

  // Event listener untuk checkbox "Show Password"
  document
    .getElementById("show-password")
    .addEventListener("change", function () {
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirm_password");
      if (this.checked) {
        password.type = "text";
        confirmPassword.type = "text";
      } else {
        password.type = "password";
        confirmPassword.type = "password";
      }
    });
});
