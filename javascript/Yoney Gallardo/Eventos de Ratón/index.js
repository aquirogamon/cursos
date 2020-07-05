function apretar() {
	alert("Hola a todos")
	console.log();
};

function encima() {
	alert("El ratón está encima")
	console.log();
};

function fuera() {
	alert("El ratón está afuera");
	console.log();
};

var eventoPrueba = document.querySelector("#prueba");
eventoPrueba.addEventListener("click", function () {
	alert("Hola");
	console.log();
});