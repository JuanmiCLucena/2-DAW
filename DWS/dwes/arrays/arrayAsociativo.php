<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Array Asociativo</title>
</head>
<body>
    <?php
        $diccionario = array("ball" => "pelota", "book" => "libro", "table" => "mesa", "keyboard" => "teclado","strawberry" => "fresa");
        echo "El diccionario contiene " . count($diccionario) . " palabras" . '</br>';


        if (in_array("pelota", $diccionario)) {
            echo "Existe" . '</br>';
        } else {
            echo "No existe " . '</br>';
        }

        if (array_key_exists("car", $diccionario)) {
            echo "Existe" . '</br>';
        } else {
            echo "No existe " . '</br>';
        }

        $posicion = array_search("fresa",$diccionario);
        if ($posicion !== false) {
            echo  $posicion . '</br>';
        } else {
            echo   "No esta la traducción " . '</br>';
        }


    ?>
</body>
</html>