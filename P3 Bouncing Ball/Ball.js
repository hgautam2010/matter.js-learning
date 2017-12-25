function Ball(x, y, r)
{
  this.r = r;
  var options = {
    restitution: 1,
    friction: 0,
    frictionStatic: 0,
    // density: 0,
    mass: 0,
    frictionAir: 0,
    force: {
      x: 0.001,
      y: 0.001
    },
    label: 'Ball',
    slop: 0,
    sleepThreshold: 0
  }
  this.color = {
    r: 255,
    g: 100,
    b: 100
  };
  this.body = Bodies.circle(x, y, r, options);
  World.add(world, this.body);
}

Ball.prototype.show = function ()
{
  fill(this.color.r,this.color.g,this.color.b);
  stroke(255);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0, 0, this.r * 2);
  pop();
}

Ball.prototype.offScreen = function()
{
  var pos = this.body.position;
  if(pos.x > width + 100 || pos.x < -100 || pos.y > height + 100 || pos.y < -100)
  {
    World.remove(world,this.body);
    return true;
  }
  return false;
}
