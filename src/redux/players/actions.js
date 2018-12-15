import { ADD_PLAYER, ADD_CARD_TO_HAND, ADD_KEEPER } from './constants';

export const addPlayer = name => ({
  type: ADD_PLAYER,
  name
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

export const findIndexById = (players, id) =>
  players.findIndex(p => p.id === id);

export const findPlayerById = (players, id) => players.find(p => p.id === id);
