import socket from '../../socket';

import {
  REVERSE_TURN_ORDER,
  END_GAME,
  SET_ACTIVE_PLAYER,
  START_GAME
} from './constants';
import { setDrawPile } from '../cards/actions';

export const reverseTurnOrder = () => ({ type: REVERSE_TURN_ORDER });

export const endGame = () => ({ type: END_GAME });

export const endTurn = () => dispatch => {};

export const startGame = () => ({
  type: START_GAME
});

export const setActivePlayer = id => ({
  type: SET_ACTIVE_PLAYER,
  id
});

export const triggerGameStart = cards => dispatch => {
  dispatch(startGame());
  dispatch(setDrawPile(cards));
};

export const sendStartGame = cards => () => {
  socket.emit('startGame', cards);
};
