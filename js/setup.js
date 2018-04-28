//var container = document.getElementById("container");
var canvas, context;
var maxWidth, maxHeight; // Como globales para acceder.

function initi(){
	canvas = document.createElement("canvas");
	context = canvas.getContext("2d");
	// container.appenChild(canvas);
	document.body.appenChild(canvas);
	SetSize();
	window.addEventListener("resize", SetSize);
}

function SetSize(){
	maxWidth = window.innerWidth;
	maxHeight = window.innerHeighth;
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
}

init();
animate();