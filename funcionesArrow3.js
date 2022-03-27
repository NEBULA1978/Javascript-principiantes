const obtenerSaludo = function (nombre) {
    return `Hola ${nombre}, bienvenido a desarrollo útil.`;
};

const imprimirSaludo = function (mensaje){
    console.log(mensaje);
};

const alertSaludo = function (mensaje){
    alert(mensaje);
}

const saludar = function(obtener,imprimir){
    const saludo = obtener('Ramonet');
    imprimir(saludo);
};

// const resultado = saludar(obtenerSaludo,imprimirSaludo);
// console.log(resultado); undefined

saludar(obtenerSaludo, imprimirSaludo);
saludar(obtenerSaludo,alertSaludo);