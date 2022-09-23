<?php
// Tomamos las variables superglobales, enviadas desde el formulario

$usuario = $_POST['user'];
$correo = $_POST['email'];
$pass = $_POST['pass1'];

echo 'Sus datos son: <br> Usuario: ' . $usuario . '<br>' .
    'Correo electrónico: ' . $correo . '<br>' .
    'Contraseña: ' . $pass;


  
?>