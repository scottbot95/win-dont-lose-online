import { PLAY_CARD } from '../types';

export const playCard = (card, target) => ({ type: PLAY_CARD, card, target });

export const reducer = (state, action) => {
  switch (action.type) {
    case PLAY_CARD:
      throw new Error('Not implemented');
    default:
      return state;
  }
};
