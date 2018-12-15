module.exports = {
  newPlayer: function(name, ack) {
    console.log(arguments);
    const player = this.addPlayer(name);
    console.log(player);
    typeof ack === 'function' && ack(player);
  }
};
