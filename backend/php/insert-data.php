<?php
include 'db-connect.php';

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com');";

// Insertar múltiples datos en una sola query
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Mary', 'Moe', 'mary@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Julie', 'Dooley', 'julie@example.com')";

// Ejecutar el método multiquery
if ($conn->multi_query($sql) === TRUE) {
    echo 'Datos introducidos correctamente';
} else {
    echo 'Ha habido un error al introducir los datos: ' . $conn->error;
}

$conn->close();

?>