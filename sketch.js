var runnerImg,runner
var pathImg,path
var invisibleWall1
var invisibleWall2
function preload(){
  //pre-load images
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4
  path.scale=1.2;

  runner=createSprite(200,370)
  runner.addAnimation("runner", runnerImg)
  runner.scale=0.07

  invisibleWall1=createSprite(0,200,20,400)
  invisibleWall1.visible=false
  invisibleWall2=createSprite(400,200,20,400)
  invisibleWall2.visible=false
}

function draw() {
  background("white");
  

  if (path.y>400){
    path.y=height/2
  }

  runner.x = World.mouseX;

  runner.collide(invisibleWall1);
  runner.collide(invisibleWall2);
  drawSprites();
}
