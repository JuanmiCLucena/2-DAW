<?php
try {
$bd = new PDO("mysql:host=localhost; dbname=dwes; charset=utf8;", "dwes", "usuario");
$bd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $p) {
    echo "Error ".$p->getMessage()."<br />";
}
?>