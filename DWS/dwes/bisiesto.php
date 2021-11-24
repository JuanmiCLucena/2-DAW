<?php
    $anyo = 2300;
    

    if($anyo % 4 == 0){
       
        if ($anyo % 100 == 0){
            
            if($anyo % 400 == 0){

                echo  $anyo . ' es bisiesto';
            }  
            else {
                echo $anyo . ' no es bisiesto';
            } 
        }
        else{
            echo  $anyo . ' es bisiesto';
        }
    }
    else{
        echo $anyo . ' no es bisiesto';
    }

?>