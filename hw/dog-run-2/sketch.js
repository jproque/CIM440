//flappy bird-like
//mouse click or x to flap

var GRAVITY = 0.3;
var FLAP = -7;
var GROUND_Y = 450;
var MIN_OPENING = 300;
var dog;
var hydrants;
var gameOver;
var dogImg, hydrantImg, bgImg;

function preload() {
  dogImg = loadImage('assets/corgi-still.png');
  bgImg = loadImage('assets/dog-bg.png');

  dogRun = loadAnimation('assets/corgi-run-ext.png', 'assets/corgi-run-close.png');
}

function setup() {
  createCanvas(windowWidth, 600);

  hydrantImg = loadImage('assets/hydrant.png');

  dog = createSprite(width/2, 520, 100, 100);
  dog.addAnimation('floating', dogRun);
  dog.rotateToDirection = true;
  dog.velocity.x = 4;
  dog.setCollider('circle', 0, 0, 75);
  dog.debug = true;

  hydrants = new Group();
  gameOver = true;
  updateSprites(false);

  camera.position.y = height/2;
}

function draw() {

  if(gameOver && keyWentDown('x'))
    newGame();

  if(!gameOver) {

    if(keyWentDown('x'))
      dog.velocity.y = FLAP;

    dog.velocity.y += GRAVITY;

    if(dog.position.y<0)
      dog.position.y = 0;

    if(dog.position.y+dog.height/2 > 600)
      die();

    if(dog.overlap(hydrants))
      die();

    //spawn pipes
    if(frameCount%60 == 0) {
      var hydrantH = random(50, 300);
      var hydrant = createSprite(dog.position.x + width, GROUND_Y-hydrantH/2+1+100, 80, hydrantH);
      hydrant.addImage(hydrantImg);
      hydrants.add(hydrants);
    }

    //get rid of passed pipes
    for(var i = 0; i<hydrants.length; i++)
      if(hydrants[i].position.x < dog.position.x-width/2)
        hydrants[i].remove();
  }

  camera.position.x = dog.position.x + width/4;

  //wrap ground
  // if(camera.position.x > ground.position.x-ground.width+width/2)
  //   ground.position.x+=ground.width;

  background("teal");
  camera.off();
  image(bgImg, 0, 200, windowWidth, 400);
  camera.on();

  drawSprites(hydrants);
  drawSprite(dog);
}

function die() {
  updateSprites(false);
  gameOver = true;
}

function newGame() {
  hydrants.removeSprites();
  gameOver = false;
  updateSprites(true);
  dog.position.x = width/2;
  dog.position.y = height/2;
  dog.velocity.y = 0;
  // ground.position.x = 800/2;
  // ground.position.y = GROUND_Y+100;
}

function mousePressed() {
  if(gameOver)
    newGame();
  dog.velocity.y = FLAP;
}
