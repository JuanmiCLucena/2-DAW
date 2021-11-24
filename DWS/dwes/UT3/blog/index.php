<?php
require_once "funciones.php";
require_once "bd.php";

theHeader();
?>

<h2>Últimas entradas</h2>
<ul class="listaNoticias">
<?php
   $resultado = $bd->query("SELECT id_noticia,titular,entradilla,cuerpo,fecha FROM noticias");
   $noticias = $resultado->fetchAll();


/* OBTENER LA LISTA DE NOTICIAS Y PASARSELAS A bloqueNoticia. OBTENER TAMBIÉN TOTAL DE COMENTARIOS */
foreach ($noticias as $noticia ) {
    bloqueNoticia($noticia);
}
    
   

?>
</ul>
<?php
theFooter();
// CERRAR CONEXIÓN BBDD
