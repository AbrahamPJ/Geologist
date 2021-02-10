class Rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0,
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(x,y,r,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("grey");
      strokeWeight(2);
      stroke("white");
      ellipse(0, 0,this.r,this.r);
      pop();
    }
  };