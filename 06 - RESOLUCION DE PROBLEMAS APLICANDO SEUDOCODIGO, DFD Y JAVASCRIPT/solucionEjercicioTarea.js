/**
 * SON PAQUETES QUE VIENEN PREINSTALADOS EN EL FRAMEWORK DE NODEJS
 * QUE ES NODEJS ES UN FRAMEWORK DE JAVASCRIPT
 */
const readline = require("readline");

let balance = 2000;
const objetoDatos = {
    nombre:'Mcloving',
    cuenta:'025555-2',
    apellido:'MclovingApellido'
}

//VALUE DE MANERA GLOBAL 
const value = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const retirarDinero =()=>{
    value.question('Cuanto dinero deseo retirar', function (response){
        response = parseFloat(response)
        console.log(response);
        if ( response >= balance) {
            console.log('No tiene suficiente dinero para retirar');
            return
        }
        value.question('¿Desea pagar seguro por su retiro? S = SI , N = NO',function(answer){
            if (answer ==='S') {
                balance=balance-response-0.2
                console.log('El retiro fue exitoso' + balance + 'Con un descuento del 20%');
                salirDelSistema()
            }else{
                balance=balance-response
                console.log('El retiro fue exitoso ' + balance);
                salirDelSistema()
            }
        }) 
    })
}

const salirDelSistema = ()=>{
    value.question('Desea hacer una nueva transaccion SI = S , NO = N',function(response){
        if (response =='S') {
            main() 
        }else{
            value.close()
        }
    })
}
const main=()=>{
    console.log('BIENVENIDO A SU CAJERO AUTOMATICO');
    value.question('Digite su numero de pin ',function(response){
        if (response == objetoDatos.cuenta) {
            console.log('1 - DEPOSITAR DINERO');
            console.log('2 - RETIRAR DINERO');
            console.log('3 - VER ESTADO DE CUENTA');
            value.question('Digite una de las opciones que se muestran',function(opcion){
                console.log(opcion);
                opcion = parseInt(opcion)
                switch (opcion) {
                    case 1:
                        console.log('Entro a la opcion 1');
                        //depositarDinero()
                        break;
                    case 2:
                        console.log('Entro a la funcion 2');
                        retirarDinero()
                        break;
                    case 3:
                        console.log('Entro a la funcion 3');
                        //verEstadoCuenta()
                        break;
                    default:
                        salirDelSistema()
                        break;
                }
            })
        }else{
            console.log('HA OCURRIDO UN ERROR');
        }
    })
}
main()



