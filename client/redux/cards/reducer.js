/* eslint-disable no-case-declarations */
import initialState from './initialState';
import {
  ADD_TO_DISCARD_PILE,
  ADD_TO_DRAW_PILE,
  DRAW_CARD,
  SET_DISCARD_PILE,
  SET_DRAW_PILE
} from './constants';
import { RESET } from '../constants';

const reducer = (state = initialState, action) => {
  let cardIdx;
  switch (action.type) {
    case SET_DRAW_PILE:
      return { ...state, drawPile: action.cards };
    case SET_DISCARD_PILE:
      return { ...state, discardPile: action.cards };
    case ADD_TO_DRAW_PILE:
      return { ...state, drawPile: [...state.drawPile, action.card] };
    case ADD_TO_DISCARD_PILE:
      return { ...state, discardPile: [action.card, ...state.discardPile] };
    case DRAW_CARD:
      cardIdx = state.drawPile.findIndex(card => card.id === action.card.id);
      if (cardIdx === -1) {
        console.warn('Attempted to draw card not in draw pile');
        return state;
      }
      return {
        ...state,
        drawPile: [
          ...state.drawPile.slice(0, cardIdx),
          ...state.drawPile.slice(cardIdx + 1)
        ]
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
