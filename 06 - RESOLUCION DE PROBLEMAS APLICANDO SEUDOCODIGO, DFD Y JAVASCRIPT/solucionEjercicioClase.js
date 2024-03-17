/**
 * @fileoverview Se realizara las funciones basicas de un cajero automatico
 * @version 1.0
 * @author Fernando Blanco
 * @copyright Equipo metahumanos
 * 
 * Historial:
 * v1.0 - Primera versión del cajero automatico.
 */


/**
 * TERMINOS A INVESTIGAR
 * EL READLINE
 * REQUIRE (MODULOS DE NODEJS)
 * ISNAN
 * LLAMADA A LA FUNCION
 * FUNCIONES
 */

const readline = require('readline')

let balance = 1000
const value = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const retirarDinero=()=>{
    
    value.question("Ingrese cuanto dinero quiere retirar",function(valor){
        valor=parseFloat(valor)

        if (isNaN(valor)) {
            console.log('Digite un valor valido');
            return
            
        } 
        if (balance<=valor) {
            console.log('No tienes saldo suficiente para hacer el retiro');
            return
            
        }
        balance=balance-valor
        console.log(`Ha retirado ${valor}. Su saldo actual es ${balance}`);

    })

}

const depositarDinero=()=>{

    value.question("Digite la cantidad que desea depositar", function(valor){
        valor = parseFloat(valor)
        if (isNaN(valor)) {
            console.log('Digite un valor valido');
            return
            
        } 
    
        balance=balance+valor
        console.log(`Ha depositado ${valor}. Su saldo actual es ${balance}`);
    })
}


const cajero=()=>{
   
    console.log('Bienvenido a su cajero automatico');
    console.log('1- Desea retirar dinero');
    console.log('2- Desea depositar dinero');
    console.log('3- Desea ver su estado de cuenta');
    console.log('4- Desea salir del sistema');

   
      value.question("Seleccione una opcion", function (answer) {

        switch (answer) {
            case '1':
                retirarDinero()
                
                break;
            case '2':
                depositarDinero()
              
            case '3':
                console.log(`Su estado de cuenta es ${balance}`);
                cajero()
            default:
                console.log('Opcion no valida');
                break;
        }
      });
      
}

cajero()