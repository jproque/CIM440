var hitX = 100;
var hitY = 100;
var threshold = 20;


function setup() {
  createCanvas(400,400);

}

function draw() {
  background(255);

  // calculates distnce between 2 points
  var hitDistance = dist(mouseX,mouseY,hitX,hitY);
  console.log("hitDistance " + hitDistance);

  //if the distance is <= 20; our range is 0-20 including 20
  if(hitDistance <= threshold){
    fill(127);
    text("Click here", hitX,hitY+30);
  } else {
    //else is considered "default" condition
    fill(255);
  }

  ellipse(hitX,hitY,threshold*2,threshold*2);


}
