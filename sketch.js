var garden, rabbit;
var gardenImg, rabbitImg;
var appleImg, leafImg1, leafImg2, leafImg3;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage('apple.png');
  leafImg1 = loadImage('orangeLeaf.png');
  leafImg2 = loadImage('redImage.png');
  leafImg3 = loadImage('leaf.png');

}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = mouseX;
  
  var selectSprites = Math.round(random(1, 2));

  if (frameCount % 80 == 0)   {
    if (selectSprites == 1) {
      createApples();
    }
    else {
      createLeaves();
    }
}


  edges = createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}


function createApples() {
  var apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage('apple', appleImg);
  apple.velocityY = 5;
  apple.scale = 0.1;

}

function createLeaves() {
  var leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage('leaf', leafImg1);
  leaf.scale = 0.1;
  leaf.velocityY = 5;
}
