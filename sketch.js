const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world

var ground

function setup() {
  createCanvas(400,400);

  engine = Engine.create(); //world automatically creates
  world = engine.world;

  var options = {
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  console.log(ground);

  
}

function draw() {
  background('gray');  
  Engine.update(engine);
  
  fill('brown')
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
}