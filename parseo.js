const cadena = "5.5";
const numero = 5.25;
const condicion = true;
const nulo = null;
let indefinido;//si pongo const me da fallo no se puede con const


// String()
// con String conversion implicita:

// console.log(String(numero));//convierte a string es blanco el color en consola no azul3
// console.log(String(condicion));//convierte a falso si tengo en const condicion = false;
// console.log(String(condicion));//convierte a falso si tengo en const condicion = true;
// console.log(String(nulo));//convierte a falso si tengo en const condicion = true;
// console.log(String(indefinido));//convierte a falso si tengo en const condicion = true;

// Number()
// con number conversion implicita
// console.log(Number(cadena));// me da Nan, si cadena fuera 5 enves de hola nos devolveria 5
// console.log(Number(condicion));// se convierte en 1 con true con falase en 0
// console.log(Number(nulo));// se convierte  en 0
// console.log(Number(indefinido));// se convierte  en Nan

// le ordenamos a javascript que convierta algo de una forma esplicita parsear

// Boolean()
// console.log(Boolean(cadena)); // me da true
// console.log(Boolean(0)); // me da false
// console.log(Boolean("0")); // me da true

// console.log(Boolean("true")); // me da true
// console.log(Boolean("false")); // me da true curioso javascript preguntar


// la unica opcion de convertir un string a un boleano la frase es que este vacia "":
// console.log(Boolean("false")); // me da flase curioso javascript preguntar

// la unica opcion de convertir un string a un boleano la frase es que este vacia "":
// console.log(Boolean("")); // me da flase curioso javascript preguntar

// la unica opcion de convertir un string a un boleano la frase es que este vacia "":
// toda cadena que tenga caracteres nos va a dar true da igual lo que metamos

// el cero es el unico que da false todos los otros valores da true(da igual que sean -)
// console.log(Boolean(0)); //es false
// console.log(Boolean(0)); //con 1 es true y 0 da false
// console.log(Boolean(nulo)); // da false
// console.log(Boolean(indefinido)); // da false

// para incluir el cero ,sino nos da problemas
// if(numero || numero ===0 ){}
// if(numero || numero !==0 ){}  PREGUNTAR

// repasando
// si la cadena esta vacia false si tiene algun valor da igual el que se true.
// si el numero es cer false si tiene cualquier otro valor true
// los booleans no hacen falta
// y nul y undefined siempre nos da false

// console.log(Number(cadena)); // sale 5.5

// hay dos metodos parseInt() y parseFloat: nos sirven para convertir cualquier cadena o cualquier otro elemento con su parte entera y su parte decimal

// console.log(parseFloat(cadena)); // sale 5.5 como numero color morado
// console.log(parseFloat(numero)); // sale 5 como numero color morado

// 1ºconvierto cadena a numero y luego convierto cadena a un entero
console.log(parseInt(cadena)); // sale 5 como numero color morado

// convertir 5.5 a entero
console.log(parseInt(numero)); // sale 5 como numero color morado
