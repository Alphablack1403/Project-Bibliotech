// Simulación de datos de documentos
const documents = [
    { id: 1, name: "Documento 1", url: "document1.pdf", comments: ["Comentario 1", "Comentario 2"] },
    { id: 2, name: "Documento 2", url: "document2.pdf", comments: ["Comentario A", "Comentario B"] },
    { id: 3, name: "Documento sobre JS", url: "document3.pdf", comments: ["Comentario JS 1", "Comentario JS 2"] },
    { id: 4, name: "Guía de HTML y CSS", url: "document4.pdf", comments: ["Comentario HTML 1", "Comentario CSS 1"] },
  ];
  
  // Elementos del DOM
  const documentListContainer = document.getElementById("document-list-container");
  const documentViewer = document.getElementById("document-viewer");
  const documentList = document.getElementById("document-list");
  const pdfViewer = document.getElementById("pdf-viewer");
  const commentsList = document.getElementById("comments-list");
  const newComment = document.getElementById("new-comment");
  const backButton = document.getElementById("back-button");
  const addCommentButton = document.getElementById("add-comment");
  const searchBar = document.getElementById("search-bar");
  
  // Función para cargar la lista de documentos
  function loadDocumentList(filteredDocuments = documents) {
    documentList.innerHTML = "";
    filteredDocuments.forEach((doc) => {
      const listItem = document.createElement("li");
      listItem.textContent = doc.name;
      listItem.style.cursor = "pointer";
      listItem.addEventListener("click", () => viewDocument(doc));
      documentList.appendChild(listItem);
    });
  }
  
  // Función para filtrar documentos según el texto ingresado en el buscador
  searchBar.addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredDocuments = documents.filter((doc) =>
      doc.name.toLowerCase().includes(searchText)
    );
    loadDocumentList(filteredDocuments);
  });
  
  // Función para ver un documento y sus comentarios
  function viewDocument(doc) {
    documentListContainer.style.display = "none";
    documentViewer.style.display = "block";
  
    // Mostrar PDF
    pdfViewer.src = doc.url;
  
    // Cargar comentarios
    commentsList.innerHTML = "";
    doc.comments.forEach((comment) => {
      const commentItem = document.createElement("li");
      commentItem.textContent = comment;
      commentsList.appendChild(commentItem);
    });
  
    // Manejo del botón para agregar comentario
    addCommentButton.onclick = () => {
      const commentText = newComment.value.trim();
      if (commentText) {
        doc.comments.push(commentText);
        const newCommentItem = document.createElement("li");
        newCommentItem.textContent = commentText;
        commentsList.appendChild(newCommentItem);
        newComment.value = "";
      }
    };
  }
  
  // Función para volver a la lista de documentos
  backButton.addEventListener("click", () => {
    documentViewer.style.display = "none";
    documentListContainer.style.display = "block";
  });
  
  // Inicializar
  loadDocumentList();
  
  
// ? ********************************************************** Cuando la base de datos este implementada usar:

/* // Elementos del DOM
const documentListContainer = document.getElementById("document-list-container");
const documentViewer = document.getElementById("document-viewer");
const documentList = document.getElementById("document-list");
const pdfViewer = document.getElementById("pdf-viewer");
const commentsList = document.getElementById("comments-list");
const newComment = document.getElementById("new-comment");
const backButton = document.getElementById("back-button");
const addCommentButton = document.getElementById("add-comment");
const searchBar = document.getElementById("search-bar");

// Función para cargar la lista de documentos desde la base de datos
function loadDocumentList(searchTerm = '') {
  // Realizar la solicitud AJAX al archivo PHP
  fetch(`search_documents.php?search=${searchTerm}`)
    .then((response) => response.json())
    .then((documents) => {
      documentList.innerHTML = '';
      if (documents.length > 0) {
        documents.forEach((doc) => {
          const listItem = document.createElement("li");
          listItem.textContent = doc.nombre;
          listItem.style.cursor = "pointer";
          listItem.addEventListener("click", () => viewDocument(doc));
          documentList.appendChild(listItem);
        });
      } else {
        documentList.innerHTML = "<li>No se encontraron documentos.</li>";
      }
    })
    .catch((error) => {
      console.error("Error al obtener los documentos:", error);
    });
}

// Función para filtrar documentos según el texto ingresado en el buscador
searchBar.addEventListener("input", (event) => {
  const searchText = event.target.value.trim();
  loadDocumentList(searchText);
});

// Función para ver un documento y sus comentarios
function viewDocument(doc) {
  documentListContainer.style.display = "none";
  documentViewer.style.display = "block";

  // Mostrar PDF
  pdfViewer.src = doc.url;

  // Cargar comentarios
  commentsList.innerHTML = "";
  const comments = doc.comentarios.split(", ");
  comments.forEach((comment) => {
    const commentItem = document.createElement("li");
    commentItem.textContent = comment;
    commentsList.appendChild(commentItem);
  });

  // Manejo del botón para agregar comentario
  addCommentButton.onclick = () => {
    const commentText = newComment.value.trim();
    if (commentText) {
      comments.push(commentText);
      const newCommentItem = document.createElement("li");
      newCommentItem.textContent = commentText;
      commentsList.appendChild(newCommentItem);
      newComment.value = "";
    }
  };
}

// Función para volver a la lista de documentos
backButton.addEventListener("click", () => {
  documentViewer.style.display = "none";
  documentListContainer.style.display = "block";
});

// Inicializar
loadDocumentList();
 */

