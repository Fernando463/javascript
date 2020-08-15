// Cálculo del factorial de un número.
var numero=prompt("Introduce un numero y se calculará su factorial");
var resultado=1;

for(var i=1;i<=numero;i++){
	
	resultado*=i;
}

alert(resultado);



/* var dias=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
for(var i=0;i<7;i++){
	alert(dias[i]);
}
*/