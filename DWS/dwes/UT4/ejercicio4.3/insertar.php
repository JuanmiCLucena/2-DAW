<?php
    $bd = new PDO("mysql:host=localhost; dbname=dwes; charset=utf8;", "dwes", "usuario");
    $usuario = "lola25";
    $nombre = "Lola Pérez";
    $clave = password_hash("12341234", PASSWORD_DEFAULT);
    $bd->exec('INSERT INTO usuarios (user, password)
           VALUES ("' . $usuario . '", "' . $clave . '")');
?>