<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tabla</title>
</head>
<body>
    <?php
        $filas = 7;
        $columnas = 5;
        echo "<table>";
        for ($i=0; $i < $filas ; $i++) { 
            echo "<tr>";
            for ($j=0; $j < $columnas; $j++) { 
                echo "<td>#</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
    ?>
    
</body>
</html>
