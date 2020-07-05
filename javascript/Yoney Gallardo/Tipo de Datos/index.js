/*
	Numéricos
	Cadena
	Booleanos TRUE o FALSE
	Fechas
	Símbolos
	Objetos
*/

var primero	= 0123456;
document.write(primero + "<br>");
document.write(typeof primero + "<br><br>");

var segundo = 'Esto es una cadena';
document.write(segundo + "<br>");
document.write(typeof segundo + "<br><br>");

var tercero = false;
document.write(tercero + "<br>");
document.write(typeof tercero + "<br><br>");

var cuarto = Date();
document.write(cuarto + "<br>");
document.write(typeof cuarto + "<br><br>");

var quinto = new Date();
document.write(quinto + "<br>");
document.write(typeof quinto + "<br>");
document.write(quinto.getDate () + "<br>");
document.write(quinto.getHours () + "<br>");
document.write(quinto.getMinutes () + "<br>");
document.write(quinto.getHours () + ":", quinto.getMinutes () + "<br><br>");

const symbol1 = Symbol();
var symbol2 = Symbol(42);
var symbol3 = Symbol('foo');

document.write(symbol1.toString() + "<br>");
document.write(typeof symbol1 + "<br><br>");
console.log(typeof symbol1);
document.write(Symbol('foo') === Symbol('foo'));
