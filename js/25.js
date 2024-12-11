const carrito = [
    { nombre: 'Monitosr 20 pulgadas', precio: 500},
    { nombre: 'Televisión 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// ForEach
carrito.forEach( producto => console.log(producto.nombre));

// map
const arreglo2 = carrito.map( producto => producto.nombre);

/*
En que casos utilzo ForEach y en cuales map?
Si solo quiero iterar o mostrar en pantala uso ForEach, pero si quiero crear
un nuevo arreglo, filtrar el nombre o los precios por ejemplo utilizo el map
*/