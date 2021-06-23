
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 350);

    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	paper= new Paper(190,250,45);

	ground = new Ground(410,350,1200,20);

	bin= new Dustbin(790,270,130,140);
	//bin2= new Dustbin(760,285,0,90);
	//bin3= new Dustbin(880,285,0,90);

	

	Engine.run(engine);
  
}


function draw() {
  background(192,192,192);
  
  Engine.update(engine);

  paper.display();
  bin.display();
  ground.display();
  //bin2.display();
  //bin3.display();

  

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body, paper.body.position,{x:33,y:-21.5});
	}
}



