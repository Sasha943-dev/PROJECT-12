
var garden,rabbit;
var gardenImg,rabbitImg;
var apple,carrot,leaves;
var appleImg,carrotImg,leavesImg;
var score;




function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);

  if(keyDown("left")){
    rabbit.x-=5;

  }

  if(keyDown("right")){
    rabbit.x+=5;
    
  }
  

 
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
var select_sprites = Math.round(random(1,3));
  

if(frameCount % 200 == 0 || select_sprites==2 ){
   
    createapples();
}
 else{
     
  createleaves();
  }

  
  
  
  
  drawSprites();
}

function createapples(){

apple = createSprite(400,50,10,10);
apple.scale =0.05;
apple.addImage(appleImg);
apple.velocityY=2;
apple.x=Math.round(random(10,390));
apple.lifetime=150;


}

function createleaves(){


  leaves = createSprite(400,50,10,10);
  leaves.scale =0.05;
  leaves.addImage(leavesImg);
  leaves.velocityY=5;
  leaves.x=Math.round(random(20,370));
  leaves.lifetime=150;

  }
  