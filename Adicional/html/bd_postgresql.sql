-- Crear la Base de Datos: Bibliotech
CREATE DATABASE Bibliotech;

-- Conectar a la Base de Datos
\c Bibliotech;

-- Esquema de la Base de Datos para PostgreSQL

-- Tabla de Usuarios
CREATE TABLE Usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    rol VARCHAR(50) CHECK (rol IN ('Estudiante', 'Docente', 'Administrador')) NOT NULL,
    fecha_creacion TIMESTAMP NOT NULL
);

-- Tabla de Libros
CREATE TABLE Libros (
    id_libro SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    fecha_publicacion DATE NOT NULL,
    categoria VARCHAR(100),
    descripcion TEXT,
    archivo VARCHAR(255),
    id_usuario INT REFERENCES Usuarios(id_usuario)
);

-- Tabla de Categorias
CREATE TABLE Categorias (
    id_categoria SERIAL PRIMARY KEY,
    nombre_categoria VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Tabla de Comentarios
CREATE TABLE Comentarios (
    id_comentario SERIAL PRIMARY KEY,
    contenido TEXT NOT NULL,
    fecha TIMESTAMP NOT NULL,
    id_usuario INT REFERENCES Usuarios(id_usuario),
    id_libro INT REFERENCES Libros(id_libro)
);

-- Tabla de Historial de Lectura
CREATE TABLE Historial_Lectura (
    id_historial SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES Usuarios(id_usuario),
    id_libro INT REFERENCES Libros(id_libro),
    fecha_lectura TIMESTAMP NOT NULL
);

-- Tabla de Favoritos
CREATE TABLE Favoritos (
    id_favorito SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES Usuarios(id_usuario),
    id_libro INT REFERENCES Libros(id_libro)
);

-- Tabla de Configuraciones
CREATE TABLE Configuraciones (
    id_configuracion SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES Usuarios(id_usuario),
    notificaciones BOOLEAN NOT NULL,
    tema VARCHAR(50) CHECK (tema IN ('Claro', 'Oscuro')) NOT NULL,
    idioma VARCHAR(50) NOT NULL
);

-- Insertar datos en Usuarios
INSERT INTO Usuarios (nombre, correo, contrasena, rol, fecha_creacion) VALUES
('Juan Pérez', 'juan.perez@example.com', 'hashed_password1', 'Estudiante', CURRENT_TIMESTAMP),
('Ana Gómez', 'ana.gomez@example.com', 'hashed_password2', 'Docente', CURRENT_TIMESTAMP),
('Carlos López', 'carlos.lopez@example.com', 'hashed_password3', 'Administrador', CURRENT_TIMESTAMP);

-- Insertar datos en Categorias
INSERT INTO Categorias (nombre_categoria, descripcion) VALUES
('Ficción', 'Libros de ficción y novelas imaginativas'),
('Ciencia', 'Libros relacionados con la ciencia y tecnología'),
('Historia', 'Libros de acontecimientos históricos');

-- Insertar datos en Libros
INSERT INTO Libros (titulo, autor, fecha_publicacion, categoria, descripcion, archivo, id_usuario) VALUES
('El Principito', 'Antoine de Saint-Exupéry', '1943-04-06', 'Ficción', 'Un libro clásico para todas las edades.', '/rutas/el_principito.pdf', 1),
('Breve Historia del Tiempo', 'Stephen Hawking', '1988-03-01', 'Ciencia', 'Una exploración del universo.', '/rutas/historia_tiempo.pdf', 2),
('Sapiens', 'Yuval Noah Harari', '2011-09-04', 'Historia', 'Una breve historia de la humanidad.', '/rutas/sapiens.pdf', 2);

-- Insertar datos en Comentarios
INSERT INTO Comentarios (contenido, fecha, id_usuario, id_libro) VALUES
('Un libro increíble y conmovedor.', CURRENT_TIMESTAMP, 1, 1),
('Muy interesante, aunque algo complejo.', CURRENT_TIMESTAMP, 2, 2),
('Me hizo reflexionar mucho.', CURRENT_TIMESTAMP, 3, 3);

-- Insertar datos en Historial_Lectura
INSERT INTO Historial_Lectura (id_usuario, id_libro, fecha_lectura) VALUES
(1, 1, CURRENT_TIMESTAMP),
(2, 2, CURRENT_TIMESTAMP),
(3, 3, CURRENT_TIMESTAMP);

-- Insertar datos en Favoritos
INSERT INTO Favoritos (id_usuario, id_libro) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Insertar datos en Configuraciones
INSERT INTO Configuraciones (id_usuario, notificaciones, tema, idioma) VALUES
(1, TRUE, 'Claro', 'Español'),
(2, FALSE, 'Oscuro', 'Inglés'),
(3, TRUE, 'Claro', 'Francés');

--Nota: Para agregar más datos en alguna tabla, podemos usar el mismo comando o codigo, solo que se agregarían más datos, no afecta nada adcionar más


-- otros dos datos para usuario#1
INSERT INTO Usuarios (nombre, correo, contrasena, rol, fecha_creacion) VALUES
('Pedro Martínez', 'pedro.martinez@example.com', 'hashed_password4', 'Estudiante', CURRENT_TIMESTAMP),
('Laura Sánchez', 'laura.sanchez@example.com', 'hashed_password5', 'Docente', CURRENT_TIMESTAMP);

--Otros datos para libro
INSERT INTO Libros (titulo, autor, fecha_publicacion, categoria, descripcion, archivo, id_usuario) VALUES
('1984', 'George Orwell', '1949-06-08', 'Ficción', 'Una distopía sobre el control totalitario.', '/rutas/1984.pdf', 1),
('La teoría del todo', 'Stephen Hawking', '2002-06-23', 'Ciencia', 'Una explicación accesible sobre el universo.', '/rutas/teoria_todo.pdf', 2);

--otros datos para comentarios
INSERT INTO Comentarios (contenido, fecha, id_usuario, id_libro) VALUES
('Muy inspirador, me encantó.', CURRENT_TIMESTAMP, 1, 1),
('Interesante pero denso en algunos puntos.', CURRENT_TIMESTAMP, 2, 2);

--otros datos para historial de lectura
INSERT INTO Historial_Lectura (id_usuario, id_libro, fecha_lectura) VALUES
(1, 2, CURRENT_TIMESTAMP),
(2, 3, CURRENT_TIMESTAMP);

--otros datos para favoritos
INSERT INTO Favoritos (id_usuario, id_libro) VALUES
(1, 3),
(2, 1);


--otros datos para configuraciones
INSERT INTO Configuraciones (id_usuario, notificaciones, tema, idioma) VALUES
(1, FALSE, 'Oscuro', 'Español'),
(2, TRUE, 'Claro', 'Inglés');

