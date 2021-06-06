const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let correctAnswer = 0;
let incorrectAnswer = 0;
let question = "none";
let input = "none";
let answer = "none";
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;

let info = input.question("What is your name?");
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
console.log("Hello + name + let's begin the quiz");
}

question = "Are you a U.S Citizen?";
answer = "yes"

question = "Do you have a masters degree in a STEM field, including engineering, biological science, physical science, computer science or mathematics, from an accredited institution.";
answer = "yes"

question = "Do you have at least two years of related professional experience obtained after degree completion or at least 1,000 hours pilot-in-command time on a jet aircraft?";
answer = "yes"

question = "Are you able to pass the NASA long-duration flight astronaut physical?";
answer = "yes"

question = "And finally, what is NASA's motto?";
answer = "For the benefit of all."


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

if (newVal === "") {
    // user pressed OK, but the input field was empty
} else if (newVal) {
    // user typed something and hit OK
} else {

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

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