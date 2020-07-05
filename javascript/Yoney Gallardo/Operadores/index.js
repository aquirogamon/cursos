var uno = 1;
var dos = 2;
var tres = uno + dos;

document.write(uno + dos + tres + "<br>");
document.write(uno - dos - tres + "<br>");
document.write(uno * dos * tres + "<br>");
document.write(uno / dos / tres + "<br><br>");

document.write(tres/dos + "<br>");
document.write(tres%dos + "<br><br>");

var cuatro = 4;
document.write(cuatro + "<br>");
cuatro++
document.write(cuatro + "<br><br>");

var cinco = 5;
document.write(cinco + "<br>");
cinco--
document.write(cinco + "<br><br>");

/* Preferencia
	*
	/
	%
	+
	-
*/

 var seis = 6+3/2
 document.write(seis + "<br>");
 var seis = (6+3)/2;	//Anidación
 document.write(seis + "<br>");

 /*	
	 <
	 >
	 <=
	 >=
	 ==
	 !=
*/

 document.write(uno == dos);
 document.write((uno != dos)+ "<br>");
 document.write((uno > dos) + "<br><br>");
 
 /*
	y = &&
	o = ||
	negación = !
*/

document.write((uno == dos)  || (dos == dos) + "<br>");
document.write((uno == dos)  && (dos == dos) + "<br>");
document.write( !(dos == dos) + "<br><br>");

var numero =10;

numero += 10;
document.write(numero + "<br>");
numero -= 30;
document.write(numero + "<br>");
numero *= 2;
document.write(numero + "<br><br>");

//	condicion ? TRUE : FALSO

document.write(uno==dos ? "ES IGUAL - TRUE" : "NO ES IGUAL - FALSE" + "<br>");
document.write(numero==-20 ? "ES IGUAL - TRUE" : "NO ES IGUAL - FALSE" + "<br><br>");

var variable_1 = "10";
var variable_2 = "20";

document.write(variable_1 + variable_2 + "<br>");
document.write("Soy el número diez - " + variable_1 + "<br>" + "Soy el número veinte - " + variable_2 + "<br>");
