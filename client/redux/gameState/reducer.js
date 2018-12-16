/* eslint-disable no-case-declarations */
import initialState from './initialState';
import {
  END_GAME,
  REVERSE_TURN_ORDER,
  START_GAME,
  GameStateEnum
} from './constants';
import { RESET } from '../constants';
import { SET_ACTIVE_PLAYER } from './constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, flags: GameStateEnum.PLAYING };
    case SET_ACTIVE_PLAYER:
      return { ...state, activePlayerId: action.id };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
