
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime, score;
var ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   
monkey= createSprite(80, 315, 20, 20)  
monkey.addAnimation("moving", monkey_running);
 monkey.scale=0.1 
  
  
  ground=createSprite(400, 350, 900, 10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
 // obstaclesGroup = createGroup();
FoodGroup=new Group();

  obstacleGroup=new Group();
  var survivaltime=0;

}
function draw() {
background("white")
  
   if (ground.x < 0){            
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& ground.y >= 100) {
        monkey.velocityY = -12;
    
  }

  monkey.velocityY = monkey.velocityY + 0.8 

   monkey.collide(ground);
 
  spawnFood();
  spawnObstacle();
  
  stroke("white")
  textSize(20)
  fill("white")
  text("score:"+score, 500, 50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survival:Time:"+survivaltime,100, 50)
  
    
  drawSprites();
}
function spawnObstacle(){
  if (frameCount % 300 === 0){
     obstacle = createSprite(200, 320, 20, 20);
    var rand = Math.round(random(1,6));
  
     obstacle.velocityX = -6;
    obstacle.collide(ground);
   
   obstacle.lifetime = 300;
   obstacle.scale=0.2
    obstacle.addImage(obstacleImage)
    
  obstacleGroup.add(obstacle)  
  
  
   
  
  }
  
}
function spawnFood(){
  
if (frameCount % 80 === 0) {
    banana=createSprite(200, 200, 20, 20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
   banana.scale=0.1
    banana.velocityX = -3;
    
    banana.lifetime = -1;
    
    
    
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}
  
  
  
  
  
  





