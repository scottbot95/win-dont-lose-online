/* eslint-disable no-case-declarations */
import initialState from './initialState';
import { ADD_PLAYER, PlayerStatus } from './constants';
import { RESET } from '../constants';

let nextId = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      if (state.find(p => p.name === action.name))
        throw new Error('Cannot have duplicate named players');
      const player = {
        name: action.name,
        hand: [],
        keepers: [],
        status: PlayerStatus.PLAYING,
        id: nextId++
      };
      return [...state, player];
    case RESET:
      nextId = 0;
      return initialState;
    default:
      return state;
  }
};

export default reducer;
