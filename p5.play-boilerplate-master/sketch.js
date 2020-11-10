var monkey,monkeyimg;
var bg;
var riverimg,movingRiver;
var invisibleGround;
var CrocGroup,LogGroup1,LogGroup2,LogGroup3;

function preload(){
  monkeyimg = loadImage("monkey.png");
  bg = loadImage("a.png");
  riverimg = loadImage("r.png");

  crocodile = loadImage("croc.png");
  log1 = loadImage("1.png");
  log2 = loadImage("2.png");
  log3 = loadImage("3.png");
  log4 = loadImage("4.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  movingRiver = createSprite(displayWidth-500,displayHeight-275,displayWidth+displayWidth*10000,displayHeight-175);
  movingRiver.addImage(riverimg);
  movingRiver.velocityX=-5;
  movingRiver.scale=1.55;

  invisibleGround = createSprite(displayWidth-500,displayHeight-500,displayWidth+displayWidth*10000,5);
  invisibleGround.visible = false;

  if(movingRiver.x < 750){
    movingRiver.x=movingRiver.width/1.5;
  }
  monkey = createSprite(displayWidth-750,displayHeight-600,20,20);
  monkey.addImage(monkeyimg);
  monkey.scale=0.45;
  crocGroup = new Group();
  logGroup1 = new Group();
  logGroup2 = new Group();
  logGroup3 = new Group();
}

function draw() {
  background(bg);  
  
  if(movingRiver.x < 500){
    movingRiver.x=movingRiver.width/1.5;
  }
  if(keyDown("space")){
    monkey.velocityY=-5;
  }
  monkey.velocityY+=1;
  monkey.collide(invisibleGround);

  spawnCroc();
  spawnLog1();
  drawSprites();
  
}

function spawnCroc(){
  if(frameCount % 200===0){
    var croc = createSprite(displayWidth,random(displayHeight-350,displayHeight-80),10,10);
    croc.addImage(crocodile);
    croc.velocityX = -10;
    croc.scale=0.5;
    croc.lifetime=displayWidth/10;
    crocGroup.add(croc);

  }
}
function spawnLog1(){
  if(frameCount % 150===0){
    var l1 = createSprite(displayWidth,displayHeight-400,10,10);
    l1.addImage(log1);
    l1.velocityX = -10;
    l1.scale=0.5;
    l1.lifetime=displayWidth/10;
    logGroup1.add(l1);

  }
}

