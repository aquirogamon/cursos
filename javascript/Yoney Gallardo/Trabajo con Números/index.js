var a = 10.55;
var aInt = parseInt(a);
var aFloat = parseFloat(a);

var b = 15;
var bInt = Number.isInteger(b);
var bFloat = Number.isNaN(b);

document.write(typeof aInt + "<br>")
document.write(aInt + "<br>")
document.write(aFloat + "<br>")
document.write(bInt + "<br>")
document.write(bFloat + "<br>")