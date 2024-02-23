// Objeto Producto
const Producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function () {
      return 'El producto: ' + this.nombre + ' tiene un precio de ' + this.precio;
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
  };
  
  // Ejemplos con Object.keys()
  console.log("Keys:", Object.keys(Producto));
  
  // Ejemplos con Object.entries()
  console.log("Entries:", Object.entries(Producto));
  
  // Ejemplos con Object.values()
  console.log("Values:", Object.values(Producto));

  const numeros = [10,20,30,40,50];
  console.log(numeros);
  const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
  console.log(meses);
  const deTodo = ["hola", 12, null, true, {nombre: 'Juan', trabajo: 'Programador'}, [1,2,3,4]];
  console.log(deTodo);
  console.table(numeros);
  console.log(numeros[2]);
  for (let i=0; i<meses.length; i++){
    console.log(meses[i]);
  }
  const carrito = [];
  const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 500
  }
  const producto2 = {
    nombre: 'Celular',
    precio: 500
  }
  carrito.push(producto);
  carrito.push(producto2);
  let resultado = [...carrito, producto];
  resultado = [producto,...carrito]
  const carro = [
    {nombre: 'monitor de 20 pulgadas', precio: 500},
    {nombre: 'television de 50 pulgadas', precio: 700},
    {nombre: 'tablet', precio: 300},
    {nombre: 'audifono', precio: 200},
    {nombre: 'teclado', precio: 50},
    {nombre: 'celular', precio: 500}
  ]
  for(let i = 0; i < carro.length; i++){
    console.log('Articulo: ',carro[i].nombre,' precio: ',carro[i].precio);
  }
  carro.forEach(function(productoo){
    console.log('Articulo: ',productoo.nombre,' precio: ',productoo.precio);
  })
  carro.map(function(productoo){
    console.log('Articulo: ',productoo.nombre,' precio: ',productoo.precio);
  })
  function sumar(){
    console.log(2+3);
  }
  sumar();
  alert('hubo un error...');
  prompt('cual es tu edad?');
  console.log(parseInt('30'));
  function saludar(nombre, apellido){
    console.log('hola ',nombre,' ',apellido);
  }
  saludar('Jimmy','mantilla');
  saludar();
  let total = 0;
  function agregarcarrito(precio){
    return total += precio;
  }
  function calcularimpuesto(total){
    return 1.15 * total;
  }
  total = agregarcarrito(200);
  total = agregarcarrito(300);
  total = agregarcarrito(400);
  console.log(total)