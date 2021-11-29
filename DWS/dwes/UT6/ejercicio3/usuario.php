<?php
//ejemplo3.php
$bd = new PDO('mysql:host=localhost;dbname=dwes;charset=utf8', 'dwes', 'usuario');

if (isset($_GET['q'])) {
    $consulta = $bd->prepare("SELECT id FROM users WHERE lower(username) = lower(:username)");
    $consulta->execute(['username' => $_GET['q']]);
    if ($usuario = $consulta->fetch()) {
        echo "El usuario ya existe";
    } else {
        echo "OK";
    }
} else {
    echo "";
}
