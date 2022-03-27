// tipos de datos primitivos falta simbol mas avanzado

/*
const numero1 = 1;
const numero2 = -1;
const numero3 = 1.12;
const numero4 = -1.21;
const numero5 = 1e25;// 1 por 10elevado a la 25

console.log(numero1 + numero1); //2
console.log(numero1 + numero2); //0
console.log(numero1 + numero3); //2.12
console.log(numero1 + numero4); //-0.20999999999999996
console.log(numero1 + numero5); //1e+25

console.log(numero1 - numero1); //2
console.log(numero1 - numero2); //0
console.log(numero1 - numero3); //2.12
console.log(numero1 - numero4); //-0.20999999999999996
console.log(numero1 - numero5); //1e+25

console.log(numero1 * numero1); //2
console.log(numero1 * numero2); //0
console.log(numero1 * numero3); //2.12
console.log(numero1 * numero4); //-0.20999999999999996
console.log(numero1 * numero5); //1e+25

//division y modulo igual

*/
let numero = 6;

// numero = numero +2;//lo mismo que abajo
// numero += 2;
// numero -= 2;
// numero *= 2;
// numero /= 2;
// numero %= 2;

numero++//sumamos uno

console.log(numero);

const nulo = null;// esplicitamente el valor es nulo para darle valor despues
const indefinido = undefined;// no tiene valor

console.log(nulo,indefinido);

// tipos objeto y funciones no existe tipo array:
// el array es tipo objeto
console.log(typeof "Hola");
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);//array sera de tipo object no en otros lenguajes
console.log(typeof function(){});
console.log(typeof null);//hace referencia al objeto nulo da resultdo por consola object

// lo convierte al mismo tipo de dado
let resultado = '2' + 2;
console.log(resultado);//22
resultado *= 2;

console.log(resultado)//44