<?php

try {
    $bd = new PDO('mysql:host=localhost;dbname=dwes;charset=utf8', 'dwes', 'usuario');
} catch (PDOException $e) {
    exit($e->getMessage());
}
$exitos = 0;
$usuario = "rafabv";
$nombre = "Rafa";
$clave = password_hash("12341234", PASSWORD_DEFAULT);
try {
    $exitos += $bd->exec('INSERT INTO usuarios (user, password, name)
    VALUES ("' . $usuario . '", "' . $clave . '", "' . $nombre . '")');
} catch (PDOException $e) {
    echo "<p>Error: " . $e->getMessage() . "</p>";
}

$usuario = "kaox4";
$nombre = "Alberto";
$clave = password_hash("123123", PASSWORD_DEFAULT);
try {
    $exitos += $bd->exec('INSERT INTO usuarios (user, password, name)
    VALUES ("' . $usuario . '", "' . $clave . '", "' . $nombre . '")');
} catch (PDOException $e) {
    echo "<p>Error: " . $e->getMessage() . "</p>";
}

$usuario = "Haxe";
$nombre = "Antonio";
$clave = password_hash("12312", PASSWORD_DEFAULT);
try {
    $exitos += $bd->exec('INSERT INTO usuarios (user, password, name)
    VALUES ("' . $usuario . '", "' . $clave . '", "' . $nombre . '")');
} catch (PDOException $e) {
    echo "<p>Error: " . $e->getMessage() . "</p>";
}

echo "<p>" . $exitos . " usuarios añadidos con éxito</p>";

?>