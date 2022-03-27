// tenemos dos posibilidades :

// por un lado la corvension implicita la que realiza javascript de por si
// por otro lado la conversion explicita que podemos realizar nosotros

// javascript de tipado dinamico :el tipo de una variablese se determina por el valor que nosotros le pasemos
// en el momento de su asignacion y que este tipo puede cambiar si le asignamos otro tipo de dato
//podemos a un numero parsearlo a string

// const cadena = "5";
// const numero = 5;
// const condicion = true;
// const condicion = false; daria abajo en numeros 5 no 6
// const nulo = null;
// let indefinido;//si pongo const me da fallo no se puede con const

// cuando estamos sumando me va a convertir todo a string
// console.log(cadena + numero);
// console.log(cadena + condicion);
// console.log(cadena + nulo);
// console.log(cadena + indefinido);


// con numeros
//console.log(numero + condicion);//5 mas tru nos da 6(true es 1)
//console.log(numero + nulo);//nulo vale 0
//console.log(numero + indefinido);//nos da NAN (el resultado es de tipo numero pero no es un numero ,la operacion de (sumar,restar,muliplicar,etc con) un numero con algo que no existe da NAN) no is a number.

// const cadena = "5";
// console.log(numero - cadena);// nos da 0


const cadena = "Hola";
const numero = 5;
const condicion = false;
const nulo = null;
let indefinido;//si pongo const me da fallo no se puede con const

//En las restas:
//  las conversiones implicitas cuando son de distinto tipo solamente se pueden convertir a string y a numero:
// la resta sino es un numero convertira en NaN 
// console.log(numero - cadena);// nos da NaN

// multiplicacion de numero con condicion
// console.log(numero * condicion);// nos da 0
// console.log(numero / condicion);// nos da 5 con const condicion = true
console.log(numero / condicion);// nos da infinito en otros lenguajes no se puede