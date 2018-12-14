const { Player, PlayerFlags } = require('./Player');

const GameStatus = {
  PENDING: 0,
  PREGAME: 1,
  PLAYING: 2,
  POSTGAME: 3
};
Object.freeze(GameStatus);

const forEachEvtHandler = (handlers, func) => {
  const events = Object.keys(handlers);
  for (const evt of events) {
    const handlerOrArray = handlers[evt];
    if (Array.isArray(handlerOrArray)) {
      for (const handler of handlerOrArray) {
        func(evt, handler);
      }
    } else if (handlerOrArray) {
      func(evt, handlerOrArray);
    }
  }
};

const clearAllHandlers = (emitters, handlers) => {
  const clearAll = (evt, handler) => emtr => emtr.off(evt, handler);
  forEachEvtHandler(handlers, (evt, handler) =>
    emitters.forEach(clearAll(evt, handler))
  );
};

const registerAllHandlers = (emitter, handlers) => {
  forEachEvtHandler(handlers, (evt, handler) => emitter.on(evt, handler));
};

const registerHandleToAll = (emitters, event, handler) => {
  emitters.forEach(emtr => {
    emtr.on(event, handler);
  });
};

class Game {
  constructor() {
    this.players = [];
    this.drawPile = [];
    this.discardPile = [];
    this.activePlayer = 0;
    this.gameStatus = GameStatus.PENDING;
    this._emitters = [];
    this._handlers = {};
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
    if (this.players.length === 0) newPlayer.isVIP = true;
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
