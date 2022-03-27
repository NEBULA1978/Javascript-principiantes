// No hacer sino la pagina del navegador se queda cargando bucle infinito virus no bueno
// while (true) {}

// ejemplo1
// let contador = 0;

// while (contador < 5) {
//     contador++;

//     console.log("While", contador);
// }


// ejemplo2
// let contador = 0;

// while (contador < 5) {
//     contador++;

//     console.log("While", contador);

//     // cuando lleges al 3 sales
//     if (contador === 3) break;
// }


// ejemplo2
// let contador = 7;

// while (contador < 5) {
//     if(contador === 7) contador === 0;
//     contador++;

//     console.log("While", contador);

//     // cuando lleges al 3 sales
//     if (contador === 3) break;
// }


// ejemplo3
// primero ejecutamos y luego evaluamos
// let contador = 7;

// do {
//     if(contador === 7) contador = 0;
//     contador++;

//     console.log("While", contador);

//     // cuando lleges al 3 sales
    
// }while (contador < 5)


// ejemplo4
let contador = -5;

do {
    if (contador === 0) {
       contador++;  
       continue;
    }



    console.log("While", 10 / contador);
    contador++;
    
   
}while (contador <= 5);


    