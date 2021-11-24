<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicio 4.3</title>
</head>
<body>
<?php
    require_once "bd.php";
    $sql = "SELECT user, password FROM usuarios WHERE user = :username";
    $consulta = $bd->prepare($sql);
    if (isset($_POST['Enviar'])) {
        $consulta->execute(["username" => $_POST['usuario']]);
        $usuario = $consulta->fetch();
        if (!empty($usuario) and password_verify($_POST['psw'], $usuario['password'])) {
            $_SESSION['usuario'] = $usuario['user'];
            echo '<h1>Bienvenido ' . $_SESSION['usuario'] .'</h1>';
        } else {
            echo 'Usuario o clave incorrectos';
        }
    }
    
?>
<form action="4.3.php" method="post">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="usuario" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <input type="submit" value="Enviar" name="Enviar">
</form>
</body>
</html>