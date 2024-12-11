// Arrays Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

// forEach
meses.forEach(function(mes){
    if(mes =='Marzo'){
        console.log('Marzo si existe');
    }
})

// Includes para saber si un mes existe o no existe 
let resultado = meses.includes('Diciembre');

// Some ideal para arreglos de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular'
})

// Reduce para sumar todos los elemnetos del carrito
resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio
}, 0);

// Filter para sumar los elementos filtrados, por ejemplo los de precio mayor a 400
resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});

console.log(resultado);