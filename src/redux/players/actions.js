import socket from '../../socket';

import {
  ADD_PLAYER,
  ADD_CARD_TO_HAND,
  ADD_KEEPER,
  GOT_PLAYERS_FROM_SERVER,
  SET_ME
} from './constants';

export const addPlayer = player => ({
  type: ADD_PLAYER,
  player
});

export const gotPlayersFromServer = players => ({
  type: GOT_PLAYERS_FROM_SERVER,
  players
});

export const changeName = name => () => {
  socket.emit('newPlayer', name);
};

export const setMe = player => ({
  type: SET_ME,
  player
});

export const addCardToHand = (playerId, card) => ({
  type: ADD_CARD_TO_HAND,
  card,
  playerId
});

export const addKeeper = (playerId, card) => ({
  type: ADD_KEEPER,
  card,
  playerId
});
