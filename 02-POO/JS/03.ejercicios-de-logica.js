/* 
=============================================
INICIO DE EJERCICIOS DE LOGICA
=============================================
*/

//EJERCICIO 1
var carrera={
    A:0,
    B:0,
    C:0,
    D:0,
    resultado: ()=>{
        if (carrera.C > carrera.B &&
             carrera.D > carrera.B && 
             carrera.D > carrera.C && 
             carrera.D < carrera.A) {
            return true
        }
        return false;
    },
    intervalo:setInterval(()=>{
        carrera.A= Math.ceil(Math.random()*4)
        carrera.B= Math.ceil(Math.random()*4)
        carrera.C= Math.ceil(Math.random()*4)
        carrera.D= Math.ceil(Math.random()*4)
        if (carrera.resultado()) {
            clearInterval(carrera.intervalo)
            console.log("atleta A:",carrera.A);
            console.log("atleta B:",carrera.B);
            console.log("atleta C:",carrera.C);
            console.log("atleta D:",carrera.D);
        }
    },10),
}

//EJERCICIO 2 

var caballos={
    mac:{
        edad:0,
        velocidad:0,
        tono:0,
    },
    smith:{
        edad:0,
        velocidad:0,
        tono:0,
    },
    willy:{
        edad:0,
        velocidad:0,
        tono:0,
    },
    jack:{
        edad:0,
        velocidad:0,
        tono:0,
    },
    resultado:()=>{
        if (caballos.mac.tono > caballos.smith.tono &&
            caballos.mac.velocidad > caballos.jack.velocidad &&
            caballos.mac.edad > caballos.jack.edad &&
            caballos.willy.velocidad > caballos.jack.velocidad &&
            caballos.mac.edad > caballos.willy.edad &&
            caballos.mac.edad > caballos.smith.edad &&
            caballos.willy.tono > caballos.smith.tono &&
            caballos.smith.velocidad > caballos.jack.velocidad &&
            caballos.jack.tono > caballos.smith.tono 
            ) {
            return true;
        }
        return false
    },
    intervalo:setInterval(()=>{
        caballos.mac.edad= Math.ceil(Math.random()*2)
        caballos.mac.velocidad= Math.ceil(Math.random()*2)
        caballos.mac.tono= Math.ceil(Math.random()*2)
       
        caballos.smith.edad= Math.ceil(Math.random()*2)
        caballos.smith.velocidad= Math.ceil(Math.random()*2)
        caballos.smith.tono= Math.ceil(Math.random()*2)
       
        caballos.jack.edad= Math.ceil(Math.random()*2)
        caballos.jack.velocidad= Math.ceil(Math.random()*2)
        caballos.jack.tono= Math.ceil(Math.random()*2)
       
        caballos.willy.edad= Math.ceil(Math.random()*2)
        caballos.willy.velocidad= Math.ceil(Math.random()*2)
        caballos.willy.tono= Math.ceil(Math.random()*2)
       
        if (caballos.resultado()) {
            clearInterval(caballos.intervalo)
            console.log("Caballo Mac:",caballos.mac);
            console.log("Caballo Smith:",caballos.smith);
            console.log("Caballo Jack:",caballos.jack);
            console.log("Caballo Willy:",caballos.willy);
        }
    },1)
}
/* 
=============================================
FIN DE EJERCICIOS DE LOGICA
=============================================
*/