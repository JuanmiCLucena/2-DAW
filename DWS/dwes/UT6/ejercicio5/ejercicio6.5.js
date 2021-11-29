// ejemplo4.js
function mostrarProducto(codigo) {
    if (codigo.length == 0) {
        document.getElementById("spnNombre").innerHTML = "";
        document.getElementById("spnCodigo").innerHTML = "";
        document.getElementById("spnPVP").innerHTML = "";
        document.getElementById("spnFamilia").innerHTML = "";
        document.getElementById("pDescripcion").innerHTML = "";
        document.getElementById("ficha").style.display = "none";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var xmlDoc = this.responseXML;
                document.getElementById("spnNombre").innerHTML=
                xmlDoc.getElementsByTagName("nombre_corto")[0].childNodes[0].nodeValue;
                document.getElementById("spnCodigo").innerHTML=
                xmlDoc.getElementsByTagName("cod")[0].childNodes[0].nodeValue;
                document.getElementById("spnPVP").innerHTML=
                xmlDoc.getElementsByTagName("pvp")[0].childNodes[0].nodeValue;
                document.getElementById("spnFamilia").innerHTML=
                xmlDoc.getElementsByTagName("familia")[0].childNodes[0].nodeValue;
                document.getElementById("pDescripcion").innerHTML=
                xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;
                document.getElementById("ficha").style.display = "block";
            }
        };
        xmlhttp.open("GET", "ejercicio6.5servidor.php?cod=" + codigo, true);
        xmlhttp.send();
    }
}