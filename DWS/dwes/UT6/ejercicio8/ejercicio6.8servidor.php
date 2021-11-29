<?php
// ejercicio6.7servidor.php
header('Content-Type: application/json'); // Esta línea indica que la respuesta es XML
header("Cache-Control: no-cache, must-revalidate"); // Esta línea ayuda a que la respuesta no se incluya en caché
// Fecha caducada
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); // Esta línea ayuda a que la respuesta no se incluya en caché

$q=$_GET["cod"];
$bd = new PDO('mysql:host=localhost;dbname=dwes;charset=utf8', 'dwes', 'usuario');
$consulta = $bd->prepare("SELECT cod, nombre, nombre_corto, descripcion, PVP, familia FROM producto WHERE cod = :codigo");
$consulta->execute(['codigo' => $q]);
if ($producto = $consulta->fetch()) {
    echo json_encode($producto);
}