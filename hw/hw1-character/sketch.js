var myName = "John Roque"
var neckWidth = 10;
var neckHeight = 15;
var thumbWidth = 6;
var thumbLength = 10;
var handSize = 20;
var headSize = 100;
var eyeSize = 20;
var pupilSize = 10;
var mouthWidth = 60;
var mouthHeight = 25;
var goldToothSize = 5;

//character center point (x-coordinate): 120


function setup() {
  // put setup code here

  createCanvas(500,500);
  //background(0,255,0);
  background("teal");
}

function draw() {
  //title
  fill("white");
  textSize(30);
  textFont('Calibri');
  text('"Ronald"',300,75,200,200); // Text wraps within text box

  fill("white");
  textSize(15);
  textFont('Calibri');
  text("by",314,115,200,200); // Text wraps within text box

  fill("white");
  textSize(30);
  textFont('Calibri');
  text(myName,310,140,200,200); // Text wraps within text box

  //body
  fill("white");
  strokeWeight(2);
  rect(115,155,neckWidth,neckHeight);//neck

  rect(30,172,180,16);//arms

  rect(27,163,thumbWidth,thumbLength);//left thumb
  rect(209,163,thumbWidth,thumbLength);//right thumb
  ellipse(25,180,handSize,handSize);//left hand
  ellipse(215,180,handSize,handSize);//right hand

  //clothes
  //shirt
  fill("orange");
  strokeWeight(2);
  rect(105,170,30,100);//shirt torso - back
  rect(70,170,100,20);//shirt sleeves
  strokeWeight(0);
  rect(106,172,28,96);//shirt torso - front

  //pants
  fill("blue");
  strokeWeight(2);
  rect(105,270,30,100);//pants
  fill("teal");
  triangle(118,370,120,280,122,370);//pants split

  //shoes
  fill("brown");
  strokeWeight(2);
  rect(85,370,70,10);//shoes
  fill("teal");
  rect(118,370,4,10);//gap b/t shoes - back
  strokeWeight(0);
  rect(119,368,2,14);//gap b/t shoes - front

  //head
  fill("white");
  strokeWeight(2);
  ellipse(120,110,100,100);//head shape

  ellipse(100,100,eyeSize,eyeSize);//left eye

  ellipse(140,100,eyeSize,eyeSize);//right eye

  strokeWeight(pupilSize);
  point(100,105);//left pupil

  point(140,105);//right pupil

  strokeWeight(2);
  rect(90,83,eyeSize,2);//left eyebrow

  rect(130,90,eyeSize,2);//right eyebrow

  strokeWeight(2);
  triangle(110,120,120,100,130,120);//nose

  fill("black");
  strokeWeight(0);
  arc(120,135,mouthWidth,mouthHeight,0,PI);//mouth

  fill("gold");
  rect(110,135,goldToothSize,goldToothSize);//gold tooth

  //width and height of canvas
  console.log("width " + width);
  console.log("height " + height);

  //crown
  fill("gold");
  strokeWeight(0);
  triangle(70,75,70,55,120,75);//crown piece left
  triangle(170,75,170,55,120,75);//crown piece right
  triangle(70,75,120,55,170,75);//crown piece center





}//end of draw
