/* eslint-disable no-case-declarations */
import { createStore, compose, applyMiddleware } from 'redux';

import { Player } from '../game';

// ACTION TYPES
const ADD_PLAYER = 'ADD_PLAYER';
const START_GAME = 'START_GAME';
const DRAW_CARD = 'DRAW_CARD';
const PLAY_CARD = 'PLAY_CARD';
const DISCARD_CARD = 'DISCARD_CARD';
const REVERSE_TURN_ORDER = 'REVERSE_TURN_ORDER';
const END_TURN = 'END_TURN';
const END_GAME = 'END_GAME';
const RESET = 'RESET';

// ACTION CREATORS
export const addPlayer = player => {
  if (!(player instanceof Player))
    throw new Error('player must be an instance of Player class');
  return {
    type: ADD_PLAYER,
    player
  };
};

export const startGame = deck => ({ type: START_GAME, deck });

export const drawCard = () => ({ type: DRAW_CARD });

export const playCard = (card, target) => ({ type: PLAY_CARD, card, target });

export const discardCard = card => ({ type: DISCARD_CARD, card });

export const reverseTurnOrder = () => ({ type: REVERSE_TURN_ORDER });

export const endTurn = () => ({ type: END_TURN });

export const endGame = () => ({ type: END_GAME });

export const resetState = () => ({ type: RESET });

// Enums

export const GameStateEnum = { PENDING: 1, PLAYING: 2, POSTGAME: 3 };
Object.freeze(GameStateEnum);

const initalState = {
  players: [],
  drawPile: [],
  discardPile: [],
  status: GameStateEnum.PENDING,
  turn: GameStateEnum.PENDING,
  turnReversed: false
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
        drawPile: [...action.deck],
        status: GameStateEnum.PLAYING,
        turn: state.players[0].name
      };
    case DRAW_CARD:
      return state;
    case PLAY_CARD:
      return state;
    case DISCARD_CARD:
      return state;
    case REVERSE_TURN_ORDER:
      return { ...state, turnReversed: !state.turnReversed };
    case END_TURN:
      const playerIdx = state.players.findIndex(
        player => player.name === state.turn
      );
      let nextIdx;
      if (state.turnReversed) {
        nextIdx =
          playerIdx !== 0 ? playerIdx - 1 : startGame.players.length - 1;
      } else {
        nextIdx = (playerIdx + 1) % state.players.length;
      }
      return {
        ...state,
        turn: state.players[nextIdx].name
      };
    case END_GAME:
      if (state.status !== GameStateEnum.PLAYING)
        throw new Error('status must be playing to end game');
      return { ...state, status: GameStateEnum.POSTGAME };
    case RESET:
      return initalState;
    default:
      return state;
  }
};

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducer,
//   // composeEnhancers(applyMiddleware(/*...*/))
//   window &&
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = createStore(reducer);

export default store;
