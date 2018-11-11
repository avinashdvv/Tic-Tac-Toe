const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
var path = require('path');
let rooms = 0;
const PORT = 5000;

app.use('/', express.static('./public'));

// app.get('/',(req, res) => {
//   res.sendFile('index.html', { "root": './public'});
// })

server.listen(PORT, () => {
  console.log(`Server is started at ${PORT}`);
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
  console.log('A user connected');

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});