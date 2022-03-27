const IVA_GENERAL = 1.21;
const IVA_REDUCIDO = 1.10;

const item1 = {
    precio: 15,
    cantidad: 2,
    impuestos: IVA_GENERAL,
   calcularTotal:function () {
    //    console.log('THIS', this)
    return this.precio * this.cantidad * this.impuestos
   }
  
}
const item2 = {
    precio: 25,
    cantidad: 3,
    impuestos: IVA_REDUCIDO,
    calcularTotal:function () {
    //    console.log('THIS', this)
    return this.precio * this.cantidad * this.impuestos
   }
  
}


// atajo cuando son iguales los nombres posicion valor
const factura = {
    // item1: item1,
    // item2: item2
    // atajo
    // item1, funciona igual
    // item2, funciona igual

    item1,
    item2,
   calcularTotal:function (descuento){
    //    const total = item1.cantidad * item1.precio * item1.impuestos + item2.cantidad * item2.precio * item2.impuestos;
    //    const total1 = item1.calcularTotal();
    //    return total1;

    return( this.item1.calcularTotal() + this.item2.calcularTotal()) * descuento;
   }
}

// nos devuelve un objeto cuyos  objetos tienen los valores correspondientes dentro
// console.log(factura)

console.log(factura.calcularTotal(0.8)) //es descuento sería de 20porciento
       
    
// si tenemos arrows funcions no funciona el this
