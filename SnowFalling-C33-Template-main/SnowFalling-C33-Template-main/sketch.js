//var snow = ("sprites/snow2.jpg");
var backgroundImg;
var bg=("sprites/snow3.jpg");

function preload(){
  this.image=loadImage("sprites/snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 

  bg.display();

  drawSprites();
}