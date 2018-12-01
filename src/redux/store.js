/* eslint-disable no-case-declarations */
import { createStore, compose, applyMiddleware } from 'redux';

import { Player } from '../game';

// ACTION TYPES
const ADD_PLAYER = 'ADD_PLAYER';
const START_GAME = 'START_GAME';
const DRAW_CARD = 'DRAW_CARD';
const PLAY_CARD = 'PLAY_CARD';
const DISCARD_CARD = 'DISCARD_CARD';
const END_TURN = 'END_TURN';
const END_GAME = 'END_GAME';

// ACTION CREATORS
export const addPlayer = player => {
  if (!(player instanceof Player))
    throw new Error('player must be an instance of Player class');
  return {
    type: ADD_PLAYER,
    player
  };
};

export const startGame = () => ({ type: START_GAME });

export const drawCard = () => ({ type: DRAW_CARD });

export const playCard = card => ({ type: PLAY_CARD, card });

export const discardCard = card => ({ type: DISCARD_CARD, card });

export const endTurn = () => ({ type: END_TURN });

export const endGame = () => ({ type: END_GAME });

// Enums

export const GameStateEnum = { PENDING: 1, PLAYING: 2, POSTGAME: 3 };
Object.freeze(GameStateEnum);

const initalState = {
  players: [],
  drawPile: [],
  discardPile: [],
  status: GameStateEnum.PENDING,
  turn: GameStateEnum.PENDING
};

// eslint-disable-next-line complexity
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return { ...state, players: [...state.players, action.player] };
    case START_GAME:
      if (state.players.length < 2)
        throw new Error('Cannot start game with less than two players.');
      return {
        ...state,
        status: GameStateEnum.PLAYING,
        turn: state.players[0].name
      };
    case DRAW_CARD:
    case PLAY_CARD:
    case DISCARD_CARD:
    case END_TURN:
      const playerIdx = state.players.findIndex(
        player => player.name === state.turn
      );
      return {
        ...state,
        turn: state.players[(playerIdx + 1) % state.players.length].name
      };
    case END_GAME:
      return { ...state, status: GameStateEnum.POSTGAME };
    default:
      return state;
  }
};

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  // composeEnhancers(applyMiddleware(/*...*/))
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
