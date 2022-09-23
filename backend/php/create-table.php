<?php
// Ambas líneas ejecutan el código del archivo mencionado
include 'db-connect.php'; // Warning si hay fallo
// require 'db-connect.php'; // Detiene la ejecución si hay fallo

// script sql para crear la tabla
$sql = "CREATE TABLE MyGuests (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

if ($conn->query($sql) === TRUE) {
    echo 'Tabla creada con éxito';
} else {
    echo 'Ha habido un error al crear la tabla: ' . $conn->error;
}

$conn->close();
?>