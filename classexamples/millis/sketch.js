//Millis is basically like a stop watch. when the program begins, it starts counting.
//Millis is counted in milliseconds; 1000 millisesconds = 1 second

var interval = 1000;
var prevMillis = 0;
var counter = 0;

function setup() {
  // put setup code here
}

function draw() {
  // console.log(millis());

  if(millis() - prevMillis > interval){
    prevMillis = millis();
    counter = counter + 1;
    console.log(counter);

  };

}
