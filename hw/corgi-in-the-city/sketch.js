//flappy bird-like
//mouse click or x to flap

var GRAVITY = 0.3;
var MAX_VELOCITY = 4;
var FLAP = -10;
var GROUND_Y = 450;
var MIN_OPENING = 300;
var dog;
var hydrants, hydrantImg;
var gameOver;
var bgImg;

// floor variables
var street, street2;
var wallBottom;

// scoreboard variables
var interval = 1000;
var prevMillis = 0;
var counter = 0;
var gameOverCounter = 0;

// welcome and game over signs variables
var welcomeTitle = true;
var gameOverSign = false;

// corgi life variables
var lifeLeft = false;
var lifeOne = true;
var lifeTwo = true;
var lifeThree = true;

function preload() {
  // city skyline background image
  bgImg = loadImage('assets/dog-bg.png');

  // corgi running
  dogRun = loadAnimation('assets/corgi-run-ext.png', 'assets/corgi-run-close.png');

  // street
  street = loadImage('assets/street.png');
  street2 = loadImage('assets/street-2.png');
  road = loadAnimation('assets/street.png', 'assets/street-2.png');

  // fonts
  lobster = loadFont('assets/Lobster-Regular.ttf');
  ralewayScore = loadFont('assets/raleway-font/Raleway-ExtraBold.ttf');
  ralewayWelcome = loadFont('assets/raleway-font/Raleway-LightItalic.ttf');
  ralewayLostLife = loadFont('assets/raleway-font/Raleway-Regular.ttf');

  // corgi life
  corgiLifeOne = loadImage('assets/corgi-life.png');
  corgiLifeTwo = loadImage('assets/corgi-life.png');
  corgiLifeThree = loadImage('assets/corgi-life.png');

} // end of preload

function setup() {
  createCanvas(windowWidth, 800);

  // dog setup
  dog = createSprite(width/2, 520, 100, 100);
  dog.addAnimation('normal', dogRun);
  dog.setCollider('circle', 0, 0, 75);

  // hydrant setup
  hydrantImg = loadImage('assets/hydrant.png');
  hydrants = new Group();
  gameOver = true;
  updateSprites(false);
  noLoop();

  // floor setup
  wallBottom = createSprite(width/2, height-30, width, 0);
  wallBottom.addAnimation('normal', road);
  wallBottom.immovable = true;
  wallBottom.setCollider('rectangle', 0, 0, width, 350);

} // end of setup

function draw() {
  console.log("game over: " + gameOver);

  if(gameOver && keyWentDown('x')){
    newGame();
  }
  console.log("game over counter: " + gameOverCounter);


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
  fill("white");
  camera.off(); // when camera is off, objects won't move
  image(bgImg, 0, 0, width, height);

  //scoreboard
  textFont(ralewayScore);
  fill(0,0,0,80);
  stroke(0,0,0,0);
  fill(255);
  textSize(20);
  let scoreboard = 'Score:  ' + counter;
  text(scoreboard,width-200,50);
  // end of scoreboard

  if(welcomeTitle == true){
  // game title
  textFont(lobster);
  textSize(100);
  textStyle(BOLD);
  stroke('rgba(0,0,0,0.50)');
  strokeWeight(10);
  let welcome = "Corgi in the City";
  text(welcome,windowWidth/2-300,200);

  // tap screen to start
  textFont(ralewayWelcome);
  textSize(40);
  stroke(0);
  strokeWeight(0);
  let tapStart = "Tap to start";
  welcome = text(tapStart,windowWidth/2-100,270);
}

if(gameOverCounter < 1.5 && lifeLeft == true){
  // game title
  textFont(ralewayLostLife);
  textSize(60);
  textStyle(BOLD);
  stroke('rgba(255,0,0,0.50)');
  strokeWeight(5);
  fill(255,0,0);
  let welcome = "2 Lives Remaining";
  text(welcome,windowWidth/2-200,200);

  // tap screen to start
  textFont(ralewayWelcome);
  textSize(40);
  fill(255);
  stroke(0);
  strokeWeight(0);
  let tapContinue = "Tap to continue";
  welcome = text(tapContinue,windowWidth/2-100,270);
}

if(1.5 < gameOverCounter && gameOverCounter < 2.5 && lifeLeft == true){
  // game title
  textFont(ralewayLostLife);
  textSize(60);
  textStyle(BOLD);
  stroke('rgba(255,0,0,0.50)');
  strokeWeight(5);
  fill(255,0,0);
  let welcome = "1 Life Remaining";
  text(welcome,windowWidth/2-200,200);

  // tap screen to start
  textFont(ralewayWelcome);
  textSize(40);
  fill(255);
  stroke(0);
  strokeWeight(0);
  let tapContinue = "Tap to continue";
  welcome = text(tapContinue,windowWidth/2-100,270);
}

if(gameOverCounter > 2.5 && gameOverCounter < 3.5 && lifeLeft == true){
  // game title
  textFont(ralewayLostLife);
  textSize(60);
  textStyle(BOLD);
  stroke('rgba(255,0,0,0.50)');
  strokeWeight(5);
  fill(255,0,0);
  let welcome = "0 Lives Remaining";
  text(welcome,windowWidth/2-200,200);

  // tap screen to start
  textFont(ralewayWelcome);
  textSize(40);
  stroke(0);
  strokeWeight(0);
  let tapContinue = "Tap to continue";
  welcome = text(tapContinue,windowWidth/2-100,270);
}

if(gameOverCounter > 3){
  gameOverSign == true
  gameOverCounter = 0;
  counter = -1;

  // game title
  textFont(lobster);
  textSize(100);
  textStyle(BOLD);
  stroke('rgba(255,0,0,0.50)');
  fill(255,0,0);
  strokeWeight(10);
  let gameover = "Game Over";
  text(gameover,windowWidth/2-210,200);

  // tap screen to start
  textFont(ralewayWelcome);
  textSize(40);
  fill(255);
  stroke(0);
  strokeWeight(0);
  let tapRestart = "Tap to restart";
  welcome = text(tapRestart,windowWidth/2-100,270);
}

if(gameOverCounter < 3){
  image(corgiLifeOne, 40, 30);
}

if(gameOverCounter < 2){
  image(corgiLifeTwo, 110, 30);
}
if(gameOverCounter < 1){
  image(corgiLifeThree, 180, 30);
}

  drawSprite(wallBottom);

  camera.on(); // when camera is on, objects will move

  drawSprites(hydrants);
  drawSprite(dog);

} // end of draw

function die() {
  updateSprites(false);
  gameOver = true;
  gameOverSign = true;
  gameOverCounter = gameOverCounter +1;
  lifeLeft = true;
  noLoop();
} // end of die

function newGame() {
  hydrants.removeSprites();
  gameOver = false;
  // counter = -1;
  lifeLeft = false;
  loop();
  updateSprites(true);
  dog.position.x = width/2;
  dog.position.y = height/2;
  dog.velocity.y = 0;

} // end of newGame

function mousePressed() {
  if(gameOver)
    newGame();
    welcomeTitle = false;
    gameOverSign = false;
    dog.velocity.y = FLAP;
} //end of mousePressed
