/* 
=============================================
INICIO DE VARIABLES
=============================================
*/

//Variables numericas

var numero = 10;
console.log("Numero:", numero);

//Variables de texto

var palabra = "Hola Gente";
console.log("Palabra:", palabra);

//Variables booleanas

var booleanas = true;
console.log("booleanas:", booleanas);

//Variables de tipo Arrays

var colores = ["rojo", "amarillo"];
console.log("colores:", colores);

//Variables de tipo objeto

var objeto = {
    ingrediente1: "fresa",
    ingrediente2: "mandarina",
    ingrediente3: "banano"
};
console.log("objeto:", objeto.ingrediente1);

//Variables de tipo DOM

var caja = document.querySelector("#caja");
console.log("caja:",caja);

caja.style.width= "200px";
caja.style.height= "200px";
caja.style.background= "blue";

var cajas = document.querySelectorAll(".cajas");
console.log("cajas:",cajas);
/* 
=============================================
FIN DE VARIABLES
=============================================
*/