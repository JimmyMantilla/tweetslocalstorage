const hola = "hola desde la consola"
console.log(hola);
console.log([1,2,3,4]);
let obj = {nombre: "Yuli", profesion: "Docente"};
console.log(obj);
console.table([1,2,3,4]);
console.error("ups!");
console.warn("Eso no está permitido");
console.time('hola');
console.warn("eso no es permitido");
console.timeEnd('hola');
var producto = 'celular';
producto = 'computador';
console.log(producto);
var disponible;
disponible = true;
var categoria = 'categoria',
    marca = 'lenovo',
    calificacion = 5;
console.log(categoria);
console.log(marca);
console.log(calificacion);
var product = 'monitor de 20 pulgadas';
const precio = '30 usd';
console.log(product.length);
console.log(product.indexOf('pulgadas'));
console.log(product.indexOf('tablet'));
console.log(product.includes('monitor'));
console.log(product.includes('tablet'));
console.log(product.concat(' en descuento'));
console.log(product.concat(' ').concat(precio));
console.log(product+" "+precio);
console.log(`el precio es de ${precio} del producto ${product}`);
product = '           monitor de 20 pulgadas   '
console.log(product.trimStart());
console.log(product.trimEnd());
product = '           monitor de 20 pulgadas   '
console.log(product.trimStart().trimEnd());
product = '           monitor de 20 pulgadas   '
console.log(product.trim().length);
console.log(product.replace("20","24"));
console.log(product.replace('pulgadas', '"'));
product = 'monitor de 20 pulgadas'
console.log(product.substring(2,5));
console.log(product.charAt(2));
console.log(product.split('20',1));
console.log(product.repeat(3));
console.log('YULIANDREA'.toLowerCase());
console.log('yuliandrea'.toUpperCase());
