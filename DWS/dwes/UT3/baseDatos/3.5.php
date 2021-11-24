<?php

$bd = new PDO('mysql:host=localhost;dbname=dwes;charset=utf8', 'dwes', 'usuario');

$codigo = $_GET['codigo'];

$resultado = $bd->query("SELECT nombre_corto,
                                descripcion,
                                PVP,
                                familia
                         FROM producto
                         WHERE cod = '".$codigo . "'");
$producto = $resultado->fetch();
?>
<html>
    <head>
        <title>Ficha de <?php echo $producto['nombre_corto'];?></title>
    </head>
    <body>
        <h1>Ficha de <?php echo $producto['nombre_corto'];?></h1>
        <h2>Características</h2>
        <p>Código: <?php echo $codigo;?></p>
        <p>Familia: <?php echo $producto['familia'];?></p>
        <p>PVP: <?php echo $producto['PVP'];?></p>
        <p><?php echo $producto['descripcion'];?></p>
        <h2>Disponibilidad</h2>
        
<?php
$resultado2 = $bd->query("SELECT tienda, unidades
                          FROM stock
                          WHERE producto = '".$codigo . "'");
$stock_total = $resultado2->fetchAll();
if (count($stock_total) > 0) {
    echo "<ul>";
    foreach ($stock_total as $stock) {
        echo "<li>" . $stock['unidades'] . "uds en tienda " . $stock['tienda'] . '</li>';
    } 
    echo "</ul>";
} else {
    echo "Unidades agotadas";
}
?>
    </body>
</html>