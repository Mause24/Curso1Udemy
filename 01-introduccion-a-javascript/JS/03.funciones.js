/* 
=============================================
INICIO DE FUNCIONES
=============================================
*/

var globales=10
console.log("globales",globales);

//FUNCIONES SIN PARAMETROS

//Declarar una funcion
const saludo=()=>console.log("Saludos!!");


//Ejecutar una funcion

saludo();

//FUNCIONES CON PARAMETROS

//Declarar una funcion
const operacion=(digito1,digito2)=>{
    var resultado=digito1+digito2;
    globales=resultado;
    console.log("resultado:",resultado);
}


//Ejecutar una funcion

operacion(10,5);
console.log("globales",globales);

//FUNCIONES CON RETORNO SIN PARAMETROS

//Declarar una funcion
const retorno1=()=>{
    var numero=5;
    return numero;
}


//Ejecutar una funcion

console.log("numero:",retorno1());

//FUNCIONES CON RETORNO CON PARAMETROS

//Declarar una funcion
const retorno2=(numero)=>{
    return numero;
}


//Ejecutar una funcion

console.log("numero:",retorno2(10));


/* 
=============================================
FIN DE FUNCIONES
=============================================
*/