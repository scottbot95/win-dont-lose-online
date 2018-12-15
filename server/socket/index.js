const io = require('./io');
const game = require('../game');

io.on('connection', socket => {
  console.log(socket.id, ' has made a connection');
  game.addEmitter(socket);
});
