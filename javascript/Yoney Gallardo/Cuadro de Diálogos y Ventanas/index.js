/*
	alert
	confirm
	prompt
*/

var saludo = "Hola a mi gente!!!"
alert(saludo + "\nPrueba");

confirmacion = confirm("Necesita ayuda?");

if(confirmacion){
	document.write("Dijo que SI");
}else{
	document.write("Dijo que NO");
};

if(confirmacion){
	window.location="ayuda.html"
};

var llenar = prompt("Nombre Completo");
document.write(llenar);