
// let miArray = [1, 2, 3, 4];

// en la posicion 3 sin eliminar ningun elemento añadimos el 4 y los que queramos
// miArray.splice(3 , 0, 'Hola', 'Ramón')

// console.log(miArray)

// no hace falta alamcenar
// const foreachFuntion = (Elemento, indice,array) => {

// }

// los elem son string y los indices numeros morados
// miArray.forEach((elem, index, array) => {
//     console.log(elem, index, array)

// })


// const miArray = ['1','2','3','4'];

// miArray.forEach((elem, index) => {
//     console.log(Number (elem) + 2, index)

// })

// modificamos el valor del elemnto  multiplicandolo por indice
// miArray.forEach((elem, index) => {
//     console.log( elem * index)

// })


let miArray = [1, 2, 3, 4];

// pretendemos realizar una operacion a todos los elementos y nos devuelva los nuevos resulltadosen las posiciones
// miArray = miArray.map(function (i) {return i + 3} )

// funcion flecha para aarays con map
miArray = miArray.map( (i) =>  i + 3 )


console.log(miArray)