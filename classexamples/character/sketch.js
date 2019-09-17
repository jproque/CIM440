var eyeSize = 20;


function setup() {
  // put setup code here

  createCanvas(500,500);
  background(0,255,0);
}

function draw() {
  // put drawing code here
  fill("white");
  strokeWeight(2);
  ellipse(120,110,100,100);//head shape

  ellipse(100,100,eyeSize,eyeSize);//left eye

  ellipse(140,100,eyeSize,eyeSize);//right eye

  strokeWeight(10);
  point(100,105);//left pupil

  point(140,105);//right pupil

  strokeWeight(2);
  rect(90,83,20,2);//left eyebrow

  rect(130,90,20,2);//right eyebrow

  strokeWeight(2);
  triangle(110,120,120,100,130,120);//nose

  fill("black");
  strokeWeight(0);
  //rect(90,130,60,10);//mouth - rect coordinates are from top right corner
  arc(120,135,60,25,0,PI);//mouth

  fill("gold");
  rect(110,135,5,5);//gold tooth

  //strokeWeight(1);
  //line(90,135,150,135);//line splitting mouth

  //width and height
  //console is a JavaScript function
  console.log("width " + width);//displays in "Console" when you Inspect in browser
  console.log("height " + height);

  //crown
  fill("gold");
  strokeWeight(0);
  triangle(70,75,70,55,120,75);//crown piece left
  triangle(170,75,170,55,120,75);//crown piece right
  triangle(70,75,120,55,170,75);//crown piece center

  fill("white");
  strokeWeight(2);
  arc(300,300,50,50,0,PI);//half circle - x, y, w, h, start point, end point
  arc(400,400,50,50,PI+HALF_PI,0);//quarter circle
  arc(250,250,50,50,0,TWO_PI);//full circle

  line(100,300,200,300);//horizontal line, use a common y value
  line(100,200,100,300);//vertical line, use a common x value 

}//end of draw
