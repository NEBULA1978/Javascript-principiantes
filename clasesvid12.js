// ejemplo 1
// const objeto = {
//     atributo1: 5,
//     metodo1: () => {
//         console.log("Hola");
//     },
// };


/////////////////////////
// clase curso

// class Curso {
//     constructor(titulo, dificultad){
//         this.titulo = titulo;
//         this.dificultad = dificultad;

//         this.lecciones = [];
//     }
//     // añadir al final del array
//     agregarLeccion(leccion){
//         this.lecciones.push(leccion);
//     }
//     // eliminar ultimo elemento array no introducimos parametros enn los parentesis
//     EliminarUltimaLeccion(){
//         this.lecciones.pop();
//     }
// }

//////////////////////////////
/////////////////////////

// Ejemplo 2
// clase curso

// class Curso {
//     constructor(titulo, dificultad){
//         this.titulo = titulo;
//         this.dificultad = dificultad;

//         this.lecciones = [];
//     }
//     // añadir al final del array
//     agregarLeccion(leccion){
//         this.lecciones.push(leccion);
//     }
//     // eliminar ultimo elemento array no introducimos parametros enn los parentesis
//     EliminarUltimaLeccion(){
//         this.lecciones.pop();
//     }
// }

//////////////////////////////


// creamos dos objetos instanciamos dos clases una para cada objeto

// un objeto
// const cursoJS = new Curso('Javascript', 1);

// // un objeto
// const cursoTS = new Curso('Typesscript', 3);

// cursoJS.agregarLeccion("Intro a JS");
// cursoJS.agregarLeccion("Variables");
// cursoJS.agregarLeccion("Tipos de datos");

// console.log(cursoJS, cursoTS);
//  voy video 12 las clases y sus metodos constructor getter y seters voy minuto 14 


// ejemplo 3 asi me da fallo no puedo crear mas de una clase por constructor
// class Curso {
//     constructor(){
//         this.titulo = '';
//         this.dificultad = 1;  
//         // Asi me da error una clase solo puede tener un consructor
//     }
//     constructor(titulo, dificultad){
//         console.log("Constructor");
//         this.titulo = titulo;
//         this.dificultad = dificultad;

//         this.lecciones = [];
//     }
//     // añadir al final del array
//     agregarLeccion(leccion){
//         this.lecciones.push(leccion);
//     }
//     // eliminar ultimo elemento array no introducimos parametros enn los parentesis
//     EliminarUltimaLeccion(){
//         this.lecciones.pop();
//     }
// }

// const cursoJS = new Curso('Javascript', 1);
// const cursoTS = new Curso('Javascript', 1);

// No puede haber mas de un constructor, en otros lenguajes que tienen tipos que tienen un pococ
//  de estructurado y que se complilan podemos detectar si estamos llamando a este constructoro estamos llamando a otro 
// en funcion de los parametros  y el tipo de parametros que recibamos ,constructores que se llaman sobrecargados,javascript no es capàZ
//JAVASCRIPT no es capaz de detectar por numero de argumentos ni por nada



// ejemplo 4
// class Curso {
   
//     constructor(titulo, dificultad){
//         this.titulo = titulo;
//         // indicativo que esta variablees privada no la toques directamente
//         this._dificultad = dificultad;
        
//         this.lecciones = [];
//     }

//     // cuando estemos llamando a el atributo dificultad entramos por el get no por el atrinuto
//     get dificultad(){
//         console.log("GETTER");
//         return this._dificultad;
//     }
//     // cuando llamamos a .difucultada = estamos llamando a ete setter
//     set dificultad(nuevaDificultad){
//         // si pongo || no me hace nada si cambio .dificultad
//         if(nuevaDificultad >= 0 && nuevaDificultad <= 5){
//             this._dificultad = nuevaDificultad;

//         }else {
//             console.log("No hago nada");

//         }
//     }

//     // añadir al final del array
//     agregarLeccion(leccion){
//         this.lecciones.push(leccion);
//     }
//     // eliminar ultimo elemento array no introducimos parametros enn los parentesis
//     EliminarUltimaLeccion(){
//         this.lecciones.pop();
//     }
// }
// Por eso no pueden existir constructores sobrecargados

// no hacer lo de abajo
// cursoJS.loquemedelagana = "loque sea";

// no se modifican los metodos
// cursoJS,EliminarUltimaLeccion = () => console.log("No hago nada");
// cursoJS.EliminarUltimaLeccion ();
// no se modifican los metodos

// const cursoJS = new Curso('Javascript', 1);

// cursoJS.dificultad = 3;
// cursoJS.dificultad = 7;

// cursoJS._dificultad = 7;

// console.log(cursoJS.dificultad);



// // ejemplo 5
// class Curso {
   
//     constructor(titulo, dificultad){
//         this.titulo = titulo;
//         // indicativo que esta variablees privada no la toques directamente
//         this._dificultad = dificultad;
        
//         this.lecciones = [];
//     }

//     // cuando estemos llamando a el atributo dificultad entramos por el get no por el atrinuto
//     get dificultad(){
//         console.log("GETTER");
//         return this._dificultad;
//     }
 

//     // añadir al final del array
//     agregarLeccion(leccion){
//         this.lecciones.push(leccion);
//     }
//     // eliminar ultimo elemento array no introducimos parametros enn los parentesis
//     EliminarUltimaLeccion(){
//         this.lecciones.pop();
//     }
// }
// Por eso no pueden existir constructores sobrecargados

// no hacer lo de abajo
// cursoJS.loquemedelagana = "loque sea";

// no se modifican los metodos
// cursoJS,EliminarUltimaLeccion = () => console.log("No hago nada");
// cursoJS.EliminarUltimaLeccion ();
// no se modifican los metodos

// const cursoJS = new Curso('Javascript', 1);

// cursoJS.dificultad = 3;
// cursoJS.dificultad = 7;

// cursoJS._dificultad = 7;

// console.log(cursoJS.dificultad);


// ejemplo 6
class Curso {
   
    constructor(titulo, dificultad){
        this.titulo = titulo;
        // indicativo que esta variablees privada no la toques directamente
        this.dificultad = dificultad;
        
        this.lecciones = [];
    }
// variables estaticas
//  Las clases pueden tener atributos y metodos esticos que lo que hacen referencia esque son 
// de la propia clase,no son de ningun objeto en cuestion,sino que son de la propia clase

    static BASE_URL = "desarrolloutil.com/cursos/";

    static saludar(){
        console.log("Saludo");
    }

    // añadir al final del array
    agregarLeccion(leccion){
        this.lecciones.push(leccion);
    }
    // eliminar ultimo elemento array no introducimos parametros enn los parentesis
    EliminarUltimaLeccion(){
        this.lecciones.pop();
    }
}

// const cursoJS = new Curso('Javascript', 1);

Curso.saludar();

// console.log(cursoJS);
console.log(Curso.BASE_URL);

// Number.EPSILON es la menor diferencia representada entre dos numeros

// el entero mas grande que se puede representar con los enteros de javascript
// Number.MAX_SAFE_INTEGER
// 9007199254740991

// Number.MAX_VALUE: El valor mas grande que podemos escribir en javascript

// metodos staticos de javascript
// parseFloat
// parseInt
