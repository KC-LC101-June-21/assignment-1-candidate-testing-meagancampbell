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

Who was the first American woman in space?	"Sally Ride"
True or false: 5 kilometer == 5000 meters?	"true"
(5 + 3)/2 * 10 = ?	"40"
Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?	"Trajectory"
What is the minimum crew size for the ISS?	"3"

let questions = [{ 
        question: 'Who was the first American woman in space?',
        answer: 'Sally Ride',
        affirm: 'Yay! You got it right!',
        rebuttal: 'Nope, you are definitely happy.'
    },
    {
        question: 'True or false: 5 kilometer == 5000 meters?',
        answer: 'True',
        affirm: 'Good job!',
        rebuttal: 'Not right.'
    },
        {
        question:'(5 + 3)/2 * 10 = ?',
        answer: '40',
        affirm: 'Good job!',
        rebuttal: 'Not right.'
    }];

for (var i = 0, l = questions.length; i < l; i++) {
    answer = prompt(questions[i].question);

    // I do not support manipulating a loop counter mid-loop, but it's for an example.
    if (answer !== questions[i].answer) {
        alert(questions[i].rebuttal);
        i--;
    } else {
        alert(questions[i].affirm);
    }
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

