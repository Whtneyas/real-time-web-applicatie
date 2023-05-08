var socket = io();

var questionElement = document.getElementById('question');
var choicesElement = document.getElementById('choices');
var nextButton = document.getElementById('next-btn');

console.log(nextButton)

var currentQuestion = 0;
var score = 0;
var questions = [];

nextButton.addEventListener('click', loadNextQuestion);

socket.on('connect', () => {
  socket.emit('requestQuizQuestions');
});

socket.on('quizQuestions', (quizData) => {
  questions = quizData.results;
  showQuestion(questions[currentQuestion]);
});

socket.on('question', (questionData) => {
  showQuestion(questionData);
});

socket.on('result', (result) => {
  // Handle the result of the user's answer (e.g., display correct/incorrect feedback)
  // You can update the UI or perform any necessary actions based on the result
});

socket.on('quizEnd', (scoreData) => {
  // Handle the end of the quiz (e.g., display the final score)
  // You can update the UI or perform any necessary actions based on the final score
});

function loadNextQuestion(event) {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(questions[currentQuestion]);
  } else {
    socket.emit('quizEnd', score);
  }
}

function showQuestion(questionData) {
  // Update the UI to display the current question and choices
  // You can modify this function to match your HTML structure and styling
}

// Handle the user's answer selection
// You need to add event listeners to the choice buttons and emit the 'answer' event with the chosen answer
// When the user clicks on a choice button, call the following function:
function selectAnswer(choice) {
  socket.emit('answer', choice);
}


// function showQuestion(questionData) {
//   var questionElement = document.getElementById('question');
//   var choicesElement = document.getElementById('choices');
//   var nextButton = document.getElementById('next-btn');

//  console.log('script')

//   questionElement.textContent = questionData.question;

//   // Clear previous choices
//   choicesElement.innerHTML = '';

//   // Create choice elements and append them to the choices element
//   questionData.choices.forEach((choice) => {
//     var li = document.createElement('li');
//     var label = document.createElement('label');
//     var input = document.createElement('input');
//     input.type = 'radio';
//     input.name = 'choice';
//     input.value = choice;
//     label.appendChild(input);
//     label.appendChild(document.createTextNode(choice));
//     li.appendChild(label);
//     choicesElement.appendChild(li);
//   });

//   // Enable or disable the next button based on the user's choice
//   nextButton.disabled = true;

//   // Add event listener to the choices to enable the next button when a choice is selected
//   var choiceInputs = document.querySelectorAll('input[name="choice"]');
//   choiceInputs.forEach((input) => {
//     input.addEventListener('change', () => {
//       nextButton.disabled = false;
//     });
//   });
// }
