const game = require('./index');

module.exports = {
  newPlayer: (name, ack) => {
    const player = game.addPlayer(name);
    ack(player);
  }
};
