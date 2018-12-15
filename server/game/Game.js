const { Player, PlayerFlags } = require('./Player');

const GameStatus = {
  PENDING: 0,
  PREGAME: 1,
  PLAYING: 2,
  POSTGAME: 3
};
Object.freeze(GameStatus);

const mapEvtHandlers = (handlers, func) => {
  const newHandlers = {};
  const events = Object.keys(handlers);
  for (const evt of events) {
    const handlerOrArray = handlers[evt];
    if (Array.isArray(handlerOrArray)) {
      newHandlers[evt] = [];
      for (const handler of handlerOrArray) {
        newHandlers.push(func(handler));
      }
    } else if (handlerOrArray) {
      newHandlers[evt] = func(handlerOrArray);
    }
  }

  return newHandlers;
};

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
  forEachEvtHandler(handlers, (evt, handler) => {
    if (Array.isArray(emitters)) emitters.forEach(clearAll(evt, handler));
    else clearAll(evt, handler)(emitters);
  });
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
    const newPlayer = new Player(name);
    if (Object.keys(this.players).length === 0) newPlayer.isVIP = true;
    this.players[sessionId] = newPlayer;
    return newPlayer;
  }

  startGame(deck) {
    this.drawPile = deck;
    for (const player of this.players) {
      const card = this.drawPile[0];
      this.drawPile = this.drawPile.slice(1);
      this._emitAll('addCard', { playerId: player.id, card });
    }
    this.gameStatus = GameStatus.PLAYING;
    this._emitAll('startGame');
  }
}

module.exports = Game;
