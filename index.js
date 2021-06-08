const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;

function total (){
sum = a + b + c + d;
console.log = sum;

}
// TODO 1.1a: Define candidateName // 
let candidateName;


function question() {
    let question = questions[currentQuestion];
    let total = value;
if (value == questions.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showSummary();
    } else {
        showQuestion();
    }
}


candidateName = prompt("What is your name?");






//this sucks!!!!!

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

