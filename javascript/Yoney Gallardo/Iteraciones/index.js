/*
	while
	do-while
	for
	break-continue
*/

var uno = 10;
var dos = 20;

while(uno < dos){
	document.write(uno + "<br>")
	uno++;
}
document.write(uno + "<br>")
do{
	document.write(uno + "<br>")
	uno++;
}while(uno <= 20);

for (var i=1; i <=10; i++) {
	document.write( i + "<br>");
};

for (var ii = 1; ii <= 20; ii++) {
	if( ii==5 ){break;}
	document.write(ii + "<br>");
};

for (var ii = 1; ii <= 20; ii++) {
	if( ii>=5 && ii<=10 ){continue;}
	document.write(ii + "<br>");
};