<?php
    $año = 2300;

    if ($año % 4 == 0){
        if($año % 100 == 0){
            echo "$año es bisiesto";
        } else {
            echo "$año no es bisiesto";
        }
    }
?>