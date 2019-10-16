var ballX = 0;
var ballY = 0;
var ballImage;
var hoopHeight = 0;
var hoopImage;
var playerImage;
var ballMove = false;

var hitX = 345;
var hitW = 60;
var hitH = 120;

var offset = 0;

var ballAim = 0;

var score = 1;

function preload(){
  ballImage = loadImage("basketball.png");

  hoopImage = loadImage("basketball-hoop-1.png");

  playerImage = loadImage("basketball-player.png");

}; // end of preLoad

function setup() {
  createCanvas(900,400);

    ballX = 0;
    ballY = height/2 - 10;

    ballAim = height/2;

} // end of setup

function draw() {
  background(255);

  // instructions
  fill(255);
  stroke(0);
  rect(435, 200, 275, 140);
  textSize(12);
  stroke(255);
  let spacebar = 'Press SPACE bar to shoot ball.';
  let arrows = 'Press UP & DOWN ARROWS to aim the ball.';
  let reset = 'Press R to reset the ball after the shot.';
  fill(0);
  text(arrows, 450, 275);
  text(spacebar, 450, 225);
  text(reset, 450, 325);
  // end of instructions

  // basketball hoop
  image(hoopImage, 345, hoopHeight, 60, 120);

  // hoop hitzone
  if(ballX > hitX && ballX < hitX+hitW && ballY > hoopHeight && ballY < hoopHeight+hitH){
    console.log("In basket");
    score = score + 1;
  }
  // end of hoop hitzone

  //scoreboard
  fill(0);
  rect(435, 25, 275, 140);
  fill(255);
  textSize(20);
  stroke(255);
  let scoreboard = 'YOUR SCORE';
  text(scoreboard,500,50);
  textSize(60);
  // let score = 1;
  text(score,550,120);
  // end of scoreboard

  // basketball & aiming line
  stroke(0);
  line(30, height/2 , 80, ballAim);
  image(ballImage, ballX+20, ballY, 20, 20);

  // basketball playerImage
  image(playerImage, 0, 195, 50, 150);

  // ball movement
  if(ballMove == true){
    ballX++;
    if (offset < 0) {
      ballY = ballY + offset;
    }else {
      ballY = ballY + offset;
    }

    console.log("offset " + offset);
    console.log("BallY " + ballY);
    console.log("BallX " + ballX);

  }
  // end of ballMove true

  // ball stop moving
  if(ballX > width-530){
    ballMove = false;
  }

  if(ballY > height - 20){
    ballMove = false;
  }

  if(ballY < 0){
    ballMove = false;
  }
  // end of ballMove false

} // end of draw

function keyPressed(){

  console.log("key " + key);
  console.log("keyCode " + keyCode);

  // SPACE BAR
  if (keyCode == 32) {
    ballMove = true;

  } // end of space bar

  // 'R' RESET
  if(key == 'r' && ballMove == false){
    ballX = 0;
    ballY = height/2 - 10;
    ballMove = false;
    offset = 0;
    ballAim = height/2;
    hoopHeight = random(0, 280);
  } // end of 'r'

  // UP ARROW
  if(keyCode == 38 && ballMove == false){
    offset = offset - 0.1;
    ballAim = ballAim - 5.5;
    console.log("offset " + offset);
    console.log("ball aim " + ballAim);

  } // end of up arrow

  // DOWN ARROW
  if(keyCode == 40 && ballMove == false){
    offset = offset + 0.1;
    ballAim = ballAim + 5.5;
    console.log("offset " + offset);
    console.log("ball aim " + ballAim);
  } // end of down arrow

}; // end of keyPressed