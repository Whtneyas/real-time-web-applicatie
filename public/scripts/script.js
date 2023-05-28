const socket = io();

const form = document.getElementById('chat-form');
const messages = document.getElementById('messages');
const input = document.getElementById('chat-input');
const usernameForm = document.getElementById('usernameForm');
const usernameInput = document.getElementById('usernameInput');
const createUserBtn = document.getElementById('create-user-btn');
const chatContainer = document.querySelector('.chatsystem');
const typingIndicator = document.getElementById('typing-indicator');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const choicesList = document.getElementById('choices-list');
const nextQuestionBtn = document.getElementById('next-question-btn');

let username;
let isTyping = false;

let chatHistory = [];


// Event listener for submitting the username form
usernameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    username = usernameInput.value.trim();
    if (username.length > 0) {
        socket.emit('new user', username);
        usernameForm.remove();
        chatContainer.style.display = 'block';
        displaySystemMessage(`Welcome, ${username}!`);
    }
});

// Event listener for submitting the chat form
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.trim()) {
        const message = {
            username: username,
            content: input.value
        };
        socket.emit('message', message);
        input.value = '';
    }
});

// Event listener for input changes in the chat input field
input.addEventListener('input', () => {
    if (!isTyping) {
        isTyping = true;
        socket.emit('typing', true); // Emit 'typing' event to the server with value 'true'
        displayTypingMessage(username);
    }
});

// Event listener when chat input field loses focus
input.addEventListener('blur', () => {
    if (isTyping) {
        isTyping = false;
        socket.emit('typing', false); // Emit 'typing' event to the server with value 'false'
    }
});

// Event listener for receiving messages from the server
socket.on('message', (data) => {
    displayMessage(data.username, data.content, formatTimestamp(data.timestamp));

});

// Event listener for receiving quiz questions from the server
socket.on('question', (question) => {
    displayQuestion(question);
});

// Event listener for receiving quiz answer results from the server
socket.on('answerResult', (isCorrect) => {
    displayAnswerResult(isCorrect);
});

// Event listener for receiving quiz end event from the server
socket.on('quizEnd', () => {
    displaySystemMessage('The quiz has ended. Thank you for participating!');
    nextQuestionBtn.disabled = true; // Disable the next question button
});


// Event listener for receiving user joined event from the server
socket.on('userJoined', (username) => {
    displayUserJoinedMessage(username);
});


// Event listener for receiving user left event from the server
socket.on('userLeft', (username) => {
    displaySystemMessage(`${username} has left the chat.`, 'user-left-message');
});


socket.on('history', (history) => {
    chatHistory = history;
    history.forEach((message) => {
        displayMessage(message.username, message.content, message.timestamp);
    });
});


// Event listener for receiving typing status from other users
socket.on('typing', (isTyping) => {
    if (isTyping) {
        typingIndicator.textContent = 'Someone is typing...'; // Display typing indicator message
    } else {
        typingIndicator.textContent = ''; // Clear typing indicator message
    }
});





// Function to display a message when a new user joins
function displayUserJoinedMessage(username) {
    const item = document.createElement('li');
    item.innerHTML = `
        <span class="user-joined">${username} has joined the chat.</span>
       
    `;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
}




// Function to display messages in the chat window
function displayMessage(username, content, timestamp) {

    const message = {
        username: username,
        content: content,
        timestamp: timestamp
    };
    chatHistory.push(message);

    const item = document.createElement('li');
    item.innerHTML = `
        <div class = "chat-content">
            <span class="message-time">${timestamp}</span>
            <span class="message-username">${username}</span>
        </div>
        <div>
        <span class="message-content">${content}</span>
        </div>
    `;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
}

// Function to display system messages in the chat window
function displaySystemMessage(content, className) {
    const item = document.createElement('li');
    item.innerHTML = `
      <span class="system-message ${className}">${content}</span>
    `;

    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
}

// Function to display typing indicator message
function displayTypingMessage(username) {
    typingIndicator.textContent = `${username} is typing...`;
}

// Function to clear typing indicator message
function clearTypingMessage() {
    typingIndicator.textContent = '';
}

// ...

// ...
// Function to display the quiz question and choices
function displayQuestion(question) {
    questionText.textContent = question.question;

    // Clear the choices list
    choicesList.innerHTML = '';

    // Create a radio button group for the choices
    question.choices.forEach((choice) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'choice';
        input.value = choice; // Assign the choice value as the input value

        const span = document.createElement('span');
        span.textContent = choice;

        label.appendChild(input);
        label.appendChild(span);

        // Add an event listener to capture the selected choice
        input.addEventListener('change', () => {
            // Emit the selected choice to the server
            socket.emit('answer', {
                answer: input.value,
            });
        });

        choicesList.appendChild(label);
    });

    // Hide the next question button
    nextQuestionBtn.style.display = 'none';
}



// ...


// Function to display the result of the answer
function displayAnswerResult(isCorrect) {
    const resultText = isCorrect ? 'Correct answer!' : 'Wrong answer!';
    const resultClass = isCorrect ? 'correct-answer' : 'wrong-answer';

    // Add a class to the question text to indicate the result
    questionText.classList.add(resultClass);

    // Display the result message for a few seconds
    displaySystemMessage(resultText, resultClass);
    setTimeout(() => {
        // Remove the result class and clear the question text
        questionText.classList.remove(resultClass);
        questionText.textContent = '';

        // Show the next question button
        nextQuestionBtn.style.display = 'block';
    }, 2000);
}

// Event listener for the next question button
nextQuestionBtn.addEventListener('click', () => {
    // Emit the nextQuestion event to the server
    socket.emit('nextQuestion');
});