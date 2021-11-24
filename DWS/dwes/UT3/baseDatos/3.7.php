<?php
try {
$bd = new PDO("mysql:host=localhost; dbname=dwes", "dwes", "abc123");
$bd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $p) {
    echo "Error ".$p->getMessage()."<br />";
}
?>