function setup() {
  // put setup code here

  createCanvas(500,500);
  background("green");
  background("LemonChiffon");
  background(127);//Medium gray color, gray scale goes from 0-255
  background(0);//black
  background(255)//white
  background(255, 127);//the "127" is the opacity 127 of 255 so 50 percent opacity
  background("#FFFACD");//this is using HEX code
  background(255,127,0);//this RGB or Red Green Blue - 255,127,0 is Orange
  background(255,0,0);//Red
  background(0,255,0);//Green
  background(0,0,255);//Blue
}

function draw() {
  // put drawing code here
fill("white");
ellipse(250,250,200,200);//x, y, w, h
fill("cyan");//fill should always be above the shape
stroke("blue");//stroke should always be above the shape
ellipse(220,220,40,40);//left eye
ellipse(280,220,40,40);//right eye
//ellipse(250,300,40,40);//mouth
noFill();
curve(240, 0, 200, 280, 300, 280, 260,0);
}
