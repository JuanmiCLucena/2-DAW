function imc() {
    do {
        var peso = prompt("Introduzca su peso (kg):", );
        var altura = prompt("Introduzca su altura en centímetros: ", );
    } while (peso < 0 || altura < 0);

    var imc = peso / ((altura * 0.01) ** 2);
    document.getElementById("contenedorTexto").innerHTML = "<ul class=list-group>" + `<li class=list-group-item>TU IMC: ${imc.toFixed(2)}</li></ul>`;

    if (imc < 16) {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group> <li class='list-group-item bg-success'>< 16.00: Infrapeso (delgadez severa)</li></ul>";
    } else {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group> <li class='list-group-item'>< 16.00: Infrapeso (delgadez severa)</li></ul>";
    }

    if (imc <= 16.99 && imc >= 16) {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class='list-group-item bg-success'>16.00 – 16.99: Infrapeso (delgadez moderada)</li></ul>";
    } else {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class='list-group-item'>16.00 – 16.99: Infrapeso (delgadez moderada)</li></ul>";
    }

    if (imc >= 17 && imc <= 18.49) {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class='list-group-item bg-success'>17.00 - 18.49: Infrapeso (delgadez aceptable)</li></ul>";
    } else {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class=list-group-item>17.00 - 18.49: Infrapeso (delgadez aceptable)</li></ul>";
    }

    if (imc >= 18.50 && imc <= 24.99) {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class='list-group-item bg-success'>18.50 - 24.99: Peso normal</li></ul>";
    } else {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class=list-group-item>18.50 - 24.99: Peso normal</li></ul>";
    }

    if (imc >= 25 && imc <= 29.99) {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class='list-group-item bg-success'>25.00 - 29.99: Sobrepeso</li></ul>";
    } else {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class=list-group-item>25.00 - 29.99: Sobrepeso</li></ul>";
    }

    if (imc >= 30 && imc <= 34.99) {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class='list-group-item bg-success'>30.00 - 34.99: Obeso (Tipo I)</li></ul>";
    } else {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class=list-group-item>30.00 - 34.99: Obeso (Tipo I)</li></ul>";
    }

    if (imc >= 35 && imc <= 40) {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class='list-group-item bg-success'>35.00 - 40.00: Obeso (Tipo II)</li></ul>";
    } else {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class=list-group-item>35.00 - 40.00: Obeso (Tipo II)</li></ul>";
    }

    if (imc > 40) {
        console.log("test");
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class='list-group-item bg-success'>40.00: Obeso (Tipo III)</li></ul>";
    } else {
        document.getElementById("contenedorTexto").innerHTML += "<ul class=list-group><li class=list-group-item>40.00: Obeso (Tipo III)</li></ul>";
    }

}