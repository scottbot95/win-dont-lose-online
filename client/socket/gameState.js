import socket from './socket';
import { store } from '../redux';
import { triggerGameStart } from '../redux/gameState';
import { findCardById } from '../game/cards';

socket.on('startGame', cardIds => {
  const cards = cardIds.map(findCardById);
  store.dispatch(triggerGameStart(cards));
});
