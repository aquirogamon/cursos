function uno(){
	var saludo = document.write("Hola a todos - Perú <br>")
	return saludo;
};

function dos(a, b, c, d){
	var a, b, c, d;
	document.write('Mi nombre completo es: ' + a + ' ' + b + ' ' + c + ", Mi edad es: " + d + "<br>");
};

function tres(nombre=""){
	var nombreCompleto = nombre;
	return document.write(nombreCompleto + "<br>");
};

function cuatro(nombre, apellido){
	if(nombre != null && apellido != null){
		document.write("Mi nombre es: " + nombre + " y mi apellido es: " + apellido + "<br>")
	}else{
		document.write("No ingresó sus datos <br>")
	};
};

function cinco(...meses){
	for (let uno of meses){
		document.write(uno + "<br>");
	};
	document.write(meses + "<br>");
};

function seis(nombre, precio, peso) {
	return "El juguete " + nombre + ", tiene un precio de: " + precio + " y un peso de: " + peso + "<br>";
};
var primero = ["Super Man", 25, 2];

var siete = function () {
	respuesta = "Hola a todos <br>";
	return respuesta;	
};

uno();
dos("Armando", "Quiroga", "Montero", 34);
dos();
tres("Armando Quiroga");
cuatro();
cuatro("Armando", "Quiroga");
cinco("Enero", "Febrero","Marzo")
document.write(seis(...primero))
document.write(siete + "<br>");
document.write(siete());

var a = function (nombre, uno) {
	var e=nombre;
	uno(e);
};

var b = function (i) {
	document.write(i);
};

a("Armando Quiroga <br>", b);
