const express = require('express');
const app = express();
const http = require('http').createServer(app)
const io = require("socket.io")(http)
const path = require("path")
const port = process.env.PORT || 4242


//server client files
app.use(express.static(path.resolve('public')));

//set view engine 
app.set("views", path.join(__dirname, "views"))

app.set("view engine", "ejs")

//Routing file 

let appRoutes = require("./routes/route")
app.use('/', appRoutes)

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (message) => {
    io.emit("message", message);
  });
  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});


http.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
});


