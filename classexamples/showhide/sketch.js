var puppies;

var showOrHide = false;

function preload(){

  puppies = loadImage("puppies.jpg");

}




function setup() {
  createCanvas(400,400);
}

function draw() {

  image(puppies, 100,100, puppies.width/4, puppies.height/4);

}
