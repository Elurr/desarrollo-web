<?php
// Tomamos las variables superglobales, enviadas desde el formulario

$usuario = $_GET['user'];
$correo = $_GET['email'];
$pass = $_GET['pass1'];

echo 'Sus datos son: <br> Usuario: ' . $usuario . '<br>' .
    'Correo electrónico: ' . $correo . '<br>' .
    'Contraseña: ' . $pass;


// El método GET es sencillo de pero no se considera seguro, 
    // porque no almacena los datos
    // si no que los envía escritos en el propio link.    
?>