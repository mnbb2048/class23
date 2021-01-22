const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
var engine,world,box1,ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(100,100,50,50);
  ground=new Ground(200,380,400,10);
}

function draw() {
  background(1);
  Engine.update(engine)
  box1.display();
  ground.display();
}