/* 
=============================================
INICIO DE CODIGO CALCULADORA
=============================================
*/


//PROPIEDADES DE CALCULADORA

var propiedades = {
    teclas: document.querySelectorAll("#botones .boton"),
    accion: null,
    digito: null,
    pantalla: document.querySelector("#operaciones"),
    esDecimal: false,
    EsResultado: false,
}

//METODOS CALCULADORA

var metodos = {
    inicio: () => {
        console.log("Hola Gente");
        for (let index = 0; index < propiedades.teclas.length; index++) {
            const element = propiedades.teclas[index];
            element.addEventListener("click", metodos.oprimirTecla)
        }
        metodos.teclado();
    },
    oprimirTecla: (evt) => {
        propiedades.accion = evt.target.getAttribute("id")
        propiedades.digito = evt.target.innerHTML;
        metodos.calcular(propiedades.accion, propiedades.digito);
    },
    oprimir: (evt) => {
       console.log(evt);
    },
    teclado: () => {
        document.addEventListener("keydown",metodos.oprimir)
    },
    calcular: (accion, valor) => {
        switch (accion) {
            case "numero":
                if (propiedades.EsResultado) {
                    propiedades.pantalla.innerHTML=valor
                    propiedades.EsResultado=false;
                }else{
                    propiedades.pantalla.innerHTML += valor;
                }
                break;
            case "signo":
                if (!isNaN(propiedades.pantalla.innerHTML[propiedades.pantalla.innerHTML.length - 1])) {
                    propiedades.pantalla.innerHTML += valor;
                    propiedades.esDecimal = false;
                    propiedades.EsResultado=false;
                }
                break;
            case "decimal":
                if (!propiedades.esDecimal && !isNaN(propiedades.pantalla.innerHTML[propiedades.pantalla.innerHTML.length - 1])) {
                    propiedades.pantalla.innerHTML += valor;
                    propiedades.esDecimal = true;
                    propiedades.EsResultado=false;
                }
                break;
            case "igual":
                if (!isNaN(propiedades.pantalla.innerHTML[propiedades.pantalla.innerHTML.length - 1])) {
                    propiedades.pantalla.innerHTML = eval(propiedades.pantalla.innerHTML);
                    propiedades.EsResultado=true;
                } else {
                    propiedades.pantalla.innerHTML = "Sintax Error";
                }
                break;
            case "borrar":
                propiedades.pantalla.innerHTML = propiedades.pantalla.innerHTML.substring(0, propiedades.pantalla.innerHTML.length - 1)
                propiedades.EsResultado=false;
                break;
            case "borrarTodo":
                propiedades.pantalla.innerHTML = "";
                propiedades.esDecimal = false;
                propiedades.EsResultado=false;
                break;
            case "borrarOperaciones":
                console.log("borrarOperaciones:", accion);
                break;

            default:
                console.log("Sintax Error");
                break;
        }
    },
}

metodos.inicio();
/* 
=============================================
FIN DE CODIGO CALCULADORA
=============================================
*/