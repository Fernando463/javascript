/*function suma_y_muestra(primerNumero,segundoNumero){
	
	var resultado=primerNumero+segundoNumero;
	return resultado;
	//alert("El resultado es"+resultado);
}
*/
/*
function calculo_precio(precio,iva,transporte){
	var precio;
	var iva;
	var transporte;
	var total=(precio*(1+iva/100))+transporte;
	return total.toFixed(2);
}


var pedido=calculo_precio(600,21,8);
alert(pedido);
*/

/*
var numero=prompt("Introduce un numero entero");
var resultado=parImpar(numero);
alert("El numero "+numero+" es "+resultado);

function parImpar(numero){
	if(numero%2==0){return "Par"}
	else{return "Impar"}
}

*/



/*
var cadena=prompt("Introduce una cadena de texto");


function comprobar(cadena){
	if(cadena==cadena.toUpperCase()){
		alert("La cadena  Esta formada por mayusculas");
	}
	
	else if(cadena==cadena.toLowerCase()){
		alert("La cadena Esta formada por minusculas");
	}
	
	else{
		alert("La cadena Es una mezcla de mayusculas y minusculas");
	}
	
	
}


*/

function info(cadena) {

  var resultado = "La cadena \""+cadena+"\" ";

  // Comprobar mayúsculas y minúsculas
  if(cadena == cadena.toUpperCase()) {
    resultado += " está formada sólo por mayúsculas";
  }
  else if(cadena == cadena.toLowerCase()) {
    resultado += " está formada sólo por minúsculas";
  }
  else {
    resultado += " está formada por mayúsculas y minúsculas";
  }

  return resultado;
}






