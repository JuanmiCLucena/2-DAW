<?php
//ejemplo2municipios.php
$bd = new PDO('mysql:host=localhost;dbname=Comunidades;charset=utf8', 'dwes', 'usuario');

if (isset($_GET['id'])) {
    echo '<option value="">Seleccione...</option>'; // Imprimimos opción vacía

    $consulta = $bd->prepare("SELECT id, municipio FROM municipios WHERE provincia_id = :id");
    $consulta->execute(['id' => $_GET['id']]);
    while ($municipio = $consulta->fetch()) {
        echo '<option value="' . $municipio['id'] . '">' . $municipio['municipio'] . '</option>';
    }
} else {
    echo "";
}