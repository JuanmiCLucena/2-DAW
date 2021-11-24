<?php
$bd = new PDO('mysql:host=localhost;dbname=dwes;charset=utf8', 'dwes', 'usuario');
$ok = true;
$bd->beginTransaction();
$filas = $bd->exec("UPDATE stock 
           SET unidades = unidades -1
           WHERE producto = '3DSNG'
           AND tienda = 1");
if ($filas == 0) {
    $ok = false;
}
$filas = $bd->exec("INSERT INTO stock (producto, tienda, unidades) 
                    VALUES ('3DSNG', 3, 1)");
if ($filas == 0) {
    $ok = false;
}
if ($ok) {
    $bd->commit(); // Si todo fue bien confirma los cambios
} else {
    $bd->rollback(); //  y si no, los revierte
}