/* 
=============================================
INICIO DE CLASES
=============================================
*/

//CLASES PRIMITIVAS

//Clase String

var string = new String("Hola gente");
console.log("string:",string);

//Clase Number
var number = new Number(20);
console.log("number:",number);

//Clase Number
var boolean = new Boolean(false);
console.log("boolean:",boolean);

//CLASES COMPUESTAS

//Clase Array
var array = new Array("rojo","amarillo","verde");
console.log("array:",array);

//Clase object
var object = new Object({
    nombre:"Pablo",
    apellido:"Perez",
    edad:15,
});
console.log("object:",object);

//CLASES PERSONALIZADAS

//Creamos el prototipo

function Persona(){
    
    //Propiedades publicas
    this.nombre;
    this.apellido;
    this.edad;
    
}

var persona= new Persona();

persona.nombre = "Juan";
persona.apellido = "Perez";
persona.edad = 15;
console.log("persona:",persona);

//Clases con parametros

function Animales(nombre,raza){
    
    //Propiedades publicas
    this.nombre=nombre;
    this.raza=raza;
    
}

var animal= new Animales("Fido","Perro");
console.log("animal",animal);

/* 
=============================================
FIN DE CLASES
=============================================
*/