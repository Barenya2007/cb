
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
	var options={
		isStatic:true
		
	}

	bin2= Bodies.rectangle(845,240,10,115,options);
	World.add(world,bin2)
	bin3= Bodies.rectangle(735,240,10,115,options);
	World.add(world,bin3)
	bin= new Dustbin(790,340,130,155);


	

	Engine.run(engine);
  
}


function draw() {
  background(192,192,192);
  
  Engine.update(engine);

  paper.display();
  ground.display();

  
  rect(bin2.position.x,bin2.position.y,10,115)
  rect(bin3.position.x,bin3.position.y,10,115)
  bin.display();



  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body, paper.body.position,{x:25,y:-28});
	}
}



