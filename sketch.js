const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
 

function setup()
{
  createCanvas(900, 600);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (width/2, 515, width, 20);

  bin1 = new Dustbin (600,375,20, 150);
  bin2 = new Dustbin (690,460,180, 20);
  bin3 = new Dustbin (780,375,20, 150);

  paper = new Paper (170, 400, 20);

  slingShot = new Launcher(paper.body, { x: 150, y: 100 });

  Engine.run(engine);
  
}

function draw() {

  background("#e6e6e6");
  //console.log(mouseX+","+mouseY);
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  slingShot.display();

  drawSprites();
 
}

/*function keyPressed() {
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body,paper.body.position,{x:674,y:-898});
   }
 }*/
 function mouseDragged() {
	Matter.Body.setPosition(paper.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	slingShot.fly();
}
