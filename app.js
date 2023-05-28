const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const axios = require('axios');

const port = process.env.PORT || 4242;

app.use(express.static(path.resolve('public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let appRoutes = require('./routes/route');
app.use('/', appRoutes);

const API_URL = 'https://opentdb.com/api.php?amount=15&category=9&type=multiple';
let chatHistory = []; // Array to store chat history

io.on('connection', (socket) => {
  socket.on('new user', (username) => {
    console.log(`New user joined: ${username}`);
    socket.username = username; // Save the username in the socket object
    io.emit('userJoined', username); // Emit the 'userJoined' event to all connected clients

    // Send chat history to the connected client
    socket.emit('history', chatHistory);

    socket.on('message', (message) => {
      const messageWithTimestamp = {
        ...message,
        timestamp: Date.now() // Send the timestamp as milliseconds since January 1, 1970
      };

      // Add the new message to the chat history
      chatHistory.push(messageWithTimestamp);

      // Broadcast the message to all connected clients
      io.emit('message', messageWithTimestamp);
    });

    // Fetch questions from the trivia API
    axios.get(API_URL)
      .then(response => {
        console.log(response);
        const questions = response.data.results.map(result => {
          const question = result.question;
          const correctAnswer = result.correct_answer;
          const choices = [...result.incorrect_answers, correctAnswer];
          return {
            question,
            correct_answer: correctAnswer,
            choices: shuffleArray(choices)
          };
        });
        socket.emit('question', questions[0]); // Send the first question to the connected client
        socket.currentQuestionIndex = 0; // Store the current question index in the socket object
        socket.questions = questions; // Store the questions in the socket object
      })
      .catch(error => {
        console.log('Error fetching questions from the API:', error);
      });

    // Helper function to shuffle an array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    socket.on('answer', (data) => {
      const question = socket.questions[socket.currentQuestionIndex];
      const userAnswer = String(data.answer).trim().toLowerCase();
      const correctAnswer = String(question.correct_answer).trim().toLowerCase();
      const isCorrect = userAnswer === correctAnswer;
      socket.emit('answerResult', isCorrect);
    });

    socket.on('nextQuestion', () => {
      socket.currentQuestionIndex++;
      const question = socket.questions[socket.currentQuestionIndex];
      if (question) {
        socket.emit('question', question);
      } else {
        // No more questions, end the quiz
        socket.emit('quizEnd');
      }
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
      io.emit('userLeft', socket.username)
    });
  });
});

http.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});



