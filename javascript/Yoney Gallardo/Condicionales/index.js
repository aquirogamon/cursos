/*
	if
	if-else
	if-else if-else
	switch
*/

var uno = 10;
var dos = 20;

if(uno==10){
	document.write("Es Igual" + "<br>");
}

if(dos==10){
	document.write("Es Igual" + "<br>");
}else{
	document.write("No es Igual" + "<br>");
}

var numero = 30

if(numero==10){
	document.write("Es Igual a 10" + "<br>");
}else if(numero==20){
	document.write("Es Igual a 20" + "<br>");
}else if(numero==30){
	document.write("Es Igual a 30" + "<br>");	
}else{
	document.write("No es Igual a ninguno" + "<br>");
}

var	dato = 40;
var resultado;
switch(dato){
	case 10: resultado="diez";break;
	case 20: resultado="veinte";break;
	case 30: resultado="treinta";break;
	case 40: resultado="cuanrenta";break;
	default: resultado="ninguno";break;
}
document.write(resultado);