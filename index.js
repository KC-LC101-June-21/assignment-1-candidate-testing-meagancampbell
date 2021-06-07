const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let score = 0;
let question;
let correctAnswer;
let candidateAnswer;
let incorrectAnswer;
let correctAnswers;
let candidateAnswers;


candidateName = prompt("What is your name?");

let questionOne = prompt("Are you a U.S. Citizen?");

if (candidateAnswer === "Yes") {
    console.log("Correct");

  } else if (candidateAnswer === "No") {
        console.log("Incorrect");

}


let questionTwo = prompt("Do you have a masters degree in a STEM field, including engineering, biological science, physical science, computer science or mathematics, from an accredited institution?");

if (candidateAnswer === "Yes") {
    console.log("Correct");

  } else if (candidateAnswer === "No") {
        console.log("Incorrect");

}

let questionTwo = prompt("Do you have a masters degree in a STEM field, including engineering, biological science, physical science, computer science or mathematics, from an accredited institution?");

if (candidateAnswer === "Yes") {
    console.log("Correct");

  } else if (candidateAnswer === "No") {
        console.log("Incorrect");

}

let questionThree = prompt("Do you have at least two years of related professional experience obtained after degree completion or at least 1,000 hours pilot-in-command time on a jet aircraft?")
if (candidateAnswer === "Yes") {
    console.log("Correct");

  } else if (candidateAnswer === "No") {
        console.log("Incorrect");

}

let questionFour = prompt("Are you able to pass the NASA long-duration flight astronaut physical?")
if (candidateAnswer === "Yes") {
    console.log("Correct");

  } else if (candidateAnswer === "No") {
        console.log("Incorrect");

}

let questionFive = prompt("And finally, what is NASA's motto?")
if (candidateAnswer === "For the benefit of all") {
    console.log("Correct");

  } else if (candidateAnswer === "") {
        console.log("Incorrect");

}
    
    
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