// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProdructo : 'Monitor 20 pulgadas', 
    precio: 300,
    disponible: true
}

Object.seal(producto); // .freeze .seal

producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto);
