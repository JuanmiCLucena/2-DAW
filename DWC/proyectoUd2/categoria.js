function calculadoraCategoria() {
    var añoNacimiento = prompt("Introduzca su año de nacimiento: ", );
    var y = parseInt(new Date().getFullYear());
    var años = y - añoNacimiento;
    var categoria;
    if (años >= 35) {
        categoria = "Veterano";
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Veterano</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Veterano</li></ul>`;
    }
    if (años >= 23 && años < 35) {
        categoria = "Sénior";
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Sénior</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Sénior</li></ul>`;
    }
    if (años >= 20 && años <= 22) {
        categoria = "Promesa";
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Promesa</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Promesa</li></ul>`;
    }
    if (años >= 18 && años <= 19) {
        categoria = "Júnior";
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Júnior</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Júnior</li></ul>`;
    }
    if (años >= 16 && años <= 17) {
        categoria = "Juvenil";
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Juvenil</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Juvenil</li></ul>`;
    }
    if (años >= 14 && años <= 15) {
        categoria = "Cadete";
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Cadete</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Cadete</li></ul>`;
    }
    if (años >= 12 && años <= 13) {
        categoria = "Infantil";
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Infantil</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Infantil</li></ul>`;
    }
    if (años >= 10 && años <= 11) {
        categoria = "Alevín";
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Alevín</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Alevín</li></ul>`;
    }
    if (años >= 8 && años <= 9) {
        categoria = "Benjamín";
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Benjamín</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Benjamín</li></ul>`;
    }
    if (años <= 7) {
        categoria = "Prebenjamín";
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Prebenjamín</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Prebenjamín</li></ul>`;
    }

    document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group>" + `<li class=list-group-item>TU CATEGORIA: ${categoria}</li></ul>`;

}