<?php
// ejercicio6.5servidor.php
header('Content-Type: text/xml'); // Esta línea indica que la respuesta es XML
header("Cache-Control: no-cache, must-revalidate"); // Esta línea ayuda a que la respuesta no se incluya en caché
// Fecha caducada
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); // Esta línea ayuda a que la respuesta no se incluya en caché

$q=$_GET["cod"];
$bd = new PDO('mysql:host=localhost;dbname=dwes;charset=utf8', 'dwes', 'usuario');
echo '<?xml version="1.0" encoding="ISO-8859-1"?>
<producto>';
$consulta = $bd->prepare("SELECT cod, nombre, nombre_corto, descripcion, PVP, familia FROM producto WHERE cod = :codigo");
$consulta->execute(['codigo' => $q]);
if ($producto = $consulta->fetch()) {
    echo "<cod>" . $producto['cod'] . "</cod>";
    echo "<nombre>" . $producto['nombre'] . "</nombre>";
    echo "<nombre_corto>" . $producto['nombre_corto'] . "</nombre_corto>";
    echo "<descripcion>" . $producto['descripcion'] . "</descripcion>";
    echo "<pvp>" . $producto['PVP'] . "</pvp>";
    echo "<familia>" . $producto['familia'] . "</familia>";
}
echo "</producto>";
