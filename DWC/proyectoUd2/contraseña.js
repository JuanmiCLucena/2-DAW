function contraseña(){
    alert("Los requisitos de la contraseña son los siguientes:"
        + "\n Tiene entre 8 y 16 caracteres"
        + "\n Tiene una letra mayúscula"
        + "\n Tiene una letra minúscula"
        + "\n Tiene un número"
        + "\n Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,"
        + "\n almohadilla, dólar, tanto por ciento o ampersand."
        + "\n Si cumple con todos los requisitos se considera una contraseña segura, de lo"
        + " contrario mostrará que es una contraseña no segura."
    )
    let password = prompt("Introduce tu contraseña: ",);

    if (password.length < 8 || password.length > 16) {
        alert("Tu contraseña no es segura.");
    } else {
        var character = '';
        var contadorMayusculas = 0;
        var contadorMinusculas = 0;
        var contadorNumeros = 0;
        var contadorCaracteresEspeciales = 0;
        let re = /^[0-9]*$/;
        for (let i = 0; i < password.length; i++) {
            character = password.charAt(i);

            if (character.search(/[A-Z]/) != -1) {
                contadorMayusculas++;
            }

            if (character.search(/[a-z]/) != -1) {
                contadorMinusculas++;
            }

            if (!isNaN(character)) {
                contadorNumeros++;
            }

            if (character == "_") {
                contadorCaracteresEspeciales++;
            }

            if (character == "-") {
                contadorCaracteresEspeciales++;
            }

            if (character == "@") {
                contadorCaracteresEspeciales++;
            }

            if (character == "#") {
                contadorCaracteresEspeciales++;
            }

            if (character == "$") {
                contadorCaracteresEspeciales++;
            }

            if (character == "%") {
                contadorCaracteresEspeciales++;
            }

            if (character == "&") {
                contadorCaracteresEspeciales++;
            }

        }

        if (contadorMayusculas == 0 || contadorMinusculas == 0 || contadorNumeros == 0 || password.match(re) || contadorCaracteresEspeciales == 0) {
            alert("Contraseña no segura.");
        } else {
            alert("Contraseña segura");
        }

    }
}