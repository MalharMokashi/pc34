
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImg;
var backgroundImg;
var fruit,fruitImg;
var edge;
var fall;


function preload()
{
  boyImg = loadImage("Boy.png");
  backgroundImg = loadImage("Background.png");
  fruitImg = loadImage("fruit.png");
}

function setup() {

  createCanvas(1000,500);

  engine = Engine.create();
	world = engine.world;

  boy_options={
    isStatic:false
  };

  boy = createSprite(500,450);
  boy.addImage(boyImg);
  boy.scale = 0.55;
  boy.velocityX = 8;
  
  fruit = createSprite(500,100);
  fruit.addImage(fruitImg);
  fruit.scale = 0.25;

  fall = createButton("Throw");
  fall.x = 450;
  fall.y = 450;
  fall.scale = 0.25;
  fall.mousePressed(fallFruit);



  
}


function draw() 
{
  background(backgroundImg);
  
  if(boy.x>990)
  {
    boy.velocityX = -8;
  }
  else{
    if(boy.x<10)
    {
      boy.velocityX += 8;
    }
  }
  
  fallFruit();
  drawSprites();
  Engine.update(engine);
  
  
}
function fallFruit()
{
  fruit.velocityY = 4;
}
