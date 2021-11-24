<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulario POST</title>
</head>
<body>
    <?php 
        if (isset($_POST['enviar'])) { 
            $numero1 = $_POST['numero1'];
            $numero2 = $_POST['numero2'];
            $ip = $_POST['ip'];
            $resultado;
            if ($_POST['operacion'] == 'sumar') {
                $resultado = $numero1 + $numero2;
                echo $resultado . '<br/>';
            } else {
                $resultado = $numero1 - $numero2;
                echo $resultado . '<br/>';
            }
            echo $ip;
        }

        
        ?>
</body>
</html>