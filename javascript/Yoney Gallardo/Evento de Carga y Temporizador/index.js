window.addEventListener("load", function () {
	console.log("Ya cargó")
})

/*
	setInterval
	setTimeout
*/

var tiempo = setInterval(function () {
	document.write("Texto de Ejemplo <br>")
}, 2000);

setTimeout(function () {
	document.write("Es otro texto <br>")
}, 3000);