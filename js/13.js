// Objetos
const producto = {
    nombreProdructo : 'Monitor 20 pulgadas', 
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

// Unir dos objetos
const nuevoProducto = {...producto,...medidas};

console.log(producto);
console.log(nuevoProducto);