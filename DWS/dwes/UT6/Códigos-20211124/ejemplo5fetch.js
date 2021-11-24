// ejemplo5fetch.js
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
        fetch('ejemplo5servidor.php?q=' + str).then(function(response) { 
            // Convertimos a JSON
            return response.json();
        }).then(function(persona) {
            document.getElementById("spnNombre").innerHTML= persona.nombre
            document.getElementById("spnApellido").innerHTML= persona.apellido
            document.getElementById("spnTrabajo").innerHTML= persona['trabajo'] // Podemos usar también este formato
            document.getElementById("spnEdad").innerHTML="Edad: " + persona['edad'] // Podemos usar también este formato
            document.getElementById("spnCiudad").innerHTML="<br/>De: " + persona.ciudad
            document.getElementById("ficha").style.display = "block";
        });
    }
}