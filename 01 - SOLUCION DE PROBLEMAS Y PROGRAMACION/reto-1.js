
//COMENTARIOS
//PROGRAMAR LOS OPERADORES ARITMETICOS
//suma
let suma = 1+1
//resta
let resta = 1-1
//multiplicacion
let multiplicacion = 2*2
//division
let division = 2/2;
//resto
let modulo = 2%2
//exponente
let exponente = 2 ** 3

//console.log('SUMA: ' + suma + ' RESTA ' + resta + ' MULTIPLICACION ' +multiplicacion);

//operadores de comparacion

//valores globales
let x = 4
let y = 5
let z = 1

//comparacion de igualdad
//console.log(y == '5');
//comparacion de igualdad si es diferente
//console.log(y != 3);

//console.log(y === 5);

//console.log( y !== 3);

//operadores de desicion 

/*if (y >= 5) {

    console.log("Y ES MAYOR QUE CINCO");
    
}else{
    console.log("Y ES MENOR QUE CINCO");
}*/

//let edad = 15


//ternario
//edad > 18 ? console.log("Es mayor de edad"):console.log("Es menor de edad");


const objectBooks=[
    {
      "name": "Dune",
      "author": "Frank Herbert",
      "year": "1965"
    },
    {
      "name": "1984",
      "author": "George Orwell",
      "year": "1949"
    },
    {
      "name": "Foundation",
      "author": "Isaac Asimov",
      "year": "1951"
    },
    {
      "name": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "year": "1979"
    },
    {
      "name": "Neuromancer",
      "author": "William Gibson",
      "year": "1984"
    },
    {
      "name": "Ender's Game",
      "author": "Orson Scott Card",
      "year": "1985"
    },
    {
      "name": "Brave New World",
      "author": "Aldous Huxley",
      "year": "1932"
    },
    {
      "name": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "year": "1953"
    },
    {
      "name": "The War of the Worlds",
      "author": "H.G. Wells",
      "year": "1898"
    },
    {
      "name": "Snow Crash",
      "author": "Neal Stephenson",
      "year": "1992"
    }
  ]

/*for(const element of objectBooks){
    console.log(element.name);
}*/

let day = 'Monday';
let element='';
switch (day) {
    case 'Sunday':
        element = 'Dia domingo'
        
        break;
    case 'Monday':
        element = 'Dia lunes'

    default:
        break;
    
}

console.log(element);