// Declaracion de la función 
// Esta función como en JS da dos vueltas, si en llamamos a la función antes de declararla no parasría nada porque en JS da dos vueltas
sumar();
function sumar (){
    console.log(10 + 10);
}


// Expresión de la función
// En este ejemplo como no es una función como tal por eso no pasa
const sumar2 = function(){
    console.log( 3 + 3);
}

sumar2();

//IIFE
(function(){
    console.log('Esto es una función');
})()