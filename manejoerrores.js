// ejemplo 1
// console.log("Antes");

// throw "Errror";

// console.log("Despues");


// ejemplo 2
// const NUM_PIEZAS = 10 ;

// const PROB_ERROR = 0.25;

// lo mismo que abajo pero abreviado
// const comprobarDefectuosas = () => {
//     if(Math.random() < PROB_ERROR) return true;

//     return true;
// }

// Math random devuelve un numero aleatorio entre cero y uno
// const comprobarDefectuosas = () => (Math.random() < PROB_ERROR);

  


// for (let i = 1; i <= NUM_PIEZAS; i++){
//     const esDefectuosa = comprobarDefectuosas();

//     if(esDefectuosa) throw `Pieza ${i} defectuosa`

//     console.log(`Pieza ${i} fabricada`)
// }


// ejemplo 3
// const NUM_PIEZAS = 10 ;

// const PROB_ERROR = 0.25;

// let correctas = 0;
// let defectuosas = 0;

// // Math random devuelve un numero aleatorio entre cero y uno
// const comprobarDefectuosas = () => (Math.random() < PROB_ERROR);


// for (let i = 1; i <= NUM_PIEZAS; i++){
//     const esDefectuosa = comprobarDefectuosas();

//     try {
//         if(esDefectuosa) throw `-> Pieza ${i} defectuosa`;
//     correctas++;    
//     }catch(ex){
//         defectuosas++;
//     //    console.log(ex); 

//     // cuando quiero hacer conexion a una base de datos y despues se cierra bueno
//     }finally{
//         console.log(`Fabricando pieza ${i}...`);
//     }
//     // una vez que se rompe ejecuta el catch y para no podemos seguir ejecutando
//     // console.log(`Pieza ${i} fabricada`);
// }

// console.log(`Fabricadas: ${NUM_PIEZAS}:`);
// console.log(`-> Corerctas: ${correctas}`);
// console.log(`-> Defectuosas: ${defectuosas}`);



// ejemplo 4
// const NUM_PIEZAS = 5 ;

// const PROB_ERROR = 0.25;

// let correctas = 0;
// let defectuosas = 0;

// // Math random devuelve un numero aleatorio entre cero y uno
// const comprobarDefectuosas = () => (Math.random() < PROB_ERROR);

// function lanzarloDeVerdad(){
//     throw new Error("Pieza defectuosa");
// }

// function lanzarError(){
//     lanzarloDeVerdad();
// }

// for (let i = 1; i <= NUM_PIEZAS; i++){
//     const esDefectuosa = comprobarDefectuosas();

//     try {
//         // nos aporta informacion extra de donde ha ocurrido el error para asi comenzar la trazabilidad
//         if (esDefectuosa) lanzarError();
//     correctas++;    
//     }catch(ex){
//         console.log(ex);
//         // nos indica el mensaje
//         // console.log(ex.message);

//         // nos indica el nombre de la clase que hemos lanzado
//         // console.log(ex.name);

//         // donde te ha dado esta excepcion
//         // console.log(ex.stack);

//         defectuosas++;

//     }
// }
// console.log(`Fabricadas: ${NUM_PIEZAS}:`);
// console.log(`-> Corerctas: ${correctas}`);
// console.log(`-> Defectuosas: ${defectuosas}`);


// ejemplo 5
const NUM_PIEZAS = 5;

const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

// Math random devuelve un numero aleatorio entre cero y uno
const comprobarDefectuosas = () => (Math.random() < PROB_ERROR);

class ErrorPiezaDefectuosa extends Error {}
class ErrorCadenaParada extends Error {}

for (let i = 1; i <= NUM_PIEZAS; i++) {
    const esDefectuosa = comprobarDefectuosas();
try {

    try {
        if(i === 2) throw new ErrorCadenaParada("Se paró");
        // nos aporta informacion extra de donde ha ocurrido el error para asi comenzar la trazabilidad
        if (esDefectuosa) throw new ErrorPiezaDefectuosa("Pieza defectuosa");
    
        correctas++;
    } catch (ex) {
        if ( ex instanceof ErrorCadenaParada) {
            console.log("Se ha parado la cadena");
            throw ex;
        }
        if ( ex instanceof ErrorPiezaDefectuosa);
            console.log(`La pieza ${i} es defectuosa`);
        // console.log(ex);
        defectuosas++;
     
    
    }
    
    }catch (ex) {
        console.log("Hemos llegado aquí")
    }
}
console.log(`Fabricadas: ${NUM_PIEZAS}:`);
console.log(`-> Corerctas: ${correctas}`);
console.log(`-> Defectuosas: ${defectuosas}`);