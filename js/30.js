// Promise
const usuaruioAutenticado = new Promise ( (resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve ('Usuario Autenticado'); //EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesión'); // EL PROMISE NO SE CUMPLE
    }
});

usuaruioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

// En los promises existen 3 valores
// Pending: No se ha cumplico pero tampoco se ha rechazado
// Fulfilled: Ya se ha cumplido
// Reject: Se ha rechazado o no se pudo cumplir