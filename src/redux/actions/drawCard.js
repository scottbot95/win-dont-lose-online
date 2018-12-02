import { DRAW_CARD, GameStateEnum } from '../types';

export const drawCard = () => ({ type: DRAW_CARD });

export const reducer = (state, action) => {
  switch (action.type) {
    case DRAW_CARD:
      if (state.status !== GameStateEnum.PLAYING)
        throw new Error('drawCard can only be used during a game');
      return { ...state };
    default:
      return state;
  }
};
