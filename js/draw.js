//var container = document.getElementById("container");
var canvas, context;
var maxWidth, maxHeight; // Como globales para acceder.

function init(){
	canvas = document.createElement("canvas");
	context = canvas.getContext("2d");

	console.log(canvas);
	// container.appenChild(canvas);
	document.body.appendChild(canvas);
	SetSize();
	window.addEventListener("resize", SetSize);
}

function SetSize(){
	maxWidth = window.innerWidth;
	maxHeight = window.innerHeight;
	canvas.width = maxWidth
	canvas.height = maxHeight;
}

function animate(){
	requestAnimationFrame(animate);
	time = new Date().getTime();
	render();
}

function render(){
	//draw methods
	context.clearRect(0, 0, maxWidth, maxHeight);

	context.fillStyle = "red";
	context.fillRect(0, 0, 100, 100); //metodo

	context.beginPath();
	context.moveTo(maxWidth/2, maxHeight/2);
	context.lineTo(400, 500);
	context.lineTo(300, 550);
	context.lineTo(200, 100);
	context.lineTo(maxWidth/2, maxHeight/2);
	context.strokeStyle = "blue";
	context.stroke();
	context.closePath();
//Circulo	
	context.beginPath();
	context.arc(300, 300, 10, Math.PI*2, false);
	context.strokeStyle = "green";
	context.stroke();

}

init();
animate();