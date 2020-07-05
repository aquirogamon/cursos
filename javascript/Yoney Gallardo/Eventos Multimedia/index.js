var primero = document.querySelector(".videoControl")

primero.addEventListener("play", function () {
	console.log("Presionaste Play")
});

primero.addEventListener("seeking", function () {
	console.log("Adelantaste")
});
primero.addEventListener("seeking", function () {
	console.log(this.currentTime)
});

primero.addEventListener("ended", function () {
	console.log("Finalizó")
});