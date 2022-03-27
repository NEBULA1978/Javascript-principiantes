// class Usuario {
//     constructor(nombre, email, pasword) {
//         this.nombre = nombre;
//         this.email = email;
//         this.pasword = pasword;
//     }

//     saludo() {
//         console.log(`Hola, soy ${this.nombre}`);
//     }

//     login(email,pasword) {
//         // es lo mimo que abajo
//         // if (this.email === email && this.pasword) return true;
//         // return false;

//         // es lo mimo que arriba ,pero asi buen codigo
//         return (this.email === email && this.pasword === pasword);
       
//     }
// }
// // solo se puede extender una clase
// // con extends hemos copiado todos los metodos de usuario y los metemos en alumno directamente
// class Alumno extends Usuario {
//     despedida() {
//         console.log(`Hasta luego, ${this.nombre}`);
//     }
// }

// const pablo = new Usuario("Pablo", "pablo@gmail.com", "pablo123");
// const jose = new Alumno("Jose", "jose@gmail.com", "jose123");

// console.log(pablo);
// console.log(jose);

// todos los objetos heredan de object
// todas las clases tienen que tener un constructor aunque tu no lo veas


// // ejemplo 2

// //PADRE
// class Usuario {
//     constructor(nombre, email, pasword) {
//         // console.log("Constructor de Usuario");
//         this.nombre = nombre;
//         this.email = email;
//         this.pasword = pasword;
//     }

//     saludo() {
//         console.log(`Hola, soy ${this.nombre}`);
//     }

//     login(email,pasword) {
      
//         return (this.email === email && this.pasword === pasword);
       
//     }
// }


// // HIJO

// // solo se puede extender una clase
// // con extends hemos copiado todos los metodos de usuario y los metemos en alumno directamente
// class Alumno extends Usuario {
//     constructor(nombre, email, pasword) {
//         super(nombre, email, pasword);

//         this.activo =false;
//         this.cursos = [];
//     }
//     // agregarCurso(curso){
//     //     this.cursos.push(curso);
//     // }
//     activar(){
//         this.activo = true;
//     }

//     login(email,pasword){
//         if(!this.activo) return false;

//         return super.login(email, pasword);
        
//     }
// }
   

// const jose = new Alumno("Jose", "jose@gmail.com", "jose123");


// console.log(jose);


// ejemplo 2

//PADRE
class Usuario {
    constructor(nombre, email, pasword) {
        // console.log("Constructor de Usuario");
        this.nombre = nombre;
        this.email = email;
        this.pasword = pasword;
    }

    saludo() {
        console.log(`Hola, soy ${this.nombre}`);
    }

    login(email,pasword) {
      
        return (this.email === email && this.pasword === pasword);
       
    }
}


// HIJO

// solo se puede extender una clase
// con extends hemos copiado todos los metodos de usuario y los metemos en alumno directamente
class Alumno extends Usuario {
    constructor(nombre, email, pasword) {
        super(nombre, email, pasword);

        this.activo =false;
        this.cursos = [];
    }
    // agregarCurso(curso){
    //     this.cursos.push(curso);
    // }
    activar(){
        this.activo = true;
    }

    login(email,pasword){
        if(!this.activo) return false;
        
        return super.login(email, pasword);
        
    }
}
   

const pablo = new Alumno("Pablo", "pablo@gmail.com", "pablo123");
const jose = new Alumno("Jose", "jose@gmail.com", "jose123");

console.log(jose);
// es plablo ussuario true o false nos devuelve
console.log(jose instanceof Usuario);

console.log(pablo instanceof Object);

console.log([] instanceof Object);

// todos los objetos heredan de object
// todas las clases tienen que tener un constructor aunque tu no lo veas

// todos los objetos son instancias de object

