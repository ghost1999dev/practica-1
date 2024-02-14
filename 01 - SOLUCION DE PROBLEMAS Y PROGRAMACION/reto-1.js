
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

/*const nota=10;

if (nota <= 8) {
  console.log("No paso la materia");
  
}else{
  console.log("Si paso la materia");
}*/


/**
 * *ESTRUCTURA FOR
 */
/*let iteracion =0

for (iteracion; iteracion < 50; iteracion++) {
  console.log(iteracion);
}*/

/**
 * *ESTRUCTURA FOR OF
 */

//ARREGLO

/*const iterables=[
  'trenes',
  'automoviles',
  'camiones'
]

for(let value of iterables){
  console.log(value);
}*/

/**
 * *ESTRUCTURA FOR IN
 */

/*const frutas={
  nombre:"manzana",
  precio:"1.00",
  peso:"2.5kg",
  cantidad:''
}

for(const propiedad in frutas){
  console.log(frutas[propiedad]);
}*/

/**
 * * ESTRUCTURA DE CONTROL SWITCH 
 */

/*const instrumento = 'flauta'
switch (instrumento) {
  case 'Guitarra':
    console.log('Has seleccionado guitarra');
    break;
  case 'Piano':
    console.log('Has seleccionado guitarra');
    break;
  case 'flauta':
    console.log('Has seleccionado flauta');
  default:
    break;
}*/


/*let jsonData=[
  {
    "name": "Dune",
    "author": "Frank Herbert",
    "year": 1965
  },
  {
    "name": "Ender's Game",
    "author": "Orson Scott Card",
    "year": 1985
  },
  {
    "name": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "name": "The Hitchhiker's Guide to the Galaxy",
    "author": "Douglas Adams",
    "year": 1979
  },
  {
    "name": "Brave New World",
    "author": "Aldous Huxley",
    "year": 1932
  },
  {
    "name": "Foundation",
    "author": "Isaac Asimov",
    "year": 1951
  },
  {
    "name": "Neuromancer",
    "author": "William Gibson",
    "year": 1984
  },
  {
    "name": "Snow Crash",
    "author": "Neal Stephenson",
    "year": 1992
  },
  {
    "name": "The Martian",
    "author": "Andy Weir",
    "year": 2011
  },
  {
    "name": "Ready Player One",
    "author": "Ernest Cline",
    "year": 2011
  }
]

for(let value of jsonData){
  console.log(value.author);
}*/


/**
 * * HACER UN PROGRAMA  QUE IMPRIMA POR CONSOLA
 * * TODOS LOS NUMEROS COMPRENDIDOS DE 10 HASTA 55
 * * (INCLUIDOS) PARES, IMPARES Y QUE NO APAREZCA EL 16
 * * QUE NO SEAN MULTIPLOS DE 3
 */

for (let index = 10; index < 56; index++) {
  
  if (index % 2 ==0 && index % 3 !==0 && index !==16) {
    console.log(index);
    
  }
  
}





