const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world

var stick1

function setup() {
  createCanvas(800,400);
   engine = Engine.create();
    world = engine.world;
   stick1 = new castle(100,100,200,10)
}

function draw() {
  background(255,255,255);
  Engine.update(engine);  
  drawSprites();
}