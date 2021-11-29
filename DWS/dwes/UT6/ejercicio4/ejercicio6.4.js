// ejemplo4.js
function mostrarPersonaje(str) {
    if (str.length == 0) {
        document.getElementById("spnNombre").innerHTML = "";
        document.getElementById("spnApellido").innerHTML = "";
        document.getElementById("spnTrabajo").innerHTML = "";
        document.getElementById("ficha").style.display = "none";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var xmlDoc = this.responseXML;
                document.getElementById("spnNombre").innerHTML=
                xmlDoc.getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
                document.getElementById("spnApellido").innerHTML=
                xmlDoc.getElementsByTagName("apellido")[0].childNodes[0].nodeValue;
                document.getElementById("spnTrabajo").innerHTML=
                xmlDoc.getElementsByTagName("trabajo")[0].childNodes[0].nodeValue;
                document.getElementById("ficha").style.display = "block";
            }
        };
        xmlhttp.open("GET", "ejercicio6.4servidor.php?q=" + str, true);
        xmlhttp.send();
    }
}