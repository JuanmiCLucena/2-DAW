<?php
    $bd = new PDO('mysql:host=localhost;dbname=dwes', 'dwes', 'usuario');
    $registros = $bd->exec('UPDATE stock SET unidades=1 WHERE codigo="3DSNG" AND tienda="CENTRAL"');
    echo "<p>Se han actualizado $registros registros.</p>";
    $registros = $bd->exec("INSERT INTO stock (producto, tienda, unidades) 
    VALUES ('3DSNG', 3, 1)");
?>