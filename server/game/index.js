const Game = require('./Game');

// singleton for sharing data across modules
const game = new Game();

module.exports = game;
