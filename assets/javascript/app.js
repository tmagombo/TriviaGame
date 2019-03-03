var questions = ["assets/images/Argentina.png", "assets/images/Algeria.png",
    "assets/images/Malawi.png", "assets/images/Guatemala.png",
    "assets/images/Bulgaria.png", "assets/images/Croatia.png",
    "assets/images/NewZealand.png", "assets/images/Senegal.png",
    "assets/images/Syria.png", "assets/images/Thailand.png"];

var answers = {
    Argentina: {
    q1:"Argentina", q2:"Guatemala", q3:"Chile", q4:"Brazil"
    },
    Algeria: {
    q1:"Turkey", q2:"Iran", q3:"Algeria", q4: "Syria"
    },
    Malawi: {
    q1:"Morocco", q2:"South Africa", q3:"Kenya", q4: "Malawi"
    },
    Guatemala: {
    q1:"Guatemala", q2:"Uruguay", q3:"Honduras", q4: "Peru"
    },
    Bulgaria: {
        q1:"Poland", q2:"Bulgaria", q3:"Hungary", q4: "Iran"
    },
    Croatia : {
    q1:"Iceland", q2:"Slovokia", q3:"Slovenia", q4: "Croatia"
    },
    NewZealand : {
        q1:"Tasmania", q2:"Great Britain", q3:"New Zealand", q4: "Austrailia"
    },
    Senegal: {
        q1:"Ghana", q2:"Sengal", q3:"South Africa", q4: "Ethiopia"
        },
    Syria: {
    q1:"Syria", q2:"Iraq", q3:"Algeria", q4: "Afghanistan"
    },
    Thailand: {
        q1:"China", q2:"Thailand", q3:"Hong Kong", q4: "Malaysia Islands"
        },
};

var qCorrect;
var qIncorrect;
var time = 20;
var count;
var intervalId;

function questionTimer() {
    if (count === questions.length) {
        count = 0;
        questionTimer();
    }
    else {
        displayQuestion();
    }
    
};

function startGame() {
    count = 0;
    goTime();
    qCorrect = 0;
    qIncorrect = 0;
    $("#pick").text("Pick the country this flag belongs to...");
};
function goTime(){
    if(count!==10){
    displayQuestion();
    intervalId = setInterval(startTimer, 1000);
    
}
    else{
    $("#pick").text("Congrats on completing the game! You got "+ qCorrect +" questions right and "+ qIncorrect +" wrong. Good Work!")
    $("#right").hide();
    $("#wrong").hide();
    setTimeout(startGame, 8000);
};
};

function startTimer() {
    time--;
    $("#timer").text(time + " seconds left");
    $("#timer").show();
    if (time === -1) {
        stopTimer();

    }
    if (time === -2) {
        stopTimer();
    }
};


function stopTimer() {
    if (time === -1) {
        clearInterval(intervalId);
        wrongAn();
        $("#timer").hide();
        $("#question").hide();
        count++;    
        time+=21;
        setTimeout(goTime, 2000);
        $("#answer1").hide();
        $("#answer2").hide();
        $("#answer3").hide();
        $("#answer4").hide();
        $("#answer4").hide();
    }
    if (time === -2) {
    clearInterval(intervalId);
    $("#timer").hide();
    $("#question").hide();
    count++;    
    time+=21;
    setTimeout(goTime, 2000);
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $("#answer4").hide();
    }
    };

function displayQuestion() {
    $("#question").html("<img src=" + questions[count] + ">");  
    $("#question").show();    
    displayAnswers();  
};

function displayAnswers(){  
    $("#answer1").show();
    $("#answer2").show();
    $("#answer3").show();
    $("#answer4").show();
    $("#right").hide();
    $("#wrong").hide();

    

if(count===0){

    var q1 = answers.Argentina.q1
    var q2 = answers.Argentina.q2
    var q3 = answers.Argentina.q3
    var q4 = answers.Argentina.q4

    $("#answer1").text(q1);
    $("#answer2").text(q2);
    $("#answer3").text(q3);
    $("#answer4").text(q4);
};

if(count===1){

    var q1 = answers.Algeria.q1
    var q2 = answers.Algeria.q2
    var q3 = answers.Algeria.q3
    var q4 = answers.Algeria.q4

    $("#answer1").text(q1);
    $("#answer2").text(q2);
    $("#answer3").text(q3);
    $("#answer4").text(q4);

};
if(count===2){

    var q1 = answers.Malawi.q1
    var q2 = answers.Malawi.q2
    var q3 = answers.Malawi.q3
    var q4 = answers.Malawi.q4

    $("#answer1").text(q1);
    $("#answer2").text(q2);
    $("#answer3").text(q3);
    $("#answer4").text(q4);

};
if(count===3){

    var q1 = answers.Guatemala.q1
    var q2 = answers.Guatemala.q2
    var q3 = answers.Guatemala.q3
    var q4 = answers.Guatemala.q4

    $("#answer1").text(q1);
    $("#answer2").text(q2);
    $("#answer3").text(q3);
    $("#answer4").text(q4);

};

if(count===4){

    var q1 = answers.Bulgaria.q1
    var q2 = answers.Bulgaria.q2
    var q3 = answers.Bulgaria.q3
    var q4 = answers.Bulgaria.q4

    $("#answer1").text(q1);
    $("#answer2").text(q2);
    $("#answer3").text(q3);
    $("#answer4").text(q4);

};
if(count===5){

    var q1 = answers.Croatia.q1
    var q2 = answers.Croatia.q2
    var q3 = answers.Croatia.q3
    var q4 = answers.Croatia.q4

    $("#answer1").text(q1);
    $("#answer2").text(q2);
    $("#answer3").text(q3);
    $("#answer4").text(q4);

};
if(count===6){

    var q1 = answers.NewZealand.q1
    var q2 = answers.NewZealand.q2
    var q3 = answers.NewZealand.q3
    var q4 = answers.NewZealand.q4

    $("#answer1").text(q1);
    $("#answer2").text(q2);
    $("#answer3").text(q3);
    $("#answer4").text(q4);

};
if(count===7){

    var q1 = answers.Senegal.q1
    var q2 = answers.Senegal.q2
    var q3 = answers.Senegal.q3
    var q4 = answers.Senegal.q4

    $("#answer1").text(q1);
    $("#answer2").text(q2);
    $("#answer3").text(q3);
    $("#answer4").text(q4);

};
if(count===8){

    var q1 = answers.Syria.q1
    var q2 = answers.Syria.q2
    var q3 = answers.Syria.q3
    var q4 = answers.Syria.q4

    $("#answer1").text(q1);
    $("#answer2").text(q2);
    $("#answer3").text(q3);
    $("#answer4").text(q4);

};
if(count===9){

    var q1 = answers.Thailand.q1
    var q2 = answers.Thailand.q2
    var q3 = answers.Thailand.q3
    var q4 = answers.Thailand.q4

    $("#answer1").text(q1);
    $("#answer2").text(q2);
    $("#answer3").text(q3);
    $("#answer4").text(q4);

};

if(count>9){    
    $("#question").hide();
    stopTimer();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();    
    
};
};
$("h3").click(function(){
  if(count===0){
      if(this.id==="answer1"){
          
         
          time=-1;
          rightAn();

      }
      else {

        time=-1;
        wrongAn();

      };

  };
  if(count===1){
    if(this.id==="answer3"){
        
       
        time=-1;
        rightAn();

    }
    else {
     
      time=-1;
      wrongAn();

    };

};
if(count===2){
    if(this.id==="answer4"){
        
        time=-1;
        rightAn();

    }
    else {
     
      time=-1;
      wrongAn();

    };

};
if(count===3){
    if(this.id==="answer1"){
        
    
        time=-1;
        rightAn();

    }
    else {
     
      time=-1;
      wrongAn();

    };

};
if(count===4){
    if(this.id==="answer2"){
        
       
        time=-1;
        rightAn();

    }
    else {
     
      time=-1;
      wrongAn();

    };

};
if(count===5){
    if(this.id==="answer4"){
        
       
        time=-1;      
        rightAn();

    }
    else {
     
      time=-1;
      wrongAn();

    };

};
if(count===6){
    if(this.id==="answer3"){
        
       
        time=-1;
        rightAn();

    }
    else {
     
      time=-1;
      wrongAn();

    };

};

if(count===7){
    if(this.id==="answer2"){
        
       
        time=-1;
        rightAn();

    }
    else {
     
      time=-1;
      wrongAn();

    };

};

if(count===8){
    if(this.id==="answer1"){
    
        time=-1;
        rightAn();

    }
    else {
     
      time=-1;
      wrongAn();

    };

};

if(count===9){
    if(this.id==="answer2"){
        time=-1;
        rightAn();
    }
    else {
     
      time=-1;
    wrongAn();

    };

};

});

function rightAn(){
    $("#gamebox2").append("<h2 id='right'>")
    $("#right").text("You got it right!!!!")
    $("#right").show();
    qCorrect++;
    console.log(qCorrect);

};
function wrongAn(){
    $("#gamebox2").append("<h2 id='wrong'>")
    $("#wrong").text("You got it wrong...")
    $("#wrong").show();
    qIncorrect++;
    console.log(qIncorrect);

};

startGame();