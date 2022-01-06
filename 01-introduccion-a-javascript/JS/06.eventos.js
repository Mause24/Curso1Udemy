var recuadro= document.querySelector("#recuadro")
/* 
=============================================
INICIO DE EVENTOS 
=============================================
*/

//EVENTOS DESDE EL DOM
const cambiarColor=()=>{
    if (recuadro.style.background==="red") {
        recuadro.style.background = "greenyellow";
    }else{
        recuadro.style.background = "red";
    }
}

//EVENTOS DESDE JAVASCRIPT
var boton=document.querySelector("#boton")
var sw=true;
const mover=()=>{
    if (sw) {
        recuadro.style.width = "500px";
        sw=false
    } else {
        recuadro.style.width = "200px";
        sw=true;
    }
}
boton.addEventListener("click",mover)

/* 
=============================================
FIN DE EVENTOS 
=============================================
*/