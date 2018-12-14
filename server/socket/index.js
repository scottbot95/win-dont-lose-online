const game = require('../game');

module.exports = io => {
  io.on('connection', socket => {
    console.log(socket.id, ' has made a connection');
    game.addEmitter(socket);
  });
};
