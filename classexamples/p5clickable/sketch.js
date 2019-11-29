var button1;

function setup() {
  createCanvas(400,400);
  button1 = new Clickable();
  button1.locate(20,20);

  button1.onHover = function(){
  this.color = "#AAAAFF";
  this.textColor = "#FFFFFF";
  this.text = "Yay!";
  }
} // end of setup

function draw() {
  background(255);
  button1.draw();
} // end of draw
