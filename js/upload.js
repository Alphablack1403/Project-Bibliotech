document.getElementById("upload-button").addEventListener("click", async () => {
    const file = document.getElementById("file-input").files[0];
    const description = document.getElementById("description").value;
  
    if (!file) {
      alert("Selecciona un archivo para subir");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);
  
    try {
      const response = await fetch("http://localhost:5000/api/upload", {  // Cambiar por la direccion que te otorgan al crear la base de datos
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        document.getElementById("progress-message").textContent = "Documento subido exitosamente";
      } else {
        document.getElementById("progress-message").textContent = "Error al subir el documento";
      }
    } catch (error) {
      alert("Error al conectar con el servidor");
    }
  });
  