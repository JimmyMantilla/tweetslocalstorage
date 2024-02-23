const numero1 = 20;
const numero2 = "20";
const numero3 = 30;
console.log(numero1 > numero3);
console.log(numero3 > numero1);
console.log(numero3 < numero1);
console.log(numero1 == numero3);
console.log(numero1 == numero2);
console.log(typeof numero1);
console.log(typeof numero2);
console.log(numero1 === numero2);
console.log(numero1 != numero3);
console.log(numero1 != numero2);
console.log(numero1 !== numero2);
let numero;
console.log(numero);
console.log(typeof numero);
let numero4 = null;
console.log(numero4);
console.log(typeof numero4);
console.log(numero == numero4);
const boolean1 = true;
const boolean2 = false; 
console.log(boolean1 == boolean2);
console.log(boolean1 == true);
console.log(boolean2 == true);
if(boolean1 === true){
    console.log('si es true')
}else{
    console.log('no, no es true')
}
console.log(boolean1 ? 'si es true': 'no, no es true')
// Definición del objeto Computador
const producto = {
    nombre: "computador",
    precio: 30,
    disponible: true,
    informacion: {
        marca: "Asus",
        peso: 1.00
    }
}
console.log(producto);
console.log(producto.informacion.marca);
console.log(Object.isSealed(producto));
console.log(Object.isFrozen(producto));
Object.seal(producto);
const Producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarinfo: function(){
        return 'el producto: '+this.nombre+'tiene un precio de '+this.precio
    },
    aumentarPrecio: function (porcentaje) {
        this.precio += this.precio * (porcentaje / 100);
        return '¡El precio ha aumentado! Nuevo precio: ' + this.precio;
      },
      cambiarDisponibilidad: function () {
        this.disponible = !this.disponible;
        return this.disponible ? '¡Ahora está disponible!' : '¡Producto agotado!';
      },
      aplicarDescuento: function (descuento) {
        this.precio -= descuento;
        return 'Descuento aplicado. Nuevo precio: ' + this.precio;
      },
      cambiarNombre: function (nuevoNombre) {
        this.nombre = nuevoNombre;
        return 'Nombre actualizado a: ' + this.nombre;
      },
      generarCodigoDeProducto: function () {
        const codigo = Math.floor(Math.random() * 10000);
        return 'Código de producto generado: ' + codigo;
      }
}
console.log(Producto.mostrarinfo());
console.log(Producto.aumentarPrecio(10));
console.log(Producto.cambiarDisponibilidad());
console.log(Producto.aplicarDescuento(5));
console.log(Producto.cambiarNombre("Nuevo Monitor HD"));
console.log(Producto.generarCodigoDeProducto());