<?php
// Declaramos la query para leer la tabla
$sql = 'SELECT player_name, points FROM arcade_record
         ORDER BY points DESC LIMIT 10';
    // Ordenamos por puntos 
    // DESC es para que ordene en orden descendiente
    // Limitamos a 10 el número de filas

// Ejecutamos la query
$result = $conn->query($sql);
    // La variable $result es un objeto de mysqlç
    // Al ser un objeto tendrá propiedades y atributos
    // num_rows es uno de ellos

?>