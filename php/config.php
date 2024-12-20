<?php
// Configuración de la base de datos
define('DB_HOST', 'localhost'); //Cambia aca por el host
define('DB_PORT', '5432');  // Cambia por el puerto
define('DB_NAME', 'nombre_de_tu_base'); // Nombre de la base de datos
define('DB_USER', 'tu_usuario'); // El usuario que
define('DB_PASSWORD', 'tu_contraseña'); // La contraseña del usuario

try {
    $pdo = new PDO(
        "pgsql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME,
        DB_USER,
        DB_PASSWORD
    );
    // Configurar el manejo de errores
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error al conectar a la base de datos: " . $e->getMessage());
}
?>
