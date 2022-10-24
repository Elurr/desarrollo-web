<?php
$servername = 'localhost';
$username = 'root';
$password = 'Meatze10';

// Crear conexión
$conn = new mysqli($servername, $username, $password);

// Comprobar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

echo 'Conectado con éxito <br>';

// Seleccionar la BD
$sqlDB = 'USE phpDB';

if ($conn->query($sqlDB) === TRUE) {
    echo 'Base de datos phpDB seleccionada <br>';
} else {
    echo 'Error al seleccionar la BD <br>' . $conn->error;
}

// Cerrar la conexión
//$conn->close();
?>