const { Player, PlayerFlags } = require('./Player');

const GameStatus = {
  PENDING: 0,
  PREGAME: 1,
  PLAYING: 2,
  POSTGAME: 3
};
Object.freeze(GameStatus);

class Game {
  constructor() {
    this.players = [];
    this.drawPile = [];
    this.discardPile = [];
    this.activePlayer = 0;
    this.gameStatus = GameStatus.PENDING;
    this._emitters = [];
  }

  _emitAll(event, ...data) {
    this._emitters.forEach(emt => emt.emit(event, ...data));
  }

  _registerHandlers(emitter) {}

  _unregisterHandlers(emitter) {}

  addEmitter(emitter) {
    this._emitters.push(emitter);
    this._registerHandlers(emitter);
  }

  removeEmitter(emitter) {
    const index = this._emitters.findIndex(emt => emt === emitter);
    if (index === -1) {
      console.warn('Attempted to remove unregistered emitter');
      return;
    }
    this._emitters.splice(index, 1);
    this._unregisterHandlers(emitter);
  }

  addPlayer(name) {
    const newPlayer = new Player(name);
    this.players.push(newPlayer);
  }

  startGame(deck) {
    this.drawPile = deck;
    this.players.forEach(plyr => {
      const card = this.drawPile[0];
      this.drawPile = this.drawPile.slice(1);
      this._emitAll('addCard', { playerId: plyr.id, card });
    });
    this.gameStatus = GameStatus.PLAYING;
    this._emitAll('startGame');
  }
}

const game = new Game();

module.exports = game;
