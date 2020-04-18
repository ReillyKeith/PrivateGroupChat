const https = require('https');
const express = require('express');
const socketio = require('socket.io');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const app = express();
const server = https.createServer(app);
const io = socketio(server);

// Count users active
var userCounter=0;

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) {
      return callback(error);
    }

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    // add counter for all users
    userCounter++;

    callback();
  });


  socket.on('onlineUsers', function () {
    io.emit('connected_users', {
        total: userCounter
    });
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      // tell users when user leaves room
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
      // remove user when they disconnect
      userCounter--;
    }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));