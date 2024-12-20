<?php
// Datos de la base de datos
$host = "localhost"; // Cambia si tu base de datos está en otro servidor
$dbname = "documentos"; // Esto debes cambiarlo por el nombre de la base de datos en donde estén los documentos
$username = "root"; // Tu usuario de MySQL
$password = ""; // Tu contraseña de MySQL (si la tienes)

// Crear la conexión a la base de datos
$conn = new mysqli($host, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir el término de búsqueda desde el front-end (si está disponible)
$searchTerm = isset($_GET['search']) ? $conn->real_escape_string($_GET['search']) : '';

// Consulta SQL para buscar documentos que contengan el término en el nombre
$sql = "SELECT * FROM documentos WHERE nombre LIKE '%$searchTerm%'";

// Ejecutar la consulta
$result = $conn->query($sql);

// Verificar si hay resultados
if ($result->num_rows > 0) {
    // Crear un array para almacenar los documentos
    $documents = [];
    while ($row = $result->fetch_assoc()) {
        $documents[] = [
            'id' => $row['id'],
            'nombre' => $row['nombre'],
            'url' => $row['url'],
            'comentarios' => $row['comentarios']
        ];
    }
    // Devolver los resultados como JSON
    echo json_encode($documents);
} else {
    // Si no hay resultados, devolver un array vacío
    echo json_encode([]);
}

// Cerrar la conexión
$conn->close();
?>
