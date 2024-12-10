/* Estas son mas o menos las tablas que se requieren @Jesus, asi que por favor encargate de construir las demas y simular en xampp el servidor */

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);

CREATE TABLE documentos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    ruta_archivo VARCHAR(255) NOT NULL,
    usuario_id INT REFERENCES usuarios(id),
    fecha_subida TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comentarios (
    id SERIAL PRIMARY KEY,
    documento_id INT REFERENCES documentos(id),
    usuario_id INT REFERENCES usuarios(id),
    texto TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
