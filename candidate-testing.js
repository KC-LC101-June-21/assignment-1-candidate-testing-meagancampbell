const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let question1 = ['1) Who was the first American woman in space?' + '\n'];
let question2 = ['2) True or false: 5 kilometer = 5000 meters?' + '\n'];
let question3 = ['3) (5 + 3)/2 * 10 =' + '\n'];
let question4 = ['4) Given the array [8,' + ' Orbit' + ' ,' + 'Trajectory' + ' ,' + '45] what entry is at index 2?' + '\n'];
let question5 = ['5) What is the minimum crew size for the ISS?' + '\n'];
let correctAnswer;
let candidateAnswer;
let questions = [question1, question2, question3, question4, question5];
let correctAnswers = ['sally ride', 'true', '40', 'trajectory', '3'];
let candidateAnswers = [];
let i = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.question('Candidate Name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 for (let i = 0; i < questions.length || i < 6;i++){
        candidateAnswer = (input.question(questions[i]).toLowerCase());
        candidateAnswers.push(candidateAnswer);
        console.log(candidateAnswers);
        console.log('Your Answer: ' + `${candidateAnswers}`);
        console.log('Correct Answer: ' + `${correctAnswers[i]}` + '\n');
        
    }


}

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
