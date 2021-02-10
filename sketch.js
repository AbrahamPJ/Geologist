
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var rubber;
var plane;

function preload()
{
	
}

function setup() {
	createCanvas(800,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(10,300);
	stone = new Stone(500,20,40,40);
	rubber = new Rubber(200,450,70);
	plane = new Plane(600,height,1200,20);
	sand = new Sand(400,10,50,50);
	iron = new Iron(700,200,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
  hammer.display();
  stone.display();
  rubber.display();
  plane.display();
  sand.display();
  iron.display();

  drawSprites();
 
}



