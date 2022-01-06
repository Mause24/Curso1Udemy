var tiempo=document.querySelector("#tiempo")
var segundos =0;

/* 
=============================================
INICIO DE INTERVALOS y RETARDOS
=============================================
*/

//INTERVALOS
var intervalo=setInterval(()=>{

    segundos++;
    tiempo.innerHTML = segundos;
    
},1000)

//RETARDOS

setTimeout(()=>{
    clearInterval(intervalo)
},10000)

/* 
=============================================
FIN DE INTERVALOS Y RETARDOS
=============================================
*/