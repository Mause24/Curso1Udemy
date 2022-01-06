/* 
=============================================
INICIO DE CONDICIONES
=============================================
*/
var a=5;
var b=5;

if (a>b) {
    console.log("A es mayor que B ");
}else if (a===b) {
    
    console.log("A es igual a B");
}else{
    console.log("A no es igual a B, ya que A es menor que B");
}


//SWITCH

var dia="viernes";

switch (dia) {
    case "lunes":
        console.log("voy a estudiar Python");
        break;
    case "martes":
        console.log("voy a estudiar CSS");
        break;
    case "miercoles":
        console.log("voy a estudiar HTML");
        break;
    case "jueves":
        console.log("voy a estudiar React");
        break;
    case "viernes":
        console.log("voy a estudiar TypeScript");
        break;
    case "sabado":
        console.log("voy a estudiar PHP");
        break;
    case "domingo":
        console.log("voy a descansar");
        break;

    default:
        console.log("La opcion no es un dia");
        break;
}

/* 
=============================================
FIN DE CONDICIONES
=============================================
*/