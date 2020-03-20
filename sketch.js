const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var fallingObject;

function setup(){
var canvas =createCanvas(400,400);
engine=Engine.create();
world=engine.world;

fallingObject=Bodies.circle(200,100,30);
World.add(world,fallingObject);

console.log(fallingObject);
createSlider();
}
function draw(){
    background(0,0,0);
    ellipse(fallingObject.position.x,fallingObject.position.y,30,30)
    ellipseMode(RADIUS);
    rect(200,390,400,10);
    rectMode(CENTER);
}