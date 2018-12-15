module.exports = {
  newPlayer: function(socket, name) {
    const player = this.addPlayer(name, socket.request.session.id);
    socket.emit('newPlayer', player);
  },
  connect: function() {
    console.log('Client connected');
  }
};
