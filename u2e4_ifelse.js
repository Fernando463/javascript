
var edad=prompt("Introduce tu edad");
if(edad>0 && edad<=12){                // Ojo, no usar AND sino &&.
	alert("Eres un niño");
}
else if(edad>=13 && edad<=26){
	alert("Eres joven");
}
else if(edad>26 && edad<=60){
	alert("Eres adulto");
}
else if(edad>60){
	alert("Eres un jubilado");
}
else if(edad<0){
	alert("La edad no puede ser negativa, introduce un valor positivo");
}

/*
var edad=10;
if(edad>12){
	alert("Tenes más de 12 años");
}
else if(edad<12){
	alert("Tienes menos de 12 años");
}
else{}
*/