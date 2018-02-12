const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
// console.log(__dirname + '/../public');
// console.log(publicPath);

var app = express();
var server = http.createServer(/*(req, res) => {}*/app); //because http is integrated with express
var io = socketIO(server);

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   // res.render()
// })

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up on port ${port}`);
});
