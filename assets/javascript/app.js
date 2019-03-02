var questions=["assets/images/Argentina.png","assets/images/Algeria.png",
"assets/images/Malawi.png","assets/images/Guatemala.png",
"assets/images/Bulgaria.png","assets/images/Croatia.png",
"assets/images/NewZealand.png","assets/images/Senegal.png",
"assets/images/Syria.png","assets/images/Thailand.png"];
var qCorrect = 0;
var qIncorrect = 0;
var count = 0;


function questionTimer(){
if(count==0){
    displayImage();
    count++;
}
else if(count>questions.length-1){
    count=0;
    questionTimer();

}

else{ 
displayImage();
count++;
console.log(questions[count]);
}
};

function startGame(){
setInterval(questionTimer, 1000);
};

function displayImage() {
    $("#question").html("<img src=" + questions[count] + ">");
  }
startGame();