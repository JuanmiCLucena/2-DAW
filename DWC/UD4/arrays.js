function arrays() {
    const PAISES = ["España","Alemania","Francia","Italia","Portugal","Suiza"];
    alert("Paises: " + PAISES.length);
    document.write("Array de paises:  ")
    PAISES.forEach(function(elemento) {
      document.write(elemento + "  ");
  });

  var paisesReverse = PAISES.reverse();
  document.write("</br></br>Array de paises inverso:  ");
  paisesReverse.forEach(function(elemento) {
    document.write(elemento + "  ");
});

  document.write("</br></br>Array ordenado: " + PAISES.sort());
  PAISES.unshift("Noruega");
  document.write("</br></br>Añadimos un país al inicio:  ");
  document.write(PAISES);
  PAISES.push("Malta");
  document.write("</br></br>Añadimos un país al final:  ");
  document.write(PAISES);
  var eliminadoPrincipio = PAISES.shift();
  document.write("</br></br>El país borrado al inicio ha sido:  " + eliminadoPrincipio);
  var eliminadoFinal = PAISES.pop();
  document.write("</br></br>El país borrado al final ha sido: " + eliminadoFinal);
  do {
    var x = prompt("Elige la posición (índice) del país que quieres mostrar: ");
    var posicion = parseInt(x);
    var pais = prompt("Elige de que país quieres ver su localización (índice): ");
    var indiceInicial = prompt("Elige el indice inicial para el intervalo: ");
    var indiceFinal = prompt("Elige el indice final para el intervalo: ");
  } while (isNaN(posicion) && posicion < 0 || posicion >= PAISES.length || indiceInicial < 0 || indiceFinal > PAISES.length);
  document.write("</br></br>" + PAISES[posicion]);
  if (PAISES.indexOf(pais) != -1) {
    document.write("</br></br>" + PAISES.indexOf(pais));
  } else {
    document.write("</br></br>País no encontrado.");
  }
  document.write("</br></br>" + PAISES.slice(indiceInicial,indiceFinal));


  

}