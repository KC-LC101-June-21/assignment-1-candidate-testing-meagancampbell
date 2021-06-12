const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

candidateName = input.question('Enter your name: ');
console.log('Hello Astronaut Candidate ' + candidateName);

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let correctAnswer;
let candidateAnswer;
let answersArray = ["a", "True", "40", "Trajectory", "3" ] ;
let candidateAnswers= [];
//const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// var doAction = function () {
//     var input = document.getElementById('numberinput');
//     var times = parseint(input.value);

//     for(var i = 0; i < times; i++) {
//       //do whatever you need to do
//     }
// }



let correct = "AA";
candidateAnswer = "";


console.log("1. Who was the first American woman in space?");
console.log('   a: Sally Ride' + '\n', '  b: Christa McAuliffe'+ '\n', '  c: Valentina Tereshkova'+ '\n'); 

function questionAnswer(candidateAnswer = True){
  if (candidateAnswer == True){
    console.log ("Correct");
  } else {
    console.log ("Wrong");
  }
}


// quiz = get("quiz");
//   if(pos >= questions.length){
//     test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
//     get("quiz_status").innerHTML = "Quiz completed";
//     // resets the variable to allow users to restart the test
//     pos = 0;
//     correct = 0;
//     // stops rest of renderQuestion function running when test is completed return false;
// }

// get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
//   question = questions[pos].question;
//   chA = questions[pos].a;
//   chB = questions[pos].b;
//   chC = questions[pos].c;



// function checkAnswer(){
//   // use getElementsByName because we have an array which it will loop through
//   choices = document.getElementsByName("choices");
//   for(let i=0; i<choices.length; i++){
//     if(choices[i].checked){
//       choice = choices[i].value;
//     }
//   }
//   // checks if answer matches the correct choice
//   if(choice == questions[pos].answer){
//     //each time there is a correct answer this value increases
//     correct++;
//   }
//   // changes position of which character user is on
//   pos++;
//   // then the renderQuestion function runs again to go to next question
//   renderQuestion();
// }





// // select all elements
// const start = document.write("start");
// const quiz = document.write("quiz");
// const question = document.write("question");

// const choiceA = document.write("A");
// const choiceB = document.write("B");
// const choiceC = document.write("C");
// const counter = document.write("counter");

