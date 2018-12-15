import socket from './socket';
import { store } from '../redux';
import { addPlayer, gotPlayersFromServer } from '../redux/players/actions';

socket.on('newPlayer', player => {
  console.log('Adding player to redux store');
  store.dispatch(addPlayer(player));
});

socket.on('loadPlayers', players => {
  console.log('LOADING PLAYERS', players);
  store.dispatch(gotPlayersFromServer(players));
});
