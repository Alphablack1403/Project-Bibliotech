<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'register') {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare("INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)");
        $stmt->execute([$nombre, $correo, $contrasena]);
        echo json_encode(["status" => "success", "message" => "Usuario registrado con éxito"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }
}
?>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'login') {
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    try {
        $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE correo = ?");
        $stmt->execute([$correo]);
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($usuario && password_verify($contrasena, $usuario['contrasena'])) {
            echo json_encode(["status" => "success", "message" => "Inicio de sesión exitoso"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Credenciales incorrectas"]);
        }
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }
}
?>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'upload') {
    if (isset($_FILES['file'])) {
        $descripcion = $_POST['descripcion'];
        $usuario_id = $_POST['usuario_id']; // Asegúrate de manejar sesiones para obtener este ID
        $file = $_FILES['file'];
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($file["name"]);

        if (move_uploaded_file($file["tmp_name"], $target_file)) {
            try {
                $stmt = $pdo->prepare(
                    "INSERT INTO documentos (nombre, descripcion, ruta_archivo, usuario_id) VALUES (?, ?, ?, ?)"
                );
                $stmt->execute([$file["name"], $descripcion, $target_file, $usuario_id]);
                echo json_encode(["status" => "success", "message" => "Documento subido con éxito"]);
            } catch (PDOException $e) {
                echo json_encode(["status" => "error", "message" => $e->getMessage()]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Error al subir el archivo"]);
        }
    }
}
?>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'comment') {
    $documento_id = $_POST['documento_id'];
    $usuario_id = $_POST['usuario_id'];
    $texto = $_POST['texto'];

    try {
        $stmt = $pdo->prepare(
            "INSERT INTO comentarios (documento_id, usuario_id, texto) VALUES (?, ?, ?)"
        );
        $stmt->execute([$documento_id, $usuario_id, $texto]);
        echo json_encode(["status" => "success", "message" => "Comentario agregado con éxito"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }
}
?>
