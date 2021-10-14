function fmc() {
    do {
        var edad = prompt("Introduzca su edad: ", );
        var sexo = prompt("Introduzca su sexo (m/f): ", );
    } while (edad < 0 || (sexo != 'm' && sexo != 'f'));
    if (sexo == 'm') {
        var fcm = 208.75 - (0.73 * edad);
    } else {
        var fcm = 208.75 - (0.77 * edad);
    }

    
    document.getElementById("contenedorTexto").innerHTML = "<ul class=list-group>" + `<li class=list-group-item>TU FCM: ${fcm.toFixed(2)}</li></ul>`;
    document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item bg-success'>Zona de recuperación (${fcm * 0.6} - ${fcm * 0.7})</li></ul>`;
    document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item bg-primary'>Zona aeróbica (${fcm * 0.7} - ${fcm * 0.8})</li></ul>`;
    document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item bg-warning'>Zona anaeróbica (${fcm * 0.8} - ${fcm * 0.9})</li></ul>`;
    document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item bg-danger'>Línea roja (${fcm * 0.9} - ${fcm})</li></ul>`;


    
    
}