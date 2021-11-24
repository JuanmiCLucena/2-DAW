<?php
require_once "funciones.php";
require_once "bd.php";

if (isset($_POST['btnComentario'])) {
    //INSERTAR COMENTARIO
    $ok = true;
    $bd->beginTransaction();
    if ($bd->exec("INSERT INTO comentarios (autor, texto, fecha, id_noticia) VALUES ('$_POST[txtAutor]', '$_POST[txtComentario]', NOW(), '$_POST[hidNoticia]') ") == 0) {
        $ok = false;
    }

    if ($ok) {
        $bd->commit(); // Si todo fue bien confirma los cambios
    } else {
        $bd->rollback(); //  y si no, los revierte
    }
    
    
    
}
//CONSULTAR NOTICIA
$id = $_GET['id'];
$resultado = $bd->prepare("SELECT id_noticia,titular,entradilla,cuerpo,fecha FROM noticias WHERE id_noticia = :id");
$resultado -> bindparam('id', $id);
$resultado -> execute();
$noticia = $resultado->fetch();

if (!$noticia) { /* COMPROBAR SI NO HA HABIDO RESULTADOS. SI ES ASÍ, LANZAMOS ERROR 404*/
    header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found", true, 404);
    include 'error404.php';
    exit();
}
//OBTENER DATOS NOTICIA
theHeader($noticia['titular']);
?>
    <p class="small"><a href="index.php">← Volver a portada</a></p>
    <h2><?php echo $noticia['titular'];?></h2>
    <p class="small">Publicado en: <?php echo $noticia['fecha'];?></p>
    <div id="imgcover"><img src='images/cover-<?php echo $noticia['id_noticia']; ?>.jpg' /></div>
    <?php echo $noticia['cuerpo']; ?>


    <h2>Comentarios</h2>
    <?php
//OBTENER COMENTARIOS DE LA NOTICIA
$id = $_GET['id'];
$resultado = $bd->prepare("SELECT autor, texto, fecha, id_noticia FROM comentarios WHERE id_noticia = :id");
$resultado -> bindparam('id', $id);
$resultado -> execute();
$noticias = $resultado->fetchAll();

if ($noticias) { //SI HAY COMENTARIOS
    echo '<ul>';
    foreach ($noticias as $noticia) {
        bloqueComentario($noticia);
    }
    echo '</ul>';
} else {
    echo "<p>Sin comentarios</p>";
}
?>
    <strong>Deja un comentario</strong>
    <form id="frmComentario" method="post" action="<?php echo $_SERVER['PHP_SELF'] . '?' . $_SERVER['QUERY_STRING'] ?>">
    <input name="hidNoticia" type="hidden" value="<?php echo $_GET['id']; ?>" />
    <p><input name="txtAutor" type="text" placeholder="Nombre" /></p>
    <p><textarea placeholder="Escribe tu comentario" name="txtComentario"></textarea></p>
    <p><input type="submit" name="btnComentario" value="Comentar" /></p>
    </form>
    <?php
theFooter();
