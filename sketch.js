var bananaImage
var obstacleImage
var obstacleGroup
var foodGroup
var bg
var score=0
var backImage,monkey;
var ground
function preload(){
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  backImage=loadImage("jungle.jpg");
  bananaImage=loadImage("banana.png");
}

function setup() {
  createCanvas(400, 400);
  foodGroup=new Group();
  obstacleGroup=new Group();
  bg = createSprite(200,200,400,200);
  bg.addImage("ground",backImage);
  bg.x = bg.width /2;
 
  
  ground=createSprite(200,380,400,50);
  ground.visible=false;
  
  //ground.velocityX=-4;
  ground.x=ground.width/2;
  monkey = createSprite(50,380,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1
  
  
}

function draw() {
  background(10,200,50)
  bg.velocityX=-4;
  spawnBananas();
 spawnObstacles();
  if(keyDown("space")&& monkey.y>=161) {
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
   switch(score) {
    case  10: monkey.scale=0.12;
              break;
    case  20: monkey.scale=0.14;
              break;
    case  30: monkey.scale=0.16;
              break;
    case  40: monkey.scale=0.4;
              break;
    default:  break;
  }
      if (obstacleGroup.isTouching(monkey)) {
          monkey.scale=0.08 
          }
 console.log(monkey);
  if (keyDown("space") && monkey.isTouching (ground)) {
    monkey.velocityY=-6;
  }
 
  if (bg.x < 0) { 
  bg.x=bg.width/2
  }
  if (foodGroup.isTouching(monkey)) {
      score=score+2;
      foodGroup.destroyEach();
      }
  createEdgeSprites ();
  monkey.collide(ground);
  
  drawSprites();
  stroke ("white");
  textSize(20);
  fill("white");
  text("score :" +score,300,50);
}

function spawnBananas () {
  if (World.frameCount % 80===0) {
    var r=Math.round(random(300,70));
  var banana=createSprite(400,r,5,5);
  
    banana.addImage(bananaImage);
  banana.velocityX=-12;
    banana.scale=0.05;
    lifetime=134;
    
    foodGroup.add(banana);
  }
}

function spawnObstacles () {
  if (World.frameCount % 80===0) {
  var obstacle=createSprite(400,360,5,8);
   //var v=Math.round(random(4,7));
    //obstacle.addImage(obstacleImage);
  obstacle.velocityX=-12;
    obstacle.scale=15;
    lifetime=134;
    
    obstacleGroup.add(obstacle);
  }
}