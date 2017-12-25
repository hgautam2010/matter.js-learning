function Box(x, y, w, h)
{
  this.w = w;
  this.h = h;
  var options = {
    restitution: 0.5,
    friction: 0
  }
  this.body = Bodies.rectangle(x, y, this.w, this.h, options, 0);
  World.add(world, this.body);
  this.show = function()
  {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    rectMode(CENTER);
    translate(pos.x,pos.y);
    rotate(angle);
    stroke(1);
    fill(100);
    rect(0,0,this.w,this.h);
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
