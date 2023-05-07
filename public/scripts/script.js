var socket = io();
let form = document.getElementById('chat-form')
let messages = document.querySelector('chat-messages');
let input = document.getElementById('chat-input')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (input.value) {
        socket.emit('message', input.value)
        input.value = ''
    }
});



function addMessage(message) {
    messages.appendChild(Object.assign(document.createElement('li'), {
        textContent: message
    }))
    messages.scrollTop = messages.scrollHeight
}

