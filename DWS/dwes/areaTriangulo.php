<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Área Triángulo</title>
</head>
<body>
    <?php
        $base = $_GET['base'] ?? 5;
        $altura = $_GET['altura'] ?? 5;
        $area = ($base * $altura) / 2;
        echo "La base es: " . $base . '</br>';
        echo "La altura es: " . $altura . '</br>';
        echo "El área es: " . $area . '</br>';

        

    ?>
</body>
</html>