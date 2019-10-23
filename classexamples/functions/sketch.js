var hitzone3 = false;

function setup() {
  createCanvas(400,400);

}

function draw() {
  background(255);

  if(circleHitzone(100,100) == true){
    //order of your parameters is important
    // (xpos, ypos, csize, r, g, b)
    circleColor(random(width), random(height), random(0,200), random(0,255), random(0,255), random(255));

    for (var i = 0; i < 500; i++) {
        circleColor(random(width), random(height), random(0,200), random(0,255), random(0,255), random(255));
    }
  }

  // creates a lag when the mouse moves because it updates the page ONCE every SECOND
  // frameRate(1);



  fill("black");
  ellipse(mouseX, mouseY, 20, 20);

  circleHitzone(200,200);


  hello();
  goodbye("zeven");

  circleHitzone(300,300);
  if(hitzone3 == true){
    rect(100,100,100,100);
  }
} // end of draw

function mousePressed() {
  if(circleHitzone(300,300) == true){
    // rect(100,100,100,100);
    hitzone3 = true;
  } else {
    hitzone3 = false;
  }
}

function hello(){
  console.log("hello");
}

// we want to pass some data into this function
// we are going to have a message that we are going to send through goodbye
// we are creating a variable in the parentheses. We are creating a variable "message" that is only available in this function
function goodbye(message) {
  console.log("goodbye " + message);
}

function circleColor(xpos, ypos, csize, r, g, b) {
  fill(r, g, b);
  ellipse(xpos, ypos, csize, csize);
}

function circleHitzone(distX, distY) {
  var curDist = dist(mouseX, mouseY, distX, distY);
  console.log("curDist " + curDist);
  ellipse(distX, distY, 20,20);

  // return curDist;

  if(curDist < 10){
    return true;
  } else {
    return false;
  }

}
