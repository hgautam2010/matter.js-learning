function particle(x, y, r, stat)
{
  this.r = r;
  var options = {
    restitution: 1,
    friction: 0,
    frictionAir: 0,
    isStatic: stat
  }
  this.body = Bodies.circle(x, y, this.r, options);
  World.add(world, this.body);
  this.show = function()
  {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    stroke(1);
    fill(200);
    ellipse(0, 0, this.r*2, this.r*2);
    line(0,0,r,0);
    pop();
  }
  this.isOffScreen = function()
  {
    var pos = this.body.position;
    if(pos.x < -50 || pos.x > width + 50 || pos.y < -50 || pos.y > height + 50)
    {
      this.removeFromWorld();
      return true;
    }
    return false;
  }
  this.removeFromWorld = function()
  {
    World.remove(world,this.body);
  }
}
