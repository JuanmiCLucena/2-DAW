<?php
function es_familia_numerosa($hermanos){
    if ($hermanos >= 3) {
        return true;
    } else {
        return false;
    }
}

function es_familia_numerosa2(int $hermanos){
    if ($hermanos >= 3) {
        return true;
    } else {
        return false;
    } 
}

 if(es_familia_numerosa(3) == 1){
     echo 'true' . '<br/>';
}else {
    echo 'false' . '<br/>';
 }

 if(es_familia_numerosa(1) == 1){
    echo 'true' . '<br/>';
}else {
   echo 'false' . '<br/>';
}

if(es_familia_numerosa("tres") == 1){
    echo 'true' . '<br/>';
}else {
   echo 'false' . '<br/>';
}

 if (es_familia_numerosa2(3) == 1) {
     echo 'true' . '<br/>';
 } else {
     echo 'false' . '<br/>';
 }

 if (es_familia_numerosa2(1) == 1) {
    echo 'true' . '<br/>';
} else {
    echo 'false' . '<br/>';
}

if (es_familia_numerosa2("tres") == 1) {
    echo 'true' . '<br/>';
} else {
    echo 'false' . '<br/>';
}

?>