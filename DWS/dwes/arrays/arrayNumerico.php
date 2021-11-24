<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Array Numérico</title>
</head>
<body>
    <?php
        $numeros = array(1,2,3,4,5);
        print_r($numeros);
        echo '</br>';
        unset ($numeros [3]);
        print_r($numeros); 
        $numerosOrdenados = array_values($numeros);
        echo '</br>';
        print_r($numerosOrdenados);

    ?>
</body>
</html>