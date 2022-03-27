
// function saludar(nombre){
//     return `Hola ${nombre}, bienvenidos a Desarrollo Útil.`;
    
// }

// saludar();
//  asi no me devuelve nada



// function saludar(nombre,apellidos){//en el mismo orden en la llamada a la funcion
//     console.log( `Hola ${nombre} ${apellidos}, bienvenidos a Desarrollo Útil.`);
    
// }

// funcione de nombre se puede llamar arriba o abajo de la funcion
// const resultado = saludar("Ramón");
// console.log("Despues de llamar",resultado);

// function saludar(nombre){//en el mismo orden en la llamada a la funcion
//     // console.log( `Hola ${nombre} , bienvenidos a Desarrollo Útil.`); me da resultado undefined con console log
//     return( `Hola ${nombre} , bienvenidos a Desarrollo Útil.`); //asi no me da undefined
//     // console.log("Despues del return");//no se va a ejecutar lo que esta en el mismo ambito del return,esta debajo return
    
// }
// funcione de nombre se puede llamar arriba o abajo de la funcion
// const resultado = saludar("Ramón");
// console.log("Despues de llamar",resultado);


// funciones anonimas wardamos en una variable y la llamamos con el nombre de la variable
//las ventajas respecto a las funciones normales es que podemos pasar esas funciones como parametros de otras funciones
function saludar(nombre){
    
    return( `Hola ${nombre} , bienvenidos a Desarrollo Útil.`); //asi no me da undefined
    // console.log("Despues del return");//no se va a ejecutar lo que esta en el mismo ambito del return,esta debajo return
    
}
// const resultado = saludar2('Ramonet'); //no puedo llamarla antes de la funcion se aplica la regladelas variables

const saludar2 = function(nombre){
     return( `Hola ${nombre} , bienvenidos a Desarrollo Útil.`);
}
const resultado = saludar2('Ramonet'); //no puedo llamarla antes de la funcion se aplica la regladelas variables
console.log(resultado);

