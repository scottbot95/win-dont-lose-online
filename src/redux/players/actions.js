import { ADD_PLAYER, ADD_CARD_TO_HAND, ADD_KEEPER } from './constants';

export const addPlayer = player => ({
  type: ADD_PLAYER,
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
