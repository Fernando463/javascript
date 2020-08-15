var mensaje="Primer mensaje";
function crearMensaje(){
	
	var mensaje="Segundo mensaje modificado";
	alert("Dentro de la funcion-->" + mensaje);
}
crearMensaje();
alert("Fuera de la funcion-->"+mensaje);
