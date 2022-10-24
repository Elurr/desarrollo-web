<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        include 'conn_arcade.php';
        // Guardamos los datos en variables
        $player_name = $_POST['player_name'];
        $player_points = $_POST['player_points'];

        // Elaboramos la query para guardar datos
        $sql = "INSERT INTO arcade_record (player_name, points)
                VALUES ('$player_name', $player_points)";

        // Ejecutamos la query con comprobación de errores
        if ($conn->query($sql) === TRUE) {
            // Si todo funciona, me redirije a la página principal
            header("Location: index.php");
            exit();
            // exit() detiene la ejecución del script
            // Se usa junto al header para evitar resultados no deseados
        } else {
            echo 'Ha habido un error al introducir los datos: ' . $conn->error;
        }
    
}
