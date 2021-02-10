class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':2,
      }
      this.body = Bodies.rectangle(x, y, 100, 10, options);
      this.width = 100;
      this.height = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle = this.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange");
      strokeWeight(2);
      stroke("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }