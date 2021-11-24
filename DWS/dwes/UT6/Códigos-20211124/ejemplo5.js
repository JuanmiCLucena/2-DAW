// ejemplo5.js
function mostrarPersonaje(str) {
    if (str.length == 0) {
        document.getElementById("spnNombre").innerHTML = "";
        document.getElementById("spnApellido").innerHTML = "";
        document.getElementById("spnTrabajo").innerHTML = "";
        document.getElementById("spnEdad").innerHTML = "";
        document.getElementById("spnCiudad").innerHTML = "";
        document.getElementById("ficha").style.display = "none";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                persona = JSON.parse(this.responseText);
                document.getElementById("spnNombre").innerHTML= persona.nombre
                document.getElementById("spnApellido").innerHTML= persona.apellido
                document.getElementById("spnTrabajo").innerHTML= persona['trabajo'] // Podemos usar también este formato
                document.getElementById("spnEdad").innerHTML="Edad: " + persona['edad'] // Podemos usar también este formato
                document.getElementById("spnCiudad").innerHTML="<br/>De: " + persona.ciudad
                document.getElementById("ficha").style.display = "block";
            }
        };
        xmlhttp.open("GET", "ejemplo5servidor.php?q=" + str, true);
        xmlhttp.send();
    }
}