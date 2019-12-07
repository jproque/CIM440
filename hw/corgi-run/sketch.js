//flappy bird-like
//mouse click or x to flap

var GRAVITY = 0.3;
var MAX_VELOCITY = 4;
var FLAP = -10;
var GROUND_Y = 450;
var MIN_OPENING = 300;
var dog;
var hydrants;
var gameOver;
var hydrantImg, bgImg;

//ground variables
var street, street2;
var wallBottom;


//scoreboard variables
var interval = 1000;
var prevMillis = 0;
var counter = 0;

function preload() {
  bgImg = loadImage('assets/dog-bg.png');

  dogRun = loadAnimation('assets/corgi-run-ext.png', 'assets/corgi-run-close.png');

  street = loadImage('assets/street.png');
  street2 = loadImage('assets/street-2.png');
  road = loadAnimation('assets/street.png', 'assets/street-2.png');

} // end of preload

function setup() {
  createCanvas(windowWidth, 800);

  hydrantImg = loadImage('assets/hydrant.png');

  dog = createSprite(width/2, 520, 100, 100);
  dog.addAnimation('normal', dogRun);
  dog.setCollider('circle', 0, 0, 75);
  dog.debug = true;

  hydrants = new Group();
  gameOver = true;
  updateSprites(false);

  wallBottom = createSprite(width/2, height-30, width, 0);
  wallBottom.addAnimation('normal', road);
  wallBottom.immovable = true;
  wallBottom.setCollider('rectangle', 0, 0, width, 350);
  wallBottom.debug = true;

} // end of setup

function draw() {

  if(gameOver && keyWentDown('x'))
    newGame();

    console.log("game over: " + gameOver);

  // when game is NOT over
  if(!gameOver) {
    if(dog.collide(wallBottom)){
      dog.velocity.y = 0;
    }
    // scoreboard counter
    if(millis() - prevMillis > interval){
      prevMillis = millis();
      counter = counter + 1;
    } // end of scoreboard counter

    if(dog.position.y != wallBottom.position.y){
      dog.velocity.y += GRAVITY;
    }

    if(keyWentDown('x'))
      dog.velocity.y = FLAP;


    if(dog.position.y<0)
      dog.position.y = 0;

    if(dog.position.y+dog.height/2 > 600)
      die();

    if(dog.overlap(hydrants))
      die();

    //spawn hydrants
    if(frameCount%300 == 0) {
      var hydrantSpawn = random(1000,3000);
      var hydrant = createSprite(dog.position.x + width + hydrantSpawn, 540, 80);
      console.log("hydrant spawn: " + hydrant.position.x);
      hydrant.addImage(hydrantImg);
      hydrants.add(hydrant);
      hydrant.velocity.x = -10;
    }

    //get rid of passed pipes
    for(var i = 0; i<hydrants.length; i++)
      if(hydrants[i].position.x < dog.position.x-width/2)
        hydrants[i].remove();
  }

  camera.position.x = dog.position.x + width/4;

  background("teal");
  camera.off(); // when camera is off, objects won't move
  image(bgImg, 0, 0, width, height);

  //scoreboard
  fill(0,0,0,80);
  stroke(0,0,0,0);
  fill(255);
  textSize(20);
  let scoreboard = 'Score:  ' + counter;
  text(scoreboard,width-200,50);
  // end of scoreboard

  drawSprite(wallBottom);

  camera.on(); // when camera is on, objects will move

  drawSprites(hydrants);
  drawSprite(dog);

} // end of draw

function die() {
  updateSprites(false);
  gameOver = true;
  counter = counter + 0;
} // end of die

function newGame() {
  hydrants.removeSprites();
  gameOver = false;
  counter = -1;
  updateSprites(true);
  dog.position.x = width/2;
  dog.position.y = height/2;
  dog.velocity.y = 0;

} // end of newGame

function mousePressed() {
  if(gameOver)
    newGame();
    dog.velocity.y = FLAP;
} //end of mousePressed
