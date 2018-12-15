const io = require('../socket/io');

module.exports = {
  newPlayer: function(socket, name) {
    const player = this.addPlayer(name, socket.request.session.id);
    io.emit('newPlayer', player);
  },
  connect: function(socket) {
    const players = {};
    for (const key of Object.keys(this.players)) {
      const elem = this.players[key];
      players[elem.id] = elem;
    }
    socket.emit('loadPlayers', players);
  }
};
