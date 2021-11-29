// ejemplo5fetch.js
function mostrarProducto(str) {
    if (str.length == 0) {
        document.getElementById("spnCodigo").innerHTML = "";
        document.getElementById("spnNombre").innerHTML = "";
        document.getElementById("pDescripcion").innerHTML = "";
        document.getElementById("spnPVP").innerHTML = "";
        document.getElementById("spnFamilia").innerHTML = "";
        document.getElementById("ficha").style.display = "none";
        return;
    } else {
        fetch('ejercicio6.8servidor.php?cod=' + str).then(function(response) { 
            // Convertimos a JSON
            return response.json(); // Este response.json() que devolvemos...
        }).then(function(producto) { // ...lo recibimos en esta función en el parámetro "persona"
                document.getElementById("spnCodigo").innerHTML= producto.cod;
                document.getElementById("spnNombre").innerHTML= producto.nombre_corto;
                document.getElementById("pDescripcion").innerHTML="<br/>De: " + producto.descripcion;
                document.getElementById("spnPVP").innerHTML= producto['PVP'] // Podemos usar también este formato
                document.getElementById("spnFamilia").innerHTML="Familia: " + producto['familia']; // Podemos usar también este formato
                document.getElementById("ficha").style.display = "block";
        });
    }
}