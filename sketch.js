var cloudImage;
var trex,ground,invisibleground;
var treximage,groundimagel;
var ObstaclesGroup,CloudsGroup
var count;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;


function preload(){
treximage=loadAnimation("trex1.png","trex3.png","trex4.png");
groundimage=loadImage("ground2.png");
cloudImage=loadImage("cloud.png");

obstacle1=loadImage("obstacle1.png");
obstacle2=loadImage("obstacle2.png");
obstacle3=loadImage("obstacle3.png");
obstacle4=loadImage("obstacle4.png");
obstacle5=loadImage("obstacle5.png");
obstacle6=loadImage("obstacle6.png");


}

  
  
  
  function setup() {
  createCanvas(850, 600);
trex = createSprite(200,500,20,50);
trex.scale=0.7
trex.addAnimation("trexrunning",treximage);  
ground = createSprite(200,550,400,20);
ground.addImage("ground",groundimage);
invisibleGround = createSprite(200,570,400,5); 
  
 ObstaclesGroup = createGroup();
 CloudsGroup = createGroup();

count=0
  
  
  }


            

function draw() {
  background(180);
 count = Math.round(World.frameRate/60)+count;
  trex.collide(invisibleGround);
  invisibleGround.visible = false;
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space") && trex.y >= 300){
      trex.velocityY = -10 ; 
 }
  
 trex.velocityY = trex.velocityY + 0.8; 
 ground.velocityX = -6; 
  
  spawnClouds();
 spawnObstacles();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(850,650,40,10);
    cloud.y = Math.round( random(300,450));
    cloud.addImage("cloud",cloudImage);
    cloud.scale = 0.8;  
    cloud.velocityX = -5;
                                                          
     //assign lifetime to the variable
    cloud.lifetime = 500;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
  
  
} 


function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,540,10,40);
    obstacle.velocityX = -(6 + 3* count/100);
    
    //generate random obstacles
    var rand = Math.round(random (1,6));
    //obstacle.setAnimation("obstacle" + rand);
    switch(rand)
    {
      case 1:obstacle.addImage("obstacle1",obstacle1);
    break;
      case 2:obstacle.addImage("obstacle2",obstacle2);
    break;
     case 3:obstacle.addImage("obstacle3",obstacle3);
    break;
      case 4:obstacle.addImage("obstacle4",obstacle4);
    break;
        case 5:obstacle.addImage("obstacle5",obstacle5);
    break;
      case 6:obstacle.addImage("obstacle6",obstacle6);
    break;
    }
    
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}








