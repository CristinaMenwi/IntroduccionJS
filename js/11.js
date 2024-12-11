// Objetos
const producto = {
    nombreProdructo : 'Monitor 20 pulgadas', 
    precio: 300,
    disponible: true
}


// Forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.precioProducto;

// console.log(precioProducto);
// console.log(nombreProducto);


// Destructuring
const {precio, nombreProdructo} = producto;

console.log(precio);
console.log(nombreProdructo);
