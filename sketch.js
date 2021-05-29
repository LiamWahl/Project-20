var bgImg;
var cat;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    


}

function setup(){
    createCanvas(1000,800);
    
    
    
    cat=createSprite(800,600,10,10);
    cat.addAnimation("img1",catimg1);
    cat.scale=.1;
   
    mouse=createSprite(300,600,10,10);
    mouse.addAnimation("img2",mouseimg1);
    mouse.scale = .1;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < cat.width - mouse.width/2 &&    
 mouse.x - cat.x < cat.width/2+mouse.width/2 && 
cat.y-mouse.y < cat.height/2+mouse.height/2 && 
mouse.y-cat.y < cat.height/2+mouse.height/2){

  
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
   
   
   cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    cat.velocityX = 5;
  }


  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg1);
    mouse.changeAnimation("mouseTeasing");
   
    
  }

}
