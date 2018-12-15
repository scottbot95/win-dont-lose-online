import socket from './socket';
import { store } from '../redux';
import { addPlayer } from '../redux/players/actions';

socket.on('newPlayer', player => {
  console.log('Adding player to redux store');
  store.dispatch(addPlayer(player));
});
