
  var socket = io();

  socket.on('connect', function () {
    console.log('Connected to the server');

    // socket.emit('createEmail', {
    //   to: 'jen@yahoo.com',
    //   text: 'send nudes'
    // });

    socket.emit('createMessage', {
      from: 'foxise',
      text: 'hello froggster!'
    });

  });

  socket.on('disconnect', function () {
    console.log('Disconnected from the server');
  });

  // socket.on('newEmail', function(email) {
  //   console.log('New email', email);
  // });

  socket.on('newMessage', function(message) {
    console.log('New message', message);
  });
