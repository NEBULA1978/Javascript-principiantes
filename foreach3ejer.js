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

const IVA = 1.21;

const totalFactura = facturas.map(i => i.precio * i.cantidad * IVA)
console.log(totalFactura)

// funciona como abajo
// totalFactura.forEach((i, index)=>console.log("Elemento",index,i))

// console.log(totalFactura);

// para sacar el resultado de clave * valor * IVA abajo como arriba
// let total = 0;

// totalFactura.forEach((i) => total += i)


// metodo reduce suma el valor de todos los elementos del array
const total = totalFactura.reduce((a,b) => {
    console.log(a+ b)
    return a + b
})    


console.log(total)

