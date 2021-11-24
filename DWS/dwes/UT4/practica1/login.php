<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Inicio de sesión</title>
</head>
<body>
<?php
    session_start();
    $bd = new PDO('mysql:host=localhost;dbname=dwes;charset=utf8', 'dwes', 'usuario');
    $sql = "SELECT user, password, name FROM usuarios WHERE user = :username";
    $consulta = $bd->prepare($sql);
    if (isset($_POST['Enviar'])) {
        $consulta->execute(["username" => $_POST['usuario']]);
        $usuario = $consulta->fetch();
        if (!empty($usuario) and password_verify($_POST['psw'], $usuario['password'])) {
            $_SESSION['usuario'] = $usuario['name'];
            header("Location:zona_restringida.php");
        } else {
            echo 'Usuario o clave incorrectos';
        }
    }

    if (!empty($_SESSION['usuario'])) {
        header("Location:zona_restringida.php");
    }
    
?>
<form action="login.php" method="post">
    <label for="user"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="usuario" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <input type="submit" value="Enviar" name="Enviar">
</form>
</body>
</html>