// ejemp 1
// const numero = 1;

// if (numero === 0){
//     console.log("cero");
// }else {
//     console.log("No es cero");

// }

// ejem 2
// const numero = 4;

// if (numero === 0){
//     console.log("cero");
// }else if(numero === 1){
//     console.log("Es uno");
// } else {
//       console.log("No es cero ni uno");
// }


// ejemp 3
const valor = [].length;  // da falsey cuando este vacio cuando tenga al menos un valor Truthy
// const valor = "4"; para los strings
// const valor = 0; es Falsey
// const valor = null; es Falsey
// const valor = undefinded ;es Falsey
//  constvalor = function (){} ;es Truthy
//  constvalor = [] ;es Truthy
//  constvalor = {} ;es Truthy
// const valor = [{}].length; es Truthy

// los valores 0 "" null undefined -> false

// nos da resultado Truthy
if(valor) console.log("Truthy");
else console.log("Falsey");