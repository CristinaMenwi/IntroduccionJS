// This

const reservacion = {
    nombre: 'Cristina',
    apellido: 'Mengual',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}
const reservacion2 = {
    nombre: 'Alicia',
    apellido: 'Mengual',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();