// esqueleto XML peticios asincrona basica profesional
const toNumber = (n) => Number(n);
const multiply = (n) => {
    console.log("Multiply", n);
    if (n > 10) throw new Error("Error");
    return n * 2;
};
const print = (n) => console.log(n);
// no hace falta retorne nada
// const print = (n) => {
//     console.log(n);
//     return n+1};

// const thenFn = (n) => {
//     let number = toNumber(n);
//     number = multiply(number);
//     print(number);
// };

// const thenAlt = (n) => console.log(n);

const catchAndPrint = (err) => {
    console.log(err);
    return 1;
};
const request = (url) => {

    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        // req.open("GET", "./numero.txt");
        req.open("GET", url);



        req.onload = () => {
            if (req.status === 200) {
                resolve(req.responseText);

            } else {
                reject(new Error('Error al cargar'));
                // console.log("Error al cargar");
            }
        };

        req.onerror = () => {
            reject(new Error('Error de red'));
            // console.log("Error de red");
        };
        req.send();
    });

};

const prom = async () => {}


const call = async (url) => {
    let response, response2;

    try {

        response = await request(url);
    } catch (error) {
        catchAndPrint(error);
        response = 7;
    }
    try {

        response2 = await request(url);
    } catch (error) {
        catchAndPrint(error);
        response2 = 8;
    }

    const n1 = toNumber(response);
    const n2 = toNumber(response2);
    print(n1 * n2);
    // .then(print)

    // .catch(catchAndPrint);
}

call('./numero2.txt');

// request("./numero2.txt")
// .then(print)

// .catch(catchAndPrint);
// finally es una sentencia que se va a ejecutar siempre
// .finally(() => console.log("'Se acabo la peticion"))



// si ponemos then por debajo de este catch todo lo que valla hacia abajo se va a seguir ejecutando
// .catch(catchAndPrint)
// .then(multiply)
// .then(multiply)
// .then(print)
// .catch(catchAndPrint)
// .then(multiply);
// request("./numero2.txt").then((data) => console.log(data));

// voy por minuti 32 07