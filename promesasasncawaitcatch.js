// ejemplo 1 me da fallo mirar

// esqueleto XML peticios asincrona basica profesional
const toNumber = n => Number(n);
const multiply = n => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
       let number = toNumber(n);
       number = multiply(number);
       print(number);
};

const thenAlt = (n) => console.log(n),

const catchAndPrint = (err) => console.log(err);

const request = (url, then, catchFn) =>{
    const req = new XMLHttpRequest();
    // req.open("GET", "./numero.txt");
    req.open("GET", url);



req.onload = () => {
    if(req.status === 200){
        then(req.responseText);
     
    } else {
        catchFn ( new Error('Error al cargar'));
        // console.log("Error al cargar");
    }
};

req.onerror = () => {
    catchFn(new Error('Error al cargar'));
    // console.log("Error de red");
};
req.send();

}

request("./numero.txt", catchAndPrint, thenAlt);
// request("./numero2.txt");
// request("http://meloinventomucho.com", thenFn, catchPrint);

// minuto 14 ultimo video 


// ejemplo 2 promesa

// new Promise((resolve, reject) => {
//     resolve(5)
//     reject(new Error())
// })