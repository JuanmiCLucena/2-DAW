function fcm() {
    do {
        var edad = prompt("Introduzca su edad: ", );
        var sexo = prompt("Introduzca su sexo (m/f): ", );
    } while (edad < 0 || (sexo != 'm' && sexo != 'f' || Number.isInteger(parseInt(edad)) == false));
    if (sexo == 'm') {
        var fcm = 208.75 - (0.73 * edad);
    } else {
        var fcm = 208.75 - (0.77 * edad);
    }


    document.getElementById("contenedorTexto").innerHTML = "<ul class=list-group>" + `<li class=list-group-item id="fcm">TU FCM: ${fcm.toFixed(2)}</li></ul>`;
    document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item' id="recuperacion">Zona de recuperación (${(fcm * 0.6).toFixed(2)} - ${(fcm * 0.7).toFixed(2)})</li></ul>`;
    document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item' id="aerobica">Zona aeróbica (${(fcm * 0.7).toFixed(2)} - ${(fcm * 0.8).toFixed(2)})</li></ul>`;
    document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item' id="anaerobica">Zona anaeróbica (${(fcm * 0.8).toFixed(2)} - ${(fcm * 0.9).toFixed(2)})</li></ul>`;
    document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item' id="roja">Línea roja (${(fcm * 0.9).toFixed(2)} - ${fcm})</li></ul>`;




}