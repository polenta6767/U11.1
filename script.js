let listaDeSuper = [];

listaDeSuper[0] = "sal";
listaDeSuper[1] = "pan";
listaDeSuper[2] = "leche";
listaDeSuper[3] = "huevos";
listaDeSuper[4] = "queso";
listaDeSuper[5] = "arroz";
listaDeSuper[6] = "fideos";
listaDeSuper[7] = "galletitas";

// Accedemos al primer elemento
console.log(listaDeSuper[0]);

// Buscamos la posición del último elemento
let ultimoElemento = listaDeSuper.length - 1;

// Accedemos al último elemento
console.log(listaDeSuper[ultimoElemento]);

// Mostramos los resultados en la página
document.getElementById("primerProducto").textContent =
    "Primer producto: " + listaDeSuper[0];

document.getElementById("ultimoProducto").textContent =
    "Último producto: " + listaDeSuper[ultimoElemento];
