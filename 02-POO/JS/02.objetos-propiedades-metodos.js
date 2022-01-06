/* 
=============================================
INICIO DE OBJETOS, PROPIEDADES Y METODOS
=============================================
*/
var object ={
    nombre:"Juan",
    apellido:"Perez",
    edad:15,
    descripcion: ()=>{
        console.log("Su nombre es "+object.nombre+" "+object.apellido+" y tiene "+object.edad+" años.");
    },
    saludar: (saludo)=>{
        console.log(saludo+" "+object.nombre);
    },
}
console.log("nombre:",object.nombre);
console.log("apellido:",object.apellido);
object.descripcion();
object.saludar("Hola");

//OBJETOS PRIMITIVOS

//Objeto Date
var fecha= new Date();
console.log("fecha",fecha);
var year= fecha.getFullYear();
console.log("year",year);

/* 
=============================================
FIN DE OBJETOS, PROPIEDADES Y METODOS
=============================================
*/