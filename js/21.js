// Arrow Functions
// Sin arrow functions
// const sumar2 = function(n1, n2){
//     console.log( n1 + n2);
// }
// sumar2(5,10);

// // Con arrow functions
// const sumar2 = (n1, n2) => console.log( n1 + n2);
// sumar2(5,10);

// //Otro arrow functions, se le puede quitar los parentesis si solo es una cosa
// const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)

// aprendiendo('JavaScript')

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
meses.forEach( mes => {
    if(mes =='Marzo'){
        console.log('Marzo si existe');
    }
});

let resultado;

// Some ideal para arreglos de objetos
resultado = carrito.some(producto => producto.nombre === 'Celular');

// Reduce para sumar todos los elemnetos del carrito
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter para sumar los elementos filtrados, por ejemplo los de precio mayor a 400
resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado);