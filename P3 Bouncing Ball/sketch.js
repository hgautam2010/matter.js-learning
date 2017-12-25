var Engine = Matter.Engine,
    World = Matter.World,
		Events = Matter.Events,
    Bodies = Matter.Bodies,
		Vector = Matter.Vector;
var engine;
var world;
var ball;
var bound = [];


function setup()
{
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	world.gravity.x = 0;
	world.gravity.y = 0;
	world.gravity.scale = 0;
	//Events.on(engine, 'collisionStart', collistion);
	ball = new Ball(width/2, height/2, width/90);
	new Boundary(width/2,height + 10, width, 20);
	new Boundary(width/2,-10, width, 20);
	new Boundary(width + 10,height/2, 20, height);
	new Boundary(-10,height/2, 20, height);
}

function draw()
{
	Engine.update(engine);
	background(82,157,155);
	ball.show();
}
