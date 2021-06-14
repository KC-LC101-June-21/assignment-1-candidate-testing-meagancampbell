const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let candidateAnswer;
let candidateAnswers;
let question;
let correctAnswer;
let correctAnswers;
let questions;
let answer1 = 'a' || 'Sally Ride';
let answer2 = 'True';
let answer3 = 'b' || 40;
let answer4 = 'b' || 'trajectory' || 'Trajectory';
let answer5 = 'c';

candidateName = input.question('Enter your name: ');
console.log('Hello Astronaut Candidate ' + candidateName + '\n');

question1 = input.question('1. Who was the first American woman in space?' + '\n' + '   a: Sally Ride' + '\n'+ '   b: Christa McAuliffe' + '\n' + '   c: Valentina Tereshkova'+ '\n'); 


if (question1 === answer1) {
   console.log('Correct.');
} else {
   console.log('Wrong.' + ' The correct answer was Sally Ride.' + '\n');
}

question2 = input.question('2. True or false: 5 kilometer == 5000 meters?' + '\n' + '   True' + '\n'+ '   False' + '\n' ); 

if (question2 != answer2 ) {
   console.log('Wrong.' + ' The correct answer was True.'+ '\n');
} else {
   console.log("Correct." + '\n');
}

question3 = input.question('3. (5 + 3)/2 * 10 = ?)' + '\n' + '   a: 42' + '\n' + '   b: 40' + '\n' + '   c: 28' + '\n');

if (question3 === answer3) {
   console.log('Correct.' + '\n');
} else {
   console.log('Wrong.' + ' The correct answer was 40.' + '\n'+ '\n');
}

// question4 = input.question('4. Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2?' + '\n' + 'a:   Orbit' + '\n'+ 'b:   Trajectory' + 'c:45' + '\n' ); 

// if (question4 === answer4 ) {
//    console.log('wrong' + ' the correct answer was Trajectory'+ '\n');
//  } else {
//     console.log("correct" + '\n');
// }

question5 = input.question('What is the minimum crew size for the ISS?' + '\n' + '   a: 6' + '\n' + '   b: 4' + '\n' + '   c: 3' + '\n');

if (question5 === answer5) {
   console.log('Correct.' + '\n');
} else {
   console.log('Wrong.' + ' The correct answer was c: 3' + '\n'+ '\n');
}

// let queston1 = '1. Who was the first American woman in space?' + '\n' ;
// let question2 = 'True or false: 5 kilometer == 5000 meters?'+ '\n';
// let question3 = '(5 + 3)/2 * 10 = ?' + '\n';
// let question4 = 'Given the array [8, Orbit, Trajectory, 45], what entry is at index 2?' + '\n';
// let question5 = 'What is the minimum crew size for the ISS?'+ '\n';
// let questionsArr = ['question1', 'question2', 'question3', 'question4', 'question5' ];
// let correctAnswersArr = ['Sally Ride', 'True', '40','Trajectory', '3' ];
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