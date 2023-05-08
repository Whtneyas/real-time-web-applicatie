const socket = io();

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const port = process.env.PORT || 4242;

app.use(express.static(path.resolve('public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let appRoutes = require('./routes/route');
app.use('/', appRoutes);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('new user', (username) => {
    console.log(`New user joined: ${username}`);
  });

  socket.on('message', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
