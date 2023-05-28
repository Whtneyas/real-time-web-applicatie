


# General Knowledge Quiz 
<img width="911" alt="image" src="https://github.com/Whtneyas/real-time-web-applicatie/assets/90154152/c2c6fe17-ff54-42db-8704-99452d00fb7e">


## Table of content
- [General Knowledge Quiz](#general-knowledge-quiz)
  * [Table of content](#table-of-content)
  * [Course](#course)
  * [Features i would like to use](#features-i-would-like-to-use)
    + [Must have](#must-have)
    + [Should have](#should-have)
  * [Installation](#installation)
    + [Install dependencies](#install-dependencies)
    + [Start server](#start-server)
    + [Express server](#express-server)
  * [Socket.io](#socketio)
    + [Nodemon](#nodemon)
    + [EJS](#ejs)
  * [Proof of concept](#proof-of-concept)
  * [Concept 1 - Guess the lyrics](#concept-1---guess-the-lyrics)
    + [Features](#features)
  * [Concept 2 - Quiz Geography](#concept-2---quiz-geography)
  * [Concept 3 - Scribbl game](#concept-3---scribbl-game)
  * [Chosen Concept - Quiz app](#chosen-concept---quiz-app)
    + [Features](#features-1)
  * [API - Trivia api](#api---trivia-api)
    + [Fetching trivia Api](#fetching-trivia-api)
  * [Usage](#usage)
  * [Realtime events used](#realtime-events-used)
  * [Data life circle](#data-life-circle)
  * [Data modeling](#data-modeling)
  * [Designs in figma](#designs-in-figma)





## Course

For this course we have build a chat system which is also a real time web app. This course will help us to learn techniques to set up an open connection between the client and the srever. This will enable us to send dat in real time both ways at the same time. 


## Features i would like to use 
 i am going to use the Moscow method . The moscow method is a techniyue used to categorize requiremts or features into four catergproes. We have the must - haves, should - haves, Could-haves, wont-haves. 
 Right now i want to focus on the first 3 excluding the wont-have. 
 
### Must have 
- Chat with multiple users
- Receive and send real time data. 
- Display of usernames 
- When user leave the chat 
- Display Quiz question
- Display multiple question 
-

### Should have 
  - show when user is online 
  - Show when user is offline 
  - Show time when chat is sent 
  - Score board 
  - See the time a message is sent 
  - Display when user is typing 
  
 ## Installation
 The installation of this project is very easy. In this part you can read how to install this project. Just follow the steps below.

 ###What you need to install for this project:

  - Node.js
  - NPM
  - Express
  - Socket.io
  -  EJS
  - Nodemon

For deployment **Railway** was used and the main one. But Adaptable was also used for backup.

Clone repository
Git clone https://github.com/RainbowJM/real-time-web

### Install dependencies
To install the dependencies you have to run the following command in your terminal:  npm install node-js npm install express npm install socket.io npm install ejs npm install nodemon npm install supabase

### Start server
npm run dev

### Express server
When you have installed the Express dependencies you can start using it in the project.

The code below is the basic code to start using express in your project. This will be in the app.js file.

const express = require('express')
const app = express()
const port = process.env.PORT || 4242;

app.use(express.static(path.resolve('public')));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

http.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
});

## Socket.io
When you have installed the Socket.io dependencies you can start using it in the project.

The code below is the basic code to start using socket.io in your project. This will be in the app.js file.

`const io = require('socket.io')(http);
const http = require('http').createServer(app);

io.on('connection', (socket) => {
	console.log('a user connected');
});`

### Nodemon
When you have installed the Nodemon dependencies you can start using it in the project.

The code below is the basic code to start using nodemon in your project. This will be in the package.json file.

"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},

### EJS
When you have installed the EJS dependencies you can start using it in the project.

The code below is the basic code to start using EJS in your project. This will be in the app.js file.

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
Supabase
When you have installed the Supabase dependencies you can start using it in the project.




## Proof of concept 

 Proof of concept is a test that is done to see if an idea, technology or product can work the way it is intended. It involves creating a prototype or model that is tested to determine if it meets the desired objectives before investing further resources into its development.
I have three concepts in mind, and I will choose one out of the three to work with further.

## Concept 1 - Guess the lyrics
My first concept is tO guess the lyrics concept. i think this idea or design already exist. With this guess de lyrics game. Multiple users have to play to make it more fun. The user first log in with his or her name and waits still other players join to start. The user can also play it individual if there is no one joing the game. 

###  Features 
- A logging in with user name 
- Users can see when other users are online;
- Users  can see other user when typing 
- Users can see when a user is typing. 
- User can also see the time of the chat
- Scores will be displayed . 


## Concept 2 - Quiz Geography 

The second concept is a geographical quiz game whereby the user guesses the answer by choosing from multiple answers. First of all the user would have to log in with his or her username to join the quiz.After finishing the quiz the user will see his or her scores on a board 



## Concept 3 - Scribbl game 
My last concept was to create a scribbr game where user can guess a word by drawings of others and also create their own scribble game.



## Chosen Concept - General knowledge Quiz app 


My final choice for the project is to develop a comprehensive general knowledge quiz application. The application will provide users with the ability to create accounts and log in using their usernames. Once logged in, users will have the opportunity to participate in interactive quizzes while simultaneously engaging in real-time chat conversations.

The quiz functionality will be designed to present questions in a multiple-choice format, offering users a range of options to choose from. Upon selecting an answer, the application will promptly provide immediate feedback, informing the user whether their response was correct or incorrect. This instant feedback mechanism aims to enhance the user experience and facilitate a sense of engagement and learning.

In addition to the quiz component, the application will feature a chat system that allows users to communicate with each other in real-time. This chat functionality will enable users to discuss quiz questions, share insights, and interact with fellow participants. By combining the quiz and chat features, the application will create a dynamic and collaborative environment where users can test their knowledge, learn from one another, and foster a sense of community.

With this gener

<img width="268" alt="image" src="https://user-images.githubusercontent.com/90154152/234077983-1d02d34d-a577-4b95-842a-d51580937a23.png">



### Features 

- Login with username 
- User should be able to see other users when online of offline
- User should be able to upload foto's from the chat room 
- User should be able to see when another user is typing. 
- User should see the time a message was sent. 
- User should able to see other participants 
- User should able to participate in a quiz. 
- User should be able to participate in a group chat
- See overview of all participants 


## API - Trivia api 
Link: https://opentdb.com/api_config.php

In order to implement various quiz topics within my project, I plan on utilizing Trivia API, a website that allows you to generate an api based on a quiz topic . Because there wasn't much time on my side so i had to choose one topic to work on. SO i chose the general knowledge quiz. 

### Fetching trivia Api 

The  code below  fetches trivia general knowledge  questions from an API using the axios library. It then processes the response to extract the questions, correct answers, and choices. The first question is sent to a connected client through a socket connection. The current question index and all the questions are stored in the socket object. If there is an error, it logs an error message.

<img width="437" alt="image" src="https://github.com/Whtneyas/real-time-web-applicatie/assets/90154152/d3145b93-6e0f-4cf7-9be6-fe7af574fc45">

## Usage 

 * Log in by inputting your username 
  <img width="896" alt="image" src="https://github.com/Whtneyas/real-time-web-applicatie/assets/90154152/3506d035-19be-423f-9d81-77bf7a6a955c">
  
 * Chat with users in the chat 
 <img width="857" alt="image" src="https://github.com/Whtneyas/real-time-web-applicatie/assets/90154152/10a7ec0e-3603-42ff-b9b1-a344fa044aa5">
 
 * Play quiz 
 <img width="634" alt="image" src="https://github.com/Whtneyas/real-time-web-applicatie/assets/90154152/11f469ab-d743-466b-bb14-9b957dfa883e">


 * Display correct and wrong answers
<img width="902" alt="image" src="https://github.com/Whtneyas/real-time-web-applicatie/assets/90154152/9b64ab94-d05f-4421-ba31-2c5294590c1a">




  





## Realtime events used
- connection: This event is used to connect the client to the server.
- disconnect: This event is used to disconnect the client from the server.
- message: This event is used to send a message from the client to the server.
- answer: This event is used to send an answer from the client to the server.
- question: This event is for receiving questions from the server.
- history: This event is used to send the history of the chat from the server to the client.
- typing: This event is used to send a indicator that a user is typing.
- wrong answer: This event is used when the answer is wrong.
- data: This event is used to send the data of the game to the client.
- user: This event is used to send the user data to the server.
- users: This event is used to send the users data to the client.
- time : This event shows the time the message is sent from all users.
- disconnected: This event checks if the user is disconnected from the server. If so it give a notification that the user left in the chat.
- user-joined: This event is used when the the user joins the chat 
- user-left: This event is used when the user leaves the chat.
- quizEnd: This event is use when thee user come to the end of the game 
- nextquestion: This event is triggered when the client request the next question in the quiz.


## Data life circle 


## Data modeling 


<img width="521" alt="image" src="https://user-images.githubusercontent.com/90154152/234083042-1bec3664-1f6a-4212-81ee-af54c950dee9.png">



## Designs in figma 
To get a view of how the application will look. I made designs in figma so that when i start coding i won't have t think of the color i will be using or how it should look like. So i thought of making my designs reading before i start coding. 
<img width="408" alt="image" src="https://user-images.githubusercontent.com/90154152/235462118-395ff86e-c10d-4c0e-b7c0-334c542e5a4d.png">






















