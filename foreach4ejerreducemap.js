const facturas = [
{
    precio: 23,
    cantidad: 1,
},
{
    precio: 19,
    cantidad: 2,
},
{
    precio: 14,
    cantidad: 4,
},
{
    precio: 22,
    cantidad: 1,
},

]

// const IVA = 1.21;

// const totalFactura = facturas.map(i => i.precio * i.cantidad * IVA)
// console.log(totalFactura)

// otro ejemplo
// metodo reduce suma el valor de todos los elementos del array
// const total = facturas.map(i => i.precio * i.cantidad).reduce((a,b) => {
//     console.log(a, b)
//     return a + b
// })    

// otro ejemplo
// filtrar de array los que son mayores de 30
const total = facturas.map(i => i.precio * i.cantidad).filter((i => i > 30 ))
   


console.log(total)

