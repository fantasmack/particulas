//var container = document.getElementById("container");
var canvas, context;
var maxWidth, maxHeight; // Como globales para acceder.
var time = new Date().getTime();
// var particle = {
// 	x: Math.random() * window.innerWidth,
// 	y: Math.random() * window.innerHeight,
// 	radius : (Math.random() *10) + 3
// };

var particles = [];
var particleCounter = 300;
var PI2 = Math.PI*2;

function init(){
	canvas = document.createElement("canvas");
	context = canvas.getContext("2d");

	console.log(canvas);
	// container.appenChild(canvas);
	document.body.appendChild(canvas);
	setParticle();
	SetSize();
	window.addEventListener("resize", SetSize);
}

function setParticle(){
	for (var i = 0; i < particleCounter; i++){
		var particle = new Particle();
		particles.push(particle);
	}
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

var Particle = function(args){
	if(args === undefined) args ={};
	this.x = args.x || (Math.random() * window.innerWidth);
	this.y = args.y || (Math.random() * window.innerHeight);
	this.radius = args.radius || (Math.random() * 10);
	return this;
}

function render(){
	context.clearRect(0,0, maxWidth, maxWidth);
	for (var i = 0; i < particles.length; i++) {
		var particle = particles[i];
		context.beginPath();
		context.arc(particle.x, particle.y, particle.radius, PI2, false);
		context.stroke();
		context.closePath();
	}
}

init();
animate();