/*
	keyDown
	keyPress
	keyUp
*/

window.addEventListener("keydown", function () {
	console.log("Presiono tecla")
});

window.addEventListener("keypress", function () {
	console.log("Sostengo tecla")
});

window.addEventListener("keyup", function () {
	console.log("Suelto tecla")
});

window.addEventListener("keypress", function (evento) {
	console.log(evento.keyCode);
});

window.addEventListener("keypress", function (evento) {
	console.log(String.fromCharCode(evento.keyCode));
});
