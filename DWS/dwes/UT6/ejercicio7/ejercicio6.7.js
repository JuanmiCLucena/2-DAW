// ejemplo5.js
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
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var producto = JSON.parse(this.responseText);
                document.getElementById("spnCodigo").innerHTML= producto.cod;
                document.getElementById("spnNombre").innerHTML= producto.nombre_corto;
                document.getElementById("pDescripcion").innerHTML="<br/>De: " + producto.descripcion;
                document.getElementById("spnPVP").innerHTML= producto['PVP'] // Podemos usar también este formato
                document.getElementById("spnFamilia").innerHTML="Familia: " + producto['familia']; // Podemos usar también este formato
                document.getElementById("ficha").style.display = "block";
            }
        };
        xmlhttp.open("GET", "ejercicio6.7servidor.php?cod=" + str, true);
        xmlhttp.send();
    }
}