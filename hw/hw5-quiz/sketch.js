var questions = ["Is Iceland always covered in ice?","What ocean lies east of the U.S.?","What is the 4th most populated city in the U.S.?"];
var options = ["1) true 2) false", "1) Pacific 2) Eastern 3) Indian 4) Atlantic", "1) Phoenix, AZ 2) Philadelphia, PA 3) Houston, TX 4) San Antonio, TX"];
var answers = [1,3,2];//starts counting at 0

var currentOption = -1; //refers to what button the user has pressed

var buttons = [];

var currentQuestion = 0;

var answerText = "";

var showAnswer = false;

var interval = 5000;
var prevMillis = 0;

function setup() {
  createCanvas(400,400);

  buttons[0] = createButton("1");
  buttons[0].position(10,300);
  buttons[0].mousePressed(function(){
    currentOption = 0;
  }); // end of mousePressed [0]

  buttons[1] = createButton("2");
  buttons[1].position(50,300);
  buttons[1].mousePressed(function(){
    currentOption = 1;
  }); // end of mousePressed [1]

  buttons[2] = createButton("3");
  buttons[2].position(100,300);
  buttons[2].mousePressed(function(){
    currentOption = 2;
  }); // end of mousePressed [2]

  buttons[3] = createButton("4");
  buttons[3].position(150,300);
  buttons[3].mousePressed(function(){
    currentOption = 3;
  }); // end of mousePressed [3]

}//end of setup

function draw() {
  background(255);

  text(questions[currentQuestion],20,100);
  text(options[currentQuestion],20,150);

  if(showAnswer == true){
    text(answerText, 20,200);

    //start our timer
    if(millis() - prevMillis > interval){
      prevMillis = millis();
      showAnswer = false;
    };
  }; //end of showAnswer == true

  //this will only work on HTML elements
  if(currentQuestion == 0){
    buttons[2].hide();
    buttons[3].hide();
  };

  if(currentQuestion == 1){
    buttons[2].show();
    buttons[3].show();
  };

  //if the currentOption is not equal to -1; != is doesn't equal
  if(currentOption != -1){
    //do something if currentOption is not equal to -1
      console.log("currentOption " + currentOption);

      if(currentOption == answers[currentQuestion]){
        //correct
        console.log("correct");
        answerText = "Correct";
        currentQuestion = currentQuestion + 1;
        //if(currentQuestion == 2){
        //array.length counts how many items are in the array; questions.length has 2 items
        if(currentQuestion == questions.length){
          currentQuestion = 0;
        }//setting array limit

      }else{
        console.log("incorrect");
        answerText = "Incorrect";
      }//check for correct or incorrect

      currentOption = -1;
      showAnswer = true;
      prevMillis = millis();

  };//end of current option not equal to -1


}//end of draw
