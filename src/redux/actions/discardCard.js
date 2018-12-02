import { DISCARD_CARD } from '../types';

export const discardCard = card => ({ type: DISCARD_CARD, card });

export const reducer = (state, action) => {
  switch (action.type) {
    case DISCARD_CARD:
      throw new Error('Not implemented');
    default:
      return state;
  }
};
