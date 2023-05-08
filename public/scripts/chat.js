var socket = io();
var form = document.getElementById('chat-form');
var messages = document.getElementById('messages');
var input = document.getElementById('chat-input');


console.log("hello world")

form.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value) {
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



function addMessage(message) {
    messages.appendChild(Object.assign(document.createElement('li'), {
        textContent: message
    }))
    messages.scrollTop = messages.scrollHeight
}




