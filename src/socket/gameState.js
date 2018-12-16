import socket from './socket';
import { store } from '../redux';
import { startGame } from '../redux/gameState';

socket.on('startGame', cards => {
  store.dispatch(startGame(cards));
});
