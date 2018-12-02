import { ADD_PLAYER } from '../types';
import { Player } from '../../game';

export const addPlayer = player => {
  if (!(player instanceof Player))
    throw new Error('player must be an instance of Player class');
  return {
    type: ADD_PLAYER,
    player
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return { ...state, players: [...state.players, action.player] };
    default:
      return state;
  }
};
