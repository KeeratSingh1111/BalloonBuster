var balloon,balloonImage;
var backgroundImage;
var ground;
var bow;
var arrow;
var score = 0;
var newImage;

var redB,greenB,blueB,pinkB,arrowGroup;

function preload(){
   backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5; 
  background.velocityX = - 4; 
  
  
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1.5;
  
  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();
}

function draw() {  
    if(background.x < 100){
      background.x = background.width /2
    }
    
    
    bow.y = World.mouseY;

  
    if (keyDown("space")) {
      var temp_arrow = createArrow();
      temp_arrow.addImage(arrowImage);
       temp_arrow.y = bow.y;
    }
  
  var select_balloon   = Math.round(random(1,4));
  console.log(select_balloon)
  
  if(World.frameCount % 80 == 0){
    if(select_balloon == 1){
      redBalloon();
    }else if(select_balloon == 2){
      greenBalloon();
    }else if(select_balloon == 3){
      blueBalloon();
    }else {
      pinkBalloon();
    }
  }
   
  
  if(arrowGroup.isTouching(redB)){
     redB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
   if(arrowGroup.isTouching(blueB)){
     blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score+3;
  }
  
   if(arrowGroup.isTouching(greenB)){
     greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
   if(arrowGroup.isTouching(pinkB)){
     pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
   drawSprites();
  
  text("Score "+ score,500,40);
}


function createArrow(){
  arrow = createSprite(360,108,5,10);
  arrow.velocityX = -6;
  arrow.scale = 0.4;
  arrowGroup.add(arrow);
  return arrow;
}

function redBalloon(){
  var red = createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(red_balloonImage)
  red.velocityX = 2;
  red.lifetime = 130;
  red.scale = 0.1;
  redB.add(red);
}

function greenBalloon(){
  var green = createSprite(0,Math.round(random(40,370)),10,10);
  green.addImage(green_balloonImage)
  green.velocityX = 2;
  green.lifetime = 130;
  green.scale = 0.1;
  greenB.add(green);
}

function blueBalloon(){
  var blue = createSprite(0,Math.round(random(60,370)),10,10);
  blue.addImage(blue_balloonImage)
  blue.velocityX = 2;
  blue.lifetime = 170;
  blue.scale = 0.1;
  blueB.add(blue);
}

function pinkBalloon(){
  var pink = createSprite(0,Math.round(random(90,370)),10,10);
  pink.addImage(pink_balloonImage)
  pink.velocityX = 2;
  pink.scale = 2.5;
  pink.lifetime = 170; 
  pinkB.add(pink);
}

function spawnBalloon(){
  if(frameCount % 80 === 0){
    balloon = createSprite(0,60,10,10);
    balloon.y = Math.round(random(50 ,400));
    
    var randomNum = Math.round(random(1,4));
    console.log(randomNum)
    switch(randomNum){
      case 1: balloon.addImage(red_balloonImage);
              balloon.scale = 0.1;
              break;
      case 2: balloon.addImage(green_balloonImage);
              balloon.scale = 0.1;
              break;
      case 3: balloon.addImage(blue_balloonImage);
              balloon.scale = 0.1;
              break;
      case 4: balloon.addImage(pink_balloonImage);
              break;
      default : break;
    }
    
    balloon.velocityX = 2;
    
  }
}

