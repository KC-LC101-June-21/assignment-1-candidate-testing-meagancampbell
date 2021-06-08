const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;



function candidateTotal() {
    let question = questions[currentQuestion];
    let out = $('.output').value;
if (out == questions.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showSummary();
    } else {
        showQuestion();
    }

    $('.sub').click(function () {
        $('.output').val('');
    });
}

function showQuestion() {
    let question = questions[currentQuestion];
    $('.input').val(question.title);
}



candidateName = prompt("What is your name?");


let questions = [
    {
        title: "Are you a U.S. Citizen?",
        answer: "Yes"
    },

    {
        title: "Do you have a masters degree in a STEM field, including engineering, biological science, physical science, computer science or mathematics, from an accredited institution?",
        answer: "Yes"
    }

];




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