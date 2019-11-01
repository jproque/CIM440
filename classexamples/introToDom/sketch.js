function setup() {
  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0");
  // to search for an id, you use the # token infront of the name
  select("#container0").html("<h1>Your sketch title here!</h1>");

  // .style("css property", "value")
  select("#container0").style("width", "400px");
  select("#container0").style("margin", "0 auto"); // center your container, margin: 0 auto, 0 refers to top and bottom spacing, and auto refers to the left and right spacing. This will only work if you set a width.

  cnv.parent("#container0");

  select('body').style("background-color", "orange");
  var container1 = createDiv();

} // end of setup

function draw() {
  background(0);

} // end of draw
