var puppies;

function preload(){

  puppies = loadImage("puppies.jpg");

}




function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  image(puppies,0,0);
}
