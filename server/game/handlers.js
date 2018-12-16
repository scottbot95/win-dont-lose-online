const io = require('../socket/io');

module.exports = {
  newPlayer: function(socket, name) {
    const player = this.addPlayer(name, socket.request.session.id);
    io.emit('newPlayer', player);
    socket.emit('setMe', player);
  },
  connect: function(socket) {
    const players = {};
    let socketPlayer;
    for (const sessionId of Object.keys(this.players)) {
      const elem = this.players[sessionId];
      players[elem.id] = elem;
      if (socket.request.session.id === sessionId) socketPlayer = elem;
    }
    socket.emit('loadPlayers', players);
    if (socketPlayer) socket.emit('setMe', socketPlayer);
  },
  startGame: function(socket, cards) {
    if (this.players[socket.request.session.id].isVIP) {
      console.log('Vip Requested Game start. Starting Game');
      this.startGame(cards);
    } else {
      console.warn('Non VIP requested game start. Ignoring...');
    }
  }
};
