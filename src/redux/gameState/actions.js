import {
  REVERSE_TURN_ORDER,
  END_GAME,
  SET_ACTIVE_PLAYER,
  START_GAME
} from './constants';

export const reverseTurnOrder = () => ({ type: REVERSE_TURN_ORDER });

export const endGame = () => ({ type: END_GAME });

export const endTurn = () => dispatch => {};

export const startGame = cards => ({
  type: START_GAME,
  cards
});
