/* eslint-disable no-case-declarations */
import initialState from './initialState';
import {
  END_GAME,
  REVERSE_TURN_ORDER,
  START_GAME,
  GameStateEnum
} from './constants';
import { RESET } from '../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      // return { ...state, flags: GameStateEnum.PLAYING };
      console.log('STARTING GAME (not really....)');
      return state;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
