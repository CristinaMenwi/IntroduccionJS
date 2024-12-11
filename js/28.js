// Clases

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto () {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto2 = new Producto ('Monitor Curvo de 49"', 800);
const producto3 = new Producto ('Laptop"', 300);

class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto () {
        return `${super.formatearProducto()} y su ISBN es de ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la Revoluión', 120, '123456789');
console.log(libro.formatearProducto()); 
console.log(producto2.formatearProducto());