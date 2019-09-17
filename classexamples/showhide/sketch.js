var puppies;

var showOrHide = false;

var show;
var hide;

function preload(){

  puppies = loadImage("puppies.jpg");

  show = createButton("Show Puppy");
  show.mousePressed(function(){
    showOrHide = true;
  });

  hide = createButton("Hide Puppy");
  hide.mousePressed(function(){
    showOrHide = false;
  });

}

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255);

  if(showOrHide == true){
    image(puppies, 100,100, puppies.width/4, puppies.height/4);
  }


}
