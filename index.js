// alert("Hola mundo");
// console.log("Hola", 3); //hola, 3
/*
mala practica

const iva=1.21;
// vid 2 calculadora
let precio = 25;
precio = precio * iva;

let cantidad = 2;

let total = precio * cantidad;

console.log(total);
*/

// buena manera
const TASA_IVA=1.21;
// vid 2 calculadora
let precioProducto1 = 25;
precioProducto1 = precioProducto1 * TASA_IVA;

let precio_2 = 25;
precio_2 = precio_2 * TASA_IVA;

const cantidad1 = 2;
const cantidad2 = 3;

const total = precioProducto1 * cantidad1 + precio_2 * cantidad2;

// no se puede redeclara con let da error
// let hola ="hola";
// let hola ="hola2";

console.log(total);