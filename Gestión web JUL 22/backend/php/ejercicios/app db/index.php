<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App con Base de datos</title>
</head>
<?php
// Realizamos conexión a la BD
include 'conn_arcade.php';

// Tomamos los datos de la tabla
include 'data_read.php';
?>

<body>
    <h2>Aplicación web con base de datos</h2>

    <table>
        <?php
        $data = 0;

        // Tomamos los datos de la tabla y los imprimimos
        if ($result->num_rows > 0) {
            // Si la query nos da por lo menos un restabletado:

            while ($row = $result->fetch_assoc()) {

                // Imprimimos las filas en la tabla
                echo "<tr><td> " . $row['points'] . '</td><td>' .
                    $row['player_name'] . "</td></tr>";
                $data = $row['points'];
            }
        }

        ?>
    </table>

    <form action="data_write.php" method="post" autocomplete="off">
        <input type="text" maxlength="3" name="player_name">
        <label for="">Nombre</label> <br>
        <input type="number" name="player_points">
        <label for="">Puntos</label> <br>

        <input type="submit" value="Enviar">
    </form>


    <?php
    // Enviar
    echo $data;
    
    ?>



</body>
<!-- 
    - Tenemos un input donde el usuario genera un dato numérico
    - Este dato (puntuación) se guarda en la bd con un string de 3 caracteres
    - Cada vez que se carga la página se muestra/n la/s mayor/es puntuacion/es
    - Un botón de enviar form para guardar los datos en la bd y otro input para guardar el nombre
    


    - El nombre sólo te lo pide si quedas entre los 10 primeros, si no, no se guarda
 -->

</html>