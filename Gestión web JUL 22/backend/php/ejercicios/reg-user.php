<?php
// tomar los datos del formulario
$user = $_POST['user'];
$email = $_POST['user'];
$pass = $_POST['pass1'];

// crear conexión a la bd
    //manualmente
    //include
    include 'conn.php';

// crear la query con la que introducimos los datos en la tabla 'users' 
$sql = "INSERT INTO users (usuario, email, password)
        VALUES ('$user', '$email', '$pass');";

if ($conn->query($sql) === TRUE) {
    echo 'Usuario registrado con éxito';
} else {
    echo 'Ha habido un error: ' . $conn->error;
}

?>