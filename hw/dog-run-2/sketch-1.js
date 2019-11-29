//flappy bird-like
//mouse click or x to flap

var GRAVITY = 0.3;
var FLAP = -7;
var GROUND_Y = 450;
var MIN_OPENING = 300;
var bird;
var pipes;
var gameOver;
var birdImg, pipeImg, bgImg;


function setup() {
  createCanvas(windowWidth, 600);

  birdImg = loadImage('assets/flappy_bird.png');
  pipeImg = loadImage('assets/flappy_pipe.png');
  bgImg = loadImage('assets/dog-bg.png');

  bird = createSprite(width/2, height/2, 40, 40);
  bird.rotateToDirection = true;
  bird.velocity.x = 4;
  bird.setCollider('circle', 0, 0, 20);
  bird.addImage(birdImg);
  bird.debug = true;

  pipes = new Group();
  gameOver = true;
  updateSprites(false);

  camera.position.y = height/2;
}

function draw() {

  if(gameOver && keyWentDown('yyy'))
    newGame();

  if(!gameOver) {

    if(keyWentDown('x'))
      bird.velocity.y = FLAP;

    bird.velocity.y += GRAVITY;

    if(bird.position.y<0)
      bird.position.y = 0;

    if(bird.position.y+bird.height/2 > 600)
      die();

    if(bird.overlap(pipes))
      die();

    //spawn pipes
    if(frameCount%60 == 0) {
      var pipeH = random(50, 300);
      var pipe = createSprite(bird.position.x + width, GROUND_Y-pipeH/2+1+100, 80, pipeH);
      pipe.addImage(pipeImg);
      pipes.add(pipe);
    }

    //get rid of passed pipes
    for(var i = 0; i<pipes.length; i++)
      if(pipes[i].position.x < bird.position.x-width/2)
        pipes[i].remove();
  }

  camera.position.x = bird.position.x + width/4;

  //wrap ground
  // if(camera.position.x > ground.position.x-ground.width+width/2)
  //   ground.position.x+=ground.width;

  background("teal");
  camera.off();
  image(bgImg, 0, 200, windowWidth, 400);
  camera.on();

  drawSprites(pipes);
  drawSprite(bird);
}

function die() {
  updateSprites(false);
  gameOver = true;
}

function newGame() {
  pipes.removeSprites();
  gameOver = false;
  updateSprites(true);
  bird.position.x = width/2;
  bird.position.y = height/2;
  bird.velocity.y = 0;
  // ground.position.x = 800/2;
  // ground.position.y = GROUND_Y+100;
}

function mousePressed() {
  if(gameOver)
    newGame();
  bird.velocity.y = FLAP;
}
