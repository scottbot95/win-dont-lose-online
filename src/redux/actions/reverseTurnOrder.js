import { REVERSE_TURN_ORDER } from '../types';

export const reverseTurnOrder = () => ({ type: REVERSE_TURN_ORDER });

export const reducer = (state, action) => {
  switch (action.type) {
    case REVERSE_TURN_ORDER:
      return { ...state, turnReversed: !state.turnReversed };

    default:
      return state;
  }
};
