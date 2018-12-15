/* eslint-disable no-case-declarations */
import initialState from './initialState';
import { END_GAME, REVERSE_TURN_ORDER, START_GAME } from './constants';
import { RESET } from '../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
