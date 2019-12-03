//flappy bird-like
//mouse click or x to flap

var GRAVITY = 0.3;
var FLAP = -7;
var GROUND_Y = 450;
var MIN_OPENING = 300;
var dog;
var hydrants;
var gameOver;
var hydrantImg, bgImg;

//ground variables
// var ground;
// var street, street2;
var wallBottom;


//scoreboard variables
var interval = 1000;
var prevMillis = 0;
var counter = 0;

function preload() {
  bgImg = loadImage('assets/dog-bg.png');

  dogRun = loadAnimation('assets/corgi-run-ext.png', 'assets/corgi-run-close.png');

  // street = loadImage('assets/street.png');
  // street2 = loadImage('assets/street-2.png');
  // road = loadAnimation('assets/street.png', 'assets/street-2.png');

} // end of preload

function setup() {
  createCanvas(windowWidth, 600);

  hydrantImg = loadImage('assets/hydrant.png');

  dog = createSprite(width/2, 520, 100, 100);
  dog.addAnimation('normal', dogRun);
  dog.rotateToDirection = true;
  dog.velocity.x = 4;
  dog.setCollider('circle', 0, 0, 75);
  dog.debug = true;

  hydrants = new Group();
  gameOver = true;
  updateSprites(false);

  // ground = createSprite(0,600, windowWidth, 100);
  // ground.addAnimation('normal', road);
  // ground.debug = true;

  wallBottom = createSprite(width/2, height+30/2, width, 30);
  wallBottom.immovable = true;
  wallBottom.setCollider('rectangle', 0, 0, windowWidth, 600);
  wallBottom.debug = true;


  camera.position.y = height/2;
} // end of setup

function draw() {

  if(gameOver && keyWentDown('x'))
    newGame();

  // when game is NOT over
  if(!gameOver) {

    // scoreboard counter
    if(millis() - prevMillis > interval){
      prevMillis = millis();
      counter = counter + 1;
      console.log(counter);
    } // end of scoreboard counter

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
    if(frameCount%300 == 0) {
      var hydrantSpawn = random(000,1000);
      var hydrant = createSprite(dog.position.x + width + hydrantSpawn, 540, 80);
      console.log(hydrant.position.x);
      hydrant.addImage(hydrantImg);
      hydrants.add(hydrant);
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
  // rect(width-220, 20, 150, 45);
  fill(255);
  textSize(20);
  let scoreboard = 'Score:  ' + counter;
  text(scoreboard,width-200,50);
  // end of scoreboard

  drawSprite(wallBottom);

  camera.on(); // when camera is on, objects will move

  dog.collide(wallBottom);

  drawSprites(hydrants);
  drawSprite(dog);

} // end of draw

function die() {
  updateSprites(false);
  gameOver = true;

  counter = 0;
} // end of die

function newGame() {
  hydrants.removeSprites();
  gameOver = false;
  updateSprites(true);
  dog.position.x = width/2;
  dog.position.y = height/2;
  dog.velocity.y = 0;

} // end of die

function mousePressed() {
  if(gameOver)
    newGame();
  dog.velocity.y = FLAP;
  // dog.position.y = 475;
} //end of mousePressed
