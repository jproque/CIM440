var seasonSelect;
var seasonType = "";

var sunX = 0;
var sunY = 0;

var snowX = [];
var snowY = [];

var snowAmount = 100;

var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafImage;

function preload(){
  leafImage = loadImage("fall-leaf.png");

}; // end of preLoad

function setup() {
  createCanvas(400,400);

  seasonSelect = createSelect();
  seasonSelect.position(10,10);
  seasonSelect.option("");
  seasonSelect.option("Fall");
  seasonSelect.option("Winter");
  seasonSelect.option("Spring");
  seasonSelect.option("Summer");
  seasonSelect.changed(function(){
    //.value is what holds the "", Fall, Winter, Spring, Summer
    seasonType = seasonSelect.value();
  });

  sunX = width/2;
  sunY = height * 2;

  //var i = 0 is our start point
  // i < 100 is our conditional - how many times do we want the for loop to background
  //i++ is the same as saying i=i+1 - also called the iterator
  for(var i = 0; i < snowAmount; i ++){
    snowX[i] = random(0,width); //random number is from 0 to width - 1
    snowY[i] = random(0,-500); //random number is from 0 to -500 (above the canvas)

  };

  // var i is destryyed after for loop is done

  console.log("snowX " + snowX);
  console.log("snowY " + snowY);

  for(var i = 0; i < leafAmount; i++){
    leafX[i] = random(0,width);
    leafY[i] = random(0, -500);

  };

  console.log("leafX " + leafX);
  console.log("leafY " + leafY);

} // end of setup

function draw() {
  background(255);

  if(seasonType == "Fall"){
    console.log("fall");

    for(var f = 0; f < snowAmount; f++){
      if(leafY[f] < height-300){
        leafY[f]++;
        leafX[f] = leafX[f] + sin(radians(frameCount));
      };

      image(leafImage, leafX[f], leafY[f], 20, 20);
    };

  }else if (seasonType == "Winter") {
    console.log("Winter");

    for(var y = 0; y < snowAmount; y++){
      snowY[y]++; //same as snowY[y] = snowY[y] + 1
      //snowY[y] = snowY[y] + 5 //increases the speed at which the snow falls
      fill("white");
      stroke("black");
      ellipse(snowX[y], snowY[y], 10,10);

      if(snowY[y] > height){
        snowY[y] = random(0,-500);
        snowX[y] = random(0,width);
      };
    };

  }else if (seasonType == "Spring") {
    console.log("Spring");
  }else if (seasonType == "Summer") {
    console.log("Summer");
    fill("orange");
    stroke("red");
    ellipse(sunX,sunY,width,height);

    if(sunY > height){
      sunY = sunY - 1;
    };

    //end of Summer
  }else{
    console.log("blank");
    text("Make a selection", 100,20);
  };

  } // end of draw
