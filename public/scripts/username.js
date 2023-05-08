// const socket = io();
// const form = document.getElementById('chat-form');
// const messages = document.getElementById('messages');
// const input = document.getElementById('chat-input');
// const usernameForm = document.getElementById('usernameForm');
// const usernameInput = document.getElementById('usernameInput');
// const createUserBtn = document.getElementById('create-user-btn');
// const chatContainer = document.querySelector('.chatsystem');


// usernameForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let username = usernameInput.value;
//     if (username.length > 0) {
//         // Emit to the server the new user
//         socket.emit('new user', username);
//         usernameForm.remove();
//         chatContainer.style.display = 'block';
//     }
// });


// form.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (input.value) {
//         socket.emit('message', input.value);
//         input.value = '';
//     }
// });

// socket.on('message', (msg) => {
//     var item = document.createElement('li');
//     item.textContent = msg;
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
// });



// function addMessage(message) {
//     messages.appendChild(Object.assign(document.createElement('li'), {
//         textContent: message
//     }))
//     messages.scrollTop = messages.scrollHeight
// }


const socket = io();
const form = document.getElementById('chat-form');
const messages = document.getElementById('messages');
const input = document.getElementById('chat-input');
const usernameForm = document.getElementById('usernameForm');
const usernameInput = document.getElementById('usernameInput');
const createUserBtn = document.getElementById('create-user-btn');
const chatContainer = document.querySelector('.chatsystem');

usernameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let username = usernameInput.value.trim();
  if (username.length > 0) {
    // Emit to the server the new user
    socket.emit('new user', username);
    usernameForm.remove();
    chatContainer.style.display = 'block';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value.trim()) {
    socket.emit('message', input.value);
    input.value = '';
  }
});

socket.on('message', (msg) => {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on('connect', () => {
  console.log('Connected to the server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});

// Additional code to handle other events or functionalities
