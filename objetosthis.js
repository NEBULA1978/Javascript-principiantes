const persona = {
    nombre: 'Ramon',
    apellidos: 'Castellano',
    telefono: 4543534534,
    edad:38
}

// console.log(persona["nombre"])//equivalente a poner persona.nombre
console.log(persona.nombre)

// como acceder a objeto
persona.nombre = "Paolo"

// como modificar atributo objeto sin asignar
console.log(persona.nombre)

// me da error al intentar reasicnar
// persona = {
//     nombre:'Jose'
// }
