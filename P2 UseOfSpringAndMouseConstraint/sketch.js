var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse;
var engine;
var world;
var mConstraint;
var particles = [];
var boundries = [];
function setup()
{
	var canvas = createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	for(var i = 0; i < 15; ++i)
	{
		var p;
		if(i != 0)
		{
			p = new particle(width/2+i*10, random(50,100), 15 ,false);
		}
		else
		{
			p = new particle(width/2+i*10, random(50,100), 15, true);
		}
		if(i != 0)
		{
			var options = {
				bodyA: p.body,
				bodyB: particles[i-1].body,
				length: 30,
				stiffness: 0.5
			}
			var constraint = Constraint.create(options);
			World.add(world, constraint);
		}
		particles.push(p);
	}
	boundries.push(new Boundary(width/2, height - 30, width, 60, 0));
	var mouse = Mouse.create(canvas.elt);
	mouse.pixelRatio = pixelDensity();
	var options = {
		mouse: mouse
	}
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world,mConstraint);
}
function draw()
{
	background(100);
	for (var i = 0; i < particles.length; ++i)
	{
		particles[i].show();
	}
	// for (var i = 0; i < particles.length; ++i)
	// {
	// 	if (i < particles.length - 1) {
	// 		line(particles[i].body.position.x,particles[i].body.position.y,particles[i+1].body.position.x,particles[i+1].body.position.y);
	// 	}
	// }
	for (var b of boundries)
	{
		b.show();
	}
	if(mConstraint.body)
	{
		var pPos = mConstraint.body.position;
		var offset = mConstraint.constraint.pointB;
		var mPos = mConstraint.mouse.position;
		stroke(0,255,0);
		line(pPos.x + offset.x, pPos.y + offset.y, mPos.x, mPos.y);
		stroke(0);
	}
}
