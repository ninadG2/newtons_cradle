
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;


var bob1;
var staticobject1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 //bob object
	bob1 = new bob(130,320,50);
	bob2 = new bob(230,320,50);
	bob3 = new bob(330,320,50);
  bob4 = new bob(430,320,50);
  bob5 = new bob(530,320,50);

	staticobject1 = new staticbody(350,34,700,45);
     //rope object
     rope1 = new rope(bob1.body, {x:130,y:34}, -70*2,0)
     rope2 = new rope(bob2.body, {x:230,y:34}, -70*2,0)
     rope3 = new rope(bob3.body, {x:330,y:34}, -70*2,0)
     rope4 = new rope(bob4.body, {x:430,y:34}, -70*2,0)
     rope5 = new rope(bob5.body, {x:530,y:34}, -70*2,0)
     //rope1 = new rope(bob1.body, staticobject1.body, -70*2,0)
  // rope2 = new rope(bob2.body, staticobject1.body, -70*2,10)
	// rope3 = new rope(bob3.body, staticobject1.body, -70*7,0)
	// rope4 = new rope(bob4.body, staticobject1.body, -70*7,0)
   
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(mouseX)
 

  
  staticobject1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.show();
  bob2.show();
  bob3.show();
  bob4.show();
  bob5.show();

  drawSprites();
 
}

function keyPressed()
{
    if(keyCode === 38)
    {
      Matter.Body.applyForce(bob1.body, bob1.body.position,{x:100, y:100})
    }
}



