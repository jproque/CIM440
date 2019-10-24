var button1;
var button2;

function setup() {
createCanvas(400,400);

button1 = new hitzoneObject(100, 200, 50, "red");

button2 = new hitzoneObject(200, 200, 50, "green");

} // end of setup

function draw() {
  background(255);

  button1.display();
  button1.check();
  console.log("button1 overlay" + button1.overlay);
  button2.display();
  button2.check();

    break;

} // end of draw

class hitzoneObject{

  constructor(tempX, tempY, tempSize, tempColor){
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
    this.overlay = false;
  } // end of constructor

  display(){
    fill(this.boxColor);
    rect(this.x, this.y, this.boxSize, this.boxSize);
  }

  check(){
    if(mouseX > ths.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)){
      console.log("over button" + this.boxColor);

      this.overlay = true;

    }else {
      console.log("off button" + this.boxColor);

      this.overlay = false;


    }

  }

} // end of hitzoneObject
