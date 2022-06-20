var encabezado = document.getElementById("encabezado");
var cards = document.getElementById("tarj");

function ocultarEncabezado(event) {
   return encabezado.setAttribute("hidden", true);
}

cards.addEventListener("click", ocultarEncabezado);