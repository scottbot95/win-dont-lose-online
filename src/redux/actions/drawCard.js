import { DRAW_CARD } from '../types';

export const drawCard = () => ({ type: DRAW_CARD });

export const reducer = (state, action) => {
  switch (action.type) {
    case DRAW_CARD:
      return { ...state, players: [...state.players, action.player] };
    default:
      return state;
  }
};
