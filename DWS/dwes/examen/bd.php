<?php
//CONECTAR CON LA BBDD
//SI HAY ERRORES, SALIR
//USAR UTF-8
    try {
        $bd = new PDO("mysql:host=localhost; dbname=examen; charset=utf8", "examen", "examen");
       
    } catch (\PDOException $p) {
        echo "Error ".$p->getMessage()."<br />";
    }

?>


