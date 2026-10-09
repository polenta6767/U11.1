// Parte I: Crear el arreglo
let listaDeSuper = [];

listaDeSuper[0] = "sal";
listaDeSuper[1] = "pan";
listaDeSuper[2] = "leche";
listaDeSuper[3] = "huevos";
listaDeSuper[4] = "queso";
listaDeSuper[5] = "arroz";
listaDeSuper[6] = "fideos";
listaDeSuper[7] = "galletitas";

// Parte II: Agregar productos
listaDeSuper.push("manzanas", "yogur");
listaDeSuper.unshift("aceite", "azúcar");

// Guardar el largo del arreglo
let cantidadInicial = listaDeSuper.length;

// Sacar productos
let noHabia = listaDeSuper.pop();
let comprado = listaDeSuper.shift();

// Largo final
let cantidadFinal = listaDeSuper.length;

// Parte III: Crear otro arreglo
let otrasCompras = ["café", "yerba", "azúcar", "galletitas"];

// Función para mostrar los elementos
function logItems(arreglo) {
    arreglo.forEach(function(item) {
        console.log(item);
    });
}

// Invocar la función dos veces
logItems(listaDeSuper);
logItems(otrasCompras);

// Mostrar los productos separados en la página
let listaHTML = document.getElementById("lista");

listaDeSuper.forEach(function(producto) {
    let elemento = document.createElement("li");
    elemento.textContent = producto;
    listaHTML.appendChild(elemento);
});

// Mostrar información adicional
document.getElementById("cantidad").textContent =
    "Productos en la lista: " + cantidadFinal;

console.log("Producto eliminado del final:", noHabia);
console.log("Producto eliminado del principio:", comprado);
console.log("Cantidad inicial:", cantidadInicial);
console.log("Cantidad final:", cantidadFinal);