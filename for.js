// La mayoria de los casos 99% del bucle for nos referimos  colecciones es decir cuando
//  queremos recorrer o iterar una iteracion usamos un bucle for

const cursoJS = ['Intro a JS',
'Variables y Tipos',
 'Conversiones de tipos',
  'Funciones',
];

// ejemplo 1
// for(let i = 0;i < cursoJS.length;i++) {
//     console.log(cursoJS[i]);
// }

// ejemplo 2 con template string
// for(let i = 0;i < cursoJS.length;i++) {
//     console.log(`${i}. ${cursoJS[i]}`);
// }


// ejemplo 2 con template string
// for(let i = cursoJS.length -1; i >= 0; i--) {
//     console.log(`${i}. ${cursoJS[i]}`);
// }


///////////////////////////////////////////
// ejemplo 3 con for of
// for(const leccion of cursoJS) {
//     console.log(leccion);
// }


// es lo mismo que el for of pero for of mas corto:
// desventaja del for of no tengo acceso al indice
// for(let i = 0;i < cursoJS.length;i++) {
//     const leccion = cursoJS[i]
//     console.log(leccion);
// }

///////////////////////////////////////////
// console.log(cursoJS, typeof cursoJS);

// Important
// el bucle for In no es para arrays
// ejemplo 4 :
// con for in nos devuelve todas las claves que que riene el objeto
// for(const leccion in cursoJS) {
//     console.log(leccion);
// }


cursoJS.profesor = "Pablo";

console.log(cursoJS);

for(const i in cursoJS) {
    // es un string abajo
    // console.log(typeof i);
    console.log(`${i + 1}. ${cursoJS[i]}`);
}
