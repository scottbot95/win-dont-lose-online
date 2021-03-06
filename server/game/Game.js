const { Player, PlayerFlags } = require('./Player');
const {
  clearAllHandlers,
  mapEvtHandlers,
  registerAllHandlers,
  registerHandleToAll
} = require('./utils');

const GameStatus = {
  PENDING: 0,
  PREGAME: 1,
  PLAYING: 2,
  POSTGAME: 3
};
Object.freeze(GameStatus);

class Game {
  constructor() {
    this.players = {};
    this.drawPile = [];
    this.discardPile = [];
    this.activePlayer = 0;
    this.gameStatus = GameStatus.PENDING;
    this._emitters = [];

    this._bindHandler = this._bindHandler.bind(this);
    this._handlers = mapEvtHandlers(require('./handlers'), this._bindHandler);
  }

  _bindHandler(handler) {
    const bound = handler.bind(this);
    return bound;
  }

  _emitAll(event, ...data) {
    this._emitters.forEach(emt => emt.emit(event, ...data));
  }

  _onAll(event, handler) {
    // record handler for future emitters
    if (Array.isArray(this._handlers[event])) {
      this._handlers[event].push(handler);
    } else if (this._handlers[event]) {
      this._handlers[event] = [this._handlers[event], handler];
    }

    // add handler to existing emitters
    registerHandleToAll(this._emitters, event, handler);
  }

  _registerHandlers(emitter) {
    registerAllHandlers(emitter, this._handlers);
  }

  _unregisterHandlers(emitter) {
    clearAllHandlers(emitter, this._handlers);
  }

  addEmitter(emitter) {
    this._emitters.push(emitter);
    this._registerHandlers(emitter);
    if (this._handlers.connect) {
      this._handlers.connect(emitter);
    }
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

  addPlayer(name, sessionId) {
    let player;
    if (this.players[sessionId]) {
      console.warn('Overwriting player with duplicate id');
      player = this.players[sessionId];
      player.name = name;
    } else {
      player = new Player(name);
      if (Object.keys(this.players).length === 0) player.isVIP = true;
      this.players[sessionId] = player;
    }

    return player;
  }

  startGame(deck) {
    this.drawPile = deck;
    this.gameStatus = GameStatus.PLAYING;
    this._emitAll('startGame', deck);
    for (let i = 0; i < 3; i++) {
      for (const sessionId in this.players) {
        if (!this.players.hasOwnProperty(sessionId)) continue;
        const player = this.players[sessionId];
        const card = this.drawPile[0];
        this.drawPile = this.drawPile.slice(1);
        this._emitAll('drawCard', { playerId: player.id, card });
      }
    }
  }
}

module.exports = Game;
