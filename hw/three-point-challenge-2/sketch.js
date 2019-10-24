// ball position variables
var ballX = 0;
var ballY = 0;
var ballImage;
var ballMove = false;

// hoop variables
var hoopHeight = 0;
var hoopImage;
var playerImage;

// hitzone variables
var hitX = 345;
var hitW = 60;
var hitH = 120;

// ball aim variables
var offset = 0;
var ballAim = 0;

// scoring variables
var score = 0;
var scoreOnce = false;
var scoreX = 0;
var scoreY = 0;
var scoreText = 0;

// background variable
var backgroundImage;

// fireworks variables
var fireworks = [];
var gravity;

// popup variables
var popup;

function preload(){
  backgroundImage = loadImage("arena.jpg");

  ballImage = loadImage("basketball.png");

  hoopImage = loadImage("basketball-hoop-1.png");

  playerImage = loadImage("basketball-player.png");

}; // end of preLoad

function Firework() {
  this.hu = random(255);
  this.firework = new Particle(random(width), height, this.hu, true);
  this.exploded = false;
  this.particles = [];


  this.done = function() {
    if (this.exploded && this.particles.length === 0){
  return true;
  }else {
    return false;
  }
  }
  this.update = function() { //firstUpdate
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
 for (var i = this.particles.length-1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
   if (this.particles[i].done()){
     this.particles.splice(i, 1);
   }
    }
  }

  this.explode = function() {
    for (var i = 0; i < 100; i++) {
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }
  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }
    for (var i = this.particles.length-1; i >= 0; i--) {
      this.particles[i].show();
    }
  }
} // end of Firework function

function setup() {
  createCanvas(900,400);

    ballX = 0;
    ballY = height/2 - 10;

    ballAim = height/2;

    scoreX = 550;
    scoreY = 120;
    scoreText = 60;

    // firework setup
    gravity = createVector(0, 0.2);
    colorMode(HSB);
    // end of firework setup



} // end of setup

function draw() {
  background(0);

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
  text(spacebar, 450, 275);
  text(arrows, 450, 225);
  text(reset, 450, 325);
  // end of instructions

  // basketball hoop
  image(hoopImage, 345, hoopHeight, 60, 120);

  // hoop hitzone
  if(ballX > hitX && ballX < hitX+hitW && ballY > hoopHeight && ballY < hoopHeight+hitH){
    console.log("In basket");
    // scoring true false statement
    if(scoreOnce == false){
      scoreOnce = true;
      score++;
    }
  } // end of hoop hitzone

  //scoreboard
  fill(0);
  rect(435, 25, 275, 140);
  fill(255);
  textSize(20);
  let scoreboard = 'YOUR SCORE';
  text(scoreboard,500,50);
  textSize(scoreText);
  text(score,scoreX,scoreY);
  // end of scoreboard

  // basketball & aiming line
  stroke(255);
  fill(255);
  line(30, height/2 , 80, ballAim);
  image(ballImage, ballX+20, ballY, 20, 20);

  // basketball playerImage
  image(playerImage, 0, 195, 50, 150);

  // game title
  stroke('orange');
  fill('orange');
  textSize(47);
  text('T H E  3 - P T  C H A L L E N G E',5,395);

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

  } // end of ballMove true

  // ball stop moving
  if(ballX > width-530){
    ballMove = false;
  }

  if(ballY > height - 20){
    ballMove = false;
  }

  if(ballY < 0){
    ballMove = false;
  } // end of ballMove false

  // popup box
  stroke("black");
  fill(255);
  popupBox = rect(width/2-200, height/2-100, 300, 200);
  fill(0);
  popup = text("YOU WIN!", width/2-160, height/2-20);

  // end of game sequence
  if(score == 2){
    // fireworks
    colorMode(RGB);
    if (random(1) < 0.03) {
      fireworks.push(new Firework());
    }

    for (var i = fireworks.length-1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();
      if (fireworks[i].done())
        fireworks.splice(i, 1);
    } // end of fireworks

    popup = true;
    popupBox = true;
  } // end of score == 10




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
    scoreOnce = false;
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

// fireworks
function Particle(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;

  if (this.firework){
   this.vel = createVector(0, random(-12, -8));
 }else {
   this.vel = p5.Vector.random2D();
   this.vel.mult(random(2, 10));
 }

  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() { //second update
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  this.done = function(){
    if(this.lifespan < 0){
      return true;
    }else {
      return false;
    }
  }
  this.show = function() {
   colorMode(HSB);
    if (!this.firework) {
     // strokeWeight(2);
     stroke(hu, 255, 255, this.lifespan);
   }else {
     // strokeWeight(4);
     stroke(hu, 255, 255);
   }
    point(this.pos.x, this.pos.y);

  }
}; // end of Particle
