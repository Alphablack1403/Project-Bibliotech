document.getElementById("submit-comment").addEventListener("click", () => {
    const comment = document.getElementById("comment").value;
    if (!comment) return alert("Escribe un comentario");
  
    const listItem = document.createElement("li");
    listItem.textContent = comment;
    document.getElementById("comments-list").appendChild(listItem);
  
    document.getElementById("comment").value = "";
  });
  