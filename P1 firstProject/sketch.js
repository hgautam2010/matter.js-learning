var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;
var engine;
var world;
var boxes = [];
var grounds = [];
var circles = []
function setup()
{
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	var options = {
		isStatic: true
	}
	grounds.push(new Boundary(width/2-90, 200, 250, 20, PI/8));
	grounds.push(new Boundary(width/2+90, 400, 300, 20, PI*1.9));
}

function draw()
{
	background(51);
	for(var i = boxes.length - 1; i >= 0; --i)
	{
		boxes[i].show();
		if(boxes[i].isOffScreen())
			boxes.splice(i,1);
	}
	for(var i = circles.length - 1; i >= 0; --i)
	{
		circles[i].show();
		if(circles[i].isOffScreen())
			circles.splice(i,1);
	}
	for(var i = grounds.length - 1; i >= 0; --i)
	{
		grounds[i].show();
		if(grounds[i].isOffScreen())
			grounds.splice(i,1);
	}
	if(random() < 0.5)
		boxes.push(new Box(width/2, 50, random(10,30), random(10,30)));
	else
		circles.push(new Circle(width/2, 50, random(5,15)));
}
function mouseDragged()
{
	if(random() < 0.5)
		boxes.push(new Box(mouseX, mouseY, random(10,30), random(10,30)));
	else
		circles.push(new Circle(mouseX, mouseY, random(5,15)));
}
