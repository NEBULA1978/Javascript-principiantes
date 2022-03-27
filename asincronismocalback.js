// ejemplo 1/////////////////////////

// console.log("Desarrollo");

// setTimeout(() => console.log("Timeout"), 3000);

// console.log("util");

// 1º ejecutamos la parte sincrona y luego damos paso a los asincronismos

/////////////////////////////////////////////////////////
// ejemplo 2

// console.time("Prueba");

// setTimeout(() => console.timeEnd("Prueba"), 3000);

////////////////////////////////////////////////////
// ejerccicio 3

// const simple = (tarea) => console.log(tarea);

// const pesada = (tarea) => {
//     console.log(`Empezando tarea ${tarea}...`);
//     //             i tarda bastante
//     for(let i = 0; i<200000000; i++){
//         Math.random() - Math.random() * Math.random();
//     }
//     console.log(`Tarea ${tarea} terminada`);
// } 

// // lo que vamos a hace es basicamente un timeout en el que recibiremos este callback y ejecutaremos este callback despues de haya pasado este tiempo, este callback al final sera la  respuesta que tiene que dar jose cuando reciba la respuesta de pablo ,es decir:
// // Jose me manda una tarea a mi ,yo termino la tarea y le digo jose ya he terminado, entonces como jose me habia enviado una tarea para algo entonces JOse a raiz de eso tendra que hacere otra accion,eso representa este callback.ç

// const tareaPablo = (tarea, callback, tiempo) => {
//     console.log(tarea);
//     setTimeout(callback, tiempo);
// }

// const tareas = [
//     () => simple('Escribir guion'),
//     () => tareaPablo('[PABLO] Hace miniatura', () => simple('-> Revisar miniatura'), 10000),
//     () => pesada('Grabar video'),
//     () => tareaPablo('[PABLO] Editar video', () => simple('-> Revisar video'), 10)
// ]

// // <!-- voy asincronismo callback hell minuto 12 -->

// for (const tarea of tareas) tarea();

////////////////////////////////////////////////

// ejemplo4


// const error = msg => console.log(msg);

// const tarea = (tarea, siguiente) => {
//     console.log(tarea);
//     if(Math.random() < 0.5) console.error();
//     else setTimeout(siguiente,500);
// };


// const pensarIdea = () =>
// tarea("Pensar idea", guionizar, () => error("Error al pensar idea"));

// const guionizar = () =>
//     tarea("Guionizar", grabar, () => error("Error al guionizar"));

// const grabar = () =>
//     tarea("Grabar", editar, () => error("Error al grabar"));

// const editar = () =>
//     tarea("Editar", publicar, () => error("Error al editar"));

// const publicar = () =>
//     tarea(
//         "Publicar",
//         () => console.log("Publicado"),
//         () => error("Error al publicar")
//     );

// pensarIdea();

// voy minut 25 me falta a partir aqui

// ejemplo 5 /////////////////////////////////
const error = (msg) => console.log(msg);

const tarea = (tarea, siguiente,error) => {
    console.log(tarea);
    if(Math.random() < 0.5) error();
    else setTimeout(siguiente, 500);
};


const pensarIdea = () =>
tarea("Pensar idea", tarea("Guionizar", tarea("Grabar", tarea("Editar", tarea(
    "Publicar",
    () => console.log("Publicado"),
    () => error("Error al publicar")
), () => error("Error al editar")), () => error("Error al grabar")), () => error("Error al guionizar")), () => error("Error al pensar idea"));


pensarIdea();







