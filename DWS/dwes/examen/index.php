<?php
// INCLUIR ARCHIVOS
// INICIAR CONTADOR DE CLICS
// SI EL FORMULARIO HA SIDO ENVIADO
    // PROCESAR FORMULARIO
    // INCREMENTAR CONTADOR DE CLICS
    require_once "funciones.php";
    require_once "bd.php";
    session_start();
    $clics = 0;
    if(isset($_POST['enviar'])){
        $sql = "SELECT id, email , nombre, edad FROM socios WHERE nombre = :nombre";
        $consulta = $bd->prepare($sql);
        $consulta->execute(["nombre" => $_POST['nombre']]);
        $socio = $consulta->fetchAll();
        $clics .= 1;
        $_SESSION['clics'] = $clics;
        $_SESSION['nombre'] = $_POST['nombre'];
        $_SESSION['edad'] = $_POST['edad'];
    }
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Asociación de alumnos de DAW</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>Asociación de alumnos de DAW</h1>
    </header>

    <!-- MOSTRAR EL DIV BIENVENIDA SÓLO EN LA PRIMERA VISITA -->
    <div id="bienvenida">Bienvenido. Usa el formulario para añadir nuevos socios<a href="javascript:document.getElementById(\"bienvenida\").remove()">Cerrar</a></div>';
    <!-- MOSTRAR EL DIV BIENVENIDA SÓLO EN LA PRIMERA VISITA -->

    <div id="contenido">
        <h2>Lista de socios</h2>
        <ul>
            <!-- OBTENER LISTA DE SOCIOS Y MOSTRARLA. USAR LA FUNCIÓN PARA MOSTRAR LAS ETIQUETAS <LI> DE CADA SOCIO -->
        <li><?php echo "#" . $_SESSION['id'] . ":"?><a href=<?php echo 'mailto:' . $_POST['email']?>><?php echo $_SESSION['nombre']?></a> (<?php echo $_SESSION['edad']?> años)</li> 
        <li><?php echo "#" . $_SESSION['id'] . ":"?><a href=<?php echo 'mailto:' . $_POST['email']?>><?php echo $_SESSION['nombre']?></a> (<?php echo $_SESSION['edad']?> años)</li>
        <li><?php echo "#" . $_SESSION['id'] . ":"?><a href=<?php echo 'mailto:' . $_POST['email']?>><?php echo $_SESSION['nombre']?></a> (<?php echo $_SESSION['edad']?> años)</li>
        </ul>
        <p>Edad media de los socios: <strong><?php echo $_SESSION['edad']?></strong> años</p>
        <h2>Añadir socios</h2>

        <!-- COMPLETAR EL FORMULARIO -->
        <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
            <div>
                <label>Nombre</label>
                <input type="text" name="nombre" style="width: 80px;" value="nombre">&nbsp;</input>
            </div>
            <div>
                <label">Email</label>
                <input type="text" name="email" style="width: 80px;" value="email">&nbsp;</input>
            </div>
            <div>
                <label">Edad</label>
                <input type="number" name="edad" style="width: 80px;" value="edad">&nbsp;</input></br></br>
            </div>
            <div>
                <button type="submit" value="Enviar" name="enviar">Enviar</button>
            </div>

        </form>

        <!-- IMPRIMIR CANTIDAD DE VECES QUE SE HA PULSADO EL BOTÓN DE ENVIAR -->
        <p>Botón de enviar pulsado <strong><?php echo $_SESSION['clics'] ?></strong> veces.</p>
    </div>
</body>

</html>