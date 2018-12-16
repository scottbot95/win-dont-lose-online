import {
  SET_DRAW_PILE,
  SET_DISCARD_PILE,
  ADD_TO_DRAW_PILE,
  ADD_TO_DISCARD_PILE,
  DRAW_CARD
} from './constants';

import { addCardToHandFast } from '../players';
import { throttleAndQueueThunk } from '../utils';

export const setDrawPile = cards => ({
  type: SET_DRAW_PILE,
  cards
});

export const setDiscardPile = cards => ({
  type: SET_DISCARD_PILE,
  cards
});

export const addToDrawPile = card => ({
  type: ADD_TO_DRAW_PILE,
  card
});

export const addToDiscardPile = card => ({
  type: ADD_TO_DISCARD_PILE,
  card
});

export const drawCard = ({ playerId, card }) => (dispatch, getState) => {
  const state = getState();
  const topCard = state.cards.drawPile[0];
  card = card || topCard;
  dispatch({ type: DRAW_CARD, card });
  dispatch(addCardToHandFast(playerId, card));
};

export const drawCardSlow = throttleAndQueueThunk(drawCard, 1000);
