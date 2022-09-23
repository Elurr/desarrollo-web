<?php
include 'db-connect.php';

// Crear query de lectura de datos
$sql = 'SELECT id, firstname, lastname FROM MyGuests';
$result = $conn->query($sql);

// SI el resultado contiene más de una fila:
if ($result->num_rows > 0) {
    // imprimir datos de cada fila
    while($row = $result->fetch_assoc()) {
        // fetch_assoc es un método que transforma el objeto
        // en un array asociativo (cada índice contiene una fila de los resultados)
        // y cada una de estas filas se almacenan en cada bucle de $row

        echo "id: " . $row["id"] . " - Nombre: " . $row['firstname'] .
            ' ' . $row['lastname'] . "<br>";
    }
} else {
    echo 'No hay resultados que mostrar';
}

$conn->close();
?>