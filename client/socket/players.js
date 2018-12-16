import socket from './socket';
import { store } from '../redux';
import {
  addPlayer,
  gotPlayersFromServer,
  setMe
} from '../redux/players/actions';
import { drawCardSlow } from '../redux/cards';
import { findCardById } from '../game/cards';

socket.on('newPlayer', player => {
  console.log('Adding player to redux store');
  store.dispatch(addPlayer(player));
});

socket.on('loadPlayers', players => {
  console.log('LOADING PLAYERS', players);
  store.dispatch(gotPlayersFromServer(players));
});

socket.on('setMe', player => {
  console.log('Setting `me`');
  store.dispatch(setMe(player));
});

socket.on('drawCard', ({ playerId, card }) => {
  console.log(`Add ${card} to ${playerId}`);
  store.dispatch(drawCardSlow({ playerId, card: findCardById(card) }));
});
