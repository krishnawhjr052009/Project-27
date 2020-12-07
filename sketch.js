
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(800,200,400,20);

	bob1=new Bob(800,550,40);
	bob2=new Bob(720,550,40);
	bob3=new Bob(640,550,40);
	console.log(bob3);
	bob4=new Bob(880,550,40);
	bob5=new Bob(960,550,40);

	rope1=new Rope(bob1.body,roof.body,0,0);
	rope2=new Rope(bob2.body,roof.body,-80,0);
	rope3=new Rope(bob3.body,roof.body,-160,0);
	rope4=new Rope(bob4.body,roof.body,80,0);
	rope5=new Rope(bob5.body,roof.body,160,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}

function keyPressed() {
    if(keyCode===UP_ARROW){
		console.log("Inside KeyPressed")
       Body.applyForce(bob3.body,bob3.body.position,{x:-85,y:-85})

	}


}

