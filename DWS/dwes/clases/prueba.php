<?php

require __DIR__ . '/vendor/autoload.php';

$micaja = new DWES\Caja();
$micaja->introduce("algo");
echo "La caja contiene:";
$micaja->muestra_contenido();
echo "<br/>";

$mirectangulo = new DWES\Rectangulo();
echo "El area es: ";
echo $mirectangulo->areaRectangulo();
