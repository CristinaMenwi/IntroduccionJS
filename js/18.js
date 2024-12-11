// Reutilizar una función
function sumar (numero1 = 0, numero2 = 0){ //numero1, 2 son parametros
    console.log(numero1 + numero2);
}
sumar(); //Argumentos o los valores reales
sumar(3, 3);
sumar(3, 6);
sumar(1); //parametros por default, cuando va a sumar los dos si falta uno lo coge por defecto


const sumar2 = function(n1, n2){
    console.log( 3 + 3);
}

sumar2(5, 10);
