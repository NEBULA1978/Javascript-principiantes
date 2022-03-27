// cuando introducimos un elemento en un array lo que hacemos es introducirlo en un indice
// cuando utilizamos un objeto accedemos por el nombre de la propiedad
// const miArray = ['Hola', 5, true, null,undefined, {a:2, b:3}, () => 'Hola', [1,2,3]]


// para acceder a la posicion de un array
// console.log(miArray[0])

// cambiar valor a un indice
// miArray[4] ='Pablo'
// console.log(miArray)

// ver el indice la posicion
// console.log(miArray.length)

// ver el tipo que es aray: es object
// console.log(typeof miArray)

// añadir elemento a array siempre al final
// miArray.push(9)

//  el ultimo elemento, lo elimina del array y nos lo devuelve como elemento
// const ultimoElemento = miArray.pop()
// console.log(ultimoElemento)

const miArray = [1,2,3,4,5,6];

// ver el primer elemento
// const primerElemento = miArray.shift()
// console.log(primerElemento, miArray)

// añadir en la 1º posicion
// miArray.unshift(0)

// console.log(miArray)


// en la posicion 3 sin eliminar ningun elemento añadimos el 4 y los que queramos
// miArray.splice(3,0,4, 'Hola', 'Ramón')

// nos inserta el 2º array como un solo elemento
miArray.splice(3,0,[4, 'Hola', 'Ramón'])

console.log(miArray)