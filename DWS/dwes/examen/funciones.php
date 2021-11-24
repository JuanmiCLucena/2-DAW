<?php

function imprimeSocio($socio) {
    // Imprimir la etiqueta <li> del socio
    echo "<li>";
    echo "</li>";
}

function edadMedia($socios) {
    // Devuelve la edad media de los socios.
    echo $socios['edad'] / $socios;
}