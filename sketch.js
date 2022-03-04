var ball;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    

	ball_options={
		isStatic : false,
		restitution : 0.5,
		friction : 0,
		density : 1.2
	}

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    
	ball = Matter.Bodies.circle(200,600, 10, ball_options)
    World.add(world,ball)
	
	groundObj=new ground(width/2,670,width,20)
    leftSide=new ground(1100,600,20,120)
	rightSide=new ground(1350,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  drawSprites();
 groundObj.display()
 leftSide.display()
 rightSide.display()

 ellipse(ball.position.x,ball.position.y,35,35)

 
	 
 
}



function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 23, y: -19}  )
	}
	
}