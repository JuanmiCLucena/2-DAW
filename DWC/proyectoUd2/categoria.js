function calculadoraCategoria() {
    var añoNacimiento = prompt("Introduzca su año de nacimiento: ", );
    var y = parseInt(new Date().getFullYear());
    var años = y - añoNacimiento;
    var categoria;

    

    if (años >= 35) {
        categoria = "Veterano";
        
    } 
        
    if (años >= 23 && años < 35) {
        categoria = "Sénior";
        
    }
    if (años >= 20 && años <= 22) {
        categoria = "Promesa";
        
    }
    if (años >= 18 && años <= 19) {
        categoria = "Júnior";
        
    }
    if (años >= 16 && años <= 17) {
        categoria = "Juvenil";
    }
    if (años >= 14 && años <= 15) {
        categoria = "Cadete";
        
    }
    if (años >= 12 && años <= 13) {
        categoria = "Infantil";
        
    }
    if (años >= 10 && años <= 11) {
        categoria = "Alevín";
        
    }
    if (años >= 8 && años <= 9) {
        categoria = "Benjamín";
        
    }
    if (años <= 7) {
        categoria = "Prebenjamín";
        
    }

    document.getElementById("contenedorTexto").innerHTML = "<ul class=list-group>" + `<li class=list-group-item>TU CATEGORIA: ${categoria}</li></ul>`;

    if (categoria == "Veterano") {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Veterano</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Veterano</li></ul>`;
    }
    
    if (categoria == "Sénior") {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Sénior</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Sénior</li></ul>`;
    }
    
    if (categoria == "Promesa") {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Promesa</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Promesa</li></ul>`;
    }
    
    if (categoria == "Júnior") {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Júnior</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Júnior</li></ul>`;
    }

    if (categoria == "Juvenil") {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Juvenil</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Juvenil</li></ul>`;
    }

    if (categoria == "Cadete") {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Cadete</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Cadete</li></ul>`;
    }

    if (categoria == "Infantil") {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Infantil</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Infantil</li></ul>`;
    }

    if (categoria == "Alevín") {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Alevín</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Alevín</li></ul>`;
    }
    
    if (categoria == "Benjamín") {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Benjamín</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Benjamín</li></ul>`;
    }
    
    if (categoria == "Prebenjamín") {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item font-weight-bold'>Prebenjamín</li></ul>`;
    } else {
        document.getElementById("contenedorTexto").innerHTML += `<ul class=list-group> <li class='list-group-item'>Prebenjamín</li></ul>`;
    }
    
    
    
    
    
    
}