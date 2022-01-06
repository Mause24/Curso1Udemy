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
    EsError: false,
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
        const tecla = evt.keyCode;
        console.log(evt);
        switch (true) {
            case ((evt.shiftKey || evt.ctrlKey || evt.altKey) && !(evt.shiftKey && evt.ctrlKey && tecla===67)):
                evt.preventDefault();
                break;
            case ((tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105)):
                propiedades.accion = "numero"
                propiedades.digito = evt.key
                metodos.calcular(propiedades.accion, propiedades.digito)
                break;
            case tecla === 110 || tecla === 190:
                propiedades.accion = "decimal"
                propiedades.digito = evt.key
                metodos.calcular(propiedades.accion, propiedades.digito)
                break;
            case (tecla >= 106 && tecla <= 111):
                propiedades.accion = "signo"
                propiedades.digito = evt.key
                metodos.calcular(propiedades.accion, propiedades.digito)
                break;
            case tecla === 8:
                propiedades.accion = "borrar"
                propiedades.digito = evt.key
                metodos.calcular(propiedades.accion, propiedades.digito)
                break;
            case tecla === 46:
                propiedades.accion = "borrarTodo"
                propiedades.digito = evt.key
                metodos.calcular(propiedades.accion, propiedades.digito)
                break;
            case tecla === 13:
                propiedades.accion = "igual"
                propiedades.digito = evt.key
                metodos.calcular(propiedades.accion, propiedades.digito)
                break;
            default:
                break;
        }
        /* if ((tecla>=48 && evt.keyCode<=57) || (evt.keyCode>=96 && evt.keyCode<=105)) {
            propiedades.accion="numero"
            propiedades.digito=evt.key
            metodos.calcular(propiedades.accion,propiedades.digito)
        } */
    },
    teclado: () => {
        document.addEventListener("keydown", metodos.oprimir)
    },
    calcular: (accion, valor) => {
        switch (accion) {
            case "numero":
                if (propiedades.EsResultado || propiedades.EsError) {
                    propiedades.pantalla.innerHTML = valor
                    propiedades.EsResultado = false;
                    propiedades.EsError = false;
                } else {
                    propiedades.pantalla.innerHTML += valor;
                }
                break;
            case "signo":
                if (!isNaN(propiedades.pantalla.innerHTML[propiedades.pantalla.innerHTML.length - 1])) {
                    propiedades.pantalla.innerHTML += valor;
                    propiedades.esDecimal = false;
                    propiedades.EsResultado = false;
                }
                break;
            case "decimal":
                if (!propiedades.esDecimal && !isNaN(propiedades.pantalla.innerHTML[propiedades.pantalla.innerHTML.length - 1])) {
                    propiedades.pantalla.innerHTML += valor;
                    propiedades.esDecimal = true;
                    propiedades.EsResultado = false;
                }
                break;
            case "igual":
                if (!isNaN(propiedades.pantalla.innerHTML[propiedades.pantalla.innerHTML.length - 1])) {
                    console.log(propiedades.pantalla.innerHTML);
                    propiedades.pantalla.innerHTML = eval(propiedades.pantalla.innerHTML);
                    console.log("Despues",propiedades.pantalla.innerHTML);
                    propiedades.EsResultado = true;
                    console.log(propiedades.EsResultado);
                } else {
                    propiedades.pantalla.innerHTML = "Sintax Error";
                    propiedades.EsError=true;
                }
                break;
            case "borrar":
                propiedades.pantalla.innerHTML = propiedades.pantalla.innerHTML.substring(0, propiedades.pantalla.innerHTML.length - 1)
                propiedades.EsResultado = false;
                break;
            case "borrarTodo":
                propiedades.pantalla.innerHTML = "";
                propiedades.esDecimal = false;
                propiedades.EsResultado = false;
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