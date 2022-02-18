/* 
=============================================
INICIO OBJETO PROPIEDADES SLIDE
=============================================
*/

var propiedades={
    paginacion:document.querySelectorAll("#paginacion li"),
    flechas:document.getElementsByClassName('flechas'),
    item:0,
    cajaSlide: document.querySelector('#slide ul'),
    avanzar:document.querySelector('#avanzar'),
    retroceder:document.querySelector('#retroceder'),
    progressBar:document.querySelector('.circle'),
    resetLoop:false,
}

/* 
=============================================
FIN OBJETO PROPIEDADES SLIDE
=============================================
*/
/* 
=============================================
INICIO OBJETO METODOS SLIDE
=============================================
*/

var metodos={
    inicioSlide: ()=>{
        for (let i = 0; i < propiedades.paginacion.length; i++) {
            propiedades.paginacion[i].addEventListener('click',(e)=>metodos.paginacionSlide(e.target.parentNode.getAttribute("item")))
        }
        propiedades.avanzar.addEventListener('click',metodos.avanzar)
        propiedades.retroceder.addEventListener('click',metodos.retroceder)
        metodos.progressing()
    },
    paginacionSlide: (item) => {
        propiedades.resetLoop=true;
        propiedades.item=+item
        metodos.movimientoSlide(propiedades.item)
    },
    movimientoSlide:(value)=>{
        propiedades.progressBar.classList.remove("animationProgress")
        setTimeout(()=>{
            propiedades.progressBar.classList.add("animationProgress")
        },10)
        propiedades.cajaSlide.style.left=`${value*-100}%`
        const array=[...propiedades.paginacion].forEach((item)=>{
            item.className=''
            if (+item.getAttribute("item")===propiedades.item) {
                item.classList.add("selected")
            }
        })
    },
    avanzar:()=>{
        propiedades.resetLoop=true;
        if (propiedades.item<propiedades.paginacion.length-1) {
            propiedades.item+=1
        }else{
            propiedades.item=0
        }
        metodos.movimientoSlide(propiedades.item)
    },
    retroceder:()=>{
        propiedades.resetLoop=true;
        if (propiedades.item>0) {
            propiedades.item-=1
        }else{
            propiedades.item=propiedades.paginacion.length-1
        }
        metodos.movimientoSlide(propiedades.item)
    },
    progressing:()=>{
        setInterval(()=>{
            if (propiedades.resetLoop) {
                propiedades.resetLoop=false
            } else {
                metodos.avanzar()
            }
        },5000)
    }
    /* intervalo:()=>{
        setInterval(){
            metodos.slideFlechas()
        }
    } */
}

metodos.inicioSlide();

/* 
=============================================
FIN OBJETO METODOS SLIDE
=============================================
*/