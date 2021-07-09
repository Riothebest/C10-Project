var ship, shipImg;
var sea, seaImg;

function preload()
{
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup()
{
  createCanvas(900,550)

  //creating the sea
  sea = createSprite(200,200,10,10);
  sea.addImage(seaImg);
  sea.scale = 0.42;
  sea.velocityX = -6;

  //creating ship
  ship = createSprite(200,300,10,10);
  ship.addAnimation("s", shipImg);
  ship.scale = 0.45;
}

function draw() {
  background("cyan");

  if(sea.x < 0 ){
    sea.x = 800
  }
  drawSprites();
}