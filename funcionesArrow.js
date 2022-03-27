// las puedo llamar antes o despues de crear la funcion
const resultado = saludar("Pablo");
console.log("DESPUES DE LLAMAR",resultado);

// saludar1();
// saludar1();
saludar1();
function saludar1(){
    let nombre="Ramonet";
    console.log(`Hola ${nombre}, bienvenidos a Desarrollo Útil.`);
    // aqui debajo no se ejecuta el codigo con return y console log
}
// saludar1();
// saludar1();
saludar1();

function saludar(nombre){
    return `Hola ${nombre}, bienvenidos a Desarrollo Útil.`;
    // aqui debajo no se ejecuta el codigo con return y console log
}
