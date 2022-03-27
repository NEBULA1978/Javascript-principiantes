// const a = 1;
// const b = 1;

// console.log(a == b);// nos dvuelve true


// const a = "1";
// const b = 1;

// console.log(a == b);// nos dvuelve true pero es string



// const a = "a";
// const a = "1";
// const b = true;


//Loose sería == !=
//strict === !==


// nos dvuelve false pero es string
// console.log(a == b);

// en cambio los booleanos con los string intenta pasarlo a numeros

//da true
// console.log([] == 0);

// distinto
//da false lo niega si es true da false o a la inversa
// console.log([] != 0);


// igualda de tipo de  variables y mismo valor sino da false

//da false
// console.log([] === 0);


// const a = 2;
// const b = 2;

// da false abajo
// console.log(a >=b);

// da false true
// console.log(a <= b);



// const a = 2;
// const b = 12;

// // da true abajo
// console.log(a <= b);

// const a = 2;
// const b = "12";

// // da true abajo
// console.log(a <= b);


// const a = "2";
// const b = "12";

// // da false abajo, ordenamos alfabeticamente cuando comparamos strings
// console.log(a <= b);


const a = 1;
const b = 2;
const c = 3;

// da false abajo, ordenamos alfabeticamente cuando comparamos strings
// console.log(a < b);
// console.log(b < c);

// abreviado
// nos da true ya que  los dos son true si uno sa false daría false
// console.log(b < c && b< c);


// or con que una se cumpla sera true,solamente sera false si todas son false
console.log(b < c || b< c);