
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine , myWorld;



function preload()
{
	
}

function setup() {
	createCanvas(1280, 570);
	myEngine=Engine.create();
  myWorld=myEngine.world;

  

bob1=new Bob(640,385,40);
roof1=new Roof(width/2,100,40,20);
rope1=new Rope(bob1.body,roof1.body,1,0);

roof2=new Roof(596,100,40,20);
bob2=new Bob(600,385,40);
rope2=new Rope(bob2.body,roof2.body,1,0);

roof3=new Roof(552,100,40,20);
bob3=new Bob(560,385,40);
rope3=new Rope(bob3.body,roof3.body,1,0);

roof4=new Roof(684,100,40,20);
bob4=new Bob(640,385,40);
rope4=new Rope(bob4.body,roof4.body,1,0);

roof5=new Roof(510,100,40,20);
bob5=new Bob(540,385,40);
rope5=new Rope(bob5.body,roof5.body,1,0);


 //paper=createSprite(150,530,50,50);
 //paper.shapeColor="blue";

 //paper2=createSprite(150,530,40,40);
 //paper2.shapeColor="midnightblue";

 //paper3=createSprite(150,515,10,10);
 //paper3.shapeColor="white";

 //paper4=createSprite(150,545,10,10);
 //paper4.shapeColor="white";

 //paper5=createSprite(165,530,10,10);
 //paper5.shapeColor="white";

 //paper6=createSprite(135,530,10,10);
 //paper6.shapeColor="white";

 //paper7=createSprite(150,530,5,5);
 //paper7.shapeColor="silver";




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	
//function keyPressed(){
//	if (keyCode === UP_ARROW){
//		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
//	}
//}


}




function draw() {	
  background("black");

  Engine.update(myEngine);
 
bob1.display();
roof1.display();
rope1.display();

roof2.display();
bob2.display();
rope2.display();

roof3.display();
bob3.display();
rope3.display();

roof4.display();
bob4.display();
rope4.display();

roof5.display();
bob5.display();
rope5.display();


//paper.display();
//paper2.display();
//paper3.display();
//paper4.display();
//paper5.display();
//paper6.display();
//paper7.display();



function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:20,y:20});
	}

	//if (keyCode === DOWN_ARROW){
	//	Matter.Body.applyForce(bob4.body,bob4.body.position,{x:15,y:13});
	//}

	
}

keyPressed();
}



