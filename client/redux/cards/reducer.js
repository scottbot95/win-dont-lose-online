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
      return { ...state, drawPile: state.drawPile.slice(1) };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
