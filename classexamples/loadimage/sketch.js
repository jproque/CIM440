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
  image(puppies, 100,100, puppies.width/4, puppies.height/4);
  //set exact dimensions
  image(puppies,200,200,125,200);
}
