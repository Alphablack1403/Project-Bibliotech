document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        alert("Inicio de sesión exitoso");
      } else {
        alert("Error al iniciar sesión");
      }
    } catch (error) {
      alert("Error al conectar con el servidor");
    }
  });
  
  document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        alert("Registro exitoso");
      } else {
        alert("Error al registrarse");
      }
    } catch (error) {
      alert("Error al conectar con el servidor");
    }
});