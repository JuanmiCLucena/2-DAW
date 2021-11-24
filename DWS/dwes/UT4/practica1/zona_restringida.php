<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Area 51</title>
</head>
<body>
    <?php
        session_start();
        if (empty($_SESSION['usuario'])) {
            header("Location:login.php");
            
        } else { 
            if (!isset($_COOKIE['usuario'])) {
                echo "<h1>Bienvenido " . $_SESSION['usuario'] . "</h1>";
                echo "<p>Esta es tu primera visita</p>";
            } else {
                echo "<h1>¡Hola de nuevo!</h1>";
            }
            setcookie("usuario_" . $_SESSION['usuario'], $_SESSION['usuario'], time() + 3600);?>
            <form action="logout.php" method="post">
            <input type="submit" value="Cerrar sesión" name="cerrar">
            </form>
            <?php 
        } ?>
</body>
</html>