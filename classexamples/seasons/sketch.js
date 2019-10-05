var seasonSelect;
var seasonType = "";

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

} // end of setup

function draw() {
  background(255);

  if(seasonType == "Fall"){
    console.log("fall");
  }else if (seasonType == "Winter") {
    console.log("Winter");
  }else if (seasonType == "Spring") {
    console.log("Spring");
  }else if (seasonType == "Summer") {
    console.log("Summer");
    fill("orange");
    stroke("red");
    ellipse(sunX,sunY,width,height);y

    if(sunY > height){
      sunY = sunY - 1;
    };

    //end of Summer
  }else{
    console.log("blank");
    text("Make a selection", 100,20);
  };

  } // end of draw
