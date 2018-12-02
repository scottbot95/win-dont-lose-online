import { RESET } from '../types';
import initialState from '../initialState';

export const resetState = () => ({ type: RESET });

export const reducer = (state, action) => {
  switch (action.type) {
    case RESET:
      return initialState;
    default:
      return state;
  }
};
