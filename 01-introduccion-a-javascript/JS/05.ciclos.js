/* 
=============================================
INICIO DE CICLOS
=============================================
*/

var cajas = document.querySelectorAll(".cajas");

/* cajas[1].style.width="50px";
cajas[1].style.height="50px";
cajas[1].style.background="black"; */
var colores=["yellow","blue","red", "green"]
for (let i = 0; i < cajas.length; i++) {
    cajas[i].style.width=`${50*i+50}px`;
    cajas[i].style.height=`${50*i+50}px`;
    cajas[i].style.marginTop="5px";
    cajas[i].style.marginLeft="5px";
    cajas[i].style.display="inline-block";
    cajas[i].style.background=colores[i];
}

for (let i = 0; i < 10; i++) {
    console.log("i:",i);
}

//WHILE

var n=1;

while (n<=10) {
    console.log("n:",n);
    n++;
}

// DO WHILE

var p=1;

do  {
    console.log("p:",p);
    p++;
}while(p<=10);

/* 
=============================================
FIN DE CICLOS
=============================================
*/