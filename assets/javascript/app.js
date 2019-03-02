var questions=["assets/images/Argentina.png","assets/images/Algeria.png",
"assets/images/Malawi.png","assets/images/Guatemala.png",
"assets/images/Bulgaria.png","assets/images/Croatia.png",
"assets/images/NewZealand.png","assets/images/Senegal.png",
"assets/images/Syria.png","assets/images/Thailand.png"];
var qCorrect = 0;
var qIncorrect = 0;
var time = 4;
var count = 0;
var intervalId;
console.log(questions.length);

function questionTimer(){
if(count===questions.length){
count=0;
questionTimer();
}
else{ 
displayQuestion();
console.log(count);
}
};

function startGame(){
count=0;
setInterval(questionTimer, 20000);
displayQuestion();

};
intervalId = setInterval(startTimer, 1000);


function startTimer(){
    time--;
    $("#timer").text(time + " seconds left");
    if(time===0){
        stopTimer();
    }
};

function stopTimer(){
    clearInterval(intervalId);
    qIncorrect();
};

function displayQuestion() {
    $("#question").html("<img src=" + questions[count] + ">");
    startTimer();
    count++;
    
  };

  function qIncorrect(){
      $("#question").empty();
      qIncorrect++;
  };



startGame();