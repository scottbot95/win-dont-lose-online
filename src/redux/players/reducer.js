/* eslint-disable no-case-declarations */
import initialState from './initialState';
import {
  ADD_PLAYER,
  PlayerStatus,
  ADD_CARD_TO_HAND,
  ADD_KEEPER,
  GOT_PLAYERS_FROM_SERVER
} from './constants';
import { RESET } from '../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      if (state[action.player.id])
        console.warn('Overwrting existing player with duplicate id');
      return { ...state, [action.player.id]: action.player };
    case GOT_PLAYERS_FROM_SERVER:
      return action.players;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
