// FOR LOOP- va a ir ejecutando un código mientras una condición sea verdadera y deja de ejecutar ese código cuando esa condición se deja de cumplir
/*
for(let i = 0; i < 11; i++){
    console.log(i);
}
*/
/*
for(let i = 1; i <= 100; i++){
    if (i % 2 === 0){
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El número ${i} es IMPAR`);
    }
}
*/

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

for (let i = 0; i < carrito.length; i++) {
    console.log ( carrito[i].nombre);
}

// WHILE LOOP-primero ejecuta una condicon y despues revisa- se ejecuta cuando una condición sea evaluada como verdadera
/*
let i = 20; // Indice

while(i < 10) { // Condición
    console.log('Desde el while loop');

    i++; //Incremento
}
*/
// DO WHILE LOOP- se ejecuta el código al menos una vez y después va a revisar si esa condición se cumple

let i = 100;

do {
    console.log(i);

    i++;
} while ( i < 10);