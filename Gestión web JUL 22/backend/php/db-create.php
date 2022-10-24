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

echo 'Conectado con éxito';

// Crear base de datos
$sql = 'CREATE DATABASE phpDB';
if ($conn->query($sql) === TRUE) {
    echo 'Base de datos creada con éxito';
} else {
    echo 'Error al crear la base de datos: ' . $conn->error;
}

$conn->close();
?>