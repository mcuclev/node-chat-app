const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
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

  socket.emit('newMessage', {
    rom: 'admin',
    text: 'welcome to the chat app',
    createdAt: new Date().getTime()
  });

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'did you hear that?'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));

  //   socket.broadcast.emit('newMessage', {
  //     from: newMessage.from,
  //     text: newMessage.text,
  //     createdAt: new Date().getTime()
  //   });
  // });



  // socket.emit('newEmail', {
  //   from: 'mike@lala.com',
  //   text: 'hey sup',
  //   createdAt: 2
  // });
  //
  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
});

server.listen(port, () => {
  console.log(`Started up on port ${port}`);
});
